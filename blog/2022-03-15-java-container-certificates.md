---
slug: java-container-certificates
title: How to make your certificates available inside your Java container
tags: [java, container, certificates]
---

This blog post takes you through different approaches to make your certificates available in your Java container running in a Kubernetes distribution. Going from the most static way to being able to dynamically change it during a _Deployment_ rollout.

## Import certificate through Dockerfile

One of the most direct ways to get your certificate into your container is add it to your Dockerfile. Lets imagine that you have a certificate `my-certificate.cer`. By copying it into your Docker container and importing it to the truststore during build time is going to make it permanent for the image container.

```Dockerfile
COPY my-certificate.cer $JAVA_HOME/jre/lib/security
RUN keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer
```

The above example assumes the following:

 - Your base image is Java based.
 - The default storepass is `changeit`. Change it if it is not.
 - `my-cert` is an example alias, use your own instead.

## ConfigMap with a local cacerts

In contrast to the method presented before, which requires you to build your image everytime you want to change or import new certificates. Having it mounted as a volume into your container makes swapping certificates more cloud friendly.

### Step 1 - Import certificate into truststore

Make a copy or use your local cacerts store as the holder of your certificate. Importing it to the trustore:

```bash
keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer
```

### Step 2 - Create _ConfigMap_

Assuming you already have your Java application running in your Kubernetes system, run:

```bash
export NAMESPACE=<Namespace where your app is running>
export NAME=cacerts
kubectl create configmap $NAME --from-file=$JAVA_HOME/jre/lib/security/cacerts -n $NAMESPACE
```

For simplicity, we're calling our _configMap_ __cacerts__, but it could be any other name, as long as it is unique inside `$NAMESPACE`.

### Step 2 - Mount _ConfigMap_ into __Deployment_

To mount configMap as a volume into your _Deployment_, create a volume entry referencing the configMap you've just created, then add another volumeMount entry to the Java application container. See example below:

```yaml
apiVersion: v1
kind: Deployment
metadata:
  name: example
spec:
  containers:
    - name: example
      image: example_repo/example:latest
      volumeMounts:
      - name: cacerts
        mountPath: /etc/pki/java/cacerts
        subPath: cacerts
  volumes:
    - name: cacerts
      configMap:
        name: cacerts
```
## ConfigMap with certificates and Init-Container

## Cluster Operator and Init-Container
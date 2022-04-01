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

### Step 3 - Mount _ConfigMap_ into _Deployment_

To mount cacerts configMap as a volume into your _Deployment_, create a volume entry referencing the configMap you've just created, then add another volumeMount entry to the Java application container. See example below:

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

You can either modify your yaml directly on the console or open a `vim` editor in your command line by running:

```bash
kubectl edit deployment/example - n $NAMESPACE
```
## ConfigMap with certificates and Init-Container

Importing a certificate into a truststore, creating a _ConfigMap_ and then mount it as a volume involves multiple manual steps which requires a set of specific tooling to be achieved, such as `keytool`, `kubectl` and possibly making changes directly in kubernetes console. Shoveling it all into your pipelines might not be as straight forward as it seems and ultimately not very kubebernetes native.

To overcome some of the issues mentioned above, we'll leverage [_initContainers_](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/), a first class kubernetes citizen, to do all the work for us and abstract the container image from everything else. Other benefits from this approach is the fact that every component of it becomes modular, making it plugable and reusable. And also, the original truststore is not overriden.

This time we start with a certificate, or an aggregate of certificates hosted in a _ConfigMap_. Using a similar command as before:

```bash
export NAMESPACE=<Namespace where your app is running>
export NAME=certs
kubectl create configmap $NAME --from-file=<your certificates file location> -n $NAMESPACE
```

```yaml
initContainers:
  - name: initContainer
    image: <a slim jdk image>
    command:
    - bash
    - -c
    - |
      keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer
    volumeMounts:
    - name: certs
      mountPath: /etc/pki/java/my-certificate.cer
      subPath: my-certificate.cer
  volumes:
    - name: certs
      configMap:
        name: certs
```

The idea is to share a volume between the main container and the _initContainer_ where the truststore should be placed for consumption and then import the certificate into truststore during pod start-up. This way, if certificates need to be changed or renewed, all we need to do is to update the _ConfigMap_.

Due to _initContainer_ being part of the _Deployment_ specification, it can be easily included in your helm charts without impacting your release workflow.

## Cluster Operator and Init-Container

Ideally, as a dev, managing or manipulating certificates shouldn't be part of our daily routine. If all of it could be abstracted and managed by the platform or infrastructure, you've made the day for your developer.

A step further into automating the previous method would be having the certificate created as a _ConfigMap_ for us.

This can be achieved using [cluster operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/), extending Kubernetes native capabilities with custom or 3rd party operators.

:::tip

A custom operator could be developed to fetch firm wide certificates and injects them into certain namespaces or deployments that has a very specific annotations configured, making them availabe to mount, or mount them directly into you _Deployment_.

:::

:::info


For recent years, there has been a new trend called Service Mesh, for e.g. [Istio](https://istio.io/latest/about/service-mesh/) that has built-in capabilities to solve the problem that initiated this post.

:::
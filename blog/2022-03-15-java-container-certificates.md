---
slug: java-container-certificates
title: How to make your certificates available inside your Java container
tags: [java, container, certificates]
---

This blog post takes you through different approaches to make your certificates available in your Java container when deployed to Kubernetes. Going from the most static way to be able to dynamically change it during rollout.

## Import certificate through Dockerfile

One of the most direct ways to get your certificate into your container is add it to your Dockerfile. Lets imagine you have a certifacte `my-certificate.cer`.

```Dockerfile
COPY my-certificate.cer $JAVA_HOME/jre/lib/security
RUN keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer
```

The above example assumes the following:

 - Your base image is Java based.
 - The default storepass is `changeit`. Change it if it is not.
 - `my-cert` is an example alias, use your own instead.

## ConfigMap with a local cacerts

## ConfigMap with certificates and Init-Container

## Cluster Operator and Init-Container
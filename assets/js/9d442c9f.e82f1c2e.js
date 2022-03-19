"use strict";(self.webpackChunkhui_blog=self.webpackChunkhui_blog||[]).push([[855],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(a),f=r,g=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8686:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],c={slug:"java-container-certificates",title:"How to make your certificates available inside your Java container",tags:["java","container","certificates"]},l=void 0,u={permalink:"/hui-blog/blog/java-container-certificates",source:"@site/blog/2022-03-15-java-container-certificates.md",title:"How to make your certificates available inside your Java container",description:"This blog post takes you through different approaches to make your certificates available in your Java container running in a Kubernetes distribution. Going from the most static way to being able to dynamically change it during a Deployment rollout.",date:"2022-03-15T00:00:00.000Z",formattedDate:"March 15, 2022",tags:[{label:"java",permalink:"/hui-blog/blog/tags/java"},{label:"container",permalink:"/hui-blog/blog/tags/container"},{label:"certificates",permalink:"/hui-blog/blog/tags/certificates"}],readingTime:1.885,truncated:!1,authors:[],frontMatter:{slug:"java-container-certificates",title:"How to make your certificates available inside your Java container",tags:["java","container","certificates"]}},s={authorsImageUrls:[]},p=[{value:"Import certificate through Dockerfile",id:"import-certificate-through-dockerfile",level:2},{value:"ConfigMap with a local cacerts",id:"configmap-with-a-local-cacerts",level:2},{value:"Step 1 - Import certificate into truststore",id:"step-1---import-certificate-into-truststore",level:3},{value:"Step 2 - Create <em>ConfigMap</em>",id:"step-2---create-configmap",level:3},{value:"Step 2 - Mount <em>ConfigMap</em> into _<em>Deployment</em>",id:"step-2---mount-configmap-into-_deployment",level:3},{value:"ConfigMap with certificates and Init-Container",id:"configmap-with-certificates-and-init-container",level:2},{value:"Cluster Operator and Init-Container",id:"cluster-operator-and-init-container",level:2}],m={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This blog post takes you through different approaches to make your certificates available in your Java container running in a Kubernetes distribution. Going from the most static way to being able to dynamically change it during a ",(0,i.kt)("em",{parentName:"p"},"Deployment")," rollout."),(0,i.kt)("h2",{id:"import-certificate-through-dockerfile"},"Import certificate through Dockerfile"),(0,i.kt)("p",null,"One of the most direct ways to get your certificate into your container is add it to your Dockerfile. Lets imagine that you have a certificate ",(0,i.kt)("inlineCode",{parentName:"p"},"my-certificate.cer"),". By copying it into your Docker container and importing it to the truststore during build time is going to make it permanent for the image container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"COPY my-certificate.cer $JAVA_HOME/jre/lib/security\nRUN keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer\n")),(0,i.kt)("p",null,"The above example assumes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your base image is Java based."),(0,i.kt)("li",{parentName:"ul"},"The default storepass is ",(0,i.kt)("inlineCode",{parentName:"li"},"changeit"),". Change it if it is not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my-cert")," is an example alias, use your own instead.")),(0,i.kt)("h2",{id:"configmap-with-a-local-cacerts"},"ConfigMap with a local cacerts"),(0,i.kt)("p",null,"In contrast to the method presented before, which requires you to build your image everytime you want to change or import new certificates. Having it mounted as a volume into your container makes swapping certificates more cloud friendly."),(0,i.kt)("h3",{id:"step-1---import-certificate-into-truststore"},"Step 1 - Import certificate into truststore"),(0,i.kt)("p",null,"Make a copy or use your local cacerts store as the holder of your certificate. Importing it to the trustore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer\n")),(0,i.kt)("h3",{id:"step-2---create-configmap"},"Step 2 - Create ",(0,i.kt)("em",{parentName:"h3"},"ConfigMap")),(0,i.kt)("p",null,"Assuming you already have your Java application running in your Kubernetes system, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export NAMESPACE=<Namespace where your app is running>\nexport NAME=cacerts\nkubectl create configmap $NAME --from-file=$JAVA_HOME/jre/lib/security/cacerts -n $NAMESPACE\n")),(0,i.kt)("p",null,"For simplicity, we're calling our ",(0,i.kt)("em",{parentName:"p"},"configMap")," ",(0,i.kt)("strong",{parentName:"p"},"cacerts"),", but it could be any other name, as long as it is unique inside ",(0,i.kt)("inlineCode",{parentName:"p"},"$NAMESPACE"),"."),(0,i.kt)("h3",{id:"step-2---mount-configmap-into-_deployment"},"Step 2 - Mount ",(0,i.kt)("em",{parentName:"h3"},"ConfigMap")," into _",(0,i.kt)("em",{parentName:"h3"},"Deployment")),(0,i.kt)("p",null,"To mount configMap as a volume into your ",(0,i.kt)("em",{parentName:"p"},"Deployment"),", create a volume entry referencing the configMap you've just created, then add another volumeMount entry to the Java application container. See example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Deployment\nmetadata:\n  name: example\nspec:\n  containers:\n    - name: example\n      image: example_repo/example:latest\n      volumeMounts:\n      - name: cacerts\n        mountPath: /etc/pki/java/cacerts\n        subPath: cacerts\n  volumes:\n    - name: cacerts\n      configMap:\n        name: cacerts\n")),(0,i.kt)("h2",{id:"configmap-with-certificates-and-init-container"},"ConfigMap with certificates and Init-Container"),(0,i.kt)("h2",{id:"cluster-operator-and-init-container"},"Cluster Operator and Init-Container"))}f.isMDXComponent=!0}}]);
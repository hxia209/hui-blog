"use strict";(self.webpackChunkhui_blog=self.webpackChunkhui_blog||[]).push([[189],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8431:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],c={slug:"java-container-certificates",title:"How to make your certificates available inside your Java container",tags:["java","container","certificates"]},s=void 0,l={permalink:"/hui-blog/blog/java-container-certificates",source:"@site/blog/2022-03-15-java-container-certificates.md",title:"How to make your certificates available inside your Java container",description:"This blog post takes you through different approaches to make your certificates available in your Java container running in a Kubernetes distribution. Going from the most static way to being able to dynamically change it during a Deployment rollout.",date:"2022-03-15T00:00:00.000Z",formattedDate:"March 15, 2022",tags:[{label:"java",permalink:"/hui-blog/blog/tags/java"},{label:"container",permalink:"/hui-blog/blog/tags/container"},{label:"certificates",permalink:"/hui-blog/blog/tags/certificates"}],readingTime:4.165,truncated:!1,authors:[],frontMatter:{slug:"java-container-certificates",title:"How to make your certificates available inside your Java container",tags:["java","container","certificates"]}},p={authorsImageUrls:[]},m=[{value:"Import certificate through Dockerfile",id:"import-certificate-through-dockerfile",level:2},{value:"ConfigMap with a local cacerts",id:"configmap-with-a-local-cacerts",level:2},{value:"Step 1 - Import certificate into truststore",id:"step-1---import-certificate-into-truststore",level:3},{value:"Step 2 - Create <em>ConfigMap</em>",id:"step-2---create-configmap",level:3},{value:"Step 3 - Mount <em>ConfigMap</em> into <em>Deployment</em>",id:"step-3---mount-configmap-into-deployment",level:3},{value:"ConfigMap with certificates and Init-Container",id:"configmap-with-certificates-and-init-container",level:2},{value:"Cluster Operator and Init-Container",id:"cluster-operator-and-init-container",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This blog post takes you through different approaches to make your certificates available in your Java container running in a Kubernetes distribution. Going from the most static way to being able to dynamically change it during a ",(0,r.kt)("em",{parentName:"p"},"Deployment")," rollout."),(0,r.kt)("h2",{id:"import-certificate-through-dockerfile"},"Import certificate through Dockerfile"),(0,r.kt)("p",null,"One of the most direct ways to get your certificate into your container is add it to your Dockerfile. Lets imagine that you have a certificate ",(0,r.kt)("inlineCode",{parentName:"p"},"my-certificate.cer"),". By copying it into your Docker container and importing it to the truststore during build time is going to make it permanent for the image container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"COPY my-certificate.cer $JAVA_HOME/jre/lib/security\nRUN keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer\n")),(0,r.kt)("p",null,"The above example assumes the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your base image is Java based."),(0,r.kt)("li",{parentName:"ul"},"The default storepass is ",(0,r.kt)("inlineCode",{parentName:"li"},"changeit"),". Change it if it is not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"my-cert")," is an example alias, use your own instead.")),(0,r.kt)("h2",{id:"configmap-with-a-local-cacerts"},"ConfigMap with a local cacerts"),(0,r.kt)("p",null,"In contrast to the method presented before, which requires you to build your image everytime you want to change or import new certificates. Having it mounted as a volume into your container makes swapping certificates more cloud friendly."),(0,r.kt)("h3",{id:"step-1---import-certificate-into-truststore"},"Step 1 - Import certificate into truststore"),(0,r.kt)("p",null,"Make a copy or use your local cacerts store as the holder of your certificate. Importing it to the trustore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer\n")),(0,r.kt)("h3",{id:"step-2---create-configmap"},"Step 2 - Create ",(0,r.kt)("em",{parentName:"h3"},"ConfigMap")),(0,r.kt)("p",null,"Assuming you already have your Java application running in your Kubernetes system, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export NAMESPACE=<Namespace where your app is running>\nexport NAME=cacerts\nkubectl create configmap $NAME --from-file=$JAVA_HOME/jre/lib/security/cacerts -n $NAMESPACE\n")),(0,r.kt)("p",null,"For simplicity, we're calling our ",(0,r.kt)("em",{parentName:"p"},"configMap")," ",(0,r.kt)("strong",{parentName:"p"},"cacerts"),", but it could be any other name, as long as it is unique inside ",(0,r.kt)("inlineCode",{parentName:"p"},"$NAMESPACE"),"."),(0,r.kt)("h3",{id:"step-3---mount-configmap-into-deployment"},"Step 3 - Mount ",(0,r.kt)("em",{parentName:"h3"},"ConfigMap")," into ",(0,r.kt)("em",{parentName:"h3"},"Deployment")),(0,r.kt)("p",null,"To mount cacerts configMap as a volume into your ",(0,r.kt)("em",{parentName:"p"},"Deployment"),", create a volume entry referencing the configMap you've just created, then add another volumeMount entry to the Java application container. See example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Deployment\nmetadata:\n  name: example\nspec:\n  containers:\n    - name: example\n      image: example_repo/example:latest\n      volumeMounts:\n      - name: cacerts\n        mountPath: /etc/pki/java/cacerts\n        subPath: cacerts\n  volumes:\n    - name: cacerts\n      configMap:\n        name: cacerts\n")),(0,r.kt)("p",null,"You can either modify your yaml directly on the console or open a ",(0,r.kt)("inlineCode",{parentName:"p"},"vim")," editor in your command line by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit deployment/example - n $NAMESPACE\n")),(0,r.kt)("h2",{id:"configmap-with-certificates-and-init-container"},"ConfigMap with certificates and Init-Container"),(0,r.kt)("p",null,"Importing a certificate into a truststore, creating a ",(0,r.kt)("em",{parentName:"p"},"ConfigMap")," and then mount it as a volume involves multiple manual steps which requires a set of specific tooling to be achieved, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"keytool"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," and possibly making changes directly in kubernetes console. Shoveling it all into your pipelines might not be as straight forward as it seems and ultimately not very kubebernetes native."),(0,r.kt)("p",null,"To overcome some of the issues mentioned above, we'll leverage ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},(0,r.kt)("em",{parentName:"a"},"initContainers")),", a first class kubernetes citizen, to do all the work for us and abstract the container image from everything else. Other benefits from this approach is the fact that every component of it becomes modular, making it plugable and reusable. And also, the original truststore is not overriden."),(0,r.kt)("p",null,"This time we start with a certificate, or an aggregate of certificates hosted in a ",(0,r.kt)("em",{parentName:"p"},"ConfigMap"),". Using a similar command as before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export NAMESPACE=<Namespace where your app is running>\nexport NAME=certs\nkubectl create configmap $NAME --from-file=<your certificates file location> -n $NAMESPACE\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"initContainers:\n  - name: initContainer\n    image: <a slim jdk image>\n    command:\n    - bash\n    - -c\n    - |\n      keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -noprompt -trustcacerts -importcert -alias my-cert -file $JAVA_HOME/jre/lib/security/my-certificate.cer\n    volumeMounts:\n    - name: certs\n      mountPath: /etc/pki/java/my-certificate.cer\n      subPath: my-certificate.cer\n  volumes:\n    - name: certs\n      configMap:\n        name: certs\n")),(0,r.kt)("p",null,"The idea is to share a volume between the main container and the ",(0,r.kt)("em",{parentName:"p"},"initContainer")," where the truststore should be placed for consumption and then import the certificate into truststore during pod start-up. This way, if certificates need to be changed or renewed, all we need to do is to update the ",(0,r.kt)("em",{parentName:"p"},"ConfigMap"),"."),(0,r.kt)("p",null,"Due to ",(0,r.kt)("em",{parentName:"p"},"initContainer")," being part of the ",(0,r.kt)("em",{parentName:"p"},"Deployment")," specification, it can be easily included in your helm charts without impacting your release workflow."),(0,r.kt)("h2",{id:"cluster-operator-and-init-container"},"Cluster Operator and Init-Container"),(0,r.kt)("p",null,"Ideally, as a dev, managing or manipulating certificates shouldn't be part of our daily routine. If all of it could be abstracted and managed by the platform or infrastructure, you've made the day for your developer."),(0,r.kt)("p",null,"A step further into automating the previous method would be having the certificate created as a ",(0,r.kt)("em",{parentName:"p"},"ConfigMap")," for us."),(0,r.kt)("p",null,"This can be achieved using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"cluster operators"),", extending Kubernetes native capabilities with custom or 3rd party operators."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A custom operator could be developed to fetch firm wide certificates and injects them into certain namespaces or deployments that has a very specific annotations configured, making them availabe to mount, or mount them directly into you ",(0,r.kt)("em",{parentName:"p"},"Deployment"),"."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For recent years, there has been a new trend called Service Mesh, for e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/about/service-mesh/"},"Istio")," that has built-in capabilities to solve the problem that initiated this post."))))}d.isMDXComponent=!0}}]);
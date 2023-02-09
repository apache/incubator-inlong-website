"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[13351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Docker",sidebar_position:2},l=void 0,s={unversionedId:"deployment/docker",id:"version-1.3.0/deployment/docker",title:"Docker",description:"Deploy all InLong module by Docker Compose, it's only available for development.",source:"@site/versioned_docs/version-1.3.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/1.3.0/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/deployment/docker.md",tags:[],version:"1.3.0",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standalone",permalink:"/docs/1.3.0/deployment/standalone"},next:{title:"Kubernetes",permalink:"/docs/1.3.0/deployment/k8s"}},i={},c=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Download",id:"download",level:2},{value:"Configure",id:"configure",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Register Cluster",id:"register-cluster",level:2},{value:"DataProxy Cluster",id:"dataproxy-cluster",level:3},{value:"Pulsar Cluster",id:"pulsar-cluster",level:3},{value:"Usage",id:"usage",level:2},{value:"Destroy",id:"destroy",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploy all InLong module by Docker Compose, it's only available for development. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Notice: The default message queue is Apache Pulsar for Docker.")),(0,o.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+"),(0,o.kt)("li",{parentName:"ul"},"Flink 1.13.5")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"You can get ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," from ",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.3.0/quick_start/how_to_build"},"How to Build"),"."),(0,o.kt)("h2",{id:"configure"},"Configure"),(0,o.kt)("p",null,"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_HOST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FLINK_PORT")," environment variables in ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/docker-compose/docker-compose.yml")," refer to the Flink cluster address."),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Start all components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"register-cluster"},"Register Cluster"),(0,o.kt)("h3",{id:"dataproxy-cluster"},"DataProxy Cluster"),(0,o.kt)("p",null,"Open the Inlong-Dashboard page (the default is ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"), and select to add a DataProxy cluster on the ","[Clusters]"," tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(55034).Z,width:"840",height:"373"})),(0,o.kt)("p",null,"Click the ","[Create]"," button, and fill in the cluster name, cluster label, and responsible person in the pop-up box to save."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ","[Cluster Tag]"," is a logical concept. Tags with the same name will be regarded as the same cluster."),(0,o.kt)("p",{parentName:"blockquote"},"For example, the DataProxy cluster and the Pulsar cluster with the same cluster tag belong to the same cluster.")),(0,o.kt)("p",null,"Then add nodes to this DataProxy cluster - a DataProxy cluster can support adding multiple nodes:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(42291).Z,width:"840",height:"406"})),(0,o.kt)("p",null,"Just fill in the IP and port of the DataProxy node."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(79215).Z,width:"1570",height:"381"})),(0,o.kt)("h3",{id:"pulsar-cluster"},"Pulsar Cluster"),(0,o.kt)("p",null,"Similar to the above entry for adding a DataProxy cluster, the filling example is as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(96168).Z,width:"528",height:"580"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"After all containers run successfully, you can access ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"User: admin\nPassword: inlong\n")),(0,o.kt)("h2",{id:"destroy"},"Destroy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")))}u.isMDXComponent=!0},55034:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster-9ca83abff697fcd5f31cea7b2a77d893.png"},42291:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_node-600a1dbd2e1cd2b214b46e2630378b31.png"},79215:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dp_cluster_node_save-ec7999be73bf56a10224a31f65a61d64.png"},96168:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar_cluster_save-c98ec05acb56df935d7f508f97ec1caa.png"}}]);
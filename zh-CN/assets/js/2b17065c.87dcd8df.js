"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[12869],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return t?r.createElement(y,l(l({ref:n},d),{},{components:t})):r.createElement(y,l({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},11785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={title:"Docker \u90e8\u7f72",sidebar_position:2},l=void 0,i={unversionedId:"deployment/docker",id:"version-2.0.0/deployment/docker",title:"Docker \u90e8\u7f72",description:"\u901a\u8fc7 Docker Compose \u90e8\u7f72 InLong\uff0c\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u4e0e\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/zh-CN/docs/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/deployment/docker.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{title:"Docker \u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/deployment/standalone"},next:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/deployment/k8s"}},p={},c=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u96c6\u7fa4\u521d\u59cb\u5316",id:"\u96c6\u7fa4\u521d\u59cb\u5316",level:2},{value:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u6ce8\u518c Pulsar \u96c6\u7fa4",id:"\u6ce8\u518c-pulsar-\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u9500\u6bc1",id:"\u9500\u6bc1",level:2}],d={toc:c},s="wrapper";function u(e){let{components:n,...a}=e;return(0,o.yg)(s,(0,r.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u901a\u8fc7 Docker Compose \u90e8\u7f72 InLong\uff0c\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u4e0e\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Docker Compose \u90e8\u7f72\u4e86",(0,o.yg)("inlineCode",{parentName:"p"},"\u6807\u51c6\u67b6\u6784"),"\u6240\u9700\u8981\u7684\u6240\u6709\u7ec4\u4ef6\uff0c\u4f7f\u7528 ",(0,o.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/concepts-overview"},"Apache Pulsar")," \u4f5c\u4e3a\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002")),(0,o.yg)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/other/#on-linux"},"Docker Compose 2.4+"))),(0,o.yg)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,o.yg)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,o.yg)("a",{parentName:"p",href:"https://inlong.apache.org/zh-CN/download/"},"\u4e0b\u8f7d\u9875\u9762")," \u83b7\u53d6 ",(0,o.yg)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz"),"\uff0c\u6216\u8005\u53c2\u8003 ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/development/how_to_build"},"How to Build")," \u7f16\u8bd1\u3002"),(0,o.yg)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.yg)("p",null,"\u542f\u52a8\u6240\u6709\u7ec4\u4ef6\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,o.yg)("h2",{id:"\u96c6\u7fa4\u521d\u59cb\u5316"},"\u96c6\u7fa4\u521d\u59cb\u5316"),(0,o.yg)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee InLong Dashboard \u5730\u5740",(0,o.yg)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,o.yg)("h3",{id:"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"},"\u521b\u5efa\u96c6\u7fa4\u6807\u7b7e"),(0,o.yg)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u6807\u7b7e\u7ba1\u7406]","->","[\u65b0\u5efa]","\uff0c\u6307\u5b9a\u96c6\u7fa4\u6807\u7b7e\u540d\u79f0\u548c\u8d1f\u8d23\u4eba\uff1a\n",(0,o.yg)("img",{src:t(73829).A,width:"517",height:"331"})),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"\u7531\u4e8e\u5404\u4e2a\u7ec4\u4ef6\u9ed8\u8ba4\u4e0a\u62a5\u96c6\u7fa4\u6807\u7b7e\u4e3a ",(0,o.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0c\u8bf7\u52ff\u4f7f\u7528\u5176\u5b83\u540d\u79f0\u3002")),(0,o.yg)("h3",{id:"\u6ce8\u518c-pulsar-\u96c6\u7fa4"},"\u6ce8\u518c Pulsar \u96c6\u7fa4"),(0,o.yg)("p",null,"\u9875\u9762\u70b9\u51fb ","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u96c6\u7fa4\u7ba1\u7406]","->","[\u65b0\u5efa\u96c6\u7fa4]","\uff0c\u6ce8\u518c Pulsar \u96c6\u7fa4\uff1a\n",(0,o.yg)("img",{src:t(18848).A,width:"644",height:"797"})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"\u96c6\u7fa4\u6807\u7b7e\u9009\u62e9\u521a\u521b\u5efa\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\uff0cdocker \u90e8\u7f72\u7684 Pulsar \u96c6\u7fa4\uff1a"),(0,o.yg)("p",{parentName:"admonition"},"Service URL \u4e3a ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar://pulsar:6650"),"\uff0cAdmin URL \u4e3a ",(0,o.yg)("inlineCode",{parentName:"p"},"http://pulsar:8080"),"\u3002")),(0,o.yg)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.yg)("p",null,"\u521b\u5efa\u6570\u636e\u6d41\u53ef\u4ee5\u53c2\u8003 ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/quick_start/data_ingestion/file_pulsar_clickhouse_example"},"Example"),"."),(0,o.yg)("h2",{id:"\u9500\u6bc1"},"\u9500\u6bc1"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker-compose down\n")))}u.isMDXComponent=!0},73829:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/create_cluster_tag-c25267ed8accf193c4f1ddcd95afc6fd.png"},18848:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/create_pulsar_cluster-9dd71f99b861038a89495ebe7841c7de.png"}}]);
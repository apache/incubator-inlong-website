"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[41068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"Deployment"},i=void 0,l={unversionedId:"modules/dataproxy/quick_start",id:"version-1.1.0/modules/dataproxy/quick_start",title:"Deployment",description:"All deploying files at inlong-dataproxy directory.",source:"@site/versioned_docs/version-1.1.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/docs/1.1.0/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/dataproxy/quick_start.md",tags:[],version:"1.1.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.1.0/modules/dataproxy/overview"},next:{title:"Overview",permalink:"/docs/1.1.0/modules/tubemq/overview"}},p={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Configure InLong-Manager URL",id:"configure-inlong-manager-url",level:3},{value:"run",id:"run",level:2},{value:"check",id:"check",level:2},{value:"Add DataProxy configuration to InLong-Manager",id:"add-dataproxy-configuration-to-inlong-manager",level:2}],u={toc:d},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All deploying files at ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," directory."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"configure-inlong-manager-url"},"Configure InLong-Manager URL"),(0,a.kt)("p",null,"configuration file: ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# manager address\nmanager.hosts=127.0.0.1:8083\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,a.kt)("h2",{id:"run"},"run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Default using Pulsar to cache data, and the dataproxy-pulsar.conf configuration file is loaded.\nbash +x bin/dataproxy-start.sh\n# or\nbash +x bin/dataproxy-start.sh pulsar\n# If using Inlong TubeMQ to cache data\n# bash +x bin/dataproxy-start.sh tube\n")),(0,a.kt)("h2",{id:"check"},"check"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,a.kt)("h2",{id:"add-dataproxy-configuration-to-inlong-manager"},"Add DataProxy configuration to InLong-Manager"),(0,a.kt)("p",null,"After installing the DataProxy, you need to add the IP of the DataProxy service into the InLong-Manager.\nModify the following information and execute command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://your_manager_host:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n   "name": "default_dataproxy",\n   "type": "DATA_PROXY",\n   "ip": "your_dataproxy_ip",\n   "port": 46801,\n   "mqSetName": "default_set_name",\n   "inCharges": "admin",\n   "creator": "admin"\n}\n\'\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Please modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," field to the real IP (or hostname) of the DataProxy, the format is ",(0,a.kt)("inlineCode",{parentName:"p"},"node1:port1,node2:port2"),", and separate them with ",(0,a.kt)("inlineCode",{parentName:"p"},","),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If all nodes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," field have the same port, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"node1,node2")," and modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," field to the default port for those nodes."))))}s.isMDXComponent=!0}}]);
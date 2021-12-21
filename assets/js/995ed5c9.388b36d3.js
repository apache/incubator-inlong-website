"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6050],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Deployment"},l=void 0,u={unversionedId:"modules/dataproxy/quick_start",id:"modules/dataproxy/quick_start",isDocsHomePage:!1,title:"Deployment",description:"All deploying files at inlong-dataproxy directory.",source:"@site/docs/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/docs/next/modules/dataproxy/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/dataproxy/quick_start.md",tags:[],version:"current",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/dataproxy/overview"},next:{title:"Overview",permalink:"/docs/next/modules/tubemq/overview"}},p=[{value:"Configuration",id:"configuration",children:[{value:"Configure TubeMQ",id:"configure-tubemq",children:[]},{value:"Environment Preparation",id:"environment-preparation",children:[]},{value:"Configure InLong-Manager URL",id:"configure-inlong-manager-url",children:[]}]},{value:"run",id:"run",children:[]},{value:"check",id:"check",children:[]},{value:"Add DataProxy configuration to InLong-Manager",id:"add-dataproxy-configuration-to-inlong-manager",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All deploying files at ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," directory."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"configure-tubemq"},"Configure TubeMQ"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tubemq_master_list")," is the rpc address of TubeMQ Master."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf\n")),(0,a.kt)("p",null,"notice that conf/flume.conf FLUME_HOME is proxy the directory for proxy inner data"),(0,a.kt)("h3",{id:"environment-preparation"},"Environment Preparation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh prepare_env.sh\n")),(0,a.kt)("h3",{id:"configure-inlong-manager-url"},"Configure InLong-Manager URL"),(0,a.kt)("p",null,"configuration file: ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# manager web \nmanager_hosts=ip:port \n")),(0,a.kt)("h2",{id:"run"},"run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh bin/start.sh\n")),(0,a.kt)("h2",{id:"check"},"check"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,a.kt)("h2",{id:"add-dataproxy-configuration-to-inlong-manager"},"Add DataProxy configuration to InLong-Manager"),(0,a.kt)("p",null,"After installing the DataProxy, you need to insert the IP and port of the DataProxy service is located into the backend database of InLong-Manager."),(0,a.kt)("p",null,"For the background database address of InLong-Manager, please refer to the deployment document of the InLong-Manager module."),(0,a.kt)("p",null,"The insert SQL statement is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- name is the name of the DataProxy, which can be customized\n-- address is the IP of the DataProxy service is located\n-- port is the port of the DataProxy service, default is 46801\ninsert into data_proxy_cluster (name, address, port, status, is_deleted, create_time, modify_time)\nvalues ("data_proxy_name", "data_proxy_ip", 46801, 0, 0, now(), now());\n')))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u7f16\u8bd1\u90e8\u7f72"},l=void 0,i={unversionedId:"modules/dataproxy/quick_start",id:"version-0.11.0/modules/dataproxy/quick_start",title:"\u7f16\u8bd1\u90e8\u7f72",description:"\u90e8\u7f72 DataProxy",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/dataproxy/quick_start.md",tags:[],version:"0.11.0",frontMatter:{title:"\u7f16\u8bd1\u90e8\u7f72"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u67b6\u6784\u4ecb\u7ecd",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy/architecture"},next:{title:"\u67b6\u6784\u4ecb\u7ecd",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy-sdk/architecture"}},p={},u=[{value:"\u90e8\u7f72 DataProxy",id:"\u90e8\u7f72-dataproxy",level:2},{value:"\u914d\u7f6etube\u5730\u5740\u548c\u7aef\u53e3\u53f7",id:"\u914d\u7f6etube\u5730\u5740\u548c\u7aef\u53e3\u53f7",level:3},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u914d\u7f6emanager\u5730\u5740",id:"\u914d\u7f6emanager\u5730\u5740",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u68c0\u67e5\u542f\u52a8\u72b6\u6001",id:"\u68c0\u67e5\u542f\u52a8\u72b6\u6001",level:2},{value:"\u5c06 DataProxy \u914d\u7f6e\u6dfb\u52a0\u5230 InLong-Manager",id:"\u5c06-dataproxy-\u914d\u7f6e\u6dfb\u52a0\u5230-inlong-manager",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u90e8\u7f72-dataproxy"},"\u90e8\u7f72 DataProxy"),(0,a.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6etube\u5730\u5740\u548c\u7aef\u53e3\u53f7"},"\u914d\u7f6etube\u5730\u5740\u548c\u7aef\u53e3\u53f7"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tubemq_master_list"),"\u662fTubeMQ master rpc\u5730\u5740\uff0c\u591a\u4e2a\u9017\u53f7\u5206\u9694\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf\n")),(0,a.kt)("p",null,"\u6ce8\u610fconf/flume.conf\u4e2dFLUME_HOME\u4e3aproxy\u7684\u4e2d\u95f4\u6570\u636e\u6587\u4ef6\u5b58\u653e\u5730\u5740"),(0,a.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh prepare_env.sh\n")),(0,a.kt)("h3",{id:"\u914d\u7f6emanager\u5730\u5740"},"\u914d\u7f6emanager\u5730\u5740"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# manager web url \nmanager_hosts=ip:port \n")),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh bin/start.sh\n")),(0,a.kt)("h2",{id:"\u68c0\u67e5\u542f\u52a8\u72b6\u6001"},"\u68c0\u67e5\u542f\u52a8\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,a.kt)("h2",{id:"\u5c06-dataproxy-\u914d\u7f6e\u6dfb\u52a0\u5230-inlong-manager"},"\u5c06 DataProxy \u914d\u7f6e\u6dfb\u52a0\u5230 InLong-Manager"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c DataProxy \u540e\uff0c\u9700\u8981\u5c06 DataProxy \u6240\u5728\u4e3b\u673a\u7684 IP \u63d2\u5165\u5230 InLong-Manager \u7684\u540e\u53f0\u6570\u636e\u5e93\u4e2d\u3002"),(0,a.kt)("p",null,"InLong-Manager \u7684\u540e\u53f0\u6570\u636e\u5e93\u5730\u5740\uff0c\u8bf7\u53c2\u8003 InLong-Manager \u6a21\u5757\u7684\u90e8\u7f72\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u63d2\u5165 SQL \u8bed\u53e5\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- name \u4e3a DataProxy \u7684\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\n-- address \u4e3a DataProxy \u670d\u52a1\u6240\u5728\u4e3b\u673a\u7684 IP\n-- port \u4e3a DataProxy \u670d\u52a1\u6240\u5728\u7684\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u662f 46801\ninsert into data_proxy_cluster (name, address, port, status, is_deleted, create_time, modify_time)\nvalues ("data_proxy_name", "data_proxy_ip", 46801, 0, 0, now(), now());\n')))}d.isMDXComponent=!0}}]);
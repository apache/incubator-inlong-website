"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u5b89\u88c5\u90e8\u7f72"},l=void 0,s={unversionedId:"modules/audit/quick_start",id:"version-1.0.0/modules/audit/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-audit \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7sql/apacheinlongaudit.sql\u51fa\u751f\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/zh-CN/docs/1.0.0/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/modules/audit/quick_start.md",tags:[],version:"1.0.0",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.0/modules/audit/overview"},next:{title:"\u793a\u4f8b",permalink:"/zh-CN/docs/1.0.0/sdk/dataproxy-sdk/example"}},o={},u=[{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"\u914d\u7f6e Pulsar",id:"\u914d\u7f6e-pulsar",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8-1",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-audit")," \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"\u51fa\u751f\u6570\u636e\u5e93\u3002"),(0,a.kt)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,a.kt)("h3",{id:"\u914d\u7f6e-pulsar"},"\u914d\u7f6e Pulsar"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/audit-proxy.conf"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.host = 0.0.0.0\nagent1.sources.tcp-source.port = 10081\nagent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://PULSAR_BROKER_LIST\nagent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://PULSAR_BROKER_LIST\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,a.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"sh ./bin/proxy-start.sh\n")),(0,a.kt)("h2",{id:"audit-store"},"Audit Store"),(0,a.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application.properties"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"# store.server: mysql / elasticsearch \naudit.config.store.mode=mysql\n# audit pulsar topic\naudit.pulsar.server.url=pulsar://127.0.0.1:6650\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n# mysql\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-1"},"\u542f\u52a8"),(0,a.kt)("p",null,"\u542f\u52a8\u811a\u672c ",(0,a.kt)("inlineCode",{parentName:"p"},"./bin/store-start.sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"sh ./bin/store-start.sh\n")),(0,a.kt)("p",null,"Audit Proxy \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"10081"),"\u3002"))}c.isMDXComponent=!0}}]);
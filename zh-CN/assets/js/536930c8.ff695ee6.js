"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[25796],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82857:(e,t,n)=>{n.r(t),n.d(t,{APIPage:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(58168),o=n(96540),a=n(15680),i=n(92303);const c={title:"REST API",sidebar_position:8},l=void 0,s={unversionedId:"development/api",id:"development/api",title:"REST API",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/api.md",sourceDirName:"development",slug:"/development/api",permalink:"/zh-CN/docs/next/development/api",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/api.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"REST API",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Transform \u6269\u5c55 UDF",permalink:"/zh-CN/docs/next/development/extension_transform/transform_udf"},next:{title:"Agent \u7ba1\u7406",permalink:"/zh-CN/docs/next/administration/cluster_management/agent_management"}},p={},u=[];function d(){const e=(0,i.A)(),t=(0,o.lazy)((()=>Promise.all([n.e(35729),n.e(42634)]).then(n.bind(n,35729))));return e?(0,a.yg)("div",null,(0,a.yg)("p",null,"This file is generated by Swagger, and you can also access dashboard_address/inlong/manager/doc.html directly."),(0,a.yg)(o.Suspense,{fallback:null,mdxType:"Suspense"},(0,a.yg)(t,{url:"https://inlong.apache.org/file/api.json",mdxType:"LazySwaggerUI"}))):"Sorry, ssr is not currently supported."}m="LazySwaggerUI";var m;const f={toc:u,APIPage:d},y=d;function g(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0}}]);
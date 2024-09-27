"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[61768],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const i={title:"\u6807\u7b7e\u7ba1\u7406",sidebar_position:6},l=void 0,o={unversionedId:"administration/tag_management",id:"administration/tag_management",title:"\u6807\u7b7e\u7ba1\u7406",description:"\u89d2\u8272\u4e3a\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u79df\u6237\u7ba1\u7406\u5458\u7684\u7528\u6237\u624d\u53ef\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u4ed6\u4eec\u53ef\u4ee5\u521b\u5efa\u3001\u4fee\u6539\u3001\u5220\u9664\u96c6\u7fa4\u6807\u7b7e\uff0c\u5e76\u4f7f\u7528\u5c06\u96c6\u7fa4\u4fe1\u606f\u7ed1\u5b9a\u5728\u5df2\u521b\u5efa\u7684\u96c6\u7fa4\u6807\u7b7e\u4e0a\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/administration/tag_management.md",sourceDirName:"administration",slug:"/administration/tag_management",permalink:"/zh-CN/docs/next/administration/tag_management",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/administration/tag_management.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u6807\u7b7e\u7ba1\u7406",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u7ba1\u7406",permalink:"/zh-CN/docs/next/administration/cluster_management"},next:{title:"\u8054\u7cfb\u6211\u4eec",permalink:"/zh-CN/docs/next/contact"}},c={},s=[{value:"\u65b0\u5efa\u96c6\u7fa4\u6807\u7b7e",id:"\u65b0\u5efa\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u5220\u9664\u96c6\u7fa4\u6807\u7b7e",id:"\u5220\u9664\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u4fee\u6539\u96c6\u7fa4\u6807\u7b7e",id:"\u4fee\u6539\u96c6\u7fa4\u6807\u7b7e",level:3},{value:"\u7ed1\u5b9a\u96c6\u7fa4",id:"\u7ed1\u5b9a\u96c6\u7fa4",level:3},{value:"\u89e3\u7ed1\u96c6\u7fa4",id:"\u89e3\u7ed1\u96c6\u7fa4",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,r.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u89d2\u8272\u4e3a\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u79df\u6237\u7ba1\u7406\u5458\u7684\u7528\u6237\u624d\u53ef\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u4ed6\u4eec\u53ef\u4ee5\u521b\u5efa\u3001\u4fee\u6539\u3001\u5220\u9664\u96c6\u7fa4\u6807\u7b7e\uff0c\u5e76\u4f7f\u7528\u5c06\u96c6\u7fa4\u4fe1\u606f\u7ed1\u5b9a\u5728\u5df2\u521b\u5efa\u7684\u96c6\u7fa4\u6807\u7b7e\u4e0a\u3002"),(0,a.yg)("h3",{id:"\u65b0\u5efa\u96c6\u7fa4\u6807\u7b7e"},"\u65b0\u5efa\u96c6\u7fa4\u6807\u7b7e"),(0,a.yg)("p",null,"\u5177\u6709\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u79df\u6237\u7ba1\u7406\u5458\u6743\u9650\u7528\u6237\uff0c\u53ef\u4ee5\u8fdb\u884c\u521b\u5efa\u65b0\u96c6\u7fa4\u96c6\u7fa4\u6807\u7b7e\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(9418).A,width:"3810",height:"1838"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u96c6\u7fa4\u6807\u7b7e\uff1a\u7528\u6237\u81ea\u5b9a\u4e49\u540d\uff0c\u7528\u6765\u6807\u8bc6\u6b64\u96c6\u7fa4\u6807\u7b7e\u4fe1\u606f"),(0,a.yg)("li",{parentName:"ul"},"\u8d23\u4efb\u4eba\uff1a\u8be5\u96c6\u7fa4\u6807\u7b7e\u8d1f\u8d23\u4eba\uff0c\u53ea\u6709\u8d23\u4efb\u4eba\u80fd\u591f\u4fee\u6539\u8be5\u96c6\u7fa4\u6807\u7b7e\u7684\u914d\u7f6e\u4fe1\u606f"),(0,a.yg)("li",{parentName:"ul"},"\u79df\u6237\uff1a\u8be5\u96c6\u7fa4\u6807\u7b7e\u6240\u5c5e\u79df\u6237\uff0c\u53ea\u6709\u5bf9\u5e94\u7684\u79df\u6237\u4e0b\u80fd\u770b\u5230\u8be5\u96c6\u7fa4\u6807\u7b7e"),(0,a.yg)("li",{parentName:"ul"},"\u6807\u7b7e\u63cf\u8ff0\uff1a\u8be5\u96c6\u7fa4\u6807\u7b7e\u63cf\u8ff0\u4fe1\u606f")),(0,a.yg)("h3",{id:"\u5220\u9664\u96c6\u7fa4\u6807\u7b7e"},"\u5220\u9664\u96c6\u7fa4\u6807\u7b7e"),(0,a.yg)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u79df\u6237\u7ba1\u7406\u5458\u6743\u9650\u53ef\u4ee5\u5bf9\u5df2\u521b\u5efa\u7684\u96c6\u7fa4\u6807\u7b7e\u8fdb\u884c\u5220\u9664\uff0c\u5220\u9664\u540e\u6b64\u96c6\u7fa4\u6807\u7b7e\u5c06\u505c\u6b62\u4f7f\u7528\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(2723).A,width:"3806",height:"1842"})),(0,a.yg)("h3",{id:"\u4fee\u6539\u96c6\u7fa4\u6807\u7b7e"},"\u4fee\u6539\u96c6\u7fa4\u6807\u7b7e"),(0,a.yg)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u79df\u6237\u7ba1\u7406\u5458\u53ef\u4ee5\u4fee\u6539\u5df2\u521b\u5efa\u7684\u96c6\u7fa4\u6807\u7b7e\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(77085).A,width:"3804",height:"1858"})),(0,a.yg)("h3",{id:"\u7ed1\u5b9a\u96c6\u7fa4"},"\u7ed1\u5b9a\u96c6\u7fa4"),(0,a.yg)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u79df\u6237\u7ba1\u7406\u5458\u53ef\u4ee5\u4e3a\u5df2\u521b\u5efa\u7684\u96c6\u7fa4\u6807\u7b7e\u7ed1\u5b9a\u76f8\u5173\u96c6\u7fa4\u4fe1\u606f\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(93978).A,width:"3782",height:"1826"})),(0,a.yg)("h3",{id:"\u89e3\u7ed1\u96c6\u7fa4"},"\u89e3\u7ed1\u96c6\u7fa4"),(0,a.yg)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u79df\u6237\u7ba1\u7406\u5458\u53ef\u4ee5\u4e3a\u5df2\u521b\u5efa\u7684\u96c6\u7fa4\u6807\u7b7e\u89e3\u7ed1\u76f8\u5173\u96c6\u7fa4\u4fe1\u606f\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(52047).A,width:"3808",height:"1850"})))}d.isMDXComponent=!0},93978:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/bind_cluster-6f303986829ded8a5f5d6a153ec4b5cb.png"},9418:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/create_cluster_tag-d2325de19701fc4ee9bc41fbebcd2a11.png"},2723:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/delete_cluster_tag-78c25b5b161001dc501597e7c1f3cdde.png"},52047:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/unbind_cluster-0968b03413c8a3b047ef16aad50bd2d7.png"},77085:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/update_cluster_tag-1a4a4a376fd73f4cb6c234f350546e7c.png"}}]);
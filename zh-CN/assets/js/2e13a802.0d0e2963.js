"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[34619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,g=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return r?a.createElement(g,i(i({ref:t},m),{},{components:r})):a.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u603b\u89c8"},i=void 0,l={unversionedId:"modules/manager/overview",id:"version-1.1.0/modules/manager/overview",title:"\u603b\u89c8",description:"1 Apache InLong Manager\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/modules/manager/overview.md",sourceDirName:"modules/manager",slug:"/modules/manager/overview",permalink:"/zh-CN/docs/1.1.0/modules/manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/manager/overview.md",tags:[],version:"1.1.0",frontMatter:{title:"\u603b\u89c8"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6d41\u793a\u4f8b",permalink:"/zh-CN/docs/1.1.0/modules/sort/dataflow_example"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.1.0/modules/manager/quick_start"}},c={},p=[{value:"1 Apache InLong Manager\u4ecb\u7ecd",id:"1-apache-inlong-manager\u4ecb\u7ecd",level:2},{value:"2 Architecture",id:"2-architecture",level:2},{value:"3 \u6a21\u5757\u5206\u5de5",id:"3-\u6a21\u5757\u5206\u5de5",level:2},{value:"4 \u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b",id:"4-\u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"5 \u6570\u636e\u6a21\u578b",id:"5-\u6570\u636e\u6a21\u578b",level:2}],m={toc:p},d="wrapper";function s(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-apache-inlong-manager\u4ecb\u7ecd"},"1 Apache InLong Manager\u4ecb\u7ecd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u76ee\u6807\u5b9a\u4f4d\uff1aApache inlong \u5b9a\u4f4d\u4e3a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u5b8c\u6574\u8986\u76d6\u5927\u6570\u636e\u63a5\u5165\u573a\u666f\u4ece\u6570\u636e\u91c7\u96c6\u3001\u4f20\u8f93\u3001\u5206\u62e3\u3001\u843d\u5730\u7684\u6280\u672f\u80fd\u529b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5e73\u53f0\u4ef7\u503c\uff1a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5e73\u53f0\u4e2d\u81ea\u5e26\u7684\u7ba1\u7406\u3001\u914d\u7f6e\u5e73\u53f0\u5b8c\u6210\u4efb\u52a1\u7684\u914d\u7f6e\u3001\u7ba1\u7406\u3001\u6307\u6807\u76d1\u63a7\uff0c\u540c\u65f6\u901a\u8fc7\u5e73\u53f0\u5728\u6d41\u7a0b\u4e2d\u5404\u4e3b\u8981\u73af\u8282\u63d0\u4f9bSPI\u6269\u5c55\u70b9\u6309\u9700\u8981\u5b9e\u73b0\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u4fdd\u8bc1\u529f\u80fd\u7a33\u5b9a\u9ad8\u6548\u7684\u540c\u65f6\u964d\u4f4e\u5e73\u53f0\u4f7f\u7528\u95e8\u69db\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Apache InLong Manager\u4f5c\u4e3a\u6574\u4e2a\u6570\u636e\u96c6\u6210\u5e73\u53f0\u9762\u5411\u7528\u6237\u7684\u7edf\u4e00\u7ba1\u7406\u5165\u53e3\uff0c\u7528\u6237\u767b\u5f55\u540e\u4f1a\u6839\u636e\u5bf9\u5e94\u89d2\u8272\u63d0\u4f9b\u4e0d\u540c\u7684\u529f\u80fd\u6743\u9650\u4ee5\u53ca\u6570\u636e\u6743\u9650\u3002\u9875\u9762\u63d0\u4f9b\u5e73\u53f0\u5404\u57fa\u7840\u96c6\u7fa4\uff08\u5982mq\u3001\u5206\u62e3\uff09\u7ef4\u62a4\u5165\u53e3\uff0c\u53ef\u968f\u65f6\u67e5\u770b\u7ef4\u62a4\u57fa\u672c\u4fe1\u606f\u3001\u5bb9\u91cf\u89c4\u5212\u8c03\u6574\u3002\u540c\u65f6\u4e1a\u52a1\u7528\u6237\u53ef\u5b8c\u6210\u6570\u636e\u63a5\u5165\u4efb\u52a1\u7684\u521b\u5efa\u3001\u4fee\u6539\u7ef4\u62a4\u3001\u6307\u6807\u67e5\u770b\u3001\u63a5\u5165\u5bf9\u8d26\u7b49\u529f\u80fd\u3002\u5176\u5bf9\u5e94\u7684\u540e\u53f0\u670d\u52a1\u5728\u7528\u6237\u521b\u5efa\u5e76\u542f\u52a8\u4efb\u52a1\u7684\u540c\u65f6\u4f1a\u4e0e\u5e95\u5c42\u5404\u6a21\u5757\u8fdb\u884c\u6570\u636e\u4ea4\u4e92\uff0c\u5c06\u5404\u6a21\u5757\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u901a\u8fc7\u5408\u7406\u7684\u65b9\u5f0f\u4e0b\u53d1\u3002\u8d77\u5230\u534f\u8c03\u4e32\u8054\u540e\u53f0\u4e1a\u52a1\u6267\u884c\u6d41\u7a0b\u7684\u4f5c\u7528\u3002"))),(0,n.kt)("h2",{id:"2-architecture"},"2 Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(34035).Z,width:"965",height:"507"})),(0,n.kt)("h2",{id:"3-\u6a21\u5757\u5206\u5de5"},"3 \u6a21\u5757\u5206\u5de5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6a21\u5757"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u804c\u8d23"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-common"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u5757\u516c\u5171\u4ee3\u7801\uff0c\u5165\u5f02\u5e38\u5b9a\u4e49\uff0c\u5de5\u5177\u7c7b\uff0c\u679a\u4e3e\u7b49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5e93\u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-service"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u903b\u8f91\u5c42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-web"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u524d\u7aef\u4ea4\u4e92\u5bf9\u5e94\u63a5\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-workflow-engine"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u6d41\u5f15\u64ce")))),(0,n.kt)("h2",{id:"4-\u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b"},"4 \u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(29940).Z,width:"1285",height:"852"})),(0,n.kt)("h2",{id:"5-\u6570\u636e\u6a21\u578b"},"5 \u6570\u636e\u6a21\u578b"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(53688).Z,width:"1441",height:"673"})))}s.isMDXComponent=!0},53688:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/datamodel-7c788db64ee2c4f646d063d43a8675a6.jpg"},34035:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/inlong-manager-a3645b4c9d18fd67a2bb591656eaf4d6.png"},29940:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/interactive-7dd8e370ae4885484e6a4576cb5de26f.jpg"}}]);
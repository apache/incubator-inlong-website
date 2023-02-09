"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[17174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),h=a,m=s["".concat(u,".").concat(h)]||s[h]||g[h]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},76584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"0.11.0 \u7248\u672c\u53d1\u5e03",author:"dockerzhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},c=void 0,i={permalink:"/zh-CN/blog/2021/11/10/release-0.11.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2021-11-10-release-0.11.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2021-11-10-release-0.11.0.md",title:"0.11.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong(incubating) \u4ece 0.9.0 \u7248\u672c\u5f00\u59cb\u7531\u539f Apache TubeMQ\uff08incubating\uff09\u6539\u540d\u800c\u6765\uff0c\u4f34\u968f\u7740\u540d\u79f0\u7684\u6539\u53d8\uff0cInLong \u4e5f\u7531\u5355\u4e00\u7684\u6d88\u606f\u961f\u5217\u5347\u7ea7\u4e3a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u652f\u6301\u4e86\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002",date:"2021-11-10T00:00:00.000Z",formattedDate:"2021\u5e7411\u670810\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:8.275,hasTruncateMarker:!0,authors:[{name:"dockerzhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"0.11.0 \u7248\u672c\u53d1\u5e03",author:"dockerzhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"0.12.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/01/04/release-0.12.0"}},u={authorsImageUrls:[void 0]},l=[],p={toc:l},s="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache InLong(incubating) \u4ece 0.9.0 \u7248\u672c\u5f00\u59cb\u7531\u539f Apache TubeMQ\uff08incubating\uff09\u6539\u540d\u800c\u6765\uff0c\u4f34\u968f\u7740\u540d\u79f0\u7684\u6539\u53d8\uff0cInLong \u4e5f\u7531\u5355\u4e00\u7684\u6d88\u606f\u961f\u5217\u5347\u7ea7\u4e3a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u652f\u6301\u4e86\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002"))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(i,".").concat(h)]||p[h]||g[h]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"1.4.0 \u7248\u672c\u53d1\u5e03",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},c=void 0,l={permalink:"/zh-CN/blog/2022/11/16/release-1.4.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-11-16-release-1.4.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-11-16-release-1.4.0.md",title:"1.4.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002 InLong \u652f\u6301\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002",date:"2022-11-16T00:00:00.000Z",formattedDate:"2022\u5e7411\u670816\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:5.045,hasTruncateMarker:!0,authors:[{name:"Charles Zhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"1.4.0 \u7248\u672c\u53d1\u5e03",author:"Charles Zhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"1.5.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023/01/13/release-1.5.0"},nextItem:{title:"1.3.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/09/05/release-1.3.0"}},i={authorsImageUrls:[void 0]},u=[],s={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002 InLong \u652f\u6301\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002"))}g.isMDXComponent=!0}}]);
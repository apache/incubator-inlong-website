"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[88942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Analysis of InLong Sort ETL Solution",author:"Oneal65",author_url:"https://github.com/Oneal65",author_image_url:"https://avatars.githubusercontent.com/u/13121552?v=4",tags:["Apache InLong","Sort"]},i="Analysis of InLong Sort ETL Solution Based on Apache Flink SQL",l={permalink:"/blog/2022/06/16/inlong-sort-etl",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-06-16-inlong-sort-etl.md",source:"@site/blog/2022-06-16-inlong-sort-etl.md",title:"Analysis of InLong Sort ETL Solution",description:"1. Background",date:"2022-06-16T00:00:00.000Z",formattedDate:"June 16, 2022",tags:[{label:"Apache InLong",permalink:"/blog/tags/apache-in-long"},{label:"Sort",permalink:"/blog/tags/sort"}],readingTime:10.5,hasTruncateMarker:!0,authors:[{name:"Oneal65",url:"https://github.com/Oneal65",imageURL:"https://avatars.githubusercontent.com/u/13121552?v=4"}],frontMatter:{title:"Analysis of InLong Sort ETL Solution",author:"Oneal65",author_url:"https://github.com/Oneal65",author_image_url:"https://avatars.githubusercontent.com/u/13121552?v=4",tags:["Apache InLong","Sort"]},prevItem:{title:"Release 1.2.0",permalink:"/blog/2022/06/22/release-1.2.0"},nextItem:{title:"Release 1.1.0",permalink:"/blog/2022/04/25/release-1.1.0"}},s={authorsImageUrls:[void 0]},c=[{value:"1. Background",id:"1-background",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-background"},"1. Background"),(0,o.kt)("p",null,"With the increasing number of users and developers of Apache InLong(incubating), the demand for richer usage scenarios and low-cost operation is getting stronger and stronger. Among them, the demand for adding Transform (T) to the whole link of InLong has received the most feedback. After the research and design of @yunqingmoswu, @EMsnap, @gong, @thexiay community developers, the InLong Sort ETL solution based on Flink SQL has been completed. This article will introduce the implementation details of the solution in detail."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[43877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=l,m=d["".concat(c,".").concat(p)]||d[p]||g[p]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const i={title:"\u67b6\u6784\u4ecb\u7ecd"},o=void 0,a={unversionedId:"modules/agent/architecture",id:"version-0.11.0/modules/agent/architecture",title:"\u67b6\u6784\u4ecb\u7ecd",description:"\u4e00. InLong-Agent \u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/agent/architecture.md",sourceDirName:"modules/agent",slug:"/modules/agent/architecture",permalink:"/zh-CN/docs/0.11.0/modules/agent/architecture",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/agent/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"\u67b6\u6784\u4ecb\u7ecd"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u7f16\u8bd1\u90e8\u7f72",permalink:"/zh-CN/docs/0.11.0/modules/website/quick_start"},next:{title:"\u7f16\u8bd1\u90e8\u7f72",permalink:"/zh-CN/docs/0.11.0/modules/agent/quick_start"}},c={},u=[{value:"\u4e00. InLong-Agent \u6982\u89c8",id:"\u4e00-inlong-agent-\u6982\u89c8",level:2},{value:"\u7b80\u8981\u7684\u67b6\u6784\u56fe\u5982\u4e0b\uff1a",id:"\u7b80\u8981\u7684\u67b6\u6784\u56fe\u5982\u4e0b",level:3},{value:"\u8bbe\u8ba1\u7406\u5ff5",id:"\u8bbe\u8ba1\u7406\u5ff5",level:3},{value:"\u5f53\u524d\u4f7f\u7528\u73b0\u72b6",id:"\u5f53\u524d\u4f7f\u7528\u73b0\u72b6",level:3},{value:"\u4e8c. InLong-Agent \u67b6\u6784\u4ecb\u7ecd",id:"\u4e8c-inlong-agent-\u67b6\u6784\u4ecb\u7ecd",level:2},{value:"\u4e09. InLong-Agent \u91c7\u96c6\u5206\u7c7b\u8bf4\u660e",id:"\u4e09-inlong-agent-\u91c7\u96c6\u5206\u7c7b\u8bf4\u660e",level:2},{value:"3.1 \u6587\u4ef6\u91c7\u96c6",id:"31-\u6587\u4ef6\u91c7\u96c6",level:3},{value:"3.2 sql\u91c7\u96c6",id:"32-sql\u91c7\u96c6",level:3},{value:"3.3 binlog \u91c7\u96c6",id:"33-binlog-\u91c7\u96c6",level:3},{value:"3.4 Metrics\u91c7\u96c6\u7c7b",id:"34-metrics\u91c7\u96c6\u7c7b",level:3}],s={toc:u},d="wrapper";function g(e){let{components:t,...i}=e;return(0,l.kt)(d,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00-inlong-agent-\u6982\u89c8"},"\u4e00. InLong-Agent \u6982\u89c8"),(0,l.kt)("p",null,"InLong-Agent\u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7c7b\u578b\u7684\u6536\u96c6\u5de5\u5177\uff0c\u81f4\u529b\u4e8e\u5b9e\u73b0\u5305\u62ecfile\u3001sql\u3001Binlog\u3001metrics\u7b49\u591a\u79cd\u5f02\u6784\u6570\u636e\u6e90\u4e4b\u95f4\u7a33\u5b9a\u9ad8\u6548\u7684\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"\u7b80\u8981\u7684\u67b6\u6784\u56fe\u5982\u4e0b"},"\u7b80\u8981\u7684\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(16034).Z,width:"1652",height:"506"})),(0,l.kt)("h3",{id:"\u8bbe\u8ba1\u7406\u5ff5"},"\u8bbe\u8ba1\u7406\u5ff5"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u6e90\u591a\u6837\u6027\u95ee\u9898\uff0cInLong-agent \u5c06\u591a\u79cd\u6570\u636e\u6e90\u62bd\u8c61\u6210\u7edf\u4e00\u7684source\u6982\u5ff5\uff0c\u5e76\u62bd\u8c61\u51fasink\u6765\u5bf9\u6570\u636e\u8fdb\u884c\u5199\u5165\u3002\u5f53\u9700\u8981\u63a5\u5165\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u6e90\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u597d\u6570\u636e\u6e90\u7684\u683c\u5f0f\u4e0e\u8bfb\u53d6\u53c2\u6570\u4fbf\u80fd\u8ddf\u505a\u5230\u9ad8\u6548\u8bfb\u53d6\u3002"),(0,l.kt)("h3",{id:"\u5f53\u524d\u4f7f\u7528\u73b0\u72b6"},"\u5f53\u524d\u4f7f\u7528\u73b0\u72b6"),(0,l.kt)("p",null,"InLong-Agent\u5728\u817e\u8baf\u96c6\u56e2\u5185\u88ab\u5e7f\u6cdb\u4f7f\u7528\uff0c\u627f\u62c5\u4e86\u5927\u90e8\u5206\u7684\u6570\u636e\u91c7\u96c6\u4e1a\u52a1\uff0c\u7ebf\u4e0a\u6570\u636e\u91cf\u8fbe\u767e\u4ebf\u7ea7\u522b\u3002"),(0,l.kt)("h2",{id:"\u4e8c-inlong-agent-\u67b6\u6784\u4ecb\u7ecd"},"\u4e8c. InLong-Agent \u67b6\u6784\u4ecb\u7ecd"),(0,l.kt)("p",null,"InLong Agent\u672c\u8eab\u4f5c\u4e3a\u6570\u636e\u91c7\u96c6\u6846\u67b6\uff0c\u91c7\u7528channel + plugin\u67b6\u6784\u6784\u5efa\u3002\u5c06\u6570\u636e\u6e90\u8bfb\u53d6\u548c\u5199\u5165\u62bd\u8c61\u6210\u4e3aReader/Writer\u63d2\u4ef6\uff0c\u7eb3\u5165\u5230\u6574\u4e2a\u6846\u67b6\u4e2d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reader\uff1aReader\u4e3a\u6570\u636e\u91c7\u96c6\u6a21\u5757\uff0c\u8d1f\u8d23\u91c7\u96c6\u6570\u636e\u6e90\u7684\u6570\u636e\uff0c\u5c06\u6570\u636e\u53d1\u9001\u7ed9channel\u3002"),(0,l.kt)("li",{parentName:"ul"},"Writer\uff1a Writer\u4e3a\u6570\u636e\u5199\u5165\u6a21\u5757\uff0c\u8d1f\u8d23\u4e0d\u65ad\u5411channel\u53d6\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u5199\u5165\u5230\u76ee\u7684\u7aef\u3002"),(0,l.kt)("li",{parentName:"ul"},"Channel\uff1aChannel\u7528\u4e8e\u8fde\u63a5reader\u548cwriter\uff0c\u4f5c\u4e3a\u4e24\u8005\u7684\u6570\u636e\u4f20\u8f93\u901a\u9053\uff0c\u5e76\u8d77\u5230\u4e86\u6570\u636e\u7684\u5199\u5165\u8bfb\u53d6\u76d1\u63a7\u4f5c\u7528")),(0,l.kt)("h2",{id:"\u4e09-inlong-agent-\u91c7\u96c6\u5206\u7c7b\u8bf4\u660e"},"\u4e09. InLong-Agent \u91c7\u96c6\u5206\u7c7b\u8bf4\u660e"),(0,l.kt)("h3",{id:"31-\u6587\u4ef6\u91c7\u96c6"},"3.1 \u6587\u4ef6\u91c7\u96c6"),(0,l.kt)("p",null,"\u6587\u4ef6\u91c7\u96c6\u5305\u542b\u5982\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("p",null,"\u7528\u6237\u914d\u7f6e\u7684\u8def\u5f84\u76d1\u542c\uff0c\u80fd\u591f\u76d1\u542c\u51fa\u521b\u5efa\u7684\u6587\u4ef6\u4fe1\u606f\n\u76ee\u5f55\u6b63\u5219\u8fc7\u6ee4\uff0c\u652f\u6301YYYYMMDD+\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8def\u5f84\u914d\u7f6e\n\u65ad\u70b9\u91cd\u4f20\uff0cInLong-Agent\u91cd\u542f\u65f6\uff0c\u80fd\u591f\u652f\u6301\u81ea\u52a8\u4ece\u4e0a\u6b21\u8bfb\u53d6\u4f4d\u7f6e\u91cd\u65b0\u8bfb\u53d6\uff0c\u4fdd\u8bc1\u4e0d\u91cd\u8bfb\u4e0d\u6f0f\u8bfb\u3002"),(0,l.kt)("h3",{id:"32-sql\u91c7\u96c6"},"3.2 sql\u91c7\u96c6"),(0,l.kt)("p",null,"\u8fd9\u7c7b\u6570\u636e\u662f\u6307\u901a\u8fc7SQL\u6267\u884c\u7684\u65b9\u5f0f\nSQL\u6b63\u5219\u5206\u89e3\uff0c\u8f6c\u5316\u6210\u591a\u6761SQL\u8bed\u53e5\n\u5206\u522b\u6267\u884cSQL\uff0c\u62c9\u53d6\u6570\u636e\u96c6\uff0c\u62c9\u53d6\u8fc7\u7a0b\u9700\u8981\u6ce8\u610f\u5bf9mysql\u672c\u8eab\u7684\u5f71\u54cd\n\u6267\u884c\u5468\u671f\uff0c\u8fd9\u79cd\u4e00\u822c\u662f\u5b9a\u65f6\u6267\u884c"),(0,l.kt)("h3",{id:"33-binlog-\u91c7\u96c6"},"3.3 binlog \u91c7\u96c6"),(0,l.kt)("p",null,"\u8fd9\u7c7b\u91c7\u96c6\u901a\u8fc7\u914d\u7f6emysql slave\u7684\u65b9\u5f0f\uff0c\u8bfb\u53d6binlog\uff0c\u5e76\u8fd8\u539f\u6570\u636e\n\u9700\u8981\u6ce8\u610fbinlog\u8bfb\u53d6\u7684\u65f6\u5019\u591a\u7ebf\u7a0b\u89e3\u6790\uff0c\u591a\u7ebf\u7a0b\u89e3\u6790\u7684\u6570\u636e\u9700\u8981\u6253\u4e0a\u987a\u5e8f\u6807\u7b7e\n\u4ee3\u7801\u57fa\u4e8e\u8001\u7248\u672c\u7684dbsync\uff0c\u4e3b\u8981\u7684\u4fee\u6539\u662f\u5c06tdbus-sender\u7684\u53d1\u9001\u6539\u4e3a\u63a8\u9001\u5230agent-channel\u7684\u65b9\u5f0f\u505a\u878d\u5408"),(0,l.kt)("h3",{id:"34-metrics\u91c7\u96c6\u7c7b"},"3.4 Metrics\u91c7\u96c6\u7c7b"),(0,l.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u91c7\u96c6\u5c5e\u4e8e\u6587\u4ef6\u91c7\u96c6\uff0c\u53ea\u4e0d\u8fc7metric\u91c7\u96c6\u7684\u65f6\u5019\uff0c\u5355\u884c\u7684\u6570\u636e\u6709\u683c\u5f0f\u89c4\u8303"))}g.isMDXComponent=!0},16034:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);
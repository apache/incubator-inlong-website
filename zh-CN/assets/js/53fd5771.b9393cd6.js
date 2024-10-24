"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[60745],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g=a.createContext({}),o=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(g.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(t),d=l,y=u["".concat(g,".").concat(d)]||u[d]||p[d]||r;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var g in n)hasOwnProperty.call(n,g)&&(s[g]=n[g]);s.originalType=e,s[u]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=t(58168),l=(t(96540),t(15680));const r={title:"\u603b\u89c8",sidebar_position:1},i=void 0,s={unversionedId:"modules/agent/overview",id:"version-2.0.0/modules/agent/overview",title:"\u603b\u89c8",description:"InLong Agent \u5c5e\u4e8e InLong \u6570\u636e\u94fe\u8def\u7684\u91c7\u96c6\u5c42\uff0c\u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7c7b\u578b\u7684\u6536\u96c6\u5de5\u5177\uff0c\u81f4\u529b\u4e8e\u5b9e\u73b0\u5305\u62ec File\u3001MySQL\u3001Pulsar\u3001Metrics \u7b49\u591a\u79cd\u5f02\u6784\u6570\u636e\u6e90\u7a33\u5b9a\u9ad8\u6548\u7684\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/modules/agent/overview.md",sourceDirName:"modules/agent",slug:"/modules/agent/overview",permalink:"/zh-CN/docs/modules/agent/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/agent/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bare Metal \u90e8\u7f72",permalink:"/zh-CN/docs/deployment/bare_metal"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/agent/quick_start"}},g={},o=[{value:"\u6574\u4f53\u67b6\u6784",id:"\u6574\u4f53\u67b6\u6784",level:3},{value:"\u8bbe\u8ba1\u7406\u5ff5",id:"\u8bbe\u8ba1\u7406\u5ff5",level:3},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:3},{value:"Task \u548c Instance",id:"task-\u548c-instance",level:4},{value:"Source \u548c Sink",id:"source-\u548c-sink",level:4},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3},{value:"\u72b6\u6001\u4fdd\u5b58",id:"\u72b6\u6001\u4fdd\u5b58",level:3},{value:"\u6570\u636e\u4e00\u81f4\u6027",id:"\u6570\u636e\u4e00\u81f4\u6027",level:3},{value:"Offset \u5237\u65b0\u673a\u5236",id:"offset-\u5237\u65b0\u673a\u5236",level:4},{value:"\u91cd\u542f\u6062\u590d\u673a\u5236",id:"\u91cd\u542f\u6062\u590d\u673a\u5236",level:4},{value:"\u6587\u4ef6\u91c7\u96c6\u673a\u5236",id:"\u6587\u4ef6\u91c7\u96c6\u673a\u5236",level:2},{value:"\u6587\u4ef6\u5939\u626b\u63cf",id:"\u6587\u4ef6\u5939\u626b\u63cf",level:3},{value:"\u6587\u4ef6\u5939\u76d1\u542c",id:"\u6587\u4ef6\u5939\u76d1\u542c",level:3},{value:"\u6587\u4ef6\u5939\u626b\u63cf\u548c\u76d1\u542c\u7ed3\u5408",id:"\u6587\u4ef6\u5939\u626b\u63cf\u548c\u76d1\u542c\u7ed3\u5408",level:3},{value:"\u6587\u4ef6\u8bfb\u53d6",id:"\u6587\u4ef6\u8bfb\u53d6",level:3}],c={toc:o},u="wrapper";function p(e){let{components:n,...r}=e;return(0,l.yg)(u,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"InLong Agent \u5c5e\u4e8e InLong \u6570\u636e\u94fe\u8def\u7684\u91c7\u96c6\u5c42\uff0c\u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7c7b\u578b\u7684\u6536\u96c6\u5de5\u5177\uff0c\u81f4\u529b\u4e8e\u5b9e\u73b0\u5305\u62ec File\u3001MySQL\u3001Pulsar\u3001Metrics \u7b49\u591a\u79cd\u5f02\u6784\u6570\u636e\u6e90\u7a33\u5b9a\u9ad8\u6548\u7684\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002"),(0,l.yg)("h3",{id:"\u6574\u4f53\u67b6\u6784"},"\u6574\u4f53\u67b6\u6784"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(36395).A,width:"791",height:"270"})),(0,l.yg)("p",null,"InLong Agent \u672c\u8eab\u4f5c\u4e3a\u6570\u636e\u91c7\u96c6\u6846\u67b6\uff0c\u4e3a\u4e86\u65b9\u4fbf\u6269\u5c55\u6570\u636e\u6e90\uff0c\u5c06\u6570\u636e\u6e90\u62bd\u8c61\u6210\u4e3a Source \u63d2\u4ef6\uff0c\u7eb3\u5165\u5230\u6574\u4e2a\u6846\u67b6\u4e2d\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Source\uff1aSource \u4e3a\u6570\u636e\u91c7\u96c6\u6a21\u5757\uff0c\u8d1f\u8d23\u91c7\u96c6\u6570\u636e\u6e90\u7684\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ul"},"Agent \u914d\u7f6e\u540c\u6b65\u7ebf\u7a0b Manager Fetcher \u4ece Manager \u62c9\u5230\u91c7\u96c6\u914d\u7f6e"),(0,l.yg)("li",{parentName:"ul"},"Instance\uff1aInstance \u7528\u4e8e\u5c06\u6570\u636e\u4ece Source \u53d6\u51fa\u5e76\u5199\u5165\u5230 DataProxy Sink")),(0,l.yg)("h3",{id:"\u8bbe\u8ba1\u7406\u5ff5"},"\u8bbe\u8ba1\u7406\u5ff5"),(0,l.yg)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u6e90\u591a\u6837\u6027\u95ee\u9898\uff0cInLong Agent \u5c06\u591a\u79cd\u6570\u636e\u6e90\u62bd\u8c61\u6210\u7edf\u4e00\u7684 Source \u6982\u5ff5\uff0c\u5e76\u62bd\u8c61\u7edf\u4e00\u7684 DataProxy Sink \u5c06\u6570\u636e\u5199\u5165 InLong \u94fe\u8def\u3002\u5f53\u9700\u8981\u63a5\u5165\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u6e90\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u597d\u6570\u636e\u6e90\u7684\u683c\u5f0f\u4e0e\u8bfb\u53d6\u53c2\u6570\u4fbf\u80fd\u505a\u5230\u9ad8\u6548\u8bfb\u53d6\u3002"),(0,l.yg)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(15266).A,width:"517",height:"256"})),(0,l.yg)("h4",{id:"task-\u548c-instance"},"Task \u548c Instance"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Task\n\u4ee3\u8868\u7528\u6237\u914d\u7f6e\u7684\u91c7\u96c6\u4efb\u52a1")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Instance\n\u91c7\u96c6\u4efb\u52a1\u7684\u5b9e\u4f8b\u5316\uff0c\u7531 Task \u751f\u6210\uff0c\u8d1f\u8d23\u5177\u4f53\u6267\u884c\u91c7\u96c6\u4efb\u52a1"))),(0,l.yg)("p",null,"\u4ee5\u6587\u4ef6\u91c7\u96c6\u4e3a\u4f8b\uff0cManager \u4e0a\u6709\u4e2a\u91c7\u96c6\u4efb\u52a1\u7684\u914d\u7f6e\uff1a ",(0,l.yg)("inlineCode",{parentName:"p"},"127.0.0.1 -> /data/log/YYYYMMDDhh.log._[0-9]+"),"\uff0c\u8868\u793a\u7528\u6237\u9700\u8981\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"127.0.0.1")," \u8fd9\u53f0\u673a\u5668\u4e0a\u91c7\u96c6\u7b26\u5408 ",(0,l.yg)("inlineCode",{parentName:"p"},"/data/log/YYYYMMDDhh.log._[0-9]+")," \u8fd9\u4e2a\u8def\u5f84\u89c4\u5219\u7684\u6570\u636e\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"\u8fd9\u5c31\u662f\u4e00\u4e2a Task"),"\u3002\u5047\u8bbe\u6ee1\u8db3\u8fd9\u4e2a\u8def\u5f84\u89c4\u5219\u7684\u6587\u4ef6\u6709 3 \u4e2a\uff1a/data/log/2024040221.log.0\uff0c/data/log/2024040221.log.1\uff0c/data/log/2024040221.log.3, Task \u4f1a\u751f\u6210 3 \u4e2a Instance \u5206\u522b\u91c7\u96c6\u8fd9 3 \u4e2a\u6587\u4ef6\u3002"),(0,l.yg)("h4",{id:"source-\u548c-sink"},"Source \u548c Sink"),(0,l.yg)("p",null,"Source \u548c Sink \u5c5e\u4e8e Instance \u4e0b\u4e00\u7ea7\u7684\u6982\u5ff5\uff0c\u6bcf\u4e2a Instance \u90fd\u6709\u4e00\u4e2a Source \u548c\u4e00\u4e2a Sink\uff0cSource \u4ece\u6570\u636e\u6e90\u8bfb\u53d6\u6570\u636e\uff0cSink \u628a\u6570\u636e\u5199\u5165\u76ee\u6807\u5b58\u50a8\u3002\u5728 InLong \u4f53\u7cfb\u4e2d\uff0c\u6570\u636e\u7ecf\u8fc7 Agent \u91c7\u96c6\u4f1a\u7edf\u4e00\u5199\u5165 DataProxy \u670d\u52a1\uff0c\u5373\u53ea\u6709  DataProxy Sink \u7c7b\u578b\u3002"),(0,l.yg)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,l.yg)("h3",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(3165).A,width:"595",height:"684"})),(0,l.yg)("p",null,"Agent \u6570\u636e\u91c7\u96c6\u4efb\u52a1\u5305\u62ec\u914d\u7f6e\u62c9\u53d6\u3001Task/Instance \u751f\u6210\u3001Task/Instance \u6267\u884c\u7b49\u8fc7\u7a0b\u3002\u4ee5\u6587\u4ef6\u91c7\u96c6\u4e3a\u4f8b\uff0c\u91c7\u96c6\u4efb\u52a1\u7684\u6574\u4e2a\u8fc7\u7a0b\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Step 1: Agent \u914d\u7f6e\u540c\u6b65\u7ebf\u7a0b Manager Fetcher \u4ece Manager \u62c9\u5230\u91c7\u96c6\u914d\u7f6e\uff0c\u6bd4\u5982 Config 1\u3001Config 2"),(0,l.yg)("li",{parentName:"ul"},"Step 2: \u540c\u6b65\u7ebf\u7a0b\u5c06\u914d\u7f6e\u63d0\u4ea4\u5230\u4efb\u52a1\u7ba1\u7406\u5668 Task Manager"),(0,l.yg)("li",{parentName:"ul"},"Step 3.1/3.2: Task Manager \u4f1a\u6839\u636e Config1 \u548c Config 2 \u751f\u6210 Task 1\u3001Task 2"),(0,l.yg)("li",{parentName:"ul"},"Step 4: Task 1 \u6839\u636e Config 1\uff0c\u626b\u63cf\u5230\u7b26\u5408 Config 1 \u89c4\u5219\u7684\u6587\u4ef6\uff0c\u6bd4\u5982 File 1\u3001File 2\uff0c\u5c06 File 1\u3001File 2 \u7684\u4fe1\u606f\u63d0\u4ea4\u5230\u5b9e\u4f8b\u7ba1\u7406\u5668 Instance Manger\uff08Instance Manager \u662f  Task \u7684\u6210\u5458\u53d8\u91cf\uff09"),(0,l.yg)("li",{parentName:"ul"},"Step 5.1/5.2: Instance Manager \u6839\u636e  File 1\u3001File 2 \u7684\u6587\u4ef6\u4fe1\u606f\u751f\u6210\u5bf9\u5e94\u7684 Instance\uff0c\u5e76\u8fd0\u884c"),(0,l.yg)("li",{parentName:"ul"},"Step 6.1/6.2: Instance \u5404\u81ea\u7684 Source \u5c06\u4f1a\u6839\u636e\u6587\u4ef6\u4fe1\u606f\u53bb\u91c7\u96c6\u6587\u4ef6\u6570\u636e\uff0c\u5e76\u5c06\u91c7\u96c6\u5230\u7684\u6570\u636e\u901a\u8fc7 Sink \u53d1\u9001\u51fa\u53bb\u3002\u6587\u4ef6\u91c7\u96c6\u3001\u53d1\u9001\u5b8c\u6210\u540e\u5c06\u5411 Instance Manager \u53d1\u9001 Instance \u5b8c\u6210\u7684\u4fe1\u53f7\uff0c\u89e6\u53d1 Instance Manager \u91ca\u653e Instance"),(0,l.yg)("li",{parentName:"ul"},"Step 7: Task \u901a\u8fc7 Instance Manager \u68c0\u6d4b\u5230\u6240\u6709\u7684 Instance \u6267\u884c\u5b8c\u6210\u540e\u5c06\u5411 Task Manager \u53d1\u9001 Task \u5b8c\u6210\u7684\u4fe1\u53f7\uff0c\u89e6\u53d1 Task Manager \u91ca\u653e Task")),(0,l.yg)("h3",{id:"\u72b6\u6001\u4fdd\u5b58"},"\u72b6\u6001\u4fdd\u5b58"),(0,l.yg)("p",null,"Agent \u6570\u636e\u91c7\u96c6\u6709\u72b6\u6001\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u91c7\u96c6\u6570\u636e\u7684\u8fde\u7eed\u6027\uff0c\u9700\u8981\u5bf9\u91c7\u96c6\u7684\u72b6\u6001\u8fdb\u884c\u4fdd\u5b58\uff0c\u9632\u6b62 Agent \u610f\u5916\u505c\u6b62\u540e\u4efb\u52a1\u65e0\u6cd5\u6062\u590d\u3002Agent \u5c06\u72b6\u6001\u5206\u6210\u4e09\u5927\u7c7b\uff1aTask\u3001Instance \u548c Offset\uff0c\u5206\u522b\u5bf9\u5e94 Task \u4efb\u52a1\u72b6\u6001\u3001Instance \u5b9e\u4f8b\u72b6\u6001\u53ca\u91c7\u96c6\u8fc7\u7a0b\u4e2d\u7684\u4f4d\u70b9\u72b6\u6001\u3002\u8fd9\u4e09\u7c7b\u72b6\u6001\u6570\u636e\u901a\u8fc7 RocksDB \u4fdd\u5b58\uff0c\u5b58\u5728\u5728\u4e09\u4e2a\u4e0d\u540c\u7684 DB \u76ee\u5f55\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(86484).A,width:"519",height:"294"})),(0,l.yg)("p",null,"InstanceDB \u8bb0\u5f55\u91cc\u4fdd\u5b58\u7740\u6307\u5b9a\u7684 Source\u3001Sink \u7c7b\u540d\uff0c\u8fd9\u662f\u7531\u4e8e Agent \u5347\u7ea7\u540e\u7c7b\u540d\u6709\u53ef\u80fd\u53d1\u751f\u53d8\u5316\uff0c\u6bd4\u5982 Source class \u7531 LogFileSourceV1 \u53d8\u6210 NewLogFileSourceV1\u3002\u540c\u65f6\uff0c\u4e00\u4e2a Task \u4f1a\u5bf9\u5e94\u591a\u4e2a Instance\uff0c\u4e3a\u4e86\u907f\u514d\u4e0d\u540c\u7684 Instance \u4e4b\u95f4\u7684\u53d8\u66f4\u4e92\u76f8\u5f71\u54cd\uff0c\u5c06 Task \u548c Instance \u4e5f\u653e\u5230\u4e86\u4e0d\u540c\u7684 DB\u3002\u5c06 Offset \u653e\u5230\u72ec\u7acb DB\uff0c\u4e3a\u4e86\u89e3\u51b3 Agent \u8fdb\u884c\u7248\u672c\u5347\u7ea7\u65f6\u80fd\u4f7f\u7528\u8001\u7248\u672c\u7684\u4f4d\u70b9\u4fe1\u606f\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(60975).A,width:"925",height:"267"})),(0,l.yg)("h3",{id:"\u6570\u636e\u4e00\u81f4\u6027"},"\u6570\u636e\u4e00\u81f4\u6027"),(0,l.yg)("h4",{id:"offset-\u5237\u65b0\u673a\u5236"},"Offset \u5237\u65b0\u673a\u5236"),(0,l.yg)("p",null,"\u6211\u4eec\u91c7\u53d6\u7684\u662f\u7c7b\u4f3c \u201c\u6ed1\u52a8\u7a97\u53e3\u201d \u7b97\u6cd5\uff1aAgent \u5728\u505c\u6b62\u5e76\u7b49\u5f85\u786e\u8ba4\u524d\u53ef\u4ee5\u53d1\u9001\u591a\u6761\u6570\u636e\uff0c\u4e0d\u5fc5\u6bcf\u53d1\u4e00\u6761\u6570\u636e\u5c31\u505c\u4e0b\u6765\u7b49\u5f85\u786e\u8ba4\uff0c\u65e2\u786e\u4fdd\u4e86 \u201dack \u6210\u529f\u624d\u66f4\u65b0 Offset\u201c \u53c8\u80fd\u4fdd\u6301\u8f83\u5feb\u7684\u53d1\u9001\u901f\u5ea6\u3002\u4e0b\u9762\u4ee5\u91c7\u96c6 4 \u6761\u6570\u636e\u4e3a\u4f8b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u9996\u5148\uff0cSource \u6709\u5e8f\u4ece\u6570\u636e\u6e90\u8bfb\u5230 4 \u6761\u6570\u636e")),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(21958).A,width:"1190",height:"138"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5176\u6b21\uff0c\u4ece Source \u53d6\u4e86 4 \u6761\u6570\u636e!!#ff0000 \u6709\u5e8f\u53d1\u5f80!! Sink\uff0cSink \u5728\u63a5\u5230\u6570\u636e\u65f6!!#ff0000 \u9996\u5148\u5c06\u6570\u636e\u7684 Offset \u8bb0\u5f55\u5230 OffsetList\uff0c\u5e76\u6807\u8bc6\u4e3a\u672a\u53d1\u9001!!")),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(57153).A,width:"1006",height:"310"})),(0,l.yg)("p",null,"  \u7136\u540e Sink \u5c06 4 \u6761\u6570\u636e\u901a\u8fc7 SDK \u53d1\u9001\uff0c\u4f46\u662f\u53ea\u6709 1\u30012\u30014 \u4e09\u6761\u6570\u636e\u8fd4\u56de\u6210\u529f\uff0c\u8fd4\u56de\u6210\u529f\u4f1a!!#ff0000 \u5c06 OffsetList \u4e2d\u5bf9\u5e94\u7684\u6807\u8bc6\u7f6e\u4e3a true!!"),(0,l.yg)("p",null,"  ",(0,l.yg)("img",{src:t(36024).A,width:"528",height:"367"})),(0,l.yg)("p",null,"  Offset \u66f4\u65b0\u7ebf\u7a0b\u5219\u4f1a\u904d\u5386 OffsetList \u53d1\u73b0 Offset 3 \u672a ack\uff0c\u4e8e\u662f\u5c31\u5c06 Offset 3 \u4e4b\u524d\u6700\u8fd1\u7684 Offset 2 \u5237\u65b0\u5230\u5b58\u50a8\uff0c\u8fd9\u5c31\u4fdd\u8bc1\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"\u6570\u636e\u4e00\u5b9a\u662f\u6210\u529f\u53d1\u9001\u5230\u4e0b\u6e38\u4e4b\u540e\u624d\u505a Offset \u5237\u65b0"),"\u3002"),(0,l.yg)("h4",{id:"\u91cd\u542f\u6062\u590d\u673a\u5236"},"\u91cd\u542f\u6062\u590d\u673a\u5236"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(51666).A,width:"719",height:"717"})),(0,l.yg)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0cTask\u3001Instance \u548c Offset \u7684\u72b6\u6001\u4fe1\u606f\u901a\u8fc7 RocksDB \u5b58\u50a8\uff0c\u5e76\u4e14\u80fd\u4fdd\u8bc1\u6570\u636e\u4e00\u5b9a\u6210\u529f\u53d1\u9001\u5230\u4e0b\u6e38\u540e\u624d\u505a Offset \u5237\u65b0\u3002\u91c7\u96c6\u4efb\u52a1\u7684\u91cd\u542f\u6062\u590d\uff0c\u4e5f\u662f\u4f9d\u8d56\u4fdd\u5b58\u7684\u72b6\u6001\uff0c\u6574\u4e2a\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Step 1: \u542f\u52a8\u65f6 Task Manager \u8bfb\u53d6 TaskDB"),(0,l.yg)("li",{parentName:"ul"},"Step 2: Task Manager \u6839\u636e TaskDB \u7684\u914d\u7f6e\u751f\u6210 Task 1\u3001Task 2"),(0,l.yg)("li",{parentName:"ul"},"Step 3: Instance Manager \u8bfb\u53d6 InstanceDB"),(0,l.yg)("li",{parentName:"ul"},"Step 4: Instance Manager \u6839\u636e InstanceDB \u7684\u8bb0\u5f55\u751f\u6210 Instance"),(0,l.yg)("li",{parentName:"ul"},"Step 5: Instance \u8bfb\u53d6 OffsetDB"),(0,l.yg)("li",{parentName:"ul"},"Step 6: Instance \u6839\u636e OffsetDB \u7684\u914d\u7f6e\u5bf9 Source \u8fdb\u884c\u521d\u59cb\u5316\uff0c\u6062\u590d Offset"),(0,l.yg)("li",{parentName:"ul"},"Step 7: \u5b9a\u65f6\u6839\u636e Manager \u914d\u7f6e\u66f4\u65b0\u4efb\u52a1")),(0,l.yg)("h2",{id:"\u6587\u4ef6\u91c7\u96c6\u673a\u5236"},"\u6587\u4ef6\u91c7\u96c6\u673a\u5236"),(0,l.yg)("h3",{id:"\u6587\u4ef6\u5939\u626b\u63cf"},"\u6587\u4ef6\u5939\u626b\u63cf"),(0,l.yg)("p",null,"\u628a\u76f8\u5e94\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u90fd\u626b\u4e00\u904d\uff0c\u7136\u540e\u5339\u914d\u4e00\u4e0b\u89c4\u5219\uff0c\u5339\u914d\u4e0a\u5c31\u7b97\u662f\u627e\u5230\u4e86\u3002\u4f46\u662f\u6587\u4ef6\u6570\u91cf\u8f83\u591a\u7684\u60c5\u51b5\u4e0b\uff0c\u626b\u63cf\u4e00\u904d\u9700\u8981\u8f83\u957f\u7684\u65f6\u95f4\u3001\u4e5f\u6bd4\u8f83\u8017\u8d44\u6e90\uff0c\u626b\u63cf\u5468\u671f\u592a\u5c0f\u5219\u8d44\u6e90\u6d88\u8017\u8fc7\u5927\uff1b\u626b\u63cf\u5468\u671f\u592a\u5927\u5219\u54cd\u5e94\u901f\u5ea6\u8fc7\u6162\u3002"),(0,l.yg)("h3",{id:"\u6587\u4ef6\u5939\u76d1\u542c"},"\u6587\u4ef6\u5939\u76d1\u542c"),(0,l.yg)("p",null,"\u4e0a\u9762\u7684\u95ee\u9898\u53ef\u4ee5\u901a\u8fc7\u6587\u4ef6\u5939\u7684\u76d1\u542c\u6765\u89e3\u51b3\u3002\u6211\u4eec\u53ea\u9700\u8981\u628a\u6587\u4ef6\u5939\u6ce8\u518c\u5230\u76d1\u542c\u5668\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u76d1\u542c\u5668\u7684\u63a5\u53e3\u67e5\u8be2\u662f\u5426\u6709\u4e8b\u4ef6\u53d1\u751f\u3002\u76d1\u542c\u7684\u4e8b\u4ef6\u7c7b\u578b\u6709\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u7b49\u3002\u4e00\u822c\u6211\u4eec\u76d1\u542c\u6587\u4ef6\u7684\u589e\u52a0\u5c31\u53ef\u4ee5\uff0c\u4fee\u6539\u7684\u5f88\u5bb9\u6613\u8fc7\u591a\uff0c\u800c\u6587\u4ef6\u7684\u5220\u9664\u4e8b\u4ef6\u5219\u53ef\u4ee5\u5728\u6587\u4ef6\u8bfb\u6587\u4ef6\u7684\u8fc7\u7a0b\u4e2d\u4e3b\u52a8\u53d1\u73b0\u3002\u4f46\u56e0\u4e3a\u76d1\u542c\u4e8b\u4ef6\u662f\u89e6\u53d1\u5f0f\u7684\uff0c\u5bb9\u6613\u51fa\u73b0\u4e00\u81f4\u6027\u95ee\u9898\u3002"),(0,l.yg)("h3",{id:"\u6587\u4ef6\u5939\u626b\u63cf\u548c\u76d1\u542c\u7ed3\u5408"},"\u6587\u4ef6\u5939\u626b\u63cf\u548c\u76d1\u542c\u7ed3\u5408"),(0,l.yg)("p",null,"\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u6211\u4eec\u91c7\u53d6\u7684\u662f\u6587\u4ef6\u5939\u626b\u63cf\u548c\u76d1\u542c\u7ed3\u5408\u7684\u6a21\u5f0f\uff0c\u7b80\u5355\u8bf4\u5c31\u662f\u5bf9\u4e8e\u4e00\u4e2a\u6587\u4ef6\u5939\u6211\u4eec\u540c\u65f6\u505a\u4e86 \u201c\u5b9a\u65f6\u626b\u63cf\u201d \u548c \u201c\u76d1\u542c\u201d\uff0c\u8fd9\u6837\u65e2\u786e\u4fdd\u4e86\u4e00\u81f4\u6027\u53c8\u80fd\u6709\u8f83\u5feb\u7684\u54cd\u5e94\u901f\u5ea6\uff0c\u5177\u4f53\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u4ece\u6587\u4ef6\u76d1\u542c\u5668\u67e5\u8be2\u662f\u5426\u6709\u65b0\u5efa\u6587\u4ef6\uff0c\u6709\u5219\u518d\u67e5\u8be2\u662f\u5426\u5df2\u7ecf\u7f13\u5b58\uff0c\u6ca1\u6709\u7f13\u5b58\u5219\u653e\u5165\u5f85\u91c7\u96c6\u961f\u5217"),(0,l.yg)("li",{parentName:"ul"},"\u5176\u6b21\uff0c\u5982\u679c\u626b\u63cf\u65f6\u95f4\u95f4\u9694\u6ee1\u8db3\uff0c\u5219\u5f00\u59cb\u626b\u63cf\u6587\u4ef6\uff0c\u5982\u679c\u626b\u63cf\u5230\u6587\u4ef6\u5219\u518d\u67e5\u8be2\u6587\u4ef6\u662f\u5426\u5df2\u7ecf\u7f13\u5b58\uff0c\u6ca1\u6709\u5219\u653e\u5165\u5f85\u91c7\u96c6\u961f\u5217"),(0,l.yg)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u518d\u5904\u7406\u5f85\u91c7\u96c6\u961f\u5217\u91cc\u7684\u6587\u4ef6\u4fe1\u606f\uff0c\u4e5f\u5c31\u662f\u5c06\u5176\u63d0\u4ea4\u5230 Instance Manager")),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(49531).A,width:"392",height:"1152"})),(0,l.yg)("h3",{id:"\u6587\u4ef6\u8bfb\u53d6"},"\u6587\u4ef6\u8bfb\u53d6"),(0,l.yg)("p",null,"\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,l.yg)("inlineCode",{parentName:"p"},"RandomAccessFile")," \u7c7b\u6765\u8bfb\u53d6\u6587\u4ef6\uff0c ",(0,l.yg)("inlineCode",{parentName:"p"},"RandomAccessFile")," \u7684\u5b9e\u4f8b\u652f\u6301\u5bf9\u968f\u673a\u8bbf\u95ee\u6587\u4ef6\u7684\u8bfb\u53d6\u548c\u5199\u5165\u3002\u968f\u673a\u8bbf\u95ee\u6587\u4ef6\u7684\u884c\u4e3a\u7c7b\u4f3c\u5b58\u50a8\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a\u5927\u578b byte \u6570\u7ec4\u3002\u5b58\u5728\u6307\u5411\u8be5\u9690\u542b\u6570\u7ec4\u7684\u5149\u6807\u6216\u7d22\u5f15\uff0c\u79f0\u4e3a\u6587\u4ef6\u6307\u9488\uff1b\u4ece\u6587\u4ef6\u6307\u9488\u5f00\u59cb\u8bfb\u53d6\u5b57\u8282\uff0c\u5e76\u968f\u7740\u5bf9\u5b57\u8282\u7684\u8bfb\u53d6\u800c\u524d\u79fb\u6b64\u6587\u4ef6\u6307\u9488\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a\u6587\u4ef6\u5171\u6709 13 \u5b57\u8282\uff0c\u6211\u4eec\u9700\u8981\u4ece Offset \u4e3a 4 \u7684\u5730\u65b9\u5f00\u59cb\u8bfb\u53d6 3 \u4e2a\u5b57\u8282\u3002\u6211\u4eec\u53ea\u9700\u8981\u628a\u6587\u4ef6\u6307\u9488\u6307\u5411 Offset \u4e3a 4 \u7684\u5730\u65b9\uff0c\u7136\u540e\u8bfb\u53d6 3 \u4e2a\u5b57\u8282\u5373\u53ef\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{src:t(71200).A,width:"723",height:"131"})))}p.isMDXComponent=!0},51666:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_10-46f2ff5cbf43a77b4eb75c1ce066c215.png"},49531:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_11-725a4b3364341b9c9e5c675c3a277deb.png"},71200:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_12-0a048b22327f6f40b75759b7f60c8e38.png"},36395:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_2-60d97d87e32276670187d047f92c36ac.png"},15266:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_3-09221d0fcd92a2ef9c340bf1076618b3.png"},3165:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_4-6390ef8e160382f6483c99d762286aea.png"},86484:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_5-fdaa7689e3320cce58b1450053b7be1d.png"},60975:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_6-561e30b9e4614d40d6b52b125730a983.png"},21958:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_7-43e7e391077c3df65b49e073f296d1de.png"},57153:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_8-574ad11b5f3a2767dc460cdde5c4cb0e.png"},36024:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_overview_9-465406cfef7946bf585c1b31c8933fb3.png"}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),v=o,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=v;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},84894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"\u603b\u89c8",sidebar_position:1},l="\u7b80\u4ecb",a={unversionedId:"modules/sort/overview",id:"version-0.12.0/modules/sort/overview",title:"\u603b\u89c8",description:"inlong-sort\u662f\u4e00\u4e2a\u57fa\u4e8eflink\u7684ETL\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\uff0c\u652f\u6301\u591a\u79cd\u5b58\u50a8\u7cfb\u7edf\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/sort/overview.md",sourceDirName:"modules/sort",slug:"/modules/sort/overview",permalink:"/zh-CN/docs/0.12.0/modules/sort/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/sort/overview.md",tags:[],version:"0.12.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"TubeMQ VS Kafka",permalink:"/zh-CN/docs/0.12.0/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/0.12.0/modules/sort/quick_start"}},s={},u=[{value:"1 \u591a\u79df\u6237\u7cfb\u7edf",id:"1-\u591a\u79df\u6237\u7cfb\u7edf",level:2},{value:"2 \u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e",id:"2-\u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e",level:2},{value:"3 \u652f\u6301\u7684\u6570\u636e\u6e90",id:"3-\u652f\u6301\u7684\u6570\u636e\u6e90",level:2},{value:"4 \u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf",id:"4-\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf",level:2},{value:"5 \u4e00\u4e9b\u5c40\u9650",id:"5-\u4e00\u4e9b\u5c40\u9650",level:2},{value:"6 \u672a\u6765\u89c4\u5212",id:"6-\u672a\u6765\u89c4\u5212",level:2},{value:"6.1 \u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90",id:"61-\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90",level:3},{value:"6.2 \u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8",id:"62-\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8",level:3},{value:"6.3 \u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f",id:"63-\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"inlong-sort\u662f\u4e00\u4e2a\u57fa\u4e8eflink\u7684ETL\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\uff0c\u652f\u6301\u591a\u79cd\u5b58\u50a8\u7cfb\u7edf\u3002\ninlong-sort\u4f9d\u8d56inlong-manager\u8fdb\u884c\u7cfb\u7edf\u5143\u6570\u636e\u7684\u7ba1\u7406\uff0c\u5143\u6570\u636e\u4f9d\u8d56zk\u8fdb\u884c\u5b58\u50a8\u53ca\u540c\u6b65\u3002"),(0,o.kt)("h1",{id:"\u7279\u6027"},"\u7279\u6027"),(0,o.kt)("h2",{id:"1-\u591a\u79df\u6237\u7cfb\u7edf"},"1 \u591a\u79df\u6237\u7cfb\u7edf"),(0,o.kt)("p",null,"inlong-sort\u652f\u6301\u591a\u79df\u6237\uff0c\u4e00\u4e2ainlong-sort\u7684\u4f5c\u4e1a\u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u540c\u6784\u7684\u6570\u636e\u6e90\uff0c\u4ee5\u53ca\u591a\u4e2a\u540c\u6784\u7684\u5b58\u50a8\u7cfb\u7edf\u3002\n\u5e76\u4e14\u9488\u5bf9\u4e0d\u540c\u7684\u6570\u636e\u6e90\uff0c\u53ef\u4ee5\u5b9a\u4e49\u4e0d\u540c\u7684\u6570\u636e\u683c\u5f0f\u4ee5\u53ca\u5b57\u6bb5\u62bd\u53d6\u65b9\u5f0f\u3002\n\u591a\u79df\u6237\u7cfb\u7edf\u4f9d\u8d56inlong-manager\u7684\u5143\u6570\u636e\u7ba1\u7406\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728inlong-manager\u7684\u524d\u7aef\u9875\u9762\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\uff0c\u5373\u53ef\u5b9e\u73b0\u3002\n\u4e3e\u4f8b\uff1a\u4ee5tubemq\u4e3asource\uff0chive\u4e3a\u5b58\u50a8\u4e3a\u4f8b\uff0c\u540c\u4e00\u4e2ainlong-sort\u7684\u4f5c\u4e1a\u53ef\u4ee5\u8ba2\u9605\u591a\u4e2atopic\u7684tubemq\u6570\u636e\uff0c\u5e76\u4e14\u6bcf\u4e2atopic\u7684\u6570\u636e\u53ef\u4ee5\u5199\u5165\u4e0d\u540c\u7684hive\u96c6\u7fa4\u3002"),(0,o.kt)("h2",{id:"2-\u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e"},"2 \u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e"),(0,o.kt)("p",null,"inlong-sort\u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e\uff0c\u6bd4\u5982\u66f4\u65b0\u6570\u636e\u6e90\u7684\u4fe1\u606f\uff0c\u6570\u636eschema\uff0c\u6216\u8005\u5199\u5165\u5b58\u50a8\u7cfb\u7edf\u7684\u4fe1\u606f\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u524d\u4fee\u6539\u6570\u636e\u6e90\u4fe1\u606f\u65f6\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u6570\u636e\u4e22\u5931\uff0c\u56e0\u4e3a\u4fee\u6539\u6570\u636e\u6e90\u4fe1\u606f\u540e\uff0c\u7cfb\u7edf\u4f1a\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a\u5168\u65b0\u7684subscribe\uff0c\u4f1a\u9ed8\u8ba4\u4ece\u6d88\u606f\u961f\u5217\u7684\u6700\u65b0\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39\u3002\n\u4fee\u6539\u6570\u636eschema\uff0c\u62bd\u53d6\u5b57\u6bb5\u89c4\u5219\u4ee5\u53ca\u5199\u5165\u5b58\u50a8\u7684\u4fe1\u606f\uff0c\u4e0d\u4f1a\u9020\u6210\u4efb\u4f55\u6570\u636e\u4e22\u5931\uff0c\u4fdd\u8bc1exactly-once"),(0,o.kt)("h2",{id:"3-\u652f\u6301\u7684\u6570\u636e\u6e90"},"3 \u652f\u6301\u7684\u6570\u636e\u6e90"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inlong-tubemq"),(0,o.kt)("li",{parentName:"ul"},"pulsar")),(0,o.kt)("h2",{id:"4-\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"},"4 \u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hive\uff08\u5f53\u524d\u53ea\u652f\u6301parquet\u6587\u4ef6\u683c\u5f0f\uff09"),(0,o.kt)("li",{parentName:"ul"},"clickhouse")),(0,o.kt)("h2",{id:"5-\u4e00\u4e9b\u5c40\u9650"},"5 \u4e00\u4e9b\u5c40\u9650"),(0,o.kt)("p",null,"\u5f53\u524dinlong-sort\u5728ETL\u7684transform\u9636\u6bb5\uff0c\u53ea\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\u529f\u80fd\uff0c\u4e00\u4e9b\u590d\u6742\u529f\u80fd\u6682\u4e0d\u652f\u6301\u3002"),(0,o.kt)("h2",{id:"6-\u672a\u6765\u89c4\u5212"},"6 \u672a\u6765\u89c4\u5212"),(0,o.kt)("h3",{id:"61-\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90"},"6.1 \u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90"),(0,o.kt)("p",null,"kafka\u7b49"),(0,o.kt)("h3",{id:"62-\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8"},"6.2 \u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8"),(0,o.kt)("p",null,"Hbase\uff0cElastic Search\u7b49"),(0,o.kt)("h3",{id:"63-\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f"},"6.3 \u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f"),(0,o.kt)("p",null,"sequece file\uff0corc"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92658],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),s=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(g.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,g=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),y=r,u=p["".concat(g,".").concat(y)]||p[y]||c[y]||o;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const o={title:"InLong \u5206\u62e3\u6570\u636e\u7ec4\u7ec7\u53ca\u534f\u8bae\u89e3\u6790",sidebar_position:5},i=void 0,l={unversionedId:"development/extension_sort/inlong_sort_data_organization_and_binary_protocol",id:"development/extension_sort/inlong_sort_data_organization_and_binary_protocol",title:"InLong \u5206\u62e3\u6570\u636e\u7ec4\u7ec7\u53ca\u534f\u8bae\u89e3\u6790",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/extension_sort/inlong_sort_data_organization_and_binary_protocol.md",sourceDirName:"development/extension_sort",slug:"/development/extension_sort/inlong_sort_data_organization_and_binary_protocol",permalink:"/zh-CN/docs/next/development/extension_sort/inlong_sort_data_organization_and_binary_protocol",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_sort/inlong_sort_data_organization_and_binary_protocol.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"InLong \u5206\u62e3\u6570\u636e\u7ec4\u7ec7\u53ca\u534f\u8bae\u89e3\u6790",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/zh-CN/docs/next/development/api"},next:{title:"\u79bb\u7ebf\u540c\u6b65 Connector \u63d2\u4ef6\u6269\u5c55",permalink:"/zh-CN/docs/next/development/extension_sort/offline_data_sync"}},g={},s=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u5f00\u53d1\u4e4b\u524d",id:"\u5f00\u53d1\u4e4b\u524d",level:2},{value:"\u6d41\u7a0b\u56fe\u793a",id:"\u6d41\u7a0b\u56fe\u793a",level:2},{value:"\u53c2\u8003 Demo",id:"\u53c2\u8003-demo",level:2},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",level:2}],m={toc:s},p="wrapper";function c(e){let{components:n,...o}=e;return(0,r.yg)(p,(0,a.A)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,r.yg)("p",null,"\u672c\u6587\u9762\u5411 InLong-Sort-Formats \u6570\u636e\u5206\u62e3\u5f00\u53d1\u4eba\u5458, \u5c1d\u8bd5\u5c3d\u53ef\u80fd\u5168\u9762\u5730\u9610\u8ff0\u5f00\u53d1\u4e00\u4e2a\u6570\u636e\u683c\u5f0f\u7684\u6570\u636e\u89e3\u6790\u8fc7\u7a0b\u3002\nInLong-Sort-Formats \u6a21\u5757\u652f\u6301\u4e24\u5927\u7c7b\u7684\u6570\u636e\u683c\u5f0f\u89e3\u6790\uff0c\u5206\u522b\u57fa\u4e8e Flink Row \u548c Flink RowData \u7c7b\u578b\u5b9e\u73b0\uff0c\u8fd9\u4e24\u7c7b\u5b9e\u73b0\u4ec5\u4ec5\u662f\uff0c\u4f7f\u7528\u7684 Flink API \u4e0d\u540c\uff0c\u672c\u6587\u57fa\u4e8e Flink RowData \u65b9\u5f0f\u7684\u5b9e\u73b0\u8fdb\u884c\u63cf\u8ff0\u3002\n\u76ee\u524d\uff0cInLong-Sort \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u683c\u5f0f(\u901a\u8fc7 InLongMsg \u683c\u5f0f\u5c01\u88c5\u7684 6 \u79cd\uff0c\u539f\u59cb\u7684\u6570\u636e\u683c\u5f0f 3 \u79cd):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"InLongMsg binlog"),(0,r.yg)("li",{parentName:"ul"},"InLongMSg CSV"),(0,r.yg)("li",{parentName:"ul"},"InLongMsg KV"),(0,r.yg)("li",{parentName:"ul"},"InLongMsg Tlog-CSV"),(0,r.yg)("li",{parentName:"ul"},"InLongMsg Tlog-KV"),(0,r.yg)("li",{parentName:"ul"},"InLongMsg PB"),(0,r.yg)("li",{parentName:"ul"},"CSV"),(0,r.yg)("li",{parentName:"ul"},"KV"),(0,r.yg)("li",{parentName:"ul"},"JSON")),(0,r.yg)("h2",{id:"\u5f00\u53d1\u4e4b\u524d"},"\u5f00\u53d1\u4e4b\u524d"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"InLongMsg \u683c\u5f0f\u4ecb\u7ecd\u53c2\u7167 ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/next/development/binary_protocol/inlong_msg"},"InLongMsg"),"\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u539f\u59cb\u6570\u636e\u7ecf\u8fc7 DataProxy \u6a21\u5757\u7684\u6570\u636e\u5747\u4f1a\u4f7f\u7528 InLongMsg \u683c\u5f0f\u8fdb\u884c\u5c01\u88c5\uff0c\u5728\u9009\u7528\u5177\u4f53\u7684\u89e3\u6790\u65b9\u5f0f\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u3002"),(0,r.yg)("li",{parentName:"ul"},"InLongMsg \u4e2d\u4f1a\u5305\u542b\u81f3\u5c11\u4e00\u6761\u6570\u636e\uff0c\u89e3\u6790\u7684\u65f6\u5019\u9700\u8981\u5904\u7406\u5305\u542b\u591a\u6761\u7684\u573a\u666f\uff1b"),(0,r.yg)("li",{parentName:"ul"},"InLongMsg \u6bcf\u6761\u6d88\u606f\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c\u6d88\u606f\u5934\u548c\u6d88\u606f\u4f53\uff0c\u5176\u4e2d\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u6d88\u606f\u5934\uff1a\u662f\u7531 k1=v1&k2=v2 \u8fd9\u79cd\u683c\u5f0f\u7684 kv \u5bf9\u7ec4\u6210\uff0c\u81f3\u5c11\u5305\u542b streamId \uff08\u6d41 Id\uff09\u3001dt\uff08\u6570\u636e\u65f6\u95f4\u6233\uff09\u7b49\u57fa\u672c\u4fe1\u606f\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6d88\u606f\u4f53\uff1a\u7531\u5177\u4f53\u8981\u89e3\u6790\u7684\u6570\u636e\u683c\u5f0f\u7684\u4e8c\u8fdb\u5236\u6570\u7ec4\u8868\u793a\uff0c\u5982 kv\u3001csv \u7b49\u683c\u5f0f\u3002")))),(0,r.yg)("h2",{id:"\u6d41\u7a0b\u56fe\u793a"},"\u6d41\u7a0b\u56fe\u793a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u539f\u59cb\u683c\u5f0f\u6570\u636e"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u89e3\u6790\u6d41\u7a0b"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b65\uff1a\u6784\u5efa\u5177\u4f53\u683c\u5f0f\u7684 DeserializationFormatFactory \u5bf9\u8c61\uff0c\u4f8b\u5982\uff1aCsvFormatFactory\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b65\uff1a\u901a\u8fc7 DeserializationFormatFactory \u5bf9\u8c61\uff0c\u83b7\u53d6\u5bf9\u5e94\u683c\u5f0f\u7684 DecodingFormat \u5bf9\u8c61\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b65\uff1a\u901a\u8fc7 DecodingFormat \u5bf9\u8c61\u83b7\u53d6 \u5177\u4f53\u683c\u5f0f\u5bf9\u5e94\u7684 DeserializationSchema \u5bf9\u8c61\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u7b2c\u56db\u6b65\uff1a\u901a\u8fc7 DeserializationSchema\uff0c\u8c03\u7528 deserialize(byte","[","]"," message) \u6216 deserialize(byte","[","]"," message, Collector\\<T",">"," out) \u65b9\u6cd5\uff0c\u4f20\u9012\u8981\u89e3\u6790\u7684\u6570\u636e\u53ca\u83b7\u53d6\u6570\u636e\u89e3\u6790\u540e\u7684\u7ed3\u679c\u3002"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6269\u5c55\u6d41\u7a0b\n\u5982\u56fe1 \u6240\u793a\uff0c\u6269\u5c55\u975e InLongMsg \u683c\u5f0f\u5c01\u88c5\u7684\u539f\u59cb\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\uff0c\u9700\u8981\u5b9e\u73b0\u56fe1 \u4e2d\u7684\u4e09\u4e2a\u63a5\u53e3\uff0c \u56fe\u4e2d\u7bad\u5934\u8868\u793a\u5b9e\u73b0\u95f4\u7684\u8c03\u7528\u5173\u7cfb\u3002\n",(0,r.yg)("img",{alt:"\u975e InLongMsg \u683c\u5f0f\u5c01\u88c5\u7684\u539f\u59cb\u6570\u636e\u683c\u5f0f\u89e3\u6790\u6269\u5c55",src:t(6493).A,width:"2372",height:"690"})," "),(0,r.yg)("p",{align:"center"},"\u56fe 1 \u975e InLongMsg \u683c\u5f0f\u5c01\u88c5\u7684\u539f\u59cb\u6570\u636e\u683c\u5f0f\u89e3\u6790\u6269\u5c55")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7ecf\u8fc7 InLong Msg \u5c01\u88c5\u7684\u683c\u5f0f\u6570\u636e"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u89e3\u6790\u6d41\u7a0b "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b65\uff1a\u6784\u5efa\u5177\u4f53\u683c\u5f0f\u7684 DeserializationFormatFactory InLongMsgCsvFormatFactory\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b65\uff1a\u901a\u8fc7 DeserializationFormatFactory \u5bf9\u8c61\uff0c\u83b7\u53d6\u5bf9\u5e94\u683c\u5f0f\u7684 DecodingFormat \u5bf9\u8c61 \uff08AbstractInLongMsgDecodingFormat \u7c7b\u7684\u5b50\u7c7b\uff09\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b65\uff1a\u901a\u8fc7 DecodingFormat \u5bf9\u8c61\u83b7\u53d6 \u5177\u4f53\u683c\u5f0f\u5bf9\u5e94\u7684 DeserializationSchema \u5bf9\u8c61 \uff08AbstractInLongMsgDeserializationSchema \u7c7b\u7684\u5b50\u7c7b\uff09\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u7b2c\u56db\u6b65\uff1a\u901a\u8fc7 DeserializationSchema\uff0c\u8c03\u7528 deserialize(byte","[","]"," message) \u6216 deserialize(byte","[","]"," message, Collector\\<T",">"," out) \u65b9\u6cd5\uff0c\u4f20\u9012\u8981\u89e3\u6790\u7684\u6570\u636e\u53ca\u83b7\u53d6\u6570\u636e\u89e3\u6790\u540e\u7684\u7ed3\u679c\u3002"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6269\u5c55\u6d41\u7a0b\n\u5982\u56fe2 \u6240\u793a\uff0c\u6269\u5c55 InLongMsg \u683c\u5f0f\u5c01\u88c5\u7684\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\uff0c\u9700\u8981\u5b9e\u73b0\u56fe 2 \u4e2d\u76841\u4e2a\u63a5\u53e3\u548c\u7ee7\u627f\u5b9e\u73b03\u4e2a\u57fa\u7c7b\uff0c\u56fe\u4e2d\u7bad\u5934\u8868\u793a\u5b9e\u73b0\u95f4\u7684\u8c03\u7528\u5173\u7cfb\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"InLongMsg \u683c\u5f0f\u5c01\u88c5\u7684\u6570\u636e\u683c\u5f0f\u89e3\u6790\u6269\u5c55",src:t(84613).A,width:"3018",height:"826"})),(0,r.yg)("p",{align:"center"},"\u56fe 2 InLongMsg \u683c\u5f0f\u5c01\u88c5\u7684\u6570\u636e\u683c\u5f0f\u89e3\u6790\u6269\u5c55"),(0,r.yg)("p",{parentName:"li"},"\u6269\u5c55\u6d41\u7a0b\u4e0e\u56fe1 \u4e2d\u6240\u793a\u6d41\u7a0b\u6700\u5927\u7684\u533a\u522b\u662f\uff0c\u4e2d\u95f4\u7684\u83b7\u53d6\u7684 DecodingFormat\u3001DeserializationSchema \u5206\u522b\u662f AbstractInLongMsgDecodingFormat \u4e0e AbstractInLongMsgDeserializationSchema \u7c7b\u7684\u5b50\u7c7b\u3002\n\u5176\u4e2d\uff0cAbstractInLongMsgDeserializationSchema \u5b50\u7c7b\u7684\u5b9e\u73b0\uff0c\u5efa\u8bae\u901a\u8fc7\u5b9e\u73b0 AbstractInLongMsgFormatDeserializer \u57fa\u7c7b\u7684\u5b50\u7c7b\uff0c \u5e76\u8c03\u7528\u5b9e\u73b0\u3002"))))),(0,r.yg)("h2",{id:"\u53c2\u8003-demo"},"\u53c2\u8003 Demo"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u539f\u59cb\u683c\u5f0f\u6570\u636e\u89e3\u6790\u6269\u5c55\n\u53c2\u8003\uff1a",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats/format-rowdata/format-rowdata-kv"},"format-rowdata-kv")),(0,r.yg)("li",{parentName:"ul"},"InLongMsg \u5c01\u88c5\u540e\u7684\u683c\u5f0f\u6570\u636e\u89e3\u6790\u6269\u5c55\n\u53c2\u8003\uff1a",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats/format-rowdata/format-inlongmsg-rowdata-kv"},"format-inlongmsg-rowdata-kv"))),(0,r.yg)("h2",{id:"\u5199\u5728\u6700\u540e"},"\u5199\u5728\u6700\u540e"),(0,r.yg)("p",null,"\u6211\u4eec\u5728 Inlong-Sort-formats \u4e2d\u63d0\u4f9b\u5e38\u89c1\u7684\u591a\u79cd\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\u5904\u7406\u5b9e\u73b0\uff0c\u4ee5\u4fbf\u8fbe\u5230\u5f00\u7bb1\u5373\u7528\u7684\u76ee\u7684\uff0c\u540c\u65f6\u8bbe\u8ba1\u4e86\u7edf\u4e00\u7684\u6570\u636e\u89e3\u6790\u5904\u7406\u6846\u67b6\uff0c\u65b9\u4fbf\u5f00\u53d1\u4eba\u5458\u57fa\u4e8e\u63a5\u5165\u7684\u6570\u636e\u683c\u5f0f\u7279\u70b9\uff0c\u81ea\u5b9a\u4e49\u5b9e\u73b0\u6570\u636e\u89e3\u6790\u3001\u8f6c\u6362\u7b49\u65b9\u5f0f\u3002\u8bda\u7136\uff0c\u5f53\u524d\u5b9e\u73b0\u65b9\u5f0f\u3001\u67b6\u6784\u8bbe\u8ba1\u4ec5\u4ec5\u662f\u4e3a\u4e86\u6ee1\u8db3\u5f53\u524d\u7684\u89e3\u6790\u5904\u7406\u9700\u6c42\u548c\u6269\u5c55\u9700\u6c42\uff0c \u5f53\u524d\u4e5f\u4ec5\u4ec5\u652f\u6301\u4e86\u51e0\u79cd\u5e38\u89c1\u7684\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\uff0c\u6211\u4eec\u4f1a\u6301\u7eed\u81f4\u529b\u4e8e\u4e30\u5bcc\u66f4\u591a\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\u548c\u89e3\u6790\u6548\u7387\u7684\u63d0\u5347\u3001\u6539\u8fdb\uff0c\u4e5f\u6b22\u8fce\u60a8\u7684\u52a0\u5165\u3002"))}c.isMDXComponent=!0},84613:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sort_data_inlongmsg_format_extend-e53cc58874633f769f7a6ced9ad8efe2.png"},6493:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sort_data_raw_format_extend-c3a092a8c77002e7e9e78063d300b1b0.png"}}]);
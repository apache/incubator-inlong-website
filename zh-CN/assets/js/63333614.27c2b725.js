"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[38398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,_=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(_,i(i({ref:t},p),{},{components:n})):r.createElement(_,i({ref:t},p))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"Manager \u63d2\u4ef6",sidebar_position:5},i=void 0,l={unversionedId:"design_and_concept/how_to_extend_data_node_for_manager",id:"design_and_concept/how_to_extend_data_node_for_manager",title:"Manager \u63d2\u4ef6",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/design_and_concept/how_to_extend_data_node_for_manager.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_extend_data_node_for_manager",permalink:"/zh-CN/docs/next/design_and_concept/how_to_extend_data_node_for_manager",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/design_and_concept/how_to_extend_data_node_for_manager.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Manager \u63d2\u4ef6",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Dashboard \u63d2\u4ef6",permalink:"/zh-CN/docs/next/design_and_concept/how_to_write_plugin_dashboard"},next:{title:"\u5982\u4f55\u7f16\u8bd1",permalink:"/zh-CN/docs/next/quick_start/how_to_build"}},c={},d=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u6269\u5c55 Extract Node",id:"\u6269\u5c55-extract-node",level:2},{value:"\u6269\u5c55 Load Node",id:"\u6269\u5c55-load-node",level:2}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,a.kt)("p",null,"Inlong \u8bbe\u8ba1\u521d\u8877\u5373\u662f\u4e3a\u4e86\u5728\u4e0d\u540c\u6570\u636e\u6e90\u4e4b\u95f4\u521b\u5efa\u6570\u636e\u6d41\uff0c\u622a\u6b62\u76ee\u524d\uff0cInlong \u5df2\u7ecf\u652f\u6301\u591a\u79cd\u5e38\u7528\u6570\u636e\u6e90\u7684\u8bfb\u53d6\u548c\u5199\u5165\uff0c\u5982 ",(0,a.kt)("strong",{parentName:"p"},"MySQL"),", ",(0,a.kt)("strong",{parentName:"p"},"Apache Kafka"),", ",(0,a.kt)("strong",{parentName:"p"},"ClickHouse")," \u7b49\uff0c\n\u8be6\u7ec6\u5185\u5bb9\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/data_node/extract_node/overview"},"\u6570\u636e\u8282\u70b9"),"\u3002 InLong \u7684\u6bcf\u79cd\u6570\u636e\u8282\u70b9\uff0c\u652f\u6301\u901a\u8fc7 Manager \u63d0\u4f9b\u7edf\u4e00\u7684\u7ba1\u7406\uff0c\u4ee5\u7b80\u5316\u7528\u6237\u7684\u4f7f\u7528\u3002\n\u672c\u6587\u4ecb\u7ecd\u901a\u8fc7 Manager \u5982\u4f55\u6269\u5c55\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u8282\u70b9\uff0c\u5b9e\u73b0\u63d0\u4f9b\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u6269\u5c55-extract-node"},"\u6269\u5c55 Extract Node"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u9700\u8981\u5728 Sort \u7ec4\u4ef6\u5185\u652f\u6301\u8be5\u6570\u636e\u6e90\uff0c\u8be6\u60c5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/design_and_concept/how_to_extend_data_node_for_sort"},"Sort \u63d2\u4ef6")),(0,a.kt)("li",{parentName:"ul"},"\u5728\u679a\u4e3e\u7c7b",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.common.enums.TaskTypeEnum"),"\u4e2d\u589e\u52a0\u5bf9\u5e94\u7684\u679a\u4e3e"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5e38\u91cf\u7c7b",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.consts.SourceType"),"\u4e2d\u540c\u6837\u589e\u52a0\u5bf9\u5e94\u5e38\u91cf"),(0,a.kt)("li",{parentName:"ul"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.pojo.source"),"\u8def\u5f84\u4e0b\u521b\u5efa\u6587\u4ef6\u5939\uff0c\u521b\u5efa\u5bf9\u5e94\u5b9e\u4f53\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.source"),"\u8def\u5f84\u4e0b\uff0c\u521b\u5efa\u5bf9\u5e94\u5de5\u5177\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u6e90\u5230",(0,a.kt)("strong",{parentName:"li"},"ExtractNode"),"\u7684\u8f6c\u6362\u51fd\u6570\uff0c\u53c2\u8003 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.util.ExtractNodeUtils"))),(0,a.kt)("h2",{id:"\u6269\u5c55-load-node"},"\u6269\u5c55 Load Node"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u9700\u8981\u5728 Sort \u7ec4\u4ef6\u5185\u652f\u6301\u8be5\u6570\u636e\u6e90\uff0c\u8be6\u60c5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/design_and_concept/how_to_extend_data_node_for_sort"},"Sort \u63d2\u4ef6")),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5e38\u91cf\u7c7b",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.consts.SinkType"),"\u4e2d\u589e\u52a0\u5bf9\u5e94\u5e38\u91cf"),(0,a.kt)("li",{parentName:"ul"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.pojo.sink"),"\u8def\u5f84\u4e0b\u521b\u5efa\u6587\u4ef6\u5939, \u521b\u5efa\u5bf9\u5e94\u5b9e\u4f53\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.sink"),"\u8def\u5f84\u4e0b\u521b\u5efa\u5bf9\u5e94\u5de5\u5177\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u6e90\u5230",(0,a.kt)("strong",{parentName:"li"},"LoadNode"),"\u7684\u8f6c\u6362\u51fd\u6570\uff0c\u53c2\u8003\u4ee3\u7801 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.pojo.sort.util.LoadNodeUtils"))))}s.isMDXComponent=!0}}]);
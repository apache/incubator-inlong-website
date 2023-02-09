"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[31629],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),m=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=m(n),c=a,k=d["".concat(u,".").concat(c)]||d[c]||s[c]||l;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29419:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u76d1\u63a7\u6307\u6807",sidebar_position:3},i=void 0,o={unversionedId:"modules/agent/metrics",id:"modules/agent/metrics",title:"\u76d1\u63a7\u6307\u6807",description:"JMX \u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/agent/metrics.md",sourceDirName:"modules/agent",slug:"/modules/agent/metrics",permalink:"/zh-CN/docs/next/modules/agent/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/agent/metrics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u76d1\u63a7\u6307\u6807",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/next/modules/agent/configure"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/dataproxy/overview"}},u={},m=[{value:"JMX \u914d\u7f6e",id:"jmx-\u914d\u7f6e",level:2},{value:"Prometheus \u914d\u7f6e",id:"prometheus-\u914d\u7f6e",level:2},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u9644\u5f55\uff1a\u6307\u6807\u9879",id:"\u9644\u5f55\u6307\u6807\u9879",level:2},{value:"AgentTaskMetric",id:"agenttaskmetric",level:3},{value:"JobMetrics",id:"jobmetrics",level:3},{value:"PluginMetric",id:"pluginmetric",level:3},{value:"SourceMetric",id:"sourcemetric",level:3},{value:"SinkMetric",id:"sinkmetric",level:3}],p={toc:m},d="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"jmx-\u914d\u7f6e"},"JMX \u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# JMX\u76d1\u542c\u7c7b\u662fAgentJmxMetricListener\nagent.domainListeners=org.apache.inlong.agent.metrics.AgentJmxMetricListener\n")),(0,a.kt)("h2",{id:"prometheus-\u914d\u7f6e"},"Prometheus \u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Prometheus\u76d1\u542c\u7c7b\u662fAgentPrometheusMetricListener\nagent.domainListeners=org.apache.inlong.agent.metrics.AgentPrometheusMetricListener\n# \u9ed8\u8ba4\u7aef\u53e3\u4e3a9080\nagent.prometheus.exporter.port=9080\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u7528\u6237\u60f3\u901a\u8fc7\u5176\u4ed6\u76d1\u63a7\u6307\u6807\u80fd\u529b\uff0c\u53ef\u4ee5\u7ee7\u627f",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.metrics.AgentMetricBaseListener"),"\u7c7b\u5e76\u5b9e\u73b0\uff0c\n\u6700\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"agent.properties")," \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"agent.domainListeners")," \u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"\u9644\u5f55\u6307\u6807\u9879"},"\u9644\u5f55\uff1a\u6307\u6807\u9879"),(0,a.kt)("h3",{id:"agenttaskmetric"},"AgentTaskMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"runningTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retryingTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u91cd\u8bd5\u7684\u4efb\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fatalTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5931\u8d25\u7684\u4efb\u52a1\u603b\u6570")))),(0,a.kt)("h3",{id:"jobmetrics"},"JobMetrics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"runningJobs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684job\u603b\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fatalJobs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5931\u8d25\u7684job\u603b\u6570")))),(0,a.kt)("h3",{id:"pluginmetric"},"PluginMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readNum"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u7684\u6761\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendNum"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7684\u6761\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendFailedNum"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5931\u8d25\u6761\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readFailedNum"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u5931\u8d25\u6761\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readSuccessNum"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u6210\u529f\u6761\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendSuccessNum"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6210\u529f\u6761\u6570")))),(0,a.kt)("h3",{id:"sourcemetric"},"SourceMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_source_count_success"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"source \u8bfb\u53d6\u6210\u529f\u6b21\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_source_count_fail"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"source \u8bfb\u53d6\u5931\u8d25\u6b21\u6570")))),(0,a.kt)("h3",{id:"sinkmetric"},"SinkMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_sink_count_success"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"sink \u5199\u5165\u6210\u529f\u6b21\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_sink_count_fail"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"sink \u5199\u5165\u5931\u8d25\u6b21\u6570")))))}s.isMDXComponent=!0}}]);
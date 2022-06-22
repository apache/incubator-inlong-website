"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2869],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(t),h=c,g=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function h(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:c,s[1]=o;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=t(87462),c=(t(67294),t(3905));const a={title:"\u67b6\u6784\u4ecb\u7ecd"},s="\u4e00\u3001\u8bf4\u660e",o={unversionedId:"modules/dataproxy/architecture",id:"version-0.11.0/modules/dataproxy/architecture",title:"\u67b6\u6784\u4ecb\u7ecd",description:"InLong-dataProxy\u5c5e\u4e8einlong proxy\u5c42\uff0c\u7528\u4e8e\u6570\u636e\u7684\u6c47\u96c6\u63a5\u6536\u4ee5\u53ca\u8f6c\u53d1\u3002\u901a\u8fc7\u683c\u5f0f\u8f6c\u6362\uff0c\u5c06\u6570\u636e\u8f6c\u4e3acache\u5c42\u53ef\u4ee5\u7f13\u5b58\u5904\u7406\u7684TDMsg1\u683c\u5f0f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/dataproxy/architecture.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/architecture",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy/architecture",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/dataproxy/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"\u67b6\u6784\u4ecb\u7ecd"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u7f16\u8bd1\u90e8\u7f72",permalink:"/zh-CN/docs/0.11.0/modules/agent/quick_start"},next:{title:"\u7f16\u8bd1\u90e8\u7f72",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy/quick_start"}},l={},i=[],p={toc:i};function u(e){let{components:n,...a}=e;return(0,c.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"InLong-dataProxy\u5c5e\u4e8einlong proxy\u5c42\uff0c\u7528\u4e8e\u6570\u636e\u7684\u6c47\u96c6\u63a5\u6536\u4ee5\u53ca\u8f6c\u53d1\u3002\u901a\u8fc7\u683c\u5f0f\u8f6c\u6362\uff0c\u5c06\u6570\u636e\u8f6c\u4e3acache\u5c42\u53ef\u4ee5\u7f13\u5b58\u5904\u7406\u7684TDMsg1\u683c\u5f0f\nInLong-dataProxy\u5145\u5f53\u4e86InLong\u91c7\u96c6\u7aef\u5230InLong\u7f13\u51b2\u7aef\u7684\u6865\u6881\uff0cdataproxy\u4ecemanager\u6a21\u5757\u62c9\u53d6\u4e1a\u52a1id\u4e0e\u5bf9\u5e94topic\u540d\u79f0\u7684\u5173\u7cfb\uff0c\u5185\u90e8\u7ba1\u7406\u591a\u4e2atopic\u7684\u751f\u4ea7\u8005\n\u5f53dataproxy\u6536\u5230\u6d88\u606f\u65f6\uff0c\u4f1a\u9996\u5148\u7f13\u5b58\u5230\u672c\u5730\u7684Channel\u4e2d\uff0c\u5e76\u4f7f\u7528\u672c\u5730\u7684producer\u5f80\u540e\u7aef\u5373cache\u5c42\u53d1\u9001\u6570\u636e\nInLong-dataProxy\u6574\u4f53\u67b6\u6784\u57fa\u4e8eApache Flume\u3002inlong-dataproxy\u5728\u8be5\u9879\u76ee\u7684\u57fa\u7840\u4e0a\uff0c\u6269\u5c55\u4e86source\u5c42\u548csink\u5c42\uff0c\u5e76\u5bf9\u5bb9\u707e\u8f6c\u53d1\u505a\u4e86\u4f18\u5316\u5904\u7406\uff0c\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u3002\n")),(0,c.kt)("h1",{id:"\u4e8c\u67b6\u6784"},"\u4e8c\u3001\u67b6\u6784"),(0,c.kt)("p",null,(0,c.kt)("img",{src:t(81275).Z,width:"1462",height:"1026"})),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"1.Source\u5c42\u5f00\u542f\u7aef\u53e3\u76d1\u542c\uff0c\u901a\u8fc7netty server\u5b9e\u73b0\u3002\u89e3\u7801\u4e4b\u540e\u7684\u6570\u636e\u53d1\u5230channel\u5c42\n2.channel\u5c42\u6709\u4e00\u4e2aselector\uff0c\u7528\u4e8e\u9009\u62e9\u8d70\u54ea\u79cd\u7c7b\u578b\u7684channel\uff0c\u5982\u679cmemory\u6700\u7ec8\u6ee1\u4e86\uff0c\u4f1a\u5bf9\u6570\u636e\u505a\u843d\u5730\u5904\u7406\n3.channel\u5c42\u7684\u6570\u636e\u4f1a\u901a\u8fc7sink\u5c42\u505a\u8f6c\u53d1\uff0c\u8fd9\u91cc\u4e3b\u8981\u662f\u5c06\u6570\u636e\u8f6c\u4e3aTDMsg1\u7684\u683c\u5f0f\uff0c\u5e76\u63a8\u9001\u5230cache\u5c42\uff08\u8fd9\u91cc\u7528\u7684\u6bd4\u8f83\u591a\u7684\u662ftube\uff09\n")),(0,c.kt)("h1",{id:"\u4e09dataproxy\u529f\u80fd\u914d\u7f6e\u8bf4\u660e"},"\u4e09\u3001DataProxy\u529f\u80fd\u914d\u7f6e\u8bf4\u660e"),(0,c.kt)("p",null,"DataProxy\u652f\u6301\u914d\u7f6e\u5316\u7684source-channel-sink\uff0c\u914d\u7f6e\u65b9\u5f0f\u4e0eflume\u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\u76f8\u540c:"),(0,c.kt)("p",null,"Source\u914d\u7f6e\u793a\u4f8b\u4ee5\u53ca\u5bf9\u5e94\u7684\u6ce8\u89e3\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"agent1.sources.tcp-source.channels = ch-msg1 ch-msg2 ch-msg3 ch-more1 ch-more2 ch-more3 ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9 ch-msg10 ch-transfer ch-back\n\u5b9a\u4e49source\u4e2d\u4f7f\u7528\u5230\u7684channel\uff0c\u6ce8\u610f\u6b64source\u4e0b\u9762\u7684\u914d\u7f6e\u5982\u679c\u6709\u4f7f\u7528\u5230channel\uff0c\u5747\u9700\u8981\u5728\u6b64\u6ce8\u91ca\n\nagent1.sources.tcp-source.type = org.apache.flume.source.SimpleTcpSource\ntcp\u89e3\u6790\u7c7b\u578b\u5b9a\u4e49\uff0c\u8fd9\u91cc\u63d0\u4f9b\u7c7b\u540d\u7528\u4e8e\u5b9e\u4f8b\u5316\uff0cSimpleTcpSource\u4e3b\u8981\u662f\u521d\u59cb\u5316\u914d\u7f6e\u5e76\u542f\u52a8\u7aef\u53e3\u76d1\u542c\n\nagent1.sources.tcp-source.msg-factory-name = org.apache.flume.source.ServerMessageFactory\n\u7528\u4e8e\u6784\u9020\u6d88\u606f\u89e3\u6790\u7684handler\uff0c\u5e76\u8bbe\u7f6eread stream handler\u548cwrite stream handler\n\nagent1.sources.tcp-source.host = 0.0.0.0    \ntcp ip\u7ed1\u5b9a\u76d1\u542c\uff0c\u9ed8\u8ba4\u7ed1\u5b9a\u6240\u6709\u7f51\u5361\n\nagent1.sources.tcp-source.port = 46801\ntcp \u7aef\u53e3\u7ed1\u5b9a\uff0c\u9ed8\u8ba4\u7ed1\u5b9a46801\u7aef\u53e3\n\nagent1.sources.tcp-source.highWaterMark=2621440 \nnetty\u6982\u5ff5\uff0c\u8bbe\u7f6enetty\u9ad8\u6c34\u4f4d\u503c\n\nagent1.sources.tcp-source.max-msg-length = 524288\n\u9650\u5236\u5355\u4e2a\u5305\u5927\u5c0f\uff0c\u8fd9\u91cc\u5982\u679c\u4f20\u8f93\u7684\u662f\u538b\u7f29\u5305\uff0c\u5219\u662f\u538b\u7f29\u5305\u5927\u5c0f\uff0c\u9650\u5236512KB\n\nagent1.sources.tcp-source.topic = test_token\n\u9ed8\u8ba4topic\u503c\uff0c\u5982\u679cgroupId\u548ctopic\u7684\u6620\u5c04\u5173\u7cfb\u627e\u4e0d\u5230\uff0c\u5219\u53d1\u9001\u5230\u6b64topic\u4e2d\n\nagent1.sources.tcp-source.attr = m=9\n\u9ed8\u8ba4m\u503c\u8bbe\u7f6e\uff0c\u8fd9\u91cc\u7684m\u503c\u662finlong\u5185\u90e8TdMsg\u534f\u8bae\u7684\u7248\u672c\n\nagent1.sources.tcp-source.connections = 5000\n\u5e76\u53d1\u8fde\u63a5\u4e0a\u7ebf\uff0c\u8d85\u8fc7\u4e0a\u9650\u503c\u65f6\u4f1a\u5bf9\u65b0\u8fde\u63a5\u505a\u65ad\u94fe\u5904\u7406\n\nagent1.sources.tcp-source.max-threads = 64\nnetty\u7ebf\u7a0b\u6c60\u5de5\u4f5c\u7ebf\u7a0b\u4e0a\u9650\uff0c\u4e00\u822c\u63a8\u8350\u9009\u62e9cpu\u7684\u4e24\u500d\n\nagent1.sources.tcp-source.receiveBufferSize = 524288\nnetty server tcp\u8c03\u4f18\u53c2\u6570\n\nagent1.sources.tcp-source.sendBufferSize = 524288\nnetty server tcp\u8c03\u4f18\u53c2\u6570\n\nagent1.sources.tcp-source.custom-cp = true\n\u662f\u5426\u4f7f\u7528\u81ea\u7814\u7684channel process\uff0c\u81ea\u7814channel process\u53ef\u5728\u4e3bchannel\u963b\u585e\u65f6\uff0c\u9009\u62e9\u5907\u7528channel\u53d1\u9001\n\nagent1.sources.tcp-source.selector.type = org.apache.flume.channel.FailoverChannelSelector\n\u8fd9\u4e2achannel selector\u5c31\u662f\u81ea\u7814\u7684channel selector\uff0c\u548c\u5b98\u7f51\u7684\u5dee\u522b\u4e0d\u5927\uff0c\u4e3b\u8981\u662f\u6709channel\u4e3b\u4ece\u9009\u62e9\u903b\u8f91\n\nagent1.sources.tcp-source.selector.master = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9\n\u6307\u5b9amaster channel\uff0c\u8fd9\u4e9bchannel\u4f1a\u88ab\u4f18\u5148\u9009\u62e9\u7528\u4e8e\u6570\u636e\u63a8\u9001\u3002\u90a3\u4e9b\u4e0d\u5728master\u3001transfer\u3001fileMetric\u3001slaMetric\u914d\u7f6e\u9879\u91cc\u7684channel\uff0c\u4f46\u5728\nchannels\u91cc\u9762\u6709\u5b9a\u4e49\u7684channel\uff0c\u7edf\u5f52\u4e3aslave channel\uff0c\u5f53master channel\u90fd\u88ab\u5360\u6ee1\u65f6\uff0c\u5c31\u4f1a\u9009\u62e9\u4f7f\u7528slave channel\uff0cslave channel\u4e00\u822c\u5efa\u8bae\u4f7f\u7528file channel\u7c7b\u578b\n\nagent1.sources.tcp-source.selector.transfer = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9\n\u6307\u5b9atransfer channel\uff0c\u627f\u63a5transfer\u7c7b\u578b\u7684\u6570\u636e\uff0c\u8fd9\u91cc\u7684transfer\u4e00\u822c\u662f\u6307\u63a8\u9001\u5230\u975etube\u96c6\u7fa4\u7684\u6570\u636e\uff0c\u4ec5\u505a\u8f6c\u53d1\uff0c\u8fd9\u91cc\u9884\u7559\u51fa\u6765\u4f9b\u540e\u7eed\u529f\u80fd\u4f7f\u7528\n\nagent1.sources.tcp-source.selector.fileMetric = ch-back\n\u6307\u5b9afileMetric channel\uff0c\u7528\u4e8e\u63a5\u6536agent\u4e0a\u62a5\u7684\u6307\u6807\u6570\u636e\n")),(0,c.kt)("p",null,"Channel\u914d\u7f6e\u793a\u4f8b\u4ee5\u53ca\u5bf9\u5e94\u7684\u6ce8\u89e3"),(0,c.kt)("p",null,"memory channel"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"agent1.channels.ch-more1.type = memory\nmemory channel\u7c7b\u578b\n\nagent1.channels.ch-more1.capacity = 10000000\nmemory channel \u961f\u5217\u5927\u5c0f\uff0c\u53ef\u7f13\u5b58\u6700\u5927\u6d88\u606f\u6761\u6570\n\nagent1.channels.ch-more1.keep-alive = 0\n\nagent1.channels.ch-more1.transactionCapacity = 20\n\u539f\u5b50\u64cd\u4f5c\u65f6\u6279\u91cf\u5904\u7406\u6700\u5927\u6761\u6570\uff0cmemory channel\u4f7f\u7528\u65f6\u9700\u8981\u7528\u5230\u52a0\u9501\uff0c\u56e0\u6b64\u4f1a\u6709\u6279\u5904\u7406\u6d41\u7a0b\u589e\u52a0\u6548\u7387\n")),(0,c.kt)("p",null,"file channel"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"agent1.channels.ch-msg5.type = file\nfile channel\u7c7b\u578b\n\nagent1.channels.ch-msg5.capacity = 100000000\nfile channel\u6700\u5927\u53ef\u7f13\u5b58\u6d88\u606f\u6761\u6570\n\nagent1.channels.ch-msg5.maxFileSize = 1073741824\nfile channel\u6587\u4ef6\u6700\u5927\u4e0a\u9650\uff0c\u5b57\u8282\u6570\n\nagent1.channels.ch-msg5.minimumRequiredSpace = 1073741824\nfile channel\u6240\u5728\u78c1\u76d8\u6700\u5c0f\u53ef\u7528\u7a7a\u95f4\uff0c\u8bbe\u7f6e\u6b64\u503c\u53ef\u4ee5\u9632\u6b62\u78c1\u76d8\u5199\u6ee1\n\nagent1.channels.ch-msg5.checkpointDir = /data/work/file/ch-msg5/check\nfile channel checkpoint\u8def\u5f84\n\nagent1.channels.ch-msg5.dataDirs = /data/work/file/ch-msg5/data\nfile channel\u6570\u636e\u8def\u5f84\n\nagent1.channels.ch-msg5.fsyncPerTransaction = false\n\u662f\u5426\u5bf9\u6bcf\u4e2a\u539f\u5b50\u64cd\u4f5c\u505a\u540c\u6b65\u78c1\u76d8\uff0c\u5efa\u8bae\u6539false\uff0c\u5426\u5219\u4f1a\u5bf9\u6027\u80fd\u6709\u5f71\u54cd\n\nagent1.channels.ch-msg5.fsyncInterval = 5\n\u6570\u636e\u4ece\u5185\u5b58flush\u5230\u78c1\u76d8\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u79d2\n")),(0,c.kt)("p",null,"Sink\u914d\u7f6e\u793a\u4f8b\u4ee5\u53ca\u5bf9\u5e94\u7684\u6ce8\u89e3"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"agent1.sinks.meta-sink-more1.channel = ch-msg1\nsink\u7684\u4e0a\u6e38channel\u540d\u79f0\n\nagent1.sinks.meta-sink-more1.type = org.apache.flume.sink.MetaSink\nsink\u7c7b\u5b9e\u73b0\uff0c\u6b64\u5904\u5b9e\u73b0\u6d88\u606f\u5411tube\u96c6\u7fa4\u63a8\u9001\u6570\u636e\n\nagent1.sinks.meta-sink-more1.master-host-port-list = \ntube\u96c6\u7fa4master\u8282\u70b9\u5217\u8868\n\nagent1.sinks.meta-sink-more1.send_timeout = 30000\n\u53d1\u9001\u5230tube\u65f6\u8d85\u65f6\u65f6\u95f4\u9650\u5236\n\nagent1.sinks.meta-sink-more1.stat-interval-sec = 60\nsink\u6307\u6807\u7edf\u8ba1\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\n\nagent1.sinks.meta-sink-more1.thread-num = 8\nSink\u7c7b\u53d1\u9001\u6d88\u606f\u7684\u5de5\u4f5c\u7ebf\u7a0b\uff0c8\u8868\u793a\u542f\u52a88\u4e2a\u5e76\u53d1\u7ebf\u7a0b\n\nagent1.sinks.meta-sink-more1.client-id-cache = true\nagent id\u7f13\u5b58\uff0c\u7528\u4e8e\u68c0\u67e5agent\u4e0a\u62a5\u6570\u636e\u53bb\u91cd\n\nagent1.sinks.meta-sink-more1.max-survived-time = 300000\n\u7f13\u5b58\u6700\u5927\u65f6\u95f4\n\nagent1.sinks.meta-sink-more1.max-survived-size = 3000000\n\u7f13\u5b58\u6700\u5927\u4e2a\u6570\n")))}u.isMDXComponent=!0},81275:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/architecture-138d6143f4f9784999e3161f0797676e.png"}}]);
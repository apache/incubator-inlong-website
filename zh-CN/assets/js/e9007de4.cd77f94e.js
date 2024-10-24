"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[51099],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function g(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):g(g({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=d(a),u=r,m=y["".concat(o,".").concat(u)]||y[u]||s[u]||l;return a?t.createElement(m,g(g({ref:n},p),{},{components:a})):t.createElement(m,g({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[y]="string"==typeof e?e:r,g[1]=i;for(var d=2;d<l;d++)g[d]=a[d];return t.createElement.apply(null,g)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74739:(e,n,a)=>{a.d(n,{l:()=>t});const t={inLongVersion:"2.1.0-SNAPSHOT"}},92566:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>g,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(96540),a(15680)),l=a(74739);const g={title:"Java SDK",sidebar_position:2},i=void 0,o={unversionedId:"sdk/dataproxy-sdk/java",id:"version-2.0.0/sdk/dataproxy-sdk/java",title:"Java SDK",description:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/sdk/dataproxy-sdk/java.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/java",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/java",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/sdk/dataproxy-sdk/java.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{title:"Java SDK",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"C++ SDK",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/cpp"},next:{title:"HTTP \u4e0a\u62a5",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/http"}},d={},p=[{value:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",level:2},{value:"\u5f15\u5165 Java SDK",id:"\u5f15\u5165-java-sdk",level:2},{value:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b",id:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b",level:2},{value:"\u521d\u59cb\u5316 SDK",id:"\u521d\u59cb\u5316-sdk",level:3},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5",id:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5",level:3},{value:"\u5173\u95ed SDK",id:"\u5173\u95ed-sdk",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u9519\u8bef\u7801\u4ecb\u7ecd",id:"\u9519\u8bef\u7801\u4ecb\u7ecd",level:2},{value:"ProxyClientConfig\u76f8\u5173\u914d\u7f6e\u9879\u4ecb\u7ecd",id:"proxyclientconfig\u76f8\u5173\u914d\u7f6e\u9879\u4ecb\u7ecd",level:2}],y={toc:p},s="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(s,(0,t.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"},"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"),(0,r.yg)("p",null,"\u5728 Dashboard \u6216\u8005\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u4efb\u52a1\uff0c\u6570\u636e\u6e90\u7c7b\u578b\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Auto Push")," (\u81ea\u4e3b\u63a8\u9001)\u3002"),(0,r.yg)("h2",{id:"\u5f15\u5165-java-sdk"},"\u5f15\u5165 Java SDK"),(0,r.yg)("p",null,"\u9700\u8981\u5728\u9879\u76ee\u4e2d\u5305\u542b SDK \u7684\u5934\u6587\u4ef6\u548c\u5e93\uff0c\u8fdb\u884c SDK \u7684\u4f7f\u7528\u3002\u5934\u6587\u4ef6\u548c\u5e93\u63d0\u4f9b\u4ee5\u4e0b\u4e24\u79cd\u83b7\u53d6\u65b9\u5f0f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u6e90\u7801\u81ea\u884c\u7f16\u8bd1\u5e76\u5c06 SDK \u5305\u90e8\u7f72\u5230\u672c\u5730\u4ed3\u5e93\uff0c\u89c1",(0,r.yg)("a",{parentName:"li",href:"https://inlong.apache.org/docs/next/quick_start/how_to_build/"},"\u5982\u4f55\u7f16\u8bd1"),"\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u76f4\u63a5\u5f15\u7528Apache\u4ed3\u5e93\u91cc\u7684\u5df2\u6709\u5e93\uff0c\u89c1",(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>dataproxy-sdk</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)))),(0,r.yg)("h2",{id:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b"},"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b"),(0,r.yg)("p",null,"\u5f15\u5165 SDK \u540e\uff0c\u901a\u8fc7\u5b9e\u4f8b\u5316\u4e00\u4e2a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/MessageSender.java"},"MessageSender"),"\u63a5\u53e3\u5bf9\u8c61\u540e\uff0c\u8c03\u7528\u76f8\u5173\u7684\u540c\u6b65\uff08sendMessage()\uff09\u6216 \u5f02\u6b65\uff08asyncSendMessage()\uff09\u63a5\u53e3\u6765\u5b8c\u6210\u5355\u6761\u6216\u591a\u6761\uff08\u6279\u91cf\uff09\u6570\u636e\u7684\u4e0a\u62a5\u4efb\u52a1\u3002\u53d1\u9001Demo\u53ef\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example/TcpClientExample.java"},"TcpClientExample.java"),"\u3002\n\u6574\u4f53\u6d41\u7a0b\u5305\u62ec\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,r.yg)("h3",{id:"\u521d\u59cb\u5316-sdk"},"\u521d\u59cb\u5316 SDK"),(0,r.yg)("p",null,"\u4eceDemo\u793a\u4f8b\u4ee3\u7801\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5ba2\u6237\u7aef\u521d\u59cb\u5316\u4e3b\u8981\u662f\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"getMessageSender()")," \u51fd\u6570\u4e2d\u5b8c\u6210\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public DefaultMessageSender getMessageSender(String localIP, String inLongManagerAddr, String inLongManagerPort,\n            String inlongGroupId, boolean requestByHttp, boolean isReadProxyIPFromLocal,\n            String configBasePath, int msgType) {\n        ProxyClientConfig dataProxyConfig = null;\n        DefaultMessageSender messageSender = null;\n        try {\n              // \u521d\u59cb\u5316\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u5176\u4e2d\u201cadmin\uff0c\u201cinlong\u201d\u662fInLong-Manager\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u5b9e\u9645\u4f7f\u7528\u65f6\u9700\u8981\u6839\u636e\u73af\u5883\u914d\u7f6e\u8fdb\u884c\u66f4\u66ff\n            dataProxyConfig = new ProxyClientConfig(localIP, requestByHttp, inLongManagerAddr,\n                    Integer.valueOf(inLongManagerPort), inlongGroupId, "admin", "inlong");\n             // \u8bbe\u7f6e\u914d\u7f6e\u4fe1\u606f\u7684\u672c\u5730\u4fdd\u5b58\u8def\u5f84\uff0c\u8be5\u8bbe\u7f6e\u53ef\u9009\uff0c\u7f3a\u7701\u60c5\u51b5\u4e0b SDK \u4f1a\u5728\u5f53\u524d\u7528\u6237\u5de5\u4f5c\u76ee\u5f55\u4e0b\u6784\u9020\u4e00\u4e2a"/.inlong/"\u76ee\u5f55\u5b58\u50a8\u914d\u7f6e\u6570\u636e\n            if (StringUtils.isNotEmpty(configBasePath)) {\n                dataProxyConfig.setConfStoreBasePath(configBasePath);\n            }\n            // \u8bbe\u7f6e\u662f\u5426\u5141\u8bb8\u4f7f\u7528\u672c\u5730\u4fdd\u5b58\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u8be5\u8bbe\u7f6e\u53ef\u9009\uff0c\u7f3a\u7701\u4e0d\u542f\u7528\n            dataProxyConfig.setReadProxyIPFromLocal(isReadProxyIPFromLocal);\n            // \u8bbe\u7f6e\u91c7\u7528TCP\u534f\u8bae\u8fdb\u884c\u6570\u636e\u4f20\u8f93\n\n            dataProxyConfig.setProtocolType(ProtocolType.TCP);\n            // \u521d\u59cb\u5316MessageSender\u5bf9\u8c61\uff0c\u5f02\u5e38\u5c06\u629b\u5f02\u5e38\n            messageSender = DefaultMessageSender.generateSenderByClusterId(dataProxyConfig);\n            // \u8bbe\u7f6e SDK \u4e0eDataProxy\u95f4\u6d88\u606f\u53d1\u9001\u7684\u6d88\u606f\u7c7b\u578b\uff0c\u8be5\u8bbe\u7f6e\u53ef\u9009\uff0c\u7f3a\u7701\u9ed8\u8ba4\u4e3a7\u4ee5\u4e8c\u8fdb\u5236\u5f62\u5f0f\u8fdb\u884c\u6570\u636e\u53d1\u9001\n            messageSender.setMsgtype(msgType);\n        } catch (Exception e) {\n            logger.error("getMessageSender has exception e = {}", e);\n        }\n        // \u8fd4\u56desender\n        return messageSender;\n    }\n')),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.yg)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.yg)("td",{parentName:"tr",align:null},"not null")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.yg)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.yg)("td",{parentName:"tr",align:null},"not null")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"not null")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"not null")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"requestByHttp"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42inlong Manager\u534f\u8bae"),(0,r.yg)("td",{parentName:"tr",align:null},"https: false , http: true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isReadProxyIPFromLocal"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u4ece\u672c\u5730\u8bfb\u53d6 DataProxy Ip"),(0,r.yg)("td",{parentName:"tr",align:null},"false")))),(0,r.yg)("h3",{id:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5"},"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5"),(0,r.yg)("p",null,"SDK \u7684\u6570\u636e\u53d1\u9001\u63a5\u53e3\u65f6\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u652f\u6301\u4ee5\u540c\u6b65\u6216\u8005\u5f02\u6b65\u6a21\u5f0f\u53d1\u9001\u5355\u6761\u6216\u591a\u6761\u6d88\u606f\u3002Demo\u91cc\u91c7\u7528\u7684\u662f\u5355\u6761\u540c\u6b65\u6d88\u606f\u53d1\u9001\uff0c\u5e76\u4e14\u6d88\u606f\u4e2d\u4e0d\u5305\u542b\u5c5e\u6027\u4fe1\u606f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public void sendTcpMessage(DefaultMessageSender sender, String inlongGroupId, String inlongStreamId, String messageBody, long dt) {\n    SendResult result = null;\n    try {\n        // \u4ee5\u540c\u6b65\u6a21\u5f0f\u53d1\u9001\u5355\u6761\u6d88\u606f\uff0c\u4e0d\u643a\u5e26\u5c5e\u6027\u4fe1\u606f\n        result = sender.sendMessage(messageBody.getBytes("utf8"), inlongGroupId, inlongStreamId,\n                0, String.valueOf(dt), 20, TimeUnit.SECONDS);\n    } catch (UnsupportedEncodingException e) {\n        e.printStackTrace();\n    }\n    logger.info("messageSender {}", result);\n}\n')),(0,r.yg)("p",null,"\u5927\u5bb6\u8fd8\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u8981\u9009\u62e9\u4e0d\u540c\u7684\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\uff0c\u5177\u4f53\u63a5\u53e3\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/MessageSender.java"},"MessageSender"),"\u63a5\u53e3\u6587\u4ef6\u4e2d\u7684\u5b9a\u4e49\uff0c\u91cc\u9762\u6709\u8be6\u7ec6\u7684\u63a5\u53e3\u4f7f\u7528\u53ca\u53c2\u6570\u5b9a\u4e49\u4ecb\u7ecd\uff0c\u8fd9\u91cc\u4e0d\u505a\u989d\u5916\u8bf4\u660e\u3002"),(0,r.yg)("h3",{id:"\u5173\u95ed-sdk"},"\u5173\u95ed SDK"),(0,r.yg)("p",null,"\u53ef\u4ee5\u8c03\u7528MessageSender\u63a5\u53e3\u5bf9\u8c61\u7684close()\u51fd\u6570\u5173\u95ed\u6570\u636e\u4e0a\u62a5\u670d\u52a1\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"sender.close();\n")),(0,r.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MessageSender")," \u63a5\u53e3\u5bf9\u8c61\u662f\u57fa\u4e8e ",(0,r.yg)("inlineCode",{parentName:"li"},"inlongGroupId")," \u8fdb\u884c\u521d\u59cb\u5316\uff0c\u56e0\u800c\u6bcf\u4e2a ",(0,r.yg)("inlineCode",{parentName:"li"},"MessageSender")," \u5bf9\u8c61\u57fa\u4e8e ",(0,r.yg)("inlineCode",{parentName:"li"},"inlongGroupId")," \u533a\u522b\u4f7f\u7528\uff0c\u540c\u4e00\u4e2a\u8fdb\u7a0b\u5185\u5141\u8bb8\u521b\u5efa\u591a\u4e2a ",(0,r.yg)("inlineCode",{parentName:"li"},"MessageSender")," \u5bf9\u8c61\uff1b"),(0,r.yg)("li",{parentName:"ul"},"SDK \u5c01\u88c5\u4e86TCP\u3001HTTP\u3001UDP\u5171\u4e09\u79cd\u4e0d\u540c\u7684\u7f51\u7edc\u4ea4\u4e92\u65b9\u5f0f\uff0c\u5e76\u5728",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk/src/main/java/org/apache/inlong/sdk/dataproxy/example"},"example"),"\u76ee\u5f55\u91cc\u7ed9\u51fa\u4e863\u79cd\u65b9\u5f0f\u7684\u4e0d\u540c\u793a\u4f8b\uff08\u53c2\u8003TcpClientExample.java\uff0cHttpClientExample.java\uff0cUdpClientExample.java\u5b9e\u73b0\uff09\uff0c\u4e1a\u52a1\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u9700\u8981\u6765\u521d\u59cb\u5316\u4e0d\u540c\u7684MessageSender\u5bf9\u8c61\uff1b"),(0,r.yg)("li",{parentName:"ul"},"SDK \u4e2d\u5305\u542b\u4e86\u590d\u6742\u7684\u7f51\u7edc\u4ea4\u4e92\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5c06 SDK \u4f5c\u4e3a\u5e38\u9a7b\u670d\u52a1\u5bf9\u8c61\u6765\u4f7f\u7528\uff0c\u907f\u514d\u540c\u4e2a\u8fdb\u7a0b\u4e2d\u9014\u9891\u7e41\u5730\u521d\u59cb\u5316\u548c\u5173\u95edMessageSender\u5bf9\u8c61\uff08\u91cd\u590d\u521d\u59cb\u5316\u548c\u5173\u95ed\u4f1a\u5e26\u6765\u5f88\u5927\u7684\u8d44\u6e90\u5f00\u9500\uff0c\u5e76\u4e14\u5f71\u54cd\u6570\u636e\u4e0a\u62a5\u7684\u65f6\u6548\u6027\uff09\uff1b"),(0,r.yg)("li",{parentName:"ul"},"SDK \u4e0d\u5bf9\u53d1\u9001\u5931\u8d25\u7684\u6d88\u606f\u505a\u91cd\u53d1\u5904\u7406\uff0c\u7528\u6237\u5728\u4f7f\u7528 SDK \u4e0a\u62a5\u6570\u636e\u65f6\u9047\u5230\u53d1\u9001\u5931\u8d25\uff0c\u4e1a\u52a1\u8981\u6839\u636e\u81ea\u8eab\u6570\u636e\u8981\u6c42\u6765\u51b3\u5b9a\u662f\u5426\u91cd\u53d1\u6d88\u606f\uff0c\u907f\u514d\u6570\u636e\u4e22\u5931\u3002")),(0,r.yg)("h2",{id:"\u9519\u8bef\u7801\u4ecb\u7ecd"},"\u9519\u8bef\u7801\u4ecb\u7ecd"),(0,r.yg)("p",null,"\u5e38\u89c1result\u4f1a\u6709\u4ee5\u4e0b\u51e0\u79cd\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.OK"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u53d1\u9001\u6210\u529f"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.TIMEOUT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u54cd\u5e94\u8d85\u65f6"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.CONNECTION_BREAK"),(0,r.yg)("td",{parentName:"tr",align:null},"\u94fe\u63a5\u88ab\u65ad\u5f00"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.THREAD_INTERRUPT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2d\u65ad"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.ASYNC_CALLBACK_BUFFER_FULL"),(0,r.yg)("td",{parentName:"tr",align:null},"SDK \u5f85\u56de\u5305\u8bf7\u6c42\u6d88\u606f\u6ee1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd9\u79cd\u60c5\u51b5\u4e00\u822c\u4e3a\u524d\u7aef\u751f\u4ea7\u6570\u636e\u7684\u901f\u5ea6\u8d85\u8fc7\u670d\u52a1\u7aef\u7684\u54cd\u5e94\u901f\u5ea6\u5bfc\u81f4\uff0c\u5efa\u8bae\u53d1\u9001\u65f6\u9002\u5f53sleep\u907f\u514d\u963b\u585e")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.NO_CONNECTION"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6ca1\u6709\u53ef\u7528\u94fe\u63a5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd9\u79cd\u60c5\u51b5\u5efa\u8bae\u4e1a\u52a1\u589e\u5927\u53ef\u7528\u94fe\u63a5\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.INVALID_DATA"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u65e0\u6548\uff0c\u901a\u8fc7HTTP\u4e0a\u62a5\u6570\u636eDataProxy\u8fd4\u56de\u5931\u8d25"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.INVALID_ATTRIBUTES"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7684\u6570\u636e\u5305\u4e0d\u5408\u7406\uff0c\u6bd4\u5982\u4e3a\u7a7a\u6570\u636e\u5305\u6216\u5305\u542b\u4e86\u7cfb\u7edf\u9884\u5b9a\u4e49\u5c5e\u6027"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SendResult.UNKOWN_ERROR"),(0,r.yg)("td",{parentName:"tr",align:null},"\u672a\u77e5\u9519\u8bef"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"proxyclientconfig\u76f8\u5173\u914d\u7f6e\u9879\u4ecb\u7ecd"},"ProxyClientConfig\u76f8\u5173\u914d\u7f6e\u9879\u4ecb\u7ecd"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bbe\u7f6e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8c03\u6574\u5efa\u8bae"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setAliveConnections(int aliveConnections)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eDataProxy\u8fde\u63a5\u6570\u5927\u5c0f\uff1b\u9ed8\u8ba4\u503c\uff1a3"),(0,r.yg)("td",{parentName:"tr",align:null},"1\uff09\u6570\u636e\u91cf\u5927\u6216\u5bf9\u65f6\u5ef6\u654f\u611f\uff0c\u9002\u5f53\u589e\u5927\u8be5\u53c2\u6570\uff1b2\uff09\u6839\u636eDataProxy\u96c6\u7fa4\u5927\u5c0f\uff0c\u9002\u5f53\u8c03\u6574\u8be5\u53c2\u6570\uff0c\u6bd4\u5982\u96c6\u7fa4\u89c4\u6a21\u4e3a30\uff0c\u8be5\u503c\u53ef\u8bbe\u4e3a5\uff5e10\uff1b3\uff09\u73b0\u7f51\u7ecf\u9a8c\u503c15\uff5e20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setTotalAsyncCallbackSize(int asyncCallbackSize)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5f02\u6b65\u53d1\u9001\u65f6 SDK \u5185\u90e8\u7f13\u51b2\u961f\u5217\u5927\u5c0f\uff1b\u7f13\u5b58\u961f\u5217\u7528\u4e8e\u6682\u5b58\u5df2\u53d1\u9001\u4f46\u672a\u6536\u5230\u670d\u52a1\u7aefAck\u7684\u6570\u636e\u5305\u3002\u5f53\u7f13\u51b2\u6570\u636e\u8fbe\u5230\u8be5\u503c\uff0c\u4e1a\u52a1\u7ee7\u7eed\u5f02\u6b65\u4e0a\u62a5\u6570\u636e\uff0c\u4f1a\u6536\u5230ASYNC_CALLBACK_BUFFER_FULL\u5f02\u5e38\uff1b\u9ed8\u8ba4\u503c\uff1a 50000"),(0,r.yg)("td",{parentName:"tr",align:null},"1\uff09\u901a\u5e38\u65e0\u9700\u8c03\u6574\u8be5\u53c2\u6570\uff1b2\uff09\u6570\u636e\u91cf\u975e\u5e38\u5927\u6216\u8005DataProxy\u670d\u52a1\u7aef\u8d1f\u8f7d\u8f83\u9ad8\u60c5\u51b5\u4e0b\uff0c\u53ef\u9002\u5f53\u589e\u5927\uff0c\u6ce8\u610f\u4e0d\u8981\u592a\u5927\u5bfc\u81f4OOM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setConnectTimeoutMillis(long connectTimeoutMillis)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8fde\u63a5\u8d85\u65f6\u65f6\u957f\uff0c\u5355\u4f4dms\uff0c\u7f3a\u770140000"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6839\u636e\u5b9e\u9645\u73af\u5883\u9700\u8981\u8bbe\u7f6e")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setRequestTimeoutMillis(long requestTimeoutMillis)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u957f\uff0c\u5355\u4f4dms\uff0c\u7f3a\u770140000"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6839\u636e\u9700\u8981\u8c03\u6574\u8bbe\u7f6e")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setMaxTimeoutCnt(int maxTimeoutCnt)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5355\u4e2aDataProxy\u8fde\u63a5\u8d85\u65f6\u65ad\u8fde\u6b21\u6570\uff1b SDK \u5185\u90e8\u4f1a\u5bf9\u8d85\u65f6\u672a\u6536\u5230Ack\u7684DataProxy\u8fde\u63a5\u8fdb\u884c\u8ba1\u6570\uff0c\u77ed\u65f6\u95f4\u5185\u540c\u4e00\u4e2a\u8fde\u63a5\u8d85\u65f6\u6570\u8fbe\u5230\u8be5\u503c\uff0c\u4f1a\u4e3b\u52a8\u65ad\u5f00\u8be5\u8fde\u63a5\uff0c\u9009\u62e9\u5176\u4ed6DataProxy\u521b\u5efa\u65b0\u7684\u8fde\u63a5\u8fdb\u884c\u6570\u636e\u53d1\u9001\u3002\u9ed8\u8ba4\u503c\uff1a3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679cDataProxy\u96c6\u7fa4\u672c\u8eab\u89c4\u6a21\u8f83\u5c0f\uff0c\u53ef\u9002\u5f53\u8c03\u5927\u8be5\u53c2\u6570\uff0c\u907f\u514d\u77ed\u65f6\u95f4\u9891\u7e41\u65ad\u8fde")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setManagerConnectionTimeout(int managerConnectionTimeout)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e SDK \u8fde\u63a5Manager\u7684\u8d85\u65f6\u65f6\u957f\uff0c\u5355\u4f4dms\uff0c\u9ed8\u8ba410000ms"),(0,r.yg)("td",{parentName:"tr",align:null},"1\uff09\u7f51\u7edc\u73af\u5883\u4e0d\u597d\u7684\u60c5\u51b5\u4e0b\u53ef\u9002\u5f53\u589e\u5927\u8be5\u503c\uff1b2\uff09\u5ba2\u6237\u7aef\u89e3\u6790\u57df\u540d\u65f6\u95f4\u8f83\u957f\u60c5\u51b5\u4e0b\u53ef\u9002\u5f53\u589e\u5927\u8be5\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setManagerSocketTimeout(int managerSocketTimeout)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e SDK \u4eceManager\u8fde\u63a5\u8bfb\u53d6DataProxy\u5217\u8868\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\uff0c\u9ed8\u8ba4\u503c30000"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u73af\u5883\u4e0d\u597d\u7684\u60c5\u51b5\u4e0b\u53ef\u9002\u5f53\u589e\u5927\u8be5\u503c")))))}u.isMDXComponent=!0}}]);
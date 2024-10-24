"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[55035],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,y=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return t?n.createElement(y,o(o({ref:a},g),{},{components:t})):n.createElement(y,o({ref:a},g))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},69866:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const i={title:"Agent binary protocol",sidebar_position:2},o=void 0,s={unversionedId:"development/binary_protocol/agent",id:"version-2.0.0/development/binary_protocol/agent",title:"Agent binary protocol",description:"Overview",source:"@site/versioned_docs/version-2.0.0/development/binary_protocol/agent.md",sourceDirName:"development/binary_protocol",slug:"/development/binary_protocol/agent",permalink:"/docs/development/binary_protocol/agent",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/development/binary_protocol/agent.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{title:"Agent binary protocol",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"InLongMsg format definition and usage",permalink:"/docs/development/binary_protocol/inlong_msg"},next:{title:"DataProxy binary protocol and usage",permalink:"/docs/development/binary_protocol/dataproxy_binary"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Data flow",id:"data-flow",level:2},{value:"Binary protocol",id:"binary-protocol",level:2},{value:"Source",id:"source",level:3},{value:"SourceData",id:"sourcedata",level:4},{value:"Cache queue",id:"cache-queue",level:4},{value:"Message",id:"message",level:4},{value:"Instance",id:"instance",level:3},{value:"Sink",id:"sink",level:3},{value:"ProxyMessage",id:"proxymessage",level:4},{value:"ProxyMessageCache",id:"proxymessagecache",level:4},{value:"SenderMessage",id:"sendermessage",level:4},{value:"SenderManager",id:"sendermanager",level:4},{value:"Summary",id:"summary",level:2}],g={toc:c},d="wrapper";function u(e){let{components:a,...i}=e;return(0,r.yg)(d,(0,n.A)({},g,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"This article mainly introduces the flow of Agent data between submodules and the corresponding binary protocol."),(0,r.yg)("h2",{id:"data-flow"},"Data flow"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(66322).A,width:"1011",height:"353"})),(0,r.yg)("p",null,"When introducing the Agent module, we know that there are Source and Sink modules in the Agent, where Source is responsible\nfor collecting data from the data source; Sink is responsible for sending data downstream, and currently we believed that\ndownstream only had DataProxy; Instance is responsible for moving data from Source to Sink."),(0,r.yg)("h2",{id:"binary-protocol"},"Binary protocol"),(0,r.yg)("h3",{id:"source"},"Source"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(4810).A,width:"717",height:"188"})),(0,r.yg)("p",null,"Source has three main functions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Collect data from the data source and fill each data into a new SourceData object.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Put the filled SourceData object into the cache queue of the Source module.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When calling the Read method of the Source module externally, extract a SourceData from the cache queue, assemble it into a Message, and return it."))),(0,r.yg)("h4",{id:"sourcedata"},"SourceData"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class SourceData {\n    private byte[] data;\n    private String offset;\n}\n")),(0,r.yg)("p",null,"The data collected from the data source may have various formats, so we use byte[] to store it (the original data is kept in byte[] during\nsubsequent stages of circulation). At the same time, each piece of data will have corresponding positional information, and due to the diversity\nof positional information, we use String to store positional information."),(0,r.yg)("h4",{id:"cache-queue"},"Cache queue"),(0,r.yg)("p",null,"As the name suggests, we put SourceData into the Queue for caching purposes, which can solve the problem of mismatched processing speeds between\nthe data source and the Agent internally. The Queue type is LinkedBlockingQueue, which prevents problems with multi-threaded access. As it is a\npure memory operation, it can ensure performance."),(0,r.yg)("h4",{id:"message"},"Message"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface Message {\n\n    byte[] getBody();\n    Map<String, String> getHeader();\n}\n")),(0,r.yg)("p",null,"The return type of the Read method provided by Source is Message, and the specific implementation is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class DefaultMessage implements Message {\n\n    private final byte[] body;\n    protected final Map<String, String> header;\n    \n    ...\n}\n")),(0,r.yg)("p",null,"As mentioned earlier, Message is filled with SourceData, specifically in the case of DefaultMessage::body, which\nis filled with SourceData::data; The Default Message::header is filled with SourceData::offset and other attributes,\neach of which is a k/v pair of the Default Message::header. Usually, we also fill in the inlongStreamId of this message here."),(0,r.yg)("h3",{id:"instance"},"Instance"),(0,r.yg)("p",null,"The main function of Instance is to retrieve the Message from the Source and write it to the Sink, without generating any\nnew binary protocol during the process."),(0,r.yg)("h3",{id:"sink"},"Sink"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(84528).A,width:"880",height:"150"})),(0,r.yg)("p",null,"Currently, in our implementation, there is only one type of Sink that can be considered, and that is DataProxy Sink. There are four main functions of DataProxy Sink:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Call the Write method externally to write Message type data to the DataProxy Sink, and fill the ProxyMessage with Message internally within the method.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Put the ProxyMessage into the ProxyMessageCache, which will store ProxyMessages with different inlongStreamId separately.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Retrieve SenderMessage (composed of multiple ProxyMessages) from cache and call SenderManager::sendBatch to send.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After receiving SenderMessage, SenderManager constructs the required callback object AgentSenderCallback for the DataProxy SDK method to send asynchronously."))),(0,r.yg)("h4",{id:"proxymessage"},"ProxyMessage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class ProxyMessage implements Message {\n\n    private final byte[] body;\n    private final Map<String, String> header;\n    OffsetAckInfo ackInfo;\n")),(0,r.yg)("p",null,"The body and header of ProxyMessage are copied from the Message. In addition, a new ackInfo has been added to record the sending status:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class OffsetAckInfo {\n\n    private String offset;\n    private int len;\n    private Boolean hasAck;\n}\n")),(0,r.yg)("p",null,"The offset comes from the Message::header; Len comes from Message::body len; HasAck indicates whether the information was successfully sent and is initialized to false."),(0,r.yg)("h4",{id:"proxymessagecache"},"ProxyMessageCache"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(59327).A,width:"413",height:"242"})),(0,r.yg)("p",null,"The filled ProxyMessage will first be placed in the ProxyMessageCache:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class ProxyMessageCache {\n\n    private final String taskId;\n    private final String instanceId;\n    private final int maxPackSize;\n    private final int maxQueueNumber;\n    private final String groupId;\n    // streamId -> list of proxyMessage\n    private final ConcurrentHashMap<String, LinkedBlockingQueue<ProxyMessage>> messageQueueMap;\n    private long dataTime;\n}\n")),(0,r.yg)("p",null,"The core property of ProxyMessageCache is messageQueueMap, whose key is inlongStreamId and value is a queue.\nIn addition, ProxyMessageCache will return SenderMessage through the fetchSenderMessage method. SenderMessage\nconsists of multiple ProxyMessages, allowing for batch sending of data."),(0,r.yg)("h4",{id:"sendermessage"},"SenderMessage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class SenderMessage {\n\n    private List<byte[]> dataList;\n    private Map<String, String> extraMap;\n    private List<OffsetAckInfo> offsetAckList;\n}\n")),(0,r.yg)("p",null,"SenderMessage is built inside the ProxyMessageCache and consists of multiple ProxyMessages with the same inlongStreamId:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The dataList is filled with multiple ProxyMessage::body;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ExtraMap includes audit versions and predefined fields (obtained from task configurations);")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"OffsetAckList is filled with multiple ProxyMessage::ackInfo;"))),(0,r.yg)("h4",{id:"sendermanager"},"SenderManager"),(0,r.yg)("p",null,"SenderManager directly calls the DataProxy SDK internally for data transmission, requiring three core parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Original data content"),(0,r.yg)("li",{parentName:"ul"},"Expand attributes"),(0,r.yg)("li",{parentName:"ul"},"Callback object\nThe original data content is provided by dataList; Extended attributes are provided by extraMap; The callback content needs to construct AgentSenderCallback to provide:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"private class AgentSenderCallback implements SendMessageCallback {\n\n        private final SenderMessage message;\n  \n        AgentSenderCallback(SenderMessage message, int retry) {\n            this.message = message;\n        }\n\n        @Override\n        public void onMessageAck(SendResult result) {\n        ...\n        }\n}\n")),(0,r.yg)("p",null,"The onMessageAck method of the callback object will carry the sending result. After returning success, it will iterate through the\nSenderMessage::offsetAckList and set OffsetAckInfo::hasAck to true."),(0,r.yg)("h2",{id:"summary"},"Summary"),(0,r.yg)("p",null,"The data goes through the following data structure from the data source to the DataProxy SDK within the Agent:"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(12167).A,width:"1338",height:"208"})),(0,r.yg)("p",null,"We can see from the various data types introduced above that the original data content of each structure is stored using byte[]. On the one hand, it can preserve the original\ndata information without being affected by the encoding format, and on the other hand, it can reduce the cost of string conversion, making the overall efficiency higher."))}u.isMDXComponent=!0},66322:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/agent_1-656aa96bcb027c1c7bfdd633f77a6053.png"},59327:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/cache_1-a72cb3466285cc6237439281c1f385f3.png"},84528:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sink_1-71f1e8ae78474e90b1d9265890f84751.png"},4810:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/source_1-46be05ebc6b0536e08c9c46eee2dcd1c.png"},12167:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/total-f5ffd13812385a153ae8b72072aa4f44.png"}}]);
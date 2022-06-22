"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Deployment",sidebar_position:2},i=void 0,l={unversionedId:"modules/agent/quick_start",id:"version-1.0.0/modules/agent/quick_start",title:"Deployment",description:"Configuration",source:"@site/versioned_docs/version-1.0.0/modules/agent/quick_start.md",sourceDirName:"modules/agent",slug:"/modules/agent/quick_start",permalink:"/docs/1.0.0/modules/agent/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/modules/agent/quick_start.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.0.0/modules/agent/overview"},next:{title:"File",permalink:"/docs/1.0.0/modules/agent/file"}},s={},p=[{value:"Configuration",id:"configuration",level:3},{value:"Start",id:"start",level:2},{value:"Add job configuration in real time",id:"add-job-configuration-in-real-time",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd inlong-agent\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Online operation needs to pull the configuration from inlong-manager, the configuration conf/agent.properties is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"agent.local.ip=Write local ip\nagent.manager.vip.http.host=manager host\nagent.manager.vip.http.port=manager port\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"After decompression, run the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh agent.sh start\n")),(0,o.kt)("h2",{id:"add-job-configuration-in-real-time"},"Add job configuration in real time"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    curl --location --request POST \'http://localhost:8008/config/job\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n    "job": {\n    "dir": {\n    "path": "",\n    "pattern": "/data/inlong-agent/test.log"\n    },\n    "trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n    "id": 1,\n    "thread": {\n    "running": {\n    "core": "4"\n    },\n    "onejob": true\n    },\n    "name": "fileAgentTest",\n    "source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n    },\n    "proxy": {\n  "inlongGroupId": "groupId10",\n  "inlongStreamId": "groupId10"\n    },\n    "op": "add"\n    }\'\n')),(0,o.kt)("p",null,"The meaning of each parameter is \uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"job.dir.pattern: Configure the read file path, which can include regular expressions"),(0,o.kt)("li",{parentName:"ul"},"job.trigger: Trigger name, the default is DirectoryTrigger, the function is to monitor the files under the folder to generate events"),(0,o.kt)("li",{parentName:"ul"},"job.source: The type of data source used, the default is TextFileSource, which reads text files"),(0,o.kt)("li",{parentName:"ul"},"job.sink\uff1aThe type of writer used, the default is ProxySink, which sends messages to the proxy"),(0,o.kt)("li",{parentName:"ul"},"proxy.groupId: The groupId type used when writing proxy, groupId is group id showed on data access in inlong-manager, not the topic name."),(0,o.kt)("li",{parentName:"ul"},"proxy.streamId: The streamId type used when writing proxy, streamId is the data flow id showed on data flow window in inlong-manager")))}c.isMDXComponent=!0}}]);
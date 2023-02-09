"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[54317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},o=void 0,i={unversionedId:"deployment/standalone",id:"version-1.1.0/deployment/standalone",title:"\u5355\u673a\u90e8\u7f72",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/zh-CN/docs/1.1.0/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/deployment/standalone.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Pulsar \u793a\u4f8b",permalink:"/zh-CN/docs/1.1.0/quick_start/pulsar_example"},next:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/docs/1.1.0/deployment/docker"}},p={},s=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u51c6\u5907\u6d88\u606f\u961f\u5217",id:"\u51c6\u5907\u6d88\u606f\u961f\u5217",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"DB \u4f9d\u8d56",id:"db-\u4f9d\u8d56",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u6ce8\u518c\u6d88\u606f\u961f\u5217",id:"\u6ce8\u518c\u6d88\u606f\u961f\u5217",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,a.kt)("li",{parentName:"ul"},"Flink 1.13.5")),(0,a.kt)("h2",{id:"\u51c6\u5907\u6d88\u606f\u961f\u5217"},"\u51c6\u5907\u6d88\u606f\u961f\u5217"),(0,a.kt)("p",null,"InLong \u5f53\u524d\u652f\u6301\u4ee5\u4e0b\u6d88\u606f\u961f\u5217\uff0c\u6839\u636e\u4f7f\u7528\u60c5\u51b5",(0,a.kt)("strong",{parentName:"p"},"\u9009\u62e9\u5176\u4e00"),"\u5373\u53ef\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.1.0/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"\u4e0b\u8f7d\u9875\u9762")," \u83b7\u53d6\u4e8c\u8fdb\u5236\u5305\uff0c\u6216\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/quick_start/how_to_build"},"\u5982\u4f55\u7f16\u8bd1")," \u7f16\u8bd1\u9700\u8981\u7684\u7248\u672c\u3002"),(0,a.kt)("h2",{id:"db-\u4f9d\u8d56"},"DB \u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165\u4ee5\u4e0b\u76ee\u5f55\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"conf/inlong.conf"),"\u6587\u4ef6\u4e2d\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u66ff\u6362\u53c2\u6570\uff1a"),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,a.kt)("h2",{id:"\u6ce8\u518c\u6d88\u606f\u961f\u5217"},"\u6ce8\u518c\u6d88\u606f\u961f\u5217"),(0,a.kt)("p",null,"\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/modules/manager/quick_start#register-message-queue"},"\u6ce8\u518c\u6b65\u9aa4")," \u5411 Manger \u6ce8\u518c\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,a.kt)("p",null,"\u5f53\u6240\u6709\u7ec4\u4ef6\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"user: admin\npassword: inlong\n")))}d.isMDXComponent=!0}}]);
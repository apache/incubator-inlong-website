"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67265],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,g=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?r.createElement(g,o(o({ref:e},m),{},{components:n})):r.createElement(g,o({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14522:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Bare Metal \u90e8\u7f72",sidebar_position:4},o=void 0,i={unversionedId:"deployment/bare_metal",id:"version-0.12.0/deployment/bare_metal",title:"Bare Metal \u90e8\u7f72",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/zh-CN/docs/0.12.0/deployment/bare_metal",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/deployment/bare_metal.md",tags:[],version:"0.12.0",sidebarPosition:4,frontMatter:{title:"Bare Metal \u90e8\u7f72",sidebar_position:4},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/0.12.0/deployment/k8s"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/agent/overview"}},p={},u=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u5b89\u88c5InLong",id:"\u5b89\u88c5inlong",level:2},{value:"\u521b\u5efa\u6570\u636e\u6d41",id:"\u521b\u5efa\u6570\u636e\u6d41",level:2}],m={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ZooKeeper 3.5+"),(0,a.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,a.kt)("li",{parentName:"ul"},"Flink 1.9.x"),(0,a.kt)("li",{parentName:"ul"},"Apache Pulsar 2.6+ (\u53ef\u9009)")),(0,a.kt)("h2",{id:"\u5b89\u88c5inlong"},"\u5b89\u88c5InLong"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u987a\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7b2c\u4e09\u65b9\u4f9d\u8d56"),(0,a.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u6307\u5f15"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"inlong-tubemq-server"),(0,a.kt)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-CN/docs/0.12.0/modules/tubemq/quick_start"},"InLong TubeMQ Server")),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u4f7f\u7528Apache Pulsar\uff0c\u53ef\u4e0d\u5b89\u88c5\u8be5\u7ec4\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"inlong-tubemq-manager"),(0,a.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-CN/docs/0.12.0/modules/tubemq/tubemq-manager/quick_start"},"InLong TubeMQ Manager")),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u4f7f\u7528Apache Pulsar\uff0c\u53ef\u4e0d\u5b89\u88c5\u8be5\u7ec4\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"inlong-manager"),(0,a.kt)("td",{parentName:"tr",align:null},"MySQL, ZooKeeper"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-CN/docs/0.12.0/modules/manager/quick_start"},"InLong Manager")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"inlong-website"),(0,a.kt)("td",{parentName:"tr",align:null},"Nginx \u6216\u8005 Docker"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-CN/docs/0.12.0/modules/website/quick_start"},"InLong WebSite")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-CN/docs/0.12.0/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"inlong-sort"),(0,a.kt)("td",{parentName:"tr",align:null},"ZooKeeper, Flink"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-CN/docs/0.12.0/modules/sort/quick_start"},"InLong Sort")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"inlong-agent"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-CN/docs/0.12.0/modules/agent/quick_start"},"InLong Agent")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"\u521b\u5efa\u6570\u636e\u6d41"},"\u521b\u5efa\u6570\u636e\u6d41"),(0,a.kt)("p",null,"InLong \u96c6\u7fa4\u90e8\u7f72\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.12.0/user_guide/user_manual"},"\u7528\u6237\u624b\u518c"),"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u6d41\u5f00\u59cb\u4f7f\u7528\u3002"))}d.isMDXComponent=!0}}]);
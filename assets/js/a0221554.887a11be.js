"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[51314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,g=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Bare Metal",sidebar_position:4},o=void 0,i={unversionedId:"deployment/bare_metal",id:"version-1.3.0/deployment/bare_metal",title:"Bare Metal",description:"Environment Requirements",source:"@site/versioned_docs/version-1.3.0/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/docs/1.3.0/deployment/bare_metal",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/deployment/bare_metal.md",tags:[],version:"1.3.0",sidebarPosition:4,frontMatter:{title:"Bare Metal",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/1.3.0/deployment/k8s"},next:{title:"Overview",permalink:"/docs/1.3.0/modules/agent/overview"}},d={},p=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Create Data Stream",id:"create-data-stream",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,r.kt)("li",{parentName:"ul"},"Flink 1.13.5")),(0,r.kt)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,r.kt)("p",null,"InLong Support the following Message Queue services now, you can choose one of them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.3.0/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,r.kt)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,r.kt)("p",null,"You can get binary package from ",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.0/quick_start/how_to_build"},"How to Build"),".\u3002"),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"order"),(0,r.kt)("th",{parentName:"tr",align:null},"component"),(0,r.kt)("th",{parentName:"tr",align:null},"dependencies"),(0,r.kt)("th",{parentName:"tr",align:null},"deploy guide"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-audit"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL or Elasticsearch"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.3.0/modules/audit/quick_start"},"InLong Audit")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.3.0/modules/manager/quick_start"},"InLong Manager")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.3.0/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-agent"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.3.0/modules/agent/quick_start"},"InLong Agent")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Nginx or Docker"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.3.0/modules/dashboard/quick_start"},"InLong Dashboard")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-connectors"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache Flink"),(0,r.kt)("td",{parentName:"tr",align:null},"Extract ",(0,r.kt)("a",{parentName:"td",href:"https://inlong.apache.org/download/"},"apache-inlong-[version]-sort-connectors.tar.gz")," and move connectors jar to ",(0,r.kt)("inlineCode",{parentName:"td"},"inlong-sort/connectors")," directory."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"create-data-stream"},"Create Data Stream"),(0,r.kt)("p",null,"After the InLong cluster deployed successfully, you can create a data stream refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.0/user_guide/dashboard_usage"},"Dashboard Usage Guide")," to start using."))}m.isMDXComponent=!0}}]);
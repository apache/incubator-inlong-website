"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Auto Consumption",sidebar_position:2},i=void 0,c={unversionedId:"data_node/load_node/auto_consumption",id:"data_node/load_node/auto_consumption",title:"Auto Consumption",description:"Overview",source:"@site/docs/data_node/load_node/auto_consumption.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/auto_consumption",permalink:"/docs/next/data_node/load_node/auto_consumption",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/auto_consumption.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Auto Consumption",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/data_node/load_node/overview"},next:{title:"ClickHouse",permalink:"/docs/next/data_node/load_node/clickhouse"}},s={},u=[{value:"Overview",id:"overview",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auto Consumption")," meanings receive data from Message Queue Services (TubeMQ or Pulsar) directly, you can consume the message from MQ\nby ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/2.8.3/client-libraries/"},"Pulsar SDK Client")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/tubemq/clients_java"},"TubeMQ SDK Client"),",\nafter that, you have to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/development/inlong_msg"},"Parse the InLongMsg")," to get raw data for forward processing."))}d.isMDXComponent=!0}}]);
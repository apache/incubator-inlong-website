"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[98362],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},58601:(e,n,t)=>{t.d(n,{Y:()=>r});const r={inLongVersion:"1.2.0-incubating"}},13024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905)),i=t(58601);const a={title:"Parse InLongMsg",sidebar_position:1},s=void 0,l={unversionedId:"development/inlong_msg",id:"version-1.2.0/development/inlong_msg",title:"Parse InLongMsg",description:"Overview",source:"@site/versioned_docs/version-1.2.0/development/inlong_msg.md",sourceDirName:"development",slug:"/development/inlong_msg",permalink:"/docs/1.2.0/development/inlong_msg",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/development/inlong_msg.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Parse InLongMsg",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command-line Tools",permalink:"/docs/1.2.0/user_guide/command_line_tools"},next:{title:"Custom Authentication",permalink:"/docs/1.2.0/development/inlong_manager_shiro_plugin"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Dependency",id:"dependency",level:2}],d={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"If you consume data directly from a message queue (InLong TubeMQ or Pulsar), you need to parse ",(0,o.kt)("inlineCode",{parentName:"p"},"InLongMsg")," first. Origin data can be parsed in the following ways."),(0,o.kt)("h2",{id:"dependency"},"Dependency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add Maven Dependency"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>inlong-common</artifactId>\n    <version>${i.Y.inLongVersion}</version>\n</dependency>\n`))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add Parse Method"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public static List<byte[]> parserInLongMsg(byte[] bytes) {\n    List<byte[]> originalContentByteList = new ArrayList<>();\n    InLongMsg inLongMsg = InLongMsg.parseFrom(bytes);\n    Set<String> attrs = inLongMsg.getAttrs();\n    if (CollectionUtils.isEmpty(attrs)) {\n        return originalContentByteList;\n    }\n    for (String attr : attrs) {\n        if (attr == null) {\n            continue;\n        }\n        Iterator<byte[]> iterator = inLongMsg.getIterator(attr);\n        if (iterator == null) {\n            continue;\n        }\n        while (iterator.hasNext()) {\n            byte[] bodyBytes = iterator.next();\n            if (bodyBytes == null || bodyBytes.length == 0) {\n                continue;\n            }\n            // Origin data sended by InLong agent\n            originalContentByteList.add(bodyBytes);\n        }\n    }\n    return originalContentByteList;\n}\n")))}g.isMDXComponent=!0}}]);
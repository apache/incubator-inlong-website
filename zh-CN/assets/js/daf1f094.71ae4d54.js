"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[98171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u5982\u4f55\u7f16\u8bd1",sidebar_position:1},i=void 0,l={unversionedId:"quick_start/how_to_build",id:"version-1.2.0/quick_start/how_to_build",title:"\u5982\u4f55\u7f16\u8bd1",description:"\u4e0b\u8f7d\u6e90\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/quick_start/how_to_build.md",sourceDirName:"quick_start",slug:"/quick_start/how_to_build",permalink:"/zh-CN/docs/1.2.0/quick_start/how_to_build",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/quick_start/how_to_build.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"\u5982\u4f55\u7f16\u8bd1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Manager \u63d2\u4ef6",permalink:"/zh-CN/docs/1.2.0/design_and_concept/how_to_extend_data_node_for_manager"},next:{title:"\u5165\u5e93 Hive \u793a\u4f8b",permalink:"/zh-CN/docs/1.2.0/quick_start/hive_example"}},c={},p=[{value:"\u4e0b\u8f7d\u6e90\u7801",id:"\u4e0b\u8f7d\u6e90\u7801",level:2},{value:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6",level:2},{value:"\u7f16\u8bd1Docker\u955c\u50cf",id:"\u7f16\u8bd1docker\u955c\u50cf",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e0b\u8f7d\u6e90\u7801"},"\u4e0b\u8f7d\u6e90\u7801"),(0,o.kt)("p",null,"\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"InLong Download Page"),"\u4e0b\u8f7d\u6e90\u7801."),(0,o.kt)("h2",{id:"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6"},"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Java ",(0,o.kt)("a",{parentName:"li",href:"https://adoptopenjdk.net/?variant=openjdk8"},"JDK 8")),(0,o.kt)("li",{parentName:"ul"},"Maven 3.6.1+")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mvn clean install -DskipTests\n")),(0,o.kt)("p",null,"(\u53ef\u9009) \u4f7f\u7528docker\u7f16\u8bd1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker pull maven:3.6-openjdk-8\n$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests\n")),(0,o.kt)("p",null,"\u82e5\u7f16\u8bd1\u6210\u529f\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-distribution/target"),"\u4e0b\u4f1a\u627e\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"tar.gz"),"\u683c\u5f0f\u7684\u5b89\u88c5\u5305\uff0c\u89e3\u538b\u5b89\u88c5\u76ee\u5f55\uff0c\u5305\u62ec\u5404\u4e2a\u6a21\u5757\u5b89\u88c5\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker\ninlong-agent\ninlong-audit\ninlong-dataproxy\ninlong-manager\ninlong-sort\ninlong-tubemq-manager\ninlong-tubemq-server\ninlong-dashboard\n")),(0,o.kt)("h2",{id:"\u7f16\u8bd1docker\u955c\u50cf"},"\u7f16\u8bd1Docker\u955c\u50cf"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn clean package -DskipTests -Pdocker\n")))}d.isMDXComponent=!0}}]);
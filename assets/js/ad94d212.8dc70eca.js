"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18212],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),c=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(d.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(d,".").concat(g)]||u[g]||s[g]||a;return t?o.createElement(m,l(l({ref:n},p),{},{components:t})):o.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},47803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(58168),r=(t(96540),t(15680));const a={title:"How to Build",sidebar_position:1},l=void 0,i={unversionedId:"development/how_to_build",id:"development/how_to_build",title:"How to Build",description:"Download Source Code",source:"@site/docs/development/how_to_build.md",sourceDirName:"development",slug:"/development/how_to_build",permalink:"/docs/next/development/how_to_build",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/how_to_build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to Build",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command-line Tools",permalink:"/docs/next/user_guide/command_line_tools"},next:{title:"InLongMsg format definition and usage",permalink:"/docs/next/development/binary_protocol/inlong_msg"}},d={},c=[{value:"Download Source Code",id:"download-source-code",level:2},{value:"Build Binary Package",id:"build-binary-package",level:2},{value:"Build Docker Images",id:"build-docker-images",level:2}],p={toc:c},u="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"download-source-code"},"Download Source Code"),(0,r.yg)("p",null,"Download Source Code from ",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"InLong Download Page"),"."),(0,r.yg)("h2",{id:"build-binary-package"},"Build Binary Package"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Java ",(0,r.yg)("a",{parentName:"li",href:"https://adoptopenjdk.net/?variant=openjdk8"},"JDK 8")),(0,r.yg)("li",{parentName:"ul"},"Maven 3.6.1+")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ mvn clean install -DskipTests\n")),(0,r.yg)("p",null,"(Optional) Compile using docker image:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ docker pull maven:3.6-openjdk-8\n$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests\n")),(0,r.yg)("p",null,"after compile successfully, you could find distribution file at ",(0,r.yg)("inlineCode",{parentName:"p"},"inlong-distribution/target")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"tar.gz")," format, it includes following files:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker\ninlong-agent\ninlong-audit\ninlong-dataproxy\ninlong-manager\ninlong-sort\ninlong-tubemq-manager\ninlong-tubemq-server\ninlong-dashboard\n")),(0,r.yg)("h2",{id:"build-docker-images"},"Build Docker Images"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mvn clean package -DskipTests -Pdocker\n")))}s.isMDXComponent=!0}}]);
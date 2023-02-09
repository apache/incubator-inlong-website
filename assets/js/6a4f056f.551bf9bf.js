"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={title:"Docker",sidebar_position:2},a=void 0,i={unversionedId:"deployment/docker",id:"version-0.12.0/deployment/docker",title:"Docker",description:"Deploy all InLong module by Docker Compose, it's only available for development.",source:"@site/versioned_docs/version-0.12.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/0.12.0/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/deployment/docker.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Standalone",permalink:"/docs/0.12.0/deployment/standalone"},next:{title:"Kubernetes",permalink:"/docs/0.12.0/deployment/k8s"}},c={},s=[{value:"Deploy",id:"deploy",level:2},{value:"Use InLong",id:"use-inlong",level:2},{value:"Destroy",id:"destroy",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploy all InLong module by Docker Compose, it's only available for development."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Manually copy SQL files from ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-manager/manager-web/sql")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/compose/sql")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp inlong-manager/manager-web/sql/apache_inlong_manager.sql  docker/docker-compose/sql\n")),(0,o.kt)("p",null,"Then, start all components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,o.kt)("h2",{id:"use-inlong"},"Use InLong"),(0,o.kt)("p",null,"After all containers run successfully, you can access ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"User: admin\nPassword: inlong\n")),(0,o.kt)("h2",{id:"destroy"},"Destroy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")))}u.isMDXComponent=!0}}]);
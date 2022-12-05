"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[29368],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),s=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},d="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=s(a),c=n,h=d["".concat(l,".").concat(c)]||d[c]||N[c]||i;return a?r.createElement(h,o(o({ref:e},m),{},{components:a})):r.createElement(h,o({ref:e},m))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[d]="string"==typeof t?t:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93869:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={title:"InLong v0.11.0"},o=void 0,p={type:"mdx",permalink:"/download/release-0.11.0",source:"@site/download/release-0.11.0.md",title:"InLong v0.11.0",description:"Use the links below to download the Apache InLong from one of our mirrors.",frontMatter:{title:"InLong v0.11.0"}},l=[{value:"InLong",id:"inlong",level:2},{value:"Release Integrity",id:"release-integrity",level:3},{value:"Release Notes",id:"release-notes",level:2},{value:"FEATURES:",id:"features",level:3},{value:"IMPROVEMENTS:",id:"improvements",level:3},{value:"BUG FIXES:",id:"bug-fixes",level:3}],s={toc:l};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use the links below to download the Apache InLong from one of our mirrors."),(0,n.kt)("h2",{id:"inlong"},"InLong"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Comment"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Downloads"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Nov 5, 2021"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.11.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Source"),(0,n.kt)("td",{parentName:"tr",align:"center"},"[",(0,n.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/incubator/inlong/0.11.0-incubating/apache-inlong-0.11.0-incubating-src.tar.gz"},"SRC"),"]                 [",(0,n.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/incubator/inlong/0.11.0-incubating/apache-inlong-0.11.0-incubating-src.tar.gz.asc"},"ASC"),"]             [",(0,n.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/incubator/inlong/0.11.0-incubating/apache-inlong-0.11.0-incubating-src.tar.gz.sha512"},"SHA512"),"]")))),(0,n.kt)("h3",{id:"release-integrity"},"Release Integrity"),(0,n.kt)("p",null,"You must ",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/info/verification.html"},"verify")," the integrity of the downloaded files.\nWe provide OpenPGP signatures for every release file. This signature should be matched against the ",(0,n.kt)("a",{parentName:"p",href:"https://downloads.apache.org/incubator/inlong/KEYS"},"KEYS")," file which contains the OpenPGP keys of InLong's Release Managers.\nWe also provide ",(0,n.kt)("code",null,"SHA-512")," checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours."),(0,n.kt)("h2",{id:"release-notes"},"Release Notes"),(0,n.kt)("h3",{id:"features"},"FEATURES:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ISSUE"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Summary"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/624"},"INLONG-624")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Feature]"," Go SDK support for TubeMQ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1308"},"INLONG-1308")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Feature]"," Support Deploying All Modules on Kubernetes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1330"},"INLONG-1330")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Feature]"," DataProxy support Pulsar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1631"},"INLONG-1631")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Feature][office-website]"," Refactor incubator-inlong-website by docusaurus")))),(0,n.kt)("h3",{id:"improvements"},"IMPROVEMENTS:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ISSUE"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Summary"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1324"},"INLONG-1324")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][Manager]"," The consumption details should be refreshed after editing successfully")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1327"},"INLONG-1327")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][Manager]"," Supports pagi`ng query for workflow execution log")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1570"},"INLONG-1578")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," Go SDK should provide a more elegant way to set the parameter of config`")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1571"},"INLONG-1571")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][CI]"," Check License Heade")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1584"},"INLONG-1584")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," TDMsg Decode Support For Go SDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1585"},"INLONG-1585")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," Improve issue template with issue forms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1589"},"INLONG-1589")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][Manager]"," Manager provide an openapi of DataProxy configuration data for multi-subcluster")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1593"},"INLONG-1593")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," Add EmptyLineSeparator java code checkstyle rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1595"},"INLONG-1595")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," inlong-dataproxy start by the configuration data from inlong-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1602"},"INLONG-1623")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," Optimize EntityStatus enum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1619"},"INLONG-1619")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," Add improve suggestion template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1611"},"INLONG-1611")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," Enable Merge Button")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1623"},"INLONG-1623")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," add contribution guide document for the main repo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1626"},"INLONG-1626")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Agent introduce a Message filter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1628"},"INLONG-1628")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," Remove commitlint in package.json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1629"},"INLONG-1629")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve]"," Disable merge commit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1632"},"INLONG-1632")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Refactoring of basic projects")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1633"},"INLONG-1633")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Migrate modules documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1634"},"INLONG-1634")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Migrate download documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1635"},"INLONG-1635")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Migrate development documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1636"},"INLONG-1636")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Replace the default language selection icon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1637"},"INLONG-1637")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Add docusaurus i18n docs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1638"},"INLONG-1638")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Adapt new github action command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1641"},"INLONG-1641")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][Agent]"," Agent introduce a Message filter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1642"},"INLONG-1642")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][Agent]"," Agent Use Message filter to get tid from different lines in a file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1650"},"INLONG-1650")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][TubeMQ]"," Provide a more elegant way to define config address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1662"},"INLONG-1662")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][GitHub]"," Improve issue templates")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1666"},"INLONG-1666")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][TubeMQ]"," README for Go SDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1668"},"INLONG-1668")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Adapt quick edit link")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1669"},"INLONG-1669")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][office-website]"," Adapt docusaurus build command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1670"},"INLONG-1670")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][Manager]"," Add H2 in UT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1680"},"INLONG-1680")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][doc]"," remove the redundant download links")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1682"},"INLONG-1682")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][TubeMQ]"," New Go module for Go SDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1699"},"INLONG-1699")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][doc]"," add a correct interpretation for InLong")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1701"},"INLONG-1701")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Improve][InLong-Manager]"," Adjust unit tests")))),(0,n.kt)("h3",{id:"bug-fixes"},"BUG FIXES:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ISSUE"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Summary"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1498"},"INLONG-1498")),(0,n.kt)("td",{parentName:"tr",align:"left"},"ignore the files with versionsBackup suffix for the bumped version")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1507"},"INLONG-1507")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go Client should reconnect to server if the server is shutdown and restarted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1509"},"INLONG-1509")),(0,n.kt)("td",{parentName:"tr",align:"left"},"duplicate issues be counted in CHANGES.md")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1511"},"INLONG-1511")),(0,n.kt)("td",{parentName:"tr",align:"left"},"release guild documents has some errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1514"},"INLONG-1514")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the license header is not correct for inlong-website/nginx.conf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1525"},"INLONG-1525")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK fail to parse SubscribeInfo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1527"},"INLONG-1527")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GoSDK should throw error if it fail to connect to master")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1529"},"INLONG-1529")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK should reset heartbeat if register to master successfully")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1531"},"INLONG-1531")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK should init the flow control item of the partition")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1533"},"INLONG-1533")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK should provide more example")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1535"},"INLONG-1535")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK should be closed before stopping the event processing goroutine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1538"},"INLONG-1538")),(0,n.kt)("td",{parentName:"tr",align:"left"},'TubeMQ reports the error "Topic xxx not publish" when producing data')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1550"},"INLONG-1550")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK should obey the flow control rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1552"},"INLONG-1552")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Java SDK should deal with the default flow control rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1553"},"INLONG-1553")),(0,n.kt)("td",{parentName:"tr",align:"left"},"migrate the user manual documents at first class")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1554"},"INLONG-1554")),(0,n.kt)("td",{parentName:"tr",align:"left"},"remove the Console Introduction for manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1555"},"INLONG-1555")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK should record the consumer config to the log")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1558"},"INLONG-1558")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK should provide a multi goroutine consumer example")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1560"},"INLONG-1560")),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++ SDK can not return error code of PartInUse and PartWaiting correctly")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1562"},"INLONG-1562")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[K8s]"," There are some syntax bugs and configuration bugs in helm chart")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1563"},"INLONG-1563")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Go SDK can not stop the heartbeat timer after the consumer has been closed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1566"},"INLONG-1566")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The user defined partition offset of Go SDK can not take effect")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1568"},"INLONG-1568")),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++ SDK cant not return the whether the partition has been registered correctly")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1569"},"INLONG-1569")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The first_registered is not the same with its naming")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1573"},"INLONG-1573")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add TDMsg decode logic to TubeMQ's C++ SDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1575"},"INLONG-1575")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Modify the download url of version 0.9.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1579"},"INLONG-1579")),(0,n.kt)("td",{parentName:"tr",align:"left"},"lots of files are not standard License Header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1581"},"INLONG-1581")),(0,n.kt)("td",{parentName:"tr",align:"left"},"InLong's website does not work without Javascript")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1587"},"INLONG-1587")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix compile error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1592"},"INLONG-1592")),(0,n.kt)("td",{parentName:"tr",align:"left"},"TextFileReader: The cpu utilization rate is very high, nearly 50%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1600"},"INLONG-1600")),(0,n.kt)("td",{parentName:"tr",align:"left"},"There are some YAML errors in bug report and feature request issue forms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1604"},"INLONG-1604")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Some resultType is wrong in mapper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1607"},"INLONG-1607")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The master version should be added in the bug-report.yml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1614"},"INLONG-1614")),(0,n.kt)("td",{parentName:"tr",align:"left"},"dataProxyConfigRepository constructor error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1617"},"INLONG-1617")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ignore mysql directory after run docker compose")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1621"},"INLONG-1621")),(0,n.kt)("td",{parentName:"tr",align:"left"},"RestTemplateConfig cannot load config from properties")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1625"},"INLONG-1625")),(0,n.kt)("td",{parentName:"tr",align:"left"},"some page links are not available for Contribution Guide")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1645"},"INLONG-1645")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Bug]"," Druid datasource is not used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1665"},"INLONG-1665")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adjust the content of the document title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1673"},"INLONG-1673")),(0,n.kt)("td",{parentName:"tr",align:"left"},"some links are not available after office-website refactored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1676"},"INLONG-1676")),(0,n.kt)("td",{parentName:"tr",align:"left"},"two recent PRs were overwritten after the office-website refactored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1677"},"INLONG-1677")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the architecture picture is lost in README")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1685"},"INLONG-1685")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the Chinese Quick Start Guide has some incorrect place after the office-webiste refactored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1694"},"INLONG-1694")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Build docker mirror error for TubeMQ C++")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-inlong/issues/1695"},"INLONG-1695")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[Bug][DataProxy]"," Build failed")))))}m.isMDXComponent=!0}}]);
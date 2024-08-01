"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[28400],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,d=s["".concat(p,".").concat(m)]||s[m]||g[m]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41630:(e,n,t)=>{t.d(n,{Y:()=>r});const r={inLongVersion:"1.13.0-SNAPSHOT"}},40267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=t(87462),o=(t(67294),t(3905)),a=t(41630);const i={title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",sidebar_position:2},l=void 0,p={unversionedId:"development/inlong_manager_shiro_plugin",id:"version-1.13.0/development/inlong_manager_shiro_plugin",title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.13.0/development/inlong_manager_shiro_plugin.md",sourceDirName:"development",slug:"/development/inlong_manager_shiro_plugin",permalink:"/zh-CN/docs/development/inlong_manager_shiro_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/development/inlong_manager_shiro_plugin.md",tags:[],version:"1.13.0",sidebarPosition:2,frontMatter:{title:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u89e3\u6790 InLongMsg",permalink:"/zh-CN/docs/development/inlong_msg"},next:{title:"Manager \u81ea\u5b9a\u4e49\u63d2\u4ef6",permalink:"/zh-CN/docs/development/inlong_manager_plugin"}},c={},u=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u7f16\u7801",id:"\u7f16\u7801",level:2}],s={toc:u},g="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(g,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,o.kt)("p",null,"Inlong Manager\u4e2d\u4f7f\u7528\u4e86Apache Shiro\u6846\u67b6\u5b9e\u73b0\u4e86\u8ba4\u8bc1\u548c\u6388\u6743\u7b49\u529f\u80fd\uff0cManager\u5df2\u7ecf\u96c6\u6210\u597d\u4e86\u9ed8\u8ba4\u7684\u5b9e\u73b0\u903b\u8f91\uff0c\u5982\u679c\u60a8\u60f3\u5728Inlong Manager\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u57fa\u4e8eShiro\u7684\u8ba4\u8bc1\u548c\u6388\u6743\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u7684\u8bf4\u660e\uff0c\u8fdb\u884c\u76f8\u5173\u529f\u80fd\u7684\u63d2\u4ef6\u5316\u5f00\u53d1\u3002"),(0,o.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u589e\u52a0maven \u4f9d\u8d56",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>manager-common</artifactId>\n    <version>${a.Y.inLongVersion}</version>\n</dependency>\n`)))),(0,o.kt)("h2",{id:"\u7f16\u7801"},"\u7f16\u7801"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u5176\u4e2d\u5173\u4e8eShiro\u76f8\u5173\u6a21\u5757\u7684\u63a5\u53e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"org.apache.inlong.manager.common.auth.InlongShiro\n\npublic interface InlongShiro {\n\n    WebSecurityManager getWebSecurityManager();\n\n    AuthorizingRealm getShiroRealm();\n\n    WebSessionManager getWebSessionManager();\n\n    CredentialsMatcher getCredentialsMatcher();\n\n    ShiroFilterFactoryBean getShiroFilter(SecurityManager securityManager);\n\n    AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(SecurityManager securityManager);\n\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,o.kt)("em",{parentName:"li"},"InlongShiro"),'\u63a5\u53e3\uff0c\u5e76\u5728"@ConditionalOnProperty"\u6307\u5b9a\u914d\u7f6e')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@ConditionalOnProperty(name = "type", prefix = "inlong.auth", havingValue = "Custom")\n@Component\npublic class InlongShiroImpl implements InlongShiro {\n   //todo\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539manager-web module\u4e0bapplication.properties\u6587\u4ef6\u4e2d\u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"inlong.auth.type=Custom\n")))}m.isMDXComponent=!0}}]);
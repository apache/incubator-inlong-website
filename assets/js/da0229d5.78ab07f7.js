"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39125],{3905:(e,A,t)=>{t.d(A,{Zo:()=>d,kt:()=>g});var n=t(67294);function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,n,r=function(e,A){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],A.indexOf(t)>=0||(r[t]=e[t]);return r}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var A=n.useContext(i),t=A;return e&&(t="function"==typeof e?e(A):s(s({},A),e)),t},d=function(e){var A=u(e.components);return n.createElement(i.Provider,{value:A},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},l=n.forwardRef((function(e,A){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=u(t),l=r,g=k["".concat(i,".").concat(l)]||k[l]||c[l]||a;return t?n.createElement(g,s(s({ref:A},d),{},{components:t})):n.createElement(g,s({ref:A},d))}));function g(e,A){var t=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=l;var o={};for(var i in A)hasOwnProperty.call(A,i)&&(o[i]=A[i]);o.originalType=e,o[k]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},50446:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const a={title:"User Management",sidebar_position:1},s=void 0,o={unversionedId:"administration/user_management",id:"version-0.12.0/administration/user_management",title:"User Management",description:"Only users with the role of system administrator can use this function. They can create, modify, and delete users:",source:"@site/versioned_docs/version-0.12.0/administration/user_management.md",sourceDirName:"administration",slug:"/administration/user_management",permalink:"/docs/0.12.0/administration/user_management",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/administration/user_management.md",tags:[],version:"0.12.0",sidebarPosition:1,frontMatter:{title:"User Management",sidebar_position:1},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Usage Manual",permalink:"/docs/0.12.0/user_guide/user_manual"},next:{title:"Approval Management",permalink:"/docs/0.12.0/administration/approval_management"}},i={},u=[{value:"New user",id:"new-user",level:3},{value:"Delete user",id:"delete-user",level:3},{value:"User Edit",id:"user-edit",level:3},{value:"Change password",id:"change-password",level:3}],d={toc:u},k="wrapper";function c(e){let{components:A,...a}=e;return(0,r.kt)(k,(0,n.Z)({},d,a,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Only users with the role of system administrator can use this function. They can create, modify, and delete users:"),(0,r.kt)("h3",{id:"new-user"},"New user"),(0,r.kt)("p",null,"Users with system administrator rights can create new user accounts"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(59072).Z,width:"515",height:"353"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Account types: Ordinary users (with data access and data consumption permissions, but without data access approval and\naccount management permissions); system administrators (with data access and data consumption permissions, data access\napproval and account management permissions)"),(0,r.kt)("li",{parentName:"ul"},"username: username for login"),(0,r.kt)("li",{parentName:"ul"},"user password:\n-Effective duration: the account can be used in the system")),(0,r.kt)("h3",{id:"delete-user"},"Delete user"),(0,r.kt)("p",null,"The system administrator can delete the account of the created user. After the deletion, the account will stop using:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(79644).Z,width:"1563",height:"423"})),(0,r.kt)("h3",{id:"user-edit"},"User Edit"),(0,r.kt)("p",null,"The system administrator can modify the created account:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(11880).Z,width:"1552",height:"344"})),(0,r.kt)("h3",{id:"change-password"},"Change password"),(0,r.kt)("p",null,"The user can modify the account password, click ","[Modify Password]",", enter the old password and the new password, after\nconfirmation, the new password of this account will take effect:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(11880).Z,width:"1552",height:"344"})))}c.isMDXComponent=!0},59072:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,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"},79644:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/user-delete-0b132dc8de28540b773685e2094c297b.png"},11880:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/user-edit-68762cbea1a254da8ba9091aa9e8cf63.png"}}]);
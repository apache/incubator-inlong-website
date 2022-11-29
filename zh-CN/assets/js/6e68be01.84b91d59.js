"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[46023],{3905:(e,n,a)=>{a.d(n,{Zo:()=>g,kt:()=>d});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,u=h["".concat(o,".").concat(d)]||h[d]||c[d]||i;return a?t.createElement(u,s(s({ref:n},g),{},{components:a})):t.createElement(u,s({ref:n},g))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},37471:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const i={title:"\u5982\u4f55\u53d1\u5e03\u7248\u672c",sidebar_position:6},s=void 0,l={unversionedId:"how-to-release",id:"how-to-release",title:"\u5982\u4f55\u53d1\u5e03\u7248\u672c",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u6309\u7167 Apache \u7684\u6d41\u7a0b\u53d1\u5e03 Apache InLong \u7248\u672c\uff0c\u76f8\u5173\u8bf4\u660e\u548c\u5de5\u5177\u5c06\u9075\u5b88 ASF \u7684\u7248\u672c\u53d1\u5e03\u6307\u5357\u53ca ASF \u7684\u53d1\u5e03\u653f\u7b56\uff0c\u5177\u4f53\u8be6\u60c5\u8bf7\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-release.md",sourceDirName:".",slug:"/how-to-release",permalink:"/zh-CN/community/how-to-release",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/i18n/zh-CN/how-to-release.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u5982\u4f55\u53d1\u5e03\u7248\u672c",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u6210\u4e3a InLong Committer \u6216 PMC \u7684\u6295\u7968\u8fc7\u7a0b",permalink:"/zh-CN/community/how-to-vote-a-committer-pmc"},next:{title:"\u5982\u4f55\u9a8c\u8bc1\u53d1\u5e03\u7248\u672c",permalink:"/zh-CN/community/how-to-verify"}},o={},p=[{value:"\u6dfb\u52a0 GPG Key",id:"\u6dfb\u52a0-gpg-key",level:2},{value:"\u5b89\u88c5 GPG",id:"\u5b89\u88c5-gpg",level:3},{value:"\u751f\u6210 GPG Key",id:"\u751f\u6210-gpg-key",level:3},{value:"\u4e0a\u4f20\u751f\u6210\u7684 GPG Key \u5230\u516c\u5171\u670d\u52a1\u5668",id:"\u4e0a\u4f20\u751f\u6210\u7684-gpg-key-\u5230\u516c\u5171\u670d\u52a1\u5668",level:3},{value:"\u67e5\u770b GPG Key \u662f\u5426\u521b\u5efa\u6210\u529f",id:"\u67e5\u770b-gpg-key-\u662f\u5426\u521b\u5efa\u6210\u529f",level:3},{value:"\u4e0a\u4f20 GPG \u516c\u94a5\u5230 SVN \u4ed3\u5e93",id:"\u4e0a\u4f20-gpg-\u516c\u94a5\u5230-svn-\u4ed3\u5e93",level:3},{value:"\u4e0a\u4f20 GPG \u516c\u94a5\u5230 Github \u8d26\u6237",id:"\u4e0a\u4f20-gpg-\u516c\u94a5\u5230-github-\u8d26\u6237",level:3},{value:"Maven \u8bbe\u7f6e",id:"maven-\u8bbe\u7f6e",level:2},{value:"\u7f16\u8bd1\u6253\u5305",id:"\u7f16\u8bd1\u6253\u5305",level:2},{value:"\u51c6\u5907\u5206\u652f",id:"\u51c6\u5907\u5206\u652f",level:3},{value:"\u521b\u5efa tag",id:"\u521b\u5efa-tag",level:3},{value:"\u6253\u5305\u6e90\u7801",id:"\u6253\u5305\u6e90\u7801",level:3},{value:"\u6253\u5305\u4e8c\u8fdb\u5236\u5305",id:"\u6253\u5305\u4e8c\u8fdb\u5236\u5305",level:3},{value:"\u5bf9\u6e90\u7801\u5305/\u4e8c\u8fdb\u5236\u5305\u8fdb\u884c\u7b7e\u540d/sha512",id:"\u5bf9\u6e90\u7801\u5305\u4e8c\u8fdb\u5236\u5305\u8fdb\u884c\u7b7e\u540dsha512",level:3},{value:"\u68c0\u67e5\u751f\u6210\u7684\u7b7e\u540d/sha512\u662f\u5426\u6b63\u786e",id:"\u68c0\u67e5\u751f\u6210\u7684\u7b7e\u540dsha512\u662f\u5426\u6b63\u786e",level:3},{value:"\u51c6\u5907 Apache \u53d1\u5e03",id:"\u51c6\u5907-apache-\u53d1\u5e03",level:2},{value:"\u53d1\u5e03 jar \u5305\u5230 Apache Nexus \u4ed3\u5e93",id:"\u53d1\u5e03-jar-\u5305\u5230-apache-nexus-\u4ed3\u5e93",level:3},{value:"\u4e0a\u4f20 tag \u5230 git \u4ed3\u5e93",id:"\u4e0a\u4f20-tag-\u5230-git-\u4ed3\u5e93",level:3},{value:"\u4e0a\u4f20\u7f16\u8bd1\u597d\u7684\u6587\u4ef6\u5230 dist",id:"\u4e0a\u4f20\u7f16\u8bd1\u597d\u7684\u6587\u4ef6\u5230-dist",level:3},{value:"\u5173\u95ed Apache Staging \u4ed3\u5e93",id:"\u5173\u95ed-apache-staging-\u4ed3\u5e93",level:3},{value:"Apache InLong \u793e\u533a\u6295\u7968",id:"apache-inlong-\u793e\u533a\u6295\u7968",level:2},{value:"\u53d1\u8d77\u6295\u7968",id:"\u53d1\u8d77\u6295\u7968",level:3},{value:"\u7edf\u8ba1\u6295\u7968\u7ed3\u679c",id:"\u7edf\u8ba1\u6295\u7968\u7ed3\u679c",level:3},{value:"\u6b63\u5f0f\u53d1\u5e03",id:"\u6b63\u5f0f\u53d1\u5e03",level:2},{value:"\u5c06\u6e90\u7801\u548c\u4e8c\u8fdb\u5236\u5305\u4ece svn \u7684 dev \u76ee\u5f55\u79fb\u52a8\u5230 release \u76ee\u5f55",id:"\u5c06\u6e90\u7801\u548c\u4e8c\u8fdb\u5236\u5305\u4ece-svn-\u7684-dev-\u76ee\u5f55\u79fb\u52a8\u5230-release-\u76ee\u5f55",level:3},{value:"\u5728 Apache Staging \u4ed3\u5e93\u53d1\u5e03\u7248\u672c",id:"\u5728-apache-staging-\u4ed3\u5e93\u53d1\u5e03\u7248\u672c",level:3},{value:"\u66f4\u65b0\u5b98\u7f51\u6587\u6863\u548c\u4e0b\u8f7d\u94fe\u63a5",id:"\u66f4\u65b0\u5b98\u7f51\u6587\u6863\u548c\u4e0b\u8f7d\u94fe\u63a5",level:3},{value:"\u53d1 ANNOUNCE \u90ae\u4ef6\uff0c\u4e3b\u9001 <code>dev@inlong.apache.org</code>\uff0c\u6284\u9001 <code>announce@apache.org</code>",id:"\u53d1-announce-\u90ae\u4ef6\u4e3b\u9001-devinlongapacheorg\u6284\u9001-announceapacheorg",level:3},{value:"GitHub \u5b98\u7f51\u65b0\u589e release \u5305",id:"github-\u5b98\u7f51\u65b0\u589e-release-\u5305",level:3},{value:"\u53d1\u5e03\u540e",id:"\u53d1\u5e03\u540e",level:2},{value:"\u6e05\u7406\u672c\u5730\u4e34\u65f6\u6587\u4ef6",id:"\u6e05\u7406\u672c\u5730\u4e34\u65f6\u6587\u4ef6",level:3},{value:"\u5f52\u6863\u4e0a\u4e00\u4e2a\u7248\u672c\u7684\u53d1\u5e03\u5305",id:"\u5f52\u6863\u4e0a\u4e00\u4e2a\u7248\u672c\u7684\u53d1\u5e03\u5305",level:3}],g={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u6309\u7167 Apache \u7684\u6d41\u7a0b\u53d1\u5e03 Apache InLong \u7248\u672c\uff0c\u76f8\u5173\u8bf4\u660e\u548c\u5de5\u5177\u5c06\u9075\u5b88 ASF \u7684\u7248\u672c\u53d1\u5e03\u6307\u5357\u53ca ASF \u7684\u53d1\u5e03\u653f\u7b56\uff0c\u5177\u4f53\u8be6\u60c5\u8bf7\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing.html"},"ASF \u7248\u672c\u521b\u5efa\u8fc7\u7a0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/legal/release-policy.html"},"ASF \u53d1\u5e03\u653f\u7b56"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u4e8c\u8fdb\u5236\u53d1\u5e03\u5305\uff0c\u9700\u8981\u68c0\u67e5\u65b0\u7248\u672c\u91cc\u662f\u5426\u5305\u542b\u4e86 x\u7c7b \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5305\uff0c\u5305\u62ec\u76f4\u63a5\u5f15\u7528\u548c\u95f4\u63a5\u5f15\u7528\u90e8\u5206\uff0c\u5982\u679c\u5305\u542b\u4e86\uff0c\u9700\u8981\u53bb\u6389\u540e\u518d\u53d1\u5e03\u7248\u672c")),(0,r.kt)("h2",{id:"\u6dfb\u52a0-gpg-key"},"\u6dfb\u52a0 GPG Key"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u7ae0\u8282\u4e3b\u8981\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/openpgp.html"},"Cryptography with OpenPGP"),"\uff0c",(0,r.kt)("strong",{parentName:"p"}," \u4ec5\u5bf9\u7b2c\u4e00\u6b21\u53d1\u7248\u672c\u7684 Release Manager \u9700\u8981\u3002"))),(0,r.kt)("h3",{id:"\u5b89\u88c5-gpg"},"\u5b89\u88c5 GPG"),(0,r.kt)("p",null,"\u8be6\u7ec6\u7684\u5b89\u88c5\u6587\u6863\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"\u5b98\u7f51"),", Mac OS \u73af\u5883\u914d\u7f6e\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install gpg\n# \u68c0\u67e5\u7248\u672c\uff0c\u5e94\u8be5\u4e3a2.x\n$ gpg --version \n")),(0,r.kt)("h3",{id:"\u751f\u6210-gpg-key"},"\u751f\u6210 GPG Key"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u540d\u5b57\u65f6\u6700\u597d\u4e0e Apache \u4e2d\u767b\u8bb0\u7684 Full name \u4fdd\u6301\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7684\u90ae\u7bb1\u5fc5\u987b\u662f Apache \u90ae\u7bb1\uff0c\u5efa\u8bae\u5148 gpg -k \u67e5\u770b\u6240\u6709 Key ID, \u5982\u679c\u5217\u8868\u4e2d\u7b2c\u4e00\u4e2a\u4e0d\u662f apache \u90ae\u7bb1\u7684 Key ID \uff0c\u9700\u8981\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u6307\u5b9a Key ID \u6765\u8fdb\u884c\u52a0\u5bc6\u89e3\u5bc6\u64cd\u4f5c\uff0c\u53c2\u6570\u4e3a -u"),(0,r.kt)("li",{parentName:"ul"},"\u540d\u5b57\u6700\u597d\u4f7f\u7528\u62fc\u97f3\u6216\u8005\u82f1\u6587\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u4e71\u7801"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --full-gen-key\ngpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 # \u8fd9\u91cc\u8f93\u51651\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096 # \u8fd9\u91cc\u8f93\u51654096\nRequested keysize is 4096 bits       \nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 # \u8fd9\u91cc\u8f93\u51650\nKey does not expire at all\nIs this correct? (y/N) y # \u8fd9\u91cc\u8f93\u5165y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Guangxu Cheng # \u8fd9\u91cc\u8f93\u5165\u4f60\u7684\u540d\u5b57\nEmail address: gxcheng@apache.org # \u8fd9\u91cc\u8f93\u5165\u4f60\u7684\u90ae\u7bb1\nComment:                          # \u8fd9\u91cc\u8f93\u5165\u4e00\u4e9b\u6ce8\u91ca\uff0c\u53ef\u4ee5\u4e3a\u7a7a\nYou selected this USER-ID:\n    \"Guangxu Cheng <gxcheng@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O #\u8fd9\u91cc\u8f93\u5165O\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# \u6b64\u65f6\u4f1a\u5f39\u51fa\u5bf9\u8bdd\u6846\uff0c\u8981\u6c42\u4f60\u4e3a\u8fd9\u4e2agpg\u8f93\u5165\u5bc6\u94a5\u3002\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase                         \u2502\n\u2502                                                      \u2502\n\u2502 Passphrase: _______________________________          \u2502\n\u2502                                                      \u2502\n\u2502       <OK>                              <Cancel>     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n#\u8f93\u5165\u79d8\u94a5\u5b8c\u6bd5\u540e\u5c31\u521b\u5efa\u597d\u4e86\u3002\u5e76\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u4fe1\u606f\ngpg: key 2DD587E7B10F3B1F marked as ultimately trusted\ngpg: revocation certificate stored as '/Users/cheng/.gnupg/openpgp-revocs.d/41936314E25F402D5F7D73152DD587E7B10F3B1F.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2020-05-19 [SC]\n      41936314E25F402D5F7D73152DD587E7B10F3B1F\nuid                      Guangxu Cheng <gxcheng@apache.org>\nsub   rsa4096 2020-05-19 [E]\n")),(0,r.kt)("h3",{id:"\u4e0a\u4f20\u751f\u6210\u7684-gpg-key-\u5230\u516c\u5171\u670d\u52a1\u5668"},"\u4e0a\u4f20\u751f\u6210\u7684 GPG Key \u5230\u516c\u5171\u670d\u52a1\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --list-keys                                                        \n-------------------------------\npub   rsa4096 2020-05-18 [SC]\n      5931F8CFD04B37A325E4465D8C0D31C4149B3A87\nuid           [ultimate] Guangxu Cheng <gxcheng@apache.org>\nsub   rsa4096 2020-05-18 [E]\n\n# \u901a\u8fc7 key id \u53d1\u9001 public key \u5230 keyserver\n$ gpg --keyserver pgpkeys.mit.edu --send-key <key id>\n# \u5176\u4e2d\uff0ckeyserver \u5217\u8868\u4e3a\uff1ahttps://sks-keyservers.net/status/\uff0c\u4e3a\u76f8\u4e92\u4e4b\u95f4\u662f\u81ea\u52a8\u540c\u6b65\u7684\uff0c\u9009\u4efb\u610f\u4e00\u4e2a\u90fd\u53ef\u4ee5\u3002\n")),(0,r.kt)("h3",{id:"\u67e5\u770b-gpg-key-\u662f\u5426\u521b\u5efa\u6210\u529f"},"\u67e5\u770b GPG Key \u662f\u5426\u521b\u5efa\u6210\u529f"),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://pgpkeys.mit.edu/"},"https://pgpkeys.mit.edu/")," \u5730\u5740\uff0c\u53ef\u4f7f\u7528\u90ae\u7bb1\u67e5\u8be2\u662f\u5426\u4e0a\u4f20\u6210\u529f\uff08\u5927\u6982\u9700\u8981\u4e00\u5206\u949f\uff09\u3002"),(0,r.kt)("h3",{id:"\u4e0a\u4f20-gpg-\u516c\u94a5\u5230-svn-\u4ed3\u5e93"},"\u4e0a\u4f20 GPG \u516c\u94a5\u5230 SVN \u4ed3\u5e93"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"dev \u5206\u652f\u7684 svn \u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/inlong"},"https://dist.apache.org/repos/dist/dev/inlong")),(0,r.kt)("p",{parentName:"admonition"},"release \u5206\u652f\u7684 SVN \u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/inlong"},"https://dist.apache.org/repos/dist/release/inlong"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 dev \u5206\u652f\u4e2d\u6dfb\u52a0\u516c\u94a5\u5230 KEYS\uff0c\u7528\u4e8e\u53d1\u5e03 RC \u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u8fd9\u4e2a\u6b65\u9aa4\u6bd4\u8f83\u6162\uff0c\u4f1a\u628a\u6240\u6709\u7248\u672c\u90fd\u62f7\u8d1d\u4e0b\u6765\uff0c\u5982\u679c\u7f51\u65ad\u4e86\uff0c\u7528 svn cleanup \u5220\u6389\u9501\uff0c\u91cd\u65b0\u6267\u884c\u4e00\u4e0b\uff0c\u4f1a\u65ad\u70b9\u7eed\u4f20\n$ svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev\n$ cd inlong-dist-dev\n# \u8ffd\u52a0\u4f60\u751f\u6210\u7684 KEY \u5230\u6587\u4ef6 KEYS \u4e2d, \u8ffd\u52a0\u540e\u6700\u597d\u68c0\u67e5\u4e00\u4e0b\u662f\u5426\u6b63\u786e\n$ gpg --export --armor YOUR_NAME@apache.org >> KEYS \n# \u63a5\u4e0b\u6765\u4f1a\u8981\u6c42\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u5c31\u7528\u4f60\u7684 apache \u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\n$ svn ci -m "add gpg key for YOUR_NAME" \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 release \u5206\u652f\u4e2d\u6dfb\u52a0\u516c\u94a5\u5230 KEYS\uff0c\u7528\u4e8e\u53d1\u5e03\u6b63\u5f0f\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ svn co https://dist.apache.org/repos/dist/release/inlong /tmp/inlong-dist-release\n$ cd inlong-dist-release\n$ gpg --export --armor YOUR_NAME@apache.org >> KEYS \n$ svn ci -m "add gpg key for YOUR_NAME" \n')),(0,r.kt)("h3",{id:"\u4e0a\u4f20-gpg-\u516c\u94a5\u5230-github-\u8d26\u6237"},"\u4e0a\u4f20 GPG \u516c\u94a5\u5230 Github \u8d26\u6237"),(0,r.kt)("p",null,"\u8fdb\u5165 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/keys"},"https://github.com/settings/keys"),' \uff0c\u6dfb\u52a0 GPG KEYS\u3002\u5982\u679c\u6dfb\u52a0\u540e\u4f60\u53d1\u73b0\u8fd9\u4e2a\u5bc6\u94a5\u540e\u9762\u5199\u4e86"\u672a\u7ecf\u8fc7\u9a8c\u8bc1" (unverified)\uff0c\u9700\u8981\u5c06 GPG key \u4e2d\u90ae\u7bb1\u7ed1\u5b9a\u5230\u4f60\u7684 ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/emails"},"GitHub \u8d26\u6237"),"\u3002"),(0,r.kt)("h2",{id:"maven-\u8bbe\u7f6e"},"Maven \u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5728 maven \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.xml")," \u4e2d\uff0c\u7528\u6b63\u786e\u7684\u503c\u66ff\u6362\u4e0b\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"<servers>/<profiles>")," \u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<servers>\n    \x3c!-- Apache Repo Settings --\x3e\n    <server>\n        <id>apache.snapshots.https</id>\n        <username>{\u4f60\u7684 Apache \u7528\u6237 ID}</username>\n        <password>{\u4f60\u7684 Apache \u7528\u6237\u5bc6\u7801}</password>\n    </server>\n    <server>\n        <id>apache.releases.https</id>\n        <username>{\u4f60\u7684 Apache \u7528\u6237 ID}</username>\n        <password>{\u4f60\u7684 Apache \u7528\u6237\u5bc6\u7801}</password>\n    </server>\n</servers>\n<profiles>\n    <profile>\n      <id>apache-release</id>\n      <properties>\n        <gpg.keyname>{\u4f60\u7684 GPG Key ID}</gpg.keyname>\n        <gpg.useagent>true</gpg.useagent>\n        <gpg.passphrase>{\u4f60\u7684 GPG Key \u5bc6\u7801}</gpg.passphrase>\n      </properties>\n    </profile>\n</profiles>\n")),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u6253\u5305"},"\u7f16\u8bd1\u6253\u5305"),(0,r.kt)("p",null,"\u4ee5\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"release_version")," \u4e3a\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u53f7\uff0c\u6bd4\u5982 1.4.0\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"rc_version")," \u4e3a Releae Candidate\uff0c\u6bd4\u5982 RC0\uff0cRC1...;",(0,r.kt)("inlineCode",{parentName:"p"},"KEY_ID")," \u662f\u4f60\u521b\u5efa\u7684 GPG Key ID."),(0,r.kt)("h3",{id:"\u51c6\u5907\u5206\u652f"},"\u51c6\u5907\u5206\u652f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ece\u7248\u672c\u4e3b\u5206\u652f\u521b\u5efa\u5f85\u53d1\u5e03\u5206\u652f\uff0c\u5e76\u4fee\u6539 POM \u7248\u672c\u53f7\u548c CHANGES.md\u3002\u6bd4\u5982\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"branch-1.4")," \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"release-1.4.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u4ee3\u7801\u662f\u5426\u6b63\u5e38\uff0c\u5305\u62ec\u7f16\u8bd1\u6210\u529f\u3001\u5355\u5143\u6d4b\u8bd5\u5168\u90e8\u6210\u529f\u3001RAT \u68c0\u67e5\u3001Docker \u955c\u50cf\u7b49"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# build \u68c0\u67e5\n$ mvn clean package -Dmaven.javadoc.skip=true\n# RAT \u68c0\u67e5\n$ mvn apache-rat:check\n# Docker \u955c\u50cf\n$ mvn clean package -DskipTests -Pdocker\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8981\u786e\u4fdd\u4ee3\u7801\u5df2\u7ecf\u68c0\u67e5\u65e0\u8bef\uff0c\u518d\u8fdb\u884c\u4e0b\u4e00\u6b65\uff0c\u5305\u62ec\u7f16\u8bd1\u6210\u529f\u3001\u5355\u5143\u6d4b\u8bd5\u5168\u90e8\u6210\u529f\uff0cRAT \u68c0\u67e5\u6210\u529f\u7b49")),(0,r.kt)("h3",{id:"\u521b\u5efa-tag"},"\u521b\u5efa tag"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5e26\u7b7e\u540d\u7684 tag\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ git_tag=${release_version}-${rc_version}\n$ export GPG_TTY=`tty` && git config user.signingkey ${KEY_ID}\n$ git tag -s $git_tag -m "Tagging the ${release_version} first Releae Candidate (Candidates start at zero)"\n')),(0,r.kt)("h3",{id:"\u6253\u5305\u6e90\u7801"},"\u6253\u5305\u6e90\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ mkdir /tmp/apache-inlong-${release_version}-${rc_version}\n$ git archive --format=tar.gz --output="/tmp/apache-inlong-${release_version}-${rc_version}/apache-inlong-${release_version}-src.tar.gz" --prefix="apache-inlong-${release_version}/" $git_tag\n')),(0,r.kt)("h3",{id:"\u6253\u5305\u4e8c\u8fdb\u5236\u5305"},"\u6253\u5305\u4e8c\u8fdb\u5236\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165\u6e90\u7801\u5305\u76ee\u5f55\n$ cd /tmp/apache-inlong-${release_version}-${rc_version}\n# \u89e3\u538b\u6e90\u7801\u5305\n$ tar xzvf apache-inlong-${release_version}-src.tar.gz\n$ cd apache-inlong-${release_version}\n# \u7f16\u8bd1\n$ mvn compile clean install package -DskipTests\n# \u62f7\u8d1d\u4e8c\u8fdb\u5236\u5305\u62f7\u5230\u6e90\u7801\u5305\u76ee\u5f55\u4e0b\uff0c\u65b9\u4fbf\u4e0b\u4e00\u6b65\u5bf9\u5305\u8fdb\u884c\u7b7e\u540d\n$ cp ./inlong-distribution/target/apache-inlong-${release_version}-bin.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/\n# \u62f7\u8d1d connectors \u4e8c\u8fdb\u5236\u5305\u62f7\u5230\u6e90\u7801\u5305\u76ee\u5f55\u4e0b\uff0c\u65b9\u4fbf\u4e0b\u4e00\u6b65\u5bf9\u5305\u8fdb\u884c\u7b7e\u540d\n$ cp ./inlong-distribution/target/apache-inlong-${release_version}-sort-connectors.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/\n")),(0,r.kt)("h3",{id:"\u5bf9\u6e90\u7801\u5305\u4e8c\u8fdb\u5236\u5305\u8fdb\u884c\u7b7e\u540dsha512"},"\u5bf9\u6e90\u7801\u5305/\u4e8c\u8fdb\u5236\u5305\u8fdb\u884c\u7b7e\u540d/sha512"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165\u6e90\u7801\u5305\u76ee\u5f55\n$ cd /tmp/apache-inlong-${release_version}-${rc_version}\n# \u8ba1\u7b97 SHA512\n$ for i in *.tar.gz; do echo $i; gpg -u ${KEY_ID} --print-md SHA512 $i > $i.sha512 ; done\n# \u8ba1\u7b97\u7b7e\u540d\n$ for i in *.tar.gz; do echo $i; gpg -u ${KEY_ID} --armor --output $i.asc --detach-sig $i ; done\n")),(0,r.kt)("h3",{id:"\u68c0\u67e5\u751f\u6210\u7684\u7b7e\u540dsha512\u662f\u5426\u6b63\u786e"},"\u68c0\u67e5\u751f\u6210\u7684\u7b7e\u540d/sha512\u662f\u5426\u6b63\u786e"),(0,r.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/community/how-to-verify"},"\u9a8c\u8bc1\u5019\u9009\u7248\u672c"),"\uff0c\u6bd4\u5982\u9a8c\u8bc1\u7b7e\u540d\u662f\u5426\u6b63\u786e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; gpg -u ${KEY_ID} --verify $i.asc $i ; done\n")),(0,r.kt)("h2",{id:"\u51c6\u5907-apache-\u53d1\u5e03"},"\u51c6\u5907 Apache \u53d1\u5e03"),(0,r.kt)("h3",{id:"\u53d1\u5e03-jar-\u5305\u5230-apache-nexus-\u4ed3\u5e93"},"\u53d1\u5e03 jar \u5305\u5230 Apache Nexus \u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165\u6e90\u7801\u5305\u76ee\u5f55\n$ cd /tmp/apache-inlong-${release_version}-${rc_version}/apache-inlong-${release_version}\n# \u5f00\u59cb\u4e0a\u4f20\uff0c\u786e\u4fdd settings.xml \u4e3a\u4e0a\u9762\u6b65\u9aa4\u5df2\u66f4\u65b0\u7684\u6587\u4ef6\n$ mvn -DskipTests deploy -Papache-release -Dmaven.javadoc.skip=true\n")),(0,r.kt)("h3",{id:"\u4e0a\u4f20-tag-\u5230-git-\u4ed3\u5e93"},"\u4e0a\u4f20 tag \u5230 git \u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728\u521b\u5efa tag \u7684\u6e90\u7801\u76ee\u5f55\u6267\u884c\n$ git push origin ${release_version}-${rc_version}\n")),(0,r.kt)("h3",{id:"\u4e0a\u4f20\u7f16\u8bd1\u597d\u7684\u6587\u4ef6\u5230-dist"},"\u4e0a\u4f20\u7f16\u8bd1\u597d\u7684\u6587\u4ef6\u5230 dist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06 dist \u4ed3\u5e93 checkout \u5230\u672c\u5730\u76ee\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fd9\u4e2a\u6b65\u9aa4\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162\uff0c\u4f1a\u628a\u6240\u6709\u7248\u672c\u90fd\u8003\u4e0b\u6765\uff0c\u5982\u679c\u7f51\u65ad\u4e86\uff0c\u7528 svn cleanup \u5220\u6389\u9501\uff0c\u91cd\u65b0\u6267\u884c\u4e00\u4e0b\uff0c\u4f1a\u65ad\u70b9\u7eed\u4f20\n$ svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6e90\u7801\u548c\u4e8c\u8fdb\u5236\u6587\u4ef6\u5e76\u63d0\u4ea4\u5230 SVN \u4ed3\u5e93")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ cd /tmp/inlong-dist-dev\n# \u521b\u5efa\u7248\u672c\u76ee\u5f55\n$ mkdir ${release_version}-${rc_version}\n# \u5c06\u6e90\u7801\u5305\u548c\u7b7e\u540d\u5305\u62f7\u8d1d\u5230\u6b64\u5904\n$ cp /tmp/apache-inlong-${release_version}-${rc_version}/*tar.gz* ${release_version}-${rc_version}/\n# \u68c0\u67e5 svn \u72b6\u6001\n$ svn status\n# \u6dfb\u52a0\u5230 svn \u7248\u672c\n$ svn add ${release_version}-${rc_version}\n# \u68c0\u67e5 svn \u72b6\u6001\n$ svn status\n# \u63d0\u4ea4\u81f3 svn \u8fdc\u7a0b\u670d\u52a1\u5668\n$ svn commit -m "prepare for ${release_version} ${rc_version}"\n')),(0,r.kt)("h3",{id:"\u5173\u95ed-apache-staging-\u4ed3\u5e93"},"\u5173\u95ed Apache Staging \u4ed3\u5e93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Apache \u8d26\u53f7\u767b\u5f55 ",(0,r.kt)("a",{parentName:"li",href:"http://repository.apache.org"},"http://repository.apache.org")),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5de6\u4fa7\u7684 Staging repositories"),(0,r.kt)("li",{parentName:"ul"},"\u641c\u7d22 InLong \u5173\u952e\u5b57\uff0c\u9009\u62e9\u4f60\u6700\u8fd1\u4e0a\u4f20\u7684\u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u4e0a\u65b9\u7684 Close \u6309\u94ae\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u68c0\u67e5"),(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u901a\u8fc7\u4ee5\u540e, \u5728\u4e0b\u65b9\u7684 Summary \u6807\u7b7e\u9875\u4e0a\u51fa\u73b0\u4e00\u4e2a\u8fde\u63a5\uff0c\u8bf7\u4fdd\u5b58\u597d\u8fd9\u4e2a\u94fe\u63a5\uff0c\u9700\u8981\u653e\u5728\u63a5\u4e0b\u6765\u7684\u6295\u7968\u90ae\u4ef6\u5f53\u4e2d\uff0c\u94fe\u63a5\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"li"},"https://repository.apache.org/content/repositories/orgapacheinlong-{staging-id}")," \u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\u70b9\u51fb Close \u53ef\u80fd\u4f1a\u51fa\u73b0\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u5931\u8d25\u539f\u56e0\u5e76\u5904\u7406")),(0,r.kt)("h2",{id:"apache-inlong-\u793e\u533a\u6295\u7968"},"Apache InLong \u793e\u533a\u6295\u7968"),(0,r.kt)("h3",{id:"\u53d1\u8d77\u6295\u7968"},"\u53d1\u8d77\u6295\u7968"),(0,r.kt)("p",null,"\u53d1\u9001\u90ae\u4ef6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev@inlong.apache.org"),"\uff0c\u6295\u7968\u6a21\u677f\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\u6807\u9898\uff1a[VOTE] Release Apache InLong ${release_version} ${rc_version}\n\n\u5185\u5bb9\uff1a\n\nHello Apache InLong PMC and Community,\n\n    This is a call for a vote to release Apache InLong version ${release_version}-${rc_version}.\n\n    The tag to be voted on is ${release_version}-${rc_version}:\n\n    https://github.com/apache/inlong/tree/${release_version}-${rc_version}\n\n    The release tarball, signature, and checksums can be found at:\n\n    https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version}/\n\n    Maven artifacts are available in a staging repository at:\n\n    https://repository.apache.org/content/repositories/orgapacheinlong-{staging-id}\n\n    Artifacts were signed with the {YOUR_GPG_KEY_ID} key, which can be found in:\n\n    https://downloads.apache.org/inlong/KEYS\n\n    ${release_version} includes ~ ${issue_count} bug fixes and improvements done since the last versions, which can be found at:\n\n    https://github.com/apache/inlong/blob/${release_version}-${rc_version}/CHANGES.md\n\n    Please download, verify, and test.\n\n    The VOTE will remain open for at least 72 hours.\n\n    [ ] +1 Release this package as Apache InLong ${release_version}\n    [ ] +0\n    [ ] -1 Do not release this package because...\n\n    To learn more about apache InLong, please see\n    http://inlong.apache.org/\n\n    Checklist for reference:\n\n      [ ] Download links are valid.\n      [ ] Checksums and signatures.\n      [ ] LICENSE/NOTICE files exist\n      [ ] No unexpected binary files\n      [ ] All source files have ASF headers\n      [ ] Can compile from source\n      [ ] All Tests Passed\n\n      More detailed checklist, please refer to the following:\n      https://inlong.apache.org/community/how-to-verify\n\nThanks,\nYour InLong Release Manager\n")),(0,r.kt)("h3",{id:"\u7edf\u8ba1\u6295\u7968\u7ed3\u679c"},"\u7edf\u8ba1\u6295\u7968\u7ed3\u679c"),(0,r.kt)("p",null,"\u53d1\u9001\u90ae\u4ef6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev@inlong.apache.org"),"\uff0c\u6295\u7968\u6a21\u677f\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\u6807\u9898\uff1a[RESULT][VOTE] Release Apache InLong ${release_version} ${rc_version}\n\n\u5185\u5bb9\uff1a\n\nHello Apache InLong PMC and Community,\n\n    The vote closes now as 72hr have passed. The vote passed with\n    xx (+1 binding) votes from the PMC,\n    xx (+1 non-binding) vote from the rest of the developer community,\n    and no further 0 or -1 votes.\n\n    The voting thread: {vote_mail_address}\n\n    The release is accepted and will be published.\n\nThank you for your support.\nYour InLong Release Manager\n")),(0,r.kt)("h2",{id:"\u6b63\u5f0f\u53d1\u5e03"},"\u6b63\u5f0f\u53d1\u5e03"),(0,r.kt)("h3",{id:"\u5c06\u6e90\u7801\u548c\u4e8c\u8fdb\u5236\u5305\u4ece-svn-\u7684-dev-\u76ee\u5f55\u79fb\u52a8\u5230-release-\u76ee\u5f55"},"\u5c06\u6e90\u7801\u548c\u4e8c\u8fdb\u5236\u5305\u4ece svn \u7684 dev \u76ee\u5f55\u79fb\u52a8\u5230 release \u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ svn mv https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/inlong/${release_version} -m "Release ${release_version}"\n')),(0,r.kt)("p",null,"\u7136\u540e\u786e\u8ba4 ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/inlong/"},"dev")," \u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"${release_version}-${rc_version}")," \u76ee\u5f55\u662f\u5426\u5df2\u88ab\u5220\u9664\u3002"),(0,r.kt)("h3",{id:"\u5728-apache-staging-\u4ed3\u5e93\u53d1\u5e03\u7248\u672c"},"\u5728 Apache Staging \u4ed3\u5e93\u53d1\u5e03\u7248\u672c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Apache \u8d26\u53f7\u767b\u5f55 ",(0,r.kt)("a",{parentName:"li",href:"http://repository.apache.org"},"http://repository.apache.org")),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5de6\u4fa7\u7684 Staging repositories\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u641c\u7d22 InLong \u5173\u952e\u5b57\uff0c\u9009\u62e9\u4f60\u6700\u8fd1\u4e0a\u4f20\u7684\u4ed3\u5e93\uff0c\u6295\u7968\u90ae\u4ef6\u4e2d\u6307\u5b9a\u7684\u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u4e0a\u65b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Release")," \u6309\u94ae\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u68c0\u67e5")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u7b49\u4ed3\u5e93\u540c\u6b65\u5230\u5176\u4ed6\u6570\u636e\u6e90\uff0c\u4e00\u822c\u9700\u898124\u5c0f\u65f6")),(0,r.kt)("h3",{id:"\u66f4\u65b0\u5b98\u7f51\u6587\u6863\u548c\u4e0b\u8f7d\u94fe\u63a5"},"\u66f4\u65b0\u5b98\u7f51\u6587\u6863\u548c\u4e0b\u8f7d\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u65b0",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download/"},"\u4e0b\u8f7d\u9875\u9762"),"\u7684\u8d44\u6e90\u94fe\u63a5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa ${release-version} \u5bf9\u5e94\u7248\u672c\u7684\u6587\u6863"))),(0,r.kt)("h3",{id:"\u53d1-announce-\u90ae\u4ef6\u4e3b\u9001-devinlongapacheorg\u6284\u9001-announceapacheorg"},"\u53d1 ANNOUNCE \u90ae\u4ef6\uff0c\u4e3b\u9001 ",(0,r.kt)("inlineCode",{parentName:"h3"},"dev@inlong.apache.org"),"\uff0c\u6284\u9001 ",(0,r.kt)("inlineCode",{parentName:"h3"},"announce@apache.org")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd Apache Staging \u4ed3\u5e93\u5df2\u53d1\u5e03\u6210\u529f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u767b\u9646 ",(0,r.kt)("a",{parentName:"p",href:"https://downloads.apache.org/inlong/$%7Brelease-version%7D/"},"https://downloads.apache.org/inlong/${release-version}/")," \u67e5\u770b\u662f\u5426\u6709\u5b89\u88c5\u5305")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5ba3\u5e03 release \u90ae\u4ef6\uff0c\u6a21\u677f\u4e3a\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\u6807\u9898\uff1a [ANNOUNCE] Release Apache InLong ${release_version}\n\n\u5185\u5bb9\uff1a\n\nHi all,\n\nThe Apache InLong community is pleased to announce\nthat Apache InLong ${release_version} has been released!\n\nApache InLong is a one-stop integration framework for massive data that provides automatic, secure,\ndistributed, and efficient data publishing and subscription capabilities.\nThis platform helps you easily build stream-based data applications.\n\nThis release contains a number of new features, bug fixes and\nimprovements compared to the last version released before.\nThe notable changes since ${release_version} include:\n\n1. Feature-1\n2. Feature-2\n3. Feature-3\n...\n\nPlease refer to the change log for the complete list of changes:\nhttps://github.com/apache/inlong/blob/release-${release_version}/CHANGES.md\n\nApache InLong website: https://inlong.apache.org/\n\nDownload Links: https://inlong.apache.org/download\n\nInLong Resources:\n- Issue: https://github.com/apache/inlong/issues\n- Mailing list: dev@inlong.apache.org\n\nThanks\nOn behalf of the Apache InLong community\n")),(0,r.kt)("h3",{id:"github-\u5b98\u7f51\u65b0\u589e-release-\u5305"},"GitHub \u5b98\u7f51\u65b0\u589e release \u5305"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fdb\u5165 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/inlong"},"https://github.com/apache/inlong")," \uff0c\u70b9\u51fb\u53f3\u4fa7 Releases \u4e0b + \u53f7\uff0c \u7136\u540e\u70b9\u51fb Draft a new release"),(0,r.kt)("li",{parentName:"ul"},"release title \u4e3a ${release_version}\uff0c\u4e0a\u4f20 ",(0,r.kt)("a",{parentName:"li",href:"https://downloads.apache.org/inlong/$%7Brelease-version%7D"},"https://downloads.apache.org/inlong/${release-version}")," \u4e0b\u7684\u6240\u6709\u6587\u4ef6\u5230\u4e0a\u4f20\u680f\u4e2d\u518d\u53d1\u5e03")),(0,r.kt)("h2",{id:"\u53d1\u5e03\u540e"},"\u53d1\u5e03\u540e"),(0,r.kt)("h3",{id:"\u6e05\u7406\u672c\u5730\u4e34\u65f6\u6587\u4ef6"},"\u6e05\u7406\u672c\u5730\u4e34\u65f6\u6587\u4ef6"),(0,r.kt)("p",null,"\u82e5\u4ee5\u4e0a\u6b65\u9aa4\u64cd\u4f5c\u6210\u529f\uff0c\u8bf4\u660e\u7248\u672c\u53d1\u5e03\u987a\u5229\uff0c\u53ef\u4ee5\u6e05\u7406\u672c\u5730\u4e34\u65f6\u6587\u4ef6\uff0c\u8fdb\u884c\u793e\u533a\u6295\u7968\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ rm -rf /tmp/apache-inlong-${release_version}-${rc_version}/\n$ rm -rf /tmp/inlong-dist-dev/\n")),(0,r.kt)("h3",{id:"\u5f52\u6863\u4e0a\u4e00\u4e2a\u7248\u672c\u7684\u53d1\u5e03\u5305"},"\u5f52\u6863\u4e0a\u4e00\u4e2a\u7248\u672c\u7684\u53d1\u5e03\u5305"),(0,r.kt)("p",null,"\u5220\u9664 ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/inlong/"},"release")," \u76ee\u5f55\u4e0b\u4e0a\u4e00\u4e2a\u7248\u672c\u7684\u53d1\u5e03\u5305\uff0c\u8fd9\u4e9b\u5305\u4f1a\u88ab\u81ea\u52a8\u4fdd\u5b58\u5728",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/inlong/"},"\u8fd9\u91cc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# last_release_version \u4e3a\u4e0a\u4e00\u4e2a\u7248\u672c\u53f7\uff0c\u53ef\u4ee5\u8bbf\u95ee https://dist.apache.org/repos/dist/release/inlong/ \u67e5\u770b\uff0c\u6bd4\u5982 1.3.0\n$ svn delete https://dist.apache.org/repos/dist/release/inlong/${last_release_version} -m "Delete ${last_release_version}"\n')))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8293],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(a),m=n,k=g["".concat(p,".").concat(m)]||g[m]||u[m]||i;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},99894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"\u5982\u4f55\u9a8c\u8bc1\u7248\u672c",sidebar_position:7},l=void 0,o={unversionedId:"how-to-verify",id:"how-to-verify",title:"\u5982\u4f55\u9a8c\u8bc1\u7248\u672c",description:"\u8be6\u7ec6\u7684\u68c0\u67e5\u5217\u8868\u8bf7\u53c2\u8003: check list",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-verify.md",sourceDirName:".",slug:"/how-to-verify",permalink:"/zh-CN/community/how-to-verify",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/i18n/zh-CN/how-to-verify.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u5982\u4f55\u9a8c\u8bc1\u7248\u672c",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u53d1\u5e03\u7248\u672c",permalink:"/zh-CN/community/how-to-release"},next:{title:"\u5982\u4f55\u62a5\u544a\u95ee\u9898",permalink:"/zh-CN/community/how-to-report-issues"}},p={},s=[{value:"\u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883",id:"\u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883",level:2},{value:"\u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4",id:"\u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4",level:2},{value:"\u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574",id:"\u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574",level:3},{value:"\u68c0\u67e5gpg\u7b7e\u540d",id:"\u68c0\u67e5gpg\u7b7e\u540d",level:3},{value:"\u68c0\u67e5sha512\u54c8\u5e0c",id:"\u68c0\u67e5sha512\u54c8\u5e0c",level:3},{value:"\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9",id:"\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9",level:3},{value:"\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305",id:"\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8be6\u7ec6\u7684\u68c0\u67e5\u5217\u8868\u8bf7\u53c2\u8003: ",(0,n.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"check list")),(0,n.kt)("h2",{id:"\u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883"},"\u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"svn co https://dist.apache.org/repos/dist/dev/incubator/inlong/${release_version}-${rc_version}/\n")),(0,n.kt)("h2",{id:"\u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4"},"\u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5f00\u59cb\u9a8c\u8bc1\u73af\u8282\uff0c\u9a8c\u8bc1\u5305\u542b\u4f46\u4e0d\u5c40\u9650\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u548c\u5f62\u5f0f")),(0,n.kt)("h3",{id:"\u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574"},"\u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4e0a\u4f20\u5230dist\u7684\u5305\u5fc5\u987b\u5305\u542b\u6e90\u7801\u5305\uff0c\u4e8c\u8fdb\u5236\u5305\u53ef\u9009")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305"),(0,n.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305\u7684\u7b7e\u540d"),(0,n.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305\u7684sha512"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0a\u4f20\u4e86\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u68c0\u67e5(2)-(4)\u6240\u5217\u7684\u5185\u5bb9")),(0,n.kt)("h3",{id:"\u68c0\u67e5gpg\u7b7e\u540d"},"\u68c0\u67e5gpg\u7b7e\u540d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u516c\u94a5",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://dist.apache.org/repos/dist/dev/incubator/inlong/KEYS > KEYS # \u4e0b\u8f7dKEYS\ngpg --import KEYS # \u5bfc\u5165KEYS\u5230\u672c\u5730\n"))),(0,n.kt)("li",{parentName:"ul"},"\u4fe1\u4efb\u516c\u94a5",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u4fe1\u4efb\u6b64\u6b21\u7248\u672c\u6240\u4f7f\u7528\u7684KEY"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"  gpg --edit-key xxxxxxxxxx #\u6b64\u6b21\u7248\u672c\u6240\u4f7f\u7528\u7684KEY\n  gpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\n  This is free software: you are free to change and redistribute it.\n  There is NO WARRANTY, to the extent permitted by law.\n"))),"  Secret key is available.","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,n.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,n.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,n.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  gpg> trust #\u4fe1\u4efb\nsec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,n.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,n.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,n.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  Please decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"1 = I don't know or won't say\n2 = I do NOT trust\n3 = I trust marginally\n4 = I trust fully\n5 = I trust ultimately\nm = back to the main menu\n")),"  Your decision? 5 #\u9009\u62e95\nDo you really want to set this key to ultimate trust? (y/N) y #\u9009\u62e9y","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,n.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,n.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,n.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  gpg> ","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,n.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,n.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,n.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},""))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u7b7e\u540d",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n#\u6216\u8005\ngpg --verify apache-inlong-${release_version}-src.tar.gz.asc apache-inlong-${release_version}-src.tar.gz\n# \u5982\u679c\u4e0a\u4f20\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u9700\u8981\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u7684\u7b7e\u540d\u662f\u5426\u6b63\u786e\ngpg --verify apache-inlong-server-${release_version}-bin.tar.gz.asc apache-inlong-server-${release_version}-bin.tar.gz\ngpg --verify apache-inlong-client-${release_version}-bin.tar.gz.asc apache-inlong-client-${release_version}-bin.tar.gz\n")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  - \u68c0\u67e5\u7ed3\u679c\n  > \u51fa\u73b0\u7c7b\u4f3c\u4ee5\u4e0b\u5185\u5bb9\u5219\u8bf4\u660e\u7b7e\u540d\u6b63\u786e\uff0c\u5173\u952e\u5b57\uff1a**`Good signature`**\n```shell\napache-inlong-0.3.0-incubating-src.tar.gz\ngpg: Signature made Sat May 30 11:45:01 2020 CST\ngpg:                using RSA key 9B12C2228BDFF4F4CFE849445EF3A66D57EC647A\ngpg: Good signature from "Guangxu Cheng <gxcheng@apache.org>" [ultimate]gular2\n')),(0,n.kt)("h3",{id:"\u68c0\u67e5sha512\u54c8\u5e0c"},"\u68c0\u67e5sha512\u54c8\u5e0c"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u5730\u8ba1\u7b97sha512\u54c8\u5e0c\u540e\uff0c\u9a8c\u8bc1\u662f\u5426\u4e0edist\u4e0a\u7684\u4e00\u81f4"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done\n#\u6216\u8005\ngpg --print-md SHA512 apache-inlong-${release_version}-src.tar.gz\n# \u5982\u679c\u4e0a\u4f20\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u9700\u8981\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u7684sha512\u54c8\u5e0c\ngpg --print-md SHA512 apache-inlong-server-${release_version}-bin.tar.gz\ngpg --print-md SHA512 apache-inlong-client-${release_version}-bin.tar.gz\n# \u6216\u8005\nfor i in *.tar.gz.sha512; do echo $i; sha512sum -c $i; done\n"))),(0,n.kt)("h3",{id:"\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9"},"\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9"),(0,n.kt)("p",null,"  \u89e3\u538b\u7f29",(0,n.kt)("inlineCode",{parentName:"p"},"apache-inlong-${release_version}-src.tar.gz"),"\uff0c\u8fdb\u884c\u5982\u4e0b\u68c0\u67e5:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DISCLAIMER\u6587\u4ef6\u662f\u5426\u5b58\u5728\u53ca\u5185\u5bb9\u662f\u5426\u6b63\u786e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"LICENSE and NOTICE\u6587\u4ef6\u662f\u5426\u5b58\u5728\u53ca\u5185\u5bb9\u662f\u5426\u6b63\u786e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6240\u6709\u6587\u4ef6\u662f\u5426\u5e26\u6709ASF License\u5934")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6e90\u7801\u662f\u5426\u80fd\u591f\u6b63\u5e38\u7f16\u8bd1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5355\u6d4b\u662f\u5426\u80fd\u591f\u8dd1\u901a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"...."),(0,n.kt)("p",{parentName:"li"},"\u6ce8\u610f\u4e8b\u9879\uff1a\n\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0\u6bd4\u8f83\u591a\u7684\u56f0\u6270\u95ee\u9898\u5f71\u54cd\u5230\u6211\u4eec\u7684\u7248\u672c\u9a8c\u8bc1\uff0c\u5982\u4e0b\u5904\u7406\u4f9b\u53c2\u8003\uff1a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6821\u9a8c\u7248\u672c\u524d\u5148\u6e05\u7406\u6389\u672c\u5730\u4ed3\u5e93\uff1b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u65b9\u6cd5\u4e0d\u9650\u5236\uff0c\u4f46\u7531\u4e8e\u9879\u76ee\u91cc\u7684\u6a21\u5757\u505a\u4e86docker\u5316\u5904\u7406\uff0c\u9996\u6b21\u7f16\u8bd1\u5efa\u8bae\u5148\u201cmvn clean package install\u201d\uff0c\u5176\u4ed6\u63a8\u8350\u7684\u64cd\u4f5c\u8fd8\u6709\u201cmvn compile\u201d\uff0c\u201cmvn clean package\u201d\uff1b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u5355\u5143\u6d4b\u8bd5\u65f6\uff0c\u5927\u5bb6\u8981\u7528\u201cmvn clean test\u201d\u5355\u72ec\u8fd0\u884c\uff0c\u786e\u4fdd\u6ca1\u6709\u9690\u85cf\u95ee\u9898\u3002"))),(0,n.kt)("h3",{id:"\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305"},"\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305"),(0,n.kt)("p",null,"  \u89e3\u538b\u7f29",(0,n.kt)("inlineCode",{parentName:"p"},"apache-inlong-client-${release_version}-src.tar.gz"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"\n  apache-inlong-server-${release_version}-src.tar.gz"),"\uff0c\u8fdb\u884c\u5982\u4e0b\u68c0\u67e5:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DISCLAIMER\u6587\u4ef6\u662f\u5426\u5b58\u5728\u53ca\u5185\u5bb9\u662f\u5426\u6b63\u786e"),(0,n.kt)("li",{parentName:"ul"},"LICENSE and NOTICE\u6587\u4ef6\u662f\u5426\u5b58\u5728\u53ca\u5185\u5bb9\u662f\u5426\u6b63\u786e"),(0,n.kt)("li",{parentName:"ul"},"\u80fd\u5426\u6b63\u5e38\u90e8\u7f72\u6210\u529f"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u6d4b\u8bd5\u73af\u5883\u3001\u9a8c\u8bc1\u751f\u4ea7\u6d88\u8d39\u80fd\u5426\u6b63\u5e38\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u4f60\u8ba4\u4e3a\u53ef\u80fd\u4f1a\u51fa\u95ee\u9898\u7684\u5730\u65b9"),(0,n.kt)("li",{parentName:"ul"},"....")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4118],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,u=d["".concat(l,".").concat(g)]||d[g]||h[g]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"How to Release",sidebar_position:6},i=void 0,s={unversionedId:"how-to-release",id:"how-to-release",title:"How to Release",description:"This article mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements.",source:"@site/community/how-to-release.md",sourceDirName:".",slug:"/how-to-release",permalink:"/community/how-to-release",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/community/how-to-release.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"How to Release",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to vote a Committer or PMC",permalink:"/community/how-to-vote-a-committer-pmc"},next:{title:"How to Verify release",permalink:"/community/how-to-verify"}},l={},p=[{value:"Prolegomenon",id:"prolegomenon",level:2},{value:"Adding PG KEY",id:"adding-pg-key",level:2},{value:"Install gpg",id:"install-gpg",level:3},{value:"Generate gpg Key",id:"generate-gpg-key",level:3},{value:"Attentions\uff1a",id:"attentions",level:4},{value:"Generate the key as prompt",id:"generate-the-key-as-prompt",level:4},{value:"upload your key to public gpg keyserver",id:"upload-your-key-to-public-gpg-keyserver",level:3},{value:"Check whether the key is created successfully",id:"check-whether-the-key-is-created-successfully",level:3},{value:"Add your gpg public key to the KEYS document",id:"add-your-gpg-public-key-to-the-keys-document",level:3},{value:"Add the public key to the KEYS in the release branch for releasing official version",id:"add-the-public-key-to-the-keys-in-the-release-branch-for-releasing-official-version",level:4},{value:"Upload the GPG public key to your Github account",id:"upload-the-gpg-public-key-to-your-github-account",level:3},{value:"Mavne settings",id:"mavne-settings",level:2},{value:"Build",id:"build",level:2},{value:"Prepare branch",id:"prepare-branch",level:3},{value:"create tag",id:"create-tag",level:3},{value:"Building source code package",id:"building-source-code-package",level:3},{value:"Building binary package",id:"building-binary-package",level:3},{value:"sign the source package/binary package/sha512",id:"sign-the-source-packagebinary-packagesha512",level:3},{value:"check the signature/sha512",id:"check-the-signaturesha512",level:3},{value:"Prepare for Apache release",id:"prepare-for-apache-release",level:2},{value:"Deploy jar to Apache Nexus repository",id:"deploy-jar-to-apache-nexus-repository",level:3},{value:"Upload tag to git repository",id:"upload-tag-to-git-repository",level:3},{value:"Upload tar file to dist repo",id:"upload-tar-file-to-dist-repo",level:3},{value:"Checkout InLong to local directory",id:"checkout-inlong-to-local-directory",level:3},{value:"Add public key to KEYS file adn commit to SVN repository",id:"add-public-key-to-keys-file-adn-commit-to-svn-repository",level:3},{value:"Close Apache Staging repository",id:"close-apache-staging-repository",level:3},{value:"Voting",id:"voting",level:2},{value:"InLong community vote",id:"inlong-community-vote",level:3},{value:"Vote template",id:"vote-template",level:4},{value:"Vote Result template",id:"vote-result-template",level:4},{value:"Officially released",id:"officially-released",level:2},{value:"Merge branch release-${release_version} to master branch",id:"merge-branch-release-release_version-to-master-branch",level:3},{value:"Move source code and binary package from DEV to release repository on SVN.",id:"move-source-code-and-binary-package-from-dev-to-release-repository-on-svn",level:3},{value:"Check whether the dev and release is correct",id:"check-whether-the-dev-and-release-is-correct",level:3},{value:"Release version in Apache Staging",id:"release-version-in-apache-staging",level:3},{value:"Update links on official website",id:"update-links-on-official-website",level:3},{value:"Send email to <code>dev@inlong.apache.org</code> and CC <code>announce@apache.org</code>",id:"send-email-to-devinlongapacheorg-and-cc-announceapacheorg",level:3}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements.")),(0,r.kt)("h2",{id:"prolegomenon"},"Prolegomenon"),(0,r.kt)("p",null,"Source Release is the key point which Apache values, also, is necessary for a release;\nBinary Release is optional. InLong can choose whether to release the binary package to the Apache repository or to the Maven central repository."),(0,r.kt)("p",null,"Note that for binary distribution packages, it is necessary to check that the new version does not contain third-party dependencies of class x, including direct reference and indirect reference parts."),(0,r.kt)("p",null,"For more guideline, you can refer the following links:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-publishing.html"},"ASF Release Creation Process")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/release-policy.html"},"ASF Release Policy")),(0,r.kt)("h2",{id:"adding-pg-key"},"Adding PG KEY"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/openpgp.html"},"https://infra.apache.org/openpgp.html"),"\n",(0,r.kt)("strong",{parentName:"p"},"This section is the requirements for release manager who is the first time to be a release manager"))),(0,r.kt)("h3",{id:"install-gpg"},"Install gpg"),(0,r.kt)("p",null,"For more details, please ref to ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"Official website"),", configurations under Mac OS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install gpg\n$ gpg --version #check the version, should be 2.x\n")),(0,r.kt)("h3",{id:"generate-gpg-key"},"Generate gpg Key"),(0,r.kt)("h4",{id:"attentions"},"Attentions\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name is best to keep consistent with your full name of Apache ID"),(0,r.kt)("li",{parentName:"ul"},"Email should be the Apache email"),(0,r.kt)("li",{parentName:"ul"},"Name is best to only use English to avoid garbled")),(0,r.kt)("h4",{id:"generate-the-key-as-prompt"},"Generate the key as prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ gpg --full-gen-key\ngpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 # input 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096 # input 4096\nRequested keysize is 4096 bits       \nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 # input 0\nKey does not expire at all\nIs this correct? (y/N) y # input y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Guangxu Cheng # input your name\nEmail address: gxcheng@apache.org # input your emal\nComment:                          # input some annotations, optional\nYou selected this USER-ID:\n    \"Guangxu Cheng <gxcheng@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # input 0\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# Input the security key\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase                         \u2502\n\u2502                                                      \u2502\n\u2502 Passphrase: _______________________________          \u2502\n\u2502                                                      \u2502\n\u2502       <OK>                              <Cancel>     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n# key generatio[n will be done after your inputting the key with the following output\ngpg: key 2DD587E7B10F3B1F marked as ultimately trusted\ngpg: revocation certificate stored as '/Users/cheng/.gnupg/openpgp-revocs.d/41936314E25F402D5F7D73152DD587E7B10F3B1F.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2020-05-19 [SC]\n      41936314E25F402D5F7D73152DD587E7B10F3B1F\nuid                      Guangxu Cheng <gxcheng@apache.org>\nsub   rsa4096 2020-05-19 [E]\n")),(0,r.kt)("h3",{id:"upload-your-key-to-public-gpg-keyserver"},"upload your key to public gpg keyserver"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ gpg --list-keys                                                        \n-------------------------------\npub   rsa4096 2020-05-18 [SC]\n      5931F8CFD04B37A325E4465D8C0D31C4149B3A87\nuid           [ultimate] Guangxu Cheng <gxcheng@apache.org>\nsub   rsa4096 2020-05-18 [E]\n\n# command for sending your key id to key server\n$ gpg --keyserver pgpkeys.mit.edu --send-key <key id>\n# Among them, pgpkeys.mit.edu is a randomly selected keyserver, and the keyserver list is: https://sks-keyservers.net/status/, which is automatically synchronized with each other, you can choose any one of them.\n")),(0,r.kt)("h3",{id:"check-whether-the-key-is-created-successfully"},"Check whether the key is created successfully"),(0,r.kt)("p",null,"Uploading takes about one minute, after that, you can check by your email at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://pgpkeys.mit.edu/"),"."),(0,r.kt)("h3",{id:"add-your-gpg-public-key-to-the-keys-document"},"Add your gpg public key to the KEYS document"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SVN is required for this step\nThe svn repository of the DEV branch is: ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/inlong"},"https://dist.apache.org/repos/dist/dev/inlong"),"\nThe svn repository of the Release branch is: ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/inlong"},"https://dist.apache.org/repos/dist/release/inlong")),(0,r.kt)("h4",{parentName:"blockquote",id:"add-the-public-key-to-keys-in-the-dev-branch-to-release-the-rc-version"},"Add the public key to KEYS in the dev branch to release the RC version"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ svn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev\n# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\n\u279c  ~ cd inlong-dist-dev\n\u279c  inlong-dist-dev ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append your key to the KEYS file\n\u279c  inlong-dist-dev ~ svn add .  # It is not needed if the KEYS document exists before.\n\u279c  inlong-dist-dev ~ svn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.\n'))),(0,r.kt)("h4",{id:"add-the-public-key-to-the-keys-in-the-release-branch-for-releasing-official-version"},"Add the public key to the KEYS in the release branch for releasing official version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ svn co https://dist.apache.org/repos/dist/release/inlong /tmp/inlong-dist-release\n\u279c  ~ cd inlong-dist-release\n\u279c  inlong-dist-release ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS    # Append the KEY you generated to the document KEYS, after appending, it is best to check whether it is correct\n\u279c  inlong-dist-release ~ svn add .  # It is not needed if the KEYS document exists before.\n\u279c  inlong-dist-release ~ svn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.\n')),(0,r.kt)("h3",{id:"upload-the-gpg-public-key-to-your-github-account"},"Upload the GPG public key to your Github account"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/keys"},"https://github.com/settings/keys")," to add GPG KEYS."),(0,r.kt)("li",{parentName:"ol"},"Please remember to bind the email address used in the GPG key to your github account (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/emails"},"https://github.com/settings/emails"),')., if you find "unverified" after adding it.')),(0,r.kt)("h2",{id:"mavne-settings"},"Mavne settings"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Skip if your have done this before")),(0,r.kt)("p",null,"Adding ",(0,r.kt)("inlineCode",{parentName:"p"},"<server>")," configurations in ~/.m2/settings.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<settings xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.1.0 http://maven.apache.org/xsd/settings-1.1.0.xsd" xmlns="http://maven.apache.org/SETTINGS/1.1.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n  <servers>\n    \x3c!-- Apache Repo Settings --\x3e\n    <server>\n        <id>apache.snapshots.https</id>\n        <username>{user-id}</username>\n        <password>{user-pass}</password>\n    </server>\n    <server>\n        <id>apache.releases.https</id>\n        <username>{user-id}</username>\n        <password>{user-pass}</password>\n    </server>\n  </servers>\n<profiles>\n    <profile>\n      <id>apache-release</id>\n      <properties>\n        <gpg.keyname>Your KEYID</gpg.keyname>\x3c!-- Your GPG Keyname here --\x3e\n        \x3c!-- Use an agent: Prevents being asked for the password during the build --\x3e\n        <gpg.useagent>true</gpg.useagent>\n        <gpg.passphrase>Password for you private key</gpg.passphrase>\n      </properties>\n    </profile>\n</profiles>\n</settings>\n')),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("h3",{id:"prepare-branch"},"Prepare branch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checkout out a new branch from the master branch as the release branch\uff0crelease-${release_version}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"update ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGES.md"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"check the code, including whether compile, unit test, RAT check etc."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# build check\n$ mvn clean package -Dmaven.javadoc.skip=true\n# RAT check\n$ mvn apache-rat:check\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"update version"))),(0,r.kt)("h3",{id:"create-tag"},"create tag"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure code check is pass before creating tag, including compile success, unit test pass, RAT check pass etc.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a tag with annotation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ git_tag=${release_version}-${rc_version}\n$ git tag -s $git_tag -m "Tagging the ${release_version} first Releae Candidate (Candidates start at zero)"\n# if met error  gpg: signing failed: secret key not available, you should set private key first.\n$ git config user.signingkey ${KEY_ID}\n')),(0,r.kt)("h3",{id:"building-source-code-package"},"Building source code package"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You should package the source code as a tar file after creating tag")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir /tmp/apache-inlong-${release_version}-${rc_version}\ngit archive --format=tar.gz --output="/tmp/apache-inlong-${release_version}-${rc_version}/apache-inlong-${release_version}-src.tar.gz" --prefix="apache-inlong-${release_version}/" $git_tag\n')),(0,r.kt)("h3",{id:"building-binary-package"},"Building binary package"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"compile the code in the step above.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp/apache-inlong-${release_version}-${rc_version} # go to directory where the source code package stay\ntar xzvf apache-inlong-${release_version}-src.tar.gz # uncompress the tar file\ncd apache-inlong-${release_version} # go to the source code directory\ncp ./inlong-distribution/target/apache-inlong-${release_version}-bin.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/  # for signature convenient, copy the binary package to the source code directory\ncp ./inlong-distribution/target/apache-inlong-${release_version}-sort-connectors.tar.gz /tmp/apache-inlong-${release_version}-${rc_version}/ # for signature convenient, copy the connectors binary package to the source code directory\n")),(0,r.kt)("h3",{id:"sign-the-source-packagebinary-packagesha512"},"sign the source package/binary package/sha512"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i > $i.sha512 ; done # calculate SHA512\nfor i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i ; done # calculate signature\n")),(0,r.kt)("h3",{id:"check-the-signaturesha512"},"check the signature/sha512"),(0,r.kt)("p",null,"Ref\uff1a",(0,r.kt)("a",{parentName:"p",href:"/community/how-to-verify"},"check the candidate version"),"\ne.g. check the signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n")),(0,r.kt)("h2",{id:"prepare-for-apache-release"},"Prepare for Apache release"),(0,r.kt)("h3",{id:"deploy-jar-to-apache-nexus-repository"},"Deploy jar to Apache Nexus repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp/apache-inlong-${release_version}-${rc_version} # go to the source code directory\ntar xzvf apache-inlong-${release_version}-src.tar.gz # uncompress source code package\ncd apache-inlong-${release_version}\nmvn -DskipTests deploy -Papache-release -Dmaven.javadoc.skip=true  # uploading\n")),(0,r.kt)("h3",{id:"upload-tag-to-git-repository"},"Upload tag to git repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin ${release_version}-${rc_version}\n")),(0,r.kt)("h3",{id:"upload-tar-file-to-dist-repo"},"Upload tar file to dist repo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SVN is need in this step, SVN repo for DEV branch is ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/inlong"},"https://dist.apache.org/repos/dist/dev/inlong"))),(0,r.kt)("h3",{id:"checkout-inlong-to-local-directory"},"Checkout InLong to local directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/inlong /tmp/inlong-dist-dev\n")),(0,r.kt)("h3",{id:"add-public-key-to-keys-file-adn-commit-to-svn-repository"},"Add public key to KEYS file adn commit to SVN repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd /tmp/inlong-dist-dev\nmkdir ${release_version}-${rc_version} # create a directory named by version\ncp /tmp/apache-inlong-${release_version}-${rc_version}/*tar.gz* ${release_version}-${rc_version}/ # copy source code and signature package to the versioned directory  \nsvn status # check svn status\nsvn add ${release_version}-${rc_version} # addi to svn\nsvn status # check svn status\nsvn commit -m "prepare for ${release_version} ${rc_version}"     # commit to SVN remote server\n')),(0,r.kt)("h3",{id:"close-apache-staging-repository"},"Close Apache Staging repository"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"make sure all artifacts is ok"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Log in "),(0,r.kt)("a",{parentName:"li",href:"http://repository.apache.org"},"http://repository.apache.org")," wit your Apache account"),(0,r.kt)("li",{parentName:"ol"},"Click the Staging repositories on the left "),(0,r.kt)("li",{parentName:"ol"},"Search ",(0,r.kt)("inlineCode",{parentName:"li"},"InLong")," and select the latest unloaded repository"),(0,r.kt)("li",{parentName:"ol"},"Click the close button which will trigger a serials of checks"),(0,r.kt)("li",{parentName:"ol"},"You will get a link like ",(0,r.kt)("inlineCode",{parentName:"li"},"https://repository.apache.org/content/repositories/orgapacheinlong-xxxx")," on the Summary page if all checks passed. This link will be posted in the vote email, so, keep it safe."))),(0,r.kt)("p",null,"WARN: Close operation may fail, you should check the causes and fix them."),(0,r.kt)("h2",{id:"voting"},"Voting"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"InLong has graduated and only needs to vote once now."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"InLong community vote\uff0csend email to \uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"dev@inlong.apache.org")))),(0,r.kt)("h3",{id:"inlong-community-vote"},"InLong community vote"),(0,r.kt)("h4",{id:"vote-template"},"Vote template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Title\uff1a[VOTE] Release Apache InLong ${release_version} ${rc_version}\n\nContent\uff1a\n\nHello Apache InLong PMC and Community,\n\n    This is a call for a vote to release Apache InLong version ${release_version}-${rc_version}.\n\n    The tag to be voted on is ${release_version}-${rc_version}:\n\n    https://github.com/apache/inlong/tree/${release_version}-${rc_version}\n\n    The release tarball, signature, and checksums can be found at:\n\n    https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version}/\n\n    Maven artifacts are available in a staging repository at:\n\n    https://repository.apache.org/content/repositories/orgapacheinlong-{staging-id}\n\n    Artifacts were signed with the {YOUR_PUB_KEY} key which can be found in:\n\n    https://downloads.apache.org/inlong/KEYS\n\n    ${release_version} includes ~ ${issue_count} bug fixes and improvements done since last versions which can be found at:\n\n    https://github.com/apache/inlong/blob/${release_version}-${rc_version}/CHANGES.md\n\n    Please download, verify, and test.\n\n    The VOTE will remain open for at least 72 hours.\n\n    [ ] +1 Release this package as Apache InLong ${release_version}\n    [ ] +0\n    [ ] -1 Do not release this package because...\n\n    To learn more about apache inlong, please see\n    http://inlong.apache.org/\n\n    Checklist for reference:\n\n      [ ] Download links are valid.\n      [ ] Checksums and signatures.\n      [ ] LICENSE/NOTICE files exist\n      [ ] No unexpected binary files\n      [ ] All source files have ASF headers\n      [ ] Can compile from source\n      [ ] All Tests Passed\n\n      More detailed checklist  please refer to:\n      https://inlong.apache.org/community/how-to-verify\n\nThanks,\nYour InLong Release Manager\n")),(0,r.kt)("h4",{id:"vote-result-template"},"Vote Result template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Title\uff1a[RESULT][VOTE] Release Apache InLong ${release_version} ${rc_version}\n\nContent\uff1a\n\nHello Apache InLong PMC and Community,\n\n    The vote closes now as 72hr have passed. The vote PASSES with\n    xx (+1 non-binding) votes from the PMC,\n    xx (+1 non-binding) vote from the rest of the developer community,\n    and no further 0 or -1 votes.\n\n    The vote thread: {vote_mail_address}\n\n    The release is accepted and will be published.\n\nThank you for your support.\nYour InLong Release Manager\n")),(0,r.kt)("h2",{id:"officially-released"},"Officially released"),(0,r.kt)("h3",{id:"merge-branch-release-release_version-to-master-branch"},"Merge branch release-${release_version} to master branch"),(0,r.kt)("h3",{id:"move-source-code-and-binary-package-from-dev-to-release-repository-on-svn"},"Move source code and binary package from DEV to release repository on SVN."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/inlong/${release_version} -m "Release ${release_version}"\n')),(0,r.kt)("h3",{id:"check-whether-the-dev-and-release-is-correct"},"Check whether the dev and release is correct"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"${release_version}-${rc_version}")," is deleted in ",(0,r.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/inlong/"},"dev"),"."),(0,r.kt)("li",{parentName:"ol"},"Delete release package of pre versions",(0,r.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/inlong/"},"release"),"\uff0cthese packages will be saved ",(0,r.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/inlong/"},"here"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn delete https://dist.apache.org/repos/dist/release/inlong/${last_release_version} -m "Delete ${last_release_version}"\n')),(0,r.kt)("h3",{id:"release-version-in-apache-staging"},"Release version in Apache Staging"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure all artifacts are ok"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Log in ",(0,r.kt)("a",{parentName:"li",href:"http://repository.apache.org"},"http://repository.apache.org")," with your Apache account"),(0,r.kt)("li",{parentName:"ol"},"Click the Staging repositories on the left"),(0,r.kt)("li",{parentName:"ol"},"Searching InLong at choose the latest uploaded repository which is specified in the vote email"),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Release")," button above which will trigger a serials of checks"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Wait the repository sync to other repositories which generally takes 24 hours")),(0,r.kt)("h3",{id:"update-links-on-official-website"},"Update links on official website"),(0,r.kt)("h3",{id:"send-email-to-devinlongapacheorg-and-cc-announceapacheorg"},"Send email to ",(0,r.kt)("inlineCode",{parentName:"h3"},"dev@inlong.apache.org")," and CC ",(0,r.kt)("inlineCode",{parentName:"h3"},"announce@apache.org")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please make sure deployment in step 6.4 is successfully, and generally wait 24 hours between 6.4 and send emails")," "),(0,r.kt)("p",null,"Release announce email template\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Title\uff1a [ANNOUNCE] Release Apache InLong ${release_version}\nContent\uff1a\nHi all,\n\nThe Apache InLong community is pleased to announce \nthat Apache InLong ${release_version} has been released!\n\nApache InLong is a one-stop integration framework for massive data that provides automatic, secure,\ndistributed, and efficient data publishing and subscription capabilities.\nThis platform helps you easily build stream-based data applications.\n\nThis release contains a number of new features, bug fixes and\nimprovements compared to the last version released before.\nThe notable changes since ${release_version} include:\n1. xxxxx\n2. yyyyyy\n3. zzzzzz\n\nPlease refer to the change log for the complete list of changes:\nhttps://github.com/apache/inlong/blob/${release_version}-${rc_version}/CHANGES.md\n\nApache InLong website: https://inlong.apache.org/\n\nDownload Links: https://inlong.apache.org/download/main\n\nInLong Resources:\n- Issue: https://github.com/apache/inlong/issues\n- Mailing list: dev@inlong.apache.org\n\nThanks\nOn behalf of Apache InLong community\n")))}h.isMDXComponent=!0}}]);
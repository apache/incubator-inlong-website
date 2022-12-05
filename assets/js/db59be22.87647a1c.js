"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,u=h["".concat(c,".").concat(d)]||h[d]||m[d]||a;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const a={title:"How to vote a Committer or PMC",sidebar_position:5},r=void 0,s={unversionedId:"how-to-vote-a-committer-pmc",id:"how-to-vote-a-committer-pmc",title:"How to vote a Committer or PMC",description:"Initiate discussion in the community private mailing group",source:"@site/community/how-to-vote-a-committer-pmc.md",sourceDirName:".",slug:"/how-to-vote-a-committer-pmc",permalink:"/community/how-to-vote-a-committer-pmc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/community/how-to-vote-a-committer-pmc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to vote a Committer or PMC",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Become a Committer or PMC",permalink:"/community/how-to-become-a-committer"},next:{title:"How to Release",permalink:"/community/how-to-release"}},c={},l=[{value:"Initiate discussion in the community private mailing group",id:"initiate-discussion-in-the-community-private-mailing-group",level:2},{value:"Initiate vote in the community private mailing group",id:"initiate-vote-in-the-community-private-mailing-group",level:2},{value:"Feedback on voting results",id:"feedback-on-voting-results",level:2},{value:"Newly added PMC notification email",id:"newly-added-pmc-notification-email",level:2},{value:"Initiate invitation email",id:"initiate-invitation-email",level:2},{value:"Processing after accepting the invitation",id:"processing-after-accepting-the-invitation",level:2},{value:"ANNOUNCE to the community",id:"announce-to-the-community",level:2}],p={toc:l};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"initiate-discussion-in-the-community-private-mailing-group"},"Initiate discussion in the community private mailing group"),(0,i.kt)("p",null,"   Any InLong PMC member can initiate a voting discussion.\nAfter PMC finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on InLong's private mailing list.\nIn the discussion email, the proposer should clearly state the candidate's contribution and give the address for reviewing the corresponding contribution, so that everyone can discuss and analyze it.\nThe discussion email is sent to ",(0,i.kt)("a",{parentName:"p",href:"mailto:private@inlong.apache.org."},"private@inlong.apache.org.")," The discussion will last at least 72 hours. PMC members will fully express their views on the proposed email.\nThe following is a sample discussion email:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," [DISCUSS] YYYYY as an InLong XXXXXX\n  \n I nominate YYYYY as an InLong XXXXXX\n \n Judging from the contributions in recent months, YYYYY has submitted many implementations[1],[2] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.\n  \n So I nominated YYYYY as XXXXXX of the InLong project.\n  \n 1. https://github.com/apache/inlong/issues/created_by/YYYYY \n 2. https://github.com/apache/inlong/commits?author=YYYYY \n")),(0,i.kt)("h2",{id:"initiate-vote-in-the-community-private-mailing-group"},"Initiate vote in the community private mailing group"),(0,i.kt)("p",null,"   If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a Committer or PMC election vote on InLong's private mailing list.\nThe voting email is sent to ",(0,i.kt)("a",{parentName:"p",href:"mailto:private@inlong.apache.org"},"private@inlong.apache.org")," for at least 72 hours, and at least 3 votes +1 passed; if 0 votes or 1 vote -1 vote, the vote will fail; if a -1 vote is initiated, the voter needs to EXPLAIN the reason for the -1 score clearly so that everyone can understand and know.\nThe following is a sample poll email: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," [VOTE] YYYYY as an InLong XXXXXX\n  \n Judging from the contributions in recent months, YYYYY has submitted many implementations[1],[2],[3] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.\n I think making him a XXXXXX will be a recognition of his outstanding work for InLong. So, I am happy to call VOTE to accept YYYYY as an InLong XXXXXX.\n  \n Voting will continue for at least 72 hours or until the required number of votes is reached.\n \n Please vote accordingly:\n [ ] +1 approve\n [ ] +0 no opinion\n [ ] -1 disapprove with the reason  \n   \n Here are three links to his contributions to InLong:\n 1. Issues: https://github.com/apache/inlong/pulls?q=YYYYY\n 2. PRs   : https://github.com/apache/inlong/issues?q=YYYYY\n 3. Others:  https://xxx.com/xxx/xxx/?q=YYYYY\n")),(0,i.kt)("h2",{id:"feedback-on-voting-results"},"Feedback on voting results"),(0,i.kt)("p",null,"   After the voting email is over, the initiator of the vote needs to remind the voting end in the second ","[VOTE]"," email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to ",(0,i.kt)("a",{parentName:"p",href:"mailto:private@inlong.apache.org."},"private@inlong.apache.org."),"\nThe following is a sample vote summary email:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[RESULTS][VOTE] YYYYY as an InLong XXXXXX\n\nHi everyone,\n\nThe vote for \"YYYYY as an InLong XXXXXX\" has PASSED and closed now.\n\nThe result is as follows:\n\n3 PMC  +1 Votes\n- aaa\n- bbb\n- ccc\n\nVote thread:\nhttps://lists.apache.org/thread/aaaaaxxxx\n\nThen I'm going to invite YYYYY to join us.\n\nThanks for everyone's support!   \n")),(0,i.kt)("p",null,'   Note: If it is not passed, the result is "The vote for "YYYYY as an InLong XXXXXX" has FAILED and closed now."'),(0,i.kt)("h2",{id:"newly-added-pmc-notification-email"},"Newly added PMC notification email"),(0,i.kt)("p",null,"   This step is only processed for the PMC that passed the vote. If the election is Committer, this step is skipped and not executed.\nVoting initiators need to send notification emails to Board\u2019s mailing group and wait at least 72 hours; email owners send ",(0,i.kt)("a",{parentName:"p",href:"mailto:board@apache.org"},"board@apache.org")," and CC ",(0,i.kt)("a",{parentName:"p",href:"mailto:private@inlong.apache.org"},"private@inlong.apache.org"),"; Board will analyze compliance Until there is no doubt.\nThe following is an example of a new PMC notification email:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[NOTICE] YYYYY for Apache InLong PMC\n\nHi everyone,\n\nApache InLong proposes to invite YYYYY to join the PMC.\n\nThe vote result is available here: https://lists.apache.org/...\n\nThanks!\n")),(0,i.kt)("h2",{id:"initiate-invitation-email"},"Initiate invitation email"),(0,i.kt)("p",null,"   After the result summary email is sent, the poll initiator must send an invitation email to the candidates.\nThe invitation email is sent to the invitee with a CC to ",(0,i.kt)("a",{parentName:"p",href:"mailto:private@inlong.apache.org"},"private@inlong.apache.org"),"; the invited candidate must reply to accept or decline the invitation through the specified email address.\nThe following is an example of an email inviting candidates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'[Invitation] Invitation to join Apache InLong as a XXXXXX\n\nHi YYYYY,\n\nIn recognition of your contributions to Apache InLong, the InLong PMC\nhas recently voted to add you as a XXXXXX. The XXXXXX role gives\nyou access to merge patches into Apache InLong and is also a\nstepping-stone towards membership in the\nProject Management Committee (PMC). We hope that you accept\nthis invitation and continue to help us make Apache InLong better.\n\nIf you\'d like to accept, you will need to send an Individual\nContributor License Agreement (ICLA) to secretary@apache.org, CCing\nprivate@inlong.apache.org, and request an Apache account name as\ndescribed at http://www.apache.org/dev/new-committers-guide.html if\nyou don\u2019t already have one, once you get an account name, or if you\nhave one already, please email it to me.\n\nNOTICE: when you fill out ICLA file, the value of preferred Apache id(s)\n        needs to be a valid ID, including:\n        1. The ID must not already be in use in https://people.apache.org/committer-index.html;\n        2. The characters "-" and "_" are not allowed in id;\n        3. The id must consist of lowercase alphanumeric characters only,\n           start with an alphabetic character, have a minimum length of 3 characters,\n           and have no special characters.\n\nWith the expectation of your acceptance, welcome!\n\nThe Apache InLong PMC\n')),(0,i.kt)("h2",{id:"processing-after-accepting-the-invitation"},"Processing after accepting the invitation"),(0,i.kt)("p",null,'   Create an Apache account and add the candidate account to the project.\nAfter the candidate accepts the invitation, if the candidate does not have an apache email account, the voting initiator needs to assist the candidate to create an apache account according to the guidelines.\nWhen signing the ICLA, the candidate needs to write the project name of \u201cApache InLong\u201d in the "notify project:" column, so that the candidate account will be added to the list of corresponding project personnel by Apache.\nThe voting initiator needs to add project team members, open a permission account for the apache project, and confirm that the candidate\u2019s Apache account has been added to the project address: ',(0,i.kt)("a",{parentName:"p",href:"http://people.apache.org/phonebook.html?project=inlong"},"http://people.apache.org/phonebook.html?project=inlong"),"."),(0,i.kt)("h2",{id:"announce-to-the-community"},"ANNOUNCE to the community"),(0,i.kt)("p",null,"   After the above steps are completed, the vote initiator must send a notification email to the ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@inlong.apache.org"},"dev@inlong.apache.org")," mail group. The following is a sample notification email:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[ANNOUNCE] New XXXXXX: YYYYY\n\nHi everyone,\n\nThe Project Management Committee(PMC) for Apache InLong has invited YYYYY to become a XXXXXX and we are pleased to announce that he has accepted.\n\nYYYYY is being active in the InLong community, and we are glad to see his more interactions with the community in the future.\n\nWelcome YYYYY, and please enjoy your journey.:)\n\nThanks!\n   \n")),(0,i.kt)("p",null,"At this point, the entire process is completed, and the candidate officially becomes the Committer or PMC of the project."))}h.isMDXComponent=!0}}]);
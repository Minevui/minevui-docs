"use strict";(self.webpackChunkminevui_docs=self.webpackChunkminevui_docs||[]).push([[8747],{6535:(e,t,s)=>{s.d(t,{A:()=>f});var a=s(6540),n=s(4164),r=s(781),i=s(4581),l=s(8774),o=s(1312),c=s(6347),m=s(9169);function d(e){const{pathname:t}=(0,c.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(4848);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(5600);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.GX,{component:x,props:e})}function b(e){let{sidebar:t}=e;const s=(0,i.l)();return t?.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:a,...i}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.A,{...i,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},8258:(e,t,s)=>{s.d(t,{A:()=>C});s(6540);var a=s(4164),n=s(7131),r=s(6025),i=s(4848);function l(e){let{children:t,className:s}=e;const{frontMatter:a,assets:l,metadata:{description:o}}=(0,n.e)(),{withBaseUrl:c}=(0,r.h)(),m=l.image??a.image,d=a.keywords??[];return(0,i.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,i.jsx)("meta",{itemProp:"description",content:o}),m&&(0,i.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var o=s(8774);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:r}=(0,n.e)(),{permalink:l,title:m}=s,d=r?"h1":"h2";return(0,i.jsx)(d,{className:(0,a.A)(c.title,t),itemProp:"headline",children:r?m:(0,i.jsx)(o.A,{itemProp:"url",to:l,children:m})})}var d=s(1312),u=s(5846);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.W)();return t=>{const s=Math.ceil(t);return e(s,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,i.jsx)(i.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,n.e)(),{date:r,formattedDate:l,readingTime:o}=s;return(0,i.jsxs)("div",{className:(0,a.A)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:l}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(g,{readingTime:o})]})]})}function b(e){return e.href?(0,i.jsx)(o.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function f(e){let{author:t,className:s}=e;const{name:n,title:r,url:l,imageURL:o,email:c}=t,m=l||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",s),children:[o&&(0,i.jsx)(b,{href:m,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:n,itemProp:"image"})}),n&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(b,{href:m,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:n})})}),r&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:s},assets:r}=(0,n.e)();if(0===s.length)return null;const l=s.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.A)(!l&&"col col--6",l?v.imageOnlyAuthorCol:v.authorCol),children:(0,i.jsx)(f,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function _(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(j,{}),(0,i.jsx)(A,{})]})}var N=s(440),P=s(2125);function k(e){let{children:t,className:s}=e;const{isBlogPostPage:r}=(0,n.e)();return(0,i.jsx)("div",{id:r?N.blogPostContainerID:void 0,className:(0,a.A)("markdown",s),itemProp:"articleBody",children:(0,i.jsx)(P.A,{children:t})})}var T=s(1943),w=s(2053);function I(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function y(e){const{blogPostTitle:t,...s}=e;return(0,i.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,i.jsx)(I,{})})}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function L(){const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{tags:s,title:r,editUrl:l,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||l?(0,i.jsxs)("footer",{className:(0,a.A)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull),children:[m&&(0,i.jsx)("div",{className:(0,a.A)("col",{"col--9":c}),children:(0,i.jsx)(w.A,{tags:s})}),t&&l&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(T.A,{editUrl:l})}),c&&(0,i.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,i.jsx)(y,{blogPostTitle:r,to:e.permalink})})]}):null}function C(e){let{children:t,className:s}=e;const r=function(){const{isBlogPostPage:e}=(0,n.e)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,a.A)(r,s),children:[(0,i.jsx)(_,{}),(0,i.jsx)(k,{children:t}),(0,i.jsx)(L,{})]})}},1943:(e,t,s)=>{s.d(t,{A:()=>m});s(6540);var a=s(1312),n=s(7559),r=s(8774),i=s(4164);const l={iconEdit:"iconEdit_Z9Sw"};var o=s(4848);function c(e){let{className:t,...s}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(l.iconEdit,t),"aria-hidden":"true",...s,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,o.jsxs)(r.A,{to:t,className:n.G.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(a.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},9022:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var a=s(4164),n=s(8774),r=s(4848);function i(e){const{permalink:t,title:s,subLabel:i,isNext:l}=e;return(0,r.jsxs)(n.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:s})]})}},6133:(e,t,s)=>{s.d(t,{A:()=>l});s(6540);var a=s(4164),n=s(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=s(4848);function l(e){let{permalink:t,label:s,count:l}=e;return(0,i.jsxs)(n.A,{href:t,className:(0,a.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[s,l&&(0,i.jsx)("span",{children:l})]})}},2053:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(4164),n=s(1312),r=s(6133);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=s(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.A,{label:t,permalink:s})},s)}))})]})}},7131:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>l});var a=s(6540),n=s(9532),r=s(4848);const i=a.createContext(null);function l(e){let{children:t,content:s,isBlogPostPage:n=!1}=e;const l=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:n});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,a.useContext)(i);if(null===e)throw new n.dV("BlogPostProvider");return e}},5846:(e,t,s)=>{s.d(t,{W:()=>c});var a=s(6540),n=s(4586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(s,t,e)}}}}]);
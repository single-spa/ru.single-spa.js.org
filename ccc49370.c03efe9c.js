(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{310:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(317),m=t(341),c=t(315);var o=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=e.metadata,n=a.frontMatter;return r.a.createElement(l.a,{title:t.title,description:t.description},a&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:n,metadata:t,isBlogPostPage:!0},r.a.createElement(a,null)),(t.nextItem||t.prevItem)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:t.nextItem,prevItem:t.prevItem}))))))}},321:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),m=t(313),c=t.n(m),o=t(315),i=t(312),s=t(314);a.a=function(){var e=Object(i.a)().siteConfig,a=void 0===e?{}:e,t=a.themeConfig,m=(void 0===t?{}:t).footer;if(!m)return null;var u=m.copyright,h=m.links,g=void 0===h?[]:h,E=m.logo;return l.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===m.style})},l.a.createElement("div",{className:"container"},g&&g.length>0&&l.a.createElement("div",{className:"row footer__links"},g.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,m,c){return l.a.createElement(r.Fragment,{key:m},l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},e.label&&l.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:Object(s.a)(e.to)}),e.label),e.html&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),c.length-1===m&&2===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{key:"gh-star",className:"footer__item footer__item--gh"},l.a.createElement("iframe",{title:"github",src:"https://ghbtns.com/github-btn.html?user="+a.organizationName+"&repo="+a.projectName+"&type=star&count=true&size=small"})),l.a.createElement("li",{key:"license",className:"footer__item"},l.a.createElement("a",{href:Object(s.a)("img/icons/148705-essential-collection/license/license.html")},"License for icons"))))}))):null)}))),l.a.createElement("div",{className:"text--center"},E&&E.src&&l.a.createElement("img",{className:"footer__logo margin-bottom--sm",alt:E.alt,src:Object(s.a)(E.src)}),l.a.createElement("div",null,"Originally developed at ",l.a.createElement("a",{href:"https://getcanopy.com"},"Canopy")),u&&u)))}},331:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),m=t(315),c=t(346),o=t(340),i=t(127),s=t.n(i);a.a={codehtml:function(e){var a=e.children;return l.a.createElement("code",null,a)},code:function(e){var a=e.children;return"string"==typeof a?l.a.createElement(c.a,e):a},a:function(e){return/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(m.a,e)},pre:function(e){return l.a.createElement("pre",Object(n.a)({className:s.a.mdxCodeBlock},e))},h1:Object(o.a)("h1"),h2:Object(o.a)("h2"),h3:Object(o.a)("h3"),h4:Object(o.a)("h4"),h5:Object(o.a)("h5"),h6:Object(o.a)("h6")}},341:function(e,a,t){"use strict";t(71);var n=t(0),r=t.n(n),l=t(313),m=t.n(l),c=t(311),o=t(315),i=t(331),s=t(128),u=t.n(s),h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,s,g=e.children,E=e.frontMatter,v=e.metadata,_=e.truncated,f=e.isBlogPostPage,p=void 0!==f&&f,d=v.date,b=v.permalink,N=v.tags,k=E.author,y=E.title,O=E.author_url||E.authorURL,j=E.author_title||E.authorTitle,x=E.author_image_url||E.authorImageURL;return r.a.createElement("article",{className:p?void 0:"margin-bottom--xl"},(a=p?"h1":"h2",t=d.substring(0,10).split("-"),n=t[0],l=h[parseInt(t[1],10)-1],s=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:m()("margin-bottom--sm",u.a.blogPostTitle)},p?y:r.a.createElement(o.a,{to:b},y)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:d,className:u.a.blogPostDate},l," ",s,", ",n)),r.a.createElement("div",{className:"avatar margin-bottom--md"},x&&r.a.createElement("a",{className:"avatar__photo-link",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:x,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},k)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:i.a},g)),(N.length>0||_)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),_&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:v.permalink,"aria-label":"Read more about "+y},r.a.createElement("strong",null,"Read More")))))}}}]);
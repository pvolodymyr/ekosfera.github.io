(this["webpackJsonpekosfera.github.io"]=this["webpackJsonpekosfera.github.io"]||[]).push([[0],{108:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(10),i=a.n(l),s=a(52),r=a.n(s),c=a(17),d=a(19),u=a(69),g=(a(127),a(55)),p=a.n(g),_=a(71),m={lat:48.148319,lng:24.278928};var b=function(e){var t=e.center,a=void 0===t?m:t,l=e.handleChange,i=e.className,s=e.children,r=Object(n.useRef)();return Object(n.useEffect)((function(){console.log("useEffect center:",a)}),[a]),o.a.createElement(_.a,{bootstrapURLKeys:{key:"AIzaSyCnmTXRpT6diIBMmgQlyzRRxLyyNaVqPNI"},defaultCenter:m,center:a,defaultZoom:10,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var t=e.map;return r.current=t},onChange:l,className:i},s)},f=a(6),E=a(3),O=a.n(E),h=a(30),y=a.n(h),N=a(4),T=function(e){return e.children},D=function(e){var t,a=e.value,l=e.isCluster,s=e.incidentsId,r=e.style,c=Object(N.c)((function(e){return e.incidents})).data,d=Object(N.b)(),u=Object(n.useRef)(),g=c.find((function(e){return e.id===s}));return o.a.createElement(T,null,o.a.createElement("div",{ref:u,className:O()((t={},Object(f.a)(t,y.a.marker,!0),Object(f.a)(t,y.a.cluster,l),Object(f.a)(t,y.a.single,!l),t)),"data-tip":!0,"data-for":"map-marker",onClick:function(e){if(s&&g){var t,a,n=e.view,o=n.innerHeight,l=n.innerWidth;d((t=g,function(e){console.log("setINFODialogContent",t),e({type:"SET_INFO_DIALOG_CONTENT",payload:t})})),d((a={innerHeight:parseInt(o),innerWidth:parseInt(l),clientRect:i.a.findDOMNode(u.current).getBoundingClientRect()},function(e){return e({type:"SET_INFO_DIALOG_COORDINATES",payload:a})})),d((function(e){return e({type:"SET_INFO_DIALOG_OPEN"})}))}},style:r},a))};var v=function(){var e=Object(n.useState)(10),t=Object(d.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(null),s=Object(d.a)(i,2),r=s[0],c=s[1],g=Object(N.c)((function(e){return e.incidents})),_=(g.loading,g.error,g.data),m=(_&&_.length?_.filter((function(e){return!!e.locationData.length})):[]).map((function(e){var t=e.id,a=e.status,n=e.locationData,o=e.damage,l=o.measure,i=void 0===l?null:l,s=o.value,r=void 0===s?null:s,c=n[0].latlon,u=c&&c.slice(0,c.length-1).split(", "),g=Object(d.a)(u,2),p=g[0],_=g[1];return{type:"Feature",properties:{isCluster:!1,incidentsId:t,category:a,damageMeasure:i,damageValue:r},geometry:{type:"Point",coordinates:[parseFloat(_),parseFloat(p)]}}})),f=Object(u.a)({points:m,bounds:r,zoom:a,options:{radius:50,maxZoom:20}}).clusters;return o.a.createElement(b,{handleChange:function(e){var t=e.zoom,a=e.bounds;l(t),c([a.nw.lng,a.se.lat,a.se.lng,a.nw.lat])},className:p.a.map},f&&f.length&&f.map((function(e){var t=e.geometry.coordinates,a=void 0===t?[]:t,n=e.properties,l=e.id,i=Object(d.a)(a,2),s=i[0],r=i[1],c={},u=n.point_count,g=n.cluster,p=n.incidentsId,_=n.damageValue,m=n.damageMeasure;if(_){var b=(5e-5*_).toFixed(0);c.width=b+"px",c.height=b+"px"}var f=_&&m&&"".concat(_.toFixed(2)," ").concat(m)||null,E=g?u:f;return o.a.createElement(D,{key:s+r+(g?l:p),incidentsId:p,isCluster:g,lat:r,lng:s,value:E,style:c})})))},A=a(58),j=a.n(A);var R=Object(c.b)()((function(e){return e.t,o.a.createElement("div",{className:j.a.reports},o.a.createElement(v,null))})),I=a(70),w=a(32),k=a(5),S=a.n(k),G=a(2),C=function(e,t){var a=e.innerHeight,n=e.innerWidth,o=e.clientRect,l=o.height,i=o.width,s=o.x,r=o.y,c={top:null,bottom:null,left:null,right:null,position:"fixed",isDialogPositionedToTop:null,isDialogPositionedToRight:null};return c.isDialogPositionedToTop=r+l/2>a-(r+l/2),c.isDialogPositionedToRight=s+i/2<n-(s+i/2),c.top=c.isDialogPositionedToTop?"auto":r-20,c.bottom=c.isDialogPositionedToTop?a-(r+l+20):"auto",c.right=c.isDialogPositionedToRight?"auto":n-s,c.left=c.isDialogPositionedToRight?s+i:"auto",Object(G.a)(Object(G.a)({},c),t)},L=a(36),M=a.n(L),B=function(e){var t=e.tagList,a=e.className;return t&&t.length?o.a.createElement("ul",{className:O()(M.a["tag-list"],Object(f.a)({},a,a))},t.map((function(e){var t=e.name,a=e.uuid;return o.a.createElement("li",{key:a,className:M.a["tag-list_item"]},t)}))):null},x=a(31),F=a.n(x),U=function(e){var t,a=e.isPrimary,n=e.handleClick,l=e.className,i=e.children,s=e.link;return o.a.createElement("button",{className:O()(F.a.button,l,(t={},Object(f.a)(t,F.a.button__primary,a),Object(f.a)(t,F.a.button__link,s),t)),onClick:n},i)},Q=a(59),J=a.n(Q),P=Object(c.b)()((function(e){var t=e.t,a=e.value,n=e.measure,l=e.className;return a&&n?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:O()(J.a.title,Object(f.a)({},l,l))},o.a.createElement("strong",null,t("Damage",{value:a.toFixed(2),measure:n})))):null})),V=a(60),K=a.n(V),z=function(e){var t=e.stage,a=e.className;return t?o.a.createElement("div",{className:O()(K.a.stage,Object(f.a)({},a,a))},t):null},Z=a(61),H=a.n(Z),Y=a(37),W=a.n(Y),X=a(62),q=a.n(X),$=function(e){var t,a=e.src,n=e.alt,l=e.className,i=e.isThumbnail;return o.a.createElement("img",{className:O()((t={},Object(f.a)(t,l,!!l),Object(f.a)(t,W.a.image,!i),Object(f.a)(t,W.a.thumbnail,i),t)),src:a?"".concat(" https://ekosphera.work").concat(a):q.a,alt:n})},ee=(a(108),function(e){var t=e.images,a=e.className,n=e.isThumbnail;if(!t||!t.length)return null;var l=[];return t.forEach((function(e){var t=e.formats,a=e.id,i=(t&&t.medium?t.medium:{medium:{url:""}}).url;i&&l.push(o.a.createElement($,{key:a,src:i,isThumbnail:n}))})),o.a.createElement(H.a,Object.assign({className:a||null},{dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1}),l)});var te=Object(c.b)()((function(e){var t=e.t,a=Object(N.c)((function(e){return e.detailsDialog})).open,n=Object(N.c)((function(e){return e.infoDialog})),l=n.open,i=n.content,s=n.coordinates,r=Object(N.b)();if(!l||!i||!s||a)return null;var c=i.actions,d=i.attachments,u=i.damage,g=i.tags,p=c&&c.length?c[c.length-1]:{attachments:[],name:""},_=p.attachments,m=p.name,b=Object(w.a)(new Set([].concat(Object(w.a)(d),Object(w.a)(_)))),f=C(s),E=(f.isDialogPositionedToTop,f.isDialogPositionedToRight,Object(I.a)(f,["isDialogPositionedToTop","isDialogPositionedToRight"])),O=function(){r((function(e){return e({type:"SET_INFO_DIALOG_CLOSED"})}))};return o.a.createElement("div",{className:S.a["dialog_info-wrapper"],onClick:O},o.a.createElement("div",{className:S.a["dialog_info-background"]}),o.a.createElement("div",{className:S.a["dialog_info-body"],onClick:function(e){e.stopPropagation()},style:E},o.a.createElement("div",{className:S.a["dialog_info-content-close_btn-wrap"],onClick:O},o.a.createElement("span",{className:S.a["dialog_info-content-close_btn"]})),o.a.createElement(ee,{images:b,className:S.a["dialog_info-content-slider"],isThumbnail:!0}),o.a.createElement(P,{damage:u}),o.a.createElement(B,{tagList:g,className:S.a["dialog_info-content-tag_list"]}),o.a.createElement(z,{stage:m}),o.a.createElement(U,{className:S.a["dialog_info-content-more-info-btn"],handleClick:function(){r((function(e){return e({type:"SET_INFO_DIALOG_CLOSED"})})),r(function(e){return function(t){t({type:"SET_DETAILS_DIALOG_CONTENT",payload:e})}}(i)),r((function(e){console.log("SET_DETAILS_DIALOG_OPEN"),e({type:"SET_DETAILS_DIALOG_OPEN"})}))},link:!0},t("More information"))))})),ae=a(38),ne=a.n(ae),oe=function(e){var t=e.stages,a=e.className;return t&&t.length?o.a.createElement("ul",{className:O()(a,ne.a.stage_list)},t.map((function(e){e.attachments,e.description;var t=e.name;e.date,e.id;return o.a.createElement("li",{key:t,className:O()(ne.a["stage_list-item"])},t)}))):null},le=a(39),ie=a.n(le),se=function(e){var t=e.children,a=e.handleClose,n=e.className;return o.a.createElement("div",{onClick:a,className:O()(n,ie.a["close-pane"])},t,o.a.createElement("span",{className:ie.a["close-pane_btn"]}))};var re=Object(c.b)()((function(e){var t=e.t,a=Object(N.c)((function(e){return e.detailsDialog})),n=a.open,l=a.content,i=Object(N.b)();if(!n||!l)return null;var s=l.locationData,r=l.attachments,c=l.actions,d=l.damage,u=d.measure,g=d.value,p=(l.status,l.tags),_=(l.id,s&&s[0]&&s[0].latlon||""),m=function(){i((function(e){return e({type:"SET_DETAILS_DIALOG_CLOSED"})}))};return o.a.createElement("div",{className:S.a["dialog_details-wrapper"],onClick:m},o.a.createElement("div",{className:S.a["dialog_details-background"]}),o.a.createElement("div",{className:S.a["dialog_details-body"],onClick:function(e){e.stopPropagation()}},o.a.createElement(se,{handleClose:m,className:S.a["dialog_details-content-close_pane"]},o.a.createElement(P,{measure:u,value:g,className:S.a["dialog_details-content-damage"]})),o.a.createElement("div",{className:S.a["dialog_details-content"]},o.a.createElement(B,{tagList:p,className:S.a["dialog_details-content-tag_list"]}),o.a.createElement(oe,{stages:c,className:S.a["dialog_details-content-stage"]}),o.a.createElement("div",{className:S.a["dialog_details-content-coordinates"]},o.a.createElement("p",null,t("Coordinates"),":"),o.a.createElement("p",null,_)),o.a.createElement(ee,{images:r,className:S.a["dialog_details-content-slider"]}))))}));a(7);var ce=a(25),de=a.n(ce),ue=a(63),ge=a.n(ue);var pe=Object(c.b)()((function(e){var t=e.t,a=Object(N.b)();return o.a.createElement("div",{className:de.a.header_wrapper},o.a.createElement("div",{className:de.a.header},o.a.createElement("img",{className:de.a.logo,src:ge.a,alt:"logo"}),o.a.createElement("ul",{className:de.a.header_list},o.a.createElement("li",null,t("Reports")),o.a.createElement("li",null,t("Sponsors"))),o.a.createElement(U,{className:de.a.header_list_button,handleClick:function(){console.log("clicked"),a((function(e){return e({type:"SET_NEW_REPORT_DIALOG_OPEN"})}))}},t("Submit a new report"))))})),_e=a(64),me=a.n(_e).a.create({baseURL:" https://ekosphera.work",responseType:"json"}),be=function(){return function(e){e({type:"GET_INCIDENTS_LOADING"}),me.get("/incidents").then((function(e){return e&&e.data?e.data.map((function(e,t){return Object(G.a)(Object(G.a)({},e),{},{damage:{id:t,measure:"arces",value:Math.random()*Math.random()*Math.random()*1e7}})})):[]})).then((function(t){return e({type:"GET_INCIDENTS_COMPLETE",payload:t})})).catch((function(t){return e({type:"GET_INCIDENTS_ERROR",payload:t})}))}};var fe=function(){var e=Object(N.c)((function(e){return e})),t=e.infoDialog,a=(t.open,t.content,t.coordinates,e.incidents),l=a.loading,i=a.error,s=a.data,c=Object(N.c)((function(e){return e})),d=Object(N.b)();return Object(n.useEffect)((function(){console.log("state",c)}),[c]),Object(n.useEffect)((function(){s||l||i||d(be())}),[s,l]),o.a.createElement("div",{className:r.a.app},o.a.createElement(pe,null),o.a.createElement(R,null),o.a.createElement(te,null),o.a.createElement(re,null))},Ee=a(20),Oe=(a(65),a(66)),he={open:!1,content:null,coordinates:null};var ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETAILS_DIALOG_OPEN":return Object(G.a)(Object(G.a)({},e),{},{open:!0});case"SET_DETAILS_DIALOG_CLOSED":return Object(G.a)(Object(G.a)({},e),{},{content:null,open:!1});case"SET_DETAILS_DIALOG_CONTENT":return console.log("SET_DETAILS_DIALOG_CONTENT",t),Object(G.a)(Object(G.a)({},e),{},{content:t.payload});default:return e}},Ne={open:!1,content:null,coordinates:null};var Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INFO_DIALOG_OPEN":return Object(G.a)(Object(G.a)({},e),{},{open:!0});case"SET_INFO_DIALOG_CLOSED":return Object(G.a)(Object(G.a)({},e),{},{content:null,open:!1});case"SET_INFO_DIALOG_CONTENT":return console.log("SET_INFO_DIALOG_CONTENT",t),Object(G.a)(Object(G.a)({},e),{},{content:t.payload});case"SET_INFO_DIALOG_COORDINATES":return Object(G.a)(Object(G.a)({},e),{},{coordinates:t.payload});default:return e}},De={open:!1};var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_REPORT_DIALOG_OPEN":return Object(G.a)(Object(G.a)({},e),{},{open:!0});case"SET_NEW_REPORT_DIALOG_CLOSED":return Object(G.a)(Object(G.a)({},e),{},{open:!1});default:return e}},Ae={data:null,loading:!1,error:null};var je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_INCIDENTS_LOADING":return Object(G.a)(Object(G.a)({},e),{},{loading:!0});case"GET_INCIDENTS_COMPLETE":return Object(G.a)(Object(G.a)({},e),{},{data:t.payload,loading:!1});case"GET_INCIDENTS_ERROR":return Object(G.a)(Object(G.a)({},e),{},{error:t.payload,loading:!1});default:return e}},Re=Object(Ee.combineReducers)({detailsDialog:ye,infoDialog:Te,incidents:je,reportDialog:ve});var Ie=function(e){var t,a=[Oe.a],n=Ee.applyMiddleware.apply(void 0,a);return t=n,Object(Ee.createStore)(Re,e,t)}(),we=a(40),ke={en:{translation:a(67)},ua:{translation:a(68)}};we.a.use(c.a).init({resources:ke,lng:"ua",keySeparator:!1,interpolation:{escapeValue:!1}});we.a,a(125),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N.a,{store:Ie},o.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){e.exports={header:"styles_header__2dQfB",header_wrapper:"styles_header_wrapper__B-Zap",logo:"styles_logo__2I-b3",header_list:"styles_header_list__1V_5f",header_list_button:"styles_header_list_button__1cxgH"}},30:function(e,t,a){e.exports={marker:"styles_marker__sVKuo",cluster:"styles_cluster__oMdgb",single:"styles_single__3VCKm"}},31:function(e,t,a){e.exports={button:"styles_button__12U2K",button__link:"styles_button__link__aokDb"}},36:function(e,t,a){e.exports={"tag-list":"styles_tag-list__2zQWK","tag-list_item":"styles_tag-list_item__1CUH0"}},37:function(e,t,a){e.exports={image:"styles_image__1QisQ",thumbnail:"styles_thumbnail__29Uaw"}},38:function(e,t,a){e.exports={stage_list:"styles_stage_list__Npuq2","stage_list-item":"styles_stage_list-item__lUvWG"}},39:function(e,t,a){e.exports={"close-pane":"styles_close-pane__3TKpt","close-pane_btn":"styles_close-pane_btn__3QFbs"}},5:function(e,t,a){e.exports={"dialog_info-body":"styles_dialog_info-body__1c053","dialog_info-background":"styles_dialog_info-background__1CiX3","dialog_info-wrapper":"styles_dialog_info-wrapper__3BuC3","dialog_info-content":"styles_dialog_info-content__1vWeG","dialog_info-content-slider":"styles_dialog_info-content-slider__3bIjQ","dialog_info-content-close_btn":"styles_dialog_info-content-close_btn__3vmM0","dialog_info-content-close_btn-wrap":"styles_dialog_info-content-close_btn-wrap__3aagW","dialog_info-content-more-info-btn":"styles_dialog_info-content-more-info-btn__2iQmp","dialog_info-content-damage":"styles_dialog_info-content-damage__3iRZv","dialog_info-content-stage":"styles_dialog_info-content-stage__oRniQ","dialog_info-content-tag_list":"styles_dialog_info-content-tag_list__20hVN","dialog_details-body":"styles_dialog_details-body__x1Sj0","dialog_details-background":"styles_dialog_details-background__1Tqqh","dialog_details-wrapper":"styles_dialog_details-wrapper__1V15G","dialog_details-content":"styles_dialog_details-content__26gaS","dialog_details-content-slider":"styles_dialog_details-content-slider__242pJ","dialog_details-content-close_pane":"styles_dialog_details-content-close_pane__1ho9T","dialog_details-content-close_btn":"styles_dialog_details-content-close_btn__1wru3","dialog_details-content-close_btn-wrap":"styles_dialog_details-content-close_btn-wrap__wJxRp","dialog_details-content-more-info-btn":"styles_dialog_details-content-more-info-btn__2frvT","dialog_details-content-coordinates":"styles_dialog_details-content-coordinates__J6rfn","dialog_details-content-damage":"styles_dialog_details-content-damage__1kE4R","dialog_details-content-stage":"styles_dialog_details-content-stage__3tVbK","dialog_details-content-tag_list":"styles_dialog_details-content-tag_list__1-3pf"}},52:function(e,t,a){e.exports={app:"app_styles_app___NBu3"}},55:function(e,t,a){e.exports={map:"styles_map__3YmVy"}},58:function(e,t,a){e.exports={reports:"styles_reports__3JU70"}},59:function(e,t,a){e.exports={title:"styles_title__20z7k"}},60:function(e,t,a){e.exports={stage:"styles_stage__38PJp"}},62:function(e,t,a){e.exports=a.p+"static/media/placeholder.d29a82cf.png"},63:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAACJCAMAAADwvQSIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk2NzM4MjA0OEJFNTExOTZFMEVGRjMzNjVEMEYzNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QzBGRUE3MDhCMDQxMUU1QTJDRkZGOERCNDM4Rjg4NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QzBGRUE2RjhCMDQxMUU1QTJDRkZGOERCNDM4Rjg4NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFEOTY3MzgyMDQ4QkU1MTE5NkUwRUZGMzM2NUQwRjM1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFEOTY3MzgyMDQ4QkU1MTE5NkUwRUZGMzM2NUQwRjM1Ii8+IDwvcmRmOkRlc2NyaXB0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"},67:function(e){e.exports=JSON.parse('{"Sponsors":"Sponsors","Reports":"Reports","Submit a new report":"Submit a new report","All Reports":"All Reports","Successfully completed":"Successfully completed","More Information":"More Information","Location":"Location","Loading":"Loading...","Search Places":"Search Places ...","Damage":"Damage value: {{ value }} {{ measure }}","More information":"More information >","Coordinates":"Coordinates"}')},68:function(e){e.exports=JSON.parse('{"Sponsors":"\u0421\u043f\u043e\u043d\u0441\u043e\u0440\u0438","Reports":"\u041f\u043e\u0440\u0443\u0448\u0435\u043d\u043d\u044f","Submit a new report":"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u043f\u043e\u0440\u0443\u0448\u0435\u043d\u043d\u044f","All Reports":"\u0412\u0441\u0456 \u043f\u043e\u0440\u0443\u0448\u0435\u043d\u043d\u044f","Successfully completed":"\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0456","More Information":"\u0411\u0456\u043b\u044c\u0448\u0435 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457","Location":"\u0420\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f","Loading":"\u0419\u0434\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...","Search Places":"\u0428\u0443\u043a\u0430\u0442\u0438 \u043c\u0456\u0441\u0446\u044f ...","Damage":"\u041c\u0430\u0441\u0448\u0442\u0430\u0431 \u0443\u0449\u0435\u0440\u0431\u0443: {{ value }} {{ measure }}","More information":"\u0411\u0456\u043b\u044c\u0448\u0435 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457 >","Coordinates":"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0438"}')},7:function(e,t,a){e.exports={"dialog_report-body":"styles_dialog_report-body__P5wEB","dialog_report-background":"styles_dialog_report-background__18zzT","dialog_report-wrapper":"styles_dialog_report-wrapper__2Hb9k","dialog_report-content":"styles_dialog_report-content__1VMkH","dialog_report-content-close_pane":"styles_dialog_report-content-close_pane__1fDkh","dialog_report-content-close_btn":"styles_dialog_report-content-close_btn__35nJy","dialog_report-content-close_btn-wrap":"styles_dialog_report-content-close_btn-wrap__2Hm_V","dialog_report-content-more-info-btn":"styles_dialog_report-content-more-info-btn__1Tz2V","dialog_report-content-damage":"styles_dialog_report-content-damage__1txeo","dialog_report-content-stage":"styles_dialog_report-content-stage__1K36b","dialog_report-content-tag_list":"styles_dialog_report-content-tag_list__3w-Sl"}},72:function(e,t,a){e.exports=a(126)}},[[72,1,2]]]);
//# sourceMappingURL=main.f4cb956b.chunk.js.map
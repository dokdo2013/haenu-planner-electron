(this["webpackJsonphaenu-planner-client"]=this["webpackJsonphaenu-planner-client"]||[]).push([[0],{110:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(60),i=a.n(c),l=a(17),r=(a(57),a(13)),j=a(0),o=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.b,{to:"/app",children:"App"}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{to:"/login",children:"Login"}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{to:"/register",children:"Register"}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{to:"/support",children:"Support"})]})},p=a(62),b=a.n(p),d=a(63),u=a.n(d),x=a(16),O=a(149),m=a(151),h=a(136),f=a(143),v=a(64),g=a.n(v);function N(e){var t=e.children,a=e.window,s=Object(h.a)({disableHysteresis:!0,threshold:0,target:a?a():void 0});return n.a.cloneElement(t,{elevation:s?4:0})}var k=function(e){var t=e.props,a=e.title,s=e.show;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,Object(x.a)(Object(x.a)({},t),{},{children:Object(j.jsx)(O.a,{color:"inherit",children:Object(j.jsxs)(m.a,{className:"appHeader",children:[Object(j.jsx)("h1",{className:"appTitle",children:a}),s.indexOf("alert")>=0&&Object(j.jsx)("div",{className:"appButtons",children:Object(j.jsx)(f.a,{badgeContent:1,color:"primary",children:Object(j.jsx)(g.a,{})})})]})})})),Object(j.jsx)(m.a,{})]})},q=a(14),C=a(145),w=a(150),y=a(152),P=a(153),I=a(66),L=a.n(I),W=a(67),F=a.n(W),T=a(68),S=a.n(T),z=a(69),D=a.n(z),B=function(){var e=window.location.pathname,t=Object(s.useState)(e),a=Object(q.a)(t,2),n=a[0],c=a[1];return Object(j.jsx)(C.a,{sx:{width:500},children:Object(j.jsx)(w.a,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:Object(j.jsxs)(y.a,{value:n,onChange:function(e,t){c(t)},children:[Object(j.jsx)(P.a,{component:l.b,to:"/app",value:"/app",label:"\ud648",icon:Object(j.jsx)(L.a,{})}),Object(j.jsx)(P.a,{component:l.b,to:"/app/timetable",value:"/app/timetable",label:"\uc2dc\uac04\ud45c",icon:Object(j.jsx)(F.a,{})}),Object(j.jsx)(P.a,{component:l.b,to:"/app/calendar",value:"/app/calendar",label:"\uce98\ub9b0\ub354",icon:Object(j.jsx)(S.a,{})}),Object(j.jsx)(P.a,{component:l.b,to:"/app/setting",value:"/app/setting",label:"\uc124\uc815",icon:Object(j.jsx)(D.a,{})})]})})})},H=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{title:"\ud648",show:["alert"]}),Object(j.jsxs)("div",{className:"appWrapper",children:[Object(j.jsx)("p",{children:"Contents"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt."}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt."}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt."}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt."}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt."}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt."}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt."})]}),Object(j.jsx)(B,{})]})},A=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{title:"\uc2dc\uac04\ud45c",show:["alert"]}),Object(j.jsx)("div",{className:"appWrapper"}),Object(j.jsx)(B,{})]})},E=a(70),G=a.n(E),J=(a(107),a(108),a(109),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{title:"\uce98\ub9b0\ub354",show:["alert"]}),Object(j.jsx)(G.a,{height:"calc(100vh - 120px)",calendars:[{id:"0",name:"Private",bgColor:"#9e5fff",borderColor:"#9e5fff"},{id:"1",name:"Company",bgColor:"#00a9ff",borderColor:"#00a9ff"}],disableDblClick:!0,disableClick:!1,isReadOnly:!1,month:{startDayOfWeek:0},scheduleView:!0,taskView:!0,timezones:[{timezoneOffset:540,displayLabel:"GMT+09:00",tooltip:"Seoul"},{timezoneOffset:-420,displayLabel:"GMT-08:00",tooltip:"Los Angeles"}],useDetailPopup:!0,useCreationPopup:!0,view:"month",week:{showTimezoneCollapseButton:!0,timezonesCollapsed:!0}}),Object(j.jsx)(B,{})]})}),M=a(147),R=a(148),V=a(146),K=a(142),Q=a(71),U=a.n(Q),X=function(){var e={inputProps:{"aria-label":"Switch demo"}};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{title:"\uc124\uc815",show:[]}),Object(j.jsxs)("div",{className:"appWrapper",children:[Object(j.jsx)(l.b,{className:"linkNoStyle",to:"/app/setting/info",children:Object(j.jsxs)(M.a,{sx:{display:"flex",padding:"20px 10px",alignItems:"center"},children:[Object(j.jsx)(C.a,{sx:{display:"flex",flexDirection:"column"},children:Object(j.jsx)(V.a,{src:"https://via.placeholder.com/120",alt:"sample"})}),Object(j.jsxs)(C.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",lineHeight:"12px",paddingLeft:"20px"},children:[Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)("span",{style:{fontSize:"18px",fontWeight:700},children:"Name"}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{style:{fontSize:"12px",fontWeight:100},children:"\ub0b4 \uc18c\uac1c\ub97c \ub4f1\ub85d\ud574\uc8fc\uc138\uc694."})]}),Object(j.jsx)("div",{children:Object(j.jsx)(U.a,{})})]})]})}),Object(j.jsxs)("div",{className:"appInnerWrapper",children:[Object(j.jsx)("p",{className:"smallTitle",children:"\uc54c\ub9bc \uc124\uc815"}),Object(j.jsxs)(M.a,{className:"settingPickerWrapper",children:[Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc804\uccb4 \uc54c\ub9bc"}),Object(j.jsx)(K.a,Object(x.a)(Object(x.a)({},e),{},{defaultChecked:!0}))]}),Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc124\uc815 2"}),Object(j.jsx)(K.a,Object(x.a)({},e))]}),Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc124\uc815 3"}),Object(j.jsx)(K.a,Object(x.a)(Object(x.a)({},e),{},{defaultChecked:!0}))]})]})]}),Object(j.jsxs)("div",{className:"appInnerWrapper",children:[Object(j.jsx)("p",{className:"smallTitle",children:"\uc54c\ub9bc \uc124\uc815"}),Object(j.jsxs)(M.a,{className:"settingPickerWrapper",children:[Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc804\uccb4 \uc54c\ub9bc"}),Object(j.jsx)(K.a,Object(x.a)(Object(x.a)({},e),{},{defaultChecked:!0}))]}),Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc124\uc815 2"}),Object(j.jsx)(K.a,Object(x.a)({},e))]}),Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc124\uc815 3"}),Object(j.jsx)(K.a,Object(x.a)(Object(x.a)({},e),{},{defaultChecked:!0}))]})]})]}),Object(j.jsxs)("div",{className:"appInnerWrapper",children:[Object(j.jsx)("p",{className:"smallTitle",children:"\uc54c\ub9bc \uc124\uc815"}),Object(j.jsxs)(M.a,{className:"settingPickerWrapper",children:[Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc804\uccb4 \uc54c\ub9bc"}),Object(j.jsx)(K.a,Object(x.a)(Object(x.a)({},e),{},{defaultChecked:!0}))]}),Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc124\uc815 2"}),Object(j.jsx)(K.a,Object(x.a)({},e))]}),Object(j.jsxs)(R.a,{className:"settingPicker",children:[Object(j.jsx)("div",{children:"\uc124\uc815 3"}),Object(j.jsx)(K.a,Object(x.a)(Object(x.a)({},e),{},{defaultChecked:!0}))]})]})]})]}),Object(j.jsx)(B,{})]})},Y=a(72),Z=a.n(Y),$=a(73),_=a.n($),ee=a(74),te=a.n(ee),ae=a(75),se=a.n(ae),ne=a(76),ce=a.n(ne),ie=a(77),le=a.n(ie),re=a(78),je=a.n(re),oe=a(79),pe=a.n(oe),be=a(80),de=a.n(be),ue=a(81),xe=a.n(ue);var Oe=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(r.a,{path:"/",exact:!0,component:o}),Object(j.jsx)(r.a,{path:"/login",exact:!0,component:b.a}),Object(j.jsx)(r.a,{path:"/register",exact:!0,component:u.a}),Object(j.jsx)(r.a,{path:"/app",exact:!0,component:H}),Object(j.jsx)(r.a,{path:"/app/timetable",exact:!0,component:A}),Object(j.jsx)(r.a,{path:"/app/calendar",exact:!0,component:J}),Object(j.jsx)(r.a,{path:"/app/setting",exact:!0,component:X}),Object(j.jsx)(r.a,{path:"/mypage",exact:!0,component:Z.a}),Object(j.jsx)(r.a,{path:"/mypage/profile",exact:!0,component:_.a}),Object(j.jsx)(r.a,{path:"/mypage/alert",exact:!0,component:te.a}),Object(j.jsx)(r.a,{path:"/support",exact:!0,component:se.a}),Object(j.jsx)(r.a,{path:"/support/notice",exact:!0,component:ce.a}),Object(j.jsx)(r.a,{path:"/support/notice/:article",exact:!0,component:le.a}),Object(j.jsx)(r.a,{path:"/support/faq",exact:!0,component:je.a}),Object(j.jsx)(r.a,{path:"/support/qna",exact:!0,component:pe.a}),Object(j.jsx)(r.a,{path:"/support/qna/write",exact:!0,component:de.a}),Object(j.jsx)(r.a,{path:"/support/qna/:qid",exact:!0,component:xe.a})]})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,154)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};a(110);i.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(Oe,{})}),document.getElementById("root")),me()},57:function(e,t,a){},62:function(e,t){},63:function(e,t){},72:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){},77:function(e,t){},78:function(e,t){},79:function(e,t){},80:function(e,t){},81:function(e,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.6e5ae9a3.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var i=t(1),a=t(0),r=t.n(a),o=t(24),c=t.n(o),s=t(4),u=t(8),d=t(18),l=t(5),m={changeInputValue:function(){},handleSendSubmit:function(){},handleBetTeam:function(){},clearBetList:function(){},sendYourBet:function(){}},b=Object(a.createContext)(m),f=t(2),j=t(3);function x(){var n=Object(f.a)(["\n    color:black;\n    text-decoration:none;\n    font-family: 'Roboto', sans-serif;\n    font-weight:500;\n    font-size:23px;\n    padding:20px 0px;\n    color:#0fb85e;\n    @media(max-width:700px){\n        padding:10px 0px;\n    }\n"]);return x=function(){return n},n}function h(){var n=Object(f.a)(["\n  display:flex;\n  justify-content:space-around;\n  align-items:center;\n  width:100%;\n  background-color:#1c1b1a;\n  @media(max-width:700px){\n      flex-direction:column;\n  }\n  "]);return h=function(){return n},n}function p(){var n=Object(f.a)(["\n    width:100%;\n    display:flex;\n  "]);return p=function(){return n},n}var O=j.a.header(p()),g=j.a.nav(h()),v=Object(j.a)(d.b)(x()),y=function(){return Object(i.jsx)(O,{className:"header",children:Object(i.jsxs)(g,{className:"header__navigation",children:[Object(i.jsx)(v,{activeStyle:{color:"#deb028"},className:"header__navigation__navLink",exact:!0,to:"/",children:"Football"}),Object(i.jsx)(v,{activeStyle:{color:"#deb028"},className:"header__navigation__navLink",to:"/Counter-Strike",children:"Counter Strike"}),Object(i.jsx)(v,{activeStyle:{color:"#deb028"},className:"header__navigation__navLink",to:"/League-of-Legends",children:"League of Legends"}),Object(i.jsx)(v,{activeStyle:{color:"#deb028"},className:"header__navigation__navLink",to:"/Cash-In",children:"Cash in"})]})})};function N(){var n=Object(f.a)(["\n    background: #282728;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    color:",";\n    height:70%;\n    width:80px;\n    border-radius:2px;\n    margin:0px 10px;   \n\n"]);return N=function(){return n},n}function w(){var n=Object(f.a)(["\n    width:45%;\n    display:flex;\n    align-items:center;\n    justify-content:flex-end;\n    @media(max-width:700px)\n    {\n        width:50%;\n    }\n"]);return w=function(){return n},n}function V(){var n=Object(f.a)(["\n    width:55%;\n    @media(max-width:700px)\n    {\n        width:50%;\n    }\n"]);return V=function(){return n},n}function _(){var n=Object(f.a)(["\n    text-decoration:none;\n    list-style:none;\n    padding: 7px 10px;\n    font-family: 'Roboto', sans-serif;\n    font-weight:300;\n    color:#fff;\n  \n    \n"]);return _=function(){return n},n}function M(){var n=Object(f.a)(["\n    \n    display:flex;\n    margin:15px 25px;\n    border-radius:3px;\n    background-color:#42413e;\n    animation: "," linear both .8s;\n    \n"]);return M=function(){return n},n}function k(){var n=Object(f.a)(["\n    0%{\n        transform:translateX(-50%);\n        opacity:0;\n    }\n    100%{\n        transform:translateX(0%);\n        opacity:1;\n    }\n"]);return k=function(){return n},n}var H=Object(j.b)(k()),W=j.a.div(M(),H),C=j.a.li(_()),S=j.a.ul(V()),R=j.a.div(w()),L=j.a.button.attrs((function(n){return{colorType:n.colorType||"white"}}))(N(),(function(n){return n.colorType})),F=function(n){var e=n.element,t=e.HomeName,r=e.VisitName,o=e.HomeWin,c=e.VisitWin,s=e.Draw,u=Object(a.useContext)(b),d=u.handleBetTeam,l=u.colorReset;return Object(i.jsxs)(W,{className:"ContainerMatch",children:[Object(i.jsxs)(S,{className:"ContainerMatch__Teams__List",children:[Object(i.jsx)(C,{className:"ContainerMatch__teams__List__element",children:t}),Object(i.jsx)(C,{className:"ContainerMatch__teams__List__element",children:r})]}),Object(i.jsxs)(R,{className:"ContainerMatch__buttonValue",children:[Object(i.jsx)(L,{value:o,id:t,onClick:d,name:"".concat(t," vs ").concat(r),children:o}),s&&Object(i.jsx)(L,{id:"Draw",value:s,onClick:d,name:"".concat(t," vs ").concat(r),children:s}),Object(i.jsx)(L,{colorType:l,id:r,name:"".concat(t," vs ").concat(r),value:c,onClick:d,children:c})]})]})},B=[{id:1,HomeName:"FC Barcelona",VisitName:"Real Madryt",HomeWin:1.89,VisitWin:2.1,Draw:3.2},{id:2,HomeName:"Mainz",VisitName:"Augsburg",HomeWin:1.59,VisitWin:2.3,Draw:3.8},{id:3,HomeName:"Nantes",VisitName:"PSG",HomeWin:2.3,VisitWin:1.8,Draw:2.76},{id:4,HomeName:"Chelsea",VisitName:"Burnley",HomeWin:1.8,VisitWin:2.3,Draw:3.1},{id:5,HomeName:"Liverpool",VisitName:"GKS Olimpia",HomeWin:1.8,VisitWin:2.3,Draw:3.1}].map((function(n){return Object(i.jsx)(F,{element:n},n.id)})),T=function(){return Object(i.jsx)(i.Fragment,{children:B})},z=[{id:1,HomeName:"Virtus.pro",VisitName:"Nemiga",HomeWin:1.89,VisitWin:2.1},{id:2,HomeName:"Natus Vincere",VisitName:"Mousesport",HomeWin:1.59,VisitWin:2.3},{id:3,HomeName:"Complexity",VisitName:"Vartex",HomeWin:2.3,VisitWin:1.8},{id:4,HomeName:"Gambit",VisitName:"ForZe",HomeWin:1.8,VisitWin:2.3},{id:5,HomeName:"BIG",VisitName:"Godsent",HomeWin:1.8,VisitWin:2.3}],I=function(){var n=z.map((function(n){return Object(i.jsx)(F,{element:n},n.id)}));return Object(i.jsx)(i.Fragment,{children:n})},q=[{id:1,HomeName:"Excel Esports",VisitName:"DRX",HomeWin:1.89,VisitWin:2.1},{id:2,HomeName:"G2 Esports",VisitName:"Team Vitality",HomeWin:1.59,VisitWin:2.3},{id:3,HomeName:"Complexity",VisitName:"Vartex",HomeWin:2.3,VisitWin:1.8},{id:4,HomeName:"CrowCrowd",VisitName:"LNG Esports",HomeWin:1.8,VisitWin:2.3},{id:5,HomeName:"Origen",VisitName:"Rainbow7",HomeWin:1.8,VisitWin:2.3}],D=function(){var n=q.map((function(n){return Object(i.jsx)(F,{element:n},n.id)}));return Object(i.jsx)(i.Fragment,{children:n})},E=t(28);function G(){var n=Object(f.a)(["\n    width:60%;\n    background-color:#0fb85e;\n    border:none;\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    font-weight:300;\n    cursor: pointer;\n    font-size:25px;\n    margin-top:10px;\n    padding:5px 0px;\n"]);return G=function(){return n},n}function Y(){var n=Object(f.a)(["\n    width:60%;\n    height:30px;\n    border-radius:2px;\n    margin-bottom:10px;\n"]);return Y=function(){return n},n}function A(){var n=Object(f.a)(["\n    font-family: 'Roboto', sans-serif;\n    color:white;\n    font-weight:300;\n    margin-bottom:10px;\n"]);return A=function(){return n},n}function X(){var n=Object(f.a)(["\n    display:flex;\n    flex-direction:column;\n    margin-bottom:30px;\n    align-items:center;\n    @media(max-width:700px){\n        align-items:center;\n        padding-left:0;\n    }\n"]);return X=function(){return n},n}function J(){var n=Object(f.a)(["\n    font-family: 'Roboto', sans-serif;\n    color:white;\n    font-size:55px;\n    letter-spacing:10px;\n    text-align:center;\n    display:block;\n    padding:30px 0px;\n    font-weight:300;\n    @media(max-width:700px){\n        text-align:center;\n        margin-left:0;\n    }\n"]);return J=function(){return n},n}var P=j.a.h1(J()),K=j.a.form(X()),Z=j.a.label(A()),Q=j.a.input(Y()),U=j.a.button(G()),$=function(){var n=Object(E.a)(),e=n.register,t=n.handleSubmit,r=n.errors,o=Object(a.useContext)(b),c=o.changeInputValue,s=o.handleSendSubmit;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P,{children:"CASH IN"}),Object(i.jsxs)(K,{onSubmit:t(s),children:[Object(i.jsx)(Z,{htmlFor:"firstName",children:"First Name:"}),Object(i.jsx)(Q,{id:"firstName",name:"firstName",ref:e({required:!0,minLength:1}),onChange:c,type:"text"}),r.firstName&&Object(i.jsx)("p",{style:{color:"red",padding:"10px 0px",fontFamily:"Roboto",fontSize:15},children:"Required"}),Object(i.jsx)(Z,{htmlFor:"lastName",children:"Last Name: "}),Object(i.jsx)(Q,{id:"lastName",name:"lastName",ref:e({required:!0,minLength:1}),type:"text",onChange:c}),r.lastName&&Object(i.jsx)("p",{style:{color:"red",padding:"10px 0px",fontFamily:"Roboto",fontSize:15},children:"Required"}),Object(i.jsx)(Z,{htmlFor:"email",children:"Email: "}),Object(i.jsx)(Q,{id:"email",name:"email",ref:e({required:!0,minLength:1}),type:"email",onChange:c}),r.email&&Object(i.jsx)("p",{style:{color:"red",padding:"10px 0px",fontFamily:"Roboto",fontSize:15},children:"Required"}),Object(i.jsx)(Z,{htmlFor:"valueMoney",children:"Value: "}),Object(i.jsx)(Q,{id:"valueMoney",name:"valueMoney",ref:e({required:!0,minLength:1}),type:"number",onChange:c}),r.valueMoney&&Object(i.jsx)("p",{style:{color:"red",padding:"10px 0px",fontFamily:"Roboto",fontSize:15},children:"Required"}),Object(i.jsx)(U,{children:"Send Money"})]})]})};function nn(){var n=Object(f.a)(["\n-webkit-appearance: none;\n-moz-appearance: textfield;\nwidth:40%;\npadding-left:20px;\nfont-family: 'Roboto', sans-serif;\n"]);return nn=function(){return n},n}function en(){var n=Object(f.a)(["\nborder:none;\ncolor:white;\npadding:10px 30px;\nbackground-color:#282728;\ncursor: pointer;\nwidth:40%;\n"]);return en=function(){return n},n}function tn(){var n=Object(f.a)(["\ndisplay:flex;\npadding:20px;\nwidth:100%;\njustify-content:space-around;\n"]);return tn=function(){return n},n}function an(){var n=Object(f.a)(["\ndisplay:flex;\nbackground-color:#282728;\ncolor:white;\nfont-size:15px;\nfont-family: 'Roboto', sans-serif;\nfont-weight:200;\npadding:20px;\njustify-content:space-around;\nborder-bottom:1px solid grey;\n"]);return an=function(){return n},n}function rn(){var n=Object(f.a)(["\nfont-family: 'Roboto', sans-serif;\nfont-size:18px;\ncolor:white;\nfont-weight:400;\npadding:15px 20px;\n"]);return rn=function(){return n},n}function on(){var n=Object(f.a)(["\nbackground-color:#42413E;\nwidth:60%;\nborder-radius:3px;\n@media(max-width:800px)\n{\n    width:80%;\n}\n"]);return on=function(){return n},n}function cn(){var n=Object(f.a)(["\nfont-family: 'Roboto', sans-serif;\ncolor:white;\nfont-size:55px;\nletter-spacing:10px;\ntext-align:center;\ndisplay:block;\npadding:30px 0px;\nfont-weight:300;\n"]);return cn=function(){return n},n}function sn(){var n=Object(f.a)(["\nwidth:50%;\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\n@media(max-width:800px)\n{\n    width:100%;\n}\n"]);return sn=function(){return n},n}var un=j.a.div(sn()),dn=j.a.h1(cn()),ln=j.a.div(on()),mn=j.a.h2(rn()),bn=j.a.div(an()),fn=j.a.div(tn()),jn=j.a.button(en()),xn=j.a.input(nn()),hn=function(){var n=Object(a.useContext)(b),e=n.bankMoney,t=n.sendMoneyForBet,r=n.changeInputValue,o=n.sendYourBet,c=n.yourBets,s=c.reduce((function(n,e){return n*e.betValue}),1),u=c.map((function(n){return Object(i.jsxs)(bn,{children:[Object(i.jsx)("p",{children:n.betMatch}),Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:n.betTeam})}),Object(i.jsx)("p",{style:{color:"#0df005"},children:n.betValue})]},n.id)})),d=e,l=1!==s&&Math.round(100*s)/100,m=1!==s?Math.round(t*s*100)/100:0;return Object(i.jsxs)(un,{children:[Object(i.jsx)(dn,{children:"Your Bets"}),Object(i.jsxs)(ln,{children:[Object(i.jsxs)(mn,{children:["Your Account: ",d," euro"]}),Object(i.jsxs)(mn,{children:["Multiplier: ",l]}),Object(i.jsxs)(mn,{children:["Your Win: ",m," euro"]}),u,Object(i.jsxs)(fn,{children:[Object(i.jsx)(jn,{onClick:o,children:"Bet"}),Object(i.jsx)(xn,{value:t,name:"sendMoneyForBet",onChange:r,type:"number",min:"0",max:"100000"})]})]})]})};function pn(){var n=Object(f.a)(["\n  width:50%;\n  display:flex;\n  flex-direction:column;\n  padding:30px 0px;\n  @media(max-width:800px){\n    width:100%;\n  }\n"]);return pn=function(){return n},n}function On(){var n=Object(f.a)(["\n  width:100%;\n  display:flex;\n  flex-wrap:wrap;\n"]);return On=function(){return n},n}function gn(){var n=Object(f.a)(["\n  min-height:100vh;\n  min-width:100%;\n  background-color:#2e2d2b;\n  display:flex;\n  flex-direction:column;\n  "]);return gn=function(){return n},n}var vn=j.a.div(gn()),yn=j.a.main(On()),Nn=j.a.section(pn()),wn=function(){var n=Object(a.useState)(""),e=Object(u.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(""),c=Object(u.a)(o,2),m=c[0],f=c[1],j=Object(a.useState)(""),x=Object(u.a)(j,2),h=x[0],p=x[1],O=Object(a.useState)(0),g=Object(u.a)(O,2),v=g[0],N=g[1],w=Object(a.useState)(0),V=Object(u.a)(w,2),_=V[0],M=V[1],k=Object(a.useState)(0),H=Object(u.a)(k,2),W=H[0],C=H[1],S=Object(a.useState)([]),R=Object(u.a)(S,2),L=R[0],F=R[1];return Object(i.jsx)(d.a,{basename:"/React-Obstawianie",children:Object(i.jsxs)(vn,{className:"App",children:[Object(i.jsx)(y,{}),Object(i.jsx)(yn,{children:Object(i.jsxs)(b.Provider,{value:{firstName:t,lastName:m,email:h,valueMoney:v,bankMoney:_,sendMoneyForBet:W,yourBets:L,changeInputValue:function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"firstName":r(i);break;case"lastName":f(i);break;case"email":p(i);break;case"valueMoney":N(i);break;case"bankMoney":M(i);break;case"sendMoneyForBet":C(i)}},handleSendSubmit:function(){var n=parseInt(v);M((function(e){return e+n}))},handleBetTeam:function(n){var e=n.target,t={betTeam:e.id,betValue:e.value,betMatch:e.name,id:L.length};if(L.find((function(n){return n.betMatch===t.betMatch&&n.betTeam===t.betTeam}))){var i=L.findIndex((function(n){return n.betMatch===t.betMatch})),a=Object(s.a)(L);return console.log(i),a.splice(i,1),void F(a)}L.find((function(n){return n.betMatch===t.betMatch}))||F((function(n){return[].concat(Object(s.a)(n),[t])}))},sendYourBet:function(n){if(L.length>0&&_>W){var e=L.reduce((function(n,e){return n*e.betValue}),1),t=Math.floor(2*Math.random()),i=parseInt(Math.round(W*e*100)/100);t?(M((function(n){return _+i})),F([])):(M((function(n){return _-i})),F([]))}}},children:[Object(i.jsx)(Nn,{className:"main__section",children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,component:T}),Object(i.jsx)(l.a,{path:"/Counter-Strike",component:I}),Object(i.jsx)(l.a,{path:"/League-Of-Legends",component:D}),Object(i.jsx)(l.a,{path:"/Cash-In",component:$})]})}),Object(i.jsx)(hn,{})]})})]})})};t(41);c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(wn,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a034a49f.chunk.js.map
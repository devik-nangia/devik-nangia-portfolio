import{s as P,j as e,T as O,t as G,A as J,r as U,G as l,a as t,S as b,B as p,b as o,c as k,I as q,R as y,m as f,u as z,D as C,C as K,d as Q,e as X,f as Y,g as V,L as Z,h as L,i as R,k as ee,l as M,n as E,o as te,P as ne,p as $,q as D,v as F,w as ie,F as re,x as oe,y as ae,z as se,E as le,H as S,J as ce,K as de,M as he,N as pe,O as me,Q as ge,U as ue,V as fe,W as ye,X as xe,Y as we,Z as ve,_ as be,$ as ke,a0 as Ce,a1 as Ie,a2 as Se,a3 as Le}from"./vendor-ad0ee8f0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const _=P(({className:i,...r})=>e(O,{...r,classes:{popper:i}}))(({})=>({[`& .${G.tooltip}`]:{backgroundColor:"#3e5060eb",color:"#fff",fontSize:"0.75rem"}})),T=P(J)(({theme:i})=>({backgroundColor:i.palette.primary.main,width:"50px",height:"50px"})),x=P("span")(({theme:i})=>({color:i.palette.primary.main,fontWeight:600})),Re=i=>{const[r,s]=U.useState({height:0,width:0});return U.useEffect(()=>{const c=()=>({height:i.current.offsetHeight,width:i.current.offsetWidth}),n=()=>{s(c())};return i.current&&s(c()),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[i]),r},Me=240,w=["home","about","skills","projects","contact"],_e="https://github.com/devik-nangia",N="https://www.linkedin.com/in/devik-nangia-862225329/",Te="nangiadevik@gmail.com",je="Manipal, Karnataka, India",B="Devik Nangia",Ae=({secHeight:i,navID:r})=>e("section",{id:r,children:e(l,{container:!0,sx:{minHeight:i,alignItems:"center",justifyContent:"center"},children:e(l,{item:!0,children:t(b,{direction:{xs:"column-reverse",sm:"row"},gap:{xs:6,sm:2,md:10},alignItems:"center",children:[t(p,{sx:{textAlign:{xs:"center",sm:"initial"},flexShrink:2},children:[t(o,{variant:"h3",color:"text.secondary",children:["Hi there,",e("span",{role:"img","aria-label":"hi emoji",className:"wave",children:String.fromCodePoint(128075)})]}),e(o,{variant:"h3",color:"text.secondary",children:"My name is"}),e(o,{variant:"h3",color:"text.secondary",className:"gradientName",children:"Devik Nangia"}),e(o,{variant:"h3",color:"text.secondary",children:"I'm a Full stack developer"}),e(k,{size:"large",sx:{mt:2,backgroundImage:"linear-gradient(to right, #00C0FD 0%, #E70FAA 51%, #00C0FD 100%)",transition:"0.5s",backgroundSize:"200% auto",color:"#fff",typography:"h6","&:hover":{backgroundPosition:"right center"}},href:"#"+w[4],children:"Contact Me"})]}),e(p,{sx:{position:"relative",width:{xs:220,md:250},height:{xs:220,md:250},borderRadius:"50%","&::before,&::after":{content:'" "',position:"absolute",inset:"-10px",borderRadius:"inherit",background:"linear-gradient(#00C0FD, #E70FAA)",zIndex:-1,animation:"spin 4s linear infinite"},"&::after":{filter:"blur(16px)"}},children:e(q,{alt:"Devik Nangia",src:"./profile-pic.png",style:{width:"100%",height:"100%",borderRadius:"50%",objectFit:"cover"}})})]})})})}),j=[{name:"MongoDB",imgURL:"./icons_mongodb.png"},{name:"Express.js",imgURL:"./icons_expressjs.png"},{name:"React.js",imgURL:"./logos_react.svg"},{name:"Node.js",imgURL:"./icons_nodejs.png"},{name:"Socket.io",imgURL:"./icons_socketio.png"},{name:"Javascript",imgURL:"./icons_js.svg"},{name:"Python",imgURL:"./icons_python.png"},{name:"Tailwind CSS",imgURL:"./icons_tailwind.png"},{name:"Git",imgURL:"./logos_git.svg"},{name:"HTML",imgURL:"./icons_html.svg"},{name:"CSS",imgURL:"./icons_css.svg"},{name:"Postman",imgURL:"./icons_postman.png"},{name:"Java",imgURL:"./icons_java.png"}],A=[{name:"Goal Connect - Indian Football Portal",description:"A web app offering comprehensive match data, an integrated e-commerce marketplace for football gear, a player management system for tracking stats and connecting with coaches, and a job portal for opportunities in the football industry. Intergrated RazorPay for payments, socket.io live chat page, JWT login and signup authentication. Node.js and MongoDB backend, React.js frontend. Live webscraping to display match data across India.",projectURL:"https://goal-connect.vercel.app/",githubURL:"",imgURL:"./goal-connect.png"},{name:"Telechat",description:"A full stack chat application that allows real-time chat communication using Socket.io. Allowing image uploads as well as JWT login authentication, crypted passwords using bcrypt.js, MERN stack",projectURL:"https://chat-application-fullstack.onrender.com/",githubURL:"https://github.com/devik-nangia/chat-application-fullstack",imgURL:"./telechat.png"},{name:"Tenzies",description:"An awesome game made with React.js. Roll until all dice are the same. Click each die to freeze it at its current value between rolls. Try to get the fastest time!",projectURL:"https://devik-nangia.github.io/Tenzi-game/",githubURL:"https://github.com/devik-nangia/Tenzi-game",imgURL:"./tenzies.png"},{name:"Task Manager",description:"A full stack web app to manage and keep track of tasks. Stores tasks in MongoDB, Frontend made with React.js and shacdn ui.",projectURL:"",githubURL:"https://github.com/devik-nangia/Task-manager",imgURL:"./task-manager.png"}];((new Date().getTime()-new Date("2024-07-15").getTime())/(1e3*60*60*24*365.25)).toLocaleString("en",{maximumFractionDigits:2,style:"unit",unit:"year",unitDisplay:"long"});const d={education:{title:"B.tech in Computer Science Engineering, with Artificial Intelligence & Machine Learning",grade:"9.0 CGPA",subtitle:"From Manipal Institute of Technology, Manipal"},school:{title:"Amity International School, Saket",grade:"CBSE Class XII - 94.4%",subtitle:"Saket, New Delhi"}},Pe=y.forwardRef((i,r)=>e(b,{ref:r,...i})),ze=f(Pe),Ue=({secHeight:i,navID:r})=>{const s=z(n=>n.breakpoints.down("sm"));let c={initial:{opacity:0,y:20,x:-20},whileInView:n=>({opacity:1,y:0,x:0,transition:{delay:n*.2,duration:s?.02:.5}}),whileHover:{scale:1.05,transition:{duration:.3}}};return t("section",{id:r,children:[t(l,{container:!0,sx:{alignContent:"flex-start"},children:[e(l,{item:!0,xs:12,py:3,children:t(o,{variant:"h4",textAlign:"center",children:["My ",e(x,{children:"Skills"})]})}),e(l,{item:!0,container:!0,spacing:2,children:j==null?void 0:j.map(({name:n,imgURL:a},h)=>e(l,{item:!0,xs:6,sm:3,lg:2,children:t(ze,{gap:1,sx:{height:1,p:1,"&:hover":{boxShadow:g=>`0px 0px 4px 4px ${g.palette.primary.main}`}},custom:h,variants:c,initial:"initial",whileInView:"whileInView",whileHover:"whileHover",viewport:{once:!0,amount:.5},children:[e(p,{sx:{height:75,width:1,p:1,display:"flex",justifyContent:"center"},children:e(p,{component:"img",sx:{maxInlineSize:"80%",blockSize:"auto",objectFit:"contain"},src:a,alt:n})}),e(o,{variant:"h6",textAlign:"center",children:n})]})},n))})]}),e("br",{}),e("br",{}),e(C,{}),e("br",{}),e("br",{})]})},$e=y.forwardRef((i,r)=>e(K,{ref:r,...i})),De=f($e),Fe=({secHeight:i,navID:r})=>{let s={initial:{x:-100,opacity:0},whileInView:{x:0,opacity:1,rotate:[0,10,0],transition:{type:"spring"}}},c={initial:{y:100,opacity:0},whileInView:{y:0,opacity:1}};return t("section",{id:r,children:[t(l,{container:!0,sx:{alignContent:"flex-start"},children:[e(l,{item:!0,xs:12,py:3,children:t(o,{variant:"h4",textAlign:"center",children:["Personal ",e(x,{children:"Projects"})]})}),e(l,{item:!0,container:!0,spacing:5,children:A==null?void 0:A.map(({name:n,description:a,githubURL:h,projectURL:g,imgURL:u},v)=>e(l,{item:!0,xs:12,sm:6,md:4,children:t(De,{initial:"initial",whileInView:"whileInView",viewport:{once:!0,amount:.3},transition:{staggerChildren:.5},sx:{display:"flex",height:1,flexDirection:"column","&:hover":{boxShadow:m=>`0px 0px 8px 8px ${m.palette.primary.main}`,transform:"scale(1.05)"}},children:[e(p,{component:f.img,sx:{width:1,aspectRatio:"2.2"},title:n,alt:n,src:u,variants:s}),t(Q,{sx:{flexGrow:1},children:[e(o,{component:f.h6,variants:c,gutterBottom:!0,variant:"h6",children:n}),e(o,{component:f.p,variants:c,variant:"body2",color:"text.secondary",children:a})]}),t(X,{sx:{justifyContent:"space-evenly"},children:[e(k,{disabled:!g,href:g,target:"_blank",rel:"noopener",color:"primary",startIcon:e(Y,{}),children:"Live Preview"}),e(k,{href:h,target:"_blank",rel:"noopener",color:"primary",startIcon:e(V,{}),children:"View Code"})]})]})},n))})]}),e("br",{}),e("br",{}),e(C,{}),e("br",{})]})},Be=()=>t("footer",{children:[e(C,{}),t(o,{textAlign:"center",sx:{textShadow:"1px 1px black",p:2},children:["Made with React.js by ",e(x,{children:"Devik Nangia"})]})]}),Ve=({secHeight:i,navID:r})=>{let s={initial:{opacity:0,y:20},whileInView:{opacity:1,y:0,transition:{staggerChildren:.2}}};return e("section",{id:r,children:t(l,{container:!0,sx:{justifyContent:"space-between",flexDirection:"column"},children:[t(l,{item:!0,container:!0,alignContent:"center",justifyContent:"center",flexGrow:1,children:[t(l,{item:!0,xs:12,py:3,textAlign:"center",children:[t(o,{variant:"h4",children:["Let's Get ",e(x,{children:"In Touch"})]}),t(o,{mt:1,children:["Have a ",e(x,{children:"Question"})," on your mind??"]}),t(o,{children:["Or want a copy of my ",e(x,{children:"résumé"}),"? Contact me using below links."]})]}),e(l,{item:!0,sx:{bgcolor:"background.paper"},children:t(Z,{component:f.ul,variants:s,initial:"initial",whileInView:"whileInView",viewport:{once:!0,amount:.5},children:[t(L,{component:f.a,variants:s,href:`mailto:${Te}`,sx:{border:3,borderRadius:2,borderColor:"transparent","&:hover":{borderColor:"primary.main"}},children:[e(R,{children:e(T,{children:e(ee,{fontSize:"large"})})}),e(M,{primaryTypographyProps:{pl:2,variant:"h6"},primary:"@nangiadevik@gmail.com"})]}),t(L,{component:f.a,variants:s,href:N,target:"_blank",rel:"noopener",sx:{border:3,borderRadius:2,borderColor:"transparent","&:hover":{borderColor:"primary.main"}},children:[e(R,{children:e(T,{children:e(E,{fontSize:"large"})})}),e(M,{primaryTypographyProps:{pl:2,variant:"h6"},primary:"Connect on LinkedIn"})]}),t(L,{component:f.a,variants:s,sx:{border:3,borderRadius:2,borderColor:"transparent",pointerEvents:"none","&:hover":{borderColor:"primary.main"}},children:[e(R,{children:e(T,{children:e(te,{fontSize:"large"})})}),e(M,{primaryTypographyProps:{pl:2,variant:"h6"},primary:je})]})]})})]}),e(l,{item:!0,xs:12,sx:{height:"fit-content"},children:e(Be,{})})]})})},Ee=({secHeight:i,navID:r})=>{var n,a,h,g,u,v;let c=z(m=>m.breakpoints.down("sm"))?{initial:{opacity:0},whileInView:{opacity:1}}:{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0,transition:{delay:.3}}};return t("section",{id:r,children:[e(C,{}),t(l,{container:!0,sx:{alignContent:"flex-start"},children:[e(l,{item:!0,xs:12,py:3,children:t(o,{variant:"h4",textAlign:"center",children:["Let Me ",e(x,{children:"Introduce Myself"})]})}),e(l,{item:!0,xs:12,md:5,children:e(ne,{src:"https://lottie.host/49f9657b-0967-40e8-a5cf-4a8835262ff8/3DV7zJE7j0.json",autoplay:!0,loop:!0,className:"lottie-player"})}),t(l,{item:!0,md:7,overflow:"hidden",children:[t(o,{variant:"body1",component:f.p,variants:c,initial:"initial",whileInView:"whileInView",viewport:{once:!0},children:["Hey, I'm Devik, a first year student at "," "," ",e("b",{children:"Manipal Institute of Technology, Manipal"})," "," currently studying Computer Science Engineering with Artificial Intelligence and Machine Learning. I am a "," "," ",e("b",{children:"Full stack developer"})," "," "," experienced with MERN stack."]}),t(b,{direction:{xs:"column",md:"row"},gap:{xs:2,md:3},pt:2,children:[e(p,{sx:{flex:1},children:t($,{variant:"outlined",sx:{p:2,height:1},children:[t(p,{sx:{display:"inline-flex",gap:1,alignItems:"center"},children:[e(D,{color:"primary",fontSize:"large"}),e(o,{variant:"h6",children:"College"})]}),t(o,{fontWeight:"bold",gutterBottom:!0,children:[(n=d==null?void 0:d.education)==null?void 0:n.title," |"," ",e(x,{children:(a=d==null?void 0:d.education)==null?void 0:a.grade})]}),e(o,{children:e(F,{color:"inherit",underline:"hover",href:"https://ldce.ac.in/",target:"_blank",rel:"noopener",children:(h=d==null?void 0:d.education)==null?void 0:h.subtitle})})]})}),e(p,{sx:{flex:1},children:t($,{variant:"outlined",sx:{p:2,height:1},children:[t(p,{sx:{display:"inline-flex",gap:1,alignItems:"center"},children:[e(D,{color:"primary",fontSize:"large"}),e(o,{variant:"h6",children:"School"})]}),t(o,{fontWeight:"bold",gutterBottom:!0,children:[(g=d==null?void 0:d.school)==null?void 0:g.title," |"," ",e(x,{children:(u=d==null?void 0:d.school)==null?void 0:u.grade})]}),e(o,{children:e(F,{color:"inherit",underline:"hover",href:"https://ldce.ac.in/",target:"_blank",rel:"noopener",children:(v=d==null?void 0:d.school)==null?void 0:v.subtitle})})]})})]})]})]}),e("br",{}),e(C,{}),e("br",{})]})};function Ne({children:i}){const r=ie({target:window,disableHysteresis:!0,threshold:200});return e(re,{in:r,children:e(p,{onClick:c=>{const n=(c.target.ownerDocument||document).querySelector("#home");console.log(n),n&&n.scrollIntoView({block:"center"})},role:"presentation",sx:{position:"fixed",bottom:{xs:75,sm:25},right:25},children:i})})}const H=y.createContext(null),He=({children:i})=>{const[r,s]=y.useState("dark");return e(H.Provider,{value:{mode:r,toggleColorMode:()=>s(c=>c==="light"?"dark":"light")},children:i})},W=()=>{const i=y.useContext(H);if(!i)throw new Error("useColorMode must be used within ColorModeProvider");return i},We=()=>{const i=[e(ue,{}),e(fe,{}),e(ye,{}),e(xe,{}),e(we,{})],[r,s]=y.useState(!1),{toggleColorMode:c}=W(),n=oe(),a=z(n.breakpoints.down("sm")),h=y.useRef(null);let{height:g}=Re(h),u=y.useMemo(()=>"calc(90vh)",[g]);const v=()=>{s(m=>!m)};return t(p,{sx:{width:1},children:[e(p,{component:"nav",children:e(ae,{variant:"temporary",open:r,onClose:v,ModalProps:{keepMounted:!0},sx:{display:{xs:"initial",md:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Me}},children:e(b,{spacing:3,sx:{py:4,px:2,width:1,alignItems:"center",justifyContent:"center"},children:w.map((m,I)=>e(k,{onClick:v,href:`#${m.toLowerCase()}`,variant:"outlined",startIcon:i[I],sx:{width:.7,borderRadius:20,py:1},children:m},I))})})}),t(b,{sx:{width:1},children:[e(se,{position:"sticky",color:"transparent",component:"nav",ref:h,sx:{backdropFilter:"blur(14px)",px:{xs:0,md:4}},children:t(le,{sx:{justifyContent:"space-between"},children:[t(p,{sx:{display:"flex",alignItems:"center"},children:[e(S,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:v,sx:{mr:{xs:0,sm:2},display:{md:"none"}},children:e(ce,{})}),e(o,{variant:"h4",fontFamily:"Iceland",color:"primary",children:a?B.split(" ")[0]:B}),e(b,{direction:"row",spacing:1,ml:3,sx:{display:{xs:"none",md:"initial"}},children:w.map((m,I)=>e(k,{href:`#${m}`,sx:{fontSize:"1rem"},children:m},I))})]}),t(b,{direction:"row",spacing:1,children:[e(_,{title:"LinkedIn Profile",children:e(S,{color:"primary",target:"_blank",rel:"noopener",href:N,children:e(E,{})})}),e(_,{title:"Github Profile",children:e(S,{color:"primary",href:_e,target:"_blank",rel:"noopener",children:e(V,{})})}),e(_,{title:"Toggle mode",children:e(S,{color:"primary",onClick:c,children:n.palette.mode==="dark"?e(de,{}):e(he,{})})})]})]})}),t(pe,{sx:{"&>section":{scrollMarginTop:`${g}px`}},children:[e(Ae,{secHeight:u,navID:w[0]}),e(Ee,{secHeight:u,navID:w[1]}),e(Ue,{secHeight:u,navID:w[2]}),e(Fe,{secHeight:u,navID:w[3]}),e(Ve,{secHeight:u,navID:w[4]}),e(Ne,{children:e(me,{size:"medium","aria-label":"scroll back to top",title:"Scroll to Top",color:"primary",children:e(ge,{})})})]})]})]})},Oe=i=>({palette:{mode:i,primary:{main:"#3ea6ff"},...i==="light"?{text:{primary:"#666666",secondary:"#42446E"}}:{background:{default:"#191919",paper:"#191919"},text:{primary:"#A7A7A7",secondary:"#CCCCCC"}}},typography:{fontFamily:"Inter",h1:{fontWeight:700},h2:{fontWeight:700},h3:{fontWeight:700},h4:{fontWeight:700},h5:{fontWeight:700},h6:{fontWeight:600}},components:{MuiButton:{styleOverrides:{root:{textTransform:"capitalize"}}}}});function Ge(){const{mode:i}=W();let r=y.useMemo(()=>ve(Oe(i)),[i]);return r=be(r,{breakpoints:["xs","sm","md","lg","xl"]}),t(ke,{theme:r,children:[e(Ce,{enableColorScheme:!0}),e(We,{})]})}Ie.createRoot(document.getElementById("root")).render(e(y.StrictMode,{children:e(He,{children:e(Se,{features:Le,children:e(Ge,{})})})}));
//# sourceMappingURL=index-f5321cb0.js.map

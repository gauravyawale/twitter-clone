(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(7606)}])},3149:function(a,b,c){"use strict";var d=c(5893),e=c(9008),f=c.n(e);c(7294);var g=function(a){var b=a.metaData;return(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:b.title}),(0,d.jsx)("meta",{property:"og:site_name",content:"Twitter Clone"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,d.jsx)("meta",{name:"keywords",content:b.keywords}),(0,d.jsx)("meta",{name:"description",content:b.description}),(0,d.jsx)("link",{rel:"canonical",href:b.canonical},"canonical")]})};b.Z=g},7606:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return L},default:function(){return M}});var d=c(5893),e=c(1163),f=c.n(e),g=c(1799),h=c(9396),i=c(9815),j=c(5675),k=c.n(j),l=c(7294),m=c(9583),n=c(5934),o=function(a){a.isCreate;var b=a.userTweets,c=(0,l.useState)(b),e=c[0],f=c[1],j=(0,l.useState)(1),o=j[0],p=j[1],q=(0,l.useState)(10),r=q[0];q[1];var s=[];s=s.concat(null==e?void 0:e.slice(0,r*o)),(0,l.useEffect)(function(){var a=localStorage.getItem("tweets");if(null!==a){var b=JSON.parse(a),c=(0,i.Z)(e).concat((0,i.Z)(b)).sort(function(a,b){return b.createdAt-a.createdAt});f(c)}},[]);var t=function(){p(o+1)},u=function(a){var b=null==e?void 0:e.map(function(b){return a===b.createdAt?(0,h.Z)((0,g.Z)({},b),{likes:b.likes+1}):b});localStorage.setItem("tweets",JSON.stringify(b)),f(b)},v=function(a){var b=null==e?void 0:e.map(function(b){return a===b.createdAt?(0,h.Z)((0,g.Z)({},b),{dislikes:b.dislikes+1}):b});localStorage.setItem("tweets",JSON.stringify(b)),f(b)};return(0,d.jsxs)("div",{className:"Middle",children:[(null==s?void 0:s.length)&&s.map(function(a){return(0,d.jsxs)("div",{className:"tweet-container",children:[(0,d.jsx)("picture",{children:(0,d.jsx)("img",{src:(null==a?void 0:a.userProfile)||"https://imgs.search.brave.com/s_KtUzyCL39A07JRD-ZDGyewFjqaGaSaqWvvakNskpc/rs:fit:666:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/OHl1bnZyUUE4YTBN/WTVraHhoX2lRSGFG/UiZwaWQ9QXBp",alt:"profile picture",className:"profile-photo"})}),(0,d.jsxs)("div",{className:"tweet-details",children:[(0,d.jsxs)("h1",{className:"tweet-username",children:[null==a?void 0:a.username," ",(0,d.jsx)("span",{className:"tweet-time",children:new Date(null==a?void 0:a.createdAt).toLocaleString()})]}),(0,d.jsx)("p",{className:"tweet-message",children:null==a?void 0:a.message}),(null==a?void 0:a.file)&&(0,d.jsx)("div",{className:"tweet-image",children:(0,d.jsx)(k(),{src:null==a?void 0:a.file,alt:"post picture",layout:"fill"})}),(0,d.jsxs)("div",{className:"icon-container",children:[(0,d.jsxs)("div",{className:"tweet-icons",children:[(0,d.jsx)(m.VK,{className:"icon",onClick:function(){return v(a.createdAt)}}),null==a?void 0:a.dislikes]}),(0,d.jsxs)("div",{className:"tweet-icons",children:[(0,d.jsx)(m.nM7,{className:"icon",onClick:function(){return u(a.createdAt)}}),null==a?void 0:a.likes]})]})]})]},(0,n.Z)())}),(null==e?void 0:e.length)!==(null==s?void 0:s.length)?(0,d.jsx)("div",{style:{textAlign:"center",marginTop:"8px",marginBottom:"8px"},children:(0,d.jsx)("button",{onClick:t,type:"button",style:{cursor:"pointer"},children:"Load More"})}):(0,d.jsx)("div",{style:{textAlign:"center",marginTop:"8px",marginBottom:"8px"},children:"No more tweets found!"})]})},p=c(1664),q=c.n(p),r={src:"/_next/static/media/twitterLogo.8b38ea2b.png",height:1200,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEUBr/4CrvwDl9sDltoCltkCjMwCgLsCf7oCb6MCZJMBU3oCUnkBOFUBN1MALEMAHC0AGCgAEyEAEyAAEB0ADBUACxYAChMACRMACBIACBEABQwABQsABAoAAQEAAAEAAABQPh0WAAAAO0lEQVR42hXBhREAIQAEsXt3V3T775IhEda74wU5MouYt7WdMGIsm2LgEqFSvePF3XcLHyL7QcTnNEACzDEFv36LZvEAAAAASUVORK5CYII="},s=c(4713),t=function(){var a,b=(0,s.aF)(),c=b.user;return b.error,b.isLoading,(0,d.jsxs)("nav",{className:"Left",children:[(0,d.jsx)("div",{className:"hero-img",children:(0,d.jsx)(k(),{src:r,alt:"logo"})}),(0,d.jsx)(q(),{href:"/",children:(0,d.jsx)("div",{className:"header-buttons",children:"Home"})}),(0,d.jsx)(q(),{href:"/profile/".concat(null==c?void 0:null===(a=c.email)|| void 0===a?void 0:a.split("@")[0]),children:(0,d.jsx)("div",{className:"header-buttons",children:"Profile"})}),(0,d.jsx)(q(),{href:"/api/auth/logout",children:(0,d.jsx)("div",{className:"header-buttons",children:"Logout"})})]})},u=t,v=function(){return(0,d.jsx)("footer",{className:"Right",children:"Copyright 2022 Twitter Clone"})},w=v,x=c(2175),y=c(4231),z=c(9534),A=c(828),B=function(a){var b=a.label,c=(0,z.Z)(a,["label"]),e=(0,A.Z)((0,x.U$)(c),2),f=e[0];return e[1],(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("label",{htmlFor:c.id||c.name,children:b}),(0,d.jsx)("textarea",(0,h.Z)((0,g.Z)({className:"create-message"},f,c),{placeholder:"enter your text here.."}))]})},C=B,D=c(3750),E="https://imgs.search.brave.com/jcaF8tRD_eoNPU17tIdF3_L_uuDtfugd3aeESYC7zQ0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/VG1rSUgzLURtaWlK/cl9IZ05CaUhnSGFI/YSZwaWQ9QXBp",F=["image/jpeg","image/jpg","image/gif","video/mp4","image/png",],G=function(a){var b=a.setIsCreate,c=(0,l.useState)(),e=c[0],g=c[1],h=(0,l.useState)(""),j=h[0],k=h[1],m=(0,l.useState)(),n=m[0],o=m[1],p=(0,l.useState)(),q=p[0],r=p[1],t=(0,s.aF)().user,u=(0,l.useState)(),v=u[0],w=u[1];console.log("file",j),(0,l.useEffect)(function(){if(e){var a;(a=e,new Promise(function(b,c){var d=new FileReader;d.onload=function(){return b(d.result)},d.onerror=function(a){return c(a)},d.readAsDataURL(a)})).then(function(a){o(a)})}},[e]),(0,l.useEffect)(function(){console.log();var a=localStorage.getItem("tweets");null!==a&&w(JSON.parse(a))},[]);var z=y.Ry({message:y.Z_().max(200).required("Required."),file:y.nK().test("FILE_SIZE","Uploaded file is too big.",function(a){return a||a&&a.size<=7340032}).test("FILE_FORMAT","uploaded file has unsupported format",function(a){return a||a&&F.includes(null==a?void 0:a.type.split("/")[1])})});return(0,d.jsx)("div",{className:"main-container",children:(0,d.jsx)(x.J9,{initialValues:{message:"",file:new Blob},validationSchema:z,onSubmit:function(a){var c={message:a.message,file:n,username:null==t?void 0:t.name,userProfile:null==t?void 0:t.picture,createdAt:new Date().getTime(),likes:0,dislikes:0};(null==v?void 0:v.length)?localStorage.setItem("tweets",JSON.stringify((0,i.Z)(v).concat([c]))):localStorage.setItem("tweets",JSON.stringify([c])),b(!1),f().reload()},children:function(a){a.values;var c=a.setFieldValue;return(0,d.jsx)("div",{children:(0,d.jsxs)(x.l0,{className:"create-container","data-testid":"form",children:[(0,d.jsxs)("div",{className:"message-container",children:[(0,d.jsx)(C,{name:"message",type:"text-area",rows:"5",maxLength:"201"}),(0,d.jsx)("div",{className:"error",children:(0,d.jsx)(x.Bc,{name:"message"})})]}),(0,d.jsx)("input",{id:"input-file",name:"file",type:"file",hidden:!0,onChange:function(a){c("file",a.target.files[0]),g(a.target.files[0]),k(a.target.files[0].type),r(URL.createObjectURL(a.target.files[0]))}}),(0,d.jsxs)("div",{className:"image-container",children:["video/mp4"!==j?(0,d.jsx)("img",{src:q||E,alt:"preview image",className:"image-preview"}):(0,d.jsxs)("video",{width:"300",controls:!0,className:"image-preview",children:[(0,d.jsx)("source",{src:q||E,type:"video/mp4"}),"Your browser does not support HTML video."]}),(0,d.jsx)("div",{className:"error",children:(0,d.jsx)(x.Bc,{name:"file"})})]}),(0,d.jsx)("label",{htmlFor:"input-file",className:"fileIcon",children:(0,d.jsx)(D.QrK,{})}),(0,d.jsxs)("div",{className:"button-container",children:[(0,d.jsx)("button",{type:"button",className:"create-button",onClick:function(){return b(!1)},children:"Close"}),(0,d.jsx)("button",{type:"submit",className:"create-button",children:"Tweet"})]})]})})}})})},H=G,I=c(3149),J={title:"Home Page",keywords:"tweets, create Tweet, homepage, social",description:"From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",canonical:"/"},K=function(a){var b=a.userTweets,c=(0,l.useState)(!1),f=c[0],g=c[1],h=(0,s.aF)(),i=h.user,j=(h.error,h.isLoading),k=(0,e.useRouter)();return(0,l.useEffect)(function(){i||j||k.push("/api/auth/login")},[i,j]),(0,d.jsxs)("div",{children:[(0,d.jsx)(I.Z,{metaData:J}),i||j?(0,d.jsxs)(d.Fragment,{children:[f&&(0,d.jsx)(H,{setIsCreate:g}),(0,d.jsx)("div",{className:"tweet-toggle",onClick:function(){return g(!f)},"data-testid":"toggle-icon",children:"+"}),(0,d.jsxs)("div",{className:"Container",children:[(0,d.jsx)(u,{}),(0,d.jsx)(o,{isCreate:f,userTweets:b}),(0,d.jsx)(w,{})]})]}):(0,d.jsx)("h3",{className:"logIn",children:"You are not logged in. Redirecting to login..."})]})},L=!0,M=K}},function(a){a.O(0,[445,13,664,229,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])
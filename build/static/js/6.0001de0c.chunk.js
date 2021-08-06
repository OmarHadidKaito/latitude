(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{657:function(e,r,t){"use strict";var a=t(0);r.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},749:function(e,r,t){"use strict";t.r(r);var a=t(39),n=t(184),o=t(634),s=t(752),i=t(648),c=t(753),l=t(150),d=t(616),u=t(644),m=t(25),b=t.n(m),p=t(41),j=t(0),x=t(21),f=t(660),h=t(659),v=t(622),O=t(640),y=t(638),w=t(112),g=t(657),C=t(1),B=function(){var e,r=Object(g.a)(),t=Object(w.a)().passwordReset,a=Object(x.e)(),n=Object(x.f)(),s=Object(j.useRef)([]);return Object(j.useEffect)((function(){s.current=s.current.slice(0,6)}),[]),Object(C.jsx)(h.a,{initialValues:{code:["","","","","",""],email:(null===(e=a.state)||void 0===e?void 0:e.username)||"",password:"",passwordConfirm:"",submit:null},validationSchema:f.c().shape({code:f.a().of(f.e().required("Code is required")),email:f.e().email("Must be a valid email").max(255).required("Email is required"),password:f.e().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:f.e().oneOf([f.d("password"),null],"Passwords must match").required("Required")}),onSubmit:function(){var e=Object(p.a)(b.a.mark((function e(a,o){var s,i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.setErrors,i=o.setStatus,c=o.setSubmitting,e.prev=1,e.next=4,t(a.email,a.code.join(""),a.password);case 4:n("/authentication/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),r.current&&(i({success:!1}),s({submit:e.t0.message}),c(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(r,t){return e.apply(this,arguments)}}(),children:function(e){var r,t=e.errors,n=e.handleBlur,i=e.handleChange,c=e.handleSubmit,d=e.isSubmitting,u=e.setFieldValue,m=e.touched,b=e.values;return Object(C.jsxs)("form",{noValidate:!0,onSubmit:c,children:[(null===(r=a.state)||void 0===r?void 0:r.username)?Object(C.jsx)(v.a,{disabled:!0,fullWidth:!0,margin:"normal",value:a.state.username,variant:"outlined"}):Object(C.jsx)(v.a,{autoFocus:!0,error:Boolean(m.email&&t.email),fullWidth:!0,helperText:m.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:n,onChange:i,type:"email",value:b.email,variant:"outlined"}),Object(C.jsx)(l.a,{color:"textSecondary",sx:{mb:2,mt:3},variant:"subtitle2",children:"Verification code"}),Object(C.jsx)(o.a,{sx:{columnGap:"16px",display:"grid",gridTemplateColumns:"repeat(7, 1fr)",py:1},children:[1,2,3,4,5,6].map((function(e,r){return Object(C.jsx)(v.a,{error:Boolean(Array.isArray(m.code)&&6===m.code.length&&t.code),fullWidth:!0,inputRef:function(e){return s.current[r]=e},name:"code[".concat(r,"]"),onBlur:n,onKeyDown:function(e){if("ENTER"===e.code){if(b.code[r])return void u("code[".concat(r,"]"),"");if(r>0)return u("code[".concat(r,"]"),""),void s.current[r-1].focus()}Number.isInteger(parseInt(e.key,10))&&(u("code[".concat(r,"]"),e.key),r<5&&s.current[r+1].focus())},onPaste:function(e){var r=e.clipboardData.getData("text").split("");if(6===r.length){var t=!0;r.forEach((function(e){Number.isInteger(parseInt(e,10))||(t=!1)})),t&&(u("code",r),s.current[5].focus())}},value:b.code[r],sx:{display:"inline-block",textAlign:"center","& .MuiInputBase-input":{textAlign:"center"}},variant:"outlined"},"codeNumber-".concat(r))}))}),Boolean(Array.isArray(m.code)&&6===m.code.length&&t.code)&&Object(C.jsx)(O.a,{error:!0,sx:{mx:"14px"},children:Array.isArray(t.code)&&t.code.find((function(e){return void 0!==e}))}),Object(C.jsx)(v.a,{error:Boolean(m.password&&t.password),fullWidth:!0,helperText:m.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:n,onChange:i,type:"password",value:b.password,variant:"outlined"}),Object(C.jsx)(v.a,{error:Boolean(m.passwordConfirm&&t.passwordConfirm),fullWidth:!0,helperText:m.passwordConfirm&&t.passwordConfirm,label:"Password Confirmation",margin:"normal",name:"passwordConfirm",onBlur:n,onChange:i,type:"password",value:b.passwordConfirm,variant:"outlined"}),t.submit&&Object(C.jsx)(o.a,{sx:{mt:3},children:Object(C.jsx)(O.a,{error:!0,children:t.submit})}),Object(C.jsx)(o.a,{sx:{mt:3},children:Object(C.jsx)(y.a,{color:"primary",disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Reset Password"})})]})}})};r.default=function(){var e=Object(w.a)().platform;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(n.a,{children:Object(C.jsx)("title",{children:"Password Reset | Material Kit Pro"})}),Object(C.jsx)(o.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:Object(C.jsxs)(s.a,{maxWidth:"sm",sx:{py:10},children:[Object(C.jsx)(o.a,{sx:{display:"flex",justifyContent:"center",mb:8}}),Object(C.jsx)(i.a,{sx:{background:"none !important",boxShadow:"none !important"},children:Object(C.jsxs)(c.a,{sx:{display:"flex",flexDirection:"column",p:4},children:[Object(C.jsxs)(o.a,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(l.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Password Reset"}),Object(C.jsx)(l.a,{color:"textSecondary",variant:"body2",children:"Reset your account password using your code"})]}),Object(C.jsx)(o.a,{sx:{height:32,"& > img":{maxHeight:"100%",width:"auto"}}})]}),Object(C.jsx)(o.a,{sx:{flexGrow:1,mt:3},children:"Amplify"===e&&Object(C.jsx)(B,{})}),Object(C.jsx)(d.a,{sx:{my:3}}),"Amplify"===e&&Object(C.jsx)(u.a,{color:"textSecondary",component:a.b,to:"/authentication/password-recovery",variant:"body2",children:"Did you not receive the code?"})]})})]})})]})}}}]);
//# sourceMappingURL=6.0001de0c.chunk.js.map
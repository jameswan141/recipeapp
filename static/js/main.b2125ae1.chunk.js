(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{138:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(11),r=n.n(c),o=(n(92),n(7)),s=(n(93),n(13)),l=n(25),d=n(168),u=n(181),p=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},navContainer:{width:"100%",margin:"0 auto",height:"60px",backgroundColor:"rgb(0, 73, 114)",top:0,opacity:".8",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",display:"flex",justifyContent:"space-between",zIndex:100,fontSize:"1.8rem",alignItems:"center",position:"fixed"},link:{textDecoration:"none"},navItem:{textDecoration:"none",margin:"20px",color:"white"}})})),j=n(2),b=function(){var e=p();return Object(j.jsx)("nav",{className:e.navContainer,children:Object(j.jsx)(l.b,{className:e.link,to:"/",children:Object(j.jsx)("h1",{className:e.navItem,children:"Recipes App"})})})},O=n(12),m=n(20),x=n.n(m),h=n(171),g=n(180),f=n(175),v=n(174),C=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%",margin:"5px",fontSize:"4rem"},deleteButton:{fontSize:"14px"}})})),S=function(e){var t=a.a.useState(!1),n=Object(O.a)(t,2),i=n[0],c=n[1],r=C(),o=function(){c(!1)};return Object(j.jsxs)("div",{id:"dialog-container",children:[Object(j.jsx)(h.a,{className:r.deleteButton,variant:"contained",color:"secondary",onClick:function(){c(!0)},children:"DELETE"}),Object(j.jsxs)(g.a,{open:i,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(j.jsx)(v.a,{id:"alert-dialog-title",children:"Are you sure?"}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(h.a,{onClick:function(){x.a.delete("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/foodapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROOT_URL,"recipes/").concat(e.recipeId)).then((function(t){c(!1),e.getRecipes()})).catch((function(e){console.log("error - ",e)}))},color:"primary",children:"YES"}),Object(j.jsx)(h.a,{onClick:o,color:"secondary",autoFocus:!0,children:"NO"})]})]})]})},y=n(41),R=n(16),_=n(176),w=n(178),E=n(182),T=["oz","cps","tbs"],N=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},quantityInput:{width:"100px",margin:"3px"},nameInput:{width:"80%",margin:"3px"},unitInput:{width:"100px",margin:"3px"},inputContainer:{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center"}})}));function D(e){var t=Object(i.useState)({name:"",quantity:0,unit:"oz"}),n=Object(O.a)(t,2),a=n[0],c=n[1],r=N(),s=function(e){c(Object(o.a)(Object(o.a)({},a),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:r.inputContainer,children:[Object(j.jsx)(w.a,{label:"Name",variant:"outlined",name:"name",className:r.nameInput,onChange:s,value:a.name,type:"text"}),Object(j.jsx)(w.a,{className:r.quantityInput,label:"Quantity",variant:"outlined",name:"quantity",onChange:s,value:a.quantity,type:"number"}),Object(j.jsx)(w.a,{variant:"outlined",className:r.unitInput,select:!0,label:"Unit",name:"unit",value:a.unit,onChange:s,children:T.map((function(e){return Object(j.jsx)(E.a,{value:e,children:e},e)}))}),Object(j.jsx)(h.a,{onClick:function(){e.addIngredient(a),c({name:"",quantity:0,unit:"oz"})},children:"Add Ingredient"})]})}var I=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},descriptionInput:{width:"100%"},inputContainer:{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center"}})}));function A(e){var t=Object(i.useState)({description:""}),n=Object(O.a)(t,2),a=n[0],c=n[1],r=I();return Object(j.jsxs)("div",{className:r.inputContainer,children:[Object(j.jsx)(w.a,{label:"Instruction",variant:"outlined",name:"description",className:r.descriptionInput,onChange:function(e){c(Object(o.a)(Object(o.a)({},a),{},Object(R.a)({},e.target.name,e.target.value)))},value:a.description,type:"text"}),Object(j.jsx)(h.a,{onClick:function(){e.addInstruction(a),c({description:""})},children:"Add Instruction"})]})}var P=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%",margin:"5px",fontSize:"4rem"},form:{padding:"5px",display:"flex",flexDirection:"column",width:"500px",justifyContent:"center",alignItems:"center"},updateRecipeButton:{margin:"5px",color:"black",fontSize:"14px",border:"1px solid black",backgroundColor:"white"}})})),L=function(e){var t=a.a.useState(!1),n=Object(O.a)(t,2),i=n[0],c=n[1],r=a.a.useState({title:e.recipe.title,description:e.recipe.description,username:e.match.params.username,ingredients:e.recipe.ingredients,instructions:e.recipe.instructions?e.recipe.instructions:[{description:""}]}),s=Object(O.a)(r,2),l=s[0],d=s[1],u=P(),p=function(){c(!1)},b=function(e){e.preventDefault(),d(Object(o.a)(Object(o.a)({},l),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{id:"dialog-container",children:[Object(j.jsx)(h.a,{className:u.updateRecipeButton,variant:"outlined",color:"primary",onClick:function(){c(!0)},children:"UPDATE"}),Object(j.jsxs)(g.a,{open:i,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(j.jsx)(v.a,{id:"alert-dialog-title",children:"Submit a recipe below."}),Object(j.jsx)(_.a,{children:Object(j.jsxs)("form",{className:u.form,children:[Object(j.jsx)(w.a,{className:u.textField,id:"outlined-basic",label:"Title",name:"title",onChange:b,value:l.title,variant:"outlined"}),Object(j.jsx)(w.a,{className:u.textField,id:"outlined-basic",label:"Description",name:"description",onChange:b,value:l.description,variant:"outlined"}),Object(j.jsx)("h3",{children:"Enter ingredients below"}),l.ingredients.map((function(e){return Object(j.jsx)("p",{children:"".concat(e.name," - ").concat(e.quantity).concat(e.unit)})})),Object(j.jsx)(D,{addIngredient:function(e){d(Object(o.a)(Object(o.a)({},l),{},{ingredients:[].concat(Object(y.a)(l.ingredients),[e])}))}}),Object(j.jsx)("h3",{children:"Enter instructions below"}),l.instructions.map((function(e){return console.log("instruction in map - ",e.description),Object(j.jsx)("p",{children:e.description})})),Object(j.jsx)(A,{addInstruction:function(e){d(Object(o.a)(Object(o.a)({},l),{},{instructions:[].concat(Object(y.a)(l.instructions),[e])}))}})]})}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(h.a,{onClick:function(t){t.preventDefault(),x.a.put("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/foodapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROOT_URL,"recipes/").concat(e.recipe._id),l).then((function(t){d({title:"",description:"",username:e.match.params.username,ingredients:[{name:"Example",quantity:3,unit:"oz"}],instructions:[{description:""}]}),e.getRecipes(),p()})).catch((function(e){console.log("error - ",e)})),c(!1)},type:"submit",color:"primary",children:"UPDATE"}),Object(j.jsx)(h.a,{onClick:function(){d({title:"",description:"",username:e.match.params.username,ingredients:[{name:"Example",quantity:3,unit:"oz"}],instructions:[{description:""}]}),p()},color:"primary",autoFocus:!0,children:"CANCEL"})]})]})]})},W=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},recipeCardContainer:{border:"1px solid whitesmoke",borderRadius:"5px",minWidth:"300px",maxWidth:"400px",height:"400px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",display:"flex",alignItems:"center",flexDirection:"column",margin:"5px",fontSize:"1.4rem",position:"relative"},buttonContainer:{display:"flex",width:"100%",justifyContent:"space-around",alignItems:"center",position:"absolute",bottom:"20px"},thumbnailImage:{width:"100%",height:"200px",borderRadius:"5px 5px 0 0",objectFit:"cover"},thumbnailContainer:{width:"100%"}})})),k=function(e){var t=W();return Object(j.jsxs)("div",{className:t.recipeCardContainer,children:[Object(j.jsx)("div",{className:t.thumbnailContainer,children:Object(j.jsx)("img",{className:t.thumbnailImage,alt:"recipe in full color",src:e.recipe.thumbnailURL})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.recipe.title}),Object(j.jsx)("p",{children:e.recipe.description})]}),Object(j.jsxs)("div",{className:t.buttonContainer,children:[Object(j.jsx)(S,{getRecipes:e.getRecipes,recipeId:e.recipe._id}),Object(j.jsx)(L,Object(o.a)(Object(o.a)({},e),{},{getRecipes:e.getRecipes,recipe:e.recipe}))]})]})},U=n(177),F=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%",margin:"5px",fontSize:"4rem"},form:{padding:"5px",display:"flex",flexDirection:"column",width:"500px",justifyContent:"center",alignItems:"center"},addRecipeButton:{width:"200px",fontSize:"14px",border:"1px solid green",color:"white",backgroundColor:"green","&:hover":{backgroundColor:"darkgreen"}}})})),z=function(e){var t=a.a.useState(!1),n=Object(O.a)(t,2),i=n[0],c=n[1],r=a.a.useState({title:"",description:"",thumbnailURL:"",username:e.match.params.username,ingredients:[{name:"Example",quantity:3,unit:"oz"}],instructions:[{description:""}]}),s=Object(O.a)(r,2),l=s[0],d=s[1],u=F(),p=function(){c(!1)},b=function(e){e.preventDefault(),d(Object(o.a)(Object(o.a)({},l),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{id:"dialog-container",children:[Object(j.jsx)(h.a,{className:u.addRecipeButton,variant:"outlined",color:"primary",onClick:function(){c(!0)},children:"ADD RECIPE"}),Object(j.jsxs)(g.a,{open:i,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(j.jsx)(v.a,{id:"alert-dialog-title",children:"Submit a recipe below!"}),Object(j.jsx)(_.a,{children:Object(j.jsx)(U.a,{id:"alert-dialog-description",children:Object(j.jsxs)("form",{className:u.form,children:[Object(j.jsx)(w.a,{className:u.textField,id:"outlined-basic",label:"Title",name:"title",onChange:b,value:l.title,variant:"outlined"}),Object(j.jsx)(w.a,{className:u.textField,id:"outlined-basic",label:"Description",name:"description",onChange:b,value:l.description,variant:"outlined"}),Object(j.jsx)(w.a,{className:u.textField,id:"outlined-basic",label:"Thumbnail URL",name:"thumbnailURL",onChange:b,value:l.thumbnailURL,variant:"outlined"}),Object(j.jsx)("h3",{children:"Enter ingredients below"}),l.ingredients.map((function(e){return Object(j.jsx)("p",{children:"".concat(e.name," - ").concat(e.quantity).concat(e.unit)})})),Object(j.jsx)(D,{addIngredient:function(e){d(Object(o.a)(Object(o.a)({},l),{},{ingredients:[].concat(Object(y.a)(l.ingredients),[e])}))}}),Object(j.jsx)("h3",{children:"Enter instructions below"}),l.instructions.map((function(e){return Object(j.jsx)("p",{children:"".concat(e.description)})})),Object(j.jsx)(A,{addInstruction:function(e){d(Object(o.a)(Object(o.a)({},l),{},{instructions:[].concat(Object(y.a)(l.instructions),[e])}))}})]})})}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(h.a,{onClick:function(){x.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/foodapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROOT_URL,"recipes"),l).then((function(t){e.getRecipes(),d({title:"",description:"",thumbnailURL:"",username:localStorage.getItem("username"),ingredients:[{name:"Example",quantity:3,unit:"oz"}],instructions:[{description:""}]})})).catch((function(e){console.log("error - ",e)})),c(!1)},color:"primary",children:"POST"}),Object(j.jsx)(h.a,{onClick:function(){d({title:"",description:"",thumbnailURL:"",username:e.match.params.username,ingredients:[{name:"Example",quantity:3,unit:"oz"}],instructions:[{description:""}]}),p()},color:"primary",autoFocus:!0,children:"CANCEL"})]})]})]})},H=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},dashboardContainer:{marginTop:"80px",display:"flex",flexDirection:"column"},button:{width:"100%",maxWidth:"200px",height:"30px",margin:"20px 5px",fontSize:"1.3rem",borderRadius:"5px"},recipeCards:{display:"flex",margin:"10px",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}})})),K=function(e){var t=H(),n=Object(i.useState)([]),a=Object(O.a)(n,2),c=a[0],r=a[1],s=function(){var t=e.match.params.username;x.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/foodapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROOT_URL,"users/").concat(t,"/recipes")).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))};return Object(i.useEffect)((function(){s()}),[]),Object(j.jsxs)("div",{className:t.dashboardContainer,children:[Object(j.jsx)(z,Object(o.a)(Object(o.a)({},e),{},{getRecipes:s})),Object(j.jsx)("div",{className:t.recipeCards,children:c.map((function(t){return Object(j.jsx)(k,Object(o.a)(Object(o.a)({},e),{},{getRecipes:s,recipe:t}))}))})]})},q=n(53),B=n.n(q),V=Object(d.a)((function(e){return Object(u.a)({root:{display:"flex",flexWrap:"wrap"},loginContainer:{backgroundImage:"url('https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},loginCard:{display:"flex",flexDirection:"column",padding:"20px",border:"1px solid whitesmoke",justifyContent:"center",alignItems:"center",borderRadius:"5px",maxWidth:"400px",margin:"0 auto",height:"400px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",backgroundColor:"whitesmoke"},button:{height:"40px",margin:"20px",width:"200px",borderRadius:"5px",padding:"10px",color:"white",fontSize:"18px",backgroundColor:"rgb(0, 73, 114)",opacity:".8"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),height:"40px",width:"100%",margin:"10px",fontSize:"4rem"},form:{display:"flex",flexDirection:"column",margin:"10px 0",height:"100px",width:"300px",justifyContent:"center",alignItems:"center"},error:{color:"red"}})})),J=function(e){var t=Object(i.useState)({username:"",password:""}),n=Object(O.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(""),s=Object(O.a)(r,2),d=s[0],u=s[1],p=Object(i.useState)(!1),b=Object(O.a)(p,2),m=b[0],h=b[1],g=V(),f=function(e){e.preventDefault(),c(Object(o.a)(Object(o.a)({},a),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(j.jsx)("div",{className:g.loginContainer,children:Object(j.jsx)("div",{className:g.loginCard,children:Object(j.jsxs)("form",{className:g.form,onSubmit:function(t){t.preventDefault(),a.username.length>0&&a.password.length>0?(h(!0),x.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/foodapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROOT_URL,"auth/login"),a).then((function(t){c({username:"",password:""}),h(!0),u(""),e.history.push("/".concat(a.username))})).catch((function(e){console.log(e),u("An error occurred. Try again."),h(!1)}))):u("Provide your email and password.")},children:[Object(j.jsx)("h2",{children:"Log In!"}),d?Object(j.jsx)("p",{className:g.error,children:d}):null,Object(j.jsx)(w.a,{type:"text",value:a.username,className:g.textField,onChange:f,placeholder:"username",name:"username",label:"username",variant:"outlined"}),Object(j.jsx)(w.a,{type:"text",value:a.password,className:g.textField,onChange:f,placeholder:"password",label:"password",name:"password",variant:"outlined"}),Object(j.jsx)("button",{className:g.button,type:"submit",children:m?Object(j.jsx)(B.a,{type:"TailSpin",color:"white",height:20,width:20,timeout:3e3}):"Log In"}),Object(j.jsxs)("p",{children:["Not a user? ",Object(j.jsx)(l.b,{to:"/",children:"Sign Up"})]})]})})})},Q=function(e){var t=Object(i.useState)({username:"",password:""}),n=Object(O.a)(t,2),a=n[0],c=n[1],r=V(),s=Object(i.useState)(""),d=Object(O.a)(s,2),u=d[0],p=d[1],b=Object(i.useState)(!1),m=Object(O.a)(b,2),h=m[0],g=m[1],f=function(e){e.preventDefault(),c(Object(o.a)(Object(o.a)({},a),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(j.jsx)("div",{className:r.loginContainer,children:Object(j.jsx)("div",{className:r.loginCard,children:Object(j.jsxs)("form",{className:r.form,onSubmit:function(t){t.preventDefault(),a.username.length>0&&a.password.length>0?(g(!0),x.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/foodapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROOT_URL,"auth/signup"),a).then((function(t){c({username:"",password:""}),p(""),g(!1),e.history.push("/".concat(a.username))})).catch((function(e){p("An error occurred. Try again."),g(!1),console.log(e)}))):p("Provide your email and password.")},children:[Object(j.jsx)("h2",{children:"Sign Up!"}),u?Object(j.jsx)("p",{className:r.error,children:u}):null,Object(j.jsx)(w.a,{type:"text",value:a.username,className:r.textField,onChange:f,placeholder:"username",name:"username",label:"username",variant:"outlined"}),Object(j.jsx)(w.a,{type:"text",value:a.password,className:r.textField,onChange:f,placeholder:"password",label:"password",name:"password",variant:"outlined"}),Object(j.jsx)("button",{className:r.button,type:"submit",children:h?Object(j.jsx)(B.a,{type:"TailSpin",color:"white",height:20,width:20,timeout:3e3}):"Sign Up"}),Object(j.jsxs)("p",{children:["Already a user? ",Object(j.jsx)(l.b,{to:"/login",children:"Log In"})]})]})})})};var M=Object(s.f)((function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/login",render:function(e){return Object(j.jsx)(J,Object(o.a)({},e))}}),Object(j.jsx)(s.a,{path:"/:username",render:function(e){return Object(j.jsx)(K,Object(o.a)({},e))}}),Object(j.jsx)(s.a,{path:"/",render:function(e){return Object(j.jsx)(Q,Object(o.a)({},e))}})]})]})}));r.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))},92:function(e,t,n){},93:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.b2125ae1.chunk.js.map
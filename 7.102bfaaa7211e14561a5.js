(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Yj9t:function(t,n,e){"use strict";e.r(n),e.d(n,"AuthModule",function(){return N});var o=e("ofXK"),r=e("hctd"),i=e("3Pt+"),a=e("PCNd"),c=e("tyNb"),g=e("2kSh"),m=e("R0Ic");let s=Object(m.m)("fadeIn",[Object(m.j)("void",Object(m.k)({opacity:0})),Object(m.l)(":enter, :leave",[Object(m.e)(1200)])]);Object(m.m)("fadeIn",[Object(m.l)("* => *",[Object(m.h)(":enter",Object(m.k)({opacity:0})),Object(m.h)(":enter",Object(m.e)("1s ease-in",Object(m.k)({opacity:1})))])]),Object(m.m)("fadeUp",[Object(m.l)("* => *",[Object(m.h)("form",Object(m.k)({opacity:0}),{optional:!0}),Object(m.h)("form",Object(m.e)("1s ease-in",Object(m.g)([Object(m.k)({opacity:1,transform:"translateY(-75px)",offset:0}),Object(m.k)({opacity:.5,transform:"translateY(35px)",offset:.3}),Object(m.k)({opacity:1,transform:"translateY(0px)",offset:1})])))])]);var l=e("fXoL"),d=e("zguN"),b=e("Wp6s"),f=e("kmnG"),_=e("qFsG"),p=e("bTqV"),u=e("NFeN"),O=e("sYmb");function h(t,n){1&t&&(l.Ob(0,"mat-error",23),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"LOGIN.emailRequired"),l.vc)}function M(t,n){1&t&&(l.Tb(0,"mat-error"),l.Gc(1),l.fc(2,"translate"),l.Sb()),2&t&&(l.Bb(1),l.Ic(" ",l.gc(2,1,"LOGIN.emailValidated")," "))}function P(t,n){1&t&&(l.Ob(0,"mat-error",23),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"LOGIN.passwordRequired"),l.vc)}function C(t,n){1&t&&(l.Ob(0,"mat-error",23),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"LOGIN.passwordValidated6Characters"),l.vc)}function L(t,n){1&t&&(l.Ob(0,"mat-error",23),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"LOGIN.passwordValidated10Characters"),l.vc)}function x(t,n){1&t&&(l.Ob(0,"mat-error",26),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"REGISTER.FULLNAME.firstNameValidated"),l.vc)}function v(t,n){1&t&&(l.Ob(0,"mat-error",26),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"REGISTER.FULLNAME.lastNameValidated"),l.vc)}function S(t,n){1&t&&(l.Ob(0,"mat-error",26),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"REGISTER.EMAIL.emailRequired"),l.vc)}function T(t,n){1&t&&(l.Tb(0,"mat-error"),l.Gc(1),l.fc(2,"translate"),l.Sb()),2&t&&(l.Bb(1),l.Ic(" ",l.gc(2,1,"REGISTER.EMAIL.emailValidated")," "))}function w(t,n){1&t&&(l.Ob(0,"mat-error",26),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"REGISTER.PASSWORD.passwordRequired"),l.vc)}function R(t,n){1&t&&(l.Ob(0,"mat-error",26),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"REGISTER.PASSWORD.passwordValidated6Characters"),l.vc)}function E(t,n){1&t&&(l.Ob(0,"mat-error",26),l.fc(1,"translate")),2&t&&l.lc("innerHTML",l.gc(1,1,"REGISTER.PASSWORD.passwordValidated10Characters"),l.vc)}const I=[{path:"",children:[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"",component:(()=>{class t{constructor(t,n,e){this.formBuilder=t,this.router=n,this.authService=e,this.hide=!0,this.buildForm()}ngOnInit(){}navigateRegister(t){t.preventDefault(),this.router.navigate(["login/register"])}handleClick(t){t.preventDefault(),this.hide=!this.hide}login(t){if(t.preventDefault(),this.loginForm.valid){const t=this.loginForm.value;this.authService.logIn(t.email,t.password).then(t=>{console.log(t),Object(g.g)(t.user.displayName),this.router.navigate(["/home"])}).catch(t=>{const n=t.message;switch(t.code){case"auth/wrong-password":case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":default:Object(g.a)(n)}})}}buildForm(){this.loginForm=this.formBuilder.group({email:["",[i.o.required,i.o.email,i.o.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],password:["",[i.o.required,i.o.minLength(6),i.o.maxLength(10)]]})}get loginFormEmail(){return this.loginForm.get("email")}get loginFormPassword(){return this.loginForm.get("password")}}return t.\u0275fac=function(n){return new(n||t)(l.Nb(i.c),l.Nb(c.b),l.Nb(d.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-login"]],decls:46,vars:23,consts:[[1,"Login-container",2,"background-image","url('assets/images/backgroundLogo.png')"],[1,"animate__animated","animate__fadeInLeft"],[1,"container","Login-form","pt-2",3,"formGroup","ngSubmit"],[1,"Login-form__card1","container"],[1,"row","flex-column-reverse","flex-lg-row"],[1,"col-lg-6","col-10","align-self-center"],[1,"active","Login-form__content","container"],[1,"row"],[1,"col"],["name","mail-outline"],["appearance","fill",1,"Login-form__Email"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com"],[3,"innerHTML",4,"ngIf"],[4,"ngIf"],["name","lock-closed-outline"],["appearance","fill",1,"Login-form__password"],["formControlName","password","matInput","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"Login-form__button"],["type","submit",1,"button-primary"],["routerLink","register",1,"anchor-link","mt-2"],[1,"col-md-6","col-8","align-self-center"],["src","assets/images/logoOriginal.png","alt","logo",1,"logo-login"],[3,"innerHTML"]],template:function(t,n){1&t&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"form",2),l.ac("ngSubmit",function(t){return n.login(t)}),l.Tb(3,"mat-card",3),l.Tb(4,"div",4),l.Tb(5,"div",5),l.Tb(6,"div",6),l.Tb(7,"div",7),l.Tb(8,"div",8),l.Tb(9,"mat-card-content"),l.Tb(10,"div"),l.Ob(11,"ion-icon",9),l.Sb(),l.Tb(12,"mat-form-field",10),l.Tb(13,"mat-label"),l.Gc(14),l.fc(15,"translate"),l.Sb(),l.Ob(16,"input",11),l.Ec(17,h,2,3,"mat-error",12),l.Ec(18,M,3,3,"mat-error",13),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(19,"div",7),l.Tb(20,"div",8),l.Tb(21,"mat-card-content"),l.Tb(22,"div"),l.Ob(23,"ion-icon",14),l.Sb(),l.Tb(24,"mat-form-field",15),l.Tb(25,"mat-label"),l.Gc(26),l.fc(27,"translate"),l.Sb(),l.Ob(28,"input",16),l.Ec(29,P,2,3,"mat-error",12),l.Ec(30,C,2,3,"mat-error",12),l.Ec(31,L,2,3,"mat-error",12),l.Tb(32,"button",17),l.ac("click",function(t){return n.handleClick(t)}),l.Tb(33,"mat-icon"),l.Gc(34),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(35,"div",7),l.Tb(36,"div",8),l.Tb(37,"mat-card-actions",18),l.Tb(38,"button",19),l.Gc(39),l.fc(40,"translate"),l.Sb(),l.Tb(41,"a",20),l.Gc(42),l.fc(43,"translate"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(44,"div",21),l.Ob(45,"img",22),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()),2&t&&(l.lc("@fadeIn",void 0),l.Bb(2),l.lc("formGroup",n.loginForm),l.Bb(12),l.Hc(l.gc(15,15,"LOGIN.email")),l.Bb(3),l.lc("ngIf",n.loginFormEmail.dirty&&n.loginFormEmail.hasError("required")),l.Bb(1),l.lc("ngIf",n.loginFormEmail.hasError("pattern")),l.Bb(8),l.Ic("",l.gc(27,17,"LOGIN.password")," "),l.Bb(2),l.lc("type",n.hide?"password":"text"),l.Bb(1),l.lc("ngIf",n.loginFormPassword.dirty&&n.loginFormPassword.hasError("required")),l.Bb(1),l.lc("ngIf",n.loginFormPassword.hasError("minlength")),l.Bb(1),l.lc("ngIf",n.loginFormPassword.hasError("maxlength")),l.Bb(1),l.Cb("aria-label","Hide password")("aria-pressed",n.hide),l.Bb(2),l.Hc(n.hide?"visibility_off":"visibility"),l.Bb(5),l.Ic(" ",l.gc(40,19,"LOGIN.buttonLogin")," "),l.Bb(3),l.Hc(l.gc(43,21,"LOGIN.resisterLink")))},directives:[i.p,i.k,i.e,b.a,b.c,f.c,f.f,_.a,i.b,i.j,i.d,o.l,p.a,f.g,u.a,b.b,c.e,f.b],pipes:[O.c],styles:[".Login-container[_ngcontent-%COMP%]{background-color:#f4e4ca;height:100vh;width:100%;background-size:cover;margin:0;padding:0;background-position:50%;background-repeat:no-repeat}.Login-container[_ngcontent-%COMP%], .Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%], .Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]{padding:1em;margin:0;width:600px;height:300px;background:hsla(0,0%,100%,.7);border-radius:2em;border:1px solid rgba(108,117,125,.3686274509803922);box-shadow:50px 27px 15px 0 rgba(50,50,50,.44);flex-direction:column;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:20px}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;width:30px;background:#881919;height:51px;justify-content:center;align-items:center}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:1.5em}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   .Login-form__Email[_ngcontent-%COMP%]{width:232px}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   .Login-form__button[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   .Login-form__button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:5px;width:200px;height:40px}.logo-login[_ngcontent-%COMP%]{width:300px}@media screen and (max-width:768px){.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]{width:340px;height:640px}.logo-login[_ngcontent-%COMP%]{width:220px}}@media screen and (min-width:320px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2) and (orientation:portrait){.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]{width:310px;height:600px;border-radius:1em}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]{margin-top:70px}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50px;height:59px;font-size:20px}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   .Login-form__Email[_ngcontent-%COMP%], .Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   .Login-form__password[_ngcontent-%COMP%]{width:240px;font-size:16px;height:70px}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   .Login-form__button[_ngcontent-%COMP%]{font-size:1.2em}.Login-container[_ngcontent-%COMP%]   .Login-form[_ngcontent-%COMP%]   .Login-form__card1[_ngcontent-%COMP%]   .Login-form__content.active[_ngcontent-%COMP%]   .Login-form__button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:180px;margin-bottom:0;margin-top:10px}.logo-login[_ngcontent-%COMP%]{width:220px}}"],data:{animation:[s]}}),t})()},{path:"register",component:(()=>{class t{constructor(t,n,e){this.formBuilder=t,this.router=n,this.authService=e,this.buildForm()}ngOnInit(){}register(t){if(t.preventDefault(),this.registerForm.valid){const t=this.registerForm.value,n=t.firstName+" "+t.lastName;this.authService.createUser(t.email,t.password,n).then(()=>{Object(g.f)(n).then(()=>{this.authService.logOut(),this.router.navigate(["/login"])})}).catch(t=>{const n=t.message;switch(t.code){case"auth/email-already-in-use":case"auth/invalid-email":case"auth/operation-not-allowed":case"auth/weak-password":default:Object(g.a)(n)}})}}buildForm(){this.registerForm=this.formBuilder.group({email:["",[i.o.required,i.o.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],password:["",[i.o.required,i.o.minLength(6),i.o.maxLength(10)]],firstName:["",[i.o.required]],lastName:["",[i.o.required]]})}get registerFormLastName(){return this.registerForm.get("lastName")}get registerFormFirstName(){return this.registerForm.get("firstName")}get registerFormEmail(){return this.registerForm.get("email")}get registerFormPassword(){return this.registerForm.get("password")}}return t.\u0275fac=function(n){return new(n||t)(l.Nb(i.c),l.Nb(c.b),l.Nb(d.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["app-register"]],decls:65,vars:30,consts:[[1,"Register-container",2,"background-image","url('assets/images/backgroundLogo.png')"],[1,"Register-card","animate__animated","animate__fadeInRight"],[1,"container"],[1,"row","flex-column-reverse","flex-md-row"],[1,"col-12","col-md-6"],[3,"formGroup","ngSubmit"],[1,"Register-form","container"],[1,"row"],[1,"col-lg-6","col-6"],["name","person-outline"],[1,"input-fullName"],["formControlName","firstName","matInput","","type","text"],[3,"innerHTML",4,"ngIf"],["formControlName","lastName","matInput","","type","text"],[1,"col"],["name","mail-outline"],[1,"input-col"],["placeholder","Ex. pat@example.com","formControlName","email","matInput","","type","email"],[4,"ngIf"],["name","lock-closed-outline"],["placeholder","password","formControlName","password","matInput","","type","password"],[1,"Register-form__button"],["type","submit",1,"button-primary"],["routerLink","/login",1,"anchor-link","mt-2"],[1,"col-md-6","col-12","Register-form__logo"],["src","assets/images/logoOriginalSolo.png","alt","logo"],[3,"innerHTML"]],template:function(t,n){1&t&&(l.Tb(0,"div",0),l.Tb(1,"mat-card",1),l.Tb(2,"div",2),l.Tb(3,"div",3),l.Tb(4,"div",4),l.Tb(5,"form",5),l.ac("ngSubmit",function(t){return n.register(t)}),l.Tb(6,"mat-card"),l.Tb(7,"mat-card-header"),l.Tb(8,"mat-card-title"),l.Gc(9),l.fc(10,"translate"),l.Sb(),l.Sb(),l.Tb(11,"mat-card-content",6),l.Tb(12,"div",7),l.Tb(13,"div",8),l.Tb(14,"mat-card-content"),l.Tb(15,"div"),l.Ob(16,"ion-icon",9),l.Sb(),l.Tb(17,"mat-form-field",10),l.Tb(18,"mat-label"),l.Gc(19),l.fc(20,"translate"),l.Sb(),l.Ob(21,"input",11),l.Ec(22,x,2,3,"mat-error",12),l.Sb(),l.Sb(),l.Sb(),l.Tb(23,"div",8),l.Tb(24,"mat-card-content"),l.Tb(25,"mat-form-field",10),l.Tb(26,"mat-label"),l.Gc(27),l.fc(28,"translate"),l.Sb(),l.Ob(29,"input",13),l.Ec(30,v,2,3,"mat-error",12),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(31,"div",7),l.Tb(32,"div",14),l.Tb(33,"mat-card-content"),l.Tb(34,"div"),l.Ob(35,"ion-icon",15),l.Sb(),l.Tb(36,"mat-form-field",16),l.Tb(37,"mat-label"),l.Gc(38),l.fc(39,"translate"),l.Sb(),l.Ob(40,"input",17),l.Ec(41,S,2,3,"mat-error",12),l.Ec(42,T,3,3,"mat-error",18),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(43,"div",7),l.Tb(44,"div",14),l.Tb(45,"mat-card-content"),l.Tb(46,"div"),l.Ob(47,"ion-icon",19),l.Sb(),l.Tb(48,"mat-form-field",16),l.Tb(49,"mat-label"),l.Gc(50),l.fc(51,"translate"),l.Sb(),l.Ob(52,"input",20),l.Ec(53,w,2,3,"mat-error",12),l.Ec(54,R,2,3,"mat-error",12),l.Ec(55,E,2,3,"mat-error",12),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(56,"mat-card-actions",21),l.Tb(57,"button",22),l.Gc(58),l.fc(59,"translate"),l.Sb(),l.Tb(60,"a",23),l.Gc(61),l.fc(62,"translate"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(63,"div",24),l.Ob(64,"img",25),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()),2&t&&(l.lc("@fadeIn",void 0),l.Bb(5),l.lc("formGroup",n.registerForm),l.Bb(4),l.Hc(l.gc(10,16,"REGISTER.title")),l.Bb(10),l.Hc(l.gc(20,18,"REGISTER.FULLNAME.firstName")),l.Bb(3),l.lc("ngIf",n.registerFormFirstName.dirty&&n.registerFormFirstName.hasError("required")),l.Bb(5),l.Hc(l.gc(28,20,"REGISTER.FULLNAME.lastName")),l.Bb(3),l.lc("ngIf",n.registerFormLastName.dirty&&n.registerFormLastName.hasError("required")),l.Bb(8),l.Hc(l.gc(39,22,"REGISTER.EMAIL.email")),l.Bb(3),l.lc("ngIf",n.registerFormEmail.dirty&&n.registerFormEmail.hasError("required")),l.Bb(1),l.lc("ngIf",n.registerFormEmail.hasError("pattern")),l.Bb(8),l.Hc(l.gc(51,24,"REGISTER.PASSWORD.password")),l.Bb(3),l.lc("ngIf",n.registerFormPassword.dirty&&n.registerFormPassword.hasError("required")),l.Bb(1),l.lc("ngIf",n.registerFormPassword.hasError("minlength")),l.Bb(1),l.lc("ngIf",n.registerFormPassword.hasError("maxlength")),l.Bb(3),l.Ic(" ",l.gc(59,26,"REGISTER.buttonRegister")," "),l.Bb(3),l.Hc(l.gc(62,28,"REGISTER.loginlink")))},directives:[b.a,i.p,i.k,i.e,b.d,b.f,b.c,f.c,f.f,i.b,_.a,i.j,i.d,o.l,b.b,c.e,f.b],pipes:[O.c],styles:[".Register-container[_ngcontent-%COMP%]{background-color:#f4e4ca;background-image:url(https://i.imgur.com/XNOXHzw.png);height:100vh;width:100%;padding:0;background-position:50%}.Register-container[_ngcontent-%COMP%], .Register-container[_ngcontent-%COMP%]   .Register-card[_ngcontent-%COMP%]{background-size:cover;display:flex;margin:0;background-repeat:no-repeat;justify-content:center;align-items:center}.Register-container[_ngcontent-%COMP%]   .Register-card[_ngcontent-%COMP%]{background-image:url(https://i.pinimg.com/736x/30/c1/86/30c186ac479ada24b401baee76187153.jpg);width:700px;height:450px;border-radius:2em;border:1px solid #000;box-shadow:50px 27px 15px 0 rgba(50,50,50,.44);flex-direction:column}.Register-container[_ngcontent-%COMP%]   .Register-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;height:400px;background:hsla(0,0%,88.2%,.8)}.Register-form[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex}.Register-form[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:5px}.Register-form[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#881919;font-size:2em}.Register-form__logo[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;right:1em}.Register-form__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:260px}.Register-form__button[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:200px;height:65px}.Register-form__button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:5px;width:100%;height:100%}.input-fullName[_ngcontent-%COMP%]{width:95px}@media screen and (max-width:425px){.Register-container[_ngcontent-%COMP%]   .Register-card[_ngcontent-%COMP%]{background-image:url(https://www.crushpixel.com/big-static14/preview4/bakery-background-bread-assortment-top-1719438.jpg);background-position:50%;width:350px;border-radius:1em;height:634px;padding:20px 0 0}.Register-container[_ngcontent-%COMP%]   .Register-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{padding:0;height:400px}.Register-container[_ngcontent-%COMP%]   .Register-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .Register-form[_ngcontent-%COMP%]{padding-right:0;padding-left:5px;margin-bottom:10px;height:244px}.Register-container[_ngcontent-%COMP%]   .Register-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .Register-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:18px}.input-fullName[_ngcontent-%COMP%]{width:120px;font-size:18px}.input-col[_ngcontent-%COMP%]{font-size:18px;width:240px}.Register-form__logo[_ngcontent-%COMP%]{right:0}.Register-form__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:338px;position:relative;bottom:30px;left:0}form[_ngcontent-%COMP%]{position:relative;bottom:80px}.Register-form__button[_ngcontent-%COMP%]{width:211px;height:80px;font-size:18px}}"],data:{animation:[s]}}),t})()}]}];let y=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(n){return new(n||t)},imports:[[c.f.forChild(I)],c.f]}),t})(),N=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(n){return new(n||t)},imports:[[o.c,y,r.a,i.n,a.a,O.b]]}),t})()}}]);
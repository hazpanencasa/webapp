(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{bmWP:function(t,n,o){"use strict";o.r(n),o.d(n,"ProductionsModule",function(){return x});var e=o("ofXK"),i=o("6wgi"),r=o("3Pt+"),c=o("PCNd"),a=o("tyNb"),d=o("fXoL"),s=o("bv9b");function b(t,n){if(1&t&&(d.Tb(0,"tbody",14),d.Tb(1,"tr"),d.Tb(2,"td"),d.Dc(3),d.Sb(),d.Tb(4,"td"),d.Dc(5),d.Sb(),d.Tb(6,"td",16),d.Dc(7),d.Sb(),d.Tb(8,"td"),d.Dc(9,"gramos"),d.Sb(),d.Sb(),d.Tb(10,"tr",17),d.Tb(11,"td",18),d.Ob(12,"mat-progress-bar",19),d.Sb(),d.Sb(),d.Sb()),2&t){const t=n.$implicit;d.Bb(3),d.Ec(t.ingredient.name),d.Bb(2),d.Ec(t.percentage),d.Bb(2),d.Ec(t.ingredient.hydration),d.Bb(5),d.mc("value",t.percentage)}}function p(t,n){if(1&t&&(d.Rb(0),d.Tb(1,"section",1),d.Tb(2,"div",2),d.Tb(3,"div",3),d.Tb(4,"div",4),d.Tb(5,"h2",5),d.Dc(6),d.Sb(),d.Tb(7,"div",6),d.Tb(8,"div",7),d.Ob(9,"img",8),d.Sb(),d.Tb(10,"div",9),d.Tb(11,"p",10),d.Dc(12," Some quick example text to build on the card title and make up the bulk of the card's content. "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(13,"div",11),d.Tb(14,"h2"),d.Tb(15,"em"),d.Dc(16,"Ingredients"),d.Sb(),d.Sb(),d.Tb(17,"div",12),d.Tb(18,"table"),d.Tb(19,"thead"),d.Tb(20,"tr"),d.Tb(21,"th"),d.Dc(22,"Name"),d.Sb(),d.Tb(23,"th"),d.Dc(24,"%"),d.Sb(),d.Tb(25,"th"),d.Dc(26,"Hydration"),d.Sb(),d.Tb(27,"th"),d.Dc(28,"gr"),d.Sb(),d.Sb(),d.Sb(),d.Bc(29,b,13,4,"tbody",13),d.Tb(30,"tr",14),d.Tb(31,"td"),d.Dc(32,"Total"),d.Sb(),d.Tb(33,"td",15),d.Dc(34),d.Sb(),d.Tb(35,"td"),d.Dc(36,"resultado hidratacion%"),d.Sb(),d.Tb(37,"td"),d.Dc(38),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Qb()),2&t){const t=d.ec();d.Bb(6),d.Fc(" ",t.production.formulas[0].formula.description," "),d.Bb(23),d.lc("ngForOf",t.production.formulas[0].formula.ingredients),d.Bb(5),d.Fc("",t.resultPercent," %"),d.Bb(4),d.Fc("",t.production.formulas[0].unit_weight,"gr")}}let g=(()=>{class t{constructor(t,n){this.productionsService=t,this.route=n,this.arrayPercent=[],this.resultPercent=0,this.resultGrams=0}ngOnInit(){this.route.params.subscribe(t=>{this.fetchProduction(t.id)})}fetchProduction(t){this.productionsService.getProduction(t).subscribe(t=>{this.production=t,t.formulas[0].formula.ingredients.forEach(t=>{this.arrayPercent.push(t.percentage)});const n=this.arrayPercent.reduce((t,n)=>t+n,0);this.resultPercent=n.toFixed(1)})}}return t.\u0275fac=function(n){return new(n||t)(d.Nb(i.a),d.Nb(a.a))},t.\u0275cmp=d.Hb({type:t,selectors:[["app-production-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"Info-section1","mt-4"],[1,"container"],[1,"row"],[1,"col-md-4"],[1,"text-center"],[1,"card",2,"width","20rem"],[1,"card-img",2,"background-image","url(assets/images/backgroundLogo.png)"],["src","assets/images/panCanilla.png","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-text"],[1,"col-md-8"],[1,"container-table"],["class","table-content",4,"ngFor","ngForOf"],[1,"table-content"],[1,"text-left"],["colspan","1"],[1,"table-row__barprogress"],["colspan","4"],["mode","determinate",3,"value"]],template:function(t,n){1&t&&d.Bc(0,p,39,4,"ng-container",0),2&t&&d.lc("ngIf",n.production)},directives:[e.l,e.k,s.a],styles:[".card-img[_ngcontent-%COMP%]{background-size:contain;background-position:50%}.container-table[_ngcontent-%COMP%]{padding:1em 0}table[_ngcontent-%COMP%]{box-shadow:16px 9px 20px 4px rgba(0,0,0,.23);width:700px;border-collapse:collapse;overflow:hidden;box-shadow:0 0 20px rgba(0,0,0,.1)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:15px;color:#000}th[_ngcontent-%COMP%]{text-align:left}th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]{color:#fff}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#881919}.table-content[_ngcontent-%COMP%]{background:#eddec8;padding-bottom:10px}.table-row__barprogress[_ngcontent-%COMP%]{border:none}.table-row__barprogress[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0;border-bottom:none}.table-row__barprogress[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{width:95%;margin:0 auto}.table-row__barprogress[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{position:relative}"]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d.Hb({type:t,selectors:[["app-banner"]],decls:8,vars:0,consts:[["id","parallax",1,"Banner","parallax"],[1,"overlay"],[1,"Banner-section__main"],[1,"container"],[1,"row","align-items-center"],[1,"col"],[1,"text-center","primary-title","Banner-section__main-title"]],template:function(t,n){1&t&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"div",3),d.Tb(4,"div",4),d.Tb(5,"div",5),d.Tb(6,"h1",6),d.Dc(7," Productions "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb())},styles:[".parallax[_ngcontent-%COMP%]{background:#fff fixed no-repeat 50% 50%;background-size:cover}#parallax[_ngcontent-%COMP%]{position:relative;background-image:url(https://i.imgur.com/FRR0u7D.png)}#parallax[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{z-index:1;position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.5);color:#fff;display:flex;align-items:center;padding-left:10px}.Banner[_ngcontent-%COMP%]{height:30vh}.Banner-section__main[_ngcontent-%COMP%]{display:flex;align-items:center}.Banner-section__main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .Banner-section__main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{height:100%}"]}),t})();var u=o("kmnG"),f=o("qFsG"),_=o("M9IT"),m=o("UhSo"),h=o("40bK");function P(t,n){if(1&t&&(d.Tb(0,"div",9),d.Tb(1,"div",10),d.Tb(2,"div",11),d.Ob(3,"img",12),d.Sb(),d.Tb(4,"div",13),d.Tb(5,"div",14),d.Tb(6,"h3"),d.Dc(7),d.Sb(),d.Tb(8,"span"),d.Dc(9,"gr"),d.Sb(),d.Sb(),d.Sb(),d.Tb(10,"div",15),d.Tb(11,"h3"),d.Dc(12),d.Sb(),d.Tb(13,"span"),d.Dc(14,"Unit"),d.Sb(),d.Sb(),d.Tb(15,"div",16),d.Tb(16,"button",17),d.Dc(17," See Details "),d.Sb(),d.Sb(),d.Tb(18,"div",18),d.Tb(19,"h3"),d.Dc(20),d.Sb(),d.Tb(21,"p"),d.Dc(22),d.Sb(),d.Sb(),d.Sb(),d.Sb()),2&t){const t=n.$implicit;d.Bb(7),d.Ec(t.formulas[0].formula.unit_weight),d.Bb(5),d.Ec(t.formulas[0].formula.units),d.Bb(4),d.mc("routerLink",t.id),d.Bb(4),d.Ec(t.name),d.Bb(2),d.Fc(" ",t.formulas[0].formula.description?t.formulas[0].formula.description:"Learn more about this product by pressing click"," ")}}function O(t,n){if(1&t){const t=d.Ub();d.Rb(0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"div",3),d.Tb(4,"mat-form-field"),d.Tb(5,"mat-label"),d.Dc(6,"Search a production"),d.Sb(),d.Tb(7,"input",4),d.ac("ngModelChange",function(n){return d.tc(t),d.ec().filterProduction=n}),d.Sb(),d.Sb(),d.Sb(),d.Tb(8,"div",5),d.Tb(9,"mat-paginator",6),d.ac("page",function(n){return d.tc(t),d.ec().onPageChange(n)}),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(10,"div",7),d.Bc(11,P,23,5,"div",8),d.fc(12,"filter"),d.fc(13,"paginate"),d.Sb(),d.Qb()}if(2&t){const t=d.ec();d.Bb(7),d.lc("ngModel",t.filterProduction),d.Bb(2),d.lc("length",t.productions.length)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions),d.Bb(2),d.lc("ngForOf",d.hc(12,5,d.ic(13,8,t.productions,t.pageSize,t.pageNumber),t.filterProduction))}}const S=[{path:"",component:(()=>{class t{constructor(t){this.productionsService=t,this.filterProduction="",this.pageSizeOptions=[3,6,9],this.pageSize=9,this.pageNumber=1}ngOnInit(){this.fetchProductions()}fetchProductions(){this.productionsService.getProductions().subscribe(t=>{this.productions=t})}onPageChange(t){this.pageSize=t.pageSize,this.pageNumber=t.pageIndex+1}}return t.\u0275fac=function(n){return new(n||t)(d.Nb(i.a))},t.\u0275cmp=d.Hb({type:t,selectors:[["app-productions"]],decls:2,vars:1,consts:[[4,"ngIf"],[1,"container","pt-2"],[1,"row"],[1,"col-3"],["matInput","","placeholder","Ex. Pan Campesino","name","filterProduction",3,"ngModel","ngModelChange"],[1,"col-5","offset-md-3"],[1,"p-0",3,"length","pageSize","pageSizeOptions","page"],[1,"grid-container"],["class","production-card production-card_active","id","cardProduction",4,"ngFor","ngForOf"],["id","cardProduction",1,"production-card","production-card_active"],[1,"production_photo"],[1,"production_img_back"],["src","assets/images/img-info1.png","alt",""],[1,"production_mins"],[1,"sub_mins"],[1,"production_servings"],[1,"production-action"],[1,"button-primary",3,"routerLink"],[1,"production_detalles"]],template:function(t,n){1&t&&(d.Ob(0,"app-banner"),d.Bc(1,O,14,12,"ng-container",0)),2&t&&(d.Bb(1),d.lc("ngIf",n.productions))},directives:[l,e.l,u.c,u.f,f.a,r.b,r.j,r.m,_.a,e.k,a.c],pipes:[m.a,h.a],styles:['.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,320px);grid-gap:25px;padding:20px;background:linear-gradient(135deg,#fbfaf6 9%,#d4cebf 74%,#d4cebf 0,#d4cebf);justify-content:center}.production-card[_ngcontent-%COMP%]{position:relative;transition:all .5s;transition-delay:.7s}.production_photo[_ngcontent-%COMP%]{position:relative;width:300px;height:440px;overflow:hidden;background-color:#eee;border-radius:5px;float:left;z-index:2;transition:all .5s;box-shadow:1px 1px 20px -5px rgba(0,0,0,.5)}.production_img_back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;overflow:hidden;border-radius:5px}.production_img_back[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;opacity:.7;transition:all .5s;transition:all 1s}.production_img_back[_ngcontent-%COMP%]:hover > img[_ngcontent-%COMP%]{transform:scale(1.5)}.sub_mins[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;float:left;width:60px;height:60px;background-color:#881919;border-radius:50%;margin:16px 16px 0;opacity:0;transition:all .5s;transition-delay:1s}.sub_mins[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-size:1em;margin-top:7px;margin-bottom:-5px;color:#fff}.sub_mins[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:1em;font-weight:700;color:#fff}.production_servings[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;float:left;width:60px;height:60px;background-color:#881919;border-radius:50%;margin:16px;opacity:0;transition:all .5s;transition-delay:.7s}.production_servings[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-size:1em;margin-top:5px;margin-bottom:-5px;color:#fff}.production_servings[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:1em;font-weight:700;color:#fff}.production_detalles[_ngcontent-%COMP%]{position:absolute;border-radius:5px;background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.65) 68%,rgba(0,0,0,.65) 100%,rgba(0,0,0,.65) 101%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000",endColorstr="#a6000000",GradientType=0);width:100%;transition:all .5s;transition-delay:.3s;padding-left:15px;padding-bottom:10px}.production_detalles[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:50px;color:#fff;font-size:24px}.production_detalles[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#fff;font-size:14px}.production-action[_ngcontent-%COMP%]{position:absolute;left:70%;top:6%}.production-card_active[_ngcontent-%COMP%] > .cont_text_ingredients[_ngcontent-%COMP%] > .cont_btn_open_dets[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{transform:rotate(0deg)}.production-card_active[_ngcontent-%COMP%] > .cont_text_ingredients[_ngcontent-%COMP%]{width:410px;left:285px;z-index:1;box-shadow:15px 20px 70px -5px rgba(0,0,0,.2)}.production-card_active[_ngcontent-%COMP%] > .production_photo[_ngcontent-%COMP%]{box-shadow:25px 10px 70px -5px rgba(0,0,0,.3)}.production-card_active[_ngcontent-%COMP%] > .production_photo[_ngcontent-%COMP%] > .production_mins[_ngcontent-%COMP%] > .sub_mins[_ngcontent-%COMP%], .production-card_active[_ngcontent-%COMP%] > .production_photo[_ngcontent-%COMP%] > .production_servings[_ngcontent-%COMP%]{opacity:1}.production-card_active[_ngcontent-%COMP%] > .production_photo[_ngcontent-%COMP%] > .production_detalles[_ngcontent-%COMP%]{bottom:0}']}),t})()},{path:":id",component:g}];let C=(()=>{class t{}return t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({factory:function(n){return new(n||t)},imports:[[a.f.forChild(S)],a.f]}),t})(),x=(()=>{class t{}return t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({factory:function(n){return new(n||t)},providers:[i.a],imports:[[e.c,C,r.f,c.a]]}),t})()}}]);
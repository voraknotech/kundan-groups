webpackJsonp([1],{"pdP+":function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t("LMZF"),e=t("UHIZ"),o=t("gOac"),i=(t("YWHM"),function(){function l(l,n){this.catalogService=l,this.route=n}return l.prototype.ngOnInit=function(){var l=this;this.queryParamsSubscription=this.route.queryParams.subscribe(function(n){l.brand=n.brand,l.catalogServiceSubscription=l.brand?l.catalogService.getProductsByBrand(l.brand).subscribe(function(n){l.products=n}):l.catalogService.getCatalog().subscribe(function(n){l.products=n.products})}),this.fileDetails=[new o.a("https://drive.google.com/open?id=1d-C8JMkPVzucekBHUEUVKbsmDSp2yE5C","Padlocks_Freedom","btn btn-primary"),new o.a("https://drive.google.com/open?id=1aiX7zrjQzX0FXG9J8ExCGZ4cTHRMvfR2","Padlocks_Kadi-Tala_6levers","btn btn-dark"),new o.a("https://drive.google.com/open?id=1pZPeT5Au_lTpdNJqcrBnoz5SflAygOsB","Padlocks_Myloc_SmallWonderSeries","btn btn-light"),new o.a("https://drive.google.com/open?id=1kH1FivzOcbtOOrThi9-h5CTwuX9gk-sx","Padlocks_Navtal","btn btn-danger"),new o.a("https://drive.google.com/open?id=1MONe2UH_6F1hLuICLM5c2knROBy0B4Tn","Padlocks_SherlockSolidBrass"),new o.a("https://drive.google.com/open?id=1isXSiu_OZNHPISqNS9S7w5IgjAgcov8Y","Rakshak",null)]},l.prototype.ngOnDestroy=function(){this.catalogServiceSubscription.unsubscribe(),this.queryParamsSubscription.unsubscribe()},l}()),r=function(){},c=function(){},a=t("Un6q"),s=t("3umE"),_=u._0({encapsulation:0,styles:[['.container[_ngcontent-%COMP%]   .hover-option4[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding:30px}\r\n\r\n#carousel[_ngcontent-%COMP%]{margin-top:20px}#carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:-webkit-zoom-in;cursor:zoom-in}.item[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{width:25%;cursor:pointer;float:left;padding:.8rem}.item[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .qodef-container-inner[_ngcontent-%COMP%]{width:100%}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0 0 25px;padding:0;letter-spacing:0;font-weight:400}h1[_ngcontent-%COMP%]{font-size:70px;line-height:70px}h2[_ngcontent-%COMP%]{font-size:55px;line-height:60px}h3[_ngcontent-%COMP%]{font-size:48px;line-height:54px}h4[_ngcontent-%COMP%]{font-size:40px;line-height:46px}h5[_ngcontent-%COMP%]{font-size:32px;line-height:40px}h6[_ngcontent-%COMP%]{font-size:25px;line-height:30px}\r\n\r\n.text-extra-small[_ngcontent-%COMP%]{font-size:11px;line-height:14px}.text-small[_ngcontent-%COMP%]{font-size:12px;line-height:20px}.text-medium[_ngcontent-%COMP%]{font-size:16px;line-height:23px}.text-large[_ngcontent-%COMP%]{font-size:18px;line-height:26px}.text-extra-large[_ngcontent-%COMP%]{font-size:20px;line-height:26px}.title-large[_ngcontent-%COMP%]{font-size:100px;line-height:95px}.title-extra-large[_ngcontent-%COMP%]{font-size:130px;line-height:120px}\r\n\r\n.text-white[_ngcontent-%COMP%]{color:#fff}.text-black[_ngcontent-%COMP%]{color:#000}.text-extra-dark-gray[_ngcontent-%COMP%]{color:#232323}.text-dark-gray[_ngcontent-%COMP%]{color:#626262}.text-extra-medium-gray[_ngcontent-%COMP%]{color:#757575}.text-medium-gray[_ngcontent-%COMP%]{color:#939393}.text-extra-light-gray[_ngcontent-%COMP%]{color:#b7b7b7}.text-light-gray[_ngcontent-%COMP%]{color:#d6d5d5}.text-very-light-gray[_ngcontent-%COMP%]{color:#ededed}.text-deep-pink[_ngcontent-%COMP%]{color:#007ba7}\r\n\r\n.first-letter[_ngcontent-%COMP%]{font-size:50px;line-height:auto;padding:10px 0}.first-letter[_ngcontent-%COMP%], .first-letter-big[_ngcontent-%COMP%]{float:left;margin:0 20px 0 0;text-align:center;font-weight:600}.first-letter-big[_ngcontent-%COMP%]{font-size:110px;line-height:110px;padding:0 8px;position:relative}.first-letter-big[_ngcontent-%COMP%]:before{position:absolute;border-bottom:1px solid;content:"";display:block;width:100%;top:55%;left:0}.first-letter-block[_ngcontent-%COMP%]{font-size:30px;height:55px;line-height:22px;padding:15px 0;width:55px;font-weight:500;margin-top:5px}.first-letter-block-round[_ngcontent-%COMP%]{border-radius:6px;border:1px solid}.first-letter-round[_ngcontent-%COMP%]{border-radius:50%;font-size:35px;padding:15px;width:65px;height:65px;line-height:32px}.product-heading[_ngcontent-%COMP%]{background-color:#000;color:#fff}.product-page-heading[_ngcontent-%COMP%]{width:100%;padding:"";margin:""}.home-route[_ngcontent-%COMP%]{color:#f4b201}.banner-style2[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{position:relative;overflow:hidden}.banner-style2[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   .banner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.4}']],data:{}});function g(l){return u._22(0,[(l()(),u._2(0,0,null,null,8,"span",[["class","text-uppercase text-extra-small alt-font letter-spacing-3"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(2,0,null,null,5,"a",[["class","home-route"],["routerLink","/brands"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u._11(l,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u._1(3,671744,[[4,4]],0,e.n,[e.l,e.a,a.h],{routerLink:[0,"routerLink"]},null),u._1(4,1720320,null,2,e.m,[e.l,u.k,u.B,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u._18(603979776,3,{links:1}),u._18(603979776,4,{linksWithHrefs:1}),(l()(),u._20(-1,null,["/ Brands"])),(l()(),u._20(-1,null,["\n                "]))],function(l,n){l(n,3,0,"/brands"),l(n,4,0,"active")},function(l,n){l(n,2,0,u._11(n,3).target,u._11(n,3).href)})}function d(l){return u._22(0,[(l()(),u._2(0,0,null,null,33,"div",[["class","col-lg-3 col-md-4 col-sm-6 col-xs-12 banner-style2 sm-margin-30px-bottom"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                "])),(l()(),u._2(2,0,null,null,12,"figure",[],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(4,0,null,null,9,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u._11(l,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u._1(5,671744,[[6,4]],0,e.n,[e.l,e.a,a.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),u._15(6,{brand:0}),u._13(7,2),u._1(8,1720320,null,2,e.m,[e.l,u.k,u.B,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u._18(603979776,5,{links:1}),u._18(603979776,6,{linksWithHrefs:1}),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._2(12,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._2(16,0,null,null,16,"div",[["class","qodef-product-standard-info-top"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(18,0,null,null,1,"span",[["class","text-uppercase text-extra-small alt-font letter-spacing-3 text-medium-gray"]],null,null,null,null,null)),(l()(),u._20(19,null,["",""])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(21,0,null,null,10,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u._11(l,22).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u._1(22,671744,[[8,4]],0,e.n,[e.l,e.a,a.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),u._15(23,{brand:0}),u._13(24,2),u._1(25,1720320,null,2,e.m,[e.l,u.k,u.B,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u._18(603979776,7,{links:1}),u._18(603979776,8,{linksWithHrefs:1}),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._2(29,0,null,null,1,"h6",[["class","alt-font text-extra-dark-gray font-weight-600 margin-5px-bottom"]],null,null,null,null,null)),(l()(),u._20(30,null,["",""])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._20(-1,null,["\n            "]))],function(l,n){var t=n.component;l(n,5,0,l(n,6,0,t.brand),l(n,7,0,"./",n.context.$implicit.sku)),l(n,8,0,"active"),l(n,22,0,l(n,23,0,t.brand),l(n,24,0,"./",n.context.$implicit.sku)),l(n,25,0,"active")},function(l,n){l(n,4,0,u._11(n,5).target,u._11(n,5).href),l(n,12,0,u._4(1,"",n.context.$implicit.image,"")),l(n,19,0,n.context.$implicit.description),l(n,21,0,u._11(n,22).target,u._11(n,22).href),l(n,30,0,n.context.$implicit.name)})}function p(l){return u._22(0,[(l()(),u._2(0,0,null,null,29,"div",[["class","wow"],["id","product"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n    "])),(l()(),u._2(2,0,null,null,26,"div",[["class","container product-page-heading col-lg-12 col-md-12 col-sm-12 col-xs-12 center-col text-center"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n        "])),(l()(),u._2(4,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n            "])),(l()(),u._2(6,0,null,null,20,"div",[["class","col-lg-12 col-md-12 col-sm-12 col-xs-12 center-col text-center product-heading"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                "])),(l()(),u._2(8,0,null,null,1,"h5",[["class","alt-font font-weight-600 margin-5px-bottom"],["style","padding-top: 24px;"]],null,null,null,null,null)),(l()(),u._20(-1,null,["Products"])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._2(11,0,null,null,8,"span",[["class","text-uppercase text-extra-small alt-font letter-spacing-3"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(13,0,null,null,5,"a",[["class","home-route"],["routerLink","/"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u._11(l,14).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u._1(14,671744,[[2,4]],0,e.n,[e.l,e.a,a.h],{routerLink:[0,"routerLink"]},null),u._1(15,1720320,null,2,e.m,[e.l,u.k,u.B,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u._18(603979776,1,{links:1}),u._18(603979776,2,{linksWithHrefs:1}),(l()(),u._20(-1,null,["Kundan Groups"])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._20(-1,null,["\n                "])),(l()(),u.X(16777216,null,null,1,null,g)),u._1(22,16384,null,0,a.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._20(-1,null,["\n                "])),(l()(),u._2(24,0,null,null,1,"span",[["class","text-uppercase text-extra-small alt-font letter-spacing-3"]],null,null,null,null,null)),(l()(),u._20(-1,null,["/ Products"])),(l()(),u._20(-1,null,["\n            "])),(l()(),u._20(-1,null,["\n        "])),(l()(),u._20(-1,null,["\n    "])),(l()(),u._20(-1,null,["\n"])),(l()(),u._20(-1,null,["\n"])),(l()(),u._2(31,0,null,null,12,"section",[["class","wow"],["style","padding:0  20px 20px 20px !important;"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n    "])),(l()(),u._2(33,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n        "])),(l()(),u._2(35,0,null,null,6,"div",[["class","row equalize"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n            "])),(l()(),u._20(-1,null,["\n            "])),(l()(),u.X(16777216,null,null,1,null,d)),u._1(39,802816,null,0,a.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u._20(-1,null,["\n            "])),(l()(),u._20(-1,null,["\n        "])),(l()(),u._20(-1,null,["\n    "])),(l()(),u._20(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,14,0,"/"),l(n,15,0,"active"),l(n,22,0,t.brand),l(n,39,0,t.products)},function(l,n){l(n,13,0,u._11(n,14).target,u._11(n,14).href)})}var h=u.Y("kg-product1",i,function(l){return u._22(0,[(l()(),u._2(0,0,null,null,1,"kg-product1",[],null,null,null,p,_)),u._1(1,245760,null,0,i,[s.a,e.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=function(){function l(){}return l.prototype.ngOnInit=function(){this.createDownloadLinks()},l.prototype.createDownloadLinks=function(){for(var l=0;l<this.fileDetails.length;l++)this.fileDetails[l].fileUrl.search("export=download")<1&&(this.fileDetails[l].fileUrl=this.fileDetails[l].fileUrl.replace(/open/i,"uc"),this.fileDetails[l].fileUrl=this.fileDetails[l].fileUrl.concat("&export=download"))},l}(),x=u._0({encapsulation:0,styles:[[".download-button[_ngcontent-%COMP%]{display:block;width:150px;height:50px;background-color:#000;padding:10px;text-align:center;border-radius:3px;color:#fff;margin-bottom:1rem}@media screen and (max-width:450px){.download-button[_ngcontent-%COMP%]{width:100%;height:50px}}"]],data:{}});function m(l){return u._22(0,[(l()(),u._2(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u._20(-1,null,["\n    "])),(l()(),u._2(2,0,null,null,1,"a",[["class","download-button"]],[[8,"href",4],[8,"download",0]],null,null,null,null)),(l()(),u._20(-1,null,["Download"])),(l()(),u._20(-1,null,["\n"]))],null,function(l,n){l(n,2,0,u._4(1,"",n.context.$implicit.fileUrl,""),u._4(1,"",n.context.$implicit.fileTitle,""))})}function P(l){return u._22(0,[(l()(),u.X(16777216,null,null,1,null,m)),u._1(1,802816,null,0,a.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u._20(-1,null,["\n"]))],function(l,n){l(n,1,0,n.component.fileDetails)},null)}var O=t("AwyA"),k=u._0({encapsulation:0,styles:[['.container[_ngcontent-%COMP%]   .hover-option4[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding:30px}\r\n\r\n#carousel[_ngcontent-%COMP%]{margin-top:20px}#carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:-webkit-zoom-in;cursor:zoom-in}.item[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{width:25%;cursor:pointer;float:left;padding:.8rem}.item[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .qodef-container-inner[_ngcontent-%COMP%]{width:100%}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0 0 25px;padding:0;letter-spacing:0;font-weight:400}h1[_ngcontent-%COMP%]{font-size:70px;line-height:70px}h2[_ngcontent-%COMP%]{font-size:55px;line-height:60px}h3[_ngcontent-%COMP%]{font-size:48px;line-height:54px}h4[_ngcontent-%COMP%]{font-size:40px;line-height:46px}h5[_ngcontent-%COMP%]{font-size:32px;line-height:40px}h6[_ngcontent-%COMP%]{font-size:25px;line-height:30px}\r\n\r\n.text-extra-small[_ngcontent-%COMP%]{font-size:11px;line-height:14px}.text-small[_ngcontent-%COMP%]{font-size:12px;line-height:20px}.text-medium[_ngcontent-%COMP%]{font-size:16px;line-height:23px}.text-large[_ngcontent-%COMP%]{font-size:18px;line-height:26px}.text-extra-large[_ngcontent-%COMP%]{font-size:20px;line-height:26px}.title-large[_ngcontent-%COMP%]{font-size:100px;line-height:95px}.title-extra-large[_ngcontent-%COMP%]{font-size:130px;line-height:120px}\r\n\r\n.text-white[_ngcontent-%COMP%]{color:#fff}.text-black[_ngcontent-%COMP%]{color:#000}.text-extra-dark-gray[_ngcontent-%COMP%]{color:#232323}.text-dark-gray[_ngcontent-%COMP%]{color:#626262}.text-extra-medium-gray[_ngcontent-%COMP%]{color:#757575}.text-medium-gray[_ngcontent-%COMP%]{color:#939393}.text-extra-light-gray[_ngcontent-%COMP%]{color:#b7b7b7}.text-light-gray[_ngcontent-%COMP%]{color:#d6d5d5}.text-very-light-gray[_ngcontent-%COMP%]{color:#ededed}.text-deep-pink[_ngcontent-%COMP%]{color:#007ba7}\r\n\r\n.first-letter[_ngcontent-%COMP%]{font-size:50px;line-height:auto;padding:10px 0}.first-letter[_ngcontent-%COMP%], .first-letter-big[_ngcontent-%COMP%]{float:left;margin:0 20px 0 0;text-align:center;font-weight:600}.first-letter-big[_ngcontent-%COMP%]{font-size:110px;line-height:110px;padding:0 8px;position:relative}.first-letter-big[_ngcontent-%COMP%]:before{position:absolute;border-bottom:1px solid;content:"";display:block;width:100%;top:55%;left:0}.first-letter-block[_ngcontent-%COMP%]{font-size:30px;height:55px;line-height:22px;padding:15px 0;width:55px;font-weight:500;margin-top:5px}.first-letter-block-round[_ngcontent-%COMP%]{border-radius:6px;border:1px solid}.first-letter-round[_ngcontent-%COMP%]{border-radius:50%;font-size:35px;padding:15px;width:65px;height:65px;line-height:32px}.product-heading[_ngcontent-%COMP%]{background-color:#000;color:#fff}.product-page-heading[_ngcontent-%COMP%]{width:100%;padding:"";margin:""}.home-route[_ngcontent-%COMP%]{color:#f4b201}']],data:{}});function M(l){return u._22(0,[(l()(),u._2(0,0,null,null,8,"span",[["class","text-uppercase text-extra-small alt-font letter-spacing-3"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._2(2,0,null,null,5,"a",[["class","home-route"],["routerLink","/brands"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u._11(l,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u._1(3,671744,[[4,4]],0,e.n,[e.l,e.a,a.h],{routerLink:[0,"routerLink"]},null),u._1(4,1720320,null,2,e.m,[e.l,u.k,u.B,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u._18(603979776,3,{links:1}),u._18(603979776,4,{linksWithHrefs:1}),(l()(),u._20(-1,null,["/ Brands "])),(l()(),u._20(-1,null,["\n                    "]))],function(l,n){l(n,3,0,"/brands"),l(n,4,0,"active")},function(l,n){l(n,2,0,u._11(n,3).target,u._11(n,3).href)})}function C(l){return u._22(0,[(l()(),u._2(0,0,null,null,132,null,null,null,null,null,null,null)),(l()(),u._20(-1,null,["\n    "])),(l()(),u._2(2,0,null,null,37,"div",[["class","wow"],["id","product"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n        "])),(l()(),u._2(4,0,null,null,34,"div",[["class","container product-page-heading col-lg-12 col-md-12 col-sm-12 col-xs-12 center-col text-center"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n            "])),(l()(),u._2(6,0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                "])),(l()(),u._2(8,0,null,null,28,"div",[["class","col-lg-12 col-md-12 col-sm-12 col-xs-12 center-col text-center product-heading"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(10,0,null,null,1,"h5",[["class","alt-font font-weight-600 margin-5px-bottom"],["style","padding-top: 24px;"]],null,null,null,null,null)),(l()(),u._20(-1,null,["Details"])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(13,0,null,null,8,"span",[["class","text-uppercase text-extra-small alt-font letter-spacing-3"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._2(15,0,null,null,5,"a",[["class","home-route"],["routerLink","/"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u._11(l,16).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u._1(16,671744,[[2,4]],0,e.n,[e.l,e.a,a.h],{routerLink:[0,"routerLink"]},null),u._1(17,1720320,null,2,e.m,[e.l,u.k,u.B,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u._18(603979776,1,{links:1}),u._18(603979776,2,{linksWithHrefs:1}),(l()(),u._20(-1,null,["Kundan Groups"])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u.X(16777216,null,null,1,null,M)),u._1(24,16384,null,0,a.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(26,0,null,null,9,"span",[["class","text-uppercase text-extra-small alt-font letter-spacing-3"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._2(28,0,null,null,6,"a",[["class","home-route"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u._11(l,29).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u._1(29,671744,[[6,4]],0,e.n,[e.l,e.a,a.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),u._15(30,{brand:0}),u._1(31,1720320,null,2,e.m,[e.l,u.k,u.B,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u._18(603979776,5,{links:1}),u._18(603979776,6,{linksWithHrefs:1}),(l()(),u._20(-1,null,["/ Products "])),(l()(),u._20(35,null,["\n                        / ","\n                    "])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._20(-1,null,["\n            "])),(l()(),u._20(-1,null,["\n        "])),(l()(),u._20(-1,null,["\n    "])),(l()(),u._20(-1,null,["\n    "])),(l()(),u._2(41,0,null,null,90,"section",[["class","wow"],["style","padding:0  20px 20px 20px !important;"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n        "])),(l()(),u._2(43,0,null,null,87,"div",[["class","container"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n            "])),(l()(),u._2(45,0,null,null,84,"div",[["class","row"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                "])),(l()(),u._2(47,0,null,null,47,"div",[["class","col-lg-6 col-md-6 col-sm-6 col-xs-12 wow"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(49,0,null,null,10,"div",[["class","carousel slide"],["data-ride","carousel"],["id","carousel"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._2(51,0,null,null,7,"div",[["class","carousel-inner"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                            "])),(l()(),u._2(53,0,null,null,3,"div",[["class","item active"],["data-thumb","0"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                "])),(l()(),u._2(55,0,null,null,0,"img",[["title","Click to see fullscreen"]],[[8,"src",4]],null,null,null,null)),(l()(),u._20(-1,null,["\n                            "])),(l()(),u._20(-1,null,["\n                            "])),(l()(),u._20(-1,null,["\n\n                        "])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(61,0,null,null,32,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._2(63,0,null,null,28,"div",[["class","carousel slide"],["data-interval","false"],["id","thumbcarousel"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                            "])),(l()(),u._2(65,0,null,null,24,"div",[["class","carousel-inner"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                "])),(l()(),u._2(67,0,null,null,21,"div",[["class","item active"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._2(69,0,null,null,3,"div",[["class","thumb"],["data-slide-to","0"],["data-target","#carousel"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                        "])),(l()(),u._2(71,0,null,null,0,"img",[["src","./assets/images/product1/1.jpg"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._2(74,0,null,null,3,"div",[["class","thumb"],["data-slide-to","1"],["data-target","#carousel"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                        "])),(l()(),u._2(76,0,null,null,0,"img",[["src","./assets/images/product1/2.jpg"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._2(79,0,null,null,3,"div",[["class","thumb"],["data-slide-to","2"],["data-target","#carousel"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                        "])),(l()(),u._2(81,0,null,null,0,"img",[["src","./assets/images/product1/3.jpg"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._2(84,0,null,null,3,"div",[["class","thumb"],["data-slide-to","3"],["data-target","#carousel"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                        "])),(l()(),u._2(86,0,null,null,0,"img",[["src","./assets/images/product1/4.jpg"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._20(-1,null,["\n                                "])),(l()(),u._20(-1,null,["\n                            "])),(l()(),u._20(-1,null,["\n                            "])),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._2(96,0,null,null,32,"div",[["class","col-lg-6 col-md-5 col-md-offset-1 col-lg-offset-0 col-sm-6 col-xs-12 wow  last-paragraph-no-margin"],["data-wow-delay","0.2s"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(98,0,null,null,1,"h1",[["class","qodef-single-product-title"],["itemprop","name"]],null,null,null,null,null)),(l()(),u._20(99,null,["",""])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._2(101,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._2(103,0,null,null,23,"div",[["class","page"],["title","Product Name"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                            "])),(l()(),u._2(105,0,null,null,20,"div",[["class","layoutArea"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                "])),(l()(),u._2(107,0,null,null,4,"div",[["class","column"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._2(109,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u._20(110,null,["",""])),(l()(),u._20(-1,null,["\n                                "])),(l()(),u._20(-1,null,["\n                                "])),(l()(),u._2(113,0,null,null,8,"span",[["class","amount"]],null,null,null,null,null)),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._2(115,0,null,null,1,"p",[["style","color:black; font-weight:bold;display: -webkit-inline-box;"]],null,null,null,null,null)),(l()(),u._20(-1,null,["Price:"])),(l()(),u._20(-1,null,["\n                                    "])),(l()(),u._2(118,0,null,null,2,"span",[["class","price"]],null,null,null,null,null)),(l()(),u._20(119,null,["",""])),u._16(120,4),(l()(),u._20(-1,null,["\n                                "])),(l()(),u._20(-1,null,["\n                                "])),(l()(),u._2(123,0,null,null,1,"vt-downloader",[],null,null,null,P,x)),u._1(124,114688,null,0,f,[],{fileDetails:[0,"fileDetails"]},null),(l()(),u._20(-1,null,["\n                            "])),(l()(),u._20(-1,null,["\n                        "])),(l()(),u._20(-1,null,["\n                    "])),(l()(),u._20(-1,null,["\n                "])),(l()(),u._20(-1,null,["\n            "])),(l()(),u._20(-1,null,["\n        "])),(l()(),u._20(-1,null,["\n    "])),(l()(),u._20(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,16,0,"/"),l(n,17,0,"active"),l(n,24,0,t.brand),l(n,29,0,l(n,30,0,t.brand),u._4(1,"/",t.brand?"brands/products":"/products","")),l(n,31,0,"active"),l(n,124,0,t.fileDetails)},function(l,n){var t=n.component;l(n,15,0,u._11(n,16).target,u._11(n,16).href),l(n,28,0,u._11(n,29).target,u._11(n,29).href),l(n,35,0,t.product.name),l(n,55,0,u._4(1,"",t.product.image,"")),l(n,99,0,t.product.name),l(n,110,0,t.product.description),l(n,119,0,u._21(n,119,0,l(n,120,0,u._11(n.parent,0),t.product.price,"\u20b9","symbol","4.2-2")))})}function b(l){return u._22(0,[u._14(0,a.c,[u.s]),(l()(),u._20(-1,null,["\n"])),(l()(),u.X(16777216,null,null,1,null,C)),u._1(3,16384,null,0,a.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.product)},null)}var v=u.Y("kg-product-details",O.a,function(l){return u._22(0,[(l()(),u._2(0,0,null,null,1,"kg-product-details",[],null,null,null,b,k)),u._1(1,245760,null,0,O.a,[e.a,s.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=t("9iV4"),w=t("n68r"),z=t("kr85");t.d(n,"ProductsModuleNgFactory",function(){return L});var L=u.Z(c,[],function(l){return u._8([u._9(512,u.j,u.V,[[8,[h,v]],[3,u.j],u.v]),u._9(4608,a.m,a.l,[u.s,[2,a.s]]),u._9(4608,y.h,y.m,[a.d,u.z,y.k]),u._9(4608,y.n,y.n,[y.h,y.l]),u._9(5120,y.a,function(l){return[l]},[y.n]),u._9(4608,y.j,y.j,[]),u._9(6144,y.i,null,[y.j]),u._9(4608,y.g,y.g,[y.i]),u._9(6144,y.b,null,[y.g]),u._9(5120,y.f,y.o,[y.b,[2,y.a]]),u._9(4608,y.c,y.c,[y.f]),u._9(4608,s.a,s.a,[y.c]),u._9(512,a.b,a.b,[]),u._9(512,e.o,e.o,[[2,e.t],[2,e.l]]),u._9(512,r,r,[]),u._9(512,y.e,y.e,[]),u._9(512,y.d,y.d,[]),u._9(512,w.a,w.a,[]),u._9(512,z.a,z.a,[]),u._9(512,c,c,[]),u._9(1024,e.j,function(){return[[{path:"",component:i,pathMatch:"full"},{path:":sku",component:O.a}]]},[]),u._9(256,y.k,"XSRF-TOKEN",[]),u._9(256,y.l,"X-XSRF-TOKEN",[])])})}});
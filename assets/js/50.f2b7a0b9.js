(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{991:function(t,h,i){"use strict";i.r(h);var s={props:["url","showimg","height"],mounted:function(){this.CheckImgShow()},data:function(){return{urlprop:this.url,showprop:this.showimg,show:!0}},methods:{CheckImgShow:function(){0==this.showimg?this.show=!1:this.show=!0},getSize:function(){var t="100%";return null==this.height&&""==this.height||(t=this.height),"height:100%;width:"+t+";"}}},e=i(13),r=Object(e.a)(s,function(){var t=this.$createElement,h=this._self._c||t;return h("div",{style:this.getSize()},[this.show?h("a",{attrs:{target:"_blank",href:this.urlprop}},[h("img",{staticStyle:{height:"100%",width:"100%"},attrs:{src:this.urlprop,alt:""}})]):h("a",{attrs:{target:"_blank",href:this.urlprop}},[this._v("图片链接")])])},[],!1,null,null,null);h.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{362:function(t,e,n){"use strict";var r=n(10),o=n(363),l=n(169),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);r(r.P+r.F*c,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},363:function(t,e,n){var r=n(27),o=n(170),l=n(26);t.exports=function(t,e,n,c){var d=String(l(t)),f=d.length,h=void 0===n?" ":String(n),x=r(e);if(x<=f||""==h)return d;var m=x-f,v=o.call(h,Math.ceil(m/h.length));return v.length>m&&(v=v.slice(0,m)),c?v+d:d+v}},364:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("2e2ca089",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";var r=n(364);n.n(r).a},367:function(t,e,n){(e=n(69)(!1)).push([t.i,"article.article{padding:10px}article.article .single{max-width:900px;margin:0 auto;padding:10px;color:#222;border:2px solid #444;border-radius:10px}article.article .single h1,article.article .single h2,article.article .single h3{margin:16px 0}article.article .single h1.post-title{font-size:32px;text-decoration:underline}article.article .single .post-content h1{font-size:32px}article.article .single .post-content h2{font-size:24px;background:#ccc}article.article .single .post-content p{margin:16px 0;font-size:16px}article.article .single .post-content img{max-width:100%;border:1px solid #000}img{width:100%;max-width:450px;margin:0 auto}",""]),t.exports=e},371:function(t,e,n){"use strict";n.r(e);n(362);var r=n(88),o=n.n(r),l={asyncData:function(t){var e=t.params,n=(t.error,t.payload);return n?{post:n}:o.a.getEntries({content_type:"test","fields.slug":e.slug}).then((function(t){return{post:t.items[0]}})).catch((function(t){return console.log(t)}))},head:function(){return{title:this.post.fields.title}},mounted:function(){console.log(this.post)},methods:{formatDate:function(t){var e=new Date(t),n=new String(e.getFullYear()),r=new String(e.getMonth()+1).padStart(2,"0"),dd=new String(e.getDate()).padStart(2,"0");return"".concat(n,".").concat(r,".").concat(dd)}}},c=(n(366),n(32)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"article"},[n("div",{staticClass:"single"},[n("h1",{staticClass:"post-title"},[t._v(t._s(t.post.fields.title))]),t._v(" "),n("p",{staticClass:"post-created-at"},[t._v(t._s(t.formatDate(t.post.sys.createdAt)))]),t._v(" "),n("img",{attrs:{src:t.post.fields.image.fields.file.url}}),t._v(" "),n("div",{staticClass:"post-content",domProps:{innerHTML:t._s(t.$md.render(t.post.fields.content))}})])])}),[],!1,null,null,null);e.default=component.exports}}]);
(this.webpackJsonptienda=this.webpackJsonptienda||[]).push([[0],{237:function(e,t,c){},238:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(67),s=c.n(a),r=c(5),i=c(3),j=c(78),o=c(12),l=c(6),d=c(0),b=Object(n.createContext)(),u=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(l.a)(c,2),s=a[0],r=a[1];Object(n.useEffect)((function(){sessionStorage.setItem("cart",JSON.stringify(s))}),[s]);var i=s.reduce((function(e,t){return e+t.quantity*t.price}),0),u=s.reduce((function(e,t){return e+t.quantity}),0);return Object(d.jsx)(b.Provider,{value:{cart:s,handleAddMore:function(e){r(s.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},t),{},{quantity:t.quantity+1}):t})))},handleAdd:function(e,t){var c=s.find((function(t){return t.id===e.id}));r(c?s.map((function(c){return c.id===e.id?Object(o.a)(Object(o.a)({},c),{},{quantity:c.quantity+t}):c})):[].concat(Object(j.a)(s),[Object(o.a)(Object(o.a)({},e),{},{quantity:t})]))},handleSub:function(e){1===s.find((function(t){return t.id===e.id})).quantity?r(s.filter((function(t){return t.id!==e.id}))):r(s.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},t),{},{quantity:t.quantity-1}):t})))},handleRemove:function(e){r(s.filter((function(t){return t.id!==e.id})))},handleClear:function(){r([])},totalCart:i,totalItems:u},children:t})},O=[{id:"all",name:"Todos los productos"},{id:"pantalones",name:"Pantalones"},{id:"camisas",name:"Camisas"},{id:"sacos",name:"Sacos"},{id:"trajes",name:"Trajes"},{id:"zapatos",name:"Zapatos"},{id:"accesorios",name:"Accesorios"}],x=function(e){var t=e.closeAll,c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],r=a[1],j=Object(i.g)();return Object(d.jsx)("form",{className:"finder",onSubmit:function(e){e.preventDefault(),t(),r(""),j.push("/search?q=".concat(s))},children:Object(d.jsx)("input",{onChange:function(e){var t=e.target;r(t.value)},type:"text",placeholder:" Buscar...",value:s})})},h=function(e){var t=e.nav,c=e.setNav,n=e.catOpen,a=e.setCatOpen,s=e.closeAll;return Object(d.jsxs)("nav",{className:t?"navOpen":"nav",children:[Object(d.jsx)(x,{closeAll:s}),Object(d.jsx)(r.b,{onClick:function(){return s()},to:"/",className:"links",children:"Inicio"}),Object(d.jsxs)("div",{style:{cursor:"pointer"},className:"links store",onClick:function(){return a(!n)},children:[Object(d.jsxs)("p",{children:["Tienda ",Object(d.jsx)("span",{className:"arrow ".concat(n&&"arrowDown"),children:"\u27a8"})]}),Object(d.jsx)("div",{className:n?"category-nav-open":"category-nav",children:O.map((function(e){return Object(d.jsx)(r.b,{to:"/tienda/category/".concat(e.id),className:"category__link-nav",onClick:function(){return c(!1)},children:e.name},e.id)}))})]}),Object(d.jsx)(r.b,{onClick:function(){return s()},to:"/nosotros",className:"links",children:"Sobre nosotros"}),Object(d.jsx)(r.b,{onClick:function(){return s()},to:"/contacto",className:"links",children:"Contacto"})]})},m=c(69),f=c(70),p=function(){var e=Object(n.useContext)(b).totalItems;return Object(d.jsx)("div",{className:"cart-widget",children:Object(d.jsxs)(r.b,{style:{color:"black"},to:"/cart",children:[Object(d.jsx)(m.a,{icon:f.a}),e>0&&Object(d.jsxs)("span",{children:[" ",e]})]})})},v=function(e){var t=e.nav,c=e.handleNav;return Object(d.jsxs)("div",{className:"bars",onClick:c,children:[Object(d.jsx)("span",{className:"bar ".concat(t&&"barTop")}),Object(d.jsx)("span",{className:"bar ".concat(t&&"barMid")}),Object(d.jsx)("span",{className:"bar ".concat(t&&"barBottom")})]})},N=function(e){var t=e.title,c=Object(n.useState)(!1),a=Object(l.a)(c,2),s=a[0],i=a[1],j=Object(n.useState)(!1),o=Object(l.a)(j,2),b=o[0],u=o[1],O=function(){i(!1),u(!1)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsxs)("h1",{className:"title__h1",onClick:function(){return O()},children:[" ",t," "]})}),Object(d.jsx)("img",{src:"/L-Gant/assets/logo.ico",alt:"logo"})]}),Object(d.jsxs)("div",{className:"header__assets",children:[Object(d.jsx)(h,{nav:s,setNav:i,catOpen:b,setCatOpen:u,closeAll:O}),Object(d.jsx)(p,{}),Object(d.jsx)(v,{nav:s,handleNav:function(){i(!s)}})]})]})})},g=c(71),y=c.n(g),C=c.p+"static/media/slider1.2ef86920.jpg",_=c.p+"static/media/slider2.8d13048a.jpg",k=function(){return Object(d.jsxs)("div",{className:"slider",children:[Object(d.jsx)("h1",{className:"sliderTitle",children:"Destacados"}),Object(d.jsxs)(y.a,{className:"sldierContent",children:[Object(d.jsx)("div",{className:"sldierContent-Item",children:Object(d.jsx)("img",{className:"sliderImg",src:C,alt:""})}),Object(d.jsx)("div",{className:"sldierContent-Item",children:Object(d.jsx)("img",{className:"sliderImg",src:_,alt:""})})]})]})},S=function(){return Object(d.jsx)("article",{children:Object(d.jsx)(k,{})})},q=function(){return Object(d.jsx)("main",{children:Object(d.jsx)(S,{})})},I=c(41),w=c.n(I),A=c(72),T=c(73),L=c.n(T).a.create({baseURL:"https://my-json-server.typicode.com/nicojoaquin/productsApi/productos/"}),E=function(){var e=Object(n.useRef)(!0),t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!0),i=Object(l.a)(r,2),j=i[0],o=i[1];Object(n.useEffect)((function(){return d(),function(){e.current=!1}}),[]);var d=function(){var t=Object(A.a)(w.a.mark((function t(){var c,n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.get();case 2:return c=t.sent,t.next=5,c.data;case 5:n=t.sent;try{setTimeout((function(){e.current&&(s(n),o(!1))}),700)}catch(a){console.warn(a)}case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{data:a,loader:j}},F=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"category__container",children:[Object(d.jsx)("h3",{className:"category-title",children:"Filtros"}),O.map((function(e){return Object(d.jsx)(r.c,{exact:!0,to:"/tienda/category/".concat(e.id),className:"category__link",activeClassName:"active",children:e.name},e.id)}))]})})},R=c(77),$=function(e){var t=e.product;return Object(d.jsx)(r.b,{to:"/tienda/".concat(t.id),children:Object(d.jsx)(R.a,{children:Object(d.jsx)("div",{className:"item",style:{backgroundImage:"url(".concat("/L-Gant"+t.img,")")},children:Object(d.jsxs)("div",{className:"item__info",children:[Object(d.jsx)("h3",{className:"item__name",children:t.name}),Object(d.jsxs)("h4",{className:"item__price",children:["$",t.price]})]})})})})},B=function(e){var t=e.products;return Object(d.jsx)("div",{className:"item-list",children:t.map((function(e){return Object(d.jsx)($,{product:e},e.id)}))})},G=function(){var e=Object(i.i)().catId,t=E(),c=t.data,a=t.loader,s=Object(n.useState)([]),r=Object(l.a)(s,2),j=r[0],o=r[1];return Object(n.useEffect)((function(){o("all"===e?c:c.filter((function(t){return t.category===e})))}),[c,e]),Object(d.jsx)("div",{className:"container",children:a?Object(d.jsx)("svg",{className:"cssload-spin-box loader",style:{marginTop:400}}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"products-title",children:"Productos"}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"item__container",children:[Object(d.jsx)(F,{}),Object(d.jsx)(B,{products:j})]})]})})},D=function(){return Object(d.jsx)("section",{className:"main",children:Object(d.jsx)(G,{})})},M=c(75),J=c.n(M),P=c.p+"static/media/buySpinner.06673212.gif",z=function(e){var t=e.setBuy,c=e.product,a=Object(n.useContext)(b).handleAdd,s=Object(n.useState)(1),r=Object(l.a)(s,2),i=r[0],j=r[1],o=Object(n.useState)(!1),u=Object(l.a)(o,2),O=u[0],x=u[1],h=function(){x(!0),setTimeout((function(){x(!1),t(!0),J.a.fire({title:"Has agregado el producto al carrito!",background:"#fff",padding:"2rem",backdrop:!1,position:"center",showConfirmButton:!1,timer:1300,customClass:{title:"alert-title"}}),a(c,i)}),800)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"item-quantity",children:[Object(d.jsx)("button",{onClick:function(){j(i+1)},children:"+"}),Object(d.jsxs)("span",{style:{marginRight:10},children:[i," "]}),Object(d.jsx)("button",{onClick:function(){i>1&&j(i-1)},children:"-"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"add__cart",children:Object(d.jsx)("button",{onClick:function(){return h()},className:"add__cart--button",children:O?Object(d.jsx)("img",{src:P,alt:"loader"}):"Agregar al carrito"})})]})},H=function(e){var t=e.product,c=Object(i.g)(),a=Object(n.useState)(!1),s=Object(l.a)(a,2),r=s[0],j=s[1],o=(t.price/12).toFixed(2);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"item-img",onClick:function(){return console.log(t)},style:{backgroundImage:"url(".concat("/L-Gant"+t.img,")")}}),Object(d.jsxs)("div",{className:"detail-info",children:[Object(d.jsxs)("div",{className:"price-name",children:[Object(d.jsx)("h2",{children:t.name}),Object(d.jsxs)("div",{className:"item-price",children:[Object(d.jsxs)("h3",{children:["$",t.price]}),Object(d.jsxs)("span",{children:["12 cuotas sin interes de $",o,"!"]})]})]}),Object(d.jsxs)("div",{className:"item-desc",children:[Object(d.jsxs)("p",{children:[t.desc,"."]}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:t.comp})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"item-talles",children:[Object(d.jsx)("h3",{children:"Selecciona un talle"}),Object(d.jsx)("br",{}),Object(d.jsxs)("select",{className:"select",name:"talle",required:!0,children:[Object(d.jsx)("option",{value:"s",children:"S"}),Object(d.jsx)("option",{value:"m",children:"M"}),Object(d.jsx)("option",{value:"l",children:"L"})]})]}),r?Object(d.jsx)("div",{className:"add__cart",children:Object(d.jsx)("button",{onClick:function(){c.push("/cart")},className:"add__cart--button",children:"Continuar con la compra"})}):Object(d.jsx)(z,{setBuy:j,product:t})]})]})},U=function(){var e=Object(i.i)().productId,t=Object(n.useRef)(!0),c=E(),a=c.data,s=c.loader,r=Object(n.useState)([]),j=Object(l.a)(r,2),o=j[0],b=j[1];return Object(n.useEffect)((function(){return function(){t.current=!1}}),[]),Object(n.useEffect)((function(){t.current&&b(a.find((function(t){return t.id===e})))}),[a,e]),Object(d.jsx)("div",{className:"detail-container",children:s?Object(d.jsx)("svg",{className:"cssload-spin-box loader",style:{marginTop:400}}):Object(d.jsx)(H,{product:o})})},V=function(){var e=Object(n.useContext)(b),t=e.cart,c=e.totalCart,a=e.handleAddMore,s=e.handleSub,i=e.handleRemove,j=e.handleClear;return Object(d.jsxs)("section",{className:"cart__container",children:[Object(d.jsx)("h1",{children:"Carrito de compras"}),Object(d.jsx)("hr",{}),t.map((function(e){return Object(d.jsx)("div",{className:"cart__item",children:Object(d.jsxs)("div",{className:"cart__item--container",children:[Object(d.jsx)("img",{className:"cart-img",src:"/L-Gant"+e.img,alt:e.name}),Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("h3",{children:["$",e.price]}),Object(d.jsxs)("div",{className:"item-quantity",children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return a(e)},children:"+"})}),Object(d.jsx)("span",{style:{marginRight:10},children:e.quantity}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return s(e)},children:"-"})})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return i(e)},children:"Eliminar"})}),Object(d.jsxs)("h4",{children:["Subtotal: $",e.price*e.quantity]})]})},e.id)})),Object(d.jsx)("br",{}),c?Object(d.jsxs)("div",{className:"total",children:[Object(d.jsx)("div",{children:Object(d.jsxs)("h1",{children:["Total: $",c]})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"add__cart",children:Object(d.jsx)("button",{onClick:function(){return j()},children:"Vaciar carrito"})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"El carrito esta vacio..."}),Object(d.jsx)(r.b,{to:"/tienda/category/all",children:Object(d.jsx)("h2",{style:{color:"#044371",textDecoration:"underline"},children:"Agrega algun producto en la tienda!"})})]})]})},Z=function(){return Object(d.jsx)("section",{children:Object(d.jsx)("h1",{children:"Nosotros"})})},K=function(){return Object(d.jsx)("section",{children:Object(d.jsx)("h1",{children:"Contacto"})})},Q=c(76),W=c.n(Q),X=function(){var e=Object(i.h)(),t=function(e){var t=E().data;return""===e?[]:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(W.a.parse(e.search).q),c=E().loader;return Object(d.jsx)("section",{className:"container",children:c?Object(d.jsx)("svg",{className:"cssload-spin-box loader",style:{marginTop:400}}):Object(d.jsx)("div",{className:"item-list",children:t.map((function(e){return Object(d.jsx)($,{product:e},e.id)}))})})},Y=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(N,{title:"L-Gant"}),Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{exact:!0,path:"/",component:q}),Object(d.jsx)(i.b,{exact:!0,path:"/tienda/category/:catId",component:D}),Object(d.jsx)(i.b,{exact:!0,path:"/tienda/:productId",component:U}),Object(d.jsx)(i.b,{exact:!0,path:"/cart",component:V}),Object(d.jsx)(i.b,{exact:!0,path:"/nosotros",component:Z}),Object(d.jsx)(i.b,{exact:!0,path:"/contacto",component:K}),Object(d.jsx)(i.b,{exact:!0,path:"/search",component:X}),Object(d.jsx)(i.a,{to:"/"})]})]})})})};c(237);s.a.render(Object(d.jsx)(Y,{}),document.querySelector("#root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.d11a13ed.chunk.js.map
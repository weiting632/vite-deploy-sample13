import{S as b,a as g,A as y}from"./autoplay-0b19c387.js";import{_ as k,a as T,b as x,r as a,o as n,c as d,d as t,t as c,f as l,e as p,w as r,F as _,h as S,k as L}from"./index-8d706873.js";import{c as V}from"./cart-bff9d7a3.js";const{VITE_URL:u,VITE_PATH:h}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-sample13",MODE:"production",DEV:!1,PROD:!0,SSR:!1},A={data(){return{product:[],products:[]}},components:{RouterLink:T,Swiper:b,SwiperSlide:g},setup(){return{modules:[y]}},methods:{getProducts(){this.$http(`${u}/v2/api/${h}/products/all`).then(e=>{this.products=e.data.products})},getProduct(){const{id:e}=this.$route.params;this.$http(`${u}/v2/api/${h}/product/${e}`).then(i=>{this.product=i.data.product})},...x(V,["addToCart"])},mounted(){this.getProduct(),this.getProducts()}},P={class:"container"},B={class:"row align-items-center mt-4","data-aos":"fade-up"},C={class:"col-md-8"},E=["src"],R={class:"col-md-4 detail-product"},$={class:"d-flex align-items-center"},I={class:"fw-bold h1 mb-5"},U={class:"h4 fw-bold text-end mb-5"},D={class:"row align-items-center"},N={class:"col-md-6"},O={class:"pt-5","data-aos":"fade-up"},j=t("h2",{class:"text-center pb-5"},"熱銷商品",-1),F={class:"container"},H={class:"row"},M={class:"w-100"},q={class:"card border-0 position-relative"},z=["src"],G=t("div",{class:"content position-absolute d-flex justify-content-center align-items-center"},[t("h1",null,"商品資訊")],-1),J={class:"card-body pt-0 mb-6 bg-primary"},K={class:"mb-2 pt-3 text-center"},Q={class:"card-text mb-2 text-center"},W=["onClick"];function X(e,i,Y,m,o,Z){const f=a("RouterLink"),w=a("swiper-slide"),v=a("swiper");return n(),d(_,null,[t("div",P,[t("div",B,[t("div",C,[t("img",{src:o.product.imageUrl,alt:""},null,8,E)]),t("div",R,[t("div",$,[t("h2",I,c(o.product.title),1),t("p",U,"NT"+c(o.product.price),1)]),t("div",D,[t("div",N,[t("a",{href:"./checkout.html",class:"text-nowrap btn btn-dark w-100 py-2",onClick:i[0]||(i[0]=l(()=>e.addToCart(o.product.id),["prevent"]))},"加入購物車 ")])])])])]),t("section",O,[j,t("div",F,[t("div",H,[p(v,{spaceBetween:30,loop:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:m.modules,onAutoplayTimeLeft:e.onAutoplayTimeLeft,breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40}},class:"mySwiper"},{default:r(()=>[(n(!0),d(_,null,S(o.products,s=>(n(),L(w,{key:s.id},{default:r(()=>[t("div",M,[t("div",q,[p(f,{to:`/products/${s.id}`},{default:r(()=>[t("img",{src:s.imageUrl,class:"card-img-top rounded-0 object-cover",height:"300",alt:"..."},null,8,z),G]),_:2},1032,["to"])]),t("div",J,[t("h4",K,c(s.title),1),t("p",Q,"NT$ "+c(s.price),1),t("a",{href:"#",class:"text-nowrap btn btn-dark w-100 py-2 vl-parent",onClick:l(()=>e.addToCart(s.id),["prevent"])},"加入購物車 ",8,W)])])]),_:2},1024))),128))]),_:1},8,["modules","onAutoplayTimeLeft"])])])])],64)}const ot=k(A,[["render",X]]);export{ot as default};

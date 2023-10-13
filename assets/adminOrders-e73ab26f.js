import{_ as m,o as a,c as n,d as t,F as h,h as p,t as o,E as g,g as k,I as v,j as x}from"./index-8d706873.js";const{VITE_URL:_,VITE_PATH:u}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-sample13",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let b={};const y={data(){return{orders:[],product:{},products:[],final_total:0,qty:0,user:{},id:"",isChecked:!1,order_id:"",selectedOrders:[]}},methods:{getOrderAll(){this.$http(`${_}/v2/api/${u}/admin/orders`).then(e=>{console.log(e),this.orders=e.data.orders})},getOrder(e){this.$http(`${_}/v2/api/${u}/order/${e}`).then(l=>{this.products=l.data.order.products,this.user=this.user=l.data.order.user,console.log("products:",this.products)})},delteOrder(e){this.id=e,this.$http.delete(`${_}/v2/api/${u}/admin/order/${e}`).then(l=>{console.log(l),this.getOrderAll()})},openModal(e){this.getOrder(e),b.show(e)},handleCheckboxChange(e){this.order_id=e,this.isChecked=!this.isChecked},toggleCheckboxStyle(e){const l=this.selectedOrders.includes(e),c=document.querySelector(`input[value="${e}"]`);l?c.classList.add("selected-checkbox"):c.classList.remove("selected-checkbox")}},mounted(){var l;const e=(l=document.cookie.split("; ").find(c=>c.startsWith("allenToken=")))==null?void 0:l.split("=")[1];this.$http.defaults.headers.common.Authorization=e,this.getOrderAll(),b=new bootstrap.Modal(document.getElementById("orderModal"),{keyboard:!1})}},f={class:"container"},C={class:"card-body p-0 mt-4"},O={class:"table-responsive"},E={class:"table table-hover mb-0"},M=t("thead",{class:"bg-light"},[t("tr",{class:"align-middle"},[t("th",{scope:"col",class:"py-3"},"配送狀態"),t("th",{scope:"col",class:"py-3"},"訂單編號"),t("th",{scope:"col"},"Email"),t("th",{scope:"col"},"用戶姓名"),t("th",{scope:"col"},"付款狀態"),t("th",{scope:"col"},"購滿金額"),t("th",{scope:"col",class:"pe-4"},"編輯")])],-1),V={class:"text-nowrap"},$={scope:"row",class:"ps-4"},w=["value","onClick"],L={scope:"row"},S=t("td",null,"尚未付款",-1),T=t("td",{class:"text-start"},"900",-1),A={class:"pe-4"},B={class:"btn-group"},D=["onClick"],I=t("i",{class:"bi bi-pen"},null,-1),R=["onClick"],U={class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},q={class:"modal-dialog"},P={class:"modal-content"},z=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"Modal title"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),F={class:"modal-body"},H={class:"table table-borderless mb-5"},N=t("thead",{class:"bg-main-light"},[t("tr",null,[t("th",{class:""}," 品名 "),t("th",{class:"text-start"}," 數量 "),t("th",{class:"text-right"}," 總價 ")])],-1),j={class:"font-weight-bolder"},W={class:"text-start"},G={class:"text-right"},J=t("td",{colspan:"2",class:"text-right"}," 總計 ",-1),K={class:"text-right"},Q={class:"table mb-5"},X=t("tr",null,[t("th",{width:"130"}," Email "),t("td",null,"tt1235478@gmail.com")],-1),Y=t("th",null,"姓名",-1),Z=t("th",null,"收件人電話",-1),tt=t("th",null,"收件人地址",-1),et=t("th",null,"付款狀態",-1),st={class:"text-danger"},lt=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1);function ot(e,l,c,dt,d,r){return a(),n(h,null,[t("div",f,[t("div",C,[t("div",O,[t("table",E,[M,t("tbody",V,[(a(!0),n(h,null,p(d.orders,s=>(a(),n("tr",{class:g(["clickable",{"selected-checkbox":d.selectedOrders.includes(s.id)}]),key:s.id},[t("td",$,[k(t("input",{type:"checkbox",value:s.id,"onUpdate:modelValue":l[0]||(l[0]=i=>d.selectedOrders=i),onClick:i=>r.toggleCheckboxStyle(s.id)},null,8,w),[[v,d.selectedOrders]])]),t("td",L,o(s.create_at),1),t("td",null,o(s.user.email),1),t("td",null,o(s.user.name),1),S,T,t("td",A,[t("div",B,[t("a",{href:"#",class:"btn btn-sm btn-outline-dark",onClick:i=>r.openModal(s.id)},[x(" 編輯 "),I],8,D),t("a",{href:"#",class:"btn btn-sm btn-outline-danger text-danger",onClick:i=>r.delteOrder(s.id)}," 刪除訂單 ",8,R)])])],2))),128))])])])])]),t("div",U,[t("div",q,[t("div",P,[z,t("div",F,[t("table",H,[N,(a(!0),n(h,null,p(d.products,s=>(a(),n("tbody",{key:s.id},[t("tr",null,[t("td",j,o(s.product.title),1),t("td",W,o(s.qty),1),t("td",G,o(s.product.price),1)])]))),128)),t("tfoot",null,[t("tr",null,[J,t("td",K,o(),1)])])]),t("table",Q,[t("tbody",null,[X,t("tr",null,[Y,t("td",null,o(d.user.name),1)]),t("tr",null,[Z,t("td",null,o(d.user.tel),1)]),t("tr",null,[tt,t("td",null,o(d.user.address),1)]),t("tr",null,[et,t("td",st,o(),1)])])])]),lt])])])],64)}const at=m(y,[["render",ot]]);export{at as default};

import{_ as I,a as L,r as c,o as R,e as r,f as d,g as k,h as i,U as V,i as W,j as s,F as b,l as v,m as f,t as n,E as A,y as p,x as t,B as g,D as F}from"./index-bc88b991.js";
const j={class:"mobile-app"},P={class:"cards-content"},q={key:0,class:"bound-card-section"},z={class:"card-body"},$={class:"bank-name"},G={class:"bank-icon"},H={class:"balance"},J={class:"card-number"},K={class:"card bank-withdraw coupon-card mb-3"},O={class:"card-body"},Q={class:"apply-coupon"},X={class:"mb-0"},Y={class:"mb-2"},Z={key:1,class:"withdraw-methods-section"},ee={class:"section-title"},se={class:"method-header"},te={class:"method-icon"},ae={key:0,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},oe={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},ne={class:"method-info"},re={class:"method-name"},de={class:"method-desc"},ie=["onClick"],ce={key:1,class:"bound-status"},we={key:2,class:"no-card-section"},ke={class:"choose-payment-method"},pe={class:"row justify-content-center g-3"},me={class:"col-12 col-md-5"},ye={class:"single-payment-method"},be={__name:"Cards",setup(ve){
const l=L(),u=c(!0),h=c([]),C=c([]),usdt=c([]),m=c("0.00"),y=c({min:"100",fee:"0"}),_=c([]);
const maskAddr=addr=>{
  const raw=String(addr||"").replace(/\s/g,"");
  if(!raw)return"";
  if(raw.length<=4)return raw;
  return"**** **** **** "+raw.slice(-4);
};
const setUsdtCard=(addr,walletName)=>{
  const a=String(addr||"").trim();
  if(!a){usdt.value=[];return}
  const wn=String(walletName||"").trim();
  const title=wn?wn+" USDT":"USDT地址";
  usdt.value=[{id:"usdt-1",title,iconText:(wn||"USDT").slice(0,Math.min(3,(wn||"USDT").length)),address:a,masked:maskAddr(a)}];
};
const B=async()=>{try{const e=await p.getUserInfo();if(e&&e.type===1&&e.data){const a=e.data;m.value=a.usermoney||"0.00"}}catch{}};
const T=async()=>{try{const e=await p.getWithdrawMethods();if(e&&e.type===1&&e.data){_.value=e.data.filter(a=>a.is_active===1);const crypto=(_.value||[]).find(a=>a.method_category==="crypto"&&a.user_address);if(crypto&&crypto.user_address)setUsdtCard(crypto.user_address,crypto.wallet_name||"")}}catch{}};
const M=async()=>{try{u.value=!0;await Promise.all([B(),U(),T()])}catch{A.error("加载失败，请刷新重试")}finally{u.value=!1}};
const U=async()=>{try{const e=await p.getBankCardInfo();if(e&&e.type===1&&e.data){const a=e.data;a.bank_card||(a.bankCard&&a.bankCard.accntno)?(()=>{const cn=String((a.bankCard&&a.bankCard.accntno)||a.bank_card||"").replace(/\s/g,"");let bn=String((a.bankCard&&a.bankCard.bankname)||a.bank_name||"").trim();const cardLike=s=>/^[\d*]{8,}$/.test(String(s).replace(/\s/g,""));if(!bn||cardLike(bn)||bn===cn)bn="银行卡";bn=bn.replace(/(支行|分行|发行|网点)$/,"");h.value=[{id:1,holderName:a.bank_user||(a.bankCard&&a.bankCard.accntnm)||t("common.notSet"),cardNumber:cn||t("common.notSet"),bankName:bn,branchName:a.bank_address||(a.bankCard&&a.bankCard.address)||"",idCard:t("common.notSet"),phone:t("common.notSet"),idCardFrontImg:"",idCardBackImg:"",isDefault:!0}]})():h.value=[];if(a.wallet_address&&!usdt.value.length)setUsdtCard(a.wallet_address,a.wallet_name||"");a.banks&&(C.value=a.banks.map(o=>({id:o.id,name:o.bank_nm||o.name||o.bankname})))}}catch{}};
const w=()=>{l.push("/user/bank-binding")};
const x=e=>!!e.is_bound&&e.is_bound!=="0"&&e.is_bound!==0;
const S=e=>({银行卡提现:t("withdraw.bankCardWithdraw"),"TRC20-USDT":"USDT地址","ERC20-USDT":"USDT地址"})[e.type]||e.type;
const D=e=>e.type==="银行卡提现"?t("withdraw.withdrawToBankCard"):e.method_category==="crypto"?t("withdraw.withdrawToUsdtWallet"):{提现到绑定银行卡:t("withdraw.withdrawToBankCard"),提现到绑定USDT地址:t("withdraw.withdrawToUsdtWallet"),提现到USDT钱包地址:t("withdraw.withdrawToUsdtWallet"),提现到以太坊USDT地址:t("withdraw.withdrawToEthereumUsdt")}[e.description]||e.description;
const N=e=>{e.method_category==="bank"?l.push("/user/bank-binding"):e.method_category==="crypto"&&l.push({path:"/user/crypto-binding",query:{type:e.type,category:e.method_category,description:e.description}})};
const E=()=>{l.back()};
const goUsdt=()=>{l.push({path:"/user/crypto-binding",query:{type:"TRC20-USDT",category:"crypto",description:"提现到绑定USDT地址"}})};
return R(()=>{M()}),(e,a)=>(r(),d("div",j,[
k(V,{visible:u.value,title:i(t)("nav.cards"),message:i(t)("common.loading")},null,8,["visible","title","message"]),
k(W,{title:i(t)("nav.cards"),"show-back":!0,"show-refresh":!1,"show-menu":!1,onBack:E},null,8,["title"]),
s("div",P,[
(h.value.length>0||usdt.value.length>0)?(r(),d("div",q,[
(r(!0),d(b,null,v(h.value,o=>(r(),d("div",{key:o.id,class:"bank-card-display"},[
s("div",{class:"card coupon-card bank-card mb-3",style:{cursor:"default"}},[
s("div",z,[
s("dd",$,n(o.bankName.length>8?o.bankName.slice(0,8)+"…":o.bankName),1),
s("span",{class:"edit-btn"},[...a[0]||(a[0]=[s("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none"},[s("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",stroke:"currentColor","stroke-width":"2",fill:"none"})],-1)])]),
s("i",G,n(/^[\d*]{3,}/.test(o.bankName)?"银":o.bankName.substring(0,Math.min(3,o.bankName.length))),1),
s("span",H,n(m.value||"0.00"),1),
s("p",J,"•••• •••• •••• "+n(o.cardNumber.slice(-4)),1)
])
])
]))),128)),
(r(!0),d(b,null,v(usdt.value,o=>(r(),d("div",{key:o.id,class:"bank-card-display usdt-card-display",onClick:goUsdt},[
s("div",{class:"card coupon-card bank-card usdt-card mb-3",style:{cursor:"pointer"}},[
s("div",z,[
s("dd",$,n(o.title),1),
s("span",{class:"edit-btn"},[...a[4]||(a[4]=[s("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none"},[s("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",stroke:"currentColor","stroke-width":"2",fill:"none"})],-1)])]),
s("i",G,n(o.iconText||"U"),1),
s("span",H,n(m.value||"0.00"),1),
s("p",J,n(o.masked),1)
])
])
]))),128)),
s("div",K,[s("div",O,[s("div",Q,[s("h6",X,n(i(t)("withdraw.notice")),1),s("p",Y,[g(n(i(t)("withdraw.minAmount"))+": ",1),s("span",null,"￥"+n(y.value.min||"100"),1),g(" "+n(i(t)("withdraw.fee"))+": ",1),s("span",null,n(y.value.fee||"0")+"%",1)])])])])
])):f("",!0),
_.value.length>0?(r(),d("div",Z,[
s("h3",ee,n(i(t)("withdraw.methodManagement")),1),
(r(!0),d(b,null,v(_.value,o=>(r(),d("div",{key:o.id,class:"method-card method-card-clickable",onClick:fe=>N(o)},[
s("div",se,[
s("div",te,[o.method_category==="bank"?(r(),d("svg",ae,[...a[1]||(a[1]=[s("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2",stroke:"currentColor","stroke-width":"2"},null,-1),s("line",{x1:"1",y1:"10",x2:"23",y2:"10",stroke:"currentColor","stroke-width":"2"},null,-1)])])):(r(),d("svg",oe,[...a[2]||(a[2]=[s("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"},null,-1),s("path",{d:"M8 14s1.5 2 4 2 4-2 4-2",stroke:"currentColor","stroke-width":"2"},null,-1)])]))]),
s("div",ne,[s("div",re,n(S(o)),1),s("div",de,n(D(o)),1)]),
x(o)?(r(),d("div",{key:1,class:"bound-status"},[s("div",{class:"bound-label"},"✅ 已绑定"),s("div",{class:"modify-hint"},"点击进行修改")])):(r(),d("span",{key:0,class:"unbound-status"},"未绑定"))
])
]))),128))
])):(r(),d("div",we,[s("div",ke,[s("div",pe,[s("div",me,[s("div",ye,[s("a",{class:"credit-card",onClick:w},[a[3]||(a[3]=s("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none"},[s("path",{d:"M12 5V19M5 12L19 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),s("h6",null,n(i(t)("withdraw.addBankCard")),1)])])])])])])),
]),
k(F)
]));
}};
const Ce=I(be,[["__scopeId","data-v-8c3e3dab"]]);
export{Ce as default};

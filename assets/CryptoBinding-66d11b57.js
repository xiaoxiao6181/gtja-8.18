import{_ as E,a as R,r as i,x as e,c as g,e as l,f as n,g as w,h as r,U as A,i as W,j as t,t as s,p as F,v as N,m as y,y as P,E as _,D as V,o as OM}from"./index-bc88b991.js";
const q={class:"mobile-app"};
const I={class:"binding-content"};
const M={class:"info-card"};
const $={class:"info-header"};
const j={class:"info-text"};
const L={class:"address-form"};
const z={class:"form-group"};
const H={class:"input-group"};
const J=["placeholder"];
const Y={class:"submit-section"};
const Z=["disabled"];
const ee={key:0};
const te={key:1};
const se={__name:"CryptoBinding",setup(){
  const p=R();
  const T=i(!0);
  const u=i(!1);
  const network=i("");
  const o=i("");
  const realAddr=i("");
  const f=g(()=>"绑定USDT地址");
  const m=g(()=>network.value.trim().length>0&&o.value.trim().length>0);
  const C=()=>{p.go(-1)};
  const maskAddr=addr=>{
    const raw=String(addr||"").replace(/\s/g,"");
    if(!raw)return"";
    if(raw.length<=4)return raw;
    return"*".repeat(raw.length-4)+raw.slice(-4);
  };
  const toAddressType=()=>{
    const v=network.value.trim();
    const key=v.toLowerCase().replace(/\s+/g,"");
    if(key==="trc20"||key==="trc"||key==="trc20-usdt"||key==="usdt-trc20")return"TRC20-USDT";
    if(key==="erc20"||key==="erc"||key==="erc20-usdt"||key==="usdt-erc20")return"ERC20-USDT";
    return v||"USDT";
  };
  const loadBound=async()=>{
    try{
      T.value=!0;
      const res=await P.getBankCardInfo();
      if(res&&res.type===1&&res.data){
        const data=res.data;
        const addr=String(data.wallet_address||"").trim();
        let wn=String(data.wallet_name||"").trim();
        if(wn){
          const k=wn.toLowerCase();
          if(k.includes("trc"))wn="TRC20";
          else if(k.includes("erc"))wn="ERC20";
          else wn=wn.toUpperCase();
          network.value=wn;
        }
        if(addr){
          realAddr.value=addr;
          o.value=maskAddr(addr);
        }
      }
    }catch{
      /* ignore */
    }finally{
      T.value=!1;
    }
  };
  const S=async()=>{
    if(!m.value)return;
    try{
      u.value=!0;
      const typ=toAddressType();
      let addr=o.value.trim();
      if(addr.includes("*")&&realAddr.value)addr=realAddr.value;
      const c=await P.bindCryptoAddress(typ,addr);
      if(c&&c.type===1){
        _.success(e("withdraw.bindSuccess"));
        setTimeout(()=>{p.push("/user/cards")},1500);
      }else{
        _.error(c&&c.data||e("withdraw.bindFailed"));
      }
    }catch{
      _.error(e("common.networkError"));
    }finally{
      u.value=!1;
    }
  };
  OM(()=>{loadBound()});
  return(c,h)=>(l(),n("div",q,[
    w(A,{visible:T.value,title:f.value,message:r(e)("common.loading")},null,8,["visible","title","message"]),
    w(W,{title:f.value,"show-back":!0,"show-refresh":!1,"show-menu":!1,onBack:C},null,8,["title"]),
    t("div",I,[
      t("div",M,[
        t("div",$,[
          h[2]||(h[2]=t("div",{class:"crypto-icon"},[
            t("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none"},[
              t("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"}),
              t("path",{d:"M8 14s1.5 2 4 2 4-2 4-2",stroke:"currentColor","stroke-width":"2"})
            ])
          ],-1)),
          t("div",j,[
            h[3]||(h[3]=t("h3",null,"USDT地址",-1)),
            h[4]||(h[4]=t("p",null,"提现到绑定USDT地址",-1))
          ])
        ])
      ]),
      t("div",L,[
        t("div",z,[
          h[5]||(h[5]=t("label",{class:"form-label"},"网络",-1)),
          t("div",H,[
            F(t("input",{
              "onUpdate:modelValue":h[0]||(h[0]=x=>network.value=x),
              type:"text",
              class:"form-input",
              placeholder:"请填写 TRC20 或 ERC20"
            },null,40,J),[[N,network.value]])
          ])
        ]),
        t("div",z,[
          h[6]||(h[6]=t("label",{class:"form-label"},"USDT地址",-1)),
          t("div",H,[
            F(t("input",{
              "onUpdate:modelValue":h[1]||(h[1]=x=>o.value=x),
              type:"text",
              class:"form-input",
              placeholder:"请输入USDT钱包地址"
            },null,40,J),[[N,o.value]])
          ])
        ]),
        t("div",Y,[
          t("button",{class:"submit-btn",disabled:!m.value||u.value,onClick:S},[
            u.value?(l(),n("span",ee,"提交中...")):(l(),n("span",te,"确认绑定地址"))
          ],8,Z)
        ])
      ])
    ]),
    w(V)
  ]));
}};
const oe=E(se,[["__scopeId","data-v-4d388a10"]]);
export{oe as default};

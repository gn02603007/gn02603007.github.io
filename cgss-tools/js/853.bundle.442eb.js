(self.webpackChunkcgss_tools=self.webpackChunkcgss_tools||[]).push([[853],{7853:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Y}});var n=a(3978),c=a.n(n),l=a(368),r=a.n(l),o=a(9649),s=a.n(o),i=a(4074),m=a.n(i),u=a(4310),g=a.n(u),f=a(6902),d=a.n(f),h=a(4494),Z=a.n(h),b=a(4473),E=a.n(b),v=a(116),p=a.n(v),x=a(6202),N=a(5843),y=a.n(N),k=a(2991),C=a.n(k),S=a(7766),G=a.n(S),j=a(8914),T=a.n(j),z=a(717),M=a(1509),O=a(3648),I=a(7294),w=(a(6677),a(1120)),D=a(282),A=a(5639),R=a(1749),F=a(553),P=a(9570),W=a(2663),U=a(9525),_=a(8286),H=a(4436),K=a(3700),V=a(3200),q=a(3258),B=a(6856),J=a(26);function L(e,t){var a=d()(e);if(g()){var n=g()(e);t&&(n=p()(n).call(n,(function(t){return m()(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a,n=null!=arguments[t]?arguments[t]:{};if(t%2)T()(a=L(Object(n),!0)).call(a,(function(t){(0,M.Z)(e,t,n[t])}));else if(s())r()(e,s()(n));else{var l;T()(l=L(Object(n))).call(l,(function(t){c()(e,t,m()(n,t))}))}}return e}var X=w.Z({root:{"& .highlight-none":{webkitUserSelect:"none",mozUserSelect:"none",msUserSelect:"none",oUserSelect:"none",userSelect:"none"},"& .MuiFormControl-root.select":{minWidth:170,margin:5},"& .material-btn":{border:0,borderRadius:3,height:25,minWidth:"auto",margin:3,"&.btn-default":{background:"#e0e0e0","&:hover":{background:"gray"}},"&.btn-cute":{background:"#e6196c"},"&.btn-cool":{background:"#266ce8"},"&.btn-passion":{background:"#febc3f"},"&.btn-princess":{background:"rgb(255 34 132)"},"&.btn-fairy":{background:"rgb(0 94 255)"},"&.btn-angel":{background:"rgb(255 187 0)"}},"& .material-content":{"&.content-default":{},"&.content-cute":{color:"#e6196c"},"&.content-cool":{color:"#266ce8"},"&.content-passion":{color:"#febc3f"},"&.content-princess":{color:"rgb(255 34 132)"},"&.content-fairy":{color:"rgb(0 94 255)"},"&.content-angel":{color:"rgb(255 187 0)"}},"& .content-block":{display:"block",maxHeight:240,overflow:"auto","& .gacha-target":{color:"red"}}},customSelectItems:{"&.item-default":{},"&.item-cute":{color:"#e6196c"},"&.item-cool":{color:"#266ce8"},"&.item-passion":{color:"#febc3f"},"&.item-princess":{color:"rgb(255 34 132)"},"&.item-fairy":{color:"rgb(0 94 255)"},"&.item-angel":{color:"rgb(255 187 0)"}}});function Y(e){var t,a,n,c,l,r=X(),o=e.store,s=(e.dispatch,o.model);(0,O.Z)(s);var i={name:"",color:"default",count:0,isTarget:!0},m={mode:1,addTargetDialogOpen:!1,addTargetState:i,nextGachaDialogOpen:!1,nextGachaState:{gachaNum:0,gachaMember:[]},totalGacha:0,targetCard:[Q(Q({},i),{},{name:"非當期常駐SSR",isTarget:!1})],steps:[],showAllProgress:!0},u=[{name:"default",className:"default"},{name:"キュート",className:"cute"},{name:"クール",className:"cool"},{name:"パッション",className:"passion"},{name:"プリンセス",className:"princess"},{name:"フェアリー",className:"fairy"},{name:"エンジェル",className:"angel"}],g=I.createRef(),f=(0,J.Z)(m),d=(0,z.Z)(f,3),h=d[0],b=d[1],v=d[2];I.useEffect((function(){console.log(h)}),[h]),I.useEffect((function(){document.title="抽卡統計"}),[]),I.useEffect((function(){g.current.scrollIntoView({behavior:"smooth"})}),[h.steps]);var N=function(){var e,t=0;return T()(e=h.targetCard).call(e,(function(e){t+=e.count})),t},k=function(e){var t;return G()(t="".concat(e," ( ")).call(t,h.totalGacha>0?(e/h.totalGacha*100).toFixed(3):0," %)")},S=function(e){v(e,!1)},j=function(e){v("totalGacha",h.totalGacha+e)},M=function(e){var t;b(Q(Q({},h),{},{nextGachaDialogOpen:!0,nextGachaState:{gachaNum:e,gachaMember:C()(t=h.targetCard).call(t,(function(e){return Q(Q({},e),{},{count:0})}))}}))},w=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",c=["material-btn"];if("default"===n)c=G()(e=[]).call(e,(0,x.Z)(c),["btn-default"]);else if("cute"===n){var l;c=G()(l=[]).call(l,(0,x.Z)(c),["btn-cute"])}return"cool"===n&&(c=G()(t=[]).call(t,(0,x.Z)(c),["btn-cool"])),"passion"===n&&(c=G()(a=[]).call(a,(0,x.Z)(c),["btn-passion"])),c.join(" ")},L=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",c=["material-content"];if("default"===n)c=G()(e=[]).call(e,(0,x.Z)(c),["content-default"]);else if("cute"===n){var l;c=G()(l=[]).call(l,(0,x.Z)(c),["content-cute"])}return"cool"===n&&(c=G()(t=[]).call(t,(0,x.Z)(c),["content-cool"])),"passion"===n&&(c=G()(a=[]).call(a,(0,x.Z)(c),["content-passion"])),c.join(" ")};return I.createElement(I.Fragment,null,I.createElement(R.Z,{container:!0,justify:"center",spacing:2,item:!0,xs:!0,className:r.root},I.createElement(R.Z,{container:!0,justify:"center",item:!0,xs:12},I.createElement(R.Z,{container:!0,justify:"flex-start",item:!0,xs:1}),I.createElement(R.Z,{container:!0,justify:"center",item:!0,xs:1}),I.createElement(R.Z,{container:!0,justify:"flex-end",item:!0,xs:10},h.totalGacha>0||N()>0||h.targetCard.length>1?I.createElement(D.Z,{className:w(),size:"small",variant:"contained",onClick:function(){b(m)}},"Reset"):null,1===h.mode?I.createElement(F.Z,{label:"全部過程",className:"highlight-none",control:I.createElement(P.Z,{checked:h.showAllProgress,onChange:function(){v("showAllProgress",!h.showAllProgress)},color:"primary"})}):null,I.createElement(F.Z,{label:"逐次資訊",className:"highlight-none",disabled:h.totalGacha>0||N()>0,control:I.createElement(P.Z,{checked:1===h.mode,onChange:function(){v("mode",0===h.mode?1:0)},color:"primary"})}),I.createElement(D.Z,{className:w(),size:"small",variant:"contained",disabled:h.totalGacha>0||N()>0,onClick:function(){b(Q(Q({},h),{},{addTargetDialogOpen:!0,addTargetState:i}))}},"追加目標")),I.createElement(R.Z,{className:"spacing",item:!0,xs:12}),I.createElement(R.Z,{container:!0,justify:"flex-end",alignItems:"center",item:!0,xs:5,className:L()},"SSR："),I.createElement(R.Z,{container:!0,justify:"flex-start",alignItems:"center",item:!0,xs:7,className:L()},k(N())),C()(t=h.targetCard).call(t,(function(e,t){return I.createElement(I.Fragment,{key:t},I.createElement(R.Z,{className:"spacing",item:!0,xs:12}),I.createElement(R.Z,{container:!0,justify:"flex-end",alignItems:"center",item:!0,xs:5,className:L(e.color)},e.isTarget?"*":"",e.name,"："),I.createElement(R.Z,{container:!0,justify:"flex-start",alignItems:"center",item:!0,xs:3,className:L(e.color)},k(e.count)),I.createElement(R.Z,{container:!0,justify:"flex-start",alignItems:"center",item:!0,xs:4},0===h.mode?I.createElement(D.Z,{className:w(e.color),size:"small",variant:"contained",onClick:function(){!function(e,t){h.targetCard[t].count+=1,b(Q({},h))}(0,t)}},"+1"):null))})),I.createElement(R.Z,{className:"spacing",item:!0,xs:12}),I.createElement(R.Z,{container:!0,justify:"flex-end",alignItems:"center",item:!0,xs:5,className:L()},"總抽數："),I.createElement(R.Z,{container:!0,justify:"flex-start",alignItems:"center",item:!0,xs:3,className:L()},h.totalGacha),I.createElement(R.Z,{container:!0,justify:"flex-start",alignItems:"center",item:!0,xs:4},0===h.mode?I.createElement(I.Fragment,null,I.createElement(D.Z,{className:w(),size:"small",variant:"contained",onClick:function(){j(1)}},"+1"),I.createElement(D.Z,{className:w(),size:"small",variant:"contained",onClick:function(){j(10)}},"+10"),I.createElement(D.Z,{className:w(),size:"small",variant:"contained",onClick:function(){j(100)}},"+100")):1===h.mode?I.createElement(I.Fragment,null,I.createElement(D.Z,{className:w(),size:"small",variant:"contained",onClick:function(){M(1)}},"+1"),I.createElement(D.Z,{className:w(),size:"small",variant:"contained",onClick:function(){M(10)}},"+10")):null),I.createElement(R.Z,{className:"content-block",container:!0,justify:"flex-start",item:!0,xs:12},C()(a=p()(n=h.steps).call(n,(function(e){return e.gachaMember.length>0||h.showAllProgress}))).call(a,(function(e,t){var a,n;return I.createElement(R.Z,{key:t,container:!0,justify:"center",alignItems:"flex-start",item:!0,xs:12},I.createElement(R.Z,{container:!0,justify:"flex-end",item:!0,xs:3},"第 ",e.progress.start===e.progress.end?e.progress.start:G()(a="".concat(e.progress.start," - ")).call(a,e.progress.end)," 抽："),I.createElement(R.Z,{container:!0,justify:"flex-start",item:!0,xs:8},0===e.gachaMember.length?" 什麼SSR都沒有...":C()(n=e.gachaMember).call(n,(function(e,t){return I.createElement(R.Z,{className:e.isTarget?"gacha-target":"",item:!0,xs:12},e.name," x ",e.count)}))))})),I.createElement(R.Z,{ref:g})))),I.createElement(W.Z,{maxWidth:"sm",open:h.addTargetDialogOpen,className:r.root},I.createElement(U.Z,null,I.createElement(R.Z,{container:!0,justify:"flex-start",alignItems:"center",spacing:2},I.createElement(_.Z,{label:"名稱",size:"medium",id:"name",name:"name",type:"text",inputRef:function(e){e&&e.focus()},value:h.addTargetState.name,onChange:function(e){v("addTargetState.name",e.target.value)},error:""===y()(c=h.addTargetState.name).call(c)}),I.createElement(H.Z,{className:"select"},I.createElement(K.Z,null,"屬性"),I.createElement(V.Z,{value:h.addTargetState.color,onChange:function(e){console.log(e,e.target,e.target.value),v("addTargetState.color",e.target.value)}},C()(u).call(u,(function(e){return I.createElement(A.Z,{className:r.customSelectItems+" item-"+e.className,value:e.className},e.name)})))),I.createElement(F.Z,{control:I.createElement(q.Z,{checked:h.addTargetState.isTarget,onChange:function(){v("addTargetState.isTarget",!h.addTargetState.isTarget)},name:"subscribe",color:"primary"}),label:"狙擊目標",labelPlacement:"end"}))),I.createElement(B.Z,null,I.createElement(D.Z,{size:"small",variant:"contained",color:"primary",onClick:function(){var e,t=h.addTargetState,a=t.name,n=t.color,c=t.isTarget;""!==y()(a).call(a)&&v("targetCard",G()(e=[]).call(e,(0,x.Z)(h.targetCard),[Q(Q({},i),{},{name:a,color:n,isTarget:c})]))}},"Add"),I.createElement(D.Z,{size:"small",variant:"contained",color:"secondary",onClick:function(){S("addTargetDialogOpen")}},"Close"))),I.createElement(W.Z,{fullWidth:!0,maxWidth:"sm",open:h.nextGachaDialogOpen,className:r.root},I.createElement(U.Z,null,C()(l=h.nextGachaState.gachaMember).call(l,(function(e,t){var a;return I.createElement(H.Z,{key:G()(a="".concat(t,"-")).call(a,e.name),className:"select"},I.createElement(K.Z,null,e.name),I.createElement(V.Z,{value:h.nextGachaState.gachaMember[t].count,onChange:function(a){!function(e,t,a){var n=h.nextGachaState;t===n.gachaMember[a].name&&(n.gachaMember[a].count=e,v("nextGachaState",n))}(a.target.value,e.name,t)}},function(e,t){var a,n=0;T()(a=h.nextGachaState.gachaMember).call(a,(function(e){n+=e.count}));var c=n-t.count,l=new Array(1+(c>=e?0:e-c));return Z()(l).call(l,""),C()(l).call(l,(function(e,t){return I.createElement(A.Z,{value:t},t)}))}(h.nextGachaState.gachaNum,e)))}))),I.createElement(B.Z,null,I.createElement(D.Z,{size:"small",variant:"contained",color:"primary",onClick:function(){var e,t,a=h.totalGacha,n=h.targetCard,c=h.nextGachaState,l=h.steps;a+=c.gachaNum,l=G()(e=[]).call(e,(0,x.Z)(l),[{gachaCount:c.gachaNum,gachaMember:p()(t=c.gachaMember).call(t,(function(e){return e.count>0})),progress:{start:a-c.gachaNum+1,end:a}}]),n=C()(n).call(n,(function(e,t){var a,n=E()(a=c.gachaMember).call(a,(function(a,n){return a.count>0&&e.name===a.name&&t===n}));return n&&(e.count+=n.count),e})),b(Q(Q({},h),{},{totalGacha:a,targetCard:n,steps:l,nextGachaDialogOpen:!1}))}},"OK"),I.createElement(D.Z,{size:"small",variant:"contained",color:"secondary",onClick:function(){S("nextGachaDialogOpen")}},"Cancel"))))}},26:function(e,t,a){"use strict";var n=a(3978),c=a.n(n),l=a(368),r=a.n(l),o=a(9649),s=a.n(o),i=a(8914),m=a.n(i),u=a(4074),g=a.n(u),f=a(116),d=a.n(f),h=a(4310),Z=a.n(h),b=a(6902),E=a.n(b),v=a(1509),p=a(717),x=a(7294);function N(e,t){var a=E()(e);if(Z()){var n=Z()(e);t&&(n=d()(n).call(n,(function(t){return g()(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a,n=null!=arguments[t]?arguments[t]:{};if(t%2)m()(a=N(Object(n),!0)).call(a,(function(t){(0,v.Z)(e,t,n[t])}));else if(s())r()(e,s()(n));else{var l;m()(l=N(Object(n))).call(l,(function(t){c()(e,t,g()(n,t))}))}}return e}t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=x.useState(e),a=(0,p.Z)(t,2),n=a[0],c=a[1],l=function(e,t){for(var a=n,l=e.split("."),r=0;r<l.length-1;r++)a[l[r]]||(a[l[r]]={}),a=a[l[r]];a[l[l.length-1]]=t,c(y({},n))};return[n,c,l]}}}]);
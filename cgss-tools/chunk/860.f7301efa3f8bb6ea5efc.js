"use strict";(self.webpackChunkcgss_tools=self.webpackChunkcgss_tools||[]).push([[860],{9643:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n(7462),r=n(5987),i=n(7294),a=(n(5697),n(6010)),s=n(9143),l=n(2692),c=n(4670),d=n(3935),u=n(9437),p=n(2666),f=n(3834),m=n(8920),v=n(3291),g=n(5653);function h(e,t){var n=function(e,t){var n,o=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var r=window.getComputedStyle(t);n=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var i=0,a=0;if(n&&"none"!==n&&"string"==typeof n){var s=n.split("(")[1].split(")")[0].split(",");i=parseInt(s[4],10),a=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(i-o.left,"px)"):"right"===e?"translateX(-".concat(o.left+o.width-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-o.top,"px)"):"translateY(-".concat(o.top+o.height-a,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var b={enter:v.x9.enteringScreen,exit:v.x9.leavingScreen};const x=i.forwardRef((function(e,t){var n=e.children,a=e.direction,s=void 0===a?"down":a,l=e.in,c=e.onEnter,v=e.onEntered,x=e.onEntering,Z=e.onExit,k=e.onExited,y=e.onExiting,E=e.style,w=e.timeout,C=void 0===w?b:w,P=e.TransitionComponent,O=void 0===P?p.ZP:P,S=(0,r.Z)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),N=(0,m.Z)(),D=i.useRef(null),T=i.useCallback((function(e){D.current=d.findDOMNode(e)}),[]),A=(0,f.Z)(n.ref,T),j=(0,f.Z)(A,t),B=function(e){return function(t){e&&(void 0===t?e(D.current):e(D.current,t))}},I=B((function(e,t){h(s,e),(0,g.n)(e),c&&c(e,t)})),R=B((function(e,t){var n=(0,g.C)({timeout:C,style:E},{mode:"enter"});e.style.webkitTransition=N.transitions.create("-webkit-transform",(0,o.Z)({},n,{easing:N.transitions.easing.easeOut})),e.style.transition=N.transitions.create("transform",(0,o.Z)({},n,{easing:N.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",x&&x(e,t)})),M=B(v),F=B(y),L=B((function(e){var t=(0,g.C)({timeout:C,style:E},{mode:"exit"});e.style.webkitTransition=N.transitions.create("-webkit-transform",(0,o.Z)({},t,{easing:N.transitions.easing.sharp})),e.style.transition=N.transitions.create("transform",(0,o.Z)({},t,{easing:N.transitions.easing.sharp})),h(s,e),Z&&Z(e)})),V=B((function(e){e.style.webkitTransition="",e.style.transition="",k&&k(e)})),_=i.useCallback((function(){D.current&&h(s,D.current)}),[s]);return i.useEffect((function(){if(!l&&"down"!==s&&"right"!==s){var e=(0,u.Z)((function(){D.current&&h(s,D.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[s,l]),i.useEffect((function(){l||_()}),[l,_]),i.createElement(O,(0,o.Z)({nodeRef:D,onEnter:I,onEntered:M,onEntering:R,onExit:L,onExited:V,onExiting:F,appear:!0,in:l,timeout:C},S),(function(e,t){return i.cloneElement(n,(0,o.Z)({ref:j,style:(0,o.Z)({visibility:"exited"!==e||l?void 0:"hidden"},E,n.props.style)},t))}))}));var Z=n(9895),k=n(3871),y={left:"right",right:"left",top:"down",bottom:"up"};var E={enter:v.x9.enteringScreen,exit:v.x9.leavingScreen},w=i.forwardRef((function(e,t){var n=e.anchor,c=void 0===n?"left":n,d=e.BackdropProps,u=e.children,p=e.classes,f=e.className,v=e.elevation,g=void 0===v?16:v,h=e.ModalProps,b=(h=void 0===h?{}:h).BackdropProps,w=(0,r.Z)(h,["BackdropProps"]),C=e.onClose,P=e.open,O=void 0!==P&&P,S=e.PaperProps,N=void 0===S?{}:S,D=e.SlideProps,T=e.TransitionComponent,A=void 0===T?x:T,j=e.transitionDuration,B=void 0===j?E:j,I=e.variant,R=void 0===I?"temporary":I,M=(0,r.Z)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),F=(0,m.Z)(),L=i.useRef(!1);i.useEffect((function(){L.current=!0}),[]);var V=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?y[t]:t}(F,c),_=i.createElement(Z.Z,(0,o.Z)({elevation:"temporary"===R?g:0,square:!0},N,{className:(0,a.Z)(p.paper,p["paperAnchor".concat((0,k.Z)(V))],N.className,"temporary"!==R&&p["paperAnchorDocked".concat((0,k.Z)(V))])}),u);if("permanent"===R)return i.createElement("div",(0,o.Z)({className:(0,a.Z)(p.root,p.docked,f),ref:t},M),_);var G=i.createElement(A,(0,o.Z)({in:O,direction:y[V],timeout:B,appear:L.current},D),_);return"persistent"===R?i.createElement("div",(0,o.Z)({className:(0,a.Z)(p.root,p.docked,f),ref:t},M),G):i.createElement(s.Z,(0,o.Z)({BackdropProps:(0,o.Z)({},d,b,{transitionDuration:B}),BackdropComponent:l.Z,className:(0,a.Z)(p.root,p.modal,f),open:O,onClose:C,ref:t},M,w),G)}));const C=(0,c.Z)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(w)},998:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(7462),r=n(5987),i=n(7294),a=(n(5697),n(6010)),s=n(4670),l=n(2467),c=n(3711),d=n(3834),u=n(6987),p=n(3935),f="undefined"==typeof window?i.useEffect:i.useLayoutEffect,m=i.forwardRef((function(e,t){var n=e.alignItems,s=void 0===n?"center":n,m=e.autoFocus,v=void 0!==m&&m,g=e.button,h=void 0!==g&&g,b=e.children,x=e.classes,Z=e.className,k=e.component,y=e.ContainerComponent,E=void 0===y?"li":y,w=e.ContainerProps,C=(w=void 0===w?{}:w).className,P=(0,r.Z)(w,["className"]),O=e.dense,S=void 0!==O&&O,N=e.disabled,D=void 0!==N&&N,T=e.disableGutters,A=void 0!==T&&T,j=e.divider,B=void 0!==j&&j,I=e.focusVisibleClassName,R=e.selected,M=void 0!==R&&R,F=(0,r.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),L=i.useContext(u.Z),V={dense:S||L.dense||!1,alignItems:s},_=i.useRef(null);f((function(){v&&_.current&&_.current.focus()}),[v]);var G=i.Children.toArray(b),z=G.length&&(0,c.Z)(G[G.length-1],["ListItemSecondaryAction"]),W=i.useCallback((function(e){_.current=p.findDOMNode(e)}),[]),Y=(0,d.Z)(W,t),$=(0,o.Z)({className:(0,a.Z)(x.root,Z,V.dense&&x.dense,!A&&x.gutters,B&&x.divider,D&&x.disabled,h&&x.button,"center"!==s&&x.alignItemsFlexStart,z&&x.secondaryAction,M&&x.selected),disabled:D},F),H=k||"li";return h&&($.component=k||"div",$.focusVisibleClassName=(0,a.Z)(x.focusVisible,I),H=l.Z),z?(H=$.component||k?H:"div","li"===E&&("li"===H?H="div":"li"===$.component&&($.component="div")),i.createElement(u.Z.Provider,{value:V},i.createElement(E,(0,o.Z)({className:(0,a.Z)(x.container,C),ref:Y},P),i.createElement(H,$,G),G.pop()))):i.createElement(u.Z.Provider,{value:V},i.createElement(H,(0,o.Z)({ref:Y},$),G))}));const v=(0,s.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(m)},5227:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o.Z});var o=n(998)},3240:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o.Z});var o=n(2822)},5194:(e,t,n)=>{var o=n(530);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var{store:t,dispatch:n}=e,{model:o,lang:d}=t,{menuOpen:u}=o,p=function(e){n(i.setStateData("model",{...o,page:e,menuOpen:!1}))};return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.default,{anchor:"left",open:u||!1,onClose:function(){n(i.setStateData("model.menuOpen",!1))}},r.default.createElement(s.default,{className:"function-menu",style:{userSelect:"none"}},r.default.createElement(l.default,{onClick:function(){p("Kakin")}},c.getStrFromObj(d,"kakin.title")),r.default.createElement(l.default,{onClick:function(){p("Gacha")}},c.getStrFromObj(d,"gachaStatistics.title")),r.default.createElement(l.default,{onClick:function(){p("Groove")}},"[CGSS] Groove活動計算機"))))};var r=o(n(7294)),i=u(n(7726)),a=o(n(9643)),s=o(n(3240)),l=o(n(5227)),c=u(n(447));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}},447:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getStrFromObj=void 0;t.getStrFromObj=function(e={},t="",n=""){for(var o=e,r=t.split("."),i=0;i<r.length;i++){if(void 0===o[r[i]])return n;o=o[r[i]]}return o}}}]);
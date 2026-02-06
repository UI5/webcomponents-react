import{r,b7 as G,aI as K,u as oe,j as e,p as te,bh as Y,aj as ne,aH as se,X as m,U as ae,I as ce,hc as J,T as q}from"./iframe-BHRyWWCK.js";import{F as B}from"./index-UnB73Rnf.js";import{v as Q}from"./vertical-grip-C-Q6z40-.js";import{u as ue}from"./useIsRTL-BTNxBqyX.js";import{u as de}from"./useCurrentTheme-B-94HWui.js";import{d as pe}from"./debounce-D7W5PopO.js";import{a as me,S as Z}from"./index-kofx5hev.js";import{L as he}from"./index-DibDZuef.js";const ie=r.createContext({vertical:!0,reset:!1}),ge="@layer ui5-webcomponents-react{._splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}}",ye={splitterElement:"_splitterElement_5jt3n_1"},i=r.forwardRef((l,u)=>{const{children:s,style:y,className:f,minSize:c=0,size:n="auto",resizable:_,...j}=l,[C,k]=G(u),{vertical:L,reset:x}=r.useContext(ie),w=Y()?{width:"min-content",flex:"1 1 auto"}:{},t=typeof n=="number"?`${n}px`:n,[b,N]=r.useState(!1),[d,E]=r.useState(null),R=x?void 0:t!=="auto"?{flex:`0 1 ${t}`}:d??{flex:"1 0 min-content",...w};return K(ge,i.displayName),r.useEffect(()=>{if(t!=="auto")return;const v=new ResizeObserver(([O])=>{if(O.target.getBoundingClientRect().width!==0&&!b){const P=Y()?{width:"unset"}:{};E({flex:`0 0 ${O.target.getBoundingClientRect()[L?"height":"width"]}px`,...P}),N(!0)}});return k.current&&v.observe(k.current),()=>{v.disconnect()}},[t,b,k,L]),oe(()=>{x&&(E(null),N(!1))},[x]),e.jsx("div",{ref:C,className:te(ye.splitterElement,f),style:{minHeight:L&&c?`${c}px`:void 0,minWidth:!L&&c?`${c}px`:void 0,...R,...y},...j,"data-min-size":c,children:s})});i.displayName="SplitterElement";try{i.displayName="SplitterElement",i.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const fe="@layer ui5-webcomponents-react{._splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}}",_e={splitterLayout:"_splitterLayout_6n3m3_1"},Se="horizontal-grip",xe="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",be=!1,ve="SAP-icons-v4",ze="@ui5/webcomponents-icons";ne(Se,{pathData:xe,ltr:be,collection:ve,packageName:ze});const Ce="horizontal-grip",we="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Ee=!1,Be="SAP-icons-v5",je="@ui5/webcomponents-icons";ne(Ce,{pathData:we,ltr:Ee,collection:Be,packageName:je});const ee="horizontal-grip",ke="@layer ui5-webcomponents-react{._splitter_ce1yt_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}._splitter_ce1yt_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._icon_ce1yt_38{padding:.5rem 0}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripContainer_ce1yt_44{height:2rem;width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripButton_ce1yt_48{height:1.625rem;min-width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}._splitter_ce1yt_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._icon_ce1yt_38{padding:0 .5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripContainer_ce1yt_44{height:1.5rem;width:2rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripButton_ce1yt_48{height:1.5rem;min-width:1.625rem}._splitter_ce1yt_1:hover ._lineAfter_ce1yt_30,._splitter_ce1yt_1:hover ._lineBefore_ce1yt_29{flex-grow:1;transition:all .1s ease-in}._gripContainer_ce1yt_44{align-items:center;display:flex;justify-content:center;z-index:1}._gripButton_ce1yt_48{cursor:inherit}._gripButton_ce1yt_48:active{z-index:2}._icon_ce1yt_38{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-position:50%;background-repeat:no-repeat}}",T={splitter:"_splitter_ce1yt_1",lineBefore:"_lineBefore_ce1yt_29",lineAfter:"_lineAfter_ce1yt_30",icon:"_icon_ce1yt_38",gripContainer:"_gripContainer_ce1yt_44",gripButton:"_gripButton_ce1yt_48"},Le={start:"top",startUppercase:"Top",end:"bottom",position:"Y",size:"height",min:"minHeight",offset:"offsetY"},Re={start:"left",startUppercase:"Left",end:"right",position:"X",size:"width",min:"minWidth",offset:"offsetX"},$=r.forwardRef((l,u)=>{const{vertical:s,onResize:y}=l,f=se("@ui5/webcomponents-react"),[c,n]=G(u),_=ue(n),j=r.useRef(null);K(ke,$.displayName);const C=r.useRef(null),k=r.useRef(null),L=r.useRef(null),x=r.useRef(null),w=r.useRef(0),t=s?Le:Re,[b,N]=r.useState(!1),d=_&&!s?["nextSibling","previousSibling"]:["previousSibling","nextSibling"],E=r.useRef(null),R=(a,h)=>{E.current&&cancelAnimationFrame(E.current),typeof y=="function"&&(E.current=requestAnimationFrame(()=>{const p=_?h:a,o=_?a:h,S=n.current.getBoundingClientRect()[t.size];y({areas:[{size:p.getBoundingClientRect()?.[t.size]+S,area:p},{size:o.getBoundingClientRect()?.[t.size]+(o.nextElementSibling!==null?S:0),area:o}],splitter:n.current}),E.current=null}))},v=a=>{const h=w.current,p=n.current[d[0]],o=n.current[d[1]],S=b==="touch"?a.touches[0][`client${t.position}`]:a[`client${t.position}`],g=S-j.current,A=n.current.getBoundingClientRect()[t.size],M=g<0,X=()=>{p.style.flex=`0 0 ${C.current+g}px`,o.nextSibling&&C.current+g>0&&(o.style.flex=`0 0 ${k.current-g}px`),R(p,o)};C.current+g>0&&S+(A-h)<=x.current&&(parseInt(p.dataset.minSize,10)<=C.current+g&&M&&X(),k.current-g>=parseInt(o.dataset.minSize,10)&&!M&&X()),!o[d[1]]&&!_&&(o.style.flex="1 0 0px")},O=(a,h)=>{if(!n.current)return;const p=n.current[d[0]],o=n.current[d[1]],S=n.current[d[0]].getBoundingClientRect(),g=n.current[d[1]].getBoundingClientRect(),A=h?Math.round(a.changedTouches[0][`client${t.position}`]):a[`client${t.position}`];!n.current.contains(a.target)&&A-n.current[`offset${t.startUppercase}`]+1<0&&(p.style.flex="0 0 0px",p.style?.[t.min]?o.style.flex=`0 0 ${g?.[t.size]+(S?.[t.size]-p.style?.[t.min].replace("px",""))}px`:o.style.flex=`0 0 ${g?.[t.size]+S?.[t.size]}px`,R(p,o)),x.current<A&&(o.style.flex="0 0 0px",o.style?.[t.min]?p.style.flex=`0 0 ${S?.[t.size]+(g?.[t.size]-o.style?.[t.min].replace("px",""))}px`:p.style.flex=`0 0 ${S?.[t.size]+g?.[t.size]}px`,R(p,o))},P=a=>{a.type==="pointerdown"&&a.pointerType!=="touch"||(a.currentTarget.focus(),a.preventDefault(),N(a.pointerType??"mouse"),w.current=a.nativeEvent[t.offset],L.current=n.current[d[0]].getBoundingClientRect()?.[t.end],n.current[d[1]][d[1]]?x.current=n.current[d[1]][d[1]].getBoundingClientRect()?.[t.start]:x.current=n.current.parentElement.getBoundingClientRect()[t.end],C.current=n.current[d[0]].getBoundingClientRect()?.[t.size],k.current=n.current[d[1]].getBoundingClientRect()?.[t.size],j.current=a[`client${t.position}`])},re=a=>{const h=a.code??a.key;if(h==="ArrowRight"||h==="ArrowLeft"||h==="ArrowUp"||h==="ArrowDown"){a.preventDefault();let p=n.current[d[0]],o=n.current[d[1]];(h==="ArrowLeft"||h==="ArrowUp")&&(o=n.current[d[0]],p=n.current[d[1]]);const S=o.style[t.min]?o.getBoundingClientRect()?.[t.size]-Number(o.style[t.min].replace("px","")):o.getBoundingClientRect()?.[t.size];if(document.activeElement===n.current){const g=S>=20?20:S,A=p.getBoundingClientRect()?.[t.size],M=o.getBoundingClientRect()?.[t.size];o.style.flex=`0 0 ${M-g}px`,p.style.flex=`0 0 ${A+g}px`,h==="ArrowLeft"||h==="ArrowUp"?R(o,p):R(p,o)}}},U=a=>{O(a,b==="touch"),N(!1)};r.useEffect(()=>{const a=()=>{b==="touch"?(document.removeEventListener("touchmove",v),document.removeEventListener("touchend",U)):(document.removeEventListener("mouseup",U),document.removeEventListener("mousemove",v))};return b?b==="touch"?(document.addEventListener("touchmove",v),document.addEventListener("touchend",U)):(document.addEventListener("mousemove",v),document.addEventListener("mouseup",U)):a(),()=>{a()}},[b]);const H=de(),le=H==="sap_fiori_3_hcb"||H==="sap_fiori_3_hcw"||H==="sap_horizon_hcb"||H==="sap_horizon_hcw";return e.jsxs("div",{className:T.splitter,tabIndex:0,onKeyDown:re,onPointerDown:P,onMouseDown:P,ref:c,role:"separator","data-splitter-vertical":s?"vertical":"horizontal",title:f.getText(J),"aria-orientation":s?"vertical":"horizontal","aria-label":f.getText(J),children:[e.jsx("div",{className:T.lineBefore}),e.jsx("div",{className:T.gripContainer,children:le?e.jsx(m,{className:T.gripButton,tabIndex:-1,icon:s?ee:Q,design:ae.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(ce,{className:T.icon,name:s?ee:Q,"data-component-name":"SplitterLayoutSplitterGrip"})}),e.jsx("div",{className:T.lineAfter})]})});$.displayName="Splitter";try{$.displayName="Splitter",$.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}const W=l=>r.useMemo(()=>{if(r.isValidElement(l?.children))return l?.children;const u=r.Children.toArray(l?.children).filter(r.isValidElement);let s=0;const y=[];return u.forEach((f,c)=>{const n=u[c+s],_=Object.prototype.hasOwnProperty.call(n.props,"minSize")?n.props.minSize:0;if(u.length-s-1>c&&(n.props.resizable||n.props.resizable===void 0)&&_!==void 0)u.splice(c+s+1,0,e.jsx($,{height:l?.height,width:l?.width,vertical:l?.vertical,onResize:l?.onResize},`splitter${c}`)),y.push(c+1+s-1),++s;else if(c>0&&n?.props.resizable===!1){const j=u.findIndex(C=>C===n)-1;u[j].props.minSize===void 0&&u.splice(j,1),y.pop(),--s}}),y.forEach(f=>{const c=u[f]?.props?.size,n=typeof c=="number"?`${c}px`:c;c&&c!=="auto"&&(u[f]=r.cloneElement(u[f],{size:`calc(${n} - var(--_ui5wcr-SplitterSize))`}))}),u},[l]);try{W.displayName="useConcatSplitterElements",W.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}const z=r.forwardRef((l,u)=>{const{vertical:s,children:y,title:f,style:c,className:n,options:_,onResize:j,...C}=l,[k,L]=G(u),[x,w]=r.useState(void 0),t=r.useRef({width:void 0,height:void 0}),b=r.useRef(!0),N=r.useRef(!0),d=W({children:y??[],width:c?.width,height:c?.height,vertical:s,onResize:j});return K(fe,z.displayName),r.useEffect(()=>{!b.current&&_?.resetOnChildrenChange&&w(!0),b.current=!1},[y,_?.resetOnChildrenChange]),r.useEffect(()=>{N.current||w(!0),N.current=!1},_?.resetOnCustomDepsChange??[]),r.useEffect(()=>{if(_?.resetOnSizeChange){const E=new ResizeObserver(pe(([R])=>{const v=R.target.getBoundingClientRect();!s&&v.width!==t.current.width?(t.current.width=v.width,w(!0)):s&&v.height!==t.current.height&&(t.current.height=v.height,w(!0))},60));return E.observe(L.current),()=>{E.disconnect()}}},[s,_?.resetOnSizeChange,L]),r.useEffect(()=>{x&&w(!1)},[x]),e.jsx(ie.Provider,{value:{vertical:s,reset:x},children:e.jsx("div",{style:{flexDirection:s?"column":"row",...c},title:f,...C,className:te(_e.splitterLayout,n),ref:k,"data-splitter-vertical":s,children:d})})});z.displayName="SplitterLayout";try{z.displayName="SplitterLayout",z.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"SplitterLayoutChild | SplitterLayoutChild[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},onResize:{defaultValue:null,description:'Fired when contents are resized.\n\n__Note:__\n- Resize events can fire many times in quick succession, it’s therefore strongly recommended to debounce your handler if you’re updating React state or causing other expensive operations.\n- The `areas` array reflects the logical position of the `SplitterElement`s relative to the "Splitter".',name:"onResize",required:!1,type:{name:"(e: OnResizeParam) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const I=({text:l,background:u="transparent"})=>e.jsx(B,{style:{height:"100%",width:"100%",background:u},alignItems:"Center",justifyContent:"Center",children:e.jsx(q,{children:l})}),Ne={title:"Layouts & Floorplans / SplitterLayout",component:z,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}},tags:["package:@ui5/webcomponents-react"]},F={parameters:{chromatic:{diffThreshold:.6}},render(l){return e.jsxs(z,{...l,children:[e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(q,{children:"Content 1"})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(q,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(q,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(i,{children:e.jsx(B,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(q,{children:"Content 4"})})})]})}},D={render(l){return e.jsxs(z,{...l,children:[e.jsx(i,{size:"10%",children:e.jsx(I,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(i,{children:e.jsx(I,{text:"Content 2",background:"skyblue"})}),e.jsx(i,{minSize:200,children:e.jsx(I,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(i,{children:e.jsx(I,{text:"Content 4",background:"paleturquoise"})}),e.jsx(i,{children:e.jsx(I,{text:"Content 5",background:"lightskyblue"})}),e.jsx(i,{resizable:!1,size:"150px",children:e.jsx(I,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(i,{children:e.jsx(I,{text:"Content 7",background:"aliceblue"})}),e.jsx(i,{children:e.jsx(I,{text:"Content 8",background:"lightsteelblue"})})]})}},V={parameters:{chromatic:{disableSnapshot:!0}},render(l){const[u,s]=r.useState(l.vertical),y=f=>{s(f.detail.selectedItems[0].textContent==="Vertical")};return r.useEffect(()=>{s(l.vertical)},[l.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(B,{direction:"Column",children:[e.jsx(he,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(me,{onSelectionChange:y,children:[e.jsx(Z,{pressed:!u,children:"Horizontal"}),e.jsx(Z,{pressed:u,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(z,{style:l.style,vertical:u,children:[e.jsx(i,{size:"40%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(z,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(i,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(i,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(i,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(z,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(i,{size:"50%",children:e.jsxs(B,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(z,{vertical:!0,style:{height:"100%"},children:[e.jsx(i,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(i,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(i,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(i,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(i,{children:e.jsxs(B,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(z,{style:{height:"100%"},children:[e.jsx(i,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(i,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(i,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(i,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(i,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      diffThreshold: 0.6
    }
  },
  render(args) {
    return <SplitterLayout {...args}>
        <SplitterElement>
          <FlexBox style={{
          height: '100%',
          width: '100%'
        }} alignItems="Center" justifyContent="Center">
            <Text>Content 1</Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement>
          <FlexBox style={{
          height: '100%',
          width: '100%'
        }} alignItems="Center" justifyContent="Center">
            <Text style={{
            whiteSpace: 'pre-line'
          }}>{\`Content 2
            with
            multi
            lines
            \`}</Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement>
          <FlexBox style={{
          height: '100%',
          width: '100%'
        }} alignItems="Center" justifyContent="Center">
            <Text>
              Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            </Text>
          </FlexBox>
        </SplitterElement>
        <SplitterElement>
          <FlexBox style={{
          height: '100%',
          width: '100%'
        }} alignItems="Center" justifyContent="Center">
            <Text>Content 4</Text>
          </FlexBox>
        </SplitterElement>
      </SplitterLayout>;
  }
}`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <SplitterLayout {...args}>
        <SplitterElement size="10%">
          <SplitterElementContent text="Content 1 - (size: 10%)" background="cadetblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 2" background="skyblue" />
        </SplitterElement>
        <SplitterElement minSize={200}>
          <SplitterElementContent text="Content 3 (minSize: 200)" background="lightblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 4" background="paleturquoise" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 5" background="lightskyblue" />
        </SplitterElement>
        <SplitterElement resizable={false} size="150px">
          <SplitterElementContent text="Content 6 (not resizable - size: 150px)" background="powderblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 7" background="aliceblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 8" background="lightsteelblue" />
        </SplitterElement>
      </SplitterLayout>;
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render(args) {
    const [vertical, setVertical] = useState(args.vertical);
    const handleChange = e => {
      setVertical(e.detail.selectedItems[0].textContent === 'Vertical');
    };
    useEffect(() => {
      setVertical(args.vertical);
    }, [args.vertical]);
    return <>
        {!isChromatic && <FlexBox direction="Column">
            <Label showColon>Orientation of outer SplitterLayout</Label>
            <SegmentedButton onSelectionChange={handleChange}>
              <SegmentedButtonItem pressed={!vertical}>Horizontal</SegmentedButtonItem>
              <SegmentedButtonItem pressed={vertical}>Vertical</SegmentedButtonItem>
            </SegmentedButton>
          </FlexBox>}
        <br />
        <br />
        <SplitterLayout style={args.style} vertical={vertical}>
          <SplitterElement size="40%">
            <FlexBox direction="Column" style={{
            width: '100%',
            height: '100%'
          }}>
              <Button style={{
              width: '100%'
            }}>Content 1</Button>
              <SplitterLayout style={{
              height: '100%'
            }}>
                <SplitterElement style={{
                background: 'lightblue'
              }} size="auto">
                  <Button>Content 2</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'skyblue'
              }} size="10%">
                  <Button data-auto>Content 3</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'cadetblue'
              }} size="auto">
                  <Button>Content 4</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'lightskyblue'
              }} size="60%">
                  <FlexBox direction="Column" style={{
                  width: '100%'
                }}>
                    <Button style={{
                    width: '100%'
                  }}>Content 5</Button>
                    <SplitterLayout style={{
                    height: '100%'
                  }}>
                      <SplitterElement style={{
                      background: '#E29713'
                    }}>
                        <Button>Content 6</Button>
                      </SplitterElement>
                      <SplitterElement size="50%">
                        <FlexBox direction="Column" style={{
                        width: '100%',
                        height: '100%'
                      }}>
                          <Button style={{
                          width: '100%'
                        }}>Content 7</Button>
                          <SplitterLayout vertical={true} style={{
                          height: '100%'
                        }}>
                            <SplitterElement style={{
                            background: 'lightgrey'
                          }} size="50%">
                              <Button>Content 8</Button>
                            </SplitterElement>
                            <SplitterElement style={{
                            background: 'grey'
                          }} size="50%">
                              <Button>Content 9</Button>
                            </SplitterElement>
                          </SplitterLayout>
                        </FlexBox>
                      </SplitterElement>
                      <SplitterElement style={{
                      background: '#D3A95E'
                    }}>
                        <Button>Content 10</Button>
                      </SplitterElement>
                    </SplitterLayout>
                  </FlexBox>
                </SplitterElement>
              </SplitterLayout>
            </FlexBox>
          </SplitterElement>
          <SplitterElement size="20%">
            <Button style={{
            width: '100%'
          }}>Content 11</Button>
          </SplitterElement>
          <SplitterElement>
            <FlexBox direction="Column" style={{
            width: '100%'
          }}>
              <Button style={{
              width: '100%'
            }}>Content 12</Button>
              <SplitterLayout style={{
              height: '100%'
            }}>
                <SplitterElement style={{
                background: 'forestgreen'
              }} size="15%">
                  <Button>Content 13</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'darkgreen'
              }} size="15%">
                  <Button>Content 14</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'olive'
              }} resizable={false} size="40%">
                  <Button>Content 15</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'green'
              }} size="15%">
                  <Button>Content 16</Button>
                </SplitterElement>
                <SplitterElement style={{
                background: 'seagreen'
              }} size="15%">
                  <Button>Content 17</Button>
                </SplitterElement>
              </SplitterLayout>
            </FlexBox>
          </SplitterElement>
        </SplitterLayout>
      </>;
  }
}`,...V.parameters?.docs?.source}}};const Ie=["Default","LimitedAreas","Nested"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Default:F,LimitedAreas:D,Nested:V,__namedExportsOrder:Ie,default:Ne},Symbol.toStringTag,{value:"Module"}));export{Pe as C,F as D,D as L,V as N,i as S};

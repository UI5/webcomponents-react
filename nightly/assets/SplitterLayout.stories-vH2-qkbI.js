import{r as i,aF as G,aO as K,u as X,j as e,x as ie,bg as J,aj as re,aN as ae,Q as m,_ as ce,I as ue,gQ as Z,J as F}from"./iframe-BVsLYlhe.js";import{F as E}from"./index-BBlqkBew.js";import{v as ee}from"./vertical-grip-K4fkeQd3.js";import{u as de}from"./useIsRTL-DzejkbSx.js";import{u as pe}from"./useCurrentTheme-DSoyNXre.js";import{d as me}from"./debounce-D7W5PopO.js";import{a as he,S as te}from"./index-MoN8cciG.js";import{L as ge}from"./index-CppXcbvf.js";const le=i.createContext({vertical:!0,reset:!1}),ye="@layer ui5-webcomponents-react{._splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}}",fe={splitterElement:"_splitterElement_5jt3n_1"},r=i.forwardRef((l,d)=>{const{children:s,style:f,className:_,minSize:u=0,size:n="auto",resizable:y,...B}=l,[z,L]=G(d),{vertical:R,reset:C}=i.useContext(le),w=J()?{width:"min-content",flex:"1 1 auto"}:{},t=typeof n=="number"?`${n}px`:n,b=t!=="auto"?{flex:`0 1 ${t}`}:{flex:"1 0 min-content",...w},[j,c]=i.useState(b),[I,k]=i.useState(!1);return K(ye,r.displayName),i.useEffect(()=>{const S=new ResizeObserver(([A])=>{if(A.target.getBoundingClientRect().width!==0&&!I){const H=J()?{width:"unset"}:{};c({flex:`0 0 ${A.target.getBoundingClientRect()[R?"height":"width"]}px`,...H}),k(!0)}});return t==="auto"&&L.current?S.observe(L.current):c({flex:`0 1 ${t}`}),()=>{S.disconnect()}},[t,I,R]),X(()=>{C&&(c(void 0),k(!1))},[C,t]),X(()=>{j===void 0&&c(b)},[j]),e.jsx("div",{ref:z,className:ie(fe.splitterElement,_),style:{minHeight:R&&u?`${u}px`:void 0,minWidth:!R&&u?`${u}px`:void 0,...j,...f},...B,"data-min-size":u,children:s})});r.displayName="SplitterElement";try{r.displayName="SplitterElement",r.__docgenInfo={description:"The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or\nheight according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or\nheight of the content area will be calculated automatically according to the size of the given `SplitterLayout`.\nThe `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the\ncontent can be completely collapsed.",displayName:"SplitterElement",props:{resizable:{defaultValue:null,description:"Defines whether a resizer element is displayed.\n\nIf the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this\n`SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.\nDefault value of resizable is `true`.",name:"resizable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'`"auto"`'},description:"Defines the initial size of the `SplitterElement`.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},minSize:{defaultValue:{value:"`0`"},description:"Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.",name:"minSize",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Defines the content which is shown inside the `SplitterElement`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const _e="@layer ui5-webcomponents-react{._splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}._splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}}",Se={splitterLayout:"_splitterLayout_6n3m3_1"},xe="horizontal-grip",be="M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z",ve=!1,ze="SAP-icons-v4",Ce="@ui5/webcomponents-icons";re(xe,{pathData:be,ltr:ve,collection:ze,packageName:Ce});const we="horizontal-grip",Ee="M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",Be=!1,je="SAP-icons-v5",ke="@ui5/webcomponents-icons";re(we,{pathData:Ee,ltr:Be,collection:je,packageName:ke});const ne="horizontal-grip",Le="@layer ui5-webcomponents-react{._splitter_ce1yt_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}._splitter_ce1yt_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:col-resize;flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineBefore_ce1yt_29{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._icon_ce1yt_38{padding:.5rem 0}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._lineAfter_ce1yt_30{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripContainer_ce1yt_44{height:2rem;width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=horizontal] ._gripButton_ce1yt_48{height:1.625rem;min-width:1.5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);cursor:row-resize;flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}._splitter_ce1yt_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30,._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineBefore_ce1yt_29):dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._icon_ce1yt_38{padding:0 .5rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}:is(._splitter_ce1yt_1[data-splitter-vertical=vertical] ._lineAfter_ce1yt_30):dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripContainer_ce1yt_44{height:1.5rem;width:2rem}._splitter_ce1yt_1[data-splitter-vertical=vertical] ._gripButton_ce1yt_48{height:1.5rem;min-width:1.625rem}._splitter_ce1yt_1:hover ._lineAfter_ce1yt_30,._splitter_ce1yt_1:hover ._lineBefore_ce1yt_29{flex-grow:1;transition:all .1s ease-in}._gripContainer_ce1yt_44{align-items:center;display:flex;justify-content:center;z-index:1}._gripButton_ce1yt_48{cursor:inherit}._gripButton_ce1yt_48:active{z-index:2}._icon_ce1yt_38{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}._lineAfter_ce1yt_30,._lineBefore_ce1yt_29{background-position:50%;background-repeat:no-repeat}}",q={splitter:"_splitter_ce1yt_1",lineBefore:"_lineBefore_ce1yt_29",lineAfter:"_lineAfter_ce1yt_30",icon:"_icon_ce1yt_38",gripContainer:"_gripContainer_ce1yt_44",gripButton:"_gripButton_ce1yt_48"},Re={start:"top",startUppercase:"Top",end:"bottom",position:"Y",size:"height",min:"minHeight",offset:"offsetY"},Ne={start:"left",startUppercase:"Left",end:"right",position:"X",size:"width",min:"minWidth",offset:"offsetX"},O=i.forwardRef((l,d)=>{const{vertical:s,onResize:f}=l,_=ae("@ui5/webcomponents-react"),[u,n]=G(d),y=de(n),B=i.useRef(null);K(Le,O.displayName);const z=i.useRef(null),L=i.useRef(null),R=i.useRef(null),C=i.useRef(null),w=i.useRef(0),t=s?Re:Ne,[b,j]=i.useState(!1),[c,I]=i.useState(["previousSibling","nextSibling"]),k=i.useRef(null),S=(a,h)=>{k.current&&cancelAnimationFrame(k.current),typeof f=="function"&&(k.current=requestAnimationFrame(()=>{const p=y?h:a,o=y?a:h,x=n.current.getBoundingClientRect()[t.size];f({areas:[{size:p.getBoundingClientRect()?.[t.size]+x,area:p},{size:o.getBoundingClientRect()?.[t.size]+(o.nextElementSibling!==null?x:0),area:o}],splitter:n.current}),k.current=null}))},A=a=>{const h=w.current,p=n.current[c[0]],o=n.current[c[1]],x=b==="touch"?a.touches[0][`client${t.position}`]:a[`client${t.position}`],g=x-B.current,T=n.current.getBoundingClientRect()[t.size],U=g<0,Q=()=>{p.style.flex=`0 0 ${z.current+g}px`,o.nextSibling&&z.current+g>0&&(o.style.flex=`0 0 ${L.current-g}px`),S(p,o)};z.current+g>0&&x+(T-h)<=C.current&&(parseInt(p.dataset.minSize,10)<=z.current+g&&U&&Q(),L.current-g>=parseInt(o.dataset.minSize,10)&&!U&&Q()),!o[c[1]]&&!y&&(o.style.flex="1 0 0px")},H=(a,h)=>{if(!n.current)return;const p=n.current[c[0]],o=n.current[c[1]],x=n.current[c[0]].getBoundingClientRect(),g=n.current[c[1]].getBoundingClientRect(),T=h?Math.round(a.changedTouches[0][`client${t.position}`]):a[`client${t.position}`];!n.current.contains(a.target)&&T-n.current[`offset${t.startUppercase}`]+1<0&&(p.style.flex="0 0 0px",p.style?.[t.min]?o.style.flex=`0 0 ${g?.[t.size]+(x?.[t.size]-p.style?.[t.min].replace("px",""))}px`:o.style.flex=`0 0 ${g?.[t.size]+x?.[t.size]}px`,S(p,o)),C.current<T&&(o.style.flex="0 0 0px",o.style?.[t.min]?p.style.flex=`0 0 ${x?.[t.size]+(g?.[t.size]-o.style?.[t.min].replace("px",""))}px`:p.style.flex=`0 0 ${x?.[t.size]+g?.[t.size]}px`,S(p,o))},Y=a=>{a.type==="pointerdown"&&a.pointerType!=="touch"||(a.currentTarget.focus(),a.preventDefault(),j(a.pointerType??"mouse"),w.current=a.nativeEvent[t.offset],R.current=n.current[c[0]].getBoundingClientRect()?.[t.end],n.current[c[1]][c[1]]?C.current=n.current[c[1]][c[1]].getBoundingClientRect()?.[t.start]:C.current=n.current.parentElement.getBoundingClientRect()[t.end],z.current=n.current[c[0]].getBoundingClientRect()?.[t.size],L.current=n.current[c[1]].getBoundingClientRect()?.[t.size],B.current=a[`client${t.position}`])},oe=a=>{const h=a.code??a.key;if(h==="ArrowRight"||h==="ArrowLeft"||h==="ArrowUp"||h==="ArrowDown"){a.preventDefault();let p=n.current[c[0]],o=n.current[c[1]];(h==="ArrowLeft"||h==="ArrowUp")&&(o=n.current[c[0]],p=n.current[c[1]]);const x=o.style[t.min]?o.getBoundingClientRect()?.[t.size]-Number(o.style[t.min].replace("px","")):o.getBoundingClientRect()?.[t.size];if(document.activeElement===n.current){const g=x>=20?20:x,T=p.getBoundingClientRect()?.[t.size],U=o.getBoundingClientRect()?.[t.size];o.style.flex=`0 0 ${U-g}px`,p.style.flex=`0 0 ${T+g}px`,h==="ArrowLeft"||h==="ArrowUp"?S(o,p):S(p,o)}}},P=a=>{H(a,b==="touch"),j(!1)};i.useEffect(()=>{const a=()=>{b==="touch"?(document.removeEventListener("touchmove",A),document.removeEventListener("touchend",P)):(document.removeEventListener("mouseup",P),document.removeEventListener("mousemove",A))};return b?b==="touch"?(document.addEventListener("touchmove",A),document.addEventListener("touchend",P)):(document.addEventListener("mousemove",A),document.addEventListener("mouseup",P)):a(),()=>{a()}},[b]),i.useEffect(()=>{I(y&&!s?["nextSibling","previousSibling"]:["previousSibling","nextSibling"])},[y,s]);const M=pe(),se=M==="sap_fiori_3_hcb"||M==="sap_fiori_3_hcw"||M==="sap_horizon_hcb"||M==="sap_horizon_hcw";return e.jsxs("div",{className:q.splitter,tabIndex:0,onKeyDown:oe,onPointerDown:Y,onMouseDown:Y,ref:u,role:"separator","data-splitter-vertical":s?"vertical":"horizontal",title:_.getText(Z),"aria-orientation":s?"vertical":"horizontal","aria-label":_.getText(Z),children:[e.jsx("div",{className:q.lineBefore}),e.jsx("div",{className:q.gripContainer,children:se?e.jsx(m,{className:q.gripButton,tabIndex:-1,icon:s?ne:ee,design:ce.Transparent,"data-component-name":"SplitterLayoutSplitterGrip"}):e.jsx(ue,{className:q.icon,name:s?ne:ee,"data-component-name":"SplitterLayoutSplitterGrip"})}),e.jsx("div",{className:q.lineAfter})]})});O.displayName="Splitter";try{O.displayName="Splitter",O.__docgenInfo={description:"",displayName:"Splitter",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string | number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}const W=l=>i.useMemo(()=>{if(i.isValidElement(l?.children))return l?.children;const d=i.Children.toArray(l?.children).filter(i.isValidElement);let s=0;const f=[];return d.forEach((_,u)=>{const n=d[u+s],y=Object.prototype.hasOwnProperty.call(n.props,"minSize")?n.props.minSize:0;if(d.length-s-1>u&&(n.props.resizable||n.props.resizable===void 0)&&y!==void 0)d.splice(u+s+1,0,e.jsx(O,{height:l?.height,width:l?.width,vertical:l?.vertical,onResize:l?.onResize},`splitter${u}`)),f.push(u+1+s-1),++s;else if(u>0&&n?.props.resizable===!1){const B=d.findIndex(z=>z===n)-1;d[B].props.minSize===void 0&&d.splice(B,1),f.pop(),--s}}),f.forEach(_=>{const u=d[_]?.props?.size,n=typeof u=="number"?`${u}px`:u;u&&u!=="auto"&&(d[_]=i.cloneElement(d[_],{size:`calc(${n} - var(--_ui5wcr-SplitterSize))`}))}),d},[l]);try{W.displayName="useConcatSplitterElements",W.__docgenInfo={description:"",displayName:"useConcatSplitterElements",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"Height<string | number>"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(e: OnResizeParam) => void"}}}}}catch{}const v=i.forwardRef((l,d)=>{const{vertical:s,children:f,title:_,style:u,className:n,options:y,onResize:B,...z}=l,[L,R]=G(d),[C,w]=i.useState(void 0),t=i.useRef({width:void 0,height:void 0}),b=i.useRef(!0),j=i.useRef(!0),c=W({children:f??[],width:u?.width,height:u?.height,vertical:s,onResize:B});return K(_e,v.displayName),i.useEffect(()=>{!b.current&&y?.resetOnChildrenChange&&w(!0),b.current=!1},[f,y?.resetOnChildrenChange]),i.useEffect(()=>{j.current||w(!0),j.current=!1},y?.resetOnCustomDepsChange??[]),i.useEffect(()=>{if(y?.resetOnSizeChange){const I=new ResizeObserver(me(([k])=>{const S=k.target.getBoundingClientRect();!s&&S.width!==t.current.width?(t.current.width=S.width,w(!0)):s&&S.height!==t.current.height&&(t.current.height=S.height,w(!0))},60));return I.observe(R.current),()=>{I.disconnect()}}},[s,y?.resetOnSizeChange]),i.useEffect(()=>{C&&w(!1)},[C]),e.jsx(le.Provider,{value:{vertical:s,reset:C},children:e.jsx("div",{style:{flexDirection:s?"column":"row",...u},title:_,...z,className:ie(Se.splitterLayout,n),ref:L,"data-splitter-vertical":s,children:c})})});v.displayName="SplitterLayout";try{v.displayName="SplitterLayout",v.__docgenInfo={description:"A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped\ninto 0-n `SplitterElement`s which define the size and size constraints of the content area.\nThe orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the\nlayout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need\nto be nested.\nBy adding or changing `SplitterElement`s to the `SplitterLayout` that make up the content areas, the size can be changed\nprogrammatically. Additionally, the content areas can be made non-resizable individually and a minimal size (in px)\ncan be set.\nThe splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas\ncan be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.\n\n__Note:__ In order to preserve the intended design, at least one `SplitterElement` should have a dynamic `size`.",displayName:"SplitterLayout",props:{vertical:{defaultValue:null,description:"Controls if a vertical or horizontal `SplitterLayout` is rendered.",name:"vertical",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.",name:"children",required:!1,type:{name:"SplitterLayoutChild | SplitterLayoutChild[]"}},options:{defaultValue:null,description:"Defines options to customize the behavior of the SplitterLayout.",name:"options",required:!1,type:{name:"SplitterLayoutOptions"}},onResize:{defaultValue:null,description:'Fired when contents are resized.\n\n__Note:__\n- Resize events can fire many times in quick succession, it’s therefore strongly recommended to debounce your handler if you’re updating React state or causing other expensive operations.\n- The `areas` array reflects the logical position of the `SplitterElement`s relative to the "Splitter".',name:"onResize",required:!1,type:{name:"(e: OnResizeParam) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const N=({text:l,background:d="transparent"})=>e.jsx(E,{style:{height:"100%",width:"100%",background:d},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:l})}),Ie={title:"Layouts & Floorplans / SplitterLayout",component:v,argTypes:{children:{control:{disable:!0}}},args:{style:{width:"100%",height:"800px"}},parameters:{chromatic:{delay:1e3,diffThreshold:.4}},tags:["package:@ui5/webcomponents-react"]},D={parameters:{chromatic:{diffThreshold:.6}},render(l){return e.jsxs(v,{...l,children:[e.jsx(r,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 1"})})}),e.jsx(r,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{style:{whiteSpace:"pre-line"},children:`Content 2
            with
            multi
            lines
            `})})}),e.jsx(r,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:'Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."'})})}),e.jsx(r,{children:e.jsx(E,{style:{height:"100%",width:"100%"},alignItems:"Center",justifyContent:"Center",children:e.jsx(F,{children:"Content 4"})})})]})}},$={render(l){return e.jsxs(v,{...l,children:[e.jsx(r,{size:"10%",children:e.jsx(N,{text:"Content 1 - (size: 10%)",background:"cadetblue"})}),e.jsx(r,{children:e.jsx(N,{text:"Content 2",background:"skyblue"})}),e.jsx(r,{minSize:200,children:e.jsx(N,{text:"Content 3 (minSize: 200)",background:"lightblue"})}),e.jsx(r,{children:e.jsx(N,{text:"Content 4",background:"paleturquoise"})}),e.jsx(r,{children:e.jsx(N,{text:"Content 5",background:"lightskyblue"})}),e.jsx(r,{resizable:!1,size:"150px",children:e.jsx(N,{text:"Content 6 (not resizable - size: 150px)",background:"powderblue"})}),e.jsx(r,{children:e.jsx(N,{text:"Content 7",background:"aliceblue"})}),e.jsx(r,{children:e.jsx(N,{text:"Content 8",background:"lightsteelblue"})})]})}},V={parameters:{chromatic:{disableSnapshot:!0}},render(l){const[d,s]=i.useState(l.vertical),f=_=>{s(_.detail.selectedItems[0].textContent==="Vertical")};return i.useEffect(()=>{s(l.vertical)},[l.vertical]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"Column",children:[e.jsx(ge,{showColon:!0,children:"Orientation of outer SplitterLayout"}),e.jsxs(he,{onSelectionChange:f,children:[e.jsx(te,{pressed:!d,children:"Horizontal"}),e.jsx(te,{pressed:d,children:"Vertical"})]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(v,{style:l.style,vertical:d,children:[e.jsx(r,{size:"40%",children:e.jsxs(E,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 1"}),e.jsxs(v,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightblue"},size:"auto",children:e.jsx(m,{children:"Content 2"})}),e.jsx(r,{style:{background:"skyblue"},size:"10%",children:e.jsx(m,{"data-auto":!0,children:"Content 3"})}),e.jsx(r,{style:{background:"cadetblue"},size:"auto",children:e.jsx(m,{children:"Content 4"})}),e.jsx(r,{style:{background:"lightskyblue"},size:"60%",children:e.jsxs(E,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 5"}),e.jsxs(v,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"#E29713"},children:e.jsx(m,{children:"Content 6"})}),e.jsx(r,{size:"50%",children:e.jsxs(E,{direction:"Column",style:{width:"100%",height:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 7"}),e.jsxs(v,{vertical:!0,style:{height:"100%"},children:[e.jsx(r,{style:{background:"lightgrey"},size:"50%",children:e.jsx(m,{children:"Content 8"})}),e.jsx(r,{style:{background:"grey"},size:"50%",children:e.jsx(m,{children:"Content 9"})})]})]})}),e.jsx(r,{style:{background:"#D3A95E"},children:e.jsx(m,{children:"Content 10"})})]})]})})]})]})}),e.jsx(r,{size:"20%",children:e.jsx(m,{style:{width:"100%"},children:"Content 11"})}),e.jsx(r,{children:e.jsxs(E,{direction:"Column",style:{width:"100%"},children:[e.jsx(m,{style:{width:"100%"},children:"Content 12"}),e.jsxs(v,{style:{height:"100%"},children:[e.jsx(r,{style:{background:"forestgreen"},size:"15%",children:e.jsx(m,{children:"Content 13"})}),e.jsx(r,{style:{background:"darkgreen"},size:"15%",children:e.jsx(m,{children:"Content 14"})}),e.jsx(r,{style:{background:"olive"},resizable:!1,size:"40%",children:e.jsx(m,{children:"Content 15"})}),e.jsx(r,{style:{background:"green"},size:"15%",children:e.jsx(m,{children:"Content 16"})}),e.jsx(r,{style:{background:"seagreen"},size:"15%",children:e.jsx(m,{children:"Content 17"})})]})]})})]})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};const Ae=["Default","LimitedAreas","Nested"],Me=Object.freeze(Object.defineProperty({__proto__:null,Default:D,LimitedAreas:$,Nested:V,__namedExportsOrder:Ae,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Me as C,D,$ as L,V as N,r as S};

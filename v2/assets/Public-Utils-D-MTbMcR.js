import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{B as r,U as i,V as a}from"./CustomElementsScopeUtils-JR3xKyOg.js";import{c as o}from"./hooks-CcWeyrLw.js";import{t as s}from"./src-mY-crvNA.js";import{t as c}from"./jsx-runtime-BBQGix-2.js";import{a as l}from"./FlexBoxWrap-D5LV9P_x.js";import{t as u}from"./Text-boTDkEVS.js";import{t as d}from"./Label-CrEjJS5t.js";import{t as f}from"./Option-6_VtwDAG.js";import{at as p}from"./webComponents-BZi6ias_.js";import{t as m}from"./Select-DOB57Ona.js";import{i as h,r as g,t as _}from"./MessageStrip-NABDoLoD.js";import{S as v,r as y,t as b,u as x,vt as S}from"./iframe-r5j7_TIs.js";import{A as C,_ as w,d as T,f as E}from"./blocks-BhrcdAjv.js";import{E as D,g as O,t as k,u as A}from"./components-CoG0Guds.js";var j,M,N,P,F,I,L,R,z,B,V,H,U,W=t((()=>{r(),x(),s(),j=e(n(),1),y(),M=c(),N={display:`grid`,gridTemplateColumns:`repeat(3, minmax(0, 1fr))`,rowGap:`1rem`,columnGap:`1rem`},P=[],F=[],I=[],L=Object.entries(o).filter(([e,t])=>e.includes(`Font`)?e.includes(`FontUrl`)?!0:(P.push([e,t]),!1):e.includes(`Color`)||e.includes(`Shadow`)||e.includes(`Background`)||e.includes(`Chart`)?(F.push([e,t]),!1):e.includes(`Space`)||e.includes(`Margin`)||e.includes(`Padding`)||e.includes(`Gap`)||e.includes(`Breakpoint`)?(I.push([e,t]),!1):!0),R=e=>{let t={};return e.includes(`Family`)||e.includes(`FontUrl`)?t.fontFamily=e:e.includes(`Size`)?t.fontSize=e:e.includes(`Weight`)&&(t.fontWeight=e),t},z=e=>{let t={};return e.includes(`Shadow`)?t.boxShadow=e:t.backgroundColor=e,t},B=({value:e,varKey:t,theme:n,style:r={}})=>{let[i,a]=(0,j.useReducer)(e=>!e,!1),[o,s]=(0,j.useState)(getComputedStyle(document.documentElement).getPropertyValue(`--${t}`));return(0,j.useEffect)(()=>{setTimeout(()=>{s(getComputedStyle(document.documentElement).getPropertyValue(`--${t}`))},200)},[n]),(0,M.jsxs)(S,{direction:l.Column,style:{width:`85%`},children:[(0,M.jsx)(u,{title:`Click to show CSS Variable`,style:{cursor:`pointer`,...r},onClick:a,children:i?e:t}),(0,M.jsx)(d,{children:o})]},t)},V=e=>{let{varKey:t,value:n,theme:r}=e;return(0,M.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,M.jsx)(B,{value:n,varKey:t,theme:r}),(0,M.jsx)(`div`,{style:{...z(n),borderRadius:`50%`,width:`2rem`,height:`2rem`,minWidth:`2rem`,border:`1px solid ${o.sapField_BorderColor}`}})]})},H=e=>{let{varKey:t,value:n,theme:r,style:i={}}=e;return(0,M.jsx)(`div`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`space-between`},children:(0,M.jsx)(B,{value:n,varKey:t,style:i,them:r})})},U=()=>{let[e,t]=(0,j.useState)(i());return(0,M.jsx)(v,{children:(0,M.jsxs)(`div`,{style:{backgroundColor:o.sapBackgroundColor,padding:`1rem`,borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[(0,M.jsx)(m,{onChange:e=>{let n=e.detail.selectedOption.dataset.value;t(n),a(n)},children:b.map(({title:t,value:n})=>(0,M.jsx)(f,{"data-value":n,selected:n===e,children:t},n))}),(0,M.jsx)(`br`,{}),(0,M.jsx)(`br`,{}),(0,M.jsx)(p,{headerText:`Colors & Shadows`,collapsed:!0,children:(0,M.jsx)(`div`,{style:N,children:F.map(([t,n])=>(0,M.jsx)(V,{varKey:t,value:n,theme:e},t))})}),(0,M.jsx)(p,{headerText:`Fonts`,collapsed:!0,children:(0,M.jsx)(`div`,{style:{...N,gridTemplateColumns:`repeat(1, minmax(0, 1fr))`},children:P.map(([t,n])=>(0,M.jsx)(H,{varKey:t,value:n,style:{...R(n)},theme:e},t))})}),(0,M.jsx)(p,{headerText:`Spacing`,collapsed:!0,children:(0,M.jsx)(`div`,{style:N,children:I.map(([t,n])=>(0,M.jsx)(H,{varKey:t,value:n,theme:e},t))})}),(0,M.jsx)(p,{headerText:`Others`,collapsed:!0,children:(0,M.jsx)(`div`,{style:N,children:L.map(([t,n])=>(0,M.jsx)(H,{varKey:t,value:n,theme:e},t))})})]})})}}));function G(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...C(),...e.components};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(T,{title:`Public Utils`}),`
`,(0,q.jsx)(t.h1,{id:`public-utils`,children:`Public Utils`}),`
`,(0,q.jsxs)(t.p,{children:[`The `,(0,q.jsx)(t.code,{children:`@ui5/webcomponents-react-base`}),` package is providing a couple of utils, which can be used in your application as well.`]}),`
`,(0,q.jsx)(_,{design:g.Critical,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
use and are not subject to semantic versioning!`}),`
`,(0,q.jsx)(`br`,{}),`
`,(0,q.jsx)(`br`,{}),`
`,(0,q.jsx)(O,{}),`
`,(0,q.jsx)(t.h2,{id:`device`,children:`Device`}),`
`,(0,q.jsx)(E,{code:`import * as Device from '@ui5/webcomponents-react-base/Device';`}),`
`,(0,q.jsxs)(t.p,{children:[`The `,(0,q.jsx)(t.code,{children:`Device`}),` allows you to detect information about the environment where your app is running:`]}),`
`,(0,q.jsx)(t.h3,{id:`general-device-information`,children:`General Device Information`}),`
`,(0,q.jsxs)(t.ul,{children:[`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.isIE()`}),` - returns `,(0,q.jsx)(t.code,{children:`true`}),` if running in Internet Explorer`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.isSafari()`}),` - returns `,(0,q.jsx)(t.code,{children:`true`}),` if running in Safari`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.isDesktop()`}),` - returns `,(0,q.jsx)(t.code,{children:`true`}),` if running on desktop devices`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.isTablet()`}),` - returns `,(0,q.jsx)(t.code,{children:`true`}),` if running on tablet devices`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.isPhone()`}),` - returns `,(0,q.jsx)(t.code,{children:`true`}),` if running on mobile phone devices`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.supportsTouch()`}),` - returns `,(0,q.jsx)(t.code,{children:`true`}),` if device supports touch`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.getCurrentRange(width?: number)`}),` `,(0,q.jsx)(`br`,{}),`
Returns the current media range of the window, or the optionally passed width. `,(0,q.jsx)(`br`,{}),`
Returns: `,(0,q.jsx)(t.code,{children:`{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }`})]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.getOrientation()`}),` `,(0,q.jsx)(`br`,{}),`
Returns the current orientation of the device, `,(0,q.jsx)(t.code,{children:`{ landscape: boolean, portrait: boolean }`}),`.`]}),`
`]}),`
`,(0,q.jsx)(t.h3,{id:`event-listeners`,children:`Event Listeners`}),`
`,(0,q.jsxs)(t.ul,{children:[`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.attachResizeHandler(callback)`}),` `,(0,q.jsx)(`br`,{}),`
Attach an event handler which will be invoked whenever the window size has changed.
`,(0,q.jsx)(t.code,{children:`callback`}),` is a function which will be called with `,(0,q.jsx)(t.code,{children:`{ height: number, width: number }`}),`.`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.detachResizeHandler(callback)`}),` `,(0,q.jsx)(`br`,{}),`
Detach a previously attached resize handler`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.attachOrientationChangeHandler(callback)`}),` `,(0,q.jsx)(`br`,{}),`
Attach an event handler which will be invoked the orientation of the device has changed e.g., through rotation.
`,(0,q.jsx)(t.code,{children:`callback`}),` is a function which will be called with `,(0,q.jsx)(t.code,{children:`{ landscape: boolean, portrait: boolean }`}),`.`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.detachOrientationChangeHandler(callback)`}),` `,(0,q.jsx)(`br`,{}),`
Detach a previously attached orientation change handler`]}),`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.attachMediaHandler(callback)`}),` `,(0,q.jsx)(`br`,{}),`
Attach an event handler whenever the window size is matching another media query. `,(0,q.jsx)(`br`,{}),`
The current window size will be matched against the standard SAP Responsive Breakpoints:`]}),`
`]}),`
`,(0,q.jsxs)(t.table,{children:[(0,q.jsx)(t.thead,{children:(0,q.jsxs)(t.tr,{children:[(0,q.jsx)(t.th,{children:`Media Query`}),(0,q.jsx)(t.th,{children:`Name`})]})}),(0,q.jsxs)(t.tbody,{children:[(0,q.jsxs)(t.tr,{children:[(0,q.jsx)(t.td,{children:(0,q.jsx)(t.code,{children:`(max-width:599px)`})}),(0,q.jsx)(t.td,{children:(0,q.jsx)(t.code,{children:`Phone`})})]}),(0,q.jsxs)(t.tr,{children:[(0,q.jsx)(t.td,{children:(0,q.jsx)(t.code,{children:`(min-width:600px) and (max-width:1023px)`})}),(0,q.jsx)(t.td,{children:(0,q.jsx)(t.code,{children:`Tablet`})})]}),(0,q.jsxs)(t.tr,{children:[(0,q.jsx)(t.td,{children:(0,q.jsx)(t.code,{children:`(min-width:1024px) and (max-width:1439px)`})}),(0,q.jsx)(t.td,{children:(0,q.jsx)(t.code,{children:`Desktop`})})]}),(0,q.jsxs)(t.tr,{children:[(0,q.jsx)(t.td,{children:(0,q.jsx)(t.code,{children:`(min-width:1440px)`})}),(0,q.jsx)(t.td,{children:(0,q.jsx)(t.code,{children:`LargeDesktop`})})]})]})]}),`
`,(0,q.jsxs)(t.p,{children:[(0,q.jsx)(t.code,{children:`callback`}),` is a function which will be called with
`,(0,q.jsx)(t.code,{children:`{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }`}),`.`]}),`
`,(0,q.jsxs)(t.ul,{children:[`
`,(0,q.jsxs)(t.li,{children:[(0,q.jsx)(t.code,{children:`Device.detachMediaHandler(callback)`}),` `,(0,q.jsx)(`br`,{}),`
Detach a previously attached media handler`]}),`
`]}),`
`,(0,q.jsx)(t.h2,{id:`theming-parameters`,children:`Theming Parameters`}),`
`,(0,q.jsx)(E,{code:`import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';`}),`
`,(0,q.jsxs)(t.p,{children:[`By using the global `,(0,q.jsx)(t.code,{children:`--sap...`}),` CSS variables, you can define the look and feel of your application without the need to hard-code any
colors. The `,(0,q.jsx)(t.code,{children:`ThemingParameters`}),` is an JS object containing all available CSS variables mapped to their name.`]}),`
`,(0,q.jsx)(t.p,{children:`Example:`}),`
`,(0,q.jsx)(t.pre,{children:(0,q.jsx)(t.code,{className:`language-jsx`,children:`<div style={{ background: ThemingParameters.sapBackgroundColor }} />
`})}),`
`,(0,q.jsx)(t.p,{children:`Is equivalent to:`}),`
`,(0,q.jsx)(t.pre,{children:(0,q.jsx)(t.code,{className:`language-jsx`,children:`<div style={{ background: 'var(--sapBackgroundColor)' }} />
`})}),`
`,(0,q.jsxs)(t.p,{children:[(0,q.jsx)(t.strong,{children:`Note:`}),` We don't recommend excessive use of inline-style!`]}),`
`,(0,q.jsx)(U,{}),`
`,(0,q.jsx)(t.h2,{id:`hooks`,children:`Hooks`}),`
`,(0,q.jsx)(t.h3,{id:`usei18nbundle`,children:(0,q.jsx)(t.code,{children:`useI18nBundle`})}),`
`,(0,q.jsx)(E,{code:`import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks';`}),`
`,(0,q.jsxs)(t.p,{children:[`The `,(0,q.jsx)(t.code,{children:`useI18nBundle`}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,(0,q.jsx)(t.a,{href:`?path=/docs/knowledge-base-internationalization--docs`,children:`Internationalization Guide`}),`.`]}),`
`,(0,q.jsx)(t.h3,{id:`useviewportrange`,children:(0,q.jsx)(t.code,{children:`useViewportRange`})}),`
`,(0,q.jsx)(E,{code:`import { useViewportRange } from '@ui5/webcomponents-react-base/hooks';`}),`
`,(0,q.jsxs)(t.p,{children:[`The `,(0,q.jsx)(t.code,{children:`useViewportRange`}),` hook is a utility hook based on the `,(0,q.jsx)(t.code,{children:`Device.getCurrentRange()`}),` and `,(0,q.jsx)(t.code,{children:`Device.attachMediaHandler`}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,(0,q.jsx)(A,{})]})}function K(e={}){let{wrapper:t}={...C(),...e.components};return t?(0,q.jsx)(t,{...e,children:(0,q.jsx)(G,{...e})}):G(e)}var q;t((()=>{q=c(),D(),w(),h(),x(),k(),W()}))();export{K as default};
import{j as t}from"./useIsomorphicLayoutEffect-DvGGtHJq.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-8ChALhyp.js";import{M as s}from"./index-BE9dbIAx.js";import{B as i}from"./index-bPvUk59a.js";import{B as p}from"./index-Dcdu-fag.js";import{F as m}from"./ProjectTemplate-B-RlnHM4.js";import"./copy-Bqd9q-RL.js";import"./index-BP8_t0zE.js";import"./iframe-xYLBcf_t.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-infrDpAf.js";import"./Boot-DcdhI_RK.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-Dt2MhVrA.js";import"./withWebComponent-Czp6OQvU.js";import"./utils-lAiJ6aRh.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DMczlk5E.js";import"./class-map-DfcPub6e.js";import"./parameters-bundle.css-CtL2F7oe.js";import"./Button-DKDZYIHc.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-B0EGx0z0.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-BFUWD3ZY.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-BHdqPbjc.js";import"./Icon-BkC3Ogwn.js";import"./parameters-bundle.css-6UUskKkY.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-h9yeeTQy.js";import"./utils-C9syplfp.js";import"./main-HWtSBowW.js";import"./index-C5XX95Xn.js";import"./sys-help-2-D3V3v6Ov.js";import"./information-D3hZp6VX.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Byts_AR-.js";import"./WrappingType-CW8URInd.js";import"./index-Du45RG3N.js";import"./Link-CFu6ETcl.js";import"./index-CxddIYR8.js";import"./decline-CV74VQxx.js";import"./index-FcEvuWbe.js";import"./Popover-_-p9RFGN.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DbhQg9BC.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Bjwtaph5.js";import"./FocusableElements-Bm8VlCBw.js";import"./isElementHidden-Bpu2V8BK.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Bl1Jni_s.js";import"./index-BtC7_Kqx.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DWFaJupJ.js";import"./index-B4jfhjpb.js";import"./Label-CfM8R4Pi.js";import"./index-DMnhoXDr.js";import"./i18n-defaults-i2-x_YLi.js";import"./I18nContext-RJHUyvz-.js";import"./index-C94UiMU3.js";import"./ThemingParameters-pyhX3s39.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-BRtIHklr.js";import"./index-DSvClHLs.js";import"./index-CpPNZ85V.js";import"./Avatar-CPYvyFBz.js";import"./employee-0nfTRhP-.js";import"./index-D1h6wSHU.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=r=>t.jsx("div",{slot:r.slot,children:"Start"}),h=r=>t.jsx(p,{slot:r.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function n(r){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
`,t.jsx(o.h1,{id:"adding-custom-components-to-slots",children:"Adding custom components to slots"}),`
`,t.jsxs(o.p,{children:["With our wrapper we provide an easy way to consume the ",t.jsx(o.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t.jsx(o.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = () => {
  return <div>Start</div>;
};
const BarEnd = () => {
  return <Button>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(d,{}),`
`,t.jsxs(o.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,t.jsx(o.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t.jsx(o.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,t.jsxs(o.p,{children:["To fix this the ",t.jsx(o.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = (props) => {
  return <div slot={props.slot}>Start</div>;
};
const BarEnd = (props) => {
  return <Button slot={props.slot}>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(o.p,{children:["Now the ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(u,{}),`
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ut(r={}){const{wrapper:o}={...e(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(n,{...r})}):n(r)}export{Ut as default};

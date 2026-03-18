import{j as o}from"./useIsomorphicLayoutEffect-DvGGtHJq.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-BE9dbIAx.js";import{C as s}from"./ControlsWithNote-BJurQ_Rm.js";import{D as a}from"./DocsHeader-CQA-VN9g.js";import{F as c}from"./ProjectTemplate-B-RlnHM4.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-CQw-Zfni.js";import"./iframe-xYLBcf_t.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./index-CxddIYR8.js";import"./UI5Element-infrDpAf.js";import"./Boot-DcdhI_RK.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-Dt2MhVrA.js";import"./withWebComponent-Czp6OQvU.js";import"./utils-lAiJ6aRh.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-B0EGx0z0.js";import"./decline-CV74VQxx.js";import"./Icons-BFUWD3ZY.js";import"./i18n-defaults-BdfZArTM.js";import"./information-D3hZp6VX.js";import"./alert-Byts_AR-.js";import"./class-map-DfcPub6e.js";import"./Icon-BkC3Ogwn.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-6UUskKkY.js";import"./Button-DKDZYIHc.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-BHdqPbjc.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-h9yeeTQy.js";import"./chunk-HLWAVYOI-8ChALhyp.js";import"./client-Di-4O7We.js";import"./copy-Bqd9q-RL.js";import"./index-BtC7_Kqx.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DWFaJupJ.js";import"./index-DMnhoXDr.js";import"./i18n-defaults-i2-x_YLi.js";import"./I18nContext-RJHUyvz-.js";import"./index-C94UiMU3.js";import"./ThemingParameters-pyhX3s39.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./utils-C9syplfp.js";import"./main-HWtSBowW.js";import"./GitHub-Mark-Dq260Kwm.js";import"./TableOfContent-DpYFhfY9.js";import"./index-Du45RG3N.js";import"./Link-CFu6ETcl.js";import"./WrappingType-CW8URInd.js";import"./index-B4jfhjpb.js";import"./Label-CfM8R4Pi.js";import"./index-Dcdu-fag.js";import"./index-C5XX95Xn.js";import"./sys-help-2-D3V3v6Ov.js";import"./index-FcEvuWbe.js";import"./Popover-_-p9RFGN.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DbhQg9BC.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Bjwtaph5.js";import"./FocusableElements-Bm8VlCBw.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-DMczlk5E.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Bl1Jni_s.js";import"./addCustomCSSWithScoping-BRtIHklr.js";import"./index-DSvClHLs.js";import"./index-CpPNZ85V.js";import"./Avatar-CPYvyFBz.js";import"./employee-0nfTRhP-.js";import"./index-D1h6wSHU.js";import"./index-RulIRPSM.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(n,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"Toast"}),` component has an imperative API for getting displayed. It will not be displayed just because it is part of the DOM.
In order to show the Toast, you have to get a reference to the `,o.jsx(t.code,{children:"Toast"})," DOM element and call the ",o.jsx(t.code,{children:"show"}),`-method.
You can either access the DOM element by using a React `,o.jsx(t.code,{children:"ref"})," or work with IDs."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export const MyComponentWithAToast() {
  const toast = useRef(null);

  const showToast = () => {
    toast.current.show();
  };
  return (
    <ThemeProvider>
      <Button onClick={showToast}>Show Toast</Button>
      <Toast ref={toast}>This is my Toast!</Toast>
    </ThemeProvider>
  );
}
`})}),`
`,o.jsx(c,{})]})}function zo(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{zo as default};

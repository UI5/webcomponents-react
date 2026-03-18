import{j as t}from"./useIsomorphicLayoutEffect-DvGGtHJq.js";import{useMDXComponents as n}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-De69ydhW.js";import{M as r}from"./index-9p4PZ8Lt.js";import{F as p}from"./ProjectTemplate-0NhVVtev.js";import"./copy-Bqd9q-RL.js";import"./index-BP8_t0zE.js";import{T as m}from"./TableOfContent-BNu08FW2.js";import"./iframe-CXKgeUA7.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-C4B0baqm.js";import"./main-HWtSBowW.js";import"./index-D7UA5dCV.js";import"./UI5Element-infrDpAf.js";import"./Boot-DcdhI_RK.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-Dt2MhVrA.js";import"./withWebComponent-Czp6OQvU.js";import"./utils-lAiJ6aRh.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-B0EGx0z0.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BkC3Ogwn.js";import"./Icons-BFUWD3ZY.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-6UUskKkY.js";import"./sys-help-2-D3V3v6Ov.js";import"./information-D3hZp6VX.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Byts_AR-.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-h9yeeTQy.js";import"./index-CaxJWS6G.js";import"./Link-CFu6ETcl.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-CFRT4fpu.js";import"./decline-CV74VQxx.js";import"./class-map-DfcPub6e.js";import"./Button-DKDZYIHc.js";import"./Tooltips-BHdqPbjc.js";import"./index-Da8DY4-p.js";import"./Popover-_-p9RFGN.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DbhQg9BC.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Bjwtaph5.js";import"./FocusableElements-Bm8VlCBw.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-DMczlk5E.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Bl1Jni_s.js";import"./index-DnwFYhMj.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DWFaJupJ.js";import"./index-B9tdaFZp.js";import"./Label-CfM8R4Pi.js";import"./index-DAEbt_9k.js";import"./index-DMnhoXDr.js";import"./i18n-defaults-i2-x_YLi.js";import"./I18nContext-RJHUyvz-.js";import"./index-DKvz1SSG.js";import"./ThemingParameters-pyhX3s39.js";import"./ModalsContext-LNbsEfoS.js";import"./index-8JwjhRSi.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-BRtIHklr.js";import"./index-DARQZNUb.js";import"./index-CwT4PG5W.js";import"./Avatar-CPYvyFBz.js";import"./employee-0nfTRhP-.js";import"./index-BK7G5A4h.js";function i(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
`,t.jsx(o.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(o.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(m,{headingSelector:"h2"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"why-portals",children:"Why Portals?"}),`
`,t.jsxs(o.p,{children:["In most cases when a React component like the ",t.jsx(o.code,{children:"AnalyticalTable"})," implements a popover like a ",t.jsx(o.code,{children:"Dialog"})," or ",t.jsx(o.code,{children:"ResponsivePopover"}),", we use a ",t.jsx(o.a,{href:"https://react.dev/reference/react-dom/createPortal",rel:"nofollow",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
`,t.jsx(o.p,{children:"For example:"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      {createPortal(<Dialog ref={dialogRef} />, document.body)}
    </>
  );
};
`})}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"pitfalls",children:"Pitfalls"}),`
`,t.jsxs(o.p,{children:[`In some cases you may want to add a class or attribute that is affecting all the components HTML elements. Since the popover is outside the DOM hierarchy of the most outer element of the component, the class/attribute/etc. will not be applied to it.
Or maybe you just don't want the popover to be mounted on the `,t.jsx(o.code,{children:"body"}),` element (which is the default).
For this we offer the `,t.jsx(o.code,{children:"portalContainer"})," prop. This prop is available on all components that implement a popover, and with its help you can define the container into which the popover is mounted."]}),`
`,t.jsxs(o.p,{children:["For example, if you want to display the ",t.jsx(o.code,{children:"AnalyticalTable"})," in compact mode, while the rest of the app stays in cozy mode, then you could achieve that like this:"]}),`
`,t.jsx(o.p,{children:"Define a container somewhere in your DOM tree, where the portal should be rendered into and add the respective attribute/class/etc. to it."}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<div id="modalContainer" class="ui5-content-density-compact" />
`})}),`
`,t.jsxs(o.p,{children:["Then, set the ",t.jsx(o.code,{children:"portalContainer"})," to the respective element."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`<AnalyticalTable
  className="ui5-content-density-compact"
  portalContainer={document.getElementById('modalContainer')}
  data={data}
  columns={columns}
/>
`})}),`
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function At(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{At as default};

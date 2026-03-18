import{j as e}from"./useIsomorphicLayoutEffect-DvGGtHJq.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-8ChALhyp.js";import{M as c}from"./index-BE9dbIAx.js";import{F as a}from"./ProjectTemplate-B-RlnHM4.js";import"./copy-Bqd9q-RL.js";import"./index-BP8_t0zE.js";import{T as l}from"./TableOfContent-DpYFhfY9.js";import{M as r,a as n}from"./index-CxddIYR8.js";import"./iframe-xYLBcf_t.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-C9syplfp.js";import"./main-HWtSBowW.js";import"./index-C5XX95Xn.js";import"./UI5Element-infrDpAf.js";import"./Boot-DcdhI_RK.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-Dt2MhVrA.js";import"./withWebComponent-Czp6OQvU.js";import"./utils-lAiJ6aRh.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-B0EGx0z0.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BkC3Ogwn.js";import"./Icons-BFUWD3ZY.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-6UUskKkY.js";import"./sys-help-2-D3V3v6Ov.js";import"./information-D3hZp6VX.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Byts_AR-.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-h9yeeTQy.js";import"./index-Du45RG3N.js";import"./Link-CFu6ETcl.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-FcEvuWbe.js";import"./Popover-_-p9RFGN.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DbhQg9BC.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Bjwtaph5.js";import"./FocusableElements-Bm8VlCBw.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-DMczlk5E.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Bl1Jni_s.js";import"./class-map-DfcPub6e.js";import"./index-BtC7_Kqx.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DWFaJupJ.js";import"./index-B4jfhjpb.js";import"./Label-CfM8R4Pi.js";import"./index-Dcdu-fag.js";import"./Button-DKDZYIHc.js";import"./Tooltips-BHdqPbjc.js";import"./index-DMnhoXDr.js";import"./i18n-defaults-i2-x_YLi.js";import"./I18nContext-RJHUyvz-.js";import"./index-C94UiMU3.js";import"./ThemingParameters-pyhX3s39.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-BRtIHklr.js";import"./index-DSvClHLs.js";import"./index-CpPNZ85V.js";import"./Avatar-CPYvyFBz.js";import"./employee-0nfTRhP-.js";import"./index-D1h6wSHU.js";import"./decline-CV74VQxx.js";function s(o){const t={a:"a",b:"b",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre","ui5-link":"ui5-link",...p(),...o.components},i=t["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Testing with Jest"}),`
`,e.jsx(t.h1,{id:"testing-with-jest",children:"Testing with Jest"}),`
`,e.jsx(r,{design:n.Negative,hideCloseButton:!0,children:"This section of our documentation is not maintained anymore and may contain outdated information! It will be removed with our next major release (v2.0.0).",style:{marginBlockEnd:"0.5rem"}}),`
`,e.jsx(r,{design:n.Warning,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(t.b,{children:"We don't recommend testing UI5 Web Components for React with Jest anymore!"}),e.jsx(t.br,{}),"Please use"," ",e.jsx(i,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",children:"Cypress"})," ","instead."]})}),`
`,e.jsxs(t.p,{children:["Due to the lack of custom elements support when using the JSDOM, resulting in cumbersome mocking and behavior that is not applicable when actually interacting with the components, we dropped the support for testing with Jest and moved on to ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",rel:"nofollow",children:"Cypress"}),". This guide will still work, but we may remove the Jest setup file with our next major release."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(t.p,{children:["This guide is applicable if you are using a standard ",e.jsx(t.code,{children:"create-react-app"})," setup."]}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"transpile-modules",children:"Transpile Modules"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"create-react-app"})," offers you to modify specific parts of the ",e.jsx(t.code,{children:"jest"})," config by adding ",e.jsx(t.code,{children:"jest"})," object to your ",e.jsx(t.code,{children:"package.json"}),`.
Here you need to tell `,e.jsx(t.code,{children:"jest"})," to transpile the UI5 Web Components as well as the ",e.jsx(t.code,{children:"lit-html"})," library:",e.jsx("br",{}),`
`,e.jsx(t.code,{children:"package.json:"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@ui5|lit-html)).*\\\\.js$"]
  }
}
`})}),`
`,e.jsxs(t.p,{children:["In case you are using our chart library ",e.jsx(t.code,{children:"@ui5/webcomponents-react-charts"})," as well, you'll have to add ",e.jsx(t.code,{children:"d3"})," and ",e.jsx(t.code,{children:"internmap"})," to the configuration:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@ui5|lit-html|d3|internmap)).*\\\\.js$"]
  }
}
`})}),`
`,e.jsx(t.h2,{id:"mocking",children:"Mocking"}),`
`,e.jsx(t.h3,{id:"resize-observer",children:"Resize Observer"}),`
`,e.jsxs(t.p,{children:["Since some components of UI5 Web Components and UI5 Web Components for React are based on the ",e.jsx(t.code,{children:"ResizeObserver"}),` API, you'll need to add a polyfill for it.
Our recommendation is the `,e.jsx(t.code,{children:"resize-observer-polyfill"})," package, you can install it by running ",e.jsx(t.code,{children:"npm install resize-observer-polyfill --save-dev"}),"."]}),`
`,e.jsx(t.h3,{id:"reactuseid",children:"React.useId"}),`
`,e.jsxs(t.p,{children:["If you want to test your app by creating snapshots, you may need to mock the ",e.jsx(t.code,{children:"useId"}),` hook offered by React since version 18.
This hook returns a unique id across all components, but as your snapshot should be stable you can't have it there.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e.jsx(r,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Snapshot testing is a"," ",e.jsx(i,{href:"https://kentcdodds.com/blog/effective-snapshot-testing",children:"controversial and complex topic"}),", but especially with web components it gets really tricky as the JSDOM doesn't support rendering the shadow-root out of the box. That's why we recommend to go without extensively using snapshots."]})}),`
`,e.jsx(t.h2,{id:"jest-setup-file",children:"Jest Setup File"}),`
`,e.jsxs(t.p,{children:[`All other prerequisites of the UI5 Web Components for React Library can be fulfilled by importing our jest setup file:
`,e.jsx(t.code,{children:"import '@ui5/webcomponents-react/jestSetup.js';"})]}),`
`,e.jsxs(t.p,{children:["Therefore, create (or edit) your ",e.jsx(t.code,{children:"src/setupTests.js"})," file as follows:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import ResizeObserverPolyfill from 'resize-observer-polyfill';
import '@ui5/webcomponents-react/jestSetup.js';

window.ResizeObserver = ResizeObserverPolyfill;

jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e.jsx(r,{hideCloseButton:!0,children:e.jsx(e.Fragment,{children:"Please note that you must also wrap your components in the `ThemeProvider` component for testing, otherwise components with translations will probably not render."})}),`
`,e.jsxs(t.p,{children:["Now you should be able to run your test by using ",e.jsx(t.code,{children:"npm run test"})," or ",e.jsx(t.code,{children:"yarn test"}),"."]}),`
`,e.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Be(o={}){const{wrapper:t}={...p(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{Be as default};

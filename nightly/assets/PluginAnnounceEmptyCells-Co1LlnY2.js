import{j as t}from"./iframe-Bg2SD6vy.js";import{useMDXComponents as n}from"./index-CdwjPgWO.js";import{I as i,F as m}from"./CommandsAndQueries-D_Y2u3wJ.js";import{M as p,C as s}from"./blocks-CZL3kIpQ.js";import"./Tag-BBAYHNzq.js";import"./index-HB0ucYrA.js";import"./copy-UVBI9dME.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-jSjXb3wB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fylc8d1K.js";import"./index-BsOYAUed.js";import"./index-BpAxqFMX.js";import"./Link-B-zNx8Rm.js";import"./index-8T9qtuSw.js";import"./index-DO_6IPbq.js";import"./index-TtYx2H_8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9V3uoCq.js";import"./addCustomCSSWithScoping-CTL1rjLn.js";import"./index-DdlSV3iY.js";import"./information-CRabbQHz.js";import"./sys-enter-2-DqOp1oIr.js";import"./alert-BvLfxsiS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSAA7awN.js";import"./delete-5BOOHJBE.js";import"./settings-BsXo_RiZ.js";import"./NoData-Ccv5U2JJ.js";import"./IllustratedMessage-tmpUoTAd.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-2H4gT1-P.js";import"./index-Qd7vHrhH.js";import"./index-CuBcyOJk.js";import"./slim-arrow-down-D3U0-f5W.js";import"./Input-jdphY6CV.js";import"./ResponsivePopoverCommon.css-WFY0APq-.js";import"./ValueStateMessage.css-Bon94RZK.js";import"./Suggestions.css-Df10iCrd.js";import"./ListBoxItemGroupTemplate-B8fvrHHn.js";import"./ComboBoxItemGroup-BW3MSzp1.js";import"./ListItemBaseTemplate-B30GmwKn.js";import"./Token-CM436cdJ.js";import"./ScrollEnablement-BBWkbu9Y.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKzutTm5.js";import"./ToggleButton-99np1ddV.js";import"./SuggestionItem-DBO_3dkt.js";import"./index-w9ePVu2W.js";import"./Option-CWoqDgXU.js";import"./index-BViSevlR.js";import"./SegmentedButton-p_kUBRZN.js";import"./index-C2j6bZw5.js";import"./Select-DnJ2csMF.js";import"./InvisibleMessage-BOxQIJTv.js";import"./slim-arrow-down-DOg4xt37.js";import"./index-BFPm5TCJ.js";import"./index-BRp05jHt.js";import"./index-CFjFYMef.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMZNlytO.js";import"./group-2-BPq3_pcZ.js";import"./sort-descending-BpqNLAMP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B81Z82mq.js";import"./utils-D_EwR5ck.js";import"./index-DXKVxLaR.js";import"./index-B6a3zIdV.js";import"./index-BavWNaoH.js";import"./navigation-down-arrow-rBxK9kWS.js";import"./navigation-right-arrow--3JwYmng.js";import"./navigation-right-arrow-dYZMq4UC.js";import"./useCurrentTheme-BVGk2TTJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BgbPH2TB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPCZHmr9.js";import"./paper-plane-D-4FvCuR.js";import"./index-CFcdP4pc.js";import"./less-BU56_0XV.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};

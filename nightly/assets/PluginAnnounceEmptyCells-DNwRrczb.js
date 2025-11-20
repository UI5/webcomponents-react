import{j as t}from"./iframe-DXIHBwMx.js";import{useMDXComponents as n}from"./index-DxplZHhB.js";import{I as i,F as m}from"./CommandsAndQueries-Bq7v73lL.js";import{M as p,C as s}from"./blocks-q4g2VrtR.js";import"./Tag-tdzXLFPn.js";import"./index-CeX4wAvR.js";import"./copy-yrZW5TrM.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dl31wauj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J54q0dgd.js";import"./index-8pDI1Lay.js";import"./index-DkkEQ9_P.js";import"./Link-BvSaBL9U.js";import"./index-Dl76_vfU.js";import"./index-DPgFjJws.js";import"./index-Bv3_HAKL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BcuYxUko.js";import"./addCustomCSSWithScoping-p2bq4BQn.js";import"./index-DVpq5CSs.js";import"./information-gul-J4WB.js";import"./sys-enter-2-6IAFnl06.js";import"./alert-B38L7NYF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8OeK81d.js";import"./delete-C-OqTYsp.js";import"./settings-VW8oUHKP.js";import"./NoData-BFUXMVZV.js";import"./IllustratedMessage-CWu0Y4jx.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bp86e7JW.js";import"./index-CtFtlX5A.js";import"./index-DIbDvrTC.js";import"./slim-arrow-down-CMiqRMch.js";import"./Input-DKRggLIE.js";import"./ResponsivePopoverCommon.css-IT2s9x-e.js";import"./ValueStateMessage.css-BSBeeufO.js";import"./Suggestions.css-0mCo8ev-.js";import"./ListBoxItemGroupTemplate-CqnuO2NN.js";import"./ComboBoxItemGroup-DdSoCWpT.js";import"./ListItemBaseTemplate-BNMak7oT.js";import"./Token-DjZ5IwOr.js";import"./ScrollEnablement-DI_Ik22R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BA8y93oi.js";import"./ToggleButton-CctemxJS.js";import"./SuggestionItem-BgT2Te5p.js";import"./index-CGQFU_4D.js";import"./Option-CvKMeDMq.js";import"./index-qj4c4wBb.js";import"./SegmentedButton-D-tRNffC.js";import"./index-DcWs1wPd.js";import"./Select-CGo-0QVC.js";import"./InvisibleMessage-Baq9lBY3.js";import"./slim-arrow-down-CTJD6opM.js";import"./index-wL-q4Fof.js";import"./index-kVbMjwdW.js";import"./index-ztofxTu6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqeorvhQ.js";import"./group-2-CbYCsJdZ.js";import"./sort-descending-Du_3xiim.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-uQRkwGba.js";import"./utils-CpTj5Wev.js";import"./index-Ltqvt3ql.js";import"./index-Bp-ixfoG.js";import"./index-DeY_iIAn.js";import"./navigation-down-arrow-tTyMgTsU.js";import"./navigation-right-arrow-3RPrvjsM.js";import"./navigation-right-arrow-Cp4Bs5Ws.js";import"./useCurrentTheme-DTBV76rd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-MOF2JPzV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B3qUjlQu.js";import"./paper-plane-CySSYvuC.js";import"./index-Cz8FWMC8.js";import"./less-CtdFYUXb.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

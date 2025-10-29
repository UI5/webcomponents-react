import{j as t}from"./iframe-C1nqIrP9.js";import{useMDXComponents as n}from"./index-rFzs5Is7.js";import{I as i,F as m}from"./CommandsAndQueries-D6-GYIyC.js";import{M as p,C as s}from"./blocks-CkwZnBbM.js";import"./Tag-BljHH2ny.js";import"./index-CYNCR5qY.js";import"./copy-DSaYeTfs.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DlnEJIfh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJt8uYMe.js";import"./index-BaOK2woW.js";import"./index-Dr-3VGmd.js";import"./Link-BNKugdyP.js";import"./index-DKOFmGpQ.js";import"./index-BIr8DdOC.js";import"./index-SO3IILH_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CASN5sm0.js";import"./addCustomCSSWithScoping-C0k6xtW8.js";import"./index-BswWmSbc.js";import"./information-BrOplxTY.js";import"./sys-enter-2-pukb5ZDW.js";import"./alert-DP5_e-py.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SAn7RIVc.js";import"./delete-DTPigX6U.js";import"./settings-lV_DBpeY.js";import"./NoData-DhN24gYE.js";import"./IllustratedMessage-DXEnmkA7.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CcxLmyYz.js";import"./index-f0ROwvGB.js";import"./index-P_SO3_3t.js";import"./slim-arrow-down-Bps0sYcn.js";import"./Input-D9vophLG.js";import"./ResponsivePopoverCommon.css-Eydupr0P.js";import"./ValueStateMessage.css-BBO2GkE0.js";import"./Suggestions.css-DgtKpdux.js";import"./ListBoxItemGroupTemplate-Dkfxy0pn.js";import"./ComboBoxItemGroup-CsjyYpDE.js";import"./ListItemBaseTemplate-4ujERwPI.js";import"./Token-CqPdRqE5.js";import"./ScrollEnablement-BIY6wVPD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COxHhBS3.js";import"./ToggleButton-cQD1nunm.js";import"./SuggestionItem-DPnrRak_.js";import"./index-BdtdwVrB.js";import"./Option-BuhRYFqH.js";import"./index-dJuYV-LS.js";import"./SegmentedButton-o0d2AGWz.js";import"./index-j9YlDLaa.js";import"./Select-N_i4HA6q.js";import"./InvisibleMessage-D0KBEnYB.js";import"./slim-arrow-down-B2Ijjnqs.js";import"./index-qPS3eI2E.js";import"./index-RpM-44G_.js";import"./index-D-OYWN8_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwjgAEdE.js";import"./group-2-CDXCavaP.js";import"./sort-descending-B6gWrjyT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B2hB663M.js";import"./utils-DZwE1ugL.js";import"./index-DPXTvOgj.js";import"./index-DDyYLskJ.js";import"./index-D_OBrQEl.js";import"./navigation-down-arrow-COzuuEtq.js";import"./navigation-right-arrow-Uojl0M_c.js";import"./navigation-right-arrow-C2Cjybhy.js";import"./useCurrentTheme-CqppE4Rq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IMWhCO6M.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2dKeNAYY.js";import"./paper-plane-FmM4DKiP.js";import"./index-C2Ui3emf.js";import"./less-y0Nr-cGj.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

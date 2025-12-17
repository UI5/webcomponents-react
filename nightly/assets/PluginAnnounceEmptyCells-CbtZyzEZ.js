import{j as t}from"./iframe-BHL3KP3B.js";import{useMDXComponents as n}from"./index-CV9KcB1M.js";import{I as i,F as m}from"./CommandsAndQueries-D7saeET0.js";import{M as p,C as s}from"./blocks-CBYdh6wr.js";import"./Tag-RhCig6AF.js";import"./index-JS1GcHzF.js";import"./copy-Cx_IXaYw.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BrfvRfms.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgzyxERN.js";import"./index-Dx-FLQII.js";import"./index-Dsg6DYtH.js";import"./Link-ea-shbEJ.js";import"./index-lfVzLD84.js";import"./index-Dbs5lixu.js";import"./index-DToQg2Hs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co81iMbm.js";import"./addCustomCSSWithScoping-DQk-eQ1n.js";import"./index-JDEJOPjW.js";import"./information-DJM95Ys0.js";import"./sys-enter-2-XSR4RGqi.js";import"./alert-D5dcqe2K.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CojRdeJq.js";import"./delete-DQMuq08Z.js";import"./settings-DrCR5OyI.js";import"./NoData-AhmlI4en.js";import"./IllustratedMessage-DSSeRQPL.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-gLj6jJ_l.js";import"./index-CEQhLUHx.js";import"./index-Ccc7p32P.js";import"./slim-arrow-down-DJurD9QK.js";import"./Input-BbifX6GM.js";import"./ResponsivePopoverCommon.css-qV0tN2P6.js";import"./ValueStateMessage.css-BeeYtMkq.js";import"./Suggestions.css-DRhiS2Sl.js";import"./ListBoxItemGroupTemplate-Csghie_Z.js";import"./ComboBoxItemGroup-CNXniF9s.js";import"./ListItemBaseTemplate-CXls01q_.js";import"./Token-Bt8xyw-t.js";import"./ScrollEnablement-CuhBmX-D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWGtaCZo.js";import"./ToggleButton-G063PX5t.js";import"./SuggestionItem-BdZmVO4W.js";import"./index-DvuvrS2e.js";import"./Option-Bj-jZedt.js";import"./index-BDmA0N-r.js";import"./SegmentedButton-tZwV5m8H.js";import"./index-DFD0Bxod.js";import"./Select-B47H5g2r.js";import"./InvisibleMessage-C_y6XL_X.js";import"./slim-arrow-down-6hMlGarM.js";import"./index-CnHmjf1H.js";import"./index-BxtwwsD_.js";import"./index-BF8LBvPs.js";import"./index-Dvhp9tec.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLs9MXxX.js";import"./group-2-C9nYhH-K.js";import"./sort-descending-B_h7sVML.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cf8R0xRs.js";import"./utils-DvyWIthn.js";import"./index-BvVS_2DG.js";import"./index-Bnk6-Kur.js";import"./index-BGVW-O6b.js";import"./navigation-down-arrow-B5ni_-5b.js";import"./navigation-right-arrow-D9N8Vo-q.js";import"./navigation-right-arrow-fl9ibqyt.js";import"./useCurrentTheme-B4bYUvCO.js";import"./index-DD7xwy8l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbHzpQG_.js";import"./paper-plane-C9J4P2OV.js";import"./index-D6_mBUAF.js";import"./less-BlsOk5YZ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

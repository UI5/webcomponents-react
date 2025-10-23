import{j as t}from"./iframe-Caxtdkba.js";import{useMDXComponents as n}from"./index-DHHkTN_-.js";import{I as i,F as m}from"./CommandsAndQueries-BOspo6oR.js";import{M as p,C as s}from"./blocks-DEPL7JMW.js";import"./Tag-Dd11nsEW.js";import"./index-DhW1lu1C.js";import"./copy-Cm-UF3e8.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C2Zc33aG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKnt97hC.js";import"./index-BxIjhTnW.js";import"./index-Cqh1dpEf.js";import"./Link-Chm6Epcv.js";import"./index-tXGb4skN.js";import"./index-IuLzHbpC.js";import"./index-BgaBDTu4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-n5f_MbqF.js";import"./addCustomCSSWithScoping-kZmGLgIL.js";import"./index-BqfFpMrh.js";import"./information-DxEPh37b.js";import"./sys-enter-2-DZWaIs6H.js";import"./alert-CkjRTT5V.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJfJ5RYR.js";import"./delete-DOCQmW93.js";import"./settings-DpGsKXDA.js";import"./NoData-d0MQisZ4.js";import"./IllustratedMessage-BBsMwhuB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DUeNSHji.js";import"./index-JXLLmO3L.js";import"./index-BYb3crn-.js";import"./slim-arrow-down-BkDq8Vwz.js";import"./Input-CcsLtqg3.js";import"./ResponsivePopoverCommon.css-DeZjCLek.js";import"./ValueStateMessage.css-YrUrMqHL.js";import"./Suggestions.css-CoXO6GCu.js";import"./ListBoxItemGroupTemplate-BW85OpbI.js";import"./ComboBoxItemGroup-BQ3_Q8de.js";import"./ListItemBaseTemplate-BQxOqWbZ.js";import"./Token-5HJMpSXf.js";import"./ScrollEnablement-C_o7x22r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqNCSywV.js";import"./ToggleButton-C6WMbDLb.js";import"./SuggestionItem-DUIHP02k.js";import"./index-CHZgJlEv.js";import"./Option-C3rQLOa9.js";import"./index-feJ7vEoL.js";import"./SegmentedButton-vU2qNGQ4.js";import"./index-P9r5CdKp.js";import"./Select-mLNSxhym.js";import"./InvisibleMessage-cd3uS02O.js";import"./slim-arrow-down-C8iSa2f2.js";import"./index-NXjyPYYS.js";import"./index-Duo5A0v-.js";import"./index-DulQB3X1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B7qF2DKQ.js";import"./group-2-Bj0PGwVo.js";import"./sort-descending-Cot-3-zz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeI_-Pkx.js";import"./utils-D5L0CqRc.js";import"./index-CAxK_BaB.js";import"./index-BDr19BLg.js";import"./index-BcL5_vtY.js";import"./navigation-down-arrow-rxWIaO6B.js";import"./navigation-right-arrow-BFr-7gTd.js";import"./navigation-right-arrow-bvuYFyRE.js";import"./useCurrentTheme-CfsQm3Rx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfKve24a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZ4Bq_Ho.js";import"./paper-plane-F06gAmny.js";import"./index-BcF_Hj2S.js";import"./less-BdZt1fch.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

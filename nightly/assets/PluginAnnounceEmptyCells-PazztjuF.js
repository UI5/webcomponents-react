import{j as t}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as i}from"./index-JegEFivd.js";import{I as n}from"./CommandsAndQueries-Dlnf61eM.js";import{M as m,C as p}from"./blocks-DoFVSa5q.js";import"./Tag-C3CTuin_.js";import"./index-_SHIyctb.js";import"./copy-BJgUS9X2.js";import{F as s}from"./Footer-Cg75ltPq.js";import"./PageNotFound-BZ_kgysZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DzyMuTxi.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BR4DnOSS.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./index-BIHxokcD.js";import"./index-nLMQvitA.js";import"./index-ByjlU9SJ.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./index-CiSOiezA.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LiTd2ZkW.js";import"./delete-vdzKKBmV.js";import"./settings--DDZpuL8.js";import"./NoData-TCBac7YU.js";import"./NoFilterResults-B3hOZ6oG.js";import"./index-CvHyOWlh.js";import"./IllustratedMessage-B04gsQS3.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CfSfO62w.js";import"./Input-DZGNZFMo.js";import"./ResponsivePopoverCommon.css-OnbBnNDn.js";import"./ValueStateMessage.css-qBo68dDY.js";import"./Suggestions.css-36Zlw39T.js";import"./ListBoxItemGroupTemplate-DyAZxjIB.js";import"./ComboBoxItemGroup-C63t9shF.js";import"./ListItemBaseTemplate-B29kwNxf.js";import"./Token-soz4pdus.js";import"./ScrollEnablement-DLVPowNZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CuB6Oo--.js";import"./ToggleButton-DH6mKo-3.js";import"./multiselect-all-DIzH_Hk6.js";import"./SuggestionItem-Dl3jHrkd.js";import"./index-CIELwkqh.js";import"./Option-D29MaorT.js";import"./index-DZKWJZME.js";import"./SegmentedButton-8BN62iuX.js";import"./index-ByoHBp1X.js";import"./Select-hgDES0e0.js";import"./InvisibleMessage-B4ZA0kt1.js";import"./index-DaUsDwqK.js";import"./index-CM5OjaUQ.js";import"./index-B3oxdAYp.js";import"./index-BmFCipXX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJdwb7Qq.js";import"./group-2-rmw-5_bM.js";import"./sort-descending-Cu_tgfiW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMTuLZOk.js";import"./utils-ClbH9utX.js";import"./index-BRxQsxgX.js";import"./index-DDzMGmJZ.js";import"./index-C49P15Ym.js";import"./navigation-down-arrow-Cg13Qxbd.js";import"./navigation-right-arrow-B2SMAGBd.js";import"./navigation-right-arrow-DuWEFp8z.js";import"./useCurrentTheme-BYLoQCcm.js";import"./index-vyUcFgUm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-O1z4-Zn4.js";import"./paper-plane-C6QryPVC.js";import"./index-BmIER3z7.js";import"./less-BrJUhvMx.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};

import{j as t}from"./iframe-Cx-m_Nf0.js";import{useMDXComponents as n}from"./index-Danm_hzB.js";import{I as i,F as m}from"./CommandsAndQueries-wiGvioaD.js";import{M as p,C as s}from"./blocks-BeOH24VU.js";import"./Tag-CULcfvQz.js";import"./index-JZ9249rN.js";import"./copy-saj_hA78.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CQ1Q9bJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkCtcCNV.js";import"./index-BRPuZYCF.js";import"./index-D-dAoXo8.js";import"./Link-CR1SnY-5.js";import"./index-D0XJTq9Q.js";import"./index-B10MFmnl.js";import"./index-bcKxXY3o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Hev4WvRm.js";import"./addCustomCSSWithScoping-CdsdDkDi.js";import"./index-DROJnCko.js";import"./information-CEQNZlPN.js";import"./sys-enter-2-AhkD0MnF.js";import"./alert-Bji-b9H2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D1-JQb3f.js";import"./delete-Bl2x4rU1.js";import"./settings-Bv6hFb-P.js";import"./NoData-CSJ_na3c.js";import"./IllustratedMessage-CPrK3i7_.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-bu6kmgxW.js";import"./index-BSHVbo6V.js";import"./index-eSExnXlh.js";import"./slim-arrow-down-DKAHurNq.js";import"./Input-BGkNvg04.js";import"./ResponsivePopoverCommon.css-BuTMFQw1.js";import"./ValueStateMessage.css-DkCm038q.js";import"./Suggestions.css-C3EK_z35.js";import"./ListBoxItemGroupTemplate-BFkq-NXI.js";import"./ComboBoxItemGroup-BKPCcMXX.js";import"./ListItemBaseTemplate-2sNFKkfz.js";import"./Token-BqrAbKWZ.js";import"./ScrollEnablement-BylCXS9j.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bo_f_yy9.js";import"./ToggleButton-9pjROLTu.js";import"./SuggestionItem-6D6ujuPl.js";import"./index-CKUsXBNu.js";import"./Option-DzMmQowO.js";import"./index-BWv5ujwm.js";import"./SegmentedButton-Cj4yij2C.js";import"./index-BLOeq_DJ.js";import"./Select-FmZbtvvG.js";import"./InvisibleMessage-D-MV8Msz.js";import"./slim-arrow-down-DMPgem2M.js";import"./index-BKf9Irue.js";import"./index-D3zHQWzc.js";import"./index-Cp-3_oQg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3mU9MEPJ.js";import"./group-2-Bro4NNr1.js";import"./sort-descending-DjJ8E8sw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DF9ssoyr.js";import"./utils-BNoG9b0S.js";import"./index-dmgo9yxd.js";import"./index-CLBMOU_H.js";import"./index-TIjwWRgv.js";import"./navigation-down-arrow-BGKJSbuE.js";import"./navigation-right-arrow-DxbKKfUO.js";import"./navigation-right-arrow-BTVVtZ0b.js";import"./useCurrentTheme-Dm6R4j9A.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CF38bavx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BF52L7PE.js";import"./paper-plane-CbELQrqU.js";import"./index-B-qCzqdY.js";import"./less-DMl7Bxfb.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

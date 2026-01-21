import{j as t}from"./iframe-CdfVheEM.js";import{useMDXComponents as n}from"./index-Bn3z_2-D.js";import{I as i,F as m}from"./CommandsAndQueries-DnpuXHMh.js";import{M as p,C as s}from"./blocks-B64qhbcn.js";import"./Tag-BOnQq-w3.js";import"./index-Xx3LO7hZ.js";import"./copy-CQYljM5l.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CdHvl2gt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bh5HGBh3.js";import"./index-BBHuJoK3.js";import"./index-D71kNSph.js";import"./Link-CAF8tfZ3.js";import"./index-BnJ9pgT-.js";import"./index-D1Nbk9KW.js";import"./index-BdSIKWOt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUCJFgFK.js";import"./addCustomCSSWithScoping-csKwFrn6.js";import"./index-BkqNBKqG.js";import"./information-CDNUd2FJ.js";import"./sys-enter-2-m6urcdRb.js";import"./alert-DAUraGPR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-MEyy_OdE.js";import"./delete-DQmyWOyY.js";import"./settings-COcXG8h3.js";import"./NoData-DcxAeqV1.js";import"./IllustratedMessage-B3a6NIT2.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BgUA9kLe.js";import"./index-Bh2r_4yQ.js";import"./index-CzcQkJTF.js";import"./slim-arrow-down-D4oCbCnX.js";import"./Input-Bdhewrt9.js";import"./ResponsivePopoverCommon.css-DcZbPFvu.js";import"./ValueStateMessage.css-CfDs1rEd.js";import"./Suggestions.css-BdX9EgDU.js";import"./ListBoxItemGroupTemplate-8UCIFoUO.js";import"./ComboBoxItemGroup-x2TGee-B.js";import"./ListItemBaseTemplate-oDeWAQcb.js";import"./Token-BXxrasGo.js";import"./ScrollEnablement-C6CUE2hY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x_g1yDzG.js";import"./ToggleButton-COVKMN5A.js";import"./SuggestionItem-MWxUSQN7.js";import"./index-PYawlrtB.js";import"./Option-BUhhlAsc.js";import"./index-BJLAYe_t.js";import"./SegmentedButton-BOjI_yef.js";import"./index-CmKIPpc4.js";import"./Select-CY0l6TMc.js";import"./InvisibleMessage-COMllSIK.js";import"./slim-arrow-down-C79oKx1O.js";import"./index-DBS5gnra.js";import"./index-KQBqeoLi.js";import"./index-BI6OpvzA.js";import"./index-DC3a-gmy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nZrai-M2.js";import"./group-2-CNZ0ZgLY.js";import"./sort-descending-CEKP_D9I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-d7HncG-i.js";import"./utils-Cd8HpNBh.js";import"./index-DNPX4N-_.js";import"./index-DmA_99Px.js";import"./index-CDWK5O7C.js";import"./navigation-down-arrow-DpnQsS0V.js";import"./navigation-right-arrow-Dxz9thKC.js";import"./navigation-right-arrow-DZkMVdUz.js";import"./useCurrentTheme-Cdk1W9u5.js";import"./index-BpQg-76X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPpwcO6G.js";import"./paper-plane-C7_1OrVj.js";import"./index-CUP3o2CN.js";import"./less-BzMFUFzl.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

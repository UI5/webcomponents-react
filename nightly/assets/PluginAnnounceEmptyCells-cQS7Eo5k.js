import{j as t}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as n}from"./index-Cae9Voso.js";import{I as i,F as m}from"./CommandsAndQueries-Clw2dQJN.js";import{M as p,C as s}from"./blocks-C2P3yVo4.js";import"./Tag-CjLUfCmJ.js";import"./index-DCqXNXQw.js";import"./copy-B13EJS-v.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-ls20Jl9_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-Bwbvp4Wo.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc7jR-KD.js";import"./delete-CYGBhC6b.js";import"./settings-BfR_EbIn.js";import"./NoData-BJEIeC_Z.js";import"./IllustratedMessage-UAYFerO5.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-I-0GEqqm.js";import"./index-DjiXt-x0.js";import"./index-55nh7KaD.js";import"./slim-arrow-down-ZtlK-zaq.js";import"./Input-0cqUaW6-.js";import"./ResponsivePopoverCommon.css-DGJU_sLh.js";import"./ValueStateMessage.css-DCpV9L59.js";import"./Suggestions.css-BIrO0gc4.js";import"./ListBoxItemGroupTemplate-oKbzZNII.js";import"./ComboBoxItemGroup-Bci5GWY6.js";import"./ListItemBaseTemplate-BzqS2Fl5.js";import"./Token-DbjQuNPp.js";import"./ScrollEnablement-CuGe7Q3J.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1yh_JDGs.js";import"./ToggleButton-BvTjNdfc.js";import"./SuggestionItem-gIvgc1mY.js";import"./index-CBicJKGb.js";import"./Option-MqiGXaOA.js";import"./index-CLXzz8MM.js";import"./SegmentedButton-BnAh5N-e.js";import"./index-B9BehsdP.js";import"./Select-D1jaw_ad.js";import"./InvisibleMessage-DkkMM-lY.js";import"./slim-arrow-down-mLEC8bQM.js";import"./index-wmdfvP4Q.js";import"./index-Cfof4SU3.js";import"./index-CXYWUxgw.js";import"./index-Cad5KvVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DwZ3A5h1.js";import"./group-2-j3759jZ3.js";import"./sort-descending-BxAlrwUx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHHNw0uv.js";import"./utils-egnNt3B-.js";import"./index-DPc2cZ4_.js";import"./index-CzPfd54r.js";import"./index-fo8z4Qvq.js";import"./navigation-down-arrow-Bp3L9AX_.js";import"./navigation-right-arrow-DgSJmfeF.js";import"./navigation-right-arrow-DHp8bcl8.js";import"./useCurrentTheme-B_bh5PZa.js";import"./index-DrAUXulF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CdRMpk74.js";import"./paper-plane-Db0yyKlT.js";import"./index-crTpvm9q.js";import"./less-_a0dbQtg.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

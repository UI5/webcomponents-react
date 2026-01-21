import{j as t}from"./iframe-C9GC-4U4.js";import{useMDXComponents as n}from"./index-vmj4hVH3.js";import{I as i,F as m}from"./CommandsAndQueries-DYyMzrOI.js";import{M as p,C as s}from"./blocks-B1Qu1Zwa.js";import"./Tag-C_vOYGvY.js";import"./index-NAfB8FFO.js";import"./copy-Bj7tGZK9.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BFRaUJ-8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-f0Iqf0o1.js";import"./index-B091rt76.js";import"./index-BNt_KmI_.js";import"./Link-DZICkDEv.js";import"./index--mOIC-D9.js";import"./index-BpGBt1Ec.js";import"./index-CN9xEViq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CrDmJKcm.js";import"./addCustomCSSWithScoping-C3bBYzrj.js";import"./index-Bas8y3YG.js";import"./information-Cj8yu0bT.js";import"./sys-enter-2-pae_51W8.js";import"./alert-CNeVkGHK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2Q3Fifo.js";import"./delete-BtWYKuqo.js";import"./settings-BMmA6bGr.js";import"./NoData-0YPuDwhD.js";import"./IllustratedMessage-BX3YdpaS.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C8eC6z5w.js";import"./index-CfnKIWov.js";import"./index-Dh3txNQs.js";import"./slim-arrow-down-lDJf72_X.js";import"./Input-D8yfvMY_.js";import"./ResponsivePopoverCommon.css-Dfo8GNgL.js";import"./ValueStateMessage.css-C33VG2yg.js";import"./Suggestions.css-BQ5GC3G8.js";import"./ListBoxItemGroupTemplate-DwAE5T9p.js";import"./ComboBoxItemGroup-DduYzuSR.js";import"./ListItemBaseTemplate-D4wB-rZo.js";import"./Token-B4FtR09e.js";import"./ScrollEnablement-CG9VZkld.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKJzwN5g.js";import"./ToggleButton-B_tIJ_u-.js";import"./SuggestionItem-C1B0Vane.js";import"./index-hQifrLpO.js";import"./Option-BPgvlydB.js";import"./index-Bx7ENpLR.js";import"./SegmentedButton-CqVIbvx0.js";import"./index-DKxkLGS8.js";import"./Select-DROm6u1u.js";import"./InvisibleMessage-CG4h93_f.js";import"./slim-arrow-down-DD_-Xh7t.js";import"./index-Bufl7lej.js";import"./index-YItZhVTD.js";import"./index-B7IwVEg9.js";import"./index-C5oysK-n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRCt1h-O.js";import"./group-2-CYhDRlV5.js";import"./sort-descending-ChjOUn4q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7V7-Zld3.js";import"./utils-D9L5FVMx.js";import"./index-BoVydk-k.js";import"./index-D8vh07VJ.js";import"./index-J-1cALVN.js";import"./navigation-down-arrow-D_GfAsPD.js";import"./navigation-right-arrow-BfuvVGTR.js";import"./navigation-right-arrow-CqPwNeVv.js";import"./useCurrentTheme-Cmr-ISoS.js";import"./index-D1bI7l9v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPtpEu5k.js";import"./paper-plane-B3y_l42l.js";import"./index-z94YdhbG.js";import"./less-B3BSxVTt.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

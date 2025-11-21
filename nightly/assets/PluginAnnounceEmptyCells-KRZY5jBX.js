import{j as t}from"./iframe-CHtLWowq.js";import{useMDXComponents as n}from"./index-feVj8Ixc.js";import{I as i,F as m}from"./CommandsAndQueries-DR5czvWY.js";import{M as p,C as s}from"./blocks-nN5rw7aP.js";import"./Tag-C6iX9S_m.js";import"./index-ByEvImQf.js";import"./copy-DQeKak9d.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BAd-a0ov.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDqXh-7y.js";import"./index-CuuHGpOq.js";import"./index-BgmENQvG.js";import"./Link-No0hza1O.js";import"./index-CMG_lNnl.js";import"./index-XFju5FGb.js";import"./index-D94_Q-PW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DZJl74Y9.js";import"./addCustomCSSWithScoping-CagFc4YE.js";import"./index-Bf7Ep3_S.js";import"./information-CgT5QDDH.js";import"./sys-enter-2-X-uLXTXK.js";import"./alert-BD_DwGQA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B8YBAHqp.js";import"./delete-Did7L4hm.js";import"./settings-Hqz6CNrz.js";import"./NoData-BthMFeeR.js";import"./IllustratedMessage-CNpK_c-9.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DU5KpDvq.js";import"./index-CHh9zawM.js";import"./index-Ds9oFx6S.js";import"./slim-arrow-down-Bl9kmMTg.js";import"./Input-_Chin8aU.js";import"./ResponsivePopoverCommon.css-BmG1be8B.js";import"./ValueStateMessage.css-D-dMhYxp.js";import"./Suggestions.css-zGIh6gRS.js";import"./ListBoxItemGroupTemplate-BpLHc9An.js";import"./ComboBoxItemGroup-rF-e9FZE.js";import"./ListItemBaseTemplate-CL0KxrsV.js";import"./Token-1bdP-qy8.js";import"./ScrollEnablement-ye8Tkvh6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHXDAL6s.js";import"./ToggleButton-CUCNDDOO.js";import"./SuggestionItem-dlFolDmP.js";import"./index-BhWIeZ_z.js";import"./Option-CfmrmqxB.js";import"./index-BcVuoJlI.js";import"./SegmentedButton-BgNgsNQ9.js";import"./index-C7EtYMlg.js";import"./Select-DoEMEyE5.js";import"./InvisibleMessage-BrUgcFEx.js";import"./slim-arrow-down-BGN2WRYG.js";import"./index-Dw80LcOq.js";import"./index-Bm0U64at.js";import"./index-WMmfi-ne.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nvGUijt2.js";import"./group-2-Bydnd2Pu.js";import"./sort-descending-DADrrbzv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6597P5h.js";import"./utils-0fopir6W.js";import"./index-DIe0rbb4.js";import"./index-BgLFYw54.js";import"./index-CHBYKSN4.js";import"./navigation-down-arrow-qwkJsIFx.js";import"./navigation-right-arrow-CE9lGglE.js";import"./navigation-right-arrow-DwKK_E_o.js";import"./useCurrentTheme-XYPwDYan.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0cKueXn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjk4hS4a.js";import"./paper-plane-CLZXIdYp.js";import"./index-DSdDmFJ0.js";import"./less-1S2LblnP.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

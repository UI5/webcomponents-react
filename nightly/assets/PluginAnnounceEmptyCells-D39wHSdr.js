import{j as t}from"./iframe-DVlTfEM-.js";import{useMDXComponents as n}from"./index-k_8IF_2O.js";import{I as i,F as m}from"./CommandsAndQueries-BkPdYDds.js";import{M as p,C as s}from"./blocks-DrSp3MOM.js";import"./Tag-BNH48-R1.js";import"./index-Cikr51XZ.js";import"./copy-Do4831X0.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dc4CzVRx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8q9J4Er.js";import"./index-D5QdPm5n.js";import"./index-VtIqKiJ-.js";import"./Link-B2NzUiP2.js";import"./index-I1wK0hXe.js";import"./index-gAu6pc3o.js";import"./index-B-srII_E.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuLQb_Od.js";import"./addCustomCSSWithScoping-DyDcwna5.js";import"./index-CyKhe59o.js";import"./information-CmhnSrRB.js";import"./sys-enter-2-ty4GJ2q8.js";import"./alert-MBG6abBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkCO8Xag.js";import"./delete-D8PsoqYs.js";import"./settings-BvZiD-4L.js";import"./NoData-CSkDH6ij.js";import"./IllustratedMessage-UOdpDpe-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cr9VJd-6.js";import"./index-zssJOUHP.js";import"./index-DjSKLUSQ.js";import"./slim-arrow-down-Cl15R1ZF.js";import"./Input-BGJxuKnZ.js";import"./ResponsivePopoverCommon.css-oNmL3crK.js";import"./ValueStateMessage.css-CtUL6j0K.js";import"./Suggestions.css-CM1R5dIm.js";import"./ListBoxItemGroupTemplate-BP2e86jZ.js";import"./ComboBoxItemGroup-BqFAfTuf.js";import"./ListItemBaseTemplate-C_4eP7YO.js";import"./Token-DvVKUdOw.js";import"./ScrollEnablement-D7Xa6acP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3KQCuJV.js";import"./ToggleButton-fm8RXqSV.js";import"./SuggestionItem-CRJSj9d9.js";import"./index-DL3kJ6Ys.js";import"./Option-bA3BQjg2.js";import"./index-Chk0CywK.js";import"./SegmentedButton-CHFmZDT5.js";import"./index-B43_nY2G.js";import"./Select-D18nbPyu.js";import"./InvisibleMessage-CRYSMjmC.js";import"./slim-arrow-down-CiXqYYHt.js";import"./index-iqm3GyJh.js";import"./index-CkVXAiTR.js";import"./index-Dyam-MVy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-scTLOOoX.js";import"./group-2-dWyvSvql.js";import"./sort-descending-B0NwIWrn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmrYW8iD.js";import"./utils-Cr5WVsBR.js";import"./index-BFCC2aiM.js";import"./index-CMeIuUOs.js";import"./index-BL4PIRcT.js";import"./navigation-down-arrow-BUDUl4ig.js";import"./navigation-right-arrow-Dfp0sj6x.js";import"./navigation-right-arrow-DYueMaPq.js";import"./useCurrentTheme--PrL2jjb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D3bUPVNG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EPGyQxGy.js";import"./paper-plane-Bmo31A5w.js";import"./index-B4QIzuUd.js";import"./less-DHSI_jam.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

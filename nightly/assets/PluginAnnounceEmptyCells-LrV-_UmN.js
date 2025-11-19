import{j as t}from"./iframe-cBdQNv77.js";import{useMDXComponents as n}from"./index-cOSrw8iI.js";import{I as i,F as m}from"./CommandsAndQueries-DjEzsLYR.js";import{M as p,C as s}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import"./index-3Ka_JXyV.js";import"./copy-IvR5q6ZX.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B03Ac-Pt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";import"./index-A4dU9HLI.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CU_WQTkg.js";import"./delete-CMb-Nvkm.js";import"./settings-DWEgpEUz.js";import"./NoData-Qem4b_MW.js";import"./IllustratedMessage-Cyt9gDIc.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BysguWIF.js";import"./index-CblII6GP.js";import"./index-DSUYipo-.js";import"./slim-arrow-down-BPt5DgGA.js";import"./Input-CcjXMm62.js";import"./ResponsivePopoverCommon.css-RgOMGv0T.js";import"./ValueStateMessage.css-CowmmmLr.js";import"./Suggestions.css-yUQ9aL_d.js";import"./ListBoxItemGroupTemplate-BvX5NWPm.js";import"./ComboBoxItemGroup-CDbozHq9.js";import"./ListItemBaseTemplate-DrlAet-U.js";import"./Token-KJpiYxq1.js";import"./ScrollEnablement-DK4N6mSn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bac0lpbe.js";import"./ToggleButton-DekIcBfY.js";import"./SuggestionItem-Dbu-VOoh.js";import"./index-CroY5feV.js";import"./Option-Di0zJemp.js";import"./index-BdZWaw9K.js";import"./SegmentedButton-BVkeOtZe.js";import"./index-CMPXrz_r.js";import"./Select-glz-euWX.js";import"./InvisibleMessage-BXAme1GY.js";import"./slim-arrow-down-D3dx3V9G.js";import"./index-PK4cuCqC.js";import"./index-nXXgIqFV.js";import"./index-BY097R_L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWqjbJR2.js";import"./group-2-CF-v31Zl.js";import"./sort-descending-CyayMEsE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHmbUZOq.js";import"./utils-CEIcbUd3.js";import"./index-BIFjpkti.js";import"./index-DO50Tpnb.js";import"./index-Ct7T3oxa.js";import"./navigation-down-arrow-_-kVQMhy.js";import"./navigation-right-arrow-D_4YqzP5.js";import"./navigation-right-arrow-BcXKj59E.js";import"./useCurrentTheme-DjP3JZ5R.js";import"./IndicationColor-DVw-fSM_.js";import"./index-TOh3uh25.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B47DQxdv.js";import"./paper-plane-lzt2I4eu.js";import"./index-DqnLY2Ua.js";import"./less-D_OVhTJA.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

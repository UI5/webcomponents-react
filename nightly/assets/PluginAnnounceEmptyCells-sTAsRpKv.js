import{j as t}from"./iframe-XNJfvnKd.js";import{useMDXComponents as i}from"./index-BB1Z__gZ.js";import{I as n}from"./CommandsAndQueries-BhkfH5lW.js";import{M as m,C as p}from"./blocks-70fHpzfh.js";import"./Tag-Bt3S_y8X.js";import"./index-CCPENXhC.js";import"./copy-AwcTHtit.js";import{F as s}from"./Footer-BCJuC1pH.js";import"./PageNotFound-DNJSaIYV.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CXI1hcwc.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-By03J9gW.js";import"./index-DJvc2tfl.js";import"./index-BGH8cR_1.js";import"./index-C23si5qK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjHnjWqf.js";import"./addCustomCSSWithScoping-Uu6mKzaL.js";import"./index-Cr8k8bpx.js";import"./index-CONBdBFK.js";import"./index-X0L_7D7a.js";import"./information-CaeHS7Lo.js";import"./sys-enter-2-D6Lk4332.js";import"./alert-Dalf8wRK.js";import"./index-CnSjbRE7.js";import"./Illustrations-CJz4mowS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDwfYvCN.js";import"./delete-BRgtnu4x.js";import"./settings-B5E6qpU6.js";import"./NoData-BfgUbfwB.js";import"./NoFilterResults-BlBFR0st.js";import"./index-BRLheel9.js";import"./IllustratedMessage-DHXQUQEF.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-B2ARDT1C.js";import"./Input-Hy5dHKL1.js";import"./ResponsivePopoverCommon.css-2-C9fSM3.js";import"./ValueStateMessage.css-RN8YRdD-.js";import"./Suggestions.css-C7OqB4DX.js";import"./ListBoxItemGroupTemplate-C6I36q1a.js";import"./ComboBoxItemGroup-C3MlZ0Uh.js";import"./ListItemBaseTemplate-He511VRs.js";import"./Token-Cmgro3bE.js";import"./ScrollEnablement-DWDTXslq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3mcOcRw.js";import"./ToggleButton-Dv13GKwG.js";import"./multiselect-all-Bb3L16tH.js";import"./SuggestionItem-CUEuXRcU.js";import"./index-PKHhDZaf.js";import"./Option-DRsG1edk.js";import"./index-CqeXQepM.js";import"./SegmentedButton-DD_U86WN.js";import"./index-DWPlEs-m.js";import"./Select-CY4mH1RC.js";import"./InvisibleMessage-CHgobTkl.js";import"./index-C-pZ3HN9.js";import"./index-w9Dk9Jum.js";import"./index-Eo1icHqa.js";import"./index-BpPLeT54.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMVS6pwZ.js";import"./group-2-DfSGQJD6.js";import"./sort-descending-CK7mW81X.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gN_r8yvA.js";import"./utils-1KcEiNGe.js";import"./index-Cj-NtrOt.js";import"./index-BZOx0EW0.js";import"./index-COZb4dfm.js";import"./navigation-down-arrow-DkfHsCgO.js";import"./navigation-right-arrow-C7vqJCpZ.js";import"./navigation-right-arrow-DaNEHEjP.js";import"./useCurrentTheme-C0cHAbo-.js";import"./index-9SXllW00.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0aovCf59.js";import"./paper-plane-CA01kMJ9.js";import"./index-_dwsQH44.js";import"./less-B6-zBVKy.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

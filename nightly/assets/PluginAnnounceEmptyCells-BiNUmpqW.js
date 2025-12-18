import{j as t}from"./iframe-C-IdMOTF.js";import{useMDXComponents as n}from"./index-8Reouw5a.js";import{I as i,F as m}from"./CommandsAndQueries-BrMhh7sy.js";import{M as p,C as s}from"./blocks-D6xfaR3T.js";import"./Tag-BJpDTkrR.js";import"./index-MVeIUVva.js";import"./copy-F55MzcCW.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CPyBJT2D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hTsIN61t.js";import"./index-D23QN9vi.js";import"./index-CZVRMt16.js";import"./Link-pmU5zsTc.js";import"./index-gC0QYgWs.js";import"./index-DtAqbdZo.js";import"./index-C0vIcEg8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKAG68DO.js";import"./addCustomCSSWithScoping-D9pslfxW.js";import"./index-D6nYdynl.js";import"./information-BEN_uXq9.js";import"./sys-enter-2-Bq6u4lfD.js";import"./alert-6-dTv6Ft.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzqtQaIj.js";import"./delete-BvqZMFSA.js";import"./settings-CDRcyP6l.js";import"./NoData-Y4GENK1u.js";import"./IllustratedMessage-BQMS2CJC.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-Dw3tAFYv.js";import"./index-DeBh3_Rd.js";import"./index-Cen1L1VX.js";import"./slim-arrow-down-Donmu_KW.js";import"./Input-DqXRiIGv.js";import"./ResponsivePopoverCommon.css-Cl4QpyHC.js";import"./ValueStateMessage.css-DgQ8yNuY.js";import"./Suggestions.css-dLfodOLN.js";import"./ListBoxItemGroupTemplate-BgP_QYGe.js";import"./ComboBoxItemGroup-Ba7YxW6U.js";import"./ListItemBaseTemplate-DbsIrYt0.js";import"./Token-DlOPFXjK.js";import"./ScrollEnablement-CkJPJ5oY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dyoPFSMG.js";import"./ToggleButton-DkzxOAA0.js";import"./SuggestionItem-C9UvamUl.js";import"./index-DXyFplVc.js";import"./Option-DeT0HpqA.js";import"./index-KS0YEPKv.js";import"./SegmentedButton-1Sl2D-kX.js";import"./index-C3msFDiq.js";import"./Select-Bu1uNe0q.js";import"./InvisibleMessage-URPy8ZMA.js";import"./slim-arrow-down-C6v2L-5e.js";import"./index-DAfp8Dyw.js";import"./index-B7JTHEbo.js";import"./index-C_F4uQ0w.js";import"./index-DqEr8g6K.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGmXap7O.js";import"./group-2-CHtxxnqE.js";import"./sort-descending-DEFHMBn-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CN_v3WcV.js";import"./utils-BzZ9vAkg.js";import"./index-CpnMsTOO.js";import"./index-CY8tdRX9.js";import"./index-DTW5vHZS.js";import"./navigation-down-arrow-BC-mTUxY.js";import"./navigation-right-arrow-jxEKhTVI.js";import"./navigation-right-arrow-CYHgJ-zu.js";import"./useCurrentTheme-BRedc0uR.js";import"./index-f47Ux14f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFrls0z0.js";import"./paper-plane-Ch6Wl9PD.js";import"./index-Bij2cp4G.js";import"./less-9m4Z2tzD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

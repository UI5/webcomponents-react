import{j as t}from"./iframe-DxjY9BFy.js";import{useMDXComponents as i}from"./index-Bk5eT7re.js";import{I as n}from"./CommandsAndQueries-GjRh9gzH.js";import{M as m,C as p}from"./blocks-CATAEJ_X.js";import"./Tag-DnkuMosg.js";import"./index-B4O__Lt2.js";import"./copy-B5NkvAEv.js";import{F as s}from"./Footer-CWL8JIjr.js";import"./PageNotFound-CM4Hmt0N.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CTmJ_dOy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B0lBzBIQ.js";import"./index-Cr_g29EW.js";import"./index-ssnDYxvl.js";import"./index-D8DdOlBI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjvVRPhX.js";import"./addCustomCSSWithScoping-C4xqV3rh.js";import"./index-qULy9Htf.js";import"./index-DimdoC19.js";import"./index-BwDYaeY0.js";import"./information-BTY6GktZ.js";import"./sys-enter-2-DcEz2THL.js";import"./alert-CFzS8fE9.js";import"./index-CzEttlwi.js";import"./Illustrations-_-Ip7Vxq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuTEVJNK.js";import"./delete-DFSCL2JA.js";import"./settings-DhIcwIe_.js";import"./NoData-Donj0yxv.js";import"./NoFilterResults-BZVSZppq.js";import"./index-BuiD5R_e.js";import"./IllustratedMessage-XRfryFQC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-hPf547eC.js";import"./Input-BIIEETsw.js";import"./ResponsivePopoverCommon.css-BiuITAHl.js";import"./ValueStateMessage.css-DdvZKdw2.js";import"./Suggestions.css-CHxoHGWG.js";import"./ListBoxItemGroupTemplate-DUFNX5av.js";import"./ComboBoxItemGroup-CGeDQV0I.js";import"./ListItemBaseTemplate-BXA8e_9h.js";import"./Token-DulJYhXY.js";import"./ScrollEnablement-BXQj5TVC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-PNi6yEzS.js";import"./ToggleButton-LDuVzkig.js";import"./multiselect-all-D_ss6ETt.js";import"./SuggestionItem-CGZO5oaE.js";import"./index-jwCY8hZH.js";import"./Option-BUjGedUb.js";import"./index-D7YjEcwV.js";import"./SegmentedButton-Dx2BOHdU.js";import"./index-BJKdWmq0.js";import"./Select-BxhNv8xD.js";import"./InvisibleMessage-DGUog9ZJ.js";import"./index-CzZpSYYg.js";import"./index-D2McGUFG.js";import"./index-DgvvT9HE.js";import"./index-W308MxFb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wNh9kY6V.js";import"./group-2-BzaDRO82.js";import"./sort-descending-Ciqqmb4X.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHVwRm4g.js";import"./utils-DLONvGm2.js";import"./index-DejqImO7.js";import"./index-qos3M3D6.js";import"./index-D1Ld-CDS.js";import"./navigation-down-arrow-m-tVBNuD.js";import"./navigation-right-arrow-DtEmtAkJ.js";import"./navigation-right-arrow-B93ODAzr.js";import"./useCurrentTheme-BqTnBAKc.js";import"./index-CnqD3RTV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CxRoew2L.js";import"./paper-plane-B9Zip65j.js";import"./index-dJrbjC3g.js";import"./less-ipJgqOPX.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

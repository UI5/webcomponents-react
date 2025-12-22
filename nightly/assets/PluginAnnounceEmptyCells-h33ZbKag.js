import{j as t}from"./iframe-C4opeNuJ.js";import{useMDXComponents as n}from"./index-DlqCzQ5b.js";import{I as i,F as m}from"./CommandsAndQueries-C6QEnHzv.js";import{M as p,C as s}from"./blocks-BnM-0OnJ.js";import"./Tag-CUNQyer4.js";import"./index-Djkzc3Do.js";import"./copy-DCgRf4_C.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Nz8y6icB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWSzAzRH.js";import"./index-Wmnu1H8C.js";import"./index-B-UdOs74.js";import"./Link-DxcQOJp8.js";import"./index-DTzFsIn0.js";import"./index-fsr9wgfs.js";import"./index-DRX5KInn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIUIYMM9.js";import"./addCustomCSSWithScoping-C7i1P6L4.js";import"./index-CFNq6guK.js";import"./information-D9qzbrES.js";import"./sys-enter-2-OOuZrUt0.js";import"./alert-CJYb_vFX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-v-9WoqwG.js";import"./delete-QGhxrN40.js";import"./settings-DGtfH4Im.js";import"./NoData-DuSf6XJU.js";import"./IllustratedMessage-nDYnaDL0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BUZWuwZ7.js";import"./index-JEMmbgM0.js";import"./index-BGSWz__O.js";import"./slim-arrow-down-CzRtJRwu.js";import"./Input-BuKdEYP0.js";import"./ResponsivePopoverCommon.css-XSDUyRKt.js";import"./ValueStateMessage.css-BTsNvEj6.js";import"./Suggestions.css-BwrSUtIe.js";import"./ListBoxItemGroupTemplate-7_0b_kLn.js";import"./ComboBoxItemGroup-BACc2obz.js";import"./ListItemBaseTemplate-CJFIMUp3.js";import"./Token-OFa2wXAf.js";import"./ScrollEnablement-DiEQdxkX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C8MaLOVV.js";import"./ToggleButton-DDhGeKml.js";import"./SuggestionItem-VR2o08vH.js";import"./index-DncJbrUy.js";import"./Option-cu7I_PwM.js";import"./index-OrLpWDeE.js";import"./SegmentedButton-BrIUDJd7.js";import"./index-C9Pg2ysk.js";import"./Select-C0NKAdDD.js";import"./InvisibleMessage-Bb-Qg8L3.js";import"./slim-arrow-down-CGY7sv3D.js";import"./index-CGPONq3F.js";import"./index-Df3-dXHf.js";import"./index-7x9RJa0e.js";import"./index-CRe7MavO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3qO_evC.js";import"./group-2-BBh72Dqg.js";import"./sort-descending-B-gdnF4T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7K1j5fc.js";import"./utils-BjLLyiPs.js";import"./index-BdTJmYr_.js";import"./index-CmwWT0_d.js";import"./index-BUmNjy5e.js";import"./navigation-down-arrow-B9YSMk4b.js";import"./navigation-right-arrow-DaW_IFoa.js";import"./navigation-right-arrow-B0-22NBU.js";import"./useCurrentTheme-Cg4zlSnL.js";import"./index-A3HBWtsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Mna98_.js";import"./paper-plane-BFVcYSvi.js";import"./index-GwOdSSTD.js";import"./less-CAexx3Oq.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

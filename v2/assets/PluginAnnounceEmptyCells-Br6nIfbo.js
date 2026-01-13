import{j as t}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as n}from"./index-Jmw_4WZV.js";import{I as i,F as m}from"./CommandsAndQueries--8Ahr2u6.js";import{M as p,C as s}from"./blocks-9PHEB2Ze.js";import"./Tag-DEHlwQE8.js";import"./index-D-NAUCyd.js";import"./copy-ClXhTaxL.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Ht4knFBz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./index-CNLcYPCr.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChpzPnnO.js";import"./delete-Beu8r6My.js";import"./settings-Dn0qBLrS.js";import"./NoData-BwUfHrNt.js";import"./IllustratedMessage-C-QtCxtL.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BUAL9oDt.js";import"./index-BSpwtDKe.js";import"./index-BuvC0M-2.js";import"./slim-arrow-down-Cv1cFJAK.js";import"./Input-JgLWPqs-.js";import"./ResponsivePopoverCommon.css-XADsAOoO.js";import"./ValueStateMessage.css-IPM013Bi.js";import"./Suggestions.css-Bo7BTCq0.js";import"./ListBoxItemGroupTemplate-DYBBvmjW.js";import"./ComboBoxItemGroup-GSLjChX5.js";import"./ListItemBaseTemplate-BhmRBGhv.js";import"./Token-BXgPM1Ho.js";import"./ScrollEnablement-CAzFMa-6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUv_QYff.js";import"./ToggleButton-BoN4zM_f.js";import"./SuggestionItem-Q9aDeKXU.js";import"./index-BiABfjFg.js";import"./Option-DuXsqB-8.js";import"./index-BkLLS0et.js";import"./SegmentedButton-DG8OWpoN.js";import"./index-BMYFXn7k.js";import"./Select-wk3vy9-X.js";import"./InvisibleMessage-BMxlV3uh.js";import"./slim-arrow-down-CW8gGJol.js";import"./index-9dO3MOwO.js";import"./index-gTiCTT3s.js";import"./index-B3Nrx_1A.js";import"./index-DPn7F17k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2YL6UwO.js";import"./group-2-Cc5epAxT.js";import"./sort-descending-D2YRXcwA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-T6nX1J1_.js";import"./utils-bX0sVF0D.js";import"./index-C4Nrf8Fs.js";import"./index-DCa9DW1g.js";import"./index-BNd5VGZF.js";import"./navigation-down-arrow-B2uCLQJV.js";import"./navigation-right-arrow-BTmzxXYG.js";import"./navigation-right-arrow-tS4kh4In.js";import"./useCurrentTheme-tZZyzKNX.js";import"./index-Dp40BlFP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7MijIiv.js";import"./paper-plane-CxysScsd.js";import"./index-CDd3hI5e.js";import"./less-zKOuQtTY.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

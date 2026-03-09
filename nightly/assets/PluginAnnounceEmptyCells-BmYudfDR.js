import{j as t}from"./iframe-CZUFstmy.js";import{useMDXComponents as i}from"./index-CNbwg358.js";import{I as n}from"./CommandsAndQueries-BhlCA6ZS.js";import{M as m,C as p}from"./blocks-DX4VSw2u.js";import"./Tag-CX2RPQC9.js";import"./index-Dh_fZ_AU.js";import"./copy-DtLjTz9V.js";import{F as s}from"./Footer-DYeNln-j.js";import"./PageNotFound-BJZaFG9t.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DylN3bUZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-htzAGpr-.js";import"./index-BTnDvpxF.js";import"./index-BpjPalsU.js";import"./index-DrW2JSp2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2TR7fwJ.js";import"./addCustomCSSWithScoping-CYgyEKVM.js";import"./index-Q62qsF52.js";import"./index-gKv9WyUX.js";import"./index-6TF1-Ysc.js";import"./information-D6yKBjSF.js";import"./sys-enter-2-BfHAZzl4.js";import"./alert-CE2QesT5.js";import"./index-DQ321HEy.js";import"./Illustrations-BPYsG6-r.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-F0WSG7aT.js";import"./delete-dqJMeUOL.js";import"./settings-D3S74VcP.js";import"./NoData-Bcn1BipK.js";import"./NoFilterResults-6R3IW0n2.js";import"./index-nZLZA4-y.js";import"./IllustratedMessage-Cflf4SkZ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ca9d8mlW.js";import"./Input-fn8ljQGs.js";import"./ResponsivePopoverCommon.css-DPX2HjcJ.js";import"./ValueStateMessage.css-DWfde9O8.js";import"./Suggestions.css-BEQDSh_K.js";import"./ListBoxItemGroupTemplate-4gjtj37w.js";import"./ComboBoxItemGroup-yS-AI5SH.js";import"./ListItemBaseTemplate-tNf8OkU4.js";import"./Token-Be7rXUsE.js";import"./ScrollEnablement-Ba7PMo3V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CK8F7PPv.js";import"./ToggleButton-Cy5byWvG.js";import"./multiselect-all-P9gt9VBE.js";import"./SuggestionItem-BcPflO39.js";import"./index-BlfqJAGh.js";import"./Option-CiB_yCao.js";import"./index-Vm-NXKu2.js";import"./SegmentedButton-DKORPTuZ.js";import"./index-B8K2zuZv.js";import"./Select-BGYRHDkz.js";import"./InvisibleMessage-OFemtJNl.js";import"./index-hmKZXkrM.js";import"./index-DekBuc62.js";import"./index-BMLONGhJ.js";import"./index-DR9jmOc9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ByLpSrqS.js";import"./group-2-Dx8X1MIo.js";import"./sort-descending-BMdso8Rk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZRh6aRn.js";import"./utils-_uQ8OeIL.js";import"./index-BM_cOc0e.js";import"./index-C3J1ZKMs.js";import"./index-BMT0hAro.js";import"./navigation-down-arrow-CuveMFus.js";import"./navigation-right-arrow-DnT0h_6w.js";import"./navigation-right-arrow-CrfinX2r.js";import"./useCurrentTheme-D-wHF_NM.js";import"./index-BlAkVjOD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B6mPm6BW.js";import"./paper-plane-uG-YwDdB.js";import"./index-De3Wyk46.js";import"./less-CfQZGw0i.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

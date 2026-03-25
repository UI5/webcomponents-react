import{j as t}from"./iframe-aMG4Hi1W.js";import{useMDXComponents as i}from"./index-BxeVDhrM.js";import{I as n}from"./CommandsAndQueries-BfziQu2M.js";import{M as m,C as p}from"./blocks-DBdj8k-3.js";import"./Tag-DjBNrtqu.js";import"./index-BneSHkIo.js";import"./copy-WJgdbAvd.js";import{F as s}from"./Footer-CaqpNArb.js";import"./PageNotFound-BtQ0dC4g.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dbp5t2xm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CIXppVOK.js";import"./index-D79dGm1P.js";import"./index-CRZddsOj.js";import"./index-D40aHtue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NZCpAmvM.js";import"./addCustomCSSWithScoping-DZGBI863.js";import"./index-S-kDMFzJ.js";import"./index-D8GAgpXJ.js";import"./index-CkonQXRu.js";import"./information-CeS9aeh9.js";import"./sys-enter-2-qcEAkOuO.js";import"./alert-a4vfwAyT.js";import"./index-BkkgvrV5.js";import"./Illustrations-Dkeiu4Tv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BoihuItE.js";import"./delete-Bhzd3ed8.js";import"./settings-D9jXjAvQ.js";import"./NoData-B5lI_Sae.js";import"./NoFilterResults-93txLrZv.js";import"./index-BrFjI7RY.js";import"./IllustratedMessage-AZ7xK1kI.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-1_stmY84.js";import"./Input-DMXWEknM.js";import"./ResponsivePopoverCommon.css-CysXn5xC.js";import"./ValueStateMessage.css-yHzBSpV4.js";import"./Suggestions.css-MgO-ysCw.js";import"./ListBoxItemGroupTemplate-D2YpWlf4.js";import"./ComboBoxItemGroup-CaiNesJa.js";import"./ListItemBaseTemplate-D4Q6p7GN.js";import"./Token-B3caBydG.js";import"./ScrollEnablement-CcG50b_d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BOysNTzL.js";import"./ToggleButton-oEmebjQG.js";import"./multiselect-all-CLqAkhmq.js";import"./SuggestionItem-DSX8SwVI.js";import"./index-Dwckrray.js";import"./Option-C2UhMZDs.js";import"./index-Cv9nYKsA.js";import"./SegmentedButton-SSHoZn7s.js";import"./index-DBk_motw.js";import"./Select-DPhTn-YG.js";import"./InvisibleMessage-dc5EYpz-.js";import"./index-CATxM_c8.js";import"./index-DDx0pcjW.js";import"./index-Bz8OEacs.js";import"./index-BZDIEYti.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSQMhsPH.js";import"./group-2-5PvLHLNv.js";import"./sort-descending-BEfEPQGH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmpjBeDB.js";import"./utils-CLsYPiKt.js";import"./index-MCFemGTY.js";import"./index-CC_WR0o2.js";import"./index-wXOo97ET.js";import"./navigation-down-arrow-lQMnprhK.js";import"./navigation-right-arrow-CgEvW-xF.js";import"./navigation-right-arrow-Cuz2dorW.js";import"./useCurrentTheme-5CUir0cJ.js";import"./index-DEW9r0dY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2FLcBfN.js";import"./paper-plane-p0ZMvhfl.js";import"./index-CMj2nAyN.js";import"./less-CUviCfrH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

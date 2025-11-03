import{j as t}from"./iframe-Xz6qaemo.js";import{useMDXComponents as n}from"./index-BLh1nTrf.js";import{I as i,F as m}from"./CommandsAndQueries-oG0MSLdr.js";import{M as p,C as s}from"./blocks-_9vvjoio.js";import"./Tag-B2Pydg-J.js";import"./index-_ZnAwLWJ.js";import"./copy-de1br5ux.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cr2R-Mua.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnWkVA6r.js";import"./index-AGYmHzMg.js";import"./index-CxA_57ir.js";import"./Link-H0aejI1H.js";import"./index-DlKRlgNQ.js";import"./index-CDFp-rVG.js";import"./index-B7c7-SiX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2LdFPij.js";import"./addCustomCSSWithScoping-DGLLVgG9.js";import"./index-BtaCUQLs.js";import"./information-UOioa2-U.js";import"./sys-enter-2-03pme12N.js";import"./alert-BPtSnw9a.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYNlcEMB.js";import"./delete-C5Afcmz_.js";import"./settings-DsuqLvMX.js";import"./NoData-BX0HAX4c.js";import"./IllustratedMessage-r6efCPOB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CmEzTzKT.js";import"./index-Bo6AI3A0.js";import"./index-ByQ70acs.js";import"./slim-arrow-down-kuRpxWkz.js";import"./Input-BsnqiEQ7.js";import"./ResponsivePopoverCommon.css-gF0WoKZh.js";import"./ValueStateMessage.css-bt6X1_t1.js";import"./Suggestions.css-9dRS8B2y.js";import"./ListBoxItemGroupTemplate-RPkQEUFS.js";import"./ComboBoxItemGroup-uYagQgUR.js";import"./ListItemBaseTemplate-Cqk-eK-r.js";import"./Token-BXAB4gvC.js";import"./ScrollEnablement-BYIXzTaU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv-glKj0.js";import"./ToggleButton-B0n92tMf.js";import"./SuggestionItem-BhiiFS2M.js";import"./index-DwqlJH6F.js";import"./Option-CUa_Ltzi.js";import"./index-CD5txzhS.js";import"./SegmentedButton-ZAk0VihI.js";import"./index-BAFzivYh.js";import"./Select-Dn1X-1Tb.js";import"./InvisibleMessage-zP1bmMm8.js";import"./slim-arrow-down-DITXjxiP.js";import"./index-Ds3SKLSX.js";import"./index-C9RuyfPL.js";import"./index-ClQp6b9m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CluGEagr.js";import"./group-2-BxBgglbL.js";import"./sort-descending-lD1YgKhD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZINQXwv.js";import"./utils-_BVayb1h.js";import"./index-BX-N77aH.js";import"./index-CqNjI8pt.js";import"./index-BaPIYtFn.js";import"./navigation-down-arrow-CgS7x-g2.js";import"./navigation-right-arrow-KPChvtX3.js";import"./navigation-right-arrow-DhEgrzw3.js";import"./useCurrentTheme-CuRUX4rr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Ga4iz5tb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOxscssR.js";import"./paper-plane-DKmOT4rW.js";import"./index-TaZnrIva.js";import"./less-C2rIQ98G.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

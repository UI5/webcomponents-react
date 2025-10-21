import{j as t}from"./iframe-RbfDHgLf.js";import{useMDXComponents as n}from"./index-DqV7dpjg.js";import{I as i,F as m}from"./CommandsAndQueries-zsQY2vaX.js";import{M as p,C as s}from"./blocks-B3C8l8xN.js";import"./Tag-HesnxFVA.js";import"./index-COZ8g4Eg.js";import"./copy-DMiueq1X.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-dNx3iOmq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHnVbXcX.js";import"./index-BJgLq48U.js";import"./index-CDE_0yIR.js";import"./Link-CqIOijGY.js";import"./index-T-3zE_IB.js";import"./index-CfYa6cQq.js";import"./index-CCjAf9sJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGqdfIsV.js";import"./addCustomCSSWithScoping-BLrotaH2.js";import"./index-Krk892ln.js";import"./information-DD6Au7ei.js";import"./sys-enter-2-CTkUcSDp.js";import"./alert-CtWiOE8L.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeOX064v.js";import"./delete-DcwaPxBU.js";import"./settings-D6tudNLA.js";import"./NoData-Cl4Qbgty.js";import"./IllustratedMessage-DexV73H4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-C3FPWFSN.js";import"./index-Cof-wcXi.js";import"./index-DTmXjenP.js";import"./slim-arrow-down-C6-37eiK.js";import"./Input-C6IaGQuM.js";import"./ResponsivePopoverCommon.css-BazxGA3A.js";import"./ValueStateMessage.css-DlSYdh2h.js";import"./Suggestions.css-BiueOOBD.js";import"./ListBoxItemGroupTemplate-CTGhd4B4.js";import"./ComboBoxItemGroup-nRyFLP8z.js";import"./ListItemBaseTemplate-C5ft9Md7.js";import"./Token-CnNyhnHs.js";import"./ScrollEnablement-BhIRzZQ-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LHwr1u0j.js";import"./ToggleButton-Ck80PIY6.js";import"./SuggestionItem-ydkFeLIs.js";import"./index-C97MBkt1.js";import"./Option-Br7hY4me.js";import"./index-H6IWsr_r.js";import"./SegmentedButton-CZ-yOp_Q.js";import"./index-CWlsW_rN.js";import"./Select-Bvdl5zc6.js";import"./InvisibleMessage-DajdZnZt.js";import"./slim-arrow-down-DNyYURKC.js";import"./index-BHXvhFiH.js";import"./index-DzCgTQEv.js";import"./index-Bf3cZXmJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C8wkfIGx.js";import"./group-2-DF-sgjHz.js";import"./sort-descending-CZjeMqQF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zFlUhoit.js";import"./utils-IhqywFcl.js";import"./index-CtCdIWLz.js";import"./index-C5SUxDyi.js";import"./index-nwkxsEd-.js";import"./navigation-down-arrow-BLAyWJF_.js";import"./navigation-right-arrow-DkJ4m7Up.js";import"./navigation-right-arrow-DkhAVYbD.js";import"./useCurrentTheme-Cl67aZzc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qW62GUHL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkQwBtqx.js";import"./paper-plane-B3UbNLhn.js";import"./index-B5lPdsla.js";import"./less-lHgyge0z.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

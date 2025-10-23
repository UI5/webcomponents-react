import{j as t}from"./iframe-BS9g_hR0.js";import{useMDXComponents as n}from"./index-D6Sv7Jl_.js";import{I as i,F as m}from"./CommandsAndQueries-BG9-iBHT.js";import{M as p,C as s}from"./blocks-BlXgdtWM.js";import"./Tag-p_IIbz5w.js";import"./index-C8AvT1H6.js";import"./copy-DO4k2zsN.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-UYSjv1UF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BywMJtOG.js";import"./index-wzaot1RG.js";import"./index-CAEXs-Gc.js";import"./Link-CiETGZ39.js";import"./index-BKoMru_w.js";import"./index-DU08Tlv3.js";import"./index-blu4KXFK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DwUfsbfY.js";import"./addCustomCSSWithScoping-D_7dkpV9.js";import"./index-D7iHEYTy.js";import"./information-DIMKZmlM.js";import"./sys-enter-2-cjAPqaPu.js";import"./alert-CWeu-Gd2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bi6dAMxf.js";import"./delete-IIbsJHVn.js";import"./settings-DSTG7J_6.js";import"./NoData-BljPz3Ez.js";import"./IllustratedMessage-CiQm-njB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CW7qAaUp.js";import"./index-DQx4NIhG.js";import"./index-By4S6eBF.js";import"./slim-arrow-down-BrDUUgjS.js";import"./Input-B_EkSV5h.js";import"./ResponsivePopoverCommon.css-Nm_aoG18.js";import"./ValueStateMessage.css-DatFi3mM.js";import"./Suggestions.css-T59McTpP.js";import"./ListBoxItemGroupTemplate-DnRr1Fiq.js";import"./ComboBoxItemGroup-BIMHyF1K.js";import"./ListItemBaseTemplate-DnRIKRO-.js";import"./Token-BOw69ZP_.js";import"./ScrollEnablement-CI0Tb0Ll.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ba27rldr.js";import"./ToggleButton-EL98Z2LO.js";import"./SuggestionItem-C07z3z-f.js";import"./index-1owRGSxf.js";import"./Option-D-xwSxUZ.js";import"./index-CYokNx1T.js";import"./SegmentedButton-By8aV2cE.js";import"./index-nBcB45SO.js";import"./Select-CVg8WfRH.js";import"./InvisibleMessage-BhK3omrR.js";import"./slim-arrow-down-B_FxGKxS.js";import"./index-BPWtfQy0.js";import"./index-Bz6XqX9r.js";import"./index-BCrnZa0s.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdIbePGa.js";import"./group-2-KLHU0fg-.js";import"./sort-descending-DqFSPUni.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DiqZr5G5.js";import"./utils-CU6KAQZP.js";import"./index-DkMHvxEC.js";import"./index-BdY1vOzS.js";import"./index-DEBok3dO.js";import"./navigation-down-arrow-z8aFqrM1.js";import"./navigation-right-arrow-BedSm2Sl.js";import"./navigation-right-arrow-Btw4WHBr.js";import"./useCurrentTheme-jHl_ErAW.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eY3AJp1y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DS89XhU_.js";import"./paper-plane-D-ciUbX6.js";import"./index-C6qv90tY.js";import"./less-BsRZbj7x.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

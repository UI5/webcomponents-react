import{j as t}from"./iframe-BQ3gAAxx.js";import{useMDXComponents as i}from"./index-B1lAiT1q.js";import{I as n}from"./CommandsAndQueries-wegYoAqu.js";import{M as m,C as p}from"./blocks-n6pvGDI_.js";import"./Tag-eC6SmQhc.js";import"./index-DjTon6of.js";import"./copy-Da1BKYtz.js";import{F as s}from"./Footer-wX_u0Ai_.js";import"./PageNotFound-CYbLq2oD.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DHA_F5qe.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cgpq4OBn.js";import"./index-C1GISjTX.js";import"./index-C1cP6C82.js";import"./index-C8VczBe0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1UPUp-J.js";import"./addCustomCSSWithScoping-KaZd0g7m.js";import"./index-BlPBwMrJ.js";import"./index-CLyjGvZV.js";import"./index-C6vnN5EE.js";import"./information-D7DVbQHJ.js";import"./sys-enter-2-QGEZX0U8.js";import"./alert-BvhbOdWs.js";import"./index-D6YjU4up.js";import"./Illustrations-YW4WoylE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cgr_V9pk.js";import"./delete-B6_hTJQ_.js";import"./settings-DUK8lwbJ.js";import"./NoData-5eoSlwNL.js";import"./NoFilterResults-BOIQ7ol6.js";import"./index-Bbm6z3p5.js";import"./IllustratedMessage-BpFzdB-6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Bid_y9yL.js";import"./Input-DB2wpgtE.js";import"./ResponsivePopoverCommon.css-CC0bbdzt.js";import"./ValueStateMessage.css-BlOapXyA.js";import"./Suggestions.css-CcnsH7PN.js";import"./ListBoxItemGroupTemplate-Dbwacnf1.js";import"./ComboBoxItemGroup-oYKwIYDA.js";import"./ListItemBaseTemplate-DzmYLBj9.js";import"./Token-DvLrgzld.js";import"./ScrollEnablement-D9U2LTzA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BG1UM3jC.js";import"./ToggleButton-DhG8SGBd.js";import"./multiselect-all-DFUBVHZi.js";import"./SuggestionItem-Z2Xj9ATz.js";import"./index-DFONeG0H.js";import"./Option-VW9rfUnY.js";import"./index-D3Bn2LhY.js";import"./SegmentedButton-DPFBAqHi.js";import"./index-DAFt_faK.js";import"./Select-D89U3SMw.js";import"./InvisibleMessage-BdaiEMNx.js";import"./index-C544zsH2.js";import"./index-D-vaAKbP.js";import"./index-CTvmPiFM.js";import"./index-B-bCcjPK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNAnaid6.js";import"./group-2-DCUAvkdv.js";import"./sort-descending-BF0c-J1b.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BIfxZyVU.js";import"./utils-BFO_diIG.js";import"./index-C8MdlFSW.js";import"./index-CeSkdH1r.js";import"./index-DFzmTknk.js";import"./navigation-down-arrow-d6rfL2OJ.js";import"./navigation-right-arrow-KxkafEWL.js";import"./navigation-right-arrow-CvUTBkz2.js";import"./useCurrentTheme-DgCT3HCc.js";import"./index-BVQJgoCn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PuQ608.js";import"./paper-plane-B51hNZbE.js";import"./index-l5pE6pVW.js";import"./less-Ru56gMhO.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

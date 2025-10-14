import{j as e}from"./iframe-CEhnIlu5.js";import{useMDXComponents as i}from"./index-DvMCH85E.js";import{I as a,F as m}from"./CommandsAndQueries-COpLwEKt.js";import{M as s,C as p}from"./blocks-CzCRTnDN.js";import"./Tag-B0tBXTma.js";import"./index-BxbrXhSf.js";import{C as l}from"./ControlsWithNote-BFIXfs2L.js";import"./copy-DW0z69Dv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BRz2kd1y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8phGoz0x.js";import"./index-XtQvC7Ne.js";import"./index-djaoMR7U.js";import"./Link-Dx0jxQut.js";import"./index-BJ3Bv_1U.js";import"./index-Bjvgvr9c.js";import"./index-CmP_HbAe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8LeJtOc.js";import"./addCustomCSSWithScoping-jvTBykEZ.js";import"./index-Dgl42qdE.js";import"./information-GsMzttNM.js";import"./sys-enter-2-CRQG3vkj.js";import"./alert-C-SQT9wT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BLa75-a4.js";import"./delete-DZBn0HlY.js";import"./settings-DqBE4Yfa.js";import"./NoData-z1rscvaR.js";import"./IllustratedMessage-DLIRWhUO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-_eFO4hhR.js";import"./index-RznWYrdR.js";import"./index-jDTu_XSn.js";import"./slim-arrow-down-DCqrbNPW.js";import"./Input-Cesqog5j.js";import"./ResponsivePopoverCommon.css-CcZwtHQR.js";import"./ValueStateMessage.css-tCml9Upt.js";import"./Suggestions.css-CS6Y7lfw.js";import"./ListBoxItemGroupTemplate-gZbs6LSY.js";import"./ComboBoxItemGroup-BX8sl_PD.js";import"./ListItemBaseTemplate-Cm0NfbpL.js";import"./Token-DdBaiPI-.js";import"./ScrollEnablement-DfRZg6Dv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqKgSM5s.js";import"./ToggleButton-BrmzCsUo.js";import"./SuggestionItem-BHZcKCCP.js";import"./index-gfBCaRX1.js";import"./Option-N8h0jF1c.js";import"./index-DdzeaEd3.js";import"./SegmentedButton-BegLLxw2.js";import"./index-B5ZqyAt4.js";import"./Select-DCpGFOXx.js";import"./InvisibleMessage-B7HV_CKC.js";import"./slim-arrow-down-DYJprQ5J.js";import"./index-CF2pqHX5.js";import"./index-CrxXAlAp.js";import"./index-BmZH7-5P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSvmxui-.js";import"./group-2-CTVsJNx-.js";import"./sort-descending-B9sifUyq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-cqZEsl2j.js";import"./utils-gTx_8Idj.js";import"./index-CjpBStF-.js";import"./index-e-mZHuH4.js";import"./index-Dq_2j8ok.js";import"./navigation-down-arrow-B-AcI54H.js";import"./navigation-right-arrow-BOTQ_vif.js";import"./navigation-right-arrow-FWBcN_Yy.js";import"./useCurrentTheme-8m84Q5Bx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChT8t06d.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOclZ2jB.js";import"./paper-plane-Ch-Ok7XN.js";import"./index-DySPt_hE.js";import"./less-DY5sd6NF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};

import{j as e}from"./iframe-CYi73OmP.js";import{useMDXComponents as i}from"./index-Dt90fsaF.js";import{I as a,F as m}from"./CommandsAndQueries-BrIX07He.js";import{M as s,C as p}from"./blocks-vDcvm_c-.js";import"./Tag-CriFgWmH.js";import"./index-BBMPc3L0.js";import{C as l}from"./ControlsWithNote-BED3ahdx.js";import"./copy-LPsKpGQA.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CnnPd9hw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HYZOU_1D.js";import"./index-CZYlbhmv.js";import"./index-C4wC4Ofz.js";import"./Link-CjT6BL8J.js";import"./index-BbTynw39.js";import"./index-KAzf1qB6.js";import"./index-BaDKwi6p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWMkLVHm.js";import"./addCustomCSSWithScoping-COZN1IbI.js";import"./index-BTCXnKhc.js";import"./information-C2FlC8X_.js";import"./sys-enter-2-DuV3U0aL.js";import"./alert-CP7qxv0u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxYW60hZ.js";import"./delete-xFbi_-wC.js";import"./settings-0opYo2Jr.js";import"./NoData-sI1XyAen.js";import"./IllustratedMessage-CHhSpY83.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-4sLj_wxI.js";import"./index-E4itPGQP.js";import"./index-C10zcdB8.js";import"./slim-arrow-down-D0SdHrd1.js";import"./Input-CkTLFzaW.js";import"./ResponsivePopoverCommon.css-B7aCnJ_6.js";import"./ValueStateMessage.css-Kd5nnHFH.js";import"./Suggestions.css-eFUrfSNb.js";import"./ListBoxItemGroupTemplate-BSgwyZvo.js";import"./ComboBoxItemGroup-DSrVKCES.js";import"./ListItemBaseTemplate-iYm3fW7D.js";import"./Token-fT8TuGWc.js";import"./ScrollEnablement-CMSiyGPr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DvFHooIN.js";import"./ToggleButton-M9DFkWHO.js";import"./SuggestionItem-XxFpxKzR.js";import"./index-CJYGPrkA.js";import"./Option-RzwHVxqI.js";import"./index-C4WCFPR-.js";import"./SegmentedButton-BUOZ4yCF.js";import"./index-DHGFCFdp.js";import"./Select-DjRpqOSl.js";import"./InvisibleMessage-k37olEit.js";import"./slim-arrow-down-B-WSvZWG.js";import"./index-D0BFqai2.js";import"./index-BquyjLBw.js";import"./index-DzRfQBko.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6hcRg8y.js";import"./group-2-9hVkaIla.js";import"./sort-descending-BOaZ_83J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bbj4khLj.js";import"./utils-DFJ-XhsT.js";import"./index-CmHQyBLd.js";import"./index-DwCYZdGU.js";import"./index-CYe6Ma7u.js";import"./navigation-down-arrow-D9GAp0iJ.js";import"./navigation-right-arrow-BXBiRuUx.js";import"./navigation-right-arrow-BQc2k2m7.js";import"./useCurrentTheme-B3JSS_WV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-COBLEdDa.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CF7dzU0W.js";import"./paper-plane-Bv6M5PcU.js";import"./index-CtRWkyeb.js";import"./less-D2zQaX4u.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

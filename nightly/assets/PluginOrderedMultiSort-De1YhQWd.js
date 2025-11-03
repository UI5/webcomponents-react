import{j as e}from"./iframe-Xz6qaemo.js";import{useMDXComponents as i}from"./index-BLh1nTrf.js";import{I as a,F as m}from"./CommandsAndQueries-oG0MSLdr.js";import{M as s,C as p}from"./blocks-_9vvjoio.js";import"./Tag-B2Pydg-J.js";import"./index-_ZnAwLWJ.js";import{C as l}from"./ControlsWithNote-DJ75l2WH.js";import"./copy-de1br5ux.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cr2R-Mua.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnWkVA6r.js";import"./index-AGYmHzMg.js";import"./index-CxA_57ir.js";import"./Link-H0aejI1H.js";import"./index-DlKRlgNQ.js";import"./index-CDFp-rVG.js";import"./index-B7c7-SiX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2LdFPij.js";import"./addCustomCSSWithScoping-DGLLVgG9.js";import"./index-BtaCUQLs.js";import"./information-UOioa2-U.js";import"./sys-enter-2-03pme12N.js";import"./alert-BPtSnw9a.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYNlcEMB.js";import"./delete-C5Afcmz_.js";import"./settings-DsuqLvMX.js";import"./NoData-BX0HAX4c.js";import"./IllustratedMessage-r6efCPOB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CmEzTzKT.js";import"./index-Bo6AI3A0.js";import"./index-ByQ70acs.js";import"./slim-arrow-down-kuRpxWkz.js";import"./Input-BsnqiEQ7.js";import"./ResponsivePopoverCommon.css-gF0WoKZh.js";import"./ValueStateMessage.css-bt6X1_t1.js";import"./Suggestions.css-9dRS8B2y.js";import"./ListBoxItemGroupTemplate-RPkQEUFS.js";import"./ComboBoxItemGroup-uYagQgUR.js";import"./ListItemBaseTemplate-Cqk-eK-r.js";import"./Token-BXAB4gvC.js";import"./ScrollEnablement-BYIXzTaU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv-glKj0.js";import"./ToggleButton-B0n92tMf.js";import"./SuggestionItem-BhiiFS2M.js";import"./index-DwqlJH6F.js";import"./Option-CUa_Ltzi.js";import"./index-CD5txzhS.js";import"./SegmentedButton-ZAk0VihI.js";import"./index-BAFzivYh.js";import"./Select-Dn1X-1Tb.js";import"./InvisibleMessage-zP1bmMm8.js";import"./slim-arrow-down-DITXjxiP.js";import"./index-Ds3SKLSX.js";import"./index-C9RuyfPL.js";import"./index-ClQp6b9m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CluGEagr.js";import"./group-2-BxBgglbL.js";import"./sort-descending-lD1YgKhD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZINQXwv.js";import"./utils-_BVayb1h.js";import"./index-BX-N77aH.js";import"./index-CqNjI8pt.js";import"./index-BaPIYtFn.js";import"./navigation-down-arrow-CgS7x-g2.js";import"./navigation-right-arrow-KPChvtX3.js";import"./navigation-right-arrow-DhEgrzw3.js";import"./useCurrentTheme-CuRUX4rr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Ga4iz5tb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOxscssR.js";import"./paper-plane-DKmOT4rW.js";import"./index-TaZnrIva.js";import"./less-C2rIQ98G.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

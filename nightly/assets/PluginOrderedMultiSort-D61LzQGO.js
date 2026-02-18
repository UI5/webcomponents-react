import{j as e}from"./iframe-C125K5pw.js";import{useMDXComponents as i}from"./index-Bjpa6FGV.js";import{I as a,F as m}from"./CommandsAndQueries-ldqvUWJl.js";import{M as s,C as p}from"./blocks-BXnHeSiR.js";import"./Tag-gRLBJrjs.js";import"./index-Dr1L9sIB.js";import{C as l}from"./ControlsWithNote-BLcBQ4Sv.js";import"./copy-CAIaKhcd.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B5V7Jgia.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sMZVCCfo.js";import"./index-HJtrmXU5.js";import"./index-DAOynge-.js";import"./Link-CLfWc0rF.js";import"./index-BIOgtrFW.js";import"./index-CTal1c8_.js";import"./index-BwMWTiPK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKkpAdHR.js";import"./addCustomCSSWithScoping-cidmMbR-.js";import"./index-DSCACoUK.js";import"./information-DY8EV-7L.js";import"./sys-enter-2-DLPshmQC.js";import"./alert-DGx7QxWd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DRi7r004.js";import"./delete-VcR_hMk7.js";import"./settings-CWzRvdF8.js";import"./NoData-KB6el7H0.js";import"./IllustratedMessage-CXh3bWR-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DU_FutSt.js";import"./index-DjvH2VLk.js";import"./index-qC8gqSc4.js";import"./slim-arrow-down-DjzmFdkh.js";import"./Input-DjEzLRgz.js";import"./ResponsivePopoverCommon.css-CBDbaQoK.js";import"./ValueStateMessage.css-HbxeHEGm.js";import"./Suggestions.css-Ip_-2ncf.js";import"./ListBoxItemGroupTemplate-CrA4icN9.js";import"./ComboBoxItemGroup-CqfU9sll.js";import"./ListItemBaseTemplate-DDC3KDiX.js";import"./Token-DqIEO0pH.js";import"./ScrollEnablement-CHcdrCpT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYRsCa9G.js";import"./ToggleButton-Civ_g9Ey.js";import"./SuggestionItem-HWID_xuJ.js";import"./index-mutglJDe.js";import"./Option-C4a1sy2E.js";import"./index-D-2SIQ7j.js";import"./SegmentedButton-CBAEd1y_.js";import"./index-Ddxh1zbZ.js";import"./Select-3j4-u7qz.js";import"./InvisibleMessage-ZuAMUP0A.js";import"./slim-arrow-down-DWd9421G.js";import"./index-DDVJF59Y.js";import"./index-BpfByow1.js";import"./index-DYXHSW4J.js";import"./index-CeMB97VO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BslYw4vv.js";import"./group-2-xdb4cINx.js";import"./sort-descending-CbDESvm8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CymctnkS.js";import"./utils-BP0nLIbG.js";import"./index-UdJktvhD.js";import"./index-DZ6xLZXa.js";import"./index-Bapg1jlH.js";import"./navigation-down-arrow-DdfI5AYL.js";import"./navigation-right-arrow-CIultdti.js";import"./navigation-right-arrow-jfn-V-8v.js";import"./useCurrentTheme-D0ZROOM1.js";import"./index-DJvLtzE7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-071s-nZz.js";import"./paper-plane-CGcqiSQu.js";import"./index-DlizPG_T.js";import"./less-BvWBky-G.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

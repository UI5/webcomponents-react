import{j as e}from"./iframe-CGBVIl7z.js";import{useMDXComponents as i}from"./index-BD_J3XGh.js";import{I as a,F as m}from"./CommandsAndQueries-C4N9Si-I.js";import{M as s,C as p}from"./blocks-amwX2WGZ.js";import"./Tag-CKuoT6Wf.js";import"./index-Bflw6F-3.js";import{C as l}from"./ControlsWithNote-CuenDjBy.js";import"./copy-C7UfB3Pq.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-93nu5OR0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpPbjuIA.js";import"./index-BSuCMsLZ.js";import"./index-CohLls_f.js";import"./Link-7Pc42Mkn.js";import"./index-DdaBmZIy.js";import"./index-739hgjkB.js";import"./index-DSjZIl8t.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bhku-quN.js";import"./addCustomCSSWithScoping-BVpL9dRN.js";import"./index-DBko667H.js";import"./information-RMMgKPqE.js";import"./sys-enter-2-CjQpGHgC.js";import"./alert-B45RxjKS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BbZZNUsr.js";import"./delete-C3rYTSL-.js";import"./settings-CKuItMTt.js";import"./NoData-Dm6kMAy2.js";import"./IllustratedMessage-CTltc4_9.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CpKRdgwe.js";import"./index-BZjO0-60.js";import"./index-5iKNMBkt.js";import"./slim-arrow-down-DSmgoUyO.js";import"./Input-Cur_CxV7.js";import"./ResponsivePopoverCommon.css-CCcFdLcp.js";import"./ValueStateMessage.css-ZMC4oIfX.js";import"./Suggestions.css-Dz1M5Owd.js";import"./ListBoxItemGroupTemplate-dm5g8U8i.js";import"./ComboBoxItemGroup-BIxiJRMG.js";import"./ListItemBaseTemplate-BaXxQQnP.js";import"./Token-CE1htzEf.js";import"./ScrollEnablement--aZEG85r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DiNPNXGG.js";import"./ToggleButton-CVtQcDrs.js";import"./SuggestionItem-Df3g5KQn.js";import"./index-DpM-2fz6.js";import"./Option-CvdkhOTv.js";import"./index-DV-PpZP-.js";import"./SegmentedButton-DBCXGQvu.js";import"./index-TJX9m1a2.js";import"./Select-D5t1jG8r.js";import"./InvisibleMessage-DctrIzSe.js";import"./slim-arrow-down-BaoK7UDp.js";import"./index-BSrWHRA1.js";import"./index-emiTK6If.js";import"./index-CSp7PIo2.js";import"./index-DMJbwVLL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BSZDY7W6.js";import"./group-2-D1Tb-82k.js";import"./sort-descending-Cm59fUND.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lmEdkW8S.js";import"./utils-B949wPYJ.js";import"./index-CitGks-I.js";import"./index-Dij-55P_.js";import"./index-CMkS8dBX.js";import"./navigation-down-arrow-Bb7YkKYC.js";import"./navigation-right-arrow-D7n-L5RI.js";import"./navigation-right-arrow-DwW5Vw29.js";import"./useCurrentTheme-Dy8jCwh1.js";import"./index-CVZ8d7gP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuSadHsH.js";import"./paper-plane-DGK7y6EI.js";import"./index-UFJ9xqAU.js";import"./less-VoFt1pb9.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

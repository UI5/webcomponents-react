import{j as e}from"./iframe-BO0jLSss.js";import{useMDXComponents as i}from"./index-DKYRdGJC.js";import{I as a,F as m}from"./CommandsAndQueries-CgQBaZ0f.js";import{M as s,C as p}from"./blocks-B4u3eIrx.js";import"./Tag-GPe-hxqe.js";import"./index-CblgVrgk.js";import{C as l}from"./ControlsWithNote-2-KFiyR7.js";import"./copy-D8dGmaRo.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D7MtjTzc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DelbaEfh.js";import"./index-ZGr5TJVA.js";import"./index-CpvGRbxq.js";import"./Link-C1ayfMxn.js";import"./index-CEuImug1.js";import"./index-MgaH4Bh7.js";import"./index-CQJ8H28h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3DyNz5yK.js";import"./addCustomCSSWithScoping-tlJvF9vw.js";import"./index-Cxn0-wv1.js";import"./information-D3uCnnkd.js";import"./sys-enter-2-wxpj1ZiR.js";import"./alert-BevRZGbf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-WOPC9WGY.js";import"./delete-CXSVZr3J.js";import"./settings-10XeLyfQ.js";import"./NoData-Bp9WgEt4.js";import"./IllustratedMessage-CkbG5ZvE.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CQFTLeWZ.js";import"./index-CCjPGqWt.js";import"./index-DSkwQ9bU.js";import"./slim-arrow-down-BTwGuTkB.js";import"./Input-BW36Az8s.js";import"./ResponsivePopoverCommon.css-JDR8aaaw.js";import"./ValueStateMessage.css-DX9Ekmj2.js";import"./Suggestions.css-BcCiMvmK.js";import"./ListBoxItemGroupTemplate-2cOZvPZ_.js";import"./ComboBoxItemGroup-CPX37NIp.js";import"./ListItemBaseTemplate-KzzU4Rx3.js";import"./Token-BbkDyfWL.js";import"./ScrollEnablement-Dc2oxzPB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dn6AUPyj.js";import"./ToggleButton-XZE7B9VL.js";import"./SuggestionItem-BfhP-dC0.js";import"./index-BzqKXdxx.js";import"./Option-CNIcjJ6X.js";import"./index-C7e3H0Lc.js";import"./SegmentedButton-u_VBq4Z5.js";import"./index-3cbxcu0U.js";import"./Select-tyOKBt9U.js";import"./InvisibleMessage-Ckou_TOv.js";import"./slim-arrow-down-BpthopxW.js";import"./index-BNFz1DGk.js";import"./index-d6hdHjrN.js";import"./index-y6EH7Axm.js";import"./index-BWlaxzMP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CKdADjSP.js";import"./group-2-BVByTZBV.js";import"./sort-descending-CAs7fCPL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfvWHhZL.js";import"./utils-C49Mq9vB.js";import"./index-DfdAm2kH.js";import"./index-CSVJMtfx.js";import"./index-DFflxCOc.js";import"./navigation-down-arrow-rNIcSUzY.js";import"./navigation-right-arrow-B6KhF_y0.js";import"./navigation-right-arrow-BWB9l_WM.js";import"./useCurrentTheme-D2TM_kNy.js";import"./index-CFGjj6s2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BupaFKFa.js";import"./paper-plane-nEhWEkVl.js";import"./index-Buj-2QJo.js";import"./less-BZcQvZ5K.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

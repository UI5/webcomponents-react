import{j as e}from"./iframe-_dkm4-lx.js";import{useMDXComponents as i}from"./index-DAI4KLq-.js";import{I as a,F as m}from"./CommandsAndQueries-BqJjwTMw.js";import{M as s,C as p}from"./blocks-Bs8u5Nl3.js";import"./Tag-BrrbDF8k.js";import"./index-BnWTzbqn.js";import{C as l}from"./ControlsWithNote-iHzvv8KN.js";import"./copy-CdpHOxV4.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories--cyb8K2N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bo-JlDoR.js";import"./index-oGo7hVYD.js";import"./index-S8RgegHO.js";import"./Link-DtN5ZiM1.js";import"./index-DAd7Ps1Q.js";import"./index-DGmq0M6J.js";import"./index-D5ljwTMv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di5ZUlIH.js";import"./addCustomCSSWithScoping-BWn-VVtx.js";import"./index-Dr4umyr0.js";import"./information-BDRRh1Am.js";import"./sys-enter-2-BupypyQm.js";import"./alert-C9P72ihW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8I7EMud0.js";import"./delete-BFlU4n88.js";import"./settings-DKHpvx8J.js";import"./NoData-C-NDq2fS.js";import"./IllustratedMessage-dVg4D6z8.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C43Z122v.js";import"./index-mDQ8kmFF.js";import"./index-fE5L-wmg.js";import"./slim-arrow-down-YnD0B6qq.js";import"./Input-CQoBJCT1.js";import"./ResponsivePopoverCommon.css-BWtbIU1l.js";import"./ValueStateMessage.css-D3oaOmzE.js";import"./Suggestions.css-DqTbturi.js";import"./ListBoxItemGroupTemplate-CxBSymlc.js";import"./ComboBoxItemGroup-BMTZSRsg.js";import"./ListItemBaseTemplate-C3bTchJi.js";import"./Token-B8wGSQWQ.js";import"./ScrollEnablement-mXNeOQwW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BATgW0iD.js";import"./ToggleButton-CXXLlraY.js";import"./SuggestionItem-Cz-SyCva.js";import"./index-BYeZEBFK.js";import"./Option-DDmpArcW.js";import"./index-BvjAbd4X.js";import"./SegmentedButton-CI86rvUG.js";import"./index-DiofpmJR.js";import"./Select-B68-6Rcp.js";import"./InvisibleMessage-Cuby5-08.js";import"./slim-arrow-down-Ds2hHePS.js";import"./index-DCZEipB7.js";import"./index-Da0p86mA.js";import"./index-BZMYVf63.js";import"./index-B0FAyyCx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCgM0xcn.js";import"./group-2-_TbX78jG.js";import"./sort-descending-BrpD4Gn1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzuvpoLd.js";import"./utils-CQKL6wZL.js";import"./index-Fh8qLzQn.js";import"./index-CfwLt2JK.js";import"./index-DmEe1OQb.js";import"./navigation-down-arrow-DiwCzOiQ.js";import"./navigation-right-arrow-aREcauxn.js";import"./navigation-right-arrow-BNytRyk2.js";import"./useCurrentTheme-CvQCpiy2.js";import"./index-ClgSKDC6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFHyUMry.js";import"./paper-plane-C9QCx50u.js";import"./index-NxLhfNzK.js";import"./less-DqBn0nny.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

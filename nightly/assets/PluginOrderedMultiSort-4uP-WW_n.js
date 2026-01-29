import{j as e}from"./iframe-CyAbfAjR.js";import{useMDXComponents as i}from"./index-06KDG4AT.js";import{I as a,F as m}from"./CommandsAndQueries-B2npLt1g.js";import{M as s,C as p}from"./blocks-D91UiS7A.js";import"./Tag-DcmGlVyp.js";import"./index-Dx49XSH_.js";import{C as l}from"./ControlsWithNote-CXY6QOFG.js";import"./copy-DuIUrssG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CduZ0bih.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_ujFW-9.js";import"./index-zvTPe1JW.js";import"./index-C2mRWa3H.js";import"./Link-Cj1yeMGo.js";import"./index-DTVJfpj2.js";import"./index-DhltPY3F.js";import"./index-CmuOjIMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyLeRq-g.js";import"./addCustomCSSWithScoping-zxsplMRu.js";import"./index-DGFLZE4P.js";import"./information-Rep9dVOS.js";import"./sys-enter-2-_ycOnn14.js";import"./alert-BWU-sYPN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJqtSdbn.js";import"./delete-DllOoAvf.js";import"./settings-wJbQBcLC.js";import"./NoData-CBuJCjQZ.js";import"./IllustratedMessage-tA6cAG-s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Bnj3-Z8S.js";import"./index-40ttS4tt.js";import"./index-aWCb2995.js";import"./slim-arrow-down-DdNrUHXY.js";import"./Input-DdGxyUaG.js";import"./ResponsivePopoverCommon.css-BVA8ZcTn.js";import"./ValueStateMessage.css-CWyNZgk-.js";import"./Suggestions.css-YuDlW85k.js";import"./ListBoxItemGroupTemplate-CzIT6ZwA.js";import"./ComboBoxItemGroup-BwIIuCG8.js";import"./ListItemBaseTemplate-BllUB4lH.js";import"./Token-BjNM8qNb.js";import"./ScrollEnablement-_UA22n7q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QR6pRRAu.js";import"./ToggleButton-n_dD7Tpj.js";import"./SuggestionItem-DDD35SgE.js";import"./index-ATdZ4JNt.js";import"./Option-BPW8-nZA.js";import"./index-D6n5UcXf.js";import"./SegmentedButton-CVME573C.js";import"./index-JNLd-Q23.js";import"./Select-DTuI2LUV.js";import"./InvisibleMessage-CwIIQAVa.js";import"./slim-arrow-down-BfmJQhdi.js";import"./index--lMleNuo.js";import"./index-C75xx_by.js";import"./index-DIZzn41L.js";import"./index-EwWM-M_C.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRLptP8y.js";import"./group-2-CYDrIlQx.js";import"./sort-descending-zDD6-75v.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C9_XexGy.js";import"./utils-BwnFu7uR.js";import"./index-DM9-P2gy.js";import"./index-Bs-9er-e.js";import"./index-BEWwn3Xg.js";import"./navigation-down-arrow-CL70XcuK.js";import"./navigation-right-arrow-ChTgZnRi.js";import"./navigation-right-arrow-DpOJRghh.js";import"./useCurrentTheme-CWQeV1Cm.js";import"./index-B72PquXy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CvAdZl9h.js";import"./paper-plane-BQ2yiuh0.js";import"./index-Dc7OW__V.js";import"./less-Duojpb1N.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

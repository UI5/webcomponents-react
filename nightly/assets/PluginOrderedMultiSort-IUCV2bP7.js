import{j as e}from"./iframe-D9-OPwVR.js";import{useMDXComponents as i}from"./index-rQrCyh78.js";import{I as a,F as m}from"./CommandsAndQueries-CGaVhEZZ.js";import{M as s,C as p}from"./blocks-yWwHjaca.js";import"./Tag-C4h9s18a.js";import"./index-C0yJm7_O.js";import{C as l}from"./ControlsWithNote-CQ_5k1u8.js";import"./copy-kqUatD9Y.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BiLsGBYW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqY2NvOe.js";import"./index-DWSshsP3.js";import"./index-D2zbla8P.js";import"./Link-C0FJUUPf.js";import"./index-C2LtXiVH.js";import"./index-B7FHygPg.js";import"./index-BKtOrYz7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHNrYRTW.js";import"./addCustomCSSWithScoping-BMu8GK7h.js";import"./index-CARCmcfE.js";import"./information-CXuNnhF_.js";import"./sys-enter-2-CpLLk16Q.js";import"./alert-DmoPAb-1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-kpLUfox6.js";import"./delete-8q-2SnNy.js";import"./settings-Bpoz5lRE.js";import"./NoData-EROY5bkG.js";import"./IllustratedMessage-DytrPSKy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-zKEQv0vR.js";import"./index-Dpxo6caN.js";import"./index-CfkNruMI.js";import"./slim-arrow-down-D0gVics8.js";import"./Input-CSIFNCL6.js";import"./ResponsivePopoverCommon.css-C3lxCD6U.js";import"./ValueStateMessage.css-BrEs7f5W.js";import"./Suggestions.css-CFbdmF0I.js";import"./ListBoxItemGroupTemplate-c-FYvdWE.js";import"./ComboBoxItemGroup-DkC4WO5K.js";import"./ListItemBaseTemplate-i-G6TbOA.js";import"./Token-vKcedYbW.js";import"./ScrollEnablement-Co_z5fSg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MB0v_CnF.js";import"./ToggleButton-CEqqS3wC.js";import"./SuggestionItem-C155tcTK.js";import"./index--hQpz-7j.js";import"./Option-CDBeTc3X.js";import"./index-BsFzClGp.js";import"./SegmentedButton-hl36dHeU.js";import"./index-4z4gHu9I.js";import"./Select-BWlL0NgQ.js";import"./InvisibleMessage-D7C8qh2V.js";import"./slim-arrow-down-BozxQxPU.js";import"./index-CEocB7zn.js";import"./index-V_dIRRcU.js";import"./index-fHuC-P80.js";import"./index-BZtku0It.js";import"./IconDesign-DXd8PPVF.js";import"./filter-diVsbBEy.js";import"./group-2-BfFZyU2o.js";import"./sort-descending-CWWRG3lr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSa0RqIf.js";import"./utils-CFI02rUA.js";import"./index-Dg1PSLCa.js";import"./index-CT_cyvy_.js";import"./index-C9-lc1hX.js";import"./navigation-down-arrow-D7LYppDl.js";import"./navigation-right-arrow-w26ji6kI.js";import"./navigation-right-arrow-CmoZr5kZ.js";import"./useCurrentTheme-DbndD2Nd.js";import"./index-Db7VAK4s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oRJVLp.js";import"./paper-plane-CUa9Y-jj.js";import"./index-CYFBViS-.js";import"./less-D7uaR2Sp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

import{j as e}from"./iframe-0eQE2YFm.js";import{useMDXComponents as i}from"./index-CrzDrume.js";import{I as a,F as m}from"./CommandsAndQueries-vs4Uf2fG.js";import{M as s,C as p}from"./blocks-DA7tG1fG.js";import"./Tag-D9KB_OaV.js";import"./index-CO0N_mR_.js";import{C as l}from"./ControlsWithNote-CuCW3ws0.js";import"./copy-BusSvtxV.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BFUnxggX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAidMbCx.js";import"./index-nxBbAPWP.js";import"./index-DXkWzVKM.js";import"./Link-CbRTBueg.js";import"./index-CX4m4aKj.js";import"./index-DIoC19fn.js";import"./index-DCkfYqwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwbZNxPW.js";import"./addCustomCSSWithScoping-CEa4HZHN.js";import"./index-Cl7aYaAj.js";import"./information-DHaKlJ23.js";import"./sys-enter-2-CjOjN1qK.js";import"./alert-D98VDEUp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYg0i2eY.js";import"./delete-CoYQXplb.js";import"./settings-VZnwFT1a.js";import"./NoData-BQniyW5-.js";import"./IllustratedMessage-B0A1-0ks.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-teAEBMAS.js";import"./index-DB3CcisP.js";import"./index-D-LeeP8b.js";import"./slim-arrow-down-CkX7thXh.js";import"./Input-BaZHhr9A.js";import"./ResponsivePopoverCommon.css-B4yMTcW1.js";import"./ValueStateMessage.css-CDY6pP0f.js";import"./Suggestions.css-Dmp7acZ3.js";import"./ListBoxItemGroupTemplate-H0m4nnsY.js";import"./ComboBoxItemGroup-rbI26ojW.js";import"./ListItemBaseTemplate-CXUx-zU1.js";import"./Token-CIFLWQCf.js";import"./ScrollEnablement-BrxI8ufh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9gf_cfX.js";import"./ToggleButton-CRw4HV0q.js";import"./SuggestionItem-CGZYm_I2.js";import"./index-DYuYdSg5.js";import"./Option-CJ-Q9Osb.js";import"./index-DbU22zDM.js";import"./SegmentedButton-C0dzqyrm.js";import"./index-BuNlLbX6.js";import"./Select-Dkvc-1du.js";import"./InvisibleMessage-BLfENYQH.js";import"./slim-arrow-down-BPzYFF0q.js";import"./index-CjCjG_de.js";import"./index-B6adVHqs.js";import"./index-CCMgeDTf.js";import"./index-YR2Vv4g_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqc3-cj.js";import"./group-2-LwVDXe1y.js";import"./sort-descending-DLo-C6x1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBbdY5LP.js";import"./utils-kn_XFzdZ.js";import"./index-BynfEZ9N.js";import"./index-IPEBGIZt.js";import"./index-Drp4RYe3.js";import"./navigation-down-arrow-BlUbHMqy.js";import"./navigation-right-arrow-BiBjVNSK.js";import"./navigation-right-arrow-BWLrQnKx.js";import"./useCurrentTheme-EU1exHdB.js";import"./index-CgfgYE9g.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bhd782rf.js";import"./paper-plane-DxvI1Ia-.js";import"./index-xSCZdNeR.js";import"./less-COfx4Qkm.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

import{j as e}from"./iframe-DcVE_SyB.js";import{useMDXComponents as i}from"./index-ABq4qJq0.js";import{I as a,F as m}from"./CommandsAndQueries-DAZF1NdY.js";import{M as s,C as p}from"./blocks-dRinqquH.js";import"./Tag-n6X7AHU2.js";import"./index-DZbYLiGZ.js";import{C as l}from"./ControlsWithNote-ByrL7Htl.js";import"./copy-qTVa6Rxc.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Co8rL4ED.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8wszqvC.js";import"./index-C2IoMvXB.js";import"./index-DAALXQvw.js";import"./Link-LjC7fwET.js";import"./index-DF4i9ljf.js";import"./index-DOSi9OrP.js";import"./index-_uRePxm1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWDpOxWr.js";import"./addCustomCSSWithScoping-CuYK4DUc.js";import"./index-DbL7CbMN.js";import"./information-Cg8MaXEH.js";import"./sys-enter-2-d1HQr0rP.js";import"./alert-CDirY_rF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BS6OM1vm.js";import"./delete-CEfUEJT4.js";import"./settings-Csdc-hH6.js";import"./NoData-blQGosmG.js";import"./IllustratedMessage-BPqXVV7x.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-SHojW0S1.js";import"./index-BsLSp1N8.js";import"./index-C1vx3Aim.js";import"./slim-arrow-down-C_wVi7l8.js";import"./Input-C5nBZh3K.js";import"./ResponsivePopoverCommon.css-DXjeYxpj.js";import"./ValueStateMessage.css-Cej4xjjY.js";import"./Suggestions.css-DxgDwmR8.js";import"./ListBoxItemGroupTemplate-7H6xFp3F.js";import"./ComboBoxItemGroup-huP5bgUR.js";import"./ListItemBaseTemplate-Dwv9uts5.js";import"./Token-_oKw71Y0.js";import"./ScrollEnablement-CIsN21aQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NySdr-n5.js";import"./ToggleButton-RUCIrKrh.js";import"./SuggestionItem-CmngfsIg.js";import"./index-C3fVCLar.js";import"./Option-ByjA3kO8.js";import"./index-BsQ6HnSy.js";import"./SegmentedButton-D8dJ17L9.js";import"./index-DIP19kXX.js";import"./Select-CE7FAMxu.js";import"./InvisibleMessage-LUr2HJbj.js";import"./slim-arrow-down-CnwjqAnQ.js";import"./index-CvVxnQ6j.js";import"./index-CXjND3aT.js";import"./index-EYM3a7UD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-o2p0R9uo.js";import"./group-2-Byaog51a.js";import"./sort-descending-Bzv2nAVp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DeHYvak-.js";import"./utils-CCfE5SJ7.js";import"./index-C2IP9_p7.js";import"./index-DjjA3sYt.js";import"./index-C2XBgPIA.js";import"./navigation-down-arrow-BEehImn2.js";import"./navigation-right-arrow-C1A0KtOV.js";import"./navigation-right-arrow-C8E2_mjg.js";import"./useCurrentTheme-B3cs0LME.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YzO-o16q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX1EXUwa.js";import"./paper-plane-CuYG0k3S.js";import"./index-Bwa6ZTZc.js";import"./less-BNEp7IO8.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

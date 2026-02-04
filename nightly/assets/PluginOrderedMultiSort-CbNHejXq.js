import{j as e}from"./iframe-CIYL-5q3.js";import{useMDXComponents as i}from"./index-CWXxkQxH.js";import{I as a,F as m}from"./CommandsAndQueries-DjZZVJII.js";import{M as s,C as p}from"./blocks-BmH4wjlj.js";import"./Tag-Bj-YRcmn.js";import"./index-DpooF_Dp.js";import{C as l}from"./ControlsWithNote-Dlv8q78z.js";import"./copy-Cls5Qy9v.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DLFlN1sC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUhE9jhW.js";import"./index-ywBu0MNL.js";import"./index-fAH3q00h.js";import"./Link-C09fzDpl.js";import"./index-OosLgrWy.js";import"./index-CMG3T6cu.js";import"./index-DTrWp4X_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cia2o1gw.js";import"./addCustomCSSWithScoping-CnnSu9RY.js";import"./index-ExTvjT1c.js";import"./information-24sGxR45.js";import"./sys-enter-2-CbyVzbEB.js";import"./alert-BzxY5xRy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DN5NK2GL.js";import"./delete-BbuwAWWV.js";import"./settings-CUTuJpbA.js";import"./NoData-Cja0uYrN.js";import"./IllustratedMessage-BcIwS1uR.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DuWNeOZq.js";import"./index-isDn43Z1.js";import"./index-AShUGGEM.js";import"./slim-arrow-down-DUmzLarA.js";import"./Input-BZQLttu5.js";import"./ResponsivePopoverCommon.css-CfiWzak8.js";import"./ValueStateMessage.css-PjKvvuan.js";import"./Suggestions.css-WY21doQK.js";import"./ListBoxItemGroupTemplate-B6Obkb05.js";import"./ComboBoxItemGroup-BVY9PC83.js";import"./ListItemBaseTemplate-D2BofZjF.js";import"./Token-6QA7fI97.js";import"./ScrollEnablement-DOM2ZjBt.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWBl7L1k.js";import"./ToggleButton-Cmmqs7qR.js";import"./SuggestionItem-BgRbV0QE.js";import"./index-B4nVUG4n.js";import"./Option-DJ0h8inA.js";import"./index-BCOz2x-a.js";import"./SegmentedButton-BSzNVR0_.js";import"./index-YQD3BlP6.js";import"./Select-l7QB7fa7.js";import"./InvisibleMessage-D1mcAElI.js";import"./slim-arrow-down-wVqrmhLU.js";import"./index-CJLTJ6U5.js";import"./index-Be4UD4MD.js";import"./index-COWtlANm.js";import"./index-pMJvwxr3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbTqfTOV.js";import"./group-2-gbIA7stC.js";import"./sort-descending-6ZrR7-wc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-I3O_UikH.js";import"./utils-DS2Z6nbO.js";import"./index-VcgiXEjf.js";import"./index-DwnDivfc.js";import"./index-DhtEduvs.js";import"./navigation-down-arrow-JN7PJRcw.js";import"./navigation-right-arrow-Nvd9V3_e.js";import"./navigation-right-arrow-5JLsdip7.js";import"./useCurrentTheme-27eqesd4.js";import"./index-BMFUyCMr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ybGgh7zN.js";import"./paper-plane-GpjElHEt.js";import"./index-CmPFVJ7g.js";import"./less-BIQS483_.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

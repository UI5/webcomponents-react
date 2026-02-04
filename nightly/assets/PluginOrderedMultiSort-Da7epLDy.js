import{j as e}from"./iframe-DZSv2zZb.js";import{useMDXComponents as i}from"./index-BqdSmNlq.js";import{I as a,F as m}from"./CommandsAndQueries-CZUib4pD.js";import{M as s,C as p}from"./blocks-BSnZQBrX.js";import"./Tag-BEM_u6FU.js";import"./index-BBEh2DsQ.js";import{C as l}from"./ControlsWithNote-DL936Knp.js";import"./copy-23w1fGpY.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C4VBB38l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2hiyRQA.js";import"./index-CCnKvqA0.js";import"./index-DrF5gpEw.js";import"./Link-CCplhiXF.js";import"./index-EGktcBQb.js";import"./index-DRWzqH2N.js";import"./index-CYgXuNom.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z5sB9nBC.js";import"./addCustomCSSWithScoping-DXOZ95so.js";import"./index-lD82309j.js";import"./information-COD7Swxj.js";import"./sys-enter-2-CFC1gFhb.js";import"./alert-CTmlBOXX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1sxQtFsG.js";import"./delete-DI6RV7tq.js";import"./settings-l6CcnnHP.js";import"./NoData-DLhCBRaq.js";import"./IllustratedMessage-D8pCRgjf.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BDEpL-v7.js";import"./index-CLQJqlCs.js";import"./index-CnzAFXhm.js";import"./slim-arrow-down-CyuMg1At.js";import"./Input-DNMPeMSb.js";import"./ResponsivePopoverCommon.css-KtD9lY_C.js";import"./ValueStateMessage.css-s-LD16Ms.js";import"./Suggestions.css-rNWcSnI_.js";import"./ListBoxItemGroupTemplate-DCfYj4zl.js";import"./ComboBoxItemGroup-BKdcP3-8.js";import"./ListItemBaseTemplate-BxdUV-4d.js";import"./Token-C-7Kub3Q.js";import"./ScrollEnablement-B-_jXnOO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BumMf1lq.js";import"./ToggleButton-zAP43mrP.js";import"./SuggestionItem-C071nU1p.js";import"./index-CyyzdwPX.js";import"./Option-CFccuGHw.js";import"./index-DTcOlFUA.js";import"./SegmentedButton-DFozwT5-.js";import"./index-BK-Z6osY.js";import"./Select-DTXWeNTs.js";import"./InvisibleMessage-DQakaRnz.js";import"./slim-arrow-down-D7c7A5lb.js";import"./index-BzE-wgMg.js";import"./index-EA0cjcxp.js";import"./index-BvFjW66u.js";import"./index-Dqc9eXJK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdNFGMUl.js";import"./group-2-Cdsp5Lj1.js";import"./sort-descending-CYgNNlsg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3f_41XS.js";import"./utils-7Hi63yvZ.js";import"./index-DbLzE552.js";import"./index-CLU12hYv.js";import"./index-CIpEOGpc.js";import"./navigation-down-arrow-CEqrsa8y.js";import"./navigation-right-arrow-D-lQ_y8p.js";import"./navigation-right-arrow-DseGevTb.js";import"./useCurrentTheme-DF-c7hmf.js";import"./index-DciiPa4I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BzVE9glM.js";import"./paper-plane-BHeSZ19x.js";import"./index-DPhTd4XE.js";import"./less-D29QdeXg.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

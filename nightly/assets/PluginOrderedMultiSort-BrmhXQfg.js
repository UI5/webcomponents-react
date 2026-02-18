import{j as e}from"./iframe-BeAHz6cC.js";import{useMDXComponents as i}from"./index-IuDgzHrg.js";import{I as a,F as m}from"./CommandsAndQueries-D97dtm9O.js";import{M as s,C as p}from"./blocks-BFIGDLi7.js";import"./Tag-D9qmbNXw.js";import"./index-BxL3HTx3.js";import{C as l}from"./ControlsWithNote-BukBvQQM.js";import"./copy-CeLNiPKq.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bef49mXS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz53yeIo.js";import"./index-BJX7RQS4.js";import"./index-DADITnZh.js";import"./Link-DcHF9WJI.js";import"./index-B-C-Jm2N.js";import"./index-BgUv4ZgK.js";import"./index-dtYUUSxT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0TPubq3.js";import"./addCustomCSSWithScoping--2mgu3TN.js";import"./index-D74mYq85.js";import"./information-CKz_vH8g.js";import"./sys-enter-2-DjAoJc05.js";import"./alert-DbaxRKJL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYfsnrA-.js";import"./delete-BbZcD_Jy.js";import"./settings-B-7ACuFB.js";import"./NoData-DRgLX-o5.js";import"./IllustratedMessage-C5En4lhQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-0Ax5XtPu.js";import"./index-mMXt2Ig4.js";import"./index-BPce1aTx.js";import"./slim-arrow-down-CnwrFvZs.js";import"./Input-C1KpoHfz.js";import"./ResponsivePopoverCommon.css-DmlFnob0.js";import"./ValueStateMessage.css-DKcV5GT7.js";import"./Suggestions.css--wo_Z0Zb.js";import"./ListBoxItemGroupTemplate-Cg8nSs_y.js";import"./ComboBoxItemGroup-CACE9fiW.js";import"./ListItemBaseTemplate-SOqbHsMM.js";import"./Token-CPys-ICN.js";import"./ScrollEnablement-SmS2scF8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkxzzqLh.js";import"./ToggleButton-B1-jynwA.js";import"./SuggestionItem-DiIPrr67.js";import"./index-DFLqYco2.js";import"./Option-BP8-vTtd.js";import"./index-B86j6xyl.js";import"./SegmentedButton-CETefqCy.js";import"./index-r7IiC7sj.js";import"./Select-BJKmcwBb.js";import"./InvisibleMessage-BniauCX7.js";import"./slim-arrow-down-C6Y9ZcYg.js";import"./index-D6yRflfZ.js";import"./index-BfCFP5Is.js";import"./index-C6jXAYSN.js";import"./index-CvVdNUDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zo7K4tca.js";import"./group-2-BBGAdkSh.js";import"./sort-descending-C3RNb67b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGI_tmay.js";import"./utils-tfYvJxoP.js";import"./index-Dat5JbHB.js";import"./index-6ACe6tc9.js";import"./index-2vVJU3bI.js";import"./navigation-down-arrow-BZ4wl1wA.js";import"./navigation-right-arrow-DXJ8hwha.js";import"./navigation-right-arrow-C_x6dcVg.js";import"./useCurrentTheme-BmXY1mLX.js";import"./index-Be9aI4hM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DunOEBQz.js";import"./paper-plane-DZNu3P2r.js";import"./index-4NHwF18G.js";import"./less-GlUFt5eG.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

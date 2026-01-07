import{j as e}from"./iframe-CfxMerL-.js";import{useMDXComponents as i}from"./index-VbSVpo3U.js";import{I as a,F as m}from"./CommandsAndQueries-Dg2B8ke5.js";import{M as s,C as p}from"./blocks-MJ_5uOZ-.js";import"./Tag-BNqMWY4P.js";import"./index-BI2nwMUJ.js";import{C as l}from"./ControlsWithNote-ChDAbAVV.js";import"./copy-B6ViSnKB.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B_Wpf4B4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DP6bCfzy.js";import"./index-IP6CGDwM.js";import"./index-BYZXhHpQ.js";import"./Link-BitnWoH9.js";import"./index-BTQ4bVGw.js";import"./index-DTz3tRU0.js";import"./index-DjUM5b1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC5ToBw2.js";import"./addCustomCSSWithScoping-El6BaIIi.js";import"./index-B0xbheog.js";import"./information-V-ZI-MUr.js";import"./sys-enter-2-BPqtZ6Ae.js";import"./alert-BY-nhKm6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BsCEz7ib.js";import"./delete-D7RS9M-y.js";import"./settings-DEtPc8Wj.js";import"./NoData-B_-T5WI3.js";import"./IllustratedMessage-BZNw5Wiu.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BnYjPhI7.js";import"./index-bif26s3P.js";import"./index-Cwf7lSCC.js";import"./slim-arrow-down-d9rX3ebS.js";import"./Input-D3np0nF3.js";import"./ResponsivePopoverCommon.css-DjynAZOg.js";import"./ValueStateMessage.css-DkCKabc6.js";import"./Suggestions.css-MQWeG9TG.js";import"./ListBoxItemGroupTemplate-CM5NZpBA.js";import"./ComboBoxItemGroup-BrUfLYBK.js";import"./ListItemBaseTemplate-Cy-PquU_.js";import"./Token-ne2P8_To.js";import"./ScrollEnablement-ziMxJENG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BVYApwgA.js";import"./ToggleButton-BZRyXu7G.js";import"./SuggestionItem-BlVIKvF5.js";import"./index-BAwfKYgr.js";import"./Option-C1QKLt8h.js";import"./index-HY2ZsT1u.js";import"./SegmentedButton-B1Kk8DVS.js";import"./index-4mdijd2N.js";import"./Select-kSz6MKWU.js";import"./InvisibleMessage-et9yvTH3.js";import"./slim-arrow-down-Dqgy0Zme.js";import"./index-D8Qeadr9.js";import"./index-ri-WXBZU.js";import"./index-BKIcMWwD.js";import"./index-Cr9UVhXj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Btv3_sW8.js";import"./group-2-nZBOHX9Q.js";import"./sort-descending-BSyKh4wL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFTNZfH.js";import"./utils-DGabngUu.js";import"./index-BRkWBZ5K.js";import"./index-CHJ4GtUC.js";import"./index-BPqtDCmb.js";import"./navigation-down-arrow-7qCnXGQg.js";import"./navigation-right-arrow-BsRz9Oss.js";import"./navigation-right-arrow-B0sX5CVs.js";import"./useCurrentTheme-BhGBafEw.js";import"./index-C5nYMhvF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1OO3TS9.js";import"./paper-plane-CwGGMTBs.js";import"./index-BAq-T-Uj.js";import"./less-DABYie6s.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

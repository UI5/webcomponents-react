import{j as e}from"./iframe-DxaU3ukP.js";import{useMDXComponents as i}from"./index-Bu64E7xz.js";import{I as a,F as m}from"./CommandsAndQueries-CWzmGACf.js";import{M as s,C as p}from"./blocks-shsJXsJu.js";import"./Tag-HWB4mzIK.js";import"./index-BuSb9dlo.js";import{C as l}from"./ControlsWithNote-DwYfY6pK.js";import"./copy-iAtgzS7e.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CvnNq-Rx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCr6QTyS.js";import"./index-4KyKvZuP.js";import"./index-DJhOYGHM.js";import"./Link-B8iiEW6g.js";import"./index-wIV-Jx7Q.js";import"./index-B4KIHpYZ.js";import"./index-CCQGvtXt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-P9_4H6jZ.js";import"./addCustomCSSWithScoping-DcrmHllZ.js";import"./index-DBN874s0.js";import"./information-Y-FlrSb9.js";import"./sys-enter-2-Cl_Hs57G.js";import"./alert-xbLWAWtw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYhdiQD5.js";import"./delete-BS7GLbbQ.js";import"./settings-BAtFRTLl.js";import"./NoData-P0aiFWNe.js";import"./IllustratedMessage-b_ym9Hb3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BjgjNlcX.js";import"./index-DmQ0Wp9f.js";import"./index-DQK5zeFS.js";import"./slim-arrow-down-fGj_LI5J.js";import"./Input-D_YVohIg.js";import"./ResponsivePopoverCommon.css-DNS4oV3Y.js";import"./ValueStateMessage.css-DpHhcDZf.js";import"./Suggestions.css-CaY-hH4G.js";import"./ListBoxItemGroupTemplate-BajDE4jz.js";import"./ComboBoxItemGroup-CSbTFdho.js";import"./ListItemBaseTemplate-Dhr4Rhd3.js";import"./Token-C4NZa-ox.js";import"./ScrollEnablement-DfjnlUNY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FvkwmzYL.js";import"./ToggleButton-CzTCoMTN.js";import"./SuggestionItem-CRPTOIvP.js";import"./index-ngowydBr.js";import"./Option-C0Uvoc7q.js";import"./index-tLjFiak6.js";import"./SegmentedButton-BrZOqfR3.js";import"./index-DMRgWmpo.js";import"./Select-B8Q3fF-g.js";import"./InvisibleMessage-Vimf6Y5N.js";import"./slim-arrow-down-DRqlReJZ.js";import"./index-BVH6V1yj.js";import"./index-B8fGZl2t.js";import"./index-rAT2WEiI.js";import"./index-C3UD1Hqj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DB4Xqkcu.js";import"./group-2-JYhBavgn.js";import"./sort-descending-BWym6GfS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hJi7DpYf.js";import"./utils-rEWueUxT.js";import"./index-DPFDbPpv.js";import"./index-C4sy8ZPw.js";import"./index-0BAFT4SC.js";import"./navigation-down-arrow-Bb0q6ooJ.js";import"./navigation-right-arrow-agwdLGP0.js";import"./navigation-right-arrow-DxjP7dnY.js";import"./useCurrentTheme-bdMlbWTW.js";import"./index-Dd-sbQ45.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TKZ3-owy.js";import"./paper-plane-GGpDAgH5.js";import"./index-CTUD2-bS.js";import"./less-Bd6W-74P.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

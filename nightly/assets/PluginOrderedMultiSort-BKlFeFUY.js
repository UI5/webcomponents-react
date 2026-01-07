import{j as e}from"./iframe-Lvl9yzry.js";import{useMDXComponents as i}from"./index-DtnS30Y7.js";import{I as a,F as m}from"./CommandsAndQueries-r8pG5JEL.js";import{M as s,C as p}from"./blocks-DE-pS5pt.js";import"./Tag-Ntj2WoJZ.js";import"./index-Z8W5RiOf.js";import{C as l}from"./ControlsWithNote-DJfCLSui.js";import"./copy-BqWuakZq.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-W1z4E9IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XWeRb-Rp.js";import"./index-NhuzyApy.js";import"./index-BVP3-7sd.js";import"./Link-BJMT4XUv.js";import"./index-CtS6x3f8.js";import"./index-CNh112J7.js";import"./index-BNlSxjfl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VTbkLDop.js";import"./addCustomCSSWithScoping-aRHntRG4.js";import"./index-ilzt6YAk.js";import"./information-BnCFwrSd.js";import"./sys-enter-2-Ct5ni-AG.js";import"./alert-1cuYh9Xz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoV-samG.js";import"./delete-Bf6mCNJN.js";import"./settings-BTH1H1cH.js";import"./NoData-YJgOLuaU.js";import"./IllustratedMessage-DgJcJS-p.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BOWtOBh1.js";import"./index-CF9o4lMv.js";import"./index-DJszWFyw.js";import"./slim-arrow-down-CJ3pdYkm.js";import"./Input-DulPzTQS.js";import"./ResponsivePopoverCommon.css-BPkzc8tz.js";import"./ValueStateMessage.css-DkT9mXdo.js";import"./Suggestions.css-D2giGZP3.js";import"./ListBoxItemGroupTemplate-Dg_wJmKC.js";import"./ComboBoxItemGroup-Bug1j3oo.js";import"./ListItemBaseTemplate-ClQx-ttj.js";import"./Token-CvAfD02Z.js";import"./ScrollEnablement-BzfTcoR4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cugb1xkB.js";import"./ToggleButton-vHqqXMb8.js";import"./SuggestionItem-DZzNyPEU.js";import"./index-B_QiK6AG.js";import"./Option-DgDbULin.js";import"./index-EcQZrwWP.js";import"./SegmentedButton-BVtdiyLd.js";import"./index-DKsWxbvM.js";import"./Select-CdVgAmGG.js";import"./InvisibleMessage-CMJ7wXZy.js";import"./slim-arrow-down-BWLmdiin.js";import"./index-CNzg74ta.js";import"./index-BwrikEva.js";import"./index-DFBuPGbC.js";import"./index-CYmJcLDK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJnLt-s6.js";import"./group-2-Cog56SjU.js";import"./sort-descending-BD1V-JDC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CH4WmmUP.js";import"./utils-cgeJKlY3.js";import"./index-Bn7mHf-9.js";import"./index-B2B9kXKH.js";import"./index-DiQWGXFC.js";import"./navigation-down-arrow-CveMzw9u.js";import"./navigation-right-arrow-BQsgPNis.js";import"./navigation-right-arrow-DTUlVw7t.js";import"./useCurrentTheme-x7DPOfUa.js";import"./index-BKYwVVoy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hJE8aY9K.js";import"./paper-plane-D0keah3m.js";import"./index-ombsrexN.js";import"./less-xLGJFvMI.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

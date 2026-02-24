import{j as e}from"./iframe-CSs3GcCz.js";import{useMDXComponents as i}from"./index-1VYUEsB4.js";import{I as a,F as m}from"./CommandsAndQueries-Dzepq0rT.js";import{M as s,C as p}from"./blocks-DlOiJG9w.js";import"./Tag-tq7bvH7x.js";import"./index-Bv5UQAtB.js";import{C as l}from"./ControlsWithNote-Cd98Jtki.js";import"./copy-A0b4Giju.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-tvuh3a0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jfbseB2e.js";import"./index-C2PP5dg7.js";import"./index-kEy_zqDf.js";import"./Link-Bs0GSE9o.js";import"./index-CNpYG1J4.js";import"./index-C-kYIaXe.js";import"./index-BXC6vCLS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoJGLxs9.js";import"./addCustomCSSWithScoping-DvKIlldN.js";import"./index-IS643aT1.js";import"./information-AyutgqL-.js";import"./sys-enter-2-Cfi5ZTIT.js";import"./alert-CpO7ww38.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-0iXmKLmk.js";import"./delete-BC4d-M8w.js";import"./settings-DFb0bSTd.js";import"./NoData-Cj60GkAW.js";import"./IllustratedMessage-CuN3Ew7z.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DSUbnOu6.js";import"./index-J5vl0EEq.js";import"./index-C2VWI5a1.js";import"./slim-arrow-down-B7OBTn9O.js";import"./Input-DdGahQ8p.js";import"./ResponsivePopoverCommon.css-B6aP4EWz.js";import"./ValueStateMessage.css-rStVzh3o.js";import"./Suggestions.css-DVjfbfM-.js";import"./ListBoxItemGroupTemplate-DCz12Yoy.js";import"./ComboBoxItemGroup-BRoNWA4Q.js";import"./ListItemBaseTemplate-iIRKaqk5.js";import"./Token-CvT8k6R4.js";import"./ScrollEnablement-DHd31uDD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-0uLaXWUR.js";import"./ToggleButton-CKrLeVvI.js";import"./SuggestionItem-DwtoFM4A.js";import"./index-Bb7WnMUY.js";import"./Option-CfsJHbV6.js";import"./index-HkRG_gjA.js";import"./SegmentedButton-Cj_0JQrp.js";import"./index-Cijq7tDb.js";import"./Select-DCYdBJjt.js";import"./InvisibleMessage-BcP-U2lm.js";import"./slim-arrow-down-BFCOZBmI.js";import"./index-DAo-SJVY.js";import"./index-CWMZCKYl.js";import"./index-BIWIZz99.js";import"./index-D21M5qi1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CldNOsRY.js";import"./group-2-BlKb3z6k.js";import"./sort-descending-D9zZt52A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6Gtit63.js";import"./utils-D-NrFFbe.js";import"./index-BiChlU0_.js";import"./index-DjZAsHPB.js";import"./index-GjEC5C4h.js";import"./navigation-down-arrow-B5OEHJzH.js";import"./navigation-right-arrow-COj-HSTI.js";import"./navigation-right-arrow-DuUHDn6z.js";import"./useCurrentTheme-CbFE_1cS.js";import"./index-BsKxNe-0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5q-dcwP.js";import"./paper-plane-BSVrRvcJ.js";import"./index-vOXR-MYi.js";import"./less-CZvmS1u8.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

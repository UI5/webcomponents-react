import{j as e}from"./iframe-oB-4R5Rt.js";import{useMDXComponents as i}from"./index-CPM_KuJ1.js";import{I as a,F as m}from"./CommandsAndQueries-V7DYmci2.js";import{M as s,C as p}from"./blocks-BSJ2p1aB.js";import"./Tag-D-nP8Atk.js";import"./index-D9a9y2w1.js";import{C as l}from"./ControlsWithNote-DQKRLg5F.js";import"./copy-BEsfMMdz.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-4VAmKrJC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgFkqkoM.js";import"./index-ByTtsog6.js";import"./index-QtLlbt_o.js";import"./Link-DOQS5UBs.js";import"./index-CTKLJSsf.js";import"./index-DzeBy8FO.js";import"./index-CQQbQqNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1pBRLIk.js";import"./addCustomCSSWithScoping-Bfd00zUa.js";import"./index-BRbXVYQh.js";import"./information-BRyOdl2D.js";import"./sys-enter-2-DyCH1cMA.js";import"./alert-BVT2hG_8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B85Kwi0U.js";import"./delete-DTD52Dt-.js";import"./settings-C_n4xVXc.js";import"./NoData-Cl-2h7pm.js";import"./IllustratedMessage-0CeFZb1f.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-c6iHh6_s.js";import"./index-DAe_C3xM.js";import"./index-QijUrmH0.js";import"./slim-arrow-down-CXy1laZl.js";import"./Input-CmhKXc0K.js";import"./ResponsivePopoverCommon.css-BI55EcO7.js";import"./ValueStateMessage.css-BBVlRBqU.js";import"./Suggestions.css-hXMoKZOy.js";import"./ListBoxItemGroupTemplate-M1QDvz3X.js";import"./ComboBoxItemGroup-Bx9p2mC6.js";import"./ListItemBaseTemplate-Bah4nUE4.js";import"./Token-jwxYX-yd.js";import"./ScrollEnablement-oY_T1yvo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-IaHLS1HF.js";import"./ToggleButton-DY0lb3z6.js";import"./SuggestionItem-2gqz2T4s.js";import"./index-BWPeagQl.js";import"./Option-cV3MYBFS.js";import"./index-BzBis61R.js";import"./SegmentedButton-DCb2A_xv.js";import"./index-CAA2J6fr.js";import"./Select-DmNHfi17.js";import"./InvisibleMessage-MKUVNUZM.js";import"./slim-arrow-down-enTMIpdD.js";import"./index-C_xnFlWE.js";import"./index-Cv0_3GO5.js";import"./index-BRv3mF1V.js";import"./index-Crwyz8ZA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6MPiSVH.js";import"./group-2-Cd1iqfwu.js";import"./sort-descending-B1MDHvU-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Z4g25ytt.js";import"./utils-B5Fc9P4b.js";import"./index-DpDL8a8s.js";import"./index-Ql5yF9yx.js";import"./index-BPoxwQOt.js";import"./navigation-down-arrow-Dkon3Z8u.js";import"./navigation-right-arrow-Dm6-IpRK.js";import"./navigation-right-arrow-BNSorjsP.js";import"./useCurrentTheme-CjUUgy0P.js";import"./index-D-67tr6h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-6qlPxf.js";import"./paper-plane-B_Zq24If.js";import"./index-BeY4v2SL.js";import"./less-Bv-Ti7Zp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

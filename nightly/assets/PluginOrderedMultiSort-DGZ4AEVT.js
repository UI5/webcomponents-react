import{j as e}from"./iframe-8PJ6_3g2.js";import{useMDXComponents as i}from"./index-C0ovl4HQ.js";import{I as a,F as m}from"./CommandsAndQueries-DwoVClSd.js";import{M as s,C as p}from"./blocks-BEb05MJo.js";import"./Tag-z4B_wt0s.js";import"./index-BcmoHwde.js";import{C as l}from"./ControlsWithNote-BDIy3Dw3.js";import"./copy-Bfeap7lu.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Nt8WbxtB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYfjdXMS.js";import"./index-BDwyo_3E.js";import"./index-GTIQmPyl.js";import"./Link-BhglMJXJ.js";import"./index-DOdcY3p9.js";import"./index-BGjlJLGo.js";import"./index-BysWD4q1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsI0QAy3.js";import"./addCustomCSSWithScoping-DJAGr2gu.js";import"./index-DwEBrLAz.js";import"./information-aKABhmx8.js";import"./sys-enter-2-BFUBKj9Z.js";import"./alert-yjyGEikw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CRLZ9Z9y.js";import"./delete-DoVGGrww.js";import"./settings-DOwCGSp-.js";import"./NoData-DX8iFU04.js";import"./IllustratedMessage-DwvnKJ-a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Cz59M25c.js";import"./index-BT7W3yfe.js";import"./index-BdN-aXSN.js";import"./slim-arrow-down-BTsCMmyB.js";import"./Input-09R7KXgd.js";import"./ResponsivePopoverCommon.css-CrTnDQN-.js";import"./ValueStateMessage.css-BM_qG5Qq.js";import"./Suggestions.css-B1t_kolg.js";import"./ListBoxItemGroupTemplate-DuVOq56T.js";import"./ComboBoxItemGroup-CbELEeBa.js";import"./ListItemBaseTemplate-BXf-MYE4.js";import"./Token-BMJQIKb4.js";import"./ScrollEnablement-CI1lcBXS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZruH8lY.js";import"./ToggleButton-rRY9LxWZ.js";import"./SuggestionItem-D37ZdZha.js";import"./index-DIJMSgqG.js";import"./Option--8nGv81u.js";import"./index-B4ZMJdMK.js";import"./SegmentedButton-Sdb6Hiel.js";import"./index-D8L7g3jK.js";import"./Select-CwKKVGbl.js";import"./InvisibleMessage-Ctaws7An.js";import"./slim-arrow-down-udpyDWvM.js";import"./index-Dz-9JHfm.js";import"./index-CSgO5UkG.js";import"./index-DmBbmPAO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BCjSLsv5.js";import"./group-2-gn0AftPK.js";import"./sort-descending-UnfrwN5g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CBj28W3w.js";import"./utils-CQzE5s8Z.js";import"./index-CKJGxDyU.js";import"./index-EqUF1F3h.js";import"./index-BVu9BMf-.js";import"./navigation-down-arrow-DQ7nYyPJ.js";import"./navigation-right-arrow-BKJTL6fn.js";import"./navigation-right-arrow-CG0KPGIo.js";import"./useCurrentTheme-B8X2i-jd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-uz7ZZ6ou.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxBvBx4N.js";import"./paper-plane-C7vPyTzF.js";import"./index-Pz9pP2GN.js";import"./less-B8XtBTQx.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

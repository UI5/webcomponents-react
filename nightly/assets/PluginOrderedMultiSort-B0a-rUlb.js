import{j as e}from"./iframe-DsgKHrOc.js";import{useMDXComponents as i}from"./index-R1G5OZPs.js";import{I as a,F as m}from"./CommandsAndQueries-D_2jUbP4.js";import{M as s,C as p}from"./blocks-CQue4LlW.js";import"./Tag-BTAP7zi_.js";import"./index-B3N-7g7X.js";import{C as l}from"./ControlsWithNote-DxYVNC-M.js";import"./copy-DlTApuN1.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-i7kpTZ_A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNMfu1Bq.js";import"./index-CnrY0exf.js";import"./index-BdUiiHhG.js";import"./Link-DoHEtv1B.js";import"./index-Dm9AGWV-.js";import"./index-BomSeR7F.js";import"./index-W4kN-wgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BfAO3hVt.js";import"./addCustomCSSWithScoping-CsuAJYaG.js";import"./index-0Q75H94O.js";import"./information-ls1iI2xZ.js";import"./sys-enter-2-BOSLgeP2.js";import"./alert-BH6ifEnA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SSqF3mYr.js";import"./delete-BXxwRw5y.js";import"./settings-BDZ662oR.js";import"./NoData-mzNWeO_R.js";import"./IllustratedMessage-CwAF6TLx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CBmQxRIQ.js";import"./index-CO7AsHeT.js";import"./index-DPmxY5Fk.js";import"./slim-arrow-down-BFPvdtk4.js";import"./Input-CLRI9CEh.js";import"./ResponsivePopoverCommon.css-Dz_dByIm.js";import"./ValueStateMessage.css-C1b8jnbg.js";import"./Suggestions.css-Y2NBFohg.js";import"./ListBoxItemGroupTemplate-Cu8LS11Q.js";import"./ComboBoxItemGroup-zDzTNuwT.js";import"./ListItemBaseTemplate-Ch-vNojB.js";import"./Token-DNwyr1VA.js";import"./ScrollEnablement-CijCXV-f.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CPkU6wJ3.js";import"./ToggleButton-COie_AKR.js";import"./SuggestionItem-B4-4_m5w.js";import"./index-HXM5p6gS.js";import"./Option-CQ19A_kf.js";import"./index-0mAv68Ot.js";import"./SegmentedButton-h60sJA6a.js";import"./index-C8-_l6KY.js";import"./Select-MmIlw-od.js";import"./InvisibleMessage-q1FFN4_p.js";import"./slim-arrow-down-BLSo6u6P.js";import"./index-DK0w5O82.js";import"./index-Dn-44Img.js";import"./index-CUAjbgKI.js";import"./index-CLFnZnkT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DY9qOiNW.js";import"./group-2-B0_QXr5r.js";import"./sort-descending-B2J58p1j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE-0JGpI.js";import"./utils-BcerUUFZ.js";import"./index-QVkFgjH8.js";import"./index-0oo2lNeo.js";import"./index-DaiJcS-C.js";import"./navigation-down-arrow-bXhK5skS.js";import"./navigation-right-arrow-uarvhyB4.js";import"./navigation-right-arrow-7Xw2c4NW.js";import"./useCurrentTheme-BDtdl0D9.js";import"./index-NzD9g4E3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-IwUpqcbd.js";import"./paper-plane-DoDYrXu7.js";import"./index-B6hPTyEO.js";import"./less-BPtBbolb.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

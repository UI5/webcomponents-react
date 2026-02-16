import{j as e}from"./iframe-COmYM7FM.js";import{useMDXComponents as i}from"./index-nJK3ZT8W.js";import{I as a,F as m}from"./CommandsAndQueries-BOWLtTE6.js";import{M as s,C as p}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import{C as l}from"./ControlsWithNote-D0uv15nF.js";import"./copy-CXZAgH3a.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DVhjw13G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./index-DFr8Hmr1.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdbjcEwi.js";import"./delete-C5z8HYGA.js";import"./settings-B_K-MLff.js";import"./NoData-CVSMoMaA.js";import"./IllustratedMessage-CLKrxT4u.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-hcxm4ff3.js";import"./index-Dsh65RiT.js";import"./index-BIVMAjf6.js";import"./slim-arrow-down-jGOJjhpo.js";import"./Input-Bu6vC63z.js";import"./ResponsivePopoverCommon.css-C4KWqDDR.js";import"./ValueStateMessage.css-DI3W06n_.js";import"./Suggestions.css-CPV1YgiF.js";import"./ListBoxItemGroupTemplate-BMlbPmoD.js";import"./ComboBoxItemGroup-FACN2vTy.js";import"./ListItemBaseTemplate-B6EaFX9g.js";import"./Token-CGmzQJS_.js";import"./ScrollEnablement-DvHuSSVb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BflPf8Ge.js";import"./ToggleButton-CsElF1rR.js";import"./SuggestionItem-Dd6fqolr.js";import"./index-D0YWeYAy.js";import"./Option-CKR1byVj.js";import"./index-BQf3vQDP.js";import"./SegmentedButton-CvpabKGu.js";import"./index-Bw_-eraM.js";import"./Select-B6eJ5Vgx.js";import"./InvisibleMessage-B-FhaSLI.js";import"./slim-arrow-down-LiCVxuMd.js";import"./index-BDEyyVOr.js";import"./index-CgP-_Bp6.js";import"./index-Ch_J8TT8.js";import"./index-BMQcik-b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTnmyxii.js";import"./group-2-Dl5zG8N4.js";import"./sort-descending-gP9HPjaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Duy0U0pN.js";import"./utils-BXFdgd4W.js";import"./index-CL0ZF9VR.js";import"./index-x1QXYab4.js";import"./index-Bd4CgeRl.js";import"./navigation-down-arrow-DPdzdZ9F.js";import"./navigation-right-arrow-2YTC651d.js";import"./navigation-right-arrow-CcuSN_gl.js";import"./useCurrentTheme-DZHkVItH.js";import"./index-BOFC4ju2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B9v40RyR.js";import"./paper-plane-BK5ynDqO.js";import"./index-DX2-QTbN.js";import"./less-BCKthjss.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

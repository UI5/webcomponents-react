import{j as e}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as i}from"./index-B20WHrxF.js";import{I as a,F as m}from"./CommandsAndQueries-B8G4x6Z0.js";import{M as s,C as p}from"./blocks-BHc609zj.js";import"./Tag-BlFr4TrL.js";import"./index-4o5lIxTZ.js";import{C as l}from"./ControlsWithNote-C8ZAtGvJ.js";import"./copy-CTtd4S6z.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DlmuqfHS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./index-BTxuEF3n.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXYYz_X6.js";import"./delete-CvK1FKxI.js";import"./settings-CVPUgzNe.js";import"./NoData-JwmSOzMe.js";import"./IllustratedMessage-CAmtVAA-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B__4zQr4.js";import"./index-CYj9BOV8.js";import"./index-DNYTFpAf.js";import"./slim-arrow-down-pu6c9dFU.js";import"./Input-B3RJG3gm.js";import"./ResponsivePopoverCommon.css-aexR0yTU.js";import"./ValueStateMessage.css-yur_ejCi.js";import"./Suggestions.css-CLQcfKgH.js";import"./ListBoxItemGroupTemplate-CJgkBchq.js";import"./ComboBoxItemGroup-BSH89920.js";import"./ListItemBaseTemplate-BkUkk_X3.js";import"./Token-_e7dShod.js";import"./ScrollEnablement-CiA5ZjlZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dag2Pm4v.js";import"./ToggleButton-CebUIFNy.js";import"./SuggestionItem-4j5PUDIr.js";import"./index-By_4N1WL.js";import"./Option-C4-0WVuO.js";import"./index-C_4eaVm1.js";import"./SegmentedButton-Mnc5qxs7.js";import"./index-Z3zYgv8B.js";import"./Select-mMA7a--l.js";import"./InvisibleMessage-IeyuxUiP.js";import"./slim-arrow-down-BCpPF8dH.js";import"./index-CgfRqUmo.js";import"./index-2aEaKjNa.js";import"./index-BBLdtj_k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvZOI5Qd.js";import"./group-2-CGfMPej9.js";import"./sort-descending-CrdG7dJf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_NFJJg0.js";import"./utils-Dc3BExB0.js";import"./index-0ObJ8zA9.js";import"./index-DeXKqVJU.js";import"./index-CCZOqJvN.js";import"./navigation-down-arrow-CM9oa_p2.js";import"./navigation-right-arrow-DgXFepz4.js";import"./navigation-right-arrow-BkvomJoX.js";import"./useCurrentTheme-BjJaTJFz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DmvUDyzO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtE2suF5.js";import"./paper-plane-LVrZWN71.js";import"./index-BKPK1xED.js";import"./less-DwozNvkG.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

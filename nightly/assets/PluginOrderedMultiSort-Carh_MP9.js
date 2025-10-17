import{j as e}from"./iframe-sx-xxOBR.js";import{useMDXComponents as i}from"./index-BuQKvIRW.js";import{I as a,F as m}from"./CommandsAndQueries-kGwhyxXS.js";import{M as s,C as p}from"./blocks-aDd-3g3c.js";import"./Tag-CA4Gam3K.js";import"./index-Dp445doz.js";import{C as l}from"./ControlsWithNote-Dys_kNkz.js";import"./copy-XBbKngNP.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CMa_80PA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWZ78BHI.js";import"./index-C5D1K9-k.js";import"./index-DWVCty5U.js";import"./Link-Bcw7GIzc.js";import"./index-CHQv5ZFl.js";import"./index-CHIAWjx6.js";import"./index-CGT84HkW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-PUGMtL6z.js";import"./addCustomCSSWithScoping-ByQ6RofR.js";import"./index-FBk0AP6g.js";import"./information-C7RaeOmw.js";import"./sys-enter-2-CEfOZp2B.js";import"./alert-DrhbDEmw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CytgXyai.js";import"./delete-DVuKaiV3.js";import"./settings-GTb4An8K.js";import"./NoData-CisJ0jAE.js";import"./IllustratedMessage-ylht49Gh.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BhN76SkG.js";import"./index-BnZ0pG76.js";import"./index-7bEDU5Wz.js";import"./slim-arrow-down-0Axvdn4U.js";import"./Input-CfL161m4.js";import"./ResponsivePopoverCommon.css-URhSdytj.js";import"./ValueStateMessage.css-BKDnJ5vj.js";import"./Suggestions.css-DvZYKoYH.js";import"./ListBoxItemGroupTemplate-BXCNzsvz.js";import"./ComboBoxItemGroup-Cdycyjl-.js";import"./ListItemBaseTemplate-DxDFiEvX.js";import"./Token-BrsOZpIi.js";import"./ScrollEnablement-C51h3RWn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ctu0x0fN.js";import"./ToggleButton-D8TglRo1.js";import"./SuggestionItem-ZEYBTLf8.js";import"./index-CMQ3jpyy.js";import"./Option-C5EHVmK0.js";import"./index-OAs5zmNm.js";import"./SegmentedButton-CaqqCqeD.js";import"./index-B8TC9aWT.js";import"./Select-CXxEzLVO.js";import"./InvisibleMessage-d9wVLZu-.js";import"./slim-arrow-down-DNpkKrnY.js";import"./index-DlAEUI2J.js";import"./index-C6fXq4ZZ.js";import"./index-eIt60uOw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1AwvrwL.js";import"./group-2-AG8_g4pP.js";import"./sort-descending-jQdQEEX6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-DMMbFy.js";import"./utils-CQxtN9CL.js";import"./index-D-8sThiq.js";import"./index-Dpz8iXz1.js";import"./index-BJvovWPi.js";import"./navigation-down-arrow-CHrPfOcq.js";import"./navigation-right-arrow-CU5VIR2Q.js";import"./navigation-right-arrow-C4byvkGY.js";import"./useCurrentTheme-C69-ISE_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BcwjmFpo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CV_tHasf.js";import"./paper-plane-BpEKW78p.js";import"./index-twVhy0ce.js";import"./less-DzybJbHR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

import{j as e}from"./iframe-B9-Lkkb_.js";import{useMDXComponents as i}from"./index-BHB6dH51.js";import{I as a,F as m}from"./CommandsAndQueries-DLAu90uX.js";import{M as s,C as p}from"./blocks-DiSlIEhk.js";import"./Tag-CCKiiuhz.js";import"./index-Bp8duZh7.js";import{C as l}from"./ControlsWithNote-PyqqQ_Jp.js";import"./copy-Cr6zYfEo.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DUaS7Rgy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B__WJxOt.js";import"./index-B3mrOTgf.js";import"./index-Uzak41NI.js";import"./Link-C6rFWX_2.js";import"./index-Cw3xsh9-.js";import"./index-DkC2gP8p.js";import"./index-BetvcNL1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee--tlCK9Sx.js";import"./addCustomCSSWithScoping-dvkvBHTK.js";import"./index-GyCUx3PS.js";import"./information-D0Z0JvqI.js";import"./sys-enter-2-CI12jhXR.js";import"./alert-BH05V2Qa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DALdZ-m2.js";import"./delete-CWfFsUl8.js";import"./settings-CxujDLn5.js";import"./NoData-Birea-au.js";import"./IllustratedMessage-B0FRqShC.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-XtYsGwDh.js";import"./index-BfMePIv-.js";import"./index-CuZnP9f5.js";import"./slim-arrow-down-BSwFrx-6.js";import"./Input-DjfKo2Sh.js";import"./ResponsivePopoverCommon.css-0xS8ouhO.js";import"./ValueStateMessage.css-Cx0EHJDT.js";import"./Suggestions.css-DHKy5z0i.js";import"./ListBoxItemGroupTemplate-DIuWxvFa.js";import"./ComboBoxItemGroup-xzY_qUqr.js";import"./ListItemBaseTemplate-DiAN3hV1.js";import"./Token-C6SSdJPd.js";import"./ScrollEnablement-KTUvEJYU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-bYgjbEr1.js";import"./ToggleButton-BUijnt0i.js";import"./SuggestionItem-B-pCF7HD.js";import"./index-BfTMPCrh.js";import"./Option-CJIIy65Q.js";import"./index-C8ev54Zj.js";import"./SegmentedButton-wSNeJPjb.js";import"./index-CPa9DL4h.js";import"./Select-CDXhzhip.js";import"./InvisibleMessage-B56PPVnA.js";import"./slim-arrow-down-Cwc8ylhp.js";import"./index-CKHT_nu5.js";import"./index-BQ3eva5q.js";import"./index-D_iSvJPf.js";import"./index-DXx-5JGj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BkCieJa7.js";import"./group-2-Bh4r1QBU.js";import"./sort-descending-Cq24lhVz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-COg2_de0.js";import"./utils-DALMlQXA.js";import"./index-BZa5OPXC.js";import"./index-BoOy7SR4.js";import"./index-BStOHSn9.js";import"./navigation-down-arrow-CTvkFjXS.js";import"./navigation-right-arrow-ol9XXUdO.js";import"./navigation-right-arrow-Bh96P4YL.js";import"./useCurrentTheme-DbMqVJhl.js";import"./index-zY56nHkc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0ILMNLpe.js";import"./paper-plane-Bq_Va7ug.js";import"./index-C0dFfThB.js";import"./less-DdiRz5Ea.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

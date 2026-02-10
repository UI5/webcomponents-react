import{j as e}from"./iframe-DHpTrIAy.js";import{useMDXComponents as i}from"./index-BNdd_DZc.js";import{I as a,F as m}from"./CommandsAndQueries-D5kPRnn1.js";import{M as s,C as p}from"./blocks-81TV0E2-.js";import"./Tag-BMggxcvS.js";import"./index-o6k9VRwd.js";import{C as l}from"./ControlsWithNote-LbhmqWjz.js";import"./copy-CUNi2x4z.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-12bgNQ45.js";import"./preload-helper-PPVm8Dsz.js";import"./index-w0GUVkMu.js";import"./index-DA4wHaXp.js";import"./index-DbNixw4c.js";import"./Link-DUpBHPtC.js";import"./index-DpF6uZ0K.js";import"./index-C40hnbsn.js";import"./index-CAXkJF_S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrKfdXs7.js";import"./addCustomCSSWithScoping-CHvNzWcZ.js";import"./index-rxRuTrVR.js";import"./information-D34aykIE.js";import"./sys-enter-2-ELzebk4o.js";import"./alert-8s8s7RYv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DCgPgyA-.js";import"./delete-DKrHSPz3.js";import"./settings-B6rfKHYI.js";import"./NoData-BJPeIuxS.js";import"./IllustratedMessage-DeicVa4E.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CTj596wI.js";import"./index-Dm_gfiI8.js";import"./index-CKx79arg.js";import"./slim-arrow-down-BGJA9V4H.js";import"./Input-DwdQCY2u.js";import"./ResponsivePopoverCommon.css-niQ49B26.js";import"./ValueStateMessage.css-DwB1W3lZ.js";import"./Suggestions.css-BOrRXcWN.js";import"./ListBoxItemGroupTemplate-nGZ9tTJV.js";import"./ComboBoxItemGroup-EVKWXWz8.js";import"./ListItemBaseTemplate-BXWM3mr4.js";import"./Token-y68VeFe2.js";import"./ScrollEnablement-B1igU_IO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BerdkBu5.js";import"./ToggleButton-cnwhtHLd.js";import"./SuggestionItem-jvS16M3k.js";import"./index-ezHHRlrS.js";import"./Option-Dj2PGXAN.js";import"./index-DWfWmYfQ.js";import"./SegmentedButton-DLLW2xv0.js";import"./index-Dn_pjokW.js";import"./Select-DB28s_OD.js";import"./InvisibleMessage-C3z5CeG6.js";import"./slim-arrow-down-dKp6dqzM.js";import"./index-Djnxwr7T.js";import"./index-B5z9SVI9.js";import"./index-CUCGS5XW.js";import"./index-BChvanZZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nEVcPtmr.js";import"./group-2-CQGV8bXi.js";import"./sort-descending-DD213tWy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BswnqQsD.js";import"./utils-DR3aQyQD.js";import"./index-d0itOHls.js";import"./index-CTkbrW4s.js";import"./index-DsQSOist.js";import"./navigation-down-arrow-By_eP8IV.js";import"./navigation-right-arrow-Czim4Kw8.js";import"./navigation-right-arrow-DwujKgov.js";import"./useCurrentTheme-BalyHQ7S.js";import"./index-Cmtiwzmy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CxN0R0T5.js";import"./paper-plane-DWahO4cJ.js";import"./index-CJiey5H1.js";import"./less-BDnAnuj7.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

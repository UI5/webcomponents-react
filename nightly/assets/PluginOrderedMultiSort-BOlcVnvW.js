import{j as e}from"./iframe-ByiiILXu.js";import{useMDXComponents as i}from"./index-DYpmG0kU.js";import{I as a,F as m}from"./CommandsAndQueries-ByQHAThU.js";import{M as s,C as p}from"./blocks-DrNhXH8Y.js";import"./Tag-WBOqYu0X.js";import"./index-B20WCXLG.js";import{C as l}from"./ControlsWithNote-AjBaHx3q.js";import"./copy-08ilKZ0c.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bb5ta9Ng.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8yUpcOxv.js";import"./index-y2DJOFuG.js";import"./index-C2Yky6-6.js";import"./Link-DX54TCdQ.js";import"./index-C0jaTjnN.js";import"./index-BkgEbRU4.js";import"./index-DJ81LlKI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7LYDV0x0.js";import"./addCustomCSSWithScoping-DIYkZsvP.js";import"./index-COPBcnoz.js";import"./information-tN-lRIsU.js";import"./sys-enter-2-eFq8QnH9.js";import"./alert-DCLbzn71.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKK8YXuW.js";import"./delete-D4zm_h0p.js";import"./settings-MyF3qJVm.js";import"./NoData-ljFJXsUq.js";import"./IllustratedMessage-CqwMvOWG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BKp3AX8w.js";import"./index-D9LX0obP.js";import"./index-0fiPvY1b.js";import"./slim-arrow-down-Cz12efI2.js";import"./Input-n_T7UVDU.js";import"./ResponsivePopoverCommon.css-C1nFDre3.js";import"./ValueStateMessage.css-DknAZyiZ.js";import"./Suggestions.css-CltqZkwX.js";import"./ListBoxItemGroupTemplate-C7tSoEtb.js";import"./ComboBoxItemGroup-BKPF_atD.js";import"./ListItemBaseTemplate-F0fB9wHg.js";import"./Token-DEhWs7Mh.js";import"./ScrollEnablement--8rTw7W_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cju6LXlU.js";import"./ToggleButton-zDuc9RuQ.js";import"./SuggestionItem-QE9DA7xp.js";import"./index-BDP3hZHD.js";import"./Option-7PVSujFd.js";import"./index-L1FHo7Pk.js";import"./SegmentedButton-vjq3bmSv.js";import"./index-Cy9D_6lg.js";import"./Select-DeEFCAk3.js";import"./InvisibleMessage-1Hg6cN3L.js";import"./slim-arrow-down-Ci1RQCXj.js";import"./index-CKMaXFVW.js";import"./index-MHLsz4iU.js";import"./index-DvDvcTBA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B9g-vpCv.js";import"./group-2-CohTd7MD.js";import"./sort-descending-CEdiQwd1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-COGP4GHg.js";import"./utils-4syTV-OB.js";import"./index-CZYJmP3L.js";import"./index-2lxrn3Jb.js";import"./index-D5AoDYXK.js";import"./navigation-down-arrow-DFV_iHIE.js";import"./navigation-right-arrow-vs1LV1Nl.js";import"./navigation-right-arrow-6AlcfDn3.js";import"./useCurrentTheme-ibuaoMhS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-4MBDlEsO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7T1wmeJR.js";import"./paper-plane-Dpb_fZ67.js";import"./index-Dqpgkjkr.js";import"./less-B2jLQw2j.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

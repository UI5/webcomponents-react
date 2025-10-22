import{j as e}from"./iframe-Cs5gvioi.js";import{useMDXComponents as i}from"./index-BtKDOpat.js";import{I as a,F as m}from"./CommandsAndQueries-BdMbFe6n.js";import{M as s,C as p}from"./blocks-BcK5AE3G.js";import"./Tag-D4RJrwN-.js";import"./index-CiQvF52b.js";import{C as l}from"./ControlsWithNote-CVzbCgFR.js";import"./copy-DKGYESSv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bah13JbR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPDq8Cwl.js";import"./index-BKjvzOpn.js";import"./index-Ccaj5Czc.js";import"./Link-EUC5ZRxP.js";import"./index-D8h8jAY6.js";import"./index-DYp5aNvA.js";import"./index-oQYl8gvD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D_r_w5Dj.js";import"./addCustomCSSWithScoping-CRaSmViC.js";import"./index-BxdMkIQq.js";import"./information-C2H5qqQk.js";import"./sys-enter-2-DnVNaHmP.js";import"./alert-Bc-gjyRb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C55QbHYW.js";import"./delete-CsuXrnL4.js";import"./settings-3bL7AxSj.js";import"./NoData-gyUpjjzs.js";import"./IllustratedMessage-BceXQMeD.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BkmX49kP.js";import"./index-CrEnkyES.js";import"./index-DygCzEx2.js";import"./slim-arrow-down-DXUzQK41.js";import"./Input-DD--HJgU.js";import"./ResponsivePopoverCommon.css-DsMB5qWp.js";import"./ValueStateMessage.css-DQ3KvLVl.js";import"./Suggestions.css-CQKPof5S.js";import"./ListBoxItemGroupTemplate-D1OUhHLE.js";import"./ComboBoxItemGroup-mjT1FhTP.js";import"./ListItemBaseTemplate-pXS2uemi.js";import"./Token-Vd3_FFDP.js";import"./ScrollEnablement-DFH5AJVi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJ7R2iOM.js";import"./ToggleButton-DtqSYEtq.js";import"./SuggestionItem-Cy-toAYd.js";import"./index-Dn8IZjAy.js";import"./Option-CSEjJgZb.js";import"./index-B8E3208u.js";import"./SegmentedButton-BzfIjTCb.js";import"./index-CKPEe733.js";import"./Select-C34yPPyn.js";import"./InvisibleMessage-sIaY5jUe.js";import"./slim-arrow-down-Vs4ZtB-z.js";import"./index-BJpgtMTj.js";import"./index-BJuiI9q0.js";import"./index-D5YUVenJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nzG_jgzZ.js";import"./group-2-9Ba8pfXC.js";import"./sort-descending-Dk7bIx-V.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeDU4ks0.js";import"./utils-D1ZaWfd7.js";import"./index-CfxXWdHC.js";import"./index-wq4yb3YT.js";import"./index-DD1WbCut.js";import"./navigation-down-arrow-Dnzw4uYB.js";import"./navigation-right-arrow-CsjF2Nv1.js";import"./navigation-right-arrow-CfUUtfYq.js";import"./useCurrentTheme-Dcwokryc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dypxe4oE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqvqHW8h.js";import"./paper-plane-DfliGKzl.js";import"./index-DsaE3rZW.js";import"./less-C_A2DZHR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

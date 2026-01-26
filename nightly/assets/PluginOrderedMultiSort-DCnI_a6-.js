import{j as e}from"./iframe-BlUygxfZ.js";import{useMDXComponents as i}from"./index-CXAabkf3.js";import{I as a,F as m}from"./CommandsAndQueries-CeFRywr5.js";import{M as s,C as p}from"./blocks-C4NQ4-im.js";import"./Tag-CUR2rrlg.js";import"./index-Dh-78LPx.js";import{C as l}from"./ControlsWithNote-DAV-TwWM.js";import"./copy-C0O91PIx.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C4XrPa9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0J408xz.js";import"./index-DFYqP0N6.js";import"./index-t0s0GVf0.js";import"./Link-Czimy6hK.js";import"./index-Dn8Ref-F.js";import"./index-C_DCdzmu.js";import"./index-nb0q6IbV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbJvTexr.js";import"./addCustomCSSWithScoping-DHyjDtb3.js";import"./index-B6coDb7Z.js";import"./information-zlNYGB6Q.js";import"./sys-enter-2-Ccj_DCkA.js";import"./alert-LdJbGRSH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CgXczKDb.js";import"./delete-BZs0a-1H.js";import"./settings-BVrFU0mX.js";import"./NoData-D4bv1jPS.js";import"./IllustratedMessage-D3TBiFcy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-9ofLVooP.js";import"./index-84lCpQlY.js";import"./index-CSl--qbo.js";import"./slim-arrow-down-CgDsJMzW.js";import"./Input-CAJFmB2Z.js";import"./ResponsivePopoverCommon.css-DwHTCDww.js";import"./ValueStateMessage.css-C3alblsY.js";import"./Suggestions.css-CLTa6LPz.js";import"./ListBoxItemGroupTemplate-CIs0oSQk.js";import"./ComboBoxItemGroup-Ceh1JxvS.js";import"./ListItemBaseTemplate-CMAdUbXU.js";import"./Token-BTUJFvLX.js";import"./ScrollEnablement-DSwNOA6D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqadHOpo.js";import"./ToggleButton-BG1bNuXR.js";import"./SuggestionItem-D0KUwh3K.js";import"./index-B9UBVLPX.js";import"./Option-h_6RFh1c.js";import"./index-DhgCGgHe.js";import"./SegmentedButton-DH2HX0sk.js";import"./index-CHKENjHC.js";import"./Select-CP3bsgEY.js";import"./InvisibleMessage-D6EiZ3B3.js";import"./slim-arrow-down-DNdnjurS.js";import"./index-2fqu4ZUm.js";import"./index-BbCJyiwr.js";import"./index-DUvesvaX.js";import"./index-C5uNCv6R.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGGrEzLl.js";import"./group-2-Bzo2NSpJ.js";import"./sort-descending--Hwn5uWZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5Y2dYwJ.js";import"./utils-DbuWLHgd.js";import"./index-l2Om9n2s.js";import"./index-ec7XPWwz.js";import"./index-DsTqha7i.js";import"./navigation-down-arrow-DDmPzf56.js";import"./navigation-right-arrow-D1dkuTqT.js";import"./navigation-right-arrow-BQIRTW5E.js";import"./useCurrentTheme-BPj60tYc.js";import"./index-DJOUc43H.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RZAVCFXP.js";import"./paper-plane-CKvhYw7h.js";import"./index-DF9Z0-Xx.js";import"./less-BQUCisQp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

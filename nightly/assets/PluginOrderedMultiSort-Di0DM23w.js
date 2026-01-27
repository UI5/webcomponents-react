import{j as e}from"./iframe-BCLHYJgX.js";import{useMDXComponents as i}from"./index-6uEU24p4.js";import{I as a,F as m}from"./CommandsAndQueries-CO5L47ah.js";import{M as s,C as p}from"./blocks-Bs_XR2wS.js";import"./Tag-CyCEbX-5.js";import"./index-BaEPddIL.js";import{C as l}from"./ControlsWithNote-DsJu2eyI.js";import"./copy-C8KGHNvK.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DD_BHl_O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./index-ryNQsvjz.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-7Zt1rPtU.js";import"./delete-DZ-sv9tn.js";import"./settings-DEZp58uU.js";import"./NoData-Bm6c65Rp.js";import"./IllustratedMessage-CpnLKog-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-0eiDXkdF.js";import"./index-DHFj9r2s.js";import"./index-CnUVMLwV.js";import"./slim-arrow-down-PQTwOB1y.js";import"./Input-CyIlmGcA.js";import"./ResponsivePopoverCommon.css-BG6tGGqw.js";import"./ValueStateMessage.css-CXTpMNNy.js";import"./Suggestions.css-Bad721NM.js";import"./ListBoxItemGroupTemplate-DHvQR70c.js";import"./ComboBoxItemGroup-Dv-3y-yt.js";import"./ListItemBaseTemplate-BybflgUy.js";import"./Token-C7Z0uXiZ.js";import"./ScrollEnablement-C_6ell_9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBy1q-np.js";import"./ToggleButton-Ch4ejuj2.js";import"./SuggestionItem-DOMiaiL4.js";import"./index-CsRnbpar.js";import"./Option-BM744F7n.js";import"./index-BKITVOdn.js";import"./SegmentedButton-BMBrktYn.js";import"./index-DgD7lXWr.js";import"./Select-CmILZVDu.js";import"./InvisibleMessage-DnmpScj3.js";import"./slim-arrow-down-DHuMktny.js";import"./index-BwWwsDip.js";import"./index-D0yr6pZg.js";import"./index-BPgVHXij.js";import"./index-P_S_jhxH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bn9RS1kX.js";import"./group-2-BYuBBp9R.js";import"./sort-descending-BJIWTPav.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlAPMqrc.js";import"./utils-BScKaUIi.js";import"./index-DY7zKARQ.js";import"./index-s-YoLh3T.js";import"./index-CLiMatz4.js";import"./navigation-down-arrow-B2J7F8t-.js";import"./navigation-right-arrow-ClWc3JFi.js";import"./navigation-right-arrow-CByHJpNk.js";import"./useCurrentTheme-BlqUDt0t.js";import"./index-DyAhltwy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByUnN_uG.js";import"./paper-plane-cWqe5jd6.js";import"./index-Oy3wJsZc.js";import"./less--DX0g4Ek.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

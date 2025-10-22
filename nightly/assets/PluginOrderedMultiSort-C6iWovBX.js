import{j as e}from"./iframe-CqyMw63j.js";import{useMDXComponents as i}from"./index-GHxgs1Oh.js";import{I as a,F as m}from"./CommandsAndQueries-Ckqtj5q6.js";import{M as s,C as p}from"./blocks-gNAN3wnS.js";import"./Tag-9sg0d6U8.js";import"./index-DZeMBOtb.js";import{C as l}from"./ControlsWithNote-Ck71R3qs.js";import"./copy-CygH_bff.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-VpVdQnD5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ccu9AWNy.js";import"./index-CyG-uGBl.js";import"./index-CRtLMoP1.js";import"./Link-8hzPxLpd.js";import"./index-B8X3UXQy.js";import"./index-DqKKFvdB.js";import"./index-CEokL_Ra.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hBi7rm2H.js";import"./addCustomCSSWithScoping-C9ZUc-46.js";import"./index-fW-mpTRV.js";import"./information-B-SB47kj.js";import"./sys-enter-2-8wJJb_fs.js";import"./alert-DS7w9_j5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BrgeZPp4.js";import"./delete-D9-ge-rM.js";import"./settings-cGyMTSk-.js";import"./NoData-xKoSmblb.js";import"./IllustratedMessage-BCxnQs3b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Ce8Tfk62.js";import"./index-LdWS7TCa.js";import"./index-DIUizzAk.js";import"./slim-arrow-down-D-ZUvWXK.js";import"./Input-BOVuOoq4.js";import"./ResponsivePopoverCommon.css-17WbdJEp.js";import"./ValueStateMessage.css-DVx3cVXN.js";import"./Suggestions.css-C_lAbcHi.js";import"./ListBoxItemGroupTemplate-CPI18sru.js";import"./ComboBoxItemGroup-CwJsZ4Zp.js";import"./ListItemBaseTemplate-CVZqI9dc.js";import"./Token-C7-_a1HK.js";import"./ScrollEnablement-BwuxTfsa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C-NVnbST.js";import"./ToggleButton-CyG3PucO.js";import"./SuggestionItem-LjByQWOY.js";import"./index-BA70ykXq.js";import"./Option-DOo6z9Dp.js";import"./index-DsjEg4fj.js";import"./SegmentedButton-Bx24Atny.js";import"./index-BvrBc5_J.js";import"./Select-Xhunz0DK.js";import"./InvisibleMessage-BX0MFDY5.js";import"./slim-arrow-down-x1-wAbSu.js";import"./index-rkzVTVvZ.js";import"./index-BSkVtYZm.js";import"./index-uyWLtESg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-39_bl0se.js";import"./group-2-DTudhwRg.js";import"./sort-descending-d65eGOj2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7A2D9qJE.js";import"./utils-D3iBktXL.js";import"./index-_WcNH8h5.js";import"./index-4BLCxvrL.js";import"./index-By6IU_b1.js";import"./navigation-down-arrow-BhNxTQs3.js";import"./navigation-right-arrow-7IyEfa1Z.js";import"./navigation-right-arrow-D0FoUvYd.js";import"./useCurrentTheme-CPkJtYyP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C4qlmx2T.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DGuc5LLn.js";import"./paper-plane-DpFQXuCc.js";import"./index-BbbdvkN_.js";import"./less-DyBbCAMz.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

import{j as e}from"./iframe-BiMlSvB5.js";import{useMDXComponents as i}from"./index-zjeO5ftS.js";import{I as a,F as m}from"./CommandsAndQueries-Ihy_vY5j.js";import{M as s,C as p}from"./blocks-JfRoz7Bu.js";import"./Tag-DcGxJxNj.js";import"./index-DdnnKwEp.js";import{C as l}from"./ControlsWithNote-BBextbqG.js";import"./copy-CpLwtFwa.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CrJDfv5d.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJoGcUHO.js";import"./index-CjwASx83.js";import"./index-COwkRR6t.js";import"./Link-hDp19ErW.js";import"./index-BN_7wmc1.js";import"./index-BTBLl-af.js";import"./index-CvgLLP4J.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-g_QfzUS9.js";import"./addCustomCSSWithScoping-Dxx39OMa.js";import"./index-CJR1a3iJ.js";import"./information-B40Y1iPW.js";import"./sys-enter-2-CkPUHPx-.js";import"./alert-BwKvOFsR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-lkroZnbL.js";import"./delete-FMGJKKZJ.js";import"./settings-C3vBunPl.js";import"./NoData-BDVuJ86f.js";import"./IllustratedMessage-CdkkLDXG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CyCSkyGX.js";import"./index-CzIuiFxY.js";import"./index-uzhwBdxV.js";import"./slim-arrow-down-DhQmyJSw.js";import"./Input-5MKIWbcv.js";import"./ResponsivePopoverCommon.css-Gn55K0IR.js";import"./ValueStateMessage.css-C63o8ajt.js";import"./Suggestions.css-bWFEPpLk.js";import"./ListBoxItemGroupTemplate-P2pMYzMz.js";import"./ComboBoxItemGroup-DGvjryay.js";import"./ListItemBaseTemplate-DFyALYeN.js";import"./Token-DP7V52GY.js";import"./ScrollEnablement-DKyX1hlv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CteCbUEH.js";import"./ToggleButton-CnxXmbLH.js";import"./SuggestionItem-BdwWLvfq.js";import"./index-CyQT3WP0.js";import"./Option-C9Uo7sgL.js";import"./index-D_l_aaej.js";import"./SegmentedButton-CmS3epsf.js";import"./index-TyCpnseE.js";import"./Select-DV8FGlWC.js";import"./InvisibleMessage-CdGbv0CP.js";import"./slim-arrow-down-CVQHENDk.js";import"./index-B-Yh5T4c.js";import"./index-CIW_ic5S.js";import"./index-GmFx-3lk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BS_XAjEs.js";import"./group-2-BQ8I3Xw3.js";import"./sort-descending-Dn3aviOX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_j2qh61z.js";import"./utils-CE3pjW5h.js";import"./index-BgWRU9Z5.js";import"./index-CjF_Wh_0.js";import"./index-C0ceKoHV.js";import"./navigation-down-arrow-m9enBW2g.js";import"./navigation-right-arrow-C4IxskPN.js";import"./navigation-right-arrow-CeFlz50Q.js";import"./useCurrentTheme-CdJ3Wj-s.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D9Agz_AG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8WBSrx9.js";import"./paper-plane-CJosRD6f.js";import"./index-BonsQVcP.js";import"./less-lHySVG5z.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

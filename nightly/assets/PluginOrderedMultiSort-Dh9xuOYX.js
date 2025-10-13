import{j as e}from"./iframe-BwzExPTt.js";import{useMDXComponents as i}from"./index-Bhb-E2jz.js";import{I as a,F as m}from"./CommandsAndQueries-BAktAF7I.js";import{M as s,C as p}from"./blocks-DoJWfB08.js";import"./Tag-6zLQrCPp.js";import"./index-DtZ9fejJ.js";import{C as l}from"./ControlsWithNote-DVJSXWDB.js";import"./copy-BSdgsQYS.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CNoYL_k6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ct12qQup.js";import"./index-CbkAtpsv.js";import"./index-C5BRum1i.js";import"./Link-Bms7m456.js";import"./index-A3mNxkAq.js";import"./index-Bt-scq3R.js";import"./index-DpOmhYSX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoHCzslt.js";import"./addCustomCSSWithScoping-pwpobhcn.js";import"./index-BFn1YmVY.js";import"./information-YiJ0QHVh.js";import"./sys-enter-2-C0SOTOu7.js";import"./alert-D_Giis5d.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-JJh4zq-5.js";import"./delete-C0cYgL9I.js";import"./settings-CyzpmugS.js";import"./NoData-DgJB_CHa.js";import"./IllustratedMessage-B5trxCfL.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BZ1W57SZ.js";import"./index-CAiu64de.js";import"./index-BOEpNyZs.js";import"./slim-arrow-down-DysSLoES.js";import"./Input-Qp-HcNuB.js";import"./ResponsivePopoverCommon.css-A57mGlsL.js";import"./ValueStateMessage.css-CiBCBwyO.js";import"./Suggestions.css-DKYLp8FI.js";import"./ListBoxItemGroupTemplate-sljqB-qK.js";import"./ComboBoxItemGroup-Ep4_5ktS.js";import"./ListItemBaseTemplate-CsUm0LDT.js";import"./Token-BQ2iduXK.js";import"./ScrollEnablement-BQF6zwAp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-V06wSgST.js";import"./ToggleButton-Du2bAjsE.js";import"./SuggestionItem-D95WBhS3.js";import"./index-CJWkXXZq.js";import"./Option-BXuJbsWz.js";import"./index-B-taCA7b.js";import"./SegmentedButton-B7q5n6R4.js";import"./index-TQ0Hstv3.js";import"./Select-C06y2ImJ.js";import"./InvisibleMessage-CamRw0G3.js";import"./slim-arrow-down-C3RqiYpT.js";import"./index-C-sGBMBZ.js";import"./index-Cxa6Ze2m.js";import"./index-BkGTzC-k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTisBMQj.js";import"./group-2-C_Q8y0lD.js";import"./sort-descending-Cp_N7RKl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUrOtoUU.js";import"./utils-JlsHVx9B.js";import"./index-DaUOo_TH.js";import"./index--tYPN7vt.js";import"./index-DdqklSGR.js";import"./navigation-down-arrow-onKK0zHb.js";import"./navigation-right-arrow-FBRqKbF9.js";import"./navigation-right-arrow-Btyw370g.js";import"./useCurrentTheme-CCajTlHT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CCEuXQno.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BKwAHn4d.js";import"./paper-plane-5_BxOmac.js";import"./index-Cl2icRhE.js";import"./less-CAN1Kt99.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

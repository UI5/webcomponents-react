import{j as e}from"./iframe-N-CkNuQp.js";import{useMDXComponents as i}from"./index-vMZrjKLN.js";import{I as a,F as m}from"./CommandsAndQueries-C649emYA.js";import{M as s,C as p}from"./blocks-BlmowjXe.js";import"./Tag-BjR1DXbQ.js";import"./index-C6U4q-s3.js";import{C as l}from"./ControlsWithNote-KeRnuhUA.js";import"./copy-a5vlqc1O.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-JPuB_a5X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dctc1ZtL.js";import"./index-Cfq8WB4R.js";import"./index-DbFvQ9Ev.js";import"./Link-DUQLkHF0.js";import"./index-Bw-Px9rd.js";import"./index-nkckj2JT.js";import"./index-CNxEFs14.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIbW1rrN.js";import"./addCustomCSSWithScoping-h_aYe486.js";import"./index-CnaiImML.js";import"./information-DXCMx7jp.js";import"./sys-enter-2-DJK47xX9.js";import"./alert-DxAb-ai_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fT9LTQ0j.js";import"./delete-B8Z5j_Do.js";import"./settings-TA31uUIw.js";import"./NoData-D4-SB34s.js";import"./IllustratedMessage-SdxM8pyY.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Y4WFScsy.js";import"./index-CiBKxPDw.js";import"./index--O_h7dFN.js";import"./slim-arrow-down-rr5X3KXq.js";import"./Input-WfBh0KTF.js";import"./ResponsivePopoverCommon.css-KDgvHQ0W.js";import"./ValueStateMessage.css-DO6JAQcc.js";import"./Suggestions.css-DUyKQFzw.js";import"./ListBoxItemGroupTemplate-q6J-Hxt2.js";import"./ComboBoxItemGroup-i8_TMTd2.js";import"./ListItemBaseTemplate-GLU57VL5.js";import"./Token-CiZ98YBe.js";import"./ScrollEnablement--YCWq2yu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dp0_Lu_Z.js";import"./ToggleButton-BS9H1EYC.js";import"./SuggestionItem-BrHIYRQT.js";import"./index-Srybk_Pk.js";import"./Option-BjRW5Ygk.js";import"./index-BsRx0YZP.js";import"./SegmentedButton-BH20oEyd.js";import"./index-DUUfYCBb.js";import"./Select-CELxD9-A.js";import"./InvisibleMessage-ChBJZhpz.js";import"./slim-arrow-down-_epklyRU.js";import"./index-29v9kZgV.js";import"./index-C7vkinT_.js";import"./index-BvTJX50d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpzbLxIe.js";import"./group-2-CxA-FYRT.js";import"./sort-descending-Cw2XxVBU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJhTa_8n.js";import"./utils-DB3VCJuH.js";import"./index-fBWenx7K.js";import"./index-va9Teg1t.js";import"./index-DBkmiyLK.js";import"./navigation-down-arrow-D-R4T3i-.js";import"./navigation-right-arrow-DaI_vWHK.js";import"./navigation-right-arrow-nPCtKYnF.js";import"./useCurrentTheme-fVl0Jypc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CG0eM5fE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DSfev3_E.js";import"./paper-plane-Dc2C46qc.js";import"./index-pfabamDa.js";import"./less-rZNKIwFM.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

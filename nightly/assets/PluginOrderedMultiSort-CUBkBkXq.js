import{j as e}from"./iframe-D9fHiNXF.js";import{useMDXComponents as i}from"./index-DRx499Oz.js";import{I as a,F as m}from"./CommandsAndQueries-CDyFXIce.js";import{M as s,C as p}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import{C as l}from"./ControlsWithNote-_PgGUMw2.js";import"./copy-FG9bHXhV.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Qm_vQfsf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./index-BVc7ik8a.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPAjTpyE.js";import"./delete-kRoeeufp.js";import"./settings-BjOnEk3Y.js";import"./NoData-DS929yuO.js";import"./IllustratedMessage-D7rcrpEV.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-By9GXzdr.js";import"./index-BIpQKVrj.js";import"./index-uvfEns-9.js";import"./slim-arrow-down-COoxlr3U.js";import"./Input-CCJrpN8k.js";import"./ResponsivePopoverCommon.css-B2qfRnNF.js";import"./ValueStateMessage.css-DyMGuFCu.js";import"./Suggestions.css-s007qcu9.js";import"./ListBoxItemGroupTemplate-fS2c8S8u.js";import"./ComboBoxItemGroup-w20Oyw65.js";import"./ListItemBaseTemplate-BhNv4eWh.js";import"./Token-CvyNfotg.js";import"./ScrollEnablement-COS0Rc-8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BBXUErcD.js";import"./ToggleButton-CVAyR1od.js";import"./SuggestionItem-BbBOeYnY.js";import"./index-BvApMHkq.js";import"./Option-55orDd_d.js";import"./index-D-dRLaQQ.js";import"./SegmentedButton-Dtg_OeYG.js";import"./index-Cw3jzX1x.js";import"./Select-CF4_xxsY.js";import"./InvisibleMessage-sWP7KXqk.js";import"./slim-arrow-down-CGx4RFlV.js";import"./index-Bnwbq-C5.js";import"./index-56WZLY9b.js";import"./index-BrYCVZew.js";import"./index-C-gG0abr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTaVzY2z.js";import"./group-2-ByHTkrwd.js";import"./sort-descending-CnESAHVK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DK0_Jxfh.js";import"./utils-4XJByc2K.js";import"./index-Mf30Azwl.js";import"./index-DWP_RQMm.js";import"./index-PLRKK6I8.js";import"./navigation-down-arrow-UUvc_8Lg.js";import"./navigation-right-arrow-Uxxzktt1.js";import"./navigation-right-arrow-bK8_sR2Z.js";import"./useCurrentTheme-DlC_INVQ.js";import"./index-uBbepzyZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByZPFV9T.js";import"./paper-plane-oz9CuSrg.js";import"./index-Bxyp0YjT.js";import"./less-QRjFxrUk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

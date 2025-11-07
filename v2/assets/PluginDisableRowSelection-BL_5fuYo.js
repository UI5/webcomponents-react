import{j as e}from"./iframe-Cx-m_Nf0.js";import{useMDXComponents as n}from"./index-Danm_hzB.js";import{I as r,F as s}from"./CommandsAndQueries-wiGvioaD.js";import{M as l,C as a}from"./blocks-BeOH24VU.js";import"./Tag-CULcfvQz.js";import"./index-JZ9249rN.js";import"./copy-saj_hA78.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CQ1Q9bJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkCtcCNV.js";import"./index-BRPuZYCF.js";import"./index-D-dAoXo8.js";import"./Link-CR1SnY-5.js";import"./index-D0XJTq9Q.js";import"./index-B10MFmnl.js";import"./index-bcKxXY3o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Hev4WvRm.js";import"./addCustomCSSWithScoping-CdsdDkDi.js";import"./index-DROJnCko.js";import"./information-CEQNZlPN.js";import"./sys-enter-2-AhkD0MnF.js";import"./alert-Bji-b9H2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D1-JQb3f.js";import"./delete-Bl2x4rU1.js";import"./settings-Bv6hFb-P.js";import"./NoData-CSJ_na3c.js";import"./IllustratedMessage-CPrK3i7_.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-bu6kmgxW.js";import"./index-BSHVbo6V.js";import"./index-eSExnXlh.js";import"./slim-arrow-down-DKAHurNq.js";import"./Input-BGkNvg04.js";import"./ResponsivePopoverCommon.css-BuTMFQw1.js";import"./ValueStateMessage.css-DkCm038q.js";import"./Suggestions.css-C3EK_z35.js";import"./ListBoxItemGroupTemplate-BFkq-NXI.js";import"./ComboBoxItemGroup-BKPCcMXX.js";import"./ListItemBaseTemplate-2sNFKkfz.js";import"./Token-BqrAbKWZ.js";import"./ScrollEnablement-BylCXS9j.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bo_f_yy9.js";import"./ToggleButton-9pjROLTu.js";import"./SuggestionItem-6D6ujuPl.js";import"./index-CKUsXBNu.js";import"./Option-DzMmQowO.js";import"./index-BWv5ujwm.js";import"./SegmentedButton-Cj4yij2C.js";import"./index-BLOeq_DJ.js";import"./Select-FmZbtvvG.js";import"./InvisibleMessage-D-MV8Msz.js";import"./slim-arrow-down-DMPgem2M.js";import"./index-BKf9Irue.js";import"./index-D3zHQWzc.js";import"./index-Cp-3_oQg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3mU9MEPJ.js";import"./group-2-Bro4NNr1.js";import"./sort-descending-DjJ8E8sw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DF9ssoyr.js";import"./utils-BNoG9b0S.js";import"./index-dmgo9yxd.js";import"./index-CLBMOU_H.js";import"./index-TIjwWRgv.js";import"./navigation-down-arrow-BGKJSbuE.js";import"./navigation-right-arrow-DxbKKfUO.js";import"./navigation-right-arrow-BTVVtZ0b.js";import"./useCurrentTheme-Dm6R4j9A.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CF38bavx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BF52L7PE.js";import"./paper-plane-CbELQrqU.js";import"./index-B-qCzqdY.js";import"./less-DMl7Bxfb.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};

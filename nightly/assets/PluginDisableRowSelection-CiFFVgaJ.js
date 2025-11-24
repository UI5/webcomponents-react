import{j as e}from"./iframe-ChLklOsd.js";import{useMDXComponents as n}from"./index-C8O_9vrB.js";import{I as r,F as s}from"./CommandsAndQueries-BJfqhrRX.js";import{M as l,C as a}from"./blocks-DJtWS-rM.js";import"./Tag-DfUNsarH.js";import"./index-D3GBtHew.js";import"./copy-e7lZwdk_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cni3-C_u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./index-k8fk5wba.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qH1qKYII.js";import"./delete-h7eVr2Vw.js";import"./settings-BKcM-wPp.js";import"./NoData-J1K7Ymhn.js";import"./IllustratedMessage-CtqAhvd3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-XMbTNtDO.js";import"./index-TSkw3SF1.js";import"./index-BzOBut2T.js";import"./slim-arrow-down-C0sKTfFd.js";import"./Input-Bw80AfuH.js";import"./ResponsivePopoverCommon.css-rK6RDwp7.js";import"./ValueStateMessage.css-BUi7Lug0.js";import"./Suggestions.css-60iPjMbi.js";import"./ListBoxItemGroupTemplate-CzUkEy5V.js";import"./ComboBoxItemGroup-DjZHBMDi.js";import"./ListItemBaseTemplate-fY_VN0oy.js";import"./Token-BNT6ZbqA.js";import"./ScrollEnablement-ZwyKnO_p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D2j6MVzc.js";import"./ToggleButton-Cg7Ob5xf.js";import"./SuggestionItem-0lQp_3Fi.js";import"./index-AGwizfQV.js";import"./Option-Fwlb6Z4G.js";import"./index-B9caYodE.js";import"./SegmentedButton-BbW03Ci4.js";import"./index-Ogz2SBUe.js";import"./Select-DOXy8bYp.js";import"./InvisibleMessage-BNlluPzS.js";import"./slim-arrow-down-3G2_d1HL.js";import"./index-B1ESy-y5.js";import"./index-B0rGjn3A.js";import"./index-r7SyDcBw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CkATdhv-.js";import"./group-2-DsXa8NWz.js";import"./sort-descending-Dp-Q-OnD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ANjhBQcR.js";import"./utils-DUOn4GqP.js";import"./index--7ojLxPu.js";import"./index-YOMQ5zOo.js";import"./index-BqvABamv.js";import"./navigation-down-arrow-KDgf9JO_.js";import"./navigation-right-arrow-GRefa7J7.js";import"./navigation-right-arrow-CvUkn4up.js";import"./useCurrentTheme-BJro2kG-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y2jErdQp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RlsHBs8r.js";import"./paper-plane-C-4qo-fh.js";import"./index-BXWtnQNN.js";import"./less-CCt5DJvB.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

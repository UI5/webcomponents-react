import{j as e}from"./iframe-B9oS8Tdw.js";import{useMDXComponents as n}from"./index-DBcwplNT.js";import{I as r}from"./CommandsAndQueries-NcZGCQIw.js";import{M as s,C as l}from"./blocks-n99WgqUD.js";import"./Tag-C4hdjWJC.js";import"./index-Bpds4hIG.js";import"./copy-Bqdwh9J4.js";import{F as a}from"./Footer-B2MFyv0P.js";import"./PageNotFound-CdK5m3jv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ACHSCLCF.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BttQiJAm.js";import"./index-MP9MDZQa.js";import"./index-CIPzfYgd.js";import"./index-XdY2VQGh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKo2xI1N.js";import"./addCustomCSSWithScoping-BjXuQDKZ.js";import"./index-0NZf9e3S.js";import"./index-DzuQRrNG.js";import"./index-BYYicg2U.js";import"./information-BlcYwQMc.js";import"./sys-enter-2-DdkiI-3L.js";import"./alert-D212h0_R.js";import"./index-C2K37CCg.js";import"./Illustrations-Hb5RsbMM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DEL9cqdT.js";import"./delete-CJPlzdTi.js";import"./settings-DIaK4Die.js";import"./NoData-BLMnzqZy.js";import"./NoFilterResults-B3AMdlwG.js";import"./index-DrzOvK-B.js";import"./IllustratedMessage-Bzd2QQXi.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CJKsBNXM.js";import"./Input-DExRg9sG.js";import"./ResponsivePopoverCommon.css-B86z_YN9.js";import"./ValueStateMessage.css-ByKDah8f.js";import"./Suggestions.css-D-ufL02N.js";import"./ListBoxItemGroupTemplate-CUcRZ2hr.js";import"./ComboBoxItemGroup-Ds7WcOQy.js";import"./ListItemBaseTemplate-B2uVgI-9.js";import"./Token-DszrdDTr.js";import"./ScrollEnablement-CuPUrrc1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgNSnN8f.js";import"./ToggleButton-BdDdHpsO.js";import"./multiselect-all-DmsV51Ol.js";import"./SuggestionItem-B-E1hpPG.js";import"./index-D7G1scwG.js";import"./Option-DUDaACIO.js";import"./index-CEPZX_2s.js";import"./SegmentedButton-DiQhUt-z.js";import"./index-Cu04vq_4.js";import"./Select-C05RCBvi.js";import"./InvisibleMessage-CNfLarpT.js";import"./index-DjTsxyWe.js";import"./index-D0JLt7iu.js";import"./index-CfX-8Mbr.js";import"./index-BkXXTU95.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QnSLKOqd.js";import"./group-2-B9WZnXpk.js";import"./sort-descending-CW-hMbFE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De1v9t9O.js";import"./utils-X5jSZNtf.js";import"./index-GvbFIdTy.js";import"./index-CApXjfIA.js";import"./index-B7hwJ3qq.js";import"./navigation-down-arrow-UCtr-grF.js";import"./navigation-right-arrow-CDleWG9x.js";import"./navigation-right-arrow-mgw419ia.js";import"./useCurrentTheme-BVrPrfNf.js";import"./index-DjGZ1z05.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-tn0cQ7.js";import"./paper-plane-BOkiy_Zr.js";import"./index-Dz5AYLKf.js";import"./less-B6hTD78n.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};

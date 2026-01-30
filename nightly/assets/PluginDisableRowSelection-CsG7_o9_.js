import{j as e}from"./iframe-DVGWhCAE.js";import{useMDXComponents as n}from"./index-B9xkaSV0.js";import{I as r,F as s}from"./CommandsAndQueries-dho9FID6.js";import{M as l,C as a}from"./blocks-BJbIBXfd.js";import"./Tag-BSVrbtw1.js";import"./index-8G75QKe0.js";import"./copy-BlV96bJM.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CnZuDPXD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRrKr04f.js";import"./index-Q2-fVCzE.js";import"./index-BHsujjCW.js";import"./Link-Dgw-_ZOU.js";import"./index-Nk5G6RU7.js";import"./index-DGKs15kB.js";import"./index-NT87e1sK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DANVMAHb.js";import"./addCustomCSSWithScoping-5Jg_uRZD.js";import"./index-BJLS4IRc.js";import"./information-omXjQTPD.js";import"./sys-enter-2-C04ebACG.js";import"./alert-BHqxLN4g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFnPtJkv.js";import"./delete-DY6bdwXU.js";import"./settings-XslWUyya.js";import"./NoData-BUZ7abMj.js";import"./IllustratedMessage-B9_mT8nH.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DjDOG6yR.js";import"./index-8hC-ZwrJ.js";import"./index-BChoSltx.js";import"./slim-arrow-down-DeYpmmvX.js";import"./Input-DpyJgAt0.js";import"./ResponsivePopoverCommon.css-CePgJsY4.js";import"./ValueStateMessage.css-3BAQCChx.js";import"./Suggestions.css-BOKDeXtO.js";import"./ListBoxItemGroupTemplate-UD1IHiMI.js";import"./ComboBoxItemGroup-BpjYhnfH.js";import"./ListItemBaseTemplate-mkFVGvTh.js";import"./Token-C-dIs8ow.js";import"./ScrollEnablement-B1V-xmtX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYsOVdkk.js";import"./ToggleButton-DtBu71V4.js";import"./SuggestionItem-35Bufm1r.js";import"./index-DlkYfY-D.js";import"./Option-12YZDcJD.js";import"./index-TKCi4qTc.js";import"./SegmentedButton-B7a2Ohdn.js";import"./index-Cloa_gEs.js";import"./Select-DbAXZ3Uf.js";import"./InvisibleMessage-D0fNoamP.js";import"./slim-arrow-down-DhfOJ1tg.js";import"./index-CAmvDfBQ.js";import"./index-CI4CkUvi.js";import"./index-C8msanHQ.js";import"./index-D2OD1CJk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQHd5LOE.js";import"./group-2-CxeVZpJt.js";import"./sort-descending-6N_LscE5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-64D78cvD.js";import"./utils-KP_8elyX.js";import"./index-BMkoMDMN.js";import"./index-BAbz02Gg.js";import"./index-B3L4E0qW.js";import"./navigation-down-arrow-HldHMJHt.js";import"./navigation-right-arrow-BAW-_M57.js";import"./navigation-right-arrow-RFBEU6p5.js";import"./useCurrentTheme-CamodcP9.js";import"./index-C-rI4uKO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BrbgBhCS.js";import"./paper-plane-EP68wguC.js";import"./index-KTYaWInB.js";import"./less-CBpVNcsL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

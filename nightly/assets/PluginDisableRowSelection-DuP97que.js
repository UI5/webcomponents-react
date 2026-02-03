import{j as e}from"./iframe-CmEyKRpD.js";import{useMDXComponents as n}from"./index-BFnFrbBZ.js";import{I as r,F as s}from"./CommandsAndQueries-D0beJAEb.js";import{M as l,C as a}from"./blocks-DsGvGcEm.js";import"./Tag-mVH7vrSv.js";import"./index-DfQFYAIc.js";import"./copy-BKqOupip.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BSx5T4bO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzwroZCy.js";import"./index-Cd1X9zdd.js";import"./index-CSRfU7vi.js";import"./Link-D1koUNpv.js";import"./index-BlD9QPif.js";import"./index-DbVfD_Wp.js";import"./index-dQ_ejieb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-eGz8eTqY.js";import"./addCustomCSSWithScoping-DZlJgGLS.js";import"./index-DEFXD6K8.js";import"./information-Dw0vaUoh.js";import"./sys-enter-2-BCiCiomL.js";import"./alert-ClWdEWiH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DbUs2q01.js";import"./delete-DexdWHOY.js";import"./settings-dxNIuobx.js";import"./NoData-DHeZKmI-.js";import"./IllustratedMessage-DIvmjW9o.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-c_u-lq4s.js";import"./index-BEdraa6m.js";import"./index-Cw5hOkPV.js";import"./slim-arrow-down-CMqb9FrJ.js";import"./Input-DMTE7PtB.js";import"./ResponsivePopoverCommon.css-B_kZ82Sf.js";import"./ValueStateMessage.css-COIj3-dB.js";import"./Suggestions.css-CwH8bkW-.js";import"./ListBoxItemGroupTemplate-CchY9zri.js";import"./ComboBoxItemGroup-DimkAvqf.js";import"./ListItemBaseTemplate-Bf84ufvG.js";import"./Token-fKVOhfRR.js";import"./ScrollEnablement-Dl5z94x_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BYXnPIWK.js";import"./ToggleButton-vu-v_zb-.js";import"./SuggestionItem-kn7KkTa3.js";import"./index-DPbvCSic.js";import"./Option-u5uukDin.js";import"./index-C8R_luuu.js";import"./SegmentedButton-DfxDwv4I.js";import"./index-DNR34NeK.js";import"./Select-CYW5D9dk.js";import"./InvisibleMessage-M1dcHXit.js";import"./slim-arrow-down-BpHB4IY-.js";import"./index-C7nbRL6c.js";import"./index-DPUGy-pI.js";import"./index-3FRmO7q0.js";import"./index-DAcFrEXC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-0df1VpJF.js";import"./group-2-CKdKXQLe.js";import"./sort-descending-BbZ-eh8i.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3OH53ZN.js";import"./utils-D3SQYmnk.js";import"./index-Yr1YxSHs.js";import"./index-B8bHJfxT.js";import"./index-BrVac6Qe.js";import"./navigation-down-arrow-DtKKxhJy.js";import"./navigation-right-arrow-CFkOAqoT.js";import"./navigation-right-arrow-DjfApRUX.js";import"./useCurrentTheme-Drz3YU3H.js";import"./index-ClmEnud9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wTt9rp2-.js";import"./paper-plane-CjzWL9e1.js";import"./index-C6sQNauJ.js";import"./less-CDzfA6tR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

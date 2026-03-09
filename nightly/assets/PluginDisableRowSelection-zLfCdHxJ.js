import{j as e}from"./iframe-CZUFstmy.js";import{useMDXComponents as n}from"./index-CNbwg358.js";import{I as r}from"./CommandsAndQueries-BhlCA6ZS.js";import{M as s,C as l}from"./blocks-DX4VSw2u.js";import"./Tag-CX2RPQC9.js";import"./index-Dh_fZ_AU.js";import"./copy-DtLjTz9V.js";import{F as a}from"./Footer-DYeNln-j.js";import"./PageNotFound-BJZaFG9t.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DylN3bUZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-htzAGpr-.js";import"./index-BTnDvpxF.js";import"./index-BpjPalsU.js";import"./index-DrW2JSp2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2TR7fwJ.js";import"./addCustomCSSWithScoping-CYgyEKVM.js";import"./index-Q62qsF52.js";import"./index-gKv9WyUX.js";import"./index-6TF1-Ysc.js";import"./information-D6yKBjSF.js";import"./sys-enter-2-BfHAZzl4.js";import"./alert-CE2QesT5.js";import"./index-DQ321HEy.js";import"./Illustrations-BPYsG6-r.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-F0WSG7aT.js";import"./delete-dqJMeUOL.js";import"./settings-D3S74VcP.js";import"./NoData-Bcn1BipK.js";import"./NoFilterResults-6R3IW0n2.js";import"./index-nZLZA4-y.js";import"./IllustratedMessage-Cflf4SkZ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ca9d8mlW.js";import"./Input-fn8ljQGs.js";import"./ResponsivePopoverCommon.css-DPX2HjcJ.js";import"./ValueStateMessage.css-DWfde9O8.js";import"./Suggestions.css-BEQDSh_K.js";import"./ListBoxItemGroupTemplate-4gjtj37w.js";import"./ComboBoxItemGroup-yS-AI5SH.js";import"./ListItemBaseTemplate-tNf8OkU4.js";import"./Token-Be7rXUsE.js";import"./ScrollEnablement-Ba7PMo3V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CK8F7PPv.js";import"./ToggleButton-Cy5byWvG.js";import"./multiselect-all-P9gt9VBE.js";import"./SuggestionItem-BcPflO39.js";import"./index-BlfqJAGh.js";import"./Option-CiB_yCao.js";import"./index-Vm-NXKu2.js";import"./SegmentedButton-DKORPTuZ.js";import"./index-B8K2zuZv.js";import"./Select-BGYRHDkz.js";import"./InvisibleMessage-OFemtJNl.js";import"./index-hmKZXkrM.js";import"./index-DekBuc62.js";import"./index-BMLONGhJ.js";import"./index-DR9jmOc9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ByLpSrqS.js";import"./group-2-Dx8X1MIo.js";import"./sort-descending-BMdso8Rk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZRh6aRn.js";import"./utils-_uQ8OeIL.js";import"./index-BM_cOc0e.js";import"./index-C3J1ZKMs.js";import"./index-BMT0hAro.js";import"./navigation-down-arrow-CuveMFus.js";import"./navigation-right-arrow-DnT0h_6w.js";import"./navigation-right-arrow-CrfinX2r.js";import"./useCurrentTheme-D-wHF_NM.js";import"./index-BlAkVjOD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B6mPm6BW.js";import"./paper-plane-uG-YwDdB.js";import"./index-De3Wyk46.js";import"./less-CfQZGw0i.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

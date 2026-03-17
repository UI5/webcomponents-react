import{j as e}from"./iframe-C_hHAafN.js";import{useMDXComponents as n}from"./index-D3HSzI5H.js";import{I as r}from"./CommandsAndQueries-9eolN_GD.js";import{M as s,C as l}from"./blocks-DkbtP44I.js";import"./Tag-eVGHGbIg.js";import"./index-3QVLAy4g.js";import"./copy-RggualJu.js";import{F as a}from"./Footer-Cs4jbAjg.js";import"./PageNotFound-C7jxbIgP.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C48bkaSe.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-SYOek4pb.js";import"./index-nRsHzHP6.js";import"./index-DqhVaTSX.js";import"./index-C7mqYyTc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmUXk235.js";import"./addCustomCSSWithScoping-D9hLtcaz.js";import"./index-BKTg9IVY.js";import"./index-DaMaB5I7.js";import"./index-BmCCqQCC.js";import"./information-BzxR6BB4.js";import"./sys-enter-2-Bb8fTRXf.js";import"./alert-CfcbMAjf.js";import"./index-DDQ0aIRQ.js";import"./Illustrations-CNZ22cEs.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DmgeFgDX.js";import"./delete-DFd25d7l.js";import"./settings-cOi7tZPQ.js";import"./NoData-B51Lesm7.js";import"./NoFilterResults-BaQF3ps6.js";import"./index-DrtJcy0D.js";import"./IllustratedMessage-DlYnWnAs.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_6jRAhR.js";import"./Input-TGnF-6Wb.js";import"./ResponsivePopoverCommon.css-B3G2eYk9.js";import"./ValueStateMessage.css-CV4qc19-.js";import"./Suggestions.css-CHwCFLC2.js";import"./ListBoxItemGroupTemplate-fDCpM485.js";import"./ComboBoxItemGroup-DZXo9e3J.js";import"./ListItemBaseTemplate-C7WwsRHS.js";import"./Token-CKEQ5_aJ.js";import"./ScrollEnablement-ByLKUiOa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-66Kfx1Tu.js";import"./ToggleButton-DluNCSvv.js";import"./multiselect-all-n3CqmeKN.js";import"./SuggestionItem-CH8aQQQp.js";import"./index-64fyeXzu.js";import"./Option-D1DIcTfk.js";import"./index-BXd3-qZ5.js";import"./SegmentedButton-BO3FBYdW.js";import"./index-B4v4iYJ_.js";import"./Select-DdLVb8sx.js";import"./InvisibleMessage-ufPFqwzr.js";import"./index-DJtMuU1R.js";import"./index-CX-inHpd.js";import"./index-CkLRuFFu.js";import"./index-CXkptAkK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CCfaaozy.js";import"./group-2-C3mGXi1j.js";import"./sort-descending-CRMBh3aI.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BF3n00U0.js";import"./utils-DU5s3vrI.js";import"./index-BizsnkQy.js";import"./index-BBMO4pXI.js";import"./index-BPfQuIuB.js";import"./navigation-down-arrow-BVBBSui6.js";import"./navigation-right-arrow-BLUaI-J0.js";import"./navigation-right-arrow-BKXb3Jei.js";import"./useCurrentTheme-qRko6oTp.js";import"./index-BLeQ0x08.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B_cTxHD6.js";import"./paper-plane-E-0ZKy0h.js";import"./index-D5ir6q6t.js";import"./less-BYsoatbg.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

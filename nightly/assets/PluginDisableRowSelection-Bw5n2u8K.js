import{j as e}from"./iframe-CIERqdmv.js";import{useMDXComponents as n}from"./index-DuJS4dN9.js";import{I as r}from"./CommandsAndQueries-CnFEaRrZ.js";import{M as s,C as l}from"./blocks-CwsgKOP_.js";import"./Tag-0874imNl.js";import"./index-CMev4Q36.js";import"./copy-Dk2sduK9.js";import{F as a}from"./Footer-DeuiB6kc.js";import"./PageNotFound-C7dSWVQh.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DKVlHvWS.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B7T_f79Y.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./index-BEXhXSTj.js";import"./index-CeFrwZtC.js";import"./index-DmgJDP0k.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./index-CJA8M3b4.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DVTI43Ur.js";import"./delete-DS3AkE5n.js";import"./settings-CUozKHOg.js";import"./NoData-DR-S45IK.js";import"./NoFilterResults-BsHrvPun.js";import"./index-CFrarqVC.js";import"./IllustratedMessage-DgRlwHiL.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DpgFhjh1.js";import"./Input-BEziv0q_.js";import"./ResponsivePopoverCommon.css-BAyfAe_C.js";import"./ValueStateMessage.css-yAScMgnT.js";import"./Suggestions.css-aGpylhML.js";import"./ListBoxItemGroupTemplate-D6At1Qlv.js";import"./ComboBoxItemGroup-BOPZ01sA.js";import"./ListItemBaseTemplate-EsFxfCNV.js";import"./Token-5e6MV0bo.js";import"./ScrollEnablement-DGfUBP2Y.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-juxLC4N0.js";import"./ToggleButton-fSM9au_p.js";import"./multiselect-all-Dp7x2lXO.js";import"./SuggestionItem-BuU8W2FN.js";import"./index-DdmvzFYG.js";import"./Option-wGoV8nGP.js";import"./index-BWY8E_GB.js";import"./SegmentedButton-Bcf7ihNT.js";import"./index-DvKp6AoT.js";import"./Select-BLvJx2xD.js";import"./InvisibleMessage-CprUuJ-2.js";import"./index-D1QESHgx.js";import"./index-0nUQUElL.js";import"./index-C_lZ2DQU.js";import"./index-CP7c8g3L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dax1sHJA.js";import"./group-2-DM-9Ml2s.js";import"./sort-descending-Dp80WCwu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CqgLWTBh.js";import"./utils-CkYBlNbD.js";import"./index-DfKuTje3.js";import"./index-DI2AAvjl.js";import"./index-DZRTP0Ol.js";import"./navigation-down-arrow-DlMyh96r.js";import"./navigation-right-arrow-DZXBCa0X.js";import"./navigation-right-arrow-z1aD-Ww1.js";import"./useCurrentTheme-m6a_-5M8.js";import"./index-y1z-NlC1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CMxRGrvK.js";import"./paper-plane-C5cHYIfV.js";import"./index-BXsMvzsh.js";import"./less-BWtd1z_C.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

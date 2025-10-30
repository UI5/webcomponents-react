import{j as e}from"./iframe-B6_VnEn0.js";import{useMDXComponents as n}from"./index-CKjNAzmF.js";import{I as r,F as s}from"./CommandsAndQueries-Cu0FTX1O.js";import{M as l,C as a}from"./blocks-CyO3EJlr.js";import"./Tag-CgNBFz-6.js";import"./index-DSVB_dqF.js";import"./copy-C1fhLsjZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DmrgVtRF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hldrhuwk.js";import"./index-DkrtZknx.js";import"./index-C9FEKhX3.js";import"./Link-fr-LMhyz.js";import"./index-eApF8yKA.js";import"./index-BgmLFHtv.js";import"./index-BsFRP28T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6ry04GL.js";import"./addCustomCSSWithScoping-Cx3SnQ1e.js";import"./index-CRKIYkxI.js";import"./information-DRMbXOdP.js";import"./sys-enter-2-DdSSz0Lf.js";import"./alert-B2vLmz8E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSUT1UXJ.js";import"./delete-B70o4ZMp.js";import"./settings-Sr6bgmj6.js";import"./NoData-wcsbKZXP.js";import"./IllustratedMessage-Cv5HujEL.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BVzwn4SB.js";import"./index-BZxlht39.js";import"./index-C4M0psbz.js";import"./slim-arrow-down-923fJvnp.js";import"./Input-Bs0gKdph.js";import"./ResponsivePopoverCommon.css-CoduWFfh.js";import"./ValueStateMessage.css-CkI6mQmW.js";import"./Suggestions.css-DpsubRXQ.js";import"./ListBoxItemGroupTemplate-CZSz5eg-.js";import"./ComboBoxItemGroup-BsqgT4AO.js";import"./ListItemBaseTemplate-1OIMo-aq.js";import"./Token-_KSGZm69.js";import"./ScrollEnablement-DlCeZwb_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bie1RoJA.js";import"./ToggleButton-A9uw47Xu.js";import"./SuggestionItem-WtzRfOZM.js";import"./index-RYxAjmJf.js";import"./Option-B_Qr8ZR1.js";import"./index-DXzDsO8i.js";import"./SegmentedButton-DUqbW27k.js";import"./index-BY3646yH.js";import"./Select-DDy3V6oF.js";import"./InvisibleMessage-KplCdb0P.js";import"./slim-arrow-down-BFcyly_p.js";import"./index-CxOv9Kkh.js";import"./index-DmSWDL_Q.js";import"./index-eEzYE7AT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-b4USW7aT.js";import"./group-2-CDpbgOOK.js";import"./sort-descending-Czh8lmrX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Xza24VXr.js";import"./utils-B3TlGdmB.js";import"./index-AL-OWNK_.js";import"./index-BSfjy-rK.js";import"./index-gNjcilEj.js";import"./navigation-down-arrow-B1_3lDPJ.js";import"./navigation-right-arrow-B-hO6U9j.js";import"./navigation-right-arrow-K8WG24tV.js";import"./useCurrentTheme-Bo-VqRyr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y-idYoY3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CyGYKIx-.js";import"./paper-plane-qRjF1BNZ.js";import"./index-DYNfIYGU.js";import"./less-BLr9OCIN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

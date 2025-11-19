import{j as e}from"./iframe-5N9GXz7D.js";import{useMDXComponents as n}from"./index-DlTuiQlt.js";import{I as r,F as s}from"./CommandsAndQueries-CMJc_Han.js";import{M as l,C as a}from"./blocks-CPyIL7dB.js";import"./Tag-B4RC7Xxt.js";import"./index-D8q95YVM.js";import"./copy-BLtz8zcP.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CU1Fc6AT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJR2SGfI.js";import"./index-DDb99OCc.js";import"./index-DZUtpbBW.js";import"./Link-oEEjXqRZ.js";import"./index-D5QSQPRG.js";import"./index-l_lQT3oU.js";import"./index-DHTSiNH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ieHBSwsk.js";import"./addCustomCSSWithScoping-B8HVYEKl.js";import"./index-FxCKqbN1.js";import"./information-B48tg30u.js";import"./sys-enter-2-CQaZAGEJ.js";import"./alert-Ct7A8pBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Qomii_Eh.js";import"./delete-vylZh7WJ.js";import"./settings-B5-c07yK.js";import"./NoData-DbeTv8bI.js";import"./IllustratedMessage-yyhJb6H7.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CguSYJb-.js";import"./index-B6JLNmTG.js";import"./index-gVbw8hdV.js";import"./slim-arrow-down-uEmCnSpu.js";import"./Input-Cf74aOvg.js";import"./ResponsivePopoverCommon.css-D2vKXyuQ.js";import"./ValueStateMessage.css-Ctm1_1I-.js";import"./Suggestions.css-CDFdvq-I.js";import"./ListBoxItemGroupTemplate-BTEoBIel.js";import"./ComboBoxItemGroup-BndPAf-K.js";import"./ListItemBaseTemplate-BbinvfmZ.js";import"./Token-CSu3FrWS.js";import"./ScrollEnablement-DVuWUxs9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFNu6wL7.js";import"./ToggleButton-CADuKzo9.js";import"./SuggestionItem-Bt1iO1MT.js";import"./index-9ZgsG56h.js";import"./Option-B0lfretA.js";import"./index-DKrFf-VR.js";import"./SegmentedButton-CwtS4mbi.js";import"./index-CDEUh1Wr.js";import"./Select-BKsCZrgq.js";import"./InvisibleMessage-BNNpwXEU.js";import"./slim-arrow-down-CLJYmPnb.js";import"./index-BDZcqiPr.js";import"./index-DmwwIOgD.js";import"./index-CP2quE6c.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yps-Eqqd.js";import"./group-2-6NDEVnRF.js";import"./sort-descending-BzVGktfr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-3H5h1FPb.js";import"./utils-CdxZF0UW.js";import"./index-CTYujQq0.js";import"./index-Bk28eBp1.js";import"./index-cm94_KBC.js";import"./navigation-down-arrow-DBn42RCI.js";import"./navigation-right-arrow-BrFq4Pkn.js";import"./navigation-right-arrow-Cdp8Azj2.js";import"./useCurrentTheme-EgfIVG70.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BLiIhR8s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-v4UuOtzV.js";import"./paper-plane-DplzoTA4.js";import"./index-CSswLuPM.js";import"./less-D9G0zBob.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

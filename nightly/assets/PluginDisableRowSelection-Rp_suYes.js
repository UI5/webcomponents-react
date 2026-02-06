import{j as e}from"./iframe-CBE50DlQ.js";import{useMDXComponents as n}from"./index-DIj01nj4.js";import{I as r,F as s}from"./CommandsAndQueries-DPkme0CW.js";import{M as l,C as a}from"./blocks-BkRbeitU.js";import"./Tag-DnRfIk3Q.js";import"./index-CionDnrU.js";import"./copy-C6dVkXZR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-FgUTgZpP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cx0GhjWW.js";import"./index-DQcdvvTg.js";import"./index-Cl_RTgXn.js";import"./Link-Dh4rUjfX.js";import"./index-hRqo2aEC.js";import"./index-9M1Uc6lA.js";import"./index-DZWAayED.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-OxleBysO.js";import"./addCustomCSSWithScoping-DkZRGLQs.js";import"./index-DOpTxqMF.js";import"./information-C3Q_Sey8.js";import"./sys-enter-2-B4dHqFQY.js";import"./alert-CvpF86nf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-kIWSEh9O.js";import"./delete-DTo7ncZM.js";import"./settings-LIhtBrtR.js";import"./NoData-Qqj6cL7o.js";import"./IllustratedMessage-CI4t13HS.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-W46K1qhG.js";import"./index-f3rDsnt3.js";import"./index-CIlulLEa.js";import"./slim-arrow-down-BM67JTAP.js";import"./Input-D1ohtzY1.js";import"./ResponsivePopoverCommon.css-KhWag-i4.js";import"./ValueStateMessage.css-Bx58RCyv.js";import"./Suggestions.css-aqqCyRM-.js";import"./ListBoxItemGroupTemplate-DDLQAbKD.js";import"./ComboBoxItemGroup-lQF3DiBn.js";import"./ListItemBaseTemplate-_7gwwsSz.js";import"./Token-as1yPBTS.js";import"./ScrollEnablement-UFzoiRFM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_Jgd157.js";import"./ToggleButton-D1Yki3TB.js";import"./SuggestionItem-CnQ5JsmF.js";import"./index-Ccs2LERk.js";import"./Option-DexHpC4I.js";import"./index-BZn1P1jY.js";import"./SegmentedButton-DlVMykln.js";import"./index-BzGPsnLs.js";import"./Select-DTKYpMmC.js";import"./InvisibleMessage-t9FWfsM5.js";import"./slim-arrow-down-DODVm5XL.js";import"./index-C1EH5X69.js";import"./index-1dVMYy5E.js";import"./index-CIKHOMmi.js";import"./index-BPTFgRZw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Jk4sUQSq.js";import"./group-2-BnahuUAi.js";import"./sort-descending-9pdtb9Tw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DqNWVbah.js";import"./utils-DifCn2wZ.js";import"./index-DDCnksk0.js";import"./index-CufLTtjf.js";import"./index-ByEfa-fL.js";import"./navigation-down-arrow-RDpX36vF.js";import"./navigation-right-arrow-4cWWH7fB.js";import"./navigation-right-arrow-iIetXOiI.js";import"./useCurrentTheme-Ch5yw61T.js";import"./index-aRC-rjwD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DcxS7luH.js";import"./paper-plane-BWaZHKXF.js";import"./index-Cs_vIsdp.js";import"./less-Wc_6A1Tc.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

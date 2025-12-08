import{j as e}from"./iframe-BYgl1e3t.js";import{useMDXComponents as n}from"./index-CQiAxnj4.js";import{I as r,F as s}from"./CommandsAndQueries-C7-dfPl9.js";import{M as l,C as a}from"./blocks-DJ2faYOs.js";import"./Tag-WgH8NYoz.js";import"./index-CTjTm5cU.js";import"./copy-IUlUEvra.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D1INNVPG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTJrZqp.js";import"./index-DOySy9e2.js";import"./index-BDYs8WoM.js";import"./Link-DcQGtcs6.js";import"./index-B_dT7zj1.js";import"./index-CgZTDeh6.js";import"./index-B7ISCohd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoRR59AB.js";import"./addCustomCSSWithScoping-_jk3dAup.js";import"./index-6Qy6VRAh.js";import"./information-B-QMEMgn.js";import"./sys-enter-2-Bd_kwfmJ.js";import"./alert-zegR4G--.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1SsSrBU.js";import"./delete-C5OnkOZe.js";import"./settings-B5ioReqo.js";import"./NoData-BiKwYAUE.js";import"./IllustratedMessage-DOGZ92R6.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CGSn29D0.js";import"./index-Es7U-HC0.js";import"./index-CXvLuVUG.js";import"./slim-arrow-down-Dp2ciCQr.js";import"./Input-v1S2StmY.js";import"./ResponsivePopoverCommon.css-Dmb9XfkM.js";import"./ValueStateMessage.css-Y1GqQ7JE.js";import"./Suggestions.css-CUC1ZqxX.js";import"./ListBoxItemGroupTemplate-Dr-udWWW.js";import"./ComboBoxItemGroup-BqJbVdEf.js";import"./ListItemBaseTemplate-BWtuxBSD.js";import"./Token-BEPjAjq5.js";import"./ScrollEnablement-CMlQv5Ns.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJEaviTe.js";import"./ToggleButton-D2vaCr4G.js";import"./SuggestionItem-DgwBMgIM.js";import"./index-081kxF9g.js";import"./Option-BFY-_C_3.js";import"./index-BCKaAXVJ.js";import"./SegmentedButton-DU2vMA6Y.js";import"./index-BOpxZokY.js";import"./Select-CKEJiYgR.js";import"./InvisibleMessage-zdr3PQOC.js";import"./slim-arrow-down-Ck49N193.js";import"./index-B6cxdJA0.js";import"./index-D3nZrnGX.js";import"./index-y0wRkLFD.js";import"./index-CH5XfXng.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JNJ08E3e.js";import"./group-2-NOFZdPEz.js";import"./sort-descending-dB16txzl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CamwnZjH.js";import"./utils-vU-5DtFT.js";import"./index-DLZVurc2.js";import"./index-Ciih49Gh.js";import"./index-8TbROqqH.js";import"./navigation-down-arrow-By8vG3CK.js";import"./navigation-right-arrow-DTYTg7DL.js";import"./navigation-right-arrow-DjjDogmX.js";import"./useCurrentTheme-Cdnt_qcN.js";import"./index-BVTS8CP-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWrTCVtk.js";import"./paper-plane-x6srakyu.js";import"./index-ClEI62f3.js";import"./less-DVoR9ng7.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

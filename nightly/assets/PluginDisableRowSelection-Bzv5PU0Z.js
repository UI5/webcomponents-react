import{j as e}from"./iframe-CyQHbHxC.js";import{useMDXComponents as n}from"./index-CAqjzf3-.js";import{I as r}from"./CommandsAndQueries-CQRKG-No.js";import{M as s,C as l}from"./blocks-B1BKQjJv.js";import"./Tag-CpzoOvR8.js";import"./index-DVtJUpci.js";import"./copy-DaAXI0wh.js";import{F as a}from"./Footer-B6F6QaBp.js";import"./PageNotFound-BwogsJtD.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BOB587tv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-8vAV1o0p.js";import"./index-DdcJcuqo.js";import"./index-Dk8Vx9PA.js";import"./index-CyzsrkYQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPaLVEvo.js";import"./addCustomCSSWithScoping-iqlifjV6.js";import"./index-DUAJQglC.js";import"./index-hCRaM0Y7.js";import"./index-1GAsnXVc.js";import"./information-DjNNiNHU.js";import"./sys-enter-2-BgUfXyT0.js";import"./alert-CTY_LxCJ.js";import"./index-DMBzjcEO.js";import"./Illustrations-BxTCLiS4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-e6BftqbE.js";import"./delete-BjTdR4Ty.js";import"./settings-D2RjwYQ8.js";import"./NoData-BxMVlIJh.js";import"./NoFilterResults-CGR-i73d.js";import"./index-D2c0HKwX.js";import"./IllustratedMessage-ClHsMmcC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BcsJzzXU.js";import"./Input-8PEEDwad.js";import"./ResponsivePopoverCommon.css-Dux865Zo.js";import"./ValueStateMessage.css-BbLW-Isn.js";import"./Suggestions.css-X5qr8kqi.js";import"./ListBoxItemGroupTemplate-DZZUqyjU.js";import"./ComboBoxItemGroup-B5Dfu7er.js";import"./ListItemBaseTemplate-CY7v2Dt_.js";import"./Token-BqJ4Ofoo.js";import"./ScrollEnablement-CKBCWM_a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BxKg-XHx.js";import"./ToggleButton-DiXt1YNE.js";import"./multiselect-all-CSlIa136.js";import"./SuggestionItem-CYqlhEgV.js";import"./index-DE35mJsn.js";import"./Option-BnsFtoau.js";import"./index-BURccoye.js";import"./SegmentedButton-_wFpY2kD.js";import"./index-D9IGU32c.js";import"./Select-BOhjnWh_.js";import"./InvisibleMessage-e12K6vz3.js";import"./index-BzKsasZn.js";import"./index-6l_fJSoT.js";import"./index-D-OPlSdD.js";import"./index-Djt9ygMg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRt9GZkB.js";import"./group-2-CBrMg8eI.js";import"./sort-descending-B92RCWEy.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCN3pIQM.js";import"./utils-ClisyTNb.js";import"./index-1FZuTEGH.js";import"./index-CFObLbas.js";import"./index-B1gaarcs.js";import"./navigation-down-arrow-C41QBZNm.js";import"./navigation-right-arrow-C25QyYoj.js";import"./navigation-right-arrow-BuVWa6AZ.js";import"./useCurrentTheme-DKlMhPlO.js";import"./index-DbdcXDnh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RbxVKpGb.js";import"./paper-plane-9huZnMp4.js";import"./index-DUi-XTBZ.js";import"./less-CcGC0Ea6.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

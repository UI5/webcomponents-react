import{j as e}from"./iframe-DZzGW3BN.js";import{useMDXComponents as n}from"./index-4a2WG_Ci.js";import{I as r,F as s}from"./CommandsAndQueries-agOrjqHb.js";import{M as l,C as a}from"./blocks-CBLhE6Mj.js";import"./Tag-DsKJkF-r.js";import"./index-CwFc8wWn.js";import"./copy-Dn2hDQ0W.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-QCfpKmZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRP5oWUe.js";import"./index-kAqP9TvQ.js";import"./index-Dq5fA6-V.js";import"./Link-S_PR-7tK.js";import"./index-KWsyOko9.js";import"./index-Cwa4PueL.js";import"./index-DDMDh9Sd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsBnjZtI.js";import"./addCustomCSSWithScoping-63LVGehW.js";import"./index-d1jeh3JQ.js";import"./information-BknITroB.js";import"./sys-enter-2-KPnKgmjd.js";import"./alert-mneIjgbe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BniSdvIz.js";import"./delete-DuV86wpx.js";import"./settings-8s6k8EjZ.js";import"./NoData-CShc9ggy.js";import"./IllustratedMessage-CD31dXEh.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-Dy7bfHGF.js";import"./index-JZqV8G1u.js";import"./index-BwppftZR.js";import"./slim-arrow-down-D8mH76_5.js";import"./Input-6XkWZ1o_.js";import"./ResponsivePopoverCommon.css-BNCzU2w3.js";import"./ValueStateMessage.css-Uirvf2-h.js";import"./Suggestions.css-Bxrtjpe4.js";import"./ListBoxItemGroupTemplate-EqN2wsVW.js";import"./ComboBoxItemGroup-DLN7zx_c.js";import"./ListItemBaseTemplate-B5pUU0jJ.js";import"./Token-Bd6GT3me.js";import"./ScrollEnablement-Dlejz-Cm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSpNUPFr.js";import"./ToggleButton-D7gJFlAG.js";import"./SuggestionItem-Dj5VdsGP.js";import"./index-Djf9F3Nl.js";import"./Option-qqPbvFNI.js";import"./index-CAPm8wXz.js";import"./SegmentedButton-IKOAniKG.js";import"./index-hcUm0XD3.js";import"./Select-TodLTqUS.js";import"./InvisibleMessage-CpiIl6ef.js";import"./slim-arrow-down-DwujDOXN.js";import"./index-BlCx-VbN.js";import"./index-Bwfdl3tG.js";import"./index-7ORqBvwq.js";import"./index-5lzKqf_E.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtZcXXHD.js";import"./group-2-DTjJUMyx.js";import"./sort-descending-BBFN1NhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dz95Acax.js";import"./utils-Dnf_XIlj.js";import"./index-ujWlR76e.js";import"./index-DzxIJEJi.js";import"./index-DEgJlCnW.js";import"./navigation-down-arrow-Ck09O8Ee.js";import"./navigation-right-arrow-DVL0ymcw.js";import"./navigation-right-arrow-ClbiDJLo.js";import"./useCurrentTheme-CWgqZovn.js";import"./index-yeM0YfxH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgKuSHBl.js";import"./paper-plane-D5SdZPIp.js";import"./index-C79XlDu9.js";import"./less-CgHtMiYC.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

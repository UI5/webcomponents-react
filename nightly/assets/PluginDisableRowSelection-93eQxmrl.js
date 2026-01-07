import{j as e}from"./iframe-Lvl9yzry.js";import{useMDXComponents as n}from"./index-DtnS30Y7.js";import{I as r,F as s}from"./CommandsAndQueries-r8pG5JEL.js";import{M as l,C as a}from"./blocks-DE-pS5pt.js";import"./Tag-Ntj2WoJZ.js";import"./index-Z8W5RiOf.js";import"./copy-BqWuakZq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-W1z4E9IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XWeRb-Rp.js";import"./index-NhuzyApy.js";import"./index-BVP3-7sd.js";import"./Link-BJMT4XUv.js";import"./index-CtS6x3f8.js";import"./index-CNh112J7.js";import"./index-BNlSxjfl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VTbkLDop.js";import"./addCustomCSSWithScoping-aRHntRG4.js";import"./index-ilzt6YAk.js";import"./information-BnCFwrSd.js";import"./sys-enter-2-Ct5ni-AG.js";import"./alert-1cuYh9Xz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoV-samG.js";import"./delete-Bf6mCNJN.js";import"./settings-BTH1H1cH.js";import"./NoData-YJgOLuaU.js";import"./IllustratedMessage-DgJcJS-p.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BOWtOBh1.js";import"./index-CF9o4lMv.js";import"./index-DJszWFyw.js";import"./slim-arrow-down-CJ3pdYkm.js";import"./Input-DulPzTQS.js";import"./ResponsivePopoverCommon.css-BPkzc8tz.js";import"./ValueStateMessage.css-DkT9mXdo.js";import"./Suggestions.css-D2giGZP3.js";import"./ListBoxItemGroupTemplate-Dg_wJmKC.js";import"./ComboBoxItemGroup-Bug1j3oo.js";import"./ListItemBaseTemplate-ClQx-ttj.js";import"./Token-CvAfD02Z.js";import"./ScrollEnablement-BzfTcoR4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cugb1xkB.js";import"./ToggleButton-vHqqXMb8.js";import"./SuggestionItem-DZzNyPEU.js";import"./index-B_QiK6AG.js";import"./Option-DgDbULin.js";import"./index-EcQZrwWP.js";import"./SegmentedButton-BVtdiyLd.js";import"./index-DKsWxbvM.js";import"./Select-CdVgAmGG.js";import"./InvisibleMessage-CMJ7wXZy.js";import"./slim-arrow-down-BWLmdiin.js";import"./index-CNzg74ta.js";import"./index-BwrikEva.js";import"./index-DFBuPGbC.js";import"./index-CYmJcLDK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJnLt-s6.js";import"./group-2-Cog56SjU.js";import"./sort-descending-BD1V-JDC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CH4WmmUP.js";import"./utils-cgeJKlY3.js";import"./index-Bn7mHf-9.js";import"./index-B2B9kXKH.js";import"./index-DiQWGXFC.js";import"./navigation-down-arrow-CveMzw9u.js";import"./navigation-right-arrow-BQsgPNis.js";import"./navigation-right-arrow-DTUlVw7t.js";import"./useCurrentTheme-x7DPOfUa.js";import"./index-BKYwVVoy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hJE8aY9K.js";import"./paper-plane-D0keah3m.js";import"./index-ombsrexN.js";import"./less-xLGJFvMI.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

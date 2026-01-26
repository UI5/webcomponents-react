import{j as e}from"./iframe-BlUygxfZ.js";import{useMDXComponents as n}from"./index-CXAabkf3.js";import{I as r,F as s}from"./CommandsAndQueries-CeFRywr5.js";import{M as l,C as a}from"./blocks-C4NQ4-im.js";import"./Tag-CUR2rrlg.js";import"./index-Dh-78LPx.js";import"./copy-C0O91PIx.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C4XrPa9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0J408xz.js";import"./index-DFYqP0N6.js";import"./index-t0s0GVf0.js";import"./Link-Czimy6hK.js";import"./index-Dn8Ref-F.js";import"./index-C_DCdzmu.js";import"./index-nb0q6IbV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbJvTexr.js";import"./addCustomCSSWithScoping-DHyjDtb3.js";import"./index-B6coDb7Z.js";import"./information-zlNYGB6Q.js";import"./sys-enter-2-Ccj_DCkA.js";import"./alert-LdJbGRSH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CgXczKDb.js";import"./delete-BZs0a-1H.js";import"./settings-BVrFU0mX.js";import"./NoData-D4bv1jPS.js";import"./IllustratedMessage-D3TBiFcy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-9ofLVooP.js";import"./index-84lCpQlY.js";import"./index-CSl--qbo.js";import"./slim-arrow-down-CgDsJMzW.js";import"./Input-CAJFmB2Z.js";import"./ResponsivePopoverCommon.css-DwHTCDww.js";import"./ValueStateMessage.css-C3alblsY.js";import"./Suggestions.css-CLTa6LPz.js";import"./ListBoxItemGroupTemplate-CIs0oSQk.js";import"./ComboBoxItemGroup-Ceh1JxvS.js";import"./ListItemBaseTemplate-CMAdUbXU.js";import"./Token-BTUJFvLX.js";import"./ScrollEnablement-DSwNOA6D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqadHOpo.js";import"./ToggleButton-BG1bNuXR.js";import"./SuggestionItem-D0KUwh3K.js";import"./index-B9UBVLPX.js";import"./Option-h_6RFh1c.js";import"./index-DhgCGgHe.js";import"./SegmentedButton-DH2HX0sk.js";import"./index-CHKENjHC.js";import"./Select-CP3bsgEY.js";import"./InvisibleMessage-D6EiZ3B3.js";import"./slim-arrow-down-DNdnjurS.js";import"./index-2fqu4ZUm.js";import"./index-BbCJyiwr.js";import"./index-DUvesvaX.js";import"./index-C5uNCv6R.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGGrEzLl.js";import"./group-2-Bzo2NSpJ.js";import"./sort-descending--Hwn5uWZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5Y2dYwJ.js";import"./utils-DbuWLHgd.js";import"./index-l2Om9n2s.js";import"./index-ec7XPWwz.js";import"./index-DsTqha7i.js";import"./navigation-down-arrow-DDmPzf56.js";import"./navigation-right-arrow-D1dkuTqT.js";import"./navigation-right-arrow-BQIRTW5E.js";import"./useCurrentTheme-BPj60tYc.js";import"./index-DJOUc43H.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RZAVCFXP.js";import"./paper-plane-CKvhYw7h.js";import"./index-DF9Z0-Xx.js";import"./less-BQUCisQp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

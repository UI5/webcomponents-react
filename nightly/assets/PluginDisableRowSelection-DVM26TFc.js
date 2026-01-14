import{j as e}from"./iframe-B1b_brho.js";import{useMDXComponents as n}from"./index-D7Qzgic5.js";import{I as r,F as s}from"./CommandsAndQueries-CtGN4dkM.js";import{M as l,C as a}from"./blocks-CVoG47OJ.js";import"./Tag-Ch3HOxAY.js";import"./index-KKxhZSNI.js";import"./copy-Dph3WiPG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BgO7D7Mn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5FuCmER.js";import"./index-BVeNd2GI.js";import"./index-8EjJ8GJV.js";import"./Link-Pv2BqkKv.js";import"./index-Bk9hFp20.js";import"./index-h6jImvMY.js";import"./index-8w0MsWgV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC0Swz4-.js";import"./addCustomCSSWithScoping-Dg_rT4l9.js";import"./index-Dk0QMB33.js";import"./information-Cn-hRts7.js";import"./sys-enter-2-dderIbO6.js";import"./alert-Bjr3m2l0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DlUC8bET.js";import"./delete-3Vgbn1zI.js";import"./settings-7z4AIWo7.js";import"./NoData-XVQCE7YC.js";import"./IllustratedMessage-CCaHK3Dl.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkiGpRZ1.js";import"./index-BmCGQ8OY.js";import"./index-Dg9f9FJY.js";import"./slim-arrow-down-CtSJNFoH.js";import"./Input-DrPrGk4J.js";import"./ResponsivePopoverCommon.css-DecL8iRM.js";import"./ValueStateMessage.css-DCqzi-mz.js";import"./Suggestions.css-DEFGaf02.js";import"./ListBoxItemGroupTemplate-u6SqAiWm.js";import"./ComboBoxItemGroup-Cxw0yiyg.js";import"./ListItemBaseTemplate-D1-RPP7T.js";import"./Token-DztrHKsk.js";import"./ScrollEnablement-Ci1uix4q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeVIH9EC.js";import"./ToggleButton-ConJh4Qq.js";import"./SuggestionItem-DuB_O6wg.js";import"./index-9SIcG1pp.js";import"./Option-CjBwPmEN.js";import"./index-BUu53tH-.js";import"./SegmentedButton-D7knI5JR.js";import"./index-zkE8LOlV.js";import"./Select-Ch62qSYK.js";import"./InvisibleMessage-DfMwylJB.js";import"./slim-arrow-down-Im8B-cR9.js";import"./index-mHWo7vBD.js";import"./index-BLOOnk3h.js";import"./index-B32hLMLV.js";import"./index-MTq0gWz9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CVXGpE6r.js";import"./group-2-DU4omCjN.js";import"./sort-descending-B5Rv1utQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BIjwrtDG.js";import"./utils-dEyVPeJe.js";import"./index-BIOacvM6.js";import"./index-CyttwLCs.js";import"./index-FvgLRY5G.js";import"./navigation-down-arrow-C3y8haIF.js";import"./navigation-right-arrow-0IJs_3zu.js";import"./navigation-right-arrow-BSqrLb3v.js";import"./useCurrentTheme-BXjgz77y.js";import"./index-Cc7bvS6n.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BBS2P8Pi.js";import"./paper-plane-B3hlc-tG.js";import"./index-xEB5nUFf.js";import"./less-L3_E9rnS.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

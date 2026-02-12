import{j as e}from"./iframe-ouw07lhn.js";import{useMDXComponents as n}from"./index-Cip0-ov6.js";import{I as r,F as s}from"./CommandsAndQueries-vCNbGeur.js";import{M as l,C as a}from"./blocks-Bw5GcbeR.js";import"./Tag-DRYfjFpo.js";import"./index-CiN9pZLU.js";import"./copy-B_ty4mVH.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BTDHVXWm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKdSXnqp.js";import"./index-ByxVEtyu.js";import"./index-COqVCE1o.js";import"./Link-DkIKsy6A.js";import"./index-C2ZF5Jpp.js";import"./index-CrUz0E6u.js";import"./index-COELAX_g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzV-vkfR.js";import"./addCustomCSSWithScoping-vWKRTHDz.js";import"./index-BPh4j9eE.js";import"./information-Bs_aR9DP.js";import"./sys-enter-2-C-Nxg2w-.js";import"./alert-D5Y3hKT1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CwAfLKrY.js";import"./delete-BgsX23Y2.js";import"./settings-ByFx0W9W.js";import"./NoData-DWFAi7vp.js";import"./IllustratedMessage-CxAMnvqN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DRZapmQq.js";import"./index-DoE7JH_F.js";import"./index-CenBWoFW.js";import"./slim-arrow-down-nnK8FJIO.js";import"./Input-CI1OROWq.js";import"./ResponsivePopoverCommon.css-DcoHmoxx.js";import"./ValueStateMessage.css-XdpxvNbf.js";import"./Suggestions.css-mbx7WJoo.js";import"./ListBoxItemGroupTemplate-ICv1HSLU.js";import"./ComboBoxItemGroup-Cn8U_ufh.js";import"./ListItemBaseTemplate-C1cC5hl7.js";import"./Token-CQGOb_u0.js";import"./ScrollEnablement-Cp3P35Wp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CMrSakoj.js";import"./ToggleButton-CxXRrFBw.js";import"./SuggestionItem-x9ZQujZb.js";import"./index-Bo-tMGsE.js";import"./Option-CiUM31JF.js";import"./index-y1ArBSuI.js";import"./SegmentedButton-cQyE_gOd.js";import"./index-DeORpEYb.js";import"./Select-BtMH0-7-.js";import"./InvisibleMessage-DuwvrpMq.js";import"./slim-arrow-down-YfB-XMvS.js";import"./index-CuWbHHrU.js";import"./index-DmC80DEo.js";import"./index-BuHulO6c.js";import"./index-DovX1QRr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ByggU5Ko.js";import"./group-2-BZphomOE.js";import"./sort-descending-hxltmPIF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BV2HEYnD.js";import"./utils-CF8GV5g4.js";import"./index-BJG82E-Q.js";import"./index-OWPFx2bJ.js";import"./index-CUMsSA2S.js";import"./navigation-down-arrow-D4nt05_C.js";import"./navigation-right-arrow-DEPwSesm.js";import"./navigation-right-arrow-yYJP9RxI.js";import"./useCurrentTheme-CCX7YAJN.js";import"./index-UMznImcy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BrfX5x8-.js";import"./paper-plane-xZAWAHyC.js";import"./index-D4laCzAs.js";import"./less-BK4CsGlP.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

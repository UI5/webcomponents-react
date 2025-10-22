import{j as e}from"./iframe-CqyMw63j.js";import{useMDXComponents as n}from"./index-GHxgs1Oh.js";import{I as r,F as s}from"./CommandsAndQueries-Ckqtj5q6.js";import{M as l,C as a}from"./blocks-gNAN3wnS.js";import"./Tag-9sg0d6U8.js";import"./index-DZeMBOtb.js";import"./copy-CygH_bff.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-VpVdQnD5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ccu9AWNy.js";import"./index-CyG-uGBl.js";import"./index-CRtLMoP1.js";import"./Link-8hzPxLpd.js";import"./index-B8X3UXQy.js";import"./index-DqKKFvdB.js";import"./index-CEokL_Ra.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hBi7rm2H.js";import"./addCustomCSSWithScoping-C9ZUc-46.js";import"./index-fW-mpTRV.js";import"./information-B-SB47kj.js";import"./sys-enter-2-8wJJb_fs.js";import"./alert-DS7w9_j5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BrgeZPp4.js";import"./delete-D9-ge-rM.js";import"./settings-cGyMTSk-.js";import"./NoData-xKoSmblb.js";import"./IllustratedMessage-BCxnQs3b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Ce8Tfk62.js";import"./index-LdWS7TCa.js";import"./index-DIUizzAk.js";import"./slim-arrow-down-D-ZUvWXK.js";import"./Input-BOVuOoq4.js";import"./ResponsivePopoverCommon.css-17WbdJEp.js";import"./ValueStateMessage.css-DVx3cVXN.js";import"./Suggestions.css-C_lAbcHi.js";import"./ListBoxItemGroupTemplate-CPI18sru.js";import"./ComboBoxItemGroup-CwJsZ4Zp.js";import"./ListItemBaseTemplate-CVZqI9dc.js";import"./Token-C7-_a1HK.js";import"./ScrollEnablement-BwuxTfsa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C-NVnbST.js";import"./ToggleButton-CyG3PucO.js";import"./SuggestionItem-LjByQWOY.js";import"./index-BA70ykXq.js";import"./Option-DOo6z9Dp.js";import"./index-DsjEg4fj.js";import"./SegmentedButton-Bx24Atny.js";import"./index-BvrBc5_J.js";import"./Select-Xhunz0DK.js";import"./InvisibleMessage-BX0MFDY5.js";import"./slim-arrow-down-x1-wAbSu.js";import"./index-rkzVTVvZ.js";import"./index-BSkVtYZm.js";import"./index-uyWLtESg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-39_bl0se.js";import"./group-2-DTudhwRg.js";import"./sort-descending-d65eGOj2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7A2D9qJE.js";import"./utils-D3iBktXL.js";import"./index-_WcNH8h5.js";import"./index-4BLCxvrL.js";import"./index-By6IU_b1.js";import"./navigation-down-arrow-BhNxTQs3.js";import"./navigation-right-arrow-7IyEfa1Z.js";import"./navigation-right-arrow-D0FoUvYd.js";import"./useCurrentTheme-CPkJtYyP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C4qlmx2T.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DGuc5LLn.js";import"./paper-plane-DpFQXuCc.js";import"./index-BbbdvkN_.js";import"./less-DyBbCAMz.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

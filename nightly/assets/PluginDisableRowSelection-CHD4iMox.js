import{j as e}from"./iframe-BZdybOkV.js";import{useMDXComponents as n}from"./index-BK2w2T2j.js";import{I as r,F as s}from"./CommandsAndQueries-6n7MF1sx.js";import{M as l,C as a}from"./blocks-CP8RdzkU.js";import"./Tag-BzbxKur3.js";import"./index-DK3P8KDJ.js";import"./copy-CIp50y-g.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bs_3zcjA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./index-BZ_ngRjy.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DmiM3j2F.js";import"./delete-Bn4jrtgc.js";import"./settings-CmB7Fgst.js";import"./NoData-BBWYakMZ.js";import"./IllustratedMessage-DgDtQSiT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-_1OOSCTk.js";import"./index-CpgEwEY9.js";import"./index-CZpKdl4q.js";import"./slim-arrow-down-BbBe3zkt.js";import"./Input-YhMtZ58-.js";import"./ResponsivePopoverCommon.css-C6Zy80iY.js";import"./ValueStateMessage.css-CodrIykW.js";import"./Suggestions.css-DFz-TQwT.js";import"./ListBoxItemGroupTemplate-DbGM3AkW.js";import"./ComboBoxItemGroup-DmXq2bTE.js";import"./ListItemBaseTemplate-osJNy9A-.js";import"./Token-Dp8jCEo2.js";import"./ScrollEnablement-DR3-8lGc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqswipPZ.js";import"./ToggleButton-DjDYf0VM.js";import"./SuggestionItem-CEjQwNps.js";import"./index-CFc0nQPH.js";import"./Option-oF9c-kTt.js";import"./index-ELRjcJ71.js";import"./SegmentedButton-CuCGezZR.js";import"./index-DBySEyUw.js";import"./Select-D9hNZoac.js";import"./InvisibleMessage-DKzjYfdj.js";import"./slim-arrow-down-CDOwWRZe.js";import"./index-Be1awQtY.js";import"./index-CPFKyy5f.js";import"./index-CfUkuybQ.js";import"./index-C13ceQxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter--kHfYTp1.js";import"./group-2-Bsl3ML8j.js";import"./sort-descending-BdNeL7VE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dovy5LXr.js";import"./utils-DhnX8mLU.js";import"./index-Dts70RbM.js";import"./index-C2zzZlu5.js";import"./index-DkPnj5bQ.js";import"./navigation-down-arrow--7f146sQ.js";import"./navigation-right-arrow-CVnmAike.js";import"./navigation-right-arrow-YVh7qiaT.js";import"./useCurrentTheme-BgFcBM5V.js";import"./index-n0APwmh8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX_WkTUl.js";import"./paper-plane-K10fV-mG.js";import"./index-CINyJYO9.js";import"./less-tox92RAM.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

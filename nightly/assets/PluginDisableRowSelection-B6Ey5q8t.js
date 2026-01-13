import{j as e}from"./iframe-BX6l_vT-.js";import{useMDXComponents as n}from"./index-Bzy26fup.js";import{I as r,F as s}from"./CommandsAndQueries-BQamr4MW.js";import{M as l,C as a}from"./blocks-dv2dOEr1.js";import"./Tag-CPbL9Jm0.js";import"./index-Brt5lPnV.js";import"./copy-DJpI-ZKv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D4l3HB2W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./index-DKRKom99.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ca5r5f4M.js";import"./delete-Bsyy1njk.js";import"./settings-DxWJHI99.js";import"./NoData-C_NtRWhM.js";import"./IllustratedMessage-DIkrg042.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CvIXbxAg.js";import"./index-BDGSG9LU.js";import"./index-Bd42I97O.js";import"./slim-arrow-down-C-LrsL8H.js";import"./Input-CDmiLyyY.js";import"./ResponsivePopoverCommon.css-CmOep2RC.js";import"./ValueStateMessage.css-DBlWYUos.js";import"./Suggestions.css-C86jlgxo.js";import"./ListBoxItemGroupTemplate-CjE33DFP.js";import"./ComboBoxItemGroup-DXvxztj-.js";import"./ListItemBaseTemplate-D6Eqv4kM.js";import"./Token-BcKVBOJy.js";import"./ScrollEnablement-CX9YTqaF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChOU4iwN.js";import"./ToggleButton-CODQYAiJ.js";import"./SuggestionItem-1DKCdUlb.js";import"./index-DlvRAfCL.js";import"./Option-CFA8b-um.js";import"./index-DAsjesvB.js";import"./SegmentedButton-DUlvEafh.js";import"./index-BWIKqFzV.js";import"./Select-xeWEHzkB.js";import"./InvisibleMessage-BDRoIrKZ.js";import"./slim-arrow-down-48HvW-vj.js";import"./index-BuXHj4_-.js";import"./index-aYisw1Gg.js";import"./index-ZtIQJzTv.js";import"./index-Dr11T0CO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bbs4NOEV.js";import"./group-2-D6oioZ7I.js";import"./sort-descending-DgSgbzqc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bb9INHlF.js";import"./utils-B0NWY5kp.js";import"./index-223TNC1P.js";import"./index-CA6OMJ6E.js";import"./index-BSjQgxdu.js";import"./navigation-down-arrow-DpKyjZiZ.js";import"./navigation-right-arrow-C5pZYAdh.js";import"./navigation-right-arrow-Bwx2a_3u.js";import"./useCurrentTheme-CxsvHeYZ.js";import"./index-Dll0aIpz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr-hHSan.js";import"./paper-plane-DHhXyk0n.js";import"./index-C1fiAmtQ.js";import"./less-CyPDc2VR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

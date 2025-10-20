import{j as e}from"./iframe-BThE7jKf.js";import{useMDXComponents as n}from"./index-B2RJGRd4.js";import{I as r,F as s}from"./CommandsAndQueries-D1tgAUE5.js";import{M as l,C as a}from"./blocks-Dnvf3bz-.js";import"./Tag-9-1VZojo.js";import"./index-CTUpkleH.js";import"./copy-CbUREYSb.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cte-PI1R.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDRlpx-X.js";import"./index-Di66tdVG.js";import"./index-DcLqsBQ7.js";import"./Link-BAiulGQ4.js";import"./index-cpbfvu6C.js";import"./index-i-aKPvBx.js";import"./index-DLO7Rqwk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbRZFTjL.js";import"./addCustomCSSWithScoping-BhW-iIae.js";import"./index-Dg0PU8qR.js";import"./information-CcuaLhCB.js";import"./sys-enter-2-DHGMesz_.js";import"./alert-DuPQa3D0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKwfTsTM.js";import"./delete-BqCAREpY.js";import"./settings-TqXR43qR.js";import"./NoData-DmCO7TIv.js";import"./IllustratedMessage-Bs5MaROT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CHmBr3w4.js";import"./index-Dr75E37T.js";import"./index-DvcdzHmC.js";import"./slim-arrow-down-Bz3-mcvJ.js";import"./Input-CbDmM0GF.js";import"./ResponsivePopoverCommon.css-DMYN2ItD.js";import"./ValueStateMessage.css-CvCL0Xij.js";import"./Suggestions.css-CGrcYFlL.js";import"./ListBoxItemGroupTemplate-_Besyw8f.js";import"./ComboBoxItemGroup-DAfVDG08.js";import"./ListItemBaseTemplate-xcFSnqWt.js";import"./Token-B6ErGNwX.js";import"./ScrollEnablement-_nV76HoB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cfqfrlti.js";import"./ToggleButton-DjH21DVy.js";import"./SuggestionItem-C8Yg-JWN.js";import"./index-CtKsJjs8.js";import"./Option-CSVQioik.js";import"./index-DsF8JQwb.js";import"./SegmentedButton-YWOzVeoF.js";import"./index-CCAH6gQH.js";import"./Select-CNSr5QHH.js";import"./InvisibleMessage-DJTpQpS-.js";import"./slim-arrow-down-hb2zYnU0.js";import"./index-C9n-DCcG.js";import"./index-E5ZX2AJ8.js";import"./index-BpiAnCwY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6ZPV9ob.js";import"./group-2-B51gzcdA.js";import"./sort-descending-BN4uvKMV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-w-AwlVUJ.js";import"./utils-Bm75YCbD.js";import"./index-HDPq3XGJ.js";import"./index-BZBFFr3l.js";import"./index-BHuibshv.js";import"./navigation-down-arrow-DNBn6riX.js";import"./navigation-right-arrow-CEmB2JVm.js";import"./navigation-right-arrow-iXDAcUxC.js";import"./useCurrentTheme-ohrANfKQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-JOKJFWbc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPG-qoPW.js";import"./paper-plane-Bi8pg9nf.js";import"./index-BVTuhwKz.js";import"./less-BKhFgDfk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

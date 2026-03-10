import{j as e}from"./iframe-xWXly7Ei.js";import{useMDXComponents as n}from"./index-BkV3w5d0.js";import{I as r}from"./CommandsAndQueries-cQGlKyLD.js";import{M as s,C as l}from"./blocks-BK-gEy5G.js";import"./Tag-C8IzARdb.js";import"./index-BakXc7t8.js";import"./copy-DY9Bhohc.js";import{F as a}from"./Footer-CjsfyNRg.js";import"./PageNotFound-BQRcUr7m.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CDFMCLtw.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dpfp2JXt.js";import"./index-BTgCG8OL.js";import"./index-B5aWf-WN.js";import"./index-1-wUIWqO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B64w7jYZ.js";import"./addCustomCSSWithScoping-Dr_4npAd.js";import"./index-BcAVbI4W.js";import"./index-P_dJFF81.js";import"./index-CbssaC5W.js";import"./information-3IM7ZiM-.js";import"./sys-enter-2-Cbpg-U0q.js";import"./alert-gk5TVJR_.js";import"./index-D8yJKpQG.js";import"./Illustrations-VX2U6euS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C0EeoQOf.js";import"./delete-Daj5aG2H.js";import"./settings-JEJGhDXa.js";import"./NoData-CUNc-SJj.js";import"./NoFilterResults-DvZ6DrPN.js";import"./index-BzwYG95X.js";import"./IllustratedMessage-Be1pREre.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-TGWaISd0.js";import"./Input-CDjEum2n.js";import"./ResponsivePopoverCommon.css-8bAtFiUD.js";import"./ValueStateMessage.css-BYQRLYZ0.js";import"./Suggestions.css-CNN403-Y.js";import"./ListBoxItemGroupTemplate-CuHmPnrx.js";import"./ComboBoxItemGroup-COAcu647.js";import"./ListItemBaseTemplate-GzRG8w-c.js";import"./Token-BEDcAYgp.js";import"./ScrollEnablement-DYlMFsuu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-iey8o9JN.js";import"./ToggleButton-CW6tueV4.js";import"./multiselect-all-CtBIMUjF.js";import"./SuggestionItem-ywTbVMDQ.js";import"./index-B1qnChHa.js";import"./Option-B7m8nxQ-.js";import"./index-DNsMOtVs.js";import"./SegmentedButton-CL3kzHDq.js";import"./index-DokxMw3O.js";import"./Select-BWiWS1At.js";import"./InvisibleMessage-CC4MNG7R.js";import"./index-CwxYOeSe.js";import"./index-Dv57lb5x.js";import"./index-jPeizMn4.js";import"./index-DEdFN2d4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dkcd59kF.js";import"./group-2-CsBD2zZA.js";import"./sort-descending-BQOuvjyZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk8WJ0QW.js";import"./utils-B3KTizs4.js";import"./index-B1H_35uI.js";import"./index-wRDrCSQt.js";import"./index-DKiHuygv.js";import"./navigation-down-arrow-Dex1asDk.js";import"./navigation-right-arrow-D1hOWf48.js";import"./navigation-right-arrow-DtQN-gk3.js";import"./useCurrentTheme-CGLlYyfP.js";import"./index-D_FJo5s9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYgZebj6.js";import"./paper-plane-DeM9JyhI.js";import"./index-BVX4T61_.js";import"./less-ChsYqecD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

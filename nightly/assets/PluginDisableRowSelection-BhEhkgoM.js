import{j as e}from"./iframe-D-p-3OCM.js";import{useMDXComponents as n}from"./index-DJLiOc38.js";import{I as r,F as s}from"./CommandsAndQueries-GFFu71sG.js";import{M as l,C as a}from"./blocks-D8nJ9XLJ.js";import"./Tag-3bv5cfrS.js";import"./index-4PsYVbCm.js";import"./copy-ORsTAKbB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CHycY5of.js";import"./preload-helper-PPVm8Dsz.js";import"./index--P1CcwOi.js";import"./index-TBDKK4_L.js";import"./index-BwwgwqQS.js";import"./Link-BjWHArC4.js";import"./index-DqKaYphS.js";import"./index-sDY_tTy_.js";import"./index-DzbvANjW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-sPN7n5XP.js";import"./addCustomCSSWithScoping-BzKWOZDH.js";import"./index-C326ykrp.js";import"./information-BQJXeVKx.js";import"./sys-enter-2-CYyiWANR.js";import"./alert-YvrQf4Kz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B57DziD3.js";import"./delete-BEO9yIVW.js";import"./settings-PRG2_s48.js";import"./NoData-DuGH0ec8.js";import"./IllustratedMessage-CUa4Bt6s.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Wcus0TGK.js";import"./index-BBXLhWys.js";import"./slim-arrow-down-DKsg_luZ.js";import"./Input-Da3ToNza.js";import"./ResponsivePopoverCommon.css-OapI0cqy.js";import"./ValueStateMessage.css-BkpHToNr.js";import"./Suggestions.css-o7YEXsUI.js";import"./ListBoxItemGroupTemplate-CKMRFc9x.js";import"./ComboBoxItemGroup-D9Rx3qMQ.js";import"./ListItemBaseTemplate-CXOX3yIO.js";import"./Token-DjuINvff.js";import"./ScrollEnablement-Dx2bfBZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_DUY2Ux.js";import"./ToggleButton-k4-GWGjQ.js";import"./SuggestionItem-IVmzuukY.js";import"./index-CKXB7l_Z.js";import"./Option-DKRbWp3g.js";import"./index-D3t7vdTR.js";import"./SegmentedButton-BIpofa76.js";import"./index-Ce_ehxxC.js";import"./Select-BHBfJeCN.js";import"./InvisibleMessage-DZZYj9QJ.js";import"./slim-arrow-down-CfASCrZe.js";import"./index-DJ9wMrht.js";import"./index-DqIlF11a.js";import"./IconDesign-DXd8PPVF.js";import"./filter-K4X4U2Pi.js";import"./group-2-ijcP2dFk.js";import"./sort-descending-DB86tqPR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BsUDDfTv.js";import"./utils-97cCH_s2.js";import"./index-BuWNZ_Be.js";import"./index-CxRdXbJe.js";import"./index-DkICcsDE.js";import"./navigation-down-arrow-DuI4O0ZC.js";import"./navigation-right-arrow-DChn1A1I.js";import"./navigation-right-arrow-2NSvp5We.js";import"./useCurrentTheme-DSou3srl.js";import"./IndicationColor-DVw-fSM_.js";import"./index-c2e1pm2Q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BGlVHb77.js";import"./paper-plane-D752rvN5.js";import"./index-BgQuvuCN.js";import"./less-CFosWOHX.js";import"./index-BvAlTkp1.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};

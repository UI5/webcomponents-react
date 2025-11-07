import{j as e}from"./iframe-BCh37-GP.js";import{useMDXComponents as n}from"./index-E1HFg4gZ.js";import{I as r,F as s}from"./CommandsAndQueries-BaHr-COi.js";import{M as l,C as a}from"./blocks-CS5FlooX.js";import"./Tag-B_Qpe0TE.js";import"./index-DKQ6JIGw.js";import"./copy-7yIahvRv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-P4Nd5R97.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JFrdX4G8.js";import"./index-CTMnj1ho.js";import"./index-Bv89sSp1.js";import"./Link-BSH3TTIl.js";import"./index-BonVTnTn.js";import"./index-OKdWlUZi.js";import"./index-DMXHNrMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCrrvnNY.js";import"./addCustomCSSWithScoping-5ena9gAo.js";import"./index-DTOYUFlO.js";import"./information-3OCHA3NQ.js";import"./sys-enter-2-C8D5BzD8.js";import"./alert-DXLNWSuU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHnZbtsD.js";import"./delete-EE4bTGjq.js";import"./settings-CWOgdnOQ.js";import"./NoData-EYRIcvpd.js";import"./IllustratedMessage-eRr0GKWI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CAirgaaj.js";import"./index-D1dCHV7D.js";import"./index-tKT3JZMY.js";import"./slim-arrow-down-BmoCgPng.js";import"./Input-BV2Kpufx.js";import"./ResponsivePopoverCommon.css-Dj0T0ryX.js";import"./ValueStateMessage.css-BPaxhl46.js";import"./Suggestions.css-d96Y8STr.js";import"./ListBoxItemGroupTemplate-DKRgKg-W.js";import"./ComboBoxItemGroup-BghtySqg.js";import"./ListItemBaseTemplate-DK7kW4zT.js";import"./Token-swetDNES.js";import"./ScrollEnablement-d21bdta6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bb53oDTA.js";import"./ToggleButton-D4fUNdSY.js";import"./SuggestionItem-BQ2GorAX.js";import"./index-CyfUcvzJ.js";import"./Option-PulQRzr2.js";import"./index-Di7fqct-.js";import"./SegmentedButton-BunRIwoi.js";import"./index-Bgknzbhu.js";import"./Select-Nz2Hcbg2.js";import"./InvisibleMessage-DkbocxqO.js";import"./slim-arrow-down-CGh4l6r9.js";import"./index-BsudtbIQ.js";import"./index-BD7ZfrRW.js";import"./index-CUx_S0wg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl-mfjch.js";import"./group-2-CuvWrUYC.js";import"./sort-descending-C-mIF84h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dst6fVDY.js";import"./utils-BnTi3cfr.js";import"./index-CxPcQIig.js";import"./index-BVX4pL2A.js";import"./index-Dm-Pc1i9.js";import"./navigation-down-arrow-BQvpfFl5.js";import"./navigation-right-arrow-DpZd7grt.js";import"./navigation-right-arrow-CfgRq-yV.js";import"./useCurrentTheme-Bz0a4Npu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8yBXMrH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRezPATc.js";import"./paper-plane-Dx3V_-Uw.js";import"./index-CZ6TAeEd.js";import"./less-Bxijlz1Z.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

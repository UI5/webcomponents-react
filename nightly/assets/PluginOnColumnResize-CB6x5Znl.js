import{j as o}from"./iframe-DmoM9f-3.js";import{useMDXComponents as n}from"./index-B20arXE0.js";import{I as r,F as m}from"./CommandsAndQueries-D46yw8vq.js";import{M as p,C as s}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import"./copy-CLLjPrKq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BA-x-C0f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./index-D10NIdcs.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxmd5KNC.js";import"./delete-BafmMaQL.js";import"./settings-DABExvul.js";import"./NoData-BgI5Fxj4.js";import"./IllustratedMessage-jY-A97pw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-fU_rFE.js";import"./index-DKnHiKv6.js";import"./index-C5zCfksZ.js";import"./slim-arrow-down-D9YsUWAc.js";import"./Input-YzFTUt5T.js";import"./ResponsivePopoverCommon.css-CYbIQSV_.js";import"./ValueStateMessage.css-Bt2Hz2Bm.js";import"./Suggestions.css-CF_t5b_V.js";import"./ListBoxItemGroupTemplate-CO5gMWQe.js";import"./ComboBoxItemGroup-CUCxyYDG.js";import"./ListItemBaseTemplate-CnPU8rrX.js";import"./Token-ERY8FHBV.js";import"./ScrollEnablement-C3qwFx38.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJDVbUng.js";import"./ToggleButton-DEiEgDU3.js";import"./SuggestionItem-B2lniP2C.js";import"./index-CVEhOAGU.js";import"./Option-Bl_cRkCF.js";import"./index-D_A_mIMd.js";import"./SegmentedButton-BJxy3Jl0.js";import"./index-Bc77BXWZ.js";import"./Select-CuAVIuQe.js";import"./InvisibleMessage-DxxG7hrg.js";import"./slim-arrow-down-CR7ZcCgm.js";import"./index-CmHMrHW6.js";import"./index-lVw2qlav.js";import"./index-C3g1EMi_.js";import"./index-hwt2sM8N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dm4NGm5T.js";import"./group-2-BKpf1dk-.js";import"./sort-descending-BLlJfs1C.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CfmXpjSG.js";import"./utils-CX26tpMm.js";import"./index-C5hbXSHM.js";import"./index-4PnBH_j5.js";import"./index-CCKJVryI.js";import"./navigation-down-arrow-raxqbgPM.js";import"./navigation-right-arrow-j_ofrPu8.js";import"./navigation-right-arrow-Bc7TH_0C.js";import"./useCurrentTheme-xHMJsLTO.js";import"./index-CQscq9AO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bl9d5JMP.js";import"./paper-plane-D5XrZk42.js";import"./index-CF4Usvtu.js";import"./less-BemCrw5W.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(r,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};

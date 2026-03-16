import{j as o}from"./iframe-BDg7FSoj.js";import{useMDXComponents as r}from"./index-CfS6z3MT.js";import{I as n}from"./CommandsAndQueries-BgLg0c2t.js";import{M as m,C as p}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import"./copy-LtMPx_h3.js";import{F as s}from"./Footer-DcSScdvn.js";import"./PageNotFound-Cz7A_GPz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CgLPWJdv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DweKFefr.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./index-CtXj8tW6.js";import"./index-Ca5wJMxN.js";import"./index-DKaIOimk.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./index-ClFnafIK.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CVFEN-wi.js";import"./delete-Djyzt4EC.js";import"./settings-CjYJ2CHk.js";import"./NoData-C5_l_MOE.js";import"./NoFilterResults-HqlK2bIf.js";import"./index-CHhs1TdG.js";import"./IllustratedMessage-BgCoMSTD.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CavH8dni.js";import"./Input-DPh2xJTy.js";import"./ResponsivePopoverCommon.css-YN2yb077.js";import"./ValueStateMessage.css-CZSQW4Xi.js";import"./Suggestions.css-CoI0xqid.js";import"./ListBoxItemGroupTemplate-DVkdxE4m.js";import"./ComboBoxItemGroup-B7lumk6S.js";import"./ListItemBaseTemplate-COnbdXmo.js";import"./Token-CyYhzpuK.js";import"./ScrollEnablement-CJNzrglF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9BXoiP3.js";import"./ToggleButton-C756d9Qn.js";import"./multiselect-all-B_axlRDi.js";import"./SuggestionItem-DeimWAUM.js";import"./index-Cdhi9950.js";import"./Option-Dz3WWHcz.js";import"./index-BwSNURHE.js";import"./SegmentedButton-DZh5fXjg.js";import"./index-C9V-0iTY.js";import"./Select-Br85qeyo.js";import"./InvisibleMessage-DTrhxE2q.js";import"./index-lWGkx38J.js";import"./index-D8AeP6Iz.js";import"./index-DLeoOT8k.js";import"./index-XZbO5RWz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pxS513Zf.js";import"./group-2-DQqG6IcW.js";import"./sort-descending-CoH2Moiz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYaJ9Gcz.js";import"./utils-Chkhn7io.js";import"./index-_v6E_SiW.js";import"./index-Do6_Z1_e.js";import"./index-CiGBzV4y.js";import"./navigation-down-arrow-DyYI-mnK.js";import"./navigation-right-arrow-_kG0lFZX.js";import"./navigation-right-arrow-ByngEGsa.js";import"./useCurrentTheme-CSxpKvX6.js";import"./index-B7uqwTBo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQKn5Zaa.js";import"./paper-plane-DLTGccM2.js";import"./index-DPqF1ogR.js";import"./less-MXFQYBDW.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};

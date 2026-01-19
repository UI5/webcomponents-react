import{j as o}from"./iframe-CGYWU8Zw.js";import{useMDXComponents as n}from"./index-CiFONtpN.js";import{I as r,F as m}from"./CommandsAndQueries-3p6jyLf7.js";import{M as p,C as s}from"./blocks-DZmaAmAP.js";import"./Tag-DxQZH2nA.js";import"./index-C8k79uzV.js";import"./copy-ButtKxyE.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CsIPtkrn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn68RHh4.js";import"./index-IcIo-7M4.js";import"./index-Bi-laTlO.js";import"./Link-BAlxiTXd.js";import"./index-BpDmHZtn.js";import"./index-DOxDv7Xi.js";import"./index-mH5f_RVl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRQkasjF.js";import"./addCustomCSSWithScoping-DNAczkus.js";import"./index-C1_F4VAw.js";import"./information-Dv2HF6Ui.js";import"./sys-enter-2-vy1Ip4uQ.js";import"./alert-BcA2abtX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQJSAvK6.js";import"./delete-B6O2JaIS.js";import"./settings-SpDQw2Vq.js";import"./NoData-bysabFUy.js";import"./IllustratedMessage-CUeEBz-a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-8dbC-gN_.js";import"./index-ot_Vs5SX.js";import"./index-DdRBnYSU.js";import"./slim-arrow-down-KrTHML7Y.js";import"./Input-3AAsME8j.js";import"./ResponsivePopoverCommon.css-4GPhK6Ks.js";import"./ValueStateMessage.css-y9BzQC21.js";import"./Suggestions.css-E_zTpNLY.js";import"./ListBoxItemGroupTemplate-CWaB1uAI.js";import"./ComboBoxItemGroup-CvF6QpNn.js";import"./ListItemBaseTemplate-BrUrTP7s.js";import"./Token-B_03GxpZ.js";import"./ScrollEnablement-SG6LJXEq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DnUU-rKN.js";import"./ToggleButton-B0JQSluf.js";import"./SuggestionItem-7QP2JsqC.js";import"./index-D2O8IK0Y.js";import"./Option-C-i06TU1.js";import"./index-D-wDCcJv.js";import"./SegmentedButton-Cj4a5li5.js";import"./index-BpQt2xX8.js";import"./Select-xEHU_Jve.js";import"./InvisibleMessage-Cry_VVZD.js";import"./slim-arrow-down-BVAuIuoE.js";import"./index-CVglYbsF.js";import"./index-C9CUNSTS.js";import"./index-DdDzQOK5.js";import"./index-DrrvpZW3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTW5WVB_.js";import"./group-2-r-nrfnRe.js";import"./sort-descending-klOkrTUA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De8BjJaL.js";import"./utils-fPRKtnar.js";import"./index-DLgRUgqV.js";import"./index-D7n88VO3.js";import"./index-Dzq4A1VN.js";import"./navigation-down-arrow-C_PatvXC.js";import"./navigation-right-arrow-BWvpLWqD.js";import"./navigation-right-arrow-8E2izI9D.js";import"./useCurrentTheme-DWIF38NU.js";import"./index-Dk1eqQ67.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQbatNcW.js";import"./paper-plane-J4zNAVa6.js";import"./index-CpwJUAOc.js";import"./less-D6dTBaBl.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

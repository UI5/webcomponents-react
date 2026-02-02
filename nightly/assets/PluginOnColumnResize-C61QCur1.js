import{j as o}from"./iframe-D9fHiNXF.js";import{useMDXComponents as n}from"./index-DRx499Oz.js";import{I as r,F as m}from"./CommandsAndQueries-CDyFXIce.js";import{M as p,C as s}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import"./copy-FG9bHXhV.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Qm_vQfsf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./index-BVc7ik8a.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPAjTpyE.js";import"./delete-kRoeeufp.js";import"./settings-BjOnEk3Y.js";import"./NoData-DS929yuO.js";import"./IllustratedMessage-D7rcrpEV.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-By9GXzdr.js";import"./index-BIpQKVrj.js";import"./index-uvfEns-9.js";import"./slim-arrow-down-COoxlr3U.js";import"./Input-CCJrpN8k.js";import"./ResponsivePopoverCommon.css-B2qfRnNF.js";import"./ValueStateMessage.css-DyMGuFCu.js";import"./Suggestions.css-s007qcu9.js";import"./ListBoxItemGroupTemplate-fS2c8S8u.js";import"./ComboBoxItemGroup-w20Oyw65.js";import"./ListItemBaseTemplate-BhNv4eWh.js";import"./Token-CvyNfotg.js";import"./ScrollEnablement-COS0Rc-8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BBXUErcD.js";import"./ToggleButton-CVAyR1od.js";import"./SuggestionItem-BbBOeYnY.js";import"./index-BvApMHkq.js";import"./Option-55orDd_d.js";import"./index-D-dRLaQQ.js";import"./SegmentedButton-Dtg_OeYG.js";import"./index-Cw3jzX1x.js";import"./Select-CF4_xxsY.js";import"./InvisibleMessage-sWP7KXqk.js";import"./slim-arrow-down-CGx4RFlV.js";import"./index-Bnwbq-C5.js";import"./index-56WZLY9b.js";import"./index-BrYCVZew.js";import"./index-C-gG0abr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTaVzY2z.js";import"./group-2-ByHTkrwd.js";import"./sort-descending-CnESAHVK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DK0_Jxfh.js";import"./utils-4XJByc2K.js";import"./index-Mf30Azwl.js";import"./index-DWP_RQMm.js";import"./index-PLRKK6I8.js";import"./navigation-down-arrow-UUvc_8Lg.js";import"./navigation-right-arrow-Uxxzktt1.js";import"./navigation-right-arrow-bK8_sR2Z.js";import"./useCurrentTheme-DlC_INVQ.js";import"./index-uBbepzyZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByZPFV9T.js";import"./paper-plane-oz9CuSrg.js";import"./index-Bxyp0YjT.js";import"./less-QRjFxrUk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

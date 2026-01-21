import{j as o}from"./iframe-CdfVheEM.js";import{useMDXComponents as n}from"./index-Bn3z_2-D.js";import{I as r,F as m}from"./CommandsAndQueries-DnpuXHMh.js";import{M as p,C as s}from"./blocks-B64qhbcn.js";import"./Tag-BOnQq-w3.js";import"./index-Xx3LO7hZ.js";import"./copy-CQYljM5l.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CdHvl2gt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bh5HGBh3.js";import"./index-BBHuJoK3.js";import"./index-D71kNSph.js";import"./Link-CAF8tfZ3.js";import"./index-BnJ9pgT-.js";import"./index-D1Nbk9KW.js";import"./index-BdSIKWOt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUCJFgFK.js";import"./addCustomCSSWithScoping-csKwFrn6.js";import"./index-BkqNBKqG.js";import"./information-CDNUd2FJ.js";import"./sys-enter-2-m6urcdRb.js";import"./alert-DAUraGPR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-MEyy_OdE.js";import"./delete-DQmyWOyY.js";import"./settings-COcXG8h3.js";import"./NoData-DcxAeqV1.js";import"./IllustratedMessage-B3a6NIT2.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BgUA9kLe.js";import"./index-Bh2r_4yQ.js";import"./index-CzcQkJTF.js";import"./slim-arrow-down-D4oCbCnX.js";import"./Input-Bdhewrt9.js";import"./ResponsivePopoverCommon.css-DcZbPFvu.js";import"./ValueStateMessage.css-CfDs1rEd.js";import"./Suggestions.css-BdX9EgDU.js";import"./ListBoxItemGroupTemplate-8UCIFoUO.js";import"./ComboBoxItemGroup-x2TGee-B.js";import"./ListItemBaseTemplate-oDeWAQcb.js";import"./Token-BXxrasGo.js";import"./ScrollEnablement-C6CUE2hY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x_g1yDzG.js";import"./ToggleButton-COVKMN5A.js";import"./SuggestionItem-MWxUSQN7.js";import"./index-PYawlrtB.js";import"./Option-BUhhlAsc.js";import"./index-BJLAYe_t.js";import"./SegmentedButton-BOjI_yef.js";import"./index-CmKIPpc4.js";import"./Select-CY0l6TMc.js";import"./InvisibleMessage-COMllSIK.js";import"./slim-arrow-down-C79oKx1O.js";import"./index-DBS5gnra.js";import"./index-KQBqeoLi.js";import"./index-BI6OpvzA.js";import"./index-DC3a-gmy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nZrai-M2.js";import"./group-2-CNZ0ZgLY.js";import"./sort-descending-CEKP_D9I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-d7HncG-i.js";import"./utils-Cd8HpNBh.js";import"./index-DNPX4N-_.js";import"./index-DmA_99Px.js";import"./index-CDWK5O7C.js";import"./navigation-down-arrow-DpnQsS0V.js";import"./navigation-right-arrow-Dxz9thKC.js";import"./navigation-right-arrow-DZkMVdUz.js";import"./useCurrentTheme-Cdk1W9u5.js";import"./index-BpQg-76X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPpwcO6G.js";import"./paper-plane-C7_1OrVj.js";import"./index-CUP3o2CN.js";import"./less-BzMFUFzl.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-ERwSzs3g.js";import{useMDXComponents as n}from"./index-C_Wbk-9f.js";import{I as r,F as m}from"./CommandsAndQueries-Dd3ZB-Zm.js";import{M as p,C as s}from"./blocks-CPggC12N.js";import"./Tag-B-CdIpAx.js";import"./index-CaDxd8lJ.js";import"./copy-CudSiVH8.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dzpuhj_j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0Kgz2KY.js";import"./index-CL--3ayL.js";import"./index-I8Rn_Xtk.js";import"./Link-BEsTVss7.js";import"./index-RyYuggn2.js";import"./index--5AI5DCY.js";import"./index-CZ9mn71l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxRB-GRE.js";import"./addCustomCSSWithScoping-Clegv1AW.js";import"./index-BcvsAi-y.js";import"./information-CHdxYb5g.js";import"./sys-enter-2-CJZeFu0K.js";import"./alert-DqHHhUpv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dqn-jABc.js";import"./delete-Bu7VmTYp.js";import"./settings-CQ_5VNNI.js";import"./NoData-D2Tt32Od.js";import"./IllustratedMessage-B_rNMhob.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-7XsDJsR0.js";import"./index-CKj1ghFb.js";import"./index-VEHANs_d.js";import"./slim-arrow-down-2J31Ucf0.js";import"./Input-DSupStK3.js";import"./ResponsivePopoverCommon.css-DReQi8ZR.js";import"./ValueStateMessage.css-Lf_StamT.js";import"./Suggestions.css-BIz0Zv49.js";import"./ListBoxItemGroupTemplate-DUimE2BY.js";import"./ComboBoxItemGroup-B_cfzOqG.js";import"./ListItemBaseTemplate-BQH3JJKy.js";import"./Token-DX8SqOz4.js";import"./ScrollEnablement-BD4VIdDp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ck-G_e39.js";import"./ToggleButton-6e7zC1X-.js";import"./SuggestionItem-BmiMZKr8.js";import"./index-BIALcVNb.js";import"./Option-Br2Csiuj.js";import"./index-BJrpf7k8.js";import"./SegmentedButton-BjzAZg81.js";import"./index-CqF2GYF8.js";import"./Select-Uz-gzee2.js";import"./InvisibleMessage-CtK1BuKZ.js";import"./slim-arrow-down-BdCansBN.js";import"./index-CA_zt6zs.js";import"./index-DvXXaKIh.js";import"./index-f2S0or9y.js";import"./index-HN2JJ6Qh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wg2A7PH5.js";import"./group-2-t0uZVGoA.js";import"./sort-descending-DTK9LhKi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-YnPiPISE.js";import"./utils-DWJXL1ej.js";import"./index-BrPS-6K1.js";import"./index-BYHL4ln3.js";import"./index-Dq6Fu5U-.js";import"./navigation-down-arrow-vpfptFd4.js";import"./navigation-right-arrow-DiQFcMBc.js";import"./navigation-right-arrow-CzKfQRKc.js";import"./useCurrentTheme-DRl35Uzu.js";import"./index-BDQR7c08.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BDBjPcau.js";import"./paper-plane-D1nv_q0M.js";import"./index-CaV8_vUx.js";import"./less-Dmpu7iye.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

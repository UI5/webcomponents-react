import{j as o}from"./iframe-CHtLWowq.js";import{useMDXComponents as n}from"./index-feVj8Ixc.js";import{I as r,F as m}from"./CommandsAndQueries-DR5czvWY.js";import{M as p,C as s}from"./blocks-nN5rw7aP.js";import"./Tag-C6iX9S_m.js";import"./index-ByEvImQf.js";import"./copy-DQeKak9d.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BAd-a0ov.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDqXh-7y.js";import"./index-CuuHGpOq.js";import"./index-BgmENQvG.js";import"./Link-No0hza1O.js";import"./index-CMG_lNnl.js";import"./index-XFju5FGb.js";import"./index-D94_Q-PW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DZJl74Y9.js";import"./addCustomCSSWithScoping-CagFc4YE.js";import"./index-Bf7Ep3_S.js";import"./information-CgT5QDDH.js";import"./sys-enter-2-X-uLXTXK.js";import"./alert-BD_DwGQA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B8YBAHqp.js";import"./delete-Did7L4hm.js";import"./settings-Hqz6CNrz.js";import"./NoData-BthMFeeR.js";import"./IllustratedMessage-CNpK_c-9.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DU5KpDvq.js";import"./index-CHh9zawM.js";import"./index-Ds9oFx6S.js";import"./slim-arrow-down-Bl9kmMTg.js";import"./Input-_Chin8aU.js";import"./ResponsivePopoverCommon.css-BmG1be8B.js";import"./ValueStateMessage.css-D-dMhYxp.js";import"./Suggestions.css-zGIh6gRS.js";import"./ListBoxItemGroupTemplate-BpLHc9An.js";import"./ComboBoxItemGroup-rF-e9FZE.js";import"./ListItemBaseTemplate-CL0KxrsV.js";import"./Token-1bdP-qy8.js";import"./ScrollEnablement-ye8Tkvh6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHXDAL6s.js";import"./ToggleButton-CUCNDDOO.js";import"./SuggestionItem-dlFolDmP.js";import"./index-BhWIeZ_z.js";import"./Option-CfmrmqxB.js";import"./index-BcVuoJlI.js";import"./SegmentedButton-BgNgsNQ9.js";import"./index-C7EtYMlg.js";import"./Select-DoEMEyE5.js";import"./InvisibleMessage-BrUgcFEx.js";import"./slim-arrow-down-BGN2WRYG.js";import"./index-Dw80LcOq.js";import"./index-Bm0U64at.js";import"./index-WMmfi-ne.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nvGUijt2.js";import"./group-2-Bydnd2Pu.js";import"./sort-descending-DADrrbzv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6597P5h.js";import"./utils-0fopir6W.js";import"./index-DIe0rbb4.js";import"./index-BgLFYw54.js";import"./index-CHBYKSN4.js";import"./navigation-down-arrow-qwkJsIFx.js";import"./navigation-right-arrow-CE9lGglE.js";import"./navigation-right-arrow-DwKK_E_o.js";import"./useCurrentTheme-XYPwDYan.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0cKueXn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjk4hS4a.js";import"./paper-plane-CLZXIdYp.js";import"./index-DSdDmFJ0.js";import"./less-1S2LblnP.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

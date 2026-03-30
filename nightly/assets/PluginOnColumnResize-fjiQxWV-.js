import{j as o}from"./iframe-DoasxszC.js";import{u as n,M as r,C as m}from"./blocks-DBX_G92C.js";import{I as p}from"./CommandsAndQueries-Bg5oLjv_.js";import"./Tag-DCvAsOsB.js";import"./index-Bkq6_nAR.js";import"./copy-Bp1X0rrX.js";import{F as s}from"./Footer-BMRkHXkr.js";import"./PageNotFound-DlCPYtCu.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CwBfsyPl.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CvHgBQZc.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./index-CY9OUOeY.js";import"./index-C3bV2_l1.js";import"./index-DUsiHM8W.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./index-BuSM4uik.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-FUb71t84.js";import"./delete-BNsJIylK.js";import"./settings-DIZQIGHO.js";import"./NoData-CPifF9dk.js";import"./NoFilterResults-pjvoSbdT.js";import"./index-CS1yMP3E.js";import"./IllustratedMessage-D0QVBew0.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-B7aSEDJ1.js";import"./Input-xqXXZk7V.js";import"./ResponsivePopoverCommon.css-ClOyFMHE.js";import"./ValueStateMessage.css-CQfpuydp.js";import"./Suggestions.css-DgSzBLOP.js";import"./ListBoxItemGroupTemplate-CnyFVUQh.js";import"./ComboBoxItemGroup-C6J1oEbB.js";import"./ListItemBaseTemplate-56RYrvsT.js";import"./Token-Cy2nK-8H.js";import"./ScrollEnablement-Ct30bxH4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-f5cQaHwh.js";import"./ToggleButton-4lEDIg8i.js";import"./multiselect-all-CrwvgfDL.js";import"./SuggestionItem-BUm69vbz.js";import"./index-DujjVqPC.js";import"./Option-qr-0CuEo.js";import"./index-DKO_VCMs.js";import"./SegmentedButton-C_BxO-nh.js";import"./index-Bfc0n9xu.js";import"./Select-DyTpHhQN.js";import"./InvisibleMessage-CpFdH-Af.js";import"./index-Dodkzra4.js";import"./index-B5xDE1PM.js";import"./index-B3gSZvjn.js";import"./index-DXinWdIe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXOaaD8X.js";import"./group-2-DOt9casX.js";import"./sort-descending-CSa9QeUi.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BLz5gwPO.js";import"./utils-CI2Ukgk8.js";import"./index-CpTTgPof.js";import"./index-C7-ObCq_.js";import"./index-DfjuUSBw.js";import"./navigation-down-arrow-BAtAokVf.js";import"./navigation-right-arrow-BiRIP0c6.js";import"./navigation-right-arrow-CIOXuOhx.js";import"./useCurrentTheme-CsrucE5U.js";import"./index-D8ci1hZC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BFJsr9kq.js";import"./paper-plane-CktOgF6u.js";import"./index-KS5Bmaht.js";import"./less-CflKdUlr.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(p,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function Eo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Eo as default};

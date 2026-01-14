import{j as o}from"./iframe-DsoLxTrs.js";import{useMDXComponents as n}from"./index-BYp40d_0.js";import{I as r,F as m}from"./CommandsAndQueries-CnpygbQ5.js";import{M as p,C as s}from"./blocks-BdFCA8eW.js";import"./Tag-CTTSF-tU.js";import"./index-DgqU0bHc.js";import"./copy-BFj7VYi7.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Iyd7zZv9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DoD5C1cK.js";import"./index-CgwlM72N.js";import"./index-BUCXDqHN.js";import"./Link-B3HsQBkt.js";import"./index-_wPX9_fg.js";import"./index-CcP8H8eG.js";import"./index-DUtNsIlX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CN1rIyKa.js";import"./addCustomCSSWithScoping-Bri9Hmu_.js";import"./index-CNxSz0Hc.js";import"./information-Dif64wGJ.js";import"./sys-enter-2-CF1sb48s.js";import"./alert-DcNO-1uE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Rs6p4UaS.js";import"./delete-CrMdIFDN.js";import"./settings-B-r3hKjY.js";import"./NoData-DSQeZXJt.js";import"./IllustratedMessage-C_polCAW.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BEkl_rEK.js";import"./index-BFkyaubq.js";import"./index-BX_gSHjC.js";import"./slim-arrow-down-CMk67T2s.js";import"./Input-Dk2NFph3.js";import"./ResponsivePopoverCommon.css-DQ_Sc_46.js";import"./ValueStateMessage.css-DnTQjXaN.js";import"./Suggestions.css-BdMDw5En.js";import"./ListBoxItemGroupTemplate-iQcJyyOU.js";import"./ComboBoxItemGroup-Be6pRmko.js";import"./ListItemBaseTemplate-CKQQ-jkb.js";import"./Token-zMAsq7gF.js";import"./ScrollEnablement-DmTjTt1h.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CR5T5AOq.js";import"./ToggleButton-BO_VH3L2.js";import"./SuggestionItem-DgNMmhut.js";import"./index-DuMwI-OD.js";import"./Option-CeFMwTVm.js";import"./index-DYhrmhyV.js";import"./SegmentedButton-DJG8Ffa8.js";import"./index-B6jXq1u6.js";import"./Select-ChYmXvgz.js";import"./InvisibleMessage-C5xYCLxY.js";import"./slim-arrow-down-DCGoLBPd.js";import"./index-CnIPWkV8.js";import"./index-DUlHHXex.js";import"./index-CroKASKd.js";import"./index-CBWozBn3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMjwBPHh.js";import"./group-2-_4bewaxg.js";import"./sort-descending-Dcet9Hq8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BrAz6JL2.js";import"./utils-DzaJNGLM.js";import"./index-C5Vq8szC.js";import"./index-CGJIVMir.js";import"./index-DXnPEmIf.js";import"./navigation-down-arrow-CfyMbTT9.js";import"./navigation-right-arrow-CFibnujH.js";import"./navigation-right-arrow--m1ezy9Z.js";import"./useCurrentTheme-CnQCPTuN.js";import"./index-ftQv3YgX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-gvYB5pwp.js";import"./paper-plane-DRJ7V1ZN.js";import"./index-B_8dxKRD.js";import"./less-BNhNO2Qi.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

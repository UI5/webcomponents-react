import{j as o}from"./iframe-BZdybOkV.js";import{useMDXComponents as n}from"./index-BK2w2T2j.js";import{I as r,F as m}from"./CommandsAndQueries-6n7MF1sx.js";import{M as p,C as s}from"./blocks-CP8RdzkU.js";import"./Tag-BzbxKur3.js";import"./index-DK3P8KDJ.js";import"./copy-CIp50y-g.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bs_3zcjA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./index-BZ_ngRjy.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DmiM3j2F.js";import"./delete-Bn4jrtgc.js";import"./settings-CmB7Fgst.js";import"./NoData-BBWYakMZ.js";import"./IllustratedMessage-DgDtQSiT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-_1OOSCTk.js";import"./index-CpgEwEY9.js";import"./index-CZpKdl4q.js";import"./slim-arrow-down-BbBe3zkt.js";import"./Input-YhMtZ58-.js";import"./ResponsivePopoverCommon.css-C6Zy80iY.js";import"./ValueStateMessage.css-CodrIykW.js";import"./Suggestions.css-DFz-TQwT.js";import"./ListBoxItemGroupTemplate-DbGM3AkW.js";import"./ComboBoxItemGroup-DmXq2bTE.js";import"./ListItemBaseTemplate-osJNy9A-.js";import"./Token-Dp8jCEo2.js";import"./ScrollEnablement-DR3-8lGc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqswipPZ.js";import"./ToggleButton-DjDYf0VM.js";import"./SuggestionItem-CEjQwNps.js";import"./index-CFc0nQPH.js";import"./Option-oF9c-kTt.js";import"./index-ELRjcJ71.js";import"./SegmentedButton-CuCGezZR.js";import"./index-DBySEyUw.js";import"./Select-D9hNZoac.js";import"./InvisibleMessage-DKzjYfdj.js";import"./slim-arrow-down-CDOwWRZe.js";import"./index-Be1awQtY.js";import"./index-CPFKyy5f.js";import"./index-CfUkuybQ.js";import"./index-C13ceQxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter--kHfYTp1.js";import"./group-2-Bsl3ML8j.js";import"./sort-descending-BdNeL7VE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dovy5LXr.js";import"./utils-DhnX8mLU.js";import"./index-Dts70RbM.js";import"./index-C2zzZlu5.js";import"./index-DkPnj5bQ.js";import"./navigation-down-arrow--7f146sQ.js";import"./navigation-right-arrow-CVnmAike.js";import"./navigation-right-arrow-YVh7qiaT.js";import"./useCurrentTheme-BgFcBM5V.js";import"./index-n0APwmh8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX_WkTUl.js";import"./paper-plane-K10fV-mG.js";import"./index-CINyJYO9.js";import"./less-tox92RAM.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

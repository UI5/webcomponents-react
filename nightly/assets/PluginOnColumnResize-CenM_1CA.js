import{j as o}from"./iframe-kJfrPaD1.js";import{useMDXComponents as n}from"./index-BKWPRaiV.js";import{I as r,F as m}from"./CommandsAndQueries-D7WkRU72.js";import{M as p,C as s}from"./blocks-5RdvzEbY.js";import"./Tag-Cq_rR_bf.js";import"./index-ZnQNPJfl.js";import"./copy-yyYbNeMi.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DxPZYTqE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRo0yro_.js";import"./index-C-a_iLSi.js";import"./index-CDtmBsTj.js";import"./Link-DLuGgAei.js";import"./index-Ccpr0pFg.js";import"./index-DxXcjV97.js";import"./index-CdjQ1wSl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVMILbqZ.js";import"./addCustomCSSWithScoping-7vdeOKdl.js";import"./index-CmBVI-17.js";import"./information-CMkzOfg7.js";import"./sys-enter-2-0CjTM9eF.js";import"./alert-T81DFfqo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjEWHoPI.js";import"./delete-B8AkKUGe.js";import"./settings-DFQp6TpX.js";import"./NoData-D0Y_eZMR.js";import"./IllustratedMessage-C-bbdW0n.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DNobnLuo.js";import"./index-D4931-O4.js";import"./index-RE4LKkGr.js";import"./slim-arrow-down-CPVGY8Iq.js";import"./Input-BgSomOX4.js";import"./ResponsivePopoverCommon.css-BjX77BWF.js";import"./ValueStateMessage.css-ClrIRLgY.js";import"./Suggestions.css-DMwhx4yY.js";import"./ListBoxItemGroupTemplate-BKa_M5Lx.js";import"./ComboBoxItemGroup-UT2r-Dd2.js";import"./ListItemBaseTemplate-DW1MLGCC.js";import"./Token-DKZ6n4xd.js";import"./ScrollEnablement-DxFtCIlG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmvDkQUO.js";import"./ToggleButton-CNQqAKOh.js";import"./SuggestionItem-4Vshqset.js";import"./index-B8IotaSE.js";import"./Option-DE3CbLxG.js";import"./index-hpLgy0UK.js";import"./SegmentedButton-DQjk1YVY.js";import"./index-BuQpOWSs.js";import"./Select-Dd1CrZ-1.js";import"./InvisibleMessage-CIztzzyo.js";import"./slim-arrow-down-6heX8X2x.js";import"./index-C9yFq3ow.js";import"./index-ZOfLRVnY.js";import"./index-BihC8B6K.js";import"./index-CewkkqmN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMlWiKR7.js";import"./group-2-D5N4yOqU.js";import"./sort-descending-BKM4goFg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cq09Xc-r.js";import"./utils-hSvJEbvk.js";import"./index-DI_BJW84.js";import"./index-DbuJnxWY.js";import"./index-DuEmXK1Q.js";import"./navigation-down-arrow-Td4O0pAQ.js";import"./navigation-right-arrow-DconCGaA.js";import"./navigation-right-arrow-DnMrHUAK.js";import"./useCurrentTheme-B07ClayR.js";import"./index-D2aYauVx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClW0lnYp.js";import"./paper-plane-fozhEJ_Q.js";import"./index-B96fduB-.js";import"./less-BdeGY2H5.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

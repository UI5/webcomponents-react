import{j as o}from"./iframe-eDai9lNh.js";import{useMDXComponents as n}from"./index-DWaT93aF.js";import{I as r,F as m}from"./CommandsAndQueries-DdbJ0tNe.js";import{M as p,C as s}from"./blocks-D3QMf_Nj.js";import"./Tag-BEY0r0J2.js";import"./index-CzhxwyLf.js";import"./copy-D01F59bh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CWUcTBnU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cch7pNGQ.js";import"./index-lMWu8Jr6.js";import"./index-6ZlW-CM4.js";import"./Link-ZNB4Pnda.js";import"./index-DjL8CZ6c.js";import"./index--RcUy8xr.js";import"./index-asMoAFqv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbjGEabH.js";import"./addCustomCSSWithScoping-Cxdlbo61.js";import"./index-CfUZ5M--.js";import"./information-DqhxapEK.js";import"./sys-enter-2-Cyu-GNYt.js";import"./alert-p2WK74VT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8v7FfP_.js";import"./delete-CY-VLVEq.js";import"./settings-C0rZHhe-.js";import"./NoData-UN9eJyec.js";import"./IllustratedMessage-DYcYHt7h.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CD-7g8gm.js";import"./index-BTzKR5qJ.js";import"./index-go4C0tgo.js";import"./slim-arrow-down-kG6DCveM.js";import"./Input-Bqwo-D_6.js";import"./ResponsivePopoverCommon.css-Cub4Z5jf.js";import"./ValueStateMessage.css-DUX2b4_-.js";import"./Suggestions.css-CJbHgiSk.js";import"./ListBoxItemGroupTemplate-DNewmAce.js";import"./ComboBoxItemGroup-6nYAGsza.js";import"./ListItemBaseTemplate-CGHSadDi.js";import"./Token-BFth0cqr.js";import"./ScrollEnablement-CQYct29a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8y3n4Wp.js";import"./ToggleButton-TbU_TYbJ.js";import"./SuggestionItem-Zqcf61Si.js";import"./index-CAHo1qxD.js";import"./Option-s7hK9Co0.js";import"./index-CSrE-u2R.js";import"./SegmentedButton-CP9Hx__l.js";import"./index-Cfn4eBpH.js";import"./Select-Cggb-coC.js";import"./InvisibleMessage-CerZda4F.js";import"./slim-arrow-down-DXROzh0h.js";import"./index-IBifB5M4.js";import"./index-CCqTjS-e.js";import"./index-CUAqmRcs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-StgZWZHS.js";import"./group-2-ClC4Gayj.js";import"./sort-descending-BaJ0iwyz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BMeGntJ3.js";import"./utils-BjMUIUWP.js";import"./index-B8-6hSHC.js";import"./index-D2aXwz5o.js";import"./index-Q2bGr-fD.js";import"./navigation-down-arrow-Bsq7vo40.js";import"./navigation-right-arrow-AG7Z0JW-.js";import"./navigation-right-arrow-DCN3UIyQ.js";import"./useCurrentTheme-Bev_7rJ0.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8QR7ZaE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BKoibY1H.js";import"./paper-plane-CUDWlEvw.js";import"./index-DbIiH5o6.js";import"./less-DMq8Sa1p.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

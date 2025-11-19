import{j as o}from"./iframe-BdLp08tI.js";import{useMDXComponents as n}from"./index-L7M025bj.js";import{I as r,F as m}from"./CommandsAndQueries-A8ohCY01.js";import{M as p,C as s}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import"./copy-CAz8pLUN.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-yn0tvp-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./index-DEh5uPtQ.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cc5ACQhd.js";import"./delete-C129Vo-j.js";import"./settings-CU9DNY2V.js";import"./NoData-CdpbHVsl.js";import"./IllustratedMessage-aNFXY5tv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B6AfN2ty.js";import"./index-BwfJRUg8.js";import"./index-DbJZSO19.js";import"./slim-arrow-down-Jk0gqFeP.js";import"./Input-BkxHEOLf.js";import"./ResponsivePopoverCommon.css-DUrNz7RL.js";import"./ValueStateMessage.css-KNUuhM7R.js";import"./Suggestions.css-DRL4VnmY.js";import"./ListBoxItemGroupTemplate-BswdqGi0.js";import"./ComboBoxItemGroup-DmWoR2D3.js";import"./ListItemBaseTemplate-q7lVjUmU.js";import"./Token-BUZ_-lS4.js";import"./ScrollEnablement-DKU4KjEY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NrFCjmp4.js";import"./ToggleButton-0L16aZ13.js";import"./SuggestionItem-CvJl4nQX.js";import"./index-a4Q7iOV6.js";import"./Option-CI2Yw2KP.js";import"./index-BesWFMlT.js";import"./SegmentedButton-DezAXtzP.js";import"./index-DEdHEHwC.js";import"./Select-CgTdKzom.js";import"./InvisibleMessage-CU9pQYDF.js";import"./slim-arrow-down-VvEv069w.js";import"./index-c-nauNND.js";import"./index-B7YCk-Wu.js";import"./index-BJsU8vuH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CyqZ_FcD.js";import"./group-2-DPCLN9ms.js";import"./sort-descending-B-2HsOeS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv6NUcfX.js";import"./utils-CB796yal.js";import"./index-DVTrGvWQ.js";import"./index-C7WwmQky.js";import"./index-Dug3C8oV.js";import"./navigation-down-arrow-BWuNqmxj.js";import"./navigation-right-arrow-DFVpmM_Z.js";import"./navigation-right-arrow-Dd0lHwSB.js";import"./useCurrentTheme-DUR02Wpt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-vE2t2Hyd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_VbuiKz.js";import"./paper-plane-CeqIEAvx.js";import"./index-mr-I5ZbO.js";import"./less-D5n1Rht5.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

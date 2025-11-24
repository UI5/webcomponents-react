import{j as o}from"./iframe-ChLklOsd.js";import{useMDXComponents as n}from"./index-C8O_9vrB.js";import{I as r,F as m}from"./CommandsAndQueries-BJfqhrRX.js";import{M as p,C as s}from"./blocks-DJtWS-rM.js";import"./Tag-DfUNsarH.js";import"./index-D3GBtHew.js";import"./copy-e7lZwdk_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cni3-C_u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./index-k8fk5wba.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qH1qKYII.js";import"./delete-h7eVr2Vw.js";import"./settings-BKcM-wPp.js";import"./NoData-J1K7Ymhn.js";import"./IllustratedMessage-CtqAhvd3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-XMbTNtDO.js";import"./index-TSkw3SF1.js";import"./index-BzOBut2T.js";import"./slim-arrow-down-C0sKTfFd.js";import"./Input-Bw80AfuH.js";import"./ResponsivePopoverCommon.css-rK6RDwp7.js";import"./ValueStateMessage.css-BUi7Lug0.js";import"./Suggestions.css-60iPjMbi.js";import"./ListBoxItemGroupTemplate-CzUkEy5V.js";import"./ComboBoxItemGroup-DjZHBMDi.js";import"./ListItemBaseTemplate-fY_VN0oy.js";import"./Token-BNT6ZbqA.js";import"./ScrollEnablement-ZwyKnO_p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D2j6MVzc.js";import"./ToggleButton-Cg7Ob5xf.js";import"./SuggestionItem-0lQp_3Fi.js";import"./index-AGwizfQV.js";import"./Option-Fwlb6Z4G.js";import"./index-B9caYodE.js";import"./SegmentedButton-BbW03Ci4.js";import"./index-Ogz2SBUe.js";import"./Select-DOXy8bYp.js";import"./InvisibleMessage-BNlluPzS.js";import"./slim-arrow-down-3G2_d1HL.js";import"./index-B1ESy-y5.js";import"./index-B0rGjn3A.js";import"./index-r7SyDcBw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CkATdhv-.js";import"./group-2-DsXa8NWz.js";import"./sort-descending-Dp-Q-OnD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ANjhBQcR.js";import"./utils-DUOn4GqP.js";import"./index--7ojLxPu.js";import"./index-YOMQ5zOo.js";import"./index-BqvABamv.js";import"./navigation-down-arrow-KDgf9JO_.js";import"./navigation-right-arrow-GRefa7J7.js";import"./navigation-right-arrow-CvUkn4up.js";import"./useCurrentTheme-BJro2kG-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y2jErdQp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RlsHBs8r.js";import"./paper-plane-C-4qo-fh.js";import"./index-BXWtnQNN.js";import"./less-CCt5DJvB.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

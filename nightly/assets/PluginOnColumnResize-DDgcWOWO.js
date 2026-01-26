import{j as o}from"./iframe-THm39tdL.js";import{useMDXComponents as n}from"./index-B4tiZj28.js";import{I as r,F as m}from"./CommandsAndQueries-CM3XC2Lj.js";import{M as p,C as s}from"./blocks-exNB_fpK.js";import"./Tag-DAVE_HUz.js";import"./index-GpdeEFTa.js";import"./copy-BpRW8fgI.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CVT2-F1V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPta9qsd.js";import"./index-Dg0TKbRC.js";import"./index-DLy3fIdu.js";import"./Link-CGyr18oq.js";import"./index-BziYS9gD.js";import"./index-Dfp6johM.js";import"./index-KiDRbvAF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGXn0jIO.js";import"./addCustomCSSWithScoping-msj5utEH.js";import"./index-BQ6gEIJW.js";import"./information-Cma2Q91K.js";import"./sys-enter-2-iw8Fxy6e.js";import"./alert-Buz1y0R3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gfd4y1HT.js";import"./delete-0fDb3pV1.js";import"./settings-CY8QoXJB.js";import"./NoData-C7YE6Tud.js";import"./IllustratedMessage-CwBEdHyI.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BtIdSS61.js";import"./index-CF50Srtj.js";import"./index-MWxZbhrE.js";import"./slim-arrow-down-F0Pm_4oK.js";import"./Input-BhtW4_5c.js";import"./ResponsivePopoverCommon.css-BUxGZes4.js";import"./ValueStateMessage.css-Bbj2XpR4.js";import"./Suggestions.css-tt1nfuuG.js";import"./ListBoxItemGroupTemplate-o9uQGfAz.js";import"./ComboBoxItemGroup-D2Ek2hZU.js";import"./ListItemBaseTemplate-M2eQiRWW.js";import"./Token-GBNwp73E.js";import"./ScrollEnablement-BuLvzDFb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BfdqbOJt.js";import"./ToggleButton-BCPXY_Ug.js";import"./SuggestionItem-DkeJr8Uj.js";import"./index-BKb2eeim.js";import"./Option-BV6lO7dz.js";import"./index-Bg5k6qvB.js";import"./SegmentedButton-CFw5tEED.js";import"./index-CEaBFzJC.js";import"./Select-BdWwnW7P.js";import"./InvisibleMessage-Ce4CN5Vg.js";import"./slim-arrow-down-B5JPuMYZ.js";import"./index-BnrnCSjD.js";import"./index-C6R9FrtI.js";import"./index-DaOWCx8l.js";import"./index-CSWlCTzX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGPM4R0_.js";import"./group-2-09PNMZ-u.js";import"./sort-descending-DNDw-3QK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGou595l.js";import"./utils-BtvyjyGh.js";import"./index-BczVQc8C.js";import"./index-Cv0Q1UgH.js";import"./index-Bk-Qx2M8.js";import"./navigation-down-arrow-DEN2N7AT.js";import"./navigation-right-arrow-D2uUmPNT.js";import"./navigation-right-arrow-BW1qFR6l.js";import"./useCurrentTheme-BVOqA9kw.js";import"./index-CUY0Gfu8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DmNCTJWW.js";import"./paper-plane-BcpS0W6p.js";import"./index-BPR-maoO.js";import"./less-Dxs7OAKQ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

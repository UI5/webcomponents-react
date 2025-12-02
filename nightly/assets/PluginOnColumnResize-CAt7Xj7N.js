import{j as o}from"./iframe-ePItFB5B.js";import{useMDXComponents as n}from"./index-DDhKCT3A.js";import{I as r,F as m}from"./CommandsAndQueries-Bqqc5zN4.js";import{M as p,C as s}from"./blocks-b5KXpU9M.js";import"./Tag-DaF_Qhe4.js";import"./index-BB23O1Ug.js";import"./copy-BDQ8dZSb.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BJSBhIN7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tHf_ynpH.js";import"./index-BW9_RjV3.js";import"./index-CHJN7UF8.js";import"./Link-DCRCVgwG.js";import"./index-CauWo2vq.js";import"./index-Dot01Rcg.js";import"./index-DwS7NZjH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BZQxW830.js";import"./addCustomCSSWithScoping-DQC1mn0S.js";import"./index-DsBJl3xg.js";import"./information-jDHGU4wN.js";import"./sys-enter-2-CYnnsJKJ.js";import"./alert-CaUEMWJO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ToSbXWZH.js";import"./delete-DwZg9P7Z.js";import"./settings-BcPS-7YZ.js";import"./NoData-DJFJrOTo.js";import"./IllustratedMessage-Bmr5Yv3g.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DSxvsqTt.js";import"./index-CM9pher7.js";import"./index-n2XRoQpy.js";import"./slim-arrow-down-Bbay6SzC.js";import"./Input-1ziOkLBO.js";import"./ResponsivePopoverCommon.css-CK1jZSgX.js";import"./ValueStateMessage.css-Cge6AqxA.js";import"./Suggestions.css-qvsZ8K7i.js";import"./ListBoxItemGroupTemplate-tCIsdNqz.js";import"./ComboBoxItemGroup-BTYyH9JI.js";import"./ListItemBaseTemplate-BQfbgCmz.js";import"./Token-hnnzHjkz.js";import"./ScrollEnablement-DXbRc12V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwrIMAc3.js";import"./ToggleButton-BVCRpFrg.js";import"./SuggestionItem-DHkkhg33.js";import"./index-BJMjSX6m.js";import"./Option-8jo7-UGm.js";import"./index-BkpZUg2F.js";import"./SegmentedButton-B55zAlnK.js";import"./index-CZnOTK3W.js";import"./Select-DODjh9tK.js";import"./InvisibleMessage-66-idOyL.js";import"./slim-arrow-down-C3vG9300.js";import"./index-DEIYYpTL.js";import"./index-CRvZRH3h.js";import"./index-BpeQPuHK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIN5xraI.js";import"./group-2-CI-KJk4K.js";import"./sort-descending-DBtsyD-3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8vqCrQI.js";import"./utils-eGR0B54I.js";import"./index-CIqT6e3U.js";import"./index-1WOlGoMF.js";import"./index-rRzkNuJB.js";import"./navigation-down-arrow-hSRSXRoR.js";import"./navigation-right-arrow-BxDoSopC.js";import"./navigation-right-arrow-DFeuYejb.js";import"./useCurrentTheme-C0xCGTPu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuUMSyha.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsyOH-5s.js";import"./paper-plane-BtGnmdBy.js";import"./index-CFAUo9FD.js";import"./less-BQZO-GV3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

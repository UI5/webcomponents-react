import{j as o}from"./iframe-D2WvPMQO.js";import{u as n,M as r,C as m}from"./blocks-Cy8tSwuN.js";import{I as p}from"./CommandsAndQueries-GHyhdZ5z.js";import"./Tag-77Zcvr-C.js";import"./index-iukRSAfG.js";import"./copy-DEDrq7eG.js";import{F as s}from"./Footer-CcjLnWXZ.js";import"./PageNotFound--xUWQamC.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ClQlOOfP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B9O6M9m0.js";import"./index-D85ZyHtS.js";import"./index-BHdhu-GL.js";import"./index-PtvYek1_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BEnkyBc2.js";import"./addCustomCSSWithScoping-qrEX4tTM.js";import"./index-itXLTY8o.js";import"./index-CNWb7VVG.js";import"./index-35M5Bral.js";import"./information-C8cZAxRB.js";import"./sys-enter-2-dY36Ay86.js";import"./alert-C9lTQ0KQ.js";import"./index-CEhSDieG.js";import"./Illustrations-T5lVOB-y.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C9QnqX38.js";import"./delete-DCtSeERs.js";import"./settings-BKHPv5fF.js";import"./NoData-BnVRCHK1.js";import"./NoFilterResults-BkYdKGgw.js";import"./index-DlP9PgZ4.js";import"./IllustratedMessage-D3KRi5hR.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_rtv69N.js";import"./Input-I49paX0T.js";import"./ResponsivePopoverCommon.css-CjUTP20I.js";import"./ValueStateMessage.css-CmhOpOlf.js";import"./Suggestions.css-rpucalpY.js";import"./ListBoxItemGroupTemplate-ULzBGJs1.js";import"./ComboBoxItemGroup-3MLa-49H.js";import"./ListItemBaseTemplate-CRHkGA3i.js";import"./Token-BzwGSfjy.js";import"./ScrollEnablement-D_-WU9eX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9P5PrOT.js";import"./ToggleButton-BDLqiRP1.js";import"./multiselect-all-VBbz0rEV.js";import"./SuggestionItem-CyF605C0.js";import"./index-BUVTpYli.js";import"./Option-95rllHQV.js";import"./index-CK2Bjm1A.js";import"./SegmentedButton-YfV1HQzn.js";import"./index-GHa3vc93.js";import"./Select-mzrKDd_j.js";import"./InvisibleMessage-D8P6qZ5N.js";import"./index-B2szwQMK.js";import"./index-CgYPHGay.js";import"./index-rfVADYOX.js";import"./index-CHoH1lJm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DcEBagHM.js";import"./group-2-DgBHJvEx.js";import"./sort-descending-Ba8w6yM6.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5IIiW0k.js";import"./utils-8oLh6ciF.js";import"./index-BCj0VUVv.js";import"./index-BePByOQw.js";import"./index-D6RCLh_r.js";import"./navigation-down-arrow-Cxwn0PTJ.js";import"./navigation-right-arrow-Di_8TZdY.js";import"./navigation-right-arrow-28YF9v8S.js";import"./useCurrentTheme-nTOLBBZF.js";import"./index-DVsa72aS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DYwGEDjw.js";import"./paper-plane-BZZHS2AL.js";import"./index-C3vgjiRI.js";import"./less-INLBlfmn.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

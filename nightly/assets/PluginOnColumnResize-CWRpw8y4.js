import{j as o}from"./iframe-BCh37-GP.js";import{useMDXComponents as n}from"./index-E1HFg4gZ.js";import{I as r,F as m}from"./CommandsAndQueries-BaHr-COi.js";import{M as p,C as s}from"./blocks-CS5FlooX.js";import"./Tag-B_Qpe0TE.js";import"./index-DKQ6JIGw.js";import"./copy-7yIahvRv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-P4Nd5R97.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JFrdX4G8.js";import"./index-CTMnj1ho.js";import"./index-Bv89sSp1.js";import"./Link-BSH3TTIl.js";import"./index-BonVTnTn.js";import"./index-OKdWlUZi.js";import"./index-DMXHNrMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCrrvnNY.js";import"./addCustomCSSWithScoping-5ena9gAo.js";import"./index-DTOYUFlO.js";import"./information-3OCHA3NQ.js";import"./sys-enter-2-C8D5BzD8.js";import"./alert-DXLNWSuU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHnZbtsD.js";import"./delete-EE4bTGjq.js";import"./settings-CWOgdnOQ.js";import"./NoData-EYRIcvpd.js";import"./IllustratedMessage-eRr0GKWI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CAirgaaj.js";import"./index-D1dCHV7D.js";import"./index-tKT3JZMY.js";import"./slim-arrow-down-BmoCgPng.js";import"./Input-BV2Kpufx.js";import"./ResponsivePopoverCommon.css-Dj0T0ryX.js";import"./ValueStateMessage.css-BPaxhl46.js";import"./Suggestions.css-d96Y8STr.js";import"./ListBoxItemGroupTemplate-DKRgKg-W.js";import"./ComboBoxItemGroup-BghtySqg.js";import"./ListItemBaseTemplate-DK7kW4zT.js";import"./Token-swetDNES.js";import"./ScrollEnablement-d21bdta6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bb53oDTA.js";import"./ToggleButton-D4fUNdSY.js";import"./SuggestionItem-BQ2GorAX.js";import"./index-CyfUcvzJ.js";import"./Option-PulQRzr2.js";import"./index-Di7fqct-.js";import"./SegmentedButton-BunRIwoi.js";import"./index-Bgknzbhu.js";import"./Select-Nz2Hcbg2.js";import"./InvisibleMessage-DkbocxqO.js";import"./slim-arrow-down-CGh4l6r9.js";import"./index-BsudtbIQ.js";import"./index-BD7ZfrRW.js";import"./index-CUx_S0wg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl-mfjch.js";import"./group-2-CuvWrUYC.js";import"./sort-descending-C-mIF84h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dst6fVDY.js";import"./utils-BnTi3cfr.js";import"./index-CxPcQIig.js";import"./index-BVX4pL2A.js";import"./index-Dm-Pc1i9.js";import"./navigation-down-arrow-BQvpfFl5.js";import"./navigation-right-arrow-DpZd7grt.js";import"./navigation-right-arrow-CfgRq-yV.js";import"./useCurrentTheme-Bz0a4Npu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8yBXMrH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRezPATc.js";import"./paper-plane-Dx3V_-Uw.js";import"./index-CZ6TAeEd.js";import"./less-Bxijlz1Z.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

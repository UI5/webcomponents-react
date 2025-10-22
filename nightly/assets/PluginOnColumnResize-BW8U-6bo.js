import{j as o}from"./iframe-Cq4aPHLo.js";import{useMDXComponents as n}from"./index-DtjXbTDz.js";import{I as r,F as m}from"./CommandsAndQueries-CXjPz3Rk.js";import{M as p,C as s}from"./blocks-DS_hC92x.js";import"./Tag-C40beB3s.js";import"./index-CmKxyzHV.js";import"./copy-D9etBJkT.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D0IPW50b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkXTOe1d.js";import"./index-Dc8fq3Wn.js";import"./index-AjPpxwQf.js";import"./Link-BfHdWWup.js";import"./index-CCLlvQbb.js";import"./index-BEk2R1hN.js";import"./index-Bj4AjQ7z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Crxlx4bK.js";import"./addCustomCSSWithScoping-CwGFzfIe.js";import"./index-BRBHL30E.js";import"./information-DhBkhQvI.js";import"./sys-enter-2-CiSpLSDz.js";import"./alert-2iAYPloM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cxs3bmao.js";import"./delete-DuKV644D.js";import"./settings-Bx7P5Rsi.js";import"./NoData-DPfPzF9p.js";import"./IllustratedMessage-BpFqwb-K.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-lnnemqJe.js";import"./index-D6pT8vft.js";import"./index-Bh8RO2Zu.js";import"./slim-arrow-down-C0mxaQDT.js";import"./Input-Ccd7dYO4.js";import"./ResponsivePopoverCommon.css-1bQc-N4g.js";import"./ValueStateMessage.css-DmjkXWTx.js";import"./Suggestions.css-Dv9Ubz9b.js";import"./ListBoxItemGroupTemplate-Cb3ILXPe.js";import"./ComboBoxItemGroup-Dwg0E3j4.js";import"./ListItemBaseTemplate-CKaO6iQB.js";import"./Token-BbSC7JN1.js";import"./ScrollEnablement-aZYLZB-E.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DuP7QTbV.js";import"./ToggleButton-CnIysQwb.js";import"./SuggestionItem-C_HyWpKH.js";import"./index-BpQnZ4ry.js";import"./Option-gCXiIbtJ.js";import"./index-BwQ0JjIK.js";import"./SegmentedButton-Cxs_SXe9.js";import"./index-DSgunCqA.js";import"./Select-B_k5KaS4.js";import"./InvisibleMessage-CMcGtz6a.js";import"./slim-arrow-down-C0_o1aXe.js";import"./index-S6fOLFIs.js";import"./index-qCktYvmT.js";import"./index-B_YXqDWP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8NFCAB_.js";import"./group-2-Cx2aNRof.js";import"./sort-descending-BAx3CRhx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHDDLv5p.js";import"./utils-CJdUm82l.js";import"./index-UrX3mLF3.js";import"./index-JwWqV5vE.js";import"./index-Cd8h9PX8.js";import"./navigation-down-arrow-E4rpsFHM.js";import"./navigation-right-arrow-BO9UmjB0.js";import"./navigation-right-arrow-uogtFvqw.js";import"./useCurrentTheme-DcPQzSup.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bz5_tICb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xz9tTNk8.js";import"./paper-plane-BZ21gZCD.js";import"./index-nJoJBiEe.js";import"./less-OGBOJDtp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

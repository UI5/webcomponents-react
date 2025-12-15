import{j as o}from"./iframe-CXDBwaXf.js";import{useMDXComponents as n}from"./index-Dq-vd5Ev.js";import{I as r,F as m}from"./CommandsAndQueries-EFbMjjAa.js";import{M as p,C as s}from"./blocks-BAIBAw_h.js";import"./Tag-BGtFiUzo.js";import"./index-CdM50YVo.js";import"./copy-tKRdoNaC.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D5wWkW-F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CdFEqecu.js";import"./index-Dkyq4U7I.js";import"./index-CNRdJAzz.js";import"./Link-Cn9jKhUL.js";import"./index-Ekr32cnm.js";import"./index-BZ8xLssE.js";import"./index-C2VBEgX9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BhiljY7Y.js";import"./addCustomCSSWithScoping-DOTw8Y7k.js";import"./index-74IMF4Fu.js";import"./information-BIroKfax.js";import"./sys-enter-2-a30AyDBZ.js";import"./alert-Bp9zzpf6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dr9tof3Q.js";import"./delete-BRjSytiH.js";import"./settings-DpX9wVto.js";import"./NoData-B9OjNVXe.js";import"./IllustratedMessage-C03S7hoW.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dto9QmBi.js";import"./index-C1hX-h2_.js";import"./index-C-8V3qWU.js";import"./slim-arrow-down-ziHFyrxY.js";import"./Input-D9M-oH0b.js";import"./ResponsivePopoverCommon.css-DzYVdD7o.js";import"./ValueStateMessage.css-DY78SEwL.js";import"./Suggestions.css-D9onRGXn.js";import"./ListBoxItemGroupTemplate-BApvrnZW.js";import"./ComboBoxItemGroup-DZ-S5_KR.js";import"./ListItemBaseTemplate-Jxaz0vER.js";import"./Token-gCiCxmW0.js";import"./ScrollEnablement-CPJHMdd5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcjimPYv.js";import"./ToggleButton-CIC6sJxV.js";import"./SuggestionItem-A-OV44pz.js";import"./index-Bmc90nAd.js";import"./Option-ChH-SgHF.js";import"./index-BtgHHz7L.js";import"./SegmentedButton-pcYoHon6.js";import"./index-BTA6DMIo.js";import"./Select-Brcl3j_5.js";import"./InvisibleMessage-DHYzFVaN.js";import"./slim-arrow-down-B9i1iNEL.js";import"./index-B8i-bBM2.js";import"./index-B3Pl9APG.js";import"./index-CeSJC3hT.js";import"./index-sCYpguPS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGg0p1p3.js";import"./group-2-Dmm7arx2.js";import"./sort-descending-BdhD77Zt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CB-rwWQs.js";import"./utils-BQINLptF.js";import"./index-XK9DUlZ3.js";import"./index-BJ0Euif2.js";import"./index-CHqwEflI.js";import"./navigation-down-arrow-sU3YCq6s.js";import"./navigation-right-arrow-DuC2PC04.js";import"./navigation-right-arrow-CglzNXCr.js";import"./useCurrentTheme-nPjRikBt.js";import"./index-FYzg_PtZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zoi03cJM.js";import"./paper-plane-DMagDmJq.js";import"./index-B5ACz2H-.js";import"./less-CUrM5DQy.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

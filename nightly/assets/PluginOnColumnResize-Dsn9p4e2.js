import{j as o}from"./iframe-D7FikSiu.js";import{useMDXComponents as n}from"./index-BenG4a-h.js";import{I as r,F as m}from"./CommandsAndQueries-DD_YKX8j.js";import{M as p,C as s}from"./blocks-Yxlvk0d_.js";import"./Tag-CPn9c9wp.js";import"./index-C7R8Sd2K.js";import"./copy-BeTo-Yk5.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Uzzik8A7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3kgqoQY.js";import"./index-BmpVzGJg.js";import"./index-DD0ZDplT.js";import"./Link-VxMUEtoN.js";import"./index-BlrcmYdd.js";import"./index-BWKg7Ny9.js";import"./index-sclNFwhc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DXj9DeaS.js";import"./addCustomCSSWithScoping-qQ8FRtdZ.js";import"./index--O96gYhw.js";import"./information-uIClPmp3.js";import"./sys-enter-2-CoINRXQ6.js";import"./alert-C1AwfvUs.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cjeu2iUC.js";import"./delete-BXFFeGva.js";import"./settings-Bhg9hIqQ.js";import"./NoData-8lo0EfIA.js";import"./IllustratedMessage-B5ILd7Ma.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D2FL1NIC.js";import"./index-D5KmdhfP.js";import"./index-BHdGppro.js";import"./slim-arrow-down-BjtIk1Vi.js";import"./Input-C3GQwp16.js";import"./ResponsivePopoverCommon.css-B-7xEFrO.js";import"./ValueStateMessage.css-Bp6Kzpn5.js";import"./Suggestions.css-C4deLYKC.js";import"./ListBoxItemGroupTemplate-CulA1MXP.js";import"./ComboBoxItemGroup-Ybx5jZca.js";import"./ListItemBaseTemplate-CbRHzmQ9.js";import"./Token-lKzfIqgl.js";import"./ScrollEnablement-Bra0pK8m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CSDUnyyJ.js";import"./ToggleButton-Kp4VbK29.js";import"./SuggestionItem-CDgnoOkn.js";import"./index-BAC7wPZF.js";import"./Option-DjNP2NBe.js";import"./index-g5ankLTt.js";import"./SegmentedButton-DsD65c1s.js";import"./index-BLAF6B_L.js";import"./Select-DFH78pAA.js";import"./InvisibleMessage-CE6DvnfR.js";import"./slim-arrow-down-Cck_1u4G.js";import"./index-DPXWYJb-.js";import"./index-BS9hfto9.js";import"./index-BzlJw7GH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJs2hvRJ.js";import"./group-2-B__7xwg1.js";import"./sort-descending-Bt7-iKHQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5trjv0F.js";import"./utils-D4gyi2F6.js";import"./index-DUVjrMwJ.js";import"./index-Bp47sPZA.js";import"./index-C0B2CC00.js";import"./navigation-down-arrow-CBaTncM0.js";import"./navigation-right-arrow-r_WuPSCR.js";import"./navigation-right-arrow-BiAQ_euc.js";import"./useCurrentTheme-gi6l8GiI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_vb2NYJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C49MPlLC.js";import"./paper-plane-DDXSGztm.js";import"./index-7ywSorqo.js";import"./less-Bg7OXZ8n.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-DD3khz8t.js";import{useMDXComponents as n}from"./index-CHFjnrWX.js";import{I as r,F as m}from"./CommandsAndQueries-DsVeZAZ7.js";import{M as p,C as s}from"./blocks-ibeWpSZJ.js";import"./Tag-Ngk_8fKi.js";import"./index-BQH8_ZBk.js";import"./copy-BSvcS0vC.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-5_I1cyxV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvVzwHKX.js";import"./index-BVYBIT27.js";import"./index-BHPH6hXB.js";import"./Link-p7O4byri.js";import"./index-DddTN1yz.js";import"./index-INxWrkzg.js";import"./index-BddI7Cdl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgRC_ctT.js";import"./addCustomCSSWithScoping-BX6ct4xq.js";import"./index-w-lQea0z.js";import"./information-DqXpZV5n.js";import"./sys-enter-2-BQ568DSo.js";import"./alert-CH5Zr4v2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--alj2jOK.js";import"./delete-Ct8xiXlx.js";import"./settings-B1teuJ2R.js";import"./NoData-DvZhvA8J.js";import"./IllustratedMessage-CShEbWRz.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-6kBWV_FC.js";import"./index-Cj2HP5zh.js";import"./index-BRxYB2Dw.js";import"./slim-arrow-down-5-78CQg2.js";import"./Input-CzY57eje.js";import"./ResponsivePopoverCommon.css-DtiXOolb.js";import"./ValueStateMessage.css-BAlZcm0o.js";import"./Suggestions.css-wNpJO5EP.js";import"./ListBoxItemGroupTemplate-CQk5fTJS.js";import"./ComboBoxItemGroup-TwWewYqC.js";import"./ListItemBaseTemplate-Dy5bCQYp.js";import"./Token-a3MWAMbv.js";import"./ScrollEnablement-B0G1MDOV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcQmaiD_.js";import"./ToggleButton-CSRLBrRn.js";import"./SuggestionItem-CBBezjnP.js";import"./index-D3LDGHoT.js";import"./Option-i4_4pLmE.js";import"./index-D02z_BNZ.js";import"./SegmentedButton-BGocngUd.js";import"./index-DNXbXPty.js";import"./Select-NIA1LFcO.js";import"./InvisibleMessage-DD1Ev_vZ.js";import"./slim-arrow-down-D0mEITot.js";import"./index-BITmfB0x.js";import"./index-myUsI4jx.js";import"./index-DquhQeMg.js";import"./index-CM02EC77.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3GrU4Ss.js";import"./group-2-1rPdh5F3.js";import"./sort-descending-DgjPPaFB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbBNQQRY.js";import"./utils-DdRAkXpa.js";import"./index-B_XYOqNE.js";import"./index-BIIPEOn-.js";import"./index-CDwMQpv5.js";import"./navigation-down-arrow-YqNslUL9.js";import"./navigation-right-arrow-CxeAemfg.js";import"./navigation-right-arrow-Bq-pkXdO.js";import"./useCurrentTheme-C2JP9KVd.js";import"./index-CT5LP0kS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CAOBRXTB.js";import"./paper-plane-CrMU2hg6.js";import"./index-C3tzgyPK.js";import"./less-CSsjRXW_.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

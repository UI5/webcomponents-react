import{j as o}from"./iframe-RbfDHgLf.js";import{useMDXComponents as n}from"./index-DqV7dpjg.js";import{I as r,F as m}from"./CommandsAndQueries-zsQY2vaX.js";import{M as p,C as s}from"./blocks-B3C8l8xN.js";import"./Tag-HesnxFVA.js";import"./index-COZ8g4Eg.js";import"./copy-DMiueq1X.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-dNx3iOmq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHnVbXcX.js";import"./index-BJgLq48U.js";import"./index-CDE_0yIR.js";import"./Link-CqIOijGY.js";import"./index-T-3zE_IB.js";import"./index-CfYa6cQq.js";import"./index-CCjAf9sJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGqdfIsV.js";import"./addCustomCSSWithScoping-BLrotaH2.js";import"./index-Krk892ln.js";import"./information-DD6Au7ei.js";import"./sys-enter-2-CTkUcSDp.js";import"./alert-CtWiOE8L.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeOX064v.js";import"./delete-DcwaPxBU.js";import"./settings-D6tudNLA.js";import"./NoData-Cl4Qbgty.js";import"./IllustratedMessage-DexV73H4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-C3FPWFSN.js";import"./index-Cof-wcXi.js";import"./index-DTmXjenP.js";import"./slim-arrow-down-C6-37eiK.js";import"./Input-C6IaGQuM.js";import"./ResponsivePopoverCommon.css-BazxGA3A.js";import"./ValueStateMessage.css-DlSYdh2h.js";import"./Suggestions.css-BiueOOBD.js";import"./ListBoxItemGroupTemplate-CTGhd4B4.js";import"./ComboBoxItemGroup-nRyFLP8z.js";import"./ListItemBaseTemplate-C5ft9Md7.js";import"./Token-CnNyhnHs.js";import"./ScrollEnablement-BhIRzZQ-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LHwr1u0j.js";import"./ToggleButton-Ck80PIY6.js";import"./SuggestionItem-ydkFeLIs.js";import"./index-C97MBkt1.js";import"./Option-Br7hY4me.js";import"./index-H6IWsr_r.js";import"./SegmentedButton-CZ-yOp_Q.js";import"./index-CWlsW_rN.js";import"./Select-Bvdl5zc6.js";import"./InvisibleMessage-DajdZnZt.js";import"./slim-arrow-down-DNyYURKC.js";import"./index-BHXvhFiH.js";import"./index-DzCgTQEv.js";import"./index-Bf3cZXmJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C8wkfIGx.js";import"./group-2-DF-sgjHz.js";import"./sort-descending-CZjeMqQF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zFlUhoit.js";import"./utils-IhqywFcl.js";import"./index-CtCdIWLz.js";import"./index-C5SUxDyi.js";import"./index-nwkxsEd-.js";import"./navigation-down-arrow-BLAyWJF_.js";import"./navigation-right-arrow-DkJ4m7Up.js";import"./navigation-right-arrow-DkhAVYbD.js";import"./useCurrentTheme-Cl67aZzc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qW62GUHL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkQwBtqx.js";import"./paper-plane-B3UbNLhn.js";import"./index-B5lPdsla.js";import"./less-lHgyge0z.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

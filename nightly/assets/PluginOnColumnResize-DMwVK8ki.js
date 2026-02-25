import{j as o}from"./iframe-CtC7gYmF.js";import{useMDXComponents as n}from"./index-Di_URU-1.js";import{I as r,F as m}from"./CommandsAndQueries-DJ8rBoed.js";import{M as p,C as s}from"./blocks-mn43RK2l.js";import"./Tag-DL1jc8MZ.js";import"./index-BQgIK84O.js";import"./copy-qYhvVcV8.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CSxm7AZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";import"./index-B89psySH.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DM5Bmgcy.js";import"./delete-D28JJrjV.js";import"./settings-B_eYDXqs.js";import"./NoData-BEFoMZwu.js";import"./IllustratedMessage-Bm09ehOx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zixt0yJO.js";import"./index-BkEdfFg4.js";import"./index-CXyI2saw.js";import"./slim-arrow-down-Dl0Mj9NF.js";import"./Input-BzurqpwY.js";import"./ResponsivePopoverCommon.css-CWluabdp.js";import"./ValueStateMessage.css-DobtBfbj.js";import"./Suggestions.css-C-jhG9YF.js";import"./ListBoxItemGroupTemplate-l7Ysqerl.js";import"./ComboBoxItemGroup-Catkrecl.js";import"./ListItemBaseTemplate-Pa0nc5BR.js";import"./Token-Do6RzTo7.js";import"./ScrollEnablement-2beWlGZ4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x5B2lMAL.js";import"./ToggleButton-5L56EMme.js";import"./SuggestionItem-OrSC-_5m.js";import"./index-B7-D_cvI.js";import"./Option-BKqKQXEH.js";import"./index-foRMWjrc.js";import"./SegmentedButton-BiIuRVw0.js";import"./index-BHX6355d.js";import"./Select-o8dTzY27.js";import"./InvisibleMessage-DuKRASmz.js";import"./slim-arrow-down-DfNNSKUn.js";import"./index-C-ofIC86.js";import"./index-D6W6u5Ex.js";import"./index-CDXZI8f7.js";import"./index-kkBKNTX1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-N08RslCJ.js";import"./group-2-D9UucbkH.js";import"./sort-descending-mxiKFDhG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CCsq8n3w.js";import"./utils-CVe0TikA.js";import"./index-FXFh3j7m.js";import"./index-avy9GSV1.js";import"./index-DuYS0cYr.js";import"./navigation-down-arrow-BA6MTBoF.js";import"./navigation-right-arrow-D8GdMajc.js";import"./navigation-right-arrow-0LEru9_G.js";import"./useCurrentTheme-BD4ipeqR.js";import"./index-CuyOYIq5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-oSnS9KDP.js";import"./paper-plane-BYNNQr-L.js";import"./index-4w0RIoWt.js";import"./less-DxqQgulo.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

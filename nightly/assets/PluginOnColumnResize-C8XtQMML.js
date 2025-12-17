import{j as o}from"./iframe-BHL3KP3B.js";import{useMDXComponents as n}from"./index-CV9KcB1M.js";import{I as r,F as m}from"./CommandsAndQueries-D7saeET0.js";import{M as p,C as s}from"./blocks-CBYdh6wr.js";import"./Tag-RhCig6AF.js";import"./index-JS1GcHzF.js";import"./copy-Cx_IXaYw.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BrfvRfms.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgzyxERN.js";import"./index-Dx-FLQII.js";import"./index-Dsg6DYtH.js";import"./Link-ea-shbEJ.js";import"./index-lfVzLD84.js";import"./index-Dbs5lixu.js";import"./index-DToQg2Hs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co81iMbm.js";import"./addCustomCSSWithScoping-DQk-eQ1n.js";import"./index-JDEJOPjW.js";import"./information-DJM95Ys0.js";import"./sys-enter-2-XSR4RGqi.js";import"./alert-D5dcqe2K.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CojRdeJq.js";import"./delete-DQMuq08Z.js";import"./settings-DrCR5OyI.js";import"./NoData-AhmlI4en.js";import"./IllustratedMessage-DSSeRQPL.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-gLj6jJ_l.js";import"./index-CEQhLUHx.js";import"./index-Ccc7p32P.js";import"./slim-arrow-down-DJurD9QK.js";import"./Input-BbifX6GM.js";import"./ResponsivePopoverCommon.css-qV0tN2P6.js";import"./ValueStateMessage.css-BeeYtMkq.js";import"./Suggestions.css-DRhiS2Sl.js";import"./ListBoxItemGroupTemplate-Csghie_Z.js";import"./ComboBoxItemGroup-CNXniF9s.js";import"./ListItemBaseTemplate-CXls01q_.js";import"./Token-Bt8xyw-t.js";import"./ScrollEnablement-CuhBmX-D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWGtaCZo.js";import"./ToggleButton-G063PX5t.js";import"./SuggestionItem-BdZmVO4W.js";import"./index-DvuvrS2e.js";import"./Option-Bj-jZedt.js";import"./index-BDmA0N-r.js";import"./SegmentedButton-tZwV5m8H.js";import"./index-DFD0Bxod.js";import"./Select-B47H5g2r.js";import"./InvisibleMessage-C_y6XL_X.js";import"./slim-arrow-down-6hMlGarM.js";import"./index-CnHmjf1H.js";import"./index-BxtwwsD_.js";import"./index-BF8LBvPs.js";import"./index-Dvhp9tec.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLs9MXxX.js";import"./group-2-C9nYhH-K.js";import"./sort-descending-B_h7sVML.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cf8R0xRs.js";import"./utils-DvyWIthn.js";import"./index-BvVS_2DG.js";import"./index-Bnk6-Kur.js";import"./index-BGVW-O6b.js";import"./navigation-down-arrow-B5ni_-5b.js";import"./navigation-right-arrow-D9N8Vo-q.js";import"./navigation-right-arrow-fl9ibqyt.js";import"./useCurrentTheme-B4bYUvCO.js";import"./index-DD7xwy8l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbHzpQG_.js";import"./paper-plane-C9J4P2OV.js";import"./index-D6_mBUAF.js";import"./less-BlsOk5YZ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-DVGWhCAE.js";import{useMDXComponents as n}from"./index-B9xkaSV0.js";import{I as r,F as m}from"./CommandsAndQueries-dho9FID6.js";import{M as p,C as s}from"./blocks-BJbIBXfd.js";import"./Tag-BSVrbtw1.js";import"./index-8G75QKe0.js";import"./copy-BlV96bJM.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CnZuDPXD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRrKr04f.js";import"./index-Q2-fVCzE.js";import"./index-BHsujjCW.js";import"./Link-Dgw-_ZOU.js";import"./index-Nk5G6RU7.js";import"./index-DGKs15kB.js";import"./index-NT87e1sK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DANVMAHb.js";import"./addCustomCSSWithScoping-5Jg_uRZD.js";import"./index-BJLS4IRc.js";import"./information-omXjQTPD.js";import"./sys-enter-2-C04ebACG.js";import"./alert-BHqxLN4g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFnPtJkv.js";import"./delete-DY6bdwXU.js";import"./settings-XslWUyya.js";import"./NoData-BUZ7abMj.js";import"./IllustratedMessage-B9_mT8nH.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DjDOG6yR.js";import"./index-8hC-ZwrJ.js";import"./index-BChoSltx.js";import"./slim-arrow-down-DeYpmmvX.js";import"./Input-DpyJgAt0.js";import"./ResponsivePopoverCommon.css-CePgJsY4.js";import"./ValueStateMessage.css-3BAQCChx.js";import"./Suggestions.css-BOKDeXtO.js";import"./ListBoxItemGroupTemplate-UD1IHiMI.js";import"./ComboBoxItemGroup-BpjYhnfH.js";import"./ListItemBaseTemplate-mkFVGvTh.js";import"./Token-C-dIs8ow.js";import"./ScrollEnablement-B1V-xmtX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYsOVdkk.js";import"./ToggleButton-DtBu71V4.js";import"./SuggestionItem-35Bufm1r.js";import"./index-DlkYfY-D.js";import"./Option-12YZDcJD.js";import"./index-TKCi4qTc.js";import"./SegmentedButton-B7a2Ohdn.js";import"./index-Cloa_gEs.js";import"./Select-DbAXZ3Uf.js";import"./InvisibleMessage-D0fNoamP.js";import"./slim-arrow-down-DhfOJ1tg.js";import"./index-CAmvDfBQ.js";import"./index-CI4CkUvi.js";import"./index-C8msanHQ.js";import"./index-D2OD1CJk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQHd5LOE.js";import"./group-2-CxeVZpJt.js";import"./sort-descending-6N_LscE5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-64D78cvD.js";import"./utils-KP_8elyX.js";import"./index-BMkoMDMN.js";import"./index-BAbz02Gg.js";import"./index-B3L4E0qW.js";import"./navigation-down-arrow-HldHMJHt.js";import"./navigation-right-arrow-BAW-_M57.js";import"./navigation-right-arrow-RFBEU6p5.js";import"./useCurrentTheme-CamodcP9.js";import"./index-C-rI4uKO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BrbgBhCS.js";import"./paper-plane-EP68wguC.js";import"./index-KTYaWInB.js";import"./less-CBpVNcsL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

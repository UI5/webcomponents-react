import{j as o}from"./iframe-BYgl1e3t.js";import{useMDXComponents as n}from"./index-CQiAxnj4.js";import{I as r,F as m}from"./CommandsAndQueries-C7-dfPl9.js";import{M as p,C as s}from"./blocks-DJ2faYOs.js";import"./Tag-WgH8NYoz.js";import"./index-CTjTm5cU.js";import"./copy-IUlUEvra.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D1INNVPG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTJrZqp.js";import"./index-DOySy9e2.js";import"./index-BDYs8WoM.js";import"./Link-DcQGtcs6.js";import"./index-B_dT7zj1.js";import"./index-CgZTDeh6.js";import"./index-B7ISCohd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoRR59AB.js";import"./addCustomCSSWithScoping-_jk3dAup.js";import"./index-6Qy6VRAh.js";import"./information-B-QMEMgn.js";import"./sys-enter-2-Bd_kwfmJ.js";import"./alert-zegR4G--.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1SsSrBU.js";import"./delete-C5OnkOZe.js";import"./settings-B5ioReqo.js";import"./NoData-BiKwYAUE.js";import"./IllustratedMessage-DOGZ92R6.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CGSn29D0.js";import"./index-Es7U-HC0.js";import"./index-CXvLuVUG.js";import"./slim-arrow-down-Dp2ciCQr.js";import"./Input-v1S2StmY.js";import"./ResponsivePopoverCommon.css-Dmb9XfkM.js";import"./ValueStateMessage.css-Y1GqQ7JE.js";import"./Suggestions.css-CUC1ZqxX.js";import"./ListBoxItemGroupTemplate-Dr-udWWW.js";import"./ComboBoxItemGroup-BqJbVdEf.js";import"./ListItemBaseTemplate-BWtuxBSD.js";import"./Token-BEPjAjq5.js";import"./ScrollEnablement-CMlQv5Ns.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJEaviTe.js";import"./ToggleButton-D2vaCr4G.js";import"./SuggestionItem-DgwBMgIM.js";import"./index-081kxF9g.js";import"./Option-BFY-_C_3.js";import"./index-BCKaAXVJ.js";import"./SegmentedButton-DU2vMA6Y.js";import"./index-BOpxZokY.js";import"./Select-CKEJiYgR.js";import"./InvisibleMessage-zdr3PQOC.js";import"./slim-arrow-down-Ck49N193.js";import"./index-B6cxdJA0.js";import"./index-D3nZrnGX.js";import"./index-y0wRkLFD.js";import"./index-CH5XfXng.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JNJ08E3e.js";import"./group-2-NOFZdPEz.js";import"./sort-descending-dB16txzl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CamwnZjH.js";import"./utils-vU-5DtFT.js";import"./index-DLZVurc2.js";import"./index-Ciih49Gh.js";import"./index-8TbROqqH.js";import"./navigation-down-arrow-By8vG3CK.js";import"./navigation-right-arrow-DTYTg7DL.js";import"./navigation-right-arrow-DjjDogmX.js";import"./useCurrentTheme-Cdnt_qcN.js";import"./index-BVTS8CP-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWrTCVtk.js";import"./paper-plane-x6srakyu.js";import"./index-ClEI62f3.js";import"./less-DVoR9ng7.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

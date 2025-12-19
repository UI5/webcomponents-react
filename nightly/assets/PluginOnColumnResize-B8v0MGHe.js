import{j as o}from"./iframe-By2gmFxc.js";import{useMDXComponents as n}from"./index-gKb_GMnq.js";import{I as r,F as m}from"./CommandsAndQueries-MwhWu1jt.js";import{M as p,C as s}from"./blocks-D2uzjwbj.js";import"./Tag-Q4xsur8Q.js";import"./index-CIY2e3dX.js";import"./copy-jhrg3Bh5.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-38cEGb-D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DjdoJ-R-.js";import"./index-JdoT9BRG.js";import"./index-CYEIBPim.js";import"./Link-nWDhDuhI.js";import"./index-4iQpwXEW.js";import"./index-XAF-DZNA.js";import"./index-BlQvs7kx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl2hQFWK.js";import"./addCustomCSSWithScoping-BCT2RHCk.js";import"./index-c5NRQxKp.js";import"./information-DZbn4exg.js";import"./sys-enter-2-D1EL9sqg.js";import"./alert-Dj00yiIa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DfmbGYM-.js";import"./delete-DIECwpsn.js";import"./settings-BR-Jn1SA.js";import"./NoData-DlNrysCF.js";import"./IllustratedMessage-BEVwX-MP.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BUFWZWdz.js";import"./index-B8yBtMrQ.js";import"./index-DB05x-gb.js";import"./slim-arrow-down-CHcgNgab.js";import"./Input-BkjEUhdM.js";import"./ResponsivePopoverCommon.css-GYWWINRP.js";import"./ValueStateMessage.css-BgBsH41F.js";import"./Suggestions.css-DYhFblt3.js";import"./ListBoxItemGroupTemplate-C0bdN0su.js";import"./ComboBoxItemGroup-DB867_JW.js";import"./ListItemBaseTemplate-DKt4HTRR.js";import"./Token-D9qfRGUI.js";import"./ScrollEnablement-CzJbNFQB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ba2CipUt.js";import"./ToggleButton-BzNdzxEt.js";import"./SuggestionItem-b3ddDxtm.js";import"./index-BxxQ10ur.js";import"./Option-C8V6bqI8.js";import"./index-DsPa88Bs.js";import"./SegmentedButton-DuCxtppX.js";import"./index-BXAryvnn.js";import"./Select-COlJPvs3.js";import"./InvisibleMessage-_t19LlQz.js";import"./slim-arrow-down-B6SdizKX.js";import"./index-5qvEcr0z.js";import"./index-CfTR6XTd.js";import"./index-B0IxYo6X.js";import"./index-BrqX3Vme.js";import"./IconDesign-DXd8PPVF.js";import"./filter-eUU2DhC1.js";import"./group-2-DGCEgpup.js";import"./sort-descending-C0r5XO3T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dno9Fs_e.js";import"./utils-BosODi5p.js";import"./index-Bzt2lubY.js";import"./index-Buzu52UZ.js";import"./index-B7hB3IPh.js";import"./navigation-down-arrow-DNuvmaCj.js";import"./navigation-right-arrow-BnmeKOvQ.js";import"./navigation-right-arrow-DHqGUiMR.js";import"./useCurrentTheme-CwgIV2K4.js";import"./index-BEBXGxoi.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-T3phyLSC.js";import"./paper-plane-1SKJ69pa.js";import"./index-CFq17qq9.js";import"./less-BfN0FGSL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-BpIV0mIG.js";import{useMDXComponents as n}from"./index-R-0b2Q-0.js";import{I as r,F as m}from"./CommandsAndQueries-Cg1r-kOH.js";import{M as p,C as s}from"./blocks-DoVp3o8V.js";import"./Tag-PaDhhp3x.js";import"./index-ihq2izus.js";import"./copy-ByeAxUWO.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B5Jh-DUM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qBYywHNO.js";import"./index-CTTxG0ct.js";import"./index-CIjFLNbK.js";import"./Link-BYY56m65.js";import"./index-BED2olIo.js";import"./index-fu097dPl.js";import"./index-BLHX1u79.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqFGSoTQ.js";import"./addCustomCSSWithScoping-B4Uic3jc.js";import"./index-DtbW9kAL.js";import"./information-CehFepv7.js";import"./sys-enter-2-D_Yhxrfh.js";import"./alert-Dc_mbBlI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2I-ZSY3.js";import"./delete-CsEea83P.js";import"./settings-BPkB95Pr.js";import"./NoData-BeGHl6Z_.js";import"./IllustratedMessage-DOyI0ZCV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-8la9vE-n.js";import"./index-CwpdFEXU.js";import"./index-D_eQoiLu.js";import"./slim-arrow-down-Clv0qByx.js";import"./Input-CxCbVe7-.js";import"./ResponsivePopoverCommon.css-D2Obw4p0.js";import"./ValueStateMessage.css-DMpvlVEo.js";import"./Suggestions.css-DaCrsdkh.js";import"./ListBoxItemGroupTemplate-BWzZzAr7.js";import"./ComboBoxItemGroup-D6sYMIxD.js";import"./ListItemBaseTemplate-koeEWE6r.js";import"./Token-D8bP-ldU.js";import"./ScrollEnablement-C71FmZua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cc_o9oaM.js";import"./ToggleButton-2rgNDr7d.js";import"./SuggestionItem-l3Pd-DGO.js";import"./index-BmJTPsAz.js";import"./Option-BMHYCgFj.js";import"./index-Bj0jkexU.js";import"./SegmentedButton-DEEjtarU.js";import"./index-Di2uBEgf.js";import"./Select-CtSXIsWd.js";import"./InvisibleMessage-CsmHimDL.js";import"./slim-arrow-down-1QdqWgX2.js";import"./index-D0rvSxtS.js";import"./index-DwvqlB2m.js";import"./index-Bs-Icwyw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDsrk5Iv.js";import"./group-2-CUHYq2Ym.js";import"./sort-descending-C35hFge8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8VSrFeR.js";import"./utils-DxABz-pG.js";import"./index-jEyBc5qw.js";import"./index-C_lKlUk7.js";import"./index-BJ6HlI_O.js";import"./navigation-down-arrow-B015Jf2F.js";import"./navigation-right-arrow-DmngP1AQ.js";import"./navigation-right-arrow-BHUDGKpX.js";import"./useCurrentTheme-BE_eD6jJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNIWpImI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-COaeyO-1.js";import"./paper-plane-DKcTwT40.js";import"./index-Bkq_sts_.js";import"./less-BRYhBxfc.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

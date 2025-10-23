import{j as o}from"./iframe-Biw_3dDT.js";import{useMDXComponents as n}from"./index-BMMnaqrc.js";import{I as r,F as m}from"./CommandsAndQueries-D0Z7WxPl.js";import{M as p,C as s}from"./blocks-CG1UjEbO.js";import"./Tag-CRWtagqn.js";import"./index-Cn2rXDmw.js";import"./copy-DH1R2EGq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C2Xb6pBm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqgdtVzi.js";import"./index-CFI750DE.js";import"./index-BN4lukMo.js";import"./Link-DWk7vFCs.js";import"./index-BoXMWtRz.js";import"./index-Cs0jPH4S.js";import"./index-N2M8yHQs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeslUd9A.js";import"./addCustomCSSWithScoping-DYYTTL4w.js";import"./index-BJYjY6km.js";import"./information-DBapFp0Y.js";import"./sys-enter-2-CEmGCFWp.js";import"./alert-DjZ7TPZE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeUXtSMt.js";import"./delete-BCgK7hyI.js";import"./settings-DzTZGwhB.js";import"./NoData-DKz1kKuV.js";import"./IllustratedMessage-DXuv23_m.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CEF4y9VB.js";import"./index-C32xzwv9.js";import"./index-DLpedh-q.js";import"./slim-arrow-down-cCYJhXL4.js";import"./Input-Bw_MUO_q.js";import"./ResponsivePopoverCommon.css-C-V5noYQ.js";import"./ValueStateMessage.css-ByBg6XPZ.js";import"./Suggestions.css-bib_WhRC.js";import"./ListBoxItemGroupTemplate-CFztLzRm.js";import"./ComboBoxItemGroup-CDJ_c_MY.js";import"./ListItemBaseTemplate-CfwWbg0i.js";import"./Token-DiWIZ29Z.js";import"./ScrollEnablement-bgT4DI50.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DVrrwFh6.js";import"./ToggleButton-DHvaMwSS.js";import"./SuggestionItem-DULb_g75.js";import"./index-2OJQec-L.js";import"./Option-BcYuvlB6.js";import"./index-BpN_VVJi.js";import"./SegmentedButton-pFLbx0qK.js";import"./index-CZPmvqSA.js";import"./Select-DCBgibxv.js";import"./InvisibleMessage-C2StTKZh.js";import"./slim-arrow-down-DdZdWXqJ.js";import"./index-DxlfJkCF.js";import"./index-BO0ARibj.js";import"./index-DTPD7XSM.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CE52_svi.js";import"./group-2-BOK7IKie.js";import"./sort-descending-BabW8yOs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXQkuKDh.js";import"./utils-DqOKa6xr.js";import"./index-aoNvrQgQ.js";import"./index-DrWwSftw.js";import"./index-CDWqnF0I.js";import"./navigation-down-arrow-CuzvgjyX.js";import"./navigation-right-arrow-C4bDXXx0.js";import"./navigation-right-arrow-D8ltxNFm.js";import"./useCurrentTheme-DLWoHXHT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DdJKFclu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOO113xH.js";import"./paper-plane-D1iJTi1P.js";import"./index-iNA5KBB_.js";import"./less-BmfWAKtR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

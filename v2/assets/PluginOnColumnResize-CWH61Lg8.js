import{j as o}from"./iframe-CIFZFrG2.js";import{useMDXComponents as n}from"./index-CzlgAQtr.js";import{I as r,F as m}from"./CommandsAndQueries-BlZNZtUo.js";import{M as p,C as s}from"./blocks-ClculhSc.js";import"./Tag-C9R72Ii-.js";import"./index-B9QNJxWD.js";import"./copy-CVO7dQ0j.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CgEPUpLL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2ynVlET.js";import"./index-Raa53yj5.js";import"./index-BRYLHUCr.js";import"./Link-C5_8cjV3.js";import"./index-CyeOYd2G.js";import"./index-CysqO__p.js";import"./index--ZLvsvkR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CxDbWVSp.js";import"./addCustomCSSWithScoping-Bq-MB79n.js";import"./index-Ddm49m6x.js";import"./information-C9kryg9s.js";import"./sys-enter-2-Dnan1hPQ.js";import"./alert-OVbD1hF6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYyXPrOv.js";import"./delete-BA6UzrB5.js";import"./settings-DIaelliX.js";import"./NoData-B1FuXvEI.js";import"./IllustratedMessage-21oYVbbQ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DPJreZ8p.js";import"./index-cGU9T9rn.js";import"./index-DkhbK58W.js";import"./slim-arrow-down-2FoyFrsV.js";import"./Input-DlFlJtjB.js";import"./ResponsivePopoverCommon.css-cwzG2gc0.js";import"./ValueStateMessage.css-ikIAfSqI.js";import"./Suggestions.css-Cmt6_gCv.js";import"./ListBoxItemGroupTemplate-c0BR_adj.js";import"./ComboBoxItemGroup-jwje7hSK.js";import"./ListItemBaseTemplate-WTKsn73S.js";import"./Token-BaR6rmNc.js";import"./ScrollEnablement-BkzfVfom.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zd36OJtU.js";import"./ToggleButton-CKdRk_TU.js";import"./SuggestionItem-i1kLLZMq.js";import"./index-DiirMTfI.js";import"./Option-DiunOkpg.js";import"./index-C1tXGYmS.js";import"./SegmentedButton-DnLPeF-z.js";import"./index-BU8EJGfi.js";import"./Select-Il0Dpto4.js";import"./InvisibleMessage-SsPOIlta.js";import"./slim-arrow-down-CuXz1j7I.js";import"./index-DsLGmJL5.js";import"./index-Cp4nBRod.js";import"./index-DlBqic0j.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CzaibK8v.js";import"./group-2-BvqITDwo.js";import"./sort-descending-DNmo5GvA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-W-uq8jIV.js";import"./utils-7Audpv7t.js";import"./index-dUb3oqow.js";import"./index-DkmXSgWz.js";import"./index-DtGC_2bD.js";import"./navigation-down-arrow-DNMDmuFC.js";import"./navigation-right-arrow-D_akLMwW.js";import"./navigation-right-arrow-n0EeNTkG.js";import"./useCurrentTheme-C9k3MOJ-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HSQA-4PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCLO5KRo.js";import"./paper-plane-Df4G7ZiX.js";import"./index-B3X4PJbz.js";import"./less-PsQqjzYZ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

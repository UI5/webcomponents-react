import{j as o}from"./iframe-BV6MX4jP.js";import{useMDXComponents as n}from"./index-BBPLoQd2.js";import{I as r,F as m}from"./CommandsAndQueries-B_NVK97H.js";import{M as p,C as s}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import"./copy-BuKjNY_z.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-T_cM7jH3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";import"./index-B6xBDYCv.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DluWfdk1.js";import"./delete-D-tF1QFK.js";import"./settings-nj9vexJs.js";import"./NoData-DatsDwUA.js";import"./IllustratedMessage-wCVUZOEy.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DlJ2uOES.js";import"./index-W67I1HN2.js";import"./index-DzPicj6D.js";import"./slim-arrow-down-CsSTo7HV.js";import"./Input-ChW7yv3W.js";import"./ResponsivePopoverCommon.css-ClpZBCpz.js";import"./ValueStateMessage.css-C_M3aJzp.js";import"./Suggestions.css-CSkW4QfO.js";import"./ListBoxItemGroupTemplate-CRxGMHEE.js";import"./ComboBoxItemGroup-Crq8AFMp.js";import"./ListItemBaseTemplate-BgQ118Dh.js";import"./Token-DBSnoolZ.js";import"./ScrollEnablement-CUGdZ0ua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C95WGA7x.js";import"./ToggleButton-DZW5zV-q.js";import"./SuggestionItem-D06YVUYK.js";import"./index-stG37gxE.js";import"./Option-CLVxZm0T.js";import"./index-CPiHE6HM.js";import"./SegmentedButton-w_O6Zr0R.js";import"./index-DpOA1UAF.js";import"./Select-8EQsIG3h.js";import"./InvisibleMessage-DDCSdyz6.js";import"./slim-arrow-down-m4nfpNWT.js";import"./index-ConqiMdG.js";import"./index-Teu4gKwB.js";import"./index-Cel48Hnh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YqAR--zG.js";import"./group-2-sFLuQe_k.js";import"./sort-descending-D51ek0j-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bAeuC6z7.js";import"./utils-DdwGETq3.js";import"./index-CZ32PpE2.js";import"./index-Btqqk8wD.js";import"./index-CcZrpUmm.js";import"./navigation-down-arrow-e2PgOWNG.js";import"./navigation-right-arrow-Bh7h-vAT.js";import"./navigation-right-arrow-Dd5t9QGM.js";import"./useCurrentTheme-CNfb1pjw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0G7QBXN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTyFJzVy.js";import"./paper-plane-BI7RDtZg.js";import"./index-De8-qQne.js";import"./less-DfVJl5W-.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

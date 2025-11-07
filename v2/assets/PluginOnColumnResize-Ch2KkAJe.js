import{j as o}from"./iframe-Cx-m_Nf0.js";import{useMDXComponents as n}from"./index-Danm_hzB.js";import{I as r,F as m}from"./CommandsAndQueries-wiGvioaD.js";import{M as p,C as s}from"./blocks-BeOH24VU.js";import"./Tag-CULcfvQz.js";import"./index-JZ9249rN.js";import"./copy-saj_hA78.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CQ1Q9bJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkCtcCNV.js";import"./index-BRPuZYCF.js";import"./index-D-dAoXo8.js";import"./Link-CR1SnY-5.js";import"./index-D0XJTq9Q.js";import"./index-B10MFmnl.js";import"./index-bcKxXY3o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Hev4WvRm.js";import"./addCustomCSSWithScoping-CdsdDkDi.js";import"./index-DROJnCko.js";import"./information-CEQNZlPN.js";import"./sys-enter-2-AhkD0MnF.js";import"./alert-Bji-b9H2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D1-JQb3f.js";import"./delete-Bl2x4rU1.js";import"./settings-Bv6hFb-P.js";import"./NoData-CSJ_na3c.js";import"./IllustratedMessage-CPrK3i7_.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-bu6kmgxW.js";import"./index-BSHVbo6V.js";import"./index-eSExnXlh.js";import"./slim-arrow-down-DKAHurNq.js";import"./Input-BGkNvg04.js";import"./ResponsivePopoverCommon.css-BuTMFQw1.js";import"./ValueStateMessage.css-DkCm038q.js";import"./Suggestions.css-C3EK_z35.js";import"./ListBoxItemGroupTemplate-BFkq-NXI.js";import"./ComboBoxItemGroup-BKPCcMXX.js";import"./ListItemBaseTemplate-2sNFKkfz.js";import"./Token-BqrAbKWZ.js";import"./ScrollEnablement-BylCXS9j.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bo_f_yy9.js";import"./ToggleButton-9pjROLTu.js";import"./SuggestionItem-6D6ujuPl.js";import"./index-CKUsXBNu.js";import"./Option-DzMmQowO.js";import"./index-BWv5ujwm.js";import"./SegmentedButton-Cj4yij2C.js";import"./index-BLOeq_DJ.js";import"./Select-FmZbtvvG.js";import"./InvisibleMessage-D-MV8Msz.js";import"./slim-arrow-down-DMPgem2M.js";import"./index-BKf9Irue.js";import"./index-D3zHQWzc.js";import"./index-Cp-3_oQg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3mU9MEPJ.js";import"./group-2-Bro4NNr1.js";import"./sort-descending-DjJ8E8sw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DF9ssoyr.js";import"./utils-BNoG9b0S.js";import"./index-dmgo9yxd.js";import"./index-CLBMOU_H.js";import"./index-TIjwWRgv.js";import"./navigation-down-arrow-BGKJSbuE.js";import"./navigation-right-arrow-DxbKKfUO.js";import"./navigation-right-arrow-BTVVtZ0b.js";import"./useCurrentTheme-Dm6R4j9A.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CF38bavx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BF52L7PE.js";import"./paper-plane-CbELQrqU.js";import"./index-B-qCzqdY.js";import"./less-DMl7Bxfb.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

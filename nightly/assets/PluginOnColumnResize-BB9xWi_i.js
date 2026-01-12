import{j as o}from"./iframe-B3T0Oj7B.js";import{useMDXComponents as n}from"./index-D3UxDze4.js";import{I as r,F as m}from"./CommandsAndQueries-DvsDK9ZB.js";import{M as p,C as s}from"./blocks-CyPgi3fl.js";import"./Tag-BebiXErc.js";import"./index-dJAxIfZY.js";import"./copy-_Qj_KEfj.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CLdVk_2J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D37akpKi.js";import"./index-B8hvCU9O.js";import"./index-BctJwJOg.js";import"./Link-Bk4EX_BP.js";import"./index-Bik-cKeX.js";import"./index-D_qT_Ogl.js";import"./index-CpVd5OAx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVuzLNiB.js";import"./addCustomCSSWithScoping-BR9GACjU.js";import"./index-BywqBC1y.js";import"./information-CDiFrRjk.js";import"./sys-enter-2-CspjHMoa.js";import"./alert-BsEVUmBp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXXzDXeg.js";import"./delete-DoH2BMDU.js";import"./settings-D4LWYr7c.js";import"./NoData-DPlWgMdh.js";import"./IllustratedMessage-CTn70Kkd.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B5oTX081.js";import"./index-D_ervA3L.js";import"./index-BUUNpLyt.js";import"./slim-arrow-down-CacMbODe.js";import"./Input-B0UijuIu.js";import"./ResponsivePopoverCommon.css-Dq6Kf127.js";import"./ValueStateMessage.css-BCQWXayY.js";import"./Suggestions.css-Dh9vGknx.js";import"./ListBoxItemGroupTemplate-BF1ZMdMn.js";import"./ComboBoxItemGroup-Dpv9BmJs.js";import"./ListItemBaseTemplate-BJJTqK00.js";import"./Token-kg9GxVv1.js";import"./ScrollEnablement-CfYd06M2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFRLr_io.js";import"./ToggleButton-MEuIik9w.js";import"./SuggestionItem-Bh2xAfSB.js";import"./index-CmMlZf5u.js";import"./Option-B57NkkPv.js";import"./index-DSYwj30z.js";import"./SegmentedButton-COs6qsY4.js";import"./index-DjcU9zEx.js";import"./Select-g-D7vPwS.js";import"./InvisibleMessage-CAuS8-0Y.js";import"./slim-arrow-down-tnJadlmU.js";import"./index-18Hv_f08.js";import"./index-Bg2b-U4S.js";import"./index-CxcnGbRu.js";import"./index-4zbN5094.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zPNv8kbn.js";import"./group-2-CVriVckM.js";import"./sort-descending-BXBa6N4F.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cddj7KtI.js";import"./utils-BEKiXHya.js";import"./index-DXpg7xk7.js";import"./index-BDmNg7zx.js";import"./index-DhFaY-S7.js";import"./navigation-down-arrow-Crva_6Xt.js";import"./navigation-right-arrow-CzyBM415.js";import"./navigation-right-arrow-DCKCZfxz.js";import"./useCurrentTheme-eSQOFi4m.js";import"./index-zGZbQuqh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BlmVpLoY.js";import"./paper-plane-CR0-psxw.js";import"./index-DhLMwIyh.js";import"./less-DTZtCal7.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

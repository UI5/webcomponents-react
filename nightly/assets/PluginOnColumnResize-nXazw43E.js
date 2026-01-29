import{j as o}from"./iframe-CyAbfAjR.js";import{useMDXComponents as n}from"./index-06KDG4AT.js";import{I as r,F as m}from"./CommandsAndQueries-B2npLt1g.js";import{M as p,C as s}from"./blocks-D91UiS7A.js";import"./Tag-DcmGlVyp.js";import"./index-Dx49XSH_.js";import"./copy-DuIUrssG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CduZ0bih.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_ujFW-9.js";import"./index-zvTPe1JW.js";import"./index-C2mRWa3H.js";import"./Link-Cj1yeMGo.js";import"./index-DTVJfpj2.js";import"./index-DhltPY3F.js";import"./index-CmuOjIMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyLeRq-g.js";import"./addCustomCSSWithScoping-zxsplMRu.js";import"./index-DGFLZE4P.js";import"./information-Rep9dVOS.js";import"./sys-enter-2-_ycOnn14.js";import"./alert-BWU-sYPN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJqtSdbn.js";import"./delete-DllOoAvf.js";import"./settings-wJbQBcLC.js";import"./NoData-CBuJCjQZ.js";import"./IllustratedMessage-tA6cAG-s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Bnj3-Z8S.js";import"./index-40ttS4tt.js";import"./index-aWCb2995.js";import"./slim-arrow-down-DdNrUHXY.js";import"./Input-DdGxyUaG.js";import"./ResponsivePopoverCommon.css-BVA8ZcTn.js";import"./ValueStateMessage.css-CWyNZgk-.js";import"./Suggestions.css-YuDlW85k.js";import"./ListBoxItemGroupTemplate-CzIT6ZwA.js";import"./ComboBoxItemGroup-BwIIuCG8.js";import"./ListItemBaseTemplate-BllUB4lH.js";import"./Token-BjNM8qNb.js";import"./ScrollEnablement-_UA22n7q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QR6pRRAu.js";import"./ToggleButton-n_dD7Tpj.js";import"./SuggestionItem-DDD35SgE.js";import"./index-ATdZ4JNt.js";import"./Option-BPW8-nZA.js";import"./index-D6n5UcXf.js";import"./SegmentedButton-CVME573C.js";import"./index-JNLd-Q23.js";import"./Select-DTuI2LUV.js";import"./InvisibleMessage-CwIIQAVa.js";import"./slim-arrow-down-BfmJQhdi.js";import"./index--lMleNuo.js";import"./index-C75xx_by.js";import"./index-DIZzn41L.js";import"./index-EwWM-M_C.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRLptP8y.js";import"./group-2-CYDrIlQx.js";import"./sort-descending-zDD6-75v.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C9_XexGy.js";import"./utils-BwnFu7uR.js";import"./index-DM9-P2gy.js";import"./index-Bs-9er-e.js";import"./index-BEWwn3Xg.js";import"./navigation-down-arrow-CL70XcuK.js";import"./navigation-right-arrow-ChTgZnRi.js";import"./navigation-right-arrow-DpOJRghh.js";import"./useCurrentTheme-CWQeV1Cm.js";import"./index-B72PquXy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CvAdZl9h.js";import"./paper-plane-BQ2yiuh0.js";import"./index-Dc7OW__V.js";import"./less-Duojpb1N.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

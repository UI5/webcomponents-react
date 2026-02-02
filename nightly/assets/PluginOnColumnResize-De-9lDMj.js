import{j as o}from"./iframe-0eQE2YFm.js";import{useMDXComponents as n}from"./index-CrzDrume.js";import{I as r,F as m}from"./CommandsAndQueries-vs4Uf2fG.js";import{M as p,C as s}from"./blocks-DA7tG1fG.js";import"./Tag-D9KB_OaV.js";import"./index-CO0N_mR_.js";import"./copy-BusSvtxV.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BFUnxggX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAidMbCx.js";import"./index-nxBbAPWP.js";import"./index-DXkWzVKM.js";import"./Link-CbRTBueg.js";import"./index-CX4m4aKj.js";import"./index-DIoC19fn.js";import"./index-DCkfYqwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwbZNxPW.js";import"./addCustomCSSWithScoping-CEa4HZHN.js";import"./index-Cl7aYaAj.js";import"./information-DHaKlJ23.js";import"./sys-enter-2-CjOjN1qK.js";import"./alert-D98VDEUp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYg0i2eY.js";import"./delete-CoYQXplb.js";import"./settings-VZnwFT1a.js";import"./NoData-BQniyW5-.js";import"./IllustratedMessage-B0A1-0ks.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-teAEBMAS.js";import"./index-DB3CcisP.js";import"./index-D-LeeP8b.js";import"./slim-arrow-down-CkX7thXh.js";import"./Input-BaZHhr9A.js";import"./ResponsivePopoverCommon.css-B4yMTcW1.js";import"./ValueStateMessage.css-CDY6pP0f.js";import"./Suggestions.css-Dmp7acZ3.js";import"./ListBoxItemGroupTemplate-H0m4nnsY.js";import"./ComboBoxItemGroup-rbI26ojW.js";import"./ListItemBaseTemplate-CXUx-zU1.js";import"./Token-CIFLWQCf.js";import"./ScrollEnablement-BrxI8ufh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9gf_cfX.js";import"./ToggleButton-CRw4HV0q.js";import"./SuggestionItem-CGZYm_I2.js";import"./index-DYuYdSg5.js";import"./Option-CJ-Q9Osb.js";import"./index-DbU22zDM.js";import"./SegmentedButton-C0dzqyrm.js";import"./index-BuNlLbX6.js";import"./Select-Dkvc-1du.js";import"./InvisibleMessage-BLfENYQH.js";import"./slim-arrow-down-BPzYFF0q.js";import"./index-CjCjG_de.js";import"./index-B6adVHqs.js";import"./index-CCMgeDTf.js";import"./index-YR2Vv4g_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYqc3-cj.js";import"./group-2-LwVDXe1y.js";import"./sort-descending-DLo-C6x1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBbdY5LP.js";import"./utils-kn_XFzdZ.js";import"./index-BynfEZ9N.js";import"./index-IPEBGIZt.js";import"./index-Drp4RYe3.js";import"./navigation-down-arrow-BlUbHMqy.js";import"./navigation-right-arrow-BiBjVNSK.js";import"./navigation-right-arrow-BWLrQnKx.js";import"./useCurrentTheme-EU1exHdB.js";import"./index-CgfgYE9g.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bhd782rf.js";import"./paper-plane-DxvI1Ia-.js";import"./index-xSCZdNeR.js";import"./less-COfx4Qkm.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

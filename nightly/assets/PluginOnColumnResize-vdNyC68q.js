import{j as o}from"./iframe-D9xLC1tL.js";import{useMDXComponents as r}from"./index-DbpRZxa8.js";import{I as n}from"./CommandsAndQueries-Bb-ZfGVO.js";import{M as m,C as p}from"./blocks-BGODLmXA.js";import"./Tag-CzLAQHXA.js";import"./index-OpsV8Rzk.js";import"./copy-D8VIdABk.js";import{F as s}from"./Footer-C6v4bY5-.js";import"./PageNotFound-DoCPcVkS.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CcH9eEq-.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nPbeq8Ca.js";import"./index-D1uvdQ6M.js";import"./index-_EZjG3sX.js";import"./index-1koIOrPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_OCG7dF.js";import"./addCustomCSSWithScoping-BP0mkxfq.js";import"./index-DNd0s4Kc.js";import"./index-DAKihXgB.js";import"./index-BDQMqb7U.js";import"./information-BC9P8f_O.js";import"./sys-enter-2-B7xp7QZ9.js";import"./alert-BEKLDx3c.js";import"./index-Dursa8QF.js";import"./Illustrations-VmVh_pyg.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjlhRgZm.js";import"./delete-z9tfxYsM.js";import"./settings-u6G-xS72.js";import"./NoData-iFn0kwSC.js";import"./NoFilterResults-C-Tq5PPM.js";import"./index-DCBWbYTm.js";import"./IllustratedMessage-Duwn4FcJ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BttjqPRx.js";import"./Input-DxzMz-_-.js";import"./ResponsivePopoverCommon.css-PL-SXD-8.js";import"./ValueStateMessage.css-DPUcso-C.js";import"./Suggestions.css-Cy8FStCL.js";import"./ListBoxItemGroupTemplate-DNpwMoIM.js";import"./ComboBoxItemGroup-TUxg8lm8.js";import"./ListItemBaseTemplate-DByAGMN-.js";import"./Token-BdgPQmcu.js";import"./ScrollEnablement-CzOU9q0b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DeipcKCC.js";import"./ToggleButton-CvMZWFKF.js";import"./multiselect-all-CE46sock.js";import"./SuggestionItem-DNt3kuCB.js";import"./index-DPec4j3o.js";import"./Option-be2q_1d1.js";import"./index-B7vuJ-iL.js";import"./SegmentedButton-CTkUtfOS.js";import"./index-CEBN14-L.js";import"./Select-C_MyYDPb.js";import"./InvisibleMessage-uL2Nn7st.js";import"./index-DvoCoNJi.js";import"./index-BbcqIyzm.js";import"./index-CSp88prM.js";import"./index-C5uwD5iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-bKIjhF8F.js";import"./group-2-EWjgYNtS.js";import"./sort-descending-C_0FMKzH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpIPK8sg.js";import"./utils-DOCuh_Xw.js";import"./index-BFZOBrHJ.js";import"./index-CN1sWRh8.js";import"./index-CzQc_Cim.js";import"./navigation-down-arrow-C-xgZR_F.js";import"./navigation-right-arrow-ChyfPkbT.js";import"./navigation-right-arrow-DBwa9qHY.js";import"./useCurrentTheme-BGs9iYKG.js";import"./index-BnsjrB_W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjl0qmS-.js";import"./paper-plane-PLOUunSl.js";import"./index-D1mCxT3B.js";import"./less-S94TrLny.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};

import{j as o}from"./iframe-DCGZQC_C.js";import{useMDXComponents as n}from"./index-B27pjG1H.js";import{I as r,F as m}from"./CommandsAndQueries-uRcRdUvd.js";import{M as p,C as s}from"./blocks-ByOpH4Vo.js";import"./Tag-DHXPjUHZ.js";import"./index-CslrJvFJ.js";import"./copy-Dgi6mZSs.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-bNwjwoKI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LnQjqAbL.js";import"./index-CRLztu5A.js";import"./index-BSyI90IW.js";import"./Link-C5I3pPvS.js";import"./index-C7wZhEOz.js";import"./index-DsknM379.js";import"./index-BrLag0KZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClYCQmx8.js";import"./addCustomCSSWithScoping-BW6FwlJC.js";import"./index-CEF4Eds-.js";import"./information-C8TQYWMC.js";import"./sys-enter-2-CUVdfxRu.js";import"./alert-Crt2Z2f-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJGP320l.js";import"./delete-D-YXkhYz.js";import"./settings-EzBVvhXz.js";import"./NoData-d8zem7tn.js";import"./IllustratedMessage-CnKX9Tk1.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BW9Ke9jf.js";import"./index-CDOC7J2z.js";import"./index-D9AJchIM.js";import"./slim-arrow-down-_wzxHbkz.js";import"./Input-CapffHTa.js";import"./ResponsivePopoverCommon.css-BzrCML3m.js";import"./ValueStateMessage.css-6-sNBRhm.js";import"./Suggestions.css-D-dnhNOf.js";import"./ListBoxItemGroupTemplate-D5dJg0Md.js";import"./ComboBoxItemGroup-DE6F-qf6.js";import"./ListItemBaseTemplate-YV074207.js";import"./Token-DFZIaINO.js";import"./ScrollEnablement-CyCwp6Jo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C870crTF.js";import"./ToggleButton-KP9Vp9HZ.js";import"./SuggestionItem-Cg4fIDOL.js";import"./index-DGZcKhxL.js";import"./Option-DRy9pd0C.js";import"./index-CZPGpqu0.js";import"./SegmentedButton-C6NTSQG1.js";import"./index-D-t5rWMX.js";import"./Select-CUh8OEwf.js";import"./InvisibleMessage-DhB_OnV_.js";import"./slim-arrow-down-CU9tdlgh.js";import"./index-BF-MYKhN.js";import"./index-BAw1abYZ.js";import"./index-AZB0cmnA.js";import"./index-DxcbSsdx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BhdveqUE.js";import"./group-2-Bp8JlR3f.js";import"./sort-descending-dnuNk35a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DY9Skaqg.js";import"./utils-DSLZDD_H.js";import"./index-oHN5vii2.js";import"./index-BAnN4Y-3.js";import"./index-BIvqPmoD.js";import"./navigation-down-arrow-CV-2l1CK.js";import"./navigation-right-arrow-ZUNaJnHK.js";import"./navigation-right-arrow-CnOc_T30.js";import"./useCurrentTheme-GWaqzv3s.js";import"./index-BVvo881U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8FzRNE_C.js";import"./paper-plane-BS26Bbh6.js";import"./index-CIEm01bw.js";import"./less-b5IeAnHp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

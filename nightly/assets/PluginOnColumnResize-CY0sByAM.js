import{j as o}from"./iframe-BB6QsCcm.js";import{useMDXComponents as r}from"./index-CpyLbSYP.js";import{I as n}from"./CommandsAndQueries-BiWITRaD.js";import{M as m,C as p}from"./blocks-DGH8wLVm.js";import"./Tag-DYnAL2vL.js";import"./index-DEibJBdY.js";import"./copy-CCxPB9Eo.js";import{F as s}from"./Footer-BhEsQKJ6.js";import"./PageNotFound-CzkzQoiL.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C2ZNW2s5.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nh3gGr7J.js";import"./index-BeoN8qxu.js";import"./index-BFKJbbqY.js";import"./index-CMF9IKMM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctz7lcER.js";import"./addCustomCSSWithScoping-D3Qs4mB8.js";import"./index-ZlEQADjM.js";import"./index-BiTQ1Tdz.js";import"./index-Cg4sRA-Y.js";import"./information-b186mgfr.js";import"./sys-enter-2-BIQ3YVMq.js";import"./alert-BqQjVqfR.js";import"./index-DsUvzGkS.js";import"./Illustrations-ChLBGWr7.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-jMOYBYRN.js";import"./delete-C8ILg1tk.js";import"./settings-Dr6LJqAx.js";import"./NoData-BDy79agX.js";import"./NoFilterResults-BmBQ0hmP.js";import"./index-CWuD9QeE.js";import"./IllustratedMessage-BWy_xvBP.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-HSHxMqNr.js";import"./Input-JioLFYJJ.js";import"./ResponsivePopoverCommon.css-6GP8Lm0R.js";import"./ValueStateMessage.css-l1uIo9PL.js";import"./Suggestions.css-D2YmrWJk.js";import"./ListBoxItemGroupTemplate-CRgv91LV.js";import"./ComboBoxItemGroup-CRHjR_uc.js";import"./ListItemBaseTemplate-LKNuMPHR.js";import"./Token-CGH1x_5F.js";import"./ScrollEnablement-C9jw74Ub.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4b6lCaO.js";import"./ToggleButton-YqJTBHCJ.js";import"./multiselect-all-DVOpmePw.js";import"./SuggestionItem-BPY8t2Ca.js";import"./index-CxKbBauK.js";import"./Option-CLM8LjbY.js";import"./index-CG3ETCdV.js";import"./SegmentedButton-ZShhsJ6z.js";import"./index-Dunx1SzC.js";import"./Select-D3_73qVV.js";import"./InvisibleMessage-B_1ltxKh.js";import"./index-CRTb_SI_.js";import"./index-cQQL1sta.js";import"./index-E6gjuC88.js";import"./index-Du-fLjuZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuyIDAv5.js";import"./group-2-B5iSe4vK.js";import"./sort-descending-3s865Vlf.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdS8cG8s.js";import"./utils-DBM40PGg.js";import"./index-Dz7ZRshb.js";import"./index-GaSTmw-Y.js";import"./index-CV533GXR.js";import"./navigation-down-arrow-DNSZQduQ.js";import"./navigation-right-arrow-D15FSzk1.js";import"./navigation-right-arrow-D6fBPfwP.js";import"./useCurrentTheme-DxOa0FRn.js";import"./index-EkHUYTPl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zpMPSAkb.js";import"./paper-plane-BQP8ObaP.js";import"./index-C9U4bo4t.js";import"./less-b7RFHQTo.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

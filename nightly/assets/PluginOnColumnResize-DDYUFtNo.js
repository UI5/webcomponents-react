import{j as o}from"./iframe-JQDqhQTc.js";import{useMDXComponents as n}from"./index-SjG54pW2.js";import{I as r,F as m}from"./CommandsAndQueries-Crv-3Mfa.js";import{M as p,C as s}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import"./copy-t9TmEwA0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-HEUlY7W4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./index-BpgBwQjv.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fCo2PB5C.js";import"./delete-CLRGeIuZ.js";import"./settings-H07MeRfs.js";import"./NoData-DPeONLDW.js";import"./IllustratedMessage-DAIw2KHQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-1p37yV.js";import"./index-DirchfVR.js";import"./index-D6Ko23ug.js";import"./slim-arrow-down-DtGaajwt.js";import"./Input-DzNOpfWd.js";import"./ResponsivePopoverCommon.css-uDfhSOOV.js";import"./ValueStateMessage.css-D_eI0sN-.js";import"./Suggestions.css-CHR_q4Cp.js";import"./ListBoxItemGroupTemplate-DEm09n7m.js";import"./ComboBoxItemGroup-DMLXAAki.js";import"./ListItemBaseTemplate-Dxaw3pkc.js";import"./Token-C9iKSxX5.js";import"./ScrollEnablement-CV3Pn2pj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DASuqUXG.js";import"./ToggleButton--p8Szuzt.js";import"./SuggestionItem-BAKzXr6j.js";import"./index-DvnAgan1.js";import"./Option-CEDBR-Bt.js";import"./index-eBAbrGNN.js";import"./SegmentedButton-Rqs6WWYK.js";import"./index-Y1J8yyR5.js";import"./Select-DfABSeaX.js";import"./InvisibleMessage-CFQZBAEm.js";import"./slim-arrow-down-CnNq3tWC.js";import"./index-D31LJD9X.js";import"./index-8ECVBj85.js";import"./index-BbzV54Ib.js";import"./index-CV-nf5lU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdWNEJu_.js";import"./group-2-BZUFZ_mF.js";import"./sort-descending-BXUKtHbT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fI0mUgfo.js";import"./utils-BBO9bjZR.js";import"./index-BaCIHOce.js";import"./index-mdq0FRsA.js";import"./index-Bz-Pghpc.js";import"./navigation-down-arrow-B-pSqjVl.js";import"./navigation-right-arrow-C9hFnSZf.js";import"./navigation-right-arrow-D5ZYuJjY.js";import"./useCurrentTheme-dEMZXqrK.js";import"./index-yCViCBv9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzjLx_qb.js";import"./paper-plane-CNtGouJp.js";import"./index-C5yyMQAi.js";import"./less-CNnQlmUL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

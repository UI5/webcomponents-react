import{j as o}from"./iframe-BeAHz6cC.js";import{useMDXComponents as n}from"./index-IuDgzHrg.js";import{I as r,F as m}from"./CommandsAndQueries-D97dtm9O.js";import{M as p,C as s}from"./blocks-BFIGDLi7.js";import"./Tag-D9qmbNXw.js";import"./index-BxL3HTx3.js";import"./copy-CeLNiPKq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bef49mXS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz53yeIo.js";import"./index-BJX7RQS4.js";import"./index-DADITnZh.js";import"./Link-DcHF9WJI.js";import"./index-B-C-Jm2N.js";import"./index-BgUv4ZgK.js";import"./index-dtYUUSxT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0TPubq3.js";import"./addCustomCSSWithScoping--2mgu3TN.js";import"./index-D74mYq85.js";import"./information-CKz_vH8g.js";import"./sys-enter-2-DjAoJc05.js";import"./alert-DbaxRKJL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYfsnrA-.js";import"./delete-BbZcD_Jy.js";import"./settings-B-7ACuFB.js";import"./NoData-DRgLX-o5.js";import"./IllustratedMessage-C5En4lhQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-0Ax5XtPu.js";import"./index-mMXt2Ig4.js";import"./index-BPce1aTx.js";import"./slim-arrow-down-CnwrFvZs.js";import"./Input-C1KpoHfz.js";import"./ResponsivePopoverCommon.css-DmlFnob0.js";import"./ValueStateMessage.css-DKcV5GT7.js";import"./Suggestions.css--wo_Z0Zb.js";import"./ListBoxItemGroupTemplate-Cg8nSs_y.js";import"./ComboBoxItemGroup-CACE9fiW.js";import"./ListItemBaseTemplate-SOqbHsMM.js";import"./Token-CPys-ICN.js";import"./ScrollEnablement-SmS2scF8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkxzzqLh.js";import"./ToggleButton-B1-jynwA.js";import"./SuggestionItem-DiIPrr67.js";import"./index-DFLqYco2.js";import"./Option-BP8-vTtd.js";import"./index-B86j6xyl.js";import"./SegmentedButton-CETefqCy.js";import"./index-r7IiC7sj.js";import"./Select-BJKmcwBb.js";import"./InvisibleMessage-BniauCX7.js";import"./slim-arrow-down-C6Y9ZcYg.js";import"./index-D6yRflfZ.js";import"./index-BfCFP5Is.js";import"./index-C6jXAYSN.js";import"./index-CvVdNUDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zo7K4tca.js";import"./group-2-BBGAdkSh.js";import"./sort-descending-C3RNb67b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGI_tmay.js";import"./utils-tfYvJxoP.js";import"./index-Dat5JbHB.js";import"./index-6ACe6tc9.js";import"./index-2vVJU3bI.js";import"./navigation-down-arrow-BZ4wl1wA.js";import"./navigation-right-arrow-DXJ8hwha.js";import"./navigation-right-arrow-C_x6dcVg.js";import"./useCurrentTheme-BmXY1mLX.js";import"./index-Be9aI4hM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DunOEBQz.js";import"./paper-plane-DZNu3P2r.js";import"./index-4NHwF18G.js";import"./less-GlUFt5eG.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

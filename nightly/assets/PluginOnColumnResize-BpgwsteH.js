import{j as o}from"./iframe-JepDsySv.js";import{useMDXComponents as r}from"./index-BGpK8Gfn.js";import{I as n}from"./CommandsAndQueries-BpbXUgFJ.js";import{M as m,C as p}from"./blocks-BbBU6U9u.js";import"./Tag-B5HHC3_D.js";import"./index-CgzvULcW.js";import"./copy-D2Pke32f.js";import{F as s}from"./Footer-DkGRGaaK.js";import"./PageNotFound-BYj9CuoF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DvFdGoFq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BLuv4AbX.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./index-Bd6WgbUi.js";import"./index-0BxTwmFy.js";import"./index-CIXtBD0J.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./index-8tSJZtFG.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DB1X0-yk.js";import"./delete-BMjzJ8I_.js";import"./settings-D51mHDx-.js";import"./NoData-DTdJHQio.js";import"./NoFilterResults-Dx8L-MqR.js";import"./index-BNDpV-__.js";import"./IllustratedMessage-Dynl3KMz.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-CbxbNk1w.js";import"./slim-arrow-down-Dt-7CG4Q.js";import"./Input-f39H6uy6.js";import"./ResponsivePopoverCommon.css-BKF0yN8r.js";import"./ValueStateMessage.css-C0leCwz7.js";import"./Suggestions.css-DPwYa0Rw.js";import"./ListBoxItemGroupTemplate-DuwHciDt.js";import"./ComboBoxItemGroup-iyr2zk0K.js";import"./ListItemBaseTemplate-yAH3C8cG.js";import"./Token-Bw86fiqE.js";import"./ScrollEnablement-Bf0xODSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DaU3lC3b.js";import"./ToggleButton-DRj1b1JE.js";import"./SuggestionItem-Db9ZyQ-5.js";import"./index-Diqc62Zx.js";import"./Option-B-qv-w1U.js";import"./index-DAt4QP07.js";import"./SegmentedButton-B71_4ItV.js";import"./index-B9-qYlKd.js";import"./Select-BmEwDHzx.js";import"./InvisibleMessage-DglvjQpx.js";import"./slim-arrow-down-DOXlkwy5.js";import"./index-BLd9zCHc.js";import"./index-BrKPVcK1.js";import"./index-DRDJaTFL.js";import"./index-Dd7JImE6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-9Jnsuke6.js";import"./group-2-CJV4M1Rl.js";import"./sort-descending-C5QauENK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-l64aeKU4.js";import"./utils-BBoBz28-.js";import"./index-CPAJ8klG.js";import"./index-Cq1parp_.js";import"./index-BjeUsn3F.js";import"./navigation-down-arrow-Csf9CClE.js";import"./navigation-right-arrow-D7m_6N7r.js";import"./navigation-right-arrow-D9pak7Fp.js";import"./useCurrentTheme-CZHOHdUN.js";import"./index-C6SVu-VQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cj9ds3Xk.js";import"./paper-plane-DwaO0bjK.js";import"./index-C8CCEPvY.js";import"./less-D8z_9I33.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(s,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};

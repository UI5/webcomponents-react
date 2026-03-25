import{j as o}from"./iframe-DDwr9UO6.js";import{useMDXComponents as r}from"./index-CQ-nOjPT.js";import{I as n}from"./CommandsAndQueries-CW-He0gJ.js";import{M as m,C as p}from"./blocks-4n5he8k4.js";import"./Tag-85Xc8Sa5.js";import"./index-Vbr96S-1.js";import"./copy-DiJyffUH.js";import{F as s}from"./Footer-DJ4mPzj6.js";import"./PageNotFound-4kcWV7p6.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D-XOdvyW.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ioSKjh9y.js";import"./index-BlO2ebQP.js";import"./index-DBFNlRvR.js";import"./index-DlsPhuqx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4AOINVU.js";import"./addCustomCSSWithScoping-BY1iD3uW.js";import"./index-BmgPGln0.js";import"./index-BubbpkEs.js";import"./index-CwOzyR0V.js";import"./information-B0DjFwsh.js";import"./sys-enter-2-CHn1eYD9.js";import"./alert-t6gJkZ57.js";import"./index-DJm0resn.js";import"./Illustrations-CKFjYZ6M.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DvrM5NOP.js";import"./delete-CnbCzWbj.js";import"./settings-Ch08yiWE.js";import"./NoData-4GIocKhd.js";import"./NoFilterResults-B4DPdeet.js";import"./index-D5xRes8S.js";import"./IllustratedMessage-DtlzznLL.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BXJwcQQG.js";import"./Input-DInMIBTe.js";import"./ResponsivePopoverCommon.css-DVrY-Ohc.js";import"./ValueStateMessage.css-CQmBeT7b.js";import"./Suggestions.css-BmvaYmek.js";import"./ListBoxItemGroupTemplate-B-K43gLI.js";import"./ComboBoxItemGroup-BqI4sbwM.js";import"./ListItemBaseTemplate-DYSR2mJj.js";import"./Token-DCciEgLN.js";import"./ScrollEnablement-BO8X0bLa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWTSAHcw.js";import"./ToggleButton-BHUbnu3Z.js";import"./multiselect-all-CImnb8qK.js";import"./SuggestionItem-D3aPEE1q.js";import"./index-DeIhhhj4.js";import"./Option-jQcbOOHD.js";import"./index-BVaMi0i5.js";import"./SegmentedButton-C5-qziHY.js";import"./index-BzOkRawL.js";import"./Select--m8ZPefa.js";import"./InvisibleMessage-DCXJk4rP.js";import"./index-BN3GamvY.js";import"./index-DcZRAYxL.js";import"./index-XVwKOOTJ.js";import"./index-CgeWzUMI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-lC1PAHmf.js";import"./group-2-Bthb7zJo.js";import"./sort-descending-C-K6Ysjt.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CnRGw2Cu.js";import"./utils-DxckeIWg.js";import"./index-BD_Jst0w.js";import"./index-JNC6BieY.js";import"./index-Cx1xQlOJ.js";import"./navigation-down-arrow-CJcOr1ZL.js";import"./navigation-right-arrow-CQs_7-hB.js";import"./navigation-right-arrow-DzRJQC_-.js";import"./useCurrentTheme-6r6M5Xd5.js";import"./index-CJWNtEi-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CL5Aty9r.js";import"./paper-plane-CQwjrpMY.js";import"./index-BO23DQR-.js";import"./less-DL-_Ursx.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

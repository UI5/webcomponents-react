import{j as o}from"./iframe-BHRyWWCK.js";import{useMDXComponents as n}from"./index-vmzMr3GX.js";import{I as r,F as m}from"./CommandsAndQueries-BrUcvXA7.js";import{M as p,C as s}from"./blocks-DoCMQEa0.js";import"./Tag-R17NMrYt.js";import"./index-CZEJadic.js";import"./copy-rEHIQTke.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dn7VAWka.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UnB73Rnf.js";import"./index-DibDZuef.js";import"./index-BKKHGvr5.js";import"./Link-v8HZQWxp.js";import"./index-Cm33Vcx3.js";import"./index-DCtea6ve.js";import"./index-CJXqjvvM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEXhzcrM.js";import"./addCustomCSSWithScoping-W1ZwlwrN.js";import"./index-CBZ8EfYd.js";import"./information-Nr6PmwbG.js";import"./sys-enter-2--GTeHKCC.js";import"./alert-CaNIaeyx.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1M8nkNX0.js";import"./delete-CTFibazR.js";import"./settings-pDITWEjw.js";import"./NoData-JLZTrtOP.js";import"./IllustratedMessage-Cu6GWfHR.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DwQvGPpm.js";import"./index-DJiwBl3_.js";import"./index-DgAZ2xF_.js";import"./slim-arrow-down-CRkJhUFV.js";import"./Input-BhCBHTib.js";import"./ResponsivePopoverCommon.css-BUbUes1r.js";import"./ValueStateMessage.css-BKyDhgmA.js";import"./Suggestions.css-C7i9nEw7.js";import"./ListBoxItemGroupTemplate-DjmSj5Ii.js";import"./ComboBoxItemGroup-BvHhbI-q.js";import"./ListItemBaseTemplate-CS4PXitH.js";import"./Token-BTLeMA0R.js";import"./ScrollEnablement-DFn_AcWU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8svZRnYC.js";import"./ToggleButton-Dbbqw8NC.js";import"./SuggestionItem-Dl2JpPy1.js";import"./index-DCuRMYTu.js";import"./Option-D23nggyx.js";import"./index-kofx5hev.js";import"./SegmentedButton-CgEID4bj.js";import"./index-BZ0xl2ay.js";import"./Select-BbotqLf_.js";import"./InvisibleMessage-Coe0Io3Y.js";import"./slim-arrow-down-4vXxtfSR.js";import"./index-DyS5aeY8.js";import"./index-8j0U0p6k.js";import"./index-CgNK1KA-.js";import"./index-BDlnLxSo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDR77_RK.js";import"./group-2-X3Rnt8GU.js";import"./sort-descending-mIkhhQAV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYPEZsB4.js";import"./utils-CkDRuQDp.js";import"./index-B2U7uG2L.js";import"./index-DD47so0i.js";import"./index-CAq1dCAC.js";import"./navigation-down-arrow-Ct6f73lC.js";import"./navigation-right-arrow-gjH-5iV-.js";import"./navigation-right-arrow-Da29Og35.js";import"./useCurrentTheme-B-94HWui.js";import"./index-CiAXoTzx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BTNxBqyX.js";import"./paper-plane-Dw8DE4LY.js";import"./index-BrVWHGQ1.js";import"./less-Cida6587.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

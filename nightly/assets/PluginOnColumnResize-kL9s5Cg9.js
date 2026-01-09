import{j as o}from"./iframe-Cofg3NYG.js";import{useMDXComponents as n}from"./index-IvWpiXeJ.js";import{I as r,F as m}from"./CommandsAndQueries-84NNvrTK.js";import{M as p,C as s}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import"./copy-CvrT2nje.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CkrLKY20.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./index-DsO0qxxT.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DMD_db3q.js";import"./delete-TL4LRMCi.js";import"./settings-C1P4No8J.js";import"./NoData-CgchvHoE.js";import"./IllustratedMessage-CMCdUK9z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-a2MoTWEq.js";import"./index-BonMBjS3.js";import"./index--6KC0JCG.js";import"./slim-arrow-down-Df9CY41D.js";import"./Input-B-vnnKWa.js";import"./ResponsivePopoverCommon.css-9aKfGdr3.js";import"./ValueStateMessage.css-BoHhoqcx.js";import"./Suggestions.css-D5uqg1qj.js";import"./ListBoxItemGroupTemplate-CJbarH5R.js";import"./ComboBoxItemGroup-CgHhWkM2.js";import"./ListItemBaseTemplate-C6tlxy6i.js";import"./Token-D4V_lrT9.js";import"./ScrollEnablement-Bd2IYKOt.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMSXl_i-.js";import"./ToggleButton-DGX7LzLH.js";import"./SuggestionItem-BxKCWjfv.js";import"./index-ByINFavX.js";import"./Option-BcJSYqub.js";import"./index-97091ejm.js";import"./SegmentedButton-B2GitR0l.js";import"./index-B-yS9GRZ.js";import"./Select-Dl-KXknk.js";import"./InvisibleMessage-DjTJM9Zt.js";import"./slim-arrow-down-B4mJ9D12.js";import"./index-DeuDVa4c.js";import"./index-CqFtG3xH.js";import"./index-B8BWpeh3.js";import"./index-eAFdqwk5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CnPweenN.js";import"./group-2-ByJcrAU6.js";import"./sort-descending-CEF1xmWI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CW-WMzJS.js";import"./utils-wxGQZEOP.js";import"./index-ChbRKq5D.js";import"./index-nmwZf_ft.js";import"./index-NtXsw5yB.js";import"./navigation-down-arrow-z6IAtkEY.js";import"./navigation-right-arrow-jTHlmXwB.js";import"./navigation-right-arrow-E61PVxSn.js";import"./useCurrentTheme-Bn9zud42.js";import"./index-BdF0tCbe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBrJUf6F.js";import"./paper-plane-y9qmaI4M.js";import"./index-DmRfqt3l.js";import"./less-D1DlvNUe.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

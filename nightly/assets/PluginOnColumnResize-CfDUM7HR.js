import{j as o}from"./iframe-Caxtdkba.js";import{useMDXComponents as n}from"./index-DHHkTN_-.js";import{I as r,F as m}from"./CommandsAndQueries-BOspo6oR.js";import{M as p,C as s}from"./blocks-DEPL7JMW.js";import"./Tag-Dd11nsEW.js";import"./index-DhW1lu1C.js";import"./copy-Cm-UF3e8.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C2Zc33aG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKnt97hC.js";import"./index-BxIjhTnW.js";import"./index-Cqh1dpEf.js";import"./Link-Chm6Epcv.js";import"./index-tXGb4skN.js";import"./index-IuLzHbpC.js";import"./index-BgaBDTu4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-n5f_MbqF.js";import"./addCustomCSSWithScoping-kZmGLgIL.js";import"./index-BqfFpMrh.js";import"./information-DxEPh37b.js";import"./sys-enter-2-DZWaIs6H.js";import"./alert-CkjRTT5V.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJfJ5RYR.js";import"./delete-DOCQmW93.js";import"./settings-DpGsKXDA.js";import"./NoData-d0MQisZ4.js";import"./IllustratedMessage-BBsMwhuB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DUeNSHji.js";import"./index-JXLLmO3L.js";import"./index-BYb3crn-.js";import"./slim-arrow-down-BkDq8Vwz.js";import"./Input-CcsLtqg3.js";import"./ResponsivePopoverCommon.css-DeZjCLek.js";import"./ValueStateMessage.css-YrUrMqHL.js";import"./Suggestions.css-CoXO6GCu.js";import"./ListBoxItemGroupTemplate-BW85OpbI.js";import"./ComboBoxItemGroup-BQ3_Q8de.js";import"./ListItemBaseTemplate-BQxOqWbZ.js";import"./Token-5HJMpSXf.js";import"./ScrollEnablement-C_o7x22r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqNCSywV.js";import"./ToggleButton-C6WMbDLb.js";import"./SuggestionItem-DUIHP02k.js";import"./index-CHZgJlEv.js";import"./Option-C3rQLOa9.js";import"./index-feJ7vEoL.js";import"./SegmentedButton-vU2qNGQ4.js";import"./index-P9r5CdKp.js";import"./Select-mLNSxhym.js";import"./InvisibleMessage-cd3uS02O.js";import"./slim-arrow-down-C8iSa2f2.js";import"./index-NXjyPYYS.js";import"./index-Duo5A0v-.js";import"./index-DulQB3X1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B7qF2DKQ.js";import"./group-2-Bj0PGwVo.js";import"./sort-descending-Cot-3-zz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeI_-Pkx.js";import"./utils-D5L0CqRc.js";import"./index-CAxK_BaB.js";import"./index-BDr19BLg.js";import"./index-BcL5_vtY.js";import"./navigation-down-arrow-rxWIaO6B.js";import"./navigation-right-arrow-BFr-7gTd.js";import"./navigation-right-arrow-bvuYFyRE.js";import"./useCurrentTheme-CfsQm3Rx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfKve24a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZ4Bq_Ho.js";import"./paper-plane-F06gAmny.js";import"./index-BcF_Hj2S.js";import"./less-BdZt1fch.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

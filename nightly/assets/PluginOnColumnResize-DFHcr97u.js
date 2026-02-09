import{j as o}from"./iframe-Btp5V8Z0.js";import{useMDXComponents as n}from"./index-BiuvjkCM.js";import{I as r,F as m}from"./CommandsAndQueries-ytOuH94-.js";import{M as p,C as s}from"./blocks-3iq6MjE7.js";import"./Tag-BV9BFAPZ.js";import"./index-CP5vX4Iw.js";import"./copy-BjvlOXfT.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BnbIzEo_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MTTfL1A6.js";import"./index-DfXM2ykx.js";import"./index-dzmgvIYj.js";import"./Link-DrqLISlX.js";import"./index-jYjWydQt.js";import"./index-4wRER8Ea.js";import"./index-cFxIHlDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOasFR1W.js";import"./addCustomCSSWithScoping-BYe08cUl.js";import"./index-Byqgf8K2.js";import"./information-D6meyH0P.js";import"./sys-enter-2-DFu1S1AE.js";import"./alert-Ble7Zr5g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDRO25a3.js";import"./delete-DkVxgj5N.js";import"./settings-B8j3pPLA.js";import"./NoData-Du8GcV6i.js";import"./IllustratedMessage-BCiJ057a.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D6qm1nzI.js";import"./index-BujEWK6T.js";import"./index-DYG2Vdb4.js";import"./slim-arrow-down-j9pUzMGy.js";import"./Input-aWxLYUOH.js";import"./ResponsivePopoverCommon.css-BQy8rUfs.js";import"./ValueStateMessage.css-LOPut24L.js";import"./Suggestions.css-CYbXagSM.js";import"./ListBoxItemGroupTemplate-CAvECdcE.js";import"./ComboBoxItemGroup-BqcdpAL3.js";import"./ListItemBaseTemplate--uvy-kc0.js";import"./Token-sB_rM26o.js";import"./ScrollEnablement-B1RfGkn3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKFwa_4E.js";import"./ToggleButton-DKEo7U1V.js";import"./SuggestionItem-zI-P11G7.js";import"./index-ogcyTCWN.js";import"./Option-DXRWtWSV.js";import"./index-C9V8CTKB.js";import"./SegmentedButton-DYA5jfhl.js";import"./index-evKF2db_.js";import"./Select-CxUvCZuJ.js";import"./InvisibleMessage-BApXsmDb.js";import"./slim-arrow-down-DVukQiW-.js";import"./index-CmIpi4Rb.js";import"./index-Bp86dvN4.js";import"./index-Pmf_BpVu.js";import"./index-B5ZwNjp_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-l9YCafK6.js";import"./group-2-znhZwlOC.js";import"./sort-descending-BcNVNZRA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZS5vz4t.js";import"./utils-KxVQ4L7v.js";import"./index-DDKkq_Id.js";import"./index-DR-CaoyZ.js";import"./index-BOghOFF-.js";import"./navigation-down-arrow-BVesL-Rd.js";import"./navigation-right-arrow-CoaCyhr_.js";import"./navigation-right-arrow-CG1gauat.js";import"./useCurrentTheme-B6Ee2Jvq.js";import"./index-Do2i3zOr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-H0EZaAzq.js";import"./paper-plane-DuZ0ORth.js";import"./index-XGPworLT.js";import"./less-Cbt4luUN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

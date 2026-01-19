import{j as o}from"./iframe-DD7p555z.js";import{useMDXComponents as n}from"./index-DKhj08U7.js";import{I as r,F as m}from"./CommandsAndQueries-CKwguJVF.js";import{M as p,C as s}from"./blocks-BAWH2K4k.js";import"./Tag-YiwRoJC6.js";import"./index-iP_JBMT4.js";import"./copy-BvS2jijZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C5pOz0ZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl6MCkfr.js";import"./index-DNGDxbjZ.js";import"./index-CjiVltgT.js";import"./Link-CERJMGdw.js";import"./index-4YigTS5a.js";import"./index-D_31Usqf.js";import"./index-k0OzfFck.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-buNhKImf.js";import"./addCustomCSSWithScoping-rp5A8jrF.js";import"./index-Dnnz-gOR.js";import"./information-C853I-0E.js";import"./sys-enter-2-DMe79a_K.js";import"./alert-Dl3EzObX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bny1qvAq.js";import"./delete-BtGPjnXV.js";import"./settings-BhzLKQVu.js";import"./NoData-_2lOlioJ.js";import"./IllustratedMessage-Db4dYMTY.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C3tYIcQs.js";import"./index-B_lzyoDe.js";import"./index-DYHzkt2a.js";import"./slim-arrow-down-ORtmHOmj.js";import"./Input-Ei-pBwN-.js";import"./ResponsivePopoverCommon.css-B_lrtiGe.js";import"./ValueStateMessage.css-BYebuE_v.js";import"./Suggestions.css--XkU6wI1.js";import"./ListBoxItemGroupTemplate-BA8CQI5_.js";import"./ComboBoxItemGroup-amfpDGl-.js";import"./ListItemBaseTemplate-BhLhD8bb.js";import"./Token-CT7ftEMU.js";import"./ScrollEnablement-DFuXjWdf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CoZosRcD.js";import"./ToggleButton-DY3Om3L7.js";import"./SuggestionItem-K95onNiN.js";import"./index-kHhCuAsg.js";import"./Option-CnNxmnPy.js";import"./index-62qOKVOB.js";import"./SegmentedButton-DFPoBTLB.js";import"./index-BBg6UU0Y.js";import"./Select-BQbmMxfV.js";import"./InvisibleMessage-CBGNW5FA.js";import"./slim-arrow-down-Bwk9f88K.js";import"./index-BzdnDtMC.js";import"./index-Cio2hU6W.js";import"./index-DAJ5VVgK.js";import"./index-KjntBnT6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DH5ZMpfp.js";import"./group-2-Y-L0oUMk.js";import"./sort-descending-YsDgqG23.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHyUerlm.js";import"./utils-Bfnw6Lvc.js";import"./index-CPJBiYbU.js";import"./index-hyvu0X_I.js";import"./index-BtsWC2q8.js";import"./navigation-down-arrow-B6X7QWDX.js";import"./navigation-right-arrow-BJP2JOaP.js";import"./navigation-right-arrow-DgwpS7dp.js";import"./useCurrentTheme-DUXYJBGz.js";import"./index-CxpEwIF3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-O-Qg-Ti_.js";import"./paper-plane-g37kvv4L.js";import"./index-Dwp_loUQ.js";import"./less-BN_J84Q7.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

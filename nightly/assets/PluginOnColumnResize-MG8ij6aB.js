import{j as o}from"./iframe-BF6vIVo6.js";import{useMDXComponents as n}from"./index-LfmOxbs8.js";import{I as r,F as m}from"./CommandsAndQueries-BZWG0qBB.js";import{M as p,C as s}from"./blocks-BEVYxzM4.js";import"./Tag-Bbrw4Mg6.js";import"./index-COzDMtK9.js";import"./copy-BsYfEWuv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CkQ2wSOg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdhWaCX8.js";import"./index-CTIQkpgO.js";import"./index-DdICQhrF.js";import"./Link-C3nR6kZV.js";import"./index-DoBDF59y.js";import"./index-B5sOe_-e.js";import"./index-CKX87Paa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsUQb2cX.js";import"./addCustomCSSWithScoping-B22aBF7H.js";import"./index-Do8jjW18.js";import"./information-v6F873AP.js";import"./sys-enter-2-WuXn7rus.js";import"./alert-C89y0cfE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BV9bdH-I.js";import"./delete-_0aprNE3.js";import"./settings-DzcaBuf0.js";import"./NoData-IEdNW4HF.js";import"./IllustratedMessage-mZZ5M3hY.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DLPo97KT.js";import"./index-Beg2KpGg.js";import"./index-uAJjS3qq.js";import"./slim-arrow-down-C9P7Hlpe.js";import"./Input-DRowSby-.js";import"./ResponsivePopoverCommon.css-B-2GlP7R.js";import"./ValueStateMessage.css-BEO0_Z3X.js";import"./Suggestions.css-C2b5Aeiw.js";import"./ListBoxItemGroupTemplate-CS3AT4TS.js";import"./ComboBoxItemGroup-WphZKhlt.js";import"./ListItemBaseTemplate-DAzagmTa.js";import"./Token-CNKrPbUL.js";import"./ScrollEnablement-Shykj-eY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-6d4If0Ew.js";import"./ToggleButton-boRRQzZL.js";import"./SuggestionItem-AUy5_5fB.js";import"./index-DfMJrLMR.js";import"./Option-DhB4mJA1.js";import"./index-BGv_PDyM.js";import"./SegmentedButton-B0umvJpk.js";import"./index-t-4IUksp.js";import"./Select-DeexmKC7.js";import"./InvisibleMessage-Dk7GG3Kc.js";import"./slim-arrow-down-Cl2du_e5.js";import"./index-BCkDkjBv.js";import"./index-De6ICbSu.js";import"./index-8i29fMry.js";import"./index-DStEZLfo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdpK6p98.js";import"./group-2-B-a5enHW.js";import"./sort-descending-CNTskMhX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CeiuQBAD.js";import"./utils-BM8ogcFa.js";import"./index-CC1_JxWg.js";import"./index-Nex0FRzm.js";import"./index-ByLuJaAj.js";import"./navigation-down-arrow-BCi3JcgJ.js";import"./navigation-right-arrow-D4L2xcHa.js";import"./navigation-right-arrow-CbOrGt_U.js";import"./useCurrentTheme-D2xu2Mdc.js";import"./index-DqdEPxLj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-MBIUA1Lt.js";import"./paper-plane-CRSL_yhr.js";import"./index-BpcWEnj0.js";import"./less-BOu5m1lW.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-LwV4ThFO.js";import{useMDXComponents as n}from"./index-q5DcgXr2.js";import{I as r,F as m}from"./CommandsAndQueries-DPfuXfqc.js";import{M as p,C as s}from"./blocks-Dip3aHJy.js";import"./Tag-By0Vj2CL.js";import"./index-DWh2FbsL.js";import"./copy-DMZz3mt-.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-OE4IQayz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg0Ul4LB.js";import"./index-DO4DjFA6.js";import"./index-SgnU4gKB.js";import"./Link-BYRJUWj7.js";import"./index-D33G3UXY.js";import"./index-wHmvTXkA.js";import"./index-BYce_ve5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4bciS0g0.js";import"./addCustomCSSWithScoping-d025F1t1.js";import"./index-CtGk4fFi.js";import"./information-CKI5p7Rd.js";import"./sys-enter-2-DqN3aKF8.js";import"./alert-D7vNrBhD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-UAK6cQzZ.js";import"./delete-CauzNY6s.js";import"./settings-Cbp-krdL.js";import"./NoData-CGOdrUN8.js";import"./IllustratedMessage-CFJfKJEr.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BsCD8QkQ.js";import"./index-CoSHPRLg.js";import"./index-CDMB05HS.js";import"./slim-arrow-down-WoqU4jL-.js";import"./Input-DOTZG0nG.js";import"./ResponsivePopoverCommon.css-tY7w10PH.js";import"./ValueStateMessage.css-DJKlg9Od.js";import"./Suggestions.css-DRakvl3F.js";import"./ListBoxItemGroupTemplate-milAspIm.js";import"./ComboBoxItemGroup-CrXR4k4L.js";import"./ListItemBaseTemplate-DuvtnBwJ.js";import"./Token-y8RIX3ya.js";import"./ScrollEnablement-D9Zcstlh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtDMm1v7.js";import"./ToggleButton-RIWtYPbc.js";import"./SuggestionItem-DyYlmNjM.js";import"./index-DIRV_TxT.js";import"./Option-Dkc0uo7W.js";import"./index-DGmo98C5.js";import"./SegmentedButton-CZr2foPu.js";import"./index-C2nkR5h8.js";import"./Select-CBP2iwxK.js";import"./InvisibleMessage-BYSN34jq.js";import"./slim-arrow-down-lmv38PwW.js";import"./index-Bft62lZ1.js";import"./index-DoFC_5Xy.js";import"./index-DHEWQlqP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-_Rj7gOsX.js";import"./group-2-C4kBukdN.js";import"./sort-descending-DIujgPym.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BaXB6j-X.js";import"./utils-DK9ffFkD.js";import"./index-R07kLpjv.js";import"./index-CxDk8r6E.js";import"./index-Bi58trhw.js";import"./navigation-down-arrow-BMjcgPuL.js";import"./navigation-right-arrow-troHvNPU.js";import"./navigation-right-arrow-csDoLCuz.js";import"./useCurrentTheme-baH4C2qI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gurjTWBv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BC_dUgj5.js";import"./paper-plane-B-mGCJfh.js";import"./index-z3X-Jjgi.js";import"./less-D7iDBJTJ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

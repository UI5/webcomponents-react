import{j as o}from"./iframe-ByiiILXu.js";import{useMDXComponents as n}from"./index-DYpmG0kU.js";import{I as r,F as m}from"./CommandsAndQueries-ByQHAThU.js";import{M as p,C as s}from"./blocks-DrNhXH8Y.js";import"./Tag-WBOqYu0X.js";import"./index-B20WCXLG.js";import"./copy-08ilKZ0c.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bb5ta9Ng.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8yUpcOxv.js";import"./index-y2DJOFuG.js";import"./index-C2Yky6-6.js";import"./Link-DX54TCdQ.js";import"./index-C0jaTjnN.js";import"./index-BkgEbRU4.js";import"./index-DJ81LlKI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7LYDV0x0.js";import"./addCustomCSSWithScoping-DIYkZsvP.js";import"./index-COPBcnoz.js";import"./information-tN-lRIsU.js";import"./sys-enter-2-eFq8QnH9.js";import"./alert-DCLbzn71.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKK8YXuW.js";import"./delete-D4zm_h0p.js";import"./settings-MyF3qJVm.js";import"./NoData-ljFJXsUq.js";import"./IllustratedMessage-CqwMvOWG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BKp3AX8w.js";import"./index-D9LX0obP.js";import"./index-0fiPvY1b.js";import"./slim-arrow-down-Cz12efI2.js";import"./Input-n_T7UVDU.js";import"./ResponsivePopoverCommon.css-C1nFDre3.js";import"./ValueStateMessage.css-DknAZyiZ.js";import"./Suggestions.css-CltqZkwX.js";import"./ListBoxItemGroupTemplate-C7tSoEtb.js";import"./ComboBoxItemGroup-BKPF_atD.js";import"./ListItemBaseTemplate-F0fB9wHg.js";import"./Token-DEhWs7Mh.js";import"./ScrollEnablement--8rTw7W_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cju6LXlU.js";import"./ToggleButton-zDuc9RuQ.js";import"./SuggestionItem-QE9DA7xp.js";import"./index-BDP3hZHD.js";import"./Option-7PVSujFd.js";import"./index-L1FHo7Pk.js";import"./SegmentedButton-vjq3bmSv.js";import"./index-Cy9D_6lg.js";import"./Select-DeEFCAk3.js";import"./InvisibleMessage-1Hg6cN3L.js";import"./slim-arrow-down-Ci1RQCXj.js";import"./index-CKMaXFVW.js";import"./index-MHLsz4iU.js";import"./index-DvDvcTBA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B9g-vpCv.js";import"./group-2-CohTd7MD.js";import"./sort-descending-CEdiQwd1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-COGP4GHg.js";import"./utils-4syTV-OB.js";import"./index-CZYJmP3L.js";import"./index-2lxrn3Jb.js";import"./index-D5AoDYXK.js";import"./navigation-down-arrow-DFV_iHIE.js";import"./navigation-right-arrow-vs1LV1Nl.js";import"./navigation-right-arrow-6AlcfDn3.js";import"./useCurrentTheme-ibuaoMhS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-4MBDlEsO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7T1wmeJR.js";import"./paper-plane-Dpb_fZ67.js";import"./index-Dqpgkjkr.js";import"./less-B2jLQw2j.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

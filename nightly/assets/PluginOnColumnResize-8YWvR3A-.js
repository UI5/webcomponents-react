import{j as o}from"./iframe-DvHwewhR.js";import{useMDXComponents as n}from"./index-CLaogw5S.js";import{I as r,F as m}from"./CommandsAndQueries-BNdncSiU.js";import{M as p,C as s}from"./blocks-CB2I7-76.js";import"./Tag-CbT4PDaW.js";import"./index-Bt09l3yh.js";import"./copy-CCEG4Gow.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dd_rnw90.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./index-Dxi3lBUy.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiieVpdk.js";import"./delete-C50WcJDY.js";import"./settings-DvTsYRr7.js";import"./NoData-iB_8MDPa.js";import"./IllustratedMessage-oVo54I0H.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-cHrD6kwg.js";import"./index-CEYEmD8k.js";import"./index-8-MFD30_.js";import"./slim-arrow-down-BCqe8rnW.js";import"./Input-5FKrcxfj.js";import"./ResponsivePopoverCommon.css-CyL8R70X.js";import"./ValueStateMessage.css-BKuLTXW_.js";import"./Suggestions.css-Bkx-OrvG.js";import"./ListBoxItemGroupTemplate-CJ4lliK3.js";import"./ComboBoxItemGroup-4ruschY4.js";import"./ListItemBaseTemplate-T-VZoBk6.js";import"./Token-Z5rUiF0C.js";import"./ScrollEnablement-BGx-icSx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRn_nQZN.js";import"./ToggleButton-CNBbGQUy.js";import"./SuggestionItem-D9PSkBzC.js";import"./index-B_6zM4N5.js";import"./Option-B4P7V8L-.js";import"./index-D86-Sydy.js";import"./SegmentedButton-Drzzk-Ka.js";import"./index-CzCKZDhR.js";import"./Select-CiA18WXr.js";import"./InvisibleMessage-zD0IVsFW.js";import"./slim-arrow-down-DzbDBKGu.js";import"./index-BZCe37Rq.js";import"./index-pKYM4Amv.js";import"./index-Cl1O2yFh.js";import"./index-BtAgcYwE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bp1zhNyd.js";import"./group-2-CzlS2QWU.js";import"./sort-descending-B3IM8fpN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_C7dAq5.js";import"./utils-D_wMeGo0.js";import"./index-CwfhL7TS.js";import"./index-DTHM9nkb.js";import"./index-uElYT7C3.js";import"./navigation-down-arrow-CvLDjJLV.js";import"./navigation-right-arrow-BYbNeqhe.js";import"./navigation-right-arrow-CCD3zipp.js";import"./useCurrentTheme-B8H1HpgT.js";import"./index-BOCVDdbZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C4H1iq0n.js";import"./paper-plane-DmQ3DckA.js";import"./index-DegyXyKA.js";import"./less-CIWKEBFR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

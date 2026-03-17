import{j as o}from"./iframe-C_hHAafN.js";import{useMDXComponents as r}from"./index-D3HSzI5H.js";import{I as n}from"./CommandsAndQueries-9eolN_GD.js";import{M as m,C as p}from"./blocks-DkbtP44I.js";import"./Tag-eVGHGbIg.js";import"./index-3QVLAy4g.js";import"./copy-RggualJu.js";import{F as s}from"./Footer-Cs4jbAjg.js";import"./PageNotFound-C7jxbIgP.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C48bkaSe.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-SYOek4pb.js";import"./index-nRsHzHP6.js";import"./index-DqhVaTSX.js";import"./index-C7mqYyTc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmUXk235.js";import"./addCustomCSSWithScoping-D9hLtcaz.js";import"./index-BKTg9IVY.js";import"./index-DaMaB5I7.js";import"./index-BmCCqQCC.js";import"./information-BzxR6BB4.js";import"./sys-enter-2-Bb8fTRXf.js";import"./alert-CfcbMAjf.js";import"./index-DDQ0aIRQ.js";import"./Illustrations-CNZ22cEs.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DmgeFgDX.js";import"./delete-DFd25d7l.js";import"./settings-cOi7tZPQ.js";import"./NoData-B51Lesm7.js";import"./NoFilterResults-BaQF3ps6.js";import"./index-DrtJcy0D.js";import"./IllustratedMessage-DlYnWnAs.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_6jRAhR.js";import"./Input-TGnF-6Wb.js";import"./ResponsivePopoverCommon.css-B3G2eYk9.js";import"./ValueStateMessage.css-CV4qc19-.js";import"./Suggestions.css-CHwCFLC2.js";import"./ListBoxItemGroupTemplate-fDCpM485.js";import"./ComboBoxItemGroup-DZXo9e3J.js";import"./ListItemBaseTemplate-C7WwsRHS.js";import"./Token-CKEQ5_aJ.js";import"./ScrollEnablement-ByLKUiOa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-66Kfx1Tu.js";import"./ToggleButton-DluNCSvv.js";import"./multiselect-all-n3CqmeKN.js";import"./SuggestionItem-CH8aQQQp.js";import"./index-64fyeXzu.js";import"./Option-D1DIcTfk.js";import"./index-BXd3-qZ5.js";import"./SegmentedButton-BO3FBYdW.js";import"./index-B4v4iYJ_.js";import"./Select-DdLVb8sx.js";import"./InvisibleMessage-ufPFqwzr.js";import"./index-DJtMuU1R.js";import"./index-CX-inHpd.js";import"./index-CkLRuFFu.js";import"./index-CXkptAkK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CCfaaozy.js";import"./group-2-C3mGXi1j.js";import"./sort-descending-CRMBh3aI.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BF3n00U0.js";import"./utils-DU5s3vrI.js";import"./index-BizsnkQy.js";import"./index-BBMO4pXI.js";import"./index-BPfQuIuB.js";import"./navigation-down-arrow-BVBBSui6.js";import"./navigation-right-arrow-BLUaI-J0.js";import"./navigation-right-arrow-BKXb3Jei.js";import"./useCurrentTheme-qRko6oTp.js";import"./index-BLeQ0x08.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B_cTxHD6.js";import"./paper-plane-E-0ZKy0h.js";import"./index-D5ir6q6t.js";import"./less-BYsoatbg.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

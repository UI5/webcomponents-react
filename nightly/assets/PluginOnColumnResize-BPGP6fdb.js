import{j as o}from"./iframe-CIERqdmv.js";import{useMDXComponents as r}from"./index-DuJS4dN9.js";import{I as n}from"./CommandsAndQueries-CnFEaRrZ.js";import{M as m,C as p}from"./blocks-CwsgKOP_.js";import"./Tag-0874imNl.js";import"./index-CMev4Q36.js";import"./copy-Dk2sduK9.js";import{F as s}from"./Footer-DeuiB6kc.js";import"./PageNotFound-C7dSWVQh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DKVlHvWS.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B7T_f79Y.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./index-BEXhXSTj.js";import"./index-CeFrwZtC.js";import"./index-DmgJDP0k.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./index-CJA8M3b4.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DVTI43Ur.js";import"./delete-DS3AkE5n.js";import"./settings-CUozKHOg.js";import"./NoData-DR-S45IK.js";import"./NoFilterResults-BsHrvPun.js";import"./index-CFrarqVC.js";import"./IllustratedMessage-DgRlwHiL.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DpgFhjh1.js";import"./Input-BEziv0q_.js";import"./ResponsivePopoverCommon.css-BAyfAe_C.js";import"./ValueStateMessage.css-yAScMgnT.js";import"./Suggestions.css-aGpylhML.js";import"./ListBoxItemGroupTemplate-D6At1Qlv.js";import"./ComboBoxItemGroup-BOPZ01sA.js";import"./ListItemBaseTemplate-EsFxfCNV.js";import"./Token-5e6MV0bo.js";import"./ScrollEnablement-DGfUBP2Y.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-juxLC4N0.js";import"./ToggleButton-fSM9au_p.js";import"./multiselect-all-Dp7x2lXO.js";import"./SuggestionItem-BuU8W2FN.js";import"./index-DdmvzFYG.js";import"./Option-wGoV8nGP.js";import"./index-BWY8E_GB.js";import"./SegmentedButton-Bcf7ihNT.js";import"./index-DvKp6AoT.js";import"./Select-BLvJx2xD.js";import"./InvisibleMessage-CprUuJ-2.js";import"./index-D1QESHgx.js";import"./index-0nUQUElL.js";import"./index-C_lZ2DQU.js";import"./index-CP7c8g3L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dax1sHJA.js";import"./group-2-DM-9Ml2s.js";import"./sort-descending-Dp80WCwu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CqgLWTBh.js";import"./utils-CkYBlNbD.js";import"./index-DfKuTje3.js";import"./index-DI2AAvjl.js";import"./index-DZRTP0Ol.js";import"./navigation-down-arrow-DlMyh96r.js";import"./navigation-right-arrow-DZXBCa0X.js";import"./navigation-right-arrow-z1aD-Ww1.js";import"./useCurrentTheme-m6a_-5M8.js";import"./index-y1z-NlC1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CMxRGrvK.js";import"./paper-plane-C5cHYIfV.js";import"./index-BXsMvzsh.js";import"./less-BWtd1z_C.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

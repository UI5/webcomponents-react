import{j as o}from"./iframe-BOeFyVYO.js";import{useMDXComponents as n}from"./index-CHR9lzRO.js";import{I as r,F as m}from"./CommandsAndQueries-B3uiYPSD.js";import{M as p,C as s}from"./blocks-DZQepsVR.js";import"./Tag-B2OWKeSz.js";import"./index-CPvTgMMp.js";import"./copy-BJhtqyDJ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BNASTJ6e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA2TdYHr.js";import"./index-C7pCL8XU.js";import"./index-BJHUXRax.js";import"./Link-gq5MBZLl.js";import"./index-BVr_O3zx.js";import"./index-CFpQMsbP.js";import"./index-XsNappkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuyMWw-2.js";import"./addCustomCSSWithScoping-5MrgBdkN.js";import"./index-BcGyynfr.js";import"./information-23pj5EQa.js";import"./sys-enter-2-DAsPAd7c.js";import"./alert-CPkxh21N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjAUfTN5.js";import"./delete-CWJoMoJg.js";import"./settings-Bfit3oG9.js";import"./NoData-BscmLJLH.js";import"./IllustratedMessage-Dd93Yl2Q.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D3nzv2ZG.js";import"./index-DzkoDE5b.js";import"./index-DeACGhE8.js";import"./slim-arrow-down-CWRIGuGt.js";import"./Input-Df8o9ujM.js";import"./ResponsivePopoverCommon.css-CrPsreP2.js";import"./ValueStateMessage.css-D0I7pT5V.js";import"./Suggestions.css-CJA5EYur.js";import"./ListBoxItemGroupTemplate-DnOVXK1l.js";import"./ComboBoxItemGroup-CPuvIbWZ.js";import"./ListItemBaseTemplate-Cj1nOoXc.js";import"./Token-BAqMUyIJ.js";import"./ScrollEnablement-C6K7-lBE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvObX3eg.js";import"./ToggleButton-DprkIF_5.js";import"./SuggestionItem-CKRLTHHj.js";import"./index-D5TJuk4k.js";import"./Option-BLl2Q7AB.js";import"./index-BtvD0QZf.js";import"./SegmentedButton-BeE07OxI.js";import"./index-BrMZtkt6.js";import"./Select-DqU5okXE.js";import"./InvisibleMessage-tWO1LuD6.js";import"./slim-arrow-down-XGqqmupf.js";import"./index-C1FVPsyk.js";import"./index-DBDN__0v.js";import"./index-C3vfrSiy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BrlNUypU.js";import"./group-2-BA5x23BP.js";import"./sort-descending-BCAq_Q0J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ikPuGIDZ.js";import"./utils-C8gBHpV1.js";import"./index-Sk78W01U.js";import"./index-DES0lnez.js";import"./index-BpGUb5zM.js";import"./navigation-down-arrow-Df9I5Mue.js";import"./navigation-right-arrow-Bjlzjx0_.js";import"./navigation-right-arrow-Dm_S70wW.js";import"./useCurrentTheme-Uxgw71xd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtzTOU32.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVnkc0v4.js";import"./paper-plane-C_JViswO.js";import"./index-B7oLkWTs.js";import"./less-Cb2GPmNz.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

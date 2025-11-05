import{j as o}from"./iframe-DcVE_SyB.js";import{useMDXComponents as n}from"./index-ABq4qJq0.js";import{I as r,F as m}from"./CommandsAndQueries-DAZF1NdY.js";import{M as p,C as s}from"./blocks-dRinqquH.js";import"./Tag-n6X7AHU2.js";import"./index-DZbYLiGZ.js";import"./copy-qTVa6Rxc.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Co8rL4ED.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8wszqvC.js";import"./index-C2IoMvXB.js";import"./index-DAALXQvw.js";import"./Link-LjC7fwET.js";import"./index-DF4i9ljf.js";import"./index-DOSi9OrP.js";import"./index-_uRePxm1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWDpOxWr.js";import"./addCustomCSSWithScoping-CuYK4DUc.js";import"./index-DbL7CbMN.js";import"./information-Cg8MaXEH.js";import"./sys-enter-2-d1HQr0rP.js";import"./alert-CDirY_rF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BS6OM1vm.js";import"./delete-CEfUEJT4.js";import"./settings-Csdc-hH6.js";import"./NoData-blQGosmG.js";import"./IllustratedMessage-BPqXVV7x.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-SHojW0S1.js";import"./index-BsLSp1N8.js";import"./index-C1vx3Aim.js";import"./slim-arrow-down-C_wVi7l8.js";import"./Input-C5nBZh3K.js";import"./ResponsivePopoverCommon.css-DXjeYxpj.js";import"./ValueStateMessage.css-Cej4xjjY.js";import"./Suggestions.css-DxgDwmR8.js";import"./ListBoxItemGroupTemplate-7H6xFp3F.js";import"./ComboBoxItemGroup-huP5bgUR.js";import"./ListItemBaseTemplate-Dwv9uts5.js";import"./Token-_oKw71Y0.js";import"./ScrollEnablement-CIsN21aQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NySdr-n5.js";import"./ToggleButton-RUCIrKrh.js";import"./SuggestionItem-CmngfsIg.js";import"./index-C3fVCLar.js";import"./Option-ByjA3kO8.js";import"./index-BsQ6HnSy.js";import"./SegmentedButton-D8dJ17L9.js";import"./index-DIP19kXX.js";import"./Select-CE7FAMxu.js";import"./InvisibleMessage-LUr2HJbj.js";import"./slim-arrow-down-CnwjqAnQ.js";import"./index-CvVxnQ6j.js";import"./index-CXjND3aT.js";import"./index-EYM3a7UD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-o2p0R9uo.js";import"./group-2-Byaog51a.js";import"./sort-descending-Bzv2nAVp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DeHYvak-.js";import"./utils-CCfE5SJ7.js";import"./index-C2IP9_p7.js";import"./index-DjjA3sYt.js";import"./index-C2XBgPIA.js";import"./navigation-down-arrow-BEehImn2.js";import"./navigation-right-arrow-C1A0KtOV.js";import"./navigation-right-arrow-C8E2_mjg.js";import"./useCurrentTheme-B3cs0LME.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YzO-o16q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX1EXUwa.js";import"./paper-plane-CuYG0k3S.js";import"./index-Bwa6ZTZc.js";import"./less-BNEp7IO8.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

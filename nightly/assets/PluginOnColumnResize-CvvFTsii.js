import{j as o}from"./iframe-xWXly7Ei.js";import{useMDXComponents as r}from"./index-BkV3w5d0.js";import{I as n}from"./CommandsAndQueries-cQGlKyLD.js";import{M as m,C as p}from"./blocks-BK-gEy5G.js";import"./Tag-C8IzARdb.js";import"./index-BakXc7t8.js";import"./copy-DY9Bhohc.js";import{F as s}from"./Footer-CjsfyNRg.js";import"./PageNotFound-BQRcUr7m.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CDFMCLtw.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dpfp2JXt.js";import"./index-BTgCG8OL.js";import"./index-B5aWf-WN.js";import"./index-1-wUIWqO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B64w7jYZ.js";import"./addCustomCSSWithScoping-Dr_4npAd.js";import"./index-BcAVbI4W.js";import"./index-P_dJFF81.js";import"./index-CbssaC5W.js";import"./information-3IM7ZiM-.js";import"./sys-enter-2-Cbpg-U0q.js";import"./alert-gk5TVJR_.js";import"./index-D8yJKpQG.js";import"./Illustrations-VX2U6euS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C0EeoQOf.js";import"./delete-Daj5aG2H.js";import"./settings-JEJGhDXa.js";import"./NoData-CUNc-SJj.js";import"./NoFilterResults-DvZ6DrPN.js";import"./index-BzwYG95X.js";import"./IllustratedMessage-Be1pREre.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-TGWaISd0.js";import"./Input-CDjEum2n.js";import"./ResponsivePopoverCommon.css-8bAtFiUD.js";import"./ValueStateMessage.css-BYQRLYZ0.js";import"./Suggestions.css-CNN403-Y.js";import"./ListBoxItemGroupTemplate-CuHmPnrx.js";import"./ComboBoxItemGroup-COAcu647.js";import"./ListItemBaseTemplate-GzRG8w-c.js";import"./Token-BEDcAYgp.js";import"./ScrollEnablement-DYlMFsuu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-iey8o9JN.js";import"./ToggleButton-CW6tueV4.js";import"./multiselect-all-CtBIMUjF.js";import"./SuggestionItem-ywTbVMDQ.js";import"./index-B1qnChHa.js";import"./Option-B7m8nxQ-.js";import"./index-DNsMOtVs.js";import"./SegmentedButton-CL3kzHDq.js";import"./index-DokxMw3O.js";import"./Select-BWiWS1At.js";import"./InvisibleMessage-CC4MNG7R.js";import"./index-CwxYOeSe.js";import"./index-Dv57lb5x.js";import"./index-jPeizMn4.js";import"./index-DEdFN2d4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dkcd59kF.js";import"./group-2-CsBD2zZA.js";import"./sort-descending-BQOuvjyZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk8WJ0QW.js";import"./utils-B3KTizs4.js";import"./index-B1H_35uI.js";import"./index-wRDrCSQt.js";import"./index-DKiHuygv.js";import"./navigation-down-arrow-Dex1asDk.js";import"./navigation-right-arrow-D1hOWf48.js";import"./navigation-right-arrow-DtQN-gk3.js";import"./useCurrentTheme-CGLlYyfP.js";import"./index-D_FJo5s9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYgZebj6.js";import"./paper-plane-DeM9JyhI.js";import"./index-BVX4T61_.js";import"./less-ChsYqecD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

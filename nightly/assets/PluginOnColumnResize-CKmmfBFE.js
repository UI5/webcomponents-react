import{j as o}from"./iframe-D8-BDgf_.js";import{useMDXComponents as n}from"./index-C9C5bcry.js";import{I as r,F as m}from"./CommandsAndQueries-DdekYtZs.js";import{M as p,C as s}from"./blocks-BAPiaHIf.js";import"./Tag-94uJ1S6F.js";import"./index-Bpoq7VNX.js";import"./copy-D8ENGf86.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B7FBwI18.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DthRrO7G.js";import"./index-BIskJ-u2.js";import"./index-BR0aC9ux.js";import"./Link-DupRePRp.js";import"./index-Ijyq8fzP.js";import"./index-BC6ra2tn.js";import"./index-BGDf_fSf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bayg2vL_.js";import"./addCustomCSSWithScoping-BMV9S5Iy.js";import"./index-CkF5m5P2.js";import"./information-P4PYqJF7.js";import"./sys-enter-2-COYZiEQ0.js";import"./alert-NgB5MfvZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BozETG9q.js";import"./delete-CGuxUIRO.js";import"./settings-CuToJbU1.js";import"./NoData-D5TRA1yr.js";import"./IllustratedMessage-EI-iyKnx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DmaA6uVZ.js";import"./index-AvdY3uSx.js";import"./index-9ZsF7KxK.js";import"./slim-arrow-down-p7BE2Hmw.js";import"./Input-D_T5qhyo.js";import"./ResponsivePopoverCommon.css-B0FOPOjZ.js";import"./ValueStateMessage.css-tSbLyNmJ.js";import"./Suggestions.css-CCFYMh7W.js";import"./ListBoxItemGroupTemplate-BrwhGVvC.js";import"./ComboBoxItemGroup-CjkRFxCX.js";import"./ListItemBaseTemplate-AGmUOsl7.js";import"./Token-Dz00xiyc.js";import"./ScrollEnablement-C7ow4jI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWDqgljt.js";import"./ToggleButton-DzetVeI0.js";import"./SuggestionItem-rfQMdI2X.js";import"./index-Ce8fTDv-.js";import"./Option-CpzuJS-B.js";import"./index-B8VDamox.js";import"./SegmentedButton-D6lmAoRT.js";import"./index-D7R2LnC5.js";import"./Select-_Bmu2vih.js";import"./InvisibleMessage-T6cHYe91.js";import"./slim-arrow-down-BhY_0Ri7.js";import"./index-BSkcr-Mn.js";import"./index-KuLG5MtP.js";import"./index-BCja9vcE.js";import"./index-D-3bVUSA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ebwsLBYv.js";import"./group-2-u3I6G4vD.js";import"./sort-descending-23WgyaPw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-QOahos4e.js";import"./utils-BQuRkdbJ.js";import"./index-zsRPmIQK.js";import"./index-DmXBAxhG.js";import"./index-CCDJeSeX.js";import"./navigation-down-arrow-sKnsIYlJ.js";import"./navigation-right-arrow-dBgLFMal.js";import"./navigation-right-arrow-CxjBdfVG.js";import"./useCurrentTheme-BSsb-VWY.js";import"./index-DfDYC92c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C0KpyHf-.js";import"./paper-plane-DJ7-IFy3.js";import"./index-BvqiMI89.js";import"./less-0nIOA2m3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

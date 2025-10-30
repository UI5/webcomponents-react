import{j as o}from"./iframe-B6_VnEn0.js";import{useMDXComponents as n}from"./index-CKjNAzmF.js";import{I as r,F as m}from"./CommandsAndQueries-Cu0FTX1O.js";import{M as p,C as s}from"./blocks-CyO3EJlr.js";import"./Tag-CgNBFz-6.js";import"./index-DSVB_dqF.js";import"./copy-C1fhLsjZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DmrgVtRF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hldrhuwk.js";import"./index-DkrtZknx.js";import"./index-C9FEKhX3.js";import"./Link-fr-LMhyz.js";import"./index-eApF8yKA.js";import"./index-BgmLFHtv.js";import"./index-BsFRP28T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6ry04GL.js";import"./addCustomCSSWithScoping-Cx3SnQ1e.js";import"./index-CRKIYkxI.js";import"./information-DRMbXOdP.js";import"./sys-enter-2-DdSSz0Lf.js";import"./alert-B2vLmz8E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSUT1UXJ.js";import"./delete-B70o4ZMp.js";import"./settings-Sr6bgmj6.js";import"./NoData-wcsbKZXP.js";import"./IllustratedMessage-Cv5HujEL.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BVzwn4SB.js";import"./index-BZxlht39.js";import"./index-C4M0psbz.js";import"./slim-arrow-down-923fJvnp.js";import"./Input-Bs0gKdph.js";import"./ResponsivePopoverCommon.css-CoduWFfh.js";import"./ValueStateMessage.css-CkI6mQmW.js";import"./Suggestions.css-DpsubRXQ.js";import"./ListBoxItemGroupTemplate-CZSz5eg-.js";import"./ComboBoxItemGroup-BsqgT4AO.js";import"./ListItemBaseTemplate-1OIMo-aq.js";import"./Token-_KSGZm69.js";import"./ScrollEnablement-DlCeZwb_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bie1RoJA.js";import"./ToggleButton-A9uw47Xu.js";import"./SuggestionItem-WtzRfOZM.js";import"./index-RYxAjmJf.js";import"./Option-B_Qr8ZR1.js";import"./index-DXzDsO8i.js";import"./SegmentedButton-DUqbW27k.js";import"./index-BY3646yH.js";import"./Select-DDy3V6oF.js";import"./InvisibleMessage-KplCdb0P.js";import"./slim-arrow-down-BFcyly_p.js";import"./index-CxOv9Kkh.js";import"./index-DmSWDL_Q.js";import"./index-eEzYE7AT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-b4USW7aT.js";import"./group-2-CDpbgOOK.js";import"./sort-descending-Czh8lmrX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Xza24VXr.js";import"./utils-B3TlGdmB.js";import"./index-AL-OWNK_.js";import"./index-BSfjy-rK.js";import"./index-gNjcilEj.js";import"./navigation-down-arrow-B1_3lDPJ.js";import"./navigation-right-arrow-B-hO6U9j.js";import"./navigation-right-arrow-K8WG24tV.js";import"./useCurrentTheme-Bo-VqRyr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y-idYoY3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CyGYKIx-.js";import"./paper-plane-qRjF1BNZ.js";import"./index-DYNfIYGU.js";import"./less-BLr9OCIN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

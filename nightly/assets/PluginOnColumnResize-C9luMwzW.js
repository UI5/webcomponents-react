import{j as o}from"./iframe-BFWc6ije.js";import{useMDXComponents as n}from"./index-DIwiR8-R.js";import{I as r,F as m}from"./CommandsAndQueries-RvyhHzLx.js";import{M as p,C as s}from"./blocks-_C0Ko-FB.js";import"./Tag-BlcbvGrz.js";import"./index-S-jzd0og.js";import"./copy-B0915CdE.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DMwZPbok.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWXRaFCB.js";import"./index-BJhTX5aa.js";import"./index-Ammjaz44.js";import"./Link-C0nE2LNS.js";import"./index-D6ti5Aap.js";import"./index-BNrsjj3y.js";import"./index-BeiCFHJ0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NyszqC-C.js";import"./addCustomCSSWithScoping-DHZr8-1Q.js";import"./index-DYh3DUHT.js";import"./information-gUiWTFs7.js";import"./sys-enter-2-Czjj6c4O.js";import"./alert-Dwrii-iz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2a6sZTKt.js";import"./delete-GLZPXNIt.js";import"./settings-Bl3VKOzY.js";import"./NoData-D1FNpf90.js";import"./IllustratedMessage-Col1197V.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BHuYeTyV.js";import"./index-DgCS7Nk3.js";import"./index-SZqCzEgh.js";import"./slim-arrow-down-Dv1ZFOOG.js";import"./Input-BTIWHmaN.js";import"./ResponsivePopoverCommon.css-c4jpBfVX.js";import"./ValueStateMessage.css-C8t0n2is.js";import"./Suggestions.css-Cj5eaUvh.js";import"./ListBoxItemGroupTemplate--RkL3eX-.js";import"./ComboBoxItemGroup-CvfuwnhX.js";import"./ListItemBaseTemplate-DWiE6hVW.js";import"./Token-RwPCKO7L.js";import"./ScrollEnablement-BS-59KGT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3Dr6elZ5.js";import"./ToggleButton-NLglJiSM.js";import"./SuggestionItem-B18x_0Bw.js";import"./index-_nYMLiJq.js";import"./Option-BCCI7jGA.js";import"./index-DYvMbD0V.js";import"./SegmentedButton-2c88fWgR.js";import"./index-IKSBMBYh.js";import"./Select-DGk89UWd.js";import"./InvisibleMessage-gz9Baj7W.js";import"./slim-arrow-down-DbgE6iuN.js";import"./index-RsMAEwo8.js";import"./index-DNOnKtp6.js";import"./index-fezgehlA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTa28ct7.js";import"./group-2-1vH7OeUe.js";import"./sort-descending-6IaS3sEK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8A7JpsJT.js";import"./utils-_MgrmSbV.js";import"./index-CFTVOaaJ.js";import"./index-c-viX2G1.js";import"./index-Tigp63LJ.js";import"./navigation-down-arrow-C3oL93Ku.js";import"./navigation-right-arrow-D0tZtsPJ.js";import"./navigation-right-arrow-OUJD2N61.js";import"./useCurrentTheme-BdY6233y.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bfz-LgXH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DrH-Pm0z.js";import"./paper-plane-CCOFurtH.js";import"./index-BqcaYpg7.js";import"./less-BXPL7yK5.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

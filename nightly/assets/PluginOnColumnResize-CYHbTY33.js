import{j as o}from"./iframe-CDzsgyAV.js";import{useMDXComponents as n}from"./index-DP2UBTat.js";import{I as r,F as m}from"./CommandsAndQueries-CpE7A47V.js";import{M as p,C as s}from"./blocks-CJQxsMoI.js";import"./Tag-CH-8xgRY.js";import"./index-B8A9WhwY.js";import"./copy-DpKoQtQP.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Kp7F4hlK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CLSChxqE.js";import"./index-C2LW5088.js";import"./index-2og1ClCO.js";import"./Link-Dp8FrNqY.js";import"./index-Df65psIj.js";import"./index-CiXhxUFY.js";import"./index-BToOU55N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_XXs48A.js";import"./addCustomCSSWithScoping-B27SJBwy.js";import"./index-spzGnsRF.js";import"./information-DHwZAzkU.js";import"./sys-enter-2-DVWP7zgo.js";import"./alert-Fp8ziM7f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqJHcQPH.js";import"./delete-B-gvuqdd.js";import"./settings-Cbcjyv0Y.js";import"./NoData-BVNfqJsM.js";import"./IllustratedMessage-BN1Iq_3M.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1Ys1t75g.js";import"./index-CocUjDH_.js";import"./index-BfKLxC4E.js";import"./slim-arrow-down-DLRwTtbe.js";import"./Input-8H7TX9aj.js";import"./ResponsivePopoverCommon.css-C3wd2k-W.js";import"./ValueStateMessage.css-By_XiJ9I.js";import"./Suggestions.css-DDpMPLES.js";import"./ListBoxItemGroupTemplate-C8MMY61P.js";import"./ComboBoxItemGroup-PpcOoMvo.js";import"./ListItemBaseTemplate-CpMpzE59.js";import"./Token-jxrfpM-J.js";import"./ScrollEnablement-BI3MOl7l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ByK6mU7F.js";import"./ToggleButton-B4Zc3HFl.js";import"./SuggestionItem-DkSNk8yh.js";import"./index-B4Od3Z_Y.js";import"./Option-NU9oW0-i.js";import"./index-BCP42iFG.js";import"./SegmentedButton-BqnPadO7.js";import"./index-BEm3lM4_.js";import"./Select-DJG9BRVU.js";import"./InvisibleMessage-D6G5X2tZ.js";import"./slim-arrow-down-DSlsBY-p.js";import"./index-CuyuI2Pj.js";import"./index-C1m5zeZ5.js";import"./index-DnHq6C4h.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YSMvOGtw.js";import"./group-2-BwQpX0hB.js";import"./sort-descending-Blt3aqTU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BiSHSe0e.js";import"./utils-Cd-ANK3A.js";import"./index-DenP7o8A.js";import"./index-BE-YPQF4.js";import"./index-8HAhpbda.js";import"./navigation-down-arrow-DYP-nqAT.js";import"./navigation-right-arrow-CKdG0KzH.js";import"./navigation-right-arrow-Cx1TVxnH.js";import"./useCurrentTheme-LfUWuXTs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Y04S_ZXo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Do2kY7uP.js";import"./paper-plane-TdqVc7nZ.js";import"./index-CZeAmPhe.js";import"./less-Xdu5yIez.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-18_5pfj2.js";import{useMDXComponents as r}from"./index-CIhtdkHx.js";import{I as n}from"./CommandsAndQueries-BGW2wCD6.js";import{M as m,C as p}from"./blocks-Cj6CgQUG.js";import"./Tag-s2oCmO6-.js";import"./index-BIj2K6s5.js";import"./copy-BQYJB7Nu.js";import{F as s}from"./Footer-BvGdDwIL.js";import"./PageNotFound-BO4FGO9U.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-13knD1MZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C9Gq01-B.js";import"./index-DflRRV76.js";import"./index-Dhqddszu.js";import"./index-DiTpBrDm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DVbD4jAU.js";import"./addCustomCSSWithScoping-CAI73UoR.js";import"./index-BlCfzNdo.js";import"./index-Bj-OwMs_.js";import"./index-B3MOIvF5.js";import"./information-CdIjwcxP.js";import"./sys-enter-2-LNLtosyG.js";import"./alert-DegEg84v.js";import"./index-CRBj8Lig.js";import"./Illustrations-CxofZbv6.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-AL_T-9Jx.js";import"./delete-Bs3qPfJg.js";import"./settings-Dy572ER6.js";import"./NoData-Da_ngFS4.js";import"./NoFilterResults-D6pNWcsG.js";import"./index-C5CQTREQ.js";import"./IllustratedMessage-DGu9bJLh.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-0cqwT-HV.js";import"./Input-iydFvRMw.js";import"./ResponsivePopoverCommon.css-C2FEozzV.js";import"./ValueStateMessage.css-DqvCGStP.js";import"./Suggestions.css-BCNDEbh8.js";import"./ListBoxItemGroupTemplate-CJLn_QnH.js";import"./ComboBoxItemGroup-DcIVw2VD.js";import"./ListItemBaseTemplate-Bc2aw1zo.js";import"./Token-D4pS284n.js";import"./ScrollEnablement-8Hjnke1V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz4U-Eop.js";import"./ToggleButton-CppSls7u.js";import"./multiselect-all-Du7KiLcj.js";import"./SuggestionItem-DP0MGt_F.js";import"./index-Bvyi48KZ.js";import"./Option-rrI2u16T.js";import"./index-hlJZ1pXP.js";import"./SegmentedButton-oHmo4bip.js";import"./index-Y1siXodl.js";import"./Select-DwCkA_oD.js";import"./InvisibleMessage-BnIgIl6z.js";import"./index-8eHl-jDQ.js";import"./index-Ck6F_hwE.js";import"./index-NNG8HlfA.js";import"./index-CqOxtweB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DT28aUfx.js";import"./group-2-CK5cKbxI.js";import"./sort-descending-_jf8LjRo.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CzFFDiC-.js";import"./utils-DWriPAw1.js";import"./index-QSwlxrZg.js";import"./index-c_3gbR4D.js";import"./index-BLCqTCik.js";import"./navigation-down-arrow-DZ15PY4K.js";import"./navigation-right-arrow-BeHel0Cu.js";import"./navigation-right-arrow-DT0piTHd.js";import"./useCurrentTheme-BF_DuxSA.js";import"./index-CJSERHk8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BN9cZPm6.js";import"./paper-plane-C5X0Yhvv.js";import"./index-C71GbrCh.js";import"./less-BR7E5rCD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

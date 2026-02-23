import{j as o}from"./iframe-BgKk_cUP.js";import{useMDXComponents as n}from"./index-DBhkOYZa.js";import{I as r,F as m}from"./CommandsAndQueries-DJU-Boml.js";import{M as p,C as s}from"./blocks-Cov5-UrV.js";import"./Tag-14MrIsbi.js";import"./index-DoylA-Ui.js";import"./copy-DsJBCyL-.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-V4gZ8sle.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMckAL-E.js";import"./index-vrGX3w6P.js";import"./index-z-eYGt9k.js";import"./Link-CwQGN6kV.js";import"./index-DJcJ5x0R.js";import"./index-DtnoyOys.js";import"./index-DMwqR4Ak.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3WrIRKs.js";import"./addCustomCSSWithScoping-CEnWQwWy.js";import"./index-C-jp63Tn.js";import"./information-BIRyoqcd.js";import"./sys-enter-2--x49A3Er.js";import"./alert-ClVMPYjY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuxFNycy.js";import"./delete-BP-q6TjY.js";import"./settings-CeZ1opbS.js";import"./NoData-DLJjXucd.js";import"./IllustratedMessage-DdywEZQM.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bi6pL2a9.js";import"./index-DojJqyn3.js";import"./index-BKqTR2vl.js";import"./slim-arrow-down-Dj1qt3me.js";import"./Input-iPtOW5TT.js";import"./ResponsivePopoverCommon.css-DfgdvEyA.js";import"./ValueStateMessage.css-DV3WCU4W.js";import"./Suggestions.css-BI-9sbpu.js";import"./ListBoxItemGroupTemplate-BHdhNjf-.js";import"./ComboBoxItemGroup-DH85X82N.js";import"./ListItemBaseTemplate-D1hxivPJ.js";import"./Token-DcRokTWN.js";import"./ScrollEnablement-DdsHIuJL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CnthNkAX.js";import"./ToggleButton-UcqKBq2y.js";import"./SuggestionItem-C26y-fs0.js";import"./index-hzVrXnb0.js";import"./Option-DJMHyqaM.js";import"./index-Dhq0PQAW.js";import"./SegmentedButton-DdF3sP2l.js";import"./index-BbzooXyV.js";import"./Select-CsJgWia_.js";import"./InvisibleMessage-ped4udrK.js";import"./slim-arrow-down-DklNCilI.js";import"./index-DwVvMTsB.js";import"./index-RMLfsLiL.js";import"./index-bEFqPgvm.js";import"./index-DMnT_E-9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CW2uVyW2.js";import"./group-2-AoEknzVg.js";import"./sort-descending-CCp7iCJm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DRCX3BDW.js";import"./utils-BzD9qn-t.js";import"./index-GcGiJc-e.js";import"./index-DAx9tP-t.js";import"./index-HFoflSp7.js";import"./navigation-down-arrow-DW5vPyKC.js";import"./navigation-right-arrow-De8vjbS4.js";import"./navigation-right-arrow-DXKcG20K.js";import"./useCurrentTheme-BVrxJiy7.js";import"./index-C-S-N3mF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bcixplcr.js";import"./paper-plane-2-5UQC1A.js";import"./index-FZ4e72eA.js";import"./less-jXtBnPYa.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

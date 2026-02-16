import{j as o}from"./iframe-COmYM7FM.js";import{useMDXComponents as n}from"./index-nJK3ZT8W.js";import{I as r,F as m}from"./CommandsAndQueries-BOWLtTE6.js";import{M as p,C as s}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import"./copy-CXZAgH3a.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DVhjw13G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./index-DFr8Hmr1.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdbjcEwi.js";import"./delete-C5z8HYGA.js";import"./settings-B_K-MLff.js";import"./NoData-CVSMoMaA.js";import"./IllustratedMessage-CLKrxT4u.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-hcxm4ff3.js";import"./index-Dsh65RiT.js";import"./index-BIVMAjf6.js";import"./slim-arrow-down-jGOJjhpo.js";import"./Input-Bu6vC63z.js";import"./ResponsivePopoverCommon.css-C4KWqDDR.js";import"./ValueStateMessage.css-DI3W06n_.js";import"./Suggestions.css-CPV1YgiF.js";import"./ListBoxItemGroupTemplate-BMlbPmoD.js";import"./ComboBoxItemGroup-FACN2vTy.js";import"./ListItemBaseTemplate-B6EaFX9g.js";import"./Token-CGmzQJS_.js";import"./ScrollEnablement-DvHuSSVb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BflPf8Ge.js";import"./ToggleButton-CsElF1rR.js";import"./SuggestionItem-Dd6fqolr.js";import"./index-D0YWeYAy.js";import"./Option-CKR1byVj.js";import"./index-BQf3vQDP.js";import"./SegmentedButton-CvpabKGu.js";import"./index-Bw_-eraM.js";import"./Select-B6eJ5Vgx.js";import"./InvisibleMessage-B-FhaSLI.js";import"./slim-arrow-down-LiCVxuMd.js";import"./index-BDEyyVOr.js";import"./index-CgP-_Bp6.js";import"./index-Ch_J8TT8.js";import"./index-BMQcik-b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTnmyxii.js";import"./group-2-Dl5zG8N4.js";import"./sort-descending-gP9HPjaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Duy0U0pN.js";import"./utils-BXFdgd4W.js";import"./index-CL0ZF9VR.js";import"./index-x1QXYab4.js";import"./index-Bd4CgeRl.js";import"./navigation-down-arrow-DPdzdZ9F.js";import"./navigation-right-arrow-2YTC651d.js";import"./navigation-right-arrow-CcuSN_gl.js";import"./useCurrentTheme-DZHkVItH.js";import"./index-BOFC4ju2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B9v40RyR.js";import"./paper-plane-BK5ynDqO.js";import"./index-DX2-QTbN.js";import"./less-BCKthjss.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

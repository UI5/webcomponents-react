import{j as o}from"./iframe-oB-4R5Rt.js";import{useMDXComponents as n}from"./index-CPM_KuJ1.js";import{I as r,F as m}from"./CommandsAndQueries-V7DYmci2.js";import{M as p,C as s}from"./blocks-BSJ2p1aB.js";import"./Tag-D-nP8Atk.js";import"./index-D9a9y2w1.js";import"./copy-BEsfMMdz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-4VAmKrJC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgFkqkoM.js";import"./index-ByTtsog6.js";import"./index-QtLlbt_o.js";import"./Link-DOQS5UBs.js";import"./index-CTKLJSsf.js";import"./index-DzeBy8FO.js";import"./index-CQQbQqNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1pBRLIk.js";import"./addCustomCSSWithScoping-Bfd00zUa.js";import"./index-BRbXVYQh.js";import"./information-BRyOdl2D.js";import"./sys-enter-2-DyCH1cMA.js";import"./alert-BVT2hG_8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B85Kwi0U.js";import"./delete-DTD52Dt-.js";import"./settings-C_n4xVXc.js";import"./NoData-Cl-2h7pm.js";import"./IllustratedMessage-0CeFZb1f.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-c6iHh6_s.js";import"./index-DAe_C3xM.js";import"./index-QijUrmH0.js";import"./slim-arrow-down-CXy1laZl.js";import"./Input-CmhKXc0K.js";import"./ResponsivePopoverCommon.css-BI55EcO7.js";import"./ValueStateMessage.css-BBVlRBqU.js";import"./Suggestions.css-hXMoKZOy.js";import"./ListBoxItemGroupTemplate-M1QDvz3X.js";import"./ComboBoxItemGroup-Bx9p2mC6.js";import"./ListItemBaseTemplate-Bah4nUE4.js";import"./Token-jwxYX-yd.js";import"./ScrollEnablement-oY_T1yvo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-IaHLS1HF.js";import"./ToggleButton-DY0lb3z6.js";import"./SuggestionItem-2gqz2T4s.js";import"./index-BWPeagQl.js";import"./Option-cV3MYBFS.js";import"./index-BzBis61R.js";import"./SegmentedButton-DCb2A_xv.js";import"./index-CAA2J6fr.js";import"./Select-DmNHfi17.js";import"./InvisibleMessage-MKUVNUZM.js";import"./slim-arrow-down-enTMIpdD.js";import"./index-C_xnFlWE.js";import"./index-Cv0_3GO5.js";import"./index-BRv3mF1V.js";import"./index-Crwyz8ZA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6MPiSVH.js";import"./group-2-Cd1iqfwu.js";import"./sort-descending-B1MDHvU-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Z4g25ytt.js";import"./utils-B5Fc9P4b.js";import"./index-DpDL8a8s.js";import"./index-Ql5yF9yx.js";import"./index-BPoxwQOt.js";import"./navigation-down-arrow-Dkon3Z8u.js";import"./navigation-right-arrow-Dm6-IpRK.js";import"./navigation-right-arrow-BNSorjsP.js";import"./useCurrentTheme-CjUUgy0P.js";import"./index-D-67tr6h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-6qlPxf.js";import"./paper-plane-B_Zq24If.js";import"./index-BeY4v2SL.js";import"./less-Bv-Ti7Zp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

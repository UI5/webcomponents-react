import{j as o}from"./iframe-BS2TrvrN.js";import{useMDXComponents as n}from"./index-Dp4awxsz.js";import{I as r,F as m}from"./CommandsAndQueries-C7ISLnYa.js";import{M as p,C as s}from"./blocks-AG6GRa5B.js";import"./Tag-CAsjs9Yd.js";import"./index-CnogY8gl.js";import"./copy-DWHxAwDZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BFKbgqVg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTiu8q4c.js";import"./index-Mu4Fq_pN.js";import"./index-BmL9Xifd.js";import"./Link-o9RgLDgA.js";import"./index-DaCCo5vH.js";import"./index-DMDLslui.js";import"./index-BzQgfOUJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXV-QRTV.js";import"./addCustomCSSWithScoping-BH8CiasF.js";import"./index-CJ7CYpRY.js";import"./information-B1mkkoXe.js";import"./sys-enter-2-DnLeBeIW.js";import"./alert-BREJIvMW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkyYsc9_.js";import"./delete--EJaBHtQ.js";import"./settings-CjHgbDvG.js";import"./NoData-uCs7mLL3.js";import"./IllustratedMessage-BYxajBDo.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-B4qjkeLD.js";import"./index-CuDN26eE.js";import"./index-Bg1SvpRp.js";import"./slim-arrow-down-C6f4nBya.js";import"./Input-Bv0sXAeB.js";import"./ResponsivePopoverCommon.css-BZWL9G4a.js";import"./ValueStateMessage.css-YDo57pkc.js";import"./Suggestions.css-DAjqdB6I.js";import"./ListBoxItemGroupTemplate-C3a7F9SG.js";import"./ComboBoxItemGroup-gEh305-y.js";import"./ListItemBaseTemplate-1DE2nZfk.js";import"./Token-geTKpS6b.js";import"./ScrollEnablement-BmiTc29C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DDx_09pl.js";import"./ToggleButton-CcH_vL5C.js";import"./SuggestionItem-CWGXugmn.js";import"./index-DjLt-Et_.js";import"./Option-BGlTcCx4.js";import"./index-rnvXBaMA.js";import"./SegmentedButton-BRvRJYjJ.js";import"./index-Bo3gbuh_.js";import"./Select-DcELK7dP.js";import"./InvisibleMessage-CpZ2jbZ-.js";import"./slim-arrow-down-CP7_zG_U.js";import"./index-DrOVNHN1.js";import"./index-CAphs1al.js";import"./index-Bndb5wUT.js";import"./index-DZmbJFEp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYZgLpPW.js";import"./group-2-Bjg8E7Od.js";import"./sort-descending-VYXIT-Q2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2nq9QYP.js";import"./utils-CSeio7PW.js";import"./index-BW-YQYzw.js";import"./index-SLFgJxKA.js";import"./index-DsLZqvCQ.js";import"./navigation-down-arrow-B8ST6yfY.js";import"./navigation-right-arrow-CcCTVMX2.js";import"./navigation-right-arrow-BWBp3NRa.js";import"./useCurrentTheme-BL8885Ei.js";import"./index-BR75lte5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dueog928.js";import"./paper-plane-AR1l5ZNk.js";import"./index-D26HhdRg.js";import"./less-BYcbCm1L.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

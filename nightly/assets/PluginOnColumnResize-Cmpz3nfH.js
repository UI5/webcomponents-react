import{j as o}from"./iframe-BThE7jKf.js";import{useMDXComponents as n}from"./index-B2RJGRd4.js";import{I as r,F as m}from"./CommandsAndQueries-D1tgAUE5.js";import{M as p,C as s}from"./blocks-Dnvf3bz-.js";import"./Tag-9-1VZojo.js";import"./index-CTUpkleH.js";import"./copy-CbUREYSb.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cte-PI1R.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDRlpx-X.js";import"./index-Di66tdVG.js";import"./index-DcLqsBQ7.js";import"./Link-BAiulGQ4.js";import"./index-cpbfvu6C.js";import"./index-i-aKPvBx.js";import"./index-DLO7Rqwk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbRZFTjL.js";import"./addCustomCSSWithScoping-BhW-iIae.js";import"./index-Dg0PU8qR.js";import"./information-CcuaLhCB.js";import"./sys-enter-2-DHGMesz_.js";import"./alert-DuPQa3D0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKwfTsTM.js";import"./delete-BqCAREpY.js";import"./settings-TqXR43qR.js";import"./NoData-DmCO7TIv.js";import"./IllustratedMessage-Bs5MaROT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CHmBr3w4.js";import"./index-Dr75E37T.js";import"./index-DvcdzHmC.js";import"./slim-arrow-down-Bz3-mcvJ.js";import"./Input-CbDmM0GF.js";import"./ResponsivePopoverCommon.css-DMYN2ItD.js";import"./ValueStateMessage.css-CvCL0Xij.js";import"./Suggestions.css-CGrcYFlL.js";import"./ListBoxItemGroupTemplate-_Besyw8f.js";import"./ComboBoxItemGroup-DAfVDG08.js";import"./ListItemBaseTemplate-xcFSnqWt.js";import"./Token-B6ErGNwX.js";import"./ScrollEnablement-_nV76HoB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cfqfrlti.js";import"./ToggleButton-DjH21DVy.js";import"./SuggestionItem-C8Yg-JWN.js";import"./index-CtKsJjs8.js";import"./Option-CSVQioik.js";import"./index-DsF8JQwb.js";import"./SegmentedButton-YWOzVeoF.js";import"./index-CCAH6gQH.js";import"./Select-CNSr5QHH.js";import"./InvisibleMessage-DJTpQpS-.js";import"./slim-arrow-down-hb2zYnU0.js";import"./index-C9n-DCcG.js";import"./index-E5ZX2AJ8.js";import"./index-BpiAnCwY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6ZPV9ob.js";import"./group-2-B51gzcdA.js";import"./sort-descending-BN4uvKMV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-w-AwlVUJ.js";import"./utils-Bm75YCbD.js";import"./index-HDPq3XGJ.js";import"./index-BZBFFr3l.js";import"./index-BHuibshv.js";import"./navigation-down-arrow-DNBn6riX.js";import"./navigation-right-arrow-CEmB2JVm.js";import"./navigation-right-arrow-iXDAcUxC.js";import"./useCurrentTheme-ohrANfKQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-JOKJFWbc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPG-qoPW.js";import"./paper-plane-Bi8pg9nf.js";import"./index-BVTuhwKz.js";import"./less-BKhFgDfk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-CSs3GcCz.js";import{useMDXComponents as n}from"./index-1VYUEsB4.js";import{I as r,F as m}from"./CommandsAndQueries-Dzepq0rT.js";import{M as p,C as s}from"./blocks-DlOiJG9w.js";import"./Tag-tq7bvH7x.js";import"./index-Bv5UQAtB.js";import"./copy-A0b4Giju.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-tvuh3a0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jfbseB2e.js";import"./index-C2PP5dg7.js";import"./index-kEy_zqDf.js";import"./Link-Bs0GSE9o.js";import"./index-CNpYG1J4.js";import"./index-C-kYIaXe.js";import"./index-BXC6vCLS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoJGLxs9.js";import"./addCustomCSSWithScoping-DvKIlldN.js";import"./index-IS643aT1.js";import"./information-AyutgqL-.js";import"./sys-enter-2-Cfi5ZTIT.js";import"./alert-CpO7ww38.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-0iXmKLmk.js";import"./delete-BC4d-M8w.js";import"./settings-DFb0bSTd.js";import"./NoData-Cj60GkAW.js";import"./IllustratedMessage-CuN3Ew7z.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DSUbnOu6.js";import"./index-J5vl0EEq.js";import"./index-C2VWI5a1.js";import"./slim-arrow-down-B7OBTn9O.js";import"./Input-DdGahQ8p.js";import"./ResponsivePopoverCommon.css-B6aP4EWz.js";import"./ValueStateMessage.css-rStVzh3o.js";import"./Suggestions.css-DVjfbfM-.js";import"./ListBoxItemGroupTemplate-DCz12Yoy.js";import"./ComboBoxItemGroup-BRoNWA4Q.js";import"./ListItemBaseTemplate-iIRKaqk5.js";import"./Token-CvT8k6R4.js";import"./ScrollEnablement-DHd31uDD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-0uLaXWUR.js";import"./ToggleButton-CKrLeVvI.js";import"./SuggestionItem-DwtoFM4A.js";import"./index-Bb7WnMUY.js";import"./Option-CfsJHbV6.js";import"./index-HkRG_gjA.js";import"./SegmentedButton-Cj_0JQrp.js";import"./index-Cijq7tDb.js";import"./Select-DCYdBJjt.js";import"./InvisibleMessage-BcP-U2lm.js";import"./slim-arrow-down-BFCOZBmI.js";import"./index-DAo-SJVY.js";import"./index-CWMZCKYl.js";import"./index-BIWIZz99.js";import"./index-D21M5qi1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CldNOsRY.js";import"./group-2-BlKb3z6k.js";import"./sort-descending-D9zZt52A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6Gtit63.js";import"./utils-D-NrFFbe.js";import"./index-BiChlU0_.js";import"./index-DjZAsHPB.js";import"./index-GjEC5C4h.js";import"./navigation-down-arrow-B5OEHJzH.js";import"./navigation-right-arrow-COj-HSTI.js";import"./navigation-right-arrow-DuUHDn6z.js";import"./useCurrentTheme-CbFE_1cS.js";import"./index-BsKxNe-0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5q-dcwP.js";import"./paper-plane-BSVrRvcJ.js";import"./index-vOXR-MYi.js";import"./less-CZvmS1u8.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

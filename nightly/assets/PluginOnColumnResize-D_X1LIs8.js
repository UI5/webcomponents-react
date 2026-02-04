import{j as o}from"./iframe-DZSv2zZb.js";import{useMDXComponents as n}from"./index-BqdSmNlq.js";import{I as r,F as m}from"./CommandsAndQueries-CZUib4pD.js";import{M as p,C as s}from"./blocks-BSnZQBrX.js";import"./Tag-BEM_u6FU.js";import"./index-BBEh2DsQ.js";import"./copy-23w1fGpY.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C4VBB38l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2hiyRQA.js";import"./index-CCnKvqA0.js";import"./index-DrF5gpEw.js";import"./Link-CCplhiXF.js";import"./index-EGktcBQb.js";import"./index-DRWzqH2N.js";import"./index-CYgXuNom.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z5sB9nBC.js";import"./addCustomCSSWithScoping-DXOZ95so.js";import"./index-lD82309j.js";import"./information-COD7Swxj.js";import"./sys-enter-2-CFC1gFhb.js";import"./alert-CTmlBOXX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1sxQtFsG.js";import"./delete-DI6RV7tq.js";import"./settings-l6CcnnHP.js";import"./NoData-DLhCBRaq.js";import"./IllustratedMessage-D8pCRgjf.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BDEpL-v7.js";import"./index-CLQJqlCs.js";import"./index-CnzAFXhm.js";import"./slim-arrow-down-CyuMg1At.js";import"./Input-DNMPeMSb.js";import"./ResponsivePopoverCommon.css-KtD9lY_C.js";import"./ValueStateMessage.css-s-LD16Ms.js";import"./Suggestions.css-rNWcSnI_.js";import"./ListBoxItemGroupTemplate-DCfYj4zl.js";import"./ComboBoxItemGroup-BKdcP3-8.js";import"./ListItemBaseTemplate-BxdUV-4d.js";import"./Token-C-7Kub3Q.js";import"./ScrollEnablement-B-_jXnOO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BumMf1lq.js";import"./ToggleButton-zAP43mrP.js";import"./SuggestionItem-C071nU1p.js";import"./index-CyyzdwPX.js";import"./Option-CFccuGHw.js";import"./index-DTcOlFUA.js";import"./SegmentedButton-DFozwT5-.js";import"./index-BK-Z6osY.js";import"./Select-DTXWeNTs.js";import"./InvisibleMessage-DQakaRnz.js";import"./slim-arrow-down-D7c7A5lb.js";import"./index-BzE-wgMg.js";import"./index-EA0cjcxp.js";import"./index-BvFjW66u.js";import"./index-Dqc9eXJK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdNFGMUl.js";import"./group-2-Cdsp5Lj1.js";import"./sort-descending-CYgNNlsg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3f_41XS.js";import"./utils-7Hi63yvZ.js";import"./index-DbLzE552.js";import"./index-CLU12hYv.js";import"./index-CIpEOGpc.js";import"./navigation-down-arrow-CEqrsa8y.js";import"./navigation-right-arrow-D-lQ_y8p.js";import"./navigation-right-arrow-DseGevTb.js";import"./useCurrentTheme-DF-c7hmf.js";import"./index-DciiPa4I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BzVE9glM.js";import"./paper-plane-BHeSZ19x.js";import"./index-DPhTd4XE.js";import"./less-D29QdeXg.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

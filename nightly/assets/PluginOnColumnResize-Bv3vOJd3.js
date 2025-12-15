import{j as o}from"./iframe-B1ai2N1H.js";import{useMDXComponents as n}from"./index-QfN2DAp7.js";import{I as r,F as m}from"./CommandsAndQueries-DatNYL2t.js";import{M as p,C as s}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import"./copy-BJY5YA9D.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BAh5Qb7e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./index-BZxParGj.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Xy6kKlpD.js";import"./delete-CKMfo4Xk.js";import"./settings-CsC-4hiH.js";import"./NoData-BVmLwkSE.js";import"./IllustratedMessage-Nr6Didoc.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-4ep3HbjN.js";import"./index-DCqGCf08.js";import"./index-TntUiIag.js";import"./slim-arrow-down-DYHZJ5LG.js";import"./Input-CCHdc6OX.js";import"./ResponsivePopoverCommon.css-_wb5Prd4.js";import"./ValueStateMessage.css-QQOrZXwg.js";import"./Suggestions.css-ya0SvWRa.js";import"./ListBoxItemGroupTemplate-CC17eT-H.js";import"./ComboBoxItemGroup-BvdFX-vq.js";import"./ListItemBaseTemplate-GHiTWt4_.js";import"./Token-DWQMxVAt.js";import"./ScrollEnablement-CYJKPk5p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1Y3dmb5L.js";import"./ToggleButton-C38IUONv.js";import"./SuggestionItem-BbC6S69Q.js";import"./index-B2SJJBw5.js";import"./Option-CMzgQwF2.js";import"./index-DOw9MRWj.js";import"./SegmentedButton-DzQuajPs.js";import"./index-DxT3UJLK.js";import"./Select-CLe5Ufw3.js";import"./InvisibleMessage-B9fg8eZE.js";import"./slim-arrow-down-xtIJDA6K.js";import"./index-BKQwlKuo.js";import"./index-AEFVkwvL.js";import"./index-CIaszeCC.js";import"./index-CEbRZ6tf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CO5NKowA.js";import"./group-2-DPXkxppB.js";import"./sort-descending-r_07bhB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bs-IgX_t.js";import"./utils-COwwDed4.js";import"./index-sS2AOrHh.js";import"./index-D59qyDlq.js";import"./index-CyY2pIYt.js";import"./navigation-down-arrow-BVW_sj_7.js";import"./navigation-right-arrow-C1avA-LC.js";import"./navigation-right-arrow-H_C30T42.js";import"./useCurrentTheme-Ckxn_kwO.js";import"./index-DJ2gVxdV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlOSzz73.js";import"./paper-plane-C_dmmjbE.js";import"./index-C6bXNW4U.js";import"./less-DT3uITo0.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

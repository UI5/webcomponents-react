import{j as o}from"./iframe-B1b_brho.js";import{useMDXComponents as n}from"./index-D7Qzgic5.js";import{I as r,F as m}from"./CommandsAndQueries-CtGN4dkM.js";import{M as p,C as s}from"./blocks-CVoG47OJ.js";import"./Tag-Ch3HOxAY.js";import"./index-KKxhZSNI.js";import"./copy-Dph3WiPG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BgO7D7Mn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5FuCmER.js";import"./index-BVeNd2GI.js";import"./index-8EjJ8GJV.js";import"./Link-Pv2BqkKv.js";import"./index-Bk9hFp20.js";import"./index-h6jImvMY.js";import"./index-8w0MsWgV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC0Swz4-.js";import"./addCustomCSSWithScoping-Dg_rT4l9.js";import"./index-Dk0QMB33.js";import"./information-Cn-hRts7.js";import"./sys-enter-2-dderIbO6.js";import"./alert-Bjr3m2l0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DlUC8bET.js";import"./delete-3Vgbn1zI.js";import"./settings-7z4AIWo7.js";import"./NoData-XVQCE7YC.js";import"./IllustratedMessage-CCaHK3Dl.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkiGpRZ1.js";import"./index-BmCGQ8OY.js";import"./index-Dg9f9FJY.js";import"./slim-arrow-down-CtSJNFoH.js";import"./Input-DrPrGk4J.js";import"./ResponsivePopoverCommon.css-DecL8iRM.js";import"./ValueStateMessage.css-DCqzi-mz.js";import"./Suggestions.css-DEFGaf02.js";import"./ListBoxItemGroupTemplate-u6SqAiWm.js";import"./ComboBoxItemGroup-Cxw0yiyg.js";import"./ListItemBaseTemplate-D1-RPP7T.js";import"./Token-DztrHKsk.js";import"./ScrollEnablement-Ci1uix4q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeVIH9EC.js";import"./ToggleButton-ConJh4Qq.js";import"./SuggestionItem-DuB_O6wg.js";import"./index-9SIcG1pp.js";import"./Option-CjBwPmEN.js";import"./index-BUu53tH-.js";import"./SegmentedButton-D7knI5JR.js";import"./index-zkE8LOlV.js";import"./Select-Ch62qSYK.js";import"./InvisibleMessage-DfMwylJB.js";import"./slim-arrow-down-Im8B-cR9.js";import"./index-mHWo7vBD.js";import"./index-BLOOnk3h.js";import"./index-B32hLMLV.js";import"./index-MTq0gWz9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CVXGpE6r.js";import"./group-2-DU4omCjN.js";import"./sort-descending-B5Rv1utQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BIjwrtDG.js";import"./utils-dEyVPeJe.js";import"./index-BIOacvM6.js";import"./index-CyttwLCs.js";import"./index-FvgLRY5G.js";import"./navigation-down-arrow-C3y8haIF.js";import"./navigation-right-arrow-0IJs_3zu.js";import"./navigation-right-arrow-BSqrLb3v.js";import"./useCurrentTheme-BXjgz77y.js";import"./index-Cc7bvS6n.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BBS2P8Pi.js";import"./paper-plane-B3hlc-tG.js";import"./index-xEB5nUFf.js";import"./less-L3_E9rnS.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

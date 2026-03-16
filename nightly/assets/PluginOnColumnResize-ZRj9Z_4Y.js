import{j as o}from"./iframe-B9oS8Tdw.js";import{useMDXComponents as r}from"./index-DBcwplNT.js";import{I as n}from"./CommandsAndQueries-NcZGCQIw.js";import{M as m,C as p}from"./blocks-n99WgqUD.js";import"./Tag-C4hdjWJC.js";import"./index-Bpds4hIG.js";import"./copy-Bqdwh9J4.js";import{F as s}from"./Footer-B2MFyv0P.js";import"./PageNotFound-CdK5m3jv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ACHSCLCF.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BttQiJAm.js";import"./index-MP9MDZQa.js";import"./index-CIPzfYgd.js";import"./index-XdY2VQGh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKo2xI1N.js";import"./addCustomCSSWithScoping-BjXuQDKZ.js";import"./index-0NZf9e3S.js";import"./index-DzuQRrNG.js";import"./index-BYYicg2U.js";import"./information-BlcYwQMc.js";import"./sys-enter-2-DdkiI-3L.js";import"./alert-D212h0_R.js";import"./index-C2K37CCg.js";import"./Illustrations-Hb5RsbMM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DEL9cqdT.js";import"./delete-CJPlzdTi.js";import"./settings-DIaK4Die.js";import"./NoData-BLMnzqZy.js";import"./NoFilterResults-B3AMdlwG.js";import"./index-DrzOvK-B.js";import"./IllustratedMessage-Bzd2QQXi.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CJKsBNXM.js";import"./Input-DExRg9sG.js";import"./ResponsivePopoverCommon.css-B86z_YN9.js";import"./ValueStateMessage.css-ByKDah8f.js";import"./Suggestions.css-D-ufL02N.js";import"./ListBoxItemGroupTemplate-CUcRZ2hr.js";import"./ComboBoxItemGroup-Ds7WcOQy.js";import"./ListItemBaseTemplate-B2uVgI-9.js";import"./Token-DszrdDTr.js";import"./ScrollEnablement-CuPUrrc1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgNSnN8f.js";import"./ToggleButton-BdDdHpsO.js";import"./multiselect-all-DmsV51Ol.js";import"./SuggestionItem-B-E1hpPG.js";import"./index-D7G1scwG.js";import"./Option-DUDaACIO.js";import"./index-CEPZX_2s.js";import"./SegmentedButton-DiQhUt-z.js";import"./index-Cu04vq_4.js";import"./Select-C05RCBvi.js";import"./InvisibleMessage-CNfLarpT.js";import"./index-DjTsxyWe.js";import"./index-D0JLt7iu.js";import"./index-CfX-8Mbr.js";import"./index-BkXXTU95.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QnSLKOqd.js";import"./group-2-B9WZnXpk.js";import"./sort-descending-CW-hMbFE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De1v9t9O.js";import"./utils-X5jSZNtf.js";import"./index-GvbFIdTy.js";import"./index-CApXjfIA.js";import"./index-B7hwJ3qq.js";import"./navigation-down-arrow-UCtr-grF.js";import"./navigation-right-arrow-CDleWG9x.js";import"./navigation-right-arrow-mgw419ia.js";import"./useCurrentTheme-BVrPrfNf.js";import"./index-DjGZ1z05.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-tn0cQ7.js";import"./paper-plane-BOkiy_Zr.js";import"./index-Dz5AYLKf.js";import"./less-B6hTD78n.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

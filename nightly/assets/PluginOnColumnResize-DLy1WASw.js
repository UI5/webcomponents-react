import{j as o}from"./iframe-CEsx9pS5.js";import{useMDXComponents as r}from"./index-gmjnJOv_.js";import{I as n}from"./CommandsAndQueries-KRiBOwvQ.js";import{M as m,C as p}from"./blocks-8Wtp1Sju.js";import"./Tag-HQWMt5YG.js";import"./index-CTv8OR9t.js";import"./copy-BKv99Y3s.js";import{F as s}from"./Footer-BzqBC082.js";import"./PageNotFound-Dm-lShwt.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DCsN8t5K.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Op-ol6Yv.js";import"./index-LEy71z39.js";import"./index-C0Wj8jmE.js";import"./index-CNLVL7wa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dF5rg7Pk.js";import"./addCustomCSSWithScoping-C93rkw8E.js";import"./index-C3LB4ZIk.js";import"./index-BUd2Yp1O.js";import"./index-CYl2KpDn.js";import"./information-BsgOGoHr.js";import"./sys-enter-2-QXPkX9VX.js";import"./alert-C6xGNNq6.js";import"./index-D0QmD1oJ.js";import"./Illustrations-B8Nne3o3.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-3jM9F0nS.js";import"./delete-DoaTIgC3.js";import"./settings-Bs-jHTmN.js";import"./NoData-DT708HZj.js";import"./NoFilterResults-DVvHy-ZN.js";import"./index-iiUTeecg.js";import"./IllustratedMessage-iOV8hNFv.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cs69J_Tc.js";import"./Input-AKSpFtND.js";import"./ResponsivePopoverCommon.css-C3wjaSr6.js";import"./ValueStateMessage.css-CpYwQkVy.js";import"./Suggestions.css-BxYCrzla.js";import"./ListBoxItemGroupTemplate-BK_1e7Jd.js";import"./ComboBoxItemGroup-jFQBitjk.js";import"./ListItemBaseTemplate-DUd-IfCf.js";import"./Token-ClXNXVqt.js";import"./ScrollEnablement-BgQUKBhv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COM3Y617.js";import"./ToggleButton-FTZXlhur.js";import"./multiselect-all-CFU46Wod.js";import"./SuggestionItem-BI3gNhRI.js";import"./index-BgUx6RnF.js";import"./Option-kRDMIGPk.js";import"./index-4d8vZKF5.js";import"./SegmentedButton-MdHLGjvd.js";import"./index-ZrD11qG8.js";import"./Select-CXP-jLKH.js";import"./InvisibleMessage-B3PoH58P.js";import"./index-Bdb_o1Y4.js";import"./index-DCEtf4WG.js";import"./index-ZvwKpapI.js";import"./index-BWmFDyId.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DgexCQUt.js";import"./group-2-Co1xUlm9.js";import"./sort-descending-B9xjh0QK.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVUjzMgE.js";import"./utils-DzwVL_EM.js";import"./index-CzmVoBXe.js";import"./index-h2yx8uA3.js";import"./index-BCC9jZwA.js";import"./navigation-down-arrow-voDMe6Oa.js";import"./navigation-right-arrow-ByPMDe9M.js";import"./navigation-right-arrow-BtIFfnR5.js";import"./useCurrentTheme-vsaSH-Ug.js";import"./index-CIdADm8S.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dq-8_1ru.js";import"./paper-plane-BZoVtF7s.js";import"./index-C0ZNn2ww.js";import"./less-DZRRGc_Y.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as r}from"./index-JegEFivd.js";import{I as n}from"./CommandsAndQueries-Dlnf61eM.js";import{M as m,C as p}from"./blocks-DoFVSa5q.js";import"./Tag-C3CTuin_.js";import"./index-_SHIyctb.js";import"./copy-BJgUS9X2.js";import{F as s}from"./Footer-Cg75ltPq.js";import"./PageNotFound-BZ_kgysZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DzyMuTxi.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BR4DnOSS.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./index-BIHxokcD.js";import"./index-nLMQvitA.js";import"./index-ByjlU9SJ.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./index-CiSOiezA.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LiTd2ZkW.js";import"./delete-vdzKKBmV.js";import"./settings--DDZpuL8.js";import"./NoData-TCBac7YU.js";import"./NoFilterResults-B3hOZ6oG.js";import"./index-CvHyOWlh.js";import"./IllustratedMessage-B04gsQS3.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CfSfO62w.js";import"./Input-DZGNZFMo.js";import"./ResponsivePopoverCommon.css-OnbBnNDn.js";import"./ValueStateMessage.css-qBo68dDY.js";import"./Suggestions.css-36Zlw39T.js";import"./ListBoxItemGroupTemplate-DyAZxjIB.js";import"./ComboBoxItemGroup-C63t9shF.js";import"./ListItemBaseTemplate-B29kwNxf.js";import"./Token-soz4pdus.js";import"./ScrollEnablement-DLVPowNZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CuB6Oo--.js";import"./ToggleButton-DH6mKo-3.js";import"./multiselect-all-DIzH_Hk6.js";import"./SuggestionItem-Dl3jHrkd.js";import"./index-CIELwkqh.js";import"./Option-D29MaorT.js";import"./index-DZKWJZME.js";import"./SegmentedButton-8BN62iuX.js";import"./index-ByoHBp1X.js";import"./Select-hgDES0e0.js";import"./InvisibleMessage-B4ZA0kt1.js";import"./index-DaUsDwqK.js";import"./index-CM5OjaUQ.js";import"./index-B3oxdAYp.js";import"./index-BmFCipXX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJdwb7Qq.js";import"./group-2-rmw-5_bM.js";import"./sort-descending-Cu_tgfiW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMTuLZOk.js";import"./utils-ClbH9utX.js";import"./index-BRxQsxgX.js";import"./index-DDzMGmJZ.js";import"./index-C49P15Ym.js";import"./navigation-down-arrow-Cg13Qxbd.js";import"./navigation-right-arrow-B2SMAGBd.js";import"./navigation-right-arrow-DuWEFp8z.js";import"./useCurrentTheme-BYLoQCcm.js";import"./index-vyUcFgUm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-O1z4-Zn4.js";import"./paper-plane-C6QryPVC.js";import"./index-BmIER3z7.js";import"./less-BrJUhvMx.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

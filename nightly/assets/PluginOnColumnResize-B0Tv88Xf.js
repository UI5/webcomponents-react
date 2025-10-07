import{j as o}from"./iframe-8PJ6_3g2.js";import{useMDXComponents as n}from"./index-C0ovl4HQ.js";import{I as r,F as m}from"./CommandsAndQueries-DwoVClSd.js";import{M as p,C as s}from"./blocks-BEb05MJo.js";import"./Tag-z4B_wt0s.js";import"./index-BcmoHwde.js";import"./copy-Bfeap7lu.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Nt8WbxtB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYfjdXMS.js";import"./index-BDwyo_3E.js";import"./index-GTIQmPyl.js";import"./Link-BhglMJXJ.js";import"./index-DOdcY3p9.js";import"./index-BGjlJLGo.js";import"./index-BysWD4q1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsI0QAy3.js";import"./addCustomCSSWithScoping-DJAGr2gu.js";import"./index-DwEBrLAz.js";import"./information-aKABhmx8.js";import"./sys-enter-2-BFUBKj9Z.js";import"./alert-yjyGEikw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CRLZ9Z9y.js";import"./delete-DoVGGrww.js";import"./settings-DOwCGSp-.js";import"./NoData-DX8iFU04.js";import"./IllustratedMessage-DwvnKJ-a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Cz59M25c.js";import"./index-BT7W3yfe.js";import"./index-BdN-aXSN.js";import"./slim-arrow-down-BTsCMmyB.js";import"./Input-09R7KXgd.js";import"./ResponsivePopoverCommon.css-CrTnDQN-.js";import"./ValueStateMessage.css-BM_qG5Qq.js";import"./Suggestions.css-B1t_kolg.js";import"./ListBoxItemGroupTemplate-DuVOq56T.js";import"./ComboBoxItemGroup-CbELEeBa.js";import"./ListItemBaseTemplate-BXf-MYE4.js";import"./Token-BMJQIKb4.js";import"./ScrollEnablement-CI1lcBXS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZruH8lY.js";import"./ToggleButton-rRY9LxWZ.js";import"./SuggestionItem-D37ZdZha.js";import"./index-DIJMSgqG.js";import"./Option--8nGv81u.js";import"./index-B4ZMJdMK.js";import"./SegmentedButton-Sdb6Hiel.js";import"./index-D8L7g3jK.js";import"./Select-CwKKVGbl.js";import"./InvisibleMessage-Ctaws7An.js";import"./slim-arrow-down-udpyDWvM.js";import"./index-Dz-9JHfm.js";import"./index-CSgO5UkG.js";import"./index-DmBbmPAO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BCjSLsv5.js";import"./group-2-gn0AftPK.js";import"./sort-descending-UnfrwN5g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CBj28W3w.js";import"./utils-CQzE5s8Z.js";import"./index-CKJGxDyU.js";import"./index-EqUF1F3h.js";import"./index-BVu9BMf-.js";import"./navigation-down-arrow-DQ7nYyPJ.js";import"./navigation-right-arrow-BKJTL6fn.js";import"./navigation-right-arrow-CG0KPGIo.js";import"./useCurrentTheme-B8X2i-jd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-uz7ZZ6ou.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxBvBx4N.js";import"./paper-plane-C7vPyTzF.js";import"./index-Pz9pP2GN.js";import"./less-B8XtBTQx.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

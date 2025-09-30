import{j as o}from"./iframe-D-p-3OCM.js";import{useMDXComponents as r}from"./index-DJLiOc38.js";import{I as n,F as m}from"./CommandsAndQueries-GFFu71sG.js";import{M as p,C as s}from"./blocks-D8nJ9XLJ.js";import"./Tag-3bv5cfrS.js";import"./index-4PsYVbCm.js";import"./copy-ORsTAKbB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CHycY5of.js";import"./preload-helper-PPVm8Dsz.js";import"./index--P1CcwOi.js";import"./index-TBDKK4_L.js";import"./index-BwwgwqQS.js";import"./Link-BjWHArC4.js";import"./index-DqKaYphS.js";import"./index-sDY_tTy_.js";import"./index-DzbvANjW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-sPN7n5XP.js";import"./addCustomCSSWithScoping-BzKWOZDH.js";import"./index-C326ykrp.js";import"./information-BQJXeVKx.js";import"./sys-enter-2-CYyiWANR.js";import"./alert-YvrQf4Kz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B57DziD3.js";import"./delete-BEO9yIVW.js";import"./settings-PRG2_s48.js";import"./NoData-DuGH0ec8.js";import"./IllustratedMessage-CUa4Bt6s.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Wcus0TGK.js";import"./index-BBXLhWys.js";import"./slim-arrow-down-DKsg_luZ.js";import"./Input-Da3ToNza.js";import"./ResponsivePopoverCommon.css-OapI0cqy.js";import"./ValueStateMessage.css-BkpHToNr.js";import"./Suggestions.css-o7YEXsUI.js";import"./ListBoxItemGroupTemplate-CKMRFc9x.js";import"./ComboBoxItemGroup-D9Rx3qMQ.js";import"./ListItemBaseTemplate-CXOX3yIO.js";import"./Token-DjuINvff.js";import"./ScrollEnablement-Dx2bfBZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_DUY2Ux.js";import"./ToggleButton-k4-GWGjQ.js";import"./SuggestionItem-IVmzuukY.js";import"./index-CKXB7l_Z.js";import"./Option-DKRbWp3g.js";import"./index-D3t7vdTR.js";import"./SegmentedButton-BIpofa76.js";import"./index-Ce_ehxxC.js";import"./Select-BHBfJeCN.js";import"./InvisibleMessage-DZZYj9QJ.js";import"./slim-arrow-down-CfASCrZe.js";import"./index-DJ9wMrht.js";import"./index-DqIlF11a.js";import"./IconDesign-DXd8PPVF.js";import"./filter-K4X4U2Pi.js";import"./group-2-ijcP2dFk.js";import"./sort-descending-DB86tqPR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BsUDDfTv.js";import"./utils-97cCH_s2.js";import"./index-BuWNZ_Be.js";import"./index-CxRdXbJe.js";import"./index-DkICcsDE.js";import"./navigation-down-arrow-DuI4O0ZC.js";import"./navigation-right-arrow-DChn1A1I.js";import"./navigation-right-arrow-2NSvp5We.js";import"./useCurrentTheme-DSou3srl.js";import"./IndicationColor-DVw-fSM_.js";import"./index-c2e1pm2Q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BGlVHb77.js";import"./paper-plane-D752rvN5.js";import"./index-BgQuvuCN.js";import"./less-CFosWOHX.js";import"./index-BvAlTkp1.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};

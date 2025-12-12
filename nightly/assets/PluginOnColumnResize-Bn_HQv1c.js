import{j as o}from"./iframe-CA3Ho9Q5.js";import{useMDXComponents as n}from"./index-BSP_ypsD.js";import{I as r,F as m}from"./CommandsAndQueries-CpnGQ0tY.js";import{M as p,C as s}from"./blocks-duj_cvae.js";import"./Tag-C7EDP0wF.js";import"./index-B2KbXcP2.js";import"./copy-Cirx0xPf.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CX2YmmH7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CS7zB70b.js";import"./index-B1DuQcex.js";import"./index-Cj36scYa.js";import"./Link-B9lvI_mX.js";import"./index-Vj9BxWeO.js";import"./index-DJDcB98R.js";import"./index-CnX6lHZc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CziqpW1M.js";import"./addCustomCSSWithScoping-CmwUGghA.js";import"./index-QQ_2tXfB.js";import"./information-D0PKU0zc.js";import"./sys-enter-2-BzmXGgFI.js";import"./alert-DOfQq82s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-pSB3nE8O.js";import"./delete-xPoZJBZg.js";import"./settings-sBnL1p2q.js";import"./NoData-Bjn-uhcG.js";import"./IllustratedMessage-C1nIamAf.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CBaUn8xf.js";import"./index-0bZDwJmd.js";import"./index-CM7WhKj6.js";import"./slim-arrow-down-C3eZfZh-.js";import"./Input-CVKYZVtQ.js";import"./ResponsivePopoverCommon.css-HLQwWCxH.js";import"./ValueStateMessage.css-DfbuXwvj.js";import"./Suggestions.css-iNzzcrss.js";import"./ListBoxItemGroupTemplate-D0iaKul1.js";import"./ComboBoxItemGroup-DZa5aCxI.js";import"./ListItemBaseTemplate-VtML0_fs.js";import"./Token-BPQsJP1e.js";import"./ScrollEnablement-Dip40C-m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKlWXx6n.js";import"./ToggleButton-B5e8_eSy.js";import"./SuggestionItem-ii4KscYX.js";import"./index-CNQ8GyV9.js";import"./Option-0FkMbiJ5.js";import"./index-BLzjPo3w.js";import"./SegmentedButton-B-4keN_u.js";import"./index-CRVjoIym.js";import"./Select-BslhBdoh.js";import"./InvisibleMessage-BF5OzUJ0.js";import"./slim-arrow-down-CLco8maH.js";import"./index-DFRTyKxs.js";import"./index-BHNHxsyD.js";import"./index-BtK-IhRn.js";import"./index-BLZkVtTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTIOOdab.js";import"./group-2-DeuvYpMF.js";import"./sort-descending-Dfh9oR0a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-U8bJ6mPR.js";import"./utils-mN_QxSrv.js";import"./index-DWY9VANS.js";import"./index-NiE7rD6V.js";import"./index-CnEeNT_m.js";import"./navigation-down-arrow-CEMVxfUW.js";import"./navigation-right-arrow-pdf4AWX0.js";import"./navigation-right-arrow-C4WsPtKq.js";import"./useCurrentTheme-B-RCzITw.js";import"./index-Cjnz1VnT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D8Jpu7PP.js";import"./paper-plane-GfWk7Nnh.js";import"./index-Bgs4bEEy.js";import"./less-tNpUXr9m.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

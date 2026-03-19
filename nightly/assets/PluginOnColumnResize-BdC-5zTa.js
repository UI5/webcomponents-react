import{j as o}from"./iframe-CqN2ZhBf.js";import{useMDXComponents as r}from"./index-l_k7HiPu.js";import{I as n}from"./CommandsAndQueries-BzSACk84.js";import{M as m,C as p}from"./blocks-D3fE08ja.js";import"./Tag-DaK0HZJI.js";import"./index-BQSixcl8.js";import"./copy-BMnDsiBX.js";import{F as s}from"./Footer-DTH9quFy.js";import"./PageNotFound-DDb6UcXH.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-wIwPshJ2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-sJNkb0O1.js";import"./index-C_OjFqiG.js";import"./index-BmfFKSeY.js";import"./index-C6JiuDE8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1eKis37g.js";import"./addCustomCSSWithScoping-DCGf9rRA.js";import"./index-ClO4sXRT.js";import"./index-BLwcEe9O.js";import"./index-BZ-8NUw-.js";import"./information-D6BYlg7t.js";import"./sys-enter-2-DctZJMGf.js";import"./alert-CXFO2CkX.js";import"./index-x-vR1nJy.js";import"./Illustrations-CQ3hDVBV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--txPoGWe.js";import"./delete-h2XdaitH.js";import"./settings-CV6KCmeb.js";import"./NoData-C6Sl59W9.js";import"./NoFilterResults-_LAkR6Uq.js";import"./index-BScT3cos.js";import"./IllustratedMessage-ClWQ7sf8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CjGTJ4y2.js";import"./Input-3bofm7YI.js";import"./ResponsivePopoverCommon.css-BNkBTrbu.js";import"./ValueStateMessage.css-rci_AzRX.js";import"./Suggestions.css-s0E0RINe.js";import"./ListBoxItemGroupTemplate-Bn09u9FB.js";import"./ComboBoxItemGroup-B1knsw1Z.js";import"./ListItemBaseTemplate-6JC-rm6u.js";import"./Token-BHS6Qknj.js";import"./ScrollEnablement-B4APcJGh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D5MRk4wr.js";import"./ToggleButton-CXDSYRUx.js";import"./multiselect-all-Bj3dWoCm.js";import"./SuggestionItem-uNJHrwE9.js";import"./index-CEbPyYrY.js";import"./Option-DMa1oTmd.js";import"./index-C403r3c5.js";import"./SegmentedButton-DKhXYk1S.js";import"./index-M_ILyq9S.js";import"./Select-C0_CyldT.js";import"./InvisibleMessage-BYqXJDe3.js";import"./index-B6LH8klQ.js";import"./index-BPeJ1ib5.js";import"./index-BLglrg0-.js";import"./index-B2BYcUEV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbiJbucS.js";import"./group-2-E6ze7SLh.js";import"./sort-descending-DDk2sEof.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4NWRO4be.js";import"./utils-DlysuV-i.js";import"./index-uzSXEkPm.js";import"./index-BIMeoTS_.js";import"./index-C3YYhu2K.js";import"./navigation-down-arrow-BLAd6_UK.js";import"./navigation-right-arrow-CER8vNPc.js";import"./navigation-right-arrow-Dzk8mzqX.js";import"./useCurrentTheme-C2V2IWtp.js";import"./index-CUOgXW1b.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C9HJPlj_.js";import"./paper-plane-_ZQb1tQs.js";import"./index-0rrPHm6J.js";import"./less-BaKkSfRH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

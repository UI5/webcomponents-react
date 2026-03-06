import{j as o}from"./iframe-BoiPRijN.js";import{useMDXComponents as r}from"./index-BRummw3t.js";import{I as n}from"./CommandsAndQueries-BnJUOm3t.js";import{M as m,C as p}from"./blocks-CPrA8iQB.js";import"./Tag-B1iwkrJ0.js";import"./index-BTDY8alR.js";import"./copy-Dvt_rD-U.js";import{F as s}from"./Footer-iiNA2dGD.js";import"./PageNotFound-MgXkehwz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DejHcveP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CFo8_Djp.js";import"./index-BQY5khtD.js";import"./index-Jd5qJzJh.js";import"./index-DlyFbgdQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpV6XLVk.js";import"./addCustomCSSWithScoping-DTHpZRZB.js";import"./index-C15uyf0A.js";import"./index-BP_Slc-J.js";import"./index-dkrwuiwP.js";import"./information-BC9xfD2K.js";import"./sys-enter-2-CswPN__J.js";import"./alert-BvdiGKEq.js";import"./index-XewTnCmy.js";import"./Illustrations-CKlojL9Q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-K5LglML7.js";import"./delete-Dla_cBMd.js";import"./settings--JyTse2K.js";import"./NoData-CEvC9SOK.js";import"./NoFilterResults-DGK3vz5s.js";import"./index-CUqI6XWZ.js";import"./IllustratedMessage-CUsnh6ic.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DTx62md9.js";import"./Input-BAuxatca.js";import"./ResponsivePopoverCommon.css-ujru0ghE.js";import"./ValueStateMessage.css-DEzEaU54.js";import"./Suggestions.css-xOjhYq7i.js";import"./ListBoxItemGroupTemplate-CaVscpMh.js";import"./ComboBoxItemGroup-qmXelGMa.js";import"./ListItemBaseTemplate-C5eauqC9.js";import"./Token-BjoEP2YG.js";import"./ScrollEnablement-DLJduNw8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChcK6bsg.js";import"./ToggleButton-BGrpVUlG.js";import"./multiselect-all-M_uaembb.js";import"./SuggestionItem-CSav1c2B.js";import"./index-SHA1M5Y_.js";import"./Option-ViXAl4Kq.js";import"./index-x26HLP5K.js";import"./SegmentedButton-BSG--Us7.js";import"./index-D0HvuG0E.js";import"./Select-1bH1ueYZ.js";import"./InvisibleMessage-CXpqfns1.js";import"./index-CUzGhvMq.js";import"./index-CJrY5ywd.js";import"./index-CFdQXySd.js";import"./index-CGSreYF0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BGDbGBAq.js";import"./group-2-pBllKI8s.js";import"./sort-descending-LT_QT5Pk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfWkv8FN.js";import"./utils-Dyu_RtUB.js";import"./index-DCXSZGzE.js";import"./index-Cx95m7EI.js";import"./index-C2zlICN6.js";import"./navigation-down-arrow-BwpxFzct.js";import"./navigation-right-arrow-BOhWzFQj.js";import"./navigation-right-arrow-DU9-hztn.js";import"./useCurrentTheme-C3dnJtDI.js";import"./index-U_qmoDgq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DETi-hVj.js";import"./paper-plane-CuIzSdKp.js";import"./index-BbjXtlM4.js";import"./less-3QagZ96S.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

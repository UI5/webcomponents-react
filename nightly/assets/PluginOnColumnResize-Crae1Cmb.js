import{j as o}from"./iframe-sSOxzerW.js";import{useMDXComponents as n}from"./index-C4N772Ec.js";import{I as r,F as m}from"./CommandsAndQueries-DN1a2yy9.js";import{M as p,C as s}from"./blocks-DZ5JcJjQ.js";import"./Tag-Bf5UwcWO.js";import"./index-DoYi49fY.js";import"./copy-VA4auTr6.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CSavsqtu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PB68rHIj.js";import"./index-BcOGuNSc.js";import"./index-CbHc7dVQ.js";import"./Link-DXd90h-X.js";import"./index-pczPksUh.js";import"./index-DhmKmBvV.js";import"./index-AsGnG6fc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-k9gqQhIN.js";import"./addCustomCSSWithScoping-8kQXqHvm.js";import"./index-KAoDxHkF.js";import"./information-D7Jek_j9.js";import"./sys-enter-2-CJf9FrQN.js";import"./alert-BmkkzoHl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CUlM0idS.js";import"./delete-YKZAYgfq.js";import"./settings-DfMZh29Y.js";import"./NoData-DhoGmJUV.js";import"./IllustratedMessage-C8ByZfCk.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Dmrub52O.js";import"./index-CWucdukJ.js";import"./index-Cp8EfoGt.js";import"./slim-arrow-down-D_dl0lVn.js";import"./Input-CWyqJw20.js";import"./ResponsivePopoverCommon.css-ujCiRX3T.js";import"./ValueStateMessage.css-Bf_f1VXt.js";import"./Suggestions.css-CsTtHaeM.js";import"./ListBoxItemGroupTemplate-tmSOvkkU.js";import"./ComboBoxItemGroup-as0GmnEu.js";import"./ListItemBaseTemplate-CyPqs4mv.js";import"./Token-BninTSpu.js";import"./ScrollEnablement-CK3trYvC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CGX3xged.js";import"./ToggleButton-BAuFiK85.js";import"./SuggestionItem-DZ-ZtbNH.js";import"./index-DJO1nKvm.js";import"./Option-BL1oRM-m.js";import"./index-BaNQZPFZ.js";import"./SegmentedButton-rLQS_Rwl.js";import"./index-DS5md5gp.js";import"./Select-r6zN4deI.js";import"./InvisibleMessage-DEsSOQlO.js";import"./slim-arrow-down-UfGNSj6J.js";import"./index-BFDbo67H.js";import"./index-CWrxZq5Q.js";import"./index-BsaHFzm2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DkoNqmaM.js";import"./group-2-78TljRjA.js";import"./sort-descending-BOmTXKtu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-By0nFfgd.js";import"./utils-FXZnoG2v.js";import"./index-lQVojLXN.js";import"./index-Ck2xITAb.js";import"./index-7jNUNffH.js";import"./navigation-down-arrow-B_wbscXY.js";import"./navigation-right-arrow-BxVQWDb7.js";import"./navigation-right-arrow-BMvhxWkw.js";import"./useCurrentTheme-DLF3uFVh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVIm7mZc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BVd8EzLl.js";import"./paper-plane-DAN7XnSr.js";import"./index-DjeZ_rHZ.js";import"./less-CpyHKjX7.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

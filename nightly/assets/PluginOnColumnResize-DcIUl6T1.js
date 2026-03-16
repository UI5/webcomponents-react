import{j as o}from"./iframe--9dKe8DB.js";import{useMDXComponents as r}from"./index-KI9hm8HB.js";import{I as n}from"./CommandsAndQueries-DmMMilME.js";import{M as m,C as p}from"./blocks-sz1V1YD1.js";import"./Tag-Dx2xRUom.js";import"./index-CPDFIZvY.js";import"./copy-DDHnU-KJ.js";import{F as s}from"./Footer-Q0CQ_qDk.js";import"./PageNotFound-CuY3r4La.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DEDvJZy2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BglFcPBB.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./index-BYfUGIr5.js";import"./index-W9KwanBR.js";import"./index-FyOsxtAw.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./index-rkrari7y.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQVJ7UfD.js";import"./delete-UpR3n6t7.js";import"./settings-we5d1Qdo.js";import"./NoData-CTvQa2cu.js";import"./NoFilterResults-CisMdPss.js";import"./index-Buvth7Xi.js";import"./IllustratedMessage-egyeCVYb.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DT7BwDcp.js";import"./Input-Bzs2WJ0n.js";import"./ResponsivePopoverCommon.css-B-aEh8v6.js";import"./ValueStateMessage.css-fsZpHtW6.js";import"./Suggestions.css-DwtCktYC.js";import"./ListBoxItemGroupTemplate-BDXtzS3x.js";import"./ComboBoxItemGroup-k2eOkzNK.js";import"./ListItemBaseTemplate-CEoNUjl5.js";import"./Token-DzmHzAMQ.js";import"./ScrollEnablement-B0ocudnB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUlTKo1l.js";import"./ToggleButton-BUpmJXw9.js";import"./multiselect-all-xFdwtE2L.js";import"./SuggestionItem-BxBxlMFB.js";import"./index-CxFVbOcB.js";import"./Option-ClyYr9IH.js";import"./index-BUn6GQyk.js";import"./SegmentedButton-BtNun3GR.js";import"./index-vp_fZGXH.js";import"./Select-BJ3mdIAK.js";import"./InvisibleMessage-DJrm2fq1.js";import"./index-CXL69l_u.js";import"./index-CafeHBfG.js";import"./index-DXrjuC-M.js";import"./index-BvCJekuK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEIgHrVL.js";import"./group-2-BIdr9xUh.js";import"./sort-descending-A1ebgf8V.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEfENsPH.js";import"./utils-M3j0Syqb.js";import"./index-Be4Le6Ob.js";import"./index-RhGTS4dy.js";import"./index-D1Rwx7s5.js";import"./navigation-down-arrow-D1hT7rfO.js";import"./navigation-right-arrow-DEiywgOw.js";import"./navigation-right-arrow-uImefhjs.js";import"./useCurrentTheme-Blzbw4Tr.js";import"./index-hK5Tmxlj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-4mhkBenG.js";import"./paper-plane-B7w-DG0X.js";import"./index-DtsRxF2n.js";import"./less-BuMWggUS.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

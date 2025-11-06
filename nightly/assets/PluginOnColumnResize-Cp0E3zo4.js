import{j as o}from"./iframe-DVlTfEM-.js";import{useMDXComponents as n}from"./index-k_8IF_2O.js";import{I as r,F as m}from"./CommandsAndQueries-BkPdYDds.js";import{M as p,C as s}from"./blocks-DrSp3MOM.js";import"./Tag-BNH48-R1.js";import"./index-Cikr51XZ.js";import"./copy-Do4831X0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dc4CzVRx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8q9J4Er.js";import"./index-D5QdPm5n.js";import"./index-VtIqKiJ-.js";import"./Link-B2NzUiP2.js";import"./index-I1wK0hXe.js";import"./index-gAu6pc3o.js";import"./index-B-srII_E.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuLQb_Od.js";import"./addCustomCSSWithScoping-DyDcwna5.js";import"./index-CyKhe59o.js";import"./information-CmhnSrRB.js";import"./sys-enter-2-ty4GJ2q8.js";import"./alert-MBG6abBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkCO8Xag.js";import"./delete-D8PsoqYs.js";import"./settings-BvZiD-4L.js";import"./NoData-CSkDH6ij.js";import"./IllustratedMessage-UOdpDpe-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cr9VJd-6.js";import"./index-zssJOUHP.js";import"./index-DjSKLUSQ.js";import"./slim-arrow-down-Cl15R1ZF.js";import"./Input-BGJxuKnZ.js";import"./ResponsivePopoverCommon.css-oNmL3crK.js";import"./ValueStateMessage.css-CtUL6j0K.js";import"./Suggestions.css-CM1R5dIm.js";import"./ListBoxItemGroupTemplate-BP2e86jZ.js";import"./ComboBoxItemGroup-BqFAfTuf.js";import"./ListItemBaseTemplate-C_4eP7YO.js";import"./Token-DvVKUdOw.js";import"./ScrollEnablement-D7Xa6acP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3KQCuJV.js";import"./ToggleButton-fm8RXqSV.js";import"./SuggestionItem-CRJSj9d9.js";import"./index-DL3kJ6Ys.js";import"./Option-bA3BQjg2.js";import"./index-Chk0CywK.js";import"./SegmentedButton-CHFmZDT5.js";import"./index-B43_nY2G.js";import"./Select-D18nbPyu.js";import"./InvisibleMessage-CRYSMjmC.js";import"./slim-arrow-down-CiXqYYHt.js";import"./index-iqm3GyJh.js";import"./index-CkVXAiTR.js";import"./index-Dyam-MVy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-scTLOOoX.js";import"./group-2-dWyvSvql.js";import"./sort-descending-B0NwIWrn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmrYW8iD.js";import"./utils-Cr5WVsBR.js";import"./index-BFCC2aiM.js";import"./index-CMeIuUOs.js";import"./index-BL4PIRcT.js";import"./navigation-down-arrow-BUDUl4ig.js";import"./navigation-right-arrow-Dfp0sj6x.js";import"./navigation-right-arrow-DYueMaPq.js";import"./useCurrentTheme--PrL2jjb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D3bUPVNG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EPGyQxGy.js";import"./paper-plane-Bmo31A5w.js";import"./index-B4QIzuUd.js";import"./less-DHSI_jam.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

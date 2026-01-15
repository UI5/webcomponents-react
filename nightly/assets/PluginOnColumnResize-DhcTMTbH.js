import{j as o}from"./iframe-DzsY3-MS.js";import{useMDXComponents as n}from"./index-DFSYB4hO.js";import{I as r,F as m}from"./CommandsAndQueries-DBuYeihv.js";import{M as p,C as s}from"./blocks-DS0Y1BZg.js";import"./Tag-L2pUIWpP.js";import"./index-DdAKftEE.js";import"./copy-BminF4Iy.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-hG0Mq3Eh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKfHbnjd.js";import"./index-DkJZCu2R.js";import"./index-BfsMxbQ9.js";import"./Link-3hYic3jw.js";import"./index-BndW4ILr.js";import"./index-DQ0Bmg4X.js";import"./index-DTlY8Kzq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7IVEmPi.js";import"./addCustomCSSWithScoping-0WSQwudS.js";import"./index-C5c1rTpg.js";import"./information-a2aTFncM.js";import"./sys-enter-2-7qDJkwn8.js";import"./alert-BRYQ7SuA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-l5aoi9KM.js";import"./delete-B3ryUQBB.js";import"./settings-C00RCGye.js";import"./NoData-yJgd8XnX.js";import"./IllustratedMessage-DNQ-CWR9.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CRpMHBpW.js";import"./index-DwW6N8AQ.js";import"./index-i1IFNKnh.js";import"./slim-arrow-down-CkH4Whvo.js";import"./Input-Dq6-REg9.js";import"./ResponsivePopoverCommon.css-CLPuLjYm.js";import"./ValueStateMessage.css-Di8Y_FaV.js";import"./Suggestions.css-B9qKiT0u.js";import"./ListBoxItemGroupTemplate-DDMKAAAG.js";import"./ComboBoxItemGroup-0Q9ga48v.js";import"./ListItemBaseTemplate-C_vIHZba.js";import"./Token-EUneMihA.js";import"./ScrollEnablement-CkDB7Jzl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bem0jaOu.js";import"./ToggleButton-DX5JCL6_.js";import"./SuggestionItem-BarzL3HZ.js";import"./index-v5BZERv9.js";import"./Option-B5iYKL3-.js";import"./index-Cdxm6Zw8.js";import"./SegmentedButton-jOnxCPv8.js";import"./index-BdSOKqSc.js";import"./Select-BGW-2fE4.js";import"./InvisibleMessage-Cb7HEOO2.js";import"./slim-arrow-down-DMe2ZC5d.js";import"./index-DOhw8rBk.js";import"./index-B-owJPr5.js";import"./index-BetNagWU.js";import"./index-lb1RbLlp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2pnkmk3s.js";import"./group-2-D2bVnNyU.js";import"./sort-descending-xEWSnLJM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlOYjGGn.js";import"./utils-CyyFPTY5.js";import"./index-BL0l7ykh.js";import"./index-fQZNWHJl.js";import"./index-CSRjycPW.js";import"./navigation-down-arrow-DFDWFqht.js";import"./navigation-right-arrow-D6uPQJor.js";import"./navigation-right-arrow-DNx7PXWq.js";import"./useCurrentTheme-CDEziUwa.js";import"./index-B_BoFXOZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DGi63fh0.js";import"./paper-plane-D_Zbwyw2.js";import"./index-E_1UjDh5.js";import"./less-RjX5NJTD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

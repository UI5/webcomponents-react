import{j as o}from"./iframe-D9-OPwVR.js";import{useMDXComponents as n}from"./index-rQrCyh78.js";import{I as r,F as m}from"./CommandsAndQueries-CGaVhEZZ.js";import{M as p,C as s}from"./blocks-yWwHjaca.js";import"./Tag-C4h9s18a.js";import"./index-C0yJm7_O.js";import"./copy-kqUatD9Y.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BiLsGBYW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqY2NvOe.js";import"./index-DWSshsP3.js";import"./index-D2zbla8P.js";import"./Link-C0FJUUPf.js";import"./index-C2LtXiVH.js";import"./index-B7FHygPg.js";import"./index-BKtOrYz7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHNrYRTW.js";import"./addCustomCSSWithScoping-BMu8GK7h.js";import"./index-CARCmcfE.js";import"./information-CXuNnhF_.js";import"./sys-enter-2-CpLLk16Q.js";import"./alert-DmoPAb-1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-kpLUfox6.js";import"./delete-8q-2SnNy.js";import"./settings-Bpoz5lRE.js";import"./NoData-EROY5bkG.js";import"./IllustratedMessage-DytrPSKy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-zKEQv0vR.js";import"./index-Dpxo6caN.js";import"./index-CfkNruMI.js";import"./slim-arrow-down-D0gVics8.js";import"./Input-CSIFNCL6.js";import"./ResponsivePopoverCommon.css-C3lxCD6U.js";import"./ValueStateMessage.css-BrEs7f5W.js";import"./Suggestions.css-CFbdmF0I.js";import"./ListBoxItemGroupTemplate-c-FYvdWE.js";import"./ComboBoxItemGroup-DkC4WO5K.js";import"./ListItemBaseTemplate-i-G6TbOA.js";import"./Token-vKcedYbW.js";import"./ScrollEnablement-Co_z5fSg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MB0v_CnF.js";import"./ToggleButton-CEqqS3wC.js";import"./SuggestionItem-C155tcTK.js";import"./index--hQpz-7j.js";import"./Option-CDBeTc3X.js";import"./index-BsFzClGp.js";import"./SegmentedButton-hl36dHeU.js";import"./index-4z4gHu9I.js";import"./Select-BWlL0NgQ.js";import"./InvisibleMessage-D7C8qh2V.js";import"./slim-arrow-down-BozxQxPU.js";import"./index-CEocB7zn.js";import"./index-V_dIRRcU.js";import"./index-fHuC-P80.js";import"./index-BZtku0It.js";import"./IconDesign-DXd8PPVF.js";import"./filter-diVsbBEy.js";import"./group-2-BfFZyU2o.js";import"./sort-descending-CWWRG3lr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSa0RqIf.js";import"./utils-CFI02rUA.js";import"./index-Dg1PSLCa.js";import"./index-CT_cyvy_.js";import"./index-C9-lc1hX.js";import"./navigation-down-arrow-D7LYppDl.js";import"./navigation-right-arrow-w26ji6kI.js";import"./navigation-right-arrow-CmoZr5kZ.js";import"./useCurrentTheme-DbndD2Nd.js";import"./index-Db7VAK4s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oRJVLp.js";import"./paper-plane-CUa9Y-jj.js";import"./index-CYFBViS-.js";import"./less-D7uaR2Sp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

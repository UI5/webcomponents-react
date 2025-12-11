import{j as o}from"./iframe-BO0jLSss.js";import{useMDXComponents as n}from"./index-DKYRdGJC.js";import{I as r,F as m}from"./CommandsAndQueries-CgQBaZ0f.js";import{M as p,C as s}from"./blocks-B4u3eIrx.js";import"./Tag-GPe-hxqe.js";import"./index-CblgVrgk.js";import"./copy-D8dGmaRo.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D7MtjTzc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DelbaEfh.js";import"./index-ZGr5TJVA.js";import"./index-CpvGRbxq.js";import"./Link-C1ayfMxn.js";import"./index-CEuImug1.js";import"./index-MgaH4Bh7.js";import"./index-CQJ8H28h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3DyNz5yK.js";import"./addCustomCSSWithScoping-tlJvF9vw.js";import"./index-Cxn0-wv1.js";import"./information-D3uCnnkd.js";import"./sys-enter-2-wxpj1ZiR.js";import"./alert-BevRZGbf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-WOPC9WGY.js";import"./delete-CXSVZr3J.js";import"./settings-10XeLyfQ.js";import"./NoData-Bp9WgEt4.js";import"./IllustratedMessage-CkbG5ZvE.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CQFTLeWZ.js";import"./index-CCjPGqWt.js";import"./index-DSkwQ9bU.js";import"./slim-arrow-down-BTwGuTkB.js";import"./Input-BW36Az8s.js";import"./ResponsivePopoverCommon.css-JDR8aaaw.js";import"./ValueStateMessage.css-DX9Ekmj2.js";import"./Suggestions.css-BcCiMvmK.js";import"./ListBoxItemGroupTemplate-2cOZvPZ_.js";import"./ComboBoxItemGroup-CPX37NIp.js";import"./ListItemBaseTemplate-KzzU4Rx3.js";import"./Token-BbkDyfWL.js";import"./ScrollEnablement-Dc2oxzPB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dn6AUPyj.js";import"./ToggleButton-XZE7B9VL.js";import"./SuggestionItem-BfhP-dC0.js";import"./index-BzqKXdxx.js";import"./Option-CNIcjJ6X.js";import"./index-C7e3H0Lc.js";import"./SegmentedButton-u_VBq4Z5.js";import"./index-3cbxcu0U.js";import"./Select-tyOKBt9U.js";import"./InvisibleMessage-Ckou_TOv.js";import"./slim-arrow-down-BpthopxW.js";import"./index-BNFz1DGk.js";import"./index-d6hdHjrN.js";import"./index-y6EH7Axm.js";import"./index-BWlaxzMP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CKdADjSP.js";import"./group-2-BVByTZBV.js";import"./sort-descending-CAs7fCPL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfvWHhZL.js";import"./utils-C49Mq9vB.js";import"./index-DfdAm2kH.js";import"./index-CSVJMtfx.js";import"./index-DFflxCOc.js";import"./navigation-down-arrow-rNIcSUzY.js";import"./navigation-right-arrow-B6KhF_y0.js";import"./navigation-right-arrow-BWB9l_WM.js";import"./useCurrentTheme-D2TM_kNy.js";import"./index-CFGjj6s2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BupaFKFa.js";import"./paper-plane-nEhWEkVl.js";import"./index-Buj-2QJo.js";import"./less-BZcQvZ5K.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

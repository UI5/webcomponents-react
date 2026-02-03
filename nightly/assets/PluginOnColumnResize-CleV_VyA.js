import{j as o}from"./iframe-CmEyKRpD.js";import{useMDXComponents as n}from"./index-BFnFrbBZ.js";import{I as r,F as m}from"./CommandsAndQueries-D0beJAEb.js";import{M as p,C as s}from"./blocks-DsGvGcEm.js";import"./Tag-mVH7vrSv.js";import"./index-DfQFYAIc.js";import"./copy-BKqOupip.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BSx5T4bO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzwroZCy.js";import"./index-Cd1X9zdd.js";import"./index-CSRfU7vi.js";import"./Link-D1koUNpv.js";import"./index-BlD9QPif.js";import"./index-DbVfD_Wp.js";import"./index-dQ_ejieb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-eGz8eTqY.js";import"./addCustomCSSWithScoping-DZlJgGLS.js";import"./index-DEFXD6K8.js";import"./information-Dw0vaUoh.js";import"./sys-enter-2-BCiCiomL.js";import"./alert-ClWdEWiH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DbUs2q01.js";import"./delete-DexdWHOY.js";import"./settings-dxNIuobx.js";import"./NoData-DHeZKmI-.js";import"./IllustratedMessage-DIvmjW9o.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-c_u-lq4s.js";import"./index-BEdraa6m.js";import"./index-Cw5hOkPV.js";import"./slim-arrow-down-CMqb9FrJ.js";import"./Input-DMTE7PtB.js";import"./ResponsivePopoverCommon.css-B_kZ82Sf.js";import"./ValueStateMessage.css-COIj3-dB.js";import"./Suggestions.css-CwH8bkW-.js";import"./ListBoxItemGroupTemplate-CchY9zri.js";import"./ComboBoxItemGroup-DimkAvqf.js";import"./ListItemBaseTemplate-Bf84ufvG.js";import"./Token-fKVOhfRR.js";import"./ScrollEnablement-Dl5z94x_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BYXnPIWK.js";import"./ToggleButton-vu-v_zb-.js";import"./SuggestionItem-kn7KkTa3.js";import"./index-DPbvCSic.js";import"./Option-u5uukDin.js";import"./index-C8R_luuu.js";import"./SegmentedButton-DfxDwv4I.js";import"./index-DNR34NeK.js";import"./Select-CYW5D9dk.js";import"./InvisibleMessage-M1dcHXit.js";import"./slim-arrow-down-BpHB4IY-.js";import"./index-C7nbRL6c.js";import"./index-DPUGy-pI.js";import"./index-3FRmO7q0.js";import"./index-DAcFrEXC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-0df1VpJF.js";import"./group-2-CKdKXQLe.js";import"./sort-descending-BbZ-eh8i.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3OH53ZN.js";import"./utils-D3SQYmnk.js";import"./index-Yr1YxSHs.js";import"./index-B8bHJfxT.js";import"./index-BrVac6Qe.js";import"./navigation-down-arrow-DtKKxhJy.js";import"./navigation-right-arrow-CFkOAqoT.js";import"./navigation-right-arrow-DjfApRUX.js";import"./useCurrentTheme-Drz3YU3H.js";import"./index-ClmEnud9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wTt9rp2-.js";import"./paper-plane-CjzWL9e1.js";import"./index-C6sQNauJ.js";import"./less-CDzfA6tR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

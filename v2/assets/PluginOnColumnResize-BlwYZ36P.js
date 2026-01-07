import{j as o}from"./iframe-DZzGW3BN.js";import{useMDXComponents as n}from"./index-4a2WG_Ci.js";import{I as r,F as m}from"./CommandsAndQueries-agOrjqHb.js";import{M as p,C as s}from"./blocks-CBLhE6Mj.js";import"./Tag-DsKJkF-r.js";import"./index-CwFc8wWn.js";import"./copy-Dn2hDQ0W.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-QCfpKmZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRP5oWUe.js";import"./index-kAqP9TvQ.js";import"./index-Dq5fA6-V.js";import"./Link-S_PR-7tK.js";import"./index-KWsyOko9.js";import"./index-Cwa4PueL.js";import"./index-DDMDh9Sd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsBnjZtI.js";import"./addCustomCSSWithScoping-63LVGehW.js";import"./index-d1jeh3JQ.js";import"./information-BknITroB.js";import"./sys-enter-2-KPnKgmjd.js";import"./alert-mneIjgbe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BniSdvIz.js";import"./delete-DuV86wpx.js";import"./settings-8s6k8EjZ.js";import"./NoData-CShc9ggy.js";import"./IllustratedMessage-CD31dXEh.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-Dy7bfHGF.js";import"./index-JZqV8G1u.js";import"./index-BwppftZR.js";import"./slim-arrow-down-D8mH76_5.js";import"./Input-6XkWZ1o_.js";import"./ResponsivePopoverCommon.css-BNCzU2w3.js";import"./ValueStateMessage.css-Uirvf2-h.js";import"./Suggestions.css-Bxrtjpe4.js";import"./ListBoxItemGroupTemplate-EqN2wsVW.js";import"./ComboBoxItemGroup-DLN7zx_c.js";import"./ListItemBaseTemplate-B5pUU0jJ.js";import"./Token-Bd6GT3me.js";import"./ScrollEnablement-Dlejz-Cm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSpNUPFr.js";import"./ToggleButton-D7gJFlAG.js";import"./SuggestionItem-Dj5VdsGP.js";import"./index-Djf9F3Nl.js";import"./Option-qqPbvFNI.js";import"./index-CAPm8wXz.js";import"./SegmentedButton-IKOAniKG.js";import"./index-hcUm0XD3.js";import"./Select-TodLTqUS.js";import"./InvisibleMessage-CpiIl6ef.js";import"./slim-arrow-down-DwujDOXN.js";import"./index-BlCx-VbN.js";import"./index-Bwfdl3tG.js";import"./index-7ORqBvwq.js";import"./index-5lzKqf_E.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtZcXXHD.js";import"./group-2-DTjJUMyx.js";import"./sort-descending-BBFN1NhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dz95Acax.js";import"./utils-Dnf_XIlj.js";import"./index-ujWlR76e.js";import"./index-DzxIJEJi.js";import"./index-DEgJlCnW.js";import"./navigation-down-arrow-Ck09O8Ee.js";import"./navigation-right-arrow-DVL0ymcw.js";import"./navigation-right-arrow-ClbiDJLo.js";import"./useCurrentTheme-CWgqZovn.js";import"./index-yeM0YfxH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgKuSHBl.js";import"./paper-plane-D5SdZPIp.js";import"./index-C79XlDu9.js";import"./less-CgHtMiYC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

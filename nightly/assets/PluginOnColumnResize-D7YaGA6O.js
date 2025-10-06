import{j as o}from"./iframe-BB4qEXD6.js";import{useMDXComponents as n}from"./index-Du8_Rn8P.js";import{I as r,F as m}from"./CommandsAndQueries-DRsaMJRB.js";import{M as p,C as s}from"./blocks-CR8KOJrJ.js";import"./Tag-Da7QnCDv.js";import"./index-DdTPxxL_.js";import"./copy-BVMnHcDg.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BeJL7Ye6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";import"./index-Dpli1QB-.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-erJBQNRZ.js";import"./delete-D5Bux8E7.js";import"./settings-BB1PJ6vP.js";import"./NoData-BAy4r6V2.js";import"./IllustratedMessage-Cp617NHY.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPmeBzvN.js";import"./index-CA-cd2np.js";import"./index-AswMmsDf.js";import"./slim-arrow-down-BddUJ-KN.js";import"./Input-DkXdapB6.js";import"./ResponsivePopoverCommon.css-Dw9E0nMz.js";import"./ValueStateMessage.css-BkhABoMh.js";import"./Suggestions.css-BC1EOLh5.js";import"./ListBoxItemGroupTemplate-HpSvs65o.js";import"./ComboBoxItemGroup-CCrdSIbE.js";import"./ListItemBaseTemplate-CAROCz5m.js";import"./Token-DoaTlhno.js";import"./ScrollEnablement-BU_OfE9O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CI0I5uqQ.js";import"./ToggleButton-BdNP-MBf.js";import"./SuggestionItem-DeZkVwUY.js";import"./index-CmahwXl7.js";import"./Option-BGTVK_my.js";import"./index-9-V0BX8k.js";import"./SegmentedButton-BuoqzDHW.js";import"./index-_XZyBcjC.js";import"./Select-LlNkV-fW.js";import"./InvisibleMessage-DyYsNy9h.js";import"./slim-arrow-down-BARLwaMW.js";import"./index-BK2SG_SP.js";import"./index-9GnEvteS.js";import"./index-OBDc_NcL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DsHNEEGx.js";import"./group-2-CrLwAnmS.js";import"./sort-descending-0WZUg8PX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1qNsr_an.js";import"./utils-BdVBr4pQ.js";import"./index-DIzDIuZy.js";import"./index-BRJ-40Zh.js";import"./index-DB-fTerp.js";import"./navigation-down-arrow-VkG8_yjV.js";import"./navigation-right-arrow-HRIp1p54.js";import"./navigation-right-arrow-T0LxulNL.js";import"./useCurrentTheme-D6vYZD-2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C2hZK3d5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cj10AoIb.js";import"./paper-plane-BYFBOW_O.js";import"./index-DMqgnaw_.js";import"./less-B1wulFXz.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

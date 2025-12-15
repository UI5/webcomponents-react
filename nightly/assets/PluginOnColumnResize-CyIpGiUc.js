import{j as o}from"./iframe-DBAXgyPJ.js";import{useMDXComponents as n}from"./index-DeQCSiR4.js";import{I as r,F as m}from"./CommandsAndQueries-Cf1MLqXD.js";import{M as p,C as s}from"./blocks-DNEJwZiK.js";import"./Tag-BnY7EcLs.js";import"./index-BcpDNXQJ.js";import"./copy-Be-lNgbc.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bt31hbU3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iFpZKkV_.js";import"./index-DBjIxNL0.js";import"./index-DtoZ2Fe-.js";import"./Link-CKvSDmqR.js";import"./index-Duoz4br-.js";import"./index-DQ_Wvw6H.js";import"./index-BPy_kvjb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlXvTyjP.js";import"./addCustomCSSWithScoping-BR1T3wHP.js";import"./index-CYYeCl2u.js";import"./information-DLrkR3Ug.js";import"./sys-enter-2-6buniplq.js";import"./alert-C9HPjUKN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChrpHlfC.js";import"./delete-BSkNZk9a.js";import"./settings-BZAstzzV.js";import"./NoData-B7Xju4kG.js";import"./IllustratedMessage-DukG7yhw.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BbeE78Q0.js";import"./index-x_xy1BHi.js";import"./index-H8rccFLG.js";import"./slim-arrow-down-BHYnj_Rv.js";import"./Input-DoLfEvYS.js";import"./ResponsivePopoverCommon.css-Dicr_wKa.js";import"./ValueStateMessage.css-xifZGn5p.js";import"./Suggestions.css-jnqUGd09.js";import"./ListBoxItemGroupTemplate-Br9ejLAN.js";import"./ComboBoxItemGroup-CUEsofUs.js";import"./ListItemBaseTemplate-DOEQQMA6.js";import"./Token-D5BZ8KYH.js";import"./ScrollEnablement-CAGdg6Bw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZE_TKuw.js";import"./ToggleButton-gKHZK2VB.js";import"./SuggestionItem-DbqPCxiF.js";import"./index-NVwWghin.js";import"./Option-CxVq6N4O.js";import"./index-BYQIMVDt.js";import"./SegmentedButton-BKvVXXll.js";import"./index-C-F46hMK.js";import"./Select-BT7URQFg.js";import"./InvisibleMessage-K9tj7mDD.js";import"./slim-arrow-down-D1JBPt11.js";import"./index-z2bdi1aG.js";import"./index-BrTp8toc.js";import"./index-D5hGOmgy.js";import"./index-DXiNIq2l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVRvHvKO.js";import"./group-2-CUJNm4aZ.js";import"./sort-descending-pwGpDMpi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQLAXfyy.js";import"./utils-CrwBT7wM.js";import"./index-CksZPEzU.js";import"./index-DWNu3BWC.js";import"./index-DVt-pam0.js";import"./navigation-down-arrow-DfpRpy8j.js";import"./navigation-right-arrow-B83gJnhp.js";import"./navigation-right-arrow-BXtSSW1B.js";import"./useCurrentTheme-B1tmSyF5.js";import"./index-CwLMJfdZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-eqRVZ4IM.js";import"./paper-plane-CA-wmpkx.js";import"./index-vSaJtfoQ.js";import"./less-BVu6NBS-.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

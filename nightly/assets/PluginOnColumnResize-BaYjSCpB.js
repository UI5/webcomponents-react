import{j as o}from"./iframe-DpsLP052.js";import{useMDXComponents as r}from"./index-_rtImS1W.js";import{I as n,F as m}from"./CommandsAndQueries-B3V0wcrs.js";import{M as p,C as s}from"./blocks-PRfqR2eX.js";import"./Tag-C7F6-79_.js";import"./index-BFgF6Hw1.js";import"./copy-LcJtQKoV.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BiiTXgeW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfDXcGgq.js";import"./index-82Uo0cXy.js";import"./index-Cb94JCFH.js";import"./Link-lhnFzeWI.js";import"./addCustomCSSWithScoping-3Nlci0j7.js";import"./index-DCyO76rI.js";import"./index-BfX04KMA.js";import"./index-DZ1ovLuc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D03GatZl.js";import"./index-BB8Wt2y3.js";import"./information-NX8J3kcU.js";import"./sys-enter-2-DlH7FC2F.js";import"./alert-BDCJXtoD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CGzrYtwa.js";import"./delete-Dbf_1wPE.js";import"./settings-zqDLAE3N.js";import"./NoData-DUuxZZ1C.js";import"./IllustratedMessage-kZjgaFOd.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dwkdf2hQ.js";import"./index-Bqb9AwRH.js";import"./slim-arrow-down-DDNi_5CI.js";import"./Input-CWGfSp5U.js";import"./ResponsivePopoverCommon.css-CLt9oG7E.js";import"./ValueStateMessage.css-D6BpVT04.js";import"./Suggestions.css-Bv-BnXKd.js";import"./ListBoxItemGroupTemplate-Bqw0C63O.js";import"./ComboBoxItemGroup-BMVuDglg.js";import"./ListItemBaseTemplate-D8JPghtX.js";import"./Token-CmgxmMQz.js";import"./ScrollEnablement-CM-OLTq5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Br3a0ITv.js";import"./ToggleButton-CrSFgh3U.js";import"./SuggestionItem-Xl-bnkLq.js";import"./index-Bc8BPd5w.js";import"./Option-mD3vqu1C.js";import"./index-C4sMv6EO.js";import"./SegmentedButton-dDZ3CxOs.js";import"./index-C5KfMTBY.js";import"./Select-YEgqnweu.js";import"./InvisibleMessage-5ZJM9qmO.js";import"./slim-arrow-down-DWqLlwo-.js";import"./useIsRTL-B3wzcp6-.js";import"./index-DFVo37t3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bo3WWELa.js";import"./group-2-DbErn0S1.js";import"./sort-descending-BGRIvHpc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-yG3MGDtB.js";import"./utils-CGzSA5lO.js";import"./index-YJAd7IRL.js";import"./index-mOgpIW1K.js";import"./index-C0b-uTCQ.js";import"./navigation-down-arrow-DD5HAM7_.js";import"./navigation-right-arrow-CqGCK0sE.js";import"./navigation-right-arrow-DgJX-CjS.js";import"./useCurrentTheme-C3CBqbfX.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y2AHD0GI.js";import"./debounce-D7W5PopO.js";import"./paper-plane-TCDO9g4Q.js";import"./index-CL9k8PLN.js";import"./less-DssSCfkW.js";import"./index-9Trclp5j.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};

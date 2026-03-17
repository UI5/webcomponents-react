import{j as o}from"./iframe-BQ3gAAxx.js";import{useMDXComponents as r}from"./index-B1lAiT1q.js";import{I as n}from"./CommandsAndQueries-wegYoAqu.js";import{M as m,C as p}from"./blocks-n6pvGDI_.js";import"./Tag-eC6SmQhc.js";import"./index-DjTon6of.js";import"./copy-Da1BKYtz.js";import{F as s}from"./Footer-wX_u0Ai_.js";import"./PageNotFound-CYbLq2oD.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DHA_F5qe.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cgpq4OBn.js";import"./index-C1GISjTX.js";import"./index-C1cP6C82.js";import"./index-C8VczBe0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1UPUp-J.js";import"./addCustomCSSWithScoping-KaZd0g7m.js";import"./index-BlPBwMrJ.js";import"./index-CLyjGvZV.js";import"./index-C6vnN5EE.js";import"./information-D7DVbQHJ.js";import"./sys-enter-2-QGEZX0U8.js";import"./alert-BvhbOdWs.js";import"./index-D6YjU4up.js";import"./Illustrations-YW4WoylE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cgr_V9pk.js";import"./delete-B6_hTJQ_.js";import"./settings-DUK8lwbJ.js";import"./NoData-5eoSlwNL.js";import"./NoFilterResults-BOIQ7ol6.js";import"./index-Bbm6z3p5.js";import"./IllustratedMessage-BpFzdB-6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Bid_y9yL.js";import"./Input-DB2wpgtE.js";import"./ResponsivePopoverCommon.css-CC0bbdzt.js";import"./ValueStateMessage.css-BlOapXyA.js";import"./Suggestions.css-CcnsH7PN.js";import"./ListBoxItemGroupTemplate-Dbwacnf1.js";import"./ComboBoxItemGroup-oYKwIYDA.js";import"./ListItemBaseTemplate-DzmYLBj9.js";import"./Token-DvLrgzld.js";import"./ScrollEnablement-D9U2LTzA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BG1UM3jC.js";import"./ToggleButton-DhG8SGBd.js";import"./multiselect-all-DFUBVHZi.js";import"./SuggestionItem-Z2Xj9ATz.js";import"./index-DFONeG0H.js";import"./Option-VW9rfUnY.js";import"./index-D3Bn2LhY.js";import"./SegmentedButton-DPFBAqHi.js";import"./index-DAFt_faK.js";import"./Select-D89U3SMw.js";import"./InvisibleMessage-BdaiEMNx.js";import"./index-C544zsH2.js";import"./index-D-vaAKbP.js";import"./index-CTvmPiFM.js";import"./index-B-bCcjPK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNAnaid6.js";import"./group-2-DCUAvkdv.js";import"./sort-descending-BF0c-J1b.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BIfxZyVU.js";import"./utils-BFO_diIG.js";import"./index-C8MdlFSW.js";import"./index-CeSkdH1r.js";import"./index-DFzmTknk.js";import"./navigation-down-arrow-d6rfL2OJ.js";import"./navigation-right-arrow-KxkafEWL.js";import"./navigation-right-arrow-CvUTBkz2.js";import"./useCurrentTheme-DgCT3HCc.js";import"./index-BVQJgoCn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PuQ608.js";import"./paper-plane-B51hNZbE.js";import"./index-l5pE6pVW.js";import"./less-Ru56gMhO.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

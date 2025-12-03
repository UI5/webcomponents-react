import{j as o}from"./iframe-B13aKv6v.js";import{useMDXComponents as n}from"./index-jGGDFlkx.js";import{I as r,F as m}from"./CommandsAndQueries-7UV00q7g.js";import{M as p,C as s}from"./blocks-BRIltIP5.js";import"./Tag-HMLNjm9Q.js";import"./index-CFkX7Uxi.js";import"./copy-Cbp2BA1I.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BMW7dyKi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";import"./index-DGzKTrI0.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZNLsVKx.js";import"./delete-BHqzy_w0.js";import"./settings-CHJyL-xf.js";import"./NoData-IlCQ-its.js";import"./IllustratedMessage-BVpBKwe1.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CX2RoIEA.js";import"./index-DYwiPVnV.js";import"./index-CzwxPS8i.js";import"./slim-arrow-down-BtHqfP2O.js";import"./Input-CRbjoL5G.js";import"./ResponsivePopoverCommon.css-zkAUwXvS.js";import"./ValueStateMessage.css-Drc3FRo7.js";import"./Suggestions.css-CxcKjt1z.js";import"./ListBoxItemGroupTemplate-C7qo7cVu.js";import"./ComboBoxItemGroup-wPGN9pc9.js";import"./ListItemBaseTemplate-DAulwDxe.js";import"./Token-VYXiQC7f.js";import"./ScrollEnablement-DWkIXjW5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MiMIRncl.js";import"./ToggleButton-ByHPBy6Y.js";import"./SuggestionItem-DBARgP8a.js";import"./index-BG64s_Aw.js";import"./Option-DvXJOHoA.js";import"./index-BvOkKYA8.js";import"./SegmentedButton-B_JX6wlg.js";import"./index-YDZaFH6K.js";import"./Select-BfjuawPf.js";import"./InvisibleMessage-B3ODCafQ.js";import"./slim-arrow-down-DjsY58di.js";import"./index-BXBvjTjI.js";import"./index-CLQEDEjK.js";import"./index-CK1a2hlY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVuuEgts.js";import"./group-2-BTIEqwdc.js";import"./sort-descending-DEByg_97.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAmsrgmU.js";import"./utils-Cu2DEZ78.js";import"./index-Bew75aHK.js";import"./index-iJRk9uUm.js";import"./index-DMj2SajO.js";import"./navigation-down-arrow-BAHL6PFO.js";import"./navigation-right-arrow-SgMVDM2O.js";import"./navigation-right-arrow-DCZNJw3z.js";import"./useCurrentTheme-C5zW9fR4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IEloByEh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-SKaXeoMK.js";import"./paper-plane-DKip-gaP.js";import"./index-Efu98x9d.js";import"./less-BeRlgDKr.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

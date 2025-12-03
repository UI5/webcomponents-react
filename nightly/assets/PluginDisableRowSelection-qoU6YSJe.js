import{j as e}from"./iframe-B13aKv6v.js";import{useMDXComponents as n}from"./index-jGGDFlkx.js";import{I as r,F as s}from"./CommandsAndQueries-7UV00q7g.js";import{M as l,C as a}from"./blocks-BRIltIP5.js";import"./Tag-HMLNjm9Q.js";import"./index-CFkX7Uxi.js";import"./copy-Cbp2BA1I.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BMW7dyKi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";import"./index-DGzKTrI0.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZNLsVKx.js";import"./delete-BHqzy_w0.js";import"./settings-CHJyL-xf.js";import"./NoData-IlCQ-its.js";import"./IllustratedMessage-BVpBKwe1.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CX2RoIEA.js";import"./index-DYwiPVnV.js";import"./index-CzwxPS8i.js";import"./slim-arrow-down-BtHqfP2O.js";import"./Input-CRbjoL5G.js";import"./ResponsivePopoverCommon.css-zkAUwXvS.js";import"./ValueStateMessage.css-Drc3FRo7.js";import"./Suggestions.css-CxcKjt1z.js";import"./ListBoxItemGroupTemplate-C7qo7cVu.js";import"./ComboBoxItemGroup-wPGN9pc9.js";import"./ListItemBaseTemplate-DAulwDxe.js";import"./Token-VYXiQC7f.js";import"./ScrollEnablement-DWkIXjW5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MiMIRncl.js";import"./ToggleButton-ByHPBy6Y.js";import"./SuggestionItem-DBARgP8a.js";import"./index-BG64s_Aw.js";import"./Option-DvXJOHoA.js";import"./index-BvOkKYA8.js";import"./SegmentedButton-B_JX6wlg.js";import"./index-YDZaFH6K.js";import"./Select-BfjuawPf.js";import"./InvisibleMessage-B3ODCafQ.js";import"./slim-arrow-down-DjsY58di.js";import"./index-BXBvjTjI.js";import"./index-CLQEDEjK.js";import"./index-CK1a2hlY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVuuEgts.js";import"./group-2-BTIEqwdc.js";import"./sort-descending-DEByg_97.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAmsrgmU.js";import"./utils-Cu2DEZ78.js";import"./index-Bew75aHK.js";import"./index-iJRk9uUm.js";import"./index-DMj2SajO.js";import"./navigation-down-arrow-BAHL6PFO.js";import"./navigation-right-arrow-SgMVDM2O.js";import"./navigation-right-arrow-DCZNJw3z.js";import"./useCurrentTheme-C5zW9fR4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IEloByEh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-SKaXeoMK.js";import"./paper-plane-DKip-gaP.js";import"./index-Efu98x9d.js";import"./less-BeRlgDKr.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};

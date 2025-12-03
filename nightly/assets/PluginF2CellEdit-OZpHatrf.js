import{j as e}from"./iframe-B13aKv6v.js";import{useMDXComponents as o}from"./index-jGGDFlkx.js";import{I as l,F as r}from"./CommandsAndQueries-7UV00q7g.js";import{M as a,C as c}from"./blocks-BRIltIP5.js";import"./Tag-HMLNjm9Q.js";import"./index-CFkX7Uxi.js";import"./copy-Cbp2BA1I.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BMW7dyKi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";import"./index-DGzKTrI0.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZNLsVKx.js";import"./delete-BHqzy_w0.js";import"./settings-CHJyL-xf.js";import"./NoData-IlCQ-its.js";import"./IllustratedMessage-BVpBKwe1.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CX2RoIEA.js";import"./index-DYwiPVnV.js";import"./index-CzwxPS8i.js";import"./slim-arrow-down-BtHqfP2O.js";import"./Input-CRbjoL5G.js";import"./ResponsivePopoverCommon.css-zkAUwXvS.js";import"./ValueStateMessage.css-Drc3FRo7.js";import"./Suggestions.css-CxcKjt1z.js";import"./ListBoxItemGroupTemplate-C7qo7cVu.js";import"./ComboBoxItemGroup-wPGN9pc9.js";import"./ListItemBaseTemplate-DAulwDxe.js";import"./Token-VYXiQC7f.js";import"./ScrollEnablement-DWkIXjW5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MiMIRncl.js";import"./ToggleButton-ByHPBy6Y.js";import"./SuggestionItem-DBARgP8a.js";import"./index-BG64s_Aw.js";import"./Option-DvXJOHoA.js";import"./index-BvOkKYA8.js";import"./SegmentedButton-B_JX6wlg.js";import"./index-YDZaFH6K.js";import"./Select-BfjuawPf.js";import"./InvisibleMessage-B3ODCafQ.js";import"./slim-arrow-down-DjsY58di.js";import"./index-BXBvjTjI.js";import"./index-CLQEDEjK.js";import"./index-CK1a2hlY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVuuEgts.js";import"./group-2-BTIEqwdc.js";import"./sort-descending-DEByg_97.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAmsrgmU.js";import"./utils-Cu2DEZ78.js";import"./index-Bew75aHK.js";import"./index-iJRk9uUm.js";import"./index-DMj2SajO.js";import"./navigation-down-arrow-BAHL6PFO.js";import"./navigation-right-arrow-SgMVDM2O.js";import"./navigation-right-arrow-DCZNJw3z.js";import"./useCurrentTheme-C5zW9fR4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IEloByEh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-SKaXeoMK.js";import"./paper-plane-DKip-gaP.js";import"./index-Efu98x9d.js";import"./less-BeRlgDKr.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(l,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Since: v2.14.0"})}),`
`,e.jsx(n.p,{children:"A plugin hook that enables F2-based cell editing for interactive elements inside a cell."}),`
`,e.jsxs(n.p,{children:["To ",e.jsx(n.strong,{children:"ensure the hook works correctly"}),", make sure that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each column containing interactive elements has the ",e.jsx(n.code,{children:"interactiveElementName"})," property set. ",e.jsx(n.strong,{children:"Note:"})," This property is also used to describe the cell's content for screen readers."]}),`
`,e.jsxs(n.li,{children:["The callback Ref returned by ",e.jsx(n.code,{children:"useF2CellEdit.useCallbackRef"})," is attached to every interactive element within the cell."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hook manages focus, keyboard navigation, and ",e.jsx(n.code,{children:"tabindex"})," for cells with interactive content:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"F2"})," moves focus between the cell container and its first interactive element."]}),`
`,e.jsxs(n.li,{children:["Updates the cell's ",e.jsx(n.code,{children:"aria-label"})," with the interactive element's name for accessibility."]}),`
`,e.jsx(n.li,{children:"Prevents standard navigation keys from interfering when editing a cell."}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:s,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type {
  AnalyticalTableCellInstance,
  AnalyticalTableColumnDefinition,
  InputDomRef,
  AnalyticalTablePropTypes,
} from '@ui5/webcomponents-react';
import { AnalyticalTableHooks, AnalyticalTable, Button, CheckBox, Input, Switch, Tag } from '@ui5/webcomponents-react';
import paperPlaneIcon from '@ui5/webcomponents-icons/dist/paper-plane';

const { useF2CellEdit } = AnalyticalTableHooks;

const columns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
  },
  {
    Header: 'Input & Button',
    id: 'input_btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return (
        <>
          <Input ref={callbackRef} />
          <Button ref={callbackRef} icon={paperPlaneIcon} tooltip="Submit" accessibleName="Submit" />
        </>
      );
    },
    interactiveElementName: 'Input and Button',
  },
  {
    Header: 'Text',
    accessor: 'name',
  },
  {
    Header: 'Button',
    id: 'btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return <Button ref={callbackRef}>Button</Button>;
    },
    interactiveElementName: () => 'Button',
  },
  {
    Header: 'Non-interactive custom content',
    accessor: 'friend.name',
    Cell: (props: AnalyticalTableCellInstance) => {
      return <Tag>{props.value}</Tag>;
    },
  },
  {
    Header: 'Switch or CheckBox',
    id: 'switch_checkbox',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      if (props.row.index % 2) {
        return <CheckBox ref={callbackRef} accessibleName="Dummy CheckBox" />;
      }
      return <Switch ref={callbackRef} accessibleName="Dummy Switch" />;
    },
    interactiveElementName: (props: AnalyticalTableCellInstance) => {
      if (props.row.index % 2) {
        return 'CheckBox';
      }
      return 'Switch';
    },
  },
];

const tableHooks: AnalyticalTablePropTypes['tableHooks'] = [useF2CellEdit];

function TableWithInputs({ data }) {
  return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} visibleRows={5} />;
}
`})}),`
`,e.jsx(r,{})]})}function Me(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Me as default};

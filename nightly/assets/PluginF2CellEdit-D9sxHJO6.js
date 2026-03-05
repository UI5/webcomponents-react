import{j as e}from"./iframe-rmPOfAEk.js";import{useMDXComponents as o}from"./index-OsAdl3Cq.js";import{I as r}from"./CommandsAndQueries-DjjDgYFy.js";import{M as l,C as a}from"./blocks-v63_T-Iu.js";import"./Tag-OMAKRCyN.js";import"./index-D5lEazYO.js";import"./copy-DYpkXBzp.js";import{F as c}from"./Footer-CYSIA4uy.js";import"./PageNotFound-DRbJUQ3U.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CV_0_ohV.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CL9BwqUh.js";import"./index-g6c80OWk.js";import"./index-DUTk5K7T.js";import"./index-DTuZFVSS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJhSo9M3.js";import"./addCustomCSSWithScoping-CZ8_VPk_.js";import"./index-B-iV9gR7.js";import"./index-CE8iCloJ.js";import"./index-NT5PBuFY.js";import"./information-Cw3g4evs.js";import"./sys-enter-2-DOLwXwFm.js";import"./alert-Bcs9t0my.js";import"./index-Xi7qAWgh.js";import"./Illustrations-DRh478fB.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D8uG6UN_.js";import"./delete-7T4T292I.js";import"./settings-66ZgnR0a.js";import"./NoData-DQcDBndZ.js";import"./NoFilterResults-CC9q__py.js";import"./index-Yh-O7GlE.js";import"./IllustratedMessage-CCm8S1Gx.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-D2uxoQam.js";import"./slim-arrow-down-Bl1bEFWF.js";import"./Input-glL1F1kj.js";import"./ResponsivePopoverCommon.css-GT00HLHH.js";import"./ValueStateMessage.css-RtBMBlvI.js";import"./Suggestions.css-CgnqqM6E.js";import"./ListBoxItemGroupTemplate-WYDqvByC.js";import"./ComboBoxItemGroup-BSWGugft.js";import"./ListItemBaseTemplate-p1mZhZvu.js";import"./Token-DWH544iL.js";import"./ScrollEnablement-B-kTKigp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CRLY1leJ.js";import"./ToggleButton-BEcKdnv0.js";import"./SuggestionItem-CQNiXwiQ.js";import"./index-B3jy6IAX.js";import"./Option-Bad0_Io9.js";import"./index-DxhHy3Gd.js";import"./SegmentedButton-DUqSOsPX.js";import"./index-AMKqxIVn.js";import"./Select-DdViIcLL.js";import"./InvisibleMessage-ETmXadbm.js";import"./slim-arrow-down-oHn4D4RL.js";import"./index-BYovFlgd.js";import"./index-bMWebckg.js";import"./index-CQHyU4zR.js";import"./index-CudHcNn6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BbLmvUxf.js";import"./group-2-CyBkSFkc.js";import"./sort-descending-INYw-64n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8BPSLJ0.js";import"./utils-fGvGoAbl.js";import"./index-xuLONss2.js";import"./index-BTYtJa8z.js";import"./index-Ciy6r5Cs.js";import"./navigation-down-arrow-Bdse7Bz_.js";import"./navigation-right-arrow-BJGNqj7n.js";import"./navigation-right-arrow-CccUgewr.js";import"./useCurrentTheme-DNPFYXmT.js";import"./index-CbGpOrAc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C7JC_Aca.js";import"./paper-plane-eTKmtRbK.js";import"./index-CttNC8Pp.js";import"./less-CW7kPXDQ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};

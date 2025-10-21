import{j as e}from"./iframe-RbfDHgLf.js";import{useMDXComponents as o}from"./index-DqV7dpjg.js";import{I as l,F as r}from"./CommandsAndQueries-zsQY2vaX.js";import{M as a,C as c}from"./blocks-B3C8l8xN.js";import"./Tag-HesnxFVA.js";import"./index-COZ8g4Eg.js";import"./copy-DMiueq1X.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-dNx3iOmq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHnVbXcX.js";import"./index-BJgLq48U.js";import"./index-CDE_0yIR.js";import"./Link-CqIOijGY.js";import"./index-T-3zE_IB.js";import"./index-CfYa6cQq.js";import"./index-CCjAf9sJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGqdfIsV.js";import"./addCustomCSSWithScoping-BLrotaH2.js";import"./index-Krk892ln.js";import"./information-DD6Au7ei.js";import"./sys-enter-2-CTkUcSDp.js";import"./alert-CtWiOE8L.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeOX064v.js";import"./delete-DcwaPxBU.js";import"./settings-D6tudNLA.js";import"./NoData-Cl4Qbgty.js";import"./IllustratedMessage-DexV73H4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-C3FPWFSN.js";import"./index-Cof-wcXi.js";import"./index-DTmXjenP.js";import"./slim-arrow-down-C6-37eiK.js";import"./Input-C6IaGQuM.js";import"./ResponsivePopoverCommon.css-BazxGA3A.js";import"./ValueStateMessage.css-DlSYdh2h.js";import"./Suggestions.css-BiueOOBD.js";import"./ListBoxItemGroupTemplate-CTGhd4B4.js";import"./ComboBoxItemGroup-nRyFLP8z.js";import"./ListItemBaseTemplate-C5ft9Md7.js";import"./Token-CnNyhnHs.js";import"./ScrollEnablement-BhIRzZQ-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LHwr1u0j.js";import"./ToggleButton-Ck80PIY6.js";import"./SuggestionItem-ydkFeLIs.js";import"./index-C97MBkt1.js";import"./Option-Br7hY4me.js";import"./index-H6IWsr_r.js";import"./SegmentedButton-CZ-yOp_Q.js";import"./index-CWlsW_rN.js";import"./Select-Bvdl5zc6.js";import"./InvisibleMessage-DajdZnZt.js";import"./slim-arrow-down-DNyYURKC.js";import"./index-BHXvhFiH.js";import"./index-DzCgTQEv.js";import"./index-Bf3cZXmJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C8wkfIGx.js";import"./group-2-DF-sgjHz.js";import"./sort-descending-CZjeMqQF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zFlUhoit.js";import"./utils-IhqywFcl.js";import"./index-CtCdIWLz.js";import"./index-C5SUxDyi.js";import"./index-nwkxsEd-.js";import"./navigation-down-arrow-BLAyWJF_.js";import"./navigation-right-arrow-DkJ4m7Up.js";import"./navigation-right-arrow-DkhAVYbD.js";import"./useCurrentTheme-Cl67aZzc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qW62GUHL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkQwBtqx.js";import"./paper-plane-B3UbNLhn.js";import"./index-B5lPdsla.js";import"./less-lHgyge0z.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

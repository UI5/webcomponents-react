import{j as e}from"./iframe-ByiiILXu.js";import{useMDXComponents as o}from"./index-DYpmG0kU.js";import{I as l,F as r}from"./CommandsAndQueries-ByQHAThU.js";import{M as a,C as c}from"./blocks-DrNhXH8Y.js";import"./Tag-WBOqYu0X.js";import"./index-B20WCXLG.js";import"./copy-08ilKZ0c.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bb5ta9Ng.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8yUpcOxv.js";import"./index-y2DJOFuG.js";import"./index-C2Yky6-6.js";import"./Link-DX54TCdQ.js";import"./index-C0jaTjnN.js";import"./index-BkgEbRU4.js";import"./index-DJ81LlKI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7LYDV0x0.js";import"./addCustomCSSWithScoping-DIYkZsvP.js";import"./index-COPBcnoz.js";import"./information-tN-lRIsU.js";import"./sys-enter-2-eFq8QnH9.js";import"./alert-DCLbzn71.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKK8YXuW.js";import"./delete-D4zm_h0p.js";import"./settings-MyF3qJVm.js";import"./NoData-ljFJXsUq.js";import"./IllustratedMessage-CqwMvOWG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BKp3AX8w.js";import"./index-D9LX0obP.js";import"./index-0fiPvY1b.js";import"./slim-arrow-down-Cz12efI2.js";import"./Input-n_T7UVDU.js";import"./ResponsivePopoverCommon.css-C1nFDre3.js";import"./ValueStateMessage.css-DknAZyiZ.js";import"./Suggestions.css-CltqZkwX.js";import"./ListBoxItemGroupTemplate-C7tSoEtb.js";import"./ComboBoxItemGroup-BKPF_atD.js";import"./ListItemBaseTemplate-F0fB9wHg.js";import"./Token-DEhWs7Mh.js";import"./ScrollEnablement--8rTw7W_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cju6LXlU.js";import"./ToggleButton-zDuc9RuQ.js";import"./SuggestionItem-QE9DA7xp.js";import"./index-BDP3hZHD.js";import"./Option-7PVSujFd.js";import"./index-L1FHo7Pk.js";import"./SegmentedButton-vjq3bmSv.js";import"./index-Cy9D_6lg.js";import"./Select-DeEFCAk3.js";import"./InvisibleMessage-1Hg6cN3L.js";import"./slim-arrow-down-Ci1RQCXj.js";import"./index-CKMaXFVW.js";import"./index-MHLsz4iU.js";import"./index-DvDvcTBA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B9g-vpCv.js";import"./group-2-CohTd7MD.js";import"./sort-descending-CEdiQwd1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-COGP4GHg.js";import"./utils-4syTV-OB.js";import"./index-CZYJmP3L.js";import"./index-2lxrn3Jb.js";import"./index-D5AoDYXK.js";import"./navigation-down-arrow-DFV_iHIE.js";import"./navigation-right-arrow-vs1LV1Nl.js";import"./navigation-right-arrow-6AlcfDn3.js";import"./useCurrentTheme-ibuaoMhS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-4MBDlEsO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7T1wmeJR.js";import"./paper-plane-Dpb_fZ67.js";import"./index-Dqpgkjkr.js";import"./less-B2jLQw2j.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

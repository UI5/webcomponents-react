import{j as e}from"./iframe-BxNMYsVp.js";import{useMDXComponents as o}from"./index-CEL_Mrqn.js";import{I as l,F as r}from"./CommandsAndQueries-CKT9ys9T.js";import{M as a,C as c}from"./blocks-CLtQlidJ.js";import"./Tag-CYWTluzA.js";import"./index-22bYdtLv.js";import"./copy-DFdPinc0.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DgsES7Vt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lYnXb9lV.js";import"./index-jhZZ-U6H.js";import"./index-DKLNqf9R.js";import"./Link-DZt8_sp9.js";import"./index-CKGFui_U.js";import"./index-BQbr2ZNY.js";import"./index-7hnHpQRn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CG_dGq_W.js";import"./addCustomCSSWithScoping-CJX4iiEH.js";import"./index-CVOVci2N.js";import"./information-BR3I6cVC.js";import"./sys-enter-2-CKo5vDlS.js";import"./alert-BEt7QhXe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Mk_FwvON.js";import"./delete-BG6noefH.js";import"./settings-B8uhe1cq.js";import"./NoData-DyBdjVCa.js";import"./IllustratedMessage-BCVYMt7I.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CmHtBxQ-.js";import"./index-BXTa98ES.js";import"./index-C3SOSiwl.js";import"./slim-arrow-down-fmy_UgsE.js";import"./Input-D2CSF-Y6.js";import"./ResponsivePopoverCommon.css-C7cuV_Jj.js";import"./ValueStateMessage.css-BFQUPHA9.js";import"./Suggestions.css-BBJox0-v.js";import"./ListBoxItemGroupTemplate-ljBV9_8W.js";import"./ComboBoxItemGroup-B4zUN52_.js";import"./ListItemBaseTemplate-MCAv2HBJ.js";import"./Token-hZnudgFO.js";import"./ScrollEnablement-B37cnfhn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8uRqoZkS.js";import"./ToggleButton-BEj9YhjN.js";import"./SuggestionItem-DhpzZzQQ.js";import"./index-BsfCkzxM.js";import"./Option-B_e0EohB.js";import"./index-DsxxZJWV.js";import"./SegmentedButton-BJNUnkCe.js";import"./index-BLL6NYB0.js";import"./Select-DxwToxka.js";import"./InvisibleMessage-DndzKolo.js";import"./slim-arrow-down-BiHEY_tE.js";import"./index-D5uxsXuK.js";import"./index-BHQlFxm4.js";import"./index-C7Pim6U6.js";import"./index-BjHRCZNh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-zNJNVF.js";import"./group-2-Czd2Kvpz.js";import"./sort-descending-B4uKFBaf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-oNcz4-fo.js";import"./utils-D-9tMIQC.js";import"./index-BZ4YpJ1F.js";import"./index-Dng98DSh.js";import"./index-BIHQwIAz.js";import"./navigation-down-arrow-C20RWoi5.js";import"./navigation-right-arrow-6hXpmCnZ.js";import"./navigation-right-arrow-Bwqs0FG1.js";import"./useCurrentTheme-g-TpF6b6.js";import"./index-B4GSm2eh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BDi3O9wb.js";import"./paper-plane-BF_TfTm4.js";import"./index-aX4YBE-N.js";import"./less--mI6seH2.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

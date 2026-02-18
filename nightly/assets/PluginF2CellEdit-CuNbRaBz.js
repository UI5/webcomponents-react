import{j as e}from"./iframe-C125K5pw.js";import{useMDXComponents as o}from"./index-Bjpa6FGV.js";import{I as l,F as r}from"./CommandsAndQueries-ldqvUWJl.js";import{M as a,C as c}from"./blocks-BXnHeSiR.js";import"./Tag-gRLBJrjs.js";import"./index-Dr1L9sIB.js";import"./copy-CAIaKhcd.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B5V7Jgia.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sMZVCCfo.js";import"./index-HJtrmXU5.js";import"./index-DAOynge-.js";import"./Link-CLfWc0rF.js";import"./index-BIOgtrFW.js";import"./index-CTal1c8_.js";import"./index-BwMWTiPK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKkpAdHR.js";import"./addCustomCSSWithScoping-cidmMbR-.js";import"./index-DSCACoUK.js";import"./information-DY8EV-7L.js";import"./sys-enter-2-DLPshmQC.js";import"./alert-DGx7QxWd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DRi7r004.js";import"./delete-VcR_hMk7.js";import"./settings-CWzRvdF8.js";import"./NoData-KB6el7H0.js";import"./IllustratedMessage-CXh3bWR-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DU_FutSt.js";import"./index-DjvH2VLk.js";import"./index-qC8gqSc4.js";import"./slim-arrow-down-DjzmFdkh.js";import"./Input-DjEzLRgz.js";import"./ResponsivePopoverCommon.css-CBDbaQoK.js";import"./ValueStateMessage.css-HbxeHEGm.js";import"./Suggestions.css-Ip_-2ncf.js";import"./ListBoxItemGroupTemplate-CrA4icN9.js";import"./ComboBoxItemGroup-CqfU9sll.js";import"./ListItemBaseTemplate-DDC3KDiX.js";import"./Token-DqIEO0pH.js";import"./ScrollEnablement-CHcdrCpT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYRsCa9G.js";import"./ToggleButton-Civ_g9Ey.js";import"./SuggestionItem-HWID_xuJ.js";import"./index-mutglJDe.js";import"./Option-C4a1sy2E.js";import"./index-D-2SIQ7j.js";import"./SegmentedButton-CBAEd1y_.js";import"./index-Ddxh1zbZ.js";import"./Select-3j4-u7qz.js";import"./InvisibleMessage-ZuAMUP0A.js";import"./slim-arrow-down-DWd9421G.js";import"./index-DDVJF59Y.js";import"./index-BpfByow1.js";import"./index-DYXHSW4J.js";import"./index-CeMB97VO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BslYw4vv.js";import"./group-2-xdb4cINx.js";import"./sort-descending-CbDESvm8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CymctnkS.js";import"./utils-BP0nLIbG.js";import"./index-UdJktvhD.js";import"./index-DZ6xLZXa.js";import"./index-Bapg1jlH.js";import"./navigation-down-arrow-DdfI5AYL.js";import"./navigation-right-arrow-CIultdti.js";import"./navigation-right-arrow-jfn-V-8v.js";import"./useCurrentTheme-D0ZROOM1.js";import"./index-DJvLtzE7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-071s-nZz.js";import"./paper-plane-CGcqiSQu.js";import"./index-DlizPG_T.js";import"./less-BvWBky-G.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

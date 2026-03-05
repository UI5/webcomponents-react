import{j as e}from"./iframe-D89K97gv.js";import{useMDXComponents as o}from"./index-BJvRQfhi.js";import{I as r}from"./CommandsAndQueries-CkqpoGcY.js";import{M as l,C as a}from"./blocks-Cy4BDnT1.js";import"./Tag-BMl9amXb.js";import"./index-CG_fwaJ_.js";import"./copy-BeHvABnn.js";import{F as c}from"./Footer-a85ddGr6.js";import"./PageNotFound-Btnag6Vx.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-oCCJWMNg.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-vvC1wc11.js";import"./index-BFDU-uR3.js";import"./index-BmDAlwXN.js";import"./index-CSxOLZlI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JuHHWHgI.js";import"./addCustomCSSWithScoping-D0msxKTR.js";import"./index-CHwgMgjy.js";import"./index-CD-X_9j4.js";import"./index-_KpWx7_H.js";import"./information-DxfKMTg6.js";import"./sys-enter-2-aIi16_BZ.js";import"./alert-CzEHD23R.js";import"./index-D9Orgelb.js";import"./Illustrations-llDvpFiy.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BV-MPmfs.js";import"./delete-CDBnRSmI.js";import"./settings-CS9wt6xx.js";import"./NoData-TiUxWOF0.js";import"./NoFilterResults-BG1zY0NJ.js";import"./index-Cl-Gddv-.js";import"./IllustratedMessage-BT6x5IWF.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-XI-ucwDx.js";import"./slim-arrow-down-CkA2t8ep.js";import"./Input-HMow9_Ri.js";import"./ResponsivePopoverCommon.css-B4cnMME8.js";import"./ValueStateMessage.css-DJ_4De0C.js";import"./Suggestions.css-CmSTd68P.js";import"./ListBoxItemGroupTemplate-SgdcVzDK.js";import"./ComboBoxItemGroup-DK3C-asM.js";import"./ListItemBaseTemplate-Cq6ju2pO.js";import"./Token-DfLKw0sY.js";import"./ScrollEnablement-B2bIFiiq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvXtV7K9.js";import"./ToggleButton-CvjwTlcC.js";import"./SuggestionItem-NIPuowA8.js";import"./index-Bfnhilaw.js";import"./Option-DOgA1AL4.js";import"./index-CXFOzfDq.js";import"./SegmentedButton-pvnBLEkh.js";import"./index-CChlhhr6.js";import"./Select-CXntB0Wh.js";import"./InvisibleMessage-D5AKnrSr.js";import"./slim-arrow-down-CnxZFJRE.js";import"./index-C35w3JOz.js";import"./index-BmCXl-iO.js";import"./index-C2HJgTFD.js";import"./index-Cra91enV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dy65h00_.js";import"./group-2-ukQk0aAx.js";import"./sort-descending-CQnKQ-1r.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BDiVcx2S.js";import"./utils-BRQPpEIZ.js";import"./index-CNgiS241.js";import"./index-RAeoqsxb.js";import"./index-CTrVZ_lH.js";import"./navigation-down-arrow-DVUqx3Rx.js";import"./navigation-right-arrow-B79FJGbb.js";import"./navigation-right-arrow-Dd8N9i68.js";import"./useCurrentTheme-BsjFocph.js";import"./index-DHl7KnP_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-cIjYlE45.js";import"./paper-plane-BK5Km9Zj.js";import"./index-JUBIj-Wi.js";import"./less-C7TJwMJK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

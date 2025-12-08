import{j as e}from"./iframe-C_rEo4ZD.js";import{useMDXComponents as o}from"./index-dLMhCWaI.js";import{I as l,F as r}from"./CommandsAndQueries-TFkH8H0n.js";import{M as a,C as c}from"./blocks-DvQXQjkC.js";import"./Tag-ZlMS2_of.js";import"./index-B4E4i8qV.js";import"./copy-BTrKUsxF.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DgSgKQOh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bd-vG2gT.js";import"./index-DJ6GK8yt.js";import"./index-Dpn1WNSA.js";import"./Link-B0N3KZaJ.js";import"./index-DMq7DMka.js";import"./index-CG9w7Zbs.js";import"./index-DR-Y0J47.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7u1q_FrR.js";import"./addCustomCSSWithScoping-C6yaVxxt.js";import"./index-DYBTfsDC.js";import"./information-CbbI_Sx9.js";import"./sys-enter-2-BBWU7--K.js";import"./alert-DYblDknT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B_zUtrJj.js";import"./delete-DtTDFgua.js";import"./settings-B6_IIEdU.js";import"./NoData-HFeU9vdV.js";import"./IllustratedMessage-DAhHz2hl.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dv-Jq1gZ.js";import"./index-vKdyj-Cx.js";import"./index-DWicqfqU.js";import"./slim-arrow-down-Q1-xOpph.js";import"./Input-COIsebiw.js";import"./ResponsivePopoverCommon.css-D3bilPOx.js";import"./ValueStateMessage.css-CDYJlAs8.js";import"./Suggestions.css-yjahHnhL.js";import"./ListBoxItemGroupTemplate-BngMhksN.js";import"./ComboBoxItemGroup-D7NzUjs5.js";import"./ListItemBaseTemplate-Dh7ogNDY.js";import"./Token-BZy6Rg25.js";import"./ScrollEnablement-DM95z1Eg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BINGXEBR.js";import"./ToggleButton-RUOVkV7g.js";import"./SuggestionItem-B5n8pZNS.js";import"./index-CXTiPltu.js";import"./Option-BqwO-aaQ.js";import"./index-C1ZC_OGM.js";import"./SegmentedButton-WYn-A9a6.js";import"./index-YzVMegMk.js";import"./Select-DT2xs0F7.js";import"./InvisibleMessage-C0fd6fX6.js";import"./slim-arrow-down-Dud9vsmt.js";import"./index-DU-o6RSh.js";import"./index-D-Ji_jwM.js";import"./index-CTLp08oh.js";import"./index-vnTdnDSz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-55b-yhx5.js";import"./group-2-COMfsVWc.js";import"./sort-descending-BJZvHW30.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CCJv6-hM.js";import"./utils-rh1His76.js";import"./index-BfJPuqDG.js";import"./index-CYKNWOaQ.js";import"./index-CKHFjLzl.js";import"./navigation-down-arrow-Cz89PnLx.js";import"./navigation-right-arrow-BIVwccgP.js";import"./navigation-right-arrow-xB9Y6ekG.js";import"./useCurrentTheme-YCXbTRxf.js";import"./index-DHVWTc3s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPLZDSHh.js";import"./paper-plane-BdZdtocj.js";import"./index-OpSSSDwM.js";import"./less-D20nw-Jk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

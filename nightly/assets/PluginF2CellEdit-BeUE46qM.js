import{j as e}from"./iframe-DBAXgyPJ.js";import{useMDXComponents as o}from"./index-DeQCSiR4.js";import{I as l,F as r}from"./CommandsAndQueries-Cf1MLqXD.js";import{M as a,C as c}from"./blocks-DNEJwZiK.js";import"./Tag-BnY7EcLs.js";import"./index-BcpDNXQJ.js";import"./copy-Be-lNgbc.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bt31hbU3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iFpZKkV_.js";import"./index-DBjIxNL0.js";import"./index-DtoZ2Fe-.js";import"./Link-CKvSDmqR.js";import"./index-Duoz4br-.js";import"./index-DQ_Wvw6H.js";import"./index-BPy_kvjb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlXvTyjP.js";import"./addCustomCSSWithScoping-BR1T3wHP.js";import"./index-CYYeCl2u.js";import"./information-DLrkR3Ug.js";import"./sys-enter-2-6buniplq.js";import"./alert-C9HPjUKN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChrpHlfC.js";import"./delete-BSkNZk9a.js";import"./settings-BZAstzzV.js";import"./NoData-B7Xju4kG.js";import"./IllustratedMessage-DukG7yhw.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BbeE78Q0.js";import"./index-x_xy1BHi.js";import"./index-H8rccFLG.js";import"./slim-arrow-down-BHYnj_Rv.js";import"./Input-DoLfEvYS.js";import"./ResponsivePopoverCommon.css-Dicr_wKa.js";import"./ValueStateMessage.css-xifZGn5p.js";import"./Suggestions.css-jnqUGd09.js";import"./ListBoxItemGroupTemplate-Br9ejLAN.js";import"./ComboBoxItemGroup-CUEsofUs.js";import"./ListItemBaseTemplate-DOEQQMA6.js";import"./Token-D5BZ8KYH.js";import"./ScrollEnablement-CAGdg6Bw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZE_TKuw.js";import"./ToggleButton-gKHZK2VB.js";import"./SuggestionItem-DbqPCxiF.js";import"./index-NVwWghin.js";import"./Option-CxVq6N4O.js";import"./index-BYQIMVDt.js";import"./SegmentedButton-BKvVXXll.js";import"./index-C-F46hMK.js";import"./Select-BT7URQFg.js";import"./InvisibleMessage-K9tj7mDD.js";import"./slim-arrow-down-D1JBPt11.js";import"./index-z2bdi1aG.js";import"./index-BrTp8toc.js";import"./index-D5hGOmgy.js";import"./index-DXiNIq2l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVRvHvKO.js";import"./group-2-CUJNm4aZ.js";import"./sort-descending-pwGpDMpi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQLAXfyy.js";import"./utils-CrwBT7wM.js";import"./index-CksZPEzU.js";import"./index-DWNu3BWC.js";import"./index-DVt-pam0.js";import"./navigation-down-arrow-DfpRpy8j.js";import"./navigation-right-arrow-B83gJnhp.js";import"./navigation-right-arrow-BXtSSW1B.js";import"./useCurrentTheme-B1tmSyF5.js";import"./index-CwLMJfdZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-eqRVZ4IM.js";import"./paper-plane-CA-wmpkx.js";import"./index-vSaJtfoQ.js";import"./less-BVu6NBS-.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

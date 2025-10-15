import{j as e}from"./iframe-Dpln3x91.js";import{useMDXComponents as o}from"./index-BwM4zX9M.js";import{I as l,F as r}from"./CommandsAndQueries-D8ZM_J5V.js";import{M as a,C as c}from"./blocks-BU-hwsss.js";import"./Tag-CuuYxwWF.js";import"./index-gZoyk-EE.js";import"./copy-BmZL0gFG.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CDrhhElJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_G040s9.js";import"./index-R5iFeOqc.js";import"./index-B-tiWui7.js";import"./Link-B2EfPk0H.js";import"./index-BnwzWoqt.js";import"./index-BC7bHNAY.js";import"./index-C7xVtjbt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl1L_0sw.js";import"./addCustomCSSWithScoping-BEgX107E.js";import"./index-C9IWhIjk.js";import"./information-BNg_xE8V.js";import"./sys-enter-2-CRey8tmC.js";import"./alert-DebHUSqO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-dWrrqn7O.js";import"./delete-DKtOEY5u.js";import"./settings-DUogldWd.js";import"./NoData-B7KP2bRY.js";import"./IllustratedMessage-cTE9BIDm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CQHrGMje.js";import"./index-0uDK0Vdr.js";import"./index-wbSF3N_Y.js";import"./slim-arrow-down-BxpwhQs1.js";import"./Input-B7euzJoo.js";import"./ResponsivePopoverCommon.css--1dLLGms.js";import"./ValueStateMessage.css-DTWUtWcx.js";import"./Suggestions.css-InLHnYp-.js";import"./ListBoxItemGroupTemplate-DbOWOTtN.js";import"./ComboBoxItemGroup-DTREEyXz.js";import"./ListItemBaseTemplate-DfSRrZFo.js";import"./Token-DR7cqsJm.js";import"./ScrollEnablement-DSS0lIGV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHCpwb9_.js";import"./ToggleButton-Dyi4d8KV.js";import"./SuggestionItem-C9K1LEXa.js";import"./index-D4J4Dqol.js";import"./Option-CiInW1SY.js";import"./index-CKt8E8QC.js";import"./SegmentedButton-FfaROJ8w.js";import"./index-BIF6S8BW.js";import"./Select-D4hMiJvv.js";import"./InvisibleMessage-kDq0cqsN.js";import"./slim-arrow-down-DotGOMkD.js";import"./index-DNSCkbXG.js";import"./index-ORaq6zeN.js";import"./index-DZSYYhge.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYVdaO0E.js";import"./group-2-CKHkgp4p.js";import"./sort-descending-NRuJXw_U.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEvmHykI.js";import"./utils-DqbrCZoJ.js";import"./index-CzSiOjHq.js";import"./index-CIHgB-fO.js";import"./index-vGs8Gvmn.js";import"./navigation-down-arrow-B-KwWelX.js";import"./navigation-right-arrow-BN6oWB-c.js";import"./navigation-right-arrow-auStrBJj.js";import"./useCurrentTheme-D2C-2146.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eBQ2Ght0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7wro6Bb.js";import"./paper-plane-BxXqHCwQ.js";import"./index-Bxt6ZcXW.js";import"./less-DKNEmMSk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

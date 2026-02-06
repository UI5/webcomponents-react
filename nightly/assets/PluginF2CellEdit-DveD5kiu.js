import{j as e}from"./iframe-CBE50DlQ.js";import{useMDXComponents as o}from"./index-DIj01nj4.js";import{I as l,F as r}from"./CommandsAndQueries-DPkme0CW.js";import{M as a,C as c}from"./blocks-BkRbeitU.js";import"./Tag-DnRfIk3Q.js";import"./index-CionDnrU.js";import"./copy-C6dVkXZR.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-FgUTgZpP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cx0GhjWW.js";import"./index-DQcdvvTg.js";import"./index-Cl_RTgXn.js";import"./Link-Dh4rUjfX.js";import"./index-hRqo2aEC.js";import"./index-9M1Uc6lA.js";import"./index-DZWAayED.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-OxleBysO.js";import"./addCustomCSSWithScoping-DkZRGLQs.js";import"./index-DOpTxqMF.js";import"./information-C3Q_Sey8.js";import"./sys-enter-2-B4dHqFQY.js";import"./alert-CvpF86nf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-kIWSEh9O.js";import"./delete-DTo7ncZM.js";import"./settings-LIhtBrtR.js";import"./NoData-Qqj6cL7o.js";import"./IllustratedMessage-CI4t13HS.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-W46K1qhG.js";import"./index-f3rDsnt3.js";import"./index-CIlulLEa.js";import"./slim-arrow-down-BM67JTAP.js";import"./Input-D1ohtzY1.js";import"./ResponsivePopoverCommon.css-KhWag-i4.js";import"./ValueStateMessage.css-Bx58RCyv.js";import"./Suggestions.css-aqqCyRM-.js";import"./ListBoxItemGroupTemplate-DDLQAbKD.js";import"./ComboBoxItemGroup-lQF3DiBn.js";import"./ListItemBaseTemplate-_7gwwsSz.js";import"./Token-as1yPBTS.js";import"./ScrollEnablement-UFzoiRFM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_Jgd157.js";import"./ToggleButton-D1Yki3TB.js";import"./SuggestionItem-CnQ5JsmF.js";import"./index-Ccs2LERk.js";import"./Option-DexHpC4I.js";import"./index-BZn1P1jY.js";import"./SegmentedButton-DlVMykln.js";import"./index-BzGPsnLs.js";import"./Select-DTKYpMmC.js";import"./InvisibleMessage-t9FWfsM5.js";import"./slim-arrow-down-DODVm5XL.js";import"./index-C1EH5X69.js";import"./index-1dVMYy5E.js";import"./index-CIKHOMmi.js";import"./index-BPTFgRZw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Jk4sUQSq.js";import"./group-2-BnahuUAi.js";import"./sort-descending-9pdtb9Tw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DqNWVbah.js";import"./utils-DifCn2wZ.js";import"./index-DDCnksk0.js";import"./index-CufLTtjf.js";import"./index-ByEfa-fL.js";import"./navigation-down-arrow-RDpX36vF.js";import"./navigation-right-arrow-4cWWH7fB.js";import"./navigation-right-arrow-iIetXOiI.js";import"./useCurrentTheme-Ch5yw61T.js";import"./index-aRC-rjwD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DcxS7luH.js";import"./paper-plane-BWaZHKXF.js";import"./index-Cs_vIsdp.js";import"./less-Wc_6A1Tc.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

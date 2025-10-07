import{j as e}from"./iframe-DWPhu-XW.js";import{useMDXComponents as o}from"./index-CTKrG-Il.js";import{I as l,F as r}from"./CommandsAndQueries-CU5SVthr.js";import{M as a,C as c}from"./blocks-CEz7tllO.js";import"./Tag-Dba4-MU4.js";import"./index-Bdh_RTY9.js";import"./copy-DPKhld63.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DexyH83g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cr6-mnTI.js";import"./index-BO-QmtYo.js";import"./index-CiWXYZya.js";import"./Link-DkEMVIRA.js";import"./index-dWLwPKk_.js";import"./index-3as0AtcW.js";import"./index-Cqyay8-b.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bmz1hEk-.js";import"./addCustomCSSWithScoping-_7UfQKgI.js";import"./index-BUa9lJQh.js";import"./information-Du5hwuH3.js";import"./sys-enter-2-Xjz6cji1.js";import"./alert-CbVbnvcl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYV0Oj8s.js";import"./delete-CzS-ZSFZ.js";import"./settings-DpHyPOwD.js";import"./NoData-Bp42RSLg.js";import"./IllustratedMessage-aBcENSKw.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-b50AAtuz.js";import"./index-mxmVkI6u.js";import"./index-CApFPdYg.js";import"./slim-arrow-down-26auel0G.js";import"./Input-DtVBLl5-.js";import"./ResponsivePopoverCommon.css-BZjEG7BC.js";import"./ValueStateMessage.css-BE_F5FVP.js";import"./Suggestions.css-RB8NJCE4.js";import"./ListBoxItemGroupTemplate-8_yIlWF-.js";import"./ComboBoxItemGroup-CUl4YaKf.js";import"./ListItemBaseTemplate-DPKPnrYZ.js";import"./Token-eT67usC_.js";import"./ScrollEnablement-DEtsU5kO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DWrsBtMe.js";import"./ToggleButton-Cng5ptzF.js";import"./SuggestionItem-WNV3rxc_.js";import"./index-WkdE1BtC.js";import"./Option-TNrNAAqc.js";import"./index-DJmgSw2V.js";import"./SegmentedButton-Ce9IDtQc.js";import"./index-BD4QFnxI.js";import"./Select-ChhsY6q9.js";import"./InvisibleMessage-CFK-hdYz.js";import"./slim-arrow-down-CiD7J9GA.js";import"./index-Dby-IIR7.js";import"./index-CAL2eitQ.js";import"./index-Dyna8UIc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjrsfWur.js";import"./group-2-CdxZGZ4X.js";import"./sort-descending-z9fS02K2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-g8_M3OEL.js";import"./utils-D_sqNaHL.js";import"./index-CrC4ibqT.js";import"./index-CNj7YBXJ.js";import"./index-AKvgdamH.js";import"./navigation-down-arrow-aGekved_.js";import"./navigation-right-arrow-vDM-HvIf.js";import"./navigation-right-arrow-B6BrxANc.js";import"./useCurrentTheme-BEuzdf0x.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dlc1pnJH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DACTY-zP.js";import"./paper-plane-CaqllUEB.js";import"./index-B2DU1UW_.js";import"./less-DMoysLjA.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

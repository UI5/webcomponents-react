import{j as e}from"./iframe-sSOxzerW.js";import{useMDXComponents as o}from"./index-C4N772Ec.js";import{I as l,F as r}from"./CommandsAndQueries-DN1a2yy9.js";import{M as a,C as c}from"./blocks-DZ5JcJjQ.js";import"./Tag-Bf5UwcWO.js";import"./index-DoYi49fY.js";import"./copy-VA4auTr6.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CSavsqtu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PB68rHIj.js";import"./index-BcOGuNSc.js";import"./index-CbHc7dVQ.js";import"./Link-DXd90h-X.js";import"./index-pczPksUh.js";import"./index-DhmKmBvV.js";import"./index-AsGnG6fc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-k9gqQhIN.js";import"./addCustomCSSWithScoping-8kQXqHvm.js";import"./index-KAoDxHkF.js";import"./information-D7Jek_j9.js";import"./sys-enter-2-CJf9FrQN.js";import"./alert-BmkkzoHl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CUlM0idS.js";import"./delete-YKZAYgfq.js";import"./settings-DfMZh29Y.js";import"./NoData-DhoGmJUV.js";import"./IllustratedMessage-C8ByZfCk.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Dmrub52O.js";import"./index-CWucdukJ.js";import"./index-Cp8EfoGt.js";import"./slim-arrow-down-D_dl0lVn.js";import"./Input-CWyqJw20.js";import"./ResponsivePopoverCommon.css-ujCiRX3T.js";import"./ValueStateMessage.css-Bf_f1VXt.js";import"./Suggestions.css-CsTtHaeM.js";import"./ListBoxItemGroupTemplate-tmSOvkkU.js";import"./ComboBoxItemGroup-as0GmnEu.js";import"./ListItemBaseTemplate-CyPqs4mv.js";import"./Token-BninTSpu.js";import"./ScrollEnablement-CK3trYvC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CGX3xged.js";import"./ToggleButton-BAuFiK85.js";import"./SuggestionItem-DZ-ZtbNH.js";import"./index-DJO1nKvm.js";import"./Option-BL1oRM-m.js";import"./index-BaNQZPFZ.js";import"./SegmentedButton-rLQS_Rwl.js";import"./index-DS5md5gp.js";import"./Select-r6zN4deI.js";import"./InvisibleMessage-DEsSOQlO.js";import"./slim-arrow-down-UfGNSj6J.js";import"./index-BFDbo67H.js";import"./index-CWrxZq5Q.js";import"./index-BsaHFzm2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DkoNqmaM.js";import"./group-2-78TljRjA.js";import"./sort-descending-BOmTXKtu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-By0nFfgd.js";import"./utils-FXZnoG2v.js";import"./index-lQVojLXN.js";import"./index-Ck2xITAb.js";import"./index-7jNUNffH.js";import"./navigation-down-arrow-B_wbscXY.js";import"./navigation-right-arrow-BxVQWDb7.js";import"./navigation-right-arrow-BMvhxWkw.js";import"./useCurrentTheme-DLF3uFVh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVIm7mZc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BVd8EzLl.js";import"./paper-plane-DAN7XnSr.js";import"./index-DjeZ_rHZ.js";import"./less-CpyHKjX7.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

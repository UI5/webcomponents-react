import{j as e}from"./iframe-D6Dqvaj7.js";import{useMDXComponents as o}from"./index-p5hUqO5S.js";import{I as r}from"./CommandsAndQueries-CY2cNdhF.js";import{M as l,C as a}from"./blocks-mit6uJ90.js";import"./Tag-DSi4ilvu.js";import"./index-jRfJh9Ly.js";import"./copy-COwmxVeQ.js";import{F as c}from"./Footer-CnbRw8mY.js";import"./PageNotFound-Dkn1r8pk.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dbcrbwec.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BHPCDbiV.js";import"./index-BMaKwz0y.js";import"./index-XWn6EBIn.js";import"./index-BHa3uoaJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MTFFpMQj.js";import"./addCustomCSSWithScoping-BENu44jJ.js";import"./index-CZdI0ebk.js";import"./index-C9RG4ln6.js";import"./index-kq9zSbaq.js";import"./information-C52MW-zn.js";import"./sys-enter-2-DfVfUeVZ.js";import"./alert-DmTYLDqH.js";import"./index-DOs5kzts.js";import"./Illustrations-C58IHd-I.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDcWf_Dk.js";import"./delete-Dy8TW_jf.js";import"./settings-CTDgJi7-.js";import"./NoData-ChgUFnhW.js";import"./NoFilterResults-Ti2WSWk7.js";import"./index-D1-WSJuG.js";import"./IllustratedMessage-sxhaShVk.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ce-x5iIp.js";import"./Input-BwdyLf-s.js";import"./ResponsivePopoverCommon.css-BB8NXUcU.js";import"./ValueStateMessage.css-BuevPY9h.js";import"./Suggestions.css-D3ddXDeO.js";import"./ListBoxItemGroupTemplate-DENNZn8k.js";import"./ComboBoxItemGroup-AlgVKKtk.js";import"./ListItemBaseTemplate-BnBz7YKK.js";import"./Token-Dy6xV80q.js";import"./ScrollEnablement-geO1o17m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C6QBtN6x.js";import"./ToggleButton-B-QFrS5f.js";import"./multiselect-all-N4HaTKEt.js";import"./SuggestionItem-CxmDW4WJ.js";import"./index-BiLxpb9V.js";import"./Option-UA4r9OEN.js";import"./index-BZTFBXyH.js";import"./SegmentedButton-CFFdkNmV.js";import"./index-CyrFd1-2.js";import"./Select-4EhfYWf2.js";import"./InvisibleMessage-Bc2H5qZ0.js";import"./index-CuSCF_fM.js";import"./index-BFItwByU.js";import"./index-DCsPrgaQ.js";import"./index-Cp7SAe62.js";import"./IconDesign-DXd8PPVF.js";import"./filter-os8ZpS83.js";import"./group-2-YJ2lTcge.js";import"./sort-descending-Dse1md5D.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CvXqra-k.js";import"./utils-Dm1Xt3ii.js";import"./index-BuVPQ4y7.js";import"./index-Cf1IHbj9.js";import"./index-DPPca9iV.js";import"./navigation-down-arrow-CACI7wDg.js";import"./navigation-right-arrow-CNG3xMAM.js";import"./navigation-right-arrow-ya-aDXCF.js";import"./useCurrentTheme-DFXbScZb.js";import"./index-BGM9-IM9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BdqZbY6W.js";import"./paper-plane-BP_sElBh.js";import"./index-EM9DFt2Q.js";import"./less-CnrtmDHy.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};

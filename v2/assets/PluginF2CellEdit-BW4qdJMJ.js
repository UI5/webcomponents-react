import{j as e}from"./iframe-BoiPRijN.js";import{useMDXComponents as o}from"./index-BRummw3t.js";import{I as r}from"./CommandsAndQueries-BnJUOm3t.js";import{M as l,C as a}from"./blocks-CPrA8iQB.js";import"./Tag-B1iwkrJ0.js";import"./index-BTDY8alR.js";import"./copy-Dvt_rD-U.js";import{F as c}from"./Footer-iiNA2dGD.js";import"./PageNotFound-MgXkehwz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DejHcveP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CFo8_Djp.js";import"./index-BQY5khtD.js";import"./index-Jd5qJzJh.js";import"./index-DlyFbgdQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpV6XLVk.js";import"./addCustomCSSWithScoping-DTHpZRZB.js";import"./index-C15uyf0A.js";import"./index-BP_Slc-J.js";import"./index-dkrwuiwP.js";import"./information-BC9xfD2K.js";import"./sys-enter-2-CswPN__J.js";import"./alert-BvdiGKEq.js";import"./index-XewTnCmy.js";import"./Illustrations-CKlojL9Q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-K5LglML7.js";import"./delete-Dla_cBMd.js";import"./settings--JyTse2K.js";import"./NoData-CEvC9SOK.js";import"./NoFilterResults-DGK3vz5s.js";import"./index-CUqI6XWZ.js";import"./IllustratedMessage-CUsnh6ic.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DTx62md9.js";import"./Input-BAuxatca.js";import"./ResponsivePopoverCommon.css-ujru0ghE.js";import"./ValueStateMessage.css-DEzEaU54.js";import"./Suggestions.css-xOjhYq7i.js";import"./ListBoxItemGroupTemplate-CaVscpMh.js";import"./ComboBoxItemGroup-qmXelGMa.js";import"./ListItemBaseTemplate-C5eauqC9.js";import"./Token-BjoEP2YG.js";import"./ScrollEnablement-DLJduNw8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChcK6bsg.js";import"./ToggleButton-BGrpVUlG.js";import"./multiselect-all-M_uaembb.js";import"./SuggestionItem-CSav1c2B.js";import"./index-SHA1M5Y_.js";import"./Option-ViXAl4Kq.js";import"./index-x26HLP5K.js";import"./SegmentedButton-BSG--Us7.js";import"./index-D0HvuG0E.js";import"./Select-1bH1ueYZ.js";import"./InvisibleMessage-CXpqfns1.js";import"./index-CUzGhvMq.js";import"./index-CJrY5ywd.js";import"./index-CFdQXySd.js";import"./index-CGSreYF0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BGDbGBAq.js";import"./group-2-pBllKI8s.js";import"./sort-descending-LT_QT5Pk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfWkv8FN.js";import"./utils-Dyu_RtUB.js";import"./index-DCXSZGzE.js";import"./index-Cx95m7EI.js";import"./index-C2zlICN6.js";import"./navigation-down-arrow-BwpxFzct.js";import"./navigation-right-arrow-BOhWzFQj.js";import"./navigation-right-arrow-DU9-hztn.js";import"./useCurrentTheme-C3dnJtDI.js";import"./index-U_qmoDgq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DETi-hVj.js";import"./paper-plane-CuIzSdKp.js";import"./index-BbjXtlM4.js";import"./less-3QagZ96S.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

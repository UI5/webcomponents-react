import{j as e}from"./iframe-Cg-RuwYg.js";import{useMDXComponents as o}from"./index-CqVZQP5J.js";import{I as r}from"./CommandsAndQueries-CCNeSOJY.js";import{M as l,C as a}from"./blocks-De0pSozH.js";import"./Tag-V3n4GJl9.js";import"./index-BHGbu9W7.js";import"./copy-BXGKGRUx.js";import{F as c}from"./Footer-CTf-mOt6.js";import"./PageNotFound-DwqRWqRN.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CrfV9ygo.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C3bBlraS.js";import"./index-DVELchH2.js";import"./index-YSls2zGx.js";import"./index-DGDw3Svj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgpxYdce.js";import"./addCustomCSSWithScoping-Bd0YAyTr.js";import"./index-BxFP3rc9.js";import"./index-nSwdNT12.js";import"./index-B6oJNk8s.js";import"./information-qBgjFYpj.js";import"./sys-enter-2-DSPEUkAA.js";import"./alert-DJst6O04.js";import"./index-CY8SZPoP.js";import"./Illustrations-v3WzxnkA.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIAi3j86.js";import"./delete-C-KI_7kq.js";import"./settings-oIRtvoda.js";import"./NoData-BDP_IEEg.js";import"./NoFilterResults-BlWrxx-U.js";import"./index-BB6w120D.js";import"./IllustratedMessage-BYrs_IcW.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CSeqepqv.js";import"./Input-C-2HhvGM.js";import"./ResponsivePopoverCommon.css-D2lSx7rm.js";import"./ValueStateMessage.css-DkN6FOwk.js";import"./Suggestions.css-BDGZmoU-.js";import"./ListBoxItemGroupTemplate-u13clP1g.js";import"./ComboBoxItemGroup-LcR8oFEr.js";import"./ListItemBaseTemplate-ChIWqw4H.js";import"./Token-DxKy8YYq.js";import"./ScrollEnablement-c_lcpA4D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1sqpTZP.js";import"./ToggleButton-BKT35s8c.js";import"./multiselect-all-yY1Gjh0M.js";import"./SuggestionItem-D9zhQdWy.js";import"./index-mKdHU01S.js";import"./Option-D2OLWFsd.js";import"./index-BrHam2mh.js";import"./SegmentedButton-fSm6hy8-.js";import"./index-Cuyb1IhG.js";import"./Select-D9yh6VdF.js";import"./InvisibleMessage-CoET6IX3.js";import"./index-xU6WKMgQ.js";import"./index-CMm8P10u.js";import"./index-CB3jgnxJ.js";import"./index-Cqp8XBPr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2LEP3fdj.js";import"./group-2-BapK3mru.js";import"./sort-descending-B5w5ciW-.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fpUgSqmh.js";import"./utils-D0-Jxfsv.js";import"./index-O6DHecp5.js";import"./index-CjXvbdRi.js";import"./index-Dv53xPDI.js";import"./navigation-down-arrow-AwB9VPOC.js";import"./navigation-right-arrow-DLzJRB6J.js";import"./navigation-right-arrow-Cg4BQbAg.js";import"./useCurrentTheme-B667EFhU.js";import"./index-inHBzG2X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DNsGO6Wo.js";import"./paper-plane-DMimrq6_.js";import"./index-wdWM-9oK.js";import"./less-BSoK1MPR.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

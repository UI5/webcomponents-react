import{j as e}from"./iframe-CqN2ZhBf.js";import{useMDXComponents as o}from"./index-l_k7HiPu.js";import{I as r}from"./CommandsAndQueries-BzSACk84.js";import{M as l,C as a}from"./blocks-D3fE08ja.js";import"./Tag-DaK0HZJI.js";import"./index-BQSixcl8.js";import"./copy-BMnDsiBX.js";import{F as c}from"./Footer-DTH9quFy.js";import"./PageNotFound-DDb6UcXH.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-wIwPshJ2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-sJNkb0O1.js";import"./index-C_OjFqiG.js";import"./index-BmfFKSeY.js";import"./index-C6JiuDE8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1eKis37g.js";import"./addCustomCSSWithScoping-DCGf9rRA.js";import"./index-ClO4sXRT.js";import"./index-BLwcEe9O.js";import"./index-BZ-8NUw-.js";import"./information-D6BYlg7t.js";import"./sys-enter-2-DctZJMGf.js";import"./alert-CXFO2CkX.js";import"./index-x-vR1nJy.js";import"./Illustrations-CQ3hDVBV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--txPoGWe.js";import"./delete-h2XdaitH.js";import"./settings-CV6KCmeb.js";import"./NoData-C6Sl59W9.js";import"./NoFilterResults-_LAkR6Uq.js";import"./index-BScT3cos.js";import"./IllustratedMessage-ClWQ7sf8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CjGTJ4y2.js";import"./Input-3bofm7YI.js";import"./ResponsivePopoverCommon.css-BNkBTrbu.js";import"./ValueStateMessage.css-rci_AzRX.js";import"./Suggestions.css-s0E0RINe.js";import"./ListBoxItemGroupTemplate-Bn09u9FB.js";import"./ComboBoxItemGroup-B1knsw1Z.js";import"./ListItemBaseTemplate-6JC-rm6u.js";import"./Token-BHS6Qknj.js";import"./ScrollEnablement-B4APcJGh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D5MRk4wr.js";import"./ToggleButton-CXDSYRUx.js";import"./multiselect-all-Bj3dWoCm.js";import"./SuggestionItem-uNJHrwE9.js";import"./index-CEbPyYrY.js";import"./Option-DMa1oTmd.js";import"./index-C403r3c5.js";import"./SegmentedButton-DKhXYk1S.js";import"./index-M_ILyq9S.js";import"./Select-C0_CyldT.js";import"./InvisibleMessage-BYqXJDe3.js";import"./index-B6LH8klQ.js";import"./index-BPeJ1ib5.js";import"./index-BLglrg0-.js";import"./index-B2BYcUEV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbiJbucS.js";import"./group-2-E6ze7SLh.js";import"./sort-descending-DDk2sEof.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4NWRO4be.js";import"./utils-DlysuV-i.js";import"./index-uzSXEkPm.js";import"./index-BIMeoTS_.js";import"./index-C3YYhu2K.js";import"./navigation-down-arrow-BLAd6_UK.js";import"./navigation-right-arrow-CER8vNPc.js";import"./navigation-right-arrow-Dzk8mzqX.js";import"./useCurrentTheme-C2V2IWtp.js";import"./index-CUOgXW1b.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C9HJPlj_.js";import"./paper-plane-_ZQb1tQs.js";import"./index-0rrPHm6J.js";import"./less-BaKkSfRH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

import{j as e}from"./iframe-CFWpN4R7.js";import{useMDXComponents as o}from"./index-dB03iz0B.js";import{I as r}from"./CommandsAndQueries-CCwXwUid.js";import{M as l,C as a}from"./blocks-Aj9mLxPA.js";import"./Tag-B06DXZI6.js";import"./index-BhKFh4UU.js";import"./copy-DSqUQhHe.js";import{F as c}from"./Footer-DJewOY_X.js";import"./PageNotFound-CLSfRNnq.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-AwnbcJJV.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-RyF9dh8t.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./index-lnQyu4TM.js";import"./index-CeR8RWqv.js";import"./index-nHUwJst8.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./index-B803YP9c.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJYrTbxl.js";import"./delete-oYHX6VFJ.js";import"./settings-BtBp-qQy.js";import"./NoData-C4imxIub.js";import"./NoFilterResults-Bz2MhsDC.js";import"./index-04ZJmerE.js";import"./IllustratedMessage-Bc8Qdoe-.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CUlUYk0a.js";import"./Input-C-H0NyPN.js";import"./ResponsivePopoverCommon.css-gi_-nTdf.js";import"./ValueStateMessage.css-BXLDmzuy.js";import"./Suggestions.css-DHcwzhot.js";import"./ListBoxItemGroupTemplate-CAS_Tv3n.js";import"./ComboBoxItemGroup-DaaAJODI.js";import"./ListItemBaseTemplate-YeqUv09f.js";import"./Token-BsUCyecE.js";import"./ScrollEnablement-CctUY57C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R5Hu6p8-.js";import"./ToggleButton-DAqs2wKA.js";import"./multiselect-all-BoxtuGn8.js";import"./SuggestionItem-CemVcQIM.js";import"./index-CSrNgzI2.js";import"./Option-DnxME5E6.js";import"./index-ZLzfsPTb.js";import"./SegmentedButton-S5xAWCiq.js";import"./index-C017xkvz.js";import"./Select-Ck1JeGEi.js";import"./InvisibleMessage-Be8DiyGj.js";import"./index-B1fSu1UB.js";import"./index-Km-Z_irJ.js";import"./index-Bj-bvpZw.js";import"./index-DBJSqui-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CK6IqeE4.js";import"./group-2-DzMEyvAW.js";import"./sort-descending-C0_8q9F0.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xOdXlKkx.js";import"./utils-BncuNKD7.js";import"./index-Gpnmba2H.js";import"./index-DOMLuM49.js";import"./index-DZN-dGo_.js";import"./navigation-down-arrow-CrgxLPHm.js";import"./navigation-right-arrow-B7tVG0rj.js";import"./navigation-right-arrow-BAsSc-Qi.js";import"./useCurrentTheme-kT0-U9p_.js";import"./index-DSCaE3Mt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CXZT-kLk.js";import"./paper-plane-CC1wCXgi.js";import"./index-BM3hZRzv.js";import"./less-BZ4m5AVI.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

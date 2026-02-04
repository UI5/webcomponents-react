import{j as e}from"./iframe-CIYL-5q3.js";import{useMDXComponents as o}from"./index-CWXxkQxH.js";import{I as l,F as r}from"./CommandsAndQueries-DjZZVJII.js";import{M as a,C as c}from"./blocks-BmH4wjlj.js";import"./Tag-Bj-YRcmn.js";import"./index-DpooF_Dp.js";import"./copy-Cls5Qy9v.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DLFlN1sC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUhE9jhW.js";import"./index-ywBu0MNL.js";import"./index-fAH3q00h.js";import"./Link-C09fzDpl.js";import"./index-OosLgrWy.js";import"./index-CMG3T6cu.js";import"./index-DTrWp4X_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cia2o1gw.js";import"./addCustomCSSWithScoping-CnnSu9RY.js";import"./index-ExTvjT1c.js";import"./information-24sGxR45.js";import"./sys-enter-2-CbyVzbEB.js";import"./alert-BzxY5xRy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DN5NK2GL.js";import"./delete-BbuwAWWV.js";import"./settings-CUTuJpbA.js";import"./NoData-Cja0uYrN.js";import"./IllustratedMessage-BcIwS1uR.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DuWNeOZq.js";import"./index-isDn43Z1.js";import"./index-AShUGGEM.js";import"./slim-arrow-down-DUmzLarA.js";import"./Input-BZQLttu5.js";import"./ResponsivePopoverCommon.css-CfiWzak8.js";import"./ValueStateMessage.css-PjKvvuan.js";import"./Suggestions.css-WY21doQK.js";import"./ListBoxItemGroupTemplate-B6Obkb05.js";import"./ComboBoxItemGroup-BVY9PC83.js";import"./ListItemBaseTemplate-D2BofZjF.js";import"./Token-6QA7fI97.js";import"./ScrollEnablement-DOM2ZjBt.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWBl7L1k.js";import"./ToggleButton-Cmmqs7qR.js";import"./SuggestionItem-BgRbV0QE.js";import"./index-B4nVUG4n.js";import"./Option-DJ0h8inA.js";import"./index-BCOz2x-a.js";import"./SegmentedButton-BSzNVR0_.js";import"./index-YQD3BlP6.js";import"./Select-l7QB7fa7.js";import"./InvisibleMessage-D1mcAElI.js";import"./slim-arrow-down-wVqrmhLU.js";import"./index-CJLTJ6U5.js";import"./index-Be4UD4MD.js";import"./index-COWtlANm.js";import"./index-pMJvwxr3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbTqfTOV.js";import"./group-2-gbIA7stC.js";import"./sort-descending-6ZrR7-wc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-I3O_UikH.js";import"./utils-DS2Z6nbO.js";import"./index-VcgiXEjf.js";import"./index-DwnDivfc.js";import"./index-DhtEduvs.js";import"./navigation-down-arrow-JN7PJRcw.js";import"./navigation-right-arrow-Nvd9V3_e.js";import"./navigation-right-arrow-5JLsdip7.js";import"./useCurrentTheme-27eqesd4.js";import"./index-BMFUyCMr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ybGgh7zN.js";import"./paper-plane-GpjElHEt.js";import"./index-CmPFVJ7g.js";import"./less-BIQS483_.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

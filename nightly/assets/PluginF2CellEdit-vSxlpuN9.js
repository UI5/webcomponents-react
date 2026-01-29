import{j as e}from"./iframe-CyAbfAjR.js";import{useMDXComponents as o}from"./index-06KDG4AT.js";import{I as l,F as r}from"./CommandsAndQueries-B2npLt1g.js";import{M as a,C as c}from"./blocks-D91UiS7A.js";import"./Tag-DcmGlVyp.js";import"./index-Dx49XSH_.js";import"./copy-DuIUrssG.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CduZ0bih.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_ujFW-9.js";import"./index-zvTPe1JW.js";import"./index-C2mRWa3H.js";import"./Link-Cj1yeMGo.js";import"./index-DTVJfpj2.js";import"./index-DhltPY3F.js";import"./index-CmuOjIMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyLeRq-g.js";import"./addCustomCSSWithScoping-zxsplMRu.js";import"./index-DGFLZE4P.js";import"./information-Rep9dVOS.js";import"./sys-enter-2-_ycOnn14.js";import"./alert-BWU-sYPN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJqtSdbn.js";import"./delete-DllOoAvf.js";import"./settings-wJbQBcLC.js";import"./NoData-CBuJCjQZ.js";import"./IllustratedMessage-tA6cAG-s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Bnj3-Z8S.js";import"./index-40ttS4tt.js";import"./index-aWCb2995.js";import"./slim-arrow-down-DdNrUHXY.js";import"./Input-DdGxyUaG.js";import"./ResponsivePopoverCommon.css-BVA8ZcTn.js";import"./ValueStateMessage.css-CWyNZgk-.js";import"./Suggestions.css-YuDlW85k.js";import"./ListBoxItemGroupTemplate-CzIT6ZwA.js";import"./ComboBoxItemGroup-BwIIuCG8.js";import"./ListItemBaseTemplate-BllUB4lH.js";import"./Token-BjNM8qNb.js";import"./ScrollEnablement-_UA22n7q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QR6pRRAu.js";import"./ToggleButton-n_dD7Tpj.js";import"./SuggestionItem-DDD35SgE.js";import"./index-ATdZ4JNt.js";import"./Option-BPW8-nZA.js";import"./index-D6n5UcXf.js";import"./SegmentedButton-CVME573C.js";import"./index-JNLd-Q23.js";import"./Select-DTuI2LUV.js";import"./InvisibleMessage-CwIIQAVa.js";import"./slim-arrow-down-BfmJQhdi.js";import"./index--lMleNuo.js";import"./index-C75xx_by.js";import"./index-DIZzn41L.js";import"./index-EwWM-M_C.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRLptP8y.js";import"./group-2-CYDrIlQx.js";import"./sort-descending-zDD6-75v.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C9_XexGy.js";import"./utils-BwnFu7uR.js";import"./index-DM9-P2gy.js";import"./index-Bs-9er-e.js";import"./index-BEWwn3Xg.js";import"./navigation-down-arrow-CL70XcuK.js";import"./navigation-right-arrow-ChTgZnRi.js";import"./navigation-right-arrow-DpOJRghh.js";import"./useCurrentTheme-CWQeV1Cm.js";import"./index-B72PquXy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CvAdZl9h.js";import"./paper-plane-BQ2yiuh0.js";import"./index-Dc7OW__V.js";import"./less-Duojpb1N.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

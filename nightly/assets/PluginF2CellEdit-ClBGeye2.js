import{j as e}from"./iframe-BdLp08tI.js";import{useMDXComponents as o}from"./index-L7M025bj.js";import{I as l,F as r}from"./CommandsAndQueries-A8ohCY01.js";import{M as a,C as c}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import"./copy-CAz8pLUN.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-yn0tvp-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./index-DEh5uPtQ.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cc5ACQhd.js";import"./delete-C129Vo-j.js";import"./settings-CU9DNY2V.js";import"./NoData-CdpbHVsl.js";import"./IllustratedMessage-aNFXY5tv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B6AfN2ty.js";import"./index-BwfJRUg8.js";import"./index-DbJZSO19.js";import"./slim-arrow-down-Jk0gqFeP.js";import"./Input-BkxHEOLf.js";import"./ResponsivePopoverCommon.css-DUrNz7RL.js";import"./ValueStateMessage.css-KNUuhM7R.js";import"./Suggestions.css-DRL4VnmY.js";import"./ListBoxItemGroupTemplate-BswdqGi0.js";import"./ComboBoxItemGroup-DmWoR2D3.js";import"./ListItemBaseTemplate-q7lVjUmU.js";import"./Token-BUZ_-lS4.js";import"./ScrollEnablement-DKU4KjEY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NrFCjmp4.js";import"./ToggleButton-0L16aZ13.js";import"./SuggestionItem-CvJl4nQX.js";import"./index-a4Q7iOV6.js";import"./Option-CI2Yw2KP.js";import"./index-BesWFMlT.js";import"./SegmentedButton-DezAXtzP.js";import"./index-DEdHEHwC.js";import"./Select-CgTdKzom.js";import"./InvisibleMessage-CU9pQYDF.js";import"./slim-arrow-down-VvEv069w.js";import"./index-c-nauNND.js";import"./index-B7YCk-Wu.js";import"./index-BJsU8vuH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CyqZ_FcD.js";import"./group-2-DPCLN9ms.js";import"./sort-descending-B-2HsOeS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv6NUcfX.js";import"./utils-CB796yal.js";import"./index-DVTrGvWQ.js";import"./index-C7WwmQky.js";import"./index-Dug3C8oV.js";import"./navigation-down-arrow-BWuNqmxj.js";import"./navigation-right-arrow-DFVpmM_Z.js";import"./navigation-right-arrow-Dd0lHwSB.js";import"./useCurrentTheme-DUR02Wpt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-vE2t2Hyd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_VbuiKz.js";import"./paper-plane-CeqIEAvx.js";import"./index-mr-I5ZbO.js";import"./less-D5n1Rht5.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

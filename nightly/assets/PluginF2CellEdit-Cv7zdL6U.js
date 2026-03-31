import{j as e}from"./iframe-D2WvPMQO.js";import{u as o,M as l,C as r}from"./blocks-Cy8tSwuN.js";import{I as a}from"./CommandsAndQueries-GHyhdZ5z.js";import"./Tag-77Zcvr-C.js";import"./index-iukRSAfG.js";import"./copy-DEDrq7eG.js";import{F as c}from"./Footer-CcjLnWXZ.js";import"./PageNotFound--xUWQamC.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ClQlOOfP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B9O6M9m0.js";import"./index-D85ZyHtS.js";import"./index-BHdhu-GL.js";import"./index-PtvYek1_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BEnkyBc2.js";import"./addCustomCSSWithScoping-qrEX4tTM.js";import"./index-itXLTY8o.js";import"./index-CNWb7VVG.js";import"./index-35M5Bral.js";import"./information-C8cZAxRB.js";import"./sys-enter-2-dY36Ay86.js";import"./alert-C9lTQ0KQ.js";import"./index-CEhSDieG.js";import"./Illustrations-T5lVOB-y.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C9QnqX38.js";import"./delete-DCtSeERs.js";import"./settings-BKHPv5fF.js";import"./NoData-BnVRCHK1.js";import"./NoFilterResults-BkYdKGgw.js";import"./index-DlP9PgZ4.js";import"./IllustratedMessage-D3KRi5hR.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_rtv69N.js";import"./Input-I49paX0T.js";import"./ResponsivePopoverCommon.css-CjUTP20I.js";import"./ValueStateMessage.css-CmhOpOlf.js";import"./Suggestions.css-rpucalpY.js";import"./ListBoxItemGroupTemplate-ULzBGJs1.js";import"./ComboBoxItemGroup-3MLa-49H.js";import"./ListItemBaseTemplate-CRHkGA3i.js";import"./Token-BzwGSfjy.js";import"./ScrollEnablement-D_-WU9eX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9P5PrOT.js";import"./ToggleButton-BDLqiRP1.js";import"./multiselect-all-VBbz0rEV.js";import"./SuggestionItem-CyF605C0.js";import"./index-BUVTpYli.js";import"./Option-95rllHQV.js";import"./index-CK2Bjm1A.js";import"./SegmentedButton-YfV1HQzn.js";import"./index-GHa3vc93.js";import"./Select-mzrKDd_j.js";import"./InvisibleMessage-D8P6qZ5N.js";import"./index-B2szwQMK.js";import"./index-CgYPHGay.js";import"./index-rfVADYOX.js";import"./index-CHoH1lJm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DcEBagHM.js";import"./group-2-DgBHJvEx.js";import"./sort-descending-Ba8w6yM6.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5IIiW0k.js";import"./utils-8oLh6ciF.js";import"./index-BCj0VUVv.js";import"./index-BePByOQw.js";import"./index-D6RCLh_r.js";import"./navigation-down-arrow-Cxwn0PTJ.js";import"./navigation-right-arrow-Di_8TZdY.js";import"./navigation-right-arrow-28YF9v8S.js";import"./useCurrentTheme-nTOLBBZF.js";import"./index-DVsa72aS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DYwGEDjw.js";import"./paper-plane-BZZHS2AL.js";import"./index-C3vgjiRI.js";import"./less-INLBlfmn.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(a,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(r,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function _e(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{_e as default};

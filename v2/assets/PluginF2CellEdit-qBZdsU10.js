import{j as e}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as o}from"./index-B20WHrxF.js";import{I as l,F as r}from"./CommandsAndQueries-B8G4x6Z0.js";import{M as a,C as c}from"./blocks-BHc609zj.js";import"./Tag-BlFr4TrL.js";import"./index-4o5lIxTZ.js";import"./copy-CTtd4S6z.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DlmuqfHS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./index-BTxuEF3n.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXYYz_X6.js";import"./delete-CvK1FKxI.js";import"./settings-CVPUgzNe.js";import"./NoData-JwmSOzMe.js";import"./IllustratedMessage-CAmtVAA-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B__4zQr4.js";import"./index-CYj9BOV8.js";import"./index-DNYTFpAf.js";import"./slim-arrow-down-pu6c9dFU.js";import"./Input-B3RJG3gm.js";import"./ResponsivePopoverCommon.css-aexR0yTU.js";import"./ValueStateMessage.css-yur_ejCi.js";import"./Suggestions.css-CLQcfKgH.js";import"./ListBoxItemGroupTemplate-CJgkBchq.js";import"./ComboBoxItemGroup-BSH89920.js";import"./ListItemBaseTemplate-BkUkk_X3.js";import"./Token-_e7dShod.js";import"./ScrollEnablement-CiA5ZjlZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dag2Pm4v.js";import"./ToggleButton-CebUIFNy.js";import"./SuggestionItem-4j5PUDIr.js";import"./index-By_4N1WL.js";import"./Option-C4-0WVuO.js";import"./index-C_4eaVm1.js";import"./SegmentedButton-Mnc5qxs7.js";import"./index-Z3zYgv8B.js";import"./Select-mMA7a--l.js";import"./InvisibleMessage-IeyuxUiP.js";import"./slim-arrow-down-BCpPF8dH.js";import"./index-CgfRqUmo.js";import"./index-2aEaKjNa.js";import"./index-BBLdtj_k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvZOI5Qd.js";import"./group-2-CGfMPej9.js";import"./sort-descending-CrdG7dJf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_NFJJg0.js";import"./utils-Dc3BExB0.js";import"./index-0ObJ8zA9.js";import"./index-DeXKqVJU.js";import"./index-CCZOqJvN.js";import"./navigation-down-arrow-CM9oa_p2.js";import"./navigation-right-arrow-DgXFepz4.js";import"./navigation-right-arrow-BkvomJoX.js";import"./useCurrentTheme-BjJaTJFz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DmvUDyzO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtE2suF5.js";import"./paper-plane-LVrZWN71.js";import"./index-BKPK1xED.js";import"./less-DwozNvkG.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

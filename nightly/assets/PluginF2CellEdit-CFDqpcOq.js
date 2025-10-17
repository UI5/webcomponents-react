import{j as e}from"./iframe-sx-xxOBR.js";import{useMDXComponents as o}from"./index-BuQKvIRW.js";import{I as l,F as r}from"./CommandsAndQueries-kGwhyxXS.js";import{M as a,C as c}from"./blocks-aDd-3g3c.js";import"./Tag-CA4Gam3K.js";import"./index-Dp445doz.js";import"./copy-XBbKngNP.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CMa_80PA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWZ78BHI.js";import"./index-C5D1K9-k.js";import"./index-DWVCty5U.js";import"./Link-Bcw7GIzc.js";import"./index-CHQv5ZFl.js";import"./index-CHIAWjx6.js";import"./index-CGT84HkW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-PUGMtL6z.js";import"./addCustomCSSWithScoping-ByQ6RofR.js";import"./index-FBk0AP6g.js";import"./information-C7RaeOmw.js";import"./sys-enter-2-CEfOZp2B.js";import"./alert-DrhbDEmw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CytgXyai.js";import"./delete-DVuKaiV3.js";import"./settings-GTb4An8K.js";import"./NoData-CisJ0jAE.js";import"./IllustratedMessage-ylht49Gh.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BhN76SkG.js";import"./index-BnZ0pG76.js";import"./index-7bEDU5Wz.js";import"./slim-arrow-down-0Axvdn4U.js";import"./Input-CfL161m4.js";import"./ResponsivePopoverCommon.css-URhSdytj.js";import"./ValueStateMessage.css-BKDnJ5vj.js";import"./Suggestions.css-DvZYKoYH.js";import"./ListBoxItemGroupTemplate-BXCNzsvz.js";import"./ComboBoxItemGroup-Cdycyjl-.js";import"./ListItemBaseTemplate-DxDFiEvX.js";import"./Token-BrsOZpIi.js";import"./ScrollEnablement-C51h3RWn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ctu0x0fN.js";import"./ToggleButton-D8TglRo1.js";import"./SuggestionItem-ZEYBTLf8.js";import"./index-CMQ3jpyy.js";import"./Option-C5EHVmK0.js";import"./index-OAs5zmNm.js";import"./SegmentedButton-CaqqCqeD.js";import"./index-B8TC9aWT.js";import"./Select-CXxEzLVO.js";import"./InvisibleMessage-d9wVLZu-.js";import"./slim-arrow-down-DNpkKrnY.js";import"./index-DlAEUI2J.js";import"./index-C6fXq4ZZ.js";import"./index-eIt60uOw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1AwvrwL.js";import"./group-2-AG8_g4pP.js";import"./sort-descending-jQdQEEX6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-DMMbFy.js";import"./utils-CQxtN9CL.js";import"./index-D-8sThiq.js";import"./index-Dpz8iXz1.js";import"./index-BJvovWPi.js";import"./navigation-down-arrow-CHrPfOcq.js";import"./navigation-right-arrow-CU5VIR2Q.js";import"./navigation-right-arrow-C4byvkGY.js";import"./useCurrentTheme-C69-ISE_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BcwjmFpo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CV_tHasf.js";import"./paper-plane-BpEKW78p.js";import"./index-twVhy0ce.js";import"./less-DzybJbHR.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

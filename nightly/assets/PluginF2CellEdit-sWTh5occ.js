import{j as e}from"./iframe-Bg2SD6vy.js";import{useMDXComponents as o}from"./index-CdwjPgWO.js";import{I as l,F as r}from"./CommandsAndQueries-D_Y2u3wJ.js";import{M as a,C as c}from"./blocks-CZL3kIpQ.js";import"./Tag-BBAYHNzq.js";import"./index-HB0ucYrA.js";import"./copy-UVBI9dME.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-jSjXb3wB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fylc8d1K.js";import"./index-BsOYAUed.js";import"./index-BpAxqFMX.js";import"./Link-B-zNx8Rm.js";import"./index-8T9qtuSw.js";import"./index-DO_6IPbq.js";import"./index-TtYx2H_8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9V3uoCq.js";import"./addCustomCSSWithScoping-CTL1rjLn.js";import"./index-DdlSV3iY.js";import"./information-CRabbQHz.js";import"./sys-enter-2-DqOp1oIr.js";import"./alert-BvLfxsiS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSAA7awN.js";import"./delete-5BOOHJBE.js";import"./settings-BsXo_RiZ.js";import"./NoData-Ccv5U2JJ.js";import"./IllustratedMessage-tmpUoTAd.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-2H4gT1-P.js";import"./index-Qd7vHrhH.js";import"./index-CuBcyOJk.js";import"./slim-arrow-down-D3U0-f5W.js";import"./Input-jdphY6CV.js";import"./ResponsivePopoverCommon.css-WFY0APq-.js";import"./ValueStateMessage.css-Bon94RZK.js";import"./Suggestions.css-Df10iCrd.js";import"./ListBoxItemGroupTemplate-B8fvrHHn.js";import"./ComboBoxItemGroup-BW3MSzp1.js";import"./ListItemBaseTemplate-B30GmwKn.js";import"./Token-CM436cdJ.js";import"./ScrollEnablement-BBWkbu9Y.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKzutTm5.js";import"./ToggleButton-99np1ddV.js";import"./SuggestionItem-DBO_3dkt.js";import"./index-w9ePVu2W.js";import"./Option-CWoqDgXU.js";import"./index-BViSevlR.js";import"./SegmentedButton-p_kUBRZN.js";import"./index-C2j6bZw5.js";import"./Select-DnJ2csMF.js";import"./InvisibleMessage-BOxQIJTv.js";import"./slim-arrow-down-DOg4xt37.js";import"./index-BFPm5TCJ.js";import"./index-BRp05jHt.js";import"./index-CFjFYMef.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMZNlytO.js";import"./group-2-BPq3_pcZ.js";import"./sort-descending-BpqNLAMP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B81Z82mq.js";import"./utils-D_EwR5ck.js";import"./index-DXKVxLaR.js";import"./index-B6a3zIdV.js";import"./index-BavWNaoH.js";import"./navigation-down-arrow-rBxK9kWS.js";import"./navigation-right-arrow--3JwYmng.js";import"./navigation-right-arrow-dYZMq4UC.js";import"./useCurrentTheme-BVGk2TTJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BgbPH2TB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPCZHmr9.js";import"./paper-plane-D-4FvCuR.js";import"./index-CFcdP4pc.js";import"./less-BU56_0XV.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

import{j as e}from"./iframe-CfR5iN1B.js";import{useMDXComponents as o}from"./index-WDvIe_cH.js";import{I as r,F as l}from"./CommandsAndQueries-Cn01gt7T.js";import{M as a,C as c}from"./blocks-CfXjvcLO.js";import"./Tag-BTK-zFQw.js";import"./index-DekWkQZr.js";import"./copy-CaX7ddbO.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dn_MoNch.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqPScGjh.js";import"./index-s45nBPnw.js";import"./index-Dow-CDJC.js";import"./Link-DJBSV0Mu.js";import"./index-3b3tgeGr.js";import"./index-BlanoaUa.js";import"./index-B5r1lcgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSc69HNM.js";import"./addCustomCSSWithScoping-Bvh6JLqq.js";import"./index-DImzYd9b.js";import"./information-DTEN63Fk.js";import"./sys-enter-2-DpY8LIaY.js";import"./alert-C8yZ5BF8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuLKvtHE.js";import"./delete-BbXKnRMD.js";import"./settings-BxehJt3x.js";import"./NoData-Ae1W9ndY.js";import"./IllustratedMessage-DErPlOIi.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-jjf-0K_T.js";import"./index-EUemHXmT.js";import"./slim-arrow-down-BHM8V5zI.js";import"./Input-He0T25IE.js";import"./ResponsivePopoverCommon.css-BviY2BN2.js";import"./ValueStateMessage.css-CnczpN40.js";import"./Suggestions.css-CQmh9058.js";import"./ListBoxItemGroupTemplate-BCj8Kfs3.js";import"./ComboBoxItemGroup-DkcG6b3D.js";import"./ListItemBaseTemplate-Blzwt2Im.js";import"./Token-N60Enl17.js";import"./ScrollEnablement-BjfNoSEh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-T7lCWKjJ.js";import"./ToggleButton-Cs4gjIfQ.js";import"./SuggestionItem-CK0Sz5p3.js";import"./index-D4yvNCEL.js";import"./Option-BU02mXmi.js";import"./index-3qdtC1nN.js";import"./SegmentedButton-Pf9-Y7FP.js";import"./index-CDsq0Nt0.js";import"./Select-UYNHdaxp.js";import"./InvisibleMessage-DezLmlSH.js";import"./slim-arrow-down-C2iRJmdC.js";import"./index-DVRgjs5B.js";import"./index-D1nK-6X7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYAzIxHV.js";import"./group-2--stM7jmm.js";import"./sort-descending-BSd0dKpy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgyEmt0S.js";import"./utils-NjcLVKqO.js";import"./index-zfHAJ78h.js";import"./index-5qf6VRKh.js";import"./index-DTS5qD7C.js";import"./navigation-down-arrow-_LdOzUHF.js";import"./navigation-right-arrow-B91yu81w.js";import"./navigation-right-arrow-D40jgVaK.js";import"./useCurrentTheme-4u8xBb4K.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BMJqj1Ya.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dlms__fq.js";import"./paper-plane-CUQizYzd.js";import"./index-Dj3TXnfq.js";import"./less-DL9fv9Kz.js";import"./index-D8rErjIk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};

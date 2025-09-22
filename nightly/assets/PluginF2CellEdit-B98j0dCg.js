import{j as e}from"./iframe-DpsLP052.js";import{useMDXComponents as o}from"./index-_rtImS1W.js";import{I as r,F as l}from"./CommandsAndQueries-B3V0wcrs.js";import{M as a,C as c}from"./blocks-PRfqR2eX.js";import"./Tag-C7F6-79_.js";import"./index-BFgF6Hw1.js";import"./copy-LcJtQKoV.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BiiTXgeW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfDXcGgq.js";import"./index-82Uo0cXy.js";import"./index-Cb94JCFH.js";import"./Link-lhnFzeWI.js";import"./addCustomCSSWithScoping-3Nlci0j7.js";import"./index-DCyO76rI.js";import"./index-BfX04KMA.js";import"./index-DZ1ovLuc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D03GatZl.js";import"./index-BB8Wt2y3.js";import"./information-NX8J3kcU.js";import"./sys-enter-2-DlH7FC2F.js";import"./alert-BDCJXtoD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CGzrYtwa.js";import"./delete-Dbf_1wPE.js";import"./settings-zqDLAE3N.js";import"./NoData-DUuxZZ1C.js";import"./IllustratedMessage-kZjgaFOd.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dwkdf2hQ.js";import"./index-Bqb9AwRH.js";import"./slim-arrow-down-DDNi_5CI.js";import"./Input-CWGfSp5U.js";import"./ResponsivePopoverCommon.css-CLt9oG7E.js";import"./ValueStateMessage.css-D6BpVT04.js";import"./Suggestions.css-Bv-BnXKd.js";import"./ListBoxItemGroupTemplate-Bqw0C63O.js";import"./ComboBoxItemGroup-BMVuDglg.js";import"./ListItemBaseTemplate-D8JPghtX.js";import"./Token-CmgxmMQz.js";import"./ScrollEnablement-CM-OLTq5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Br3a0ITv.js";import"./ToggleButton-CrSFgh3U.js";import"./SuggestionItem-Xl-bnkLq.js";import"./index-Bc8BPd5w.js";import"./Option-mD3vqu1C.js";import"./index-C4sMv6EO.js";import"./SegmentedButton-dDZ3CxOs.js";import"./index-C5KfMTBY.js";import"./Select-YEgqnweu.js";import"./InvisibleMessage-5ZJM9qmO.js";import"./slim-arrow-down-DWqLlwo-.js";import"./useIsRTL-B3wzcp6-.js";import"./index-DFVo37t3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bo3WWELa.js";import"./group-2-DbErn0S1.js";import"./sort-descending-BGRIvHpc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-yG3MGDtB.js";import"./utils-CGzSA5lO.js";import"./index-YJAd7IRL.js";import"./index-mOgpIW1K.js";import"./index-C0b-uTCQ.js";import"./navigation-down-arrow-DD5HAM7_.js";import"./navigation-right-arrow-CqGCK0sE.js";import"./navigation-right-arrow-DgJX-CjS.js";import"./useCurrentTheme-C3CBqbfX.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y2AHD0GI.js";import"./debounce-D7W5PopO.js";import"./paper-plane-TCDO9g4Q.js";import"./index-CL9k8PLN.js";import"./less-DssSCfkW.js";import"./index-9Trclp5j.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};

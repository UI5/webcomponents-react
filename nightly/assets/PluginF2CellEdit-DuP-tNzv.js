import{j as e}from"./iframe-N-CkNuQp.js";import{useMDXComponents as o}from"./index-vMZrjKLN.js";import{I as l,F as r}from"./CommandsAndQueries-C649emYA.js";import{M as a,C as c}from"./blocks-BlmowjXe.js";import"./Tag-BjR1DXbQ.js";import"./index-C6U4q-s3.js";import"./copy-a5vlqc1O.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-JPuB_a5X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dctc1ZtL.js";import"./index-Cfq8WB4R.js";import"./index-DbFvQ9Ev.js";import"./Link-DUQLkHF0.js";import"./index-Bw-Px9rd.js";import"./index-nkckj2JT.js";import"./index-CNxEFs14.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIbW1rrN.js";import"./addCustomCSSWithScoping-h_aYe486.js";import"./index-CnaiImML.js";import"./information-DXCMx7jp.js";import"./sys-enter-2-DJK47xX9.js";import"./alert-DxAb-ai_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fT9LTQ0j.js";import"./delete-B8Z5j_Do.js";import"./settings-TA31uUIw.js";import"./NoData-D4-SB34s.js";import"./IllustratedMessage-SdxM8pyY.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Y4WFScsy.js";import"./index-CiBKxPDw.js";import"./index--O_h7dFN.js";import"./slim-arrow-down-rr5X3KXq.js";import"./Input-WfBh0KTF.js";import"./ResponsivePopoverCommon.css-KDgvHQ0W.js";import"./ValueStateMessage.css-DO6JAQcc.js";import"./Suggestions.css-DUyKQFzw.js";import"./ListBoxItemGroupTemplate-q6J-Hxt2.js";import"./ComboBoxItemGroup-i8_TMTd2.js";import"./ListItemBaseTemplate-GLU57VL5.js";import"./Token-CiZ98YBe.js";import"./ScrollEnablement--YCWq2yu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dp0_Lu_Z.js";import"./ToggleButton-BS9H1EYC.js";import"./SuggestionItem-BrHIYRQT.js";import"./index-Srybk_Pk.js";import"./Option-BjRW5Ygk.js";import"./index-BsRx0YZP.js";import"./SegmentedButton-BH20oEyd.js";import"./index-DUUfYCBb.js";import"./Select-CELxD9-A.js";import"./InvisibleMessage-ChBJZhpz.js";import"./slim-arrow-down-_epklyRU.js";import"./index-29v9kZgV.js";import"./index-C7vkinT_.js";import"./index-BvTJX50d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpzbLxIe.js";import"./group-2-CxA-FYRT.js";import"./sort-descending-Cw2XxVBU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJhTa_8n.js";import"./utils-DB3VCJuH.js";import"./index-fBWenx7K.js";import"./index-va9Teg1t.js";import"./index-DBkmiyLK.js";import"./navigation-down-arrow-D-R4T3i-.js";import"./navigation-right-arrow-DaI_vWHK.js";import"./navigation-right-arrow-nPCtKYnF.js";import"./useCurrentTheme-fVl0Jypc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CG0eM5fE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DSfev3_E.js";import"./paper-plane-Dc2C46qc.js";import"./index-pfabamDa.js";import"./less-rZNKIwFM.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

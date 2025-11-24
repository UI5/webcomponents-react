import{j as e}from"./iframe-xM6TWZ2z.js";import{useMDXComponents as o}from"./index-itFp6RcL.js";import{I as l,F as r}from"./CommandsAndQueries-DU6Rn88_.js";import{M as a,C as c}from"./blocks-CPrCvPPD.js";import"./Tag-By3SowoB.js";import"./index-9AHy9ejx.js";import"./copy-uYDkz2OX.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cu78AcrT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AzHYcBiG.js";import"./index-D8_xEbiF.js";import"./index-Dro0XmDs.js";import"./Link-BDcFUJ6P.js";import"./index-BDByza4Q.js";import"./index-B3SnxoaH.js";import"./index-Ce3vdOnG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BkjEqAjP.js";import"./addCustomCSSWithScoping-CN9Nv2gA.js";import"./index-D0vFHCq5.js";import"./information-BKDOtRK0.js";import"./sys-enter-2-CnIu4SDT.js";import"./alert-BSwF_aSo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByRe-Pr9.js";import"./delete-GZgGCRu5.js";import"./settings-C5tCT27d.js";import"./NoData-BhTX_TQK.js";import"./IllustratedMessage-CKdzeJEN.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-C007fInA.js";import"./index-CVRnarRU.js";import"./index-Cwu6OG7i.js";import"./slim-arrow-down-C_CcIh7F.js";import"./Input-UTXGmmfd.js";import"./ResponsivePopoverCommon.css-DpRk3tRF.js";import"./ValueStateMessage.css-Br1luTux.js";import"./Suggestions.css-IywVbVu3.js";import"./ListBoxItemGroupTemplate-D-Qfwc-O.js";import"./ComboBoxItemGroup-DBZRijA_.js";import"./ListItemBaseTemplate-DHW-flPt.js";import"./Token-AKwzEfcp.js";import"./ScrollEnablement-CzBIaYtg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Q4pfieza.js";import"./ToggleButton-DSylEXGK.js";import"./SuggestionItem-CDslL1Zi.js";import"./index-CU5opL-S.js";import"./Option-DqKLKc7N.js";import"./index-C4qT761X.js";import"./SegmentedButton-CaLUUleO.js";import"./index-DLa-IKPk.js";import"./Select-pcxnTQd1.js";import"./InvisibleMessage-oFo1Gh6Z.js";import"./slim-arrow-down-CvRj7da0.js";import"./index-JVo02ZVr.js";import"./index-GtlTqLaY.js";import"./index-AWueUsQI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJwBvwXw.js";import"./group-2-CQWF_2lh.js";import"./sort-descending-DdwgSP0m.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv3rwh9l.js";import"./utils-CSrsxa_x.js";import"./index-ByHyVxRG.js";import"./index-K1LoBgk-.js";import"./index-BnzSR-dI.js";import"./navigation-down-arrow-BIunLDBw.js";import"./navigation-right-arrow-_UKX_FlU.js";import"./navigation-right-arrow-B-0frPyv.js";import"./useCurrentTheme-CQ57EUtO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HUtZK3H1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Tj0-8HEj.js";import"./paper-plane-HaunRPAT.js";import"./index-CgbtStQa.js";import"./less-BpW4qLUX.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

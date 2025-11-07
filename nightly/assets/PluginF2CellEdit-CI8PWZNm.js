import{j as e}from"./iframe-BCh37-GP.js";import{useMDXComponents as o}from"./index-E1HFg4gZ.js";import{I as l,F as r}from"./CommandsAndQueries-BaHr-COi.js";import{M as a,C as c}from"./blocks-CS5FlooX.js";import"./Tag-B_Qpe0TE.js";import"./index-DKQ6JIGw.js";import"./copy-7yIahvRv.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-P4Nd5R97.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JFrdX4G8.js";import"./index-CTMnj1ho.js";import"./index-Bv89sSp1.js";import"./Link-BSH3TTIl.js";import"./index-BonVTnTn.js";import"./index-OKdWlUZi.js";import"./index-DMXHNrMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCrrvnNY.js";import"./addCustomCSSWithScoping-5ena9gAo.js";import"./index-DTOYUFlO.js";import"./information-3OCHA3NQ.js";import"./sys-enter-2-C8D5BzD8.js";import"./alert-DXLNWSuU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHnZbtsD.js";import"./delete-EE4bTGjq.js";import"./settings-CWOgdnOQ.js";import"./NoData-EYRIcvpd.js";import"./IllustratedMessage-eRr0GKWI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CAirgaaj.js";import"./index-D1dCHV7D.js";import"./index-tKT3JZMY.js";import"./slim-arrow-down-BmoCgPng.js";import"./Input-BV2Kpufx.js";import"./ResponsivePopoverCommon.css-Dj0T0ryX.js";import"./ValueStateMessage.css-BPaxhl46.js";import"./Suggestions.css-d96Y8STr.js";import"./ListBoxItemGroupTemplate-DKRgKg-W.js";import"./ComboBoxItemGroup-BghtySqg.js";import"./ListItemBaseTemplate-DK7kW4zT.js";import"./Token-swetDNES.js";import"./ScrollEnablement-d21bdta6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bb53oDTA.js";import"./ToggleButton-D4fUNdSY.js";import"./SuggestionItem-BQ2GorAX.js";import"./index-CyfUcvzJ.js";import"./Option-PulQRzr2.js";import"./index-Di7fqct-.js";import"./SegmentedButton-BunRIwoi.js";import"./index-Bgknzbhu.js";import"./Select-Nz2Hcbg2.js";import"./InvisibleMessage-DkbocxqO.js";import"./slim-arrow-down-CGh4l6r9.js";import"./index-BsudtbIQ.js";import"./index-BD7ZfrRW.js";import"./index-CUx_S0wg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl-mfjch.js";import"./group-2-CuvWrUYC.js";import"./sort-descending-C-mIF84h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dst6fVDY.js";import"./utils-BnTi3cfr.js";import"./index-CxPcQIig.js";import"./index-BVX4pL2A.js";import"./index-Dm-Pc1i9.js";import"./navigation-down-arrow-BQvpfFl5.js";import"./navigation-right-arrow-DpZd7grt.js";import"./navigation-right-arrow-CfgRq-yV.js";import"./useCurrentTheme-Bz0a4Npu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8yBXMrH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRezPATc.js";import"./paper-plane-Dx3V_-Uw.js";import"./index-CZ6TAeEd.js";import"./less-Bxijlz1Z.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

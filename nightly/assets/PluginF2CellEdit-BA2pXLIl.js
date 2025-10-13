import{j as e}from"./iframe-B2H5__qL.js";import{useMDXComponents as o}from"./index-Bc3WoLXB.js";import{I as l,F as r}from"./CommandsAndQueries-CP6cnX5g.js";import{M as a,C as c}from"./blocks-CV5yz-FR.js";import"./Tag-7r6nRPOe.js";import"./index-Cm-x3hEF.js";import"./copy-BwEcpAyC.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DjHk6yl6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPEAIHq6.js";import"./index-8OksVI4W.js";import"./index-BLSBFNnV.js";import"./Link-CBNkHCq_.js";import"./index-BNOYEhs3.js";import"./index-CwqZMpwP.js";import"./index-BCbtyila.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVsneHI1.js";import"./addCustomCSSWithScoping-cFAolBzW.js";import"./index-CF6OSC7N.js";import"./information-C3uad2Xw.js";import"./sys-enter-2-cAFQMIU-.js";import"./alert-D25r9vgu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-2mPXoG.js";import"./delete-De_7uTjk.js";import"./settings-Bw4IgaRx.js";import"./NoData-DumJbK86.js";import"./IllustratedMessage-DaQeD-aa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DIsiVO76.js";import"./index-LI-LrhIu.js";import"./index-BcRV51-d.js";import"./slim-arrow-down-IfyUaL9Z.js";import"./Input-DAvWZvrZ.js";import"./ResponsivePopoverCommon.css-BADeKMEp.js";import"./ValueStateMessage.css-n2E6R8Y4.js";import"./Suggestions.css-gsdRtnKE.js";import"./ListBoxItemGroupTemplate--DokvtV2.js";import"./ComboBoxItemGroup-OyZUTZdu.js";import"./ListItemBaseTemplate-BQF5AI-D.js";import"./Token-BIK1iWVF.js";import"./ScrollEnablement-qavzlcVF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ABAA2Grv.js";import"./ToggleButton-CR6zJT8D.js";import"./SuggestionItem-Cabfvqu8.js";import"./index-DP9HR8Xc.js";import"./Option--4jXDoVV.js";import"./index-Bej9GB_4.js";import"./SegmentedButton-yzX-JxKB.js";import"./index-DbJBqtMY.js";import"./Select-B37FBEMS.js";import"./InvisibleMessage-a_Ql2uCy.js";import"./slim-arrow-down-BhGE8VlH.js";import"./index-DE7j7mOL.js";import"./index-B4JgLaLf.js";import"./index-CuufOZMl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C5wXzB-i.js";import"./group-2-BYr0dgAY.js";import"./sort-descending-CeBdv557.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAVao4iy.js";import"./utils-CrH2aT5K.js";import"./index-CeDoMS3B.js";import"./index-BbSCYA_B.js";import"./index-GREBbb7h.js";import"./navigation-down-arrow-Dfde4Yh7.js";import"./navigation-right-arrow-CLwAoq3r.js";import"./navigation-right-arrow-riNFmSLh.js";import"./useCurrentTheme-B81VpdIo.js";import"./IndicationColor-DVw-fSM_.js";import"./index--GkGXre7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DhOh-sF-.js";import"./paper-plane-BBEUTVjc.js";import"./index-CV7kc1h1.js";import"./less-D0Q8ENaH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

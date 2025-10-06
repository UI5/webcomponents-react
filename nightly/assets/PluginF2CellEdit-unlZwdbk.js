import{j as e}from"./iframe-CK4LOCvj.js";import{useMDXComponents as o}from"./index-BqLtYoST.js";import{I as r,F as l}from"./CommandsAndQueries-BwelsOM0.js";import{M as a,C as c}from"./blocks-ZjQWLnry.js";import"./Tag-BHHtXuEO.js";import"./index-BFAmBcJW.js";import"./copy-BE3AKkMg.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-nI75W6Tx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1io29o.js";import"./index-C1w0eQlR.js";import"./index-GePrpfQg.js";import"./Link-C72gLrWy.js";import"./index-BUxn-N40.js";import"./index-BKUd1pYK.js";import"./index-DPjO4Ph3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6YKOrWJ.js";import"./addCustomCSSWithScoping-CyChXc_w.js";import"./index-BIYQNCb4.js";import"./information-DVinbumE.js";import"./sys-enter-2-CxZg2yn9.js";import"./alert-q3RCUipA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChmyOthR.js";import"./delete-CLx7glTK.js";import"./settings-ayEvMgd1.js";import"./NoData-T4iCewut.js";import"./IllustratedMessage-Xv-ZhCNN.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DBPzYJyP.js";import"./index-D298oQB3.js";import"./slim-arrow-down-DWzWgWFr.js";import"./Input-iHhFMUKe.js";import"./ResponsivePopoverCommon.css-Dp8lV0BH.js";import"./ValueStateMessage.css-BPb3CYnx.js";import"./Suggestions.css-DJt8IkfU.js";import"./ListBoxItemGroupTemplate-DDfjb_sz.js";import"./ComboBoxItemGroup-rCQ_Opmd.js";import"./ListItemBaseTemplate-hDgjT7Em.js";import"./Token-BpRQuSqj.js";import"./ScrollEnablement-B4EaRXxx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LFJPBSzx.js";import"./ToggleButton-nsqCEMCk.js";import"./SuggestionItem-BFaG5LNL.js";import"./index-Cph68JY2.js";import"./Option-Bqy7W0j8.js";import"./index-D_lH--Ko.js";import"./SegmentedButton-Lp1qLZgk.js";import"./index-DasWYOI-.js";import"./Select-D8-eeFJR.js";import"./InvisibleMessage-DCPpUX1P.js";import"./slim-arrow-down-Va97yZ0D.js";import"./index-sQs2olcQ.js";import"./index-Cm2ZTwYm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vs2PrjuQ.js";import"./group-2-Cs4zeWBJ.js";import"./sort-descending-CRZRYHRm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNdNGQRA.js";import"./utils-BzxUxqTh.js";import"./index-iZ4-PPSv.js";import"./index-CHUetHtW.js";import"./index-C-2t_3GF.js";import"./navigation-down-arrow-BlzDPZtH.js";import"./navigation-right-arrow-Dd9NdxpN.js";import"./navigation-right-arrow-DZnGmzmd.js";import"./useCurrentTheme-CyiUas-f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cb3L2AXo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPg5JnzM.js";import"./paper-plane-CvZdjZdd.js";import"./index-CWdAvJez.js";import"./less-CgzrIY7E.js";import"./index-Dwfx48-L.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

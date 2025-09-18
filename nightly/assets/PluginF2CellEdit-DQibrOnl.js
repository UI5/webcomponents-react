import{j as e}from"./iframe-DTHPT7iA.js";import{useMDXComponents as o}from"./index-74UlZZJj.js";import{I as r,F as l}from"./CommandsAndQueries-BD3jeLaK.js";import{M as a,C as c}from"./blocks-BEm3tjb6.js";import"./Tag-CJADm4_M.js";import"./index-C3HgU9VG.js";import"./copy-mCNoL2s6.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CR2kQPrZ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DwOvcXXK.js";import"./index-Cj0CYz_p.js";import"./index-C6-xBNa3.js";import"./Link-BbcZTKOL.js";import"./addCustomCSSWithScoping-DApCUjf-.js";import"./index-D_aw5Z2j.js";import"./index-dqQUzE09.js";import"./index-ig2sn1RW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BENd75qS.js";import"./index-t5gVEC_D.js";import"./information-DoW4IMVD.js";import"./sys-enter-2-ByI7nkKd.js";import"./alert-COIhFOls.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DnDfdHQU.js";import"./delete-BbQKzcu4.js";import"./settings-DM92s_uf.js";import"./NoData-CwHmvSdw.js";import"./IllustratedMessage-BuAwQfmL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-WTABQdxr.js";import"./index-CXXKzpr4.js";import"./slim-arrow-down-CgABXEzJ.js";import"./Input-D-TFuZ-3.js";import"./ResponsivePopoverCommon.css-D92Yx7wX.js";import"./ValueStateMessage.css-CYayy6u-.js";import"./Suggestions.css-BicA_aUI.js";import"./ListBoxItemGroupTemplate-CdUUn9ri.js";import"./ComboBoxItemGroup-Cib3Su5_.js";import"./ListItemBaseTemplate-BiRHqJdx.js";import"./Token-BcxV0UO_.js";import"./ScrollEnablement-C6hn1rKU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIUna04V.js";import"./ToggleButton-A9PP4M1D.js";import"./SuggestionItem-fB6YQJWQ.js";import"./index-C6IdfRzN.js";import"./Option-DNJdSQ8d.js";import"./index-DCVC7s_-.js";import"./SegmentedButton-BqpTppJT.js";import"./index-CwsyBox-.js";import"./Select-BJhEtDeN.js";import"./InvisibleMessage-CQmpcPbi.js";import"./slim-arrow-down-DiNlSlMl.js";import"./useIsRTL-DmdXpOjP.js";import"./index-CzjWFvA4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTlYESOp.js";import"./group-2-C9oC9E8g.js";import"./sort-descending-BlC3CcR_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-QG1Rc5Hm.js";import"./utils-r_rDS61f.js";import"./index-Ci763Ceq.js";import"./index-DshYuz1G.js";import"./index-Cj0ZzoJd.js";import"./navigation-down-arrow-DhjjYCmY.js";import"./navigation-right-arrow-DQ97-1lE.js";import"./navigation-right-arrow-DJ-TiPnm.js";import"./useCurrentTheme-Dw7fW8Lu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BF_xCWgE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CgoaRieJ.js";import"./index-DaHzjs3T.js";import"./less-4irJeyAV.js";import"./index-74boIQ47.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

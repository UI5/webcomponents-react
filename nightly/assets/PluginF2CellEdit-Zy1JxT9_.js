import{j as e}from"./iframe-DNoxABv1.js";import{useMDXComponents as o}from"./index-DQAMMhq5.js";import{I as r}from"./CommandsAndQueries-DUw_qZ-D.js";import{M as l,C as a}from"./blocks-CIhTxD7j.js";import"./Tag-C_8TAHAf.js";import"./index-I7XZadEI.js";import"./copy-BoMvLlry.js";import{F as c}from"./Footer-CRUbKNtZ.js";import"./PageNotFound-DExHfP7X.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BooCYcav.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-4KtEWIlR.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./index-DAoAOn92.js";import"./index-BfoP-fai.js";import"./index-Kl-B_MHz.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./index-B0My9-lL.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuQN5VCp.js";import"./delete-B_HGMo5o.js";import"./settings-BVsnDJhd.js";import"./NoData-BDxdgXKC.js";import"./NoFilterResults-B4fzW4Bb.js";import"./index-uo-jBSXF.js";import"./IllustratedMessage--JR8YmB3.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Crw8GZKM.js";import"./Input-DodynmuQ.js";import"./ResponsivePopoverCommon.css-DNwar9Nr.js";import"./ValueStateMessage.css-C9tLT3FD.js";import"./Suggestions.css-j42Uy4I4.js";import"./ListBoxItemGroupTemplate-CaBpClID.js";import"./ComboBoxItemGroup-D9NPBzFd.js";import"./ListItemBaseTemplate-D2CXTOkT.js";import"./Token-B_icrH04.js";import"./ScrollEnablement-DC8Xkk42.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CyfYcvu_.js";import"./ToggleButton-BFMYqKc3.js";import"./multiselect-all-DhBlC6xq.js";import"./SuggestionItem-DoJAxpnk.js";import"./index-BhKgk6Th.js";import"./Option-i3C7vusI.js";import"./index-BJH5L08b.js";import"./SegmentedButton-2tS_gLdU.js";import"./index-Syrnzfof.js";import"./Select-C3Bj0U0O.js";import"./InvisibleMessage-Dg53Ylmh.js";import"./index-B9ganokt.js";import"./index-39LBFfZg.js";import"./index-zLrKzjmr.js";import"./index-bQ5qgXmV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BI3J0iq7.js";import"./group-2-CxloLV0V.js";import"./sort-descending-BmcZdk1d.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5nwUFBQ.js";import"./utils-R3d4ZCnY.js";import"./index-CrXubLA8.js";import"./index-DY-INShE.js";import"./index-Bv7nOmmV.js";import"./navigation-down-arrow-D0ahPAv-.js";import"./navigation-right-arrow-CfNNKs_J.js";import"./navigation-right-arrow-DDYfThNP.js";import"./useCurrentTheme-C87angth.js";import"./index-CwMCTdJZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CcuZOG76.js";import"./paper-plane-LU-kIQ7l.js";import"./index-C-ToTZn7.js";import"./less-DlcEGwfo.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};

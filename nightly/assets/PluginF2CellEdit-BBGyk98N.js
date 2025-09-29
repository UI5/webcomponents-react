import{j as e}from"./iframe-Cg7074Vs.js";import{useMDXComponents as o}from"./index-B5B2jkkb.js";import{I as r,F as l}from"./CommandsAndQueries-DSm4BCv_.js";import{M as a,C as c}from"./blocks-BJCse0Pu.js";import"./Tag-8TeQfEXQ.js";import"./index-BdM5BPiw.js";import"./copy-elFt8Bkr.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DB7bOgxj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5-_BJit.js";import"./index-Do95mp1G.js";import"./index--0v3kDPT.js";import"./Link-C9B0XqeU.js";import"./index-B-O0M522.js";import"./index-DBdMynWP.js";import"./index-mxRvftJc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co8Bnzh8.js";import"./addCustomCSSWithScoping-CQZolqZ7.js";import"./index-mLpQh_nH.js";import"./information-BmRqz6it.js";import"./sys-enter-2-Cd9kQ7Q4.js";import"./alert-D-Gn0uBT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2Ug-I5GK.js";import"./delete--5HWma0M.js";import"./settings-0SSM_tTW.js";import"./NoData-MAiINvvS.js";import"./IllustratedMessage-CibW_qhD.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CxBnrX7K.js";import"./index-jJgsyHr_.js";import"./slim-arrow-down-D-JY4uAS.js";import"./Input-BD7L5txf.js";import"./ResponsivePopoverCommon.css-B9VO2EzZ.js";import"./ValueStateMessage.css-BaLqYwfA.js";import"./Suggestions.css-Dh3K_-nA.js";import"./ListBoxItemGroupTemplate-DNrp4lOn.js";import"./ComboBoxItemGroup-SLBX6ua1.js";import"./ListItemBaseTemplate-5yA7A_oj.js";import"./Token-BenxG4sL.js";import"./ScrollEnablement-Dvz9XJ8X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcC-VMWt.js";import"./ToggleButton-r-kl1SYq.js";import"./SuggestionItem-BYcjaliO.js";import"./index-DMh-3Scq.js";import"./Option-BSZEIO4X.js";import"./index-VfW2tHBs.js";import"./SegmentedButton-By1ReAJr.js";import"./index-DAhqLvsW.js";import"./Select-NMsxQzOK.js";import"./InvisibleMessage-_ZJ38xGN.js";import"./slim-arrow-down-B1zfSySI.js";import"./index-DjuwfncQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BGEQdFQj.js";import"./group-2-DvxIcRzE.js";import"./sort-descending-BX6MO7zF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fGLyeaeN.js";import"./utils-cn5t3TkC.js";import"./index-Bs1zlC6y.js";import"./index-BXF0zUM9.js";import"./index-B1IDkjTW.js";import"./navigation-down-arrow-S78-tx2_.js";import"./navigation-right-arrow-C7Vi-bEV.js";import"./navigation-right-arrow-BTMb-YMq.js";import"./useCurrentTheme-ULT6chda.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CbJ0m2qX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFLUuD9e.js";import"./paper-plane-CUrslyrM.js";import"./index-DAFr-zZ2.js";import"./less-2sbOJ1tj.js";import"./index-BBUpAwBe.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

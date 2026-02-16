import{j as e}from"./iframe-COmYM7FM.js";import{useMDXComponents as o}from"./index-nJK3ZT8W.js";import{I as l,F as r}from"./CommandsAndQueries-BOWLtTE6.js";import{M as a,C as c}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import"./copy-CXZAgH3a.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DVhjw13G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./index-DFr8Hmr1.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdbjcEwi.js";import"./delete-C5z8HYGA.js";import"./settings-B_K-MLff.js";import"./NoData-CVSMoMaA.js";import"./IllustratedMessage-CLKrxT4u.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-hcxm4ff3.js";import"./index-Dsh65RiT.js";import"./index-BIVMAjf6.js";import"./slim-arrow-down-jGOJjhpo.js";import"./Input-Bu6vC63z.js";import"./ResponsivePopoverCommon.css-C4KWqDDR.js";import"./ValueStateMessage.css-DI3W06n_.js";import"./Suggestions.css-CPV1YgiF.js";import"./ListBoxItemGroupTemplate-BMlbPmoD.js";import"./ComboBoxItemGroup-FACN2vTy.js";import"./ListItemBaseTemplate-B6EaFX9g.js";import"./Token-CGmzQJS_.js";import"./ScrollEnablement-DvHuSSVb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BflPf8Ge.js";import"./ToggleButton-CsElF1rR.js";import"./SuggestionItem-Dd6fqolr.js";import"./index-D0YWeYAy.js";import"./Option-CKR1byVj.js";import"./index-BQf3vQDP.js";import"./SegmentedButton-CvpabKGu.js";import"./index-Bw_-eraM.js";import"./Select-B6eJ5Vgx.js";import"./InvisibleMessage-B-FhaSLI.js";import"./slim-arrow-down-LiCVxuMd.js";import"./index-BDEyyVOr.js";import"./index-CgP-_Bp6.js";import"./index-Ch_J8TT8.js";import"./index-BMQcik-b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTnmyxii.js";import"./group-2-Dl5zG8N4.js";import"./sort-descending-gP9HPjaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Duy0U0pN.js";import"./utils-BXFdgd4W.js";import"./index-CL0ZF9VR.js";import"./index-x1QXYab4.js";import"./index-Bd4CgeRl.js";import"./navigation-down-arrow-DPdzdZ9F.js";import"./navigation-right-arrow-2YTC651d.js";import"./navigation-right-arrow-CcuSN_gl.js";import"./useCurrentTheme-DZHkVItH.js";import"./index-BOFC4ju2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B9v40RyR.js";import"./paper-plane-BK5ynDqO.js";import"./index-DX2-QTbN.js";import"./less-BCKthjss.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

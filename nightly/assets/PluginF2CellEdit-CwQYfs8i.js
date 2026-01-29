import{j as e}from"./iframe-_dkm4-lx.js";import{useMDXComponents as o}from"./index-DAI4KLq-.js";import{I as l,F as r}from"./CommandsAndQueries-BqJjwTMw.js";import{M as a,C as c}from"./blocks-Bs8u5Nl3.js";import"./Tag-BrrbDF8k.js";import"./index-BnWTzbqn.js";import"./copy-CdpHOxV4.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories--cyb8K2N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bo-JlDoR.js";import"./index-oGo7hVYD.js";import"./index-S8RgegHO.js";import"./Link-DtN5ZiM1.js";import"./index-DAd7Ps1Q.js";import"./index-DGmq0M6J.js";import"./index-D5ljwTMv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di5ZUlIH.js";import"./addCustomCSSWithScoping-BWn-VVtx.js";import"./index-Dr4umyr0.js";import"./information-BDRRh1Am.js";import"./sys-enter-2-BupypyQm.js";import"./alert-C9P72ihW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8I7EMud0.js";import"./delete-BFlU4n88.js";import"./settings-DKHpvx8J.js";import"./NoData-C-NDq2fS.js";import"./IllustratedMessage-dVg4D6z8.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C43Z122v.js";import"./index-mDQ8kmFF.js";import"./index-fE5L-wmg.js";import"./slim-arrow-down-YnD0B6qq.js";import"./Input-CQoBJCT1.js";import"./ResponsivePopoverCommon.css-BWtbIU1l.js";import"./ValueStateMessage.css-D3oaOmzE.js";import"./Suggestions.css-DqTbturi.js";import"./ListBoxItemGroupTemplate-CxBSymlc.js";import"./ComboBoxItemGroup-BMTZSRsg.js";import"./ListItemBaseTemplate-C3bTchJi.js";import"./Token-B8wGSQWQ.js";import"./ScrollEnablement-mXNeOQwW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BATgW0iD.js";import"./ToggleButton-CXXLlraY.js";import"./SuggestionItem-Cz-SyCva.js";import"./index-BYeZEBFK.js";import"./Option-DDmpArcW.js";import"./index-BvjAbd4X.js";import"./SegmentedButton-CI86rvUG.js";import"./index-DiofpmJR.js";import"./Select-B68-6Rcp.js";import"./InvisibleMessage-Cuby5-08.js";import"./slim-arrow-down-Ds2hHePS.js";import"./index-DCZEipB7.js";import"./index-Da0p86mA.js";import"./index-BZMYVf63.js";import"./index-B0FAyyCx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCgM0xcn.js";import"./group-2-_TbX78jG.js";import"./sort-descending-BrpD4Gn1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzuvpoLd.js";import"./utils-CQKL6wZL.js";import"./index-Fh8qLzQn.js";import"./index-CfwLt2JK.js";import"./index-DmEe1OQb.js";import"./navigation-down-arrow-DiwCzOiQ.js";import"./navigation-right-arrow-aREcauxn.js";import"./navigation-right-arrow-BNytRyk2.js";import"./useCurrentTheme-CvQCpiy2.js";import"./index-ClgSKDC6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFHyUMry.js";import"./paper-plane-C9QCx50u.js";import"./index-NxLhfNzK.js";import"./less-DqBn0nny.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

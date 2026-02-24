import{j as e}from"./iframe-B9-Lkkb_.js";import{useMDXComponents as o}from"./index-BHB6dH51.js";import{I as l,F as r}from"./CommandsAndQueries-DLAu90uX.js";import{M as a,C as c}from"./blocks-DiSlIEhk.js";import"./Tag-CCKiiuhz.js";import"./index-Bp8duZh7.js";import"./copy-Cr6zYfEo.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DUaS7Rgy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B__WJxOt.js";import"./index-B3mrOTgf.js";import"./index-Uzak41NI.js";import"./Link-C6rFWX_2.js";import"./index-Cw3xsh9-.js";import"./index-DkC2gP8p.js";import"./index-BetvcNL1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee--tlCK9Sx.js";import"./addCustomCSSWithScoping-dvkvBHTK.js";import"./index-GyCUx3PS.js";import"./information-D0Z0JvqI.js";import"./sys-enter-2-CI12jhXR.js";import"./alert-BH05V2Qa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DALdZ-m2.js";import"./delete-CWfFsUl8.js";import"./settings-CxujDLn5.js";import"./NoData-Birea-au.js";import"./IllustratedMessage-B0FRqShC.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-XtYsGwDh.js";import"./index-BfMePIv-.js";import"./index-CuZnP9f5.js";import"./slim-arrow-down-BSwFrx-6.js";import"./Input-DjfKo2Sh.js";import"./ResponsivePopoverCommon.css-0xS8ouhO.js";import"./ValueStateMessage.css-Cx0EHJDT.js";import"./Suggestions.css-DHKy5z0i.js";import"./ListBoxItemGroupTemplate-DIuWxvFa.js";import"./ComboBoxItemGroup-xzY_qUqr.js";import"./ListItemBaseTemplate-DiAN3hV1.js";import"./Token-C6SSdJPd.js";import"./ScrollEnablement-KTUvEJYU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-bYgjbEr1.js";import"./ToggleButton-BUijnt0i.js";import"./SuggestionItem-B-pCF7HD.js";import"./index-BfTMPCrh.js";import"./Option-CJIIy65Q.js";import"./index-C8ev54Zj.js";import"./SegmentedButton-wSNeJPjb.js";import"./index-CPa9DL4h.js";import"./Select-CDXhzhip.js";import"./InvisibleMessage-B56PPVnA.js";import"./slim-arrow-down-Cwc8ylhp.js";import"./index-CKHT_nu5.js";import"./index-BQ3eva5q.js";import"./index-D_iSvJPf.js";import"./index-DXx-5JGj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BkCieJa7.js";import"./group-2-Bh4r1QBU.js";import"./sort-descending-Cq24lhVz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-COg2_de0.js";import"./utils-DALMlQXA.js";import"./index-BZa5OPXC.js";import"./index-BoOy7SR4.js";import"./index-BStOHSn9.js";import"./navigation-down-arrow-CTvkFjXS.js";import"./navigation-right-arrow-ol9XXUdO.js";import"./navigation-right-arrow-Bh96P4YL.js";import"./useCurrentTheme-DbMqVJhl.js";import"./index-zY56nHkc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0ILMNLpe.js";import"./paper-plane-Bq_Va7ug.js";import"./index-C0dFfThB.js";import"./less-DdiRz5Ea.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

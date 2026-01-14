import{j as e}from"./iframe-B1b_brho.js";import{useMDXComponents as o}from"./index-D7Qzgic5.js";import{I as l,F as r}from"./CommandsAndQueries-CtGN4dkM.js";import{M as a,C as c}from"./blocks-CVoG47OJ.js";import"./Tag-Ch3HOxAY.js";import"./index-KKxhZSNI.js";import"./copy-Dph3WiPG.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BgO7D7Mn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5FuCmER.js";import"./index-BVeNd2GI.js";import"./index-8EjJ8GJV.js";import"./Link-Pv2BqkKv.js";import"./index-Bk9hFp20.js";import"./index-h6jImvMY.js";import"./index-8w0MsWgV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC0Swz4-.js";import"./addCustomCSSWithScoping-Dg_rT4l9.js";import"./index-Dk0QMB33.js";import"./information-Cn-hRts7.js";import"./sys-enter-2-dderIbO6.js";import"./alert-Bjr3m2l0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DlUC8bET.js";import"./delete-3Vgbn1zI.js";import"./settings-7z4AIWo7.js";import"./NoData-XVQCE7YC.js";import"./IllustratedMessage-CCaHK3Dl.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkiGpRZ1.js";import"./index-BmCGQ8OY.js";import"./index-Dg9f9FJY.js";import"./slim-arrow-down-CtSJNFoH.js";import"./Input-DrPrGk4J.js";import"./ResponsivePopoverCommon.css-DecL8iRM.js";import"./ValueStateMessage.css-DCqzi-mz.js";import"./Suggestions.css-DEFGaf02.js";import"./ListBoxItemGroupTemplate-u6SqAiWm.js";import"./ComboBoxItemGroup-Cxw0yiyg.js";import"./ListItemBaseTemplate-D1-RPP7T.js";import"./Token-DztrHKsk.js";import"./ScrollEnablement-Ci1uix4q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeVIH9EC.js";import"./ToggleButton-ConJh4Qq.js";import"./SuggestionItem-DuB_O6wg.js";import"./index-9SIcG1pp.js";import"./Option-CjBwPmEN.js";import"./index-BUu53tH-.js";import"./SegmentedButton-D7knI5JR.js";import"./index-zkE8LOlV.js";import"./Select-Ch62qSYK.js";import"./InvisibleMessage-DfMwylJB.js";import"./slim-arrow-down-Im8B-cR9.js";import"./index-mHWo7vBD.js";import"./index-BLOOnk3h.js";import"./index-B32hLMLV.js";import"./index-MTq0gWz9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CVXGpE6r.js";import"./group-2-DU4omCjN.js";import"./sort-descending-B5Rv1utQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BIjwrtDG.js";import"./utils-dEyVPeJe.js";import"./index-BIOacvM6.js";import"./index-CyttwLCs.js";import"./index-FvgLRY5G.js";import"./navigation-down-arrow-C3y8haIF.js";import"./navigation-right-arrow-0IJs_3zu.js";import"./navigation-right-arrow-BSqrLb3v.js";import"./useCurrentTheme-BXjgz77y.js";import"./index-Cc7bvS6n.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BBS2P8Pi.js";import"./paper-plane-B3hlc-tG.js";import"./index-xEB5nUFf.js";import"./less-L3_E9rnS.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

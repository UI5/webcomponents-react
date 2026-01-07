import{j as e}from"./iframe-BZdybOkV.js";import{useMDXComponents as o}from"./index-BK2w2T2j.js";import{I as l,F as r}from"./CommandsAndQueries-6n7MF1sx.js";import{M as a,C as c}from"./blocks-CP8RdzkU.js";import"./Tag-BzbxKur3.js";import"./index-DK3P8KDJ.js";import"./copy-CIp50y-g.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bs_3zcjA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./index-BZ_ngRjy.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DmiM3j2F.js";import"./delete-Bn4jrtgc.js";import"./settings-CmB7Fgst.js";import"./NoData-BBWYakMZ.js";import"./IllustratedMessage-DgDtQSiT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-_1OOSCTk.js";import"./index-CpgEwEY9.js";import"./index-CZpKdl4q.js";import"./slim-arrow-down-BbBe3zkt.js";import"./Input-YhMtZ58-.js";import"./ResponsivePopoverCommon.css-C6Zy80iY.js";import"./ValueStateMessage.css-CodrIykW.js";import"./Suggestions.css-DFz-TQwT.js";import"./ListBoxItemGroupTemplate-DbGM3AkW.js";import"./ComboBoxItemGroup-DmXq2bTE.js";import"./ListItemBaseTemplate-osJNy9A-.js";import"./Token-Dp8jCEo2.js";import"./ScrollEnablement-DR3-8lGc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqswipPZ.js";import"./ToggleButton-DjDYf0VM.js";import"./SuggestionItem-CEjQwNps.js";import"./index-CFc0nQPH.js";import"./Option-oF9c-kTt.js";import"./index-ELRjcJ71.js";import"./SegmentedButton-CuCGezZR.js";import"./index-DBySEyUw.js";import"./Select-D9hNZoac.js";import"./InvisibleMessage-DKzjYfdj.js";import"./slim-arrow-down-CDOwWRZe.js";import"./index-Be1awQtY.js";import"./index-CPFKyy5f.js";import"./index-CfUkuybQ.js";import"./index-C13ceQxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter--kHfYTp1.js";import"./group-2-Bsl3ML8j.js";import"./sort-descending-BdNeL7VE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dovy5LXr.js";import"./utils-DhnX8mLU.js";import"./index-Dts70RbM.js";import"./index-C2zzZlu5.js";import"./index-DkPnj5bQ.js";import"./navigation-down-arrow--7f146sQ.js";import"./navigation-right-arrow-CVnmAike.js";import"./navigation-right-arrow-YVh7qiaT.js";import"./useCurrentTheme-BgFcBM5V.js";import"./index-n0APwmh8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX_WkTUl.js";import"./paper-plane-K10fV-mG.js";import"./index-CINyJYO9.js";import"./less-tox92RAM.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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

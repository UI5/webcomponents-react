import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{t as n}from"./ResponsivePopover-YLT0L7LW.js";import{t as r}from"./Popover-35ThBV7m.js";import{t as i}from"./Dialog-D7oXYUs2.js";import{ot as a,t as o}from"./webComponents-Djcqq0LB.js";import{r as s}from"./MenuItem-C4lwNWzS.js";import{t as c}from"./Toast-CZWXl5h3.js";import{n as l,t as u}from"./MessageBox-DUS9EXAp.js";import{n as d,t as f}from"./Modals-CXgsSwSo.js";import{r as p}from"./react-BZibOG70.js";import{_ as m,o as h,s as g,t as _}from"./components-BrS1KR_x.js";import{_ as v,d as y,n as b,r as x}from"./blocks-D9k7TVdi.js";import{Dialog as S,Menu as C,MessageBox as w,Popover as T,ResponsivePopover as E,Toast as D,n as O,t as k}from"./Modals.stories-DmB9pi61.js";function A(e){let t={code:`code`,em:`em`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...p(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(f,{}),`
`,(0,M.jsx)(y,{of:k}),`
`,(0,M.jsx)(g,{of:k,since:`0.22.2`}),`
`,(0,M.jsx)(t.h2,{id:`general-usage-information`,children:`General Usage Information`}),`
`,(0,M.jsxs)(t.p,{children:[`Only one `,(0,M.jsx)(t.code,{children:`Modals`}),` component (`,(0,M.jsx)(t.code,{children:`<Modals />`}),`) should be rendered for each application, otherwise multiple popovers or dialogs are displayed.`]}),`
`,(0,M.jsxs)(t.p,{children:[`Example for mounting the `,(0,M.jsx)(t.code,{children:`Modals`}),` component:`]}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';
import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
...
const root = createRoot(document.getElementById("root"));
root.render(
        <ThemeProvider>
          <Modals />
          <App />
        </ThemeProvider>
);
`})}),`
`,(0,M.jsx)(t.h2,{id:`dialog`,children:`Dialog`}),`
`,(0,M.jsx)(x,{of:S}),`
`,(0,M.jsx)(t.h4,{id:`usage`,children:`Usage`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showDialog(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showDialog(props, container);
`})}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Parameter`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`props`})}),(0,M.jsxs)(t.td,{children:[`All supported `,(0,M.jsx)(t.code,{children:`Dialog`}),` props (see table below). `,(0,M.jsx)(t.code,{children:`open`}),` will always be set to `,(0,M.jsx)(t.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`config`})})}),(0,M.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`container`})})}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(t.code,{children:`Dialog`}),` should be mounted. Use `,(0,M.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Config Options`}),` `,(0,M.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsx)(t.tbody,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`container`})}),(0,M.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(t.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`showDialog`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`ref`})}),(0,M.jsxs)(t.td,{children:[`React `,(0,M.jsx)(t.code,{children:`RefObject`}),` which can be used to get interact with the `,(0,M.jsx)(t.code,{children:`Dialog`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`close()`})}),(0,M.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(t.code,{children:`Dialog`}),`.`]})]})]})]}),`
`,(0,M.jsx)(a,{header:(0,M.jsx)(t.h4,{className:`noMargin`,children:`Dialog Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:i,exclude:[`open`]})}),`
`,(0,M.jsx)(t.h2,{id:`popover`,children:`Popover`}),`
`,(0,M.jsx)(x,{of:T}),`
`,(0,M.jsx)(t.h4,{id:`usage-1`,children:`Usage`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showPopover(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showPopover(props, container);
`})}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Parameter`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`props`})}),(0,M.jsxs)(t.td,{children:[`All supported `,(0,M.jsx)(t.code,{children:`Popover`}),` props (see table below). `,(0,M.jsx)(t.code,{children:`open`}),` will always be set to `,(0,M.jsx)(t.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`config`})})}),(0,M.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`container`})})}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(t.code,{children:`Popover`}),` should be mounted. Use `,(0,M.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Config Options`}),` `,(0,M.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`container`})}),(0,M.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(t.code,{children:`document.body`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`autoClosePopovers`})}),(0,M.jsxs)(t.td,{children:[`If set to `,(0,M.jsx)(t.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`showPopover`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`ref`})}),(0,M.jsxs)(t.td,{children:[`React `,(0,M.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(t.code,{children:`Popover`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`close()`})}),(0,M.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(t.code,{children:`Popover`}),`.`]})]})]})]}),`
`,(0,M.jsx)(a,{header:(0,M.jsx)(t.h4,{className:`noMargin`,children:`Popover Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:r,exclude:[`open`]})}),`
`,(0,M.jsx)(t.h2,{id:`responsivepopover`,children:`ResponsivePopover`}),`
`,(0,M.jsx)(x,{of:E}),`
`,(0,M.jsx)(t.h4,{id:`usage-2`,children:`Usage`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showResponsivePopover(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showResponsivePopover(props, container);
`})}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Parameter`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`props`})}),(0,M.jsxs)(t.td,{children:[`All supported `,(0,M.jsx)(t.code,{children:`ResponsivePopover`}),` props (see table below). `,(0,M.jsx)(t.code,{children:`open`}),` will always be set to `,(0,M.jsx)(t.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`config`})})}),(0,M.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`container`})})}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(t.code,{children:`ResponsivePopover`}),` should be mounted. Use `,(0,M.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Config Options`}),` `,(0,M.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`container`})}),(0,M.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(t.code,{children:`document.body`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`autoClosePopovers`})}),(0,M.jsxs)(t.td,{children:[`If set to `,(0,M.jsx)(t.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`showResponsivePopover`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`ref`})}),(0,M.jsxs)(t.td,{children:[`React `,(0,M.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(t.code,{children:`ResponsivePopover`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`close()`})}),(0,M.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(t.code,{children:`ResponsivePopover`}),`.`]})]})]})]}),`
`,(0,M.jsx)(a,{header:(0,M.jsx)(t.h4,{className:`noMargin`,children:`ResponsivePopover Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:n,exclude:[`open`]})}),`
`,(0,M.jsx)(t.h2,{id:`menu`,children:`Menu`}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`since 1.8.0`})}),`
`,(0,M.jsx)(x,{of:C}),`
`,(0,M.jsx)(t.h4,{id:`usage-3`,children:`Usage`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showMenu(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showMenu(props, container);
`})}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Parameter`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`props`})}),(0,M.jsxs)(t.td,{children:[`All supported `,(0,M.jsx)(t.code,{children:`Menu`}),` props (see table below). `,(0,M.jsx)(t.code,{children:`open`}),` will always be set to `,(0,M.jsx)(t.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`config`})})}),(0,M.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`container`})})}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(t.code,{children:`Menu`}),` should be mounted. Use `,(0,M.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Config Options`}),` `,(0,M.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`container`})}),(0,M.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(t.code,{children:`document.body`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`autoClosePopovers`})}),(0,M.jsxs)(t.td,{children:[`If set to `,(0,M.jsx)(t.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`showMenu`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`ref`})}),(0,M.jsxs)(t.td,{children:[`React `,(0,M.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(t.code,{children:`Menu`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`close()`})}),(0,M.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(t.code,{children:`Menu`}),`.`]})]})]})]}),`
`,(0,M.jsx)(a,{header:(0,M.jsx)(t.h4,{className:`noMargin`,children:`Menu Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:s,exclude:[`open`]})}),`
`,(0,M.jsx)(t.h2,{id:`messagebox`,children:`MessageBox`}),`
`,(0,M.jsx)(x,{of:w}),`
`,(0,M.jsx)(t.h4,{id:`usage-4`,children:`Usage`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showMessageBox(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showMessageBox(props, container);
`})}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Parameter`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`props`})}),(0,M.jsxs)(t.td,{children:[`All supported `,(0,M.jsx)(t.code,{children:`MessageBox`}),` props (see table below). `,(0,M.jsx)(t.code,{children:`open`}),` will always be set to `,(0,M.jsx)(t.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`config`})})}),(0,M.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`container`})})}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(t.code,{children:`MessageBox`}),` should be mounted. Use `,(0,M.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Config Options`}),` `,(0,M.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsx)(t.tbody,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`container`})}),(0,M.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(t.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`showMessageBox`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`ref`})}),(0,M.jsxs)(t.td,{children:[`React `,(0,M.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(t.code,{children:`MessageBox`}),`.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`close()`})}),(0,M.jsxs)(t.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(t.code,{children:`MessageBox`}),`.`]})]})]})]}),`
`,(0,M.jsx)(a,{header:(0,M.jsx)(t.h4,{className:`noMargin`,children:`MessageBox Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:u,exclude:[`open`]})}),`
`,(0,M.jsx)(t.h2,{id:`toast`,children:`Toast`}),`
`,(0,M.jsx)(x,{of:D}),`
`,(0,M.jsx)(t.h4,{id:`usage-5`,children:`Usage`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref } = Modals.showToast(props, config);

// Legacy: using container directly
const { ref } = Modals.showToast(props, container);
`})}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Parameter`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`props`})}),(0,M.jsxs)(t.td,{children:[`All supported `,(0,M.jsx)(t.code,{children:`Toast`}),` props (see table below).`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`config`})})}),(0,M.jsx)(t.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.em,{children:(0,M.jsx)(t.code,{children:`container`})})}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(t.code,{children:`Toast`}),` should be mounted. Use `,(0,M.jsx)(t.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Config Options`}),` `,(0,M.jsx)(t.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsx)(t.tbody,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`container`})}),(0,M.jsxs)(t.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(t.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`showToast`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Property`}),(0,M.jsx)(t.th,{children:`Description`})]})}),(0,M.jsx)(t.tbody,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`ref`})}),(0,M.jsxs)(t.td,{children:[`React `,(0,M.jsx)(t.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(t.code,{children:`Toast`}),`.`]})]})})]}),`
`,(0,M.jsx)(a,{header:(0,M.jsx)(t.h4,{className:`noMargin`,children:`Toast Props `}),collapsed:!0,children:(0,M.jsx)(b,{of:c})}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(h,{})]})}function j(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;e((()=>{M=t(),m(),_(),v(),o(),l(),O(),d()}))();export{j as default};
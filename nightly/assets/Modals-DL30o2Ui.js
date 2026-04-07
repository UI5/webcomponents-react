import{n as e}from"./chunk-zsgVPwQN.js";import{Il as t,Jm as n,Ml as r,Nu as i,Q as a,Qi as o,R as s,X as c,Z as l,_n as u,df as d,z as f}from"./iframe-CNuzj0XO.js";import{r as p}from"./react-DXSSUDRc.js";import{_ as m,o as h,s as g,t as _}from"./components-97kmegqC.js";import{_ as v,d as y,n as b,r as x}from"./blocks-CmHO_ixc.js";import{Dialog as S,Menu as C,MessageBox as w,Popover as T,ResponsivePopover as E,Toast as D,n as O,t as k}from"./Modals.stories-OUpvwAui.js";function A(e){let n={code:`code`,em:`em`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...p(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{}),`
`,(0,M.jsx)(y,{of:k}),`
`,(0,M.jsx)(g,{of:k,since:`0.22.2`}),`
`,(0,M.jsx)(n.h2,{id:`general-usage-information`,children:`General Usage Information`}),`
`,(0,M.jsxs)(n.p,{children:[`Only one `,(0,M.jsx)(n.code,{children:`Modals`}),` component (`,(0,M.jsx)(n.code,{children:`<Modals />`}),`) should be rendered for each application, otherwise multiple popovers or dialogs are displayed.`]}),`
`,(0,M.jsxs)(n.p,{children:[`Example for mounting the `,(0,M.jsx)(n.code,{children:`Modals`}),` component:`]}),`
`,(0,M.jsx)(n.pre,{children:(0,M.jsx)(n.code,{className:`language-jsx`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';
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
`,(0,M.jsx)(n.h2,{id:`dialog`,children:`Dialog`}),`
`,(0,M.jsx)(x,{of:S}),`
`,(0,M.jsx)(n.h4,{id:`usage`,children:`Usage`}),`
`,(0,M.jsx)(n.pre,{children:(0,M.jsx)(n.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showDialog(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showDialog(props, container);
`})}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Parameter`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`props`})}),(0,M.jsxs)(n.td,{children:[`All supported `,(0,M.jsx)(n.code,{children:`Dialog`}),` props (see table below). `,(0,M.jsx)(n.code,{children:`open`}),` will always be set to `,(0,M.jsx)(n.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`config`})})}),(0,M.jsx)(n.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`container`})})}),(0,M.jsxs)(n.td,{children:[(0,M.jsx)(n.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(n.code,{children:`Dialog`}),` should be mounted. Use `,(0,M.jsx)(n.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:`Config Options`}),` `,(0,M.jsx)(n.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsx)(n.tbody,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`container`})}),(0,M.jsxs)(n.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(n.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(n.p,{children:[`The `,(0,M.jsx)(n.code,{children:`showDialog`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`ref`})}),(0,M.jsxs)(n.td,{children:[`React `,(0,M.jsx)(n.code,{children:`RefObject`}),` which can be used to get interact with the `,(0,M.jsx)(n.code,{children:`Dialog`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`close()`})}),(0,M.jsxs)(n.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(n.code,{children:`Dialog`}),`.`]})]})]})]}),`
`,(0,M.jsx)(r,{header:(0,M.jsx)(n.h4,{className:`noMargin`,children:`Dialog Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:t,exclude:[`open`]})}),`
`,(0,M.jsx)(n.h2,{id:`popover`,children:`Popover`}),`
`,(0,M.jsx)(x,{of:T}),`
`,(0,M.jsx)(n.h4,{id:`usage-1`,children:`Usage`}),`
`,(0,M.jsx)(n.pre,{children:(0,M.jsx)(n.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showPopover(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showPopover(props, container);
`})}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Parameter`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`props`})}),(0,M.jsxs)(n.td,{children:[`All supported `,(0,M.jsx)(n.code,{children:`Popover`}),` props (see table below). `,(0,M.jsx)(n.code,{children:`open`}),` will always be set to `,(0,M.jsx)(n.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`config`})})}),(0,M.jsx)(n.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`container`})})}),(0,M.jsxs)(n.td,{children:[(0,M.jsx)(n.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(n.code,{children:`Popover`}),` should be mounted. Use `,(0,M.jsx)(n.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:`Config Options`}),` `,(0,M.jsx)(n.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`container`})}),(0,M.jsxs)(n.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(n.code,{children:`document.body`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`autoClosePopovers`})}),(0,M.jsxs)(n.td,{children:[`If set to `,(0,M.jsx)(n.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(n.p,{children:[`The `,(0,M.jsx)(n.code,{children:`showPopover`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`ref`})}),(0,M.jsxs)(n.td,{children:[`React `,(0,M.jsx)(n.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(n.code,{children:`Popover`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`close()`})}),(0,M.jsxs)(n.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(n.code,{children:`Popover`}),`.`]})]})]})]}),`
`,(0,M.jsx)(r,{header:(0,M.jsx)(n.h4,{className:`noMargin`,children:`Popover Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:i,exclude:[`open`]})}),`
`,(0,M.jsx)(n.h2,{id:`responsivepopover`,children:`ResponsivePopover`}),`
`,(0,M.jsx)(x,{of:E}),`
`,(0,M.jsx)(n.h4,{id:`usage-2`,children:`Usage`}),`
`,(0,M.jsx)(n.pre,{children:(0,M.jsx)(n.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showResponsivePopover(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showResponsivePopover(props, container);
`})}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Parameter`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`props`})}),(0,M.jsxs)(n.td,{children:[`All supported `,(0,M.jsx)(n.code,{children:`ResponsivePopover`}),` props (see table below). `,(0,M.jsx)(n.code,{children:`open`}),` will always be set to `,(0,M.jsx)(n.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`config`})})}),(0,M.jsx)(n.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`container`})})}),(0,M.jsxs)(n.td,{children:[(0,M.jsx)(n.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(n.code,{children:`ResponsivePopover`}),` should be mounted. Use `,(0,M.jsx)(n.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:`Config Options`}),` `,(0,M.jsx)(n.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`container`})}),(0,M.jsxs)(n.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(n.code,{children:`document.body`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`autoClosePopovers`})}),(0,M.jsxs)(n.td,{children:[`If set to `,(0,M.jsx)(n.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(n.p,{children:[`The `,(0,M.jsx)(n.code,{children:`showResponsivePopover`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`ref`})}),(0,M.jsxs)(n.td,{children:[`React `,(0,M.jsx)(n.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(n.code,{children:`ResponsivePopover`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`close()`})}),(0,M.jsxs)(n.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(n.code,{children:`ResponsivePopover`}),`.`]})]})]})]}),`
`,(0,M.jsx)(r,{header:(0,M.jsx)(n.h4,{className:`noMargin`,children:`ResponsivePopover Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:d,exclude:[`open`]})}),`
`,(0,M.jsx)(n.h2,{id:`menu`,children:`Menu`}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`since 1.8.0`})}),`
`,(0,M.jsx)(x,{of:C}),`
`,(0,M.jsx)(n.h4,{id:`usage-3`,children:`Usage`}),`
`,(0,M.jsx)(n.pre,{children:(0,M.jsx)(n.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showMenu(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showMenu(props, container);
`})}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Parameter`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`props`})}),(0,M.jsxs)(n.td,{children:[`All supported `,(0,M.jsx)(n.code,{children:`Menu`}),` props (see table below). `,(0,M.jsx)(n.code,{children:`open`}),` will always be set to `,(0,M.jsx)(n.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`config`})})}),(0,M.jsx)(n.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`container`})})}),(0,M.jsxs)(n.td,{children:[(0,M.jsx)(n.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(n.code,{children:`Menu`}),` should be mounted. Use `,(0,M.jsx)(n.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:`Config Options`}),` `,(0,M.jsx)(n.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`container`})}),(0,M.jsxs)(n.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(n.code,{children:`document.body`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`autoClosePopovers`})}),(0,M.jsxs)(n.td,{children:[`If set to `,(0,M.jsx)(n.code,{children:`true`}),`, opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover.`]})]})]})]}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(n.p,{children:[`The `,(0,M.jsx)(n.code,{children:`showMenu`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`ref`})}),(0,M.jsxs)(n.td,{children:[`React `,(0,M.jsx)(n.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(n.code,{children:`Menu`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`close()`})}),(0,M.jsxs)(n.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(n.code,{children:`Menu`}),`.`]})]})]})]}),`
`,(0,M.jsx)(r,{header:(0,M.jsx)(n.h4,{className:`noMargin`,children:`Menu Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:o,exclude:[`open`]})}),`
`,(0,M.jsx)(n.h2,{id:`messagebox`,children:`MessageBox`}),`
`,(0,M.jsx)(x,{of:w}),`
`,(0,M.jsx)(n.h4,{id:`usage-4`,children:`Usage`}),`
`,(0,M.jsx)(n.pre,{children:(0,M.jsx)(n.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showMessageBox(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showMessageBox(props, container);
`})}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Parameter`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`props`})}),(0,M.jsxs)(n.td,{children:[`All supported `,(0,M.jsx)(n.code,{children:`MessageBox`}),` props (see table below). `,(0,M.jsx)(n.code,{children:`open`}),` will always be set to `,(0,M.jsx)(n.code,{children:`true`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`config`})})}),(0,M.jsx)(n.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`container`})})}),(0,M.jsxs)(n.td,{children:[(0,M.jsx)(n.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(n.code,{children:`MessageBox`}),` should be mounted. Use `,(0,M.jsx)(n.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:`Config Options`}),` `,(0,M.jsx)(n.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsx)(n.tbody,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`container`})}),(0,M.jsxs)(n.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(n.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(n.p,{children:[`The `,(0,M.jsx)(n.code,{children:`showMessageBox`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`ref`})}),(0,M.jsxs)(n.td,{children:[`React `,(0,M.jsx)(n.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(n.code,{children:`MessageBox`}),`.`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`close()`})}),(0,M.jsxs)(n.td,{children:[`Convenience Method for closing the `,(0,M.jsx)(n.code,{children:`MessageBox`}),`.`]})]})]})]}),`
`,(0,M.jsx)(r,{header:(0,M.jsx)(n.h4,{className:`noMargin`,children:`MessageBox Props`}),collapsed:!0,children:(0,M.jsx)(b,{of:c,exclude:[`open`]})}),`
`,(0,M.jsx)(n.h2,{id:`toast`,children:`Toast`}),`
`,(0,M.jsx)(x,{of:D}),`
`,(0,M.jsx)(n.h4,{id:`usage-5`,children:`Usage`}),`
`,(0,M.jsx)(n.pre,{children:(0,M.jsx)(n.code,{className:`language-typescript`,children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref } = Modals.showToast(props, config);

// Legacy: using container directly
const { ref } = Modals.showToast(props, container);
`})}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Parameters`})}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Parameter`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsxs)(n.tbody,{children:[(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`props`})}),(0,M.jsxs)(n.td,{children:[`All supported `,(0,M.jsx)(n.code,{children:`Toast`}),` props (see table below).`]})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`config`})})}),(0,M.jsx)(n.td,{children:`Optional configuration object. See config options below.`})]}),(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.em,{children:(0,M.jsx)(n.code,{children:`container`})})}),(0,M.jsxs)(n.td,{children:[(0,M.jsx)(n.em,{children:`(deprecated)`}),` Optional container where the `,(0,M.jsx)(n.code,{children:`Toast`}),` should be mounted. Use `,(0,M.jsx)(n.code,{children:`config.container`}),` instead.`]})]})]})]}),`
`,(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:`Config Options`}),` `,(0,M.jsx)(n.em,{children:`(since 2.19.0)`})]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsx)(n.tbody,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`container`})}),(0,M.jsxs)(n.td,{children:[`Optional container where the component should be mounted. Defaults to `,(0,M.jsx)(n.code,{children:`document.body`}),`.`]})]})})]}),`
`,(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:`Return Value`})}),`
`,(0,M.jsxs)(n.p,{children:[`The `,(0,M.jsx)(n.code,{children:`showToast`}),` method returns an object with the following properties:`]}),`
`,(0,M.jsxs)(n.table,{children:[(0,M.jsx)(n.thead,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.th,{children:`Property`}),(0,M.jsx)(n.th,{children:`Description`})]})}),(0,M.jsx)(n.tbody,{children:(0,M.jsxs)(n.tr,{children:[(0,M.jsx)(n.td,{children:(0,M.jsx)(n.code,{children:`ref`})}),(0,M.jsxs)(n.td,{children:[`React `,(0,M.jsx)(n.code,{children:`RefObject`}),` which can be used to interact with the `,(0,M.jsx)(n.code,{children:`Toast`}),`.`]})]})})]}),`
`,(0,M.jsx)(r,{header:(0,M.jsx)(n.h4,{className:`noMargin`,children:`Toast Props `}),collapsed:!0,children:(0,M.jsx)(b,{of:u})}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(h,{})]})}function j(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;e((()=>{M=n(),m(),_(),v(),a(),l(),O(),f()}))();export{j as default};
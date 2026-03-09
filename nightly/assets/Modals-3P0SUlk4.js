import{j as e,a8 as l,$ as h,a5 as j,a6 as x,N as a,a2 as p,a9 as m}from"./iframe-1ixiCrn4.js";import{useMDXComponents as t}from"./index-2ZsnEyB9.js";import{M as u,C as r,A as o}from"./blocks-CwvJzyWa.js";import"./Tag-DxuCzySC.js";import"./index-DCoPFbKG.js";import{D as g}from"./DocsHeader-6S2w5SCy.js";import{F as f}from"./Footer-BCWgdeK4.js";import"./CommandsAndQueries-Bsuql65l.js";import"./PageNotFound-C5oFz4Y3.js";import{C as d,D as b,P as w,R as y,M,a as P,T as v}from"./Modals.stories-B5Cqoqe2.js";import{P as c}from"./index-CKmaMINX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CNHKSbA7.js";import"./sys-enter-2-0xYCNe_8.js";import"./alert-tzZ5a9nx.js";import"./copy-VAE-BhfP.js";import"./copy-D9dip1OG.js";import"./GitHub-Mark-nNo9p1X2.js";import"./TableOfContent-BapB0lYb.js";import"./index-Bwh9lIWA.js";import"./index-CfOzkRmu.js";import"./index-hCYkbxY8.js";import"./Link-342TA0WQ.js";import"./index-D3khTefu.js";import"./index-D-IU78TD.js";import"./index-DQdp7GQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMCl2W9z.js";import"./addCustomCSSWithScoping-BlChbTB-.js";import"./index-DPL6_Akv.js";import"./Illustrations-BCjcVikr.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-Cob64KvX.js";import"./less-CTdolYxs.js";import"./index-Z5DUCwba.js";import"./Panel-DF-bzcuX.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DSUlvJr8.js";function i(s){const n={code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
`,e.jsx(u,{of:d}),`
`,e.jsx(g,{of:d,since:"0.22.2"}),`
`,e.jsx(n.h2,{id:"general-usage-information",children:"General Usage Information"}),`
`,e.jsxs(n.p,{children:["Only one ",e.jsx(n.code,{children:"Modals"})," component (",e.jsx(n.code,{children:"<Modals />"}),") should be rendered for each application, otherwise multiple popovers or dialogs are displayed."]}),`
`,e.jsxs(n.p,{children:["Example for mounting the ",e.jsx(n.code,{children:"Modals"})," component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Modals } from '@ui5/webcomponents-react/Modals';
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
`,e.jsx(n.h2,{id:"dialog",children:"Dialog"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showDialog(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showDialog(props, container);
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"props"})}),e.jsxs(n.td,{children:["All supported ",e.jsx(n.code,{children:"Dialog"})," props (see table below). ",e.jsx(n.code,{children:"open"})," will always be set to ",e.jsx(n.code,{children:"true"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"config"})})}),e.jsx(n.td,{children:"Optional configuration object. See config options below."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"container"})})}),e.jsxs(n.td,{children:[e.jsx(n.em,{children:"(deprecated)"})," Optional container where the ",e.jsx(n.code,{children:"Dialog"})," should be mounted. Use ",e.jsx(n.code,{children:"config.container"})," instead."]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Config Options"})," ",e.jsx(n.em,{children:"(since 2.19.0)"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"container"})}),e.jsxs(n.td,{children:["Optional container where the component should be mounted. Defaults to ",e.jsx(n.code,{children:"document.body"}),"."]})]})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Return Value"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"showDialog"})," method returns an object with the following properties:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ref"})}),e.jsxs(n.td,{children:["React ",e.jsx(n.code,{children:"RefObject"})," which can be used to get interact with the ",e.jsx(n.code,{children:"Dialog"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"close()"})}),e.jsxs(n.td,{children:["Convenience Method for closing the ",e.jsx(n.code,{children:"Dialog"}),"."]})]})]})]}),`
`,e.jsx(c,{header:e.jsx(n.h4,{className:"noMargin",children:"Dialog Props"}),collapsed:!0,children:e.jsx(o,{of:h,exclude:["open"]})}),`
`,e.jsx(n.h2,{id:"popover",children:"Popover"}),`
`,e.jsx(r,{of:w}),`
`,e.jsx(n.h4,{id:"usage-1",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showPopover(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showPopover(props, container);
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"props"})}),e.jsxs(n.td,{children:["All supported ",e.jsx(n.code,{children:"Popover"})," props (see table below). ",e.jsx(n.code,{children:"open"})," will always be set to ",e.jsx(n.code,{children:"true"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"config"})})}),e.jsx(n.td,{children:"Optional configuration object. See config options below."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"container"})})}),e.jsxs(n.td,{children:[e.jsx(n.em,{children:"(deprecated)"})," Optional container where the ",e.jsx(n.code,{children:"Popover"})," should be mounted. Use ",e.jsx(n.code,{children:"config.container"})," instead."]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Config Options"})," ",e.jsx(n.em,{children:"(since 2.19.0)"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"container"})}),e.jsxs(n.td,{children:["Optional container where the component should be mounted. Defaults to ",e.jsx(n.code,{children:"document.body"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"autoClosePopovers"})}),e.jsxs(n.td,{children:["If set to ",e.jsx(n.code,{children:"true"}),", opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover."]})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Return Value"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"showPopover"})," method returns an object with the following properties:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ref"})}),e.jsxs(n.td,{children:["React ",e.jsx(n.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(n.code,{children:"Popover"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"close()"})}),e.jsxs(n.td,{children:["Convenience Method for closing the ",e.jsx(n.code,{children:"Popover"}),"."]})]})]})]}),`
`,e.jsx(c,{header:e.jsx(n.h4,{className:"noMargin",children:"Popover Props"}),collapsed:!0,children:e.jsx(o,{of:j,exclude:["open"]})}),`
`,e.jsx(n.h2,{id:"responsivepopover",children:"ResponsivePopover"}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h4,{id:"usage-2",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showResponsivePopover(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showResponsivePopover(props, container);
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"props"})}),e.jsxs(n.td,{children:["All supported ",e.jsx(n.code,{children:"ResponsivePopover"})," props (see table below). ",e.jsx(n.code,{children:"open"})," will always be set to ",e.jsx(n.code,{children:"true"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"config"})})}),e.jsx(n.td,{children:"Optional configuration object. See config options below."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"container"})})}),e.jsxs(n.td,{children:[e.jsx(n.em,{children:"(deprecated)"})," Optional container where the ",e.jsx(n.code,{children:"ResponsivePopover"})," should be mounted. Use ",e.jsx(n.code,{children:"config.container"})," instead."]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Config Options"})," ",e.jsx(n.em,{children:"(since 2.19.0)"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"container"})}),e.jsxs(n.td,{children:["Optional container where the component should be mounted. Defaults to ",e.jsx(n.code,{children:"document.body"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"autoClosePopovers"})}),e.jsxs(n.td,{children:["If set to ",e.jsx(n.code,{children:"true"}),", opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover."]})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Return Value"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"showResponsivePopover"})," method returns an object with the following properties:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ref"})}),e.jsxs(n.td,{children:["React ",e.jsx(n.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(n.code,{children:"ResponsivePopover"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"close()"})}),e.jsxs(n.td,{children:["Convenience Method for closing the ",e.jsx(n.code,{children:"ResponsivePopover"}),"."]})]})]})]}),`
`,e.jsx(c,{header:e.jsx(n.h4,{className:"noMargin",children:"ResponsivePopover Props"}),collapsed:!0,children:e.jsx(o,{of:x,exclude:["open"]})}),`
`,e.jsx(n.h2,{id:"menu",children:"Menu"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"since 1.8.0"})}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(n.h4,{id:"usage-3",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showMenu(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showMenu(props, container);
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"props"})}),e.jsxs(n.td,{children:["All supported ",e.jsx(n.code,{children:"Menu"})," props (see table below). ",e.jsx(n.code,{children:"open"})," will always be set to ",e.jsx(n.code,{children:"true"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"config"})})}),e.jsx(n.td,{children:"Optional configuration object. See config options below."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"container"})})}),e.jsxs(n.td,{children:[e.jsx(n.em,{children:"(deprecated)"})," Optional container where the ",e.jsx(n.code,{children:"Menu"})," should be mounted. Use ",e.jsx(n.code,{children:"config.container"})," instead."]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Config Options"})," ",e.jsx(n.em,{children:"(since 2.19.0)"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"container"})}),e.jsxs(n.td,{children:["Optional container where the component should be mounted. Defaults to ",e.jsx(n.code,{children:"document.body"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"autoClosePopovers"})}),e.jsxs(n.td,{children:["If set to ",e.jsx(n.code,{children:"true"}),", opening a new Popover will automatically close all currently opened Popovers that share the same opener. Only affects Popover, Menu, and ResponsivePopover."]})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Return Value"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"showMenu"})," method returns an object with the following properties:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ref"})}),e.jsxs(n.td,{children:["React ",e.jsx(n.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(n.code,{children:"Menu"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"close()"})}),e.jsxs(n.td,{children:["Convenience Method for closing the ",e.jsx(n.code,{children:"Menu"}),"."]})]})]})]}),`
`,e.jsx(c,{header:e.jsx(n.h4,{className:"noMargin",children:"Menu Props"}),collapsed:!0,children:e.jsx(o,{of:a,exclude:["open"]})}),`
`,e.jsx(n.h2,{id:"messagebox",children:"MessageBox"}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h4,{id:"usage-4",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref, close } = Modals.showMessageBox(props, config);

// Legacy: using container directly
const { ref, close } = Modals.showMessageBox(props, container);
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"props"})}),e.jsxs(n.td,{children:["All supported ",e.jsx(n.code,{children:"MessageBox"})," props (see table below). ",e.jsx(n.code,{children:"open"})," will always be set to ",e.jsx(n.code,{children:"true"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"config"})})}),e.jsx(n.td,{children:"Optional configuration object. See config options below."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"container"})})}),e.jsxs(n.td,{children:[e.jsx(n.em,{children:"(deprecated)"})," Optional container where the ",e.jsx(n.code,{children:"MessageBox"})," should be mounted. Use ",e.jsx(n.code,{children:"config.container"})," instead."]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Config Options"})," ",e.jsx(n.em,{children:"(since 2.19.0)"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"container"})}),e.jsxs(n.td,{children:["Optional container where the component should be mounted. Defaults to ",e.jsx(n.code,{children:"document.body"}),"."]})]})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Return Value"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"showMessageBox"})," method returns an object with the following properties:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ref"})}),e.jsxs(n.td,{children:["React ",e.jsx(n.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(n.code,{children:"MessageBox"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"close()"})}),e.jsxs(n.td,{children:["Convenience Method for closing the ",e.jsx(n.code,{children:"MessageBox"}),"."]})]})]})]}),`
`,e.jsx(c,{header:e.jsx(n.h4,{className:"noMargin",children:"MessageBox Props"}),collapsed:!0,children:e.jsx(o,{of:p,exclude:["open"]})}),`
`,e.jsx(n.h2,{id:"toast",children:"Toast"}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(n.h4,{id:"usage-5",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

// Recommended: using config object
const { ref } = Modals.showToast(props, config);

// Legacy: using container directly
const { ref } = Modals.showToast(props, container);
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"props"})}),e.jsxs(n.td,{children:["All supported ",e.jsx(n.code,{children:"Toast"})," props (see table below)."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"config"})})}),e.jsx(n.td,{children:"Optional configuration object. See config options below."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:e.jsx(n.code,{children:"container"})})}),e.jsxs(n.td,{children:[e.jsx(n.em,{children:"(deprecated)"})," Optional container where the ",e.jsx(n.code,{children:"Toast"})," should be mounted. Use ",e.jsx(n.code,{children:"config.container"})," instead."]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Config Options"})," ",e.jsx(n.em,{children:"(since 2.19.0)"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"container"})}),e.jsxs(n.td,{children:["Optional container where the component should be mounted. Defaults to ",e.jsx(n.code,{children:"document.body"}),"."]})]})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Return Value"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"showToast"})," method returns an object with the following properties:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ref"})}),e.jsxs(n.td,{children:["React ",e.jsx(n.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(n.code,{children:"Toast"}),"."]})]})})]}),`
`,e.jsx(c,{header:e.jsx(n.h4,{className:"noMargin",children:"Toast Props "}),collapsed:!0,children:e.jsx(o,{of:m})}),`
`,e.jsx("br",{}),`
`,e.jsx(f,{})]})}function he(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{he as default};

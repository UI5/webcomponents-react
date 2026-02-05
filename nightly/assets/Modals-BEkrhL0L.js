import{j as e,a7 as l,_ as h,a4 as j,a5 as x,M as a,a0 as p,a8 as m}from"./iframe-DCGZQC_C.js";import{useMDXComponents as t}from"./index-B27pjG1H.js";import{M as u,C as r,A as o}from"./blocks-ByOpH4Vo.js";import"./Tag-DHXPjUHZ.js";import"./index-CslrJvFJ.js";import{D as g}from"./DocsHeader-DFCpeXUk.js";import{F as f}from"./CommandsAndQueries-uRcRdUvd.js";import{C as d,D as b,P as w,R as y,M,a as P,T as v}from"./Modals.stories-9U4ImiCQ.js";import{P as c}from"./index-BgKvB-zg.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8TQYWMC.js";import"./sys-enter-2-CUVdfxRu.js";import"./alert-Crt2Z2f-.js";import"./copy-BktInPQJ.js";import"./copy-Dgi6mZSs.js";import"./GitHub-Mark-cE72Kfis.js";import"./TableOfContent-CfH2EYR2.js";import"./index-LnQjqAbL.js";import"./index-CRLztu5A.js";import"./index-BSyI90IW.js";import"./Link-C5I3pPvS.js";import"./index-C7wZhEOz.js";import"./index-DsknM379.js";import"./index-BrLag0KZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClYCQmx8.js";import"./addCustomCSSWithScoping-BW6FwlJC.js";import"./index-CEF4Eds-.js";import"./index-CIEm01bw.js";import"./less-b5IeAnHp.js";import"./index-B1bHxd8v.js";import"./Panel-Dvd0lCjr.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-XM1x_V6r.js";function i(s){const n={code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
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
`,e.jsx(f,{})]})}function de(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{de as default};

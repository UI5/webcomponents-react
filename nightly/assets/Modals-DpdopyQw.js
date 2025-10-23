import{j as e,S as l,U as h,V as x,W as j,X as a,N as p,Y as m}from"./iframe-BS9g_hR0.js";import{useMDXComponents as t}from"./index-D6Sv7Jl_.js";import{M as u,C as n,A as o}from"./blocks-BlXgdtWM.js";import"./Tag-p_IIbz5w.js";import"./index-C8AvT1H6.js";import{D as g}from"./DocsHeader-Bv2QAu6U.js";import{F as b}from"./CommandsAndQueries-BG9-iBHT.js";import{C as c,D as f,P as w,R as M,M as P,a as v,T as y}from"./Modals.stories-Ce1_7xAl.js";import{P as d}from"./index-DWi4Us9P.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DIMKZmlM.js";import"./sys-enter-2-cjAPqaPu.js";import"./alert-CWeu-Gd2.js";import"./copy-DFu7vK9p.js";import"./copy-DO4k2zsN.js";import"./GitHub-Mark-b87MH8eW.js";import"./TableOfContent-Bfz3jV7i.js";import"./index-BywMJtOG.js";import"./index-wzaot1RG.js";import"./index-CAEXs-Gc.js";import"./Link-CiETGZ39.js";import"./index-BKoMru_w.js";import"./index-DU08Tlv3.js";import"./index-blu4KXFK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DwUfsbfY.js";import"./addCustomCSSWithScoping-D_7dkpV9.js";import"./index-D7iHEYTy.js";import"./index-B41GQnUX.js";import"./Panel-BId80X2t.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DithYMkD.js";function i(r){const s={code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
`,e.jsx(u,{of:c}),`
`,e.jsx(g,{of:c,since:"0.22.2"}),`
`,e.jsx(s.h2,{id:"general-usage-information",children:"General Usage Information"}),`
`,e.jsxs(s.p,{children:["Only one ",e.jsx(s.code,{children:"Modals"})," component (",e.jsx(s.code,{children:"<Modals />"}),") should be rendered for each application, otherwise multiple popovers or dialogs are displayed."]}),`
`,e.jsxs(s.p,{children:["Example for mounting the ",e.jsx(s.code,{children:"Modals"})," component:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { Modals } from '@ui5/webcomponents-react/Modals';
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
`,e.jsx(s.h2,{id:"dialog",children:"Dialog"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showDialog(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Dialog"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Dialog"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showDialog"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to get interact with the ",e.jsx(s.code,{children:"Dialog"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Dialog"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"Dialog Props"}),collapsed:!0,children:e.jsx(o,{of:h,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"popover",children:"Popover"}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(s.h4,{id:"usage-1",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showPopover(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Popover"})," props (see table below).",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Popover"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showPopover"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Popover"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Popover"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"Popover Props"}),collapsed:!0,children:e.jsx(o,{of:x,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"responsivepopover",children:"ResponsivePopover"}),`
`,e.jsx(n,{of:M}),`
`,e.jsx(s.h4,{id:"usage-2",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showResponsivePopover(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"ResponsivePopover"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"ResponsivePopover"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showResponsivePopover"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"ResponsivePopover"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"ResponsivePopover"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"ResponsivePopover Props"}),collapsed:!0,children:e.jsx(o,{of:j,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"menu",children:"Menu"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"since 1.8.0"})}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(s.h4,{id:"usage-3",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showMenu(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Menu"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Menu"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Menu"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Menu"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"Menu"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"Menu Props"}),collapsed:!0,children:e.jsx(o,{of:a,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"messagebox",children:"MessageBox"}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(s.h4,{id:"usage-4",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref, close } = Modals.showMessageBox(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"MessageBox"})," props (see table below). ",e.jsx(s.code,{children:"open"})," will always be set to ",e.jsx(s.code,{children:"true"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"MessageBox"})," should be mounted. Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"showMessageBox"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"MessageBox"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"close()"})}),e.jsxs(s.td,{children:["Convenience Method for closing the ",e.jsx(s.code,{children:"MessageBox"}),"."]})]})]})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"MessageBox Props"}),collapsed:!0,children:e.jsx(o,{of:p,exclude:["open"]})}),`
`,e.jsx(s.h2,{id:"toast",children:"Toast"}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(s.h4,{id:"usage-5",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Modals } from '@ui5/webcomponents-react/Modals';

const { ref } = Modals.showToast(props, container);
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Parameter"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"props"})}),e.jsxs(s.td,{children:["All supported ",e.jsx(s.code,{children:"Toast"})," props(see table below)."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:e.jsx(s.code,{children:"container"})})}),e.jsxs(s.td,{children:["Optional container where the ",e.jsx(s.code,{children:"Toast"})," should be mounted.Defaults to ",e.jsx(s.code,{children:"document.body"}),"."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Return Value"})}),`
`,e.jsxs(s.p,{children:["The",e.jsx(s.code,{children:"showToast"})," method returns an object with the following properties:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Property"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"ref"})}),e.jsxs(s.td,{children:["React ",e.jsx(s.code,{children:"RefObject"})," which can be used to interact with the ",e.jsx(s.code,{children:"Toast"}),"."]})]})})]}),`
`,e.jsx(d,{header:e.jsx(s.h4,{className:"noMargin",children:"Toast Props "}),collapsed:!0,children:e.jsx(o,{of:m})}),`
`,e.jsx("br",{}),`
`,e.jsx(b,{})]})}function oe(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{oe as default};

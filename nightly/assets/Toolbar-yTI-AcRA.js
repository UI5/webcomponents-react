import{j as o}from"./iframe-DGnDchDQ.js";import{useMDXComponents as h}from"./index-gqhlbnnP.js";import{A as n}from"./ArgTypesWithNote-Ct-P5RWh.js";import{C as x}from"./ControlsWithNote-Bpt7dSeq.js";import{D as j}from"./DocsHeader-Ci4x0-Xn.js";import{F as b}from"./CommandsAndQueries-nFfK_W-O.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CpnEbXW7.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-Dgt2OQeg.js";import{T as d}from"./index-DfUM1y2y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ab40gpM3.js";import"./information-C_x76Wro.js";import"./sys-enter-2-C7D1DjDO.js";import"./alert-Bv5R7OxS.js";import"./Tag-Bqlxcgw6.js";import"./index-BpzOuhJc.js";import"./index-DBMKQPCi.js";import"./Link-DlCRMPDC.js";import"./copy-7k0MnJvA.js";import"./copy-DiOqbFXx.js";import"./GitHub-Mark-CiCqtIOa.js";import"./TableOfContent-C4IZUZE2.js";import"./index-D8BbDNnv.js";import"./index-C1Lkwl5k.js";import"./index--LdK-cim.js";import"./index-DwBLo3Dd.js";import"./index-CHVAkMFk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKYdG7d4.js";import"./addCustomCSSWithScoping-loT15OrI.js";import"./Select-rYtMqXh7.js";import"./InvisibleMessage-BzbFhHWs.js";import"./slim-arrow-down-CnIeCsYc.js";import"./slim-arrow-down-co0mwyOK.js";import"./ResponsivePopoverCommon.css-Br3rrJZc.js";import"./ValueStateMessage.css-CHKpDORf.js";import"./Option-kCDR0Dm6.js";import"./ListItemBaseTemplate-BVD1phCE.js";import"./ToolbarButton-CW8yoseF.js";import"./overflow-q2eSL3RJ.js";import"./ToolbarSpacer-Cwa2rJFN.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsx(s,{of:O}),`
`,o.jsx(e.h3,{id:"example-code",children:"Example Code"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`function ToolbarWithPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<PopoverDomRef>(null);
  return (
    <>
      <Toolbar>
        <ToolbarButton
          onClick={(e) => {
            const { targetRef } = e.detail;
            if (popoverRef.current) {
              popoverRef.current.opener = targetRef;
              setPopoverOpen(true);
            }
          }}
          text="Open Popover"
        />
      </Toolbar>
      <Popover
        open={popoverOpen}
        ref={popoverRef}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Content
      </Popover>
    </>
  );
}
`})}),`
`,o.jsx(T,{children:u}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(p,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function lo(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{lo as default};

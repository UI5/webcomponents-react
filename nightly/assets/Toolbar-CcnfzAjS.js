import{j as o}from"./iframe-BELPVtw8.js";import{useMDXComponents as h}from"./index-Ccx4gwdG.js";import{A as n}from"./ArgTypesWithNote-RY4uMUzQ.js";import{C as x}from"./ControlsWithNote-C3I2DDOZ.js";import{D as j}from"./DocsHeader-CsCWSRb4.js";import{F as b}from"./CommandsAndQueries-B86vB0yc.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-B3lwtuZn.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-CC8XpaV3.js";import{T as d}from"./index-EHBHwQi0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkR2pL75.js";import"./information-Q0D1EyOn.js";import"./sys-enter-2-CB1NZnv4.js";import"./alert-e0Pm7FCS.js";import"./Tag-jS7irC1t.js";import"./index-C1fkktKB.js";import"./index-Dy8TXCJ0.js";import"./Link-BLMqdfPm.js";import"./copy-I0OTc4T0.js";import"./copy-BGZyCQeI.js";import"./GitHub-Mark-lyDcreW9.js";import"./TableOfContent-CSElOUdH.js";import"./index-CQYUcCHI.js";import"./index-DslTuBZD.js";import"./index-nk7PQCW4.js";import"./index-D2dH4dam.js";import"./index-D2H4sMz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-GIAd7WMY.js";import"./addCustomCSSWithScoping-vktTBWHy.js";import"./Select-DRUUnZi2.js";import"./InvisibleMessage-DFHR3png.js";import"./slim-arrow-down-BFVaKqjv.js";import"./slim-arrow-down-CwiRy3M0.js";import"./ResponsivePopoverCommon.css-BWZcb2bV.js";import"./ValueStateMessage.css-SXuctyRx.js";import"./Option-C6iyQjxn.js";import"./ListItemBaseTemplate-bJafeYos.js";import"./ToolbarButton-N3vpM_KD.js";import"./overflow-B5vmgl7W.js";import"./overflow-Dh2fPmci.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

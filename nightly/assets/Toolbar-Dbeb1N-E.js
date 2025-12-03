import{j as o}from"./iframe-B13aKv6v.js";import{useMDXComponents as h}from"./index-jGGDFlkx.js";import{A as n}from"./ArgTypesWithNote-DSl0jS-5.js";import{C as x}from"./ControlsWithNote-fWXazrnc.js";import{D as j}from"./DocsHeader-eEoaA6b8.js";import{F as b}from"./CommandsAndQueries-7UV00q7g.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BRIltIP5.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-BrlbwhyR.js";import{T as d}from"./index-pj2Q-Gnf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFkX7Uxi.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./Tag-HMLNjm9Q.js";import"./index-DGzKTrI0.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./copy-DrFGZKk-.js";import"./copy-Cbp2BA1I.js";import"./GitHub-Mark-Cq8kjn3y.js";import"./TableOfContent-DaHf-bNu.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";import"./Select-BfjuawPf.js";import"./InvisibleMessage-B3ODCafQ.js";import"./slim-arrow-down-DjsY58di.js";import"./slim-arrow-down-BtHqfP2O.js";import"./ResponsivePopoverCommon.css-zkAUwXvS.js";import"./ValueStateMessage.css-Drc3FRo7.js";import"./Option-DvXJOHoA.js";import"./ListItemBaseTemplate-DAulwDxe.js";import"./ToolbarButton-Bb4l-imT.js";import"./overflow-DPqrHheG.js";import"./ToolbarSpacer-BfmLmA4E.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

import{j as o}from"./iframe-C9GC-4U4.js";import{useMDXComponents as h}from"./index-vmj4hVH3.js";import{A as n}from"./ArgTypesWithNote-D6fyACKz.js";import{C as x}from"./ControlsWithNote-ATU_orzz.js";import{D as j}from"./DocsHeader-DFLUJaSB.js";import{F as b}from"./CommandsAndQueries-DYyMzrOI.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-B1Qu1Zwa.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-BVCjb4CR.js";import{T as d}from"./index-D9dwshsu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-NAfB8FFO.js";import"./information-Cj8yu0bT.js";import"./sys-enter-2-pae_51W8.js";import"./alert-CNeVkGHK.js";import"./Tag-C_vOYGvY.js";import"./index-Bas8y3YG.js";import"./index-BNt_KmI_.js";import"./Link-DZICkDEv.js";import"./copy-DPSz1a-s.js";import"./copy-Bj7tGZK9.js";import"./GitHub-Mark-CUNy3k7i.js";import"./TableOfContent-CiwDTzv8.js";import"./index-f0Iqf0o1.js";import"./index-B091rt76.js";import"./index--mOIC-D9.js";import"./index-BpGBt1Ec.js";import"./index-CN9xEViq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CrDmJKcm.js";import"./addCustomCSSWithScoping-C3bBYzrj.js";import"./Select-DROm6u1u.js";import"./InvisibleMessage-CG4h93_f.js";import"./slim-arrow-down-DD_-Xh7t.js";import"./slim-arrow-down-lDJf72_X.js";import"./ResponsivePopoverCommon.css-Dfo8GNgL.js";import"./ValueStateMessage.css-C33VG2yg.js";import"./Option-BPgvlydB.js";import"./ListItemBaseTemplate-D4wB-rZo.js";import"./ToolbarButton-Co1h9xrf.js";import"./overflow-ay-i99np.js";import"./ToolbarSpacer-CSjpNTAo.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

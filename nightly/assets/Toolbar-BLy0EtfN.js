import{j as o}from"./iframe-BsBPxA6U.js";import{useMDXComponents as h}from"./index-C_R4y4V0.js";import{A as n}from"./ArgTypesWithNote-GEZe82n0.js";import{C as x}from"./ControlsWithNote-B9F0Q_Ut.js";import{D as j}from"./DocsHeader-Ddc9j-Y5.js";import{F as b}from"./CommandsAndQueries-DGdgKo6k.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CEOEebKO.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-CrK54zmw.js";import{T as d}from"./index-jQvVBqaY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Doky9Mkb.js";import"./information-Bj9U_7MQ.js";import"./sys-enter-2-C6mBZBNJ.js";import"./alert-Y2sfMbhe.js";import"./Tag-DSoKri1G.js";import"./index-CNyanKq8.js";import"./index-gPsABUAK.js";import"./Link-BHFGfTB0.js";import"./copy-DwJ7RQvd.js";import"./copy-CRGjVpRv.js";import"./GitHub-Mark-BL2-Zv-6.js";import"./TableOfContent-DrNJuZzj.js";import"./index-CAH0250y.js";import"./index-Dmhochbe.js";import"./index-Cihbk1NA.js";import"./index-BLjU5XqX.js";import"./index-DNCqkTDx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmx-BJlM.js";import"./addCustomCSSWithScoping-DbsNQuuI.js";import"./Select-C61ga_69.js";import"./InvisibleMessage-BwHxjeMJ.js";import"./slim-arrow-down-DFzi0AoL.js";import"./slim-arrow-down-BaJTeNEG.js";import"./ResponsivePopoverCommon.css-hQ9zDC9y.js";import"./ValueStateMessage.css-BaLdzHVw.js";import"./Option-MDNU8gos.js";import"./ListItemBaseTemplate-k46UOCLs.js";import"./ToolbarButton-CkFmFHpf.js";import"./overflow-CluQBSK5.js";import"./ToolbarSpacer-BZeweBfu.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

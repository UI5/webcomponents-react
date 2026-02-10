import{j as o}from"./iframe-DmoM9f-3.js";import{useMDXComponents as h}from"./index-B20arXE0.js";import{A as n}from"./ArgTypesWithNote-NkO930vt.js";import{C as x}from"./ControlsWithNote-r_kaA0NY.js";import{D as j}from"./DocsHeader-a_YCyG36.js";import{F as b}from"./CommandsAndQueries-D46yw8vq.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BpV1oLoN.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-CLxs5ApO.js";import{T as d}from"./index-BJuUU2oe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLNEyCKE.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./Tag-C5kFbKbl.js";import"./index-D10NIdcs.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./copy-47AFjMvF.js";import"./copy-CLLjPrKq.js";import"./GitHub-Mark-DhrdlfJG.js";import"./TableOfContent-DpBIb8tu.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./Select-CuAVIuQe.js";import"./InvisibleMessage-DxxG7hrg.js";import"./slim-arrow-down-CR7ZcCgm.js";import"./slim-arrow-down-D9YsUWAc.js";import"./ResponsivePopoverCommon.css-CYbIQSV_.js";import"./ValueStateMessage.css-Bt2Hz2Bm.js";import"./Option-Bl_cRkCF.js";import"./ListItemBaseTemplate-CnPU8rrX.js";import"./ToolbarButton-C_TN9Xj8.js";import"./overflow-BQatF6mL.js";import"./ToolbarSpacer-DT0LnLPi.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

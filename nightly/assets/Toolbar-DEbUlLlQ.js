import{j as o}from"./iframe-CajBfwIr.js";import{useMDXComponents as f}from"./index-C7bmLKAS.js";import{A as t}from"./ArgTypesWithNote-G6ZtkJR9.js";import{C as x}from"./ControlsWithNote-kIW7NW5u.js";import{D as j}from"./DocsHeader-BW7Ao0Ba.js";import{F as b}from"./CommandsAndQueries-BsF9_wDx.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DZo8LX6f.js";import{C as n,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DSVPDx9V.js";import{T as d}from"./index-BFru4b2O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-EXDQ2t-0.js";import"./information-CcxBY03f.js";import"./sys-enter-2-tMwqxxGo.js";import"./alert-BiYc5KCB.js";import"./Tag-BvqWkn4s.js";import"./index-Bn2EsG13.js";import"./index-sgQ15IT-.js";import"./Link-CQWL02fV.js";import"./copy-CVnUuOuT.js";import"./copy-n5aHnb96.js";import"./GitHub-Mark-Be69ms0M.js";import"./TableOfContent-DoaHZ2fF.js";import"./index-CBQApe_5.js";import"./index-els7k0UY.js";import"./index-Dqx8EP_w.js";import"./index-BAV33GIB.js";import"./index-BRmuq6Qh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vf8J9lvz.js";import"./addCustomCSSWithScoping-DTh894zV.js";import"./Select-BZ8C6uzA.js";import"./InvisibleMessage-DpVgh8EW.js";import"./slim-arrow-down-mNMzuL2_.js";import"./slim-arrow-down-BshNdOqW.js";import"./ResponsivePopoverCommon.css-C3cJZdrp.js";import"./ValueStateMessage.css-CGvtMuKA.js";import"./Option-DahgSlps.js";import"./ListItemBaseTemplate-CBK-GT0A.js";import"./ToolbarButton-Bm_smg6J.js";import"./overflow-2a6MRtGU.js";import"./ToolbarSpacer-CtA6o9Fy.js";function h(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:n}),`
`,o.jsx(j,{of:n,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
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
            e.preventDefault();
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
`,o.jsx(t,{metaOf:n,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(t,{metaOf:n,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(t,{metaOf:n,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(t,{metaOf:n,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t,{metaOf:n,of:m}),`
`,o.jsx(b,{})]})}function lo(r={}){const{wrapper:e}={...f(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(h,{...r})}):h(r)}export{lo as default};

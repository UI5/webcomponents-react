import{j as o}from"./iframe-CSbQr9Kh.js";import{useMDXComponents as h}from"./index-Bm__WzDY.js";import{A as n}from"./ArgTypesWithNote-CstL8bgS.js";import{C as x}from"./ControlsWithNote-DZZmzkQV.js";import{D as j}from"./DocsHeader-B6C0zwaH.js";import{F as b}from"./CommandsAndQueries-BBfDJted.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-TfJF1wSB.js";import{C as r,D as a,O,T as i,a as c,b as l,c as m}from"./Toolbar.stories-Cr2zxpbp.js";import{T as d}from"./index-DwvuRU9m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-cCDc2RK7.js";import"./information-DqQUPKzo.js";import"./sys-enter-2-BXqUXr7U.js";import"./alert-CG5QiRAo.js";import"./Tag-A7CWsIQR.js";import"./index-D2CGZc8Q.js";import"./index-DOzwAkgD.js";import"./Link-Cjj3vJ0R.js";import"./copy-fwkYkRnZ.js";import"./copy-CIEB0M7W.js";import"./GitHub-Mark-Bl3IYQkW.js";import"./TableOfContent-Bh04lbeo.js";import"./index-CqhcpXS6.js";import"./index-HYYwxuYt.js";import"./index-B6cEeVTY.js";import"./index-CnvIjGJy.js";import"./index-BC5Egg9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbQfKOeW.js";import"./addCustomCSSWithScoping-D9vmwUKM.js";import"./Select-CyU6KfcW.js";import"./InvisibleMessage-DEubzVGS.js";import"./slim-arrow-down-D9grr6Uu.js";import"./slim-arrow-down-DxVwfy5r.js";import"./ResponsivePopoverCommon.css-CX_5uYsf.js";import"./ValueStateMessage.css--pnBJkXc.js";import"./Option-SezZz24A.js";import"./ListItemBaseTemplate-DsQq_j4Z.js";import"./ToolbarButton-CX0E7Y-x.js";import"./overflow-BcTF9Ij7.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:a}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:a}),`
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
`,o.jsx(p,{of:i}),`
`,o.jsx(n,{metaOf:r,of:i}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function co(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{co as default};

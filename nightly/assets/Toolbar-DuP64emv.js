import{j as o}from"./iframe-3Rg5Wd99.js";import{useMDXComponents as h}from"./index-BTtluBKc.js";import{A as n}from"./ArgTypesWithNote-BbtZfOUL.js";import{C as x}from"./ControlsWithNote-Dz8xEges.js";import{D as j}from"./DocsHeader-CUJOwKVj.js";import{F as b}from"./CommandsAndQueries-4irgK4g8.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DwXr0juD.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DsQptpY6.js";import{T as d}from"./index-Ba3qmtqB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BjGGvrQp.js";import"./information-COV3mgHm.js";import"./sys-enter-2-C-L-yMS4.js";import"./alert-ClJ7IdSm.js";import"./Tag-D-xjyjYI.js";import"./index-BPXqXslV.js";import"./index-LZ61FQm1.js";import"./Link-BMrxlNgv.js";import"./copy-rXlYME4l.js";import"./copy-BR2g9NKm.js";import"./GitHub-Mark-BxT5TXyg.js";import"./TableOfContent-BNZcLDgQ.js";import"./index-BoknKV7T.js";import"./index-BWLi-wcN.js";import"./index-ClS56Mg1.js";import"./index-QO9zmO89.js";import"./index-C9Yy8pBH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-apWy6mIw.js";import"./addCustomCSSWithScoping-mB2SNd7y.js";import"./Select-DK_4ZOyC.js";import"./InvisibleMessage-PSe-IXvc.js";import"./slim-arrow-down-BIyrlIQV.js";import"./slim-arrow-down-DPxeYNIS.js";import"./ResponsivePopoverCommon.css-BnKNuLK_.js";import"./ValueStateMessage.css-D2xuJszB.js";import"./Option-CtvAXvoh.js";import"./ListItemBaseTemplate-CCNKkYk5.js";import"./ToolbarButton-DZlSkda3.js";import"./overflow-BAml9ovY.js";import"./ToolbarSpacer-BOOK95ih.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

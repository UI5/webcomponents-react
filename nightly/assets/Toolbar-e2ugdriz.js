import{j as o}from"./iframe-Btp5V8Z0.js";import{useMDXComponents as h}from"./index-BiuvjkCM.js";import{A as n}from"./ArgTypesWithNote-FuYbaWmz.js";import{C as x}from"./ControlsWithNote-SxhoP9GN.js";import{D as j}from"./DocsHeader-CpoVDOG1.js";import{F as b}from"./CommandsAndQueries-ytOuH94-.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-3iq6MjE7.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-6c6750Dc.js";import{T as d}from"./index-OjAuYI_6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CP5vX4Iw.js";import"./information-D6meyH0P.js";import"./sys-enter-2-DFu1S1AE.js";import"./alert-Ble7Zr5g.js";import"./Tag-BV9BFAPZ.js";import"./index-Byqgf8K2.js";import"./index-dzmgvIYj.js";import"./Link-DrqLISlX.js";import"./copy-bhaIxfjj.js";import"./copy-BjvlOXfT.js";import"./GitHub-Mark-BYtt88Wv.js";import"./TableOfContent-Q8v-GGeS.js";import"./index-MTTfL1A6.js";import"./index-DfXM2ykx.js";import"./index-jYjWydQt.js";import"./index-4wRER8Ea.js";import"./index-cFxIHlDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOasFR1W.js";import"./addCustomCSSWithScoping-BYe08cUl.js";import"./Select-CxUvCZuJ.js";import"./InvisibleMessage-BApXsmDb.js";import"./slim-arrow-down-DVukQiW-.js";import"./slim-arrow-down-j9pUzMGy.js";import"./ResponsivePopoverCommon.css-BQy8rUfs.js";import"./ValueStateMessage.css-LOPut24L.js";import"./Option-DXRWtWSV.js";import"./ListItemBaseTemplate--uvy-kc0.js";import"./ToolbarButton-CudWNhWD.js";import"./overflow-BiX-fPl_.js";import"./ToolbarSpacer-DXot2rxM.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

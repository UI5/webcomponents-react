import{j as o}from"./iframe-vf7s2VGb.js";import{useMDXComponents as h}from"./index-DKJSAVnl.js";import{A as n}from"./ArgTypesWithNote-Cf4abk5p.js";import{C as x}from"./ControlsWithNote-BkwogRCo.js";import{D as j}from"./DocsHeader-CHUqOFdO.js";import{F as b}from"./CommandsAndQueries-DWofsexW.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-B4oFLz5c.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-Dd9abxMw.js";import{T as d}from"./index-DivSs68o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHeHce3N.js";import"./information-9NSJvKF7.js";import"./sys-enter-2-CiXorCdU.js";import"./alert-La4PIswz.js";import"./Tag-P1WqKFay.js";import"./index-Bt_xSHJX.js";import"./index-Edovokrc.js";import"./Link-CPCmvFzf.js";import"./copy-C7B_femg.js";import"./copy-CaZ5zeDJ.js";import"./GitHub-Mark-COPjXt9x.js";import"./TableOfContent-DB8nqPOD.js";import"./index-DxKE5xNM.js";import"./index-BPodtacB.js";import"./index-Dj1d2O3_.js";import"./index-BuDcKrDV.js";import"./index-rjrZsjeS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLGPl5RO.js";import"./addCustomCSSWithScoping-B77_-I85.js";import"./Select-Cz_Z1gqj.js";import"./InvisibleMessage-sUWFyigV.js";import"./slim-arrow-down-B-lEbC2Q.js";import"./slim-arrow-down-Z0YsYWn6.js";import"./ResponsivePopoverCommon.css-MEOrQBt2.js";import"./ValueStateMessage.css-FedWBEIr.js";import"./Option-DqgY0VMS.js";import"./ListItemBaseTemplate-Bf0mYL7i.js";import"./ToolbarButton-B5h3tjWU.js";import"./overflow-DKlbERyk.js";import"./ToolbarSpacer-6a16u5ky.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

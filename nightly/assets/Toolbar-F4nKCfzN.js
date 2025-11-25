import{j as o}from"./iframe-HnZ_h-uU.js";import{useMDXComponents as h}from"./index-BURirfl-.js";import{A as n}from"./ArgTypesWithNote-DoSihvVW.js";import{C as x}from"./ControlsWithNote-B7a3dgFK.js";import{D as j}from"./DocsHeader-BMTYwKRR.js";import{F as b}from"./CommandsAndQueries-TIuZdWtI.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-84IuUUPT.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-U_9IY-Dn.js";import{T as d}from"./index-N49onPtx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_zCHPn3.js";import"./information-DhzyP3Ow.js";import"./sys-enter-2-CmThXCww.js";import"./alert-DNZ33ksz.js";import"./Tag-Dnn5BILw.js";import"./index-Dnf0ia5k.js";import"./index-ChCH3Q4v.js";import"./Link-fOI_Un9H.js";import"./copy-BVSsMmEy.js";import"./copy-CvLuzzlZ.js";import"./GitHub-Mark-21BK48In.js";import"./TableOfContent-BmnBt7yn.js";import"./index-A-RKt-jh.js";import"./index-iyAoRrYN.js";import"./index-Cx7Ty6ev.js";import"./index-DT74FBWM.js";import"./index-D2dUbzgM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5FHIatV.js";import"./addCustomCSSWithScoping-R6q4RVyA.js";import"./Select-DifQlmAi.js";import"./InvisibleMessage-DKXtSvOz.js";import"./slim-arrow-down-CLA3TSxo.js";import"./slim-arrow-down-BgIex6c4.js";import"./ResponsivePopoverCommon.css-Bp0oDzHC.js";import"./ValueStateMessage.css-mxe_cMa3.js";import"./Option-CXj69qWE.js";import"./ListItemBaseTemplate-Crj91yI9.js";import"./ToolbarButton-CZlpADks.js";import"./overflow-Cy2f8egt.js";import"./ToolbarSpacer-Ctq1q8Zg.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

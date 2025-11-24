import{j as o}from"./iframe-xM6TWZ2z.js";import{useMDXComponents as h}from"./index-itFp6RcL.js";import{A as n}from"./ArgTypesWithNote-eEQJhQ_Z.js";import{C as x}from"./ControlsWithNote-DlcUKPFN.js";import{D as j}from"./DocsHeader-DlVky8qu.js";import{F as b}from"./CommandsAndQueries-DU6Rn88_.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CPrCvPPD.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-C7f4Lfv3.js";import{T as d}from"./index-C96pp3UO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-9AHy9ejx.js";import"./information-BKDOtRK0.js";import"./sys-enter-2-CnIu4SDT.js";import"./alert-BSwF_aSo.js";import"./Tag-By3SowoB.js";import"./index-D0vFHCq5.js";import"./index-Dro0XmDs.js";import"./Link-BDcFUJ6P.js";import"./copy-D-ByeIbG.js";import"./copy-uYDkz2OX.js";import"./GitHub-Mark-CzBY0bBM.js";import"./TableOfContent-BLRz9hjD.js";import"./index-AzHYcBiG.js";import"./index-D8_xEbiF.js";import"./index-BDByza4Q.js";import"./index-B3SnxoaH.js";import"./index-Ce3vdOnG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BkjEqAjP.js";import"./addCustomCSSWithScoping-CN9Nv2gA.js";import"./Select-pcxnTQd1.js";import"./InvisibleMessage-oFo1Gh6Z.js";import"./slim-arrow-down-CvRj7da0.js";import"./slim-arrow-down-C_CcIh7F.js";import"./ResponsivePopoverCommon.css-DpRk3tRF.js";import"./ValueStateMessage.css-Br1luTux.js";import"./Option-DqKLKc7N.js";import"./ListItemBaseTemplate-DHW-flPt.js";import"./ToolbarButton-WV967nks.js";import"./overflow--d9baq0j.js";import"./ToolbarSpacer-xgpuUhwj.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

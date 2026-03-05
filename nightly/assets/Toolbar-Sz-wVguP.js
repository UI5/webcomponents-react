import{j as o}from"./iframe-JepDsySv.js";import{useMDXComponents as f}from"./index-BGpK8Gfn.js";import{A as t}from"./ArgTypesWithNote-DSlf2nIS.js";import{C as x}from"./ControlsWithNote-CirU9jF3.js";import{D as j}from"./DocsHeader-DU5w_HiK.js";import{F as b}from"./Footer-DkGRGaaK.js";import"./CommandsAndQueries-BpbXUgFJ.js";import"./PageNotFound-BYj9CuoF.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as i,a as T,D as p}from"./blocks-BbBU6U9u.js";import{C as r,D as s,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DCMwjge7.js";import{T as d}from"./index-WnLiSniC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CgzvULcW.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./Tag-B5HHC3_D.js";import"./index-CIXtBD0J.js";import"./index-Bd6WgbUi.js";import"./Link-BLuv4AbX.js";import"./copy-Bmpb5kaN.js";import"./copy-D2Pke32f.js";import"./GitHub-Mark-CxBZqW50.js";import"./TableOfContent-DzhvbQtx.js";import"./index-8tSJZtFG.js";import"./index-0BxTwmFy.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./Select-BmEwDHzx.js";import"./InvisibleMessage-DglvjQpx.js";import"./slim-arrow-down-DOXlkwy5.js";import"./slim-arrow-down-Dt-7CG4Q.js";import"./ResponsivePopoverCommon.css-BKF0yN8r.js";import"./ValueStateMessage.css-C0leCwz7.js";import"./Option-B-qv-w1U.js";import"./ListItemBaseTemplate-yAH3C8cG.js";import"./ToolbarButton-BFJDT2sU.js";import"./overflow-CCXqCX8C.js";import"./ToolbarSpacer-DoTPaF98.js";function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(i,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:s}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
`,o.jsx(i,{of:O}),`
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
`,o.jsx(t,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(t,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(t,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(t,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function xo(n={}){const{wrapper:e}={...f(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(h,{...n})}):h(n)}export{xo as default};

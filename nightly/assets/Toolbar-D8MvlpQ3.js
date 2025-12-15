import{j as o}from"./iframe-DBAXgyPJ.js";import{useMDXComponents as h}from"./index-DeQCSiR4.js";import{A as n}from"./ArgTypesWithNote-B_yeJVMb.js";import{C as x}from"./ControlsWithNote-Curz6PS1.js";import{D as j}from"./DocsHeader-DXpdkKs2.js";import{F as b}from"./CommandsAndQueries-Cf1MLqXD.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DNEJwZiK.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-BS1wSgg_.js";import{T as d}from"./index-Pili62iX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcpDNXQJ.js";import"./information-DLrkR3Ug.js";import"./sys-enter-2-6buniplq.js";import"./alert-C9HPjUKN.js";import"./Tag-BnY7EcLs.js";import"./index-CYYeCl2u.js";import"./index-DtoZ2Fe-.js";import"./Link-CKvSDmqR.js";import"./copy-DmchAq42.js";import"./copy-Be-lNgbc.js";import"./GitHub-Mark-Dk_x1yR9.js";import"./TableOfContent-C8GiN2RX.js";import"./index-iFpZKkV_.js";import"./index-DBjIxNL0.js";import"./index-Duoz4br-.js";import"./index-DQ_Wvw6H.js";import"./index-BPy_kvjb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlXvTyjP.js";import"./addCustomCSSWithScoping-BR1T3wHP.js";import"./Select-BT7URQFg.js";import"./InvisibleMessage-K9tj7mDD.js";import"./slim-arrow-down-D1JBPt11.js";import"./slim-arrow-down-BHYnj_Rv.js";import"./ResponsivePopoverCommon.css-Dicr_wKa.js";import"./ValueStateMessage.css-xifZGn5p.js";import"./Option-CxVq6N4O.js";import"./ListItemBaseTemplate-DOEQQMA6.js";import"./ToolbarButton-ZUPI0SNH.js";import"./overflow-BGQFGKxY.js";import"./ToolbarSpacer-BVX1r0jM.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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

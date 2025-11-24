import{j as o}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as s}from"./index-CdriUjbp.js";import{M as i,C as m}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import{C as c}from"./ControlsWithNote-BAfS_2Z4.js";import{D as a}from"./DocsHeader-X3VRZZZM.js";import{F as d}from"./CommandsAndQueries-CxvYWHkR.js";import{C as r,D as t}from"./Popover.stories-BURSw_nc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./index-DCyx6v--.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./copy-C301CBEV.js";import"./copy-CFwp5FgG.js";import"./GitHub-Mark-Br86eOTM.js";import"./TableOfContent-DdQVKol7.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";import"./settings-D42fuJuX.js";import"./index-DDWpxtlc.js";import"./index-AlbH3iGp.js";import"./ListItemStandard-vQZi_1g2.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};

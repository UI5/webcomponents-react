import{j as o}from"./iframe-D_OBvCft.js";import{useMDXComponents as s}from"./index-B_S0g7ME.js";import{M as i,C as m}from"./blocks-DYLPI3Ra.js";import"./Tag-DR4TT7Tz.js";import"./index-DHlu5N_c.js";import{C as c}from"./ControlsWithNote-BzrbRfTT.js";import{D as a}from"./DocsHeader-jaxEHnKK.js";import{F as d}from"./CommandsAndQueries-BZ-3zH0-.js";import{C as r,D as t}from"./Popover.stories-puAlEsOU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-PDp2XxR-.js";import"./sys-enter-2-CTjcKc0d.js";import"./alert-BulXizwQ.js";import"./index-Dss8LBVA.js";import"./index-CTJhmHbW.js";import"./Link-ubTR8kdT.js";import"./copy-BqNP98sv.js";import"./copy-DQgNVeWA.js";import"./GitHub-Mark-5XSGLajG.js";import"./TableOfContent-OaCRgHX_.js";import"./index-BKEI8mWg.js";import"./index-S0He3U_1.js";import"./index-CgmBhunw.js";import"./index-CT9F8jkM.js";import"./index-BxzyntYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CYQDt8WV.js";import"./addCustomCSSWithScoping-DGwiZ6Qr.js";import"./settings-z7-rjv9j.js";import"./index-BYrxTP19.js";import"./index-BqnBaVKU.js";import"./ListItemStandard-B_4_wWWa.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

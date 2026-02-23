import{j as o}from"./iframe-ERwSzs3g.js";import{useMDXComponents as s}from"./index-C_Wbk-9f.js";import{M as i,C as m}from"./blocks-CPggC12N.js";import"./Tag-B-CdIpAx.js";import"./index-CaDxd8lJ.js";import{C as c}from"./ControlsWithNote-Bv8JsWe_.js";import{D as a}from"./DocsHeader-Bv58yv9U.js";import{F as d}from"./CommandsAndQueries-Dd3ZB-Zm.js";import{C as r,D as t}from"./Popover.stories-wHTCKT4F.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CHdxYb5g.js";import"./sys-enter-2-CJZeFu0K.js";import"./alert-DqHHhUpv.js";import"./index-BcvsAi-y.js";import"./index-I8Rn_Xtk.js";import"./Link-BEsTVss7.js";import"./copy-CSXF2cyh.js";import"./copy-CudSiVH8.js";import"./GitHub-Mark-Bu8jRQF_.js";import"./TableOfContent-3se_hcJR.js";import"./index-D0Kgz2KY.js";import"./index-CL--3ayL.js";import"./index-RyYuggn2.js";import"./index--5AI5DCY.js";import"./index-CZ9mn71l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxRB-GRE.js";import"./addCustomCSSWithScoping-Clegv1AW.js";import"./settings-CQ_5VNNI.js";import"./index-BrPS-6K1.js";import"./index-Dq6Fu5U-.js";import"./ListItemStandard-Ck-G_e39.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

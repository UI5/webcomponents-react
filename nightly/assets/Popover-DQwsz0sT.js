import{j as o}from"./iframe-BH1OFp8w.js";import{useMDXComponents as s}from"./index-clbF6OIG.js";import{M as i,C as m}from"./blocks-DYnbeidp.js";import"./Tag-21FIv1do.js";import"./index-4Vj58SYs.js";import{C as c}from"./ControlsWithNote-CBxSfk8o.js";import{D as a}from"./DocsHeader-DdrDFEh0.js";import{F as d}from"./CommandsAndQueries-DhtC5bjI.js";import{C as r,D as t}from"./Popover.stories-Wx2OIwqG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-IaTUuI6Q.js";import"./sys-enter-2-CEI4onME.js";import"./alert-BmWcWx5H.js";import"./index-Bi6BF3Uk.js";import"./index-DWfP0uFj.js";import"./Link-CVh0krje.js";import"./copy-BQeYeu5O.js";import"./copy-DLKkxH-i.js";import"./GitHub-Mark-C-QJ7zTT.js";import"./TableOfContent-BsPcIBC0.js";import"./index-85PSu2U7.js";import"./index-C1e9PFDr.js";import"./index-DIrfyEUY.js";import"./index-D4MGenX5.js";import"./index-scCH-mdd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vxfHPu95.js";import"./addCustomCSSWithScoping-CO8v9lg_.js";import"./settings-CLTeFM-0.js";import"./index-yk44xtLD.js";import"./index-Bj3494xK.js";import"./ListItemStandard-DJmcQ_PK.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

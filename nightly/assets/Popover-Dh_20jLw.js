import{j as o}from"./iframe-DNwXmN6w.js";import{useMDXComponents as s}from"./index-Dbs3KJZC.js";import{M as i,C as m}from"./blocks-ClaQShTE.js";import"./Tag-9F78ZQdp.js";import"./index-CYGT2EhP.js";import{C as c}from"./ControlsWithNote-BubmKZw0.js";import{D as a}from"./DocsHeader-B68qGWWI.js";import{F as d}from"./CommandsAndQueries-BAoKQ9N_.js";import{C as r,D as t}from"./Popover.stories-nPqB174b.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BcSrdT-8.js";import"./sys-enter-2-D4ODuMey.js";import"./alert-Dl0J_z1v.js";import"./index-CBh039oE.js";import"./index-B8OlZcJ4.js";import"./Link-C02NJVw1.js";import"./copy-CEU6cvPY.js";import"./copy-EN-_ABXk.js";import"./GitHub-Mark-7ysssstv.js";import"./TableOfContent-BZ8zuPOd.js";import"./index-DuyT38UB.js";import"./index-aVApIanM.js";import"./index-BLy7Rxlq.js";import"./index-nHmWKiTx.js";import"./index-rN24S36o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNrVdT-5.js";import"./addCustomCSSWithScoping-os-Xpktn.js";import"./settings-C20orWJs.js";import"./index-C9vTuVR-.js";import"./index-COFqXK4G.js";import"./ListItemStandard-B8xPVlSO.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

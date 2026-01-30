import{j as o}from"./iframe-DVGWhCAE.js";import{useMDXComponents as s}from"./index-B9xkaSV0.js";import{M as i,C as m}from"./blocks-BJbIBXfd.js";import"./Tag-BSVrbtw1.js";import"./index-8G75QKe0.js";import{C as c}from"./ControlsWithNote-C60QK1TR.js";import{D as a}from"./DocsHeader-DgEUA2RG.js";import{F as d}from"./CommandsAndQueries-dho9FID6.js";import{C as r,D as t}from"./ResponsivePopover.stories-CAxjtjaH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-omXjQTPD.js";import"./sys-enter-2-C04ebACG.js";import"./alert-BHqxLN4g.js";import"./index-BJLS4IRc.js";import"./index-BHsujjCW.js";import"./Link-Dgw-_ZOU.js";import"./copy-CZDbwxXZ.js";import"./copy-BlV96bJM.js";import"./GitHub-Mark-BYCuHz4P.js";import"./TableOfContent-B3yr3fci.js";import"./index-CRrKr04f.js";import"./index-Q2-fVCzE.js";import"./index-Nk5G6RU7.js";import"./index-DGKs15kB.js";import"./index-NT87e1sK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DANVMAHb.js";import"./addCustomCSSWithScoping-5Jg_uRZD.js";import"./index-BMkoMDMN.js";import"./index-B3L4E0qW.js";import"./ListItemStandard-DYsOVdkk.js";import"./settings-XslWUyya.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <ResponsivePopover
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

import{j as o}from"./iframe-ePItFB5B.js";import{useMDXComponents as s}from"./index-DDhKCT3A.js";import{M as i,C as m}from"./blocks-b5KXpU9M.js";import"./Tag-DaF_Qhe4.js";import"./index-BB23O1Ug.js";import{C as c}from"./ControlsWithNote-LW09duU0.js";import{D as a}from"./DocsHeader-6IWtJVXN.js";import{F as d}from"./CommandsAndQueries-Bqqc5zN4.js";import{C as r,D as t}from"./ResponsivePopover.stories-BlXa2N9f.js";import"./preload-helper-PPVm8Dsz.js";import"./information-jDHGU4wN.js";import"./sys-enter-2-CYnnsJKJ.js";import"./alert-CaUEMWJO.js";import"./index-DsBJl3xg.js";import"./index-CHJN7UF8.js";import"./Link-DCRCVgwG.js";import"./copy-DTXwM0mP.js";import"./copy-BDQ8dZSb.js";import"./GitHub-Mark-CDEC3D2m.js";import"./TableOfContent-DejIFgBn.js";import"./index-tHf_ynpH.js";import"./index-BW9_RjV3.js";import"./index-CauWo2vq.js";import"./index-Dot01Rcg.js";import"./index-DwS7NZjH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BZQxW830.js";import"./addCustomCSSWithScoping-DQC1mn0S.js";import"./index-CIqT6e3U.js";import"./index-rRzkNuJB.js";import"./ListItemStandard-DwrIMAc3.js";import"./settings-BcPS-7YZ.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

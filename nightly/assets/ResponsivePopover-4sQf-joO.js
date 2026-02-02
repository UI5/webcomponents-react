import{j as o}from"./iframe-D6FNTQkK.js";import{useMDXComponents as s}from"./index-B6bRqhkI.js";import{M as i,C as m}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import{C as c}from"./ControlsWithNote-CNMsE99D.js";import{D as a}from"./DocsHeader-BE8561TB.js";import{F as d}from"./CommandsAndQueries-BXb9AdOB.js";import{C as r,D as t}from"./ResponsivePopover.stories-BAI83b-2.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./index-C8Bzh-c-.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./copy-B-xyKazw.js";import"./copy-CV5IiNGP.js";import"./GitHub-Mark-BP1lV9_Z.js";import"./TableOfContent-BUkQ1Gls.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./index-Lif6Dilg.js";import"./index-D27T-mws.js";import"./ListItemStandard-khyxx9eu.js";import"./settings-CfB4e9cX.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

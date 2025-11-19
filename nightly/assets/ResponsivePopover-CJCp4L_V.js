import{j as o}from"./iframe-DEt5SpxN.js";import{useMDXComponents as s}from"./index-D4hcUogq.js";import{M as i,C as m}from"./blocks-CbBrNn_2.js";import"./Tag-Btd7K0TJ.js";import"./index-Bn-DAxDV.js";import{C as c}from"./ControlsWithNote-D28njq7s.js";import{D as a}from"./DocsHeader-DV15NahR.js";import{F as d}from"./CommandsAndQueries-BPAKOD0B.js";import{C as r,D as t}from"./ResponsivePopover.stories-BkvPePRr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-W2yufBl5.js";import"./sys-enter-2-QAd8vpRe.js";import"./alert-Bh8lKzJU.js";import"./index-Cgb532fA.js";import"./index-DQCvCv0f.js";import"./Link-QmS19gJn.js";import"./copy-RQ1BA_tV.js";import"./copy-DO8SZxEM.js";import"./GitHub-Mark-CZdaUd7x.js";import"./TableOfContent-D5MMHbP7.js";import"./index-C60Z0fiQ.js";import"./index-BBkT8flo.js";import"./index-Ct7FOHD-.js";import"./index-aE62-2rm.js";import"./index-BgkB1LC-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L-EUKjf-.js";import"./addCustomCSSWithScoping-DWFhiVTm.js";import"./index-D-r2RDzW.js";import"./index-C1JwcYBj.js";import"./ListItemStandard-BTQunUKa.js";import"./settings-Dr7Dz5uy.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

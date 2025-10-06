import{j as o}from"./iframe-BbmPNBZw.js";import{useMDXComponents as s}from"./index-D87-8-cY.js";import{M as i,C as m}from"./blocks-B7C-sP0U.js";import"./Tag-DFYl0ftZ.js";import"./index-fQ6fbGsc.js";import{C as c}from"./ControlsWithNote-D8-T1xFb.js";import{D as a}from"./DocsHeader-CcOnB5U6.js";import{F as d}from"./CommandsAndQueries-C-B3vcHW.js";import{C as r,D as t}from"./Popover.stories-DDCf9Djf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BpKTV1Df.js";import"./sys-enter-2-Cjjs2hNu.js";import"./alert-DEEsEFWu.js";import"./index-CoFaLD2a.js";import"./index-DPh3hFjM.js";import"./Link-CATCrkJf.js";import"./copy-BfGXYHSu.js";import"./copy-BgTszgJK.js";import"./GitHub-Mark-C0DNn0i9.js";import"./TableOfContent-Cit66x7d.js";import"./index-Dqb4-3Ox.js";import"./index-upku0ICQ.js";import"./index-BaS8undN.js";import"./index-DuOlzjbj.js";import"./index-Cj4eX-xQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRGip9L6.js";import"./addCustomCSSWithScoping-DXbMFExg.js";import"./settings-suPn1Nnm.js";import"./index-BYutBOs4.js";import"./index-CZcSTKvj.js";import"./ListItemStandard-DaqjNEkx.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

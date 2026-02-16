import{j as o}from"./iframe-DD3khz8t.js";import{useMDXComponents as s}from"./index-CHFjnrWX.js";import{M as i,C as m}from"./blocks-ibeWpSZJ.js";import"./Tag-Ngk_8fKi.js";import"./index-BQH8_ZBk.js";import{C as c}from"./ControlsWithNote-C2jaHriB.js";import{D as a}from"./DocsHeader-F4PydLU1.js";import{F as d}from"./CommandsAndQueries-DsVeZAZ7.js";import{C as r,D as t}from"./Popover.stories-5HbsQjGh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqXpZV5n.js";import"./sys-enter-2-BQ568DSo.js";import"./alert-CH5Zr4v2.js";import"./index-w-lQea0z.js";import"./index-BHPH6hXB.js";import"./Link-p7O4byri.js";import"./copy-JAKrQCcP.js";import"./copy-BSvcS0vC.js";import"./GitHub-Mark-DebbE9FV.js";import"./TableOfContent-Dp5_jY1c.js";import"./index-DvVzwHKX.js";import"./index-BVYBIT27.js";import"./index-DddTN1yz.js";import"./index-INxWrkzg.js";import"./index-BddI7Cdl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgRC_ctT.js";import"./addCustomCSSWithScoping-BX6ct4xq.js";import"./settings-B1teuJ2R.js";import"./index-B_XYOqNE.js";import"./index-CDwMQpv5.js";import"./ListItemStandard-CcQmaiD_.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

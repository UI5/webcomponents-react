import{j as o}from"./iframe-wbWwESAy.js";import{useMDXComponents as s}from"./index-BOBJYedV.js";import{M as i,C as m}from"./blocks-B5IYlHFD.js";import"./Tag-BH6lPIks.js";import"./index-DQNSAqOh.js";import{C as c}from"./ControlsWithNote-DvhTjaki.js";import{D as a}from"./DocsHeader-bdq5CW6C.js";import{F as d}from"./CommandsAndQueries-C1vl6z57.js";import{C as r,D as t}from"./Popover.stories-DaMKmMD_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DASCm05s.js";import"./sys-enter-2-J3fKP-CE.js";import"./alert-D2qcbVgq.js";import"./index-DrYBsayo.js";import"./index-Cupokltd.js";import"./Link-BN6Q-gzd.js";import"./copy-D8kziahy.js";import"./copy-sux1w53_.js";import"./GitHub-Mark-Id1MRtXm.js";import"./TableOfContent-BwN9rW42.js";import"./index-Buwu-oqJ.js";import"./index-B81NkVkP.js";import"./index-BnSJ99QD.js";import"./index-DcmA7siw.js";import"./index-DqWD-oTo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqytePVm.js";import"./addCustomCSSWithScoping-CplaRZ4g.js";import"./settings-DSjEV05c.js";import"./index-BZtqaS2C.js";import"./index-DgwCbpUf.js";import"./ListItemStandard-BnhmLw4e.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

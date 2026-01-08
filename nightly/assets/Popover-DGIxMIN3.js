import{j as o}from"./iframe-DKMkKoYy.js";import{useMDXComponents as s}from"./index-DwgZfgb7.js";import{M as i,C as m}from"./blocks-Bv7S8SwX.js";import"./Tag-D068unQp.js";import"./index-CzUGd6JN.js";import{C as c}from"./ControlsWithNote-BURMcDeb.js";import{D as a}from"./DocsHeader-CFWa-Kee.js";import{F as d}from"./CommandsAndQueries-BeeR2K5X.js";import{C as r,D as t}from"./Popover.stories-Ca0VhptP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B0KiP948.js";import"./sys-enter-2-CDGYtOhu.js";import"./alert-5Abv9bcB.js";import"./index-D_8I6ySQ.js";import"./index-CRYo79rH.js";import"./Link-CIhe5KM_.js";import"./copy-_aHmZXUM.js";import"./copy-CVTfErei.js";import"./GitHub-Mark-BZEGGxXx.js";import"./TableOfContent-B2JNBj1D.js";import"./index-DcV3QYUz.js";import"./index-CqkyVNU6.js";import"./index-PDOaMfc0.js";import"./index-BPsR0vSK.js";import"./index-L49eAF_T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pWZ_QRmh.js";import"./addCustomCSSWithScoping-C2Y6K5ED.js";import"./settings-C5OEoL5X.js";import"./index-arX-DEe4.js";import"./index-J40sace8.js";import"./ListItemStandard-CIizhTTb.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

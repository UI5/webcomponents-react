import{j as o}from"./iframe-3Rg5Wd99.js";import{useMDXComponents as s}from"./index-BTtluBKc.js";import{M as i,C as m}from"./blocks-DwXr0juD.js";import"./Tag-D-xjyjYI.js";import"./index-BjGGvrQp.js";import{C as c}from"./ControlsWithNote-Dz8xEges.js";import{D as a}from"./DocsHeader-CUJOwKVj.js";import{F as d}from"./CommandsAndQueries-4irgK4g8.js";import{C as r,D as t}from"./Popover.stories-07ck_RUI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-COV3mgHm.js";import"./sys-enter-2-C-L-yMS4.js";import"./alert-ClJ7IdSm.js";import"./index-BPXqXslV.js";import"./index-LZ61FQm1.js";import"./Link-BMrxlNgv.js";import"./copy-rXlYME4l.js";import"./copy-BR2g9NKm.js";import"./GitHub-Mark-BxT5TXyg.js";import"./TableOfContent-BNZcLDgQ.js";import"./index-BoknKV7T.js";import"./index-BWLi-wcN.js";import"./index-ClS56Mg1.js";import"./index-QO9zmO89.js";import"./index-C9Yy8pBH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-apWy6mIw.js";import"./addCustomCSSWithScoping-mB2SNd7y.js";import"./settings-DOb4jD36.js";import"./index-wOoILpmg.js";import"./index-BPKkC6Cq.js";import"./ListItemStandard-Cd6yodnz.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

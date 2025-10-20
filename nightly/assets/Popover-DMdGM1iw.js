import{j as o}from"./iframe-CSbQr9Kh.js";import{useMDXComponents as s}from"./index-Bm__WzDY.js";import{M as i,C as m}from"./blocks-TfJF1wSB.js";import"./Tag-A7CWsIQR.js";import"./index-cCDc2RK7.js";import{C as c}from"./ControlsWithNote-DZZmzkQV.js";import{D as a}from"./DocsHeader-B6C0zwaH.js";import{F as d}from"./CommandsAndQueries-BBfDJted.js";import{C as r,D as t}from"./Popover.stories-BiJdSBS0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqQUPKzo.js";import"./sys-enter-2-BXqUXr7U.js";import"./alert-CG5QiRAo.js";import"./index-D2CGZc8Q.js";import"./index-DOzwAkgD.js";import"./Link-Cjj3vJ0R.js";import"./copy-fwkYkRnZ.js";import"./copy-CIEB0M7W.js";import"./GitHub-Mark-Bl3IYQkW.js";import"./TableOfContent-Bh04lbeo.js";import"./index-CqhcpXS6.js";import"./index-HYYwxuYt.js";import"./index-B6cEeVTY.js";import"./index-CnvIjGJy.js";import"./index-BC5Egg9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbQfKOeW.js";import"./addCustomCSSWithScoping-D9vmwUKM.js";import"./settings-AWsPUNGG.js";import"./index-DJxbqdeK.js";import"./index-CWMloBdV.js";import"./ListItemStandard-Ck6WotIf.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

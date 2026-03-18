import{j as o}from"./iframe-CFWpN4R7.js";import{useMDXComponents as i}from"./index-dB03iz0B.js";import{M as s,C as m}from"./blocks-Aj9mLxPA.js";import"./Tag-B06DXZI6.js";import"./index-BhKFh4UU.js";import{C as c}from"./ControlsWithNote-C70Tw8LD.js";import{D as a}from"./DocsHeader-DGz5p46N.js";import{F as d}from"./Footer-DJewOY_X.js";import"./CommandsAndQueries-CCwXwUid.js";import"./PageNotFound-CLSfRNnq.js";import{C as r,D as t}from"./Popover.stories-CTofywsT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./index-nHUwJst8.js";import"./index-lnQyu4TM.js";import"./Link-RyF9dh8t.js";import"./copy-BFI66KPL.js";import"./copy-DSqUQhHe.js";import"./GitHub-Mark-DdMj_2nh.js";import"./TableOfContent-5EAtsXjY.js";import"./index-B803YP9c.js";import"./index-CeR8RWqv.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-BtBp-qQy.js";import"./index-Gpnmba2H.js";import"./index-DZN-dGo_.js";import"./ListItemStandard-R5Hu6p8-.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...i(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};

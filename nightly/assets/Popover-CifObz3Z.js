import{j as o}from"./iframe-CzTCZe7v.js";import{useMDXComponents as i}from"./index-CDGFt6A1.js";import{M as s,C as m}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import{C as c}from"./ControlsWithNote-CDLlK38r.js";import{D as a}from"./DocsHeader-BMnK1C50.js";import{F as d}from"./Footer-DxyUJb9o.js";import"./CommandsAndQueries-DvEFwabB.js";import"./PageNotFound-BAD2GAcl.js";import{C as r,D as t}from"./Popover.stories-CYZDulIw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./index-CXe4MOnZ.js";import"./index-DIk2IhoZ.js";import"./Link-CZjSyYly.js";import"./copy-CNRutDQV.js";import"./copy-BOjVvS6l.js";import"./GitHub-Mark-BjX2VLOB.js";import"./TableOfContent-Bn2gWDi_.js";import"./index-B7_ymrud.js";import"./index-wip9afZ2.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-CnlAmuLP.js";import"./index-Dbih7k0J.js";import"./index-PnqtoMqU.js";import"./ListItemStandard-CirnuoCn.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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

import{j as o}from"./iframe-CIERqdmv.js";import{useMDXComponents as i}from"./index-DuJS4dN9.js";import{M as s,C as m}from"./blocks-CwsgKOP_.js";import"./Tag-0874imNl.js";import"./index-CMev4Q36.js";import{C as c}from"./ControlsWithNote-CSnduUsc.js";import{D as a}from"./DocsHeader-_r8mBImb.js";import{F as d}from"./Footer-DeuiB6kc.js";import"./CommandsAndQueries-CnFEaRrZ.js";import"./PageNotFound-C7dSWVQh.js";import{C as r,D as t}from"./Popover.stories-CiWj7F_P.js";import"./preload-helper-PPVm8Dsz.js";import"./information-90fB5V4h.js";import"./sys-enter-2-BkL_leH3.js";import"./alert-B9azflx9.js";import"./index-DmgJDP0k.js";import"./index-BEXhXSTj.js";import"./Link-B7T_f79Y.js";import"./copy-ofXuvq9E.js";import"./copy-Dk2sduK9.js";import"./GitHub-Mark-RGHHd1bg.js";import"./TableOfContent-BXcIi_qC.js";import"./index-CJA8M3b4.js";import"./index-CeFrwZtC.js";import"./index-Dub9x5-i.js";import"./index-DQGCwtV8.js";import"./index-C9od4SKd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkSzocmg.js";import"./addCustomCSSWithScoping-B8m6lHZs.js";import"./Illustrations-CMsXyloe.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-CUozKHOg.js";import"./index-DfKuTje3.js";import"./index-DZRTP0Ol.js";import"./ListItemStandard-juxLC4N0.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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

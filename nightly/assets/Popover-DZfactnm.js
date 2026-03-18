import{j as o}from"./iframe-DxjY9BFy.js";import{useMDXComponents as i}from"./index-Bk5eT7re.js";import{M as s,C as m}from"./blocks-CATAEJ_X.js";import"./Tag-DnkuMosg.js";import"./index-B4O__Lt2.js";import{C as c}from"./ControlsWithNote-Bi0XUiG8.js";import{D as a}from"./DocsHeader-GdewomhS.js";import{F as d}from"./Footer-CWL8JIjr.js";import"./CommandsAndQueries-GjRh9gzH.js";import"./PageNotFound-CM4Hmt0N.js";import{C as r,D as t}from"./Popover.stories-rtZ4rQR4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BTY6GktZ.js";import"./sys-enter-2-DcEz2THL.js";import"./alert-CFzS8fE9.js";import"./index-BwDYaeY0.js";import"./index-qULy9Htf.js";import"./Link-B0lBzBIQ.js";import"./copy-MJuo07Gq.js";import"./copy-B5NkvAEv.js";import"./GitHub-Mark-C6lCEuPt.js";import"./TableOfContent-DS5LpAQ6.js";import"./index-CzEttlwi.js";import"./index-DimdoC19.js";import"./index-Cr_g29EW.js";import"./index-ssnDYxvl.js";import"./index-D8DdOlBI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjvVRPhX.js";import"./addCustomCSSWithScoping-C4xqV3rh.js";import"./Illustrations-_-Ip7Vxq.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-DhIcwIe_.js";import"./index-DejqImO7.js";import"./index-D1Ld-CDS.js";import"./ListItemStandard-PNi6yEzS.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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

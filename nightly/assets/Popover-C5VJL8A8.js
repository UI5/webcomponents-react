import{j as o}from"./iframe-C7iTiayp.js";import{useMDXComponents as s}from"./index-CMlBI8kK.js";import{M as i,C as m}from"./blocks-BjGmnX8N.js";import"./Tag-CFZhsv-K.js";import"./index-DWyaFLqZ.js";import{C as c}from"./ControlsWithNote-mHKNeEve.js";import{D as a}from"./DocsHeader-DqxWugD_.js";import{F as d}from"./CommandsAndQueries-Cwf0qDUZ.js";import{C as r,D as t}from"./Popover.stories-I_TR3JUN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BMfuHNkn.js";import"./sys-enter-2-wp3WX8g7.js";import"./alert-D64S_sTf.js";import"./index-BXtbzqKT.js";import"./index-BmPAlSpi.js";import"./Link-D4JNNlPq.js";import"./copy-Vy2CyU9V.js";import"./copy-CkvBTa6Z.js";import"./GitHub-Mark-nN8VoXgW.js";import"./TableOfContent-DJx8cUTO.js";import"./index-Bi4CD_jF.js";import"./index-CepcJiY6.js";import"./index-fBsRTAa2.js";import"./index-3ZnD0cv6.js";import"./index-zxgrwg2w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-khcOq4rr.js";import"./addCustomCSSWithScoping-DLqaogwL.js";import"./settings-BKAeCR2Z.js";import"./index-D-JJzP2u.js";import"./index-D3yVkpzL.js";import"./ListItemStandard-Dd95Np6p.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

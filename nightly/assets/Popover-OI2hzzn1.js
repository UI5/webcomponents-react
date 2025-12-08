import{j as o}from"./iframe-BYgl1e3t.js";import{useMDXComponents as s}from"./index-CQiAxnj4.js";import{M as i,C as m}from"./blocks-DJ2faYOs.js";import"./Tag-WgH8NYoz.js";import"./index-CTjTm5cU.js";import{C as c}from"./ControlsWithNote-89uF0G9c.js";import{D as a}from"./DocsHeader-7ZlR1YRW.js";import{F as d}from"./CommandsAndQueries-C7-dfPl9.js";import{C as r,D as t}from"./Popover.stories-BlSwX7EG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-QMEMgn.js";import"./sys-enter-2-Bd_kwfmJ.js";import"./alert-zegR4G--.js";import"./index-6Qy6VRAh.js";import"./index-BDYs8WoM.js";import"./Link-DcQGtcs6.js";import"./copy-BH9B21fo.js";import"./copy-IUlUEvra.js";import"./GitHub-Mark-C1JldhDX.js";import"./TableOfContent-Bv7gmaQ1.js";import"./index-CoTJrZqp.js";import"./index-DOySy9e2.js";import"./index-B_dT7zj1.js";import"./index-CgZTDeh6.js";import"./index-B7ISCohd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoRR59AB.js";import"./addCustomCSSWithScoping-_jk3dAup.js";import"./settings-B5ioReqo.js";import"./index-DLZVurc2.js";import"./index-8TbROqqH.js";import"./ListItemStandard-DJEaviTe.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

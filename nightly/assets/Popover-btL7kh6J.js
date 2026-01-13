import{j as o}from"./iframe-DjyPEesV.js";import{useMDXComponents as s}from"./index-Pyz_59sj.js";import{M as i,C as m}from"./blocks-BJpyRAuR.js";import"./Tag-BDoCQY53.js";import"./index-R19sOJmE.js";import{C as c}from"./ControlsWithNote-DO2z4iOP.js";import{D as a}from"./DocsHeader-D9MpUlcx.js";import{F as d}from"./CommandsAndQueries-CflBmGXr.js";import{C as r,D as t}from"./Popover.stories-nSulSoXR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DUvIlTxn.js";import"./sys-enter-2-BNMMIV_0.js";import"./alert-BdGD6eLJ.js";import"./index-CGGAhfVP.js";import"./index-JsLIkweC.js";import"./Link-nHS21YG4.js";import"./copy-D7V84yYe.js";import"./copy-E37vjZto.js";import"./GitHub-Mark-DbbCp6aZ.js";import"./TableOfContent-DxJDBDn2.js";import"./index-Ctou3RkN.js";import"./index-D4GABIF8.js";import"./index-DIAyR9_V.js";import"./index-BBJM4hPn.js";import"./index-u05KfZkG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BW1MFNTm.js";import"./addCustomCSSWithScoping-fFr9nqx3.js";import"./settings-DC1EpgcZ.js";import"./index-DuTvknKW.js";import"./index-Kss5k088.js";import"./ListItemStandard-CqBB8H1C.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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

import{j as o}from"./iframe-D8qIAX_f.js";import{useMDXComponents as i}from"./index-DiTh5Uxf.js";import{M as s,C as m}from"./blocks-CdiMt6d7.js";import"./Tag-DNk7gwKS.js";import"./index-CUBI-ScP.js";import{C as c}from"./ControlsWithNote-BQC-xq4A.js";import{D as a}from"./DocsHeader-Bo5dZeF6.js";import{F as d}from"./Footer-CDmCmrx9.js";import"./CommandsAndQueries-KW_TEdhO.js";import"./PageNotFound-DinCfZiZ.js";import{C as r,D as t}from"./Popover.stories-G9SDtwWh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BSkhwjAM.js";import"./sys-enter-2-DXbxqs0w.js";import"./alert-D1bzSBmg.js";import"./index-D_VELT5i.js";import"./index-BWh6tnxq.js";import"./Link-sqVv97Mp.js";import"./copy-CV4ADswS.js";import"./copy-B-3EcH3S.js";import"./GitHub-Mark-CXtbX1p4.js";import"./TableOfContent-Y2XZ-6aA.js";import"./index-CaB62qmL.js";import"./index-isyxk5XI.js";import"./index-BFvnR1Pd.js";import"./index-D5GeJD0z.js";import"./index-DHpssY4F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5egdqPD.js";import"./addCustomCSSWithScoping-Dd8DeQed.js";import"./Illustrations-CZMe32im.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-Co-dt12h.js";import"./index-DW0jnqVx.js";import"./index-Dm1qzLAZ.js";import"./ListItemStandard-DALcwdap.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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

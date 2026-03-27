import{j as o}from"./iframe-DNoxABv1.js";import{useMDXComponents as i}from"./index-DQAMMhq5.js";import{M as s,C as m}from"./blocks-CIhTxD7j.js";import"./Tag-C_8TAHAf.js";import"./index-I7XZadEI.js";import{C as c}from"./ControlsWithNote-CkiiUodH.js";import{D as a}from"./DocsHeader-BCqO4hZN.js";import{F as d}from"./Footer-CRUbKNtZ.js";import"./CommandsAndQueries-DUw_qZ-D.js";import"./PageNotFound-DExHfP7X.js";import{C as r,D as t}from"./Popover.stories-ZdD94740.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./index-Kl-B_MHz.js";import"./index-DAoAOn92.js";import"./Link-4KtEWIlR.js";import"./copy-DWlPDnmg.js";import"./copy-BoMvLlry.js";import"./GitHub-Mark-CIM-w4tw.js";import"./TableOfContent-BxuLiWq8.js";import"./index-B0My9-lL.js";import"./index-BfoP-fai.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-BVsnDJhd.js";import"./index-CrXubLA8.js";import"./index-Bv7nOmmV.js";import"./ListItemStandard-CyfYcvu_.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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

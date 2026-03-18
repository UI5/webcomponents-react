import{j as o}from"./iframe-yI-Wg8Yu.js";import{useMDXComponents as i}from"./index-CxvvrXjD.js";import{M as p,C as m}from"./blocks-HNp4GQzu.js";import"./Tag-Br4lHrdC.js";import"./index-CrEz3lFQ.js";import{C as a}from"./ControlsWithNote-B3XqlkRL.js";import{D as c}from"./DocsHeader-BoRDyxWL.js";import{F as h}from"./Footer-BemjN3C9.js";import"./CommandsAndQueries-DwKUywP6.js";import"./PageNotFound-CBU2IUWB.js";import{C as r,D as s}from"./Toast.stories-QHc58b6m.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BheeN2Jq.js";import"./sys-enter-2-Cz9qa-qG.js";import"./alert-CEw8OaPM.js";import"./index-B7JluNCD.js";import"./index-DzsGzp3s.js";import"./Link-C6y8N-8D.js";import"./copy-CaZOJ66E.js";import"./copy-CzvsuiXE.js";import"./GitHub-Mark-DVoCZ3vP.js";import"./TableOfContent-BbIaZttf.js";import"./index-CVU3jLpA.js";import"./index-Bdq6p_tF.js";import"./index-D8b50e5F.js";import"./index-xjCs2iot.js";import"./index-J93pLR5V.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZnAazyk.js";import"./addCustomCSSWithScoping-BNZ7UTaQ.js";import"./Illustrations-CgcUDXre.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
`,o.jsx(c,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(a,{of:s}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(h,{})]})}function G(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{G as default};

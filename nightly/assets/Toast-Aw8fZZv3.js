import{j as o}from"./iframe-CFFJFWfd.js";import{useMDXComponents as i}from"./index-C3RjxUM6.js";import{M as p,C as m}from"./blocks-DNe1XYus.js";import"./Tag-Dq-_fpcq.js";import"./index-nJISZmsL.js";import{C as a}from"./ControlsWithNote-mcrWbiHr.js";import{D as c}from"./DocsHeader-BlV4Wsq_.js";import{F as h}from"./Footer-DnJjuNkf.js";import"./CommandsAndQueries-F7dXP8Ck.js";import"./PageNotFound-fKWlSVqv.js";import{C as r,D as s}from"./Toast.stories-B5JCN8K5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-WOvhwCn0.js";import"./sys-enter-2-CCYEhAsr.js";import"./alert-DdBL9zU_.js";import"./index-Czxe8PfH.js";import"./index-CQKrmUSc.js";import"./Link-DBWxZpb0.js";import"./copy-BdHXZL_d.js";import"./copy-BWzo1FZ0.js";import"./GitHub-Mark-DHk_4lFg.js";import"./TableOfContent-Dk3B5lEt.js";import"./index-ElIMq8Rj.js";import"./index-IkzBWQiA.js";import"./index-BC7P3Gk3.js";import"./index-B7FuneXO.js";import"./index-CLuk8Jv1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-peyxdL93.js";import"./addCustomCSSWithScoping-VUX5a_xd.js";import"./Illustrations-DDY2i5oH.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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

import{j as t}from"./iframe-DNoxABv1.js";import{useMDXComponents as s}from"./index-DQAMMhq5.js";import{M as d,C as o}from"./blocks-CIhTxD7j.js";import"./Tag-C_8TAHAf.js";import"./index-I7XZadEI.js";import{C as m}from"./ControlsWithNote-CkiiUodH.js";import{D as p}from"./DocsHeader-BCqO4hZN.js";import{F as l}from"./Footer-CRUbKNtZ.js";import"./CommandsAndQueries-DUw_qZ-D.js";import"./PageNotFound-DExHfP7X.js";import{C as i,D as r,W as x}from"./Loader.stories-DipJgSI1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./index-Kl-B_MHz.js";import"./index-DAoAOn92.js";import"./Link-4KtEWIlR.js";import"./copy-DWlPDnmg.js";import"./copy-BoMvLlry.js";import"./GitHub-Mark-CIM-w4tw.js";import"./TableOfContent-BxuLiWq8.js";import"./index-B0My9-lL.js";import"./index-BfoP-fai.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
`,t.jsx(p,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(o,{of:r}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{of:r}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,t.jsx(o,{of:x}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const LoaderComponent = () => {
  const initialText =
    'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
  const [text, setText] = useState(initialText);
  const [loading, setLoading] = useState(false);
  const onHeaderClick = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setText((prev) => (prev === initialText ? 'Updated (⌐■_■)' : initialText));
        setLoading(false);
      }, 5000);
    }
  }, [loading]);
  return (
    <Card
      header={
        <CardHeader
          titleText="Click the header to update the text below."
          interactive
          avatar={<Icon name="activate" />}
          onClick={onHeaderClick}
        />
      }
      style={{ width: '400px' }}
    >
      <FlexBox direction={FlexBoxDirection.Column}>
        {loading && <Loader />}
        <Text style={spacing.sapUiContentPadding}>{text}</Text>
      </FlexBox>
    </Card>
  );
};
`})}),`
`,t.jsx(l,{})]})}function G(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{G as default};

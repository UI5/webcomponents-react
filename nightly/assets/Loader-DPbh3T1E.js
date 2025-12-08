import{j as e}from"./iframe-C7GsLKpM.js";import{useMDXComponents as s}from"./index-fgJud-zp.js";import{M as d,C as o}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import{C as m}from"./ControlsWithNote-DGuGAwo2.js";import{D as p}from"./DocsHeader-C2A8ryh7.js";import{F as l}from"./CommandsAndQueries-zRxhXSXv.js";import{C as i,D as r,W as x}from"./Loader.stories-CHxCZiOf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./index-Bitbggm1.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./copy-CeS9CC6e.js";import"./copy-DEZSjQMA.js";import"./GitHub-Mark-3LNYjKsL.js";import"./TableOfContent-CFUfa1cA.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(p,{of:i}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LoaderComponent = () => {
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
`,e.jsx(l,{})]})}function R(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{R as default};

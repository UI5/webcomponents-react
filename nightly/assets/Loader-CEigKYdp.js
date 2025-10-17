import{j as e}from"./iframe-sx-xxOBR.js";import{useMDXComponents as s}from"./index-BuQKvIRW.js";import{M as d,C as o}from"./blocks-aDd-3g3c.js";import"./Tag-CA4Gam3K.js";import"./index-Dp445doz.js";import{C as m}from"./ControlsWithNote-Dys_kNkz.js";import{D as p}from"./DocsHeader-DBvR3GMa.js";import{F as l}from"./CommandsAndQueries-kGwhyxXS.js";import{C as i,D as r,W as x}from"./Loader.stories-DazsIVHQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C7RaeOmw.js";import"./sys-enter-2-CEfOZp2B.js";import"./alert-DrhbDEmw.js";import"./index-FBk0AP6g.js";import"./index-DWVCty5U.js";import"./Link-Bcw7GIzc.js";import"./copy-B68zP34L.js";import"./copy-XBbKngNP.js";import"./GitHub-Mark-DF9OCdIq.js";import"./TableOfContent-CU3p1ulK.js";import"./index-DWZ78BHI.js";import"./index-C5D1K9-k.js";import"./index-CHQv5ZFl.js";import"./index-CHIAWjx6.js";import"./index-CGT84HkW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-PUGMtL6z.js";import"./addCustomCSSWithScoping-ByQ6RofR.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

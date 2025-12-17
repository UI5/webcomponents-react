import{j as e}from"./iframe-DwrbX4RV.js";import{useMDXComponents as s}from"./index-DEV0fT-3.js";import{M as d,C as o}from"./blocks-D-Cz54eK.js";import"./Tag-CFiS-8RZ.js";import"./index-BQbTf7k-.js";import{C as m}from"./ControlsWithNote-IYpGQfhJ.js";import{D as p}from"./DocsHeader-H0UjwWUc.js";import{F as l}from"./CommandsAndQueries-33-9TCX1.js";import{C as i,D as r,W as x}from"./Loader.stories-CwAVjXYy.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bbk3nBJv.js";import"./sys-enter-2-Dh-lxitt.js";import"./alert-DlEiJnhn.js";import"./index-DLV46EWe.js";import"./index-C2WUwRD4.js";import"./Link-CH3IA-s_.js";import"./copy-DI-MEJNy.js";import"./copy-ZcGBB0nX.js";import"./GitHub-Mark-DjIQbcMx.js";import"./TableOfContent-DnfJnqus.js";import"./index-Zv7LwxZg.js";import"./index-DcjDkGfQ.js";import"./index-DfMLBK8G.js";import"./index-4tQAJTUd.js";import"./index-DafPGyjY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP_TNLDv.js";import"./addCustomCSSWithScoping-BNLxo1iY.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

import{j as e}from"./iframe-BFGaT_FV.js";import{useMDXComponents as s}from"./index-CnhfjtvF.js";import{M as d,C as o}from"./blocks-Dayk-WJV.js";import"./Tag-B8YEukqj.js";import"./index-DAwrSR1M.js";import{C as m}from"./ControlsWithNote-DwpSieUl.js";import{D as p}from"./DocsHeader-q47HZv9b.js";import{F as l}from"./CommandsAndQueries-B8JKM3km.js";import{C as i,D as r,W as x}from"./Loader.stories-CAafKvGT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bz11YhFZ.js";import"./sys-enter-2-BSVZTuif.js";import"./alert-BaGtUWxL.js";import"./index-1UQ-4lhS.js";import"./index-BZnNWwSk.js";import"./Link-BBvAtJ6F.js";import"./copy-Tk-F6pRG.js";import"./copy-AGelM_Ll.js";import"./GitHub-Mark-Dgfv1FLj.js";import"./TableOfContent-CqJuG8DQ.js";import"./index-BvUgbQCZ.js";import"./index-BlQFkuHY.js";import"./index-B9hLr1Bv.js";import"./index-Bf-TRwAv.js";import"./index-CaRZdhen.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYVZjLb4.js";import"./addCustomCSSWithScoping-B8FWovV5.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

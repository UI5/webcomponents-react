import{j as e}from"./iframe-DDMtxVo3.js";import{useMDXComponents as s}from"./index-DJVQNbCr.js";import{M as d,C as o}from"./blocks-CloLtOA5.js";import"./Tag-YMrSkp2O.js";import"./index-DsF6G_NH.js";import{C as m}from"./ControlsWithNote-BTWSyMXk.js";import{D as p}from"./DocsHeader-BIZ9rjwC.js";import{F as l}from"./CommandsAndQueries-GL7iyaCL.js";import{C as i,D as r,W as x}from"./Loader.stories-CHdqroSL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CyNj2j11.js";import"./sys-enter-2-Go-dkBfP.js";import"./alert-jQ4OjDPb.js";import"./index-DtIsK-ZK.js";import"./index-ayjT0mLt.js";import"./Link-D3MGth0a.js";import"./copy-BHzUH3vb.js";import"./copy-BTGdlJRd.js";import"./GitHub-Mark-BOZXbKPz.js";import"./TableOfContent-C7oul5sD.js";import"./index-rp8XBFdR.js";import"./index-BHqqB-9b.js";import"./index-BbSpKNs2.js";import"./index-DIh6sAKH.js";import"./index-BeupWmR_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IIlbXN7B.js";import"./addCustomCSSWithScoping-CwVVs2bm.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

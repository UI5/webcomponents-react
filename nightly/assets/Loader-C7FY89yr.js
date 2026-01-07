import{j as e}from"./iframe-datodc_T.js";import{useMDXComponents as s}from"./index-c_OJYfdv.js";import{M as d,C as o}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import{C as m}from"./ControlsWithNote-robc0igz.js";import{D as p}from"./DocsHeader-CoIEvMOx.js";import{F as l}from"./CommandsAndQueries-9K4be_0B.js";import{C as i,D as r,W as x}from"./Loader.stories-Civ-W4y9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./index-CjE0y9ul.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./copy-CcixpzPp.js";import"./copy-fv_X0Lju.js";import"./GitHub-Mark-DdJzrJIo.js";import"./TableOfContent-C9390aIY.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

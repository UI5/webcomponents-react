import{j as e}from"./iframe-D1Ed_P25.js";import{useMDXComponents as s}from"./index-BFLewEmr.js";import{M as d,C as o}from"./blocks-D0qmmV7H.js";import"./Tag-c5FmtIVB.js";import"./index-CUd6ir2B.js";import{C as m}from"./ControlsWithNote-eCZFyRAL.js";import{D as p}from"./DocsHeader-CDw_ZpQx.js";import{F as l}from"./CommandsAndQueries-DkK8PXt_.js";import{C as i,D as r,W as x}from"./Loader.stories-BbOnI9c9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CLHcsZFK.js";import"./sys-enter-2-uCDsFGT8.js";import"./alert-DcriM5I3.js";import"./index-RMrg5o5S.js";import"./index-BiKUdEyp.js";import"./Link-Bd6EkD5P.js";import"./copy-DjpKLZBZ.js";import"./copy-D1Lui3xc.js";import"./GitHub-Mark-BtJJiJAB.js";import"./TableOfContent-uQiaXp0O.js";import"./index-DyMezxCx.js";import"./index-BiMr4Loi.js";import"./index-F4shrftk.js";import"./index-RNnJdIaH.js";import"./index-ClmEJuF6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJfOjK1K.js";import"./addCustomCSSWithScoping-DIxW6xjd.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

import{j as e}from"./iframe-BwzExPTt.js";import{useMDXComponents as s}from"./index-Bhb-E2jz.js";import{M as d,C as o}from"./blocks-DoJWfB08.js";import"./Tag-6zLQrCPp.js";import"./index-DtZ9fejJ.js";import{C as m}from"./ControlsWithNote-DVJSXWDB.js";import{D as p}from"./DocsHeader-BMPfxLy5.js";import{F as l}from"./CommandsAndQueries-BAktAF7I.js";import{C as i,D as r,W as x}from"./Loader.stories-Cr3vo8qT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-YiJ0QHVh.js";import"./sys-enter-2-C0SOTOu7.js";import"./alert-D_Giis5d.js";import"./index-BFn1YmVY.js";import"./index-C5BRum1i.js";import"./Link-Bms7m456.js";import"./copy-DifwunK3.js";import"./copy-BSdgsQYS.js";import"./GitHub-Mark-2d5y6_NM.js";import"./TableOfContent-DtXVnr4E.js";import"./index-Ct12qQup.js";import"./index-CbkAtpsv.js";import"./index-A3mNxkAq.js";import"./index-Bt-scq3R.js";import"./index-DpOmhYSX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoHCzslt.js";import"./addCustomCSSWithScoping-pwpobhcn.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

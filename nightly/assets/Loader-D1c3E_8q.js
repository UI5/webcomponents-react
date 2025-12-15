import{j as e}from"./iframe-m9jt2Gb4.js";import{useMDXComponents as s}from"./index-RGZEkUe7.js";import{M as d,C as o}from"./blocks-87CpIPmc.js";import"./Tag-CiALl0Be.js";import"./index-COrcBOeY.js";import{C as m}from"./ControlsWithNote-DfWkOMCN.js";import{D as p}from"./DocsHeader-NzDta9sq.js";import{F as l}from"./CommandsAndQueries-edZwg3xm.js";import{C as i,D as r,W as x}from"./Loader.stories-dyrCZuIO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-8ilFG0.js";import"./sys-enter-2-DoymHnQS.js";import"./alert-BEZ6iJPu.js";import"./index-DK4LsWgA.js";import"./index-B5E0DaZi.js";import"./Link-BmbvCigV.js";import"./copy-CoAnf7XZ.js";import"./copy-ym3aYCLk.js";import"./GitHub-Mark-BzfYU4Nc.js";import"./TableOfContent-BrLJGmQ4.js";import"./index-YlQxkFIi.js";import"./index-U8bfBs9H.js";import"./index-BRPp-7oG.js";import"./index-B8eg2o8m.js";import"./index-D_3xpPA0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3bZPHjv.js";import"./addCustomCSSWithScoping-B_aL8aFh.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

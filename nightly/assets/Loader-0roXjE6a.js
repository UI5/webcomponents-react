import{j as e}from"./iframe-BdLp08tI.js";import{useMDXComponents as s}from"./index-L7M025bj.js";import{M as d,C as o}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import{C as m}from"./ControlsWithNote-BfK2jDz_.js";import{D as p}from"./DocsHeader-Bpb7xGNC.js";import{F as l}from"./CommandsAndQueries-A8ohCY01.js";import{C as i,D as r,W as x}from"./Loader.stories-BXNo26M_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./index-DEh5uPtQ.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./copy-DopTx9Hm.js";import"./copy-CAz8pLUN.js";import"./GitHub-Mark-BOGIoyWh.js";import"./TableOfContent-BpoRcaPd.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

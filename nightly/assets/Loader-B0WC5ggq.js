import{j as e}from"./iframe-CtC7gYmF.js";import{useMDXComponents as s}from"./index-Di_URU-1.js";import{M as d,C as o}from"./blocks-mn43RK2l.js";import"./Tag-DL1jc8MZ.js";import"./index-BQgIK84O.js";import{C as m}from"./ControlsWithNote-VDJmcR8g.js";import{D as p}from"./DocsHeader-Bz17cmNN.js";import{F as l}from"./CommandsAndQueries-DJ8rBoed.js";import{C as i,D as r,W as x}from"./Loader.stories-C2Dlhi9E.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./index-B89psySH.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./copy-Bc4RlbqC.js";import"./copy-qYhvVcV8.js";import"./GitHub-Mark-BaXje0NN.js";import"./TableOfContent-FJaxAP6D.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

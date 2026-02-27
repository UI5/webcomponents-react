import{j as e}from"./iframe-DAxVciiO.js";import{useMDXComponents as s}from"./index-h_8BIj8E.js";import{M as d,C as o}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import{C as m}from"./ControlsWithNote-DOHOEzX8.js";import{D as p}from"./DocsHeader-C9iUY6-3.js";import{F as l}from"./CommandsAndQueries-DAf-gTsq.js";import{C as i,D as r,W as x}from"./Loader.stories-QmHvYk62.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./index-x-HMM4OA.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./copy-CusNMk6v.js";import"./copy-DS8F9wTV.js";import"./GitHub-Mark-C48nxFEF.js";import"./TableOfContent-CS4QbVvc.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

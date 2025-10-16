import{j as e}from"./iframe-CXQAdbiu.js";import{useMDXComponents as s}from"./index-B53u5pzW.js";import{M as d,C as o}from"./blocks-CqzuTWcZ.js";import"./Tag-BVaaDNuO.js";import"./index-B7B2Licm.js";import{C as m}from"./ControlsWithNote-CiJ6qJGs.js";import{D as p}from"./DocsHeader-C3UG7KGm.js";import{F as l}from"./CommandsAndQueries-aoDJK_rZ.js";import{C as i,D as r,W as x}from"./Loader.stories-BYthhFK8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ATIM8RIH.js";import"./sys-enter-2-4FUXKSMu.js";import"./alert-DgUa0xxC.js";import"./index-t0QN6j1g.js";import"./index-ULIsdIj2.js";import"./Link-BM2g4e1S.js";import"./copy-B2gThB3h.js";import"./copy-DcVZp789.js";import"./GitHub-Mark-yv6eP1EB.js";import"./TableOfContent-Cd8MlPFk.js";import"./index-529wBAr6.js";import"./index-f6kmMniG.js";import"./index-BdQ3exsp.js";import"./index-DaUVwWua.js";import"./index-BjLlWCaV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cah1_bVk.js";import"./addCustomCSSWithScoping-CF9FJk9W.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

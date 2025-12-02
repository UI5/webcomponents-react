import{j as e}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as s}from"./index-7yLcmjFP.js";import{M as d,C as o}from"./blocks-CBo7THUN.js";import"./Tag-BnlqX_yt.js";import"./index-qq5TSXaV.js";import{C as m}from"./ControlsWithNote-Xba4zRPV.js";import{D as p}from"./DocsHeader-CZJ1s6Cq.js";import{F as l}from"./CommandsAndQueries-B5y1yjIv.js";import{C as i,D as r,W as x}from"./Loader.stories-DGsGY78O.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./index-BCADQjVB.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./copy-DRncM3oG.js";import"./copy-CcXkheL2.js";import"./GitHub-Mark-AuYrpZ4h.js";import"./TableOfContent-CwQN62Px.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

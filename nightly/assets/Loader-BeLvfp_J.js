import{j as e}from"./iframe-gZNO6M5z.js";import{useMDXComponents as s}from"./index-C9S1zRdY.js";import{M as d,C as o}from"./blocks-bGe4ZsEp.js";import"./Tag-B4G2Y0SL.js";import"./index-27nnQHPg.js";import{C as m}from"./ControlsWithNote-BnfP3qpY.js";import{D as p}from"./DocsHeader-qCHWE_r0.js";import{F as l}from"./CommandsAndQueries-B3SYrvAS.js";import{C as i,D as r,W as x}from"./Loader.stories-Bg-i968x.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DLCOf7nz.js";import"./sys-enter-2-BCk8zcst.js";import"./alert-Dzej_rV2.js";import"./index-CDlXZiAa.js";import"./index-CaC9RK_F.js";import"./Link-Vq1QqGjH.js";import"./copy--H7pV52z.js";import"./copy-BVrBwFXj.js";import"./GitHub-Mark-Wnu7OIOt.js";import"./TableOfContent-5--z1odT.js";import"./index-BF59Vd9o.js";import"./index-B0r-mBm2.js";import"./index-DGMrxJej.js";import"./index-Cp6HJT54.js";import"./index-BefwTBAQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CU06ey2h.js";import"./addCustomCSSWithScoping-BZ00kVb8.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

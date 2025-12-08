import{j as e}from"./iframe-D5yYeuyx.js";import{useMDXComponents as s}from"./index-OOr887th.js";import{M as d,C as o}from"./blocks-BwZUgw5J.js";import"./Tag-BZtJl-N7.js";import"./index-DJODyOkI.js";import{C as m}from"./ControlsWithNote-Dhu05JtX.js";import{D as p}from"./DocsHeader-sLoGcPV0.js";import{F as l}from"./CommandsAndQueries-CJKRIq4o.js";import{C as i,D as r,W as x}from"./Loader.stories-CNia_FQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./index-pGOyFusy.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./copy-lqBg0hMZ.js";import"./copy-BbBddowJ.js";import"./GitHub-Mark-BlwYDJaN.js";import"./TableOfContent-CQ1XpZMC.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

import{j as e}from"./iframe-DDMT6HJ_.js";import{useMDXComponents as s}from"./index-BZBPPnAC.js";import{M as d,C as o}from"./blocks-Bodl2L_O.js";import"./Tag-CpA-lkPa.js";import"./index-5dKFa1m8.js";import{C as m}from"./ControlsWithNote-DLxdb_Ww.js";import{D as p}from"./DocsHeader-B2USSIg6.js";import{F as l}from"./CommandsAndQueries-7VHsHP9e.js";import{C as i,D as r,W as x}from"./Loader.stories-agt2RCO9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BaGvLpd9.js";import"./sys-enter-2-CsR_zoUi.js";import"./alert-DZ7RsIcF.js";import"./index-CPxVkHe3.js";import"./index-Cs3p2L6v.js";import"./Link-BjYpH57b.js";import"./copy-UO6Kq0HF.js";import"./copy-BvEBs4Jb.js";import"./GitHub-Mark-SFCr8ZUy.js";import"./TableOfContent-FxoIfemE.js";import"./index-CGAlCx6I.js";import"./index-DBxIJUvm.js";import"./index-CqaPzMqI.js";import"./index-CfXspAeM.js";import"./index-DHW-qiJ5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSpYa4u6.js";import"./addCustomCSSWithScoping-D9ua8UMW.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

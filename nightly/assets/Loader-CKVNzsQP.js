import{j as t}from"./iframe-2x_0PLRY.js";import{useMDXComponents as s}from"./index-C4Rs_8Uq.js";import{M as d,C as o}from"./blocks-DrJbgW55.js";import"./Tag-CYhgI4gb.js";import"./index-C-fDGoUi.js";import{C as m}from"./ControlsWithNote-CB1LCTn_.js";import{D as p}from"./DocsHeader-BY_r8Kwk.js";import{F as l}from"./Footer-C23Ewd88.js";import"./CommandsAndQueries-CvWMTcrY.js";import"./PageNotFound-GiConHCM.js";import{C as i,D as r,W as x}from"./Loader.stories-DseuQaDF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CQy15gwz.js";import"./sys-enter-2-fcqn0uC8.js";import"./alert-DZyPZUjF.js";import"./index-1eyneICk.js";import"./index-Bs9Uk8tv.js";import"./Link-Dg5-mm9g.js";import"./copy-w6aCSiGB.js";import"./copy-DSjSLU2X.js";import"./GitHub-Mark-Dkq8lTsj.js";import"./TableOfContent-CdwxKZEk.js";import"./index-Da9gu6ir.js";import"./index-DdARDxKZ.js";import"./index-CZ7o6xvr.js";import"./index-lA2D-rzF.js";import"./index-B75d9fwz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUHmvjuE.js";import"./addCustomCSSWithScoping-CuKwKJpy.js";import"./Illustrations-GJByOHnh.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
`,t.jsx(p,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(o,{of:r}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{of:r}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,t.jsx(o,{of:x}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const LoaderComponent = () => {
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
`,t.jsx(l,{})]})}function G(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{G as default};

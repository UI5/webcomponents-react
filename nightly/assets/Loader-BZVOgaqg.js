import{j as t}from"./iframe-geaynzT-.js";import{useMDXComponents as s}from"./index-Dy0P-MTk.js";import{M as d,C as o}from"./blocks-DvwiWHqk.js";import"./Tag-B3QRrnQ_.js";import"./index-D-nFJC4E.js";import{C as m}from"./ControlsWithNote-dZmWZicR.js";import{D as p}from"./DocsHeader-C1feTuJ3.js";import{F as l}from"./Footer-BsbiOiC7.js";import"./CommandsAndQueries-B6i0zlBz.js";import"./PageNotFound-BfSR_Vk2.js";import{C as i,D as r,W as x}from"./Loader.stories-DPZCHLrU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BPLaT9Ap.js";import"./sys-enter-2-BM-hyHpl.js";import"./alert-BbpVY6El.js";import"./index-sZJqmiwE.js";import"./index-Bp_EOu-Q.js";import"./Link-nEWS4oVx.js";import"./copy-Mj689c8X.js";import"./copy-ww3KL2rX.js";import"./GitHub-Mark-BG_xGhbo.js";import"./TableOfContent-p5b2KUMj.js";import"./index-_qPK30Mb.js";import"./index-CTwiS7Jw.js";import"./index-D5uUZfuG.js";import"./index-CG-HWMDU.js";import"./index-CKM0CrDr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HivzyS7T.js";import"./addCustomCSSWithScoping-xbUSRjKw.js";import"./Illustrations-Da51eylt.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
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

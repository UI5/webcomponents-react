import{j as t}from"./iframe--9dKe8DB.js";import{useMDXComponents as s}from"./index-KI9hm8HB.js";import{M as d,C as o}from"./blocks-sz1V1YD1.js";import"./Tag-Dx2xRUom.js";import"./index-CPDFIZvY.js";import{C as m}from"./ControlsWithNote-L_Ce3WAS.js";import{D as p}from"./DocsHeader-DmUEuAmh.js";import{F as l}from"./Footer-Q0CQ_qDk.js";import"./CommandsAndQueries-DmMMilME.js";import"./PageNotFound-CuY3r4La.js";import{C as i,D as r,W as x}from"./Loader.stories-Dge1cqFo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./index-FyOsxtAw.js";import"./index-BYfUGIr5.js";import"./Link-BglFcPBB.js";import"./copy-36Frb_So.js";import"./copy-DDHnU-KJ.js";import"./GitHub-Mark-Cn6yJd_r.js";import"./TableOfContent-BY9idK35.js";import"./index-rkrari7y.js";import"./index-W9KwanBR.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
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

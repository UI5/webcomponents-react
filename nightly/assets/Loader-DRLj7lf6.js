import{j as t}from"./iframe-Cg-RuwYg.js";import{useMDXComponents as s}from"./index-CqVZQP5J.js";import{M as d,C as o}from"./blocks-De0pSozH.js";import"./Tag-V3n4GJl9.js";import"./index-BHGbu9W7.js";import{C as m}from"./ControlsWithNote-D20obapr.js";import{D as p}from"./DocsHeader-BmD4JGAv.js";import{F as l}from"./Footer-CTf-mOt6.js";import"./CommandsAndQueries-CCNeSOJY.js";import"./PageNotFound-DwqRWqRN.js";import{C as i,D as r,W as x}from"./Loader.stories-pM-r2Mak.js";import"./preload-helper-PPVm8Dsz.js";import"./information-qBgjFYpj.js";import"./sys-enter-2-DSPEUkAA.js";import"./alert-DJst6O04.js";import"./index-B6oJNk8s.js";import"./index-BxFP3rc9.js";import"./Link-C3bBlraS.js";import"./copy-BDnVOvFT.js";import"./copy-BXGKGRUx.js";import"./GitHub-Mark-qv8abqQW.js";import"./TableOfContent-Da-rTDoa.js";import"./index-CY8SZPoP.js";import"./index-nSwdNT12.js";import"./index-DVELchH2.js";import"./index-YSls2zGx.js";import"./index-DGDw3Svj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgpxYdce.js";import"./addCustomCSSWithScoping-Bd0YAyTr.js";import"./Illustrations-v3WzxnkA.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
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

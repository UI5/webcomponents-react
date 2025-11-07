import{j as e}from"./iframe-DGnDchDQ.js";import{useMDXComponents as s}from"./index-gqhlbnnP.js";import{M as d,C as o}from"./blocks-CpnEbXW7.js";import"./Tag-Bqlxcgw6.js";import"./index-ab40gpM3.js";import{C as m}from"./ControlsWithNote-Bpt7dSeq.js";import{D as p}from"./DocsHeader-Ci4x0-Xn.js";import{F as l}from"./CommandsAndQueries-nFfK_W-O.js";import{C as i,D as r,W as x}from"./Loader.stories-CN2uy0VA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_x76Wro.js";import"./sys-enter-2-C7D1DjDO.js";import"./alert-Bv5R7OxS.js";import"./index-BpzOuhJc.js";import"./index-DBMKQPCi.js";import"./Link-DlCRMPDC.js";import"./copy-7k0MnJvA.js";import"./copy-DiOqbFXx.js";import"./GitHub-Mark-CiCqtIOa.js";import"./TableOfContent-C4IZUZE2.js";import"./index-D8BbDNnv.js";import"./index-C1Lkwl5k.js";import"./index--LdK-cim.js";import"./index-DwBLo3Dd.js";import"./index-CHVAkMFk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKYdG7d4.js";import"./addCustomCSSWithScoping-loT15OrI.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

import{j as e}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as s}from"./index-CdriUjbp.js";import{M as d,C as o}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import{C as m}from"./ControlsWithNote-BAfS_2Z4.js";import{D as p}from"./DocsHeader-X3VRZZZM.js";import{F as l}from"./CommandsAndQueries-CxvYWHkR.js";import{C as i,D as r,W as x}from"./Loader.stories-Dy-cTaPV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./index-DCyx6v--.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./copy-C301CBEV.js";import"./copy-CFwp5FgG.js";import"./GitHub-Mark-Br86eOTM.js";import"./TableOfContent-DdQVKol7.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

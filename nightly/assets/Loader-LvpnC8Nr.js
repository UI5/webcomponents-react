import{j as e}from"./iframe-B13aKv6v.js";import{useMDXComponents as s}from"./index-jGGDFlkx.js";import{M as d,C as o}from"./blocks-BRIltIP5.js";import"./Tag-HMLNjm9Q.js";import"./index-CFkX7Uxi.js";import{C as m}from"./ControlsWithNote-fWXazrnc.js";import{D as p}from"./DocsHeader-eEoaA6b8.js";import{F as l}from"./CommandsAndQueries-7UV00q7g.js";import{C as i,D as r,W as x}from"./Loader.stories-BlL_Hqwd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./index-DGzKTrI0.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./copy-DrFGZKk-.js";import"./copy-Cbp2BA1I.js";import"./GitHub-Mark-Cq8kjn3y.js";import"./TableOfContent-DaHf-bNu.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

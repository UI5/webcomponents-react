import{j as t}from"./iframe-D3LJsbiF.js";import{useMDXComponents as s}from"./index-CyzPa2YT.js";import{M as d,C as o}from"./blocks-C17hS1H0.js";import"./Tag-DEA3QTbc.js";import"./index-DQRzxDSe.js";import{C as m}from"./ControlsWithNote-Daapf7Ph.js";import{D as p}from"./DocsHeader-Df8FJ8t_.js";import{F as l}from"./Footer-BXlDlrd5.js";import"./CommandsAndQueries-ZyWBFV72.js";import"./PageNotFound-BgagSqcc.js";import{C as i,D as r,W as x}from"./Loader.stories-4pg0mi-M.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Pe11Evj5.js";import"./sys-enter-2-nzdqIN1z.js";import"./alert-8s9TsqZs.js";import"./index-CukaHHo2.js";import"./index-GY8piuJS.js";import"./Link-DcTIU4K2.js";import"./copy-Cx1SvDmz.js";import"./copy-CVdXx4M8.js";import"./GitHub-Mark-rXF-W6BJ.js";import"./TableOfContent-VA0eJa1c.js";import"./index-Bs-GzB5h.js";import"./index-Do3YGvBX.js";import"./index-BCAZlXLW.js";import"./index-N6F2Hon5.js";import"./index-CQnpN8bu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CgFvj6Uo.js";import"./addCustomCSSWithScoping-DIPZZBkR.js";import"./Illustrations-DV_KfhEH.js";import"./i18n-defaults-CFWtSmu6.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:i}),`
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

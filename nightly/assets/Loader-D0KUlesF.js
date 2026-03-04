import{j as e}from"./iframe-CLKwUGEX.js";import{useMDXComponents as s}from"./index-DCuwspND.js";import{M as d,C as o}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import{C as m}from"./ControlsWithNote-gpbOfeMG.js";import{D as p}from"./DocsHeader-BOmvn_ug.js";import{F as l}from"./CommandsAndQueries-dz6NHoyr.js";import{C as i,D as r,W as x}from"./Loader.stories-vG1FyG_S.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./index-CuwqMzEM.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./copy-BsKGEA4X.js";import"./copy-BrK10eH_.js";import"./GitHub-Mark-DHhMRLzL.js";import"./TableOfContent-Dt1l8u5g.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

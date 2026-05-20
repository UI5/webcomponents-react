import{i as e}from"./preload-helper-DbRxMUml.js";import{Fm as t}from"./iframe-D0fxCWoY.js";import{J as n,_ as r,d as i,r as a}from"./blocks-BNGZnF8O.js";import{_ as o,o as s,p as c,s as l,t as u}from"./components-CtkZxleO.js";import{Default as d,WithCard as f,n as p,t as m}from"./Loader.stories-pG4kYTwG.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,pre:`pre`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(l,{of:m}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsx)(a,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,_.jsx)(c,{of:d}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h2,{id:`card-with-loader`,children:`Card with Loader`}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`const LoaderComponent = () => {
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
`,(0,_.jsx)(s,{})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),o(),u(),r(),p()}))();export{g as default};
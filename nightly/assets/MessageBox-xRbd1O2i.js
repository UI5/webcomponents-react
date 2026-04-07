import{n as e}from"./chunk-zsgVPwQN.js";import{Wm as t}from"./iframe-DxAaeYcU.js";import{r as n}from"./react-Yq2B7VsJ.js";import{c as r,m as i,s as a,t as o,v as s}from"./components-scz702YZ.js";import{_ as c,d as l,r as u}from"./blocks-BOY4jHT9.js";import{Default as d,WithCustomActions as f,n as p,t as m}from"./MessageBox.stories-DEcl7nBk.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{of:m}),`
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsx)(u,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`opening-and-closing-messageboxes`,children:`Opening and Closing MessageBoxes`}),`
`,(0,_.jsxs)(t.p,{children:[`You can open and close the `,(0,_.jsx)(t.code,{children:`MessageBox`}),` with the `,(0,_.jsx)(t.code,{children:`open`}),` prop.`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Note:`}),` `,(0,_.jsx)(t.code,{children:`onClose`}),` is either called by clicking on one of the action buttons in the footer or by pressing the `,(0,_.jsx)(t.code,{children:`ESC`}),` key.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox open={open} onClose={handleClose}>
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,(0,_.jsx)(t.h2,{id:`accessing-actions-in-the-onclose-callback`,children:`Accessing actions in the onClose callback`}),`
`,(0,_.jsxs)(t.p,{children:[`To add some logic to the respective actions you can use first parameter of the `,(0,_.jsx)(t.code,{children:`onClose`}),` event handler which contains the name of the clicked action.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  // in case the MessageBox was closed by pressing \`ESC\`, \`action\` will be undefined and \`escapedPressed\` will be true.
  const handleClose = (action, escapedPressed) => {
    if (escapedPressed) {
      // escape button was pressed
    } else if (action === MessageBoxAction.OK) {
      // do something on "Ok" button click
    } else if (action === 'Custom Action') {
      // do something on "Custom Action" click
    } else {
      // do something on "Cancel" or "Abort" button click
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox
        open={open}
        onClose={handleClose}
        actions={[MessageBoxAction.OK, 'Custom Action', MessageBoxAction.Cancel, MessageBoxAction.Abort]}
      >
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,(0,_.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h2,{id:`messagebox-with-custom-actions`,children:`MessageBox with custom actions`}),`
`,(0,_.jsx)(u,{of:f}),`
`,(0,_.jsx)(a,{})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),o(),c(),p()}))();export{g as default};
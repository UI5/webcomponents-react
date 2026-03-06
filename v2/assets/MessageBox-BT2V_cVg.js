import{j as n}from"./iframe-BoiPRijN.js";import{useMDXComponents as r}from"./index-BRummw3t.js";import{M as a,C as s}from"./blocks-CPrA8iQB.js";import"./Tag-B1iwkrJ0.js";import"./index-BTDY8alR.js";import{C as l}from"./ControlsWithNote-Bq-Ivohs.js";import{D as p}from"./DocsHeader-Y-HcsUbC.js";import{F as m}from"./Footer-iiNA2dGD.js";import"./CommandsAndQueries-BnJUOm3t.js";import"./PageNotFound-MgXkehwz.js";import{C as t,D as i,W as d}from"./MessageBox.stories-eWxQOoTz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BC9xfD2K.js";import"./sys-enter-2-CswPN__J.js";import"./alert-BvdiGKEq.js";import"./index-dkrwuiwP.js";import"./index-C15uyf0A.js";import"./Link-CFo8_Djp.js";import"./copy-CLUvwY8b.js";import"./copy-Dvt_rD-U.js";import"./GitHub-Mark-DCcVb5dx.js";import"./TableOfContent-B1AorxcV.js";import"./index-XewTnCmy.js";import"./index-BP_Slc-J.js";import"./index-BQY5khtD.js";import"./index-Jd5qJzJh.js";import"./index-DlyFbgdQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpV6XLVk.js";import"./addCustomCSSWithScoping-DTHpZRZB.js";import"./Illustrations-CKlojL9Q.js";import"./i18n-defaults-CFWtSmu6.js";function c(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t}),`
`,n.jsx(p,{of:t}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(s,{of:i}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(l,{of:i}),`
`,n.jsx(e.h2,{id:"opening-and-closing-messageboxes",children:"Opening and Closing MessageBoxes"}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"MessageBox"})," with the ",n.jsx(e.code,{children:"open"})," prop."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," ",n.jsx(e.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",n.jsx(e.code,{children:"ESC"})," key."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
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
`,n.jsx(e.h2,{id:"accessing-actions-in-the-onclose-callback",children:"Accessing actions in the onClose callback"}),`
`,n.jsxs(e.p,{children:["To add some logic to the respective actions you can use first parameter of the ",n.jsx(e.code,{children:"onClose"})," event handler which contains the name of the clicked action."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
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
`,n.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"messagebox-with-custom-actions",children:"MessageBox with custom actions"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(m,{})]})}function z(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{z as default};

import{j as n}from"./iframe-vcfuMEkL.js";import{u as r,M as a,C as s}from"./blocks-CzMAxM7Q.js";import"./Tag-D032LoeK.js";import"./index-D5a6L_9E.js";import{C as l}from"./ControlsWithNote-CJBdoKN4.js";import{D as p}from"./DocsHeader-yII1OsS1.js";import{F as m}from"./Footer-B8luth97.js";import"./CommandsAndQueries-BLcCgFEg.js";import"./PageNotFound-DOCrqF52.js";import{C as t,D as i,W as d}from"./MessageBox.stories-DyJMJhRn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DGdr23sZ.js";import"./sys-enter-2-BtTk1NF5.js";import"./alert-C2W9yseD.js";import"./index-C5MkOTN8.js";import"./index-CY4n9r1V.js";import"./Link-DAzSfgZb.js";import"./copy-BeSz1umZ.js";import"./copy-CTlr8Wzd.js";import"./GitHub-Mark-C71icGMM.js";import"./TableOfContent-DCSvZ8GC.js";import"./index-CPCjGKn0.js";import"./index-BgY_pwT7.js";import"./index-wWex-oQF.js";import"./index-Cbp9ERwo.js";import"./index-BMMtw8na.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7Mkof57M.js";import"./addCustomCSSWithScoping-BGtNyFBv.js";import"./Illustrations-DEQ9OpIe.js";import"./i18n-defaults-CFWtSmu6.js";function c(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t}),`
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
`,n.jsx(m,{})]})}function q(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{q as default};

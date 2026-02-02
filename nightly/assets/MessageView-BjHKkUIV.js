import{j as e}from"./iframe-D9fHiNXF.js";import{useMDXComponents as h}from"./index-DRx499Oz.js";import{A as i}from"./ArgTypesWithNote-Ep_d8urQ.js";import{C as c}from"./ControlsWithNote-_PgGUMw2.js";import{D as p}from"./DocsHeader-fdSKAoIc.js";import{F as x}from"./CommandsAndQueries-CDyFXIce.js";import{M as g,C as o,a as j,D as r}from"./blocks-BHC48FnS.js";import{C as s,D as a,M as u,W as f,a as d}from"./MessageView.stories-C8y9mC8j.js";import{S as w}from"./SubcomponentsSection-BVy4lpQe.js";import{M as l}from"./index-BBpZDlJJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CsAQ2Eng.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./Tag-D1pdGQFQ.js";import"./index-BVc7ik8a.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./copy-ClYjzaDz.js";import"./copy-FG9bHXhV.js";import"./GitHub-Mark-BVG-IHke.js";import"./TableOfContent-BNFLd8cv.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./index-DWP_RQMm.js";import"./slim-arrow-left-CvvWO3rL.js";import"./index-Db0yP6Tz.js";import"./Bar-WAp5-V9P.js";import"./AnimationMode-BW96HzwB.js";import"./InvisibleMessage-sWP7KXqk.js";import"./index-Mf30Azwl.js";import"./index-RwMf0Fu3.js";import"./index-D-dRLaQQ.js";import"./SegmentedButton-Dtg_OeYG.js";function m(t){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:s}),`
`,e.jsx(p,{of:s,subComponents:["MessageItem","MessageViewButton"]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.p,{children:"This component exposes public methods. You can invoke them directly on the instance of the component, e.g. by using React Refs."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Parameters"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"navigateBack"})})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Navigates back to the list view if you are in the details view of a message"})]})})]}),`
`,e.jsx(n.h2,{id:"usage-notes",children:"Usage Notes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"MessageView"})," can be used in several scenarios, but most likely in Dialogs or Popovers."]}),`
`,e.jsxs(n.p,{children:["If used in a Popover it is recommended that the ",e.jsx(n.code,{children:"MessageViewButton"}),` is used as an opener.
The `,e.jsx(n.code,{children:"type"})," of the button should always reflect the highest severity (Error -> Warning -> Success -> Information)."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.code,{children:"MessageView"})," is used in a standalone way, you can set the prop ",e.jsx(n.code,{children:"showDetailsPageHeader"})," to ",e.jsx(n.code,{children:"true"}),`.
This will add a bar to the details page where a back button is contained.`]}),`
`,e.jsxs(n.p,{children:["When used in a ",e.jsx(n.code,{children:"Dialog"})," or a ",e.jsx(n.code,{children:"Popover"}),", we recommend not setting the ",e.jsx(n.code,{children:"showDetailsPageHeader"}),` prop but rather listen
to the `,e.jsx(n.code,{children:"onItemSelect"})," event and add a back button to your Dialog or Popover header and use the ",e.jsx(n.code,{children:"navigateBack()"}),` method
to get back to the list view.`]}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"messageview-in-a-dialog",children:"MessageView in a Dialog"}),`
`,e.jsx(o,{of:u}),`
`,e.jsxs(n.p,{children:["Sample Code: ",e.jsx(n.em,{children:"(Button and Dialog opening are omitted here)"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function MyComponent() {
  const messageViewRef = useRef<MessageViewDomRef>(null);
  const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
  return (
    <Dialog
      resizable
      style={{ width: '500px' }}
      className="modal-without-padding"
      onClose={() => {
        messageViewRef.current.navigateBack();
      }}
      header={
        <Bar
          startContent={
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              {isOnDetailsPage && (
                <Button
                  icon="slim-arrow-left"
                  design={ButtonDesign.Transparent}
                  onClick={() => {
                    setIsOnDetailsPage(false);
                    messageViewRef.current.navigateBack();
                  }}
                  style={{ marginInline: '0 0.5rem' }}
                />
              )}
              <Title level={TitleLevel.H4}>Messages</Title>
            </FlexBox>
          }
        />
      }
    >
      <MessageView
        ref={messageViewRef}
        showDetailsPageHeader={false}
        onItemSelect={() => {
          setIsOnDetailsPage(true);
        }}
      >
        {/* children */}
      </MessageView>
    </Dialog>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"messageview-in-popover-with-messageviewbutton",children:"MessageView in Popover with MessageViewButton"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(j,{children:w}),`
`,e.jsx(n.h2,{id:"messageitem",children:"MessageItem"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(i,{metaOf:s,of:d}),`
`,e.jsx(n.h2,{id:"messageviewbutton",children:"MessageViewButton"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(i,{metaOf:s,of:l}),`
`,e.jsx(x,{})]})}function ae(t={}){const{wrapper:n}={...h(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}export{ae as default};

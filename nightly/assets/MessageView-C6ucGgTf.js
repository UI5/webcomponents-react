import{j as e}from"./iframe-geaynzT-.js";import{useMDXComponents as h}from"./index-Dy0P-MTk.js";import{A as i}from"./ArgTypesWithNote-D3mgv25j.js";import{C as c}from"./ControlsWithNote-dZmWZicR.js";import{D as p}from"./DocsHeader-C1feTuJ3.js";import{F as x}from"./Footer-BsbiOiC7.js";import"./CommandsAndQueries-B6i0zlBz.js";import"./PageNotFound-BfSR_Vk2.js";import{M as g,C as o,a as j,D as r}from"./blocks-DvwiWHqk.js";import{C as s,D as a,M as u,W as f,a as d}from"./MessageView.stories-xL-cYc6O.js";import{S as w}from"./SubcomponentsSection-BVy4lpQe.js";import{M as l}from"./index-BRWw_14P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-nFJC4E.js";import"./information-BPLaT9Ap.js";import"./sys-enter-2-BM-hyHpl.js";import"./alert-BbpVY6El.js";import"./Tag-B3QRrnQ_.js";import"./index-sZJqmiwE.js";import"./index-Bp_EOu-Q.js";import"./Link-nEWS4oVx.js";import"./copy-Mj689c8X.js";import"./copy-ww3KL2rX.js";import"./GitHub-Mark-BG_xGhbo.js";import"./TableOfContent-p5b2KUMj.js";import"./index-_qPK30Mb.js";import"./index-CTwiS7Jw.js";import"./index-D5uUZfuG.js";import"./index-CG-HWMDU.js";import"./index-CKM0CrDr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HivzyS7T.js";import"./addCustomCSSWithScoping-xbUSRjKw.js";import"./Illustrations-Da51eylt.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-BY9yrlLW.js";import"./slim-arrow-left-CSnitg4h.js";import"./index-CdrHE9mG.js";import"./Bar-DGXF_wcM.js";import"./AnimationMode-C7agwqmM.js";import"./InvisibleMessage-CbKTPW6d.js";import"./index-BYmoNn4O.js";import"./index-BUihAu6F.js";import"./index-DPfU6hxd.js";import"./SegmentedButton-CiK9dfWD.js";function m(t){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:s}),`
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
`,e.jsx(x,{})]})}function he(t={}){const{wrapper:n}={...h(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}export{he as default};

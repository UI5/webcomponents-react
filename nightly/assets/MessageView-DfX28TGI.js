import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,X as n,Z as r,lh as i,q as a}from"./iframe-wp6pPX7r.js";import{J as o,_ as s,d as c,o as l,r as u,u as d}from"./blocks-BZSBNRJz.js";import{E as f,S as p,b as m,f as h,t as g,u as _}from"./components-CR9yA683.js";import{n as v,t as y}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as b,MessageViewInDialog as x,WithMessageViewButton as S,n as C,t as w}from"./MessageView.stories-Cr5RNcMy.js";function T(e){let r={code:`code`,em:`em`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...o(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(c,{of:w}),`
`,(0,D.jsx)(h,{of:w,subComponents:[`MessageItem`,`MessageViewButton`]}),`
`,(0,D.jsx)(r.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(u,{of:b}),`
`,(0,D.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(m,{of:b}),`
`,(0,D.jsx)(r.h2,{id:`methods`,children:`Methods`}),`
`,(0,D.jsx)(r.p,{children:`This component exposes public methods. You can invoke them directly on the instance of the component, e.g. by using React Refs.`}),`
`,(0,D.jsxs)(r.table,{children:[(0,D.jsx)(r.thead,{children:(0,D.jsxs)(r.tr,{children:[(0,D.jsx)(r.th,{children:`Name`}),(0,D.jsx)(r.th,{children:`Parameters`}),(0,D.jsx)(r.th,{children:`Description`})]})}),(0,D.jsx)(r.tbody,{children:(0,D.jsxs)(r.tr,{children:[(0,D.jsx)(r.td,{children:(0,D.jsx)(r.strong,{children:(0,D.jsx)(r.code,{children:`navigateBack`})})}),(0,D.jsx)(r.td,{children:`—`}),(0,D.jsx)(r.td,{children:`Navigates back to the list view if you are in the details view of a message`})]})})]}),`
`,(0,D.jsx)(r.h2,{id:`usage-notes`,children:`Usage Notes`}),`
`,(0,D.jsxs)(r.p,{children:[`The `,(0,D.jsx)(r.code,{children:`MessageView`}),` can be used in several scenarios, but most likely in Dialogs or Popovers.`]}),`
`,(0,D.jsxs)(r.p,{children:[`If used in a Popover it is recommended that the `,(0,D.jsx)(r.code,{children:`MessageViewButton`}),` is used as an opener.
The `,(0,D.jsx)(r.code,{children:`type`}),` of the button should always reflect the highest severity (Error -> Warning -> Success -> Information).`]}),`
`,(0,D.jsxs)(r.p,{children:[`If the `,(0,D.jsx)(r.code,{children:`MessageView`}),` is used in a standalone way, you can set the prop `,(0,D.jsx)(r.code,{children:`showDetailsPageHeader`}),` to `,(0,D.jsx)(r.code,{children:`true`}),`.
This will add a bar to the details page where a back button is contained.`]}),`
`,(0,D.jsxs)(r.p,{children:[`When used in a `,(0,D.jsx)(r.code,{children:`Dialog`}),` or a `,(0,D.jsx)(r.code,{children:`Popover`}),`, we recommend not setting the `,(0,D.jsx)(r.code,{children:`showDetailsPageHeader`}),` prop but rather listen
to the `,(0,D.jsx)(r.code,{children:`onItemSelect`}),` event and add a back button to your Dialog or Popover header and use the `,(0,D.jsx)(r.code,{children:`navigateBack()`}),` method
to get back to the list view.`]}),`
`,(0,D.jsx)(r.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,D.jsx)(r.h3,{id:`messageview-in-a-dialog`,children:`MessageView in a Dialog`}),`
`,(0,D.jsx)(u,{of:x}),`
`,(0,D.jsxs)(r.p,{children:[`Sample Code: `,(0,D.jsx)(r.em,{children:`(Button and Dialog opening are omitted here)`})]}),`
`,(0,D.jsx)(r.pre,{children:(0,D.jsx)(r.code,{className:`language-tsx`,children:`function MyComponent() {
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
`,(0,D.jsx)(r.h3,{id:`messageview-in-popover-with-messageviewbutton`,children:`MessageView in Popover with MessageViewButton`}),`
`,(0,D.jsx)(u,{of:S}),`
`,(0,D.jsx)(d,{children:y}),`
`,(0,D.jsx)(r.h2,{id:`messageitem`,children:`MessageItem`}),`
`,(0,D.jsx)(l,{of:n}),`
`,(0,D.jsx)(p,{metaOf:w,of:n}),`
`,(0,D.jsx)(r.h2,{id:`messageviewbutton`,children:`MessageViewButton`}),`
`,(0,D.jsx)(l,{of:t}),`
`,(0,D.jsx)(p,{metaOf:w,of:t}),`
`,(0,D.jsx)(_,{})]})}function E(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=i(),f(),g(),s(),C(),v(),r(),a()}))();export{E as default};
import{n as e}from"./chunk-zsgVPwQN.js";import{B as t,G as n,Jm as r,V as i,W as a}from"./iframe-5WIYwZIN.js";import{r as o}from"./react-4dhd6Ae6.js";import{_ as s,m as c,o as l,p as u,s as d,t as f}from"./components-DmYvmIHz.js";import{_ as p,d as m,o as h,r as g,u as _}from"./blocks-AxxJqEf6.js";import{n as v,t as y}from"./SubcomponentsSection-CGnP9R_J.js";import{Default as b,MessageViewInDialog as x,WithMessageViewButton as S,n as C,t as w}from"./MessageView.stories-IlT_ZMuS.js";function T(e){let n={code:`code`,em:`em`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...o(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m,{of:w}),`
`,(0,D.jsx)(d,{of:w,subComponents:[`MessageItem`,`MessageViewButton`]}),`
`,(0,D.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(g,{of:b}),`
`,(0,D.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(u,{of:b}),`
`,(0,D.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,D.jsx)(n.p,{children:`This component exposes public methods. You can invoke them directly on the instance of the component, e.g. by using React Refs.`}),`
`,(0,D.jsxs)(n.table,{children:[(0,D.jsx)(n.thead,{children:(0,D.jsxs)(n.tr,{children:[(0,D.jsx)(n.th,{children:`Name`}),(0,D.jsx)(n.th,{children:`Parameters`}),(0,D.jsx)(n.th,{children:`Description`})]})}),(0,D.jsx)(n.tbody,{children:(0,D.jsxs)(n.tr,{children:[(0,D.jsx)(n.td,{children:(0,D.jsx)(n.strong,{children:(0,D.jsx)(n.code,{children:`navigateBack`})})}),(0,D.jsx)(n.td,{children:`—`}),(0,D.jsx)(n.td,{children:`Navigates back to the list view if you are in the details view of a message`})]})})]}),`
`,(0,D.jsx)(n.h2,{id:`usage-notes`,children:`Usage Notes`}),`
`,(0,D.jsxs)(n.p,{children:[`The `,(0,D.jsx)(n.code,{children:`MessageView`}),` can be used in several scenarios, but most likely in Dialogs or Popovers.`]}),`
`,(0,D.jsxs)(n.p,{children:[`If used in a Popover it is recommended that the `,(0,D.jsx)(n.code,{children:`MessageViewButton`}),` is used as an opener.
The `,(0,D.jsx)(n.code,{children:`type`}),` of the button should always reflect the highest severity (Error -> Warning -> Success -> Information).`]}),`
`,(0,D.jsxs)(n.p,{children:[`If the `,(0,D.jsx)(n.code,{children:`MessageView`}),` is used in a standalone way, you can set the prop `,(0,D.jsx)(n.code,{children:`showDetailsPageHeader`}),` to `,(0,D.jsx)(n.code,{children:`true`}),`.
This will add a bar to the details page where a back button is contained.`]}),`
`,(0,D.jsxs)(n.p,{children:[`When used in a `,(0,D.jsx)(n.code,{children:`Dialog`}),` or a `,(0,D.jsx)(n.code,{children:`Popover`}),`, we recommend not setting the `,(0,D.jsx)(n.code,{children:`showDetailsPageHeader`}),` prop but rather listen
to the `,(0,D.jsx)(n.code,{children:`onItemSelect`}),` event and add a back button to your Dialog or Popover header and use the `,(0,D.jsx)(n.code,{children:`navigateBack()`}),` method
to get back to the list view.`]}),`
`,(0,D.jsx)(n.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,D.jsx)(n.h3,{id:`messageview-in-a-dialog`,children:`MessageView in a Dialog`}),`
`,(0,D.jsx)(g,{of:x}),`
`,(0,D.jsxs)(n.p,{children:[`Sample Code: `,(0,D.jsx)(n.em,{children:`(Button and Dialog opening are omitted here)`})]}),`
`,(0,D.jsx)(n.pre,{children:(0,D.jsx)(n.code,{className:`language-tsx`,children:`function MyComponent() {
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
`,(0,D.jsx)(n.h3,{id:`messageview-in-popover-with-messageviewbutton`,children:`MessageView in Popover with MessageViewButton`}),`
`,(0,D.jsx)(g,{of:S}),`
`,(0,D.jsx)(_,{children:y}),`
`,(0,D.jsx)(n.h2,{id:`messageitem`,children:`MessageItem`}),`
`,(0,D.jsx)(h,{of:a}),`
`,(0,D.jsx)(c,{metaOf:w,of:a}),`
`,(0,D.jsx)(n.h2,{id:`messageviewbutton`,children:`MessageViewButton`}),`
`,(0,D.jsx)(h,{of:t}),`
`,(0,D.jsx)(c,{metaOf:w,of:t}),`
`,(0,D.jsx)(l,{})]})}function E(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=r(),s(),f(),p(),C(),v(),n(),i()}))();export{E as default};
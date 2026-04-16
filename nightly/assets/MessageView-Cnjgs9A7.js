import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{_ as n,v as r}from"./src-qBi55Ytp.js";import{n as i,t as a}from"./MessageViewButton-DPFaLmau.js";import{r as o}from"./react-BZibOG70.js";import{_ as s,m as c,o as l,p as u,s as d,t as f}from"./components-sy8-k2gf.js";import{_ as p,d as m,o as h,r as g,u as _}from"./blocks-D9k7TVdi.js";import{n as v,t as y}from"./SubcomponentsSection-BZUidqqR.js";import{Default as b,MessageViewInDialog as x,WithMessageViewButton as S,n as C,t as w}from"./MessageView.stories-CeFyyFoR.js";function T(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...o(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m,{of:w}),`
`,(0,D.jsx)(d,{of:w,subComponents:[`MessageItem`,`MessageViewButton`]}),`
`,(0,D.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(g,{of:b}),`
`,(0,D.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(u,{of:b}),`
`,(0,D.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,D.jsx)(t.p,{children:`This component exposes public methods. You can invoke them directly on the instance of the component, e.g. by using React Refs.`}),`
`,(0,D.jsxs)(t.table,{children:[(0,D.jsx)(t.thead,{children:(0,D.jsxs)(t.tr,{children:[(0,D.jsx)(t.th,{children:`Name`}),(0,D.jsx)(t.th,{children:`Parameters`}),(0,D.jsx)(t.th,{children:`Description`})]})}),(0,D.jsx)(t.tbody,{children:(0,D.jsxs)(t.tr,{children:[(0,D.jsx)(t.td,{children:(0,D.jsx)(t.strong,{children:(0,D.jsx)(t.code,{children:`navigateBack`})})}),(0,D.jsx)(t.td,{children:`—`}),(0,D.jsx)(t.td,{children:`Navigates back to the list view if you are in the details view of a message`})]})})]}),`
`,(0,D.jsx)(t.h2,{id:`usage-notes`,children:`Usage Notes`}),`
`,(0,D.jsxs)(t.p,{children:[`The `,(0,D.jsx)(t.code,{children:`MessageView`}),` can be used in several scenarios, but most likely in Dialogs or Popovers.`]}),`
`,(0,D.jsxs)(t.p,{children:[`If used in a Popover it is recommended that the `,(0,D.jsx)(t.code,{children:`MessageViewButton`}),` is used as an opener.
The `,(0,D.jsx)(t.code,{children:`type`}),` of the button should always reflect the highest severity (Error -> Warning -> Success -> Information).`]}),`
`,(0,D.jsxs)(t.p,{children:[`If the `,(0,D.jsx)(t.code,{children:`MessageView`}),` is used in a standalone way, you can set the prop `,(0,D.jsx)(t.code,{children:`showDetailsPageHeader`}),` to `,(0,D.jsx)(t.code,{children:`true`}),`.
This will add a bar to the details page where a back button is contained.`]}),`
`,(0,D.jsxs)(t.p,{children:[`When used in a `,(0,D.jsx)(t.code,{children:`Dialog`}),` or a `,(0,D.jsx)(t.code,{children:`Popover`}),`, we recommend not setting the `,(0,D.jsx)(t.code,{children:`showDetailsPageHeader`}),` prop but rather listen
to the `,(0,D.jsx)(t.code,{children:`onItemSelect`}),` event and add a back button to your Dialog or Popover header and use the `,(0,D.jsx)(t.code,{children:`navigateBack()`}),` method
to get back to the list view.`]}),`
`,(0,D.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,D.jsx)(t.h3,{id:`messageview-in-a-dialog`,children:`MessageView in a Dialog`}),`
`,(0,D.jsx)(g,{of:x}),`
`,(0,D.jsxs)(t.p,{children:[`Sample Code: `,(0,D.jsx)(t.em,{children:`(Button and Dialog opening are omitted here)`})]}),`
`,(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-tsx`,children:`function MyComponent() {
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
`,(0,D.jsx)(t.h3,{id:`messageview-in-popover-with-messageviewbutton`,children:`MessageView in Popover with MessageViewButton`}),`
`,(0,D.jsx)(g,{of:S}),`
`,(0,D.jsx)(_,{children:y}),`
`,(0,D.jsx)(t.h2,{id:`messageitem`,children:`MessageItem`}),`
`,(0,D.jsx)(h,{of:n}),`
`,(0,D.jsx)(c,{metaOf:w,of:n}),`
`,(0,D.jsx)(t.h2,{id:`messageviewbutton`,children:`MessageViewButton`}),`
`,(0,D.jsx)(h,{of:a}),`
`,(0,D.jsx)(c,{metaOf:w,of:a}),`
`,(0,D.jsx)(l,{})]})}function E(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),s(),f(),p(),C(),v(),r(),i()}))();export{E as default};
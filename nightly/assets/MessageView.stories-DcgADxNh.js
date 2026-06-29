import{a as e,c as t,i as n}from"./preload-helper-B45gAKPr.js";import{t as r}from"./react-CymAsZIc.js";import{l as i,u as a}from"./Button-Dhkwfv5_.js";import{t as o}from"./jsx-runtime-BBQGix-2.js";import{n as s,t as c}from"./Button-Bw2hvkxu.js";import{i as l,r as u}from"./Title-CEKED-nw.js";import{n as d,t as f}from"./ValueState-BxZVFhX3.js";import{n as p,t as m}from"./ResponsivePopover-BfX3NdG4.js";import{r as h,s as g}from"./FlexBoxWrap-D5LV9P_x.js";import{t as _}from"./Text-xQwBbt3q.js";import{n as v,t as y}from"./WrappingType-Ba--fFKx.js";import{n as b,t as x}from"./Title-Dv7LJree.js";import{n as ee,t as S}from"./Bar-ReZQ2ctv.js";import{n as C,t as w}from"./Dialog-Bk_et6iy.js";import{t as T}from"./slim-arrow-left-DqP18gk2.js";import{n as E,t as D}from"./Link-DsGY2dJb.js";import{J as O,K as k,Mt as A,X as j,Y as M,Z as N,d as P,jt as F,q as I,u as L}from"./iframe-kqFNuTGv.js";var R,z,B,V,H,U,W=n((()=>{f(),L(),R=o(),z=(0,R.jsx)(_,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`}),B=e=>e?Array(e).fill(``).map((e,t)=>(0,R.jsx)(j,{titleText:`Information Message`,type:d.Information,groupName:`Group${t}`,children:z},`InformationMessage${t}`)):[],V=e=>e?Array(e).fill(``).map((e,t)=>(0,R.jsx)(j,{titleText:`Warning Message`,type:d.Critical,groupName:`Group${t}`,children:z},`WarningMessage${t}`)):[],H=e=>e?Array(e).fill(``).map((e,t)=>(0,R.jsx)(j,{titleText:`Error Message`,type:d.Negative,groupName:`Group${t}`,children:z},`ErrorMessage${t}`)):[],U=e=>[...B(e.information),...V(e.warning),...H(e.error)]})),G=e({Default:()=>Y,MessageViewInDialog:()=>X,WithMessageViewButton:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),K,q,J,Y,X,Z,Q,$=n((()=>{W(),a(),l(),v(),f(),T(),K=t(r(),1),P(),ee(),s(),C(),E(),p(),b(),A(),N(),I(),M(),q=o(),J={title:`User Feedback / MessageView`,component:O,argTypes:{showDetailsPageHeader:{description:`Defines whether the header of the details page will be shown.`},groupItems:{description:`Defines whether the messages are grouped or not.`},onItemSelect:{description:`Event is fired when the details of a message are shown.`,action:`onItemSelect`},children:{description:`A list with message items. If only one item is provided, the initial page will be the details page for the item.


**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,control:{disable:!0}}},args:{showDetailsPageHeader:!0,groupItems:!1,children:[(0,q.jsx)(j,{titleText:`Error Message Type (1)`,subtitleText:`Some bad error occurred`,type:d.Negative,counter:1,groupName:`Products`,children:`First Error Message Description.`},1),(0,q.jsx)(j,{titleText:`Warning Message Type`,subtitleText:`Warning without details`,type:d.Critical,counter:3},3),(0,q.jsx)(j,{titleText:"Long Empty Message Type (no title, no subtitle, no children/details) - The details view is only available if the `titleText` is not fully visible. It is NOT recommended to use long titles!",groupName:`Products`},4),(0,q.jsx)(j,{titleText:`Information Message Type without subtitle`,type:d.Information,groupName:`Products`},5),(0,q.jsx)(j,{titleText:`None Message Type`,subtitleText:`Value State None will be handled as Information`,type:d.None,groupName:`Employees`,children:`Informative message`},6),(0,q.jsx)(j,{titleText:`Error Message Type (2)`,type:d.Negative,counter:3},7),(0,q.jsx)(j,{titleText:(0,q.jsx)(D,{wrappingType:y.None,onClick:e=>{e.stopPropagation()},children:'Long Error Message Type without children/details including a Link as `titleText` which has wrappingType="None" applied. - The details view is only available if the `titleText` is not fully visible. It is NOT recommended to use long titles!'}),type:d.Negative,counter:3},8)]},tags:[`package:@ui5/webcomponents-react`]},Y={},X={name:`MessageView in Dialog`,render(e){let[t,n]=(0,K.useState)(!1),r=(0,K.useRef)(null),[a,o]=(0,K.useState)(!1);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(c,{onClick:()=>{n(!0)},children:`Open Dialog`}),(0,q.jsx)(w,{resizable:!0,style:{width:`500px`},className:`contentPartNoPadding headerPartNoPadding`,open:t,onClose:()=>{n(!1),r.current.navigateBack()},header:(0,q.jsx)(S,{startContent:(0,q.jsxs)(F,{alignItems:g.Center,children:[a&&(0,q.jsx)(c,{icon:`slim-arrow-left`,design:i.Transparent,onClick:()=>{o(!1),r.current.navigateBack()},style:{marginInline:`0 0.5rem`}}),(0,q.jsx)(x,{level:u.H4,children:`Messages`})]})}),footer:(0,q.jsx)(F,{alignItems:g.Center,justifyContent:h.End,style:{width:`100%`,boxSizing:`border-box`},children:(0,q.jsx)(c,{design:i.Transparent,onClick:()=>{n(!1)},children:`Close`})}),children:(0,q.jsx)(O,{ref:r,...e,showDetailsPageHeader:!1,onItemSelect:()=>{o(!0)}})})]})}},Z={name:`with MessageViewButton & Popover`,render(){let e=(0,K.useRef)(null),t=(0,K.useRef)(null),[n,r]=(0,K.useState)(!1),[a,o]=(0,K.useState)(!1);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(k,{counter:3,type:d.Negative,onClick:t=>{e.current.opener=t.currentTarget,o(!0)}}),(0,q.jsx)(m,{ref:e,open:a,headerText:`Messages`,className:`contentPartNoPadding headerPartNoPadding`,onClose:()=>{t.current.navigateBack(),o(!1)},header:(0,q.jsx)(S,{startContent:(0,q.jsxs)(F,{alignItems:g.Center,children:[n&&(0,q.jsx)(c,{design:i.Transparent,icon:`slim-arrow-left`,onClick:()=>{r(!1),t.current.navigateBack()},style:{marginInline:`0 0.5rem`}}),(0,q.jsx)(x,{level:u.H4,children:`Messages`})]})}),footer:(0,q.jsx)(F,{alignItems:g.Center,justifyContent:h.End,style:{paddingBlock:`0.25rem`,width:`100%`,boxSizing:`border-box`},children:(0,q.jsx)(c,{design:i.Transparent,onClick:()=>{o(!1)},children:`Close`})}),children:(0,q.jsx)(O,{style:{height:`500px`,maxWidth:`600px`},ref:t,showDetailsPageHeader:!1,groupItems:!0,onItemSelect:()=>{r(!0)},children:U({information:2,warning:5,success:3,error:3})})})]})}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'MessageView in Dialog',
  render(args) {
    const [open, setOpen] = useState(false);
    const messageViewRef = useRef<MessageViewDomRef>(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          Open Dialog
        </Button>
        <Dialog resizable style={{
        width: '500px'
      }} className="contentPartNoPadding headerPartNoPadding" open={open} onClose={() => {
        setOpen(false);
        messageViewRef.current.navigateBack();
      }} header={<Bar startContent={<FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {isOnDetailsPage && <Button icon={arrowLeftIcon} design={ButtonDesign.Transparent} onClick={() => {
          setIsOnDetailsPage(false);
          messageViewRef.current.navigateBack();
        }} style={{
          marginInline: '0 0.5rem'
        }} />}
                  <Title level={TitleLevel.H4}>Messages</Title>
                </FlexBox>} />} footer={<FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.End} style={{
        width: '100%',
        boxSizing: 'border-box'
      }}>
              <Button design={ButtonDesign.Transparent} onClick={() => {
          setOpen(false);
        }}>
                Close
              </Button>
            </FlexBox>}>
          <MessageView ref={messageViewRef} {...args} showDetailsPageHeader={false} onItemSelect={() => {
          setIsOnDetailsPage(true);
        }} />
        </Dialog>
      </>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'with MessageViewButton & Popover',
  render() {
    const ref = useRef(null);
    const messageViewRef = useRef<MessageViewDomRef>(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    const [open, setOpen] = useState(false);
    const numberOfItems = {
      information: 2,
      warning: 5,
      success: 3,
      error: 3
    };
    return <>
        <MessageViewButton counter={3} type={ValueState.Negative} onClick={e => {
        ref.current.opener = e.currentTarget;
        setOpen(true);
      }} />
        <ResponsivePopover ref={ref} open={open} headerText="Messages" className="contentPartNoPadding headerPartNoPadding" onClose={() => {
        messageViewRef.current.navigateBack();
        setOpen(false);
      }} header={<Bar startContent={<FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {isOnDetailsPage && <Button design={ButtonDesign.Transparent} icon="slim-arrow-left" onClick={() => {
          setIsOnDetailsPage(false);
          messageViewRef.current.navigateBack();
        }} style={{
          marginInline: '0 0.5rem'
        }} />}
                  <Title level={TitleLevel.H4}>Messages</Title>
                </FlexBox>} />} footer={<FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.End} style={{
        paddingBlock: '0.25rem',
        width: '100%',
        boxSizing: 'border-box'
      }}>
              <Button design={ButtonDesign.Transparent} onClick={() => {
          setOpen(false);
        }}>
                Close
              </Button>
            </FlexBox>}>
          <MessageView style={{
          height: '500px',
          maxWidth: '600px'
        }} ref={messageViewRef} showDetailsPageHeader={false} groupItems onItemSelect={() => {
          setIsOnDetailsPage(true);
        }}>
            {generateMessageItems(numberOfItems)}
          </MessageView>
        </ResponsivePopover>
      </>;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`MessageViewInDialog`,`WithMessageViewButton`]}));$();export{Y as Default,X as MessageViewInDialog,Z as WithMessageViewButton,Q as __namedExportsOrder,J as default,$ as n,G as t};
import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Dn as n,Ho as r,Jm as i,Td as a,Ud as o,Zn as s,_n as c,eu as l,tp as u,u as d,yg as f}from"./iframe-BxkeBIi4.js";import{r as p}from"./react-BprHCJr4.js";import{_ as m,c as h,l as g,o as _,t as v,u as y}from"./components-BmKOFW_b.js";import{_ as b,d as x}from"./blocks-z72YJre6.js";var S,C,w,T,E,D,O,k=e((()=>{S=(e,t)=>{let n=getComputedStyle(e);for(let e=0;e<n.length;e++){let r=n[e];t.style.setProperty(r,n.getPropertyValue(r))}e.tagName===`INPUT`&&w(t),t.style.position=`absolute`,t.style.left=`${e.getBoundingClientRect().left}px`,t.style.top=`${e.getBoundingClientRect().top}px`,C(t),document.body.appendChild(t)},C=e=>{e.style.position=`absolute`,e.style.userSelect=`none`,e.style.pointerEvents=`none`,e.style.zIndex=`-1`,e.style.opacity=`0`},w=e=>{e.style.whiteSpace=`nowrap`,e.style.overflowX=`auto`,e.style.overflowY=`hidden`},T=()=>{let e=document.createElement(`div`);e.id=`ui5-selection-mirror`,e.contentEditable=`true`,document.body.appendChild(e)},E=(e,t)=>{t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft},D=(e,t)=>{let{selectionStart:n,selectionEnd:r}=e,i=e.value.slice(n,e.selectionEnd),a=document.createRange();a.setStart(t.firstChild,r-1),a.setEnd(t.firstChild,r),E(e,t);let o=a.getBoundingClientRect(),s={x:o.x,y:o.y,width:o.width,height:o.height,top:o.top,right:o.right,bottom:o.bottom,left:o.left};return document.body.removeChild(t),{...s,selectedText:i}},O=e=>{let t=e.shadowRoot.querySelector(`textarea`)||e.shadowRoot.querySelector(`input`);document.getElementById(`ui5-selection-mirror`)||T();let n=document.getElementById(`ui5-selection-mirror`);return n.textContent=t.value,t&&S(t,n),D(t,n)}})),A,j,M,N=e((()=>{d(),A=t(f(),1),j=i(),M=(0,A.forwardRef)(({children:e},t)=>(0,j.jsx)(r,{children:(0,j.jsx)(o,{ref:t,style:{padding:`1rem`,position:`relative`},direction:`Column`,children:e})})),M.displayName=`SelectionAssistantContainer`}));function P(){let e=(0,F.useRef)(null),t=(0,F.useRef)(null),[n,r]=(0,F.useState)(!1),[i,o]=(0,F.useState)({}),[s,d]=(0,F.useState)(``),[f,p]=(0,F.useState)(!1),m=(e,t)=>{o({left:`${e.left-t.left+e.width+4}px`,top:`${e.top-t.top}px`}),r(!0)},h=(e,t)=>{o({left:`${e.left-t.left+e.width}px`,top:`${e.top-t.top+e.height}px`}),r(!0)},g=t=>{let n=t.currentTarget,r=O(n),i=n.getBoundingClientRect(),a=e.current?.getBoundingClientRect();a&&(r.bottom>i.bottom||r.right>i.right?m(i,a):h(r,a))},_=t=>{let n=t.currentTarget.getBoundingClientRect(),r=e.current?.getBoundingClientRect();m(n,r)},v=()=>{d(`The selected text equals to: "${document.getSelection().toString()}"`),p(!0)};return(0,I.jsxs)(M,{ref:e,children:[(0,I.jsx)(l,{for:`ai-input`,showColon:!0,children:`Input with Selection Assistant`}),(0,I.jsx)(a,{id:`ai-input`,value:`Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.`,onSelect:g,onMouseDown:()=>{r(!1)},onScroll:()=>{r(!1)},onBlur:e=>{e.relatedTarget!==t.current&&r(!1)}}),(0,I.jsx)(`br`,{}),(0,I.jsx)(l,{for:`ai-native-input`,showColon:!0,children:`Input with native API`}),(0,I.jsx)(a,{id:`ai-native-input`,value:`Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.`,onSelect:_}),n&&(0,I.jsx)(u,{style:{position:`absolute`,zIndex:2,...i},ref:t,icon:`ai`,onClick:v,onBlur:()=>{r(!1)}}),(0,I.jsx)(c,{open:f,onClose:()=>{p(!1)},children:s})]})}var F,I,L=e((()=>{k(),s(),d(),F=t(f(),1),N(),I=i(),P.displayName=`InputSelectionAssistant`}));function R(){let e=(0,z.useRef)(null),t=(0,z.useRef)(null),[r,i]=(0,z.useState)(!1),[a,o]=(0,z.useState)({}),[s,d]=(0,z.useState)(``),[f,p]=(0,z.useState)(!1),m=(e,t)=>{o({left:`${e.left-t.left+e.width+4}px`,top:`${e.top-t.top}px`}),i(!0)},h=(e,t)=>{o({left:`${e.left-t.left+e.width}px`,top:`${e.top-t.top+e.height}px`}),i(!0)},g=t=>{let n=t.currentTarget,r=O(n),i=n.getBoundingClientRect(),a=e.current?.getBoundingClientRect();a&&(r.bottom>i.bottom||r.right>i.right?m(i,a):h(r,a))},_=()=>{d(`The selected text equals to: "${document.getSelection().toString()}"`),p(!0)};return(0,B.jsxs)(M,{ref:e,children:[(0,B.jsx)(l,{for:`ai-textarea`,showColon:!0,children:`TextArea with Selection Assistant`}),(0,B.jsx)(n,{id:`ai-textarea`,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus vehicula blandit. Morbi suscipit nunc a quam ultrices consequat. Phasellus a dapibus est. Praesent leo libero, aliquet et imperdiet et, tincidunt non enim. Aliquam et nibh efficitur libero finibus rutrum in mattis ante. Morbi convallis aliquam leo id sagittis. Morbi tempor tellus ut dictum luctus. Pellentesque viverra quam sapien, et pharetra odio viverra vitae. Vivamus mollis ac purus quis tempus. Curabitur suscipit feugiat ante a iaculis. Aliquam ut metus magna. Praesent quis pharetra tortor, tristique rhoncus ante. Curabitur quis lorem nec ligula venenatis porta. Vivamus consequat, mi tincidunt tempor dapibus, urna ipsum ultricies dolor, sit amet aliquet eros erat vitae metus. Vivamus molestie, arcu id laoreet auctor, tortor urna suscipit ex, in ultricies leo tortor in nulla. In justo neque, hendrerit et neque fermentum, ultrices aliquam enim. Morbi quis urna cursus, varius massa at, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus dolor vitae bibendum bibendum. Curabitur ullamcorper magna sem, in dignissim velit fermentum vel. In vel ipsum tristique, sodales enim ac, tristique tellus. Curabitur eget lectus sapien. Praesent sit amet sagittis diam. Pellentesque quis scelerisque leo. Phasellus a arcu volutpat, ullamcorper risus vel, gravida justo. Nullam blandit turpis ligula, et faucibus dolor venenatis vitae. Donec at odio ut libero imperdiet tristique sed id erat. In sed sapien a ligula porta porta eget in justo. In dictum rhoncus mattis. Pellentesque eu feugiat ante. Phasellus in imperdiet eros. Aliquam eget luctus augue. Vestibulum posuere mattis tincidunt. Pellentesque congue laoreet purus, in commodo dui porttitor vel. Phasellus neque ipsum, tristique eu ornare quis, semper nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus velit lorem, fermentum tristique enim eu, pretium pulvinar justo. Cras vel porttitor nisi. Nam eleifend purus tortor, ac sollicitudin dolor rhoncus nec.`,onSelect:g,style:{width:`80%`,marginBlockEnd:`3rem`},rows:5}),r&&(0,B.jsx)(u,{style:{position:`absolute`,zIndex:2,...a},ref:t,icon:`ai`,onClick:_,onBlur:()=>{i(!1)}}),(0,B.jsx)(c,{open:f,onClose:()=>{p(!1)},children:s})]})}var z,B,V=e((()=>{k(),s(),d(),z=t(f(),1),N(),B=i()}));function H(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...p(),...e.components};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(t.h1,{id:`selection-assistant`,children:`Selection Assistant`}),`
`,(0,W.jsx)(`table`,{style:{width:`550px`},children:(0,W.jsx)(`thead`,{children:(0,W.jsxs)(`tr`,{children:[(0,W.jsx)(`th`,{children:`Usage`}),(0,W.jsx)(`th`,{children:(0,W.jsx)(g,{moduleName:`getElementSelection`,packageName:`@ui5/webcomponents-base/dist/util/SelectionAssistant.js`,defaultImport:!0})})]})})}),`
`,(0,W.jsx)(h,{}),`
`,(0,W.jsx)(x,{title:`SelectionAssistant`,tags:[`experimental`]}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.strong,{children:`Note:`}),` The util is in an experimental state!`]}),`
`,(0,W.jsxs)(t.p,{children:[`These examples demonstrate the usage of `,(0,W.jsx)(t.strong,{children:`SelectionAssistant`}),`, which enhances user interactions by returning the coordinates of the selected text on the select event.
This utility enables developers to create advanced AI-powered scenarios by easily capturing and utilizing the exact coordinates of user-selected text.`]}),`
`,(0,W.jsx)(t.h2,{id:`input-with-selection-assistant`,children:`Input with Selection Assistant`}),`
`,(0,W.jsx)(P,{}),`
`,(0,W.jsxs)(`details`,{children:[(0,W.jsx)(`summary`,{children:(0,W.jsx)(`h3`,{style:{display:`inline`,marginBlockEnd:`1rem`,cursor:`pointer`},children:`Show Code`})}),(0,W.jsx)(t.pre,{children:(0,W.jsx)(t.code,{className:`language-tsx`,children:`
import getElementSelection from '@ui5/webcomponents-base/dist/util/SelectionAssistant.js';
import ai from '@ui5/webcomponents-icons/dist/ai.js';
import type { ButtonDomRef, InputPropTypes } from '@ui5/webcomponents-react';
import { Button, Card, FlexBox, Input, Label, Toast } from '@ui5/webcomponents-react';
import type { CSSProperties, ReactNode } from 'react';
import { forwardRef, useRef, useState } from 'react';

type ElementSelection = ReturnType<typeof getElementSelection>;

export function InputSelectionAssistant() {
  const containerRef = useRef<HTMLDivElement>(null); // Needed to calculate container-relative coordinates
  const buttonRef = useRef<ButtonDomRef>(null);
  const [showBtn, setShowBtn] = useState(false);
  const [btnStyle, setBtnStyle] = useState<CSSProperties>({});
  const [toastText, setToastText] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const repositionButtonAtInput = (inputRect: DOMRect, containerRect: DOMRect) => {
    setBtnStyle({
      // Subtract containerRect to make coordinates relative to the container
      // This subtraction is only needed if the container is not the viewport
      // If positioned relative to body (i.e., viewport), you can use inputRect.left/top directly
      left: \`\${inputRect.left - containerRect.left + inputRect.width + 4}px\`,
      top: \`\${inputRect.top - containerRect.top}px\`,
    });
    setShowBtn(true);
  };

  const repositionButtonAtSelection = (selectionRect: ElementSelection, containerRect: DOMRect) => {
    setBtnStyle({
      // If positioned relative to body (i.e., viewport), you can use selectionRect.left/top directly
      left: \`\${selectionRect.left - containerRect.left + selectionRect.width}px\`,
      top: \`\${selectionRect.top - containerRect.top + selectionRect.height}px\`,
    });
    setShowBtn(true);
  };

  const handleSelect: InputPropTypes['onSelect'] = (e) => {
    const target = e.currentTarget;
    const selectionRect = getElementSelection(target);
    const inputRect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    // If the selected text overflows the visible input, position near full input instead
    if (selectionRect.bottom > inputRect.bottom || selectionRect.right > inputRect.right) {
      repositionButtonAtInput(inputRect, containerRect);
    } else {
      repositionButtonAtSelection(selectionRect, containerRect);
    }
  };

  const handleNativeSelect: InputPropTypes['onSelect'] = (e) => {
    const target = e.currentTarget;
    const inputRect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    repositionButtonAtInput(inputRect, containerRect);
  };

  const handleBtnClick = () => {
    const selectedText = document.getSelection().toString();
    const message = \`The selected text equals to: "\${selectedText}"\`;

    setToastText(message);
    setToastOpen(true);
  };

  return (
    <InputSelectionAssistantContainer ref={containerRef}>
      <Label for="ai-input" showColon>
        Input with Selection Assistant
      </Label>
      <Input
        id="ai-input"
        value="Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut."
        onSelect={handleSelect}
        onMouseDown={() => {
          setShowBtn(false);
        }}
        onScroll={() => {
          setShowBtn(false);
        }}
        onBlur={(e) => {
          if (e.relatedTarget !== buttonRef.current) {
            setShowBtn(false);
          }
        }}
      />
      <br />
      <Label for="ai-native-input" showColon>
        Input with native API
      </Label>
      <Input
        id="ai-native-input"
        value="Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut."
        onSelect={handleNativeSelect}
      />
      {showBtn && (
        <Button
          // This button is positioned absolute inside a relative container
          // If instead it were in \`body\`, containerRect adjustments wouldn't be needed
          style={{ position: 'absolute', zIndex: 2, ...btnStyle }}
          ref={buttonRef}
          icon={ai}
          onClick={handleBtnClick}
          onBlur={() => {
            setShowBtn(false);
          }}
        />
      )}
      <Toast
        open={toastOpen}
        onClose={() => {
          setToastOpen(false);
        }}
      >
        {toastText}
      </Toast>
    </InputSelectionAssistantContainer>
  );
}

InputSelectionAssistant.displayName = 'InputSelectionAssistant';

const InputSelectionAssistantContainer = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => {
  return (
    <Card>
      <FlexBox
        ref={ref}
        style={{
          padding: '1rem',
          position: 'relative', // This makes children (like Button) positioned relative to this FlexBox
        }}
        direction="Column"
      >
        {children}
      </FlexBox>
    </Card>
  );
});

InputSelectionAssistantContainer.displayName = 'InputSelectionAssistantContainer';

`})})]}),`
`,(0,W.jsx)(t.h2,{id:`textarea-with-selection-assistant`,children:`TextArea with Selection Assistant`}),`
`,(0,W.jsx)(R,{}),`
`,(0,W.jsxs)(`details`,{children:[(0,W.jsx)(`summary`,{children:(0,W.jsx)(`h3`,{style:{display:`inline`,marginBlockEnd:`1rem`,cursor:`pointer`},children:`Show Code`})}),(0,W.jsx)(t.pre,{children:(0,W.jsx)(t.code,{className:`language-tsx`,children:`
import getElementSelection from '@ui5/webcomponents-base/dist/util/SelectionAssistant.js';
import ai from '@ui5/webcomponents-icons/dist/ai.js';
import type { ButtonDomRef, TextAreaPropTypes } from '@ui5/webcomponents-react';
import { Button, Card, FlexBox, Label, TextArea, Toast } from '@ui5/webcomponents-react';
import type { CSSProperties, ReactNode } from 'react';
import { forwardRef, useRef, useState } from 'react';

type ElementSelection = ReturnType<typeof getElementSelection>;

export function TextAreaSelectionAssistant() {
  const containerRef = useRef<HTMLDivElement>(null); // Needed to calculate container-relative coordinates
  const buttonRef = useRef<ButtonDomRef>(null);
  const [showBtn, setShowBtn] = useState(false);
  const [btnStyle, setBtnStyle] = useState<CSSProperties>({});
  const [toastText, setToastText] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const repositionButtonAtTextArea = (inputRect: DOMRect, containerRect: DOMRect) => {
    setBtnStyle({
      // Subtract containerRect to make coordinates relative to the container
      // This subtraction is only needed if the container is not the viewport
      // If positioned relative to body (i.e., viewport), you can use inputRect.left/top directly
      left: \`\${inputRect.left - containerRect.left + inputRect.width + 4}px\`,
      top: \`\${inputRect.top - containerRect.top}px\`,
    });
    setShowBtn(true);
  };

  const repositionButtonAtSelection = (selectionRect: ElementSelection, containerRect: DOMRect) => {
    setBtnStyle({
      // If positioned relative to body (i.e., viewport), you can use selectionRect.left/top directly
      left: \`\${selectionRect.left - containerRect.left + selectionRect.width}px\`,
      top: \`\${selectionRect.top - containerRect.top + selectionRect.height}px\`,
    });
    setShowBtn(true);
  };

  const handleSelect: TextAreaPropTypes['onSelect'] = (e) => {
    const target = e.currentTarget;
    const selectionRect = getElementSelection(target);
    const inputRect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    // If the selected text overflows the visible TextArea, position near full TextArea instead
    if (selectionRect.bottom > inputRect.bottom || selectionRect.right > inputRect.right) {
      repositionButtonAtTextArea(inputRect, containerRect);
    } else {
      repositionButtonAtSelection(selectionRect, containerRect);
    }
  };

  const handleBtnClick = () => {
    const selectedText = document.getSelection().toString();
    const message = \`The selected text equals to: "\${selectedText}"\`;

    setToastText(message);
    setToastOpen(true);
  };

  return (
    <SelectionAssistantContainer ref={containerRef}>
      <Label for="ai-textarea" showColon>
        TextArea with Selection Assistant
      </Label>
      <TextArea
        id="ai-textarea"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus vehicula blandit. Morbi suscipit nunc a quam ultrices consequat. Phasellus a dapibus est. Praesent leo libero, aliquet et imperdiet et, tincidunt non enim. Aliquam et nibh efficitur libero finibus rutrum in mattis ante. Morbi convallis aliquam leo id sagittis. Morbi tempor tellus ut dictum luctus. Pellentesque viverra quam sapien, et pharetra odio viverra vitae. Vivamus mollis ac purus quis tempus. Curabitur suscipit feugiat ante a iaculis. Aliquam ut metus magna. Praesent quis pharetra tortor, tristique rhoncus ante. Curabitur quis lorem nec ligula venenatis porta. Vivamus consequat, mi tincidunt tempor dapibus, urna ipsum ultricies dolor, sit amet aliquet eros erat vitae metus. Vivamus molestie, arcu id laoreet auctor, tortor urna suscipit ex, in ultricies leo tortor in nulla. In justo neque, hendrerit et neque fermentum, ultrices aliquam enim. Morbi quis urna cursus, varius massa at, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus dolor vitae bibendum bibendum. Curabitur ullamcorper magna sem, in dignissim velit fermentum vel. In vel ipsum tristique, sodales enim ac, tristique tellus. Curabitur eget lectus sapien. Praesent sit amet sagittis diam. Pellentesque quis scelerisque leo. Phasellus a arcu volutpat, ullamcorper risus vel, gravida justo. Nullam blandit turpis ligula, et faucibus dolor venenatis vitae. Donec at odio ut libero imperdiet tristique sed id erat. In sed sapien a ligula porta porta eget in justo. In dictum rhoncus mattis. Pellentesque eu feugiat ante. Phasellus in imperdiet eros. Aliquam eget luctus augue. Vestibulum posuere mattis tincidunt. Pellentesque congue laoreet purus, in commodo dui porttitor vel. Phasellus neque ipsum, tristique eu ornare quis, semper nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus velit lorem, fermentum tristique enim eu, pretium pulvinar justo. Cras vel porttitor nisi. Nam eleifend purus tortor, ac sollicitudin dolor rhoncus nec."
        onSelect={handleSelect}
        style={{ width: '80%', marginBlockEnd: '3rem' }}
        rows={5}
      />
      {showBtn && (
        <Button
          // This button is positioned absolute inside a relative container
          // If instead it were in \`body\`, containerRect adjustments wouldn't be needed
          style={{ position: 'absolute', zIndex: 2, ...btnStyle }}
          ref={buttonRef}
          icon={ai}
          onClick={handleBtnClick}
          onBlur={() => {
            setShowBtn(false);
          }}
        />
      )}
      <Toast
        open={toastOpen}
        onClose={() => {
          setToastOpen(false);
        }}
      >
        {toastText}
      </Toast>
    </SelectionAssistantContainer>
  );
}

const SelectionAssistantContainer = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => {
  return (
    <Card>
      <FlexBox
        ref={ref}
        style={{
          padding: '1rem',
          position: 'relative', // This makes children (like Button) positioned relative to this FlexBox
        }}
        direction="Column"
      >
        {children}
      </FlexBox>
    </Card>
  );
});

SelectionAssistantContainer.displayName = 'SelectionAssistantContainer';

`})})]}),`
`,(0,W.jsx)(_,{})]})}function U(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,W.jsx)(t,{...e,children:(0,W.jsx)(H,{...e})}):H(e)}var W;e((()=>{W=i(),m(),v(),b(),y(),L(),V()}))();export{U as default};
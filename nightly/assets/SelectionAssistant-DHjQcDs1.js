import{r as l,j as e,Q as C,Y as q}from"./iframe-DBAXgyPJ.js";import{useMDXComponents as A}from"./index-DeQCSiR4.js";import{M as E}from"./blocks-DNEJwZiK.js";import"./Tag-BnY7EcLs.js";import"./index-BcpDNXQJ.js";import{I as N,F as M}from"./CommandsAndQueries-Cf1MLqXD.js";import"./copy-Be-lNgbc.js";import{T as D}from"./TableOfContent-C8GiN2RX.js";import{a as j}from"./ai-lesYfM69.js";import{C as $}from"./index-Duoz4br-.js";import{F as k}from"./index-iFpZKkV_.js";import{L as T}from"./index-DBjIxNL0.js";import{I as B}from"./index-BQLAXfyy.js";import{T as L}from"./index-Sl78aQ4p.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DLrkR3Ug.js";import"./sys-enter-2-6buniplq.js";import"./alert-C9HPjUKN.js";import"./index-DtoZ2Fe-.js";import"./Link-CKvSDmqR.js";import"./index-DQ_Wvw6H.js";import"./index-BPy_kvjb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlXvTyjP.js";import"./addCustomCSSWithScoping-BR1T3wHP.js";import"./index-CYYeCl2u.js";import"./ai-BGOZg6Ab.js";import"./Input-DoLfEvYS.js";import"./ResponsivePopoverCommon.css-Dicr_wKa.js";import"./ValueStateMessage.css-xifZGn5p.js";import"./Suggestions.css-jnqUGd09.js";import"./TextArea-SEBXqEFx.js";const O=(t,n)=>{const r=getComputedStyle(t);for(let o=0;o<r.length;o++){const m=r[o];n.style.setProperty(m,r.getPropertyValue(m))}t.tagName==="INPUT"&&V(n),n.style.position="absolute",n.style.left=`${t.getBoundingClientRect().left}px`,n.style.top=`${t.getBoundingClientRect().top}px`,F(n),document.body.appendChild(n)},F=t=>{t.style.position="absolute",t.style.userSelect="none",t.style.pointerEvents="none",t.style.zIndex="-1",t.style.opacity="0"},V=t=>{t.style.whiteSpace="nowrap",t.style.overflowX="auto",t.style.overflowY="hidden"},_=()=>{const t=document.createElement("div");t.id="ui5-selection-mirror",t.contentEditable="true",document.body.appendChild(t)},z=(t,n)=>{n.scrollTop=t.scrollTop,n.scrollLeft=t.scrollLeft},H=(t,n)=>{const{selectionStart:r,selectionEnd:o}=t,m=t.value.slice(r,t.selectionEnd),c=document.createRange();c.setStart(n.firstChild,o-1),c.setEnd(n.firstChild,o),z(t,n);const u=c.getBoundingClientRect(),h={x:u.x,y:u.y,width:u.width,height:u.height,top:u.top,right:u.right,bottom:u.bottom,left:u.left};return document.body.removeChild(n),{...h,selectedText:m}},I=t=>{const n=t.shadowRoot.querySelector("textarea")||t.shadowRoot.querySelector("input");document.getElementById("ui5-selection-mirror")||_();const r=document.getElementById("ui5-selection-mirror");return r.textContent=n.value,n&&O(n,r),H(n,r)},x=l.forwardRef(({children:t},n)=>e.jsx($,{children:e.jsx(k,{ref:n,style:{padding:"1rem",position:"relative"},direction:"Column",children:t})}));x.displayName="SelectionAssistantContainer";try{x.displayName="SelectionAssistantContainer",x.__docgenInfo={description:"",displayName:"SelectionAssistantContainer",props:{}}}catch{}function P(){const t=l.useRef(null),n=l.useRef(null),[r,o]=l.useState(!1),[m,c]=l.useState({}),[u,h]=l.useState(""),[S,f]=l.useState(!1),g=(i,s)=>{c({left:`${i.left-s.left+i.width+4}px`,top:`${i.top-s.top}px`}),o(!0)},b=(i,s)=>{c({left:`${i.left-s.left+i.width}px`,top:`${i.top-s.top+i.height}px`}),o(!0)},R=i=>{const s=i.currentTarget,p=I(s),d=s.getBoundingClientRect(),y=t.current?.getBoundingClientRect();y&&(p.bottom>d.bottom||p.right>d.right?g(d,y):b(p,y))},v=i=>{const p=i.currentTarget.getBoundingClientRect(),d=t.current?.getBoundingClientRect();g(p,d)},a=()=>{const s=`The selected text equals to: "${document.getSelection().toString()}"`;h(s),f(!0)};return e.jsxs(x,{ref:t,children:[e.jsx(T,{for:"ai-input",showColon:!0,children:"Input with Selection Assistant"}),e.jsx(B,{id:"ai-input",value:"Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.",onSelect:R,onMouseDown:()=>{o(!1)},onScroll:()=>{o(!1)},onBlur:i=>{i.relatedTarget!==n.current&&o(!1)}}),e.jsx("br",{}),e.jsx(T,{for:"ai-native-input",showColon:!0,children:"Input with native API"}),e.jsx(B,{id:"ai-native-input",value:"Ipsum enim esse ipsum cupidatat ex veniam labore quis irure. Eiusmod labore anim anim nulla aute ut.",onSelect:v}),r&&e.jsx(C,{style:{position:"absolute",zIndex:2,...m},ref:n,icon:j,onClick:a,onBlur:()=>{o(!1)}}),e.jsx(q,{open:S,onClose:()=>{f(!1)},children:u})]})}P.displayName="InputSelectionAssistant";function U(){const t=l.useRef(null),n=l.useRef(null),[r,o]=l.useState(!1),[m,c]=l.useState({}),[u,h]=l.useState(""),[S,f]=l.useState(!1),g=(a,i)=>{c({left:`${a.left-i.left+a.width+4}px`,top:`${a.top-i.top}px`}),o(!0)},b=(a,i)=>{c({left:`${a.left-i.left+a.width}px`,top:`${a.top-i.top+a.height}px`}),o(!0)},R=a=>{const i=a.currentTarget,s=I(i),p=i.getBoundingClientRect(),d=t.current?.getBoundingClientRect();d&&(s.bottom>p.bottom||s.right>p.right?g(p,d):b(s,d))},v=()=>{const i=`The selected text equals to: "${document.getSelection().toString()}"`;h(i),f(!0)};return e.jsxs(x,{ref:t,children:[e.jsx(T,{for:"ai-textarea",showColon:!0,children:"TextArea with Selection Assistant"}),e.jsx(L,{id:"ai-textarea",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus vehicula blandit. Morbi suscipit nunc a quam ultrices consequat. Phasellus a dapibus est. Praesent leo libero, aliquet et imperdiet et, tincidunt non enim. Aliquam et nibh efficitur libero finibus rutrum in mattis ante. Morbi convallis aliquam leo id sagittis. Morbi tempor tellus ut dictum luctus. Pellentesque viverra quam sapien, et pharetra odio viverra vitae. Vivamus mollis ac purus quis tempus. Curabitur suscipit feugiat ante a iaculis. Aliquam ut metus magna. Praesent quis pharetra tortor, tristique rhoncus ante. Curabitur quis lorem nec ligula venenatis porta. Vivamus consequat, mi tincidunt tempor dapibus, urna ipsum ultricies dolor, sit amet aliquet eros erat vitae metus. Vivamus molestie, arcu id laoreet auctor, tortor urna suscipit ex, in ultricies leo tortor in nulla. In justo neque, hendrerit et neque fermentum, ultrices aliquam enim. Morbi quis urna cursus, varius massa at, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus dolor vitae bibendum bibendum. Curabitur ullamcorper magna sem, in dignissim velit fermentum vel. In vel ipsum tristique, sodales enim ac, tristique tellus. Curabitur eget lectus sapien. Praesent sit amet sagittis diam. Pellentesque quis scelerisque leo. Phasellus a arcu volutpat, ullamcorper risus vel, gravida justo. Nullam blandit turpis ligula, et faucibus dolor venenatis vitae. Donec at odio ut libero imperdiet tristique sed id erat. In sed sapien a ligula porta porta eget in justo. In dictum rhoncus mattis. Pellentesque eu feugiat ante. Phasellus in imperdiet eros. Aliquam eget luctus augue. Vestibulum posuere mattis tincidunt. Pellentesque congue laoreet purus, in commodo dui porttitor vel. Phasellus neque ipsum, tristique eu ornare quis, semper nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus velit lorem, fermentum tristique enim eu, pretium pulvinar justo. Cras vel porttitor nisi. Nam eleifend purus tortor, ac sollicitudin dolor rhoncus nec.",onSelect:R,style:{width:"80%",marginBlockEnd:"3rem"},rows:5}),r&&e.jsx(C,{style:{position:"absolute",zIndex:2,...m},ref:n,icon:j,onClick:v,onBlur:()=>{o(!1)}}),e.jsx(q,{open:S,onClose:()=>{f(!1)},children:u})]})}function w(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...A(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"selection-assistant",children:"Selection Assistant"}),`
`,e.jsx("table",{style:{width:"550px"},children:e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Usage"}),e.jsx("th",{children:e.jsx(N,{moduleName:"getElementSelection",packageName:"@ui5/webcomponents-base/dist/util/SelectionAssistant.js",defaultImport:!0})})]})})}),`
`,e.jsx(D,{}),`
`,e.jsx(E,{title:"SelectionAssistant",tags:["experimental"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The util is in an experimental state!"]}),`
`,e.jsxs(n.p,{children:["These examples demonstrate the usage of ",e.jsx(n.strong,{children:"SelectionAssistant"}),`, which enhances user interactions by returning the coordinates of the selected text on the select event.
This utility enables developers to create advanced AI-powered scenarios by easily capturing and utilizing the exact coordinates of user-selected text.`]}),`
`,e.jsx(n.h2,{id:"input-with-selection-assistant",children:"Input with Selection Assistant"}),`
`,e.jsx(P,{}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:e.jsx("h3",{style:{display:"inline",marginBlockEnd:"1rem",cursor:"pointer"},children:"Show Code"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
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
`,e.jsx(n.h2,{id:"textarea-with-selection-assistant",children:"TextArea with Selection Assistant"}),`
`,e.jsx(U,{}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:e.jsx("h3",{style:{display:"inline",marginBlockEnd:"1rem",cursor:"pointer"},children:"Show Code"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
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
`,e.jsx(M,{})]})}function Be(t={}){const{wrapper:n}={...A(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(w,{...t})}):w(t)}export{Be as default};

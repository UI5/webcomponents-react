import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-BUD3sqOU.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{n as a,t as o}from"./Button-Ba-GEcqq.js";import{t as s}from"./enums-Cmq13P-3.js";import{n as c,t as l}from"./Icon-CmBmdtRd.js";import{s as u}from"./FlexBoxWrap-CqUwz-ch.js";import{n as d,t as f}from"./FlexBox-Dxzw0yJk.js";import{n as p,t as m}from"./Text-BGpaBiln.js";import{_ as h,v as g}from"./List-B9PM856x.js";import{n as _,t as v}from"./Title-C4-XBDPx.js";import{n as y,t as b}from"./document-BLHsyuei.js";import{a as x,c as S,n as C,o as w,s as T,t as E}from"./UploadCollectionItem-DFkT5hzP.js";var D=n({Default:()=>j,SimulateUpload:()=>M,__namedExportsOrder:()=>N,default:()=>A}),O,k,A,j,M,N,P=e((()=>{g(),w(),y(),O=t(r(),1),d(),s(),p(),a(),c(),_(),C(),S(),k=i(),A={title:`Inputs / UploadCollection`,component:T,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{selectionMode:h.None},tags:[`package:@ui5/webcomponents-fiori`]},j={render:e=>{let[t,n]=(0,O.useState)([]),r=e=>{e.preventDefault(),e.dataTransfer.files.forEach(e=>{n(t=>[...t,(0,k.jsx)(E,{file:e,fileName:e.name,thumbnail:(0,k.jsx)(l,{name:b}),uploadState:x.Ready,children:(0,k.jsx)(m,{children:`Last modified: ${e.lastModifiedDate} · Size: ${(e.size/1e3).toFixed(2)}KB`})},e.name)])})};return(0,k.jsx)(T,{...e,onDrop:r,children:t})}},M={render:()=>{let[e,t]=(0,O.useState)([(0,k.jsx)(E,{file:null,fileName:`file-name.txt`,uploadState:x.Ready,thumbnail:(0,k.jsx)(`img`,{src:`https://raw.githubusercontent.com/UI5/webcomponents/main/docs/images/UI5_logo_water.png`}),children:(0,k.jsx)(m,{children:`Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20`})},`0`)]);return(0,k.jsx)(T,{onDrop:e=>{e.preventDefault(),e.dataTransfer.files.forEach(e=>{t(t=>[...t,(0,k.jsx)(E,{file:e,fileName:e.name,uploadState:x.Ready,thumbnail:(0,k.jsx)(l,{name:b}),children:(0,k.jsx)(m,{children:`Last modified: ${e.lastModifiedDate} · Size: ${(e.size/1e3).toFixed(2)}KB`})},e.name)])})},header:(0,k.jsxs)(f,{alignItems:u.Center,children:[(0,k.jsx)(v,{children:`Start upload:`}),(0,k.jsx)(o,{onClick:()=>{e.length>0&&O.Children.forEach(e,(e,n)=>{if(e.props.uploadState===x.Ready){let e=0,r=()=>{setTimeout(()=>{e+=Math.floor(Math.random()*4)+1,t(t=>{let r=[...t];return r[n]=(0,O.cloneElement)(t[n],{uploadState:x.Uploading,progress:Math.min(e,100)}),r}),e<100?r():t(e=>{let t=[...e];return t[n]=(0,O.cloneElement)(e[n],{uploadState:x.Complete}),t})},Math.floor(Math.random()*901)+100)};r()}})},children:`Upload!`})]}),children:e})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [children, setChildren] = useState([]);
    const handleDrop = e => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      files.forEach(file => {
        setChildren(prev => [...prev, <UploadCollectionItem key={file.name} file={file} fileName={file.name} thumbnail={<Icon name={documentIcon} />} uploadState={UploadState.Ready}>
            <Text>{\`Last modified: \${file.lastModifiedDate} · Size: \${(file.size / 1000).toFixed(2)}KB\`}</Text>
          </UploadCollectionItem>]);
      });
    };
    return <UploadCollection {...args} onDrop={handleDrop}>
        {children}
      </UploadCollection>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [children, setChildren] = useState([<UploadCollectionItem key={'0'} file={null} fileName={'file-name.txt'} uploadState={UploadState.Ready} thumbnail={<img src="https://raw.githubusercontent.com/UI5/webcomponents/main/docs/images/UI5_logo_water.png" />}>
        <Text>Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20</Text>
      </UploadCollectionItem>]);
    const handleDrop = e => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      files.forEach(file => {
        setChildren(prev => [...prev, <UploadCollectionItem key={file.name} file={file} fileName={file.name} uploadState={UploadState.Ready} thumbnail={<Icon name={documentIcon} />}>
            <Text>{\`Last modified: \${file.lastModifiedDate} · Size: \${(file.size / 1000).toFixed(2)}KB\`}</Text>
          </UploadCollectionItem>]);
      });
    };
    const simulateUpload = () => {
      if (children.length > 0) {
        Children.forEach(children, (child, index) => {
          if (child.props.uploadState === UploadState.Ready) {
            let progress = 0;
            const recTimeout = () => {
              setTimeout(() => {
                progress += Math.floor(Math.random() * 4) + 1;
                setChildren(prev => {
                  const updatedChildren = [...prev];
                  updatedChildren[index] = cloneElement(prev[index], {
                    uploadState: UploadState.Uploading,
                    progress: Math.min(progress, 100)
                  });
                  return updatedChildren;
                });
                if (progress < 100) {
                  recTimeout();
                } else {
                  setChildren(prev => {
                    const updatedChildren = [...prev];
                    updatedChildren[index] = cloneElement(prev[index], {
                      uploadState: UploadState.Complete
                    });
                    return updatedChildren;
                  });
                }
              }, Math.floor(Math.random() * (1000 - 100 + 1)) + 100);
            };
            recTimeout();
          }
        });
      }
    };
    return <UploadCollection onDrop={handleDrop} header={<FlexBox alignItems={FlexBoxAlignItems.Center}>
            <Title>Start upload:</Title>
            <Button onClick={simulateUpload}>Upload!</Button>
          </FlexBox>}>
        {children}
      </UploadCollection>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`SimulateUpload`]}));P();export{j as Default,M as SimulateUpload,N as __namedExportsOrder,A as default,P as n,D as t};
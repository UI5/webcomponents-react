import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{t as r}from"./react-CMXXrKHu.js";import{t as i}from"./jsx-runtime-CeCnFQbk.js";import{n as a,t as o}from"./Button-DyzKfd_A.js";import{n as s,t as c}from"./Icon-Dw4cwF0V.js";import{s as l}from"./FlexBoxWrap-Bk3KBAvP.js";import{n as u,t as d}from"./FlexBox-DwkvW4R_.js";import{n as f,t as p}from"./Text-B9sT7iUQ.js";import{c as m,s as h}from"./List-DsCYM0Vl.js";import{n as g,t as _}from"./Title-CERg1rE0.js";import{a as v,c as y,l as b,n as x,o as S,s as C,t as w,u as T}from"./UploadCollectionItem-Czc7lTVg.js";import{d as E}from"./iframe-CrbBHlQf.js";var D=n({Default:()=>j,SimulateUpload:()=>M,__namedExportsOrder:()=>N,default:()=>A}),O,k,A,j,M,N,P=e((()=>{m(),S(),T(),O=t(r(),1),u(),E(),f(),a(),s(),g(),x(),y(),k=i(),A={title:`Inputs / UploadCollection`,component:C,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{selectionMode:h.None},tags:[`package:@ui5/webcomponents-fiori`]},j={render:e=>{let[t,n]=(0,O.useState)([]),r=e=>{e.preventDefault(),e.dataTransfer.files.forEach(e=>{n(t=>[...t,(0,k.jsx)(w,{file:e,fileName:e.name,thumbnail:(0,k.jsx)(c,{name:b}),uploadState:v.Ready,children:(0,k.jsx)(p,{children:`Last modified: ${e.lastModifiedDate} · Size: ${(e.size/1e3).toFixed(2)}KB`})},e.name)])})};return(0,k.jsx)(C,{...e,onDrop:r,children:t})}},M={render:()=>{let[e,t]=(0,O.useState)([(0,k.jsx)(w,{file:null,fileName:`file-name.txt`,uploadState:v.Ready,thumbnail:(0,k.jsx)(`img`,{src:`https://raw.githubusercontent.com/UI5/webcomponents/main/docs/images/UI5_logo_water.png`}),children:(0,k.jsx)(p,{children:`Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20`})},`0`)]);return(0,k.jsx)(C,{onDrop:e=>{e.preventDefault(),e.dataTransfer.files.forEach(e=>{t(t=>[...t,(0,k.jsx)(w,{file:e,fileName:e.name,uploadState:v.Ready,thumbnail:(0,k.jsx)(c,{name:b}),children:(0,k.jsx)(p,{children:`Last modified: ${e.lastModifiedDate} · Size: ${(e.size/1e3).toFixed(2)}KB`})},e.name)])})},header:(0,k.jsxs)(d,{alignItems:l.Center,children:[(0,k.jsx)(_,{children:`Start upload:`}),(0,k.jsx)(o,{onClick:()=>{e.length>0&&O.Children.forEach(e,(e,n)=>{if(e.props.uploadState===v.Ready){let e=0,r=()=>{setTimeout(()=>{e+=Math.floor(Math.random()*4)+1,t(t=>{let r=[...t];return r[n]=(0,O.cloneElement)(t[n],{uploadState:v.Uploading,progress:Math.min(e,100)}),r}),e<100?r():t(e=>{let t=[...e];return t[n]=(0,O.cloneElement)(e[n],{uploadState:v.Complete}),t})},Math.floor(Math.random()*901)+100)};r()}})},children:`Upload!`})]}),children:e})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
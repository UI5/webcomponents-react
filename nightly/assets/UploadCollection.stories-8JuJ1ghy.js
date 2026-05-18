import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{Bt as r,Fm as i,Gd as a,Gt as o,Jt as s,Kt as c,Mu as l,Nu as u,Qd as d,Rd as f,Vt as p,Wd as m,Wt as h,Yt as g,d as _,fd as v,lf as y,ng as b,np as x,pd as S,qt as C,rp as w,uf as T,zd as E}from"./iframe-DLyN7Gg6.js";var D=e({Default:()=>j,SimulateUpload:()=>M,__namedExportsOrder:()=>N,default:()=>A}),O,k,A,j,M,N,P=n((()=>{S(),o(),g(),O=t(b(),1),a(),_(),E(),w(),T(),u(),p(),C(),k=i(),A={title:`Inputs / UploadCollection`,component:c,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{selectionMode:v.None},tags:[`package:@ui5/webcomponents-fiori`]},j={render:e=>{let[t,n]=(0,O.useState)([]),i=e=>{e.preventDefault(),e.dataTransfer.files.forEach(e=>{n(t=>[...t,(0,k.jsx)(r,{file:e,fileName:e.name,thumbnail:(0,k.jsx)(y,{name:s}),uploadState:h.Ready,children:(0,k.jsx)(f,{children:`Last modified: ${e.lastModifiedDate} · Size: ${(e.size/1e3).toFixed(2)}KB`})},e.name)])})};return(0,k.jsx)(c,{...e,onDrop:i,children:t})}},M={render:()=>{let[e,t]=(0,O.useState)([(0,k.jsx)(r,{file:null,fileName:`file-name.txt`,uploadState:h.Ready,thumbnail:(0,k.jsx)(`img`,{src:`https://raw.githubusercontent.com/UI5/webcomponents/main/docs/images/UI5_logo_water.png`}),children:(0,k.jsx)(f,{children:`Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20`})},`0`)]);return(0,k.jsx)(c,{onDrop:e=>{e.preventDefault(),e.dataTransfer.files.forEach(e=>{t(t=>[...t,(0,k.jsx)(r,{file:e,fileName:e.name,uploadState:h.Ready,thumbnail:(0,k.jsx)(y,{name:s}),children:(0,k.jsx)(f,{children:`Last modified: ${e.lastModifiedDate} · Size: ${(e.size/1e3).toFixed(2)}KB`})},e.name)])})},header:(0,k.jsxs)(m,{alignItems:d.Center,children:[(0,k.jsx)(l,{children:`Start upload:`}),(0,k.jsx)(x,{onClick:()=>{e.length>0&&O.Children.forEach(e,(e,n)=>{if(e.props.uploadState===h.Ready){let e=0,r=()=>{setTimeout(()=>{e+=Math.floor(Math.random()*4)+1,t(t=>{let r=[...t];return r[n]=(0,O.cloneElement)(t[n],{uploadState:h.Uploading,progress:Math.min(e,100)}),r}),e<100?r():t(e=>{let t=[...e];return t[n]=(0,O.cloneElement)(e[n],{uploadState:h.Complete}),t})},Math.floor(Math.random()*901)+100)};r()}})},children:`Upload!`})]}),children:e})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
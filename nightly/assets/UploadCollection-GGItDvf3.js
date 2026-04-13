import{n as e}from"./chunk-zsgVPwQN.js";import{Ft as t,It as n,Jm as r}from"./iframe-BY_n61Qo.js";import{r as i}from"./react-BUIaZHfN.js";import{_ as a,m as o,o as s,p as c,s as l,t as u}from"./components-Bq2VHq-7.js";import{_ as d,d as f,o as p,r as m,u as h}from"./blocks-EB3mCWWt.js";import{n as g,t as _}from"./SubcomponentsSection-B85wrRHJ.js";import{Default as v,SimulateUpload as y,n as b,t as x}from"./UploadCollection.stories-CWZwAFNj.js";function S(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{of:x}),`
`,(0,w.jsx)(l,{of:x,since:`0.9.0`}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,w.jsx)(m,{of:v}),`
`,(0,w.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,w.jsx)(c,{of:v}),`
`,(0,w.jsx)(n.h2,{id:`handling-drag-and-drop-of-files`,children:`Handling drag and drop of files`}),`
`,(0,w.jsxs)(n.p,{children:[`Per default, files can be added by dragging them into the `,(0,w.jsx)(n.code,{children:`UploadCollection`}),` component.
To use this functionality the `,(0,w.jsx)(n.code,{children:`onDrop`}),` handler has to be manually adjusted.`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.strong,{children:`Note:`}),` Use `,(0,w.jsx)(n.code,{children:`event.preventDefault()`}),` in the `,(0,w.jsx)(n.code,{children:`onDrop`}),` handler, otherwise some browsers will open some files in a different tab.`]}),`
`,(0,w.jsxs)(n.p,{children:[`This example shows, how to dynamically render a `,(0,w.jsx)(n.code,{children:`UploadCollectionItem`}),` by dropping files into the `,(0,w.jsx)(n.code,{children:`UploadCollection`}),`:`]}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-jsx`,children:`import { useState } from 'react';
import { Icon, Text, UploadCollection, UploadCollectionItem } from '@ui5/webcomponents-react';

export const UploadCollectionComponent = () => {
  const [children, setChildren] = useState([]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem file={file} fileName={file.name} thumbnail={<Icon name="document" />}>
          <Text>Uploaded On: Right now</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  return <UploadCollection onDrop={handleDrop}>{children}</UploadCollection>;
};
`})}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(n.h2,{id:`simulate-upload`,children:`Simulate Upload`}),`
`,(0,w.jsx)(m,{of:y}),`
`,(0,w.jsx)(n.h3,{id:`code`,children:`Code`}),`
`,(0,w.jsx)(n.pre,{children:(0,w.jsx)(n.code,{className:`language-jsx`,children:`const SimulateUploadComponent = () => {
  const [children, setChildren] = useState([
    <UploadCollectionItem
      key={'0'}
      file={null}
      fileName={'file-name.txt'}
      uploadState={UploadState.Ready}
      thumbnail={
        <img src="https://raw.githubusercontent.com/UI5/webcomponents/main/docs/images/UI5_logo_water.png" />
      }
    >
      <Text>Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20</Text>
    </UploadCollectionItem>
  ]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem
          key={file.name}
          file={file}
          fileName={file.name}
          uploadState={UploadState.Ready}
          thumbnail={<Icon name={documentIcon} />}
        >
          <Text>{\`Last modified: \${file.lastModifiedDate} · Size: \${(file.size / 1000).toFixed(2)}KB\`}</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  const simulateUpload = () => {
    if (children.length > 0) {
      Children.forEach(children, (child, index) => {
        if (child.props.uploadState === UploadState.Ready) {
          let progress = 0;
          const recTimeout = () => {
            setTimeout(
              () => {
                progress += Math.floor(Math.random() * 4) + 1;
                setChildren((prev) => {
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
                  setChildren((prev) => {
                    const updatedChildren = [...prev];
                    updatedChildren[index] = cloneElement(prev[index], {
                      uploadState: UploadState.Complete
                    });
                    return updatedChildren;
                  });
                }
              },
              Math.floor(Math.random() * (1000 - 100 + 1)) + 100
            );
          };
          recTimeout();
        }
      });
    }
  };
  return (
    <UploadCollection
      onDrop={handleDrop}
      header={
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Title>Start upload:</Title>
          <Button onClick={simulateUpload}>Upload!</Button>
        </FlexBox>
      }
    >
      {children}
    </UploadCollection>
  );
};
`})}),`
`,(0,w.jsx)(h,{children:_}),`
`,(0,w.jsx)(n.h2,{id:`uploadcollectionitem`,children:`UploadCollectionItem`}),`
`,(0,w.jsx)(p,{of:t}),`
`,(0,w.jsx)(o,{metaOf:x,of:t}),`
`,(0,w.jsx)(s,{})]})}function C(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=r(),a(),u(),g(),d(),n(),b()}))();export{C as default};
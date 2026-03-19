import{j as e}from"./iframe-CyQHbHxC.js";import{useMDXComponents as d}from"./index-CAqjzf3-.js";import{A as p}from"./ArgTypesWithNote-BefXg7jU.js";import{C as s}from"./ControlsWithNote-BNokvIjE.js";import{D as m}from"./DocsHeader-D3sFB4u7.js";import{F as c}from"./Footer-B6F6QaBp.js";import"./CommandsAndQueries-CQRKG-No.js";import"./PageNotFound-BwogsJtD.js";import{S as h}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as i,a as x,D as u}from"./blocks-B1BKQjJv.js";import{C as t,D as l,S as C,U as r}from"./UploadCollection.stories-BwVHg2R4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVtJUpci.js";import"./information-DjNNiNHU.js";import"./sys-enter-2-BgUfXyT0.js";import"./alert-CTY_LxCJ.js";import"./Tag-CpzoOvR8.js";import"./index-1GAsnXVc.js";import"./index-DUAJQglC.js";import"./Link-8vAV1o0p.js";import"./copy-BMtlJq5M.js";import"./copy-DaAXI0wh.js";import"./GitHub-Mark-B7CobaJ5.js";import"./TableOfContent-5QHPn7EL.js";import"./index-DMBzjcEO.js";import"./index-hCRaM0Y7.js";import"./index-DdcJcuqo.js";import"./index-Dk8Vx9PA.js";import"./index-CyzsrkYQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPaLVEvo.js";import"./addCustomCSSWithScoping-iqlifjV6.js";import"./Illustrations-BxTCLiS4.js";import"./i18n-defaults-CFWtSmu6.js";import"./stop-DTxD1pt7.js";import"./Input-8PEEDwad.js";import"./ResponsivePopoverCommon.css-Dux865Zo.js";import"./ValueStateMessage.css-BbLW-Isn.js";import"./Suggestions.css-X5qr8kqi.js";import"./ProgressIndicator-CbqEfOHz.js";import"./AnimationMode-C-FOl4ys.js";import"./stop-C-6e9046.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./Tent-CN1Pz-x-.js";import"./IllustratedMessage-ClHsMmcC.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(m,{of:t,since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h2,{id:"handling-drag-and-drop-of-files",children:"Handling drag and drop of files"}),`
`,e.jsxs(n.p,{children:["Per default, files can be added by dragging them into the ",e.jsx(n.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e.jsx(n.code,{children:"onDrop"})," handler has to be manually adjusted.",e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Note:"})," Use ",e.jsx(n.code,{children:"event.preventDefault()"})," in the ",e.jsx(n.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,e.jsxs(n.p,{children:["This example shows, how to dynamically render a ",e.jsx(n.code,{children:"UploadCollectionItem"})," by dropping files into the ",e.jsx(n.code,{children:"UploadCollection"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
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
`,e.jsx("br",{}),`
`,e.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"simulate-upload",children:"Simulate Upload"}),`
`,e.jsx(i,{of:C}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
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
`,e.jsx(x,{children:h}),`
`,e.jsx(n.h2,{id:"uploadcollectionitem",children:"UploadCollectionItem"}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(p,{metaOf:t,of:r}),`
`,e.jsx(c,{})]})}function pe(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{pe as default};

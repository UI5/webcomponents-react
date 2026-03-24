import{j as e}from"./iframe-D3LJsbiF.js";import{useMDXComponents as d}from"./index-CyzPa2YT.js";import{A as p}from"./ArgTypesWithNote-GVhjRRE4.js";import{C as s}from"./ControlsWithNote-Daapf7Ph.js";import{D as m}from"./DocsHeader-Df8FJ8t_.js";import{F as c}from"./Footer-BXlDlrd5.js";import"./CommandsAndQueries-ZyWBFV72.js";import"./PageNotFound-BgagSqcc.js";import{S as h}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as i,a as x,D as u}from"./blocks-C17hS1H0.js";import{C as t,D as l,S as C,U as r}from"./UploadCollection.stories-DcFfam_S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQRzxDSe.js";import"./information-Pe11Evj5.js";import"./sys-enter-2-nzdqIN1z.js";import"./alert-8s9TsqZs.js";import"./Tag-DEA3QTbc.js";import"./index-CukaHHo2.js";import"./index-GY8piuJS.js";import"./Link-DcTIU4K2.js";import"./copy-Cx1SvDmz.js";import"./copy-CVdXx4M8.js";import"./GitHub-Mark-rXF-W6BJ.js";import"./TableOfContent-VA0eJa1c.js";import"./index-Bs-GzB5h.js";import"./index-Do3YGvBX.js";import"./index-BCAZlXLW.js";import"./index-N6F2Hon5.js";import"./index-CQnpN8bu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CgFvj6Uo.js";import"./addCustomCSSWithScoping-DIPZZBkR.js";import"./Illustrations-DV_KfhEH.js";import"./i18n-defaults-CFWtSmu6.js";import"./stop-ZgSdI_ft.js";import"./Input-B1OANMVL.js";import"./ResponsivePopoverCommon.css-Qeab4xYL.js";import"./ValueStateMessage.css-D70pJEyG.js";import"./Suggestions.css-Cmes9Jc-.js";import"./ProgressIndicator-BuWZBcMJ.js";import"./AnimationMode-BQxjM0o_.js";import"./stop-DF9vavao.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./Tent-COEvMJpe.js";import"./IllustratedMessage-DksfyZ_X.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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

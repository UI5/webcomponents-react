import{j as e}from"./iframe-Cr6oQmRd.js";import{useMDXComponents as d}from"./index-evhaF9WH.js";import{A as s}from"./ArgTypesWithNote-CrxJkNTs.js";import{C as p}from"./ControlsWithNote-DR3nmE-h.js";import{D as m}from"./DocsHeader-BvFPgHhe.js";import{F as c}from"./CommandsAndQueries-DyaEp24s.js";import{S as h}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as i,a as x,D as u}from"./blocks-BuJgXu1r.js";import{C as t,D as l,S as C,U as r}from"./UploadCollection.stories-DoRAJEy2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0N3ti0U.js";import"./information-ClN6WTRB.js";import"./sys-enter-2-Bqn_SCi3.js";import"./alert-D5OzLbEL.js";import"./Tag-BQohtkMw.js";import"./index-1zaXUkR9.js";import"./index-D3MvNgPx.js";import"./Link-Zz-QOIrn.js";import"./copy-Cx5K14FI.js";import"./copy-CZb07l2e.js";import"./GitHub-Mark-aSkr3YYx.js";import"./TableOfContent-C6-4XiSf.js";import"./index-TJ6Pynu-.js";import"./index-ClHBD-hy.js";import"./index-DcIQ9jq2.js";import"./index-D6mcpJOs.js";import"./index-L71irp-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN2SmbWo.js";import"./addCustomCSSWithScoping-zjLKSZUa.js";import"./stop-DaIoK9mW.js";import"./i18n-defaults-BTYpTGpY.js";import"./Input-Cdi1ONYj.js";import"./ResponsivePopoverCommon.css-Cg9mOybv.js";import"./ValueStateMessage.css-D7Snw4FC.js";import"./Suggestions.css-BnQBqKbG.js";import"./ProgressIndicator-KwuetC7U.js";import"./AnimationMode-Dq2y2jpM.js";import"./stop-BvPqIg_U.js";import"./parameters-bundle.css-B37gDvcF.js";import"./Tent-L7IffRd4.js";import"./IllustratedMessage-DEbMLr2Z.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(m,{of:t,since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:l}),`
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
`,e.jsx(s,{metaOf:t,of:r}),`
`,e.jsx(c,{})]})}function re(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{re as default};

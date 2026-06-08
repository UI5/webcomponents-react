import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Ca as r,En as i,Sa as a,Tn as o,ba as s,lh as c,wa as l,xa as u,ya as d,zg as f}from"./iframe-1XGul_S2.js";var p,m,h=n((()=>{(function(e){e.Left=`Left`,e.Right=`Right`})(p||={}),m=p})),g,_,v=n((()=>{(function(e){e.Top=`Top`,e.Bottom=`Bottom`})(g||={}),_=g})),y=e({CustomThumbnail:()=>w,Default:()=>C,InteractiveDisplayArea:()=>T,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E,D=n((()=>{l(),h(),v(),b=t(f(),1),s(),i(),a(),x=c(),S={title:`Layouts & Floorplans / MediaGallery`,component:u,argTypes:{children:{control:{disable:!0}}},args:{layout:r.Auto,menuHorizontalAlign:m.Left,menuVerticalAlign:_.Bottom},tags:[`package:@ui5/webcomponents-fiori`]},C={render:e=>(0,x.jsxs)(u,{...e,children:[(0,x.jsx)(d,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1000.jpg`,alt:`Example Image`})}),(0,x.jsx)(d,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1010.jpg`,alt:`Example Image`})}),(0,x.jsx)(d,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1022.jpg`,alt:`Example Image`})}),(0,x.jsx)(d,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1030.jpg`,alt:`Example Image`})}),(0,x.jsx)(d,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-2002.jpg`,alt:`Example Image`})}),(0,x.jsx)(d,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-2026.jpg`,alt:`Example Image`})})]})},w={render:e=>(0,x.jsxs)(u,{...e,children:[(0,x.jsx)(d,{thumbnail:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1000-small.jpg`}),children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1000.jpg`,alt:`Example Image`})}),(0,x.jsx)(d,{disabled:!0,children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1010.jpg`,alt:`Example Image`})})]})},T={render:e=>{let t=(0,b.useRef)(null),n=()=>{t.current.show()};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{ref:t,children:`Display Area Clicked!`}),(0,x.jsxs)(u,{...e,interactiveDisplayArea:!0,onDisplayAreaClick:n,children:[(0,x.jsx)(d,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1000.jpg`,alt:`Example Image`})}),(0,x.jsx)(d,{selected:!0,children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1010.jpg`,alt:`Example Image`})})]})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1022.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1030.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-2002.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-2026.jpg" alt="Example Image" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem thumbnail={<img src="https://ui5.github.io/webcomponents/images/HT-1000-small.jpg" />}>
          <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem disabled>
          <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const handleDisplayAreaClick = () => {
      ref.current.show();
    };
    return <>
        <Toast ref={ref}>Display Area Clicked!</Toast>
        <MediaGallery {...args} interactiveDisplayArea onDisplayAreaClick={handleDisplayAreaClick}>
          <MediaGalleryItem>
            <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
          </MediaGalleryItem>
          <MediaGalleryItem selected>
            <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
          </MediaGalleryItem>
        </MediaGallery>
      </>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`CustomThumbnail`,`InteractiveDisplayArea`]}));D();export{w as CustomThumbnail,C as Default,T as InteractiveDisplayArea,E as __namedExportsOrder,S as default,D as n,y as t};
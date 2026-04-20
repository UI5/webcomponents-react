import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-CNp2Ms8r.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./MediaGalleryItem-ChBGu8_I.js";import{n as d,t as f}from"./Toast-dJGolnPa.js";var p,m,h=e((()=>{(function(e){e.Left=`Left`,e.Right=`Right`})(p||={}),m=p})),g,_,v=e((()=>{(function(e){e.Top=`Top`,e.Bottom=`Bottom`})(g||={}),_=g})),y=n({CustomThumbnail:()=>w,Default:()=>C,InteractiveDisplayArea:()=>T,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E,D=e((()=>{c(),h(),v(),b=t(r(),1),s(),d(),o(),x=i(),S={title:`Layouts & Floorplans / MediaGallery`,component:l,argTypes:{children:{control:{disable:!0}}},args:{layout:a.Auto,menuHorizontalAlign:m.Left,menuVerticalAlign:_.Bottom},tags:[`package:@ui5/webcomponents-fiori`]},C={render:e=>(0,x.jsxs)(l,{...e,children:[(0,x.jsx)(u,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1000.jpg`,alt:`Example Image`})}),(0,x.jsx)(u,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1010.jpg`,alt:`Example Image`})}),(0,x.jsx)(u,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1022.jpg`,alt:`Example Image`})}),(0,x.jsx)(u,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1030.jpg`,alt:`Example Image`})}),(0,x.jsx)(u,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-2002.jpg`,alt:`Example Image`})}),(0,x.jsx)(u,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-2026.jpg`,alt:`Example Image`})})]})},w={render:e=>(0,x.jsxs)(l,{...e,children:[(0,x.jsx)(u,{thumbnail:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1000-small.jpg`}),children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1000.jpg`,alt:`Example Image`})}),(0,x.jsx)(u,{disabled:!0,children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1010.jpg`,alt:`Example Image`})})]})},T={render:e=>{let t=(0,b.useRef)(null),n=()=>{t.current.show()};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{ref:t,children:`Display Area Clicked!`}),(0,x.jsxs)(l,{...e,interactiveDisplayArea:!0,onDisplayAreaClick:n,children:[(0,x.jsx)(u,{children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1000.jpg`,alt:`Example Image`})}),(0,x.jsx)(u,{selected:!0,children:(0,x.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/HT-1010.jpg`,alt:`Example Image`})})]})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
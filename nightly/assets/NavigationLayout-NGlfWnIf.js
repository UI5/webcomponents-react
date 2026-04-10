import{n as e}from"./chunk-zsgVPwQN.js";import{Ar as t,Dr as n,Er as r,Jm as i,Mr as a,Nr as o,Or as s,jr as c,kr as l}from"./iframe-BxkeBIi4.js";import{r as u}from"./react-BprHCJr4.js";import{_ as d,m as f,o as p,p as m,s as h,t as g}from"./components-BmKOFW_b.js";import{_,d as v,o as y,r as b,u as x}from"./blocks-z72YJre6.js";import{n as S,t as C}from"./SubcomponentsSection-CGnP9R_J.js";import{Default as w,n as T,t as E}from"./NavigationLayout.stories-DmVN_ZXP.js";function D(e){let n={code:`code`,h2:`h2`,pre:`pre`,...u(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(v,{of:E}),`
`,(0,k.jsx)(h,{of:E}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,k.jsx)(b,{of:w}),`
`,(0,k.jsxs)(`details`,{children:[(0,k.jsx)(`summary`,{children:`Show static code`}),(0,k.jsx)(n.pre,{children:(0,k.jsx)(n.code,{className:`language-tsx`,children:`function NavigationLayoutComponent(props) {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [mode, setMode] = useState(props.mode);
  const navigationLayoutRef = useRef<NavigationLayoutDomRef>(null);

  const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
    setSelectedContent(e.detail.item.text);
  };

  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);

  return (
    <div style={{ position: 'relative', height: '800px' }}>
      <NavigationLayout
        {...props}
        ref={navigationLayoutRef}
        mode={mode}
        header={
          <ShellBar
            startButton={
              <Button
                icon={menuIcon}
                onClick={() => {
                  if (navigationLayoutRef.current?.isSideCollapsed()) {
                    setMode(NavigationLayoutMode.Expanded);
                  } else {
                    setMode(NavigationLayoutMode.Collapsed);
                  }
                }}
              />
            }
            primaryTitle="UI5 Web Components for React"
            secondaryTitle="The Best Run SAP"
          />
        }
        sideContent={
          <SideNavigation slot="sideContent" onSelectionChange={handleSelectionChange}>
            <SideNavigationItem text="Home" icon="home" />
            <SideNavigationGroup text="Group 1" expanded>
              <SideNavigationItem text="Item 1" icon="locate-me" expanded>
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 2" icon="calendar" expanded>
                <SideNavigationSubItem text="Sub Item 3" />
                <SideNavigationSubItem text="Sub Item 4" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 3" icon="activity-assigned-to-goal" expanded>
                <SideNavigationSubItem text="Sub Item 5" />
                <SideNavigationSubItem text="Sub Item 6" />
              </SideNavigationItem>
            </SideNavigationGroup>
            <SideNavigationGroup text="Group 2" expanded>
              <SideNavigationItem text="Item 4" icon="history" />
              <SideNavigationItem text="Item 5" icon="source-code" />
              <SideNavigationItem text="Item 6" icon="background" />
            </SideNavigationGroup>

            <SideNavigationItem
              slot="fixedItems"
              text="Legal"
              href="https://www.sap.com/about/legal/impressum.html"
              target="_blank"
              icon="compare"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Privacy"
              href="https://www.sap.com/about/legal/privacy.html"
              target="_blank"
              icon="locked"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Terms of Use"
              href="https://www.sap.com/terms-of-use"
              target="_blank"
              icon="document-text"
            />
          </SideNavigation>
        }
      >
        <div style={{ padding: '1rem' }}>
          <div>
            <Title>{selectedContent}</Title>
            <br />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </div>
        </div>
      </NavigationLayout>
    </div>
  );
}
`})})]}),`
`,(0,k.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,k.jsx)(m,{of:w}),`
`,(0,k.jsx)(x,{children:C}),`
`,(0,k.jsx)(n.h2,{id:`sidenavigation`,children:`SideNavigation`}),`
`,(0,k.jsx)(y,{of:a}),`
`,(0,k.jsx)(f,{metaOf:E,of:a}),`
`,(0,k.jsx)(n.h2,{id:`sidenavigationitem`,children:`SideNavigationItem`}),`
`,(0,k.jsx)(y,{of:s}),`
`,(0,k.jsx)(f,{metaOf:E,of:s}),`
`,(0,k.jsx)(n.h2,{id:`sidenavigationsubitem`,children:`SideNavigationSubItem`}),`
`,(0,k.jsx)(y,{of:r}),`
`,(0,k.jsx)(f,{metaOf:E,of:r}),`
`,(0,k.jsx)(n.h2,{id:`sidenavigationgroup`,children:`SideNavigationGroup`}),`
`,(0,k.jsx)(y,{of:t}),`
`,(0,k.jsx)(f,{metaOf:E,of:t}),`
`,(0,k.jsx)(p,{})]})}function O(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;e((()=>{k=i(),d(),g(),S(),_(),T(),o(),l(),c(),n()}))();export{O as default};
import{j as t}from"./iframe-T7Wqg8UQ.js";import{useMDXComponents as c}from"./index-B1_Kr1qi.js";import{A as o}from"./ArgTypesWithNote-BpHigpZI.js";import{C as l}from"./ControlsWithNote-BqBu_Mq2.js";import{D as g}from"./DocsHeader-CrVecl48.js";import{F as x}from"./CommandsAndQueries-BErUSC1w.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-AtAGVbf3.js";import{C as i,D as r}from"./NavigationLayout.stories-Cf372IWX.js";import{S as m,a as s,b as d}from"./index-D3NdD0ge.js";import{S as p}from"./chain-link-BeXVRus3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1-SdBrMb.js";import"./information-fYaYVBJG.js";import"./sys-enter-2-CqaPP6tK.js";import"./alert-DdeG0Okn.js";import"./Tag-gMzT9-kJ.js";import"./index-OjQEK6Sv.js";import"./index-B0vEPx1d.js";import"./Link-CS0U2zW0.js";import"./copy-DIiyOBxc.js";import"./copy-D9NRoizO.js";import"./GitHub-Mark-Biv-_v1T.js";import"./TableOfContent-NE_Wj6NX.js";import"./index-Do-8N8-4.js";import"./index-CSyU4Rfq.js";import"./index-CuClVFCS.js";import"./index-Cpwr9m7H.js";import"./index-C36GduEZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctd-T3Yg.js";import"./addCustomCSSWithScoping-SxSnbZxk.js";import"./index-D288K8il.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./menu-CiWXFcf1.js";import"./home-CcQPs2ty.js";import"./calendar-Cjwv172L.js";import"./history-bycfWVH3.js";import"./background-CUybnORT.js";import"./action-settings-O7S_B-rc.js";import"./locked-DDj73LNR.js";import"./index-CmVGypKR.js";import"./ListItemStandard-4LZiCxap.js";import"./ButtonBadge-BpoSkZo6.js";import"./search-Bp4d8wQh.js";import"./overflow-Byg7Fw0h.js";import"./slim-arrow-down-CByenjbS.js";import"./slim-arrow-down-D7zmqhuW.js";import"./i18n-defaults-uALom2Bu.js";import"./navigation-right-arrow-BbB8iX7b.js";import"./navigation-right-arrow-DaBucJny.js";import"./navigation-down-arrow-B_G4Lrxi.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
`,t.jsx(g,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function NavigationLayoutComponent(props) {
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
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx(h,{children:S}),`
`,t.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(o,{metaOf:i,of:m}),`
`,t.jsx(e.h2,{id:"sidenavigationitem",children:"SideNavigationItem"}),`
`,t.jsx(a,{of:s}),`
`,t.jsx(o,{metaOf:i,of:s}),`
`,t.jsx(e.h2,{id:"sidenavigationsubitem",children:"SideNavigationSubItem"}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(o,{metaOf:i,of:d}),`
`,t.jsx(e.h2,{id:"sidenavigationgroup",children:"SideNavigationGroup"}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(o,{metaOf:i,of:p}),`
`,t.jsx(x,{})]})}function ft(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ft as default};

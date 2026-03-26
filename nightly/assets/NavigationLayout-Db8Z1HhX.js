import{j as t}from"./iframe-EDZrvS0_.js";import{useMDXComponents as c}from"./index-D_Zuzn6o.js";import{A as o}from"./ArgTypesWithNote-DpW5ZM--.js";import{C as l}from"./ControlsWithNote-Jg7jsBfN.js";import{D as g}from"./DocsHeader-BlRpJkzJ.js";import{F as x}from"./Footer-BqU25DvW.js";import"./CommandsAndQueries-DeBGirNK.js";import"./PageNotFound-BnvHWpv6.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-CJ57z4uw.js";import{C as i,D as r}from"./NavigationLayout.stories-CzsDva3t.js";import{S as m,a as s,b as d}from"./index-HiDrGwlM.js";import{S as p}from"./chain-link-C07O20lx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bz0BV9YI.js";import"./information-CAvj8-k7.js";import"./sys-enter-2-Eez9oUbi.js";import"./alert-nmCIz_tp.js";import"./Tag-Cv2B1DS4.js";import"./index-DezAYIwY.js";import"./index-CZdLboFr.js";import"./Link-B5fvjtF5.js";import"./copy-DNtWNSim.js";import"./copy-Duyva9GD.js";import"./GitHub-Mark-BxmMkbzC.js";import"./TableOfContent-CKHhbrGg.js";import"./index-D6CBwRDo.js";import"./index-cZywnC0F.js";import"./index-bU8se7-X.js";import"./index-C-NT2IXI.js";import"./index-dnOa7Ewn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_EBjNmUx.js";import"./addCustomCSSWithScoping-2V-LQLPO.js";import"./Illustrations-Cp5J5qhx.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DtlEF91M.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./menu-D9-YaWVh.js";import"./home-CC8ZeKIQ.js";import"./calendar-Danh0q6q.js";import"./history-CM08z9Dq.js";import"./background-Bpinl7a7.js";import"./action-settings-BuwOdim2.js";import"./locked-CoTFnivm.js";import"./index-vJjJ4OoV.js";import"./query-CzSBusdE.js";import"./ButtonBadge-DsOLba1Z.js";import"./ListItemStandard-CnWB-RIw.js";import"./search-0RoSqSQb.js";import"./overflow-DED5LJa3.js";import"./navigation-right-arrow-CG4JKzco.js";import"./navigation-right-arrow-CUEAwi3f.js";import"./navigation-down-arrow-DFC2-NJZ.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
`,t.jsx(x,{})]})}function Nt(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{Nt as default};

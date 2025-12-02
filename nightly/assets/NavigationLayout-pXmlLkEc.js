import{j as t}from"./iframe-B5_Arj0w.js";import{useMDXComponents as c}from"./index-C5nExjBH.js";import{A as o}from"./ArgTypesWithNote-CcvI9Ema.js";import{C as l}from"./ControlsWithNote-RC0KwfIN.js";import{D as g}from"./DocsHeader-R0l67TN5.js";import{F as x}from"./CommandsAndQueries-DVJBDd6t.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-COnGRWLL.js";import{C as i,D as r}from"./NavigationLayout.stories-CuiZN-cR.js";import{S as m,a as s,b as d}from"./index-BX2CQSq0.js";import{S as p}from"./chain-link-DK60-KL1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-c-guL6iQ.js";import"./information-DnWQdbsO.js";import"./sys-enter-2-yT9c6yra.js";import"./alert-B0if0F-6.js";import"./Tag-BJnasszI.js";import"./index-lFnbjF6s.js";import"./index-B-64gK_m.js";import"./Link-DYcelBM6.js";import"./copy-DUyNBGP7.js";import"./copy-C_i6TFMR.js";import"./GitHub-Mark-BZiEvxen.js";import"./TableOfContent-BVkhO1lE.js";import"./index-BHuFfOWM.js";import"./index-BNDO-MHt.js";import"./index-D9R5EBek.js";import"./index-C4ir_qvG.js";import"./index-NifsWW0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hIZvC53N.js";import"./addCustomCSSWithScoping-C5sFpCeo.js";import"./index-DRFHgset.js";import"./parameters-bundle.css-BaExaGb0.js";import"./menu-D2ciHLG5.js";import"./home-DA-w-GFJ.js";import"./calendar-BfzNQL32.js";import"./history-VMxYjvHL.js";import"./background-D67Nbbon.js";import"./action-settings-Bzv9Oilt.js";import"./locked-D_0iovtZ.js";import"./index-WYxG4Wd0.js";import"./ListItemStandard-DptIuS1G.js";import"./ButtonBadge-CgKVN6SL.js";import"./search-B-AsgXvA.js";import"./overflow-Br9DIDct.js";import"./slim-arrow-down-DW1b3FK1.js";import"./slim-arrow-down-B_ZZxhZi.js";import"./i18n-defaults-k5o3Svb4.js";import"./navigation-right-arrow-DtDmCQPg.js";import"./navigation-right-arrow-gdBHzM4T.js";import"./navigation-down-arrow-DVKMSsJc.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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

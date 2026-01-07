import{j as t}from"./iframe-vPuL6nrR.js";import{useMDXComponents as c}from"./index-SqnB7SsH.js";import{A as o}from"./ArgTypesWithNote-CUtkZwAJ.js";import{C as l}from"./ControlsWithNote-a1UinLEk.js";import{D as g}from"./DocsHeader-CSCF6kAf.js";import{F as x}from"./CommandsAndQueries-BhV0DcZ1.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-CGVrLY5L.js";import{C as i,D as r}from"./NavigationLayout.stories-DKOC2zWM.js";import{S as m,a as s,b as d}from"./index-BnyyF0QJ.js";import{S as p}from"./chain-link-BdhPjode.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrDwtJBU.js";import"./information-D9zj9sOE.js";import"./sys-enter-2-D6w_QQfA.js";import"./alert-C_Ss2xwM.js";import"./Tag-Bv6LdF2m.js";import"./index-CfldzWz8.js";import"./index-BrWx5AOh.js";import"./Link-eKxzOHxo.js";import"./copy-QG4ReKgs.js";import"./copy-DGJagZ4x.js";import"./GitHub-Mark-BYVMr9TD.js";import"./TableOfContent-Tu4xnnoI.js";import"./index-MOLGybyv.js";import"./index-D8Laxk3p.js";import"./index-C6iociGO.js";import"./index-DeGdMjr2.js";import"./index-D5bO2WHW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQtnDDkb.js";import"./addCustomCSSWithScoping-Ddp0ymp7.js";import"./index-jCVlr8uP.js";import"./parameters-bundle.css-B37gDvcF.js";import"./menu-B0TYstcq.js";import"./home-Ihmsmtgo.js";import"./calendar-CZzz6aVG.js";import"./history-DR5vvf1z.js";import"./background-LPmPoOSS.js";import"./action-settings-VZty-_id.js";import"./locked-BPA9Xx9u.js";import"./index-BfyJiWLz.js";import"./ListItemStandard-CImLKtWb.js";import"./ButtonBadge-ZCs4ToyG.js";import"./search-DuZ41SvL.js";import"./overflow-Cr5YtXgs.js";import"./slim-arrow-down-C84_eyIp.js";import"./slim-arrow-down-B1T99V5w.js";import"./i18n-defaults-BoKY-OR9.js";import"./navigation-right-arrow-DIDO5vFl.js";import"./navigation-right-arrow-BR8wObxR.js";import"./navigation-down-arrow-zIYYcACt.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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

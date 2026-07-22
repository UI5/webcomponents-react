import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-BUD3sqOU.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{l as a,u as o}from"./Button-DwqiVlgJ.js";import{n as s,t as c}from"./Button-D-CeXax-.js";import{t as l}from"./enums-Cmq13P-3.js";import{a as u,s as d}from"./FlexBoxWrap-CqUwz-ch.js";import{n as f,t as p}from"./FlexBox-BD3jRHLw.js";import{n as m,t as h}from"./Text-BGpaBiln.js";import{i as g,n as _,r as v,t as y}from"./ListItemStandard-CVl5r8jp.js";import{t as b}from"./Title-C4-XBDPx.js";import{n as x,t as S}from"./Label-StrK3iNE.js";import{t as C}from"./Bar-B7HkFJSM.js";import{H as w,U as T,V as E,W as D}from"./webComponents-C7Gc6mRT.js";import{a as O,n as k,o as A,t as j}from"./Avatar-DwoYrRp0.js";import{n as M,t as N}from"./Card-BfKrJ4pt.js";import{n as P,t as F}from"./CardHeader-DO9wE3xU.js";import{n as I,t as L}from"./RatingIndicator-DRB5KzuI.js";import{n as R,t as z}from"./ShellBar-CSSCG_O_.js";import{J as B,q as V,u as H}from"./iframe-BlFwa8mT.js";var U=n({Default:()=>q,WithDifferentColumns:()=>J,__namedExportsOrder:()=>Z,default:()=>K}),W,G,K,q,J,Y,X,Z,Q=e((()=>{A(),B(),o(),D(),W=t(r(),1),f(),l(),H(),m(),k(),s(),M(),P(),x(),g(),_(),I(),R(),w(),G=i(),K={title:`Layouts & Floorplans / FlexibleColumnLayout`,component:E,argTypes:{endColumn:{control:{disable:!0}},midColumn:{control:{disable:!0}},startColumn:{control:{disable:!0}}},args:{layout:T.ThreeColumnsMidExpanded},tags:[`package:@ui5/webcomponents-fiori`]},q={render(e){return(0,G.jsx)(E,{...e,layout:e.layout,startColumn:(0,G.jsxs)(v,{headerText:`Start Column List`,children:[(0,G.jsx)(y,{text:`List Item 1`}),(0,G.jsx)(y,{text:`List Item 2`}),(0,G.jsx)(y,{text:`List Item 3`}),(0,G.jsx)(y,{text:`List Item 4`}),(0,G.jsx)(y,{text:`List Item 5`})]}),midColumn:(0,G.jsxs)(v,{headerText:`Mid Column List`,children:[(0,G.jsx)(y,{text:`List Item 1`}),(0,G.jsx)(y,{text:`List Item 2`}),(0,G.jsx)(y,{text:`List Item 3`}),(0,G.jsx)(y,{text:`List Item 4`}),(0,G.jsx)(y,{text:`List Item 5`})]}),endColumn:(0,G.jsxs)(v,{headerText:`End Column List`,children:[(0,G.jsx)(y,{text:`List Item 1`}),(0,G.jsx)(y,{text:`List Item 2`}),(0,G.jsx)(y,{text:`List Item 3`}),(0,G.jsx)(y,{text:`List Item 4`}),(0,G.jsx)(y,{text:`List Item 5`})]})})}},J={render(){let[e,t]=(0,W.useState)(T.OneColumn),[n,r]=(0,W.useState)(Y[0]),[i,o]=(0,W.useState)(X[0]);return(0,G.jsx)(E,{style:{height:`600px`},layout:e,startColumn:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(z,{logo:(0,G.jsx)(`img`,{src:`https://raw.githubusercontent.com/UI5/webcomponents-react/main/assets/Logo-Sticker.png`}),primaryTitle:`Movie DB`}),(0,G.jsx)(v,{headerText:`Movies`,onItemClick:e=>{r(Y.find(t=>t.movie===e.detail.item.dataset.movie)),t(T.TwoColumnsMidExpanded)},children:Y.map(e=>(0,G.jsx)(y,{description:e.genre,"data-movie":e.movie,text:e.movie},e.movie))})]}),midColumn:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(C,{design:V.Header,startContent:(0,G.jsx)(b,{children:n.movie}),endContent:(0,G.jsx)(c,{icon:`decline`,design:a.Transparent,onClick:()=>{t(T.OneColumn)}})}),(0,G.jsxs)(p,{style:{padding:`0.5rem 1rem`},alignItems:d.Center,children:[(0,G.jsx)(j,{icon:`video`,size:O.XL,style:{marginInline:`0.5rem`}}),(0,G.jsxs)(p,{direction:u.Column,children:[(0,G.jsxs)(p,{children:[(0,G.jsx)(S,{children:`Movie:`}),(0,G.jsx)(h,{style:{marginLeft:`2px`},children:n.movie})]}),(0,G.jsxs)(p,{children:[(0,G.jsx)(S,{children:`Genre:`}),(0,G.jsx)(h,{style:{marginLeft:`2px`},children:n.genre})]}),(0,G.jsxs)(p,{children:[(0,G.jsx)(S,{children:`Country:`}),(0,G.jsx)(h,{style:{marginLeft:`2px`},children:n.country})]})]}),(0,G.jsx)(`span`,{style:{flexGrow:1}}),(0,G.jsx)(L,{style:{marginLeft:`100px`},value:Math.floor(Math.random()*5)+1})]}),(0,G.jsx)(v,{headerText:`Cast`,onItemClick:e=>{o(X.find(t=>t.name===e.detail.item.dataset.name)),t(T.ThreeColumnsEndExpanded)},children:X.map(e=>(0,G.jsx)(y,{description:e.gender,"data-name":e.name,text:e.name},e.name))})]}),endColumn:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(C,{design:V.Header,startContent:(0,G.jsx)(b,{children:i.name}),endContent:(0,G.jsx)(c,{icon:`decline`,design:a.Transparent,onClick:()=>{t(T.TwoColumnsMidExpanded)}})}),(0,G.jsx)(N,{header:(0,G.jsx)(F,{avatar:(0,G.jsx)(j,{icon:`person-placeholder`}),titleText:i.name,subtitleText:`age: ${Math.floor(Math.random()*58+18)}`,additionalText:i.gender}),children:(0,G.jsx)(`div`,{style:{padding:`1rem`},children:(0,G.jsx)(h,{children:`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`})})})]})})}},Y=[{movie:`Shanghai`,genre:`Crime|Thriller`,country:`Russia`},{movie:`Punk Syndrome, The (Kovasikajuttu)`,genre:`Documentary`,country:`Poland`},{movie:`Corridors of Blood`,genre:`Crime|Drama|Horror|Thriller`,country:`Germany`},{movie:`Three Faces East`,genre:`Drama|Mystery|War`,country:`Russia`},{movie:`Grave Secrets (Silent Screams)`,genre:`Horror`,country:`Russia`},{movie:`Dead Outside, The`,genre:`Horror|Mystery|Thriller`,country:`Poland`},{movie:`Cosmos`,genre:`Documentary`,country:`Russia`},{movie:`UHF`,genre:`Comedy`,country:`Mexico`},{movie:`Superweib, Das`,genre:`Comedy`,country:`Poland`},{movie:`It's Good to Be Alive`,genre:`Drama`,country:`Belarus`},{movie:`Last Action Hero`,genre:`Action|Adventure|Comedy|Fantasy`,country:`Russia`},{movie:`Nibelungen: Kriemhild's Revenge, Die (Die Nibelungen: Kriemhilds Rache)`,genre:`Adventure|Drama|Fantasy`,country:`Russia`},{movie:`Roller Boogie`,genre:`Drama`,country:`Brazil`},{movie:`Amore (L'Amore)`,genre:`Drama`,country:`Poland`},{movie:`Dust of Time, The`,genre:`Drama`,country:`Poland`},{movie:`Far Side of the Moon, The (Face cachée de la lune, La)`,genre:`Drama`,country:`Brazil`},{movie:`Take Care of Your Scarf, Tatiana (Pidä huivista kiinni, Tatjana)`,genre:`Comedy`,country:`Poland`},{movie:`Trail Beyond, The`,genre:`Action|Adventure|Western`,country:`Russia`},{movie:`Mood Indigo (L'écume des jours)`,genre:`Drama|Fantasy`,country:`Russia`},{movie:`Alpha and Omega`,genre:`Adventure|Animation|Children|Comedy|Romance`,country:`France`},{movie:`Battleship Potemkin`,genre:`Drama|War`,country:`United Kingdom`},{movie:`Rites of May, The (Itim) `,genre:`Drama|Horror|Thriller`,country:`Brazil`},{movie:`Black Waters of Echo's Pond, The`,genre:`Fantasy|Horror|Thriller`,country:`France`},{movie:`Speed`,genre:`Action|Romance|Thriller`,country:`Brazil`},{movie:`Ladybird Ladybird`,genre:`Drama`,country:`Poland`},{movie:`War, Inc.`,genre:`Comedy|Crime|Thriller`,country:`Brazil`},{movie:`Company of Heroes`,genre:`Action|War`,country:`United States`},{movie:`Secret Glory, The`,genre:`Documentary`,country:`Poland`},{movie:`Three Musketeers, The`,genre:`Action|Adventure|Romance`,country:`France`},{movie:`Secrets of the Heart (Secretos del Corazón)`,genre:`Drama`,country:`Japan`}],X=[{name:`Clywd Gimeno`,gender:`Male`},{name:`Essie Gadson`,gender:`Female`},{name:`Claresta Greger`,gender:`Female`},{name:`Susanne Pinson`,gender:`Female`},{name:`Gardener Cutford`,gender:`Male`},{name:`Red Swyer-Sexey`,gender:`Male`},{name:`Alyson Bachellier`,gender:`Female`},{name:`Amata Penke`,gender:`Female`},{name:`Ancell Aprahamian`,gender:`Male`},{name:`Kimmy Sworne`,gender:`Female`},{name:`Liam Umpleby`,gender:`Male`},{name:`Caleb Trathen`,gender:`Male`},{name:`Starlin Kibard`,gender:`Female`},{name:`Keefe Brammall`,gender:`Male`},{name:`Terrill Reeme`,gender:`Male`},{name:`Gerianne Maciejak`,gender:`Female`},{name:`Wilhelmine Cutmare`,gender:`Female`},{name:`Rodie Breukelman`,gender:`Female`},{name:`Eduard Berk`,gender:`Male`},{name:`Phil Koppens`,gender:`Female`}],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <FlexibleColumnLayout {...args} layout={args.layout} startColumn={<List headerText="Start Column List">
            <ListItemStandard text="List Item 1" />
            <ListItemStandard text="List Item 2" />
            <ListItemStandard text="List Item 3" />
            <ListItemStandard text="List Item 4" />
            <ListItemStandard text="List Item 5" />
          </List>} midColumn={<List headerText="Mid Column List">
            <ListItemStandard text="List Item 1" />
            <ListItemStandard text="List Item 2" />
            <ListItemStandard text="List Item 3" />
            <ListItemStandard text="List Item 4" />
            <ListItemStandard text="List Item 5" />
          </List>} endColumn={<List headerText="End Column List">
            <ListItemStandard text="List Item 1" />
            <ListItemStandard text="List Item 2" />
            <ListItemStandard text="List Item 3" />
            <ListItemStandard text="List Item 4" />
            <ListItemStandard text="List Item 5" />
          </List>} />;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render() {
    const [layout, setLayout] = useState(FCLLayout.OneColumn);
    const [selectedMovie, setSelectedMovie] = useState(movieData[0]);
    const [selectedCast, setSelectedCast] = useState(castData[0]);
    const onStartColumnClick = e => {
      setSelectedMovie(movieData.find(item => item.movie === e.detail.item.dataset.movie));
      setLayout(FCLLayout.TwoColumnsMidExpanded);
    };
    const onMiddleColumnClick = e => {
      setSelectedCast(castData.find(item => item.name === e.detail.item.dataset.name));
      setLayout(FCLLayout.ThreeColumnsEndExpanded);
    };
    return <FlexibleColumnLayout style={{
      height: '600px'
    }} layout={layout} startColumn={<>
            <ShellBar logo={<img src="https://raw.githubusercontent.com/UI5/webcomponents-react/main/assets/Logo-Sticker.png" />} primaryTitle="Movie DB" />
            <List headerText="Movies" onItemClick={onStartColumnClick}>
              {movieData.map(item => <ListItemStandard description={item.genre} data-movie={item.movie} key={item.movie} text={item.movie} />)}
            </List>
          </>} midColumn={<>
            <Bar design={BarDesign.Header} startContent={<Title>{selectedMovie.movie}</Title>} endContent={<Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
        setLayout(FCLLayout.OneColumn);
      }} />} />
            <FlexBox style={{
        padding: '0.5rem 1rem'
      }} alignItems={FlexBoxAlignItems.Center}>
              <Avatar icon="video" size={AvatarSize.XL} style={{
          marginInline: '0.5rem'
        }} />
              <FlexBox direction={FlexBoxDirection.Column}>
                <FlexBox>
                  <Label>Movie:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.movie}</Text>
                </FlexBox>
                <FlexBox>
                  <Label>Genre:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.genre}</Text>
                </FlexBox>
                <FlexBox>
                  <Label>Country:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.country}</Text>
                </FlexBox>
              </FlexBox>
              <span style={{
          flexGrow: 1
        }} />
              <RatingIndicator style={{
          marginLeft: '100px'
        }} value={Math.floor(Math.random() * 5) + 1} />
            </FlexBox>
            <List headerText="Cast" onItemClick={onMiddleColumnClick}>
              {castData.map(item => <ListItemStandard description={item.gender} data-name={item.name} key={item.name} text={item.name} />)}
            </List>
          </>} endColumn={<>
            <Bar design={BarDesign.Header} startContent={<Title>{selectedCast.name}</Title>} endContent={<Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
        setLayout(FCLLayout.TwoColumnsMidExpanded);
      }} />} />
            <Card header={<CardHeader avatar={<Avatar icon="person-placeholder" />} titleText={selectedCast.name} subtitleText={\`age: \${Math.floor(Math.random() * (75 - 18 + 1) + 18)}\`} additionalText={selectedCast.gender} />}>
              <div style={{
          padding: '1rem'
        }}>
                <Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Text>
              </div>
            </Card>
          </>} />;
  }
}`,...J.parameters?.docs?.source}}},Z=[`Default`,`WithDifferentColumns`]}));Q();export{q as Default,J as WithDifferentColumns,Z as __namedExportsOrder,K as default,Q as n,U as t};
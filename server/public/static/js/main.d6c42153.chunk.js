(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{133:function(e,t,n){},144:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(0),o=n.n(i),c=n(18),r=n.n(c),s=(n(133),n(200)),l=n(116),d=n(19),m=n(117),j=Object(m.a)({typography:{fontFamily:'"Roboto"',fontSize:12,h1:{}},palette:{primary:{main:"#96bf48",light:"#C0D891",dark:"#5A722B"},secondary:{main:"#DF3B57",pale:"#fbf7ed"}}}),b=n(22),h=n(179),u=n(187),x=n(188),p=n(121),O=n(186),g=n(201),f=Object(i.createContext)(),v=function(e){var t=e.children,n=Object(i.useState)(""),o=Object(b.a)(n,2),c=o[0],r=o[1];return Object(a.jsx)(f.Provider,{value:{movieKeyword:c,setMovieKeyword:r},children:t})},y=n(52),C=n(29),N=n(203),w=n(182),T=n(183),k=n(184),D=n(185),I=Object(i.createContext)(),S=function(e){var t=e.children,n=Object(i.useState)({}),o=Object(b.a)(n,2),c=o[0],r=o[1];return Object(a.jsx)(I.Provider,{value:{nominees:c,setNominees:r},children:t})},B=Object(h.a)((function(e){return{posterContainer:{"&.MuiDialogContent-root":{height:"100%"},width:"100%",display:"flex",justifyContent:"center"},dialogTitle:{"& .MuiTypography-root":{fontSize:"x-Large"},textAlign:"center",textDecoration:"underline",fontSize:"x-large"},nomineeContainer:{display:"flex",alignItems:"flex-start"},poster:{maxWidth:"100%",height:"auto",width:"auto"},nominee:{maxWidth:"fit-content",display:"flex",flexDirection:"column","&.MuiDialogContent-root:first-child":{paddingTop:"8px"}},nomineeTitle:{textAlign:"center",fontSize:"med"},buttonContainer:{display:"flex",justifyContent:"center"},removeButton:{backgroundColor:e.palette.primary.dark,color:"white"},nomineeActions:{backgroundColor:e.palette.secondary.pale,paddingBottom:"24px",height:"150px"}}})),M=function(e){var t=B(),n=Object(i.useContext)(I);var o=Object(i.useState)(!0),c=Object(b.a)(o,2),r=c[0],s=c[1];return Object(i.useEffect)((function(){for(var e in n.nominees){if(n.nominees[e])return void s(!1);s(!0)}}),[n.nominees]),Object(a.jsx)(N.a,{open:e.open,onClose:function(){e.handleClose()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:t.root,fullWidth:!0,maxWidth:"xl",children:r?Object(a.jsx)(w.a,{className:t.dialogTitle,id:"alert-dialog-title",children:"No movies! You can nominate up to five, and they'll be displayed here."}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w.a,{className:t.dialogTitle,id:"alert-dialog-title",children:"Your Nominated Movies"}),Object(a.jsx)(T.a,{className:t.nomineeContainer,children:Object.keys(n.nominees).map((function(e){return n.nominees[e]?Object(a.jsxs)(T.a,{className:t.nominee,children:[Object(a.jsx)("img",{className:t.poster,alt:"poster for ".concat(n.nominees[e].poster),src:n.nominees[e].poster}),Object(a.jsxs)(T.a,{className:t.nomineeActions,children:[Object(a.jsx)(k.a,{className:t.nomineeTitle,children:n.nominees[e].title}),Object(a.jsx)(D.a,{className:t.buttonContainer,children:Object(a.jsx)(O.a,{onClick:function(t){!function(e,t){n.setNominees(Object(C.a)(Object(C.a)({},n.nominees),{},Object(y.a)({},t,"")))}(0,e)},className:t.removeButton,children:"Remove"})})]})]},e):""}))})]})})},W=Object(h.a)((function(e){return{navContainer:{display:"flex",justifyContent:"space-around",backgroundColor:e.palette.primary.main,position:"fixed",width:"100%",boxShadow:"1px 5px 17px grey"},root:{border:"1px solid #e2e2e1",borderRadius:4,backgroundColor:"#fbf7ed"},name:{marginTop:"18px",color:e.palette.secondary.pale,fontWeight:"bold"},nomineeButton:{backgroundColor:e.palette.secondary.pale,"&:hover":{backgroundColor:e.palette.secondary.pale},color:"gray",marginRight:"10%",boxShadow:"1px 5px 17px grey"}}})),z=function(){var e=W(),t=Object(i.useContext)(f),n=Object(i.useState)(""),o=Object(b.a)(n,2),c=o[0],r=o[1],s=Object(i.useState)(!1),l=Object(b.a)(s,2),d=l[0],m=l[1];return Object(a.jsxs)(u.a,{position:"relative",children:[Object(a.jsxs)(x.a,{className:e.navContainer,children:[Object(a.jsx)(p.a,{className:e.name,component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"The Shoppies"}),Object(a.jsx)(O.a,{onClick:function(){m(!0)},className:e.nomineeButton,children:"Nominees"}),Object(a.jsx)(p.a,{variant:"h6",color:"inherit",noWrap:!0,children:Object(a.jsx)("form",{onSubmit:function(e){!function(e){e.preventDefault(),localStorage.setItem("searchTerm",c),t.setMovieKeyword(c)}(e)},children:Object(a.jsx)(g.a,{className:e.root,InputProps:{disableUnderline:!0},id:"standard-full-width",placeholder:"Title Keywords",fullWidth:!0,InputLabelProps:{shrink:!0},onChange:function(e){return r(e.target.value)}})})})]}),Object(a.jsx)(M,{open:d,handleClose:function(){m(!1)}})]})},A=n(61),P=n(197),U=n(198),$=n(199),F=n(190),L=n(191),R=n(192),Y=n(193),q=n(194),E=n(195),K=n(113),G=n.n(K),H=n(114),J=n.n(H),Q=Object(h.a)((function(e){return{dialogBox:{"&.MuiPaper-root":{width:"75%",height:"75%"}},posterContainer:{"&.MuiDialogContent-root":{height:"100%"},width:"100%",display:"flex",justifyContent:"center"},dialogTitle:{"& .MuiTypography-root":{fontSize:"x-Large"},textAlign:"center"},extraInfoItem:{display:"flex",flexDirection:"column",alignItems:"center",fontWeight:"bold",marginBottom:"2%",fontSize:"small",marginLeft:"5%"},description:{fontWeight:"bold",fontSize:"small"},extraInfo:{marginBottom:"3%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},extraInfoText:{textAlign:"center",fontWeight:"normal"},imdbLink:{textDecoration:"none",color:e.palette.secondary.main}}})),V=function(e){var t=Q();function n(){e.handleClose()}return Object(a.jsx)("div",{children:Object(a.jsxs)(N.a,{open:e.open,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:t.dialogBox,children:[Object(a.jsx)(w.a,{className:t.dialogTitle,id:"alert-dialog-title",children:e.details.Title}),Object(a.jsx)(T.a,{className:t.contentContainer,children:Object(a.jsxs)("div",{id:"movieInfo",className:t.posterContainer,children:[Object(a.jsx)("img",{alt:"poster for ".concat(e.details.Title),src:e.details.Poster}),Object(a.jsxs)("div",{className:t.extraInfo,children:[Object(a.jsxs)("div",{className:t.extraInfoItem,children:["Date Released: ",Object(a.jsx)("div",{className:t.extraInfoText,children:e.details.Year})]}),Object(a.jsxs)("div",{className:t.extraInfoItem,children:["Director(s): ",Object(a.jsxs)("div",{className:t.extraInfoText,children:[e.details.Director," "]})]}),Object(a.jsxs)("div",{className:t.extraInfoItem,children:["Writer(s): ",Object(a.jsxs)("div",{className:t.extraInfoText,children:[e.details.Writer,"  "]})]}),Object(a.jsxs)("div",{className:t.extraInfoItem,children:["Cast: ",Object(a.jsx)("div",{className:t.extraInfoText,children:e.details.Actors})]})]})]})}),Object(a.jsxs)(T.a,{children:[Object(a.jsx)("div",{className:t.description,children:"Description:"}),Object(a.jsx)(k.a,{id:"alert-dialog-description",children:e.details.Plot})]}),Object(a.jsxs)(D.a,{className:t.dialogButtons,children:[Object(a.jsx)(O.a,{autoFocus:!0,onClick:e.onClose,children:Object(a.jsx)("a",{className:t.imdbLink,href:"https://www.imdb.com/title/".concat(e.details.id,"/"),children:"IMDB Page"})}),Object(a.jsx)(O.a,{onClick:n,color:"secondary",autoFocus:!0,children:"Close"})]})]})})},X=n(32),Z=n(204),_=n(196),ee=n(115),te=n.n(ee);function ne(){var e=Object(A.a)(["\n  mutation modifyRating($id:String!,$ThumbsUp:Int!,$ThumbsDown:Int!){\n    modifyRating(id:$id,ThumbsUp:$ThumbsUp,ThumbsDown:$ThumbsDown){\n      id\n      ThumbsUp\n      ThumbsDown\n    }\n  }\n"]);return ne=function(){return e},e}function ae(){var e=Object(A.a)(["\n  mutation addMovie($id:String!,$mdbCheck:Boolean!){\n    addMovie(id:$id,mdbCheck:$mdbCheck){\n      id\n      mdbCheck\n    }\n  }\n"]);return ae=function(){return e},e}var ie=Object(h.a)((function(e){return{cardCounter:{display:"flex",justifyContent:"space-around"},counter:{fontSize:"large",fontWeight:"bold"},card:{height:"100%",display:"flex",flexDirection:"column",minHeight:275,maxWidth:270,backgroundColor:e.palette.secondary.pale},cardMedia:{paddingTop:"100%"},cardContent:{flexGrow:1},cardActions:{justifyContent:"center"},cardButtons:{color:e.palette.secondary.main},title:{"& .MuiTypography-root":{fontSize:"x-Large"},textAlign:"center"}}})),oe=Object(X.gql)(ae()),ce=Object(X.gql)(ne()),re=function(e){var t=Object(i.useState)(!1),n=Object(b.a)(t,2),c=n[0],r=n[1],s=Object(i.useState)({thumbsUp:!1,thumbsDown:!1}),l=Object(b.a)(s,2),d=l[0],m=l[1],j=Object(i.useState)(0),h=Object(b.a)(j,2),u=h[0],x=h[1],g=Object(i.useState)(0),f=Object(b.a)(g,2),v=f[0],N=f[1],w=Object(i.useContext)(I),T=Object(i.useState)(!1),k=Object(b.a)(T,2),D=k[0],S=k[1],B=Object(i.useState)(""),M=Object(b.a)(B,2),W=M[0],z=M[1],A=Object(i.useState)(!1),P=Object(b.a)(A,2),U=P[0],$=P[1],K=Object(X.useMutation)(oe),H=Object(b.a)(K,1)[0],Q=Object(X.useMutation)(ce),ee=Object(b.a)(Q,1)[0];function ne(e,t){"clickaway"!==t&&$(!1)}function ae(t){if(e.movie.mdbCheck||H({variables:{id:e.movie.id,mdbCheck:!0}}),"up"===t){if(d.thumbsDown)return;d.thumbsUp||(x(u+=1),m(Object(C.a)(Object(C.a)({},d),{},{thumbsUp:!0}))),d.thumbsUp&&(x(u-=1),m(Object(C.a)(Object(C.a)({},d),{},{thumbsUp:!1})))}if("down"===t){if(d.thumbsUp)return;d.thumbsDown||(N(v+=1),m(Object(C.a)(Object(C.a)({},d),{},{thumbsDown:!0}))),d.thumbsDown&&(N(v-=1),m(Object(C.a)(Object(C.a)({},d),{},{thumbsDown:!1})))}ee({variables:{id:e.movie.id,ThumbsUp:u,ThumbsDown:v}})}function re(){r(!0)}Object(i.useEffect)((function(){w.nominees[e.movie.id]||S(!1)}),[w]),Object(i.useEffect)((function(){e.movie.mdbCheck?(x(e.movie.ThumbsUp),N(e.movie.ThumbsDown)):(x(0),x(0))}),[e.movie]);var se=ie();return Object(a.jsxs)(F.a,{item:!0,md:4,children:[Object(a.jsxs)(L.a,{className:se.card,children:[Object(a.jsx)(R.a,{onClick:re,children:Object(a.jsx)(Y.a,{className:se.cardMedia,image:e.movie.Poster,title:"Image title"})}),Object(a.jsx)(q.a,{className:se.cardContent,children:Object(a.jsx)(p.a,{className:se.title,gutterBottom:!0,variant:"h5",component:"h2",children:e.movie.Title})}),Object(a.jsxs)(q.a,{className:se.cardCounter,children:[Object(a.jsx)("div",{className:se.counter,style:{color:"#12395E"},children:u}),Object(a.jsx)(o.a.Fragment,{}),Object(a.jsx)("div",{className:se.counter,style:{color:"red"},children:v})]}),Object(a.jsxs)(E.a,{className:se.cardActions,children:[Object(a.jsx)(O.a,{onClick:function(){ae("up")},className:se.cardButtons,size:"small",color:"primary",children:Object(a.jsx)(G.a,{})}),Object(a.jsx)(O.a,{className:se.cardButtons,size:"small",color:"primary",onClick:re,children:"More Info"}),Object(a.jsx)(O.a,{onClick:function(){!function(){if(D)return $(!0),void z("You've already nominated ".concat(e.movie.Title,"."));var t=0;for(var n in w.nominees){if(t>=4)return $(!0),void z("You can only nominate five movies. Remove one from your list first.");w.nominees[n]&&(console.log(t),t+=1)}console.log(w.nominees),w.setNominees(Object(C.a)(Object(C.a)({},w.nominees),{},Object(y.a)({},e.movie.id,{title:e.movie.Title,poster:e.movie.Poster}))),z("Added ".concat(e.movie.Title," to your list!")),$(!0),S(!0)}()},className:se.cardButtons,size:"small",color:"primary",children:"Nominate"}),Object(a.jsx)(O.a,{onClick:function(){ae("down")},className:se.cardButtons,size:"small",color:"primary",children:Object(a.jsx)(J.a,{})})]})]}),Object(a.jsx)(Z.a,{open:U,autoHideDuration:6e3,onClose:ne,message:W,action:Object(a.jsx)(o.a.Fragment,{children:Object(a.jsx)(_.a,{size:"small","aria-label":"close",color:"inherit",onClick:ne,children:Object(a.jsx)(te.a,{fontSize:"small"})})})}),Object(a.jsx)(V,{details:e.movie,open:c,handleClose:function(){r(!1)}})]})},se=n.p+"static/media/githubLogo.e2f07326.svg",le=n.p+"static/media/linkedinLogo.27a3f479.svg";function de(){var e=Object(A.a)(["\n  query moviesQuery($searchterm: String!) {\n    movies(searchterm:$searchterm) {\n      id\n      mdbCheck\n      Title\n      Year\n      Poster\n      Plot\n      Director\n      Actors\n      Writer\n      ThumbsUp\n      ThumbsDown\n  }\n}"]);return de=function(){return e},e}var me=Object(h.a)((function(e){return{mainContainer:{backgroundColor:e.palette.primary.light},icon:{marginRight:e.spacing(2)},heroContent:{padding:e.spacing(15,0,6),backgroundColor:e.palette.secondary.pale},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},heroText:{fontWeight:"bold",textDecoration:"underline"},loading:{color:"white"},loadingContainer:{display:"flex",justifyContent:"center",paddingTop:"10%",paddingBottom:"10%"},footer:{backgroundColor:e.palette.background.paper,padding:"2%"},iconContainer:{display:"flex",justifyContent:"space-evenly",marginLeft:"25%",marginRight:"25%",paddingTop:"1%"}}})),je=Object(X.gql)(de());function be(){var e=Object(i.useContext)(f),t=Object(X.useQuery)(je,{variables:{searchterm:e.movieKeyword||"twilight"}}),n=t.loading,c=t.data,r=me();return Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(P.a,{}),Object(a.jsx)(u.a,{position:"relative"}),Object(a.jsxs)("main",{className:r.mainContainer,children:[Object(a.jsx)("div",{className:r.heroContent,children:Object(a.jsxs)(U.a,{maxWidth:"sm",children:[Object(a.jsx)(p.a,{className:r.heroText,component:"h1",variant:"h2",align:"center",gutterBottom:!0,children:"Rate a Movie Below"}),Object(a.jsx)(p.a,{variant:"h5",align:"center",paragraph:!0,children:"Leave your rating after searching for a movie."}),Object(a.jsx)(p.a,{variant:"h5",align:"center",paragraph:!0,children:'Click the "Nominate" button to add it to your list of nominations.'}),Object(a.jsx)(p.a,{variant:"h5",align:"center",paragraph:!0,children:"You can only nominate five, and you can only vote once on each movie!"})]})}),n?Object(a.jsx)("div",{className:r.loadingContainer,children:Object(a.jsx)($.a,{className:r.loading})}):Object(a.jsx)(a.Fragment,{}),Object(a.jsx)(U.a,{className:r.cardGrid,maxWidth:"lg",children:c?Object(a.jsx)(F.a,{container:!0,spacing:4,children:c.movies.map((function(e){return Object(a.jsx)(re,{movie:e},e.imdbID)}))}):Object(a.jsx)("div",{children:!1===n?Object(a.jsx)("div",{className:r.errorMessage,children:"No movies found. Try another search"}):Object(a.jsx)(a.Fragment,{})})})]}),Object(a.jsxs)("footer",{className:r.footer,children:[Object(a.jsx)(p.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Thank you for checking out this app!"}),Object(a.jsx)(p.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Here are some links to me and my work:"}),Object(a.jsxs)("div",{className:r.iconContainer,children:[Object(a.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/johnt5301",children:Object(a.jsx)("img",{src:le,alt:"github",height:"30px",width:"30px"})}),Object(a.jsx)("a",{className:"link",href:"https://github.com/jt5301",children:Object(a.jsx)("img",{src:se,alt:"github",height:"30px",width:"30px"})})]})]})]})}function he(){return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsx)(v,{children:Object(a.jsxs)(S,{children:[Object(a.jsx)(z,{}),Object(a.jsx)(be,{})]})})})}n(144);var ue=new X.ApolloClient({uri:"http://localhost:3001/graphql",cache:new X.InMemoryCache({}),connectToDevTools:!0});var xe=function(){return Object(a.jsx)(X.ApolloProvider,{client:ue,children:Object(a.jsx)(s.a,{theme:j,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(d.a,{path:"/",component:he})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(xe,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.d6c42153.chunk.js.map
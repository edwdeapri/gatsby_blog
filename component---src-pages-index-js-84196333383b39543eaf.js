(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(A,e,t){"use strict";t.r(e);t(75);var a=t(164),r=t(0),i=t.n(r),n=t(146),o=t(154),s=t.n(o),d=t(150),l=t(151);e.default=function(){return i.a.createElement(n.b,{query:"497116835",render:function(A){return i.a.createElement(d.a,null,i.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),A.allNodeArticle.edges.map(function(A){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,i.a.createElement(n.a,{to:A.node.id},A.node.title)),i.a.createElement("small",null,i.a.createElement("em",null,Date(A.node.created))),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem",width:"100%"}},i.a.createElement(s.a,{fluid:A.node.relationships.field_image.localFile.childImageSharp.fluid})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:A.node.body.value.split(" ").splice(0,50).join(" ")+"..."}}))}))},data:a})}},146:function(A,e,t){"use strict";t.d(e,"b",function(){return l});var a=t(0),r=t.n(a),i=t(4),n=t.n(i),o=t(32),s=t.n(o);t.d(e,"a",function(){return s.a});t(147);var d=r.a.createContext({}),l=function(A){return r.a.createElement(d.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},147:function(A,e,t){var a;A.exports=(a=t(149))&&a.default||a},148:function(A){A.exports={data:{site:{siteMetadata:{title:"Songs from Stevie"}}}}},149:function(A,e,t){"use strict";t.r(e);t(33);var a=t(0),r=t.n(a),i=t(4),n=t.n(i),o=t(54),s=t(2),d=function(A){var e=A.location,t=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:t},t.json))};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},e.default=d},150:function(A,e,t){"use strict";var a=t(148),r=t(0),i=t.n(r),n=t(4),o=t.n(n),s=t(146),d=function(A){var e=A.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var l=d,c=(t(153),function(A){var e=A.children;return i.a.createElement(s.b,{query:"755544856",render:function(A){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:A.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})});c.propTypes={children:o.a.node.isRequired};e.a=c},151:function(A,e,t){"use strict";var a=t(152),r=t(0),i=t.n(r),n=t(4),o=t.n(n),s=t(155),d=t.n(s);function l(A){var e=A.description,t=A.lang,r=A.meta,n=A.keywords,o=A.title,s=a.data.site,l=e||s.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},152:function(A){A.exports={data:{site:{siteMetadata:{title:"Songs from Stevie",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},154:function(A,e,t){"use strict";var a=t(8);e.__esModule=!0,e.default=void 0;var r,i=a(t(7)),n=a(t(34)),o=a(t(73)),s=a(t(74)),d=a(t(0)),l=a(t(4)),c=function(A){var e=(0,s.default)({},A);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},h={},f=function(A){var e=c(A),t=e.fluid?e.fluid.src:e.fixed.src;return h[t]||!1},u=[];var p=function(A,e){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(A){A.forEach(function(A){u.forEach(function(e){e[0]===A.target&&(A.isIntersecting||A.intersectionRatio>0)&&(r.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),r).observe(A),u.push([A,e])},b=function(A){var e=A.src?'src="'+A.src+'" ':'src="" ',t=A.sizes?'sizes="'+A.sizes+'" ':"",a=A.srcSetWebp?"<source type='image/webp' srcset=\""+A.srcSetWebp+'" '+t+"/>":"",r=A.srcSet?'srcset="'+A.srcSet+'" ':"",i=A.title?'title="'+A.title+'" ':"",n=A.alt?'alt="'+A.alt+'" ':'alt="" ',o=A.width?'width="'+A.width+'" ':"",s=A.height?'height="'+A.height+'" ':"",d=A.opacity?A.opacity:"1";return"<picture>"+a+"<img "+o+s+t+r+e+n+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(A.transitionDelay?A.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=d.default.forwardRef(function(A,e){var t=A.sizes,a=A.srcSet,r=A.src,i=A.style,n=A.onLoad,l=A.onError,c=(0,o.default)(A,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,s.default)({sizes:t,srcSet:a,src:r},c,{onLoad:n,onError:l,ref:e,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});g.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var E=function(A){function e(e){var t;t=A.call(this,e)||this;var a=!0,r=!1,i=e.fadeIn,o=f(e);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),e.critical&&(a=!0,r=!1);var s=!(t.props.critical&&!t.props.fadeIn);return t.state={isVisible:a,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:s,seenBefore:o},t.imageRef=d.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)((0,n.default)(t))),t.handleRef=t.handleRef.bind((0,n.default)((0,n.default)(t))),t}(0,i.default)(e,A);var t=e.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var A=this.imageRef.current;A&&A.complete&&this.handleImageLoaded()}},t.handleRef=function(A){var e=this;this.state.IOSupported&&A&&p(A,function(){var A=f(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:A}),e.setState({isVisible:!0,imgLoaded:A})})},t.handleImageLoaded=function(){var A,e,t;A=this.props,e=c(A),t=e.fluid?e.fluid.src:e.fixed.src,h[t]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var A=c(this.props),e=A.title,t=A.alt,a=A.className,r=A.style,i=void 0===r?{}:r,n=A.imgStyle,o=void 0===n?{}:n,l=A.placeholderStyle,h=void 0===l?{}:l,f=A.placeholderClassName,u=A.fluid,p=A.fixed,E=A.backgroundColor,y=A.Tag,m=A.itemProp,w="boolean"==typeof E?"lightgray":E,B=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,h),j=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),Q={title:e,alt:this.state.isVisible?"":t,style:B,className:f};if(u){var v=u;return d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(v.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&d.default.createElement(g,(0,s.default)({src:v.base64},Q)),v.tracedSVG&&d.default.createElement(g,(0,s.default)({src:v.tracedSVG},Q)),w&&d.default.createElement(y,{title:e,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,v.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),d.default.createElement(g,{alt:t,title:e,sizes:v.sizes,src:v.src,srcSet:v.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,s.default)({alt:t,title:e},v))}}))}if(p){var S=p,I=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},i);return"inherit"===i.display&&delete I.display,d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&d.default.createElement(g,(0,s.default)({src:S.base64},Q)),S.tracedSVG&&d.default.createElement(g,(0,s.default)({src:S.tracedSVG},Q)),w&&d.default.createElement(y,{title:e,style:{backgroundColor:w,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement(g,{alt:t,title:e,width:S.width,height:S.height,sizes:S.sizes,src:S.src,srcSet:S.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,s.default)({alt:t,title:e,width:S.width,height:S.height},S))}}))}return null},e}(d.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),m=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});E.propTypes={resolutions:y,sizes:m,fixed:y,fluid:m,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string};var w=E;e.default=w},164:function(A){A.exports={data:{allNodeArticle:{edges:[{node:{id:"2052afb4-873f-5591-8858-561eccbb3765",title:"Pride and Joy",body:{value:"<p>Well you've heard about love givin' sight to the blind<br />\r\nMy baby's lovin' cause the sun to shine<br />\r\nShe's my sweet little thang, she's my pride and joy<br />\r\nShe's my sweet little baby, I'm her little lover boy</p>\r\n\r\n<p>Yeah I love my baby, heart and soul<br />\r\nLove like ours won't never grow old<br />\r\nShe's my sweet little thang, she's my pride and joy<br />\r\nShe's my sweet little baby, I'm her little lover boy</p>\r\n\r\n<p>Yeah I love my lady, she's long and lean<br />\r\nYou mess with her, you'll see a man get mean<br />\r\nShe's my sweet little thang, she's my pride and joy<br />\r\nShe's my sweet little baby, I'm her little lover boy</p>\r\n\r\n<p>Well I love my baby, like the finest wine<br />\r\nStick with her until the end of time<br />\r\nShe's my sweet little thang, she's my pride and joy<br />\r\nShe's my sweet little baby, I'm her little lover boy</p>\r\n\r\n<p>Yeah I love my baby, my heart and soul<br />\r\nLove like ours won't never grow old<br />\r\nShe's my sweet little thang, she's my pride and joy<br />\r\nShe's my sweet little baby, I'm her little lover boy</p>\r\n"},created:"2019-03-11T19:23:41+00:00",relationships:{field_image:{localFile:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUCBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABn15qbDnDGyOQr//EABoQAAMAAwEAAAAAAAAAAAAAAAECAwARIhP/2gAIAQEAAQUCfjIvx2cqzPWTaczLFXKgUb0a9GP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAACAgMAAwAAAAAAAAAAAAAAEQECEiFBMoKR/9oACAEBAAY/AtfRPKTyQ6tcI2rMeEe0k2grfsDzk//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExYUFRcaHw/9oACAEBAAE/IQ4ZfNTH8CbiZEcAj69b0gZ4KJu7iS1fduJhm+stBGFkBwNT/9oADAMBAAIAAwAAABC/J/z/xAAXEQADAQAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EFdP/8QAFhEAAwAAAAAAAAAAAAAAAAAAASAh/9oACAECAQE/EDU//8QAIBABAQACAAYDAAAAAAAAAAAAAREAITFBUWFxgaHB4f/aAAgBAQABPxBLUWcCV5/rFpnUsx5XFKB5ND25PhQwkF8byuLgtuwdT7zuhyr6NHjAUJBDRo3WIUERTTNFxameiHoz/9k=",aspectRatio:1,src:"/static/4add0a4f053216f45e937dbbe54cf2be/04993/prideandjoy.jpg",srcSet:"/static/4add0a4f053216f45e937dbbe54cf2be/cecbd/prideandjoy.jpg 100w,\n/static/4add0a4f053216f45e937dbbe54cf2be/3daef/prideandjoy.jpg 200w,\n/static/4add0a4f053216f45e937dbbe54cf2be/04993/prideandjoy.jpg 225w",sizes:"(max-width: 225px) 100vw, 225px"}}}}}}},{node:{id:"9a61d543-b7c2-5204-ae1f-1d7fbd40003e",title:"Cold Shot",body:{value:"<p>Once was a sweet thang baby, held out love in our hands<br />\r\nNow I reach to kiss your lips the touch don't mean a thing<br />\r\nAnd that's a cold shot baby, yeah that's a drag<br />\r\nA cold shot baby, I let our love go bad</p>\r\n\r\n<p>Remember the way that you loved me, do anything I said<br />\r\nNow I see you out somewhere you won't give me the time of day<br />\r\nAnd that's a cold shot darlin', yeah that's a drag<br />\r\nAnd that's a cold shot baby, we let our love go bad</p>\r\n\r\n<p>I really meant I was sorry, for ever causin' you pain<br />\r\nYou showed your appreciation by walkin' out anyway<br />\r\nAnd that's a cold shot baby, yeah that's a drag<br />\r\nAnd that's a cold shot baby, we let our love go bad</p>\r\n\r\n<p>So sad, too bad, so sad<br />\r\nDon't let our true love run cold baby</p>\r\n"},created:"2019-03-11T19:30:06+00:00",relationships:{field_image:{localFile:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGc9PQtdJRR/8QAGRABAAMBAQAAAAAAAAAAAAAAAQACEQMh/9oACAEBAAEFAg2FZoTl7bq4rr//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARL/2gAIAQMBAT8Bjb//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGq/8QAGhAAAgIDAAAAAAAAAAAAAAAAABABUSFhcf/aAAgBAQAGPwIja5kql//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExQVH/2gAIAQEAAT8hsi2Y9vA8JwV0s6GAenA2jZ//2gAMAwEAAgADAAAAEFwv/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAFBcf/aAAgBAwEBPxCNsv/EABYRAQEBAAAAAAAAAAAAAAAAABEBEP/aAAgBAgEBPxBsz//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQVFx/9oACAEBAAE/EGzatVAFBUsJlrcXtCcYgHS8AwSbSUWl5t+xopWf/9k=",aspectRatio:1.3350515463917525,src:"/static/ea96938ef327875cdf64f60de761dde9/d36d9/coldshot.jpg",srcSet:"/static/ea96938ef327875cdf64f60de761dde9/d2e37/coldshot.jpg 100w,\n/static/ea96938ef327875cdf64f60de761dde9/a02c7/coldshot.jpg 200w,\n/static/ea96938ef327875cdf64f60de761dde9/d36d9/coldshot.jpg 259w",sizes:"(max-width: 259px) 100vw, 259px"}}}}}}},{node:{id:"817bd1d1-e94e-58a9-9ff0-d7593cef8a9c",title:"Voodoo Child",body:{value:"<p>Well I'm standin' next to a mountain... choppin' down with the edge of my hand<br />\r\nWell I'm standin' next to a mountain... choppin' down with the edge of my hand<br />\r\nPick up the pieces, make an island... might even raise a little sand</p>\r\n\r\n<p>Cause I'm a voodoo chile... lord knows I'm a voodoo chile</p>\r\n\r\n<p>I didn't mean to take up all your sweet time<br />\r\nGive it right back to you... one of these days<br />\r\nI didn't mean to take up all your sweet time<br />\r\nGive it right back to you... the rest of my days</p>\r\n\r\n<p>I won't see you again in this world... see ya in the next one<br />\r\nDon't be late... don't be late</p>\r\n\r\n<p>Cause I'm a voodoo chile yeah... lord knows I'm a voodoo chile</p>\r\n"},created:"2019-03-11T19:27:40+00:00",relationships:{field_image:{localFile:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAck6ezaraMomAy//xAAbEAADAAIDAAAAAAAAAAAAAAAAAQIQERIhMf/aAAgBAQABBQKyPGh9s5FPQ6ax/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREEH/2gAIAQIBAT8BqpUcz//EABsQAAIBBQAAAAAAAAAAAAAAAAEQIQAREkFR/9oACAEBAAY/AhNqks46lkdX/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBgf/aAAgBAQABPyFc3C7RsThl8uaQArpXJwHGFvJ8xqU+R4HBTDk//9oADAMBAAIAAwAAABCPGDz/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhEP/aAAgBAwEBPxCYRie8/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EAIMJ//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExQVFhcZGx/9oACAEBAAE/ECXCBlI7QBYLFyBgt4GoSu6fJbeBqrk6S+bhc37RJsKh8MwCHZ0jY//Z",aspectRatio:1,src:"/static/24ecf2c947c8692b9421b4757ab9629d/04993/voodoochild.jpg",srcSet:"/static/24ecf2c947c8692b9421b4757ab9629d/cecbd/voodoochild.jpg 100w,\n/static/24ecf2c947c8692b9421b4757ab9629d/3daef/voodoochild.jpg 200w,\n/static/24ecf2c947c8692b9421b4757ab9629d/04993/voodoochild.jpg 225w",sizes:"(max-width: 225px) 100vw, 225px"}}}}}}},{node:{id:"3074edd1-0492-553d-85d8-b0bf4b15cb77",title:"The Sky is Crying",body:{value:"<p>The sky is crying,<br />\r\nCan you see the tears roll down the street.<br />\r\nThe sky is crying,<br />\r\nCan you see the tears roll down the street.<br />\r\nI've been looking for my baby<br />\r\nAnd I've been wondering where can she be</p>\r\n\r\n<p>I my baby early one morning<br />\r\nShe was walking on down the street<br />\r\nI my baby early one morning<br />\r\nShe was walking on down the street<br />\r\nYou know it hurt me, hurt me so bad<br />\r\nIt made my poor heart skip a beat</p>\r\n\r\n<p>I got a real, real fine feeling<br />\r\nThat my baby she don't love me no more<br />\r\nI got a real, real fine feeling<br />\r\nThat my baby she don't love me no more<br />\r\nYou know the sky's been crying<br />\r\nCan see you see the tears roll down my door</p>\r\n"},created:"2019-03-11T19:32:36+00:00",relationships:{field_image:{localFile:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB05bMaNhQIJjOugT/xAAbEAACAgMBAAAAAAAAAAAAAAABAgADERMiMv/aAAgBAQABBQLkE30rFRWljYNpCqnnYSThhvef/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERITECEiIyQf/aAAgBAQAGPwLA+DOppUqzbORFpFpHh//EABsQAQADAQEBAQAAAAAAAAAAAAEAESExQWFx/9oACAEBAAE/IaTZoIZbHsCXB52ZUCpv3I9SMqVyAy9I1Ka5ZAgd+wIAwfJ//9oADAMBAAIAAwAAABC4IH//xAAYEQEBAAMAAAAAAAAAAAAAAAARAAEQIf/aAAgBAwEBPxDK80Rf/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREEH/2gAIAQIBAT8QU7lKz//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFhMXFRobH/2gAIAQEAAT8QTgLmBtx3FDhsN7uEFWcnhQ+dxCmsGCLYL3UeBGhuC1mDUAC+iZMa2tTqBdTZfsHohRH/2Q==",aspectRatio:1,src:"/static/594876da8fc7eeff76f012570675f1af/5e997/theskyiscrying.jpg",srcSet:"/static/594876da8fc7eeff76f012570675f1af/9d4bb/theskyiscrying.jpg 100w,\n/static/594876da8fc7eeff76f012570675f1af/90e61/theskyiscrying.jpg 200w,\n/static/594876da8fc7eeff76f012570675f1af/5e997/theskyiscrying.jpg 400w,\n/static/594876da8fc7eeff76f012570675f1af/67f31/theskyiscrying.jpg 600w",sizes:"(max-width: 400px) 100vw, 400px"}}}}}}},{node:{id:"bc7b6373-db3c-5ed3-8547-ba2473810811",title:"Life Without You",body:{value:"<p>Well, hello baby<br />\r\nTell me how have you been?<br />\r\nWe all have missed you<br />\r\nAnd the way you grin</p>\r\n\r\n<p>The day is necessary<br />\r\nEvery now and then<br />\r\nFor souls to move on<br />\r\nGiven life back again</p>\r\n\r\n<p>Fly on, fly on<br />\r\nFly on my friend<br />\r\nGo on, live again<br />\r\nLove again</p>\r\n\r\n<p>Day after day<br />\r\nNight after night<br />\r\nSittin' here singin'<br />\r\nEvery minute</p>\r\n\r\n<p>As the years go passin' by<br />\r\nBy, by, by<br />\r\nA long look in the mirror<br />\r\nWe come face to face</p>\r\n\r\n<p>Wishin' our love<br />\r\nWe took for granted<br />\r\nA love we had yesterday<br />\r\nLife without you</p>\r\n"},created:"2019-03-11T19:34:38+00:00",relationships:{field_image:{localFile:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMFAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAczlKEkhPdDFB//EABsQAAIDAAMAAAAAAAAAAAAAAAECABESAyEj/9oACAEBAAEFAmunwZcX0LqpmzASpChuMr3/AP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB8QAAIBAwUBAAAAAAAAAAAAAAABAhESIRAxMkFRsf/aAAgBAQAGPwLKFZC33JxF8KRSuOiqJTe9NP/EABoQAAMAAwEAAAAAAAAAAAAAAAABESExQVH/2gAIAQEAAT8h5Ce0fOIXpWJ5uUskont0WK48eieMjuQXB2opPvZ//9oADAMBAAIAAwAAABAjDzz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEAAwACAwEAAAAAAAAAAAABABEhMUFRYXGx/9oACAEBAAE/EDXuvCHngNqvJ6jAin2Gq2qlU3uDZqF2U95k66jLqCEoQwvOHb5gSOF+z//Z",aspectRatio:1,src:"/static/92bf19dc1f05818444162dee1dcd5a2b/04993/lifewithoutyou.jpg",srcSet:"/static/92bf19dc1f05818444162dee1dcd5a2b/cecbd/lifewithoutyou.jpg 100w,\n/static/92bf19dc1f05818444162dee1dcd5a2b/3daef/lifewithoutyou.jpg 200w,\n/static/92bf19dc1f05818444162dee1dcd5a2b/04993/lifewithoutyou.jpg 225w",sizes:"(max-width: 225px) 100vw, 225px"}}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-84196333383b39543eaf.js.map
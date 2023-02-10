"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[129],{854:function(n,e,t){t.d(e,{a:function(){return u}});var r=t(6286),a=t(184),u=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})}},4672:function(n,e,t){t.d(e,{O:function(){return b}});var r,a,u,c,i,o=t(1087),s=t(7689),p=t(6393),f=t(168),l=t(7402),d=l.Z.div(r||(r=(0,f.Z)(["\n  padding: 40px 20px;\n"]))),v=l.Z.h1(a||(a=(0,f.Z)(["\n  font-size: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),x=l.Z.ul(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-around;\n"]))),h=l.Z.li(c||(c=(0,f.Z)(["\n  max-width: 350px;\n  border: 3px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),m=l.Z.p(i||(i=(0,f.Z)(["\n  font-size: 26px;\n  color: black;\n  text-align: center;\n  padding: 10px;\n"]))),g=t(184),b=function(n){var e=n.movies,t=(0,s.TH)();return(0,g.jsxs)(d,{children:[(0,g.jsx)(v,{children:"Trending movies today"}),(0,g.jsx)(x,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,g.jsx)(h,{children:(0,g.jsxs)(o.OL,{to:"/movies/".concat(e),state:{from:t},children:[(0,g.jsx)("img",{src:p.Y+a,alt:"movie"}),(0,g.jsx)(m,{children:r})]})},e)}))})]})}},9129:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),i=t(2791),o=t(1087),s=t(4390),p=t(184),f=function(n){var e=n.onSubmit,t=(0,i.useState)([]),r=(0,a.Z)(t,2),u=r[0],c=r[1];return(0,p.jsx)("div",{children:(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(u)},children:[(0,p.jsx)("input",{type:"text",value:u,onChange:function(n){c(n.target.value)},autoComplete:"off",placeholder:"Please enter your query...",autoFocus:!0}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})})},l=t(4672),d=t(854),v=function(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),t=e[0],u=e[1],v=(0,o.lr)(),x=(0,a.Z)(v,2),h=x[0],m=x[1],g=h.get("query");(0,i.useEffect)((function(){var n=new AbortController;if(g)return(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.HI)(g,{signal:n.signal});case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))(),function(){return n.abort()}}),[g]);return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Search Movies"}),(0,p.jsx)(f,{onSubmit:function(n){m({query:n})}}),t.length<1?(0,p.jsx)(d.a,{}):(0,p.jsx)(l.O,{movies:t})]})}},4390:function(n,e,t){t.d(e,{HI:function(){return s},Hx:function(){return l},Y5:function(){return p},wr:function(){return o},xc:function(){return f}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="bb60805928e986df13f7a98c4acc6577",o=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i),t);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),t);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),t);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},6393:function(n,e,t){t.d(e,{Y:function(){return r}});var r="https://image.tmdb.org/t/p/w500"}}]);
//# sourceMappingURL=129.2f39c06a.chunk.js.map
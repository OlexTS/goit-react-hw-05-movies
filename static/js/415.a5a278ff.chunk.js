"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{3820:function(n,t,e){e.d(t,{f:function(){return c}});var r,a=e(168),i=e(7402).Z.button(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 150px;\n  margin: auto;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]))),o=e(184),c=function(n){var t=n.onLoadMore;return(0,o.jsx)("div",{children:(0,o.jsx)(i,{type:"button",onClick:t,children:"Load More"})})}},854:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(6286),a=e(184),i=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.fe,{visible:!0,height:"150",width:"150",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})}},4672:function(n,t,e){e.d(t,{O:function(){return m}});var r,a,i,o,c,u=e(1087),s=e(7689),p=e(6393),f=e(168),d=e(7402),l=d.Z.div(r||(r=(0,f.Z)(["\n  padding: 40px 20px;\n"]))),x=(d.Z.h1(a||(a=(0,f.Z)(["\n  font-size: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),d.Z.ul(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-around;\n"])))),h=d.Z.li(o||(o=(0,f.Z)(["\n  max-width: 350px;\n  border: 3px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),v=d.Z.p(c||(c=(0,f.Z)(["\n  font-size: 26px;\n  color: black;\n  text-align: center;\n  padding: 10px;\n"]))),g=e(184),m=function(n){var t=n.movies,e=(0,s.TH)();return(0,g.jsx)(l,{children:(0,g.jsx)(x,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,g.jsx)(h,{children:(0,g.jsxs)(u.OL,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)("img",{src:a?p.YQ+a:p.fX,alt:"movie"}),(0,g.jsx)(v,{children:r})]})},t)}))})})}},2957:function(n,t,e){e.d(t,{x:function(){return c}});var r=e(7821),a=e.n(r),i=e(7692),o=e(184),c=function(){return(0,o.jsx)("div",{children:(0,o.jsx)(a(),{smooth:!0,top:1500,style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#3f51b5",color:"white",borderRadius:"100%",width:"50px",height:"50px"},component:(0,o.jsx)("p",{children:(0,o.jsx)(i.jRD,{size:50})})})})}},5415:function(n,t,e){e.r(t);var r,a,i,o=e(3433),c=e(5861),u=e(9439),s=e(168),p=e(4687),f=e.n(p),d=e(2791),l=e(7402),x=e(4390),h=e(4672),v=e(854),g=e(3820),m=e(2957),b=e(184),Z=l.Z.h1(r||(r=(0,s.Z)(["\n  font-size: 36px;\n  text-align: center;\n  padding: 20px;\n"]))),w=l.Z.h1(a||(a=(0,s.Z)(["\n  text-align: center;\n"]))),k=l.Z.div(i||(i=(0,s.Z)(["\n  text-align: center;\n"])));t.default=function(){var n=(0,d.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(1),i=(0,u.Z)(a,2),s=i[0],p=i[1],l=(0,d.useState)(0),y=(0,u.Z)(l,2),j=y[0],_=y[1],z=(0,d.useState)(!1),S=(0,u.Z)(z,2),C=S[0],L=S[1];(0,d.useEffect)((function(){(0,c.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,L(!0),n.next=4,(0,x.wr)(s);case 4:t=n.sent,r((function(n){return 1===s?t.results:[].concat((0,o.Z)(n),(0,o.Z)(t.results))})),_(t.total_results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,L(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))()}),[s]);if(e)return(0,b.jsxs)("div",{children:[(0,b.jsx)(Z,{children:"Trending movies today"}),!!e.length&&(0,b.jsx)(h.O,{movies:e}),C?(0,b.jsx)(w,{children:(0,b.jsx)(v.a,{})}):0!==e.length&&e.length<j&&(0,b.jsxs)(k,{children:[(0,b.jsx)(g.f,{onLoadMore:function(){p((function(n){return n+1}))}}),(0,b.jsx)(m.x,{})]})]})}},4390:function(n,t,e){e.d(t,{HI:function(){return s},Hx:function(){return d},Y5:function(){return p},wr:function(){return u},xc:function(){return f}});var r=e(5861),a=e(4687),i=e.n(a),o=e(1912);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="bb60805928e986df13f7a98c4acc6577",u=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6393:function(n,t,e){e.d(t,{YQ:function(){return r},fX:function(){return a}});var r="https://image.tmdb.org/t/p/w500",a="http://hi-news.pp.ua/uploads/posts/2016-11/scho-oznachaye-smayl-mavpochka-z-zakritimi-ochima-v-yakih-situacyah-yogo-vikoristovuvati_192.jpeg"}}]);
//# sourceMappingURL=415.a5a278ff.chunk.js.map
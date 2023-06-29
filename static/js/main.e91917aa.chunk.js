(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(8),s=c.n(i),a=(c(15),c(10)),n=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o="https://via.placeholder.com/360x270.png?text=no%20preview",d=function(e){var t=e.movie,c=t.imgUrl,i=t.title,s=t.description,a=t.imdbUrl,n=Object(r.useMemo)((function(){return"N/A"!==c?c:o}),[c,o]);return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:n,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:i})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[s,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:a,"data-cy":"movieURL",children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})},b=c(9),m=c(6),u=c.n(m),v=(c(21),c(7)),O=c.n(v);function h(e){return fetch("".concat("https://www.omdbapi.com/?apikey=a447e81e","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var x=function(e){var t=e.addToList,c=Object(r.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],o=Object(r.useState)(null),j=Object(n.a)(o,2),m=j[0],v=j[1],x=Object(r.useState)(null),p=Object(n.a)(x,2),f=p[0],N=p[1],g=Object(r.useState)(!1),y=Object(n.a)(g,2),w=y[0],k=y[1],C=Object(r.useCallback)((function(e){e.preventDefault()}),[]),F=Object(r.useCallback)(Object(b.a)(u.a.mark((function e(){var t,c,i,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,h(s);case 4:"Error"in(t=e.sent)?(N(t),v(null)):(c=t.Title,i=t.Plot,a=t.imdbID,n=t.Poster,v({title:c,description:i,imgUrl:n,imdbId:a,imdbUrl:"https://www.imdb.com/title/".concat(a)}),N(null)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),N({Response:"False",Error:"unexpected error"}),v(null);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])}))),[s]),I=Object(r.useCallback)((function(e){a(e.target.value),N(null)}),[]),E=Object(r.useMemo)((function(){return""===s}),[s]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:C,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:O()("input",{"is-danger":f}),value:s,onChange:I})}),f&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:f.Error})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:O()("button is-light",{"is-loading":w}),onClick:F,disabled:E,children:"Find a movie"})}),!!m&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){null!==m&&(t(m),a(""),v(null))},children:"Add to the list"})})]})]}),!!m&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),"movie &&",Object(l.jsx)(d,{movie:m})]})]})},p=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],s=Object(r.useCallback)((function(e){c.every((function(t){return t.imdbId!==e.imdbId}))&&i((function(t){return[].concat(Object(a.a)(t),[e])}))}),[c]);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(x,{addToList:s})})]})};s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e91917aa.chunk.js.map
(this.webpackJsonpcurrency_converter=this.webpackJsonpcurrency_converter||[]).push([[0],[,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(4),a=n.n(o),u=(n(9),n(2)),s=n(0),i=function(t){var e=t.currencies,n=t.value,c=t.setValue,r=Object.keys(e).sort().map((function(t){return Object(s.jsx)("option",{value:t,children:t},t)}));return Object(s.jsx)("select",{value:n,onChange:function(t){return c(t.currentTarget.value)},children:r})},j=(n(11),function(t){var e=t.currencies,n=t.from,c=t.to,r=t.setFrom,o=t.setTo,a=t.fromAmount,u=t.setFromAmount,j=t.calculateConvertion,b=t.convertion;return Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j()},children:[Object(s.jsx)("input",{type:"text",value:a,min:0,onChange:function(t){return u(t.target.value)}}),Object(s.jsx)(i,{currencies:e,value:n,setValue:r,onChange:j()}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",value:b,disabled:!0}),Object(s.jsx)(i,{currencies:e,value:c,setValue:o,onChange:j()}),Object(s.jsx)("br",{})]})}),b=(n(12),n(13),function(t){var e=t.from,n=t.to,c=t.setFrom,r=t.setTo;return Object(s.jsx)("button",{onClick:function(){var t=e;c(n),r(t)},className:"changeButton",children:"\u21c5"})}),l=(n(14),function(t){var e=t.Values,n=t.from,c=t.to,r=t.Name;return Object(s.jsxs)("div",{className:"info",children:[Object(s.jsxs)("p",{children:["1 ",n," = ",n===r[0].substring(0,3)?e[0]:e[1]," ",c]}),Object(s.jsxs)("p",{children:["1 ",c," = ",n===r[1].substring(0,3)?e[0]:e[1]," ",n]})]})}),O="75603abb0998080373c2",f="https://free.currconv.com/api/v7/currencies?apiKey=".concat(O),m=function(){var t=Object(c.useState)("EUR"),e=Object(u.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)("PLN"),a=Object(u.a)(o,2),i=a[0],m=a[1],v=Object(c.useState)({}),h=Object(u.a)(v,2),p=h[0],x=h[1],d=Object(c.useState)({}),g=Object(u.a)(d,2),y=g[0],S=g[1],C=Object(c.useState)(!1),F=Object(u.a)(C,2),N=F[0],k=F[1],T=Object(c.useState)(!1),V=Object(u.a)(T,2),_=V[0],A=V[1],w=Object(c.useState)(0),E=Object(u.a)(w,2),B=E[0],J=E[1],K=Object(c.useState)(0),L=Object(u.a)(K,2),q=L[0],D=L[1],I=Object(c.useState)("Loading..."),M=Object(u.a)(I,2),P=M[0],R=M[1],U=N?Object.keys(y).map((function(t){return t})):"123",z=N?Object.values(y).map((function(t){return t})):"123",G="https://free.currconv.com/api/v7/convert?q=".concat(n,"_").concat(i,",").concat(i,"_").concat(n,"&compact=ultra&apiKey=").concat(O);Object(c.useEffect)((function(){fetch(f).then((function(t){return t.json()})).then((function(t){400===t.status?R("".concat(t.error,"\n          Sorry, try again later (up to 1 hour)")):(x(t),A(!0))})),fetch(G).then((function(t){return t.json()})).then((function(t){400===t.status?R("".concat(t.error,"\n          Sorry, try again later.")):(S(t),k(!0))}))}),[G]);var H=_?Object(s.jsx)(j,{currencies:p.results,from:n,to:i,setFrom:r,setTo:m,fromAmount:B,setFromAmount:J,calculateConvertion:function(){for(var t=0,e=0;e<U.length;e++)U[e]==="".concat(n,"_").concat(i)&&(t=z[e]);D((B*t).toFixed(2))},convertion:q}):Object(s.jsx)("h2",{children:P}),Q=_?Object(s.jsx)(b,{from:n,to:i,setFrom:r,setTo:m}):null,W=N?Object(s.jsx)(l,{Values:z,Name:U,from:n,to:i}):null;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Currency converter"}),Object(s.jsxs)("div",{className:"wrapper",children:[H,Q]}),W]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.739516c1.chunk.js.map
(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(3),r=a.n(c),s=a(4),o=a(5),d=a(6),i=a(10),b=a(9),u=a(7),l=a.n(u),j=a(0),h=function(e){var t=e.addFeedback,a=e.options;return Object(j.jsx)(j.Fragment,{children:a.map((function(e){return Object(j.jsx)("button",{type:"button",className:l.a.button,name:e,onClick:t,children:e},e)}))})},g=a(8),m=a.n(g),O=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{className:m.a.message,children:t})})},f=function(e){var t=e.title,a=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t}),a]})},p=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.percentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Good:",t]}),Object(j.jsxs)("p",{children:["Neutral:",a]}),Object(j.jsxs)("p",{children:["Bad:",n]}),Object(j.jsxs)("p",{children:["Total:",c]}),Object(j.jsxs)("p",{children:["Positive feedbacks:",r,"%"]})]})},x=function(e){Object(i.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(s.a)({},a,e[a]+1)}))},e.calcFeedbackSumm=function(){var t=e.state;return t.good+t.neutral+t.bad},e.calcFeedbackPercentage=function(){var t=e.calcFeedbackSumm(),a=e.state.good,n=t?a/t*100:0;return Math.round(n)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.calcFeedbackSumm(),r=this.calcFeedbackPercentage(),s=this.addFeedback;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{title:"Please leave your feedback",children:Object(j.jsx)(h,{addFeedback:s,options:["good","neutral","bad"]})}),0===c?Object(j.jsx)(O,{message:"No feedback given"}):Object(j.jsx)(f,{title:"Statistics",children:Object(j.jsx)(p,{good:t,neutral:a,bad:n,total:c,percentage:r})})]})}}]),a}(n.Component),k=x;r.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))},7:function(e,t,a){e.exports={button:"ButtonBlock_button__mjSL6"}},8:function(e,t,a){e.exports={message:"Notification_message__3jha7"}}},[[16,1,2]]]);
//# sourceMappingURL=main.a341858e.chunk.js.map
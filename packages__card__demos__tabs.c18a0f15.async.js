(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"5OYt":function(e,t,n){"use strict";var a=n("J4zp"),r=n.n(a),c=n("q1tI"),o=n("ACnJ");function l(){var e=Object(c["useState"])({}),t=r()(e,2),n=t[0],a=t[1];return Object(c["useEffect"])((function(){var e=o["a"].subscribe((function(e){a(e)}));return function(){return o["a"].unsubscribe(e)}}),[]),n}t["a"]=l},"9p94":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return I})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return O})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return f["a"]})),n.d(t,"j",(function(){return N})),n.d(t,"g",(function(){return k})),n.d(t,"e",(function(){return E})),n.d(t,"h",(function(){return R}));n("DYRE");var a=n("zeV3"),r=(n("5Dmo"),n("3S7+")),c=n("q1tI"),o=n.n(c),l=n("+YFz"),i=n("vgIT"),u=(n("RUY5"),e=>{var t=e.label,n=e.tip,u=Object(c["useContext"])(i["ConfigContext"]),s=u.getPrefixCls;if(!n)return o.a.createElement(o.a.Fragment,null,t);var f=s("pro-core-label-tip"),d="string"===typeof n?{title:n}:n;return o.a.createElement(a["a"],{size:4,className:f},t,o.a.createElement(r["a"],d,o.a.createElement(l["a"],{className:"".concat(f,"-icon")})))}),s=u,f=n("Pp2B");function d(e){return/\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(e)}var m=d,p=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,b=e=>p.test(e),v=b,y="valueType request mode plain renderFormItem render text formItemProps valueEnum",g="fieldProps secondary colSize groupProps contentRender submitterProps submitter";function E(e){var t="".concat(y," ").concat(g).split(/[\s\n]+/),n={};return Object.keys(e||{}).forEach(a=>{t.includes(a)||(n[a]=e[a])}),n}var h=e=>{var t={};return Object.keys(e).forEach(n=>{var a;void 0!==e[n]&&0!==(null===(a=e[n])||void 0===a?void 0:a.length)&&(t[n]=e[n])}),t},O=h,j=(e,t)=>{var n=Object(c["useRef"])(!1);Object(c["useEffect"])(()=>n.current?e():(n.current=!0,()=>{}),t)};function w(e,t,n){var a=Array.isArray(t)?t:[],r="number"===typeof t?t:n||0,o=Object(c["useRef"])(),l=Object(c["useRef"])(e);l.current=e;var i=Object(c["useCallback"])(()=>{o.current&&clearTimeout(o.current)},[]),u=Object(c["useCallback"])((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i(),o.current=setTimeout(()=>{l.current(...t)},r)}),[r,i]);return j(()=>(u(),i),[...a,u]),Object(c["useEffect"])(()=>i,[]),{run:u,cancel:i}}var k=w,S=e=>{var t=Object(c["useRef"])();return Object(c["useEffect"])(()=>{t.current=e}),t.current},N=S,C=n("XaGS"),P=n.n(C);function x(e,t){return P()(e,t)}function T(e){var t=Object(c["useRef"])();return x(e,t.current)||(t.current=e),t.current}function A(e,t){Object(c["useEffect"])(e,T(t))}var R=A;function z(e,t){var n="string"===typeof e.pageName?e.title:t;Object(c["useEffect"])(()=>{Object(f["a"])()&&n&&(document.title=n)},[e.title])}var I=z;n("troW")},FlLn:function(e,t,n){"use strict";var a=n("k1fw"),r=n("tJVT"),c=(n("1GLa"),n("TLLU")),o=n("q1tI"),l=n.n(o),i=n("SqFR"),u=n("UESt"),s=n("kZ8M"),f=n.n(s),d=n("9p94"),m=n("TSYQ"),p=n.n(m),b=(n("14J3"),n("BMrR")),v=(n("jCWc"),n("kPKH")),y=(n("O+mO"),e=>{var t=e.style,n=e.prefix;return l.a.createElement("div",{className:"".concat(n,"-loading-content"),style:t},l.a.createElement(b["a"],{gutter:8},l.a.createElement(v["a"],{span:22},l.a.createElement("div",{className:"".concat(n,"-loading-block")}))),l.a.createElement(b["a"],{gutter:8},l.a.createElement(v["a"],{span:8},l.a.createElement("div",{className:"".concat(n,"-loading-block")})),l.a.createElement(v["a"],{span:15},l.a.createElement("div",{className:"".concat(n,"-loading-block")}))),l.a.createElement(b["a"],{gutter:8},l.a.createElement(v["a"],{span:6},l.a.createElement("div",{className:"".concat(n,"-loading-block")})),l.a.createElement(v["a"],{span:18},l.a.createElement("div",{className:"".concat(n,"-loading-block")}))),l.a.createElement(b["a"],{gutter:8},l.a.createElement(v["a"],{span:13},l.a.createElement("div",{className:"".concat(n,"-loading-block")})),l.a.createElement(v["a"],{span:9},l.a.createElement("div",{className:"".concat(n,"-loading-block")}))),l.a.createElement(b["a"],{gutter:8},l.a.createElement(v["a"],{span:4},l.a.createElement("div",{className:"".concat(n,"-loading-block")})),l.a.createElement(v["a"],{span:3},l.a.createElement("div",{className:"".concat(n,"-loading-block")})),l.a.createElement(v["a"],{span:16},l.a.createElement("div",{className:"".concat(n,"-loading-block")}))))}),g=y,E=c["a"].useBreakpoint,h=e=>{var t=e.className,n=e.style,c=e.bodyStyle,o=void 0===c?{}:c,s=e.headStyle,m=void 0===s?{}:s,b=e.title,v=e.extra,y=e.tip,h=e.layout,O=e.loading,j=e.colSpan,w=e.gutter,k=void 0===w?0:w,S=e.split,N=e.headerBordered,C=e.bordered,P=e.children,x=e.collapsed,T=e.collapsible,A=void 0!==T&&T,R=e.defaultCollapsed,z=void 0!==R&&R,I=e.onCollapse,B=E(),M=f()(z,{value:x,onChange:I}),q=Object(r["a"])(M,2),L=q[0],F=q[1],U=["xxl","xl","lg","md","sm","xs"],Y=e=>{var t=[0,0],n=Array.isArray(e)?e:[e,0];return n.forEach((e,n)=>{if("object"===typeof e)for(var a=0;a<U.length;a+=1){var r=U[a];if(B[r]&&void 0!==e[r]){t[n]=e[r];break}}else t[n]=e||0}),t},J=(e,t)=>e?t:{};return l.a.createElement(i["ConfigConsumer"],null,e=>{var r,c=e.getPrefixCls,i=c("pro-card"),s=Y(k),f=l.a.Children.toArray(P),E=f.map((e,t)=>{var n;if(null===e||void 0===e||null===(n=e.type)||void 0===n?void 0:n.isProCard){r=!0;var c=J(s[0]>0&&t!==f.length-1,{marginRight:s[0]}),o=J(s[1]>0,{marginBottom:s[1]}),u=J("vertical"===S||"horizontal"===S,{borderRadius:0});return l.a.cloneElement(e,{className:p()(e.props.className,{["".concat(i,"-split-vertical")]:"vertical"===S&&t!==f.length-1,["".concat(i,"-split-horizontal")]:"horizontal"===S&&t!==f.length-1}),style:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({},c),o),u),e.props.style)})}return e}),w=j;if("object"===typeof j)for(var T=0;T<U.length;T+=1){var R=U[T];if(B[R]&&void 0!==j[R]){w=j[R];break}}var z=J("string"===typeof w&&/\d%|\dpx/i.test(w),{width:w,flexShrink:0}),I=Object(a["a"])(Object(a["a"])({},z),n),M=p()("".concat(i),t,{["".concat(i,"-span-").concat(w)]:"number"===typeof w&&w>0&&w<=24,["".concat(i,"-border")]:C,["".concat(i,"-contain-card")]:r,["".concat(i,"-loading")]:O,["".concat(i,"-split")]:"vertical"===S||"horizontal"===S}),q=p()("".concat(i,"-header"),{["".concat(i,"-header-border")]:N,["".concat(i,"-header-collapse")]:L}),V=p()("".concat(i,"-body"),{["".concat(i,"-body-center")]:"center"===h,["".concat(i,"-body-column")]:"horizontal"===S,["".concat(i,"-body-collapse")]:L}),Z=0===o.padding||"0px"===o.padding?{padding:24}:void 0,_=l.a.isValidElement(O)?O:l.a.createElement(g,{prefix:i,style:Z}),W=A&&void 0===x&&l.a.createElement(u["a"],{rotate:L?void 0:90,className:"".concat(i,"-collapsible-icon"),onClick:()=>{F(!L)}});return l.a.createElement("div",{className:M,style:I},(b||v||W)&&l.a.createElement("div",{className:q,style:m},l.a.createElement("div",{className:"".concat(i,"-title")},l.a.createElement(d["a"],{label:b,tip:y}),W),l.a.createElement("div",{className:"".concat(i,"-extra")},v)),l.a.createElement("div",{className:V,style:o},O?_:E))})};h.isProCard=!0;t["a"]=h},"O+mO":function(e,t,n){},Pp2B:function(e,t,n){"use strict";(function(e){var n="undefined"!==typeof e&&null!=e.versions&&null!=e.versions.node,a=()=>"undefined"!==typeof window&&"undefined"!==typeof window.document&&!n;t["a"]=a}).call(this,n("Q2Ig"))},RUY5:function(e,t,n){},TLLU:function(e,t,n){"use strict";var a=n("5OYt");t["a"]={useBreakpoint:a["a"]}},UESt:function(e,t,n){"use strict";var a=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},c=r,o=n("6VBw"),l=function(e,t){return a["createElement"](o["a"],Object.assign({},e,{ref:t,icon:c}))};l.displayName="RightOutlined";t["a"]=a["forwardRef"](l)},kZ8M:function(e,t,n){"use strict";function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var r=o(n("q1tI"));function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function l(e,t){return d(e)||f(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(i){r=!0,c=i}finally{try{a||null==l["return"]||l["return"]()}finally{if(r)throw c}}return n}}function d(e){if(Array.isArray(e))return e}function m(e,t){var n=t||{},a=n.defaultValue,c=n.value,o=n.onChange,i=n.postState,u=r.useState((function(){return void 0!==c?c:void 0!==a?"function"===typeof a?a():a:"function"===typeof e?e():e})),s=l(u,2),f=s[0],d=s[1],m=void 0!==c?c:f;function p(e){d(e),m!==e&&o&&o(e,m)}i&&(m=i(m));var b=r.useRef(!0);return r.useEffect((function(){b.current?b.current=!1:void 0===c&&d(c)}),[c]),[m,p]}},troW:function(e,t){},wFbQ:function(e,t,n){"use strict";n.r(t);n("Znn+");var a=n("ZTPi"),r=n("q1tI"),c=n.n(r),o=n("FlLn"),l=a["a"].TabPane;t["default"]=()=>c.a.createElement(o["a"],{bordered:!0},c.a.createElement(a["a"],null,c.a.createElement(l,{tab:"Tab 1",key:"1"},"Content of Tab 1"),c.a.createElement(l,{tab:"Tab 2",key:"2"},"Content of Tab 2"),c.a.createElement(l,{tab:"Tab 3",key:"3"},"Content of Tab 3")))}}]);
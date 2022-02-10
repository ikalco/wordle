(function(e){function t(t){for(var r,o,u=t[0],a=t[1],c=t[2],d=0,p=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0556":function(e,t,n){},5334:function(e,t,n){"use strict";n("df9e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i={class:"game"};function s(e,t,n,s,o,u){var a=Object(r["l"])("PopupHandler"),c=Object(r["l"])("Wordle"),l=Object(r["l"])("Legend");return Object(r["h"])(),Object(r["d"])("div",i,[Object(r["e"])(a,{ref:"popuphandler"},null,512),Object(r["e"])(c,{onPopupHandler:t[0]||(t[0]=function(t){return e.$refs.popuphandler.addPopup(t)}),onSetLetter:t[1]||(t[1]=function(t){return e.$refs.legend.setLetter(t)})}),Object(r["e"])(l,{ref:"legend"},null,512)])}n("b64b");var o={class:"legend"};function u(e,t,n,i,s,u){var a=Object(r["l"])("LegendTile");return Object(r["h"])(),Object(r["d"])("div",o,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(Object.keys(s.letters),(function(e,t){return Object(r["h"])(),Object(r["c"])(a,{key:t,letter:e,type:s.letters[e]},null,8,["letter","type"])})),128))])}function a(e,t,n,i,s,o){return Object(r["h"])(),Object(r["d"])("div",{class:Object(r["f"])({tile:!0,default:o.isDefault(),wrong:o.isWrong(),present:o.isPresent(),correct:o.isCorrect()})},Object(r["m"])(this.letter),3)}var c={name:"Legend",props:["letter","type"],methods:{isDefault:function(){return-1==this.type},isWrong:function(){return 0==this.type},isPresent:function(){return 1==this.type},isCorrect:function(){return 2==this.type}}},l=(n("6ecc"),n("6b0d")),d=n.n(l);const p=d()(c,[["render",a],["__scopeId","data-v-4988b7e5"]]);var f=p,h={components:{LegendTile:f},name:"Legend",data:function(){return{letters:{A:-1,B:-1,C:-1,D:-1,E:-1,F:-1,G:-1,H:-1,I:-1,J:-1,K:-1,L:-1,M:-1,N:-1,O:-1,P:-1,Q:-1,R:-1,S:-1,T:-1,U:-1,V:-1,W:-1,X:-1,Y:-1,Z:-1}}},methods:{setLetter:function(e){this.letters[e[0].toLocaleUpperCase()]<e[1]&&(this.letters[e[0].toLocaleUpperCase()]=e[1])}}};n("cfd4");const v=d()(h,[["render",u],["__scopeId","data-v-96596c3e"]]);var b=v,O={class:"popupContainer"};function j(e,t,n,i,s,o){var u=Object(r["l"])("Popup");return Object(r["h"])(),Object(r["d"])("div",O,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(s.popups,(function(e,n){return Object(r["h"])(),Object(r["c"])(u,{key:n,value:e[0],fade:e[1],identifier:e[2],onDeletepopup:t[0]||(t[0]=function(e){return o.deletePopup(e)})},null,8,["value","fade","identifier"])})),128))])}var m=n("2909");n("99af"),n("a434");function g(e,t,n,i,s,o){return Object(r["h"])(),Object(r["d"])("div",{class:Object(r["f"])({container:!0,fade:s.fadee}),style:Object(r["g"])({display:s.display})},Object(r["m"])(n.value),7)}n("a9e3");var y={name:"Popup",props:{value:String,fade:Boolean,identifier:Number},data:function(){return{fadee:this.fade,display:"block"}},mounted:function(){var e=this;this.fade&&(this.fadee=!1,setTimeout((function(){e.fadee=!0}),750),setTimeout((function(){e.display="none",e.$emit("deletepopup",[e.value,e.fade,e.identifier])}),1250))}};n("f77d");const w=d()(y,[["render",g],["__scopeId","data-v-e02df2be"]]);var P=w,k={name:"PopupHandler",components:{Popup:P},data:function(){return{popups:[]}},methods:{addPopup:function(e){this.popups.push([].concat(Object(m["a"])(e),[Math.random()]))},deletePopup:function(e){this.popups.splice(this.popups.indexOf(e),1)}}};n("c72a");const x=d()(k,[["render",j],["__scopeId","data-v-7c2afee0"]]);var L=x,W=(n("d3b7"),n("ddb0"),{class:"wordle"});function _(e,t,n,i,s,o){var u=Object(r["l"])("WordleRow");return Object(r["h"])(),Object(r["d"])("div",W,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(s.values,(function(e,t){return Object(r["h"])(),Object(r["c"])(u,{key:t,values:e,states:s.states[t],invalid:s.invalids[t]},null,8,["values","states","invalid"])})),128))])}n("caad"),n("2532"),n("33d1"),n("ea98");function T(e,t,n,i,s,o){var u=this,a=Object(r["l"])("WordleTile");return Object(r["h"])(),Object(r["d"])(r["a"],null,Object(r["k"])(5,(function(e){return Object(r["e"])(a,{key:e,value:u.values.at(e-1),state:u.states[e-1],invalid:u.invalid},null,8,["value","state","invalid"])})),64)}function S(e,t,n,i,s,o){return Object(r["h"])(),Object(r["d"])("div",{class:Object(r["f"])({box:!0,typed:o.isTyped(),wrong:o.isWrong(),present:o.isPresent(),correct:o.isCorrect(),flipin:s.flipin,flipout:s.flipout,shake:n.invalid,scalebounce:s.scalebounce})},Object(r["m"])(this.value.toLocaleUpperCase()),3)}var C={name:"WordleTile",props:{value:String,state:Number,invalid:Boolean},methods:{isTyped:function(){return" "!=this.value},isWrong:function(){return 0==this.state&&this.flipout&&!this.flipin},isPresent:function(){return 1==this.state&&this.flipout&&!this.flipin},isCorrect:function(){return 2==this.state&&this.flipout&&!this.flipin}},data:function(){return{flipin:!1,flipout:!1,scalebounce:!1}},watch:{state:function(){var e=this;this.flipin=!0,setTimeout((function(){e.flipout=!0,e.flipin=!1}),250)},value:function(){var e=this;" "!=this.value&&(this.scalebounce=!0,setTimeout((function(){e.scalebounce=!1}),100))}}};n("cae0");const I=d()(C,[["render",S],["__scopeId","data-v-185f48c4"]]);var H=I,M={name:"WordleRow",components:{WordleTile:H},props:["values","states","invalid"]};const A=d()(M,[["render",T]]);var $=A,E={name:"Wordle",components:{WordleRow:$},data:function(){return{current:0,index:0,values:["     ","     ","     ","     ","     ","     "],invalids:[!1,!1,!1,!1,!1,!1],states:[[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1]],allowedWords:{},possibleAnswers:{},answer:"",flipping:!1}},methods:{handleKeyPress:function(e){if(!this.flipping){if("Enter"==e.key)return void(5==this.index&&this.handleSubmission());"Backspace"==e.key?(this.values[this.current]=this.values[this.current].substring(0,this.index-1)+this.values[this.current].substring(this.index),this.values[this.current].length<5&&(this.values[this.current]+=" "),this.index>0&&this.index--):e.which>=65&&e.which<=90&&this.index<5&&(this.values[this.current]=this.values[this.current].substring(0,this.index)+e.key.toLocaleLowerCase()+this.values[this.current].substring(this.index+1),this.index++)}},handleSubmission:function(){var e=this;this.allowedWords[this.values[this.current]]||this.possibleAnswers[this.values[this.current]]?function(){for(var t=[-1,-1,-1,-1,-1],n=e.answer,r=0;r<t.length;r++){var i=e.values[e.current][r],s=e.answer;if(i==s[r]){t[r]=2;var o=n.indexOf(i);n=n.substring(0,o)+n.substring(o+1)}else s.includes(i)||(t[r]=0)}for(var u=0;u<t.length;u++){var a=e.values[e.current][u];if(-1==t[u]){var c=n.indexOf(a);-1!=c?(n=n.substring(0,c)+n.substring(c+1),t[u]=1):t[u]=0}}for(var l=function(n){setTimeout((function(){e.states[e.current][n]=t[n]}),300*n)},d=0;d<e.states[e.current].length;d++)l(d);e.flipping=!0,setTimeout((function(){for(var n=0;n<t.length;n++)e.$emit("setLetter",[e.values[e.current][n],t[n]]);e.values[e.current]==e.answer?(console.log("You Win!"),window.removeEventListener("keyup",e.handleKeyPress),e.$emit("popupHandler",["You Win!",!1])):5==e.current&&(console.log("You Lose!"),window.removeEventListener("keyup",e.handleKeyPress),e.$emit("popupHandler",[e.answer,!1])),e.index=0,e.current++,e.flipping=!1}),300*e.states[e.current].length)}():(this.invalids[this.current]=!0,setTimeout((function(){e.invalids[e.current]=!1}),600),this.$emit("popupHandler",["Invalid",!0]),console.log("Invalid Word"))}},mounted:function(){var e=this;window.addEventListener("keyup",this.handleKeyPress),fetch("words.json").then((function(e){return e.json()})).then((function(t){e.allowedWords=t.allowedWords,e.possibleAnswers=t.possibleAnswers,e.answer=Object.keys(e.possibleAnswers),e.answer=e.answer[Math.floor(Math.random()*e.answer.length)]}))},unmounted:function(){window.removeEventListener("keyup",this.handleKeyPress)}};n("e9b2");const K=d()(E,[["render",_],["__scopeId","data-v-32a0d6c4"]]);var B=K,D={name:"App",components:{Wordle:B,PopupHandler:L,Legend:b}};n("5334");const R=d()(D,[["render",s]]);var U=R;Object(r["b"])(U).mount("#app")},"6ecc":function(e,t,n){"use strict";n("a781")},8648:function(e,t,n){},"9db0":function(e,t,n){},a781:function(e,t,n){},c72a:function(e,t,n){"use strict";n("fcd7")},cae0:function(e,t,n){"use strict";n("f742")},cfd4:function(e,t,n){"use strict";n("0556")},df9e:function(e,t,n){},e9b2:function(e,t,n){"use strict";n("9db0")},f742:function(e,t,n){},f77d:function(e,t,n){"use strict";n("8648")},fcd7:function(e,t,n){}});
//# sourceMappingURL=app.93df78af.js.map
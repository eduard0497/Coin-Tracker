(this["webpackJsonpcoin-tracker"]=this["webpackJsonpcoin-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),i=(n(14),n(3)),o=n.n(i),l=n(5),h=n(6),p=n(7),u=n(9),_=n(8),m=(n(16),n(0)),j=function(e){var t=e.image,n=e.name,c=e.symbol,a=e.current_price,r=e.market_cap,s=e.price_change_percentage_24h,i=e.total_volume;return Object(m.jsxs)("div",{className:"coin__row",children:[Object(m.jsx)("div",{className:"row__image",children:Object(m.jsx)("img",{src:t,alt:"Coin Icon"})}),Object(m.jsx)("h5",{className:"row__name",children:n}),Object(m.jsx)("h6",{className:"row__symbol",children:c}),Object(m.jsxs)("p",{className:"row__price",children:["($)",a]}),Object(m.jsxs)("p",{className:"row__mCap",children:["MCap: ",r]}),s<=0?Object(m.jsxs)("p",{className:"change__red",children:["Change(%): ",s]}):Object(m.jsxs)("p",{className:"change__green",children:["Change(%): ",s]}),Object(m.jsxs)("p",{className:"row__volume",children:["Volume: ",i]})]})},d=(n(18),function(e){Object(u.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({search:t.target.value})},e.filteredCoins=function(t){return t.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())}))},e.state={coinData:[],search:""},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){return e.json()})).then((function(e){t.setState((function(t,n){return{coinData:e}}))})).catch((function(e){return console.log(e)}));case 2:console.log(this.state.coinData);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"app__container",children:[Object(m.jsx)("div",{className:"app__title",children:Object(m.jsx)("h1",{children:"Live Coin Data"})}),Object(m.jsx)("div",{className:"app__searchContainer",children:Object(m.jsx)("input",{onChange:this.handleChange,className:"searchContainer__searchField",type:"text",placeholder:"Search..."})}),Object(m.jsx)("div",{className:"app__coinList",children:this.filteredCoins(this.state.coinData).map((function(e){return Object(m.jsx)(j,{image:e.image,name:e.name,symbol:e.symbol.toUpperCase(),current_price:e.current_price,market_cap:e.market_cap.toLocaleString(),price_change_percentage_24h:e.price_change_percentage_24h.toFixed(2),total_volume:e.total_volume.toLocaleString()},e.id)}))})]})}}]),n}(c.Component));s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(d,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.22ee2e0d.chunk.js.map
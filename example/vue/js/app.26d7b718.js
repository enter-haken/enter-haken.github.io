webpackJsonp([1],{0:function(s,t,e){s.exports=e("NHnr")},"4+hh":function(s,t){},NHnr:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("/5sW"),a=e("PJh5"),r=e.n(a),l={props:{gridData:{default:function(){return[]},type:Array}},methods:{moment:function(){return r()()}},filters:{moment:function(s){return s?r()(s).locale("en").format("lll"):""}},name:"event-list"},i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("md-table",{attrs:{"md-card":""},scopedSlots:s._u([{key:"md-table-row",fn:function(t){var n=t.item;return e("md-table-row",{},[e("md-table-cell",{attrs:{"md-label":"Start"}},[s._v(s._s(s._f("moment")(n.start.dateTime)))]),e("md-table-cell",{attrs:{"md-label":"End"}},[s._v(s._s(s._f("moment")(n.end.dateTime)))]),e("md-table-cell",{attrs:{"md-label":"Created"}},[s._v(s._s(s._f("moment")(n.created)))]),e("md-table-cell",{attrs:{"md-label":"Summary"}},[e("a",{attrs:{href:n.htmlLink,target:"_blank"}},[s._v(s._s(n.summary))])]),e("md-table-cell",{attrs:{"md-label":"Creator"}},[s._v(s._s(n.creator.displayName))]),e("md-table-cell",{attrs:{"md-label":"Organizer"}},[s._v(s._s(n.organizer.displayName))])],1)}}]),model:{value:s.gridData,callback:function(t){s.gridData=t},expression:"gridData"}},[e("md-table-toolbar",[e("h1",{staticClass:"md-title"},[s._v("Events")])])],1)],1)},j=[],o=e("XyMi"),u=!1,c=null,d=null,m=null,g=Object(o["a"])(l,i,j,u,c,d,m),h=g.exports,f=e("Lgyv"),p=e.n(f);e("4+hh");n["default"].use(p.a);var v="781111483400-clhpsvh8epndi5tp6hrg1ufenkkjt3fq.apps.googleusercontent.com",b=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],y="https://www.googleapis.com/auth/calendar.readonly",z={name:"app",mounted:function(){this.gapiLoad()},data:function(){return{eventResult:[]}},components:{EventList:h},methods:{gapiLoad:function(){gapi.load("client:auth2",this.initClient)},initClient:function(){var s=this;gapi.client.init({clientId:v,discoveryDocs:b,scope:y}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.listen(s.signedIn),s.signedIn(gapi.auth2.getAuthInstance().isSignedIn.get())})},signedIn:function(s){var t=this;s?gapi.client.calendar.events.list({calendarId:"primary",timeMin:(new Date).toISOString(),showDeleted:!1,singleEvents:!0,maxResults:10,orderBy:"startTime"}).then(function(s){t.eventResult=s.result.items}):this.eventResult=[]},signIn:function(){gapi.auth2.getAuthInstance().signIn()},signOut:function(){gapi.auth2.getAuthInstance().signOut()}}},k=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",[e("md-button",{staticClass:"md-raised md-primary",on:{click:s.signIn}},[s._v("Sign in")]),e("md-button",{staticClass:"md-raised md-primary",on:{click:s.signOut}},[s._v("Logout")])],1),e("event-list",{attrs:{gridData:s.eventResult}})],1)},w=[],O=!1,x=null,E=null,I=null,_=Object(o["a"])(z,k,w,O,x,E,I),F=_.exports;n["default"].config.productionTip=!1,new n["default"]({data:{state:{}},render:function(s){return s(F)}}).$mount("#app")},uslO:function(s,t,e){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(s){return e(r(s))}function r(s){var t=n[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}a.keys=function(){return Object.keys(n)},a.resolve=r,s.exports=a,a.id="uslO"}},[0]);
//# sourceMappingURL=app.26d7b718.js.map
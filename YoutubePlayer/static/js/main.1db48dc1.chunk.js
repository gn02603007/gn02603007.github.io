(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),i=a.n(o),s=a(9),r=a(10),c=a(13),u=a(11),d=a(12),m=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return""}}]),t}(l.a.Component),h=a(30),g=a(17),p=a(25),f=a.n(p),b=(a(60),a(68)),y=a(72),v=a(69),S=a(70),E=a(42),k=a(71),w=a(44),C=a(43),O=a(20),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).titleRef=l.a.createRef(),a.vidRef=l.a.createRef(),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleOnClick",value:function(){var e=this,t=this.props.proceed;return function(){var a=e.vidRef.current.value.match(/(?<=^https:\/\/youtu.be\/|^https:\/\/www.youtube.com\/watch\?(.*?)(^|\/|v=))[a-z0-9_-]{11}/gim);t({title:e.titleRef.current.value,vid:a.length>0?a[0]:""})}}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.dismiss;return l.a.createElement("div",{className:"static-modal"},l.a.createElement(S.a,{show:t,onHide:a},l.a.createElement(S.a.Body,null,l.a.createElement(E.a,{as:k.a.Row},l.a.createElement(w.a,null,"Title: "),l.a.createElement(C.a,{type:"text",ref:this.titleRef,defaultValue:this.props.title}),l.a.createElement(w.a,null,"VideoID: "),l.a.createElement(C.a,{type:"text",ref:this.vidRef,defaultValue:this.props.vid,placeholder:"Youtube Url or VideoID"}),l.a.createElement(y.a,{className:"button-l",bsStyle:"default",onClick:this.handleOnClick()},"Confirm")))))}}]),t}(l.a.Component),j=Object(O.createConfirmation)(Object(O.confirmable)(x)),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).nameRef=l.a.createRef(),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleOnClick",value:function(){var e=this,t=this.props.proceed;return function(){t({output:e.nameRef.current.value})}}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.dismiss,n=e.name;return l.a.createElement("div",{className:"static-modal"},l.a.createElement(S.a,{show:t,onHide:a},l.a.createElement(S.a.Body,null,l.a.createElement(E.a,{as:k.a.Row},l.a.createElement(w.a,null,"Title: "),l.a.createElement(C.a,{type:"text",ref:this.nameRef,defaultValue:n}),l.a.createElement(y.a,{className:"button-l",onClick:this.handleOnClick()},"Confirm")))))}}]),t}(l.a.Component),N=Object(O.createConfirmation)(Object(O.confirmable)(P)),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).loadFile=function(){var e=new FileReader;e.onload=function(e){var t;try{t=JSON.parse(e.target.result),a.setState({list:t})}catch(n){console.log(n.toString())}},e.onerror=function(e){},e.readAsText(a.fileRef.current.files[0],"UTF-8")},a.load=function(e){a.setState({url:e,played:0,loaded:0,pip:!1,playing:!0}),console.log(a.state)},a.loadFromList=function(e){a.handleTogglePlaying({album:e.album,index:e.index}),a.load("https://www.youtube.com/watch?v="+a.state.list[e.album].songList[e.index].vid)},a.handleChangeList=function(){a.setState({jsonUrl:"data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(a.state.list))})},a.handleChangePlayMode=function(){switch(a.state.playMode){case 0:a.setState({playMode:1,playModeSymbol:"\ud83d\udd00"});break;case 1:a.setState({playMode:2,playModeSymbol:"\ud83d\udd02"});break;case 2:a.setState({playMode:-1,playModeSymbol:"\u27a1"});break;default:a.setState({playMode:0,playModeSymbol:"\ud83d\udd01"})}},a.handlePlayPause=function(){a.setState({playing:!a.state.playing})},a.handleStop=function(){a.setState({playing:!1})},a.handleToggleControls=function(){var e=a.state.url;a.setState({controls:!a.state.controls,url:null},function(){return a.load(e)})},a.handleToggleLight=function(){a.setState({light:!a.state.light})},a.handleToggleLoop=function(){a.setState({loop:!a.state.loop})},a.handleVolumeChange=function(e){a.setState({volume:parseFloat(e.target.value)})},a.handleToggleMuted=function(){a.setState({muted:!a.state.muted})},a.handleSetPlaybackRate=function(e){a.setState({playbackRate:parseFloat(e.target.value)})},a.handleTogglePIP=function(){a.setState({pip:!a.state.pip})},a.handlePlay=function(){console.log("onPlay"),a.setState({playing:!0})},a.handleEnablePIP=function(){console.log("onEnablePIP"),a.setState({pip:!0})},a.handleDisablePIP=function(){console.log("onDisablePIP"),a.setState({pip:!1})},a.handlePause=function(){console.log("onPause"),a.setState({playing:!1})},a.handleSeekMouseDown=function(e){a.setState({seeking:!0})},a.handleSeekChange=function(e){a.setState({played:parseFloat(e.target.value)})},a.handleSeekMouseUp=function(e){a.setState({seeking:!1}),a.player.seekTo(parseFloat(e.target.value))},a.handleProgress=function(e){a.state.seeking||a.setState(e)},a.handleEnded=function(){if(console.log("onEnded"),a.state.loop)a.setState({playing:a.state.loop});else{var e=a.state.playIndex,t=a.state.list;switch(a.state.playMode){case 0:a.loadFromList({album:e.album,index:e.index+1==t[e.album].songList.length?0:e.index+1});break;case 1:for(var n=Math.floor(Math.random()*Math.floor(t[e.album].songList.length));n==e.index;)n=Math.floor(Math.random()*Math.floor(t[e.album].songList.length));a.loadFromList({album:e.album,index:n});break;case 2:a.setState({playing:!0});break;default:a.setState({playing:!1})}}},a.handleDuration=function(e){console.log("onDuration",e),a.setState({duration:e})},a.handleChangeTab=function(e){a.state.viewIndex.album!=e&&a.setState({viewIndex:{album:e,index:null}})},a.handleToggleSingleClick=function(e){a.setState({viewIndex:e})},a.handleTogglePlaying=function(e){a.setState({playIndex:e,viewIndex:{album:e.album,index:null}})},a.renderSongList=function(){var e=a.state.viewIndex,t=a.state.playIndex;return a.state.list[e.album].songList.map(function(n,o){return l.a.createElement("tr",{key:o},l.a.createElement("td",{className:"".concat(t.album===e.album&&t.index===o?"playing":""," ").concat(e.index!==o||t.album===e.album&&t.index===o?"":"selected")},l.a.createElement("div",{className:"title",onClick:function(){return a.handleToggleSingleClick({album:a.state.viewIndex.album,index:o})},onDoubleClick:function(){a.handleTogglePlaying({album:a.state.viewIndex.album,index:o}),a.load("https://www.youtube.com/watch?v="+n.vid)}},n.title),l.a.createElement(b.a,{size:"sm","aria-label":o,className:"song-control"},l.a.createElement(y.a,{variant:"secondary",onClick:function(){a.handleEditSongDialog(n.title,n.vid,{album:a.state.viewIndex.album,index:o})}},"Edit"),l.a.createElement(y.a,{variant:"danger",onClick:function(){a.state.list[a.state.viewIndex.album].songList.splice(o,1),a.setState({list:a.state.list}),localStorage.setItem("myList",JSON.stringify(a.state.list)),a.handleChangeList()}},"x"))))})},a.renderTabList=function(){return a.state.list.map(function(e,t){return l.a.createElement(b.a,{size:"sm","aria-label":t,key:t},l.a.createElement(y.a,{variant:t===a.state.viewIndex.album?"light":"dark",onClick:function(){a.handleChangeTab(t)},onDoubleClick:function(){a.handleEditTabDialog(e.tabName,t)}},e.tabName),l.a.createElement(y.a,{variant:"danger",onClick:function(){a.state.list.splice(t,1),a.setState({list:a.state.list}),localStorage.setItem("myList",JSON.stringify(a.state.list)),a.handleChangeList()}},"x"))})},a.ref=function(e){a.player=e},a.state={url:"",pip:!1,playing:!1,controls:!1,light:!1,volume:.5,muted:!1,played:0,loaded:0,duration:0,playbackRate:1,loop:!1,playIndex:{album:0,index:0},viewIndex:{album:0,index:null},list:void 0===localStorage.myList?[{tabName:"default",songList:[]}]:JSON.parse(localStorage.myList),tabInput:null,vidInput:{title:null,vid:null},playMode:-1,playModeSymbol:"\u27a1",jsonUrl:"data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(void 0===localStorage.myList?[{tabName:"default",songList:[]}]:JSON.parse(localStorage.myList)))},a.handleAddSongToTabActivedDialog=a.handleAddSongToTabActivedDialog.bind(Object(g.a)(Object(g.a)(a))),a.handleAddTabDialog=a.handleAddTabDialog.bind(Object(g.a)(Object(g.a)(a))),a.fileRef=l.a.createRef(),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleAddTabDialog",value:function(){var e=this;N().then(function(t){var a=t.output;/\S/.test(a)&&(e.setState({list:[].concat(Object(h.a)(e.state.list),[{tabName:a,songList:[]}])}),localStorage.setItem("myList",JSON.stringify(e.state.list)),e.handleChangeList())},function(){})}},{key:"handleEditTabDialog",value:function(e,t){var a=this;N({name:e}).then(function(e){var n=e.output;if(/\S/.test(n)){var l=a.state.list;l[t].tabName=n,a.setState({list:l}),localStorage.setItem("myList",JSON.stringify(l)),a.handleChangeList()}},function(){})}},{key:"handleAddSongToTabActivedDialog",value:function(){var e=this;j().then(function(t){var a="https://www.youtube.com/watch?v="+t.vid;if(f.a.canPlay(a)){var n=e.state.list;n[e.state.playIndex.album].songList=[].concat(Object(h.a)(n[e.state.playIndex.album].songList),[{vid:t.vid,title:t.title}]),e.setState({list:n}),localStorage.setItem("myList",JSON.stringify(n)),e.handleChangeList()}},function(){})}},{key:"handleEditSongDialog",value:function(e,t,a){var n=this;j({title:e,vid:t}).then(function(e){var t="https://www.youtube.com/watch?v="+e.vid;if(f.a.canPlay(t)){var l=n.state.list;l[a.album].songList[a.index]={vid:e.vid,title:e.title},n.setState({list:l}),localStorage.setItem("myList",JSON.stringify(l)),n.handleChangeList()}},function(){})}},{key:"render",value:function(){var e=this,t=this.state,a=t.url,n=t.playing,o=t.controls,i=t.light,s=t.volume,r=t.muted,c=t.loop,u=t.played,d=t.playbackRate,m=t.pip,h=t.playModeSymbol;return l.a.createElement("div",null,l.a.createElement("div",{className:"control-panel"},l.a.createElement("div",{className:"controller"},l.a.createElement("div",{className:"toolbar"},l.a.createElement("div",{className:"toolbar-component"},l.a.createElement("span",{onClick:this.handlePlayPause},n?"\u23f8":"\u25b6")),l.a.createElement("div",{className:"toolbar-component"},l.a.createElement("span",{onClick:this.handleChangePlayMode},h)),l.a.createElement("div",{className:"toolbar-component"},l.a.createElement("span",{style:{color:"white"}},"Seek "),l.a.createElement("input",{type:"range",min:0,max:.999999,step:"any",value:u,onMouseDown:this.handleSeekMouseDown,onChange:this.handleSeekChange,onMouseUp:this.handleSeekMouseUp})),l.a.createElement("div",{className:"toolbar-component"},l.a.createElement("span",null,"\ud83d\udd08 "),l.a.createElement("input",{type:"range",min:0,max:1,step:"any",value:s,onChange:this.handleVolumeChange})),l.a.createElement("div",{className:"toolbar-component",style:{float:"right"}},l.a.createElement("input",{style:{display:"none"},type:"file",accept:".json",className:"my-btn",ref:this.fileRef,onChange:this.loadFile}),l.a.createElement("a",{className:"my-btn",onClick:function(){e.fileRef.current.click()}},"\u532f\u5165"),l.a.createElement("a",{className:"my-btn",href:this.state.jsonUrl,download:"SongList.json"},"\u532f\u51fa"))),l.a.createElement("div",{className:"playlist-tab"},l.a.createElement(v.a,{"aria-label":"Toolbar with button groups"},this.renderTabList(),l.a.createElement(y.a,{size:"sm",variant:"light",onClick:this.handleAddTabDialog},"+"))),l.a.createElement("table",{className:"song-list"},l.a.createElement("thead",null,l.a.createElement("tr",{style:{display:"grid"}},l.a.createElement("th",null,"Title",l.a.createElement("span",{style:{float:"right",background:"gray"},onClick:this.handleAddSongToTabActivedDialog},"New")))),l.a.createElement("tbody",{className:"song-list-body"},this.renderSongList())))),l.a.createElement("div",{className:"player"},l.a.createElement(f.a,{ref:this.ref,url:a,pip:m,playing:n,controls:o,light:i,loop:c,playbackRate:d,volume:s,muted:r,onReady:function(){return console.log("onReady")},onStart:function(){return console.log("onStart")},onPlay:this.handlePlay,onEnablePIP:this.handleEnablePIP,onDisablePIP:this.handleDisablePIP,onPause:this.handlePause,onBuffer:function(){return console.log("onBuffer")},onSeek:function(e){return console.log("onSeek",e)},onEnded:this.handleEnded,onError:function(e){return console.log("onError",e)},onProgress:this.handleProgress,onDuration:this.handleDuration})))}}]),t}(l.a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return""}}]),t}(l.a.Component);a(64),a(65);i.a.render(l.a.createElement(function(){return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(I,null),l.a.createElement(L,null))},null),document.getElementById("app"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1db48dc1.chunk.js.map
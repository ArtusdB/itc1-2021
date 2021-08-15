(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[131],{20131:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CodeMirrorSearchProvider:()=>W,FOUND_CLASSES:()=>N,GenericSearchProvider:()=>k,ISearchProviderRegistry:()=>O,NotebookSearchProvider:()=>U,SearchInstance:()=>T,SearchProviderRegistry:()=>R,SearchState:()=>q});var r=s(19573),i=s(10189),n=s(87598),a=s(96927),c=s(17179);const h="jp-DocumentSearch-overlay-row",o="jp-DocumentSearch-input-button-off",l="jp-DocumentSearch-input-button-on",d="jp-DocumentSearch-up-down-button",u="jp-DocumentSearch-search-options-disabled",p="jp-DocumentSearch-replace-button",_="jp-DocumentSearch-replace-button-wrapper",g="jp-DocumentSearch-button-content",m="jp-DocumentSearch-button-wrapper";class S extends a.Component{constructor(e){super(e),this.translator=e.translator||c.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.searchInputRef=a.createRef()}focusInput(){var e;null===(e=this.searchInputRef.current)||void 0===e||e.select()}componentDidUpdate(){this.props.forceFocus&&this.focusInput()}render(){const e=(0,i.classes)(this.props.caseSensitive?l:o,g),t=(0,i.classes)(this.props.useRegex?l:o,g),s="jp-DocumentSearch-input-wrapper "+(this.props.inputFocused?"jp-DocumentSearch-focused-input":"");return a.createElement("div",{className:s},a.createElement("input",{placeholder:this.props.searchText?void 0:this._trans.__("Find"),className:"jp-DocumentSearch-input",value:this.props.searchText,onChange:e=>this.props.onChange(e),onKeyDown:e=>this.props.onKeydown(e),tabIndex:0,onFocus:e=>this.props.onInputFocus(),onBlur:e=>this.props.onInputBlur(),ref:this.searchInputRef}),a.createElement("button",{className:m,onClick:()=>this.props.onCaseSensitiveToggled(),tabIndex:0},a.createElement(i.caseSensitiveIcon.react,{className:e,tag:"span"})),a.createElement("button",{className:m,onClick:()=>this.props.onRegexToggled(),tabIndex:0},a.createElement(i.regexIcon.react,{className:t,tag:"span"})))}}class v extends a.Component{constructor(e){super(e),this._trans=(e.translator||c.nullTranslator).load("jupyterlab"),this.replaceInputRef=a.createRef()}render(){return a.createElement("div",{className:"jp-DocumentSearch-replace-wrapper-class"},a.createElement("input",{placeholder:this.props.replaceText?void 0:this._trans.__("Replace"),className:"jp-DocumentSearch-replace-entry",value:this.props.replaceText,onKeyDown:e=>this.props.onReplaceKeydown(e),onChange:e=>this.props.onChange(e),tabIndex:0,ref:this.replaceInputRef}),a.createElement("button",{className:_,onClick:()=>this.props.onReplaceCurrent(),tabIndex:0},a.createElement("span",{className:`${p} ${g}`,tabIndex:0},this._trans.__("Replace"))),a.createElement("button",{className:_,tabIndex:0,onClick:()=>this.props.onReplaceAll()},a.createElement("span",{className:`${p} ${g}`,tabIndex:-1},this._trans.__("Replace All"))))}}function y(e){return a.createElement("div",{className:"jp-DocumentSearch-up-down-wrapper"},a.createElement("button",{className:m,onClick:()=>e.onHighlightPrevious(),tabIndex:0},a.createElement(i.caretUpEmptyThinIcon.react,{className:(0,i.classes)(d,g),tag:"span"})),a.createElement("button",{className:m,onClick:()=>e.onHightlightNext(),tabIndex:0},a.createElement(i.caretDownEmptyThinIcon.react,{className:(0,i.classes)(d,g),tag:"span"})))}function f(e){return a.createElement("div",{className:"jp-DocumentSearch-index-counter"},0===e.totalMatches?"-/-":`${null===e.currentIndex?"-":e.currentIndex+1}/${e.totalMatches}`)}class x extends a.Component{render(){let e=`jp-DocumentSearch-ellipses-button ${g}`;return this.props.enabled&&(e=`${e} jp-DocumentSearch-ellipses-button-enabled`),a.createElement("button",{className:m,onClick:()=>this.props.toggleEnabled(),tabIndex:0},a.createElement(i.ellipsesIcon.react,{className:e,tag:"span",height:"20px",width:"20px"}))}}class C extends a.Component{render(){return a.createElement("label",{className:"jp-DocumentSearch-search-options"},a.createElement("div",null,a.createElement("span",{className:this.props.canToggleOutput?"":u},this.props.trans.__("Search Cell Outputs")),a.createElement("input",{type:"checkbox",disabled:!this.props.canToggleOutput,checked:this.props.searchOutput,onChange:this.props.toggleOutput})),a.createElement("div",null,a.createElement("span",{className:this.props.canToggleSelectedCells?"":u},this.props.trans.__("Search Selected Cell(s)")),a.createElement("input",{type:"checkbox",disabled:!this.props.canToggleSelectedCells,checked:this.props.searchSelectedCells,onChange:this.props.toggleSelectedCells})))}}class E extends a.Component{constructor(e){super(e),this._debouncedStartSearch=new n.Debouncer((()=>{this._executeSearch(!0,this.state.searchText)}),500),this.translator=e.translator||c.nullTranslator,this.state=e.overlayState,this.replaceEntryRef=a.createRef(),this._toggleSearchOutput=this._toggleSearchOutput.bind(this),this._toggleSearchSelectedCells=this._toggleSearchSelectedCells.bind(this)}componentDidMount(){this.state.searchText&&this._executeSearch(!0,this.state.searchText)}_onSearchChange(e){const t=e.target.value;this.setState({searchText:t}),this._debouncedStartSearch.invoke()}_onReplaceChange(e){this.setState({replaceText:e.target.value})}_onSearchKeydown(e){13===e.keyCode?(e.preventDefault(),e.stopPropagation(),this._executeSearch(!e.shiftKey)):27===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this._onClose())}_onReplaceKeydown(e){13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.props.onReplaceCurrent(this.state.replaceText))}_executeSearch(e,t,s=!1){let r;const i=t||this.state.searchText;try{r=M.parseQuery(i,this.props.overlayState.caseSensitive,this.props.overlayState.useRegex),this.setState({errorMessage:""})}catch(e){return void this.setState({errorMessage:e.message})}!M.regexEqual(this.props.overlayState.query,r)||s?this.props.onStartQuery(r,this.state.filters):e?this.props.onHightlightNext():this.props.onHighlightPrevious()}_onClose(){this.props.onEndSearch(),this._debouncedStartSearch.dispose()}_onReplaceToggled(){this.setState({replaceEntryShown:!this.state.replaceEntryShown})}_onSearchInputFocus(){this.state.searchInputFocused||this.setState({searchInputFocused:!0})}_onSearchInputBlur(){this.state.searchInputFocused&&this.setState({searchInputFocused:!1})}_toggleSearchOutput(){this.setState((e=>Object.assign(Object.assign({},e),{filters:Object.assign(Object.assign({},e.filters),{output:!e.filters.output})})),(()=>this._executeSearch(!0,void 0,!0)))}_toggleSearchSelectedCells(){this.setState((e=>Object.assign(Object.assign({},e),{filters:Object.assign(Object.assign({},e.filters),{selectedCells:!e.filters.selectedCells})})),(()=>this._executeSearch(!0,void 0,!0)))}_toggleFiltersOpen(){this.setState((e=>({filtersOpen:!e.filtersOpen})))}render(){const e=!this.props.isReadOnly&&this.state.replaceEntryShown,t=this.props.hasOutputs,s=t?a.createElement(x,{enabled:this.state.filtersOpen,toggleEnabled:()=>this._toggleFiltersOpen()}):null,r=t?a.createElement(C,{key:"filter",canToggleOutput:!e,canToggleSelectedCells:!0,searchOutput:this.state.filters.output,searchSelectedCells:this.state.filters.selectedCells,toggleOutput:this._toggleSearchOutput,toggleSelectedCells:this._toggleSearchSelectedCells,trans:this.translator.load("jupyterlab")}):null,n=this.state.replaceEntryShown?i.caretDownIcon:i.caretRightIcon;return[a.createElement("div",{className:h,key:0},this.props.isReadOnly?a.createElement("div",{className:"jp-DocumentSearch-toggle-placeholder"}):a.createElement("button",{className:"jp-DocumentSearch-toggle-wrapper",onClick:()=>this._onReplaceToggled(),tabIndex:0},a.createElement(n.react,{className:`jp-DocumentSearch-replace-toggle ${g}`,tag:"span",elementPosition:"center",height:"20px",width:"20px"})),a.createElement(S,{useRegex:this.props.overlayState.useRegex,caseSensitive:this.props.overlayState.caseSensitive,onCaseSensitiveToggled:()=>{this.props.onCaseSensitiveToggled(),this._executeSearch(!0)},onRegexToggled:()=>{this.props.onRegexToggled(),this._executeSearch(!0)},onKeydown:e=>this._onSearchKeydown(e),onChange:e=>this._onSearchChange(e),onInputFocus:this._onSearchInputFocus.bind(this),onInputBlur:this._onSearchInputBlur.bind(this),inputFocused:this.state.searchInputFocused,searchText:this.state.searchText,forceFocus:this.props.overlayState.forceFocus,translator:this.translator}),a.createElement(f,{currentIndex:this.props.overlayState.currentIndex,totalMatches:this.props.overlayState.totalMatches}),a.createElement(y,{onHighlightPrevious:()=>this._executeSearch(!1),onHightlightNext:()=>this._executeSearch(!0)}),e?null:s,a.createElement("button",{className:m,onClick:()=>this._onClose(),tabIndex:0},a.createElement(i.closeIcon.react,{className:"jp-icon-hover",elementPosition:"center",height:"16px",width:"16px"}))),a.createElement("div",{className:h,key:1},e?a.createElement(a.Fragment,null,a.createElement(v,{onReplaceKeydown:e=>this._onReplaceKeydown(e),onChange:e=>this._onReplaceChange(e),onReplaceCurrent:()=>this.props.onReplaceCurrent(this.state.replaceText),onReplaceAll:()=>this.props.onReplaceAll(this.state.replaceText),replaceText:this.state.replaceText,ref:this.replaceEntryRef,translator:this.translator}),a.createElement("div",{className:"jp-DocumentSearch-spacer"}),s):null),this.state.filtersOpen?r:null,a.createElement("div",{className:"jp-DocumentSearch-regex-error",hidden:!!this.state.errorMessage&&0===this.state.errorMessage.length,key:3},this.state.errorMessage)]}}var M;!function(e){e.parseQuery=function(e,t,s){const r=t?"g":"gi",i=s?e:e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&");let n;return n=new RegExp(i,r),n.test("")&&(n=/x^/),n},e.regexEqual=function(e,t){return!(!e||!t)&&e.source===t.source&&e.global===t.global&&e.ignoreCase===t.ignoreCase&&e.multiline===t.multiline}}(M||(M={}));var P=s(58137),w=s(77031),I=s(80198);class T{constructor(e,t,s){this._displayState={currentIndex:0,totalMatches:0,caseSensitive:!1,useRegex:!1,searchText:"",query:null,errorMessage:"",searchInputFocused:!0,replaceInputFocused:!1,forceFocus:!0,replaceText:"",replaceEntryShown:!1,filters:{output:!0,selectedCells:!1},filtersOpen:!1},this._displayUpdateSignal=new P.Signal(this),this._isDisposed=!1,this._disposed=new P.Signal(this),this.translator=s||c.nullTranslator,this._widget=e,this._activeProvider=t;const i=this._activeProvider.getInitialQuery(this._widget);this._displayState.searchText=i||"",this._searchWidget=function(e){const{widgetChanged:t,overlayState:s,onCaseSensitiveToggled:i,onRegexToggled:n,onHightlightNext:c,onHighlightPrevious:h,onStartQuery:o,onReplaceCurrent:l,onReplaceAll:d,onEndSearch:u,isReadOnly:p,hasOutputs:_,translator:g}=e,m=r.ReactWidget.create(a.createElement(r.UseSignal,{signal:t,initialArgs:s},((e,t)=>a.createElement(E,{onCaseSensitiveToggled:i,onRegexToggled:n,onHightlightNext:c,onHighlightPrevious:h,onStartQuery:o,onEndSearch:u,onReplaceCurrent:l,onReplaceAll:d,overlayState:t,isReadOnly:p,hasOutputs:_,translator:g}))));return m.addClass("jp-DocumentSearch-overlay"),m}({widgetChanged:this._displayUpdateSignal,overlayState:this._displayState,onCaseSensitiveToggled:this._onCaseSensitiveToggled.bind(this),onRegexToggled:this._onRegexToggled.bind(this),onHightlightNext:this._highlightNext.bind(this),onHighlightPrevious:this._highlightPrevious.bind(this),onStartQuery:this._startQuery.bind(this),onReplaceCurrent:this._replaceCurrent.bind(this),onReplaceAll:this._replaceAll.bind(this),onEndSearch:this.dispose.bind(this),isReadOnly:this._activeProvider.isReadOnly,hasOutputs:this._activeProvider.hasOutputs||!1,translator:this.translator}),this._widget.disposed.connect((()=>{this.dispose()})),this._searchWidget.disposed.connect((()=>{this._widget.activate(),this.dispose()})),this._widget instanceof r.MainAreaWidget&&(this._searchWidget.node.style.top=`${this._widget.toolbar.node.clientHeight}px`),this._widget instanceof I.NotebookPanel&&this._widget.content.activeCellChanged.connect((()=>{this._displayState.query&&this._displayState.filters.selectedCells&&this._startQuery(this._displayState.query,this._displayState.filters)})),this._displaySearchWidget()}get searchWidget(){return this._searchWidget}get provider(){return this._activeProvider}focusInput(){this._displayState.forceFocus=!0,this._displayState.searchInputFocused=!0,this._displayUpdateSignal.emit(this._displayState),this._displayState.forceFocus=!1}showReplace(){this._displayState.replaceEntryShown=!0}updateIndices(){this._displayState.totalMatches=this._activeProvider.matches.length,this._displayState.currentIndex=this._activeProvider.currentMatchIndex,this._updateDisplay()}_updateDisplay(){this._displayState.forceFocus=!1,this._displayUpdateSignal.emit(this._displayState)}async _startQuery(e,t){this._activeProvider&&this._displayState.query&&await this._activeProvider.endQuery(),this._displayState.query=e,this._displayState.filters=t,await this._activeProvider.startQuery(e,this._widget,t),this.updateIndices(),this._activeProvider.changed.connect(this.updateIndices,this)}async _replaceCurrent(e){this._activeProvider&&this._displayState.query&&(await this._activeProvider.replaceCurrentMatch(e),this.updateIndices())}async _replaceAll(e){this._activeProvider&&this._displayState.query&&(await this._activeProvider.replaceAllMatches(e),this.updateIndices())}dispose(){this.isDisposed||(this._isDisposed=!0,this._displayState.query&&this._activeProvider.endSearch(),this._searchWidget.dispose(),this._disposed.emit(void 0),P.Signal.clearData(this))}get isDisposed(){return this._isDisposed}get disposed(){return this._disposed}_displaySearchWidget(){this._searchWidget.isAttached||w.Widget.attach(this._searchWidget,this._widget.node)}async _highlightNext(){this._displayState.query&&(await this._activeProvider.highlightNext(),this.updateIndices())}async _highlightPrevious(){this._displayState.query&&(await this._activeProvider.highlightPrevious(),this.updateIndices())}_onCaseSensitiveToggled(){this._displayState.caseSensitive=!this._displayState.caseSensitive,this._updateDisplay()}_onRegexToggled(){this._displayState.useRegex=!this._displayState.useRegex,this._updateDisplay()}}var b=s(98669);class R{constructor(){this._changed=new P.Signal(this),this._providerMap=new Map}register(e,t){return this._providerMap.set(e,t),this._changed.emit(),new b.DisposableDelegate((()=>{this._providerMap.delete(e),this._changed.emit()}))}getProviderForWidget(e){return this._findMatchingProvider(this._providerMap,e)}get changed(){return this._changed}_findMatchingProvider(e,t){for(const s of e.values())if(s.canSearchOn(t))return new s}}const O=new(s(66065).Token)("@jupyterlab/documentsearch:ISearchProviderRegistry"),N=["cm-string","cm-overlay","cm-searching"],D=["CodeMirror-selectedtext"];class k{constructor(){this.isReadOnly=!0,this.isSubProvider=!1,this._matches=[],this._mutationObserver=new MutationObserver(this._onWidgetChanged.bind(this)),this._changed=new P.Signal(this)}getInitialQuery(e){return""}async startQuery(e,t,s={}){const r=this;await this.endQuery(!1),this._widget=t,this._query=e,this._mutationObserver.disconnect();const i=[],n=document.createTreeWalker(this._widget.node,NodeFilter.SHOW_TEXT,{acceptNode:e=>{let t=e.parentElement;for(;t!==this._widget.node;){if(t.nodeName in k.UNSUPPORTED_ELEMENTS)return NodeFilter.FILTER_REJECT;t=t.parentElement}return r._query.test(e.textContent)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},!1),a=[],c=[];let h=n.nextNode();for(;h;)a.push(h),c.push(h.parentElement.cloneNode(!0)),h=n.nextNode();const o=-1===this._query.flags.indexOf("g")?e.flags+"g":e.flags;return a.forEach(((t,s)=>{const r=new RegExp(e.source,o),n=[];let a=r.exec(t.textContent);for(;a;)n.push({start:a.index,end:a.index+a[0].length,text:a[0]}),a=r.exec(t.textContent);const h=c[s],l=t.textContent.length;let d=null;const u=[];for(let e=n.length-1;e>=0;--e){const{start:s,end:r,text:i}=n[e],a=document.createElement("span");if(a.classList.add(...N),a.textContent=i,t.textContent=`${t.textContent.slice(0,s)}${t.textContent.slice(r)}`,(null==t?void 0:t.nodeType)==Node.TEXT_NODE){const e=t.splitText(s);t.parentNode.insertBefore(a,e)}else 0===s?t.parentNode.prepend(a):r===l?t.parentNode.append(a):d&&r===n[e+1].start&&t.parentNode.insertBefore(a,d);d=a,u.unshift({text:i,fragment:"",line:0,column:0,index:-1,matchesIndex:-1,indexInOriginal:e,spanElement:a,originalNode:h})}i.push(...u)})),i.forEach(((e,t)=>{e.index=t,e.matchesIndex=t})),!this.isSubProvider&&i.length>0&&(this._currentMatch=i[0]),this._mutationObserver.observe(this._widget.node,{attributes:!1,characterData:!0,childList:!0,subtree:!0}),this._matches=i,this._matches}refreshOverlay(){}async endQuery(e=!0){this._matches.forEach((e=>{0===e.indexInOriginal&&e.spanElement.parentElement.replaceWith(e.originalNode)})),this._matches=[],this._currentMatch=null,this._mutationObserver.disconnect()}async endSearch(){return this.endQuery()}async highlightNext(){return this._highlightNext(!1)}async highlightPrevious(){return this._highlightNext(!0)}_highlightNext(e){if(0!==this._matches.length){if(this._currentMatch){this._currentMatch.spanElement.classList.remove(...D);let t=e?this._currentMatch.matchesIndex-1:this._currentMatch.matchesIndex+1;if(this.isSubProvider&&(t<0||t>=this._matches.length))return void(this._currentMatch=null);t=(t+this._matches.length)%this._matches.length,this._currentMatch=this._matches[t]}else this._currentMatch=e?this._matches[this.matches.length-1]:this._matches[0];return this._currentMatch&&(this._currentMatch.spanElement.classList.add(...D),function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.left>=0&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(this._currentMatch.spanElement)||this._currentMatch.spanElement.scrollIntoView(e),this._currentMatch.spanElement.focus()),this._currentMatch}}async replaceCurrentMatch(e){return Promise.resolve(!1)}async replaceAllMatches(e){return Promise.resolve(!1)}static canSearchOn(e){return e instanceof w.Widget}get matches(){return this._matches?this._matches.map((e=>Object.assign({},e))):this._matches}get changed(){return this._changed}get currentMatchIndex(){return this._currentMatch?this._currentMatch.index:null}get currentMatch(){return this._currentMatch}clearSelection(){}async _onWidgetChanged(e,t){await this.startQuery(this._query,this._widget),this._changed.emit(void 0)}}k.UNSUPPORTED_ELEMENTS={BASE:!0,HEAD:!0,LINK:!0,META:!0,STYLE:!0,TITLE:!0,BODY:!0,AREA:!0,AUDIO:!0,IMG:!0,MAP:!0,TRACK:!0,VIDEO:!0,APPLET:!0,EMBED:!0,IFRAME:!0,NOEMBED:!0,OBJECT:!0,PARAM:!0,PICTURE:!0,SOURCE:!0,CANVAS:!0,NOSCRIPT:!0,SCRIPT:!0,SVG:!0};var F=s(67106),j=s(40100),A=s(26260),Q=s.n(A);class W{constructor(){this.isReadOnly=!1,this.isSubProvider=!1,this._matchState={},this._changed=new P.Signal(this)}getInitialQuery(e){const t=e.content.editor.doc.getSelection();return-1===t.search(/\r?\n|\r/g)?t:""}async startQuery(e,t,s={}){if(!W.canSearchOn(t))throw new Error("Cannot find Codemirror instance to search");return this._cm=t.content.editor,this._startQuery(e)}async startQueryCodeMirror(e,t){return this._cm=t,this._startQuery(e,!1)}refreshOverlay(){this._refreshOverlay()}async _startQuery(e,t=!0){await this.endQuery(!1),this._query=e,A.on(this._cm.doc,"change",this._onDocChanged.bind(this)),t&&this._refreshOverlay(),this._setInitialMatches(e);const s=this._parseMatchesFromState();if(0===s.length)return[];if(!this.isSubProvider){const e=this._findNext(!1),t=e&&this._matchState[e.from.line][e.from.ch];this._currentMatch=t}return s}async endQuery(e=!0){this._matchState={},this._currentMatch=null,e&&this._cm.removeOverlay(this._overlay);const t=this._cm.getCursor("from"),s=this._cm.getCursor("to");t!==s&&this._cm.setSelection({start:this._toEditorPos(s),end:this._toEditorPos(t)}),A.off(this._cm.doc,"change",this._onDocChanged.bind(this))}async endSearch(){return this.isSubProvider||this._cm.focus(),this.endQuery()}async highlightNext(){const e=this._findNext(!1);if(!e)return;const t=this._matchState[e.from.line][e.from.ch];return this._currentMatch=t,t}async highlightPrevious(){const e=this._findNext(!0);if(!e)return;const t=this._matchState[e.from.line][e.from.ch];return this._currentMatch=t,t}async replaceCurrentMatch(e){let t=!1;if(this._currentMatchIsSelected()){const s=this._cm.getSearchCursor(this._query,this._cm.getCursor("from"),!this._query.ignoreCase);if(!s.findNext())return t;t=!0,s.replace(e)}return await this.highlightNext(),t}async replaceAllMatches(e){let t=!1;return new Promise(((s,r)=>{this._cm.operation((()=>{const r=this._cm.getSearchCursor(this._query,void 0,!this._query.ignoreCase);for(;r.findNext();)t=!0,r.replace(e);this._matchState={},this._currentMatch=null,s(t)}))}))}static canSearchOn(e){return e instanceof r.MainAreaWidget&&e.content instanceof j.FileEditor&&e.content.editor instanceof F.CodeMirrorEditor}get matches(){return this._parseMatchesFromState()}get currentMatch(){return this._currentMatch}get changed(){return this._changed}get currentMatchIndex(){return this._currentMatch?this._currentMatch.index:null}clearSelection(){}get editor(){return this._cm}_onDocChanged(e,t){var s,r;(t.text.length>1||(null!==(r=null===(s=t.removed)||void 0===s?void 0:s.length)&&void 0!==r?r:0)>1)&&(this._setInitialMatches(this._query),this._changed.emit(void 0))}_refreshOverlay(){this._cm.operation((()=>{this._cm.removeOverlay(this._overlay),this._overlay=this._getSearchOverlay(),this._cm.addOverlay(this._overlay),this._changed.emit(void 0)}))}_setInitialMatches(e){this._matchState={};const t=A.Pos(this._cm.doc.firstLine(),0),s=A.Pos(this._cm.doc.lastLine());this._cm.doc.getRange(t,s).split("\n").forEach(((t,s)=>{e.lastIndex=0;let r=e.exec(t);for(;r;){const i=r.index,n={text:r[0],line:s,column:i,fragment:t,index:0};this._matchState[s]||(this._matchState[s]={}),this._matchState[s][i]=n,r=e.exec(t)}}))}_getSearchOverlay(){return{token:e=>{const t=e.pos;this._query.lastIndex=t;const s=e.string,r=this._query.exec(s),i=e.lineOracle.line;if(e.start===t&&0===t&&this._matchState[i]&&(this._matchState[i]={}),r&&r.index===t){const n=r[0].length,a={text:s.substr(t,n),line:i,column:t,fragment:s,index:0};return this._matchState[i]||(this._matchState[i]={}),this._matchState[i][t]=a,e.pos+=n||1,e.eol()&&this._changed.emit(void 0),"searching"}r?e.pos=r.index:(this._changed.emit(void 0),e.skipToEnd())}}}_findNext(e){return this._cm.operation((()=>{const t=this._query.ignoreCase,s=e?"anchor":"head",r=this._cm.getCursor(s),i=this._toEditorPos(r);let n=this._cm.getSearchCursor(this._query,r,!t);if(!n.find(e)){if(this.isSubProvider)return this._cm.setCursorPosition(i,{scroll:!1}),this._currentMatch=null,null;const s=e?A.Pos(this._cm.lastLine()):A.Pos(this._cm.firstLine(),0);if(n=this._cm.getSearchCursor(this._query,s,!t),!n.find(e))return null}const a=n.from(),c=n.to(),h={start:{line:a.line,column:a.ch},end:{line:c.line,column:c.ch}};return this._cm.setSelection(h),this._cm.scrollIntoView({from:a,to:c},100),{from:a,to:c}}))}_parseMatchesFromState(){let e=0;return Object.keys(this._matchState).reduce(((t,s)=>{const r=parseInt(s,10),i=this._matchState[r];return Object.keys(i).forEach((s=>{const r=parseInt(s,10),n=i[r];n.index=e,e+=1,t.push(n)})),t}),[])}_toEditorPos(e){return{line:e.line,column:e.ch}}_currentMatchIsSelected(){if(!this._currentMatch)return!1;const e=this._cm.getSelection(),t=e.end.column-e.start.column,s=e.start.line===e.end.line;return this._currentMatch.line===e.start.line&&this._currentMatch.column===e.start.column&&this._currentMatch.text.length===t&&s}}class q{}var L=s(95153),B=s(79028);class U{constructor(){this.isReadOnly=!1,this.hasOutputs=!0,this._searchProviders=[],this._unRenderedMarkdownCells=[],this._cellsWithMatches=[],this._changed=new P.Signal(this)}getInitialQuery(e){var t;const s=e.content.activeCell,r=null===(t=null==s?void 0:s.editor)||void 0===t?void 0:t.doc.getSelection();return-1===(null==r?void 0:r.search(/\r?\n|\r/g))?r:""}async startQuery(e,t,s){this._searchTarget=t;let r=this._searchTarget.content.widgets;this._filters=s&&0!==Object.entries(s).length?s:{output:!0,selectedCells:!1};const i=r.filter((e=>this._searchTarget.content.isSelectedOrActive(e)));this._filters.selectedCells&&i.length>0&&(r=i),this._searchTarget.hide();let n=0;const a=[];for(const t of r){const s=t.editor,r=new W;r.isSubProvider=!0;let i=!1;t instanceof L.MarkdownCell&&t.rendered&&(t.rendered=!1,i=!0),t.inputHidden&&(t.inputHidden=!1);const c=await r.startQueryCodeMirror(e,s);if(t instanceof L.MarkdownCell&&(0!==c.length?this._unRenderedMarkdownCells.push(t):i&&(t.rendered=!0)),0!==c.length&&(r.refreshOverlay(),this._cellsWithMatches.push(t)),c.forEach((e=>{e.index=e.index+n})),n+=c.length,r.changed.connect(this._onSearchProviderChanged,this),a.concat(c),this._searchProviders.push({cell:t,provider:r}),t instanceof L.CodeCell&&this._filters.output){const s=new k;s.isSubProvider=!0;const r=await s.startQuery(e,t.outputArea);r.map((e=>{e.index=e.index+n})),n+=r.length,a.concat(r),s.changed.connect(this._onSearchProviderChanged,this),this._searchProviders.push({cell:t,provider:s})}}return this._searchTarget.show(),this._currentMatch=await this._stepNext(this._updatedCurrentProvider(!1)),this._refreshCurrentCellEditor(),this._refreshCellsEditorsInBackground(this._cellsWithMatches),a}_refreshCellsEditorsInBackground(e,t=5){let s=0;const r=()=>{for(let r=s+t;s<r&&s<e.length;s++)e[s].editor.refresh();s<e.length&&window.setTimeout(r,0)};window.setTimeout(r,0)}_refreshCurrentCellEditor(){this._searchTarget.content.activeCell.editor.refresh()}async endQuery(){this._searchTarget.hide();const e=[];this._searchProviders.forEach((({provider:t})=>{e.push(t.endQuery()),t.changed.disconnect(this._onSearchProviderChanged,this)})),P.Signal.disconnectBetween(this._searchTarget.model.cells,this),this._searchProviders=[],this._currentProvider=null,this._unRenderedMarkdownCells.forEach((e=>{e.isDisposed||(e.rendered=!0)})),this._unRenderedMarkdownCells=[],await Promise.all(e),this._searchTarget.show(),this._refreshCurrentCellEditor(),this._refreshCellsEditorsInBackground(this._cellsWithMatches.filter((e=>!(e instanceof L.MarkdownCell)))),this._cellsWithMatches=[]}async endSearch(){this._searchTarget.hide(),P.Signal.disconnectBetween(this._searchTarget.model.cells,this);const e=this._searchTarget.content.activeCellIndex,t=[];this._searchProviders.forEach((({provider:e})=>{t.push(e.endSearch()),e.changed.disconnect(this._onSearchProviderChanged,this)})),this._searchProviders=[],this._currentProvider=null,this._unRenderedMarkdownCells.forEach((e=>{e.rendered=!0})),this._unRenderedMarkdownCells=[],this._searchTarget.content.activeCellIndex=e,this._searchTarget.content.mode="edit",this._currentMatch=null,await Promise.all(t),this._searchTarget.show(),this._refreshCurrentCellEditor(),this._searchTarget=null,this._refreshCellsEditorsInBackground(this._cellsWithMatches.filter((e=>!(e instanceof L.MarkdownCell)))),this._cellsWithMatches=[]}async highlightNext(){return this._currentMatch=await this._stepNext(this._updatedCurrentProvider(!1)),this._currentMatch}async highlightPrevious(){return this._currentMatch=await this._stepNext(this._updatedCurrentProvider(!0),!0),this._currentMatch}async replaceCurrentMatch(e){const t=this._searchTarget.content.activeCell.editor;let s=!1;if(this._currentMatchIsSelected(t)){const{provider:t}=this._currentProvider;if(s=await t.replaceCurrentMatch(e),s&&(this._currentMatch=t.currentMatch,this._currentMatch))return s}return await this.highlightNext(),s}async replaceAllMatches(e){let t=!1;for(const s in this._searchProviders){const{provider:r}=this._searchProviders[s];t=!!await r.replaceAllMatches(e)||t}return this._currentMatch=null,t}static canSearchOn(e){return e instanceof I.NotebookPanel}get matches(){return[].concat(...this._getMatchesFromCells())}get changed(){return this._changed}get currentMatchIndex(){return this._currentMatch?this._currentMatch.index:null}_updatedCurrentProvider(e){if(this._currentProvider&&this._currentProvider.cell===this._searchTarget.content.activeCell)return this._currentProvider;let t;if(this._currentProvider){const s=B.ArrayExt.firstIndexOf(this._searchProviders,this._currentProvider),r=((e?s-1:s+1)+this._searchProviders.length)%this._searchProviders.length;t=this._searchProviders[r]}else t=(e?B.ArrayExt.findLastValue:B.ArrayExt.findFirstValue)(this._searchProviders,(e=>this._searchTarget.content.activeCell===e.cell));return this._currentProvider=t,t}async _stepNext(e,t=!1,s=0){const{provider:r}=e,i=t?await r.highlightPrevious():await r.highlightNext();if(!i){const r=this._searchProviders.indexOf(e),i=this._searchProviders.length;if(s===i)return;const n=((t?r-1:r+1)+i)%i,a=this._searchProviders[n];if(a.provider instanceof W){const e=a.provider.editor,s=t?Q().Pos(e.lastLine()):Q().Pos(e.firstLine(),0),r={line:s.line,column:s.ch};e.setCursorPosition(r,{scroll:!1})}return this._currentProvider=a,this._stepNext(a,t,s+1)}const n=this._searchTarget.content;return n.activeCellIndex=n.widgets.indexOf(e.cell),i}_getMatchesFromCells(){let e=0;const t=[];return this._searchProviders.forEach((({provider:s})=>{const r=s.matches;r.forEach((t=>{t.index=t.index+e})),e+=r.length,t.push(r)})),t}_onSearchProviderChanged(){this._changed.emit(void 0)}_currentMatchIsSelected(e){if(!this._currentMatch)return!1;const t=e.getSelection(),s=t.end.column-t.start.column,r=t.start.line===t.end.line;return this._currentMatch.line===t.start.line&&this._currentMatch.column===t.start.column&&this._currentMatch.text.length===s&&r}}}}]);
//# sourceMappingURL=131.0e641fc0e1ae0d14aa10.js.map
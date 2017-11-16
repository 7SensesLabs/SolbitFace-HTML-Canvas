(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.063)").s().p("A01EvQqKhPATi9QgUi5KIhmQIphYMOgOQMNgPIpBDQKLBOgTC+QATC4qHBnQopBXsOAPQiLADiFAAQphAAnGg3gAgBldQsOAOopBYQqCBlATC1QgSC5KFBOQIpBCMNgOQMNgPIphXQKChmgSi0QARi5qEhOQnHg3phAAQiEAAiKADg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.129)").s().p("A00EqQqFhOASi5QgTi1KChlQIphYMOgOQMNgPIpBDQKEBOgRC5QASC0qCBmQopBXsNAPQiLADiFAAQpgAAnGg3gAgBlYQsNAOopBYQp9BkASCxQgRC1J/BNQIpBCMNgOQMNgPIohXQJ9hlgRiwQAQi1p/hNQnGg3phAAQiEAAiKADg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.196)").s().p("A00ElQp/hNARi1QgSixJ9hkQIphYMNgOQMNgPIoBDQJ/BNgQC1QARCwp9BlQooBXsNAPQiLADiFAAQpgAAnGg3gAAAlTQsNAOopBYQp3BkAQCsQgQCwJ6BNQIoBCMMgOQMNgPIohXQJ4hkgQisQAPixp5hMQnGg3phAAQiDAAiKADg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,153,0.263)").s().p("A0zEgQp6hNAQiwQgQisJ3hkQIphYMNgOQMLgPIpBDQJ5BMgPCxQAQCsp4BkQooBXsNAPQiLADiEAAQpgAAnFg3gAAAlOQsNAOooBYQpyBjAPCoQgOCsJzBMQIpBCMLgOQMNgPInhXQJzhjgPioQAOisp0hMQnGg3pgAAQiDAAiKADg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(153,153,153,0.329)").s().p("A0zEbQpzhMAOisQgPioJyhjQIohYMNgOQMLgPIoBDQJ0BMgOCsQAPCopzBjQonBXsNAPQiKADiFAAQpfAAnGg3gAAAlJQsNAOonBYQptBiAOCkQgOCoJvBLQIoBCMLgOQMMgPIohXQJthigOikQANiopvhLQnFg3peAAQiFAAiKADg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,153,153,0.396)").s().p("A0yEWQpvhLAOioQgOikJthiQInhYMNgOQMLgPInBDQJvBLgNCoQAOCkptBjQooBWsMAPQiKADiFAAQpfAAnFg3gAAAlEQsMAPooBXQpnBhANCgQgNCkJpBKQIoBCMLgOQMMgOInhYQJohhgNigQAMikpphKQnFg3peAAQiFAAiKADg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(153,153,153,0.463)").s().p("A0yERQpphKANikQgNigJnhhQIohXMMgPQMLgOInBCQJpBKgMCkQANCgpoBhQonBYsMAOQiKADiFAAQpfAAnFg3gAAAk/QsMAPonBXQpfBgAJCaIAAAEQgICdJgBKQIoBDMKgPQMLgPInhWQJihhgLicIAAAAIAAgCQAIidphhKQnEg3peAAQiFAAiKADg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(153,153,153,0.529)").s().p("A0xEMQpghKAIidIAAgEQgJiaJfhgQInhXMMgPQMKgPInBDQJhBKgICdIAAACIAAAAQALCcpiBhQonBWsLAPQiKADiEAAQpfAAnFg3gAAAk6QsLAPonBXQpbBfAJCXIAAABIAAACQgICaJcBIQInBCMKgOQMLgOImhYQJbhfgIiWIAAgDQAIiapchJQnEg3peAAQiFAAiKADg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(153,153,153,0.863)").s().p("A0uDzQpHhGAFiKIAAgBQgGiHJHhcQImhXMJgOQMJgPImBDQJHBGgFCJIAAABQAGCHpHBcQomBXsJAPQiLADiFAAQpcAAnDg3gAAAkhQsJAOolBXQpDBbAGCEIAAAAQgGCFJEBGQImBCMIgOQMJgPIlhWQJDhcgGiDIAAAAQAGiGpEhFQnDg3pdAAQiDAAiLADg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(153,153,153,0.796)").s().p("A0vD4QpMhHAGiNIAAgBIAAgBQgGiLJMhdQImhWMJgPQMJgOImBCQJNBHgGCOIAAAAIAAABQAGCLpMBdQolBWsKAPQiKADiEAAQpeAAnEg3gAAAkmQsJAPomBWQpHBdAGCGIAAABQgFCKJHBHQInBBMIgOQMJgPImhWQJHhdgGiGIAAgBQAFiKpHhGQnEg3pcAAQiEAAiLADg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(153,153,153,0.596)").s().p("A0wEHQpbhIAHiaIAAgCIAAgBQgJiXJbhfQInhXMLgPQMKgOInBCQJcBJgICaIAAADQAJCWpcBfQomBYsKAOQiLADiEAAQpfAAnEg3gAAAk1QsKAPonBWQpWBfAICTIAAABIAAABQgHCWJXBIQImBDMKgPQMLgPImhWQJWhfgIiTIAAgBIAAgBQAIiWpYhIQnEg3pdAAQiEAAiLADg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(153,153,153,0.729)").s().p("A0vD9QpShHAHiSIAAgBIAAgBQgHiPJRhdQImhYMKgOQMJgPInBDQJSBHgHCSIAAABIAAABQAHCPpRBdQomBYsKAOQiKADiEAAQpeAAnEg3gAAAkrQsJAPomBWQpMBdAGCLIAAABIAAABQgGCNJMBHQInBCMJgOQMKgPIlhWQJMhdgGiLIAAgBIAAAAQAGiOpNhHQnEg3pcAAQiEAAiLADg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(153,153,153,0.663)").s().p("A0vECQpXhIAHiWIAAgBIAAgBQgIiTJWhfQInhWMKgPQMKgPImBDQJYBIgICWIAAABIAAABQAICTpWBfQomBWsLAPQiKADiFAAQpdAAnEg3gAAAkwQsKAOomBYQpRBdAHCPIAAABIAAABQgHCSJSBHQImBCMKgOQMKgOImhYQJRhdgHiPIAAgBIAAgBQAHiSpShHQnEg3pdAAQiEAAiLADg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("A0tDpQo9hFAEiBIAAAAQgFh/I+hbQIlhXMIgOQMIgPIlBDQI/BFgFCBIAAAAQAFB/o+BbQolBWsIAPQiLADiFAAQpbAAnDg3g");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(153,153,153,0.929)").s().p("A0tDuQpEhGAGiFIAAAAQgGiEJDhbQIlhXMJgOQMJgPIlBDQJEBFgGCGIAAAAQAGCDpDBcQolBWsJAPQiLADiFAAQpbAAnDg3gAAAkcQsIAOolBXQo+BbAFB/IAAAAQgECBI9BFQImBCMIgOQMIgPIlhWQI+hbgFh/IAAAAQAFiBo/hFQnDg3pbAAQiEAAiLADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(-196.5,-35.7,393.2,71.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D18C0B").s().p("AgGAAQAAgEAGgCQAGABAAAFQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgGgBAAgGg");
	this.shape.setTransform(116.9,144.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D18C0B").s().p("AgBAGQgGgBACgGQACgGAFACQAGACgCAFQgBAEgEAAIgCAAg");
	this.shape_1.setTransform(93.6,138.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D18C0B").s().p("AgFAHQgDgDAAgEQAAgDACgCQADgDADAAQAEAAACACQADADAAADQAAADgCADQgDADgEAAIAAAAQgDAAgCgCg");
	this.shape_2.setTransform(227.1,148.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D18C0B").s().p("AgIADQgBgDACgDQACgDADgBQADgCADACQAEABABAEQACAHgIADIgDABQgFAAgDgGg");
	this.shape_3.setTransform(183.3,107.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D18C0B").s().p("AgEAIQgIgFAFgHQADgDADgBQADgBADACQAEACAAAEQABADgCADQgCADgEABIgCAAIgEgBg");
	this.shape_4.setTransform(99,95.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D18C0B").s().p("AgCAJQgDgBgCgDQgCgEABgCQABgEAEgCQADgCADABQAEABABADQACAEgBACQgBAEgDACIgFABIgCAAg");
	this.shape_5.setTransform(62.1,94.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D18C0B").s().p("AgFAAQAAgEAFgBQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgFAAAAgGg");
	this.shape_6.setTransform(148.7,108.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D18C0B").s().p("AgHADQgBgDABgDQACgDADgBQADgCADACQADABABADQADAIgIADIgEABQgFAAgBgGg");
	this.shape_7.setTransform(108.4,106);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D18C0B").s().p("AgDAEQgEgEAFgDQADgEAEAFQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_8.setTransform(203.1,120);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D18C0B").s().p("AgFAIQgDgCAAgEQgCgDADgDQADgDADgBQADgBAEACQADACABAEQABADgDADQgDADgDABIgCAAQgCAAgDgBg");
	this.shape_9.setTransform(100.3,111.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D18C0B").s().p("AgFAJQgEgCgBgFQAAgDACgEQACgDAFgBQADgCAEADQAEACABAFQABADgDAEQgCADgFACIgCAAQgCAAgDgCg");
	this.shape_10.setTransform(235.2,125.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D18C0B").s().p("AgIAKQgEgEAAgFQgBgFAEgEQAEgEAFAAQAFAAAEADQAEAEAAAFQAAAFgDAEQgEAEgGAAIAAAAQgFAAgDgDg");
	this.shape_11.setTransform(18.4,85.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D18C0B").s().p("AgHADQgCgGAIgEQACgBADACQADABABADQABACgBADQgCAEgDABIgDAAQgFAAgCgFg");
	this.shape_12.setTransform(104.6,139.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D18C0B").s().p("AgBAIQgIgDACgGQACgIAHACQAIADgDAGQgBAGgFAAIgCAAg");
	this.shape_13.setTransform(132.9,122.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D18C0B").s().p("AgIABQAAgIAIgBQAJAAAAAIQAAAIgJABQgIAAAAgIg");
	this.shape_14.setTransform(34.2,91.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D18C0B").s().p("AgDAAQAAgCADgBQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_15.setTransform(41,111.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D18C0B").s().p("AgGABQgBgCADgCQACgDACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgGAAAAgGg");
	this.shape_16.setTransform(88.7,124.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D18C0B").s().p("AgEAFQgCgCAAgDQAAgFAGgBQAHAAAAAGQAAAHgHAAIAAAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_17.setTransform(143.9,150.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D18C0B").s().p("AgIAKQgEgEAAgFQAAgFADgDQAEgEAFgBQAFAAAEADQAEAEAAAFQAAAEgEAEQgDAEgGABIAAAAQgFAAgDgDg");
	this.shape_18.setTransform(69.2,104.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D18C0B").s().p("AgIADQgCgHAIgEQADgBADACQAEABABAEQACAHgIADIgDABQgFAAgDgGg");
	this.shape_19.setTransform(79,129.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D18C0B").s().p("AgFAFQgCgDAAgCQABgDACgCQADgCACAAQADAAACADQAFAFgGAFQgDACgCAAQgDAAgCgDg");
	this.shape_20.setTransform(55.4,84);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D18C0B").s().p("AgBAGQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIAAgEQACgGAFACQAGACgCAFQgCAEgEAAIgBAAg");
	this.shape_21.setTransform(68.2,91.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D18C0B").s().p("AgHAIQgDgDAAgEQAAgEADgDQADgDAEgBQAFAAADADQADADAAAEQAAAKgLABQgDAAgEgDg");
	this.shape_22.setTransform(50.8,99.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D18C0B").s().p("AAAAIQgDAAgCgDQgFgFAGgFQAFgFAGAGQAEAFgGAFQgCACgDAAIAAAAg");
	this.shape_23.setTransform(30.4,99.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D18C0B").s().p("AgFAJQgDgCgBgFQgCgDADgEQADgEAEAAQAEgBADACQAEADAAAEQABADgCAEQgDADgEABIgCAAQgCAAgDgBg");
	this.shape_24.setTransform(55.1,115.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D18C0B").s().p("AAAALQgFgBgDgDQgGgIAIgHQAEgCAEAAQAEABADADQAGAIgIAGQgDADgEAAIAAAAg");
	this.shape_25.setTransform(46.8,112);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D18C0B").s().p("AgFAJQgJgGAGgIQACgEAFgBQAEgBAEACQAEADABAEQAAAEgCAEQgDAEgFABIgCAAQgCAAgDgCg");
	this.shape_26.setTransform(18.2,24.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D18C0B").s().p("AgDAGQgHgEAFgFQAEgGAFAEQAGADgEAGQgCACgDABIgBAAIgDgBg");
	this.shape_27.setTransform(59.6,43.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D18C0B").s().p("AgBAGQgGgBACgGQACgFAFABQAGABgCAGQgCAEgDAAIgCAAg");
	this.shape_28.setTransform(65.9,100.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D18C0B").s().p("AgGAFQgCgDABgCQABgDACgCQADgCACAAQADAAACADQACACAAADQgBADgCACQgDACgCAAQgDAAgDgDg");
	this.shape_29.setTransform(71.5,126.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D18C0B").s().p("AgIAJQgDgDAAgFQgBgEAEgEQADgEAFAAQAFgBAEAEQADADABAFQAAAEgEAEQgDAEgGAAIAAAAQgEAAgEgDg");
	this.shape_30.setTransform(34.2,50.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D18C0B").s().p("AgHALQgEgDgBgFQgBgFADgEQADgEAGgBQAEgCAEADQAFADABAFQABAFgDAEQgEAEgFACIgCAAQgDAAgEgCg");
	this.shape_31.setTransform(189.1,142.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D18C0B").s().p("AgFAGQgCgCgBgDQAAgHAIgBQAHgBABAIQAAAIgIAAIAAAAQgDAAgCgCg");
	this.shape_32.setTransform(35.7,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D18C0B").s().p("AgHADQgCgDACgDQABgDAEgBQADgCADACQADABABADQADAHgIAEIgDABQgFAAgCgGg");
	this.shape_33.setTransform(19.4,73.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D18C0B").s().p("AgIAHQgCgEAAgDQABgFADgCQAIgHAHAIQACAEAAADQgBAEgEADQgDADgEAAQgEgBgDgDg");
	this.shape_34.setTransform(24.2,60.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D18C0B").s().p("AgBAHQgHgCACgGQACgHAGACQADABABACQACADgBACQgBAFgGAAIgBAAg");
	this.shape_35.setTransform(60.2,55.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D18C0B").s().p("AgHAJQgEgDAAgFQAAgEADgEQAEgDAEgBQAFAAAEADQADADAAAFQABAFgEADQgEAEgFAAIAAAAQgEAAgDgDg");
	this.shape_36.setTransform(52.3,62.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D18C0B").s().p("AgJADQgBgDACgDQACgEAEgBQADgCADACQAEABACAEQABADgCAEQgCAEgDABIgEABQgGAAgDgHg");
	this.shape_37.setTransform(6.8,62.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D18C0B").s().p("AAAAJQgEAAgDgDQgCgDAAgDQABgEADgCQADgDADABQAEAAADADQACADgBADQAAAEgDACQgDACgDAAIAAAAg");
	this.shape_38.setTransform(62.3,118.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D18C0B").s().p("AgDAGQgGgEAEgFQACgCADgBQACgBACACQADACABADQAAACgCACQgDADgDAAIgDgBg");
	this.shape_39.setTransform(256.9,149.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D18C0B").s().p("AgFAAQAAgFAFAAQAGgBAAAGQAAAFgGABQgFAAAAgGg");
	this.shape_40.setTransform(50.7,54.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D18C0B").s().p("AgBAGQgHgBACgGQADgHAFACQAHACgCAGQgCAFgEAAIgCgBg");
	this.shape_41.setTransform(55.4,11.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D18C0B").s().p("AgDAFQgFgDADgFQAFgFAEADQAGAEgFAEQgCAEgDAAIgDgCg");
	this.shape_42.setTransform(37.7,7.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D18C0B").s().p("AgFACQgCgFAGgCQAFgCACAGQACAEgGADIgCAAQgDAAgCgEg");
	this.shape_43.setTransform(159.8,137.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D18C0B").s().p("AgCAEQgEgCADgEQADgEADADQAEADgDADQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_44.setTransform(5.8,72.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D18C0B").s().p("AgCAJQgIgDACgHQABgEAEgCQADgBACABQAEAAACAEQACADgBACQgCAHgGAAIgDAAg");
	this.shape_45.setTransform(41.6,82.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D18C0B").s().p("AgEADQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAEgEAEAEQADAEgFADIgDACQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBg");
	this.shape_46.setTransform(27.7,36.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D18C0B").s().p("AgFAGQgDgCAAgEQAAgHAIgBQAJAAAAAIQAAAIgJAAIAAABQgDAAgCgDg");
	this.shape_47.setTransform(46.3,5.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D18C0B").s().p("AgGAKQgEgCgBgGQgBgDADgFQADgEAFAAQAEgCAEADQAEADABAFQABAEgDAEQgDADgFABIgCABQgDAAgDgCg");
	this.shape_48.setTransform(30,17.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D18C0B").s().p("AgEAIQgDgBgBgEQgCgDACgDQACgEAEgBQACgBAEABQAEACABADQABADgBAEQgCADgEACIgDAAIgEgBg");
	this.shape_49.setTransform(48.9,31.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D18C0B").s().p("AgDAFQgFgEAEgDQADgGAFAEQAFADgEAEQgCADgDAAIgDgBg");
	this.shape_50.setTransform(0.6,53.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D18C0B").s().p("AgFAHQgDgCgBgEQAAgDADgDQAGgGAGAFQAGAGgFAFQgDAEgEAAQgCAAgDgCg");
	this.shape_51.setTransform(410.9,35.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D18C0B").s().p("AgIAAQABgHAIgBQAIACAAAGQgBAJgIgBQgIAAAAgIg");
	this.shape_52.setTransform(378,43.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D18C0B").s().p("AgCAGQgFgDACgEQACgGAGACQAFACgCAFQgCAEgEAAIgCAAg");
	this.shape_53.setTransform(391,59.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D18C0B").s().p("AAAAFQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFAFAAQAGAAAAAFQgBAGgEAAIgBgBg");
	this.shape_54.setTransform(385.7,58.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D18C0B").s().p("AgFACQgCgFAHgCQAFgCABAGQACAFgGACIgCABQgEAAgBgFg");
	this.shape_55.setTransform(354.1,38.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D18C0B").s().p("AgEAHQgDgCAAgEQgBgDADgCQAFgHAGAGQACACABADQAAADgDACQgCADgDAAIgBABQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_56.setTransform(409,23.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D18C0B").s().p("AgDAIQgEgBAAgDQgCgEACgCQAAgEAEgBQADgCAEACQADABABADQACADgCADQgBAEgDABIgEABIgDgBg");
	this.shape_57.setTransform(396.9,63.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D18C0B").s().p("AAAAJQgEAAgDgDQgCgCAAgEQABgDADgDQADgCACAAQAEAAAEADQACADgBADQAAAEgDACQgCACgEAAIAAAAg");
	this.shape_58.setTransform(401.9,1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D18C0B").s().p("AgJADQgBgJAJgCQACgBAEACQAEACAAAEQABACgCAEQgCADgEABIgCABQgHAAgCgHg");
	this.shape_59.setTransform(396.1,39.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D18C0B").s().p("AgEADQgDgEAFgDQAEgDADAFQADAEgFACIgDACQgCAAgCgDg");
	this.shape_60.setTransform(381.7,15.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D18C0B").s().p("AgCAEQgFgEAEgCQADgFAEAEQAEADgEADQgCADgCAAIgCgCg");
	this.shape_61.setTransform(412.1,15.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D18C0B").s().p("AgDAJQgIgEAEgHQABgEADgBQADgCAEACQAIADgDAHQgCAEgDABIgEABIgDAAg");
	this.shape_62.setTransform(375.4,55.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D18C0B").s().p("AgGAMQgFgDgBgFQgCgFADgFQADgEAGgCQAEgBAFACQAFADABAGQACAEgDAFQgDAFgGABIgDABQgDAAgDgCg");
	this.shape_63.setTransform(382,69.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D18C0B").s().p("AgCAJQgDgBgCgDQgDgDABgDQACgEADgCQADgCAEAAQADACACADQADADgBADQgCAEgDACQgDACgCAAIgCgBg");
	this.shape_64.setTransform(412.2,2.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D18C0B").s().p("AgEANQgGgDgCgFQgCgFACgEQADgFAFgCQAEgCAFABQAFADADAEQACAFgDAEQgCAGgFACIgFABIgEAAg");
	this.shape_65.setTransform(393.5,16.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D18C0B").s().p("AgGAAQAAgGAHAAQAGABAAAGQgBAGgGAAQgHgBABgGg");
	this.shape_66.setTransform(395.8,16.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D18C0B").s().p("AgHAMQgFgDgCgFQgBgFADgFQAEgGAFgBQAFgCAGAEQAFACABAHQACAEgDAGQgEAEgGACIgDAAQgDABgEgDg");
	this.shape_67.setTransform(401,36.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D18C0B").s().p("AgHAJQgEgCgBgGQAAgEADgEQAEgEAFAAQAEgBAEADQAEAEABAEQAAAFgDAEQgEAEgFABIgBAAQgEAAgDgEg");
	this.shape_68.setTransform(366.6,83.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D18C0B").s().p("AgFAHQgDgCAAgEQAAgDACgCQACgDAEgBQADAAADACQAGAGgFAGQgEADgDAAQgCAAgDgCg");
	this.shape_69.setTransform(356,18.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D18C0B").s().p("AgDAEQgEgEAEgCQADgFAEAEQAEADgEADQAAABgBAAQAAABgBAAQAAAAgBABQgBAAAAAAIgDgCg");
	this.shape_70.setTransform(403.1,48.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D18C0B").s().p("AgEAFQgCgDAAgCQAAgCADgCQACgCACAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACADAAABQAAAHgHAAQgCAAgCgCg");
	this.shape_71.setTransform(350.7,32.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D18C0B").s().p("AgGAAQABgGAGAAQAGABAAAFQgBAHgGAAQgGAAAAgHg");
	this.shape_72.setTransform(389.4,74);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D18C0B").s().p("AgEABQgCgEAGgCQAEgBACAFQABAFgGABIgBABQgEAAAAgFg");
	this.shape_73.setTransform(346.3,55.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D18C0B").s().p("AgDAFQgFgFAEgDQAEgEAEADQAEAEgEAEQgCACgCAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_74.setTransform(376,87.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D18C0B").s().p("AAAADQgBAAgBgBQgBAAAAgBQAAAAAAgBQAAAAABAAIACgCIABAAQABAAABAAQABABAAAAQAAABAAAAQAAAAgBABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBgBg");
	this.shape_75.setTransform(387.4,58.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D18C0B").s().p("AgFACQgCgGAHgBQAFgCACAGQABACgCACQgCADgCABIgCAAQgFAAAAgFg");
	this.shape_76.setTransform(359.1,60);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D18C0B").s().p("AgDADQgDgEAFgCQACgCADADQACADgDADIgDABQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_77.setTransform(352.3,91.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D18C0B").s().p("AgDAEQgEgEAEgDQADgEAEADQAEAEgDADQgDADgCAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_78.setTransform(388.5,45.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D18C0B").s().p("AgBAFQgFgCACgEQACgEAEABQAFACgCAEQgCADgCAAIgCAAg");
	this.shape_79.setTransform(339.3,75.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D18C0B").s().p("AgFAEQgEgGAGgDQAGgEADAGQAEAFgGAEQgDACgBAAQgDAAgCgEg");
	this.shape_80.setTransform(348,58.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D18C0B").s().p("AgGAAQABgGAGABQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAAHgHAAQgGAAAAgHg");
	this.shape_81.setTransform(381.2,43.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D18C0B").s().p("AgDAIQgDgCgBgEQgDgHAJgDQADgBADACQADACABAEQABACgCADQgCAEgEAAIgCABIgDgBg");
	this.shape_82.setTransform(376.7,48);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D18C0B").s().p("AgCALQgEgBgDgEQgDgEABgDQACgFAEgDQAEgCAEABQAEABADAEQADAEgBAEQgCAEgEADQgDACgDAAIgCgBg");
	this.shape_83.setTransform(356.2,72);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D18C0B").s().p("AgEALQgFgCgCgEQgCgFACgDQADgFAEgCQAEgCAFABQAFACACAFQABAEgBAEQgCAFgFACIgFABIgEgBg");
	this.shape_84.setTransform(350.1,104.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D18C0B").s().p("AgEAFQgCgDAAgCQAAgGAHAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACADAAABQAAAHgHAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_85.setTransform(339.6,46.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D18C0B").s().p("AgCALQgFgBgCgEQgDgEABgDQACgFAEgDQAEgCAEABQAFAAACAEQADAEgBAEQgCAFgEADQgDACgDAAIgCgBg");
	this.shape_86.setTransform(378.2,71.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D18C0B").s().p("AgGAIQgDgDAAgEQgBgDADgDQADgEAEAAQADAAAEACQADADAAAEQABADgDADQgDAEgEAAQgDAAgEgCg");
	this.shape_87.setTransform(362.9,100.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D18C0B").s().p("AgFAHQgCgCgBgEQAAgDACgCQADgDADAAQADgBACACQADADAAADQABADgDACQgCADgEAAIAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAg");
	this.shape_88.setTransform(384.8,58.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D18C0B").s().p("AgCAEQgEgDADgDQADgFADAEQAFADgEADQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_89.setTransform(357.3,89.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D18C0B").s().p("AgHAAQAAgDADgBQADgDACAAQAIABgBAHQgBAHgHAAQgIgBABgHg");
	this.shape_90.setTransform(329.7,59.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D18C0B").s().p("AgCAHQgHgDADgGQADgGAGACQAGADgCAGQgBACgDACIgDAAIgCAAg");
	this.shape_91.setTransform(347.4,70.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D18C0B").s().p("AAAAGQgGAAAAgGQABgFAFAAQAHABgBAEQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABIgEABIAAAAg");
	this.shape_92.setTransform(309.2,72.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D18C0B").s().p("AgGACQgBgFAGgCQACgBACABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQACAGgHABIgBABQgEAAgCgFg");
	this.shape_93.setTransform(339.1,85.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D18C0B").s().p("AgCAGQgGgCADgFQADgHAFADQAGACgDAFQgCAFgDAAIgDgBg");
	this.shape_94.setTransform(354.4,79.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D18C0B").s().p("AAAAGQgGAAABgGQAAgFAGAAQAFAAAAAFQgBAGgEAAIgBAAg");
	this.shape_95.setTransform(306.2,123);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D18C0B").s().p("AgHACQgBgCACgDQACgDADgBQAGgCADAIQABACgCADQgCADgDABIgCAAQgFAAgCgGg");
	this.shape_96.setTransform(343.6,87.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D18C0B").s().p("AgDAEQgFgDAEgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAEAEgEADQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_97.setTransform(338.6,86.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D18C0B").s().p("AgBAIQgDgBgBgDQgCgCABgDQABgDACgBQADgCACABQADAAACADQABACAAADQgBADgDABQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_98.setTransform(362.7,68.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D18C0B").s().p("AAAAJQgDAAgDgDQgDgDABgDQAAgDADgDQADgCADAAQADAAADADQADADgBACQAAAEgDADQgDACgDAAIAAAAg");
	this.shape_99.setTransform(333.4,94.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D18C0B").s().p("AgCANQgFgBgDgFQgDgEABgEQACgGAEgDQAFgDAEACQAGABACAEQADAFgBAEQgBAFgFADQgEACgDAAIgCAAg");
	this.shape_100.setTransform(327.6,93.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D18C0B").s().p("AgEAMQgFgCgCgFQgCgEACgFQACgEAFgCQAEgDAFACQAFACACAFQACAEgCAEQgDAGgEABIgFACIgEgBg");
	this.shape_101.setTransform(290.8,105.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D18C0B").s().p("AAAANQgGAAgDgEQgEgEAAgFQABgFAEgEQAEgDAFAAQAGAAADAEQAEAEgBAFQAAAFgEAEQgEADgFAAIAAAAg");
	this.shape_102.setTransform(336.2,102);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D18C0B").s().p("AgIACQgBgHAIgDQAIgBABAHQADAIgJACIgCABQgGAAgCgHg");
	this.shape_103.setTransform(313.4,121);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D18C0B").s().p("AgHAFQgCgDAAgDQABgEAEgCQADgCADAAQAEABACADQACAEAAADQgBADgEADIgFACQgEAAgDgFg");
	this.shape_104.setTransform(384.7,3.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D18C0B").s().p("AgGAEQgCgCABgDQABgDADgCQACgCADABQADABACADQAEAFgHAFQgCABgCAAQgDAAgDgEg");
	this.shape_105.setTransform(381.6,80.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D18C0B").s().p("AgEAFQgFgEAFgFQAEgFAFAEQAFAFgEAEQgDAEgDAAQgBAAgDgDg");
	this.shape_106.setTransform(318.3,133);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D18C0B").s().p("AAAAGQgGAAAAgGQABgGAGAAQAGABAAAFQgBAHgFAAIgBgBg");
	this.shape_107.setTransform(45.5,14.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D18C0B").s().p("AgCAHQgGgDACgGQADgGAGACQADABABADQABACgBACQgCAFgFAAIgCAAg");
	this.shape_108.setTransform(268.8,87.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D18C0B").s().p("AAAAHQgDAAgCgCQgCgCABgDQAAgGAHAAQAHABgBAFQAAADgCACQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAAAg");
	this.shape_109.setTransform(286.2,108.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D18C0B").s().p("AgHACQgCgHAIgCQAHgCADAIQABACgCADQgCAEgEAAIgCABQgGAAgBgHg");
	this.shape_110.setTransform(26.5,81.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D18C0B").s().p("AgDAEQgEgEAEgCQADgEADADQAFADgEADQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgDgCg");
	this.shape_111.setTransform(287.6,128.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D18C0B").s().p("AgBAFQgGgCACgEQADgFAEACQAFABgCAFQgBAEgDAAIgCgBg");
	this.shape_112.setTransform(283.4,126.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D18C0B").s().p("AgGAEQgCgCABgDQAAgDADgCQAGgEAFAGQAEAGgHAFIgEACQgEAAgCgFg");
	this.shape_113.setTransform(296.6,141.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D18C0B").s().p("AgGAFQgDgDACgDQAAgDADgCQAHgEAEAGQADADgCADQgBADgDACQgCACgCAAQgEAAgCgEg");
	this.shape_114.setTransform(312.3,83.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D18C0B").s().p("AgJAIQgDgEAAgEQABgFAEgEQAEgDAEAAQAFABAEAEQAEADgBAFQgBAFgDADQgEAEgFAAQgFgBgEgEg");
	this.shape_115.setTransform(245.7,148.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D18C0B").s().p("AgGAJQgIgHAHgIQAHgHAIAGQADACAAAFQABADgDAEQgDADgFABIgBAAQgDAAgDgCg");
	this.shape_116.setTransform(217.3,111.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D18C0B").s().p("AgGAMQgFgDgBgFQgBgEADgFQADgFAFgCQAEgBAFADQAFACABAGQABAEgDAFQgCAEgGACIgDAAQgDAAgDgBg");
	this.shape_117.setTransform(309.3,108.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D18C0B").s().p("AgEAGQgDgCAAgDQAAgCACgDQAFgGAFAFQACACABADQAAADgCACQgDADgDAAQgCAAgCgCg");
	this.shape_118.setTransform(327.1,118.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D18C0B").s().p("AgGAJQgEgDAAgFQgBgDADgEQAIgIAIAGQAEADAAAFQAAAEgDADQgDAEgFAAIgBAAQgDAAgDgCg");
	this.shape_119.setTransform(276.1,138.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,413.3,151.6), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DBBB02","#E6C602","#C5BB02"],[0,0.549,1],-225.6,213.9,0,-225.6,213.9,285.9).s().p("A7hBrIiggqQhSgYg1gaQg6gegpgiQAPgBAOADQAPAEAJgYQAIgYAOADQBzAaCTASQCTARA6ANQCDAcCcBTIB3A+Qh3gIgoAQQgzAVA6BAQiqhUjog9gAcWAOQgOgWgngJQg1gMhbAPIDzidQBxhFBBgLQAsBJBKARQjKCZiBBbQAFgugQgXg");
	this.shape.setTransform(215.6,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,431.1,50.5), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCB51").s().p("AliHVQjGgDh0hHQgkgWgYgaIgQgWQAiAZAtAVQAyAYA0ANQCbAtBngEQBvgEDYg/QC+g2CXh5QBShBBNheQC+jQANjBQAEhEgOgvQALAdAKAmQAjB+hoC8QheCpiQB0QiSB2jABIQjWBRjXAAIgQAAg");
	this.shape.setTransform(110.5,86.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(36,39.7,149,93.9), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai6CiQhPhDAAhfQAAheBPhCQBNhDBtAAQBuAABNBDQBPBCgBBeQABBfhPBDQhNBChuAAQhtAAhNhCg");
	this.shape.setTransform(62.6,58.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(36,36,53.1,45.7), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9B5324","#F89F24"],[0,1],-44.3,33.4,8.2,-13.6).s().p("AlCIbQh+gPAJg3QACgRARgYQARgVACgFQAIgUB6ucIAPgEIAxAjQA7AsAwA3QCZCsgMDHQgPD2AcBMQAgBSBzgRQBjgOBQgxQApgYAUgWQgaAngmAqQhMBTg7AWQglANhBAoQgxAegyAGQhVASg3AJQgyAHg4AAQg3AAg+gHg");
	this.shape.setTransform(80.1,90.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(36.1,36,88.2,109.3), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E28025").s().p("Ah8DvQgJgCAIgTQAGgNAHgeQAGgaADgFQAMgOAQgeQAHgNgNgHQgTgFgGgGIgPgOQgHgJgKgUQgIgSgTgDIgkgFQgSgFggAJQgaAJgrAXQgjASAAgIQgBgKAVgCQANgBATgOIArgdQAWgNATADQAjAFAIgBQAWgBAbgSQAYgQADAAQAIACAggSQAggUALgPQAFgHANglQAMgkAUgZQAUgbAPgEQAIgBADADQgVATgSAeQgMAUADAQQABAGANAaQAHAOgGAKQgGAMADAJQADANALgHQAUgLAIgBQAXgDAagOIggARQgKAGgEAGIgLAUQgGALAIACQARAEAFAEQALAHATgGQAMgFAfgOQAbgMAZgEQAegFAoADQApADAOAEQANAEgTABQgOACABAPQABAIADAIQgbgNgigKQgUgGgkAKQgjAMgFAAQgMgBgjAfQgGAGAIAEIAYAKQALAGA8ASIBYAbQAdAJgVACQgVACgMgGQgHgDgegJIgwgQQgSgHgegHIgjgJQgSgFgpAaIgaARQgOAIgGADIgSAMQgMAJgKgCQgLgCgBAEIgDAJIgdAYQAEgCgeApQgVAdABAJIADAKQgIARgHAAIgBAAg");
	this.shape.setTransform(35.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,71.3,47.8), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CE8B").s().p("AgHAGQgGgIAGgGQAHgJAGgBQAGAAgBANQgCASgJAGIgHgNg");
	this.shape.setTransform(13.4,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CE8B").s().p("AgHAHQgRgNgCgCQAAgBAAAAQAAAAABAAQAAgBABAAQABAAABAAIAagHQASgGgBAFQgDAJACACQALAIgGAUQgVgCgLgMg");
	this.shape_1.setTransform(9.2,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CE8B").s().p("AAAAMIABgBQgKgIgCgCQgEgFALgMQAIgLAFgIQACgEACAAIgEAbIgGAFIADAOIgEAWIgIAIIgEADg");
	this.shape_2.setTransform(27.5,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7CE8B").s().p("AAAgKIAHgGQAHgEgDAKQgFAQgRAMg");
	this.shape_3.setTransform(4.9,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CE8B").s().p("AAMgVIACAIQABALgDAHIgGAOQgJAAgLADIAagrg");
	this.shape_4.setTransform(3.9,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7CE8B").s().p("AgCBVQgFgEADgRIgDALQgDADgDgDQgEgEgBgMIAAgMIgSADQgHAEgCgHQgCgFACgIQgBAAAAgBQgBAAAAgBQAAAAABgBQAAgBABgBIADgEIAHgOIgNgCIgFABIgKAgQgCAHgDACIgBAGIgPAHIAHgWIgHgPQAIgaAHgHIACgCQAIgHAFAGIABgDIAKgTIAagbIAAAHQAEgGAEgCQgBADACAGIACAKQABgFADgJIACgHIAEgBQAAgJAEgJIgEgBIACgDIADAAIAAgBIADACQAJAAAGgDIgBAEIAAAGIgBACQAFAFACAFIADAHQAagJACgEQACgDAKAAIAKAAIgEAPQgGgCgHAAQgPAAgEAKQgEALgFAGQAFAIACABQAEABACgMQADgRAFAAQADAAACADIABAFQAEgBAAAHQAAAMAJASQADAGgBAPQADAHgGATIgBgFQgDAIgFgFQgEgDACgTQACgPgJAAQgJABgJAHQgDADADgJIAFgSIgVgBQAEAKgDAJIAAACIAAAFIAAADIgDACQgFANgPAFIgEABQAAAFgBAEIgCAMQADgNAHAEQADADADAEQAAARgJAPQgCADgCAAIgDgCgAgRgGQAAAFgCAGIAAABIgBACIgGAJIgEALIANgBIANgZIAEgFQgJgWABgGIgCACQgKAKgFgDQgEAIgFAFIAKAAIADgBQADAAABAEgAASgpIgEAiIAAAAIAJgTIADAHIAKgQIgBgIgAgDgfQACACABAEIAAgFQAAAAAAgBQAAAAAAAAQgBAAgBAAQAAgBgBAAQgDgBAAgDIgBAEIAAAAIAEABg");
	this.shape_5.setTransform(17.5,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7CE8B").s().p("AgCgCQgCgQAFAGQAFAGgGAUIgCgQg");
	this.shape_6.setTransform(2.8,42.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CE8B").s().p("AhPBDQAWgHAEgFQACgDAOABIAFgQIgFgCQAMgOAFgOQAEgJgGAAQgGAAgHAGIgKASQgIAQgOALQgEACAAgKQgCgNgEgFQgGgGAIgDQAIgDAGADQAJAHAHgRQAEgJAIgNIAMgGQAEAFAEALIADgBIANgaIABACQAFAHgHAUIAEAAIAGgJIAEgFQgCgCADgJQABgGACgDIgEgBIAGgCQADgFAEgDIADgDQgBADABAEIAOgHQgCgGADgKIADgJIAGADQABgFACgGIADgFQAbgEgIAMQgIAMgHAEQAEADACAEIAKASQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgLABQACAEgEAWQAAAGgDAEQAEAGgBAHIABACIgBABIgMAIQABgIgDgGQgCgDAAgDIgCgBIgGAAQAEAEAAARIgBADQAIABAEADIgLATQgIgHgCgJIgHAEIgDAUIgcAVQgJAHAGgNQAFgNAEAAQADgBADgCIAHgOIAAABIADgIIAAgMQAAgFAFgFQADgEABAIIAFgLIADgEIgQACIgCAJQgDAHgPATQgFABgCgCIgLACIgLAAIABANIAAAIIgOAHIgCADQgFgCgGgBQgMAAgEAJQgIAQgGAEgAAigoQACAKgFAEIgEADQAGACAPAHQAKAEADgFQADgFgEgDQgHgIABgGQgLABACgEQAEgIgBgCQgEAHgKADg");
	this.shape_7.setTransform(14.5,31.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CE8B").s().p("AgQAMQgFgGAMgLQAJgLAGgIQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAIADQACACgEAHQgHAJgMAHIAAAZQgBgCgMgNg");
	this.shape_8.setTransform(12.5,39.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7CE8B").s().p("AgcAnQAEgJgBgCQgGgIAHgTQgGACgGAGQgCABADgIQANggAEgDIAJgHQAEgDgBAIQgBALAFARQABAEgBALIAEAHIAKAQQAAgMgDAAQgIABADgJQAEgKAKgDIAJACQAIACADAEIgXAfIACgFIgEABIABABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBABgBAAIgYAEIgLACQgBAAAAAAQgBAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_9.setTransform(9.9,44.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7CE8B").s().p("AgJAGQAEgMAGgHIAGgFQAAABADANQADAJgGAFQgIAJgGAAQgGAAAEgNg");
	this.shape_10.setTransform(4.7,48.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7CE8B").s().p("AgGAiIAMgUIgQAAQgFACgDgBQgIgCAIgQIAMgcQAFgKACAFQAFAIgGAWIAQgCQAHgDAAAIQAAAFgDAIQgDAIgQAUIgGABQgGAAAFgFg");
	this.shape_11.setTransform(2.3,52.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7CE8B").s().p("AADAKQgKgEgBgIQgCgJAHACQAGACAEAIQAFAKgFAAIgEgBg");
	this.shape_12.setTransform(22,20.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7CE8B").s().p("AggAiQgEgPgGgEIgDgEIAGgHQAIgCAGADQANAGAEgRQAEgQALgRQAGgIAOAaIAGgBQAFACgCAMQgCAQAMgSIgDAkIgJABQgWACgEgDQALgPAEgPQADgKgIAAQgIAAgGAHIgIATQgHARgOAMIgCABQgCAAgDgIg");
	this.shape_13.setTransform(24.7,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,29.3,56.6), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CE8B").s().p("AgEATIgCgCIAFgVIgKgEIAIgIQAIgHACAKQACAHgBAGIACAAIACABIAAAFQgDAFgJAGQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgBgBg");
	this.shape.setTransform(47.4,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CE8B").s().p("AgCABQAAgGgGgHIgHgHIAZABIAAAJQAAAJADAFIADADIgBAIQgBACgDABIgDABQgJgHgBgMg");
	this.shape_1.setTransform(46.6,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CE8B").s().p("AgKAEIgFgEQgEgEADAAIAigDQACADgGAEIgKAHIgEABQgFAAgFgEg");
	this.shape_2.setTransform(35.9,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7CE8B").s().p("AgGAAQgDgDAIgBIAIAAQgBAEgCADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgEgFg");
	this.shape_3.setTransform(37.4,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CE8B").s().p("AgIAHQgDgDAGgFQAJgJAGACIgCAJQgCAIgFAAIgBAAQgGAAgCgCg");
	this.shape_4.setTransform(38.8,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7CE8B").s().p("AAKAUIgNgKQgKgGADgCQAFgDAAgBQAAgGAFgHIAFgFIADAIQAEAJAAAGIAAARIgBABIgBgBg");
	this.shape_5.setTransform(41.2,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7CE8B").s().p("AgHAFQAHgGAAgJQAAgHAEgBIAEABQACAJgEAIQgCAEAAAIIABAHg");
	this.shape_6.setTransform(39.2,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CE8B").s().p("AgDAGQgHgIADgFQAEgIADAEQAFAEADALQADAJgEAAQgDAAgHgHg");
	this.shape_7.setTransform(35.1,31.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CE8B").s().p("AgQALQAAgDADgFQAFgEARgKQAOgKgMAaQgOAKgHAAQgGAAAAgEg");
	this.shape_8.setTransform(37.3,27.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7CE8B").s().p("AgMAHIAPgMQAPgCgIAHQgHAHgLAAIgEAAg");
	this.shape_9.setTransform(24.2,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7CE8B").s().p("AAHADQgGgFgGACQgKAHgEgBIAKgPQAPAHADgCQADAAAEAEIAFADIgIAHQgCgEgEgDg");
	this.shape_10.setTransform(25.9,36.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7CE8B").s().p("AgDAEQgJAIgCgDIgBgFQAHgJAHgHIARAVIgPAEQAIgUgMALg");
	this.shape_11.setTransform(30.2,24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7CE8B").s().p("AgNAVQAAgBgBAAQAAgBAAAAQAAgBABAAQAAAAABAAQAFgCAHgEIgHgIQgDgBgCgDQgDgDAJgHIAOgLQAFgEAAAFQAAAHgKAKIAJAHQAEABgCAFQgCAEgEADIgJAFIgIACIgEgDg");
	this.shape_12.setTransform(36.2,24.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7CE8B").s().p("AgMAKIgCgTQAMgSARAAQAEgBgOANIgEAIQgCAJABAHQAFAPgMAEIgCAAQgHAAAEgSg");
	this.shape_13.setTransform(33.4,30.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7CE8B").s().p("AgRASQgEgCAOgNIAVgUQAJgHgKAUQgDAFgDADQAAAAgBAAQAAABAAAAQABAAAAABQAAABAAAAQAEAFgRAIIgLgCg");
	this.shape_14.setTransform(31.7,26.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7CE8B").s().p("AAAgCQAEgLABAHQABAGgKAKIAEgMg");
	this.shape_15.setTransform(21.5,36);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7CE8B").s().p("AgdABQADgEAFgDQAGgDgDAFQgDAFAKgDQAJgDAFgGQAFgFADACQADACABAFQAAADAIAGQAIAGAEACQAEACgGAAQgHABgJgFQgIgFgEADQgCACgBADQgLgBgJgCIgRAIg");
	this.shape_16.setTransform(28.4,30);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7CE8B").s().p("AAeAVIgLgHQgEgEgDAGQgFAJgCABQgGACgIgIQgMgIAAgDQALgEAIgFQAEgEgDgEQgDgDgGABIgMAHQgKAFgMAAQgDAAADgGQAEgKgBgFQgCgHAGACQAFACADAFQADAKAKgIQAJgHAKgEQAGgCgEAVIAEACQACADgGAEQgFAHAGgCQAIgBAJgFQAHgDAFAGIAJAQIADAEIgIADIgJgGg");
	this.shape_17.setTransform(30.7,34.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7CE8B").s().p("AgPgBQgBgGALgCQAJgCAGgDQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIADAGQABADgFACQgHACgJgBIgIAQQAAgCgDgOg");
	this.shape_18.setTransform(28.5,39.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7CE8B").s().p("AgPADIAfgJIgEAGQgDAFgHABIgHABQgIgCgCgCg");
	this.shape_19.setTransform(42.9,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7CE8B").s().p("AgCAMQgHgGgBgJQgCgMAKADQAGADAEAEQAAAAAAABQABAAAAgBQAAAAABgBQABAAAAgBQACAIgGAIQgEAFgDAAIgCgCg");
	this.shape_20.setTransform(43.4,10.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7CE8B").s().p("Ag9BeIAFgQQACgIgFgBIgCAAIgCACQgGAIgGABQgGACACgMQADgQgDgKQAAANgFAJIgHAMIgTAAIAcglIgCgBQgHAAADgKQADgKALgCIAIACIACgIIAIgBQAJgCAFgCIgBgFQAAAAABABQAAAAABABQAAAAABAAQAAABABAAQACgDAHACQAHgDAOgIQgLgBgCgDQALgMAHgNQAEgKgGAAIAWgWIADABIACgDQAEAJgFAIQgFAIgGgCIgDAJQgFAMAJgIQAIgHAJgMQAGgJAJAEQAFACAMAKQAIAFADgEQAEgEgDgEQgDgFgBgGQgBgIAIgBIADAAQACgHAGgNQAFgKAPgBIAGABIAAAMIgdAZQAAADgFAUQgFASgNgIQgDgCgKAAQgNABgFgBQgGgCgCAKQADgBgEALIgDAFQgCAEABADQACAFgLAIQACACgEAGQgGAHgLAGIgCAEIgEAWQAAgFgEgGQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIgFgGQgBgDADgFQgBgEgDgCIgKgEIgBgDQgIgBgGAHIgBADQAGADACAFQAJgHgCAKQgEAMAEARQAAAGgFAOQgFAQgFAFQgBgFgDgGg");
	this.shape_21.setTransform(37.8,10.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7CE8B").s().p("AgRAXQAHgLADAAQADAAADgCQACgDAGgJQAEgGAAgJQABgIAFgEQAKgJgPAzIgbARIgEABQgDAAAFgIg");
	this.shape_22.setTransform(39.8,10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7CE8B").s().p("AgSAbQABgLgEgEQgHgFgBABIACgPQAEALAmgbQASgOgEAJIgIARQABAHgSAJQgEACgDAGQgHAKgIAJIAAABQgBAAABgGg");
	this.shape_23.setTransform(40.8,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7CE8B").s().p("AgMADQgGAAAEgIQAEgJAKgCIAIAFQAJAFgBAGQgCAGgEAIIgUADQACgNgEgBg");
	this.shape_24.setTransform(35.4,19.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7CE8B").s().p("AgDARIADgVIgKgEQAEgFAFgDQAIgGADAJQAEAPgKANQgDAFgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_25.setTransform(24.2,25.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7CE8B").s().p("AAAgJIAIgFQAIgEgEAKQgGAOgSAKg");
	this.shape_26.setTransform(6.1,31.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7CE8B").s().p("AAOgTIABAIQAAALgEAHIgHAMQgHAAgLABIAcgng");
	this.shape_27.setTransform(4.5,36.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7CE8B").s().p("AgCgCQAAgPAEAGQAEAGgHATIgBgQg");
	this.shape_28.setTransform(3.7,35.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7CE8B").s().p("AhUBBIADgJQAVgDAEgFQACgCAGAAIAIACIAHgPQgEgBgBgCQAMgMAHgNQAEgIgGgBQgGAAgGAEIgMARQgJAOgPAJQgDACAAgKQAAgNgEgFQgFgHAIgCQAHgCAGAFQAFADAFgDQAEgDACgFIAPgVIALgEQAEAGACAKIAEAAIAOgXIABABQAEAIgIATIAEAAIAKgMQgBgDADgIIAEgIIgDgCIAFgBQAGgIAEgBIAAAGIAOgFQgBgGAEgKIAEgIIAFAEQABgFADgFIADgFQAaAAgJAKQgJALgGADIAFAIIAIASQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAIgKgBQABAFgFAUQgCAGgDADQAEAHgBAHIAAACIgNAHQABgKgCgEQgBgFAAgCIgCgBQgCgBgDAAQADAFgBARIgCACQAIACADAEQABAAAAAAQAAABABgBQAAAAABgBQAAAAABgBQADAJgHAIQgGAIgFgEQgIgHgBgLIgIADIgEASIgcASQgKAFAHgLQAHgMACAAQAEAAACgCIAJgNIAAAAIAEgHIABgLQAAgFAFgFQAEgDAAAIIAJgOIgQABIgDAIQgDAGgQARQgFAAgBgCIgWAAIAAAMIgBAIIgOAFIgCADQgEgDgGgBQgLgCgGAJQgJAOgGADIADgRgAAkgiQACAJgGAFIgEACQAGACANAJQAJAFAEgEQADgEgDgEQgHgJACgGQgLABADgEQAEgIgBgBQgFAGgJABg");
	this.shape_29.setTransform(15.8,26.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7CE8B").s().p("AgRAJQgEgGANgJQAJgJAGgIQABAAAAgBQABAAAAAAQABgBAAAAQABAAABABIAGADQADADgFAGQgHAIgNAFIgCAZIgLgRg");
	this.shape_30.setTransform(13.3,33.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7CE8B").s().p("AgSAbQABgLgFgDQgGgEgCAAIABgOQAEAMAogeQATgOgEAIIgIARQABAIgSAIIgFAEIAegJIgEAEQgGAJgNAAIgIgCIgRAXIAAAAQgBAAABgGg");
	this.shape_31.setTransform(17.9,36.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7CE8B").s().p("AhFA+QgFgMAMgEQAAgLgEgEQgFgHAIgCQAHgCAGAEQAIAGAIgPIADgFIgEABIABABQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgZABQgQACACgFQAFgIgBgCQgEgJAHgQQgEABgIAFQgCABAEgIQAPgeAEgDQAPgMgCAMQgDALADARQABAGgDAJIANAXQACgKgEAAQgHgBAEgJQAEgJAKgCIALAEQAKAFgCAGIAAABIAFAMIADAAQAEABgEALQgEALAIgIQAIgHAJgMQAHgJAMAGQAGgEAAAHIAIAEQAJAEAEgEQADgEgDgDIgEgGQgGACgHgDQgHgDALgHIAdgOIgBAFQgCAGgEAEQACADgBAIIgEANQgCAJgEACIgBAEQgBAHgDgCQgCgCgBgGIgEgBQgDgCgHABIgOABIgCABQgBABAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgDAAQgGgBgBAJQgCAMgDAEQgDAEgGABIgKABQgRAAgDgDQAMgMAGgNQAFgIgGgBQgGAAgGAFQgCABgJAOQgJAOgMAIIACAIIgOADg");
	this.shape_32.setTransform(14.8,40);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7CE8B").s().p("AgHASQgGgBAFgMQAFgLAGgHIAGgEIACAOQACAJgHAFQgIAHgFAAIAAAAg");
	this.shape_33.setTransform(4.9,41.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7CE8B").s().p("AAEAWIgPgCQgFABgDgBQgGgDAIgPIAOgZQAEgKADAGQAEAIgIAUIAQAAQAHgBAAAGQgBAGgEAIIgGAIIgNADg");
	this.shape_34.setTransform(2.3,44.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7CE8B").s().p("AgEAFIgEgJQgDgJADgCQAOgIAEAhQABAIgDAAQgEAAgIgNg");
	this.shape_35.setTransform(28.7,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,48.9,47.5), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CE8B").s().p("AAJAOQgJgDgEgCIgCACQgIAJgDgaQgCgFADgBIACgBIATANIAKgHIADALQACAKgIAAIgDAAg");
	this.shape.setTransform(14.7,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CE8B").s().p("AAJAUQgGgHgDABQgMADgOgQQAOgOAPgDIAQgEIAIABIgJAaQgFAOgDAAIgBgBg");
	this.shape_1.setTransform(2.7,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CE8B").s().p("AgNAGQgKACgCgHIAAgGIAHgDQAJgDAIADQALAEAQgIIgPAZQgMgKgMADg");
	this.shape_2.setTransform(10.2,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7CE8B").s().p("AACARQgIgNgNgNQgLgMAQABQAIAAAKADIAJAMQAKAMABAGQABAGgCADg");
	this.shape_3.setTransform(9.5,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CE8B").s().p("AgYAdQABgGAJgIIAQgOQALgJgEgFQgDgFgGADQgHADgHAAQgKAAAEgLQAEgKAKACIAVAKQATAJgRAPQgDAEgEAJIgGAQg");
	this.shape_4.setTransform(23.1,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7CE8B").s().p("AgEANQgDgGACgIIADgHIAJgKIgIAlg");
	this.shape_5.setTransform(20,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7CE8B").s().p("AAAALQgLgEgBgHQgBgLADgDQAEgFAIALQANAOgCALQgBgCgMgEg");
	this.shape_6.setTransform(35.1,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CE8B").s().p("AgEAeQgJABgEgCQgFgDAGgIIAEgFIABgDIABABIAIgFIgEgCIgCgDQgBAAAAAAQgBgBgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAAgBIAGgdQAFAGAQAcQAHAMgIgBQACAFgFAEQACAEgCAEIgHABQgFAAgFgCg");
	this.shape_7.setTransform(28.9,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CE8B").s().p("AAMA4IgHgeIgFgWIgTgOQgQgMAQgLQADgCAJgSIAYgDQAFALgJAGIgTAMQgKAGADAGQACAFAFgBQAGgCAGACQAJADgEAIIgCACIAQASQAHAKgHAPQgFAJgEADg");
	this.shape_8.setTransform(17,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7CE8B").s().p("AAgAYQgHAAgKgJIgIgJIgJANQgBAHgHgEQgGgDgEgHQgDgEgFgMIgFgNIAEgEQAEgEABAFQADAIAGAMIALgLIAEgHQAGgEAKAPIADAFQAJANAGANg");
	this.shape_9.setTransform(33.2,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7CE8B").s().p("AgDAAIABgBIAGABIgBACg");
	this.shape_10.setTransform(24.5,8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7CE8B").s().p("AgXABQgDgEACgDIAEgCIACABQABgHAJgBQAMgBAIAEQAGADAFAHQAGAIgIACIgDgBQgBAIgJABIgDAAQgTAAgJgPg");
	this.shape_11.setTransform(24.5,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7CE8B").s().p("AABAZIgMgQQgEgHADgJIADgJIAEgGQAFgGACgCIACAAIABABIAFAgIAAACIADADQACAEAAABQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIACARIgDABQgEAAgFgGg");
	this.shape_12.setTransform(31.1,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7CE8B").s().p("AgDAJQgLgHANgLQALgLgBAhQgIgBgEgDg");
	this.shape_13.setTransform(36,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7CE8B").s().p("AgBAOQgMgCgCgIQgCgMAFgFQAEgGAKAKQAQANgCAMIgRgCg");
	this.shape_14.setTransform(48.6,6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7CE8B").s().p("AghAXQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAgBIAOgZQAJgSAEADQAGAJACgBQALgCALAJIAJAIQgTAPgTACIgcAEIgBAAg");
	this.shape_15.setTransform(48.1,11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7CE8B").s().p("AgKgMIAJAFQAJAFAJgBQAMgCACAGQABAEgCAEQgPAHgNgFQgHgDgNACIgMAEg");
	this.shape_16.setTransform(39.7,8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7CE8B").s().p("AgSAJQACgHAGgHIAHgHQAIgGAGACQANAFgGAJQgFAIgUAJQgFADgDAAQgGAAADgJg");
	this.shape_17.setTransform(35.2,2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7CE8B").s().p("AAOAaIgUgFQgSgXgBgLQAAgKAGgCQAGgBAIAFQAEAEAFAIIASAXQAKAMgOAAIgEAAg");
	this.shape_18.setTransform(41,5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7CE8B").s().p("AgNAZQgHgCgGgGQgEgEgGgNIgFgNQAIgPACAJQADAIAJALIANgPIAFgJQAHgGAMAOIAUAWQAHAJgIABQgIACgLgIIgLgIIgLASQgBAHgEAAIgEgCg");
	this.shape_19.setTransform(46.4,2.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7CE8B").s().p("AAHAaIgUgLQgTgKASgPQAEgDACgFIAfgHIgXASQgKAIADAGQADAEAFgCQAKgDAGAAQAKABgFALQgEAIgHAAIgEAAg");
	this.shape_20.setTransform(25.9,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,51.6,15.7), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CE8B").s().p("AgTADQAEgGAFgDQAHgFAMAAQAMAAAAALQAAAFgDAGIgMgKIgVALQgIgCAEgHg");
	this.shape.setTransform(10.5,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CE8B").s().p("AgEAPQgKgMAGgIQAMgYAHAFIgBAxQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgDAAgJgLg");
	this.shape_1.setTransform(17.2,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CE8B").s().p("AAAAIQgMgIAJgGQADgDAHgBQADAVgGAAIgEgDg");
	this.shape_2.setTransform(21.6,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7CE8B").s().p("AgJAMQgDgEABgJQAAgHAKgBIANgDQACAJgMALQgEAFgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_3.setTransform(32.1,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CE8B").s().p("AgNAGIgNgUQgBAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQACAAAWADQAPABAQALQgKAOgOgBQgCAAgEAGIgBABQgDAAgHgMg");
	this.shape_4.setTransform(31.4,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7CE8B").s().p("AgagJQASAGAKgFQAKgFAOAFIABAHQgBAEgKgBQgIAAgIAFIgGAEg");
	this.shape_5.setTransform(24.5,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7CE8B").s().p("AgIAGQgGgGgCgFQgGgLAQAFQARAGAGAGQAFAHgKAFIgFAAQgHAAgIgHg");
	this.shape_6.setTransform(21.2,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CE8B").s().p("AADAAQAFACgMAAQAEgFADADg");
	this.shape_7.setTransform(8.1,29.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CE8B").s().p("AgMAJQgJgDAEgIQAEgKAMAAQgCAEADABQAGACAIAGQALAKgOABIgGABQgJAAgIgEg");
	this.shape_8.setTransform(7.8,31.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7CE8B").s().p("AAEAOQABgGgJgIIgJgFIAJgLIAHAGQAHAHgCADQgBADAHAOg");
	this.shape_9.setTransform(13.5,41.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7CE8B").s().p("AAJBMQgBgPAJgOIAJgQQABgIgFgFQgFgGgGAIQgJAKgDAQQgEgBgIgJIgHgIQgMgLAEgKQABgEAMgFQAJgEgGgGQgFgFgIgNQgHgLgFgDQgTgMARgKIATgLQAJgDAGAJQAFAJgJABQgGABgJgCQgGgCgCAEQgDAFAMAIIAYAOQALAHgFAKQgHAMgBAKQgBALAHgJQAIgIAFADQACACABADIAOgBQAOAAgBAGIgIARQgGAEgEAFQgOATAMAQIgNAEIgDABQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_10.setTransform(15.1,34.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7CE8B").s().p("AgSAZIgDgiIAWgNQAXgMgCAIQgBAHgIACQgJADgEAGQgGAIAAAEQgBAEADADQADADgIALQgEAFgCAAQgDAAAAgFg");
	this.shape_11.setTransform(9.9,35.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7CE8B").s().p("AAEAWQgVgEgEABIAYgMQgDgNADgKQADgGAFABIAIAFQABAAABABQAAAAAAABQABAAAAABQAAABgBAAQgDAJgCAMQgCANgIAAIgCAAg");
	this.shape_12.setTransform(9.6,39.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7CE8B").s().p("AAAAgQgHgEgMAFQgIAEABgCQAFgMAHgKQADgFgBgGQgEgVAKgCIAMgOQAGgHAAAZQgCAxARgBIgQAHQAAgCgLgEg");
	this.shape_13.setTransform(2.7,35.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7CE8B").s().p("AgZAHQAJgGAFgBQAUgDAKgGQAJgGAAAKQgQAEgIAKIgBACQgOABgQAAg");
	this.shape_14.setTransform(9.5,43.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7CE8B").s().p("AgGAHIgBgFQAAgEACgDQAFgJAHASQACAFgFAAQgEAAgGgCg");
	this.shape_15.setTransform(53.8,16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7CE8B").s().p("AgEAGIABgRIAEAGQAEAHgBAGQAAAEgCAAQgCAAgEgGg");
	this.shape_16.setTransform(49.5,24.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7CE8B").s().p("AgBABIAGgIQgBAMgFACIgCABQgDAAAFgHg");
	this.shape_17.setTransform(49.1,21.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7CE8B").s().p("AAAAYQgDgBABgGQABgHgDgJQgDgHgDAEQgDAEAAgEQgBgGACgEIAIgMIAEAQIAOANIgBACQAAABgBABQAAAAAAABQAAAAAAABQABAAAAABIgHAMIgEABIgCgBg");
	this.shape_18.setTransform(48.2,28.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7CE8B").s().p("AgGANQgBgDAAgJQgCgCACgJQAAgBAAgBQAAgBAAgBQABAAAAAAQAAAAAAABQAFAFAEABIAGgFIgNAbg");
	this.shape_19.setTransform(53.3,21.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7CE8B").s().p("AgIA3QgJgIAKgCIgCgGIAAgCQgaASABgJQABgGAGgDQAJgEADgFQAGgJAAgEQABgCgDgDQgBgCACgFQgEgDgBgCIgBADQgCAGgFgBIgIgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQABAAAAgBQADgIABgMQABgNAGAAQAEgBANADIAAgBIALgWQAEARgIAMQgGAJgBgKIgNAHIACAOQABgCAEAAQAGAAAJgHQAIgFAAADQACAOgFAMIgGAQQgBAHAEAEQAFADAEgHQAEgHACgKIACgJQADAAAIAHIgpArg");
	this.shape_20.setTransform(34.2,43.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7CE8B").s().p("AgVAkQgGgEABgCIgFgBIAEgDIgFgLIgDgHIAEgEIgGgEQgFgJAGgIQAFgGAFAFIACABIANgmQADAFAIAIQgBAEgFAHQgEAIgKAGQAJgCALgLQAHgHADAGQACAFgCAHIgBACIABACQAFADAFgFQADgDAGgJQAGAAAFgCQgBAGgJAMQgIAKgFACQgQAGgFAIQgGAFgBgJQgEACgHgDIgBACQgDAGAGAHIACgBIAKAEQAEACAEgBQAAgEADgBIAIAAIABgBIgeAjQAAgKgDgKg");
	this.shape_21.setTransform(39.7,39.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7CE8B").s().p("AgRATIAJgWIACgEQAGgNAFACQADABABAEIAJAFIgOALIgCgBQgJAPgIACg");
	this.shape_22.setTransform(24.3,57.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7CE8B").s().p("AgOAbQAAgGAFgEQAHgEACgGQAEgIAAgEQABgDgCgCQgDgDAGgLQAFgKABAJIAEAdQgXAagGAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBAAABgBg");
	this.shape_23.setTransform(54,12.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7CE8B").s().p("AgMASQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQADgIABgLQABgPAHABIARgBIgQAOIABAGQAAAJgBAGQgBAGgEAAg");
	this.shape_24.setTransform(54,9.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7CE8B").s().p("AgGAHQgEgIAFgHQAEgIADAGQACABAEgCIgDAYg");
	this.shape_25.setTransform(57.1,5.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7CE8B").s().p("AgOAFIABgJIAKAFIAOgNIADABQACABgCAFQgEANgPAEIgDABQgGAAAAgIg");
	this.shape_26.setTransform(42.4,28.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7CE8B").s().p("AgFAOIgBgIIAMgWQAEARgJAMQgCAEgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_27.setTransform(35.9,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7CE8B").s().p("AABgUIALAOIgFALQgGAMgMAEIAMgpg");
	this.shape_28.setTransform(40,8.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7CE8B").s().p("AAIBLQABgDgFgJIgEgMIgIACIgLABIgBABIgEADIgCADQgDgFgFgFIgDgBIABgBQgKgGgKgCQgHgLABgJIAAgEIgFgBQgfAFAEgMQAFgSAXAJQALADATgGIgCAAIAJgYIABgDQgHABgBgKQAAgFAHgNIAHgLIAPgFIAKgQIAGAOIgFAEQACACgEAFQgIAMgHAMQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAIAKAIIAEgNIABgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFgFAFgCQAGgDACAHIAKAMIAIgGQAJgGAGAAQAEABgBADIgFAIQAKgLAHABQAFAAgBAFQgFAOgMAJQgFABgEgBQgHgCAGgJIgGAIIgFAGIABACQAHAMgGAKIAAADIgBABIgEADIgBABQgEAGgLAEIAOAMIAKgNQAFgGAAADQABAJAFAGQAGAGAKgKQAMgLAEAAQAHABgDAGIAEgCQgJAOgIACQgKAKgGABQgUAFgIAFQgDAEgDgDIgEADQgEAAgBgCQgEgDAKgLQANgNgUAEQgCAHgEAHQgEAIAJAJQAFAFAGACIgIALQgOgKABgFgAg7ATQACAFAIAJQAIALAGADQAEgIAGgEIgCgDQAFgLAFgFIgIAEIgHAEQgBgDABgGIgGAFIgWgDIABACgAgBAgIAJALIAHgEIAEgOIgHACIAHgQIAAgBgAgJANIAEACIADgEQgEACgCgBQgLgBAegLIAMgbIgJgIIgEAIIgDAIIgBACQgJAQgEgKIgHgGIgDANQAFABAAAKQAAAEgCADIADgBIACAAgAgWgOIAGgFIgCgBg");
	this.shape_29.setTransform(27.5,32.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7CE8B").s().p("AgCAAIANgHQgLAPgHAAQgIAAANgIg");
	this.shape_30.setTransform(37.6,8.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7CE8B").s().p("AglBbIACgEQACgFAEgDIgHgCIAEgHQAGgHAFgDIgFgMIgEADQgCgEADgHIgCgFIADACIAEgHQAEgGADgBIABgFIADgIIgDgDQgKAPgIABIgCAAIAJgWIgCgCQgKADgGAAIgEgKQAFgQADgEQACgFAAgFQAAgFgGgBQgHgCgDgGQgDgHAJAAQAGAAALgHQAHgFAAAEQACAPgFAOIgGARQgBAHAEAEQAFAEAEgIQAGgLADgPIAEACIAIgNQgKgHABgEQABgFgKgSIARgQIAAAEQgBAHgEAIQgDAIAIAIQADADAFACIgBADIAFAMIgGAFIgJAHIAGAGIAHAJQACAAADAEQgDASgDAGIgFAGIAJAMIACgFIAEgIQgGADAAgEQAAgGAEgDIAIgFIAEgGIAAAAQAEgJAAgDQABgDgDgDQgCgDAFgKQAFgLACAJIAEAeIgMAMIACAHQAKgGAKADQAGACgDAIQgCAJgJACQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgFgBgGgEIgBADQgNAJgGABIAEADIACABQADgCAEgBQAGgBAFgGIACANIgBABQgFAEgIABQAAAEgFAFIgJAJQgFAFgDABIAHAHQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIgTADIgJABQABAGgDALQgBAEgDAAQgEAAgKgLgAgLAjQAAAHgIADQAFAIgDAGQACAAADgHQACgEAGAIQACgCAFgBIAHAAQAEAAACgEQABgFgJgEQgOgFgFgDg");
	this.shape_31.setTransform(39.7,21.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7CE8B").s().p("AgNASQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQACgJABgLQAAgOAIAAQAQAAACgBIgRAOIACAHQAAAIgBAGQgBAGgEAAIgHgDg");
	this.shape_32.setTransform(42.3,17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7CE8B").s().p("AgHATQgBgsgMAEIALgJQgBABAJADQAFABAIgGQAFgEAAACIgJAXQAEACAEAEQAIAIgDAJIgDAFQgEgNgGgNIAAAGQADASgGACIgIAPIgCACQgCAAAAgQg");
	this.shape_33.setTransform(47.6,18.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7CE8B").s().p("AAPBRQgBgMAGAEQAIADABAGIAIgBQAEAAABgEQACgFgJgEIgIgDQgGADgBgHQgMgFAEgKQAEgNABgJQAAgLgFAKQgGAIgEgBIgCgEIgMAEIgBAAQgEAEgKgEIgKgGQgEgJAEgIQADgDADgBIgDABIgJAAQgIAHgEACQgPAIgHAGQgHAIgBgRQAAgEAPgaQAEgHAAADQABAHACAEQAIgOAKgCQADABADgJQACgDAJAMIAOASQAAABABABQAAAAAAAAQAAAAAAAAQAAAAAAABIgBAAIABADIACgFQADgEAAgFQAAgFgGgBQgGgCgDgGQgDgHAIAAQAFAAAJgFQgDgLALgCIAIgDIgCgEIAQgQQABADgCAIIAIAHIAAgDQAAgEAEgIIgBABIgBgOQABgMAFAEIAFAEIABgCQAEgHAAADQABAJAEAFQAFAGAHgLIAAgUIAAgFIAKACIAGAFIgFAKIAGgBQAAAHgJAKQgKALgEACQgPAGgHAHIgBABIACACQgLgBgIAEQADAHAKAFIgGAKIgGgEQgGgFABgDQAAgCgBgFQgFAEgHAAQABAOgFANIgFAOQAAAJADADQAEAEADgIQAGgLADgOQAEABALAMIAEAEQAEAHgBAGQgBAEgJAHQgGAGAEAEIADACQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAACIAHALQAEAFADABIAEADQAFgDADABQADABgFAEIgDACQABAFgFAGIgKAKQgFAEgDAAQgCAIgGAGIgHgcgAgcAFQACADAJgHIgOACIAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABg");
	this.shape_34.setTransform(48.6,11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7CE8B").s().p("AgKAKQABgJAGgJQAGgKAEAEQAEADAAALQAAAGgJAEIgMAGIAAgGg");
	this.shape_35.setTransform(43.6,6.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7CE8B").s().p("AgJgOIgBgBIAdADQADAIgMgCIgGgBIgEAIQgGALgMADg");
	this.shape_36.setTransform(52.6,1.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7CE8B").s().p("AgPAcIgBgJIACgEQAIgQAFgOQgGgBALgHIANgHIgEAEQADADABAGQAAAIgKAYQgHAFgHADIgCAEQgCAEgCAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_37.setTransform(49,3.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7CE8B").s().p("AgaAQIAMgWQAHgPAGAEQACACACAEIALAKQAFgMABgHQABgIAIAKQgEAWgEAGQgEAHgEADQgGAEgCgGIgJgMQgLARgKABIAAAAQgFAAAEgIg");
	this.shape_38.setTransform(44.7,2.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7CE8B").s().p("AgHAXIgBgMQgFACADgGIACgDIAAgaQAAgDAHAFIAGAGIAEAGQAEAHgDAFQgFALgDADQgDAGgEAAIgCgBg");
	this.shape_39.setTransform(26.1,52.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7CE8B").s().p("AgGgBQAAgLAGAEQANAIgJAFQgEAEgFABIgBgLg");
	this.shape_40.setTransform(22.2,54.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7CE8B").s().p("AgDgHQAHgIAFADQAEAEAAAIQAAAHgKADIgOAEQgDgJALgMg");
	this.shape_41.setTransform(11.7,56.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7CE8B").s().p("AgSAMIgLgEQACgEAFgEQAIgGAJgBQACAAAEgHQACgDAKAMIAQARQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAAAIgZABIgFAAQgHAAgLgDg");
	this.shape_42.setTransform(12.8,60);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7CE8B").s().p("AgRAAQgBgDAKgCIAIgCQAcAAgPAHQgNAIgIAAQgIAAgBgIg");
	this.shape_43.setTransform(41.2,34.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7CE8B").s().p("AgJAEQgGgDAHgDQAIgFAJAFQAJAEgNADIgGABQgFAAgDgCg");
	this.shape_44.setTransform(35.6,32.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7CE8B").s().p("AgYALQgCgCABgDQAAgGAKAAQANgBAIgKIAVAQIgKAAQgLAAgGADQgHAEgIAAIgJgBg");
	this.shape_45.setTransform(19.5,57.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7CE8B").s().p("AAIALQgSgEgFgGQgGgFAKgFQAFgDAHADIAHAEIAJAJQAEAIgHAAIgGgBg");
	this.shape_46.setTransform(22.4,51.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F7CE8B").s().p("AgQAOQANgYAFgHQAGgEAFAAQAGAAABAHQABAIgNAVIgQAGIgGABQgIAAAGgIg");
	this.shape_47.setTransform(17.9,54.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F7CE8B").s().p("AgSgBQAKgKANgJIAGAAQAEAEgJAMQgKAKALgBQAEgBAIgCIgEAUg");
	this.shape_48.setTransform(12.2,45.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7CE8B").s().p("AAGAQIgLgLQgNAOgKAAQgHABAFgIIAOgTQAIgMAHADQADACACAEIANAKQAFgKABgHQABgEAFADIAEAEIgDALQgDAKgDADQgEAGgFADIgEABQgEAAgBgEg");
	this.shape_49.setTransform(13,53.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7CE8B").s().p("AgmAUQAAgYAWgQIAcACIAOgCQAOAAgCAHQgEAQgWgFQgKgCgMAEIgLAGQgNAPgDAAIgBgBg");
	this.shape_50.setTransform(21.4,49.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7CE8B").s().p("AgYAUIAbgeQARgTACAGIAFAOQgKAWgHgDQgDgCgCABQgDAFgHAEQgPAHgEAAQgBAAAAAAQgBAAAAgBQAAgBABAAQAAgBABgCg");
	this.shape_51.setTransform(15.8,47.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7CE8B").s().p("AASAtQgCgFgKgJQgJgLgGgBQgHAAgDgDQgDgFAGgHQAIgHAEgMQAEgOgIAFQgHAEAEgIQAEgHAFgDIAVgJIgKAXQAEALACAQIgGADQgEAFAIALQAIAMAAAIQAAAGgBAAIgCgDg");
	this.shape_52.setTransform(20,42.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F7CE8B").s().p("AAcA3IgXgLQgJgGAEgJQAFgMABgKQABgKgHAIQgHAIgEgDIgEgEQgbAGACgIQAEgPAIgLQAJgNgNgEQgIgDgDgHQgDgHAKABQAHACANgGQAJgEAAAEQACAPgHAOIgIAQQgBAIAFAEQAFAEAFgHQAFgGADgKIACgJQAGABAMAOIAGAGQAFAIgCAFQgBADgLAHQgIAEAGAFQAFAFAHALQAHAJAEADIAFACIgJAJQgCgEgGgDg");
	this.shape_53.setTransform(27.5,45.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0.1,0,57.9,61.6), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CE8B").s().p("AgSAFQAFgOAVgDQALgBABALQABAEgCAGIgNgIIgTANQgJAAAEgIg");
	this.shape.setTransform(8.7,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CE8B").s().p("AgDARQgLgMAEgIQAKgZAIAEIAEAwQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgEAAgKgJg");
	this.shape_1.setTransform(15.9,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CE8B").s().p("AABAJQgNgIAIgGIAKgFQAFAVgGAAIgEgCg");
	this.shape_2.setTransform(19.9,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7CE8B").s().p("AgGANQgEgEgBgJQAAgHAJgCIANgEQAEAJgLAMQgEAGgDAAIgDgBg");
	this.shape_3.setTransform(30.1,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CE8B").s().p("AgKAGIgQgSQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAIAZAAQAPgBARAKQgIAPgOAAQgCAAgEAHIgBAAQgCAAgIgKg");
	this.shape_4.setTransform(28.9,24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7CE8B").s().p("AgagGQASAEAJgGQAKgGAOAEIACAGQAAAFgKAAQgIABgIAFIgFAGg");
	this.shape_5.setTransform(22.5,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7CE8B").s().p("AgGAGQgHgGgDgEQgHgKAQADQASAEAGAGQAHAGgKAGQgDABgDAAQgGAAgIgGg");
	this.shape_6.setTransform(19.8,33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CE8B").s().p("AADgBQAFACgLABQACgFAEACg");
	this.shape_7.setTransform(6.9,34.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CE8B").s().p("AgMAKQgIgCACgJQADgJAMgBQAAABgBABQAAAAAAABQABAAAAABQAAAAABAAQAHACAIAFQAMAIgNADIgLABQgGAAgHgCg");
	this.shape_8.setTransform(6.9,35.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7CE8B").s().p("AAFAOQAAgHgJgGIgKgEIAHgMIAHAGQAIAGgBADQAAADAIANg");
	this.shape_9.setTransform(13.8,45.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7CE8B").s().p("AAVBLQgCgQAGgOIAHgRQAAgIgFgFQgGgFgFAIQgHAMgDAPQgDAAgIgIIgIgHQgOgKACgKQABgEAMgGQAIgGgGgFQgGgFgKgMQgIgKgGgCQgUgLAQgLIARgMQAJgFAHAJQAHAIgKACQgGACgJgCQgGgBgCAFQgCAFANAGIAaAMQALAGgEAKQgFANgBAKQAAALAIgKQAHgHAFABQACABABADIAPgCQAOgBgBAFIgGASQgFAEgEAHQgLATAOAPIgNAGIgDABQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_10.setTransform(14.2,38.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7CE8B").s().p("AgNAbIgHghIAUgQQAVgOAAAIQAAAHgHADQgKAEgDAHQgFAJABAEQgBACADAEQADADgFALQgEAGgCAAQgDAAgBgFg");
	this.shape_11.setTransform(9.2,39.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7CE8B").s().p("AAHAWIgagBIAXgNQgEgNABgKQACgHAFABIAJAEQABAAABABQAAAAABABQAAAAAAABQAAAAAAABQgDAJAAAMQgBAOgJAAIAAAAg");
	this.shape_12.setTransform(9.5,43.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7CE8B").s().p("AgZAlQADgMAFgKQADgGgCgGQgGgUAJgDIALgPQAFgIACAYQAFAyAQgDIgPAIQgBgBgKgEQgIgCgLAGIgGADIAAgBg");
	this.shape_13.setTransform(2.7,40.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7CE8B").s().p("AgZAJQAJgHAFgCQATgFAJgHQAIgGABAKQgPAGgGAKIgCACIgdAFg");
	this.shape_14.setTransform(10,47.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7CE8B").s().p("AgNAIIAAgJIAKADIAMgPIACAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQACAJgBADIgEAEIgEgCQgDADgGAEIgFABQgEAAgBgGg");
	this.shape_15.setTransform(42.3,55.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7CE8B").s().p("AgWgDQAPADAIgHQAJgFAMACIABACIAAAEIgEAEIgFABQgGAAgHAGIgEAFg");
	this.shape_16.setTransform(45.3,52.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7CE8B").s().p("AgOAGQgRgHANgLIAQgMQAGgFAGAHQAGAHgIADQgGABgGAAQgGgBgBAEQgCAFALAEIAPAGQAJADACADIgSAOQgNgSgHgDg");
	this.shape_17.setTransform(36,58.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7CE8B").s().p("AgRAJIARgPQATgNgBAHQAAAGgGADQgIADgDAFIgRALg");
	this.shape_18.setTransform(33.6,62.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7CE8B").s().p("AgKAUIgMgBQAEgIAFgHQgBgJAGgCIAJgPQAFgHACAVIAAAEIABABIANAKQgOAIgVAJg");
	this.shape_19.setTransform(27.8,64.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7CE8B").s().p("AgFAJIgEgGIAJgBQADgIABgEIACgBQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQADAJgKAIQgCADgCAAQgCAAgCgDg");
	this.shape_20.setTransform(59.1,30.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7CE8B").s().p("AgLgKQgBAAAAgBQABAAAAgBQABAAABAAQABAAABAAIAHAAIAEACQAGADABAEQAEAPgFABg");
	this.shape_21.setTransform(54.5,32.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7CE8B").s().p("AgDABQgFgFAGgBQAJgBgBAGQgBADgDADIgFgFg");
	this.shape_22.setTransform(53.7,34.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7CE8B").s().p("AgGgCQAAgIAFAAQACAAAFAFQADAEgEAEIgFAIQgGgDAAgKg");
	this.shape_23.setTransform(49.4,39.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7CE8B").s().p("AgQAGQABgGAEgEQABgBgBgFQAAgDALADIAPADIACABIgMAJQgFAEgIADIgIACIAAgGg");
	this.shape_24.setTransform(51.9,41.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7CE8B").s().p("AgIAIQgCgBAEgFIAFgFQAPgMgFALQgHAOgFAAQgDAAgCgCg");
	this.shape_25.setTransform(54.5,16.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7CE8B").s().p("AgFAHIgBgEQgCgEACgDQAEgJAKAQQACAFgGAAIgJgBg");
	this.shape_26.setTransform(50.6,15.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7CE8B").s().p("AgMAKQgDgDAFgFQAHgEAAgJIASABIgGAEQgGAEgCADQgBAHgJAEQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_27.setTransform(53.7,37.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7CE8B").s().p("AgJAGQgGAAADgGQACgEAGgBIAEgBQAXACgPAGQgJAFgGAAIgCgBg");
	this.shape_28.setTransform(52.6,33.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7CE8B").s().p("AgDANQgFgRAAgFQABgFADgCQADgCADAEQAEADADAPQgHAOgCAAQgDAAAAgFg");
	this.shape_29.setTransform(51.6,36.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7CE8B").s().p("AAGAFQgFACgFAAQgJAAAFgGQAFgFAGgCQAFgCADAGQACAFgFAEQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAg");
	this.shape_30.setTransform(57.9,26.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7CE8B").s().p("AgDAGIgCgRIAFAGQAGAGAAAGQgBAFgCAAQgCAAgEgGg");
	this.shape_31.setTransform(47.3,24.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7CE8B").s().p("AABALQAAgCgHgDIgIgEQABgIADgHIACADQADAEABAGQACAJARgEIAAAJIgDAAQgJAAgCgDg");
	this.shape_32.setTransform(50.2,23.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7CE8B").s().p("AgLgIIAFgCQADABAAAJQABAPAJgRIAHAMIgbABQAAgJACgKg");
	this.shape_33.setTransform(44.6,33.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7CE8B").s().p("AgMARIgCgPQgCgJAGgBQACAAADABIALABQgCgIgDgEQgBgCADAAIAFAAIADAHIAEAKQAAADgBADQgCAFgEgDIgLgBQAAAMgFAEIgCABQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBg");
	this.shape_34.setTransform(48.6,37.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7CE8B").s().p("AgIAZQgMgOAEgPIAQgKIAGgHQAHgGADAFQAGALgPAFQgGADgEAHIgDAHQAAAOgCAAIAAAAg");
	this.shape_35.setTransform(50.7,32.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7CE8B").s().p("AgHATIAAgZQAAgQAEABIAIAGQAGAPgGABQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAEgCAFQgEALgCAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBg");
	this.shape_36.setTransform(47.4,33.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7CE8B").s().p("AgBABIAFgJQAAANgEADIgCABQgDAAAEgIg");
	this.shape_37.setTransform(46.5,21.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7CE8B").s().p("AANAWQgLgCgCACQgEADgDgBQgEgBAAgGQAAgHgEgIQgEgIgCAFQgCAEgBgEQgCgGACgDIAHgOIAGAQQAHAFAIAGIgCAEQABAFAJADQAPAEgBAGQgDgCgKgBg");
	this.shape_38.setTransform(47.6,28.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7CE8B").s().p("AAoAgQgGgCADgEIAIgFQADgCgBgDQgBgDgIABIgSAEQgIAAgCgGQgDgJgEgFQgDgFgBAHQAAAKgHgEQgMAOgDgFQgGgMAAgGQgBgKgJACQgGACgFgDQgGgCAHgDQAEgCAEgIQAEgGACACQAIAHACAKIAEAMQADADAFABQAFAAgBgFQAAgFgDgHIgDgGQADgBANACIAGABQAGACACAEQABACgDAIQgCAFAGAAIAOADQAIACADAAQAOgCgDALIgDANQgDAEgEAAIgDgBg");
	this.shape_39.setTransform(52.8,28.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7CE8B").s().p("AgBAVQgCgEACgEQACgFgBgFIgBgIQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDgBgCgIQgBgIAGAFIAQAPQgGAagFAAIgBgBg");
	this.shape_40.setTransform(55.7,26.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7CE8B").s().p("AAAAPQgBgFgGgIQgGgHAFgDIANgIIgFAPIADADQAFAEACAEQACAEgDABIgGACIgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_41.setTransform(53.4,24);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7CE8B").s().p("AAAAAIACgEIgDAJIABgFg");
	this.shape_42.setTransform(55.6,23.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7CE8B").s().p("AAJAQQgVgYgHAIIAFgKIAHgBQAFgCACgGQABgBAAgBQABgBAAAAQAAgBABAAQAAAAAAAAQADAHABAIQABAEADACQALAIgEAEQgBACACAKQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgCAAgHgIg");
	this.shape_43.setTransform(57.7,22.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7CE8B").s().p("AgNAJQgBgGAGABQAFACADgSQAAgHAFABQAEACACAGQAFANgDAKQgCAGgRAAQgHgDAAgHg");
	this.shape_44.setTransform(54.7,19.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7CE8B").s().p("AgJATQgCgDgBgIQgBgCAAgJQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAFAFAFABIAHgIQAAgLADgDQAHgDgBANQgBANgDAEQgJAKgBAHQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgFgFg");
	this.shape_45.setTransform(51.3,20.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7CE8B").s().p("AgIgMQAEAAAFAFIAFAFQAEAEgCAGIgBAFg");
	this.shape_46.setTransform(37.1,54.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F7CE8B").s().p("AgEgGQAEgKAFACQADACABAJQABAFgHAFIgKAIQgEgIAHgNg");
	this.shape_47.setTransform(26.5,62.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F7CE8B").s().p("AgJATQgDgBgBgEQgHACAEgKQAGgYAEgHIAKAVIAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABgBAAIAAACIgDACIAHADIACgCIAAACIAFADQAGAEgDADQgCADgIABQgHAFgGAAQgDgCAAgEg");
	this.shape_48.setTransform(31.5,60.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7CE8B").s().p("AADAHQgEAAgHgDQgJgEAKgFQAHgFAJABQAGAAgCAIQgBAIgIADQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAg");
	this.shape_49.setTransform(43.2,50.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7CE8B").s().p("AAVB2QgKgJAEgJQAGgNADgEIgCgBQgGgGAHgEQAEgCAGgBQAFgBABgEQAAgEgJgDIgUgEQgIgDACgJQACgNAAgJQgBgJgFAJIgDAHQAEADgBAIQgDAIgJACQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQgGgBgIgFQgKgGAKgEIgDgFIAAgDQgYAVAAgJQAAgGAGgEQAIgEADgGQAEgKAAgCQABgDgDgDQgCAAABgGQgEgDgBgDIgBAFQgBAGgEAAIgJgEQAAAAgBAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQACgIAAgMQgBgNAGgBIARABIAAgBIAJgYIACAKQACALgFAIQgEAJgDgJIgMAIIAEAPQABgCAEgBQAGgBAJgIQAHgGAAADQAEAOgEAOIgEAQQABAHAEADQAFADADgJQADgHABgJIABgIQADgBAIAHQgCgOgEgHQgFgCAAgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAABgBAAIAEgDQgBgEgFgHIgFgGIAEgFIgHgEQgGgJAFgHQAEgIAGAFIACABQAEgeADgJQAHAIAGADIgEAMQgEAKgJAFQAJgDAKgMQAHgHADAFQADAEgCAJIAAABIABACQAFADAFgGIAHgNIALgDQAAAGgIAMQgHAMgFACQgOAJgGAIQgFAHgCgJQgEACgHgDIgBADQgBAHAGAFIACgCQAAACAKACQADABAFgBQABgEADgBIAHgCIACAAQAIgBAEgCIgOAOIgBAEQADAMAAAGQgBAHgEAAQACAKgGACQgCABgCAEIgCAEQgEAJgCgCQgGAGAGAEQAEACAIAIQAHAHAEABQAPAEgLANQgJANgEADIACAgIgIAGg");
	this.shape_50.setTransform(37.1,47.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7CE8B").s().p("AgQABIACgDQAEgNAGABQADABABADIAMAGQADgLAAgGQgBgEAFACIAEACIgBALQgBAKgCADQgCAGgEAEQgFAEgCgEIgKgHQgIAPgIADIgCABIAGgYg");
	this.shape_51.setTransform(27,59.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7CE8B").s().p("AgNAcQAAgGAFgEQAGgGACgGIACgMQAAgCgCgCQgCgDADgLQADgKADAIIAHAbQgUAdgFAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_52.setTransform(41.5,47.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F7CE8B").s().p("AAAAUQgFgogMAFIAKgKIAIACQAFABAHgHQAFgFgBACQgBALgDAJQgCAFACAFQAFAPgGAEQgCACgEANIgCACQgCAAgCgOg");
	this.shape_53.setTransform(45.6,44.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7CE8B").s().p("AgMALQgGgHAEgHQAEgIAEAEQADACAHgJIANAPIgHAMQgDACgEAAQgFAAgKgEg");
	this.shape_54.setTransform(44.2,39.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F7CE8B").s().p("AADAHQgEAAgHgEQgIgFAJgEQAHgFAIABQAGABgBAJQgBAIgIADQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAg");
	this.shape_55.setTransform(52.2,15.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F7CE8B").s().p("AgNAcQAAgGAFgEQAGgFACgHQACgIAAgEQAAgCgCgDQgCgCADgLQAEgLACAJIAHAcQgUAdgFAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_56.setTransform(50.5,12.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F7CE8B").s().p("AgKATQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQACgJgBgLQgBgOAHAAIASgDIgPAQIACAGQABAIAAAGQgBAGgDABIgHgDg");
	this.shape_57.setTransform(49.9,9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F7CE8B").s().p("AAAAUQgFgrgLAFIAJgKQAAABAIACQAFABAHgHQAFgFgBADIgEAVQgCAFACAFQAFARgGADIgHAPIgCACQgCAAgBgPg");
	this.shape_58.setTransform(54.6,10.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F7CE8B").s().p("AgMAKQgFgIADgHQAEgIAEAEQAEAEAGgKIAMARQgDAIgDAEQgCACgEAAQgFAAgLgGg");
	this.shape_59.setTransform(53.3,4.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7CE8B").s().p("AgNAHIAAgJIAKAEIAMgPIADABQADABgBAFQgEANgNAGIgEABQgFAAgBgHg");
	this.shape_60.setTransform(40.8,29.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F7CE8B").s().p("AgFAGIAIgXQAGARgGANQgDAFgBAAQgDAAgBgMg");
	this.shape_61.setTransform(32.4,14.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F7CE8B").s().p("AgBgVQAEAIAIAGIgEALQgFAMgMAGIAJgrg");
	this.shape_62.setTransform(36,9.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F7CE8B").s().p("AAPBLQABgDgGgJIgHgLIgHADIgKACIgBABIgEAEIgCADQgCgFgHgEIgDgBIAAgBQgJgFgLAAQgJgMAAgIIABgEIgGgBQgeAIACgMQADgTAYAGQAMADARgJIAAAAIgCAAIAHgaQgHABgCgJQgBgGAGgNIAFgMIAPgGIAIgRIAIANIgEAEQABADgDAFIgMAZIADADIALAHIAEgOIAAgEQAAAAAAgBQAAgBABAAQAAAAABAAQAAAAAAAAQADgGAFgCQAGgEADAHIAMALIAHgHQAIgHAGAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABQAAACgEAHQAJgMAHAAQAFAAgBAFQgCAOgLAKQgFABgEAAQgIgBAGgKIgGAIQgCAFgCACIABACQAJAMgFAKIABADIgFAEIgBACQgEAGgJAFIAPALIAIgOQAEgHABADQACAJAGAFQAGAGAJgLQAKgNAFAAQAGAAgCAHIAEgCQgHAOgHADQgJAKgHADQgSAGgHAHQgFAEgCgDIgDADQgEABgCgCQgEgDAIgLQAMgQgTAHQgBAIgEAHQgDAIALAIQAFAEAGACIgGALQgQgIABgFgAg7AbQADAEAJAJQAKAKAFACQAGgKADgDIgCgDQADgLAFgGIgIAFIgGAFQgCgDABgGIgGAGIgWgBIABACgAAAAhIALALIAGgFIACgPIgGADIAFgRIAAAAgAgKAQIAEABIADgEQgCACgEAAQgNgBAfgOIAIgcIgKgHIgDAJIgCAIIgBACQgIAQgEgIIgHgGIgCANQAFAAACALQAAAEgCADIADgCIACABgAACAIIADgBQAKgGAGgBIABgCQgMAHgBgEg");
	this.shape_63.setTransform(26.8,35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7CE8B").s().p("AgCAAIAMgIQgJARgGAAIgBAAQgHAAALgJg");
	this.shape_64.setTransform(33.6,10.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F7CE8B").s().p("AgXBdQABgIAFgFIgHgBIAEgHQAEgIAFgDIgGgMIgFAEQgCgEACgIIgDgEQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIADgHQADgHADgBIABgFIABgJIgDgCQgIAQgIACIgCABIAGgYIgCgCQgJAEgHABIgFgJIAFgVQADgGgBgEQgBgFgGgBQgHgBgEgGQgDgGAIgBQAGAAAKgIQAHgGAAAEQAEAOgEAPIgEARQABAHAFAEQAEADAEgIQADgHABgLIABgJQABAAAEACIAGgOQgLgFAAgFQABgFgNgQIAPgTIABAFQAAAGgDAJQgDAJAKAGIAJAEIgBADIAGAMIgNANIAOANQADAAAEAEQgBATgDAGIgEAHIALAKIABgFIADgJQgGAFAAgFQgBgFAEgEIAHgGIADgHIAAABQADgKAAgDQAAgDgDgCQgCgDADgLQAEgLADAJIAIAeIgLANIADAGQAJgGAKACQAHAAgCAJQgBAJgIADQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQgGAAgGgEIgBADQgLAKgGACIAHADQABgCAFgBQAFgCAFgGIAEAMIgCABQgDAFgIACQAAAEgEAFIgIAKQgEAFgEABIAIAHQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBABIgTAFIgIACQADAHgCAKQgBAFgDAAQgEAAgLgKgAgEAjQAAAGgHAFQAFAHgBAGQACAAACgIQABgDAHAHQADgFAKAAQAFgBABgEQABgFgKgDQgPgDgFgDg");
	this.shape_65.setTransform(37,23.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7CE8B").s().p("AgKAUQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgIgBgMQgBgOAIAAIASgDIgPAQIACAGQABAIAAAHQgBAGgCAAIgIgCg");
	this.shape_66.setTransform(39.2,17.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F7CE8B").s().p("AgEAUQgGgsgMAGIAKgKQgBABAKACQAEABAHgHQAFgFAAACIgDAQIgCAIIAIAFIAEAFQAEAGgBAFIgCAGIgNgZIAAAGQAHAQgHAEIgHAPIgBADQgCAAgCgQg");
	this.shape_67.setTransform(44.6,18.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7CE8B").s().p("AAeBUQgDgMAHADQAHADADAEIAHgBQAFAAAAgEQACgFgKgDIgJgDQgFAEgCgGQgNgEADgLQADgNgBgJQAAgKgFAJQgFAJgDgBIgDgEQgHAEgFABIgBABQgFAGgSgKQgGgIAEgIQADgIAFAFQADACAHgHIgRAEIgJABQgGAJgEACQgPAIgFAIQgHAIgCgQQAAgGAKgaQADgHABACQACAHACAEQAHgOAKgDQACAAADgJQABgEALAMIAPAQQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAIgCAAIACADIACgFQACgFgBgEQgBgFgFgBQgHgBgDgGQgEgGAIgBQAGAAAIgHQgGgKAMgEQADAAAEgDIgCgEIAOgSQABAEgBAHIAJAHIgBgEIADgLIgBAAIgDgNQgBgMAHADIAFAEIABgDQADgHAAADQACAJAFAFQAFAFAHgMIgEgYIAKAAIAGAFIgDAKIAGgBQAAAGgIAMQgHALgFADQgOAIgGAHIgBABIADACQgLAAgIAFQAEAGAKAEIgEALIgHgEQgGgEABgDQAAgDgDgEQgEAEgHACQADANgEAOIgEAPQABAHAEAEQAFADADgIQAFgLAAgOQAEAAAMAKIAFAFQAFAGAAAGQgBADgHAJQgGAGAFAEIACABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABACIAIAKQAFAFADABIAEACQAFgDADAAQADABgEAFIgCACQABAGgFAFIgIALQgFAFgDABQgBAHgGAGIgJgag");
	this.shape_68.setTransform(44.3,11);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F7CE8B").s().p("AgJAKQgBgJAFgJQAFgLAFAEQADADACAKQABAGgJAFIgKAIIgBgHg");
	this.shape_69.setTransform(39.4,7.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7CE8B").s().p("AgLgOIgBgBIAdAAQADAHgLgBIgHgBIgCAJQgFALgMAGg");
	this.shape_70.setTransform(47.6,1.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F7CE8B").s().p("AgOAVIACgEIAKgfQgGgBAJgIIAMgJIgDAFQADACACAGQACAJgIAYQgHAGgFAEIgCAEQgDAFgCAAQgDAAgBgMg");
	this.shape_71.setTransform(44.2,3.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F7CE8B").s().p("AgYATQAGgOADgKQAFgPAHADQADABABAFIANAJQADgMAAgIQAAgIAJAKQgBAVgDAHQgCAGgFAFQgFAFgDgHIgLgKQgJARgJADIgBAAQgEAAADgIg");
	this.shape_72.setTransform(39.9,3.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F7CE8B").s().p("AgNAJIgBACQgIAAADgHQAGgNARgEQAIgBABAFIACgCIADABQADACgBAEQgFANgRAEIgDABQgGAAgCgFgAgCABIABABIAEgDIgBAAg");
	this.shape_73.setTransform(33.7,56);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F7CE8B").s().p("AgEAXIgCgMQgEACACgGIABgDIAAgBIgDgYQgBgEAIAEIAGAFIAFAGQAFAHgCAFQgIAWgFAAIgCgBg");
	this.shape_74.setTransform(27.5,54.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7CE8B").s().p("AgHgBQAAgLAHAEQAMAGgHAGQgEADgFADIgDgLg");
	this.shape_75.setTransform(23.9,57.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F7CE8B").s().p("AgEgHQAGgJAFADQAEADABAJQABAGgKAEIgNAGQgEgJAKgNg");
	this.shape_76.setTransform(13.9,60.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7CE8B").s().p("AgSAOIgLgDIAFgIQAIgIAJgBQACgBAEgHQABgEALALIARAQQABAAAAABQABAAAAABQAAAAAAAAQAAAAAAAAIgZAEIgJABIgOgCg");
	this.shape_77.setTransform(15.4,63.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F7CE8B").s().p("AgRABQgBgCAJgDIAJgDQAcgCgOAJQgOAIgIAAQgHAAgCgHg");
	this.shape_78.setTransform(40.3,35.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F7CE8B").s().p("AgJAFQgGgDAHgEQAHgFAJAEQAKADgNAEIgIACIgGgBg");
	this.shape_79.setTransform(34.5,34.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F7CE8B").s().p("AgXANQgCgDAAgDQgBgFAKgCQANgBAHgLIAWAOIgKAAQgLABgFAEQgIAGgKAAIgFAAg");
	this.shape_80.setTransform(21.6,60.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F7CE8B").s().p("AAJAKQgSgBgGgFQgHgFAJgHQAFgDAIADIAHADIAKAIQAGAHgKAAIgEAAg");
	this.shape_81.setTransform(23.8,54.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F7CE8B").s().p("AgPAPIAJgUQADgIADgEQAEgFAFgBQAGAAACAIQACAIgKAVQgJAFgGADIgHACQgGAAAEgJg");
	this.shape_82.setTransform(19.7,57.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F7CE8B").s().p("AgSACQAIgKAMgMIAGAAQAGADgJANQgHALAJgCIAMgFIgCAVg");
	this.shape_83.setTransform(12.9,49.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7CE8B").s().p("AgdAQIAMgVQAGgNAIACQADACACAEIAOAJQAFgLAAgHQAAgFAFADIAFAEIgBALQgDAKgCAEQgDAGgFADQgGAEgDgFIgMgKQgLAPgLACIgBAAQgFAAADgHg");
	this.shape_84.setTransform(14.7,57);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F7CE8B").s().p("AgjAXQgDgYAUgRIAcgBIAOgEQANgCgBAHQgBASgYgDQgJgCgMAGIgLAHQgLAQgCAAIgBgBg");
	this.shape_85.setTransform(22.5,52.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7CE8B").s().p("AgWAXIAWghQAOgVAEAGIAGAOQgGAXgIgDQgBgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgDAFgHAFQgNAJgEAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABgBg");
	this.shape_86.setTransform(16.8,50.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F7CE8B").s().p("AAUAtQgDgFgLgIQgKgKgGAAQgHABgDgDQgEgEAFgIQAHgIACgNQACgNgHAFQgGAEADgHQADgIAFgEIATgLIgGAYQAFALAEAPIgGAEQgEAFAKALQAJAKACAJQAAAGgBAAIgCgDg");
	this.shape_87.setTransform(20.7,45.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F7CE8B").s().p("AAUBCQgLgLAaAAQAGAAABgEQABgFgLgEIgZgJQgJgEACgKQAFgNgBgJQAAgKgGAJQgGAIgFgCIgDgDQgbAHABgHQACgQAHgMQADgFgBgFQgBgFgHgBQgJgCgEgHQgEgHALABQAHAAAMgHQAJgEAAADQAEAPgFAOIgHARQABAIAFAEQAGAEAEgIQAEgHACgKIACgJQAEAAAPANIAGAGQAGAHgBAGQgBADgKAHQgIAFAHAFQAFAEAJAKQAIAIAFACQASAIgNALIgPANQgDACgDAAQgEAAgEgEg");
	this.shape_88.setTransform(28.3,48.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F7CE8B").s().p("AgBAAIAGgCIgJAFIADgDg");
	this.shape_89.setTransform(36.1,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0.1,0,60.1,67.3), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CE8B").s().p("AgTADQgIgKANgHIAOgFIgDASIAJAEQAKAFAGACQAEAIgLABIgGABQgQAAgMgRg");
	this.shape.setTransform(25.8,48.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CE8B").s().p("AgQATQgMgBAAgGIA2geQAEgCgCAKIgCAKQgIARgMABIgSABIgEAAg");
	this.shape_1.setTransform(24.2,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CE8B").s().p("AgBAJIgLgHIANgIQANgHgBAKQgCANgIAAIgEgBg");
	this.shape_2.setTransform(19.6,37.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7CE8B").s().p("AgHAGQgLgJgCgBIAHgEQAKgDAMACQAOACgCAGQgCAFgMAGIgFABQgEAAgFgFg");
	this.shape_3.setTransform(11.7,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CE8B").s().p("AgBAeIgNgXQgFgJgCgOIAAgNIAMABQANADAEAJQABACALAAQAFAAgKAQIgOAZIgBADIgBAAg");
	this.shape_4.setTransform(8.5,32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7CE8B").s().p("AgFAAQgIgDgEgJIgEgIIAGgFQAHgEAGAKQAGAMASADIgKAfQgGgUgLgHg");
	this.shape_5.setTransform(15,37.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7CE8B").s().p("AgIANQgFgUADgJQAEgKALAHQAKAEgEASIgHAPQgDAFgCAAQgEAAgDgKg");
	this.shape_6.setTransform(23.7,36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CE8B").s().p("AgDgBQAAgGAHAKIgCABQgFAAAAgFg");
	this.shape_7.setTransform(31.8,48.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CE8B").s().p("AgPAMQAGgBgBgDQgCgIACgLQADgPAKALQAKALACAMQACAKgMACIgFABQgIAAgHgJg");
	this.shape_8.setTransform(33.8,47.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7CE8B").s().p("AgNASIACgKQADgKAEgBQAEAAAKgQIAEAKQgIAFgCALQgBAIAAAFg");
	this.shape_9.setTransform(40.7,35.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7CE8B").s().p("AguBLIgYgKQgKgHAGgLQAGgLAIAIQAFAGADAJQACAGAGAAQAHgBAAgQQgBgXAAgJQACgOANgBQATgBALgGQANgFgPgDQgNgCAAgGIADgGIgKgMQgJgNAHgCIAWgEQAIADAJAAQAcAAALgVIANAJQAFAEgDADQgRALgUABIgXACQgJAFgDAHQgCAIALABQASABATgGQACAGgJAWQgEASgNADQgFABgPgIQgJgFgDAJQgCAIgIAQQgIAOAAAGQAAATgMAAQgFAAgFgDg");
	this.shape_10.setTransform(32.4,39.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7CE8B").s().p("AgXAFQgcgMAKgEQAIgEAIAFQAJAHAJAAQAOgBAEgBQAEgCABgEQADgFAQAAQAQAAgLAJIgjAYIgcgMg");
	this.shape_11.setTransform(36.3,44);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7CE8B").s().p("AgfAMIgBgLQAAgDAFgBQALgCAPgGQARgIAEAKQAKAVACADIgcgPQgMAMgNADIgEABQgFAAgBgEg");
	this.shape_12.setTransform(40.8,40.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7CE8B").s().p("AgXAfIgXgDQgMgBAbgPQA2gegMgOIASAJQgCAAACAPQACAIANAHQAJAFgDAAQgQAEgPAAQgIAAgGAFQgNAMgIAAQgEAAgDgCg");
	this.shape_13.setTransform(42.1,48.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7CE8B").s().p("AAGAMQgQgQgNgEQgLgEAKgHQAPAMAQAAIACAAQALAKAKAPIgGACQgNgEgFgEg");
	this.shape_14.setTransform(45.8,38);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7CE8B").s().p("AAFADIgYgDIgBgCQgBgDAFgBQAVgPgBALIAAADQAGABAHAFQAJAFgJAGIgMAFg");
	this.shape_15.setTransform(37.2,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7CE8B").s().p("AgEgBQgLgFgEgMIARAAQAGAJAQADIgIAZQgGgQgKgEg");
	this.shape_16.setTransform(32.1,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7CE8B").s().p("AgGAFQgEgMAAgGIAUAAQACAFgCAGQgCAHgDAFQgDAEgCAAQgDAAgDgJg");
	this.shape_17.setTransform(40.1,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7CE8B").s().p("AgOgGIAbAAQAGAJgIACIgJACQgLAAgFgNg");
	this.shape_18.setTransform(44.3,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7CE8B").s().p("AgcAvIgWgJQgJgFAFgJQAFgJAHAGQAFAFADAHQACAGAGgBQAGgBAAgNQgDgTABgGQAAgMANgCQAQgBALgFQALgFgOgCQgMgBAAgFIACgFIgHgIIARAAQgEAIAMABQAQABARgGQADAFgIATQgDAQgMACQgEABgOgGQgKgEgCAIQgBAFgHAOQgGALAAAFQAAAPgLAAQgEAAgFgBg");
	this.shape_19.setTransform(47.1,4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7CE8B").s().p("AgVAFQgagKAJgEQAHgDAIAFQAJAGAIgBQAMAAAEgCQAEgBABgEQACgEAPAAQAPAAgKAHIgfAUIgbgJg");
	this.shape_20.setTransform(52,7.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7CE8B").s().p("AgcAKQgBgCAAgHQAAgCADgBQALgBANgGQAPgHAFAIQAKASACADIgbgNQgKALgMACIgEAAQgEAAgBgDg");
	this.shape_21.setTransform(56.1,3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7CE8B").s().p("AgUAaIgWgCQgLgBAYgMIAEgCIABgDIAGgTQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABABIAOAKQATgOgIgIIARAIQgCAAADAMQABAHAMAFQAJAEgDABIgVADIgLAAIAFALQgMACgJgDQgHAFgFAAQgEAAgCgCg");
	this.shape_22.setTransform(57.5,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7CE8B").s().p("AAFAKQgOgMgNgFQgKgDAJgGQAMAKARAAIACAAIAUAVIgGACQgNgFgEgCg");
	this.shape_23.setTransform(60.6,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7CE8B").s().p("AgKAHQgEgKAHgEQAQgNADAEIgOAhIgBABQgDAAgEgLg");
	this.shape_24.setTransform(3.9,3.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7CE8B").s().p("AgDAFQgHgJAJgCQADgBAFABQgEANgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_25.setTransform(7.5,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7CE8B").s().p("AgLAGQgBgDADgGQACgFAHABIAMABQAAAHgMAFIgHACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_26.setTransform(15.8,4.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7CE8B").s().p("AgOAEIgFgRIAGAAIAMAFQALAEAKALQgMAIgJgEQgCgBgGAEIAAAAQgDAAgCgKg");
	this.shape_27.setTransform(16.4,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7CE8B").s().p("AAJAIQgGgCgHABIgGACIgJgRIAHADQAIAEAFgBQAJgBAJAFQABAHgFAAIgGgBg");
	this.shape_28.setTransform(10.5,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7CE8B").s().p("AgEAIIgEgFQgCgFgBgEQgBgJAKAHQALAIACAFQACAGgJABIAAAAQgEAAgEgEg");
	this.shape_29.setTransform(6.2,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7CE8B").s().p("AgRANQgEgDACgGQABgDAJgGIAIgHQAggCgPALQgRANgHACIgFABIgEAAg");
	this.shape_30.setTransform(10.6,4.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7CE8B").s().p("AgNAPQgCgEALgFQARgIgYAAIAKgOIAPAZQgKAFgNADQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_31.setTransform(11.3,12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7CE8B").s().p("AgEAPIgCgGIgFgLQgIAFgDAFQgDAEgDgJIAGgGIAJgJQAFgDAFAAQAFgBgBAFIAFALIAIgCQAJgCAEACQAFACgGADIgRAKQgGADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_32.setTransform(13.6,6.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7CE8B").s().p("AgPAEQgYgEAGgHQAKgMAOAMQAJAHASgDQATgJgCAEQgJARgWAFg");
	this.shape_33.setTransform(6.2,7.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7CE8B").s().p("AgZAKQAEgIgCgDIAIgGQAIgGADADQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAQADgCAIgBQALgBADABQAEABgFADIgdANQgMAGgEAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_34.setTransform(9.6,10.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7CE8B").s().p("AgJAUIAFgVQADABACgBQAFgDgCgLQgDgRAHgCQAAAFAEAKQAEALADACQAGACAAAEQABADgHADQgIADgHAJQgHAIAGAAQAHgBgFAEQgFAEgFABIgTABg");
	this.shape_35.setTransform(4.3,11.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7CE8B").s().p("AgGAcQgEgDgHAAIAAgVQALgGACgEQAEgFgCgFQgCgFgHAEIgGAEIAAgOQAAADAFgDQAIgEADAEQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAWAEgFAFQgHAJgKAHQgFACgBADQgCAFAEADQAEAEAAAHQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgFgCg");
	this.shape_36.setTransform(1.8,10.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7CE8B").s().p("AgIgXIACADIANAPQAFAGgHAGQgMAMgBAFg");
	this.shape_37.setTransform(0.9,4.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7CE8B").s().p("AgKAHIAAgFIADgFQAFgHAGgCIAHgBIgUAbIgBgHg");
	this.shape_38.setTransform(39,8.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7CE8B").s().p("AgTADQABgDAJgGQAGgEAJAFIAOAFQgGAIgTAAIgDAAQgLAAAAgFg");
	this.shape_39.setTransform(54.3,14.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7CE8B").s().p("AgLABIAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEAAIADABIgBgIIgCAAIACgCIABgGQAAgIAGABQAEABAGAHQAJAEAEAHQgBADgEABQABAFgGADQAGAFgNACQgfAHgJAAQAJgOAIgIg");
	this.shape_40.setTransform(48.9,10.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7CE8B").s().p("AABALQgJgFgEgIQgDgGALgDQAJgDAIAFQgBABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQADAFAAAHQAAAHgFAAQgDAAgEgCg");
	this.shape_41.setTransform(30.3,4.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7CE8B").s().p("AgUBXIgHgQIgCAAIggAEIALgIQAMgHALAAQANAAgIAHIAPAHIANgLQgCAAgDgDQgDgGgPgEQgKgDAEgDQANgKARgEIAVgFQAIgFABgFQABgGgLABQgJABgMAEIgKAEQgDgEAEgMQgQALgFAGQgBAHgDACQAAABAAAAQAAABABAAQAAABAAABQABAAAAABIgFgDQgEAEgFAIIgFAIIgJgBIAAAIQgGALgMgBQgLAAADgIIgBgDQglAMgMACQAFgIACgLIAPgCQAOgBALAFQgIgGgTgEQgNgDAEgGQAEgFALgDIACAAIAAgCQACgHgKgBIgTAAQgDgFgGgEQAHgDASABQARABAFADQATAJALABQAMACgKAGQADADACAIIADAAQAKgCACgJIgEgCQADAAgDgLQgBgFgDgDQgGACgDgDIgFgGQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgDgFgGgEIAYAGIAEgBQALgKAJgDQAJgDABAEQAMgIAFAFQABABAGAAQADgBADABQANgBgCADQALADABgIQAAgGAFgLQAFgKgBgFQgEgQAUADIAOABIALADIAvgZQAGgCgGASQgGAPgMAAQgQACgIgBIAAADQgEAIgIgEQgFgDgFgGQgDgEgFACQgGACACAKIAHAVQABAKgMADQgQAEgKAFQgLAFAOAAQAHAAADABQAAgGALgCQALgCAGAIQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAABABQACAHgBAKQgDAMgIgHIgGAGIgCABQAlALgLAFQgHAEgIgEQgJgGgJABQgMABgFACQgDABgBAEQgBACgHACQAAAFgEADIAGgCQAIgCACAFIAAAKQABADgEABQgKADgOAGQgIAEgFAAQgEAAgCgCg");
	this.shape_42.setTransform(29.5,11.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7CE8B").s().p("AgPAOIABgHIABgNQgOADgGADQgFABgBgDIABgGIANgEQAMgFAGgBQAHgBAGACQAIACgEAFIgDAOIANAAQANABAFAEIACACIglAHIgHABQgKAAgBgFg");
	this.shape_43.setTransform(50.1,15.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7CE8B").s().p("AgjAIIAbgVQA6AGgNAHQgGACgIgCQgKgCgIABQgLABgEACQgDACgBADQgBAEgOACIgFABQgIAAAHgGg");
	this.shape_44.setTransform(28.9,7.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7CE8B").s().p("AgTAUQABAAgDgJQgDgGgMgDQgIgBADgBQANgEANgCQAHgBAEgEQAPgPAIAFQADABARgDQALgBgVANQgrAbALAIg");
	this.shape_45.setTransform(23,5.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7CE8B").s().p("AgFALQACgFgQgCIAMgUQALgBAGACQAKABAAAVQgGAJgLABIgBAAQgJAAACgGg");
	this.shape_46.setTransform(18.2,9.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F7CE8B").s().p("AAFAAQgQgDgIAAIgBgDQAAgDAGgCQARgEAPALQAIAFgKAGQgFAEgHACg");
	this.shape_47.setTransform(8.3,18.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F7CE8B").s().p("AAzBHQgDgNgTgMIAAABIABACIgeAHIgEAAQAEAGgJAHQgJAGgfABIgPgLIgYABIAKgOIAIABQABgCAJAAQASAAARgCIACgEIACgPIgRAEIgFACQgBABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQgIgBgGgDQgGgEAFgGIAIgSQgXgDgGgIQgEgHASABQgSgCgDgHQgDgFAGgCQASgFARAGIAGAIQADAHgPABIANAAQAHAAADABIABgDQAJgOAQgBIADgDIAHADIABAAQAKAAALAGIAEgUIgVAAQgJAAADgDQAJgGADgJQADgJgQgDQgUgDgDgFQgDgGAJgBIgFgCIALAAQAMABAEADQAQADAGAFQAQAOANAEQAHACgCADIAFACIACAGQgBAGgSgCQgXgDARAPQAJgEALAAQALgBADgPIABgOIARAAQgCAUgGABQgGACgNAWIAGAGIAIAJIADAAIAFACIAFAAQgEAEgCAJIABADIgBAAQgBANAFAKQgIAOgJAFIgGACIADAGIAKAMQAJANgJADQgFACgFAAQgPAAgFgVgAAwAVIAJADQgDADgHADIAKADIAKAWIACgDQAEgEAFgOQAGgPgBgGQgKABgJgDIgCAEQgPACgJgBIAKAFgAAIApIgIgCIAAACIAIAAgAAAASQAGADgEAEIgCAKIAQgFQgDgFANgIIACgBQgGgBgVgPQgBACgFAAIgdAGIgEANIAMgBIALgDIADAAIADAAQAGAAADABgAAiAPQgEgBAAgDQABgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgGgBQAEADABADQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAEAAIAAAAgAAPACIgDgBQgNgHgDgEIgDAAQAOAHgEADIAMACgAAYgWIAGAFIgVAEIgBAAIAlAGIAGgRIgJgDg");
	this.shape_48.setTransform(21.4,27.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7CE8B").s().p("AhMBLIAAgjQAUgDAGgDQAIgEABgHQACgGgLABQgMABgOAFIAAgjIABgCQAXgKAIgBIAKAAIAHgPIgGABIgMACQAIAEgFACQgHAEgGgCIgLgDIgKABIAAgMIAJACIAGgHQgKgFgFgJIAAgHQADgFAJgBQAIgBAHAFQgCAAAAAAQgBABgBAAQAAAAAAABQgBAAABABQACAGAAAHIADgBIAKAEQAKAEADADIAAgGIAAgCQgEgBgDgDQgEgEgKgCQAGgGAGgEIACAAQAIACAGAGQAEgCAIABIAPACQAIACADACIAEgLQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAIAQAQQADACAEAGQAFgFAPgGQAOgFgKAaQgKAEgIgCIACAHQgRADgLgGIgKAMIAHADQgEAEgKACIgDAFIgBgEIgJABQgKAAgCgCIgRAFIgBAFIAMAAQANAAAFAEIABACIgeAHIgCADIAGAEIAJAIIgJAKQgTAGgIABQgTACAEALQACAFgDAGQgDAGgDAAIgBAAgAgHg5QgGACABALIAFAXIAEgCQAGgEAJAEQAFgIAIgDQgCgBgJABQgFABAFgLQgGAAgIgKQgBgEgDAAIgDABg");
	this.shape_49.setTransform(7.7,26.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7CE8B").s().p("AAAAQQgJgDgIgKQgFgFAEgFIgCAAIgBgEQAAgEAGgBQAJgBAGACQAIACAJAJQAHAGgGAGIADABQAEAHgKABIgGAAQgGAAgDgBgAgDAAIAGACIAAgCIgGgCg");
	this.shape_50.setTransform(42.5,10.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7CE8B").s().p("AgZAKIACgKIAEgHQAFgIAIgBQAOgCAGABQALAAABAFIgNAJQAFADgIAAIgFAAIgBABIgaARIgBAAQgCAAAAgIg");
	this.shape_51.setTransform(44.8,17.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7CE8B").s().p("AgLAEQAAgPALADQAGABAGAFQgNAMgGAAQgEAAAAgGg");
	this.shape_52.setTransform(49.5,19.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F7CE8B").s().p("AgHAKQgOgBABgHQABgFAKgGQAHgEAJAIIAOAIQgGAIgOAAIgIgBg");
	this.shape_53.setTransform(58.6,27.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7CE8B").s().p("AgJARQgBgCgLABQgFAAAHgQIAJgZQABgBAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAIARAVQAMAOADAWIgFAAQgTAAgJgMg");
	this.shape_54.setTransform(61.7,23.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F7CE8B").s().p("AgHADIgHgKQgEgLALAFQAhAQgOAMIgCABQgGAAgLgNg");
	this.shape_55.setTransform(15.2,15.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F7CE8B").s().p("AABALQgJgFgBgKQgBgMALAKQAIAGABAHQAAAFgEAAIgFgBg");
	this.shape_56.setTransform(17.1,21.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F7CE8B").s().p("AADASQgEgHgLgDIgKgDIAGgcIAGAJQAHAKAGAEQAOAEAFAOQgBAEgDABIgEABQgFAAgGgGg");
	this.shape_57.setTransform(54.3,20);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F7CE8B").s().p("AgDATQgGgCgCgKIAAgIIAFgOQAGgMAGAQQAIASgDAJQgBAFgGAAQgDAAgEgCg");
	this.shape_58.setTransform(45.8,21.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F7CE8B").s().p("AgUANQgJgCgDgFQgEgFAIgFQAIgGAegCIASALQAPAKgTABIgcADIgKAAIgGAAg");
	this.shape_59.setTransform(52,23.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7CE8B").s().p("AgDgCQAGgBABAEQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgCAAgEgFg");
	this.shape_60.setTransform(37,11.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F7CE8B").s().p("AgRAOQgEgEABgDQABgFASABQASACgIgIIgLgKIAYgIIgDAsQgSgDgSgGg");
	this.shape_61.setTransform(45,34.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F7CE8B").s().p("AgSARIADgJIADgSQgPACgIADQgFACABgGIABgGIAOgFQAOgEAFAAQAHAAAHADQAIAEgFAGIgEARIAMACQAOAEAFAGQAEAGgLAAIgfABIgBAAQgRAAgBgIg");
	this.shape_62.setTransform(54,28.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F7CE8B").s().p("AgMAaIgRgaQgGgGgFgGQgJgMAIgDQAWgIAIAYQAGAPAYAKQAgACgGAEQgRAKgSAAQgKAAgMgEg");
	this.shape_63.setTransform(44.3,23.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7CE8B").s().p("AgOAKQgfgDAEgGQAMgHABgFIAPgCQAPgBABAFQAAAFACAAQAIAAAJAEQAgAPgSAAg");
	this.shape_64.setTransform(45.6,29.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F7CE8B").s().p("AgbAlIgXgNIAfgHQAKgLAPgLIAHADQAIABAHgPQAHgPAKgFQAKgGgFAHQgEAGgEAOQgFAQADAEQAEAHgCAFQgCAGgMgBQgNgCgPAFQgRAFAJAEQAIAEgJABIgGABQgHAAgFgDg");
	this.shape_65.setTransform(36.6,28.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7CE8B").s().p("AgrBLQgEgIgNgIQgLgGAEgCQAQgLATgDQAVgCABgBQAJgFABgHQACgHgLAAQgKgBgNAEIgLADQgCgDADgMIAHgTQAEgKAIgCQAEgBAOAGQAKAFABgJQACgHAHgPQAGgMgBgFQgBgVAVAGIAWAHQAKAFgFAKQgEAKgIgHQgFgFgDgHQgDgFgFABQgHABABANIADAcQAAANgMACQgRADgLAFQgMAFAPABQAMACAAAFQAAADgCADQAYAVgKAEQgTAGgRAAQgIAAgEADQgGAEACAHQACAJgGAIQgCAEgCAAQgDAAgDgGg");
	this.shape_66.setTransform(37,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,64.1,51.6), null);


(lib.Group_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6E29").s().p("AgHAGQgGgIAGgGQAHgJAGgBQAGAAgBANQgCASgJAGIgHgNg");
	this.shape.setTransform(13.4,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC6E29").s().p("AgHAHIgTgPQAAAAAAgBQAAAAABAAQAAAAABgBQABAAABAAIAagHQASgGgBAFQgDAJACACQALAIgGAUQgVgDgLgLg");
	this.shape_1.setTransform(9.2,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC6E29").s().p("AACALIABgBQgKgHgDgDQgDgFAKgMQAJgLAFgKIgDAbIgEACIACAJIgGAfIgJAIg");
	this.shape_2.setTransform(27.4,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC6E29").s().p("AAAgKIAHgGQAHgEgDAKQgFAQgRAMg");
	this.shape_3.setTransform(4.9,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E29").s().p("AAMgVIACAIQABALgDAHIgGAOQgLABgIACIAZgrg");
	this.shape_4.setTransform(3.9,43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC6E29").s().p("AAAAEIABgHQgBAEABADg");
	this.shape_5.setTransform(13.6,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E29").s().p("AgCBVQgEgEACgRQgDARgFgGQgFgEgBgMIAAgLIgSADQgHAEgCgHQgBgGABgIQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIADgEIAIgPIgOgBIgFABIgKAfQgBAIgDABIgBAHIgQAGIAHgWIgHgPQAJgbAIgHQAIgIAFAGIABgDIAPgbIABABIgCgGIATgTIADADIAAAJQAFgFADgCQgBAFAFAOQAAgGADgIIACgIIAFgBQAAgIADgKQgFgBgHAAIAEgFQAFADAEAAIAAgBIAEABQAIAAAGgCIgCAEIABAGIgBACIAHAJIADAHQAagIACgFQADgDAKAAIAJABIgEAPQgHgCgGAAQgPgBgDALQgFAKgEAHQAJATADgWQADgRAFAAQADAAADAEIAAAEQAEgBAAAHQAAALAJATQAEAGgBAPQACAHgGATIgBgFQgDAIgFgEQgEgEACgTQADgPgLAAQgJABgIAIQgDACACgJIAGgSIgVgBQAFALgDAIIgBADIABAEIAAADIgEACQgFANgPAGIgDAAQAAAGgCAEIgCALQADgNAHAEQADADADAEQABARgJAPQgDADgCAAIgDgCgAgRgGQABAFgDAHIAAAAIgLAWIANgBQAJgOAEgLIAEgFQgFgLgBgJQgCgGABgCIgDACQgKAKgEgDQgFAIgEAFIAKAAIADgBQACAAABAEgAASgpIgEAjIAAgBIAJgTIADAHIAKgPIgBgJQgGAAgLACgAgDgeQADACAAAEIAAgGQAAAAAAAAQAAgBAAAAQAAAAgBAAQgBgBAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIgCAEIABAAIADACg");
	this.shape_6.setTransform(17.5,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E29").s().p("AgCgCQgBgQAEAGQAFAGgGAVIgCgRg");
	this.shape_7.setTransform(2.8,42.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC6E29").s().p("AhPBDQAWgHAEgFQACgDAOABIAGgQIgGgCQAMgOAFgOQAEgJgGAAQgGAAgHAGIgKASQgIAQgOALQgEACAAgKQgBgNgFgFQgGgGAIgDQAHgDAHAEQAFADAEgEQAFgEACgGQADgIAKgOQAFgDAGgDQAEAFAEALIADgBIANgaIABACQAFAHgHAUIAEAAIAGgJIAEgFQgCgCADgJQABgGACgDIgEgBIAGgCIAGgIIADgDIABAHIAOgHQgCgGADgKIADgJIAGADQABgFACgGIADgFQAbgEgIAMQgKANgFADQAEADACAEIAKASQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgLABQACAEgEAWQAAAGgDAEIACAHIgJAPIgCACQAAgKgCgEQgCgFAAgBIgCgBIgGgBQAEAFAAARIgBADQAEAAAEACIgLARQgFgFgBgHIgHAEIgDAUIgcAVQgJAGAGgMQAFgNAEAAQADgBADgCIAHgOIAAAAIADgIIAAgLQAAgFAFgFQADgEABAIIAFgLIADgEIgQACIgCAJQgDAHgPATQgFAAgCgBIgLACIgLAAIABANIAAAIIgOAGIgBAEQgFgCgGgBQgNAAgEAJQgIAQgGAEgAAigoQACAKgFAEIgEADQAGACAPAHQAKAEADgFQADgFgEgDQgHgHABgHQgLABACgEQAEgIgBgCQgEAHgKADg");
	this.shape_8.setTransform(14.5,31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC6E29").s().p("AgQAMQgFgFAMgMQAJgKAGgJQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAIADQACADgEAGQgHAJgMAHIAAAZQAAgCgNgNg");
	this.shape_9.setTransform(12.5,39.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E29").s().p("AgPAnQAFgJgBgCQgGgJAGgSQgEACgIAGQgCABADgJQANgeAEgFIAIgGQAFgDgBAIQgBAMAEAQQACADgCAMIAFAHIAKAPIgEAGIgVAEIgMACQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_10.setTransform(8.5,44.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC6E29").s().p("AgIAGQAEgMAFgHIAGgFQAAABADANQADAJgGAGQgJAIgEAAQgGAAAEgNg");
	this.shape_11.setTransform(4.7,48.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC6E29").s().p("AgGAiQAEgFADgIIAEgHIgPgBQgFADgEgBQgHgCAIgQIAMgcQAEgKADAFQAFAIgGAWIAQgCQAHgEAAAIQAAAGgDAHQgDAIgQAVIgFABQgHAAAFgFg");
	this.shape_12.setTransform(2.3,52.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC6E29").s().p("AADAKQgKgEgBgIQgCgJAHACQAGABAEAIQAFAKgFAAIgEAAg");
	this.shape_13.setTransform(22,20.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC6E29").s().p("AgeAiQgEgPgGgEQgJgHAJgDQAIgEAIAEQANAGAFgRQADgNALgUQAGgIAPAaIAFgBQAFACgCAMQgCAOAKgMIgDAgIgHABQgWACgEgDQALgPAEgPQADgKgIAAQgHAAgHAHIgHATQgHARgPAMIgCABQgCAAgCgIg");
	this.shape_14.setTransform(24.5,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_9, new cjs.Rectangle(0,0,29.1,56.5), null);


(lib.Group_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6E29").s().p("AgEATIgBgCIAEgVIgKgEIAIgIQAJgHABAKQACAJgBAEIADAAIABAAIAAAHQgFAFgGAFQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBgBg");
	this.shape.setTransform(47.3,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC6E29").s().p("AgBACQgBgHgGgIIgHgGIAaABIgBAJQAAAJAEAEIACADIgBAKIgGADQgJgHgBgLg");
	this.shape_1.setTransform(46.5,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC6E29").s().p("AgXASQgCgEAAgKIAVgXQAHACAXgEIAAAYQgEABgJgEIgPgGQgLgFgDAGQgCAEAEADQAGAFACAFQADAJgKABIgCAAQgGAAgCgEg");
	this.shape_2.setTransform(46.1,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC6E29").s().p("AgKAEIgFgEQgEgEADAAIAigDQACADgGAEIgKAHIgEABQgFAAgFgEg");
	this.shape_3.setTransform(35.8,37.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E29").s().p("AgGAAQgDgDAIgBIAIAAQgBAEgCADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgEgFg");
	this.shape_4.setTransform(37.4,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC6E29").s().p("AgIAHQgDgDAGgFQAJgJAGACIgDAJQgCAIgEAAIgCAAQgFAAgCgCg");
	this.shape_5.setTransform(38.7,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E29").s().p("AAKAUIgNgKQgKgGADgCQAFgDAAgBQAAgGAFgHIAFgFIADAIQAEAJAAAGIAAARIgBABIgBgBg");
	this.shape_6.setTransform(41.1,27.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E29").s().p("AgIAFQAIgGAAgIQAAgIADAAIAFABQACAJgEAHQgEAHADAMg");
	this.shape_7.setTransform(39.2,32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC6E29").s().p("AgDAGQgHgIADgFQAEgIADAEQAFAEADALQADAJgEAAQgDAAgHgHg");
	this.shape_8.setTransform(35.1,35.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC6E29").s().p("AgPALQgBgDAEgFQAEgEARgKQAOgKgMAaQgOAKgGAAQgGAAAAgEg");
	this.shape_9.setTransform(37.2,31.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E29").s().p("AgMAGIAPgMIAHAAQAFABgFAFQgHAHgKAAIgFgBg");
	this.shape_10.setTransform(24.2,38.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC6E29").s().p("AAHADQgHgFgFACQgKAHgEgBIAKgPQAOAHAEgCQACAAAFAEIAFAEIgIAGQgCgEgEgDg");
	this.shape_11.setTransform(25.9,40.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC6E29").s().p("AgDAEQgJAIgCgDIgBgEQAHgKAHgHIARAVIgPAEQAIgUgMALg");
	this.shape_12.setTransform(30.2,28.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC6E29").s().p("AgNAVQAAgBgBAAQAAgBAAAAQAAgBABAAQAAAAABgBQAFgBAHgEIgHgJQgDgBgCgCQgDgEAJgGIAOgLQAFgEAAAEQAAAIgKAKIAJAGQAEABgCAFQgCAEgEADIgRAIIgEgDg");
	this.shape_13.setTransform(36.2,28.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC6E29").s().p("AgMAKIgCgTQAKgQATgCQAEgBgOANIgEAJQgCAIABAHQAFAPgMAEIgCAAQgHAAAEgSg");
	this.shape_14.setTransform(33.3,34.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC6E29").s().p("AgQARQgEgBANgNIAWgUQABgBAAAAQABgBABAAQAAAAAAABQAAAAAAABQAAAEgEAJQgDAFgEACQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQADAFgQAIIgLgDg");
	this.shape_15.setTransform(31.6,30.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC6E29").s().p("AAAgCQAEgLABAHQABAGgKAKIAEgMg");
	this.shape_16.setTransform(21.5,40);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BC6E29").s().p("AgdAAQADgDAFgDQAGgEgDAGQgDAEAKgCQAJgEAFgGQAFgEADACQADACABAFQAAAEAIAFQAIAGAEABQAEACgGABQgHAAgJgFQgIgFgEAEQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQgMAAgJgCIgRAIg");
	this.shape_17.setTransform(28.4,34.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BC6E29").s().p("AgIAVQgKgIgCgEQAMgDAHgGQAFgEgEgDQgCgEgHACIgLAGQgLAFgLAAQgDAAADgGQADgJAAgFQgCgHAFACQAGACACAFQAFAJAJgIQAIgHALgDQAFgCgDAUIAEACQACADgHAFQgFAGAHgBQAHgCAJgFQAHgDAFAGQADADAFAMIgJAEQgIgEgGgFQgEgEgDAGQgFAJgDABIgDAAQgFAAgGgFg");
	this.shape_18.setTransform(30.5,38.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC6E29").s().p("AgPADIAfgJIgDAGQgEAEgHACIgGABQgIgCgDgCg");
	this.shape_19.setTransform(42.8,6.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BC6E29").s().p("AgDAMQgGgGgBgJQgCgMAKADQAGADADAEQABAAAAAAQAAAAABAAQAAAAABgBQABAAAAgBQACAHgGAIQgEAFgDAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_20.setTransform(43.3,14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC6E29").s().p("Ag9BeIAGgQQACgJgGAAIgCAAIgCACQgGAIgFABQgHACACgMQADgQgDgKQAAAOgFAIIgHAMQgMgBgGABIAcglIgCgBQgIAAADgKQADgJAMgDIAHACIACgIIAJgBQAJgCAEgCIgBgFQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQADgDAGACQAIgDAOgIQgLgBgDgDQAMgMAGgNQAEgJgFgBQgFgBgHAFIgLARQgJAOgOAIQgBABAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAgJQAhgZAgggIAHAEQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABgBQAEAJgFAIQgFAJgGgDIgCAJQgFAMAIgHQAIgHAJgNQAHgJAIAEQAFADAMAJQAIAFAEgEQADgEgDgEQgDgFgBgGQgBgIAIgBIADABQABgGAIgPQAEgKAPgBIAFABIAAAMIgcAZQAAADgFAUQgEASgOgIQgDgCgLAAQgMABgFgBQgHgCgBAKQADgBgFALIgCAFIgBAHQACAFgLAIQACADgEAFQgFAHgMAGIgCAEIgDAWQgBgFgEgGQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIgEgGQgBgDADgFQgCgEgDgCQgKgGAAACIgBgDQgIgBgFAHIgCADQAHAEABAEQAKgHgDAKQgDANADAQQAAAFgFAPQgFAQgEAFQgBgFgEgGg");
	this.shape_21.setTransform(37.7,14.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BC6E29").s().p("AgRAXQAHgLADAAQADAAADgCQACgDAGgJQAEgGAAgJQABgIAFgEQAKgJgPAzIgbARIgEABQgDAAAFgIg");
	this.shape_22.setTransform(39.8,14.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC6E29").s().p("AgSAbQABgLgEgEQgGgFgCAAIACgOQAEALAmgbQASgOgEAJIgIARQAAAIgRAHQgEADgDAFQgGALgJAJIAAABQgBAAABgGg");
	this.shape_23.setTransform(40.7,21.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC6E29").s().p("AgLADQgHgBAEgHQAEgJAKgCIAJAEQAJAGgCAFQAAAEgFAKIgVAEQADgOgEAAg");
	this.shape_24.setTransform(35.3,23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC6E29").s().p("AgDARIAEgVIgLgDIAJgJQAIgGADAJQAEAPgJAOQgEAEgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_25.setTransform(24.2,29.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BC6E29").s().p("AAAgJIAIgFQAIgEgEAKQgHAOgRAKg");
	this.shape_26.setTransform(6.1,35.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BC6E29").s().p("AAOgTIABAJQAAAJgEAIIgHANQgKgCgIACIAcgng");
	this.shape_27.setTransform(4.5,40.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BC6E29").s().p("AgCgCQAAgQAEAHQAEAGgHATIgBgQg");
	this.shape_28.setTransform(3.7,39.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BC6E29").s().p("AhRA4QAWgEADgEQADgDANADIAHgPIgFgDQANgMAGgNQAFgIgGgBQgGAAgHAEIgLARQgKAOgOAJQgEACAAgKQABgNgEgFQgFgHAHgCQAIgCAFAFQAFADAFgDQAEgDADgFQAEgIAKgMIAMgFQADAGADAKIADAAIAOgXIACABQADAIgIATIAEAAIAKgMQgBgDADgIIAEgIIgDgCIAFgBIAHgIIADgBIAAAGIAOgFQgBgGAEgKIAEgIIAFAEQABgFADgFIADgFQAaAAgJAKQgHAKgIAEQADADACAFIAIASQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgLAAQABAEgBAHIgEAOQgBAFgDAEQADAHgBAHIAAACIgNAHQACgIgDgGIgBgHIgBgBIgGgBQADAFgBARIgCACQAHACAEAEQAAABABgBQAAAAABAAQAAAAABgBQAAAAABgBQADAIgGAIQgHAIgFgEQgIgHgBgKIgHACIgFATIgcASQgKAFAHgMQAHgMADABQADAAADgCQADgDAFgKIAAAAIAEgHIABgLQAAgFAFgFQAEgDAAAIIAGgKIADgEIgQABIgDAIQgDAGgQARQgFAAgBgCIgLAAIgKgBIgBANQAAAFgBADIgOAFIgBACQgFgCgGgBQgLgCgGAJQgIAOgGADgAAlgiQABAKgGAEIgDACQAFACAOAJQAJAFADgFQAEgEgEgDQgGgKABgFQgLABADgEQAEgIgBgCQgEAHgJABg");
	this.shape_29.setTransform(15.8,30.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BC6E29").s().p("AgRAJQgEgGAMgJQAKgJAGgIQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAABIAHAEQACACgEAGQgIAIgMAFIgCAZQgBgDgKgOg");
	this.shape_30.setTransform(13.3,37.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC6E29").s().p("AgSAbQABgKgFgEQgIgFAAABIACgOQADALAogdQATgOgEAIIgIARQABAIgSAIIgFAEIAegJIgEAEQgGAJgMAAIgJgCIgFAIQgEAHgHAIIgBAAQgBAAABgGgAgeAJIAAAAIAAAAg");
	this.shape_31.setTransform(17.9,41);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BC6E29").s().p("Ag+AxQAAgLgEgEQgFgGAIgDQAHgCAFAEQAFADAFgDQAEgDACgGIADgFIgDABIABABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgZABQgQACACgEQAFgJgBgCQgEgIAHgRQgFABgHAFQgCABAEgIQAOgcAFgFIAJgFQAFgCgBAHQgDALADARQABAEgDALQADADACAFIAIAPQABgLgDAAQgHAAAEgIQAEgJAKgDIAKAEQAKAGgBAFIAAABQADAEABAIIAEAAQAEABgEALQgEALAIgIQAIgHAIgMQAFgFAFgBQAEAAAFACQAHgDAAAHIAIAEQAJAEADgEQADgEgDgEQgCgBgBgEQgGACgIgDQgHgDAMgHIAdgOIgBAFQgCAGgEAEQACAEgFAUQgBAIgGADIAAACIgHACIgBgDIgDgBQgDgCgIABIgNABIgCABQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDAAQgGgBgBAHIgCANIglAKQgEgBgBgBQAMgMAGgNQAFgIgGgBQgGAAgHAFIgKAQQgJANgMAIIAAABIgPADQgBgJAKgCg");
	this.shape_32.setTransform(14.8,43.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BC6E29").s().p("AgHASQgGgBAFgNQAFgKAGgHIAGgEIACAOQACAJgHAFQgIAHgFAAIAAAAg");
	this.shape_33.setTransform(4.9,45.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC6E29").s().p("AAEAaIgPgDQgFACgDgBQgGgDAIgPIAOgZQAEgKADAGQAEAIgIATIAQABQAHgDAAAIQgBAHgEAGIAAABIgOACg");
	this.shape_34.setTransform(2.3,48.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BC6E29").s().p("AgEAFIgEgJQgDgJADgCQAOgJAEAiQABAIgDAAQgEAAgIgNg");
	this.shape_35.setTransform(28.6,24.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC6E29").s().p("AACAKQgJgFgBgIQAAgJAGADQAFACAEAIQAEAKgFAAIgEgBg");
	this.shape_36.setTransform(24,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_8, new cjs.Rectangle(0,0,48.8,50.7), null);


(lib.Group_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6E29").s().p("AAJAOQgJgCgEgDIgCACQgEAGgEgJQgCgGgBgIQgCgEADgCIACgBQAGAFANAJIAKgIIADALQACAKgIAAIgDAAg");
	this.shape.setTransform(14.6,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC6E29").s().p("AAJAUQgGgHgCAAQgNAEgNgQQANgOAPgDIAMgDIALACIgIAXQgFAOgDAAIgBAAg");
	this.shape_1.setTransform(2.6,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC6E29").s().p("AgNAGQgKACgCgHIAAgGIAHgDQAKgDAHADQALAEAQgIIgPAZQgMgKgMADg");
	this.shape_2.setTransform(10.1,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC6E29").s().p("AAEASQgIgNgPgPQgLgMARABQAIAAAJADIAKAMQAJANABAGQABAHgCADg");
	this.shape_3.setTransform(9.4,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E29").s().p("AgYAeQABgHAIgIIARgPQALgJgEgFQgDgFgGADQgHADgGAAQgKAAAEgLQAEgKAKACIAUAKQATAJgQAPQgEADgEAKIgHASg");
	this.shape_4.setTransform(23,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC6E29").s().p("AgEANQgDgGACgIIADgHIADgFIAGgFIgHAlg");
	this.shape_5.setTransform(19.9,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E29").s().p("AAAALQgLgEgBgHQgBgLADgDQAEgEAIAKQANAOgCALIgNgGg");
	this.shape_6.setTransform(35,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E29").s().p("AgEAeQgKABgDgCQgFgDAGgIIAEgFIAAgDIACABIAHgFIgDgCIgCgDIgEgBIACgCIAAAAIAGgdQAFAGAQAcQAHAMgIgBQABAFgEAEQABAEgCAEIgGABQgGAAgEgCg");
	this.shape_7.setTransform(28.8,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC6E29").s().p("AANA4IAAAAIgBgBIgHggIgFgVQgDgCgQgMQgQgNAQgKQADgCAHgOIAbgEQACAJgIAGIgTAKQgJAHACAFQADAFAFgBQAGgBAGACQAJADgEAIIgCACQAEADAMAPQAHAJgHAPQgJAOgDAAIAAAAg");
	this.shape_8.setTransform(16.9,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC6E29").s().p("AAfAYQgGAAgKgJIgIgJIgJANQgBAHgHgEQgGgEgEgGQgDgEgFgNIgFgMIAEgFQAEgDABAFQACAIAHAMIALgLIAEgHQAGgEAKAPIADAEIAPAbg");
	this.shape_9.setTransform(33.1,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E29").s().p("AgDAAIABgBIAGABIgBACg");
	this.shape_10.setTransform(24.4,8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC6E29").s().p("AgMAMQgGgDgFgIQgDgFADgCIADgCIACABQABgHAJgBQAUgCALAPQAGAIgIACIgDgBQgBAIgJABIgDAAQgKAAgHgEg");
	this.shape_11.setTransform(24.4,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC6E29").s().p("AgLAGQgEgGADgJIADgJIAFgHIAJgDIAFAdIAAABIADAEQAFAIgHgDIACARIgDABQgIAAgNgXg");
	this.shape_12.setTransform(31,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC6E29").s().p("AgDAJQgLgGANgMQAKgLAAAhQgIgBgEgDg");
	this.shape_13.setTransform(35.9,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC6E29").s().p("AgBANQgMgBgCgIQgBgMADgFQAFgGAKAKQAQANgCAMIgRgDg");
	this.shape_14.setTransform(48.5,6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC6E29").s().p("AggATIAOgaQAJgSAEAEQAFAIADAAQALgCALAJQAGAEADADQgTAPgTADIgdAEQAAAAAAgBQAAAAAAAAQAAgBAAgBQABAAAAgBg");
	this.shape_15.setTransform(48,11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC6E29").s().p("AgKgNIAJAGQAJAGAJgCQAMgBACAGQAAADgBAFQgQAGgNgFQgHgDgNADIgLACg");
	this.shape_16.setTransform(39.6,8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BC6E29").s().p("AgSAJQACgHAGgHIAHgHQAIgGAGACQANAFgFAJQgGAIgTAJQgGADgDAAQgGAAADgJg");
	this.shape_17.setTransform(35,2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BC6E29").s().p("AAOAaIgUgFQgTgXAAgLQgBgKAHgCQAGgBAHAFQAFADAFAJIASAXQAKAMgNAAIgFAAg");
	this.shape_18.setTransform(40.9,5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC6E29").s().p("AgNAaQgHgDgGgGQgDgDgGgOIgGgNQAIgPADAJQADAJAIALIANgPIAFgJQAHgHALAOIAVAXQAHAIgIABQgIACgLgIIgLgHIgLARQgBAGgEAAIgEAAg");
	this.shape_19.setTransform(46.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_6, new cjs.Rectangle(0,0,51.4,15.9), null);


(lib.Group_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFATIgTgOQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAgBQAFgBgFgRQgCgLANAKQAPAKAAAIQABANgGACIgCABIgDgBg");
	this.shape.setTransform(1.7,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFATQADgEAFgCIgNgMQgFgEgFgDQgFgCgKgJQgKgJALAAQASAAAGgDQAJgGAFADQADACAFAMQAGAQACAWIgZAOQgGgIAGgHg");
	this.shape_1.setTransform(6.3,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAFQgQgEAGgDQAHgDATADQgGAHgIAAIgCAAg");
	this.shape_2.setTransform(33.8,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAJQgBgCAMgKQAJgIACgGQABgCAFgBQAfgBgHAKQgVAZgVAHQgKgJAAgDg");
	this.shape_3.setTransform(28.7,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAFQAAgFACgGQADgNAKABQAOAAAHAEQAIAFgIAIQgKAMg1AJQAEgEAXgLg");
	this.shape_4.setTransform(40,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAFQgSgEADgBIAMgHQAHgDAIAEQAMAHgGAIIgSgEg");
	this.shape_5.setTransform(46.4,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKACQAKgHAPgEQAAAEgDAFQgHAJgLABIgCAAQgLAAAJgIg");
	this.shape_6.setTransform(43,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNgBQAHgKAMAAQAOAAgEAKQgFAMgQABIgBAAQgPAAAIgNg");
	this.shape_7.setTransform(38.7,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQADQgIgDATgGQARgHAGAKQAFAKgMACIgFABQgKAAgMgHg");
	this.shape_8.setTransform(32.6,19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAuIADgIIAKgIQAFgEgCgNQgDgEgBgGQgCgKALgJQAOgPAMgFIAUgLQgDAPgHAJQgHAIAAAGQgBAVgIAHQgeAdgJAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_9.setTransform(19.3,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_5, new cjs.Rectangle(0.2,0,48,24.4), null);


(lib.Group_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6E29").s().p("AgTADQAEgGAFgDQAHgFAMAAQAMAAAAALQAAAFgDAFIgMgKIgUAMQgJgCAEgHg");
	this.shape.setTransform(10.4,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC6E29").s().p("AgEAPQgKgMAFgIQAHgMACgDQAGgHAFADIgCAwQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgDAAgJgLg");
	this.shape_1.setTransform(17.2,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC6E29").s().p("AAAAJQgMgJAJgGQADgDAHgBQADAVgGAAIgEgCg");
	this.shape_2.setTransform(21.5,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC6E29").s().p("AgJAMQgDgEABgJQAAgHAKgCQAMgCABgBQACAKgMALQgEAGgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(32,25.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E29").s().p("AgMAHIgOgUQAAgBgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQADAAAVADQAPABAQALQgKAOgOgBQgCAAgEAGIgBABQgDAAgGgLg");
	this.shape_4.setTransform(31.2,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC6E29").s().p("AgagJQASAGAJgFQALgFANAFIACAGQgBAFgKAAQgIgBgIAFIgGAFg");
	this.shape_5.setTransform(24.5,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E29").s().p("AgIAGIgIgLQgGgLAQAFQARAGAGAGQAFAGgKAFIgFACQgHAAgIgIg");
	this.shape_6.setTransform(21.1,30.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E29").s().p("AADAAQAFACgMAAQAEgFADADg");
	this.shape_7.setTransform(8.1,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC6E29").s().p("AgNAJQgIgDAEgIQAEgKAMAAQgCAEACABQAHACAIAGQALAKgOABIgGABQgJAAgJgEg");
	this.shape_8.setTransform(7.8,31.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC6E29").s().p("AAEAOQAAgGgIgIIgJgFIAJgLIAGAGQAHAHgBADQgBADAHAOg");
	this.shape_9.setTransform(13.5,41.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E29").s().p("AAKBMQgBgPAIgOIAJgQQABgIgEgFQgGgFgGAHQgJAKgDAQQgDgBgIgJIgHgIQgNgLAEgKQACgEAMgFQAJgEgGgGQgFgFgIgNQgHgLgFgDQgUgMASgKIASgLQAKgDAGAJQAEAJgIABQgHABgIgCQgGgCgCAEQgDAFAMAIIAYAOQAKAHgFAKQgHAMAAAKQgCALAIgJQAIgIAEAEQADABAAADIAPgBQAOAAgCAGQgCAHgGAKQgGAEgEAFQgNATALAQIgNAEIgDABQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_10.setTransform(15,34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC6E29").s().p("AgSAYIgDghIAWgNQAXgMgCAIQgBAHgIACQgJADgEAGQgFAJgBADQgBAEADADQADADgIALQgEAFgCAAQgDAAAAgGg");
	this.shape_11.setTransform(9.9,35.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC6E29").s().p("AAEAWQgWgEgDAAIAYgLQgDgNADgKQADgGAFABIAIAFQABAAABABQAAAAAAABQABAAAAABQAAABgBAAQgDAJgCAMQgCANgIAAIgCAAg");
	this.shape_12.setTransform(9.6,39);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC6E29").s().p("AAAAfQgHgDgMAFQgHAEABgCQAEgMAHgKQADgFgBgGQgEgVAKgCIAMgOQAHgHgBAYQgCAxARAAIgQAHQABgBgMgGg");
	this.shape_13.setTransform(2.7,35.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC6E29").s().p("AgaAHQAKgGAGgBQASgDALgGQAIgGAAAKQgOADgKALIgBACQgOABgOAAg");
	this.shape_14.setTransform(9.4,43.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC6E29").s().p("AgGAHIgBgFQAAgEACgDQAFgJAHASQACAFgFAAIgKgCg");
	this.shape_15.setTransform(53.6,16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC6E29").s().p("AgEAGIABgRIAEAGQAEAHgBAGQAAAEgCAAQgCAAgEgGg");
	this.shape_16.setTransform(49.4,24.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BC6E29").s().p("AgBABIAGgIQgBAMgFADIgCAAQgDAAAFgHg");
	this.shape_17.setTransform(49,21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BC6E29").s().p("AgCARQABgHgDgIQgDgIgDAFQgCAEgBgFQgBgGACgDIAJgNIADARIAOALIgMAVQgFAAABgIg");
	this.shape_18.setTransform(48,28.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC6E29").s().p("AgEADQgBgDABgIQABgBAAgBQAAgBAAgBQAAAAAAAAQABAAAAAAQADAFAEACIgIASIgBgKg");
	this.shape_19.setTransform(52.8,21.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BC6E29").s().p("AABA3QgIgHAJgDIgCgGIABgCQgZATABgKQAAgGAHgDQAIgDAEgGQAEgJABgDQAAgDgBgDQgCgCACgFQgDgDgBgCIgBADQgCAHgFgBIgIgFQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQAEgJABgLQABgNAGgBIAPADIAAgCIANgVQADAQgIAMQgGAIgCgIIgLAGIACAOQACgCACAAQAGAAAKgHQAIgFAAADQACAOgFAMIgHARQAAAKAHABIgTASg");
	this.shape_20.setTransform(33,43.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC6E29").s().p("AgVAmQgFgEAAgDIgFgBIAFgCIgFgLIgEgGIAFgGIgHgEQgFgJAGgHQAGgHAEAGIACABIANgmQAGAIAFAEIgFAMQgFAHgKAHQAKgDAKgLQAHgGADAFQACAFgCAJIgBABIACABQAEAFAFgGIAJgNIALgBQgBAGgJALQgJAKgEACQgRAIgEAGQgGAGgBgJQgEABgHgCIgBACQgDAHAGAFIADgBQgBABAKAEQAEABAEAAQABgGAIAAIgbAgQgBgMgCgFg");
	this.shape_21.setTransform(39.5,39.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BC6E29").s().p("AgQATIAJgWIABgEQAGgNAFACQAEABABAEIAIAEIgOALIgBgBIgDAFIgOAMIgBABg");
	this.shape_22.setTransform(24.1,57.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC6E29").s().p("AgOAbQAAgGAFgEQAHgEACgGQAEgIAAgEQABgDgCgCQgDgDAGgLQAFgKABAJIADAdQgWAagGAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_23.setTransform(53.8,12.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC6E29").s().p("AgMASQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQADgIABgLQABgPAHABIARgBIgQAOIABAGQAAAJgBAGQgBAGgEAAg");
	this.shape_24.setTransform(53.8,9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC6E29").s().p("AgOAFIABgJIAKAFIAOgNIADAAQACACgCAFQgFAMgOAFIgDABQgGAAAAgIg");
	this.shape_25.setTransform(42.2,28.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BC6E29").s().p("AgFAOIgBgIIAMgWQAEARgJAMQgCAEgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_26.setTransform(35.8,12.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BC6E29").s().p("AABgUQAFAIAHAHIgGAKQgGAMgNAEIANgpg");
	this.shape_27.setTransform(39.9,8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BC6E29").s().p("AAIBLQABgDgFgJIgEgMIgIACIgLABIgBABIgEADIgCADQgDgFgFgFIgDgBIABgBQgKgGgKgCQgHgLABgJIABgFIgGAAQgeAFADgMQAGgSAWAJQAMADASgGIgCAAIAJgYIABgCQgHAAAAgKQgBgFAHgNIAHgLIAPgEIAKgRIAGAOIgEAEQABADgEAEIgOAYIACADIAKAIIAEgNIABgEQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAFgFAFgCQAGgDACAHIAKANIAIgHQAJgGAGAAQAEABgBADQAAACgFAGQAKgLAHABQAFABgBAFQgFANgMAJIgJAAQgHgCAGgJIgGAIQgDAEgDACIACACQAHANgGAJIAAADIgFAEIgBABQgFAHgKADIAOAMIAKgNQAFgGAAADQABAJAFAGQAGAHAJgKQAMgMAFAAQAGACgDAGIAEgDQgJAOgHADQgMAJgEABQgTAEgJAHQgEADgCgDIgEADQgEAAgCgCQgEgDALgLQANgOgUAFQgBAHgFAIQgFAIAKAIQAFAFAGACIgIALQgOgKABgFgAg7ATQACAFAIAKQAIAKAGADQAEgIAGgEIgCgDQAFgLAFgFIgIAEQgFACgCACQgBgDABgGIgGAFIgWgDIABACgAgBAgIAJAMIAHgFIAEgOIgHACIAHgQIAAAAgAgJANQAAABABAAQABABAAAAQABAAAAAAQAAAAABAAIADgEIgGACIgFgCIgBADIADgBIACAAgAgRgEQAFABAAALIAAABQAEgEATgFIACgFIAKgWIgJgIIgEAIIgDAJIgBABIAAABQgKAOgDgJIgHgGIgDANg");
	this.shape_28.setTransform(27.4,32.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BC6E29").s().p("AgHAIQgIAAANgIIANgHQgLAPgGAAIgBAAg");
	this.shape_29.setTransform(37.5,8.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BC6E29").s().p("AglBbIACgEQACgFADgDIgGgCIAEgHQAFgHAGgDIgFgMQgDABgCACQgBgEACgHIgCgFIAEACIAEgIQAEgGADAAIADgOIgCgCQgKAPgIABIgCAAIAIgXIgBgBQgKACgHABIgDgKQADgMAEgIQAIgOgLgCQgHgCgDgGQgDgHAJAAQAGAAAKgHQAIgFAAAEQACAPgFAOIgHAQQAAAIAEAEQAFAEAEgIQAGgLACgPIAFACIAIgNQgKgGAAgFQACgFgLgSIASgRIAAAFQgBAGgEAJQgEAIAJAIQADADAFACIgBADIAEAMIgFAFIgJAGIAMAPQADABADAEQgDASgDAGIgFAGIAJAMIAGgOQgHAEABgEQAAgGAEgDIAIgFIADgHIABABIAEgNQAAgCgCgDQgCgDAFgLQAFgKACAJIAEAeIgNAMIADAGQAKgFAJADQAHABgDAJQgCAJgJACQAAgBABAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQgGgBgGgEIgBADQgMAJgGABIAGAEQACgDAEAAQAHgCAFgFIACANIgCABQgFAEgHABQAAAEgFAEQgNAOgEABIAGAIQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAAAIgSADIgKABQACAGgDALQgBAFgDAAQgFAAgJgMgAgLAjQAAAHgIADQAEAIgCAGQACgBADgGQACgEAGAIQAEgEAJAAQAFABABgFQACgEgJgFQgOgEgGgDg");
	this.shape_30.setTransform(39.6,21.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC6E29").s().p("AgNASQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBQACgIABgLQABgOAHAAQARAAACgBIgSAOIACAHQAAAIAAAGQgCAGgEAAg");
	this.shape_31.setTransform(42.2,17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BC6E29").s().p("AgIATQgBgrgLADIALgJQAAACAIACQAEACAIgGQAGgFgBACQgDAPgFAJIAIAFQAHAJgDAIIgCAGIgKgbIAAAGQAEASgHADIgIAOIgCACQgCAAgBgQg");
	this.shape_32.setTransform(47.5,18.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BC6E29").s().p("AAQBPQgCgMAGAEQAHADACAFIAIAAQAEAAACgEQABgEgJgFIgIgDQgGADgCgGQgLgGADgKQAFgMABgKQABgKgHAJQgFAIgEgCIgCgDQgHADgGABIAAAAQgDAEgKgEIgKgGQgEgJAEgHQAFgHAEAEQACADAIgGIgRACIgJAAQgHAIgEABQgQAHgHAHQgHAIAAgRQAAgEAOgaQAEgHAAADQABAHACAEQAJgOAKgBQACAAAEgIQABgEAKAMIANATQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCAAIACACIADgEQAGgNgKgDQgGgCgDgGQgDgHAJAAQAFABAJgGQgGgLANgCIAIgDIgCgDIARgRQAAAEgCAHIAJAIIgBgEQABgGADgGIgBABIgBgNQAAgMAGAEIAFADIABgCQAEgHAAADQAAAKAFAFQAFAFAHgLIAAgVIAEABIAJAJIgBAEIAEgBIABABQgCAGgJAKQgHAKgFACQgOAGgIAIIgBAAIACADQgKgCgJAEQADAHAKAFIgGALIgGgFQgGgFACgDIgCgHQgEADgIACQABANgFANIgFAPQgBAHAFAEQACAEAFgHQAGgMACgNQAEAAAKAMIAFAFQAFAGgCAGQgBAEgJAHQgHAGAGAEIACACQAAAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIABACIAHALQAEAFADACIADACQAGgDACABQAEABgFAFIgCACQABAEgHAGIgJAKQgFAFgEAAQgBAHgHAGIgFgcg");
	this.shape_33.setTransform(48.5,11.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC6E29").s().p("AgKAKQABgJAGgJQAGgKAEAEQAEADAAALQAAAGgJAEIgMAGIAAgGg");
	this.shape_34.setTransform(43.5,6.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BC6E29").s().p("AgKgNIAdADQgBAEgIgCIgGgBIgEAJQgGAKgMAEg");
	this.shape_35.setTransform(52.5,1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC6E29").s().p("AgPAcIgBgJIACgEQAIgQAFgOQgGAAALgIIANgHIgEAFQADABABAHQABAIgLAYIgNAIIgDAEQgCAEgCAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_36.setTransform(48.9,3.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BC6E29").s().p("AgaAQIAMgWQAHgPAGAEQADACABAEIAMAKQAEgMABgHQABgIAIAKQgEAWgDAGQgEAHgFADQgGAEgCgGIgJgMQgLARgJABIgBAAQgFAAAEgIg");
	this.shape_37.setTransform(44.6,2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BC6E29").s().p("AgHAXIAAgMQgFACADgGIACgDIgBgaQAAgDAHAFIAGAGIAEAGQAEAHgDAFIgIAOQgDAGgEAAIgCgBg");
	this.shape_38.setTransform(26,52.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BC6E29").s().p("AgGgBQAAgLAGAEQANAIgJAFQgEAEgFABIgBgLg");
	this.shape_39.setTransform(22.1,54.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BC6E29").s().p("AgDgHQAHgJAFAEQAEAEAAAIQgBAHgKADIgNAEQgEgJAMgMg");
	this.shape_40.setTransform(11.7,56.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC6E29").s().p("AgSANIgLgEIAGgIQAJgHAJAAQACAAADgIQADgDAKAMIAPARQABABAAAAQABABAAAAQAAAAAAAAQAAABgBAAIgYABIgEAAQgIAAgLgDg");
	this.shape_41.setTransform(12.8,59.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BC6E29").s().p("AgRAAQgBgCAKgDIAJgCQAbABgOAGQgOAIgIAAQgIAAgBgIg");
	this.shape_42.setTransform(41.1,34.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BC6E29").s().p("AgJAEQgGgEAHgCQAIgFAJAFQAJAEgNADIgGAAQgFAAgDgBg");
	this.shape_43.setTransform(35.5,32.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BC6E29").s().p("AgYALQgCgDABgDQAAgFAKAAQANAAAIgLIAVAQIgKgBQgLAAgGAEQgHAEgIAAIgJgBg");
	this.shape_44.setTransform(19.4,57);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BC6E29").s().p("AAIALQgSgEgFgGQgGgFAKgFQAFgDAHADIAHAEIAJAJQAEAIgHAAIgGgBg");
	this.shape_45.setTransform(22.3,51.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC6E29").s().p("AgQANQANgYAFgGQAGgFAFABQAGAAABAIQABAIgNAUQgIAEgIACIgGABQgIAAAGgJg");
	this.shape_46.setTransform(17.8,54.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BC6E29").s().p("AgSgBQAKgKANgJIAGABQAEADgJALQgJALAKgBQAFgBAHgDIgFAVg");
	this.shape_47.setTransform(12.1,45.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BC6E29").s().p("AAGAQIgLgLQgMAOgLAAQgHABAFgIIAOgTQAIgMAHADQADACACAEIANAKQAFgKABgHQABgEAFADIAEAEIgCALQgEAKgCADQgEAGgGADIgEABQgDAAgCgEg");
	this.shape_48.setTransform(12.9,53.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BC6E29").s().p("AgmAUQAAgZAWgPIAcACIAOgCQAOAAgCAHQgEAQgWgFQgKgCgMAEIgLAGQgNAPgDAAIgBgBg");
	this.shape_49.setTransform(21.3,49.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC6E29").s().p("AgXAUIAageQARgTACAGIAFAOQgJAWgIgDQgDgCgCABQgDAFgHAEQgPAHgEAAQgBAAAAAAQgBAAAAgBQABgBAAAAQABgBABgCg");
	this.shape_50.setTransform(15.7,47.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BC6E29").s().p("AASAuQgCgFgKgKQgJgLgFAAQgHAAgEgEQgDgEAGgHQAIgHAEgNQAEgNgIAEQgHAEAEgHQAEgHAFgEIAVgJIgKAXQAEAMACAPIgGADQgEAFAIALQAIAMAAAJQAAAFgBAAIgCgCg");
	this.shape_51.setTransform(19.9,42.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BC6E29").s().p("AAdA4IgYgLQgJgGAEgJQAGgNABgJQABgJgIAHQgGAIgFgDIgDgEQgbAGACgIQAEgPAIgLQAJgNgNgEQgIgDgDgHQgDgHAKABQAHACANgGQAJgEAAAEQACAPgHAOIgIAQQgBAIAFAEQAFAEAFgHQAFgGADgKIACgJQAFABANAOIAGAHQAFAHgCAFQgBADgMAHQgIAEAGAFIANAQQAHAJAEADIADABIgIAIQgBgCgGgDg");
	this.shape_52.setTransform(27.3,45.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_4, new cjs.Rectangle(0.1,0,56.9,61.5), null);


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6E29").s().p("AgTAFQADgHAFgDQAGgFAMgCQAMgBABALQABAFgCAGIgOgJIgSANQgJAAADgIg");
	this.shape.setTransform(8.7,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC6E29").s().p("AgDARQgLgMAEgIQAKgZAHAEIAFAwQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgEAAgKgJg");
	this.shape_1.setTransform(15.8,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC6E29").s().p("AABAJQgNgIAIgGIAKgFQAFAVgGAAIgEgCg");
	this.shape_2.setTransform(19.9,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC6E29").s().p("AgGANQgEgEgBgJQAAgGAJgDIANgEQAEAJgLAMQgEAGgDAAIgDgBg");
	this.shape_3.setTransform(30,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E29").s().p("AgLAGIgQgSQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAIAYAAQAPgBASAKQgJAPgOAAQgCAAgEAHIAAAAQgDAAgIgKg");
	this.shape_4.setTransform(28.8,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC6E29").s().p("AgagGQASAEAJgGQAKgGAOAEIACAGQAAAFgLAAQgHABgIAFIgFAGg");
	this.shape_5.setTransform(22.4,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E29").s().p("AgHAGQgGgFgEgFQgGgKAQAEQASAEAGAGQAGAFgKAGQgCABgDAAQgHAAgIgGg");
	this.shape_6.setTransform(19.8,32.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E29").s().p("AADAAQAFABgLABQACgFAEADg");
	this.shape_7.setTransform(6.8,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC6E29").s().p("AgMALQgIgDACgIQADgKAMgBQAAABgBAAQAAABAAABQABAAAAABQAAAAABAAQAHACAIAFQAMAIgNADIgLABQgGAAgHgBg");
	this.shape_8.setTransform(6.8,35.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC6E29").s().p("AAFAOQgBgHgIgGIgKgFIAIgKIAHAFQAHAFAAAEQgBABAIAOg");
	this.shape_9.setTransform(13.7,44.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E29").s().p("AAWBLQgDgQAGgOIAHgRQAAgIgFgEQgGgFgFAHQgHAMgCAQQgEgBgIgHIgIgIQgOgKADgKQABgEALgGQAJgFgHgGQgGgEgJgMQgJgLgFgCQgUgKAPgMIASgMQAIgEAHAIQAHAIgJACQgHACgIgCQgGAAgCAEQgCAFANAGQAJAFAQAHQALAGgEAKQgFAOAAAJQAAALAHgJQAHgIAFACQADABABADIAOgCQAOgCgBAGQgCAIgEAJIgIALQgMAUAOAOIgMAGIgEABQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_10.setTransform(14.1,37.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC6E29").s().p("AgNAbIgHghIAUgQQAVgOAAAIQAAAHgIADQgJAEgDAHQgEAJgBADQAAAEADACQADAEgGALQgDAGgCAAQgDAAgBgFg");
	this.shape_11.setTransform(9.1,39);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC6E29").s().p("AAGAWIgZgBIAXgNQgFgNACgKQABgHAFABIAKAEQADABgBADQgCAJgBAMQAAAOgIAAIgCAAg");
	this.shape_12.setTransform(9.5,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC6E29").s().p("AgZAlQADgMAFgKQADgGgBgGQgHgUAJgDIALgPQAFgIACAZQAFAwAQgCIgPAJQAAgBgLgFQgIgCgKAGIgHADIAAgBg");
	this.shape_13.setTransform(2.6,40.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC6E29").s().p("AgYAKQAHgIAGgCQAUgFAIgHQAIgFABAJQgPAGgHALIAAABIgdAFg");
	this.shape_14.setTransform(9.9,47.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC6E29").s().p("AgNAIIAAgJIAKADIAMgPIACAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABIABALIgFAFIgBgBIgCgBQgDADgGAEIgFABQgEAAgBgGg");
	this.shape_15.setTransform(42.2,54.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC6E29").s().p("AgWgDQAPACAIgGQAJgGAMADIABABIAAAEIgGAFIgDAAQgGABgHAFIgFAGg");
	this.shape_16.setTransform(45.2,52.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BC6E29").s().p("AgOAGQgRgIAOgKIAPgMQAHgFAFAHQAGAHgIADQgFABgHgBQgFAAgCAEQgCAFALAEIAPAGQAJADACADIgSAOQgNgSgHgDg");
	this.shape_17.setTransform(35.9,58.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BC6E29").s().p("AgRAIIARgOQATgOgBAHQAAAGgGAEQgIADgDAGIgRAKg");
	this.shape_18.setTransform(33.5,62.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC6E29").s().p("AgLATIgLgBQADgJAGgGQgBgKAFgCIAJgOQAGgHABAVIAAADIABACQALAIAEADIglASg");
	this.shape_19.setTransform(27.7,64.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BC6E29").s().p("AgFAJIgEgGIAJAAIAEgNIACgBQAAAAABAAQABABAAAAQAAAAABABQAAABAAABQADAIgJAJQgCACgBAAQgDAAgCgDg");
	this.shape_20.setTransform(58.9,30.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC6E29").s().p("AgLgKQgBAAAAgBQAAAAABAAQABAAABgBQABAAABAAIAHAAIAEACQAGADABADIACAKQAAAGgDABg");
	this.shape_21.setTransform(54.4,31.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BC6E29").s().p("AgDAAQgFgEAGgBQAJgBgBAGQgBADgDADIgFgGg");
	this.shape_22.setTransform(53.5,34.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC6E29").s().p("AgGgCQAAgIAFABQACAAAFAFQADADgEAEIgFAIQgGgDAAgKg");
	this.shape_23.setTransform(49.3,39.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC6E29").s().p("AgQAGQABgGAFgEQABAAgBgGQgBgDALADIAPADIACABIgMAJQgFAEgIADIgIACIAAgGg");
	this.shape_24.setTransform(51.7,41);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC6E29").s().p("AgIAIQgCgBAEgGIAFgEQAPgMgFALQgHAOgFAAQgDAAgCgCg");
	this.shape_25.setTransform(54.3,15.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BC6E29").s().p("AgFAHIgBgEQgCgEACgEQAEgIAKAQQACAFgGAAIgJgBg");
	this.shape_26.setTransform(50.4,15.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BC6E29").s().p("AgNAJQgCgDAFgEQAGgEABgJIASABIgGAEQgGAEgCADQgBAHgJAEQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_27.setTransform(53.6,37);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BC6E29").s().p("AgMgBQACgDAGgBIAFgBQAWACgPAGQgLAFgFAAQgHAAADgIg");
	this.shape_28.setTransform(52.4,32.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BC6E29").s().p("AgDAMQgFgQAAgGQABgEADgCQADgDADAEQAEAEADAPQgHAOgCAAQgDAAAAgGg");
	this.shape_29.setTransform(51.5,36);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BC6E29").s().p("AAGAFQgFACgGAAQgIAAAFgGQAFgFAGgCQAFgCADAGQACAFgFAEQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAg");
	this.shape_30.setTransform(57.7,26.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC6E29").s().p("AgDAGIgBgRIAEAGQAFAGABAGQAAAFgDAAQgCAAgEgGg");
	this.shape_31.setTransform(47.2,23.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BC6E29").s().p("AABALQAAgCgHgEIgIgDQABgIADgHIACADQADAEABAGQACAIARgDIAAAJIgDAAQgJAAgCgDg");
	this.shape_32.setTransform(50.1,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BC6E29").s().p("AgKgIIAEgBQADAAAAAJQABAOAJgPIAHAKIgbABQABgIACgKg");
	this.shape_33.setTransform(44.4,33);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC6E29").s().p("AgMASIgCgQQgBgJAFAAQADgBADACIAKAAQgCgHgCgEQgCgDAEAAIAEAAIAEAHQADAHAAADQABADgCAEQgCAEgEgCIgKgCQAAAMgFAEIgDABQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAg");
	this.shape_34.setTransform(48.4,37.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BC6E29").s().p("AgIAZQgMgOAEgPIAQgKIAGgHQAHgFADAEQAGALgPAGQgGACgEAHIgDAHQAAAOgCAAIAAAAg");
	this.shape_35.setTransform(50.6,32);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC6E29").s().p("AgHATIAAgaQAAgQAEACIAIAGQAGAPgGAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAEgCAFQgEALgCAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBg");
	this.shape_36.setTransform(47.3,33.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BC6E29").s().p("AgBABIAFgJQABANgFADIgCABQgDAAAEgIg");
	this.shape_37.setTransform(46.4,21);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BC6E29").s().p("AANAVQgLgBgCACQgEADgDgBQgEgBAAgGQAAgHgEgIQgEgIgCAGQgCAEgBgFQgCgFACgEIAHgOIAGARQAHAEAIAGIgCAFQABADAJADQAPAFgBAGIgNgEg");
	this.shape_38.setTransform(47.4,28.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BC6E29").s().p("AAoAgQgHgCAEgEIAHgFQAEgCgBgDQgBgDgJABIgRADQgJABgCgGQgCgJgEgFQgEgFAAAHQAAAKgHgEQgMAOgDgGQgGgMAAgGQgCgKgIADQgGACgFgDQgFgCAGgEQAEgCAFgIQADgFACABQAIAIACAKIAEAMQADADAFAAQAFABgBgFQAAgGgDgGIgDgGQADgCANADIAGABQAGACACAEQABACgDAIQgCAEAFABIAPADQAIACADAAQAOgCgDALIgEANQgCAEgEAAIgDgBg");
	this.shape_39.setTransform(52.6,28);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BC6E29").s().p("AAAAVQgDgEACgEQACgGAAgEQgBgKgFAAQgDgBgBgIQgCgIAGAFIAQAPQgGAagFAAIAAgBg");
	this.shape_40.setTransform(55.5,25.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC6E29").s().p("AAAAPQgBgFgFgHQgGgIAFgCIANgJIgGAQIAEACIAGAIQACAEgDACIgGABIgBAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_41.setTransform(53.2,23.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BC6E29").s().p("AAJAQQgUgXgHAHIAEgKIAIgBQAFgBABgHQABgBAAgBQAAgBABAAQAAgBAAAAQAAAAABABQADAHABAHQABAEADADQALAIgDAEQgCACACAJQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgCAAgHgIg");
	this.shape_42.setTransform(57.5,22.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BC6E29").s().p("AgNAJQAAgGAFABQAGACACgSQABgHAEABQAEACACAGQACAEABAHQAAAHgBAFQgCAFgRABQgHgDAAgHg");
	this.shape_43.setTransform(54.5,19);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BC6E29").s().p("AgJATQgCgCgBgJQgBgDAAgIQAAgCAAgBQAAAAAAgBQAAAAAAgBQAAAAABABQAFAFAFABIAHgIQAAgMADgCQAHgDgBANQgBANgDAEQgJAKgBAHQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQgCAAgFgFg");
	this.shape_44.setTransform(51.1,20.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BC6E29").s().p("AgHgMQADAAAGAFIAEAEQAEAFgCAFIgBAGg");
	this.shape_45.setTransform(36.9,54);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC6E29").s().p("AgEgGQAEgKAFADQADABABAJQABAFgHAFIgKAIQgEgHAHgOg");
	this.shape_46.setTransform(26.4,62.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BC6E29").s().p("AgIATQgFgBAAgFQgHADAEgKQAGgYAEgHIALAUIgBABQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBABAAAAIgBACIgDACQADAAAFACIABgBIABACIAEADQAHAEgDAEQgDACgIABQgHAFgGABQgDgEABgDg");
	this.shape_47.setTransform(31.3,59.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BC6E29").s().p("AADAHQgEAAgHgDQgJgEAKgFQAHgFAJABQAGAAgCAIQgBAIgIADQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAg");
	this.shape_48.setTransform(43,49.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BC6E29").s().p("AAVB2QgKgJAEgJQAEgLAFgGIgCgBQgGgGAHgEQAEgCAGgBQAFgBABgEQAAgEgJgDIgUgEQgIgDACgJQADgNgBgJQgBgKgFAKQgBAFgCACQAFADgCAIQgCAIgKACQAAgBABgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgHgBgIgFQgJgGAJgEIgDgFIABgDQgZAVAAgJQAAgGAHgEQAIgEACgGQAEgJABgDQAAgDgDgDQgBAAABgHQgFgCgBgDIAAAFQgCAGgEAAIgIgEQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQADgIgBgMQAAgNAGgBIAQABIAAgBIAKgYIACAKQABALgEAIQgFAKgDgKIgMAIIAEAPQABgCAEgBQAGgBAJgIQAHgGABAEQADANgEAOIgEAPQABAIAEACQAFADADgIQADgHABgJIABgIQADgBAJAHQgDgOgDgHQgGgDAAgDIgEAAIAEgDIgLgRIAEgFIgGgEQgHgJAFgHQAFgIAFAFIACABIAHgnQAFAGAIAGIgEALQgEAKgJAFQAJgDAKgMQAHgHADAFQADAEgBAJIgBACIACABQAFAEAEgHQADgDAEgKIALgDQAAAGgIAMQgHAMgEACQgOAJgHAIQgFAHgCgJQgEACgHgDIAAADQgCAHAGAFIACgCQAAABAKADQADABAFgBQABgEADgBIAIgBQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAGAAAGgDIgOAOIgBAEQAEAMgBAGQgBAHgEAAQACALgGABIgEAFIgCAEQgDAKgDgDQgGAGAGAEQAEACAIAIQAHAHAEABQAPAEgLANIgNAQIACAfIgIAHg");
	this.shape_49.setTransform(37,46.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC6E29").s().p("AgPABIABgDQAFgNAGABQACABABADIAMAGQADgLAAgGQAAgEAEACIAEACIgBAKQgBALgBADQgDAGgDAEQgFAEgDgFIgKgHQgIAQgIADIgCABg");
	this.shape_50.setTransform(26.9,58.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BC6E29").s().p("AgNAcQAAgGAFgEQAGgGACgGIACgMQAAgCgCgCQgCgCACgLQAEgLADAIIAHAbQgUAdgFAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_51.setTransform(41.4,47.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BC6E29").s().p("AAAAUQgFgogMAFIAKgKQAAABAIABQAFABAHgIQAEgFABACQgCALgDAKQgBAFABAFQAGAPgHAEQgCACgEANIgCACQgCAAgCgOg");
	this.shape_52.setTransform(45.4,44.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BC6E29").s().p("AgMALQgGgHAEgHQAEgIAEAEQAEADAGgKIANAPIgHAMQgDACgEAAQgFAAgKgEg");
	this.shape_53.setTransform(44.1,39.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC6E29").s().p("AADAHQgEAAgHgEQgJgFAKgFQAHgEAIABQAGABgBAJQgBAIgIADQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAg");
	this.shape_54.setTransform(52,14.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BC6E29").s().p("AgNAcQAAgGAFgEQAGgFACgGQACgJAAgDQAAgDgCgCQgCgDACgLQAEgLADAJIAHAdQgUAcgFAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_55.setTransform(50.4,12);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BC6E29").s().p("AgJAUQgBgBgBAAQAAAAAAgBQAAAAgBgBQAAAAABgBQABgJgBgLQAAgOAHgBIARgCIgPAQIACAGQABAJAAAFQgBAHgDAAg");
	this.shape_56.setTransform(49.7,8.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BC6E29").s().p("AAAAUQgFgqgLADIAJgJQAAABAIACQAFABAHgHQAEgFAAADQgBALgDAKQgCAFABAFQAGARgGADIgHAPIgCACQgCAAgBgPg");
	this.shape_57.setTransform(54.4,9.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BC6E29").s().p("AgMAKQgFgIADgHQAEgIAFAEQACAEAHgKIAMARQgDAIgDAEQgCACgEAAQgFAAgLgGg");
	this.shape_58.setTransform(53.1,4.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BC6E29").s().p("AgNAHIAAgJIAKAEIAMgPIADABQADABgCAFQgDANgOAGIgDABQgFAAgBgHg");
	this.shape_59.setTransform(40.7,29.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BC6E29").s().p("AgFAGIAIgXQAGARgGANQgDAFgBAAQgDAAgBgMg");
	this.shape_60.setTransform(32.3,13.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BC6E29").s().p("AgCgVQAFAIAIAGIgFALQgEAMgMAGIAIgrg");
	this.shape_61.setTransform(35.9,9.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BC6E29").s().p("AAQBLQAAgDgGgJIgHgLIgGADIgLACIgBABIgDAEIgCADQgDgFgGgEIgDgBIAAgBQgLgGgKAAQgIgLAAgIQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAABAAIgGgBQgeAIACgMQADgTAYAGQAMADARgJIAAAAIgCAAIAGgYIABgCQgHAAgCgJQgBgFAGgNIAFgMIAOgGIAJgRIAHANIgDAEQABADgDAFIgMAZIADADIALAHIADgOIAAgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAEgGAFgCQAGgEACAHIAMALIAHgHQAIgHAGAAQAHAAgIAMQAJgMAHAAQAGAAgBAFQgDAOgLAKQgFABgEAAQgIgBAGgKIgFAJQgCAEgDACIACACQAIAMgFAKIABADIgBABIgEADIAAACQgEAGgKAFIAQALIAIgOQAEgHAAADQACAJAGAFQAHAGAIgLQAKgNAFAAQAHABgDAGIAEgCQgHAOgHADQgJAKgGADQgSAGgIAHQgEAEgDgDIgDADQgEABgCgCQgEgDAJgLQAMgQgUAHQgBAIgDAHQgEAIALAIQAGAEAGACIgHALQgPgIABgFgAg6AaQADAFAJAJQAJAKAGABQAEgIAFgEIgCgDQADgLAFgGIgIAFIgGAFQgCgDABgGIgGAFIgXAAIACABgAAAAhIAMALIAFgFIADgPIgGADIAEgRIAAAAgAgJAQIAEABIADgEQgDACgEAAQgIgBAKgGIAQgIIAIgcIgJgHIgEAJIgBAIIgBACQgCAGgEADQgEADgDgEIgHgGQAAAIgBAFQAEAAACALQABAEgCADIADgCIACABg");
	this.shape_62.setTransform(26.6,34.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BC6E29").s().p("AgCAAIAMgIQgJAQgGABIgCAAQgFAAAKgJg");
	this.shape_63.setTransform(33.5,9.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BC6E29").s().p("AgXBdQABgIAFgFIgGgCIADgHQAEgHAFgEIgGgLIgEADQgCgEABgHIgCgFIADACIADgIQAEgGACgBIABgFIABgJIgDgCQgHAQgJACIgBAAIAGgXIgCgCQgKAEgGABIgFgJIAFgVQAGgOgLgCQgHgBgEgGQgEgHAJAAQAGgBAJgHQAHgGABADQAEAPgEAOIgEASQAAAHAFADQAFAEADgIQADgIABgKIABgJQABAAAAAAQABAAAAAAQABABABAAQAAAAABABIAHgOQgMgGABgEQAAgFgMgRIAPgSIAAAFQAAAGgDAJQgCAIAJAHIAJAEIgBADIAGALIgFAGIgHAIIAOANQACAAAEAEQgBATgCAFIgEAHIAKALIABgFIADgJQgGAFAAgFQAAgGADgDIAHgGIADgHIAAABQADgKAAgDQAAgDgCgCQgDgDAEgLQADgLADAJIAIAdIgLAOIADAFQAJgEALABQAGAAgCAIQgBAKgIADQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQgFAAgHgEIAAADQgMAKgFABIAEADIACABIAGgEQAGgCAEgFIAEAMIgBABQgFAFgHACQgBAEgDAEQgMAQgDABIAHAHQAAABAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAIgSAGIgJACQACAEgBANQAAAFgDAAQgFAAgLgKgAgEAjQABAFgIAFQAFAHgBAHQACgBACgHQACgEAGAIQACgEAMgCQAEAAABgEQABgFgKgDIgUgGg");
	this.shape_64.setTransform(36.9,22.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BC6E29").s().p("AgKAUQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQABgIgBgLQgBgPAIAAIASgDIgPAQIACAGQABAJAAAGQgBAGgDAAIgHgCg");
	this.shape_65.setTransform(39.1,17.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BC6E29").s().p("AgEAUQgHgqgLAEIAKgKIAJADQAFABAHgHQAEgFAAACIgFAYIAIAFIAEAFQAEAGgBAGIgCAFIgNgZIABAGQAFARgGADIgGAQIgCACQgCAAgCgQg");
	this.shape_66.setTransform(44.5,18.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BC6E29").s().p("AAeBSQgDgMAGADQAIADACAFIAHgBQAFgBABgEQABgFgJgDIgJgDQgFAEgCgGQgHgCgCgDQgDgDACgHQADgMgBgKQAAgKgFAKQgFAJgEgCIgDgDIgLAFIgBAAQgFAHgTgKQgFgIADgIQAEgIAFAEQACACAIgHIgSAEIgIACQgGAIgEACQgNAHgIAJQgGAIgCgQQgBgFALgaQADgIABACQABAHADAEQAHgOAKgCQACgBADgIQABgEAKALIAQAQQAAAAABABQAAAAAAABQABAAAAAAQAAABgBAAIgBAAIACADIACgFQAFgNgKgBQgHgCgDgGQgEgGAIgBQAFAAAJgGQgFgLAKgDQADgBAEgDIgCgDIAPgSQABADgBAHIAJAIIgBgFQAAgDACgIIAAAAIgDgNQgBgMAGAEIAFADIABgCQADgHABADQABAJAFAEQAGAFAGgLIgDgUIAAgBIAEAAIAKAIIgBAEIAEgBIACABQgCAGgHALQgHALgEACQgOAHgGAJIgBABIADACQgLgBgIAFQAEAHAKADIgFAMQgMgHAAgFQAAgDgCgEQgEAFgHACQADANgEANIgEAPQABAIAEADQAEAEAEgIQADgIABgJIABgJQAEAAAMAKIAFAFQAFAGgBAGQAAAEgIAIQgGAGAGAEIACACQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIABABIAIAKQAFAFADABIADACQAFgDADABQAEAAgFAFIgCADQABAFgEAGIgJAKQgEAGgDAAQgBAIgGAFIgJgag");
	this.shape_67.setTransform(44.2,10.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BC6E29").s().p("AgJAKQAAgIAFgJQAEgLAFADQAEADABALQABAGgIAFIgLAHIgBgHg");
	this.shape_68.setTransform(39.2,7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BC6E29").s().p("AgLgNIAcAAQAAADgJAAIgFgBIgDAJQgFALgMAFg");
	this.shape_69.setTransform(47.5,1.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BC6E29").s().p("AgOAVIACgDIAAgCQAGgRADgOQgGAAAKgIIAMgJIgDAFQADACABAGQACAJgHAYIgMAJIgCAFQgDAFgCAAQgCAAgCgMg");
	this.shape_70.setTransform(44.1,3.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BC6E29").s().p("AgYATIAJgYQAGgPAGADQADABACAFIAMAJQAEgNAAgHQgBgIAJAJQgBAWgCAHQgDAHgEADQgGAFgCgGIgLgKQgJARgJADIgCAAQgEAAADgIg");
	this.shape_71.setTransform(39.7,2.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BC6E29").s().p("AgMAJIgCACQgHAAADgIQADgFADgEQAGgFAKgCQAHgBADAEIABgBIADABQADACgBAEQgFANgRAEIgDABQgFAAgCgFgAgCABIACABIADgDIgBAAg");
	this.shape_72.setTransform(33.6,55.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BC6E29").s().p("AgEAXIgCgMQgEACACgFIABgEIAAgBIgEgYQAAgEAIAFIAGAFIAFAGQAFAGgCAFQgEALgDAEQgDAHgDAAIgCgBg");
	this.shape_73.setTransform(27.4,54.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BC6E29").s().p("AgHAAQAAgLAHADQAMAGgHAGQgEAEgFACIgDgKg");
	this.shape_74.setTransform(23.8,56.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BC6E29").s().p("AgEgHQAGgJAFADQAEADABAJQABAGgKAEIgNAGQgEgJAKgNg");
	this.shape_75.setTransform(13.8,60.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BC6E29").s().p("AgSAOIgLgDIAFgIQAIgIAJgBQACAAAEgIQABgDALALIARAPQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAIgZAEIgJABIgOgCg");
	this.shape_76.setTransform(15.4,63.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BC6E29").s().p("AgRABQgBgCAJgDIAJgDQAbgCgOAJQgNAIgIAAQgHAAgCgHg");
	this.shape_77.setTransform(40.2,34.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BC6E29").s().p("AgIAEQgHgDAHgDQAHgFAJAEQAKADgMAEIgIACIgGgCg");
	this.shape_78.setTransform(34.4,33.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BC6E29").s().p("AgXANQgCgDAAgDQgBgFALgCQAMgBAHgLIAWAOIgKAAQgLABgFAEQgIAGgKAAIgFAAg");
	this.shape_79.setTransform(21.5,59.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BC6E29").s().p("AAJAKQgSgCgGgFQgHgEAJgHQAFgDAIADIAHADIAKAIQAGAHgKAAIgEAAg");
	this.shape_80.setTransform(23.7,53.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BC6E29").s().p("AgPAPQAKgZAFgHQAEgFAFgBQAGAAACAIQACAHgKAWQgIAFgHADIgHACQgGAAAEgJg");
	this.shape_81.setTransform(19.6,57.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BC6E29").s().p("AgSACQAIgLAMgLIAHABQAEACgIANQgIALAKgCIAMgFIgCAVg");
	this.shape_82.setTransform(12.8,48.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BC6E29").s().p("AgcAQIALgVQAHgNAHADQADABACAEIAPAJQAEgLAAgHQAAgEAFADIAFADIgBALQgCALgCADQgEAGgFADQgGAEgDgFIgMgKQgLAPgLACIgBAAQgFAAAEgHg");
	this.shape_83.setTransform(14.6,56.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BC6E29").s().p("AgjAXQgDgYAUgRIAcgBIAOgEQANgBgBAHQgBARgYgDQgJgBgMAFIgKAHQgLAQgDAAIgBgBg");
	this.shape_84.setTransform(22.4,51.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BC6E29").s().p("AgWAWIAWggQAPgVADAGIAGANQgGAXgIgDQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgCAFgHAFQgMAIgEABIgBAAQgEAAADgFg");
	this.shape_85.setTransform(16.7,50.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BC6E29").s().p("AAUAtQgDgEgLgJQgKgKgGABQgHAAgDgDQgEgEAFgIQAHgIACgMQADgOgHAFQgHAFADgIQACgIAGgDIATgMIgGAZQAFALAEAOIgGAEQgDAFAJALQAKAKABAJQAAAGgBAAIgCgDg");
	this.shape_86.setTransform(20.6,45.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#BC6E29").s().p("AATBCQgGgHAIgDQAGgCAHABQAGAAABgEQABgFgLgEIgYgJQgKgFADgJQAEgNAAgJQgBgKgFAJQgGAIgFgCIgEgDQgbAHABgHQACgQAHgMQADgFgBgFQgBgFgGgCQgJgBgEgHQgEgHAKAAQAIABALgHQAJgEABADQADAPgFAOIgGARQAAAIAGAEQAFAEAFgIQAEgHACgKIABgJQAFAAAOANIAHAGQAGAHgCAGQAAADgLAHQgHAFAGAFQAGADAJALQAHAIAFACQASAIgNALIgPANQgDACgDAAQgEAAgEgEg");
	this.shape_87.setTransform(28.3,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,59.9,67.1), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6E29").s().p("AgBASQgJgEgJgLQgIgKANgHIANgFIgCASIAIAEQALAFAFACQAFAIgLABIgGABQgGAAgEgCg");
	this.shape.setTransform(25,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC6E29").s().p("AgQATQgMgBAAgGIA2geQAEgCgCALIgDAJQgHARgNABIgRABIgEAAg");
	this.shape_1.setTransform(23.4,39.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC6E29").s().p("AgBAJIgLgIIANgHQANgHgBAJQgCAOgIAAIgEgBg");
	this.shape_2.setTransform(18.8,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC6E29").s().p("AgIAFIgMgJIAHgEQAKgDAMACQAOACgCAGQgCAFgMAFIgFACQgEAAgGgGg");
	this.shape_3.setTransform(11,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E29").s().p("AgBAeIgNgXQgFgIgCgPIAAgNIAMABQANAEAEAIQABACALAAQAFAAgKAQIgOAaIgBACIgBAAg");
	this.shape_4.setTransform(7.7,32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC6E29").s().p("AgFABQgIgDgEgKIgEgIIAGgFQAIgDAFAJQAHAMAQADIgJAfQgGgUgLgGg");
	this.shape_5.setTransform(14.2,36.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E29").s().p("AgIANQgFgUADgJQAEgKALAHQAKAFgEARIgHAPQgDAFgCAAQgEAAgDgKg");
	this.shape_6.setTransform(22.9,36);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E29").s().p("AgDgBQAAgGAHAKIgCABQgFAAAAgFg");
	this.shape_7.setTransform(31,47.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC6E29").s().p("AgPAMQAGgBgBgDQgCgIACgLQAEgPAJALQAKALACAMQACAKgMACIgEABQgJAAgHgJg");
	this.shape_8.setTransform(32.9,46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC6E29").s().p("AgNATIACgLQADgKAEgBQAEAAAKgQQACAGACAEQgIAEgCAMIAAANg");
	this.shape_9.setTransform(39.9,35.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E29").s().p("AgvBLIgXgKQgKgGAGgLQAGgLAIAIQAFAGACAIQACAHAHgBQAGgBABgPIgBggQACgOANgCQATgBAKgFQANgGgPgCQgMgCAAgGIADgGIgKgMQgJgNAHgCIAWgEQAIADAJAAQAdAAAJgVIAOAJQAFAEgEACQgQALgUACIgXACQgJAEgDAIQgCAIALAAQARACAUgHQACAGgJAWQgFASgNADQgFABgOgHQgJgGgDAKQgCAHgJARQgHANAAAGQgBASgMAAQgEAAgGgCg");
	this.shape_10.setTransform(31.6,38.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC6E29").s().p("AgXAFQgbgMAJgEQAIgDAIAFQAJAHAKgBQANAAAEgCQAEgBACgFQACgFAQAAQAQAAgKAJIgkAYQgOgGgOgGg");
	this.shape_11.setTransform(35.5,43.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC6E29").s().p("AgfAMIgBgLQABgDADgBQAMgCAPgGQARgIAEAKQAKAWADACIgdgPQgMAMgNADIgEABQgFAAgBgEg");
	this.shape_12.setTransform(40,39.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC6E29").s().p("AgWAfIgYgCQgMgCAbgPQA2gegLgOIARAKQgBAAACAOQABAIANAHQAJAFgDAAQgQAEgOAAQgIAAgGAFQgOAMgIAAQgEAAgCgCg");
	this.shape_13.setTransform(41.2,47.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC6E29").s().p("AAGAMQgSgQgMgFQgKgEAJgGQAPALARAAIACAAIAVAaIgGACQgOgEgEgEg");
	this.shape_14.setTransform(45,37.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC6E29").s().p("AAFAEQgQgEgIAAIgBgCQgBgCAFgCQAVgPgBAMIAAACQAGACAHAEQAJAFgJAGIgMAFg");
	this.shape_15.setTransform(36.4,2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC6E29").s().p("AgFgDQgIgEgGgKIATAAQAHAHANACIgJAaQgFgRgLgEg");
	this.shape_16.setTransform(31.4,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BC6E29").s().p("AgNgEIAaAAQADAFgFACIgKACQgJAAgFgJg");
	this.shape_17.setTransform(43.7,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BC6E29").s().p("AgcAtIgWgIQgJgGAFgJQAFgJAHAHQAFAEADAHQACAGAGgBQAGgBAAgNQgCgTAAgGQABgMAMgBQAQgCALgFQAMgEgOgCQgNgCAAgFQAAgCADgDIgFgFIANAAQAAAGAJAAQAQABASgGQACAFgHATQgEAQgMACQgEABgOgGQgJgEgDAIQgBAGgHANQgGALAAAFQAAAQgLAAQgDAAgGgCg");
	this.shape_18.setTransform(46.3,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC6E29").s().p("AgVAEQgZgJAIgEQAHgDAIAFQAJAGAIgBQAMAAAEgCQAEgBABgEQACgEAPAAQAOAAgJAHIgfAUIgbgKg");
	this.shape_19.setTransform(51.2,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BC6E29").s().p("AgcALIgBgKQAAgCADgBQALgBANgGQAQgHAEAIIAMAUIgagMQgLAKgMADIgEAAQgEAAgBgCg");
	this.shape_20.setTransform(55.3,3.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC6E29").s().p("AgUAaIgWgCQgLgBAZgNIADgCIABgCIAGgTQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAOAMQASgPgHgIIARAIQgCAAADAMQABAHAMAFQAIAEgCAAIgVAEIgLAAIAFALQgMACgJgCQgHAEgFAAQgEAAgCgCg");
	this.shape_21.setTransform(56.7,10.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BC6E29").s().p("AAGAKQgRgOgLgDQgKgDAJgGQANAKAQAAIACAAIAUAUIgGADQgNgEgDgDg");
	this.shape_22.setTransform(59.8,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC6E29").s().p("AgKAHQgEgJAHgFIAKgIQAHgEACADIgOAhIgBABQgCAAgFgLg");
	this.shape_23.setTransform(3.2,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC6E29").s().p("AgDAFQgHgJAIgCQADgBAGABQgEANgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_24.setTransform(6.8,2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC6E29").s().p("AgLAGQgBgEADgGQACgEAIABIALABQAAAGgMAGIgHACQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_25.setTransform(15,4.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BC6E29").s().p("AgPACIgEgNIANAAIAEABQAMAFAKAKQgMAIgKgEQgBAAgGADIAAAAQgDAAgDgKg");
	this.shape_26.setTransform(15.7,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BC6E29").s().p("AAJAIQgGgCgGABIgHACIgJgSIAHAEQAIADAFAAQAKgBAIAFQACAIgGAAIgGgCg");
	this.shape_27.setTransform(9.7,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BC6E29").s().p("AgEAHIgEgFQgCgEgBgFQAAgIAJAHQALAIADAFQACAGgJABIgBAAQgEAAgEgFg");
	this.shape_28.setTransform(5.5,4.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BC6E29").s().p("AgRAMQgEgCACgGQACgDAIgHIAIgGQAhgCgQAKQgRAOgGACIgGABIgEgBg");
	this.shape_29.setTransform(9.8,3.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BC6E29").s().p("AgNAOQgCgDALgGQARgHgYgBIAKgNIAPAZQgKAFgNADQgDgBgBgCg");
	this.shape_30.setTransform(10.6,11.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC6E29").s().p("AgEAOIgCgGIgGgKIgEADIgGAHQgDAEgDgKIAFgGQAHgHADgBQAFgDAEAAQAFgBAAAFIAEALIAIgCQAJgCAFACQAFACgGADIgRAKQgGADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_31.setTransform(12.9,6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BC6E29").s().p("AgPADQgYgDAHgHQAJgLAOAKQAJAIASgDQATgJgCAEQgJARgVAFg");
	this.shape_32.setTransform(5.4,7.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BC6E29").s().p("AgZAKQAEgIgCgDIAIgGQAIgGADADQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAQADgCAHgBQAYgBgKAFIgdANQgMAGgFAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_33.setTransform(8.9,9.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC6E29").s().p("AgZAjIAQgOIAFgVQADAAABgBQAFgCgCgLQgCgLADgGQAEgHAAAGQAAAEADAKQAEALAEACQAFACABADQABAEgHADQgIADgHAJQgHAIAGgBQAHAAgGAEQgEAEgGABIgLABIgIgBg");
	this.shape_34.setTransform(3.6,11.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BC6E29").s().p("AgJAcIgEgCIAAgaQAFgDABgDQADgFgBgEQgCgFgGADIAAgKQALgFgBAJQAVAEgEAGQgLAMgHADQgKAHAHAGQAFAFAAAGQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgEgCg");
	this.shape_35.setTransform(1.4,9.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC6E29").s().p("AgEgOQAHAJABADQADAFgFAFIgGAHg");
	this.shape_36.setTransform(0.5,4.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BC6E29").s().p("AgKACIADgFQAFgIAGgBIAHgCIgVAdg");
	this.shape_37.setTransform(38.2,8.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BC6E29").s().p("AgTAEQABgEAJgGQAGgEAJAFIAOAFQgGAIgTAAIgDAAQgLAAAAgEg");
	this.shape_38.setTransform(53.5,13.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BC6E29").s().p("AgLABIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIAEAAIADABIgBgHIgCgBIACgCIABgGQABgIAFABQAFABAFAHQAJAEAEAHQgBADgEABQAAAFgFADQAGAFgNACQgfAHgJAAIARgWg");
	this.shape_39.setTransform(48.1,10.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BC6E29").s().p("AABALQgJgGgEgHQgDgGALgDQAJgDAIAFQgBABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQADAFAAAHQAAAHgFAAQgDAAgEgCg");
	this.shape_40.setTransform(29.6,4.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC6E29").s().p("AgUBXQgDgKgEgGIgBAAIggAEIAKgIQAMgHAMAAQANAAgKAHIAQAIIAOgMQgDAAgDgDQgDgGgOgEQgLgDAEgDQANgKARgEIAVgFQAIgEABgGQABgGgLABQgJABgNAEIgJAEQgCgDACgMQgNAIgHAIQgBAIgDABQAAABAAAAQAAABABABQAAAAAAABQABAAAAABIgFgCQgEADgFAIIgFAIIgIgBIgBAIQgHALgLgBQgLAAADgIIAAgDQgoAMgKACQAFgKACgJIAQgCQANgBALAFQgIgHgTgDQgNgCAFgHQADgFALgDIACAAIAAgCQACgHgJgBIgTAAQgEgFgGgEQAHgDASABQASABAFADQASAJAMABQALACgKAHQADACACAIIADAAQAKgCACgJIgDgBQABgCgCgKQAAgFgEgDQgGACgDgCIgFgHQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAQgEgFgGgEIAYAGIAFgBQAJgJAKgEQAIgCACADQAMgHAFAEQACABAGAAIAFAAQANAAgCACIAIABQADgBABgFQAAgGAFgLQAFgKgBgEQgDgRAUADQAUACAFACIAugYQAGgDgGATQgGAOgMABQgSABgGgBIAAADQgEAIgIgEQgFgDgEgFQgEgEgFABQgGACADAKIAGAVQABAKgMADQgQAEgKAFQgLAFAOAAQAIAAACABQAAgGALgCQAKgCAHAIQgBAAgBAAQgBAAAAABQgBAAAAAAQAAAAAAABQADAHgCAKQgBAMgKgHIgEAGIgEABQAlALgKAGQgHADgIgEQgJgFgJAAQgMABgFACQgDABgBAEQgBACgHACQAAAEgDAEIAFgCQAIgCACAFIABAKQAAADgEABQgKACgNAHQgJAEgFAAQgEAAgCgCg");
	this.shape_41.setTransform(28.7,10.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BC6E29").s().p("AgPAOIACgHIABgNQgOADgHADQgFACAAgEIABgGIAMgEQANgFAFgBQAHAAAGABQAIACgEAFIgCAOIAMAAQANABAFAEIABACIgkAHIgIABQgJAAgBgFg");
	this.shape_42.setTransform(49.2,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BC6E29").s().p("AgjAIIAbgUQA6AFgNAHQgGADgIgDQgJgCgJABQgLACgEACQgDABgBADQgBAEgOACIgGAAQgHAAAHgFg");
	this.shape_43.setTransform(28.2,7.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BC6E29").s().p("AgTAUQABAAgDgJQgDgGgLgCQgIgCACgBQANgEANgCQAHgBAEgEQAPgOAIAEIAUgCQALAAgVANQgrAaALAIg");
	this.shape_44.setTransform(22.2,5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BC6E29").s().p("AgFALQACgEgQgDIAMgTQAKgBAHABQAKABAAAVQgGAJgLABIgBAAQgJAAACgGg");
	this.shape_45.setTransform(17.5,9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC6E29").s().p("AAFAAQgQgDgIAAQgFgFAKgDQARgEAPALQAJAFgLAGQgFAEgHACg");
	this.shape_46.setTransform(7.6,17.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BC6E29").s().p("AAzBIQgDgPgTgKIACACIgfAHIgEAAQAFAHgKAGQgJAGgfABIgPgLIgYABIALgOIAHABQABgCAJAAIAjgCIACgEIACgOIgRADIgFACQgBABgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgIgBgGgDQgGgEAFgGIAIgRQgXgEgFgIQgDgEAEgBQADgBAKAAQgTgCgDgGQgDgGAHgCQARgEARAFIAGAIQADAHgPABIAXABIACgCQAIgOAQgCIADgCIACAAIAFACIACAAQAKAAAKAHIAEgVIgVAAQgJAAAEgCQAIgGADgJQAEgKgQgCQgVgEgCgEQgEgGAJgCIgFgCIALAAQANABADADQARAEAFAEQASAPALADQAHACgCAEIAFABIACAHQgBAFgSgCQgXgDASAPQAGgDANgBQAMgBADgOIAAgPIARABQgCATgGACQgGABgNAXIAGAFIAIAKIADAAIAFABIAFAAQgEAHgCAGIABADIgBABQgBALAFAMQgIANgJAFIgGACIADAGIAKAMQAJAOgJADIgJABQgQAAgFgUgAAwAVIAJAEQgDADgHACQAFABAFACIAKAVIACgCQAEgEAFgOQAGgPgBgGQgKABgJgDIgCAEQgPACgJgBIAKAFgAAIApQgFAAgDgCIAAACIAIAAIAAAAgAgMARQAWAAgIAJIgCAKQAGgEAKgCQgCgFAMgIIACgBQgFgBgVgOIgHACQgPACgOADIgEANIAMgBQAIgDADAAIADAAgAAiAPQgDgBAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAIgGgBQAEACABADQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIAEAAIAAAAgAAZgWIAGAFIgWAEIAAABIAkAFIAGgRIgIgDg");
	this.shape_47.setTransform(20.6,27.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BC6E29").s().p("AhIAyQAPgDACgCQAJgEABgGQACgHgLABQgHABgLADIAAgmIAYgHIAKAAIAHgQIgSAEQAIADgFADQgHADgFgCIgMgDIgCABIAAgKIABAAIAGgGIgHgGIAAgUQAKgEAJAGQgBABgBAAQgBAAgBABQAAAAAAABQAAAAAAAAQACAGAAAIIADgBIAKADQAKAEADADIABgGIgBgCQgEgBgDgDQgEgEgKgCIAMgKIACABQAIACAGAGQAEgDAIACIAPACQAIABADADIAEgLQABgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAQAPQAEADADAFQAFgEAPgGQAOgFgKAaQgKADgIgCIACAHQgRADgLgGIgKANIAGACQgDAEgKACIgDAEIgBgEIgJACQgJAAgDgDIgGADIgLADIgBAEIAMAAQANACAFAEIABABIgeAHIgCADIAGAEIAJAIIgJALQgOAEgNACQgMABgDAHgAgLguQgGACABALIAFAYIAEgDQAGgEAJAFQAGgKAHgBQgCgCgJACQgFABAFgLQgGgBgHgKQgBgDgEAAIgDAAg");
	this.shape_48.setTransform(7.3,24.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BC6E29").s().p("AAAAQQgIgDgJgKQgFgFAEgFIgCAAIgBgEQAAgDAGgBQARgEAPAPQAHAGgGAGIADABQAEAHgKABIgGAAIgJgBgAgCAAIAFACIAAgCIgFgBg");
	this.shape_49.setTransform(41.7,10.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC6E29").s().p("AgZAKIACgKIAEgHQAFgIAIgBQAOgCAGABQALAAABAFIgNAJQAFADgIAAIgFAAIgBABIgaARIgBAAQgCAAAAgIg");
	this.shape_50.setTransform(44,17.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BC6E29").s().p("AgLAEQAAgPALADQAGABAGAFQgNAMgGAAQgEAAAAgGg");
	this.shape_51.setTransform(48.7,19.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BC6E29").s().p("AgGALQgPgCABgHQABgEAKgGQAHgEAJAHIAOAJQgGAHgPAAIgGAAg");
	this.shape_52.setTransform(57.8,26.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BC6E29").s().p("AgIARQgBgBgLAAQgGAAAHgQQAGgOADgLQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAIAQAWQAMANADAWIgFAAQgTAAgIgMg");
	this.shape_53.setTransform(60.8,23.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC6E29").s().p("AgHADIgHgLQgEgKALAFQAhAQgOAMIgCABQgGAAgLgNg");
	this.shape_54.setTransform(14.4,15.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BC6E29").s().p("AABALQgIgFgBgKQgBgMAKAKQAIAGABAHQAAAFgEAAIgFgBg");
	this.shape_55.setTransform(16.3,21.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BC6E29").s().p("AAEASQgFgHgLgDIgJgDIAFgcIAFAJQAIAKAHAEQANAEAFAOQgBAEgDABIgEABQgFAAgFgGg");
	this.shape_56.setTransform(53.5,19.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BC6E29").s().p("AgDATQgGgDgBgJIgBgIIAGgOQAFgMAGAQQAIASgDAIQgBAGgGAAIgHgCg");
	this.shape_57.setTransform(45,20.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BC6E29").s().p("AgUANQgJgCgDgFQgEgFAIgFQAIgGAegCIASALQAPAKgSABQgNAAgQADIgJAAIgHAAg");
	this.shape_58.setTransform(51.2,22.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BC6E29").s().p("AgDgCQAGgBABAEQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgCAAgEgFg");
	this.shape_59.setTransform(36.3,10.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BC6E29").s().p("AgRAOQgEgDABgDQABgGASABQASACgIgIIgLgKIAYgJIgDAsQgRgCgTgGg");
	this.shape_60.setTransform(44.1,33.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BC6E29").s().p("AgRARIADgJIACgRQgOABgJAEQgFACABgGIABgHIAOgEQAOgFAFAAQAIABAGADQAIADgFAGIgEARIAMADQAOADAFAGQAEAGgLABIgfAAIgCAAQgPAAgBgIg");
	this.shape_61.setTransform(53.1,27.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BC6E29").s().p("AgMAaIgRgaQgGgGgFgGQgJgMAIgDQAWgHAIAYQAFAPAZAJQAgACgGAEQgRAKgTAAQgKAAgLgEg");
	this.shape_62.setTransform(43.5,23.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BC6E29").s().p("AgOAKQgfgDAEgGQAMgHABgFIAPgDQAPgBAAAGQABAFACAAQAHAAAKAEQAfAPgRAAg");
	this.shape_63.setTransform(44.8,29.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BC6E29").s().p("AgbAlIgXgNIAfgHQAKgKAPgMIAHAEQAIAAAHgOQAHgPAKgFQAKgHgFAHQgEAGgEAOQgFAQADAFQAEAHgCAFQgCAFgMgBQgNgCgPAFQgRAFAJAEQAJAEgKABIgFAAQgIAAgFgCg");
	this.shape_64.setTransform(35.8,27.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BC6E29").s().p("AgrBKQgEgHgNgIQgLgGAEgCQAQgMATgCIAWgDQAJgFABgHQACgHgLgBQgKAAgNAEIgLADQgCgDADgMIAHgTQAFgKAHgCQAFgBAOAGQAJAFACgJQABgIAHgOQAGgMAAgFQgBgJAEgEQAEgGAMAEIAXAHQAJAGgEAJQgFAKgHgHQgGgEgDgIQgDgFgFABQgHABABANIADAcQAAANgMACQgRADgLAFQgMAFAPABQAMACAAAFQAAADgCADQAYAVgKAEQgTAGgRAAQgTAAADAOQACAJgGAIQgCADgCAAQgEAAgCgGg");
	this.shape_65.setTransform(36.2,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,63.2,51.2), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6E29").s().p("AgOAQQgNgHAIgLQAOgVAUADQALABgEAJIgRAIIgIAEIADATQgIgBgGgEg");
	this.shape.setTransform(24,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC6E29").s().p("AAaAUIgegSIgYgNQAAgHAMgBQAFgBAQACQANABAHARQAHAVgFAAIgBgBg");
	this.shape_1.setTransform(22.4,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC6E29").s().p("AABAIIgNgIIAMgJQALgEACASQABAGgFAAQgDAAgFgDg");
	this.shape_2.setTransform(17.8,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC6E29").s().p("AgUAFIAMgKQAIgJAHAEQAMAGACAFQACAHgOADIgKABQgMAAgHgHg");
	this.shape_3.setTransform(9.9,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E29").s().p("AgUAhQgCgYAJgPIANgZQAAgBAAAAQAAAAAAABQAAAAAAABQABABAAABIAOAcQAKARgFAAQgKAAgBACQgIAOgUAAIgBAAg");
	this.shape_4.setTransform(6.6,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC6E29").s().p("AgPAcIgFgFIADgJQAEgKAIgEQALgHAFgVIAKAhIgJAEQgKAEgDAIQgFAIgFAAIgEgBg");
	this.shape_5.setTransform(13.1,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E29").s().p("AgKASQgDgKAFgVQAFgSAHANQAEAGADAKQAEATgKAFQgEACgDAAQgFAAgDgGg");
	this.shape_6.setTransform(21.8,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E29").s().p("AgDACQAAgFAHAAQgEAHgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_7.setTransform(29.9,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC6E29").s().p("AgKANQgCgNACgIQABgDgFgBQAHgLAMACQAMADgCAKQgCAOgKALQgDAFgDAAQgFAAgCgJg");
	this.shape_8.setTransform(31.9,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC6E29").s().p("AgEAEQgEgBgDgLIgCgLIAQgBIABANQACANAIAEQgDAFAAAGQgLgRgEAAg");
	this.shape_9.setTransform(38.8,17.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E29").s().p("AAWA9QgKABgHACIgWgEQgHgCAJgOIAKgNQgCgDgBgDQAAgHANgCQAOgDgNgGQgKgGgTgBQgNgBgCgQQACgVgBgNQAAgQgHgBQgGgBgCAHQgDAJgFAGQgIAJgGgMQgGgMAKgHIAYgLQAVgJABAbQAAAGAHAPQAJARACAIQADALAJgGQAPgIAFABQANADAEATQAJAYgCAHQgUgHgRABQgLABACAJQADAHAJAFIAXACQAUACARAMQADADgFAEIgNAJQgLgXgcABg");
	this.shape_10.setTransform(30.5,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC6E29").s().p("AARANQgCgFgEgCQgEgCgNAAQgJAAgKAHQgIAGgIgEQgJgFAbgMQAOgHAPgGIAjAaQAKAJgQAAQgQAAgCgFg");
	this.shape_11.setTransform(34.4,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC6E29").s().p("AgBANQgPgHgLgCQgEgBAAgDIAAgMQACgGAIADQANADAMAMIAdgPIgNAaQgDAGgGAAQgFAAgHgEg");
	this.shape_12.setTransform(38.9,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC6E29").s().p("AgfgMQgbgQAMgBIAXgDQAIgJAUAUQAGAFAIAAQAPAAAQAEQADABgJAFQgNAGgCAKQgBAPABAAIgSALQAMgPg2ghg");
	this.shape_13.setTransform(40.2,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC6E29").s().p("AgYAKQANgFARgQQACgEAQgFIAGABIgVAcIgCAAQgRAAgOANQgKgIAKgEg");
	this.shape_14.setTransform(44,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC6E29").s().p("AgDAPQgGgCgHgGQgFgBABgDIABgDQAIAAAQgDIAAgMIAMAFQAJAHgJAFQgGAEgHADIAAACQAAAFgEAAIgDgBg");
	this.shape_15.setTransform(35.4,52.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC6E29").s().p("AgMAIIgGgEIALgIQAHgHAHADQAKAGACAEQACAGgOABIgHABQgGAAgGgCg");
	this.shape_16.setTransform(27.1,60.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BC6E29").s().p("AgTAbQgBgUAJgMIAMgVQAAAAAAAAQABAAAAAAQAAAAABABQAAABAAAAIAMAYQAIAOgEAAQgKAAgBACQgHALgTAAIgBAAg");
	this.shape_17.setTransform(24.1,57.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BC6E29").s().p("AgOAXIgFgFIADgHQAFgIAHgDQAKgGAGgRIAIAbIgJADQgJAEgEAGQgEAHgFAAIgDgBg");
	this.shape_18.setTransform(30.3,53.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC6E29").s().p("AgJAPQgDgIAGgRQAFgQAGALQADAFACAJQADAPgIAEQgFACgCAAQgFAAgCgFg");
	this.shape_19.setTransform(38.3,54.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BC6E29").s().p("AAGAMIgbgCQgRAAAMgKIAQgLIAPABQAQACAFADQAIAFgDAFQgCAFgJABIgIABIgGAAg");
	this.shape_20.setTransform(32.6,56.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC6E29").s().p("AgEADQgEgBgCgIIgBgKIAOgBIABALQACALAGAEIgDAJQgJgOgEgBg");
	this.shape_21.setTransform(54,55.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BC6E29").s().p("AghARQADgFAMgDIALgDIgGgPQgFgGAHgDQAFgDAHgBQAIABAXAGQAGANgIgDIgVgDIAEAPIAEAHQAAAIgRgBIgbABQgKABAEgGg");
	this.shape_22.setTransform(31.5,61.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC6E29").s().p("AgoAUQgDgCANgCIANgCQAXgJAEgPQAGgXAVAHQAJACgJAMIgKALIgOAZQgMAFgKAAQgQAAgPgJg");
	this.shape_23.setTransform(39.9,56.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC6E29").s().p("AgUAAQAJgEAHAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABgBAAgBQAAgFANAAIAPACQABAFALAGQAEAEgcAEIgtAFIgCABQgMAAAZgOg");
	this.shape_24.setTransform(39.1,62);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC6E29").s().p("AAAAXQAAgEACgGQACgEgEgOQgEgNgEgFQgGgGAKAFQAIAEAHAMQgFAIAAAKQAAAJAFAIIgCAAQgHAAgCgEg");
	this.shape_25.setTransform(43.4,59.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BC6E29").s().p("AASAzQgIAAgHACQgMgBgIgDQgGgCAIgLIAKgLQgDgDAAgCQABgGALgBQAOgCgMgGQgKgFgRAAQgMgCgBgNIACgcQAAgOgGgBQgGgBgCAGQgMAagIgQQgFgKAJgFQAGgEAQgFQAUgIAAAXQAAAFAGAMQAIAPABAHQADAIAIgFQAOgGAEABQAMADAEAQQAHAUgCAFQgSgGgQABQgKAAACAIQACAGAIAEIAWADQASABAOAKQAEACgFAEIgNAIQgIgTgbAAg");
	this.shape_26.setTransform(46.4,51.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BC6E29").s().p("AAaAOQgIgBgBgDQgCgEgDgBQgEgCgMAAQgJAAgJAGQgHAEgHgDQgJgEAagKIAagKIAeAUIACAIIgFABIgIgBg");
	this.shape_27.setTransform(50,47.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BC6E29").s().p("AAIALQgMgGgLgCQgDgBAAgCIABgKQACgFAHACQALADAMAKIAEAOQgEAAgHgDg");
	this.shape_28.setTransform(53.1,51.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BC6E29").s().p("AAEAOQgGgCgFgHIgDgHQgBgJABgDIAVAeg");
	this.shape_29.setTransform(37.2,46.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BC6E29").s().p("AAAARIgBgHIgCgCIACAAIABgIIgDAAIgEAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAAAIgRgYQAFAAAJADIAaAFQANACgGAFQAFAEAAAFQAEAAABAEQgEAIgJAEQgFAIgFABIgBAAQgEAAgBgIg");
	this.shape_30.setTransform(47,44);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC6E29").s().p("AgDACQAIgGgBAEQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgDAAg");
	this.shape_31.setTransform(30.3,50.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BC6E29").s().p("AgEANQgLgDADgHQAEgIAJgGQALgHABAMQAAAIgDAFQAAABAAAAQAAABAAAAQABABABAAQAAAAACAAQgFAEgHAAIgGgBg");
	this.shape_32.setTransform(28.5,50.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BC6E29").s().p("ACEBfIgcgQIgTgLQgCACgXADQgUADAEgSQABgEgFgLQgFgNAAgGQgCgHgKACQACAEgNgBIgGgBQgFAAgBACQgGAFgMgJQgCAEgHgDQgKgDgLgLIgEAAIgYAGQAEgDAGgHQAAAAAAAAQgBAAABgBQAAAAAAAAQAAAAABgBIAFgGQADgCAGABQADgDABgFQADgMgDAAIAEgCQgDgKgJgCIgDAAQgCAJgDACQAKAIgMABQgKACgUAJQgEADgLABIgGgLQAMgBgBgHIgBgDIgCAAQgLgDgDgGQgFgGANgDQASgEAJgHQgMAFgNgBIgPgCQgDgMgEgIIAxAOIABgCQgDgJALAAQALgBAHALIAAAKIAJgBIAFAIQAFAJAEADIAFgCQgCACAAADQADABABAIQAFAHAPALQgCgNACgDIAJAEQAMAEAKABQALACgBgHQAAgGgJgFIgVgFQgRgEgNgLQgEgDAKgEQAPgFAEgFQACgEADAAIgOgMIgPAIQAHAIgMAAQgLgBgMgHIgLgIIAhADIAAABQAFgOADgDQAFgGAOAIQAOAHAKADQAEABgBADIgBALQgBAFgIgDIgGgCQAEAEAAAFQAHADABABQAAAFAEABQAEACANABQAIABAKgGQAIgFAHAEQALAFgmANIADABIAFAGQAKgHACANQABALgDAHQgBACAFAAQgHAJgLgCQgKgCAAgHQgEABgGgBQgOAAALAGQAKAGAQAEQAMADgBALQgBAGgFARQgDALAGABQAFACADgEQAFgGAFgDQAIgFAEAJIAAADQAGgBASABQAMACAGAPQAFARgEAAIgBAAg");
	this.shape_33.setTransform(28.1,43.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC6E29").s().p("AgCAUQgEAAgOgGIgLgFIgBgFQAAgFAEACQAIADAOADIgBgOQgCgDAAgEQABgGANABQAMAJAQAGQgFABgIAAIgGAAIACAPQAFAFgJACIgKABIgEAAg");
	this.shape_34.setTransform(47.6,38.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BC6E29").s().p("AgjgHQgIgIAOACQAOADABAEQABADADACQAEABALACQAJACAJgEQAIgBAGACQANAIg6AGg");
	this.shape_35.setTransform(27.1,46.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC6E29").s().p("AAaAaQgSgEgDACQgFADgLgJQAFgYgWgQIALgDQgLAJArAcQAUAOgJAAIAAAAg");
	this.shape_36.setTransform(22.6,49.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BC6E29").s().p("AgYBjIAFgCQgJgCADgGQADgFAUgEQAQgDgDgKQgDgJgJgHQgDgCAJAAIAVgBIgEgVQgMAGgJABIgBAAIgIACIgDgDQgPgBgJgPIgBgDQgEABgGAAIgNABQAOAAgCAIQgCAFgEAEQgRAFgSgFQgGgBADgHQADgHASgCQgJABgDgBQgEgCACgEQAEgGAMgEIAMgDIgHgTQgGgFAHgFQAFgDAJgBQAAgBABgBQAAAAABgBQAAAAABAAQABABAAAAIAFACIARAFIgBgQIgCgFQgRgBgTAAQgHAAgDgDIgHACIgKgQIAYABQAGgGAIgFIARABQASACAGAEQAJAHgEAHIADAAIAfAIIgCACQAUgLADgPQAGgdAXAIQAKADgJAPQgEAHgHAGIgCAGIAFADQAKAFAIAOQgGALABAOIACAAIgBADQABAJAFAFQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQgCACgEAAIgCAAQgEAGgEAEIgHAGIAJAOQAHALAEABQAGACABAVIgQAAQABgIgCgHQgDgQgLgBQgLgBgJgDQgRAQAXgDQASgDABAGQABADgDAEIgFACQACAEgHACQgMAEgRAPQgFAFgRADQgFAFgQAAIgGAAgAAIAPIABAAIAVAFIgGAFIASAFIAJgDIgGgSgAACABQAFAEgPAGIAEABQACgEAOgIIACgBgAgigHIAdAGIAGABQALgIAIgEQANgIgEAKQgCADgEACIAGgBQABAAAAgFQAAgCAEgCQgFABgDgDQgNgIACgGIgPgGIACALQAEAFgGADQgEACgIgBIgDAAIgLgDIgMgBgAA9gPIADAEQAIgCALABQABgHgGgRQgGgOgEgFIgBgCIgKAXIgKADQAHADACADQgDAAgGAEIgJAFIAHgBIAQACgAAAgoIAIgDIgJAAg");
	this.shape_37.setTransform(19.6,25.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BC6E29").s().p("AgLgGIgJgGIAFABQALABAPAGIAKAKIgIAHIgYgTg");
	this.shape_38.setTransform(2.1,23.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BC6E29").s().p("AAQAQQgOgFgFgGIgCAEIgSgVQAHgDALAAIAJABIgCAHQAIgCAKADIADANQACAJgGAAIgDAAg");
	this.shape_39.setTransform(11.2,31.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BC6E29").s().p("AgPARQgGgBAAgEIABgDIACgBQgEgFAGgGQAIgKAIgDQAGgCAJABQAKABgEAHIgDABQAGAHgHAGQgJAKgIACIgGABIgJgBgAgCABIAAABIAFgCIAAgBg");
	this.shape_40.setTransform(40.7,43.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC6E29").s().p("AgGARQgIgBgFgIIgEgIIgCgKQAAgLADADIAbASIAAAAIAFAAQAJABgGADIANAJQgBAGgMAAQgIAAgLgCg");
	this.shape_41.setTransform(42.9,36.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BC6E29").s().p("AgJAGQACgMAIgEQAJgFgBAIQAAAHgIAHQgFAGgCAAQgDAAAAgHg");
	this.shape_42.setTransform(15.3,32.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BC6E29").s().p("AgGASIgFgQIAAgJQACgKAGgDQALgGADAKQADAKgIATQgEAKgCAAQgDAAgDgFg");
	this.shape_43.setTransform(44,32.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BC6E29").s().p("AgDADQAHgJAAAGQAAADgEAAIgDAAg");
	this.shape_44.setTransform(35.2,43.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BC6E29").s().p("AgCAPIALgKQAIgJgSACQgTABAAgGIADgHQASgHASgCIACAvg");
	this.shape_45.setTransform(43.1,18.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC6E29").s().p("AgmAeQgJgDAKgNQAEgHAHgGIAQgcQAcgKAaAPIgBAFIgVADQgHADgHAEQgNAJgDAKQgGAUgOAAQgFAAgFgCg");
	this.shape_46.setTransform(42.2,29.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BC6E29").s().p("AgcANIgNgNQgEgHAfgDIAygFQASgBggAQQgKAFgHAAQgCAAgBAFQAAAGgJAAQgIAAgNgDg");
	this.shape_47.setTransform(43.7,23.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BC6E29").s().p("AAtAnQgKgGgHgQQgHgPgIAAIgHAEQgPgMgKgMIgfgHIAXgOQAHgDALABQAJABgIAEQgJAFARAFQAPAFANgCQAMgBACAGQACAGgEAHQgDAFAFARQAEAPAEAGQAAABABABQAAABAAAAQABABgBAAQAAAAAAAAIgGgDg");
	this.shape_48.setTransform(34.7,25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BC6E29").s().p("AAUBFQABgGgGgNQgHgPgCgIQgCgJgJAFQgOAGgEgBQgIgCgEgLIgEgJQgHgWACgFIALADQANAEALAAQAKgBgBgIQgCgHgIgFIgXgEQgTgCgPgMQgEgDAKgGQAOgJADgIQAFgLAGAIQAFAJgCAJQgBAIAFAEQAFAEAHgBQAQAAAUAHQAKAEgYAXIADAGQgBAGgMACQgOABAMAFQAKAGARADQANACAAAOQAAAIgDAWQgBAOAGABQAGABACgGQAEgIAFgEQAIgHAEAKQAFALgKAFIgXAIQgEABgEAAQgLAAAAgRg");
	this.shape_49.setTransform(35.2,33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,55.2,63.3), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6E29").s().p("AgBASQgJgEgJgLQgIgKANgHQAGgDAHgCIgCASIAYALQAFAIgLACIgGAAQgGAAgEgCg");
	this.shape.setTransform(92.3,69.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC6E29").s().p("AgQATQgMgBAAgGIA2geQAGgDgHAVQgHARgNABIgQABIgFAAg");
	this.shape_1.setTransform(90.7,61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC6E29").s().p("AgBAJIgLgHIAMgIQAOgHgBAKQgCANgIAAIgEgBg");
	this.shape_2.setTransform(86.1,59.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC6E29").s().p("AgIAGIgMgKIAHgEQAKgDAMACQANACgCAHQgCAEgLAGIgFABQgEAAgGgFg");
	this.shape_3.setTransform(78.3,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E29").s().p("AgBAeIgMgXQgGgJgBgOIgBgNIANABQAMADAEAJQABACALAAQAFAAgKAQIgOAZIgBADIgBAAg");
	this.shape_4.setTransform(75,54.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC6E29").s().p("AgFABQgIgDgFgJIgDgJIAGgFQAHgDAGAJQAGAMASADIgLAfQgFgUgLgGg");
	this.shape_5.setTransform(81.5,58.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E29").s().p("AgIANQgFgUADgJQAEgJALAGQAJAFgDAQQgDAKgEAGQgDAFgCAAQgEAAgDgKg");
	this.shape_6.setTransform(90.2,57.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E29").s().p("AgDgBQAAgGAHAKIgCABQgFAAAAgFg");
	this.shape_7.setTransform(98.3,69.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BC6E29").s().p("AgPAMQAGAAgBgDQgCgIACgLQAEgQAJALQAKALACAMQACAKgMACIgFABQgIAAgHgJg");
	this.shape_8.setTransform(100.2,68.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC6E29").s().p("AgNATIACgLQACgJAEgBQAGgCAJgPIAEALQgIAEgCAMQgBAGAAAGg");
	this.shape_9.setTransform(107.2,56.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E29").s().p("AgvBLIgXgKQgKgGAGgLQAGgLAHAIQAFAFADAJQACAHAHgBQAGgBABgQIgBgfQACgPANgBQASgBALgFQANgGgPgCQgMgCAAgHIADgFIgKgNQgJgMAHgCQAPgEAHAAQAIACAJABQAdAAAJgVIAOAJQAFAEgEACQgQALgUACIgXACQgKAEgCAHQgDAIAMABQARABAUgGQACAGgJAWQgFASgNADQgFABgOgHQgJgGgDAKQgCAHgJAQQgHAOAAAGQgBASgMAAQgEAAgGgCg");
	this.shape_10.setTransform(98.9,60.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC6E29").s().p("AgXAFQgcgMAKgEQAIgEAIAGQAJAHAKgBQANAAAEgCQAEgBACgFQACgFAQAAQAQAAgLAJIgjAYQgOgGgOgGg");
	this.shape_11.setTransform(102.8,65.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC6E29").s().p("AgfAMIAAgLQAAgDAEAAQALgCAPgHQARgIAEAKQAKAVADADIgcgPQgMANgNACIgFABQgFAAgBgEg");
	this.shape_12.setTransform(107.3,61.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC6E29").s().p("AgWAfIgYgDQgMgBAbgPQA2gegMgOIASAKQgBAAACAOQABAIANAHQAJAFgDAAQgPAEgPAAQgIAAgGAFQgKAJgGACIgGABQgEAAgCgCg");
	this.shape_13.setTransform(108.5,69.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC6E29").s().p("AAGAMQgQgQgNgFQgLgDAKgHQAOALARABIACAAQANANAIAMIgGACQgOgFgEgDg");
	this.shape_14.setTransform(112.3,59.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC6E29").s().p("AAEAEQgPgEgIAAIgBgCQgBgCAFgCQAVgOgBAKIAAADQAGACAHAEQAJAFgJAGIgMAFg");
	this.shape_15.setTransform(103.7,24.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC6E29").s().p("AgGAFQgKgHgCgBIAGgDQAJgDALABQANACgCAFQgCAEgKAFIgEABQgEAAgFgEg");
	this.shape_16.setTransform(95.4,16.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BC6E29").s().p("AABAZIgMgTQgGgHgCgNIAAgKIALABQALACAFAHQABACAKAAQAEAAgIANIgMAWIgCACIAAAAg");
	this.shape_17.setTransform(92.4,19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BC6E29").s().p("AgEABQgHgCgFgIIgDgHIAFgFQAGgCAGAIQAGAKAQACIgIAZQgFgQgLgFg");
	this.shape_18.setTransform(98.6,23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC6E29").s().p("AgGAKQgGgQADgHQADgIAKAFQAJAEgDAOQgCAIgEAFQgCAEgCAAQgDAAgDgJg");
	this.shape_19.setTransform(106.6,22.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BC6E29").s().p("AgaABQgMgKARAAIAbgBQAJgBAFABQAJACACAEQADAEgIAFQgFADgRACIgOABQgKgFgGgFg");
	this.shape_20.setTransform(101,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC6E29").s().p("AgLAQIABgJQACgIAEgBQAEgBAJgNIADAJQgHADgBAKIAAALg");
	this.shape_21.setTransform(122.3,21.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BC6E29").s().p("AACAVQgHAAgGgDQgHgEAFgEIAHgOQgVgDgGgIQgDgEAKgBIAbABQAQAAAAAHQAAAEgDADIgFAOIAWgDQAHgDgGAMQgVAGgIAAIgBAAg");
	this.shape_22.setTransform(99.8,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC6E29").s().p("AAKAKQgDgJgLgHIgMgHIgOgCQgNgCADgBQAagNAcAJIANAXIALALQAIALgJACIgJACQgOAAgEgRg");
	this.shape_23.setTransform(108.2,20.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC6E29").s().p("AgDAIQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgHAAgIgEQgbgNAPABIAtAFQAcADgEAEIgMALIgSACQgKAAAAgFg");
	this.shape_24.setTransform(107.5,15.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC6E29").s().p("AgIAXQADgFAFgMQAFgNgDgEQgCgFAAgEQACgFAJABQgFAHAAAJQAAAIAFAIQgHAMgIAEIgFABQgBAAAAAAQAAAAAAAAQAAgBABAAQAAgBABAAg");
	this.shape_25.setTransform(111.7,17.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BC6E29").s().p("AgoA/IgWgIQgJgFAFgKQAFgJAHAHQAFAEADAIQACAFAGgBQAGAAAAgNQgCgTAAgIQABgLAMgCQARgBAKgEQALgFgNgCQgMgCAAgFIADgFIgKgKQgJgKAGgCIAVgEQAGACAJAAQAbABAIgSIAMAHQAGADgEACQgPAKgSABIgVACQgIAEgCAGQgCAHAKAAQAQABASgFQACAFgIASQgDAPgMADQgEABgOgGQgJgFgCAIQgBAGgIAOQgGALAAAGQAAAPgLAAQgEAAgFgCg");
	this.shape_26.setTransform(114.8,24.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BC6E29").s().p("AgVAFQgagKAJgEQAHgDAIAFQAJAGAIgBQAMAAAEgCQAEgBABgEQACgEAPAAQAPAAgKAHIgfAUIgbgJg");
	this.shape_27.setTransform(118.5,28.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BC6E29").s().p("AgcAKQgBgCAAgHQAAgCADgBQALgCANgFQAQgHAEAIQAKASACACIgagMQgLAKgMADIgEAAQgEAAgBgDg");
	this.shape_28.setTransform(122.6,25.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BC6E29").s().p("AgUAaIgWgCQgLgBAYgMIAEgCIABgCIAGgUQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABABIANALQAUgPgIgIIARAIQgCAAADAMQABAHAMAFQAJAEgDABQgNADgJAAIgKAAQADAGABAFQgLACgKgCQgHAEgFAAQgDAAgCgCg");
	this.shape_29.setTransform(124,31.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BC6E29").s().p("AAGAKQgPgNgNgEQgKgDAJgFQAPAJAOAAIACAAIAVAUIgGACQgMgCgFgEg");
	this.shape_30.setTransform(127.1,23.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC6E29").s().p("AACABIgPgEIAAgCQAAAAABgBQAAAAABAAQAAAAABgBQABAAABAAQAMAAAIAHQAHAHgTABg");
	this.shape_31.setTransform(95,1.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BC6E29").s().p("AgRAEIACgEIADgDQAFgDAFAAQAVAAAAADIgjAKIgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBg");
	this.shape_32.setTransform(95.8,5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BC6E29").s().p("AgHACQADgLANAJIgJADIgFABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBABAAg");
	this.shape_33.setTransform(98.7,6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC6E29").s().p("AgFAEQgJgBABgDQABgCAIgCQAEgBAGAEQAGAEACAAQgEACgHAAIgIgBg");
	this.shape_34.setTransform(103.9,9.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BC6E29").s().p("AgGgDQgIgCgEgEQAAgBgIAAQgDAAAGgHIAJgLIACgBIAJALQAFAGAAAJQALACAMADIADAFQgBAFgRgCQgPgCAFAIQAEAEAGAEIgWAGg");
	this.shape_35.setTransform(107.4,10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC6E29").s().p("AAAAFIgFgEIgDgFQgCgFAGADQAVAJgKAFIgBAAQgCAAgEgDg");
	this.shape_36.setTransform(76.4,2.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BC6E29").s().p("AgHADQgFgCAFgCQAEgCAIgBQAKgBgJAKIgFAAQgEAAgEgCg");
	this.shape_37.setTransform(75,4.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BC6E29").s().p("AACAEQgNgCgCgCQgCgDAEAAQALgBALADIAEADQAAADgGAAIgHgBg");
	this.shape_38.setTransform(75,6.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BC6E29").s().p("AAAAFQgFgDAAgEQAAgFAGAFQAFADAAADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_39.setTransform(77.1,5.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BC6E29").s().p("AACAIQgCgDgHgCIgGgCIAHgMIADAFQADAFAEABQAIADACAHQgCACgDAAQgEAAgDgEg");
	this.shape_40.setTransform(101.7,6.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC6E29").s().p("AgDAIQgEgBAAgFIABgDIAFgGQAEgEADAHQADAIgDADQgBADgDAAIgFgCg");
	this.shape_41.setTransform(96.1,6.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BC6E29").s().p("AAPAFQgXABgHgCQgFgBgCgCQgCgCAGgCQAGgCAUAAQAXALgMAAIgEgBg");
	this.shape_42.setTransform(100,7.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BC6E29").s().p("AgCAGQgFgEgBgFQgBgDAIgBQAGgBAFAFQgBAAgBAAQgBAAAAAAQAAAAAAAAQgBAAABABQABACgCAFQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgCAAgCgCg");
	this.shape_43.setTransform(90.1,1.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BC6E29").s().p("AgOABIAIgBQAJgDAHABQAMACgQADg");
	this.shape_44.setTransform(83.9,8.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BC6E29").s().p("AgTAEIAEgBQAFgBAIAAQALABAAgMIALABQgCAIgFAAQgCAAgHAFIgFAFQgKgDgIgDg");
	this.shape_45.setTransform(84.1,6.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC6E29").s().p("AgUABQAFgEAGAAIANAAQALABAHAGIghABQgOAAAFgEg");
	this.shape_46.setTransform(79.4,7.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BC6E29").s().p("AgNAEIgCgDQACgCAMABQASADgRgJIAQgDIgHATQgKgCgMgEg");
	this.shape_47.setTransform(94.3,12.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BC6E29").s().p("AATAMIgTgCQgMAAAAgEIADgEIAEgHIgQABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAABgBIABgDIAWgCQAFABAEACQAFACgEACIgFAHIAIABQAJACACADQACADgFAAIgCAAg");
	this.shape_48.setTransform(100.6,10.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BC6E29").s().p("AgKAMIgJgMIgGgGQgFgGAGgBQAQgCACALQACAHAPAFQAVADgFABQgKACgJAAQgJAAgJgCg");
	this.shape_49.setTransform(94.8,7.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC6E29").s().p("AAXAIIgggFQgTgDADgBIAJgGQAUgBAAAEQAAABAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAFABAGABQAQAIgHAAIgCAAg");
	this.shape_50.setTransform(95,10.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BC6E29").s().p("AgIgEIAIACQAIACABACQAAABAAAAQABABgBAAQAAAAAAABQAAAAAAAAQgEAAgNgJg");
	this.shape_51.setTransform(80.3,8.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BC6E29").s().p("AgUANIgPgHIAVgBQAIgFALgDIADACQAGABAGgGQAJgKAHACQgDACgFAGQgEAGABADQADADgCACQgCADgIgCQgIgBgKABQgMABAGADQAGACgIAAQgGAAgEgCg");
	this.shape_52.setTransform(89.4,9.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BC6E29").s().p("AgkAfQgCgDgIgFQgGgDADgBQALgEANAAIAPAAQAGgBACgDQACgEgIAAQgHgBgJAAIgHABQgBgBADgFIADgEIADgEQAEgEAGAAQADgBAIAEQAGACACgDQABgDAGgGQAGgGAAgCQACgKAMAEIAPAFQAGADgEAEQgEAEgFgDQgDgDgBgDQgBgDgEAAQgFAAAAAGIgBANQgBAGgJAAQgMAAgHACQgIABAJACQANACgIAEQAOALgHABIgYAAQgMgBAAAHQABAEgEADIgEABQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_53.setTransform(90.5,5.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC6E29").s().p("AAQAFQgFgDgGAAQgMgBgCADQgCACgKAAQgKgBAHgDIAXgIQAlAKgKACIgDABQgDAAgEgCg");
	this.shape_54.setTransform(88.3,3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BC6E29").s().p("AgNAEIgGgKIAQAGIAFgBIAMgDQAFAAABACIAAADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgRADIgHABQgFAAgBgDg");
	this.shape_55.setTransform(85.4,4.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BC6E29").s().p("AgUAIQABAAAAgGQAAgCgHgDQgBgBgBAAQgBAAgBgBQAAAAAAAAQAAAAAAAAIATgBQAFAAAEgBQAMgHAFAEQACABAMAAQAHABgRAFQgiAKAGAFg");
	this.shape_56.setTransform(85.2,1.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BC6E29").s().p("AAHALQgHgBADgEQACgDgUgFQgIgBADgDQADgCAHgBQAOgCAOAFQAHACgFALQgFAEgGAAIgCAAg");
	this.shape_57.setTransform(80.1,2.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BC6E29").s().p("AgJAKQgBAAgBAAQgBAAgBAAQgBgBAAAAQAAAAABAAQAHgCACgEQADgDgLgCQgNgDgBgCQgDgFAQADQAPACAEAEQAMAHAGABQAJADgOADIgFAAIgXgBg");
	this.shape_58.setTransform(81.1,5.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BC6E29").s().p("AAFAAQgNABgGACQgFgDAGgDQALgJAOAFQAJACgFAHIgGAIg");
	this.shape_59.setTransform(23.1,20.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BC6E29").s().p("AgNAIIAAgGQAAgGAFgEQATgOAEAFIgKAQIgLAUIgBABQgDAAgDgMg");
	this.shape_60.setTransform(27.3,24.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BC6E29").s().p("AgEAFQgGgJAJgCQADgBAGABQgGAOgDAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_61.setTransform(31.1,23.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BC6E29").s().p("AgNAHQgBgEAEgHQADgFAIABIANABQgCAIgNAGQgFACgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_62.setTransform(39.8,25.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BC6E29").s().p("AgQAFIgDgSQgBgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQACAAARAHQALAFAKAMQgPAIgJgEQgCgBgGAEIgBAAQgDAAgBgLg");
	this.shape_63.setTransform(40.8,21.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BC6E29").s().p("AgDAEQgWgJAQgBQAegCgGANQAAACgFAAQgFAAgIgDg");
	this.shape_64.setTransform(6.3,33.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BC6E29").s().p("AgJAEQACgFAHgHQAFgGADAIQACAFABAEQgIAIgHAAQgIAAADgHg");
	this.shape_65.setTransform(7.8,37.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BC6E29").s().p("AgOAJQgFgCAFgEQAGgFAJgEIAIgDIAIADQAEAFgOAGQgLAFgGAAIgEgBg");
	this.shape_66.setTransform(9.6,40.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BC6E29").s().p("AgIAAQgFgGAMACQAIABADAEQADAEgIABIgCAAQgGAAgFgGg");
	this.shape_67.setTransform(10,36.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BC6E29").s().p("AgTgKIAHAFQAIADAGAAQAKgCAIAHQABACgCACQgDAFgIgDQgGgCgHACIgHACg");
	this.shape_68.setTransform(34.4,22.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BC6E29").s().p("AgFAIIgEgFQgCgFAAgFQABgKAJAIQALAJACAFQABAHgKABIgBAAQgDAAgEgFg");
	this.shape_69.setTransform(29.4,25.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BC6E29").s().p("AgUAOQgEgDADgGQACgFAKgGIAJgHIAQAAQANACgLAHQgUAOgIADIgGABIgEAAg");
	this.shape_70.setTransform(34.2,25.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BC6E29").s().p("AAFALQgJgCgGgHQgEgDAGgGQAHgFAHACQgBABAAABQgBAAAAABQAAAAAAAAQAAABABAAQAEADADAGQADAIgHAAIgDAAg");
	this.shape_71.setTransform(18.8,23.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BC6E29").s().p("AgIADQAHgJAHgEQAOgFgLAPIgWAMIAFgJg");
	this.shape_72.setTransform(20.1,36.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BC6E29").s().p("AAAAIQAHgEgDgKIgEgJIAKgGQAHANgEADQgCACgBAKIgBAKIgWAFQACgGALgIg");
	this.shape_73.setTransform(18.1,33.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BC6E29").s().p("AgVAMQABgKAFgEQADgDALgGQAGgEAJAAIAIABIgeAZQgHAFgDAAQgDAAAAgEg");
	this.shape_74.setTransform(14.5,38.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BC6E29").s().p("AgOAQQgCgEAMgGQAUgIgagBIAMgPIAOAcQgMAFgOADQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_75.setTransform(33.8,33.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BC6E29").s().p("AgGAQIgBgHIgFgLQgJAFgEAFQgEAFgCgLIAHgGQAIgIADgCQAGgDAFAAQAGAAgBAFIADAMIAJgCQAKgDAFACQAFACgHAEIgUALQgHAEgCAAQgBAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAg");
	this.shape_76.setTransform(37.2,27.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BC6E29").s().p("AgSAEQgZgEAIgHQALgNAOAMQAKAIATgDQAVgKgCAFQgQATgUAEg");
	this.shape_77.setTransform(29.1,28.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BC6E29").s().p("AgcAMQAFgKgCgDIAKgHQAJgGADADQAAABABAAQAAABABAAQAAAAABAAQAAAAAAAAQAEgCAIgBQAMgBADABQAEACgFADIgiAOQgNAGgFAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_78.setTransform(32.4,31.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BC6E29").s().p("AgMACIAJgDQAKgDAEADQAHAEgNAAIgRgBg");
	this.shape_79.setTransform(16.7,38.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BC6E29").s().p("AgLAXIAJgXQACAAADAAQAGgDgBgMQgBgMAEgHQAFgHgBAGQAAAFACALQADAMAEACQAFACABADQAAAFgIADQgJAEgJAJQgJAJAHAAQAIgBgHAFQgGAEgFABIgVAAg");
	this.shape_80.setTransform(26.2,33.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BC6E29").s().p("AgBBBQgFgDgNAAQgJAAACgDQAGgNAMgJIANgKQAEgGgBgFQgCgGgGAEQgHAEgIAHIgGAGQgCgBgDgJIgCgIQgEgNAHgFQADgDALgBQAJgBgCgGIgDgRQAAgKgCgDQgJgOAQgDIARgDQAIAAABAHQAAAIgHgBQgFgBgFgEQgEgCgDADQgDADAEAIIANAQQAEAJgHAGQgLAHgEAHQgGAIAKgEQAIgEADADQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAYAFgGAFQgLAMgLAGQgFADgCAEQgBAEADAEQAFAFgBAHQgBAEgDAAIgDgCg");
	this.shape_81.setTransform(23.1,28.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BC6E29").s().p("AgZAOIANgaQAtgLgHAJQgEAFgGAAQgIAAgGAEQgIAFgCACQgCACABADQABADgKAGIgGADQgDAAACgFg");
	this.shape_82.setTransform(19,27);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BC6E29").s().p("AgFAQQgOgJgDAAIAWgCQAEgLAHgHQAEgEADACIAEAGQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgHAFgHAJQgGAIgEAAIgDgBg");
	this.shape_83.setTransform(16.9,30);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BC6E29").s().p("AgIAUQgDgEgLABQgGABABgCQAIgHAJgGQAFgDACgEQAGgQAHABIAPgHQAHgEgLARQgVAkALADIgOACQABgBgGgHg");
	this.shape_84.setTransform(13,25.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BC6E29").s().p("AAKAMQgCgHgZAIQgJADAAgFQABgFAGgGQAFgEAKgFQAIgFAHgBQAIgCAIASQAAAKgIAEIgFABQgEAAAAgEg");
	this.shape_85.setTransform(10.4,31);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BC6E29").s().p("AgCAPQAEgIgCgHQAAgGgNAFQgPAFgEgCQgIgEATgHQARgHAHABQAQADALgCQAKgDgJAOQgDAEgZANIgFACQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_86.setTransform(13.7,34.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#BC6E29").s().p("AAEAAIgRADIgCgCQgBgBADgDQAKgIANAFQANADgNAMg");
	this.shape_87.setTransform(66.4,21.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BC6E29").s().p("AgKAHIgBgGQAAgFAEgDQAPgOAEAFIgPAhIgBABQgCAAgEgLg");
	this.shape_88.setTransform(70.5,24.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BC6E29").s().p("AgDAFQgHgJAIgCQADgBAGABQgEANgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_89.setTransform(74.1,24.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BC6E29").s().p("AgLAGQgBgDADgGQACgFAIABIALABQAAAHgMAFIgHACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_90.setTransform(82.3,25.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BC6E29").s().p("AgOAEIgFgQQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIASAHQALAEAKAKQgMAJgJgFQgCAAgFAEIgBAAQgDAAgCgLg");
	this.shape_91.setTransform(82.9,22.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BC6E29").s().p("AgCAEIgJgEQgHgEAJgBQAbgCgDAMQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgMgCg");
	this.shape_92.setTransform(52.2,33.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BC6E29").s().p("AgIAEQABgEAGgHQAGgIAFARQgHAIgGAAQgHAAACgGg");
	this.shape_93.setTransform(54.2,37.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BC6E29").s().p("AgTgIIAHADQAIADAFAAQAKgBAIAFQACALgMgFQgGgCgGACIgHACg");
	this.shape_94.setTransform(77,22.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BC6E29").s().p("AgEAIIgEgFQgCgFgBgEQAAgJAJAHQALAIADAFQACAHgKAAIgBAAQgDAAgEgEg");
	this.shape_95.setTransform(72.8,26.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BC6E29").s().p("AgRANQgEgCACgGQABgEAJgGIAIgHQAhgBgQAKIgQAKIgIAFIgGABIgDAAg");
	this.shape_96.setTransform(77.1,25.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BC6E29").s().p("AAFAKQgIgCgGgGQgFgDAFgFQAGgFAHACQgBABAAABQgBAAAAAAQAAABAAAAQAAABABAAQAEADAEAFQADAHgFAAIgEAAg");
	this.shape_97.setTransform(62.8,24.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BC6E29").s().p("AgHACQAFgIAGgDQAMgFgIAOIgSALg");
	this.shape_98.setTransform(65.4,36.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BC6E29").s().p("AgJARQAEgFAFgEQAKgIgMgOIAIgFQAIALgDADQgCACAAAJIAAAKQgKADgKABg");
	this.shape_99.setTransform(63.3,33.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BC6E29").s().p("AgNAOQgCgDALgGQARgHgYgBIAKgNIAPAaQgKAEgNADQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_100.setTransform(77.9,33.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BC6E29").s().p("AgEAOIgCgGIgGgKQgHAFgDAEQgDAFgDgKIAFgGQAHgHADgBQAEgDAFAAQAFgBAAAFIAEALIAIgCQAJgDAFACQAFACgGADIgRAKQgGAEgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_101.setTransform(80.2,27.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BC6E29").s().p("AgPAEIgLgDQgKgDADgFQAKgMAOAMQAJAHASgDQATgJgCAEQgJARgVAFg");
	this.shape_102.setTransform(72.7,28.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BC6E29").s().p("AgZAKQAEgIgCgDIAIgGQAIgGADADQAAABABAAQAAABABAAQAAAAABAAQAAAAAAAAQADgCAIgBQALgBADABQAEABgFADIgdANQgMAGgEAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_103.setTransform(76.1,31.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#BC6E29").s().p("AgLACIAJgCQAIgDAEACQAHAEgNAAIgPgBg");
	this.shape_104.setTransform(62.4,38.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BC6E29").s().p("AgKAVIAGgVIAEAAQAFgDgCgLQgCgLADgGQAEgHAAAGQAAAEADAKQAEALAEACQAFADABACQABAEgHADQgJAEgHAIQgGAIAGAAQAGgBgFAEQgEAEgGABIgTABg");
	this.shape_105.setTransform(70.9,32.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BC6E29").s().p("AAEA7QgEgDgMABQgIAAABgDQAEgMAKgIIALgJQADgGgCgEQgCgGgFAEQgGAEgHAGIgFAGQgCgCgDgIIgDgHIgCgHQgBgGAEgEQACgCALgBQAHgBgCgGQgCgEgCgLQgCgJgCgDQgKgMAPgDIAPgDQAHAAACAHQACAMgRgKQgDgDgDADQgEACAHAIIAMAPQAFAIgGAFQgIAIgEAFQgFAIAJgEQAHgEADADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAWAFgEAFQgJAKgKAGQgEACgCAEQgBAEAEAEQAFAEAAAGQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAIgFgCg");
	this.shape_106.setTransform(67.3,28.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BC6E29").s().p("AgWANIAJgYQAogKgFAJQgDAEgGAAQgHAAgFADIgIAHQAAAAgBAAQAAABAAAAQAAABAAABQAAAAAAABQABAEgIAFIgFACQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_107.setTransform(63.3,27.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#BC6E29").s().p("AgCAPIgRgJIAUgCIABgFQADgHADgEQAEgEADACIAFAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgGAFgFAIQgFAIgEAAIgCgBg");
	this.shape_108.setTransform(61.7,30.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BC6E29").s().p("AABAZIAAAAgAgEATQgEgFgJABQgGABABgBQAGgHAIgFQAEgDACgDQADgPAHAAQADABAKgHQAGgDgIAQQgRAgAMADIgNABIgFgGg");
	this.shape_109.setTransform(57.5,26.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BC6E29").s().p("AAJALQAAgDgIABQgGAAgKADQgIADAAgFQgBgEAGgGQAEgDAIgFQAIgFAFgBQAIgBAJAQQABAJgHAEIgFABQgDAAgBgEg");
	this.shape_110.setTransform(55.8,31);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BC6E29").s().p("AAAAOQADgHgCgGIgMgCIgKADQgFABgDgBQgHgEAQgGQAPgHAHABQAQADAJgCQAJgCgHAMQgCADgJAFQgDADgKAFIgFACIAAgBg");
	this.shape_111.setTransform(59.2,34.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#BC6E29").s().p("AgKAHIABgFIADgFQAEgHAGgCIAHgBIgUAbQgBgCAAgFg");
	this.shape_112.setTransform(105.5,29.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BC6E29").s().p("AgTADQABgDAJgGQAGgEAJAFIAOAFQgGAHgTABIgDAAQgLAAAAgFg");
	this.shape_113.setTransform(120.8,35.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#BC6E29").s().p("AgLACIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABIAEgBIADABIgBgHIgCgBIACgBIABgGQABgJAFABQAEABAGAHQAJAEAEAHQgBADgEACQABAFgGACQAHAFgOACQgfAHgJAAIARgVg");
	this.shape_114.setTransform(115.4,31.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BC6E29").s().p("AABALQgJgFgEgIQgCgGAKgDQAJgDAIAFQgBABgBAAQAAAAgBABQAAAAAAAAQgBABABAAQADAFAAAHQgBAHgEAAQgDAAgEgCg");
	this.shape_115.setTransform(96.9,26.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#BC6E29").s().p("AgUBXIgHgRIgBABIggAEIAKgIQAMgHALAAQAIgBAAADQAAACgEADIAQAHIAEgEIAKgHQgDAAgDgDQgDgGgOgEQgLgDAEgDQANgKARgEIAVgFQAIgFABgFQABgGgLABQgKABgMAEIgJAEQgCgDACgNQgNAKgHAHQgBAHgDACQAAABAAAAQAAABABABQAAAAAAABQABAAAAABIgFgDIgOATIgIAAIgBAIQgHALgLgBQgLAAADgIIAAgDIgyAOQAFgKACgJIAQgCQAMgBAMAFQgIgGgTgEQgNgDAFgGQADgFALgDIACAAIAAgDQACgGgKgBIgTAAQgDgFgGgEQAHgDASABQASABAFADQASAJAMABQALACgKAGQAEADABAIIADAAQAKgCACgJIgDgCQABAAgCgMQAAgEgEgDQgGACgDgDIgFgGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAABAAQgDgFgHgEIAYAGIAFgBQAJgKAKgDQAIgCACADQAMgJAFAGQABABAHAAIAFAAQANgBgCADQALACAAgHQABgGAFgLQAFgLgBgEQgCgGADgEQAEgFALACIAaAEIASgKIAcgOQAGgDgGASQgGAPgMABQgSABgGgBIAAADQgEAIgIgEQgFgDgEgFQgDgEgGABQgGACADAKIAGAVQABAKgMADQgQAEgKAFQgLAFAOAAIAKAAQAAgGALgBQAKgCAHAIQgFABABABQADAHgCAJQgBANgKgHIgFAFIgDABQAkANgJAEQgHAEgIgFQgJgFgJABQgNABgEACQgDABgCAEQAAACgHACQgBAFgCADIAFgCQAIgCACAEIAAAKQABAEgEABQgKACgNAHQgJAEgFAAQgEAAgCgCg");
	this.shape_116.setTransform(96,32.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BC6E29").s().p("AgPAOIACgHIAAgNQgNADgIADQgEABAAgDIAAgGIANgFQANgEAFgBQAHgBAGACQAIACgEAFIgCANIAMABQANABAFAEIABABIgkAIIgHABQgKAAgBgFg");
	this.shape_117.setTransform(116.5,36.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BC6E29").s().p("AgkAIIAcgVQA6AGgNAHQgGACgIgCQgKgCgIABQgLABgEACQgDACgBADQgBAEgPACIgFABQgHAAAGgGg");
	this.shape_118.setTransform(95.5,29.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BC6E29").s().p("AgTAUQABgBgDgIQgDgGgMgDQgIgBADgBQANgEANgCQAHgBAEgEQAPgOAIAEQADABARgDQALgBgVANQgrAbALAIg");
	this.shape_119.setTransform(89.5,26.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BC6E29").s().p("AgFALQACgFgQgCIAMgUQALgBAGACQAKABAAAVQgGAJgLABIgBAAQgJAAACgGg");
	this.shape_120.setTransform(84.8,30.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BC6E29").s().p("AAAAMQgJgGgDgIQgDgGALgDQAKgEAIAGQgCAAAAABQgBAAgBABQAAAAAAAAQgBABABAAQACAGgBAHQgBAHgFAAQgDAAgCgCg");
	this.shape_121.setTransform(52.1,36.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BC6E29").s().p("AgDgBQAGgCABAEQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgCAAgEgDg");
	this.shape_122.setTransform(53.9,35.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BC6E29").s().p("AgkAIIAegVQA5AGgNAHQgHADgIgDQgJgCgIABQgLABgFACQgDACgBADQgCAEgOADIgFAAQgIAAAHgGg");
	this.shape_123.setTransform(50.2,39.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BC6E29").s().p("AgQALQgKgOgDgBIAaAGIAGgFQAJgHAHgCQAIgDACADIABAIQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAQgLACgNAHQgIAFgFAAQgEAAgCgDg");
	this.shape_124.setTransform(46.3,42);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BC6E29").s().p("AgXAVQABAAgCgKQgCgGgLgCQgIgCADgBQAOgEAMgCQAHgBAFgEQAQgPAIAEQADACARgEQALAAgXANQguAcALAIg");
	this.shape_125.setTransform(44.8,36.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#BC6E29").s().p("AgFALQACgFgQgCIAPgUQAJgBAHABQAKACgDAVQgGAJgLABIgCABQgIAAADgHg");
	this.shape_126.setTransform(39.4,40.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BC6E29").s().p("AAFAAQgQgCgIgBIgBgDQAAgDAGgBQAIgCAGAAQAJABAJAHQAIAFgKAHIgMAFg");
	this.shape_127.setTransform(74.9,39.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#BC6E29").s().p("AgDgBQAGgCABAEQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgCAAgEgDg");
	this.shape_128.setTransform(69.6,40.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#BC6E29").s().p("AgKAAQAMgHALAAQATAAgVALIggAEg");
	this.shape_129.setTransform(61.7,55.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#BC6E29").s().p("AgSgIIAQgCQAPgCAOAJQgoAMgNACQAGgLACgIg");
	this.shape_130.setTransform(55.2,54.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BC6E29").s().p("AAzBIQgDgNgTgMIAAAAIABACIgeAHIgEABQAEAGgJAHQgFADgSACIgRABIgPgKIgYAAIAKgOIAIACQABgDAJAAQASAAARgBIACgFIACgOIgRAEIgFACQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQgIAAgGgEQgGgEAFgFIAIgSQgXgDgFgJQgDgEAEgBQADgBAKABQgTgCgDgHQgDgGAGgBQASgFARAFIAGAIQADAIgPAAIAXACIACgDQAJgOAPgBIADgDIAHACIABAAQAKABALAGIAEgVIgVAAQgJAAADgCQAJgGADgJQAEgKgRgCQgUgDgDgFQgDgGAJgBIgFgDIALABQANABADADQAQADAGAFQAQAOANAEQAHACgCADIAFACIACAGQgBAFgSgCQgXgDASAPQAGgCANgCQALgBADgOIABgOIARAAQgCATgGACQgDABgIAKQgGAJgCAEIAGAGIAIAJIADAAQAEAAABACIAFAAQgEAEgCAJIABADIgBAAQgBANAFAKQgIANgJAFIgGACIADAGIAKANQAJANgKADIgJABQgQAAgEgUgAAwAVIAJAEQgDADgHACIAKADIAKAWIACgCQAEgFAFgNQAGgPgBgHQgKABgJgCIgCADQgPADgJgCIAKAFgAAIAqIgIgDIAAACIAIABgAAAATQAGACgEAFIgCAKIAQgGQgDgEANgIQAEgDAEABQgEgCABgCQAAgFgBAAIgGgBQAEACABADQAEAJgNgHQgJgFgJgHQgCABgFABIgdAGIgEAMIAMgBIALgDIADAAIADAAQAGAAADACgAAtgHIAGgRQgEAAgFgDIgRAGIAGAEIgWAFIgBAAg");
	this.shape_131.setTransform(87.9,49.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#BC6E29").s().p("AgOgEIANAAQAMABADAEQADAEgEAAQgGAAgVgJg");
	this.shape_132.setTransform(56.4,56.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#BC6E29").s().p("AgoBHQgEgGgOgEQgLgEAEgDQAPgLASgEIAWgFQAJgFABgGQABgHgLACQgKABgMAEIgLAEQgCgCABgEIgTABQgBAPgFABQgDACgIAKIgHALQgRgBgNgEIAGgDQAHgDALgCQAMgCACgMIAAgMIAEgBIAKgMIAJACIANAEIADgKIABgEIAEgGQgBgCABgDIABgDIAMgFQAOgFAFgBQADgBAGABIAHgPIgSADQAHADgDADQgHADgGgBIgLgDIgKABIABgBQgNACgEACQgDACgBADQgCAEgPADQgOACAJgIIAegXIAVADIAGgGQgMgGgEgKQgCgHALgDQALgDAIAGQgFABABACQACAFAAAIIADgBIAJAEQAKAEADADIAAgGIAAgDQgCAAgFgDQgFgFgIgCQAFgGAGgEIACABQAIACAGAGQAEgCAIABIAQACQAIACADACIAEgLQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAQAPIAHAIQAGgFAOgFQAOgFgKAaQgKADgIgCIABAHQgRADgKgFIgKAMIAGACQgDAEgKADIgEAFIAAgEIgKABQgJAAgDgCIgGACIgLADIgBAEIAMABQANAAAFAEIABACIgeAGIgCAEIAGAEIAJAIIgJAKQgSAGgIAAQgUADAFALQACAHgFAHQgCADgDAAQgCAAgDgEgAAhg5QgGABABALIADANIACALIAEgDQAGgEAKAFQAEgJAJgCQgCgCgJACQgFABAFgLQgIgBgGgJQgCgEgDAAIgDABg");
	this.shape_133.setTransform(70.1,47.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BC6E29").s().p("AgQAMQgLgPgDgBIAbAGIAGgFQAJgHAHgDQAIgCACADIABAIQABADgEABQgKADgOAHQgIAFgFAAQgEAAgCgDg");
	this.shape_134.setTransform(62.1,47.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BC6E29").s().p("AgWAbQABAAgDgLQgBgGgMgDQgIgCACgBIAfgGIABgLIAEgHQAFgHAGgCIAIgBIgWAbQADgBADgDQARgPAHAFQADABASgDQALgBgXAOQguAcALAJg");
	this.shape_135.setTransform(60.3,41.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#BC6E29").s().p("ABEBTQAIgGADgEQgUACgJgJQgCgBgLABQgFABAIgQIALgYQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAIABABIACgDIgGABQgHABgFADQgFADACAGQACAHgFAHQgGAGgFgHQgDgGgMgEQgCAEgEABQgGACgGgGIgIgFIgDAEQgQgBgMgDIAMgGIAEgMIgFADQgDACgLABIABABQgbAWAAgNIABgHIgDABQgKABADgCQAKgGADgIQADgIgRAAIg0AgQgHAEAGgTIAFgIQAGgIAJgCIASgDIgFgFQAHgDASACQARABAFADQARAIALACIACAAIABgEIAEAGQAFAHAGADQAGgHgCgMIAPgBQgBAPgFACQgCABgFAFQAIACAEAFQAOgJASgDIAUgFQAIgFACgGQACgFgLABQgKABgNADIgLAEQgBgCADgJIAGgRQAEgIAHgDQAFgBANADQAKADACgIIABgCQgBgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBIACgBIAHgOQADgHAAgDIAAgFQgGgDgBgDQgBgEAIACIAEABQAEgEAKABIARADQAIABADADQAJgDAKACIgaAXQgMAKAAgJQgBgIAEgFIgFgGQgCgFgGACQgGABABALIACAKQAHADgGAFQADAOgOADQgRAFgLAFQgLAGAOAAQAMgBABAFQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAIAMAJIABAAQAKACgCAXQgGAKgLAAQgLABACgHQACgEgNgDIAOAOIAHAIQAMABAEADQASAKAMABQAOACgTALQgGADgkAEIgGAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBABAAg");
	this.shape_136.setTransform(47.6,44);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#BC6E29").s().p("AAEAAQgQgDgJAAIgBgEQAAgDAHgCQATgEAPALQAJAGgMAHQgGAEgIACg");
	this.shape_137.setTransform(33.7,39.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#BC6E29").s().p("AgWAEQACgEALgHQAIgFAJAGQANAGACAAQgJAJgWABIgCAAQgNAAABgGg");
	this.shape_138.setTransform(50.3,52.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BC6E29").s().p("AgIADQgFgEgCgFQgFgJAMAEQAlAKgRANIgDABQgGAAgLgKg");
	this.shape_139.setTransform(3.8,47.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BC6E29").s().p("AgLAKQgJgDAIgHQAHgEAOgGQAKgEgCALIgFALQgJAEgHAAIgHgCg");
	this.shape_140.setTransform(2,52.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BC6E29").s().p("AgXAEQgDgEAHgDQATgGATACIAGAHQABAHgWABIgHAAQgQAAgEgEg");
	this.shape_141.setTransform(2.4,56.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BC6E29").s().p("AABAJQgJgCgBgKQgBgKALAHQAJAGAAAFQAAAFgFAAIgEgBg");
	this.shape_142.setTransform(5.6,52.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#BC6E29").s().p("AgXASQgGgCgCgIIAAgIQADgHAEgGQAIgLAFANIADAHIALgCQAQgCAMAIIglALQgCAIgIAAIgHgBg");
	this.shape_143.setTransform(38.7,48.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#BC6E29").s().p("AgrAFIAIAAQgBgDAHgEQAJgGAggGIASAHIAGgBQASAAgVALIgFABIgBAAIgpAIQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQgGAAgVgKg");
	this.shape_144.setTransform(43.3,49.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#BC6E29").s().p("AgDgBQAHgCAAAEQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgCAAgEgDg");
	this.shape_145.setTransform(27.8,40.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#BC6E29").s().p("AgBANQgKgGgDgJQgCgHAMgEQALgEAIAHQgFABABACQACAGgCAJQgBAIgFAAQgDAAgDgDg");
	this.shape_146.setTransform(25.9,41.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#BC6E29").s().p("AgKAAQAOgHANgBQAMAAgHAHQgEACgGAEIgjAEIANgJg");
	this.shape_147.setTransform(17.4,56.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BC6E29").s().p("AgeASIAFgDQAJgFANgBQALgCAFgOIABgMIASgDQgCATgHACQgFABgJALIgJALQgRAAgNgEg");
	this.shape_148.setTransform(17.3,52.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#BC6E29").s().p("AgiAGQAIgKAKgDQAGgDAQgCQASgBANAKQgoALgPADIgNACQgIAAAFgHg");
	this.shape_149.setTransform(9.7,56);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#BC6E29").s().p("AgUASQgDgDAAgDQABgFAUgBQAUgBgJgHIgLgHIAagLIgFAoIgGABQgPAAgSgDg");
	this.shape_150.setTransform(35.3,60.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BC6E29").s().p("AgTARIAEgIIADgQQgPADgJAEQgJAEAGgNIAOgGQAQgGAGAAQAJgBAGACQAIACgGAGIgFARIANAAQAPACAEAEQAFAFgMACIgiAEIgIAAQgKAAgBgFg");
	this.shape_151.setTransform(45.2,53.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#BC6E29").s().p("AgOAYIgRgXQgHgDgFgFQgJgKAJgEQAZgKAHAVQAFANAaAGQAigCgGAEQgZAOgYAAIgNgBg");
	this.shape_152.setTransform(35,51.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BC6E29").s().p("AgsAHQAOgHABgGIARgEQAPgDABAGQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQAIgBAKADQAiAIgTADIg2ACIgMAAQgVAAAEgFg");
	this.shape_153.setTransform(36.1,56);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BC6E29").s().p("AgPgFIAOAAQANACADAEQADAFgEAAQgHAAgWgLg");
	this.shape_154.setTransform(11.6,58.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BC6E29").s().p("AgfAnIgZgJIAigKIATgQIAJgHIAHACQAJgBAJgOQAIgOAKgGQAMgHgGAHQgEAFgGAOQgGAQADADQAFAFgDAFQgCAGgNAAQgOAAgRAHQgTAGAKADQAKACgLADIgMABIgHgBg");
	this.shape_155.setTransform(26.6,55.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#BC6E29").s().p("AgyBJQgEgGgPgFQgKgFAEgDQARgMAVgEIAZgGQAJgFADgHQABgHgLABQgLABgPAFIgMAEQgBgDAEgLIAEgKIADgIQAGgJAIgDQAFgBAPADQAKADACgIQACgHAIgOQAHgMAAgFQAAgTAWADIAYAEQAKAEgFAJQgFAKgIgFQgGgEgDgGQgDgFgGACQgHACABAMIACAZQgBALgOAEQgTAEgLAHQgNAGAQgBQANAAAAAFQAAACgDADQAZARgLAEQgXAJgRACQgUACACANQACAIgGAHQgDAEgDAAQgDAAgCgFg");
	this.shape_156.setTransform(27.3,48.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BC6E29").s().p("AgoAJIAjgYQA+AHgPAIQgIADgIgDQgKgDgJACQgNACgFACQgEABgBAEQgCAFgRACIgGABQgHAAAIgHg");
	this.shape_157.setTransform(23.5,44.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BC6E29").s().p("AgUANQgKgQgCgCIAdAHIAHgGQAKgHAIgDQAJgDACAEIAAAJQAAADgEABQgLADgQAIQgJAFgGAAQgFAAgCgDg");
	this.shape_158.setTransform(18.9,48.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#BC6E29").s().p("AgcAYQABgBgCgKQgBgHgMgDQgJgDADAAQAPgFAPgCQAIgCAGgEQATgQAIAEQADACAUgEQAMgBgaAQQg2AfALAJg");
	this.shape_159.setTransform(17.7,42);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#BC6E29").s().p("AAGANQACgEgJgDQgJgDgPgBQgNAAAEgGQAEgFAMgEQAKgDAOgCQAPgBAIABQALACgFAYQgIALgMABIgDAAQgJAAADgHg");
	this.shape_160.setTransform(9.9,46.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#BC6E29").s().p("AgUASQALgHAEgIQAEgIgTAAQgWgBgDgEQgFgJAaAAQAZAAAJAFQARALANACQAJABgEAEIgLAIQgHADgnAFIgFAAQgBAAgBAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_161.setTransform(12.1,51.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#BC6E29").s().p("AAAAQQgJgDgIgKQgFgFAEgFIgCAAIgBgEQAAgEAGgBQAJgBAGACQAIACAJAJQAHAGgGAGIADABQAEAGgKACIgGAAIgJgBgAgDAAIAGACIAAgCIgFgCg");
	this.shape_162.setTransform(109,32.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#BC6E29").s().p("AgZALIACgKIAEgHQAFgIAIgBQAOgCAGAAQALAAABAGIgNAIQAFADgIAAIgFABIgBAAIgaARIgBAAQgCAAAAgHg");
	this.shape_163.setTransform(111.3,39.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#BC6E29").s().p("AgLAEQAAgPALADQAGABAGAFQgNAMgGAAQgEAAAAgGg");
	this.shape_164.setTransform(116,41.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BC6E29").s().p("AgHAKQgOgBABgHQABgFAKgGQAHgEAJAIIAOAJQgGAHgOAAIgIgBg");
	this.shape_165.setTransform(125.1,48.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BC6E29").s().p("AgIARQgCgCgLABQgFAAAHgQQAGgOADgLQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAQAWQAMANADAWIgFAAQgTAAgIgMg");
	this.shape_166.setTransform(128.1,45.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BC6E29").s().p("AgHADIgHgKQgEgLALAFQAiAQgPAMIgDABQgFAAgLgNg");
	this.shape_167.setTransform(81.7,36.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#BC6E29").s().p("AABAKQgIgEgBgLQgBgLAKAKQAIAGABAHQAAAFgEAAIgFgCg");
	this.shape_168.setTransform(83.6,43);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#BC6E29").s().p("AAEASQgEgHgLgDIgKgDIAFgcIAGAJQAHAKAHAEQANAEAGAOQgCAEgEACIgDAAQgFAAgFgGg");
	this.shape_169.setTransform(120.8,41.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#BC6E29").s().p("AgDATQgGgCgBgKIgBgIIAGgOQAFgMAGAQQAIASgDAJQgBAFgGAAQgDAAgEgCg");
	this.shape_170.setTransform(112.3,42.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#BC6E29").s().p("AgUANQgJgBgDgFQgEgGAIgFQAIgGAegCIASALQAPAKgSABIgdADIgLAAIgFAAg");
	this.shape_171.setTransform(118.5,44.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#BC6E29").s().p("AgDgCQAHgBAAAEQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgCAAgEgFg");
	this.shape_172.setTransform(103.5,32.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BC6E29").s().p("AgRAOQgEgEABgDQABgGASACQASACgIgJIgLgJIAYgJIgDAsQgRgCgTgGg");
	this.shape_173.setTransform(111.4,55.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#BC6E29").s().p("AgRARIADgJIACgRQgPABgIAEQgFACABgGIABgHIAOgEQAOgFAFAAQAIAAAGADQAIAEgFAGIgEARIAMADQAOADAFAGQAEAGgLAAIgfABIgBAAQgRAAAAgIg");
	this.shape_174.setTransform(120.4,49.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#BC6E29").s().p("AgNAaIgQgaIgLgMQgKgMAJgDQAWgHAIAXQAFAPAZAKQAgACgGAEQgRAKgSAAQgKAAgNgEg");
	this.shape_175.setTransform(110.8,45.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#BC6E29").s().p("AgOAKQgfgCAEgHQAMgHABgFIAPgCQAPgBAAAFQABAFACAAQAHAAAKAEQAfAPgRAAg");
	this.shape_176.setTransform(112.1,50.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#BC6E29").s().p("AgbAlIgXgNIAfgHQAKgLAPgLIAHAEQAIAAAHgOQAHgPAKgGQAKgGgFAHQgEAFgEAPQgFAQADAFQAEAGgCAFQgCAGgMgBQgNgCgQAFQgQAFAJAEQAIAEgJABIgGABQgHAAgFgDg");
	this.shape_177.setTransform(103.1,49.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BC6E29").s().p("AgrBLQgEgHgOgIQgKgGAEgDQAQgMATgCIAWgDQAJgEABgIQACgHgLAAQgKgBgNAEIgLADQgCgDADgMIAHgTQAEgJAIgCQAFgCAOAHQAJAEACgJQABgHAHgOQAGgMgBgGQgBgWAVAHIAWAIQAKAFgFAJQgEAKgIgGQgFgFgDgHQgDgGgFABQgHABABAOIADAcQAAAMgMACQgSADgKAGQgLAEAOACQAMABAAAGQAAADgCACQAYAWgKADQgWAHgOgBQgIAAgEADQgGAEACAIQACAJgGAHQgCADgCAAQgDAAgDgFg");
	this.shape_178.setTransform(103.5,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0.1,130.6,72.9), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CE8B").s().p("AgOAQQgMgHAHgLQAJgMAJgEQAGgDAKABQALABgEAJIgZAMIADATQgIgBgGgEg");
	this.shape.setTransform(32.5,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CE8B").s().p("AAaAUIg2ggQgBgHANgBQAGAAAPABQANACAHARQAHAVgFAAIgBgBg");
	this.shape_1.setTransform(31,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CE8B").s().p("AABAIIgNgIIAMgJQALgEACASQABAGgFAAQgDAAgFgDg");
	this.shape_2.setTransform(26.3,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7CE8B").s().p("AgNAKIgHgEIAMgLQAIgIAHAEQALAGACAFQACAHgOACIgIABQgHAAgGgCg");
	this.shape_3.setTransform(18.5,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CE8B").s().p("AgUAhQgCgYAJgPQALgXACgCQAAgBAAAAQAAAAAAABQAAAAABABQAAABABABIAOAcQAJARgFAAQgKAAgBACQgHAOgVAAIgBAAg");
	this.shape_4.setTransform(15.1,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7CE8B").s().p("AgPAcIgFgFIACgJQAFgKAIgEQALgHAFgVIAKAhIgJADQgKAFgEAIQgEAIgGAAIgDgBg");
	this.shape_5.setTransform(21.7,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7CE8B").s().p("AgKASQgDgKAFgVQAFgSAHANQAEAGADAKQAEASgKAGQgEACgDAAQgFAAgDgGg");
	this.shape_6.setTransform(30.4,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CE8B").s().p("AgDACQAAgFAHAAQgEAHgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_7.setTransform(38.5,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CE8B").s().p("AgKANQgCgNACgIQABgDgGgBQAIgLAMACQAMADgCAKQgCAOgKALQgDAFgDAAQgFAAgCgJg");
	this.shape_8.setTransform(40.5,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7CE8B").s().p("AgEAEQgEgBgDgLIgCgLIAQgBIABANQACANAIAEIgEALQgLgQgDgBg");
	this.shape_9.setTransform(47.4,17.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7CE8B").s().p("AAWA9QgHAAgKADQgOgCgIgDQgHgCAJgNIAKgOQgCgDgBgDQAAgHANgCQAPgCgNgGQgLgGgTgBQgNgBgCgQQACgVgBgNQAAgRgHAAQgGgBgCAHQgDAJgFAGQgIAIgGgLQgGgMAKgHIAYgLQAVgKABAbQAAAHAIAPQAIARACAIQADALAKgGQAOgIAFABQANADAEATQAJAYgCAGQgTgGgRABQgMABACAJQADAHAJAFIAXACQAUACARAMQADACgFAEIgNAKQgLgXgcABg");
	this.shape_10.setTransform(39.1,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7CE8B").s().p("AARANQgCgFgEgCQgEgBgNgBQgKAAgJAHQgIAGgIgEQgKgEAcgNQAOgHAOgGIAkAaQAKAJgQAAQgQAAgCgFg");
	this.shape_11.setTransform(43,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7CE8B").s().p("AgBANQgPgHgMgCQgEgBAAgDIABgMQACgFAIACQANADAMAMIAdgPQgDADgKAXQgDAGgGAAQgFAAgHgEg");
	this.shape_12.setTransform(47.5,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7CE8B").s().p("AgfgMQgbgQAMgCIAXgDQAIgIAUATQAGAFAIABQAPAAAQAEQADAAgJAFQgNAHgCAKQgBAPABAAIgSALQAMgQg2ggg");
	this.shape_13.setTransform(48.8,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7CE8B").s().p("AgYAKQAMgEASgSQAEgEAOgFIAGADIgVAbIgCAAQgRAAgPANQgKgHALgFg");
	this.shape_14.setTransform(52.6,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7CE8B").s().p("AgQAIQgFgCABgDIABgCQAIgBAQgDIAAgMIAMAFQAJAHgJAFQgGAEgHADIAAACQABAFgEAAQgFAAgMgIg");
	this.shape_15.setTransform(43.9,52.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7CE8B").s().p("AgMAIIgGgEIAMgIQAGgHAHADQAKAGACADQACAGgNACIgIABQgGAAgGgCg");
	this.shape_16.setTransform(35.5,60.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7CE8B").s().p("AgTAbQgBgTAJgNQALgTABgCQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAMAXQAIAOgEAAQgKAAgBACQgHALgTAAIgBAAg");
	this.shape_17.setTransform(32.6,57.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7CE8B").s().p("AgOAXIgFgFIADgHQAFgIAHgDQAKgGAGgRIAIAbIgJADQgJAEgEAGQgEAHgFAAIgDgBg");
	this.shape_18.setTransform(38.8,53.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7CE8B").s().p("AgJAQQgDgJAFgRQAFgQAGALQAEAFACAJQADAPgJAEQgEADgDAAQgEAAgCgFg");
	this.shape_19.setTransform(46.8,54.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7CE8B").s().p("AAGAMIgbgCQgRAAAMgKIAQgLIAOABQARACAFADQAIAFgDAFQgCAFgJABIgIABIgGAAg");
	this.shape_20.setTransform(41.1,56.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7CE8B").s().p("AgEADQgEgBgCgIIgBgKIAPgBIAAALQABALAHAEIgDAJQgJgNgEgCg");
	this.shape_21.setTransform(62.5,55.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7CE8B").s().p("AghARQAEgFAMgDIALgDIgHgPQgFgFAHgEQAGgDAHAAQAHgBAYAHQAFANgHgDIgWgEIAFAQIADAHQAAAIgRAAIgaABQgKgBADgFg");
	this.shape_22.setTransform(39.9,61.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7CE8B").s().p("AgoAVQgEgCANgDIAOgCQAWgJAEgPQAHgXAVAHQANAEgXAWIgOAYQgMAFgLAAQgQAAgOgIg");
	this.shape_23.setTransform(48.5,56.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7CE8B").s().p("AgUAAQAJgDAHgBQAAAAAAAAQABAAAAgBQAAAAAAgBQABgBAAgBQAAgFANAAIAPACQABAFALAGQAEAFgcADIgtAGIgCAAQgMAAAZgOg");
	this.shape_24.setTransform(47.6,62.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7CE8B").s().p("AAAAXQAAgEACgGQACgEgEgOQgEgNgEgFQgFgGAJAFQAIAEAHAMQgFAIAAAKQAAAKAFAIIgCAAQgHAAgCgFg");
	this.shape_25.setTransform(51.9,59.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7CE8B").s().p("AATAzQgIAAgIADQgMgCgIgCQgGgCAIgLIAKgLQgDgDAAgDQABgFALgCQAOgCgMgFQgKgFgQgBQgNgBgBgNIACgdQAAgOgGAAQgGgBgCAGQgDAIgEAEQgIAHgFgJQgFgKAJgGQAGgDAQgGQAUgIAAAXQAAAFAHANQAHAOACAHQACAJAJgFQANgHAEABQAMADAEAQQAHAUgCAFQgSgFgPABQgLAAACAIQACAGAIAEIAWACQASACAPAKQADACgFADIgNAIQgIgTgaAAg");
	this.shape_26.setTransform(54.9,51.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7CE8B").s().p("AAVAKQgBgDgDgBQgEgCgNgBQgIAAgJAGQgHAEgIgDQgIgEAagJIAagLIATAOIAEAPQgMAAgCgFg");
	this.shape_27.setTransform(58.1,47.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7CE8B").s().p("AANAMQgNgGgKgCQgDAAAAgEQAAgHABgCQABgEAIACQAFAAAGAFIAGATg");
	this.shape_28.setTransform(61.2,51.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7CE8B").s().p("AAEAOQgGgCgFgHIgDgHQgBgJACgDQAJAPALAOg");
	this.shape_29.setTransform(45.7,46.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7CE8B").s().p("AAAARIgBgHIgCgCIACAAIABgIIgDAAIgEAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAAAIgRgYQAFAAAJADIAaAFQAOACgHAFQAFAEAAAEQAEABABAEQgEAIgJAEQgGAIgEABIgCAAQgDAAgBgIg");
	this.shape_30.setTransform(55.6,44.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7CE8B").s().p("AgDACQAIgGgBAEQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgDAAg");
	this.shape_31.setTransform(38.8,51);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7CE8B").s().p("AgEANQgLgDADgHQAEgIAJgGQALgHABAMQAAAIgDAGQAAAAAAAAQAAABAAAAQABABABAAQAAAAACAAQgFAEgHAAIgGgBg");
	this.shape_32.setTransform(37,50.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7CE8B").s().p("ACEBfIgvgaIgZAEQgUADADgSQABgEgEgLQgFgNgBgGQAAgIgLADQACAEgNgBIgFgBQgGAAgCACQgGAFgLgJQgCAEgIgDQgKgEgKgKIgEAAIgYAGQAFgDAFgHQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAABgBIAFgGQADgCAFABQAEgDABgFQACgNgCAAIAEgBQgDgKgJgCIgDAAQgBAJgEACQAJAHgLACQgKACgUAJQgGAEgSABIgHgMQAMAAADgBQAHgCgCgGIgBgCIgCAAQgKgDgEgGQgEgGAMgDQAUgFAIgGQgNAFgMgBIgPgCQgDgLgEgJIAxAOIABgCQgEgJAMgBQALAAAHALIAAAJIAJAAIAFAIQAFAJAEADIAFgDIgCAFQAEADAAAHQAFAHAPALQgDgNADgDIAJAEQAMAEAKABQALACgBgHQgBgGgIgFIgVgFQgRgEgOgMQgDgCALgEQAOgFAEgFQACgEACAAQgEgDgFgFIgEgEIgQAIQAKAIgOgBQgLAAgMgIIgLgHIAgADIACABQAEgOADgDQAEgGAPAIQANAHALACQAEABgBAEIAAALQgCAFgIgDIgGgCQADAEAAAFQAIABAAADQACAEADACQAFACAMABQAJAAAJgFQAIgFAHAEQAJAFgkANIADABIAFAGQAJgIACAOQACALgDAHQgBACAFAAQgHAJgKgCQgLgCAAgHQgCAAgIAAQgOAAALAGQAJAFARAFQAMADgBALIgHAXQgCALAGABQAFACADgEQAFgGAFgDQAIgFADAJIABADQAIgBAQACQAMABAGAPQAFARgEAAIgBAAg");
	this.shape_33.setTransform(36.6,43.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7CE8B").s().p("AAFATQgFAAgMgFIgMgFIgBgGQAAgEAFABQAHAEANADIAAgOIgCgFQgBgFAEgCQALAKAOAFIgFAAIACAPQAEAFgIADIgIABIgGgBg");
	this.shape_34.setTransform(55.4,39);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7CE8B").s().p("AgkgHQgIgIAOACQAPADABAEQABADADACQAEABALACQAIACAKgEQAIgBAGACQANAIg6AGg");
	this.shape_35.setTransform(35.7,47);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7CE8B").s().p("AAcAaQgRgEgDACQgIAEgPgPIgBgBQAAgRgPgMIABgEIAQgEQgLAJArAcQAUAOgJAAIgBAAg");
	this.shape_36.setTransform(30.8,49.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7CE8B").s().p("AgIgPQALgCAHANIgBAHQgCAJgDAEQgFgPgHgQg");
	this.shape_37.setTransform(26,45.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7CE8B").s().p("AgCAEQgMgGgFgFIAcADIAJAGQAGAGgMABQgIgBgGgEg");
	this.shape_38.setTransform(2,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7CE8B").s().p("AgYBjIAFgDQgJgBADgHQADgFAUgDQAQgDgDgKQgDgJgJgHQgDgCAJgBIAVAAIgEgWQgKAHgLAAIgBAAIgHADIgDgDQgPgBgJgPIgCgEQgDACgHAAIgNAAQAPABgDAIQgCAEgEAEQgRAGgSgFQgGgCADgGQADgHATgCQgKAAgDgBQgEgBADgEQADgGANgEIAMgDIgIgTQgFgGAGgEQAGgEAIgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAABABIAFACIARAEIgCgPIgCgFQgRgCgSAAQgJAAgBgCIgIABIgKgPIAYABIAPgMIARACQASACAFADQAJAIgEAGIAEABIAfAHIgCACIAAABQATgMADgPQAGgcAYAIQAJADgJAOIgKAOIgDAGIAGACQAJAFAJAPQgGALABANIABABIgBADQACAIAEAGIgFAAQgBABgEABIgDAAQgCAEgGAGIgGAGIAIANQAIAMADABQAGACACAUIgRABQABgIgCgIQgDgPgLgBQgOgCgFgDQgSARAXgEQASgCABAGQABADgDAEIgFABQABAEgGACQgNAFgQAPQgFAEgRAEQgFAFgQAAIgGAAgAAIAOIABABIAVAEIgFAFIARAGIAJgDIgGgSgAgigIIAdAGQAFABACABQAUgQAGAAIgCgCQgMgIACgFIgQgGIACAKQAEAGgGACQgEACgIAAIgDAAIgLgDIgMgCgAAdgLQgBADgEADIAGgBQABgBAAgEQgBgDAEgCIgEAAQABACgCADgAA+gPIACAEQAJgDAKABQABgHgGgQQgFgPgEgEIgCgDIgKAXIgKAEQAHACADADQgDABgGADIgKAGIAIgBIAQACgAAAgpQADgCAFAAIgIAAg");
	this.shape_39.setTransform(28.1,25.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7CE8B").s().p("AARAXQgDgGgGgEIgGgCIAAAAQgMgKgegPQAPgGADgGQAGgIAEAHQAFAHgCAIQgEAMASACQAKABARAGIAJALQgEAFgKAHg");
	this.shape_40.setTransform(8.5,22.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7CE8B").s().p("AAgAcQgOgGgFgFIgHAIIgBACIgSgYIADgBIgIgDIgEgFIgCgDIAAABIgPgRIACAAIAKABIAAgEIAEAFQAJADAEAFIgGACIAKANQAGgDAKAAIAKAAIgCAHQAJgCAJADQAJAYgJAAIgEgBg");
	this.shape_41.setTransform(18,30.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7CE8B").s().p("AgPASQgGgBAAgEIABgEIACgBQgEgFAFgFQAIgKAJgDQAGgDAJABQAKABgEAIIgDABQAGAGgHAGQgMANgNAAIgHAAgAgDABIABACIAFgDIAAgBg");
	this.shape_42.setTransform(49.2,43.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7CE8B").s().p("AgGASQgIgBgFgJIgEgIIgCgKQgBgKAEACIAaASIABAAIAFAAQAIABgFADIANAJQgBAGgLABIgUgCg");
	this.shape_43.setTransform(51.5,36.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7CE8B").s().p("AgJAGQABgMAJgEQAJgFAAAIQgBAHgIAIQgEAFgDAAQgDAAAAgHg");
	this.shape_44.setTransform(23.8,32.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7CE8B").s().p("AgEASIgFgQIAAgJQABgKAGgDQAIgEAEAEQgDAOACANIgCAGQgDAKgEAAQgBAAgDgFg");
	this.shape_45.setTransform(52.4,32.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7CE8B").s().p("AgDADQAHgJAAAGQAAADgEAAIgDAAg");
	this.shape_46.setTransform(43.7,43.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F7CE8B").s().p("AgCAPIALgKQAIgJgSABQgSADgBgHIADgHQASgHARgCIADAvg");
	this.shape_47.setTransform(51.7,18.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F7CE8B").s().p("AgjAeQgJgEAKgNQAEgGAHgGIAQgcQAZgJAXAKIgDAKIgNACQgHACgHAFQgNAIgDALQgGAUgOAAQgFAAgFgCg");
	this.shape_48.setTransform(50.4,29.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7CE8B").s().p("AgcANIgNgOQgEgGAfgDIAygFQAIAAgDAEQgEAFgPAGQgJAFgIAAQgCAAAAAFQgBAGgJAAQgIAAgNgDg");
	this.shape_49.setTransform(52.3,23.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7CE8B").s().p("AAtAnQgKgFgHgQQgHgQgIAAIgHAEQgPgMgKgMIgfgHIAXgOQAIgDAKABQAJABgIAEQgJAFARAFQAPAFAOgCQALgBADAGQABAFgEAIQgDAFAFARQAEAPAEAGQAAABABABQAAABAAAAQAAABAAAAQAAAAAAAAIgGgDg");
	this.shape_50.setTransform(43.3,25.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7CE8B").s().p("AAUBFQABgGgGgNQgHgQgBgHQgCgKgKAFQgOAHgEgCQgIgCgEgKIgDgKIgEgLQgDgMACgEIALAEQANADAKAAQALAAgCgIQgBgIgJgFIgWgDQgTgDgQgMQgEgDALgGQANgIAEgIQAFgLAFAIQAGAIgCAKQgDAPATAAQAQgBAUAIQAKAEgYAXIACAGQAAAGgMABQgPACAMAFQAKAGASADQAMACAAAOQAAAIgDAWQgBAOAHABQAFABADgGQADgHAFgGQAIgHAEALQAFAKgKAGIgWAIIgJACQgLAAAAgSg");
	this.shape_51.setTransform(43.7,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,63.7,63.5), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F7CE8B").s().p("AgBASQgJgDgJgMQgIgKANgHQAGgDAIgCIgDASIAZALQAEAJgLABIgGAAQgGAAgEgCg");
	this.shape_120.setTransform(92.5,69.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F7CE8B").s().p("AgQATQgMgBAAgGIAYgNIAegRQAGgDgHAVQgHARgNABIgQABIgFAAg");
	this.shape_121.setTransform(90.9,61.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F7CE8B").s().p("AgBAJIgLgIIAMgHQAOgHgBAKQgCANgIAAIgEgBg");
	this.shape_122.setTransform(86.3,59.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F7CE8B").s().p("AgIAFIgMgJIAHgEQAKgDAMACQAOACgCAGQgCAFgMAFIgFACQgEAAgGgGg");
	this.shape_123.setTransform(78.4,50.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F7CE8B").s().p("AgBAeQgDgIgKgPQgFgJgCgPIAAgNIAMACQANADAEAIQABACALABQAFAAgKAPIgOAaIgBAEIgBgBg");
	this.shape_124.setTransform(75.1,54.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F7CE8B").s().p("AgFABQgIgDgEgKIgEgIIAGgFQAHgDAGAJQAGAMASADIgLAfQgFgUgLgGg");
	this.shape_125.setTransform(81.6,58.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F7CE8B").s().p("AgIANQgFgUADgJQAEgKALAHQAKAFgEARQgDAJgEAGQgDAFgCAAQgEAAgDgKg");
	this.shape_126.setTransform(90.3,57.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F7CE8B").s().p("AgDgBQAAgGAHAKIgCABQgFAAAAgFg");
	this.shape_127.setTransform(98.5,69.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F7CE8B").s().p("AgPAMQAGgBgBgDQgCgIACgLQADgQAKAMQAKALACAMQACAKgMACIgEABQgJAAgHgJg");
	this.shape_128.setTransform(100.4,68.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F7CE8B").s().p("AgNATIACgLQADgJAEgBQAEgCAKgPIAEALQgIAEgCAMQgBAGAAAGg");
	this.shape_129.setTransform(107.3,56.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F7CE8B").s().p("AguBLIgYgKQgKgGAGgLQAGgLAIAIQAFAFADAJQACAHAGgBQAHgBAAgQQgBgWAAgJQACgPANgBQASgBALgFQANgGgOgCQgNgCAAgHIADgFIgKgNQgJgMAHgCQAIgDAOgCQAIADAJAAQAcABALgVIANAJQAFADgDADQgRALgUABIgXACQgJAFgDAHQgCAIALABQARABAUgGQACAGgJAWQgEASgNADQgFABgPgHQgJgGgDAKQgCAIgIAPQgIAOAAAGQAAALgFAFQgDACgFAAQgEAAgFgCg");
	this.shape_130.setTransform(99,60.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F7CE8B").s().p("AgXAFQgcgMAKgEQAIgEAHAGQAKAHAJgBQANAAAFgCQAEgBABgFQACgFARAAQAQAAgLAJIgjAYQgOgGgOgGg");
	this.shape_131.setTransform(103,65.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F7CE8B").s().p("AgfAMIAAgLQAAgDADAAQAMgCAOgHQARgIAFAKQAKAWACACIgbgPQgNANgNACIgEABQgFAAgBgEg");
	this.shape_132.setTransform(107.5,61.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F7CE8B").s().p("AgXAfIgXgCQgMgCAagPQA2gegLgOIASAKQgCAAACAOQACAIANAHQAJAFgDAAQgQAEgPAAQgIAAgGAFQgNAMgIAAQgEAAgDgCg");
	this.shape_133.setTransform(108.7,69.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F7CE8B").s().p("AAGAMQgQgPgOgGQgKgDAKgHQANALASABIACAAIAVAZIgGACQgOgFgEgDg");
	this.shape_134.setTransform(112.5,59.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F7CE8B").s().p("AAEADQgPgDgIAAIgBgCQgBgDAFgBQAVgPgBALIAAADQAGABAHAFQAJAFgJAGIgMAFg");
	this.shape_135.setTransform(103.8,24.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F7CE8B").s().p("AgHAFIgLgIIAGgDQAJgDALABQANACgCAGQgCADgKAFIgEABQgEAAgGgEg");
	this.shape_136.setTransform(95.5,16.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F7CE8B").s().p("AAAAZIgLgTQgGgHgCgMIgBgLIAMABQALACAFAHQABACAKAAQAEAAgIANIgMAWIgCACIgBAAg");
	this.shape_137.setTransform(92.5,19.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F7CE8B").s().p("AgEABQgHgDgFgHIgDgHIAFgFQAGgDAGAIQAGAKAQADIgIAZQgFgQgLgFg");
	this.shape_138.setTransform(98.7,23.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F7CE8B").s().p("AgGALQgGgQADgIQADgIAKAFQAJAEgDAOQgCAIgDAFQgDAEgCAAQgDAAgDgIg");
	this.shape_139.setTransform(106.7,22.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F7CE8B").s().p("AgaABQgMgJARgBIAbgBQAJgBAFABQAIACADAEQADAEgIAFQgFADgRACIgOABQgKgFgGgFg");
	this.shape_140.setTransform(101.1,20.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F7CE8B").s().p("AgLAQIABgJQACgIAEgBQAEAAAIgOIAEAJQgHAEgBAKIgBAKg");
	this.shape_141.setTransform(122.4,21.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F7CE8B").s().p("AgLARQgHgDAFgFIAGgNQgVgDgFgIQgEgFAKAAIAbAAQARABAAAHQAAAEgEADIgEAOIAWgDQAHgDgGAMQgXAGgIAAQgHgBgFgDg");
	this.shape_142.setTransform(99.9,16);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F7CE8B").s().p("AAJAKQgCgJgMgHIgMgHIgOgCQgNgCAEgBQAagNAbAJIAOAXIALALQAIALgIACIgJACQgOAAgGgRg");
	this.shape_143.setTransform(108.4,20.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F7CE8B").s().p("AgDAIQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgGAAgJgEQgbgNAQABIAtAFQAcAEgEADIgNALIgRACQgLAAAAgFg");
	this.shape_144.setTransform(107.5,15.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F7CE8B").s().p("AgJAXQAEgFAFgMQAEgNgCgEQgDgFABgEQACgFAIABQgFAHAAAJQABAIAFAIQgIAMgHAEIgFACQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAg");
	this.shape_145.setTransform(111.8,17.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F7CE8B").s().p("AgoBAIgWgJQgJgFAFgJQAFgJAHAGQAFAFADAHQACAGAGgBQAGgBAAgNQgCgTAAgHQABgMAMgCQARgBAKgEQAMgFgOgCQgLgBgBgFIADgFIgKgLQgJgKAGgCIAVgEQAHADAIAAQAaAAAJgSIANAHQAFADgDACQgPAKgSABIgWACQgIAEgCAGQgCAHAKABQAQAAASgFQACAFgHASQgEAPgMADQgEABgOgGQgJgFgCAIQgBAHgIANQgGAMAAAFQAAAPgLAAIgJgBg");
	this.shape_146.setTransform(114.9,24.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F7CE8B").s().p("AgUAFQgagKAIgEQAIgCAHADQAJAGAIAAQAMgBAEgBQAEgBABgEQACgEAPAAQAPAAgKAHIgfAUIgagJg");
	this.shape_147.setTransform(118.6,28.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F7CE8B").s().p("AgdALIAAgKQAAgBAAAAQAAAAAAAAQABgBAAAAQABgBABAAQAKgBAOgGQAPgHAEAIQALASACACIgbgMQgKAKgMADIgFAAQgDAAgCgCg");
	this.shape_148.setTransform(122.7,25.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F7CE8B").s().p("AgUAaIgWgCQgLgBAYgNIAEgCIABgCIAGgTQAAgBAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIANAMQAUgPgIgIIARAIQgCAAACAMQACAHAMAFQAJAEgDABIgWADIgKAAIAFALQgMACgJgCQgHAEgFAAQgEAAgCgCg");
	this.shape_149.setTransform(124.1,32);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F7CE8B").s().p("AAFAKQgPgNgMgDQgKgEAJgFQAOAJAPAAIACAAIAUAVIgGABQgNgDgEgDg");
	this.shape_150.setTransform(127.3,23.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F7CE8B").s().p("AACABQgJgDgGgBIAAgCQAAAAABgBQAAAAABAAQAAAAABgBQABAAABAAQAMAAAIAHQAHAHgTABg");
	this.shape_151.setTransform(95.1,1.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F7CE8B").s().p("AgRAEIACgEIADgDQAFgDAFAAQAVAAAAADIgjAKIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBg");
	this.shape_152.setTransform(95.8,4.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F7CE8B").s().p("AgHACQADgLANAJQgKAFgEAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAABgBg");
	this.shape_153.setTransform(98.7,6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F7CE8B").s().p("AgFAEQgJgBABgDQACgCAHgCQAEgBAGAEQAHAEABAAQgEACgHAAIgIgBg");
	this.shape_154.setTransform(103.9,9.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F7CE8B").s().p("AgGgCQgJgCgDgEQgBgBgHAAQgDgBAGgHIAJgLIACgBIAJALQAEAGAAAKIAYAEIADAFQgBAFgRgBQgPgCAFAHQAEAEAGAEIgWAGg");
	this.shape_155.setTransform(107.5,10.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F7CE8B").s().p("AAAAFIgFgEIgDgFQgDgFAHADQAWAIgMAFIgBABQgCAAgDgDg");
	this.shape_156.setTransform(76.4,2.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F7CE8B").s().p("AgHAEQgJgEAVgEQAKgBgIAKIgHAAQgEAAgDgBg");
	this.shape_157.setTransform(75,4.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F7CE8B").s().p("AACAEQgNgCgCgCQgCgDAFAAQALgCAKAEIAEADQAAADgGAAIgHgBg");
	this.shape_158.setTransform(75,6.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F7CE8B").s().p("AAAAFQgFgDAAgEQAAgFAGAFQAFADAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgEgBg");
	this.shape_159.setTransform(77.2,5.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F7CE8B").s().p("AACAIQgCgDgHgCIgGgCIAHgMIACAFQAEAFAEABQAIADACAGQgDADgDAAQgDAAgDgEg");
	this.shape_160.setTransform(101.8,6.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F7CE8B").s().p("AgDAIQgEgBAAgFIABgDIAFgGQAEgEADAHQADAIgDADQgBADgDAAIgFgCg");
	this.shape_161.setTransform(96.1,6.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F7CE8B").s().p("AAPAGQgXAAgGgCQgGgBgCgCQgCgCAGgCQAGgCAUABQAZAKgPAAIgDAAg");
	this.shape_162.setTransform(100.1,7.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F7CE8B").s().p("AgCAGQgGgEAAgFQgBgDAIgBQAGgBAFAFQgBAAgBAAQgBAAAAAAQAAAAAAABQgBAAABAAQABACgCAFQgCADgDAAQgBAAgCgCg");
	this.shape_163.setTransform(90.1,1.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F7CE8B").s().p("AgOABIAIgCQAJgCAHABQAMACgQADg");
	this.shape_164.setTransform(83.9,8.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F7CE8B").s().p("AgTAEIAEgBQAFgBAIABQALAAAAgMIALABQgCAIgFAAQgCAAgHAFIgFAFg");
	this.shape_165.setTransform(84.1,6.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F7CE8B").s().p("AgUABQAIgGAQACQALABAHAFIggACQgPAAAFgEg");
	this.shape_166.setTransform(79.4,7.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F7CE8B").s().p("AgNAEIgBgDQAAgCAMABQATADgSgJIAQgDIgGATQgKgCgMgEg");
	this.shape_167.setTransform(94.4,12.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F7CE8B").s().p("AATAMIgTgCQgMAAAAgEIADgEIADgHQgJAAgGABQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIACgDIAWgCIAJACQAFACgEADIgFAHIAIABQAJACACADQACADgFAAIgCAAg");
	this.shape_168.setTransform(100.7,10.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F7CE8B").s().p("AgKAMIgIgMIgHgGQgFgGAGgBQAQgCACALQACAGAPAGQAVADgEABQgLACgJAAQgJAAgJgCg");
	this.shape_169.setTransform(94.9,7.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F7CE8B").s().p("AAXAIIgggFQgUgDADgCIAKgFQAUgBAAAEQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAFABAGABQAQAIgHAAIgCAAg");
	this.shape_170.setTransform(95.1,10.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F7CE8B").s().p("AgIgEIAIACQAIACABACQAAABAAAAQABABgBAAQAAAAAAAAQAAABgBAAQgDAAgNgJg");
	this.shape_171.setTransform(80.4,8.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F7CE8B").s().p("AgVANIgOgHIAVgBQAHgEALgEIAFACQAFABAGgGQAJgKAHADQgDACgEAGQgFAGACACQACADgCADQgCACgHgBQgJgCgLABQgLACAGACQAEACgEAAIgNgCg");
	this.shape_172.setTransform(89.4,9.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F7CE8B").s().p("AgkAfQgCgEgIgEQgGgDACgBQALgEAOAAIAPAAQAGgCACgDQACgDgIgBIgQAAIgHABQgBgBADgFIADgEIADgEQAEgEAGAAQADgBAIAEQAGACACgEQABgDAGgGQAFgFABgCQACgKAMAEIAPAFQAGADgEAEQgHAHgGgMQgBgDgEAAQgFAAAAAGIgBANQgBAGgJAAIgTACQgIABAJABQAIACgBACIgCACQAOALgHABQgNACgLgBQgMgBAAAGQABAEgEAEIgDABQgDAAgBgDg");
	this.shape_173.setTransform(90.5,5.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F7CE8B").s().p("AAQAFQgFgDgGAAQgMgBgCADQgCACgKgBQgKAAAHgDIAXgIQAlAKgKACIgEABQgDAAgDgCg");
	this.shape_174.setTransform(88.3,3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F7CE8B").s().p("AgNAEIgGgJIARAGIAEgCQAGgCAGgBQAFAAABACIAAADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgRADIgHAAQgFAAgBgCg");
	this.shape_175.setTransform(85.4,4.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F7CE8B").s().p("AgTAIQABAAgBgFQAAgDgHgDQgCAAgBgBQAAAAgBgBQAAAAAAAAQAAAAABAAIASgBQAFAAAEgBQANgGAEADQACABAMAAQAHABgRAFQgjAJAHAGg");
	this.shape_176.setTransform(85.2,1.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F7CE8B").s().p("AAIAKQgIgBADgDQAEgEgWgEQgIgCADgCQADgCAHgBQASgBAKAEQAHACgFALQgEADgGAAIgCAAg");
	this.shape_177.setTransform(80.1,2.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F7CE8B").s().p("AgIAKQgCAAgBAAQgBgBgBAAQAAAAAAAAQAAAAAAAAQAHgDADgDQADgDgLgCQgOgDgBgCQgDgFAQACQAPADAFAEQAIAGAJACQAFACgDACIgHACIgEABIgXgCg");
	this.shape_178.setTransform(81.1,5.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F7CE8B").s().p("AAFAAQgNABgGACQgFgDAGgDQALgJAOAFQAJACgFAHIgGAIg");
	this.shape_179.setTransform(23.1,20.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F7CE8B").s().p("AgNAIIAAgHQAAgGAFgDIAMgJQAIgEADAEIgVAkIgBABQgCAAgEgMg");
	this.shape_180.setTransform(27.3,24.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F7CE8B").s().p("AgEAFQgGgJAJgCQADgBAGABQgGAOgDAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_181.setTransform(31.1,23.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F7CE8B").s().p("AgNAHQgBgEAEgHQAEgFAHABIANACQgCAHgNAGQgFACgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_182.setTransform(39.8,25.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F7CE8B").s().p("AgQAFIgDgSQgBgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIATAHQALAFAKAMQgOAJgKgFQgCAAgGADIgBAAQgDAAgBgLg");
	this.shape_183.setTransform(40.8,21.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F7CE8B").s().p("AgCAFQgXgJAQgBQAegDgFANQgBACgFAAQgFAAgHgCg");
	this.shape_184.setTransform(6.2,33.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F7CE8B").s().p("AAAgIQAFgGADAJQACAEABAEQgIAIgHAAIgBAAQgMAAARgTg");
	this.shape_185.setTransform(7.8,37.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F7CE8B").s().p("AgOAJQgFgCAFgEQAGgFAJgEIAIgDIAIADQAEAFgOAGQgLAFgGAAIgEgBg");
	this.shape_186.setTransform(9.6,40.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F7CE8B").s().p("AgIAAQgFgHAMACQAIACADADQADAFgIABIgCAAQgHAAgEgGg");
	this.shape_187.setTransform(10,36.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F7CE8B").s().p("AgUgKIAIAFQAIADAFAAQAKgCAKAHQAAACgCACQgDAFgIgDQgGgCgHACIgHACg");
	this.shape_188.setTransform(34.5,22.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F7CE8B").s().p("AgFAIIgEgFQgCgFAAgFQAAgKAKAIQALAJACAGQABAGgKACIgBAAQgDAAgEgGg");
	this.shape_189.setTransform(29.4,25.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F7CE8B").s().p("AgUAOQgFgDADgGQACgEALgHIAJgHQAkgCgTALQgTAPgIACIgGABIgEAAg");
	this.shape_190.setTransform(34.2,25.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F7CE8B").s().p("AAFALQgJgCgGgGQgEgEAGgGQAHgFAHACQgBABAAABQgBAAAAABQAAAAAAAAQAAABABAAQAEADADAGQADAIgGAAIgEAAg");
	this.shape_191.setTransform(18.8,23.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F7CE8B").s().p("AgIADQAHgJAHgEQAOgFgLAPIgWAMQACgEADgFg");
	this.shape_192.setTransform(20.1,36.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F7CE8B").s().p("AAAAJQAHgFgDgKIgEgJIAKgGQAHANgEADQgCACgBAKIgBAKQgMAEgKABQACgFALgIg");
	this.shape_193.setTransform(18.1,33.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#F7CE8B").s().p("AgVALQAAgJAGgFQADgDAKgGQAGgDAKAAIAIAAIgeAZQgHAGgDAAQgDAAAAgFg");
	this.shape_194.setTransform(14.6,38.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F7CE8B").s().p("AgOAQQgCgEANgGQATgJgaAAIAMgPIAOAcQgMAFgOAEQgDgBgBgCg");
	this.shape_195.setTransform(33.8,33.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F7CE8B").s().p("AgGAQIgBgHIgFgLQgJAFgEAFQgEAGgCgLIAHgHQAIgIAEgBQAFgDAFgBQAGAAgBAFIADAMIAJgCQAKgDAFACQAFACgHAEIgUALQgGAEgDAAQgDAAgCgCg");
	this.shape_196.setTransform(37.2,27.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F7CE8B").s().p("AgSAEQgZgEAIgIQAMgMANAMQAKAIATgDQAVgKgCAEQgLATgZAFg");
	this.shape_197.setTransform(29.1,28.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F7CE8B").s().p("AgcALQAEgJgBgDIAJgHQAKgGACADQABABAAABQABAAAAAAQABABAAAAQABAAAAgBQADgCAIgBQAZgCgKAGIgiAPQgNAGgFAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_198.setTransform(32.4,31.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F7CE8B").s().p("AgMACIAKgCQAJgDAEACQAHAEgOAAIgQgBg");
	this.shape_199.setTransform(16.7,38.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F7CE8B").s().p("AgKAXIAIgXQACAAADgBQAGgCgBgMQAAgMAEgHQAFgIgCAHQAAAEACALQADANAEACQAFACABADQAAAFgIADQgJAEgJAJQgIAJAGAAQAIgBgHAEQgFAFgGABIgVAAg");
	this.shape_200.setTransform(26.2,33.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F7CE8B").s().p("AgCBBQgFgDgMAAQgJAAACgDQAGgNAMgIIANgLQAEgGgCgFQgBgGgHAEQgHAEgHAHIgHAGQgCgBgCgJIgCgIQgEgNAHgFQACgDAMgBQAIgBgCgGIgCgRQgBgKgCgDQgJgOAQgDIARgDQAJAAAAAIQABAIgIgCQgGgBgEgEQgEgCgCADQgEADAFAIIAMAQQAFAJgIAGQgKAIgFAGQgFAIAKgEQAIgEACAEQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAYAFgGAGQgLALgLAGQgMAHAGAIQAFAFgBAHQAAAEgDAAIgEgCg");
	this.shape_201.setTransform(23.1,28.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F7CE8B").s().p("AgZAOIANgaQAtgLgHAJQgEAFgGAAQgJAAgFAEQgIAFgCACQgCACABADQABAEgKAGIgGACQgDAAACgFg");
	this.shape_202.setTransform(19,27);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F7CE8B").s().p("AgFAQQgPgJgCgBIAWgCQAEgLAGgGQAFgEADACIAEAGQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgHAFgHAJQgGAIgEAAIgDgBg");
	this.shape_203.setTransform(16.9,30);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F7CE8B").s().p("AAJAMQAAgDgIABQgHAAgLADQgJADAAgFQABgFAGgGQAFgEAKgFQAIgFAHgBQAFgBAGAJIAFAIQAAAKgJAEIgFABQgDAAgBgEg");
	this.shape_204.setTransform(10.4,31);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#F7CE8B").s().p("AgCAPQAEgIgCgHQAAgGgNAFQgPAFgEgDQgIgDATgIQARgHAHACQARADAKgDQAKgCgJAOQgDAEgZANIgFACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_205.setTransform(13.7,34.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F7CE8B").s().p("AAEAAIgRADIgCgCQgBgBADgDQAKgIANAFQAIACgDAGQgBAEgEADg");
	this.shape_206.setTransform(66.4,21.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F7CE8B").s().p("AgKAHIgBgGQAAgFAEgDQAPgNAEAEIgOAhIgBABQgDAAgEgLg");
	this.shape_207.setTransform(70.6,24.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F7CE8B").s().p("AgDAFQgHgJAIgCQADgBAGABQgEANgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_208.setTransform(74.1,24.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#F7CE8B").s().p("AgLAGQgBgEADgGQACgEAHABIAMABQgBAGgLAGIgHACQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_209.setTransform(82.4,25.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F7CE8B").s().p("AgOAFIgFgRQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIASAHQALAEAKALQgMAIgJgEQgCgBgFAEIgBAAQgDAAgCgKg");
	this.shape_210.setTransform(83,22.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F7CE8B").s().p("AgCAEIgJgEQgHgEAJgBQAcgDgEAMQgBACgEAAIgMgCg");
	this.shape_211.setTransform(52.3,33.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F7CE8B").s().p("AgBgHQAGgIAFASQgGAIgHAAQgNAAAPgSg");
	this.shape_212.setTransform(54.2,37.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#F7CE8B").s().p("AAJAIQgGgCgGABIgHACIgJgSIAHAEQAIADAFAAQAKgBAJAFQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCADgDAAIgFgCg");
	this.shape_213.setTransform(77.1,22.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F7CE8B").s().p("AgEAHIgEgFQgCgEgBgFQgBgIAKAHQALAIACAFQACAGgJABIAAAAQgEAAgEgFg");
	this.shape_214.setTransform(72.9,26.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#F7CE8B").s().p("AgRAMQgFgCADgGQABgDAJgHIAIgGQAggCgPAKQgRAOgHACIgFABIgEgBg");
	this.shape_215.setTransform(77.2,25.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#F7CE8B").s().p("AAFAKQgIgCgGgFQgFgEAFgFQAGgFAHACQgBABAAAAQgBABAAAAQAAABAAAAQAAAAABABQAEADAEAFQAEAHgGAAIgEAAg");
	this.shape_216.setTransform(62.8,24.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F7CE8B").s().p("AgHADQAFgIAGgEQAMgFgIAOIgTALg");
	this.shape_217.setTransform(65.5,36.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#F7CE8B").s().p("AgIARQADgFAFgEQAKgHgMgPIAIgFQAIAMgDADQgCACAAAIIABAKQgLADgJABg");
	this.shape_218.setTransform(63.3,33.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F7CE8B").s().p("AgNAOQgCgDALgFQARgJgYAAIAKgNIAPAZQgKAFgNADQgDAAgBgDg");
	this.shape_219.setTransform(78,33.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F7CE8B").s().p("AgEAOIgCgGIgFgKQgIAFgDAFQgDAEgDgKIAGgGQAGgHADgBQAFgDAFAAQAEgBAAAFIAFALIAIgCQAIgCAFACQAFACgGADIgRAKQgFADgEAAQgCAAgCgCg");
	this.shape_220.setTransform(80.2,27.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F7CE8B").s().p("AgPADIgLgCQgKgDADgFQAJgMAPAMQAJAHASgDQASgJgBAEQgJARgWAFg");
	this.shape_221.setTransform(72.8,28.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#F7CE8B").s().p("AgZAKQAEgIgCgCIAIgHQAIgGADADQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAQADgCAIgBQAXgBgKAFIgdAOQgMAFgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_222.setTransform(76.2,31.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F7CE8B").s().p("AgLACIAIgCQAJgDAEACQAHAEgNAAIgPgBg");
	this.shape_223.setTransform(62.5,38.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F7CE8B").s().p("AgYAkIAPgPIAFgVIAFAAQAFgDgCgKQgCgLADgHQADgGAAAFQAAAFAEAKQAEALADABQAFADABACQABAFgHADQgIADgHAJQgHAIAGgBQAHAAgFAEQgFAEgFABg");
	this.shape_224.setTransform(70.9,32.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#F7CE8B").s().p("AAEA8QgEgDgLAAQgJAAABgDQAEgMALgHIAKgKQAEgFgCgFQgCgFgGADQgGAEgGAGIgFAGQgDgCgDgIIgCgHIgCgGQgCgGAEgEQACgCALgCQAHgBgCgFQgCgFgCgLQgCgJgCgDQgKgMAPgDIAPgDQAHAAACAHQACAMgRgKQgDgDgDADQgEADAHAHIAMAPQAFAIgGAFQgIAIgEAFQgFAIAJgEQAHgEADADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAWAFgEAFQgIALgLAFQgJAHAGAHQAFAEAAAHQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIgEgBg");
	this.shape_225.setTransform(67.4,28.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F7CE8B").s().p("AgWAMIAJgXQAogKgFAIQgDAFgGAAQgIAAgEADIgIAGQgCACABADQACADgJAGIgFACQgDAAABgFg");
	this.shape_226.setTransform(63.3,27.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#F7CE8B").s().p("AgCAPIgRgJIAUgCIABgFQADgHADgEQAEgEADACIAFAGQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgFAFgGAIQgFAIgEAAIgCgBg");
	this.shape_227.setTransform(61.7,30.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#F7CE8B").s().p("AgEATQgEgEgJABQgHABACgCQAGgHAIgFQAEgDACgDQADgPAHABIANgHQAGgDgIAQQgRAhAMADIgNABQAAgCgFgFg");
	this.shape_228.setTransform(57.6,26.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F7CE8B").s().p("AAJALQAAgDgIAAQgGABgKADQgIADAAgFQgBgFAGgFQAEgEAIgEQAHgFAGgBQAIgBAJAQQABAJgHADIgFACQgDAAgBgEg");
	this.shape_229.setTransform(55.9,31);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F7CE8B").s().p("AAAAOQADgHgCgHIgMgBQgOAEgDgCQgIgDAQgHQAPgGAHABQAPADAKgCQAIgCgGAMQgCADgJAFQgEAFgJACIgFADIAAgBg");
	this.shape_230.setTransform(59.2,34.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F7CE8B").s().p("AgKACIADgGQAFgGAGgCIAHgCIgVAcg");
	this.shape_231.setTransform(105.6,29.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F7CE8B").s().p("AgTADQABgDAJgGQAGgEAJAFIAOAFQgGAHgTABIgDAAQgLAAAAgFg");
	this.shape_232.setTransform(121,35.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#F7CE8B").s().p("AgLABIAAAAQAAAAAAgBQgBAAAAAAQAAAAABAAQAAAAAAAAQABgBAAABQAAAAABAAQAAAAABAAQAAAAABABIAEgBIADABIgBgHIgCgBIACgCIABgGQABgIAFABQAEABAGAHQAJAEAEAHQgBADgEACQAAAEgFADQAIAFgPACQgfAHgJAAIARgWg");
	this.shape_233.setTransform(115.5,31.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#F7CE8B").s().p("AABALQgJgGgEgHQgDgGALgDQAJgDAIAFQgBABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQADAFAAAHQAAAHgFAAQgDAAgEgCg");
	this.shape_234.setTransform(97,26.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#F7CE8B").s().p("AgTBXIgIgRIgBABIghAEIAKgIQANgHAMAAQANgBgKAIIAQAHIAOgLQgDAAgDgDQgDgFgOgFQgLgDADgDQAOgLARgDIAVgFQAJgFAAgFQABgHgLACQgJABgNAEIgKADQgBgCACgNQgPALgFAGQgBAIgDABQAAADACACIgGgDIgIAMIgEAHIgJAAIgBAIQgHALgLgBQgLgBADgIIAAgCIgyAOQAFgKACgJIAQgCQAKgBANAFQgHgGgUgEQgMgDAFgGQADgFAKgDIACgBIABgCQACgGgKgBIgTAAQgCgEgHgGQAHgDASACQARABAGACQAQAKANABQALABgKAHQAEADACAIIADgBQAJgBADgJIgEgCQADAAgDgMQAAgDgFgEQgFABgDgCIgFgGQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAABAAQgFgGgFgDIAXAFIAGAAQAMgLAHgCQAHgDADAEQAMgIAEAEQADACAFAAIAGgBQAMAAgBADIAIAAQADgBAAgEQABgGAFgLQAFgLgCgEQgDgQAUADQAVACAFACIAugZQAGgDgGATQgGAOgMABQgTACgFgBIgBADQgCAIgJgEQgGgEgDgFQgEgEgFACQgGABADALIAFAVQACAKgMADQgQAEgKAFQgLAFAOAAIALAAQgBgGALgCQAKgCAHAIQgEABAAABQADAHgCAKQgBANgKgHIgEAFIgEABQAkANgJAEQgIAEgGgFQgKgFgIABQgNABgEABQgEACgCAEQAAACgIACQAAAFgDADIAGgCQAIgCACAEIABAKQAAAEgEABQgKACgNAHQgJAEgFAAQgEAAgBgCg");
	this.shape_235.setTransform(96.2,32.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#F7CE8B").s().p("AgPAOIACgHIAAgNQgNADgIADQgEABAAgDIAAgFIANgGQANgEAFAAQAHgBAGABQAIACgEAFIgCANIAMABQANABAFAEIABABIgeAIIgGAAIgIABQgJAAgBgFg");
	this.shape_236.setTransform(116.7,36.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#F7CE8B").s().p("AgkAIIAcgUQA6AGgNAGQgGADgIgDQgJgCgJACQgLABgEACQgDABgBADQgBAEgOACIgGAAQgHAAAGgFg");
	this.shape_237.setTransform(95.6,29.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#F7CE8B").s().p("AgTAUQABAAgDgJQgCgGgMgCQgIgCACgBQANgEANgCQAHgBAEgEQAPgOAIAEIAUgCQALAAgVANQgsAaANAIg");
	this.shape_238.setTransform(89.6,26.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#F7CE8B").s().p("AgFALQACgEgQgDIAMgTQAKgBAGABQALABgBAVQgFAJgLABIgBAAQgIAAABgGg");
	this.shape_239.setTransform(84.9,30.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#F7CE8B").s().p("AAAAMQgJgGgDgIQgCgGAKgDQAKgEAIAGQgCAAAAABQgBAAgBAAQAAABAAAAQgBABABAAQADAGgCAHQgBAHgFAAQgCAAgDgCg");
	this.shape_240.setTransform(52.2,36.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F7CE8B").s().p("AgkAIIAegVQA5AGgNAHQgHADgHgDQgJgCgJABQgLABgEACQgEACgBADQgCAEgOADIgFAAQgIAAAHgGg");
	this.shape_241.setTransform(50.3,39.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F7CE8B").s().p("AgQALQgKgOgDgCIAaAHIAGgFQAJgHAHgCQAIgDACADIABAIQAAADgDABQgLACgNAHQgIAFgGAAQgEAAgBgDg");
	this.shape_242.setTransform(46.3,42.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#F7CE8B").s().p("AgXAVQABAAgCgKQgCgGgLgDQgIgCADAAQANgEANgCQAHgBAFgFQARgOAHAEIAUgCQALgBgXAOQguAcALAIg");
	this.shape_243.setTransform(44.8,36.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#F7CE8B").s().p("AgFALQACgFgQgCIAPgUQAJgBAHABQAKABgDAWQgGAJgLABIgCABQgIAAADgHg");
	this.shape_244.setTransform(39.4,40.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F7CE8B").s().p("AAEAAQgPgDgIAAIgBgDQAAgDAGgCQARgEAPAKQAIAGgKAGIgMAGg");
	this.shape_245.setTransform(75,39.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#F7CE8B").s().p("AgDgBQAGgCABAEQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgCAAgEgDg");
	this.shape_246.setTransform(69.7,40.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F7CE8B").s().p("AgKAAQAMgGALgBQATAAgVAMIggADg");
	this.shape_247.setTransform(61.8,55.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#F7CE8B").s().p("AgSgHIAQgDQAPgBAOAJQgoALgNACQAGgKACgIg");
	this.shape_248.setTransform(55.3,54.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#F7CE8B").s().p("AAzBIQgCgPgUgKIABACIgeAHIgEABQAEAGgJAGQgFAEgSACIgRABIgPgLIgYABIAKgOIAIABQABgCAIAAQAMAAALgBIANgBIACgEIACgOIgRADIgFACQgBABgBAAQgBAAAAAAQgBAAAAAAQgBgBAAgBQgIgBgGgDQgGgEAFgGIAHgRQgWgEgGgIQgEgHASABQgSgCgDgGQgDgGAGgCQASgEARAFIAGAIQACAHgOABIAXABIABgDQAJgNAPgCIAEgDIAHADIABAAQALAAAKAHIAEgVIgVAAQgJAAADgCQAJgHADgJQADgJgQgDQgUgCgDgFQgDgHAJgBIgFgCIALAAQAMABAEADQAQAEAGAEQARAPAMADQAHACgCAEIAFABIACAGQgBAGgSgCQgXgDARAPQAHgDANgBQALgBADgPIABgOIARAAQgCAUgGABQgEABgHALIgIANIAGAFIAIAKIACAAIAGABIAFAAQgEAFgCAIIABADIgBABQgBANAFAKQgIANgJAFIgGACIADAGIAKANQAJANgJADIgJABQgQAAgFgUgAAwAVQAGAEADAAQgDADgHACIAKADIAKAWIACgDQAEgEAFgOQAGgPgBgGQgKABgJgDIgCAEQgPACgJgBIAKAFgAAIApIgIgCIgBACIAJAAIAAAAgAgMARQAVAAgHAJIgCAKQAKgFAFgBQgCgFANgIIACgBQgFAAgWgPIgGACIgdAFIgEANIAMgBQAHgDAEAAIACAAgAAdALQACAEgBABIAEgBQgEgBAAgDQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgHgBQAFACABADgAAPACIgDgBQgMgGgEgFIgEABQAPAGgEADIAMACgAAYgWIAGAFIgVAEIgBABIAlAFIAGgRIgJgDg");
	this.shape_249.setTransform(88,49.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#F7CE8B").s().p("AgOgEIANAAQAMABADAEQADAEgEAAQgGAAgVgJg");
	this.shape_250.setTransform(56.5,56.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F7CE8B").s().p("AgoBHQgEgFgOgFQgLgEAEgDQAPgLASgEIAWgFQAJgFABgGQABgHgKACQgLABgMAEIgLAEQgCgCABgEIgTABQgBAPgFABQgDACgIALIgHAKQgRgBgNgDIAGgDQAHgEALgCQAMgCACgMIAAgMIAEgBIAKgMIAWAGIADgKIABgEIAEgGQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgBABAAIABgDIAMgFQAOgFAFgBQADgBAGABIAHgPIgSADQAIAEgEACQgHAEgGgCIgMgDIgJABIABgBQgNACgEACQgDACgBADQgCAEgPADQgOACAJgIIAdgXIAWADIAFgGQgLgGgEgKQgCgHALgDQALgDAIAGQgCAAAAAAQgBABgBAAQAAAAAAABQgBAAABABQACAFAAAIIADgBIAJAEQAKAEADADIAAgGIAAgCQgDgBgEgDQgFgFgIgCQAFgGAGgEIACABQAIACAGAGQAEgCAIABIAQACQAIACADACIAEgLQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAQAPIAHAIQAGgFAOgFQAOgFgKAaQgKAEgIgCIACAHQgRACgLgFIgKAMIAGACQgDAEgKADIgDAFIgBgEIgKABQgJAAgDgCIgGACIgLADIgBAEIAMABQANAAAFAEIABACIgeAHIgCADIAGAEIAJAIIgJAKQgOAFgMACQgIAAgEADQgFAEACAGQACAHgFAHQgCADgDAAQgDAAgCgEgAAhg5QgGABABALIADANIACALIAEgDQAGgEAKAFQAEgJAJgCQgCgBgJABQgFABAFgLQgIAAgGgKQgCgEgDAAIgDABg");
	this.shape_251.setTransform(70.2,47.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#F7CE8B").s().p("AgQAMQgLgPgDgBIAbAGIAGgFQAJgHAHgCQAIgDACADIABAJQABADgEAAQgKADgOAHQgIAFgFAAQgEAAgCgDg");
	this.shape_252.setTransform(62.2,47.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F7CE8B").s().p("AgWAaQABABgDgKQgBgHgMgDQgIgBACgBIAegHIACgLIAEgHQAFgHAGgBIAHgCIgVAbQACgBAEgDQARgOAHADQADADASgEQAKgBgWAOQguAcALAJg");
	this.shape_253.setTransform(60.4,41.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#F7CE8B").s().p("ABEBTQAIgGADgEQgUACgJgJQgBgBgLABQgGABAIgQIALgYQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAIACABIACgDIgHABQgHABgEADQgGADACAGQACAHgFAHQgFAHgFgIQgEgGgMgEQgHAMgLgLQgDgDgFgBIgDADQgQgBgMgDIAMgFIAEgNIgFADIgOAEIABAAQgbAWAAgNQAAgEACgDIgEABQgKABADgCQAKgGADgIQADgIgRAAIg0AgQgHAEAGgTIAFgIQAGgIAJgCIASgDIgFgFQAHgDASACQARABAFADQASAJAKABIACAAIABgDIAEAGQAFAGAGADQAGgHgCgMIAPgBQgBAPgFACIgGAGQAHACAEAGQAOgKASgDIAUgFQAIgFACgGQACgFgLABQgKABgNADIgKAEQgCgCADgJIAGgRQAEgIAHgDQAFgBAOADQAKADABgIIABgCQgBgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIACgBIAHgOQADgHAAgEIAAgEQgGgDgBgDQgBgEAIACIAEAAQAFgDAJABIARACQAJACACADQAJgDAKACIgaAXQgMAKAAgJQAAgJAEgEIgGgHQgDgEgFACQgGABABALIACAKQAHADgFAFQABAHgCAEQgDAEgIACQgRAFgKAFQgMAGAOAAQANgBAAAFQAAACgCACIAMAJIABAAQALACgCAXQgHAKgLAAQgLABADgHQABgEgMgDIAOAPIAGAHQAOACADACQASAKAMACQANABgSALQgHAEgkADIgFAAQgBAAgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_254.setTransform(47.7,44);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F7CE8B").s().p("AAEAAIgZgEIgBgDQAAgDAHgCQAKgCAGABQAJABAJAHQAJAGgMAHQgGAEgIACg");
	this.shape_255.setTransform(33.8,39.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F7CE8B").s().p("AgWAEQABgEAMgHQAHgFAKAGIAPAGQgJAJgWABIgCAAQgNAAABgGg");
	this.shape_256.setTransform(50.4,52.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#F7CE8B").s().p("AgIADQgEgEgDgFQgEgJAMAEQAjALgQAMIgDABQgFAAgMgKg");
	this.shape_257.setTransform(3.8,47.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F7CE8B").s().p("AgLALQgQgGAkgPQAKgEgCALQgBAFgDAGQgKAEgGAAIgIgBg");
	this.shape_258.setTransform(2,52.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F7CE8B").s().p("AgXAEQgEgEAIgDQATgHASADIAHAHQABAHgWABIgHABQgQAAgEgFg");
	this.shape_259.setTransform(2.5,56.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#F7CE8B").s().p("AABAJQgJgCgBgKQgBgLALAIQAJAGAAAFQAAAFgFAAIgEgBg");
	this.shape_260.setTransform(5.6,52.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F7CE8B").s().p("AgXASQgGgBgBgJIAAgIQACgHAEgGQAHgLAHANIACAHIALgCQAQgCANAIIgmALQgCAIgJAAIgGgBg");
	this.shape_261.setTransform(38.8,48.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#F7CE8B").s().p("AgsAFIAIAAQAAgEAHgDQAJgHAggGIASAIIAGgBQASAAgVALIgFAAIgCABIgoAIQAAABAAABQABAAgBABQAAAAgBAAQAAABgBAAQgGAAgWgLg");
	this.shape_262.setTransform(43.4,49.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#F7CE8B").s().p("AgDgBQAHgCAAAEQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgCAAgEgDg");
	this.shape_263.setTransform(27.9,40.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#F7CE8B").s().p("AgCANQgKgHgCgJQgCgHAMgDQALgEAIAHQgFABABACQACAGgCAJQgCAIgFAAQgDAAgDgDg");
	this.shape_264.setTransform(25.9,41.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#F7CE8B").s().p("AgLAAQAOgHANgBQAUAAgZANIgjAEIANgJg");
	this.shape_265.setTransform(17.5,56.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F7CE8B").s().p("AgfASIAHgDQAIgEAMgDQAMgCAEgNIABgNIASgCQgCASgHADQgDABgKALIgJAMQgRgCgOgDg");
	this.shape_266.setTransform(17.3,52.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#F7CE8B").s().p("AgiAGQAIgKAKgDQAGgDAQgCQARgCAOAKQgpAMgOADIgNACQgIAAAFgHg");
	this.shape_267.setTransform(9.8,56.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#F7CE8B").s().p("AgUARQgDgCAAgCQABgGAUgCQAUAAgJgHIgLgHIAagLIgFApQgTAAgUgEg");
	this.shape_268.setTransform(35.4,60.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#F7CE8B").s().p("AgTARIAEgJIAEgPQgQADgJAEQgJADAGgNIAPgFQAPgGAGAAQAIgBAHACQAIACgFAGIgGAQIANABQAPABAEAFQAFAEgMACIghAFIgJABQgKAAgBgGg");
	this.shape_269.setTransform(45.2,54);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#F7CE8B").s().p("AgOAYIgRgXQgHgDgFgFQgJgKAJgEQAYgKAIAVQAFANAaAGQAigCgGAEQgXAOgZAAIgOgBg");
	this.shape_270.setTransform(35.1,51.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F7CE8B").s().p("AgrAHQANgIABgFIARgEQAPgDABAFQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAHAAALADQAPADAEADQAEAEgJAAIgLABIgrACIgKAAQgXAAAFgFg");
	this.shape_271.setTransform(36.2,56.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#F7CE8B").s().p("AgPgFIAOABQAOABACAEQADAFgEAAQgHAAgWgLg");
	this.shape_272.setTransform(11.6,58.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F7CE8B").s().p("AgfAoIgZgKIAigKIAcgXIAIACQAJAAAIgPQAIgOALgGQALgHgGAHQgEAFgGAOQgGAQAEADQAEAGgCAFQgDAFgNAAQgOABgRAGQgSAHAJACQAKADgLACIgMACIgHgBg");
	this.shape_273.setTransform(26.6,56);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F7CE8B").s().p("AgyBJQgEgGgPgFQgKgEAEgDQARgNAVgEIAZgGQAJgFADgHQABgHgLABQgLACgPAEIgMAEQgBgDADgLIAEgKQABgDADgFQAGgJAIgDQAFgBAPADQAKADACgIQACgHAIgOQAHgMAAgFQAAgIAEgEQAGgGAMACIAYAEQAKAEgFAJQgGAKgIgFQgFgEgDgGQgDgFgGACQgHACAAAMIADAZQgBALgOAEQgTAEgLAHQgNAGAQgBQANAAAAAFQAAADgDACQAZARgLAEQgUAJgUACQgIABgFADQgGAEABAHQACAIgGAHQgDAEgDAAQgDAAgCgFg");
	this.shape_274.setTransform(27.4,48.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#F7CE8B").s().p("AgoAJIAjgYQA/AHgPAIQgIADgIgDQgKgDgKACQgNACgEACQgEABgCAEQgCAFgRACIgGABQgHAAAIgHg");
	this.shape_275.setTransform(23.5,44.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F7CE8B").s().p("AgUANQgKgQgCgCIAcAHIAIgGQAKgHAIgDQAJgDACAEIAAAJQAAADgEABQgLADgQAIQgKAFgFAAQgFAAgCgDg");
	this.shape_276.setTransform(18.9,48.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F7CE8B").s().p("AgcAYQABgCgBgJQgBgHgNgDQgJgDADAAQAQgFAOgCQAIgCAGgEQAUgRAHAFIAXgCQAMgBgaAPQg2AgALAJg");
	this.shape_277.setTransform(17.7,42.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F7CE8B").s().p("AAGANQACgEgJgDQgKgDgPgBQgNAAAFgGQAEgFALgEQAKgDAOgCQAQgBAIABQALACgFAYQgIALgNABIgCAAQgJAAADgHg");
	this.shape_278.setTransform(9.9,46.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F7CE8B").s().p("AgUASQALgHAEgJQAEgIgTAAQgWAAgDgEQgFgJAbAAQAZAAAIAFQASALANACQAOABgVALQgGAEgoAEIgGABQgBAAgBAAQAAAAAAAAQgBgBABAAQAAAAAAgBg");
	this.shape_279.setTransform(12.1,51.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F7CE8B").s().p("AgQADQgFgEADgGIgCAAIgBgEQAAgDAGgBQAJgCAGACQAIADAJAJQAHAFgGAGIADABQAEAHgKABIgFAAQgOAAgMgOgAgCAAIAGACIAAgCIgGgBg");
	this.shape_280.setTransform(109.1,32.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F7CE8B").s().p("AgZALIACgKIAEgHQAFgIAIgBIAUgCQALAAABAGIgNAIQAAAAABABQAAAAABAAQAAABAAAAQAAAAAAABQgBAAgEAAIgFAAIgBABIgaARIgBAAQgCAAAAgHg");
	this.shape_281.setTransform(111.4,39.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F7CE8B").s().p("AgLAEQAAgPALADQAGABAGAFQgNAMgGAAQgEAAAAgGg");
	this.shape_282.setTransform(116.1,41.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#F7CE8B").s().p("AgHALQgOgCABgHQABgEAKgHQAHgEAJAIIAOAJQgGAHgPAAIgHAAg");
	this.shape_283.setTransform(125.3,48.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#F7CE8B").s().p("AgJARQgBgCgLABQgFAAAHgQQAGgOADgLQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAAAQADACANAUQANANADAWIgFAAQgTAAgJgMg");
	this.shape_284.setTransform(128.3,45.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#F7CE8B").s().p("AgHADIgHgKQgEgLALAFQAiAQgPAMIgDABQgFAAgLgNg");
	this.shape_285.setTransform(81.8,37);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#F7CE8B").s().p("AABAKQgIgEgCgLQgBgLALAKQAIAGAAAHQABAFgDAAIgGgCg");
	this.shape_286.setTransform(83.7,43);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#F7CE8B").s().p("AAEASQgFgGgLgEIgJgCIAEgdIAGAJQAHAKAIAEQAMAEAHAPQgCADgEACIgDAAQgFAAgFgGg");
	this.shape_287.setTransform(121,41.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#F7CE8B").s().p("AgDATQgGgCgBgKIgBgIIAFgOQAGgMAGAQQAIASgDAJQgBAFgGAAQgDAAgEgCg");
	this.shape_288.setTransform(112.4,42.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#F7CE8B").s().p("AgUANQgKgBgDgGQgDgFAIgFQAIgGAegCIASALQAPALgTAAQgMAAgQADIgJABIgHgBg");
	this.shape_289.setTransform(118.7,44.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#F7CE8B").s().p("AgDgCQAGgBABAEQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgCAAgEgFg");
	this.shape_290.setTransform(103.7,32.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F7CE8B").s().p("AgRAPQgEgEABgDQAAgGATACQASABgIgIIgLgJIAYgJIgDAsQgSgCgSgGg");
	this.shape_291.setTransform(111.6,55.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#F7CE8B").s().p("AgRARIADgJIACgRQgOABgIAEQgGACABgGIACgHIANgEQAOgFAFAAQAIAAAHADQAIAEgFAGIgFARIANADQANADAFAGQAEAGgLABIgfAAIgCAAQgPAAgBgIg");
	this.shape_292.setTransform(120.6,49.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#F7CE8B").s().p("AgMAaIgRgaIgLgMQgKgMAJgDQAWgHAIAYQAFAPAZAJQAgACgGAEQgRAKgTAAQgKAAgLgEg");
	this.shape_293.setTransform(110.9,45.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#F7CE8B").s().p("AgOAKQgfgDAEgGQAMgHABgFIAPgDQAPgBAAAGQABAFACAAQAHAAAKAEQAgAPgSAAg");
	this.shape_294.setTransform(112.2,50.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#F7CE8B").s().p("AgbAlIgXgNIAfgHQAKgLAPgLIAHADQAIABAHgPQAHgPAKgFQAKgGgFAHQgEAFgEAPQgFAPADAFQAEAHgCAFQgCAGgMgBQgNgCgPAFQgRAEAJAFQAIAEgJABIgFABQgIAAgFgDg");
	this.shape_295.setTransform(103.2,49.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#F7CE8B").s().p("AgrBLQgEgIgOgHQgKgGAEgDQAQgLATgDIAWgDQAJgEABgHQACgIgLAAQgKAAgNADIgMADQgBgDADgMIAHgTQAEgJAIgCQAEgCAOAHQAKAEABgJQACgHAHgOQAGgNgBgFQgBgWAUAHIAXAIQAKAFgFAJQgEAKgIgGQgFgEgEgIQgCgGgGABQgGABABAOIADAcQAAAMgNACQgRADgKAGQgLAEAOACQAMABAAAGQAAADgCACQAYAWgKADQgUAHgQAAQgIgBgEADQgGAEACAIQACAJgGAIQgCADgCAAQgDAAgDgGg");
	this.shape_296.setTransform(103.6,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,130.8,73), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D72329","#CD2227","#B11E22","#921A1D"],[0,0.231,0.627,1],5.4,3.8,-11,-5.5).s().p("AgTC7IgTgCQgBABgFgCQgKgEgQgQQgRgPgWgwIgUgxQgCgFgajqQAMgDAxAVQA1AXAPAVQAOATgGBAIgFBOIAGA2QAKAiAhAHQA6AMAOABQAkADAagLQgEAEghAPQhHAggYABIgPAAIgegBg");
	this.shape.setTransform(51.8,54.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(36,36,31.5,37.7), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F7C3").s().p("AgEgIIgBgDIALARIgKAGQADgFgDgPg");
	this.shape.setTransform(4.4,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(3.8,6.1,1.3,2.5), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F7C3").s().p("AgKgDQAhgOASAKIgiADQgaADgVANQANgJARgGg");
	this.shape.setTransform(4.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,8.3,2.5), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F7C3").s().p("AhDAVQgZgKAQgLIAQAIQASALAPgCQARgCAUgIQASgHAGgEQAZgVAJgDQAKgCAFACQgXAIgLAMQgHAHgWAIIgcAMIgNAHQgGADgGAAIgBABQgNAAgUgJg");
	this.shape_1.setTransform(8.3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,16.6,5.9), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F7C3").s().p("AgKAOIgNABQgBgEAGgFQAGgGALgEIALgRQALgJAIgEQABAAAAAAQAAgBAAABQAAAAgBABQAAAAgBABQgJAFgBADIgLARIgHAPQgIAOgVANg");
	this.shape.setTransform(3,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0.1,6.1,7.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F7C3").s().p("AgDgUQANgFAVAMQALAHARANQgOgFgSgDQgigGgUALIgfATQAfgkAYgHg");
	this.shape.setTransform(5.9,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,11.8,4.5), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F7C3").s().p("AgxAIIAGgOQgRgBgQAMQAGgHAJgCQAIgDAIgKQAFgFANgEQAagGALADIArAKQALACANgEQAAACgDACQgGAEgOgBQgggCgRgDQgBAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABIgCAGQgGAGgOgCQAMgKgDAAIgMACQgDAAgDADQgKALAJAEIAMAEQABAAABABQABAAABAAQAAABAAAAQAAAAgBAAQgQgCgGgDIAAgHIgJAPIgLASQAFgQADgHg");
	this.shape_1.setTransform(7.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,15.5,6.2), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F7C3").s().p("AAFgRQASgHARgCQgiAPgUAPIgZAXQAHgdAlgPg");
	this.shape_1.setTransform(4,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,8.1,5.3), null);


(lib.Group_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E7F7C3").s().p("AAoAMIgHgNIgBAGQgFACgOABIANgFQAHgCgHgKQgCgDgDAAIgKgCQgBAAAAAAQAAAAAAABQAAAAABABQABABABABIAFAEQgNACgEgGQgCgIgCAAQgXADgUAAQgMABgFgEIgDgDIAIABQAHACAGgBIAmgHQAKgDAVAHQAMADAEAFQAGAJAIACQAHADAGAGQgJgGgLgDIgJgCIAFANIAGAUIgJgQg");
	this.shape_67.setTransform(15.8,9.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E7F7C3").s().p("AAAAHIgFgNIgIgPQgCgDgHgFQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAAAABABQAHAEAJAIIAJAPIAPAJQAFAFgCADIgLgBIAQATQgSgNgHgMg");
	this.shape_68.setTransform(29.7,16.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E7F7C3").s().p("AAGASQgmgQgKgKQgFgGgNgHIgLgFIAEAAIAJABQAIACAVATQAFAEAQAGQAQAIAPADQANACAQgJIAOgIQAVARg7AIQgHAAgPgJg");
	this.shape_69.setTransform(27.4,10.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E7F7C3").s().p("AgFgEIgdgEQAQgIAcAOQAOAGALAIQgSgMgWgEg");
	this.shape_70.setTransform(3.5,4.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E7F7C3").s().p("AgWAdIASgdQASgdAJgGQgeAngEANQgEAOACAFg");
	this.shape_71.setTransform(20.7,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_1, new cjs.Rectangle(0,0,34.6,19.9), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#528E40").s().p("AAQgrQg+gYhmgDQgzgBgmADQCWglCrBWQBOAmBMA9QhihMh8gvg");
	this.shape.setTransform(23.8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,47.7,16), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiYAxQhDgQhIgZIhighQhWgahbAmIBIggQBhggBkANQAWADBmAcQBNAUBxACQBNACC0gWQCBgQA6AWQBAAZAbAVQAOALABAGQgegQgqgMQhSgXg3ATQitA/igAAQhaAAhXgUg");
	this.shape_1.setTransform(93.1,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(36.5,36,113.3,13.8), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EB2026"],[0,1],-31.1,-18.7,0,-31.1,-18.7,102.3).s().p("AIrCuQgahEggg2QhcifijhPQgngUhQgDQhNgDg2AOQhVAVifgOQi3gQiXg5IBuAXQCEAbBAAGQBNAHA6gBQA3gCA3gJQBkgRA8AEQB9AJBiBNQBXBBBBBrQBBBuAWB7QgSg2gOglg");
	this.shape_1.setTransform(94.7,62.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(36,36.1,117.4,53.1), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FFFDFD","#FEF6F5","#FDEBE7","#FBDAD4","#F9C5BB","#F7AA9C","#F48C78","#F3816C"],[0,0.302,0.463,0.592,0.702,0.8,0.89,0.976,1],0,0,0,0,0,32.5).s().p("AiiEYQhzhEgiiDQgiiBBDh0QBEh0CBgiQCBgiBzBFQBzBEAiCDQAiCChDB0QhEBziBAiQgrALgoAAQhUAAhNgug");
	this.shape_2.setTransform(68.3,68.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(36,36,64.7,65.3), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFDFD","#FEF6F5","#FDEBE7","#FBDAD4","#F9C5BB","#F7AA9C","#F48C78","#F3816C"],[0,0.302,0.463,0.592,0.702,0.8,0.89,0.976,1],0,0,0,0,0,18).s().p("Ah3CGQgzg3ABhPQgBhNAzg4QAxg3BGAAQBHAAAxA3QAzA4AABNQAABPgzA3QgxA3hHAAQhGAAgxg3g");
	this.shape_1.setTransform(53.1,54.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(36,36,34.1,37.8), null);


(lib.Path_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#230C0C").s().p("AEMBtQgMgGgqgEQgogEgrAAQg6AHgjgFQg9gHg1g5QgogrgQgQQgYgZgbgQQgKgGgmgBIgjABIgDgaIA4gIQBCgFA1AOQA1APCEBLQBDAlA4AiQA8AvgEAAIgCgBg");
	this.shape_2.setTransform(63,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(36,36,54,21.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#600A0C").s().p("ADHJRQhZgJhCAEQg7ADgqgGQh4gRhShCQhPhBipjXQitjcAtlBQAXiiA5h1QhpE0AxDTQARBMAmBEQALAUAzBMQB/C+B4BdQCJBrCLgKQAOgBAegFQAmgCBQARQBgAUCGgMQCJgNBXgnQhKA3h8AXQhLAPhOAAQgvAAgwgGg");
	this.shape_2.setTransform(100.5,95.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(36,36,129,119.7), null);


(lib.Group_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#600A0C").s().p("AAWBGIAAgIQAAgKADgGQACgFgHgMQgJgPAAgJQAAgIgKgLQgKgNgBgIQgBgJgXgNQgTgLAHgDQANgFAVATQAQARADAKQABAEAKAUQALAUACAKQAFAUANAdg");
	this.shape_54.setTransform(101.7,32.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#600A0C").s().p("AAoBUQgFgHgJgLIgTgXQgIgLgNgOQgLgKgBgDQgBgFgHgMIgFgLQAEgYAJgdQAFgRgigOIAZAJQAYAJAAAFQAAAIgSAfQgEAIAIAKQAFAHARAUIAOARIACAEQAFAIAhBPIgQgYg");
	this.shape_55.setTransform(103.8,20.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#600A0C").s().p("Ag/BSIAOgnQACgHgCAAQgDgBgEgIQgDgHAHgDQAJgCAFgDQANgIALgKIARgZQAPgWAQgSQATgUAHAHQAEADAAAHQgJAIgbAOQgQAJAAAIQgCAQgCADIgLAVIgSAkQgIAVADAPQABAGgCgBIgSAEIgJABQgHAAgCgFg");
	this.shape_56.setTransform(6.4,17);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#600A0C").s().p("AgMAlQgCgFABgIQABgMgCgPQgEgeANgEQAEgCAJAGIAIAGIgLAjIgIAWQgEAJgDAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_57.setTransform(8,28);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#600A0C").s().p("AgoAvQgBgFAFgHQAHgHAAgIIAAgOQAAgLAOgQQAKgLAIgHIAmgYIgaAeQgNAOgBAJQgBAFAIALQAHAKgJAJQgGAIgMARQgIAMgFACIgCAAQgJAAgEgRg");
	this.shape_58.setTransform(13.1,15.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#600A0C").s().p("AA8A+QgNgDgBABQgFAEgEgOQgFgUgFgLQgFgNgJgJIgPgRQgLgQglgUIgJgFIA0AXIAIAFQgBAAAAAAQAAAAAAABQAAAAAAABQABABABABIARAQQALANARAhQAPAdgCAAIAAAAg");
	this.shape_59.setTransform(91.3,13.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#600A0C").s().p("Ag1BuQgKgHgDgEQgFgFAEgTQAEgRAFgOIAFgQIAFgRQAEgLAIgHIASgTQALgMAGgDQACgCAHADQAEABAIgLIAUgfQANgTALgKQALgLgJAbQgOAoAAANQAAAxgKACIgLABIgEABQABAIgCABQgDACACgHQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAIAAgEQgCgGANgYQAGgMgWAUQgUARgSAOQgIAHABALQABAHAEAIQACAEgDAKIgHAXQgDALgGAEQgFAEgEAHIgDABQgCAAgEgEg");
	this.shape_60.setTransform(16.6,22.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#600A0C").s().p("AgRBYQgDgGAAgFIABgiQAAgKgCgGQgCgEgCAEQgCADgEANIgNAvQgCgPACgOIADgVQADgOAIgMQAGgKAAgOQgBgWABgHQADgPAGADIALAMQAEAFAAgCQACgEAHgBQANgCAEgrQABAMAJgIQAFgEAFgHQgFAXgFAKIgPAkIgHAQQgBADABAEQABACgCAVQgCAWABAMQACAWgIAMQgLAEgFAAQgEAAgDgGg");
	this.shape_61.setTransform(29,31.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#600A0C").s().p("AgrBYQgKgJAGgOIAJgQQACgEABgLIABgPQAAgFAGgRQAEgNgFgCQgCgBALgLIAYgWQAJgIAAgGQAAgGAPgLQAOgKAIAAQgOAQgDAdQgCAWgEAMQgDAMgIANIgIASQgCAHgFAEIgEAGIgHAKIgOARQgGAJgBAHQgBAFgDAAQgDAAgFgGg");
	this.shape_62.setTransform(28.1,16.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#600A0C").s().p("AgQAcIgEgHQgCgDADgGIAEgJQACgEAEgEQAHgHAYgSQgFAHgFALIgFANQgBADgGAEQgCADAAAHQAAAHgGAFIgFABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_63.setTransform(37.4,6.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#600A0C").s().p("AgOCYQgGgQgNgSQgMgQAAgCQAAgFADgLIAEgPQABgEAMgPIAGgIQgDAEgCALQgCALAAAKQAAAIAHAGQAIAHAFgDIAOgGQAJgHABgQQABgNAFgOQADgJgCgEQgCgEgIgJIgHgIQgLgbADgSIAEgNQACgGABgKQABgJAHgQIAHgSIAEgKQADgHgCgDQgFgHgCgGQgCgJAJACIAIAFQAIAIgDAOIgHAfIgIAiQgCAOgFAQQgCAKAHAJIAQARQAHAJgBALQgEAugEAHIgIATQgGANgFAEIgSAXQgKANgDAAIgBAAg");
	this.shape_64.setTransform(39.6,20.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#600A0C").s().p("AgrBeQgNgEAGgNIATggQAKgSACgIIAKgvIAIghQACgGAEgOQAHgXACAMIABAaIAAAOQgCAGACADQADAFAKgLQALgMAIgVIAFAiQABAEgCAJIgEAMQgCAIACASQACAPgKAMQgHgFgNgCQgJgBAAAFQAAADAFAJQADAGgMAWIgPAZQgDAFgKAAQgIAAgNgDg");
	this.shape_65.setTransform(49.2,9.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#600A0C").s().p("AAOA3QgGgCgEgEIgHgHQgJgGgCgUIgFgQQgEgMAAgMQgBgPgCgHIgHgTIAGAMQAIAQAFASQAFAPADAEQACAEABAGQACAIADAGIAKAMIAWAeQgKgHgKgEg");
	this.shape_66.setTransform(89.5,16.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#600A0C").s().p("ABBCbQgQgKAAgQIACgPQABgIgDgJIgGgRQgDgIgLgNQgEgGgGgDQgHgEgFgEQgGgGgCgKQgFgVgEgKQgHgkgHgPQgDgIgGgGQgHgJgEgGIgbgyQAMANAWANIAUAWQAFAIAAAJQAAAHAEAKQAFAJAAAHQAAAKAMAZQAMAVANAQIAGAFIAOAHQAMAHAEAFIAJAOQAGAJgCAFQgEAKAAADQAAADgGAOQgFAMAEAMQAEAMgFACgAhQiUQgIgSARAfQgGgGgDgHg");
	this.shape_67.setTransform(86.9,20);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#600A0C").s().p("AATBjQAAgKgJgfQgEgNABgCQABgBAAgFQAAgIgDgNQgCgNgDgGQgCgGABgNIABgbQAAgNgUgWQgPgRAEABQATAIAMAMQAIAKACAJQACAKADAmIACAJQAAgBAAAAQAAAAABAAQAAABAAABQABABAAABQAFALAJAkQADAKgIAZQgHAUgBAAIgBgCg");
	this.shape_68.setTransform(76.7,18.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#600A0C").s().p("AAWBBQgCgFgFgGQgJgKgBgEQgBgGACgJIAEgTQACgOAAgTQAAgIgGgCQgNgGgHgFQgKgJABgMQADgUgDgMIAJATQAKAUAHAJQAKAKAGAdQAGAagCAXIgBAeIABAGQAAAMgCATIABglg");
	this.shape_69.setTransform(70.3,14.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#600A0C").s().p("AAVBjQACgMgEgKQgFgLgCgKIgCgSIgEgTQgBgMAFgQQAEgQgKgFQgOgKgCgDQgFgIgIgBIgLgDQgFgDgBgcQgBgtACAhQACATAKAIIAWALQAPAIAPAQQAGAGgBAKIgDAUQAAAcAQAuQAHAWgNAKIgOAHIAAgOg");
	this.shape_70.setTransform(67.4,17);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#600A0C").s().p("AAICbIgIgVQgBgJABgGQAAgFgBgSQgCgUABgKQABgMgBgPIgCgmQgCgZgDgNQgDgOgIgbQgHgXAJggQAGgVAIgNIAHADQAHAHgEAMQgEAJACAIQADAMgBAQIgDAgQAAAJAHAWQAGASAAAEQgBAGAEAMQAGASAAArIgBBIQAAAdgGADIgBAAQgEAAgFgNg");
	this.shape_71.setTransform(58.6,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8_1, new cjs.Rectangle(0,0,109.4,40.8), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#600A0C").s().p("AgPBTQgEgFgBgEQABgRgCgNQgBgJgDgFQgDgEgDAEQgCACgDALIgKApQgEgLABgNIABgUQACgMAIgKQAHgKgCgNQgDgYAAgFQACgRAIAEIAQAOQAGAEABgBQACgEAHAAQALgBAFgXIADgWQACANAMgJIALgKIgDANQgEAPgEAFQgFAHgMAdIgIAQIABAFQABADAAASQgBAVACAKQADATgJAJQgMADgGAAQgEAAgEgEg");
	this.shape.setTransform(8.7,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#600A0C").s().p("AgyBpQgPgMAGgOIAJgSQADgEAAgNIgBgSQAAgHAEgUQAFgRgIgDQgDgBAPgNIAigaQALgJgBgIQAAgJAVgMQAUgMAMACQgEAFgGAKQgKAUgBAYQgCAcgEAPQgEANgJAQQgFAJgEAMQgDAIgGAEQgEADgBADQgCAEgGAHIgRASQgIAJgBAHQAAAFgEAAQgEAAgHgGg");
	this.shape_1.setTransform(6.1,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#600A0C").s().p("AgXAkIgGgLQgDgFAEgHIAGgNQADgFAFgFQAKgJAjgVQgHAKgGAPIgJASQgBADgIAFQgEAEAAAJQAAAKgJAFQgDACgCAAQgEAAgBgFg");
	this.shape_2.setTransform(18.7,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#600A0C").s().p("AgVCjQgGgOgQgRQgNgOAAgCIAIgdQABgEAOgPIAHgHQgDAFgCAJQgDAMAAAJQAAAHAIAHQAJAGAGgCQAKgCAFgEQALgFACgPQACgNAFgNQAEgJgBgEQgCgEgJgKIgIgJQgOggAGgSIAEgPIAEgSQACgMAKgTQAKgTAAgCQAAgCAFgLQAFgIgCgFQgGgLgCgIQgDgNAMAFIALAIQAKAMgFATIgMAnIgMAoQgDAPgHARQgDAMAJAKIARAUQAIAJgCAMQgIAsgFAGIgJARQgHALgGAEIgUATQgMAMgDAAIgBgBg");
	this.shape_3.setTransform(21.5,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#600A0C").s().p("Ag9BwQgPgFAHgNIAagjQAOgUAEgJIARg5QAMgqACgBQAFgGAIgTQANghAAASIgDAlQAAAHgDAMQgDAJACAEQADAGAOgNQAQgOAOgbIgBAvQABALgMAUQgEAIgBAYQgBARgNAOQgHgHgQgEQgKgDAAAGQAAAEAEALQADAHgQAWQgJAMgMAOQgEAEgIAAQgKAAgRgGg");
	this.shape_4.setTransform(33.8,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#600A0C").s().p("AgcCjIgEgRQgBgHACgGQACgDABgRQABgRADgKQADgLACgOIAFglQADgZgBgQQAAgPgEggQgDgdASgnQALgbAMgOIAJAGQAHAKgIAPQgHAMAAAKQABAPgGAUIgKAjQgCALADAZQACASgBAFQgCAFABAOQACASgIAnIgNA/QgFAXgGADIgBAAQgEAAgCgLg");
	this.shape_5.setTransform(43.9,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0.1,47.4,42.6), null);


(lib.Group_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#600A0C").s().p("AgYBNIgFgTQgCgMAEgNQAEgMgGgNQgKgTgCgHQgEgPAJABIAUAGQAHADAAgCQABgEAIgDQAIgFgCgXIgEgXQAGAMAIgMIAIgPIABAPQAAAOgBAHQgCAIgDAgIgCASQgBACADACQACADAFARQAGATAFAKQAJAQgFANQgMAHgFACQgEACgGgDQgFgDgCgEQgFgQgEgMQgEgJgEgCQgFgEgBAFQgBAEABAMIADApQgIgKgDgLg");
	this.shape_90.setTransform(12.6,42.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#600A0C").s().p("AgEB5QgRgGABgPIADgUQABgGgEgLIgHgRQgCgHgBgVQgCgRgIAAQgDAAAKgRIAYglQAIgNgDgHQgDgJAPgSQAQgSALgDIgEARQgDAXAGAXQAHAcABAPQABAPgEARQgCAJgBAOQAAAIgEAGQgEAFAAADQgBAFgDAIIgLAXQgEALABAHQACAGgHAAIgJgBg");
	this.shape_91.setTransform(4.3,27.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#600A0C").s().p("AgHAsIgJgIQgFgDACgIIACgPQABgGADgGQAEgHAPgUIAPgSQgEANgCAQIgCAUQAAADgFAIQgEAFACAIQAEAKgHAIQgDAEgCAAQgDAAgCgEg");
	this.shape_92.setTransform(13.3,12.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#600A0C").s().p("AAHCkQgJgLgTgKQgRgJgBgCIgCgPIAAgPQgBgHAPgcQgDAFABANQABAMADAJQACAHAKADQAKACAEgEQAKgFAEgGQAJgJgDgPQgDgMACgOQAAgLgCgDQgEgDgLgHIgJgFQgZgYAAgUIABgPIgCgTQgCgMADgWQAEgVgBgCIACgOQABgJgDgEQgKgIgEgHQgGgLANAAIANAEQANAHABAUIAAApQAAAXACATQABAQgBASQABAMAKAGIAXAMQAKAHACALQAGAsgCAIIgEATQgDANgEAGIgOAaQgIARgDAAIgBgBg");
	this.shape_93.setTransform(23.7,26.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#600A0C").s().p("AgvBuIANgpQAHgYABgLIgCg8QAAgrABgDQACgGACgWQADgkAFASIAJAjQACAHAAAMQABAJADAEQAEAFAJgRQAKgTAFgfIAOAtQADAHgEAaQgBAKAHAXQAEAPgIASQgJgEgQABQgKACABAGQABADAIAJQAFAFgJAcQgFAOgHARQgEALggACIgCAAQgOAAADgPg");
	this.shape_94.setTransform(30.9,12.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#600A0C").s().p("AAbCkIgJgOQgDgHABgGQAAgEgEgQQgEgRgBgJQAAgNgCgNIgHglQgFgagFgNQgFgOgOgdQgMgaAFgsQADgdAHgSIAKADQAJAGgDARQgCAOADAJQAFAPABAUIACAmQABAKAKAXQAIAQAAAFQAAAFAGANQAHARAFAnIAFBBQADAYgEADIgCABQgEAAgFgIg");
	this.shape_95.setTransform(41.6,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_1, new cjs.Rectangle(0.1,0,45.6,52), null);


(lib.Group_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#600A0C").s().p("AgYBNIgFgTQgCgMAEgNQAEgMgGgNQgKgTgCgHQgEgPAJABIAUAGQAHADAAgCQABgEAIgDQAIgFgCgXIgEgXQAGAMAIgMIAIgPIABAPQAAAOgBAHQgCAIgDAgIgCASQgBACADACQACADAGARQAFATAFAKQAJAQgFANQgMAHgFACQgEACgGgDQgFgDgCgEQgFgQgEgMQgEgJgEgCQgFgEgBAFQgBAEABAMIADApQgIgKgDgLg");
	this.shape_72.setTransform(12.6,42.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#600A0C").s().p("AgEB5QgRgGABgPIADgUQABgGgEgLIgHgRQgCgHgBgVQgCgRgIAAQgDAAAKgRIAYglQAIgNgDgHQgDgIAPgTQAQgSALgDIgEARQgDAXAGAXQAHAcABAPQABAPgEARQgCAKgBANQAAAIgEAGIgEAIQAAAFgEAIIgKAXQgFALACAHQABAGgHAAIgJgBg");
	this.shape_73.setTransform(4.3,27.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#600A0C").s().p("AgHAsIgJgIQgFgDACgIIACgPQAAgGAEgGQAEgHAPgUIAOgSQgEANgBAQIgCAUQgBADgFAIQgEAFADAIQADAKgGAIQgDAEgCAAQgDAAgCgEg");
	this.shape_74.setTransform(13.4,12.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#600A0C").s().p("AAHCkQgJgLgTgKQgRgJgBgCIgCgPIAAgPQAAgEAIgTIAFgJQgCAFABAKQABAMADAJQACAHALADQAKADADgFQAKgFAEgGQAJgJgDgPQgCgMABgOQABgLgDgDQgEgDgLgHIgJgFQgZgYAAgUIABgPIgCgTQgCgMADgWQAEgVgBgCIACgOQABgJgDgEQgJgIgEgHQgHgLANAAIANAEQANAHABAUIAAApQAAAXACATQABAQgBASQABAMAKAGIAXAMQALAHABALIAEAcQACASgCAGIgEATQgDANgEAGIgOAaQgJARgCAAIgBgBg");
	this.shape_75.setTransform(23.7,26.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#600A0C").s().p("AgvBuIANgpQAIgYAAgLIgBg8QgBgrABgDQACgHACgVQADgkAFASIAJAkQACAGABAMQAAAKADADQAEAFAJgRQAKgTAFgfIAOAtQADAHgEAaQgBAKAHAXQAEAPgIASQgJgEgQABQgKACABAGQABADAIAJQAFAFgJAcQgFAOgHARQgEALggACIgCAAQgOAAADgPg");
	this.shape_76.setTransform(30.9,12.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#600A0C").s().p("AAbCkIgJgOQgDgHABgGQAAgEgEgQQgEgRgBgJQAAgMgCgOIgHglQgFgagFgNQgFgNgOgeQgMgaAFgrQADgdAHgTIAKADQAKAHgDARQgDAOADAJQAFAOACAUIABAmQABAKAKAXQAIAQAAAFQAAAGAGAMQAHARAFAnIAGBBQACAYgEADIgCABQgEAAgFgIg");
	this.shape_77.setTransform(41.6,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_2, new cjs.Rectangle(0.1,0,45.6,52), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#600A0C").s().p("AgYBMIgFgTQgCgMAEgNQAEgLgGgNQgKgTgCgGQgEgPAJAAIAUAGQAHADAAgCQABgEAIgEQAIgEgCgXIgEgXQAGAMAIgMIAIgPIABAOQAAAPgBAHQgDAIgCAfIgCATQgBABADADQACACAGASQAFATAFAJQAJARgFANQgMAHgFACQgEACgGgDQgFgDgCgEQgFgQgEgMQgEgIgEgDQgFgDgBAEQgBADABAMIADArQgIgLgDgMg");
	this.shape.setTransform(12.6,42.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#600A0C").s().p("AgEB5QgRgGABgQIADgTQABgGgEgLIgHgSQgCgGgBgVQgCgRgIgBQgDAAAKgQIAYglQAIgNgDgHQgDgJAPgSQAQgTALgDIgEASQgDAXAGAXQAHAbABAPQABAQgEARQgCAKgBANQAAAIgEAFIgEAJQAAAFgEAIIgKAXQgFALACAHQABAHgHAAIgJgCg");
	this.shape_1.setTransform(4.3,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#600A0C").s().p("AgHAsIgJgIQgFgEACgIIACgOQAAgGAEgGQAEgIAPgTIAOgSQgEANgBAPIgCAUQgBAEgFAHQgEAGADAIQADAKgGAHQgDAFgCAAQgDAAgCgEg");
	this.shape_2.setTransform(13.4,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#600A0C").s().p("AAHCkQgJgLgTgKQgRgJgBgCIgCgPIAAgPQAAgHAOgbQgDAFABANQABALADAJQACAHALADQAKADADgFQAKgFAEgFQAJgKgDgPQgCgMABgOQABgLgDgCQgEgEgLgGIgJgGQgZgYAAgUIABgPIgCgTQgCgLADgWQAEgVgBgDQAAgCACgMQABgJgDgEQgJgIgEgHQgHgLANAAIANAEQANAIABAUIAAAoQAAAXACATQABAQgBASQABAMAKAGIAXANQAKAGACAMQAHArgDAIIgEAUQgDANgEAFIgOAaQgJARgCAAIgBgBg");
	this.shape_3.setTransform(23.7,26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#600A0C").s().p("AgvBuIANgqQAIgXAAgLIgBg8QgBgsABgCQACgHACgVQADgkAFASIAJAjQACAHABAMQAAAJADADQAEAGAJgRQAKgUAFgeIAOAtQADAHgEAaQgBAKAHAXQAEAPgIARQgJgEgQACQgKACABAFQABAEAIAJQAFAFgJAcIgMAfQgEALggACIgBAAQgPAAADgPg");
	this.shape_4.setTransform(30.9,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#600A0C").s().p("AAbCkIgJgPQgDgGABgGQAAgEgEgQQgEgRAAgKQgBgLgCgPIgHgkQgFgagFgOQgFgNgOgdQgMgaAFgsQADgdAHgSIAKADQAKAGgDARQgDAOADAJQAFAPACAUIABAlQABALAKAWQAIARAAAEQAAAGAGANQAHAQAFAoIAGBAQACAYgEAEIgCABQgEAAgFgIg");
	this.shape_5.setTransform(41.6,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0.1,0,45.6,52), null);


(lib.Group_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0573F").s().p("AgFABQgBgFAFgCQAFgBABAGQACAGgFACIgCAAQgDAAgCgGg");
	this.shape.setTransform(110,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0573F").s().p("AgEACQgCgHAFgBQAFgCACAIQABAGgFABIgBAAQgEAAgBgFg");
	this.shape_1.setTransform(125.3,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0573F").s().p("AgDABQgCgGAEgBQADgBADAHQABAFgEACIgBAAQgDAAgBgGg");
	this.shape_2.setTransform(150.9,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0573F").s().p("AgDABQgDgGAFgBQAEgBACAHQABAGgEABIgBAAQgDAAgBgGg");
	this.shape_3.setTransform(141.6,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0573F").s().p("AgDABQgCgGAEgBQAEgBABAHQACAGgEABIgBAAQgDAAgBgGg");
	this.shape_4.setTransform(149,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0573F").s().p("AgDABQgCgGAEgBQADgBACAHQACAGgEABIgBAAQgDAAgBgGg");
	this.shape_5.setTransform(132.7,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0573F").s().p("AgDABQgCgGAEgBQAEgBACAHQABAGgEABIgBAAQgDAAgBgGg");
	this.shape_6.setTransform(117.6,36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0573F").s().p("AgDABQgDgGAFgBQADgBACAHQACAGgEABIgBAAQgDAAgBgGg");
	this.shape_7.setTransform(130.6,31);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0573F").s().p("AgCAGQgBgCgBgDQgCgGAFgBQAFgBABAGQACAGgFACIgBAAIgDgBg");
	this.shape_8.setTransform(126.9,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0573F").s().p("AgEACQgCgGAFgCQAFgCACAIQABAFgFACIgCAAQgDAAgBgFg");
	this.shape_9.setTransform(148.3,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0573F").s().p("AgEACQgCgHAFgBQAFgCACAIQABAGgFABIgBAAQgEAAgBgFg");
	this.shape_10.setTransform(141.7,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0573F").s().p("AgFACQgBgHAFgBQAFgCACAIQABAFgFACIgBAAQgEAAgCgFg");
	this.shape_11.setTransform(125.6,25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F0573F").s().p("AgBAGIgCgEQgCgGAEgCQAEgBABAGQACAGgFACIgBAAIgBgBg");
	this.shape_12.setTransform(32.9,29.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0573F").s().p("AgDACQgCgGAEgCQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAABIACAEQACAFgEACIgCABQgCAAgBgFg");
	this.shape_13.setTransform(20.7,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0573F").s().p("AgDACQgBgGADgBQADgCABAHQACAGgEABIgBAAQgBAAgCgFg");
	this.shape_14.setTransform(0.4,32.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0573F").s().p("AgDACQgBgGADgCQABAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIACAEQACAGgEACIgBAAQgBAAgCgFg");
	this.shape_15.setTransform(7.8,39.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F0573F").s().p("AgDACQgBgGADgCQABAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIACAEQACAGgEACIgBAAQgBAAgCgFg");
	this.shape_16.setTransform(1.9,51.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F0573F").s().p("AgDACQgBgGADgCQACgBACAGQACAGgEACIgBAAQgBAAgCgFg");
	this.shape_17.setTransform(14.9,42.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0573F").s().p("AgDACQgBgGADgCQACgBACAGQACAGgEACIgBAAQgBAAgCgFg");
	this.shape_18.setTransform(26.8,17.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F0573F").s().p("AgDACQgBgGAEgCQABgBACAGQACAGgEACIgBAAQgBAAgCgFg");
	this.shape_19.setTransform(16.5,24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F0573F").s().p("AgDACQgCgGAFgCQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAABIACAEQACAFgEADIgCAAQgCAAgBgFg");
	this.shape_20.setTransform(19.5,51.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0573F").s().p("AgDACQgCgGAFgCQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQACAGgEACIgCAAQgCAAgBgFg");
	this.shape_21.setTransform(2.4,23.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F0573F").s().p("AgDACQgCgFAFgDQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAABQAAAAAAABQACAGgEACIgCAAQgCAAgBgFg");
	this.shape_22.setTransform(7.6,33.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F0573F").s().p("AgBAGIgCgEQgCgFAEgCQADgDACAHQACAGgFACIgBAAIgBgBg");
	this.shape_23.setTransform(20.5,29.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F0573F").s().p("AAAAHIgDgEQgDgEAEgEQACgDAEAGQADAFgEADIgCABIgBAAg");
	this.shape_24.setTransform(33.4,54.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F0573F").s().p("AgDADQgDgEADgEQADgDAEAGQADAFgDADIgDABQgBAAgDgEg");
	this.shape_25.setTransform(19.8,52);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0573F").s().p("AgCADQgDgFADgDQACgCADAFQADAGgCACIgCABQgCAAgCgEg");
	this.shape_26.setTransform(3.1,66.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F0573F").s().p("AgCACQgDgFADgCQAAAAAAAAQAAgBABAAQAAAAABABQAAAAAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABABAAQAEAFgEADIgBABQgCAAgCgFg");
	this.shape_27.setTransform(12.5,71.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F0573F").s().p("AgCADQgEgFAEgDQACgCADAFQAEAGgEACIgBABQgCAAgCgEg");
	this.shape_28.setTransform(10.3,84.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F0573F").s().p("AgCADQgDgGADgCQACgCADAFQADAGgCACIgCABQgCAAgCgEg");
	this.shape_29.setTransform(19.9,72);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F0573F").s().p("AgCADQgDgFADgDQACgDADAGQAEAGgDACIgCABQgCAAgCgEg");
	this.shape_30.setTransform(24.1,45.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0573F").s().p("AAAAGQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgEgFADgDQADgCADAGQADAEgDADIgBABIgCgBg");
	this.shape_31.setTransform(16.2,54.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F0573F").s().p("AAAAHQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgEgEAEgEQACgDAEAGQADAEgDAEIgDABIgBAAg");
	this.shape_32.setTransform(27.2,79.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F0573F").s().p("AAAAHIgDgEQgDgFAEgDQACgDAEAGQACAFgDADIgCABIgBAAg");
	this.shape_33.setTransform(2.5,58.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F0573F").s().p("AgDADQgDgFADgDQADgDADAGQAEAFgEADIgCABQgBAAgDgEg");
	this.shape_34.setTransform(10.4,65.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0573F").s().p("AgDADQgDgEADgEQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAEAFgEADIgCABQgBAAgDgEg");
	this.shape_35.setTransform(21.5,58.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0573F").s().p("AAAAHQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgDgEADgEQADgDADAGQAEAFgEADIgCABIgBAAg");
	this.shape_36.setTransform(60.6,82.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F0573F").s().p("AgDADQgDgEADgEQADgDADAGQAEAFgEADIgCABQgBAAgDgEg");
	this.shape_37.setTransform(47,80);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F0573F").s().p("AgCADQgDgFACgDQADgCADAFQADAFgDADIgBABQgCAAgCgEg");
	this.shape_38.setTransform(30.4,94.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F0573F").s().p("AgCADQgDgFADgDQACgDADAGQADAFgCADIgCABQgCAAgCgEg");
	this.shape_39.setTransform(39.7,99.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F0573F").s().p("AgCADQgDgFACgDQADgCADAFQADAGgDACIgCABQgBAAgCgEg");
	this.shape_40.setTransform(37.5,112.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F0573F").s().p("AgCADQgEgGADgCQADgCADAFQADAGgCACIgCABQgCAAgCgEg");
	this.shape_41.setTransform(47.2,100.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F0573F").s().p("AgCADQgDgFADgDQACgCADAFQADAGgCACIgCABQgCAAgCgEg");
	this.shape_42.setTransform(51.3,73.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F0573F").s().p("AgCADQgEgGAEgCQACgCADAFQAEAFgEADIgBABQgCAAgCgEg");
	this.shape_43.setTransform(43.4,82.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F0573F").s().p("AgDADQgDgFADgDQADgDAEAGQADAEgDAEIgDABQgBAAgDgEg");
	this.shape_44.setTransform(54.5,107.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F0573F").s().p("AAAAHQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgEgFAEgDQACgDAEAGQADAFgDADIgDABIgBAAg");
	this.shape_45.setTransform(29.7,86.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F0573F").s().p("AgDADQgDgFADgDQABAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAEAFgEADIgCABQgBAAgDgEg");
	this.shape_46.setTransform(37.6,93.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F0573F").s().p("AAAAHQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQgCgGADgDQACgDAEAGQADAGgEACIgCABIgBAAg");
	this.shape_47.setTransform(48.7,86.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F0573F").s().p("AgFAEQgCgEAHgDQAEgEACAFQABADgFAEIgEABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_48.setTransform(122.7,68.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F0573F").s().p("AgFAEQgCgEAHgEQAFgDABAFQABADgFAEIgEABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_49.setTransform(135.7,73.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F0573F").s().p("AgFAEQgBgEAGgCQAFgEABAEQABACgGAEIgDABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_50.setTransform(143.1,94.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F0573F").s().p("AgFAEQgBgEAGgDQAEgDACAEQABACgGAEIgDABQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_51.setTransform(132.5,93.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F0573F").s().p("AgFADQgBgDAGgDQAFgDABADQABAEgGACIgEACQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_52.setTransform(128.1,106.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F0573F").s().p("AgFAEQgBgEAGgDQAFgDABADQABADgGAEIgDABQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_53.setTransform(125.8,90.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F0573F").s().p("AgFADQgBgDAGgDQAFgDABADQABADgGADIgDACQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_54.setTransform(135.3,65.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F0573F").s().p("AgFAEQgBgEAGgCQAFgEABAEQACACgHAEIgEABQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_55.setTransform(137.6,77.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F0573F").s().p("AgFADQgCgDAHgEQAEgDACAEQABAEgFADIgEACQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape_56.setTransform(115.7,93.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F0573F").s().p("AgFADQgCgDAHgEQAEgDACAEQABAFgFACIgEACQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape_57.setTransform(147.8,86.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F0573F").s().p("AgFAEQgCgEAHgEQAEgDACAEQABAEgFADIgEACQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_58.setTransform(137.4,89.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F0573F").s().p("AgFADQgBgDAFgEQAFgCACADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQgBACgDABIgDACQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_59.setTransform(131.2,77.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F0573F").s().p("AAAAHQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgEgFAEgEQACgDAEAGQADAGgDACIgCABIgCAAg");
	this.shape_60.setTransform(42.1,67.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F0573F").s().p("AgCADQgEgFAEgDQACgDAEAGQADAFgDADIgDABQgBAAgCgEg");
	this.shape_61.setTransform(28.5,64.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F0573F").s().p("AgCADQgDgFADgDQACgDADAGQADAFgCADIgCABQgCAAgCgEg");
	this.shape_62.setTransform(11.9,79.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F0573F").s().p("AgCACQgDgEADgDQACgCADAFQADAGgCACIgCABQgCAAgCgFg");
	this.shape_63.setTransform(21.2,84.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F0573F").s().p("AAAAGQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgEgFADgDQADgCADAGQADAEgDADIgBABIgCgBg");
	this.shape_64.setTransform(19,97.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F0573F").s().p("AgCADQgDgFACgDQADgDADAGQADAFgDADIgBABQgCAAgCgEg");
	this.shape_65.setTransform(28.7,84.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F0573F").s().p("AgCACQgDgEADgDQACgDADAHQADAEgCADIgCABQgCAAgCgFg");
	this.shape_66.setTransform(32.8,58);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F0573F").s().p("AgCADQgEgGAEgCQACgCADAFQADAFgDADIgBABQgCAAgCgEg");
	this.shape_67.setTransform(24.9,67.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F0573F").s().p("AgCADQgEgFAEgDQACgDADAGQAEAFgEADIgCABQgBAAgCgEg");
	this.shape_68.setTransform(36,92.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F0573F").s().p("AAAAHQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgDgEADgEQADgDAEAGQADAFgDADIgCABIgCAAg");
	this.shape_69.setTransform(11.3,70.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F0573F").s().p("AgCADQgEgFAEgDQACgDAEAGQADAFgDADIgDABQgBAAgCgEg");
	this.shape_70.setTransform(19,78.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F0573F").s().p("AAAAHIgDgEQgDgFAEgDQACgDAEAGQACAFgDADIgCABIgBAAg");
	this.shape_71.setTransform(30.2,71);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F0573F").s().p("AgBAHQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgDABgBQACgHAEABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABABABQAAAAAAABQAAAAAAAAQgBABAAAAQgBAGgEAAIgBAAg");
	this.shape_72.setTransform(56.9,21.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F0573F").s().p("AgBAHQgFgCACgGQACgGAEABQAFACgBAFQgDAGgDAAIgBAAg");
	this.shape_73.setTransform(41.6,29.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F0573F").s().p("AgBAHQgFgBADgGQACgHADABQAEABgBAGQgCAGgDAAIgBAAg");
	this.shape_74.setTransform(16,22.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F0573F").s().p("AgBAHQgEgBACgGQACgHADABQAEACgBAFQgCAGgDAAIgBAAg");
	this.shape_75.setTransform(25.3,14.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F0573F").s().p("AgBAHQgEgBABgGQADgHADABQAEABgCAGQAAADgCACIgCABIgBAAg");
	this.shape_76.setTransform(17.9,3.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F0573F").s().p("AgBAHQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBIAAgEQACgHAEABQAEABgCAGQgBAGgDAAIgBAAg");
	this.shape_77.setTransform(34.2,11);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F0573F").s().p("AgBAHQgEgBACgGQACgHADABQAEABgBAGQgCAGgDAAIgBAAg");
	this.shape_78.setTransform(49.3,34.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F0573F").s().p("AgBAHQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBgCABgCQABgHAEABQAEABgCAGQgBAGgDAAIgBAAg");
	this.shape_79.setTransform(36.3,28.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F0573F").s().p("AgBAHQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgCgDABgBQACgIAFACQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQgBAGgEAAIgBAAg");
	this.shape_80.setTransform(40,0.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F0573F").s().p("AgBAHQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgCgDABgBQACgHAEABQAGACgCAFQgBAGgEAAIgBAAg");
	this.shape_81.setTransform(18.6,31.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F0573F").s().p("AgBAHQgFgBACgHQACgGAEABQAFABgBAGQgCAGgEAAIgBAAg");
	this.shape_82.setTransform(25.1,21.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F0573F").s().p("AgBAHQgFgCACgGQACgHAEACQAFACgBAFQgCAGgEAAIgBAAg");
	this.shape_83.setTransform(41.3,23.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F0573F").s().p("AgGAAQAAgGAGAAQADAAACACQACACAAACQAAAHgHAAQgGAAAAgHg");
	this.shape_84.setTransform(104.5,16.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F0573F").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_85.setTransform(88.2,28.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_86.setTransform(54.4,28.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_87.setTransform(63.1,17.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_88.setTransform(50.2,9.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_89.setTransform(72.9,12.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_90.setTransform(99.3,30.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F0573F").s().p("AgFAAQAAgCACgCQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_91.setTransform(81.5,28.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F0573F").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_92.setTransform(76.7,0.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F0573F").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_93.setTransform(60.4,35.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F0573F").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_94.setTransform(65.1,24.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F0573F").s().p("AgGAAQAAgGAGAAQADAAACACQACACAAACQAAAHgHAAQgGAAAAgHg");
	this.shape_95.setTransform(85.7,22);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F0573F").s().p("AgGAAQAAgGAGAAQADAAACACQACACAAACQAAAHgHAAQgGAAAAgHg");
	this.shape_96.setTransform(108.4,82.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F0573F").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_97.setTransform(92.1,94);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFAAAAgHg");
	this.shape_98.setTransform(58.3,94.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_99.setTransform(67,83.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFAAAAgHg");
	this.shape_100.setTransform(54.1,74.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_101.setTransform(76.7,77.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_102.setTransform(103.1,96.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F0573F").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_103.setTransform(85.3,94.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F0573F").s().p("AgEAFQgCgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgCAAgCgCg");
	this.shape_104.setTransform(80.5,66.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F0573F").s().p("AgGAAQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_105.setTransform(64.3,101.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F0573F").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_106.setTransform(69,90.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F0573F").s().p("AgGAAQAAgGAGAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_107.setTransform(89.6,87.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(0,0,151.5,113.3), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#600A0C").s().p("AgUBSQgDgBgFgGQgDgFAAgEQADgRAAgMQABgKgDgFQgDgFgCADQgDADgEALIgRAnQgBgNABgMIAEgUQAEgLAKgKQAJgHgBgPQAAgYABgFQAEgPAHAFIAPAQQAFAFABgBQABgDAJAAQAKABAIgVIAGgWQABANANgGQAGgDAGgGIgFAMQgGAOgEAFQgGAGgQAaIgKAPQgBACABADQABAEgDASQgDAUAAAKQAAATgJAJIgLAAIgIAAg");
	this.shape.setTransform(7.8,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#600A0C").s().p("AhBBeQgNgOAHgNIAMgQQADgEACgNIABgSQABgHAIgSQAGgQgHgFQgDgBAQgLIAlgVQANgHAAgIQABgJAWgIQAWgIAMADQgFAEgHAJQgMATgFAXQgGAbgGAPQgGANgLAOQgGAHgGAMQgDAHgGADQgGADgBACQgCAEgHAGIgUAOQgJAIgBAHQgBAFgDAAQgEAAgHgIg");
	this.shape_1.setTransform(7.4,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#600A0C").s().p("AgdAfIgEgMQgDgFAFgHIAIgLQADgFAGgEQALgHAmgPQgJAJgIANIgLAQQgCADgHAEQgGADgBAJQgBAKgJAEIgEAAQgFAAgBgFg");
	this.shape_2.setTransform(21.4,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#600A0C").s().p("AgtCdQgEgPgNgTQgLgQABgCQAAgEAFgKIAGgOQACgEAPgLIAJgHQgEADgEALQgEALgCAJQAAAHAHAIQAIAHAGgBIARgDQALgEADgOQAEgMAHgMQAFgJgBgEQgBgFgIgLIgHgKQgJghAHgSIAIgOQADgGADgLQADgLANgSQAMgRABgCIAHgMQAGgHgCgFQgEgMgBgIQgBgNALAGIAKAKQAIAOgIASQgVArgNAeQgFAPgJAQQgFAKAHAMIAPAWQAGALgDALIgJAaQgGARgEAFIgMAPQgIAKgFADIgYAQQgNAJgEAAIgBgBg");
	this.shape_3.setTransform(22,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#600A0C").s().p("AhLBlQgOgHAKgMQAGgIAXgWQARgSAFgIIAZg2QASgnACgCQAFgEAKgSQATgfgDATIgIAjQgBAHgFALQgEAJACAEQABAHAQgKQASgMARgYIgHAuQAAAGgGAKIgJANQgFAHgEAYQgDARgQAKQgGgIgOgGQgKgEgBAGQgBADADAMQACAHgTAUIgYAWQgDACgGAAQgKAAgUgKg");
	this.shape_4.setTransform(35.3,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#600A0C").s().p("AgzCdIgCgSQAAgIADgEQADgEADgQQADgRAEgJQAGgKAEgOIAJgkQAGgZACgPQACgOAAghQABgdAWgkQAPgYAOgNIAIAIQAGAKgKAOQgIALgCAJQgCAQgHASIgPAiQgEAKAAAZQAAASgDAFQgCAFAAAOQgBASgMAmIgXA7QgIAXgGABIgBABQgEAAgBgMg");
	this.shape_5.setTransform(44.3,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,49.8,38.8), null);


(lib.Group_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#600A0C").s().p("AgPBRQgHgOgBgEQgEgMADgNQACgMgJgMQgNgRgCgGQgGgOAIgBIAVADQAHABAAgBQAAgFAHgFQAJgGgGgWIgIgWQAIALAGgOIAFgQIADAOQADAPgBAHQAAAGACAhIAAATIAEAEQACACAIAQQAJASAGAIQALAOgDAOIgPANQgDACgHgCQgGgCgCgDQgHgPgHgLQgEgIgFgCQgEgCgBAEQgBAEADAMIAJApQgJgJgFgLg");
	this.shape.setTransform(15.1,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#600A0C").s().p("AAOB8QgRgDgCgQIAAgUQABgFgGgLIgKgPQgDgGgFgVQgEgRgIACQgDAAAHgSIASgpQAGgOgEgHQgFgHANgWQAMgVALgFIgCATQABAWAJAWQALAaAEAPQADAPgBARQAAAKABANQACAIgEAHQgDAGAAADQABAFgCAIIgHAZQgDAMADAGQADAIgMAAIgFAAg");
	this.shape_1.setTransform(4.3,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#600A0C").s().p("AABAvIgJgHQgFgCAAgJIAAgOQgBgGADgIQACgHAMgWIALgUQgDAVAEAcQAAADgEAJQgDAGAEAHQAEAKgFAIQgDAFgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_2.setTransform(10.6,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#600A0C").s().p("AAnCeQgMgJgUgGQgRgGgCgCQgCgDgCgLIgCgPQgCgHAKgdQgBAFACAMQADAMAEAIQADAGAKABQAKABAEgFQAJgHADgGQAHgLgFgOQgEgLgBgPQgBgKgDgDQgEgDgMgEIgLgDQgbgTgDgUIgCgQQgBgHgEgLQgEgKAAgXQAAgVgBgDQgBgCABgLQAAgKgEgDQgKgGgGgHQgIgJAMgCIAOABQAOAFAEAUIAHAoIAIApQAEAPACASQACAMAMAFQAJADAPAEQALAEAEALQANAqgBAJIgBATQgBAOgDAGIgKAcQgFASgDAAIgBAAg");
	this.shape_3.setTransform(22.6,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#600A0C").s().p("AgiBwIAHgsQADgZgBgKIgLg7QgIgrABgCQABgHgBgVQgDgkAIAQIAOAiQADAGACAMQACAJAEACQAFAFAHgTQAGgVAAgfIAVAqQADAFABAMIAAAQQABAKAKAVQAHAPgGASQgJgCgPAEQgLAEADAFQACADAJAHQAFAFgFAdIgHAhQgBAMggAHIgFABQgKAAAAgNg");
	this.shape_4.setTransform(28.7,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0.1,0,33.1,54.2), null);


(lib.Group_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#600A0C").s().p("AgLBUQgIgJADgTQACgKgBgVQgBgSABgDIABgFIgHgQQgOgggDgEQgEgFgEgPIgEgNIAMAKQAMAJACgNIADAWQAFAXAKABQAIAAACAEQABABAFgEIARgOQAIgEABARQABAGgDAXQgCANAHAKQAIAKACAMIABAUQABANgEALIgLgpQgDgLgCgCQgCgEgDAEQgEAFAAAJQgCANAAARQAAAEgEAFQgFAEgEAAg");
	this.shape_50.setTransform(38.6,33.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#600A0C").s().p("AAkBqQgBgIgHgIIgSgSQgFgHgCgEQgBgDgFgDQgGgEgCgIQgFgMgFgJQgJgPgEgOQgDgPgCgcQgCgYgKgUIgKgPQAMgCAVAMQAUAMAAAJQgBAHALAKIAjAaQAOANgCABQgIADAEARQAFAUAAAHIgBASQgBANADAEIAJASQAGAOgOAMQgIAGgEAAQgEAAAAgFg");
	this.shape_51.setTransform(41.2,17.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#600A0C").s().p("AAOAnQgJgFAAgKQAAgJgFgEQgGgFgCgDQgKgagMgRIATAMQAUANAGAFQAGAGACAEIAGANQAEAHgDAFIgGALQgBAFgEAAQgCAAgDgCg");
	this.shape_52.setTransform(28.6,6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#600A0C").s().p("AAGCYIgVgTQgFgEgHgLIgJgRQgFgHgIgrQgCgMAIgKIARgUQAJgJgDgMIgKggQgFgSgHgWIgMgnQgGgTALgMQAFgGAGgCQALgFgCANQgCAIgGALQgDAFAFAIQAGAKAAADQAAACAKATQAKATACAMQABAMADAGIAEAPQAGASgOAgIgIAJQgJAKgCAEQgBAEAEAJQAFANACANQABAPALAFQAFAEALACQAGACAJgGQAIgHAAgHQAAgJgCgMQgDgMgEgDQAVAUACAHIAFAOQADALAAAEQAAACgOAOQgOARgHAOIgBABQgDAAgMgMg");
	this.shape_53.setTransform(25.8,22.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#600A0C").s().p("AAXByIgVgaQgQgWADgHQAEgLAAgEQAAgGgLADQgJACgHAFIgGAEQgNgOgBgRQgBgWgEgKQgMgYABgHIgBgvQAOAbAQAOQAOANADgGQACgEgDgJQgDgMAAgHIgDglQgBgSAOAhQAIATAFAGQABABAMAqIASA5QAEAJAOAUIAaAjQAHANgPAFQgRAGgKAAQgIAAgEgEg");
	this.shape_54.setTransform(13.5,11.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#600A0C").s().p("AAWCuQgGgDgFgXIgNg/QgJgnACgSQACgOgCgFQgCgFADgSQADgZgCgLIgKgjQgGgUABgPQAAgKgHgMQgIgPAHgKQAEgEAFgCQAMAQALAZQASAngEAdQgEAhAAAOQAAAQADAZIAEAlQACAOAEALQADAJABASQABAQACAEQACAGgBAHIgEARQgCALgEAAIgBAAg");
	this.shape_55.setTransform(3.4,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0_1, new cjs.Rectangle(0,0.1,47.4,42.6), null);


(lib.Group_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#600A0C").s().p("AguBIQgHgDATgLQAXgOABgIQABgIAKgNQAKgMAAgHQAAgJAJgPQAHgMgCgFQgDgGAAgKIAAgIIAbgDQgNAdgFATQgCALgLAUIgLAYQgDAKgQAQQgRAQgMAAIgFgBg");
	this.shape_52.setTransform(101.7,8.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#600A0C").s().p("AgcBOIgKglIgDgQQALgVACgHQABgDALgLQANgNAIgLIATgXQAJgLAFgHIAQgYQghBPgFAHIgCAFIgOAQQgRAVgFAHQgIAKAEAIQASAfAAAHQAAAGgYAJIgVAHQAegNgFgQg");
	this.shape_53.setTransform(104,20.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#600A0C").s().p("AAiBIQgRgSgOgWIgRgZQgKgKgOgIIgOgFQgGgDACgHQAEgIADgBQACAAgCgIIgOgmQACgHAQADIASAEQACgBgBAGQgDAPAIAVQAKAWAIAOIALAVQACADACAQQAAAIAQAJQAbAOAJAHIgEALQgBACgDAAQgIAAgOgPg");
	this.shape_54.setTransform(6.4,23.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#600A0C").s().p("AgFAmQgNgEAEgdQACgQgBgMQgBgIACgEQADgGAGAMIAIAXQAFALAGAYQgNAJgGAAIgCAAg");
	this.shape_55.setTransform(8,12.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#600A0C").s().p("AADAoQgggaAAgTIAAgOQAAgIgHgHQgFgHABgFQAEgUALADQAFACAIAMQAMARAGAIQAJAJgHAKQgIALABAFQACAJAMAOIAaAeg");
	this.shape_56.setTransform(13.1,25.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#600A0C").s().p("AgyA6QAmgXAKgOIAPgRQAJgJAFgNIAKgfQAEgOAFAEQABABANgDQADgBgQAeQgRAggLAOIgRAQQgBABgBABQAAABAAAAQAAABAAAAQAAABABAAIgIAEIg0AYg");
	this.shape_57.setTransform(91.3,27.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#600A0C").s().p("ABABvQgLgLgNgSIgUgfQgIgLgEABQgHADgCgCQgGgDgLgMIgSgTQgIgHgEgMIgFgQQgHgSgHgdQgEgSAFgGQAIgFAFgGQAGgGADADIAJAKQAGAFADAKIAHAXQADALgCAEQgEAHgBAHQgBAMAIAHIAmAfQAWAUgGgMQgNgYACgHIAAgDQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgHADACQACABgBAIIAEABIALABQAKACAAAxQAAANAOAoQAGATgEAAQgBAAgDgDg");
	this.shape_58.setTransform(16.6,18);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#600A0C").s().p("AAkBTQgJgJgBANQgEgrgNgCQgHgBgCgEQAAgBgEAEIgLAMQgGADgDgPQgBgGABgYQAAgNgGgLQgIgLgDgNIgDgXQgCgOACgOIANAvQAEANACADQACAEACgEQACgGAAgLIgBgiQAAgEADgGQADgGAEAAQAFAAALAEQAIANgCAVQgBALACAYQACATgBADQgBAEABACIAHASIAPAkQAFAIAFAYQgFgHgFgEg");
	this.shape_59.setTransform(29,9.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#600A0C").s().p("AAcBUQgPgLAAgGQAAgGgJgIIgYgXQgLgKACgBQAFgCgEgOQgGgQAAgFIgBgQQgBgKgCgEIgJgQQgGgOAKgKQAKgKACAKQABAHAGAJIAOARQAFAGACAEQABACADAEQAFAEACAGIAIATQAIANADAMQAEAMACAWQADAdAOAQQgIAAgOgKg");
	this.shape_60.setTransform(28.1,24.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#600A0C").s().p("AgJAGQgEgEgCgDIgEgKQgDgFACgEIAEgHQABgGAHAFQAGAEAAAIQAAAGACADQAGAFABACIAFANQAFALAFAIQgYgTgHgHg");
	this.shape_61.setTransform(37.4,34.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#600A0C").s().p("AAUCSQACgGAFgIQACgDgDgHIgEgKIgHgRQgHgRgBgJQgBgKgCgGIgEgNQgEgSAMgaQAOgPADgHQACgDgDgKQgFgOgBgNQgBgPgJgHIgOgHQgFgCgIAGQgHAHAAAHQAAAKACAMQADAKACAFIgGgIQgMgPgBgEQgHgYAAgHQAAgDAMgPQANgSAGgRQABgDANAQIASAYQAFAEAGANIAIATQAEAHAEAtQABAMgHAJIgQAQQgHAJACALIAHAdQAFAbAKAmQADAOgIAIIgIAFIgDABQgFAAABgHg");
	this.shape_62.setTransform(39.6,20.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#600A0C").s().p("AAFBSQgEgOgCgGIgIghIgKgvQgCgIgKgSQgPgYgEgJQgGgMANgEQAcgHAGAJIAPAZQAMAWgDAFQgFAJAAADQAAAGAJgBQANgCAHgGIAFAJQAEAKgBAJQgCASACAIIAEAMQACAIgBAFIgFAiQgIgVgLgMQgKgLgDAFQgCACACAHIAAAOIgBAaQAAABAAABQAAAAgBABQAAABAAAAQAAAAgBAAQgCAAgFgPg");
	this.shape_63.setTransform(49.2,31.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#600A0C").s().p("AgaAvQACgHABgPQAAgNAEgMIAFgPQACgUAJgGIAHgIQAEgEAGgCQAKgDAKgHIgWAeIgKAMQgDAGgCAIQgBAGgCADQgDAEgFAQQgIAdgLARIAHgTg");
	this.shape_64.setTransform(89.5,24.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#600A0C").s().p("AhQCUQADgFAGgGIAbgzQAEgGAHgJQAGgGADgIQAFgJAEgTIAFgXQAEgKAFgVQACgLAGgFIAMgIQAGgDAEgGQALgNADgIIAGgRQADgJgBgIIgCgPQAAgKAIgJIAIgHIAGAAQAFACgEAMQgEALAFAMQAGAPAAADQAAADAEAKQACAFgGAJIgJAOQgEAFgMAHIgOAHIgGAFQgNAQgMAVQgMAYAAAKQAAAIgFAJQgEAKAAAHQAAAPgJAHIgQARIgSAMQgKAIgGAHIgLASIACgHg");
	this.shape_65.setTransform(86.9,20.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#600A0C").s().p("AgUBWQAUgXAAgNIgBgbQgBgNACgFQADgHACgNQADgNAAgHIgBgHQgBgCAEgNQAJgeAAgLQAAgIAJAaQAIAZgDAKIgHAZIgHAWQAAACgBABQAAABAAAAQgBAAAAAAQAAAAAAgBIgCAJQgDAngCAJQgCAJgIAKQgLAMgUAIIgBAAQgCAAAOgPg");
	this.shape_66.setTransform(76.7,22.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#600A0C").s().p("AgXA0QgBgNAKgIQAHgFANgFQAGgDAAgIQAAgTgCgOIgEgTQgCgJABgGQABgDAJgLQAGgHABgFIABAfQACAXgGAbQgGAcgKAKQgHAJgKAVIgJASQADgLgDgVg");
	this.shape_67.setTransform(70.3,28.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#600A0C").s().p("AgqBXQABgcAFgDIALgCQAIgBAFgJQACgCAOgKQAKgGgEgQQgFgQABgMIAEgTIACgRQACgLAFgKQAEgKgCgMIAAgPIAOAHQANALgHAVQgQAvAAAbQAAAIADANQABAJgGAGQgOAQgQAIIgWALQgKAJgCATIgBANIAAgag");
	this.shape_68.setTransform(67.4,23.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#600A0C").s().p("AgSCHQgJghAHgXQAIgbADgOQADgNACgZIACglQABgPgBgMQgBgLACgTQABgTAAgEQgBgHABgJIAIgVQAGgPAEACQAGADAAAeIABBHQAAArgGASQgEANABAFQAAAEgGASQgHAWAAAKIADAfQABARgDALQgCAIAEAKQAEAMgHAGIgHADQgIgMgGgVg");
	this.shape_69.setTransform(58.6,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,109.4,40.8), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#600A0C").s().p("AALA7QADgLgBgEQAAgEgFACQgFACgEAIQgHALgIAPQgCADgGACQgGACgDgCIgQgNQgCgOALgOQAGgIAJgSQAIgQACgCIAEgEIAAgTIACgnQgBgHADgPIADgOIAEAQQAGAOAIgLIgHAVQgGAXAJAGQAHAFAAAEQAAACAHgBIAVgDQAIABgGAOIgQAXQgIALACANQADANgEAMQgBAEgHAOQgGALgIAJIAJgqg");
	this.shape_297.setTransform(18.1,44.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#600A0C").s().p("AgbB0QADgGgDgMIgHgZQgCgJAAgEQAAgDgDgGQgDgHABgIQACgNAAgKQgBgSADgOQADgPALgaQAKgWAAgWIgBgTQALAFALAVQANAWgEAHQgEAHAGAOIASApQAHASgDAAQgIgCgFARQgFAVgDAGIgJAPQgGALAAAFIAAAUQgBAQgRADIgFAAQgMAAADgIg");
	this.shape_298.setTransform(28.9,30.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#600A0C").s().p("AgKAsQgFgIAEgKQAEgHgDgGQgEgJAAgDIACgUQABgQgCgNIAMAUQALAWADAHQACAIAAAGIgBAOQABAJgFACIgKAHQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgDgFg");
	this.shape_299.setTransform(22.5,14.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#600A0C").s().p("AgvCMIgKgcQgEgGAAgOIgBgTQgBgHAFgRIAIgbQADgLALgEIAZgHQALgFADgMQACgSAEgPQAEgSAEgXIAHgoQAEgUAOgFQAHgCAGABQANACgIAJQgFAHgLAGQgEADABAKQAAALgBACQgBADAAAVQgBAXgDAKIgFASIgCAQQgDATgbAUIgLADQgMAEgEADQgDADgBAKQgBAOgEAMQgGAOAHALQAEAGAIAHQAFAFAKgBQAKgBADgGQAEgIADgMQADgMgCgFQAKAdgCAHIgCAPQgDALgCADQgBACgRAGQgUAGgMAJIgBAAQgCAAgGgSg");
	this.shape_300.setTransform(10.6,27);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#600A0C").s().p("AAUB8QgfgHgDgMIgHghQgEgdAFgFQAJgHACgDQACgFgKgEQgPgEgJACQgGgSAHgPQAKgWAAgJIABgQQABgMADgFIAVgqQAAAfAGAVQAHATAFgFQADgCACgJQACgMAEgGQAEgHAKgbQAIgQgDAkQgBAVABAHQAAACgHArIgLA7QgBALADAYIAHAsQAAANgKAAIgFgBg");
	this.shape_301.setTransform(4.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,33.1,54.2), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0_1();
	this.instance.parent = this;
	this.instance.setTransform(-76.2,-81.5,3.353,3.353,0,0,0,7.8,3.1);
	this.instance.alpha = 0.512;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-131,-54.4,3.353,3.353,0,0,0,3.1,3.8);
	this.instance_1.alpha = 0.512;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-121.1,-78,3.353,3.353,0,0,0,8.3,3.1);
	this.instance_2.alpha = 0.512;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-28.6,-99.3,3.353,3.353,0,0,0,4.2,1.3);
	this.instance_3.alpha = 0.512;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-88.3,-94.7,3.353,3.353,0,0,0,4.5,7.4);
	this.instance_4.alpha = 0.512;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8C").s().p("AgFgBQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQADABADACQAEACgLACg");
	this.shape.setTransform(-52.9,-55.8,3.353,3.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F69E8C").s().p("AAKAJIgFgDQgBgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABIAAAAIgDgDQABgDgDgCIgHgEIgBgCQAEgBABABIAGABQAFABACABIAFADQABABAAAAQABABAAAAQAAAAAAAAQAAAAAAABIAAAGQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgBgBg");
	this.shape_1.setTransform(-46.5,-51.8,3.353,3.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F69E8C").s().p("AgCAEQABgCgBgDIgBgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQACACgBAHQAAAGgEABIgBAAQgDAAACgFg");
	this.shape_2.setTransform(-12.9,-9.3,3.353,3.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F69E8C").s().p("AgFASQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIAEgIQACgFgBgHIAAgHIABgFQACgDAEALQABADgDAGQgCAHgCADIgDAGQAAABAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIgBgBg");
	this.shape_3.setTransform(-24.3,-19.8,3.353,3.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F69E8C").s().p("AgDAHQgEgBAAgCQgBgFABAAIAEgCQAEABAAgCQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAABQAGACgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgIAGgCAAIgBAAg");
	this.shape_4.setTransform(-66.1,-38.6,3.353,3.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F69E8C").s().p("AgMADQgEgDABgCQACgFAFAFQADACAIgCQAHgCAFAFQADADgIAAQAAAAAAgBQAAAAAAAAQgBgBgBAAQgBAAgBAAQgEAAgDACIgFABQgDAAgDgCg");
	this.shape_5.setTransform(-54.1,-30.5,3.353,3.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F69E8C").s().p("AAdAJQAAgBgFgCQgDgBgDgFQgFgEgLAAQgDAAgFAEIgEAHQgCADgDgBQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgGgDQgFABgDgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAIAFgDQADgEACAAIAEABQAEACAIgFQAGgBARAFQADAAAHgEQAEAAACAHQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgIAAQAAABgBAAQAAAAAAAAQAAABAAAAQABAAAAAAIAEACIAEgDIAEgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDAEIgCAEIAAgBg");
	this.shape_6.setTransform(-44,-34.9,3.353,3.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F69E8C").s().p("AgFAOQAHgHAAgDQAEgHgEgEIgDgFQAAgBAAgBQAAAAgBAAQAAgBAAAAQABAAAAAAIAEADQADACAAADQACARgEACQgDADgEABIgCAAQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAAAgBg");
	this.shape_7.setTransform(-19.6,1.9,3.353,3.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F69E8C").s().p("AADAKIgCgCIgBgBIgJgBQgDAAgCgCIgCgDIABgDIAFADIAKACQACAAACgEIACgGQAAgBABAAQAAgBAAAAQABAAABAAQABAAABAAIAGADQABABgDAEIgFAEQgCACABAFIgDAAIgDAAg");
	this.shape_8.setTransform(-40,7.8,3.353,3.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F69E8C").s().p("AgCAJQgFgBgGgGQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAEAEAHAAQAFABADgGQABgFgCgEQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABAAIAGABQAEgBgHAGQgCABgCAEIgBAIQgBADgDABQgBgCgEgBg");
	this.shape_9.setTransform(-34.8,-2.2,3.353,3.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F69E8C").s().p("AAMAXQgHgDABgDQACgEgGgDQgEgCgFgHQgFgIgHgDQgHgDgBgDQgIgCgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAEAAIAFACIACgDIADAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAAEAFAGIALAMQACAHAGgBQAHgBACgDIADgGQAFAAAAgCIABgCQACgBADACIAFADQAAAAABAAQABABAAAAQAAAAAAAAQAAAAAAABIgEADQgDADgBADIgCAJQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgHAAAAgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAAg");
	this.shape_10.setTransform(-66.1,-25,3.353,3.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F69E8C").s().p("AAEALQgEgEgCgFQgCgCgJgHIgHgHQAEgCAIAJIAKAKQAGADADgBQABAAABAAQAAgBAAAAQAAgBAAgBQgBAAgBgBQAAgBAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAACgDADQgCACACAEQACAFgJAAIAAAAQgCAAgFgEg");
	this.shape_11.setTransform(-42.8,-23.1,3.353,3.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F69E8C").s().p("AgEAIQgEAAgEgEIgDgEQgCgBANAEQAGADACgFQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQACACADgJQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAABIABABIgCAHQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgEAFIgEABIgHgBg");
	this.shape_12.setTransform(-47.9,-11.8,3.353,3.353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F69E8C").s().p("AAMASIgIgCQgCABgCgBQgNgIgDgHQgCgDAAgDIABgDQAAAAABgBQAAAAABgBQAAAAAAgBQgBAAAAgBIgBgEQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAEACgBACIgBAFQAAAFAFAFQAHAIAFADIAHADIAHAAIACgBIAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgEABIgBgBg");
	this.shape_13.setTransform(-75.7,-18.5,3.353,3.353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F69E8C").s().p("AAAAJQgFgBgBgCIgBgBQACgDgCgCQgGgEABgEQAAgBAEAEIADAFIABAFIAFACQAGAAAGgCQAAABAAAAQAAABAAAAQgBAAgBABQAAAAgCAAIgGABIgDAAg");
	this.shape_14.setTransform(-74.8,0.7,3.353,3.353);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F69E8C").s().p("AALAKQgDgDgKAAIgKAAQgDAAgCgEIgEgDQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAIADgHIgBgHIAEAHQADAIANADQAGACACgBIAEgDQADgEAEgBQAEAAgEAHQAAAAAAAAQAAABgBABQAAAAAAABQAAAAABABIACAEIABAEQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgCAAgIgHg");
	this.shape_15.setTransform(-57.8,-0.1,3.353,3.353);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F69E8C").s().p("AAGAIQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgDgBQgGgCgFgLQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAIABgBIADAEQADAFAFADQAKAIACgEQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBABQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_16.setTransform(-68.1,21.4,3.353,3.353);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F69E8C").s().p("AAJALQgGABgDgCIgIgHQgHgHACgDIACgDIABACIACAHQADAGAFABQAGAAAEgGIADgDQACABgBAFIAAAIIgBAAIgEAAg");
	this.shape_17.setTransform(-57.7,17.9,3.353,3.353);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F69E8C").s().p("AgDAFQgDgEAAgCIABgFIAIAIIAEAEQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgGAAgCgCg");
	this.shape_18.setTransform(-16.8,78.7,3.353,3.353);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F69E8C").s().p("AgBAGQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAIACgDQABAAgBgEIAAgEQABgBABAGQAAAFgBADIAAAFIgDgEg");
	this.shape_19.setTransform(-4.6,68.7,3.353,3.353);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F69E8C").s().p("AACAFQgDgCgEgEQgBgBAAgBQgBgBAAAAQAAgBAAAAQABAAABABQANAIAAABIgBABIgBAAIgEgBg");
	this.shape_20.setTransform(-63.8,55.3,3.353,3.353);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F69E8C").s().p("AgDACQgDgCgBgCQgBgEACACIAFAEQAEAFAFAAIgDABQgFAAgDgEg");
	this.shape_21.setTransform(-78.5,49,3.353,3.353);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F69E8C").s().p("AAAANIgFgGQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAQAAgBAAAAQAAgBAAAAQAAAAABAAQABAAABAAIAHACQAAABABAAQABAAAAABQAAAAAAAAQAAAAABAAIACgDQACgBAGgLQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgBgCIADAGQABACgGAKIgCAEQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAABAAIADgEQACgEAAAFQgBAGgEAEIgEACQgCAAgCgDg");
	this.shape_22.setTransform(-33.6,30.7,3.353,3.353);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F69E8C").s().p("AADAGQgDAAgDgDQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgEgDIAAgDQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAFAAIAHgFIACABQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCAEQgBABAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIAAAAg");
	this.shape_23.setTransform(-46.3,25,3.353,3.353);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F69E8C").s().p("AACAMIgBgCIAAgGQAAgBgBgFQgBgDgFgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIADACQACACAEABQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIAAAFQgBAFgBACIgBACIgBgBg");
	this.shape_24.setTransform(-21.5,44.3,3.353,3.353);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F69E8C").s().p("AACANQgEgBgIgFQgJgFAHADQANAFACgDQAFgHgBgFQgEgHADAAQACAAABAFQAHAGgBABIgCABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgCAHQgCACgDAAIgCAAg");
	this.shape_25.setTransform(-24.5,63.8,3.353,3.353);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F69E8C").s().p("AgMAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIACgDIAFAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIAFABQAAAAABAAQAAABAAAAQAAABgBAAQAAABgBAAQgFACgEgBQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAJAAIAHgCQAEgBAAAFQAAACgIAAIgJACQgCAAgHgHg");
	this.shape_26.setTransform(-29,52.3,3.353,3.353);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F69E8C").s().p("AALAHIgBgDQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgIAAgCgBIgIgDQgBgBgBgBQgBgBAAAAQAAAAAAAAQABAAABAAIAHACQAHACADgBQAKgBABgEQABgBAAABIAAACIgBAIQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBAAIgCAAg");
	this.shape_27.setTransform(-37.1,59.6,3.353,3.353);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F69E8C").s().p("AgHADIgHgJQgBgEAGAFIAKAIQAFADAJgEIgBADIgKADQgEAAgHgFg");
	this.shape_28.setTransform(-50.6,56.8,3.353,3.353);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F69E8C").s().p("AAOAOQgLgBgDgDIgFgEIgGAAQgDAAgHgDQgFgCgFgHQAAgBgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIABgBIABgBQABAAAAAAQAAAAABABQAAAAAAABQABABAAABQADAJAJACQAEACADgEQABgBAAgHQAAgBAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIAEACQADACgEACQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAIAAACIADACQABAAABAEQAAAEAJADQAFABAHgDQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgBAEAFQACAEgFgDIgEgBQgEADgGAAIgBAAg");
	this.shape_29.setTransform(-46.4,39.5,3.353,3.353);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F69E8C").s().p("AgFATIABgDIgBgDQAAgFADgCQACgBAAgFIACgHQABgDgCgFIgBgEQADAAACAGQgBgFABgDQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAABIACADQABACgBAIIgBAJQgBABgGAFQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAFQAAAFgGADg");
	this.shape_30.setTransform(19,52.1,3.353,3.353);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F69E8C").s().p("AgJAaQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAgBQADAFAFgHQACgFABgEIAAgEIADgCQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgDgDgCACIgFACQAGgDAAgDQgEgHABgCIAEgJQADgHABACIgEAGQgCAHABACQABAEADAAQAFAAgCACQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIACgBQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABIABACIgCABQgFADABAFIAAAFQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABgBgBQAAAAAAAAQgDAIgEAAIgCgBg");
	this.shape_31.setTransform(1.2,93,3.353,3.353);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F69E8C").s().p("AgIATIAGgMIABgCQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQABAAACgFQAEgIgEgFIgCgFIAAgDIADADIABgDIAEADIgDADIABAGQABAFgBADQgBAIgIAJIgFAGIgDAEg");
	this.shape_32.setTransform(6.7,81.6,3.353,3.353);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F69E8C").s().p("AgEAJIACgDIACgGIADgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgCgDQAIADgDAIQgBAEgDAEIgBAFIgCABIgDACg");
	this.shape_33.setTransform(6.4,69.1,3.353,3.353);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F69E8C").s().p("AgEAiIAAgCIAAgCQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAgBABQgEADgDgCQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAABgBIAEgDQADgCADABIACABIABgGQgEACgCgCQgCgCAGgBQAFgBgCgHQgBgFAAgCIAKgSQACgDgBgHIgBgFQAIABgFAOQgEANgFADQgEAEADAOQAAACgCAJQgBAJgCAAIgCgBg");
	this.shape_34.setTransform(23.8,26.1,3.353,3.353);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F69E8C").s().p("AABA0IAAgLQAAgDgDgEQgCgCgEgVQgCgJAHgCQADgCgCgGQgCgEAAgTQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIABgBIAEgEQACgDgCgHIgCgIQACADACAHQACAGgBACIgFAKQgDAGADARIABAKQAAABABABQAAABAAAAQAAABgBAAQAAAAgBgBIgCAAIgDABIACAVQABAEAFACIADAFIgBAFIAEAEQAAAAAAAAQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAgBQAAAAgBABQAAAAAAAAQgBABAAABQAAAAgBABQgBAEgDABIABgIg");
	this.shape_35.setTransform(5.9,37.9,3.353,3.353);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F69E8C").s().p("AgLAgQgCAAAFgEQAEgCACgEQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIABgCIABgUQACgFABgBQAEgCABgHIACgLIADADIgBALQgCAEABACQABACgCADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAIgBgCIAAgDIgCAEIgBABQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgCAJADAFIACAGQAAADgFAAIAAADQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgBgBIgGACIAAAAg");
	this.shape_36.setTransform(2.1,17.7,3.353,3.353);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F69E8C").s().p("AgIAXIAAgCQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQgDgCgCACQAAABAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBIAEgFIAEAAIADgCIAFgGQAIgHgBgFIgDgIIgCgHIACADIAEAGQAIgDAAABQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAAAQgBABAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAQgGAIABACIgBAIQgBACgDABIgGACQgBAJgBAAIAAgBg");
	this.shape_37.setTransform(7.1,-7.9,3.353,3.353);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F69E8C").s().p("AgQBCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQACgCAAgFIAJgOIAEgFQACgBACgEIgCgEIAAgEIABgEIgDgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIADACQACACAAADQAEgFAAgDIgCgFIACgFQADgEgFgKIAAgDIABgCQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDABQgCAFgDABQAAAAgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBIADgIIACgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABgBADgNIgBgKQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAABAAAAIABAKQAAAHgBACIgCAEQgBACAAAOIABAMQABAMgBACQgCAEABAKQAAADgDAHIgCAJQABAGACAEQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAABgBIgDAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBABAAABIgDAFQgCADADgIQABgCgGAGQgCACABADIgBAFIgEAFIgCABIgBgBg");
	this.shape_38.setTransform(25.3,-1.3,3.353,3.353);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F69E8C").s().p("AABAGIgBgGQgBgEgDAAIACgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAQABABAAAAQAAABAAAAQABABAAAAIAAAFIABABIABADIgCACIgCgCg");
	this.shape_39.setTransform(-12.8,-44.5,3.353,3.353);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F69E8C").s().p("AgBAEQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBABgBQAFgGgBAEQgCAGgBAAIgBAAg");
	this.shape_40.setTransform(9.5,-27.3,3.353,3.353);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F69E8C").s().p("AgEANQAAgDACgDIACgCQADgCAAgEQAAgGgDgHQAAgCAFgGQAAgBABAAQABgBAAAAQAAAAAAAAQABAAAAAAQABACgDAFQgBABABAIQABAEgCAHIgFAGQgCADgBAGQgBAGgDABIADgMg");
	this.shape_41.setTransform(8.8,-31.2,3.353,3.353);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F69E8C").s().p("AAAA3IAAgGIACgGIAAgDQAAgDACgCIACgBIAEAAIADgBIABgCQABgDgBgHIgEgSQgBgHgHgJQgCgDgBgHIgCgIQgBgEgGgFIgJgIQABgCAGAEQABAAABABQABAAAAAAQABAAAAAAQAAAAAAAAQAAgDgFgDQgFgGALAHQAGAEADAUQABAIAEAHQAHAJAAAGQgBACACAGIAEAIQAAABAAAAQABABAAAAQAAABAAABQAAAAgBABIgCACIgCAKQgBACABAFQAAADgFAEIACgFQACgDgEgEIgGAGIgEAKIAAAAg");
	this.shape_42.setTransform(22.5,-40.8,3.353,3.353);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F69E8C").s().p("AAGALQgBgCAAgDQAAgEgGgFQgDgDgCAAIgBAAIgBgEQAEgCAJAIQADADABABIgBAIIgCADIAAAAg");
	this.shape_43.setTransform(-12.3,-56.5,3.353,3.353);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F69E8C").s().p("AAIAFIgHgFQgDgBgCABIgCADQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgDgEACgCIAIAAQAKAEABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgCABIgBAAg");
	this.shape_44.setTransform(-36.2,-65.8,3.353,3.353);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F69E8C").s().p("AADAVIABgUQABgGgFgEIgGgDQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIACACIACgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAEAEgBADIgBAEQAAABAFAFIADAJIgDAPIAAAIg");
	this.shape_45.setTransform(3.2,-56,3.353,3.353);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F69E8C").s().p("AAVAKQgGgEABgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgDAAQgJAAAEgCIAGgBIgBgBIgBgEQABgCgFgCQgEgEgRgBIgNgCIgBgCIAAgBQAGgCAAABQABACAGACIAQACIAKACQAEgCADADQAHAFABAFIgEgDQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAEABABIAGADIABAEQACADAAADIAEAEQAEAEAAAFQgJgMgDgCg");
	this.shape_46.setTransform(-15.7,-72.9,3.353,3.353);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F69E8C").s().p("AAAAOQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIACAAQADAAAAgDQAAgCgCgEIgDgDIgHgGIgFAAQgDAAgBgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAKACAAACQAAACAIAFIANAKIAEADQABABAAAAQAAAAAAABQAAAAAAAAQAAAAgBgBIgJAAIADAIQgGgBgGgCg");
	this.shape_47.setTransform(8.1,-66.9,3.353,3.353);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B1E238").s().p("AgCAEQgGgCgEgDQgBgBgBgBQgBgBAAAAQAAgBABAAQAAgBABAAIAGACQADAEAIACIALABQAAABAAAAQABAAAAAAQAAAAgBAAQAAABgBAAQgDACgEAAQgFAAgEgDg");
	this.shape_48.setTransform(-63.3,42.1,3.353,3.353);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B1E238").s().p("AgDAIQgCgCAAgGIAAgGQABgFAEAAQACABADACQABADAAAFQAAAGgBAEQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgCAAgDgEg");
	this.shape_49.setTransform(-2.2,49.1,3.353,3.353);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B1E238").s().p("AAAAKQgDgDgCgGIgCgEQAAgHAHAAQADgBACAFIACAJQABAFgCACIgCABIgEgBg");
	this.shape_50.setTransform(-13.2,42.8,3.353,3.353);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B1E238").s().p("AgDADQgDgDAAgEIAAgEQABgDAEAAQADAAADADQACACAAAIQAAAJgCAAIAAABQgDAAgFgJg");
	this.shape_51.setTransform(-17.5,57.5,3.353,3.353);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B1E238").s().p("AgCAGQgDgEgBgEQAAgDACgDIADgCQAHACABAJQAAAKgFAAIAAAAQgCAAgCgFg");
	this.shape_52.setTransform(-8.2,65.8,3.353,3.353);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B1E238").s().p("AABAIQgEgEgDgEQgDgDACgEIADgCQAEgCADAEIAEAGQACACAAAFQAAAEgCABIgBAAQgCAAgDgDg");
	this.shape_53.setTransform(-33.6,86.9,3.353,3.353);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B1E238").s().p("AgCAGIgEgKQgCgEAEgCIAEgBQAGADABAJQABALgFAAQgDAAgCgGg");
	this.shape_54.setTransform(-35.2,72.2,3.353,3.353);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B1E238").s().p("AgBAHIgHgLQgBgFADgCIAEgBQADAAAGAIQADAEgBAGQAAAGgDABIgBAAQgCAAgEgGg");
	this.shape_55.setTransform(-23.9,78.4,3.353,3.353);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B1E238").s().p("AAAAIQgBgBgCgGQgCgEABgDIACgCIACAAQAEACABAGQACAHgDABIgDABIgBgBg");
	this.shape_56.setTransform(-27.1,61.6,3.353,3.353);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B1E238").s().p("AgBAIQgDgCgDgFIgBgDQgDgIAHAAQAEAAAGAGIAEAHQABAFgCACIgEABQgDAAgDgDg");
	this.shape_57.setTransform(-39,52.9,3.353,3.353);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B1E238").s().p("AACAKIgIgLQgEgHAIgCQAIgCACAPQABAGgDACIgCAAIgCgBg");
	this.shape_58.setTransform(-28.3,45.3,3.353,3.353);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B1E238").s().p("AgDAJIgCgIIgCgGQAAgHAGAAQAEAAACADQADADAAAFQgDANgDABQgBAAgEgEg");
	this.shape_59.setTransform(-42.2,37.9,3.353,3.353);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B1E238").s().p("AgDAFQgCgFAAgFIABgFIABgBQADgBACADQAHAFgGAQIgBAAQgCAAgDgHg");
	this.shape_60.setTransform(-21.8,35.2,3.353,3.353);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B1E238").s().p("AgDACQgDgFADgFIACgDQAEABACAKQACALgDABIgBAAQgDAAgDgKg");
	this.shape_61.setTransform(-35.7,27.2,3.353,3.353);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B1E238").s().p("AABAKQgDgCgDgHQgDgDACgFQABgDACgBQAFgBAEAGQACAGgBAHQAAAFgDAAIgDgCg");
	this.shape_62.setTransform(13.7,51.3,3.353,3.353);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B1E238").s().p("AACANIgCgEIgGgGQgDgDACgFIACgFQAEgEACADQAFAFACAHQACAHgDADIgEACIgBAAg");
	this.shape_63.setTransform(-7,30.1,3.353,3.353);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B1E238").s().p("AgDgJIAEAEQAEAFgBACQgBAHgEABQgEgPACgEg");
	this.shape_64.setTransform(7.2,32.8,3.353,3.353);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B1E238").s().p("AADAKQgEgBgDgGQgDgDABgFIACgEQADgCADAEQAEAEABAHQABAHgEAAIgBgBg");
	this.shape_65.setTransform(1.9,74.8,3.353,3.353);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B1E238").s().p("AAAgLQAAgBAEAFQAEAHgCAEQgEAIgFAAQgGgMAJgLg");
	this.shape_66.setTransform(19,72.6,3.353,3.353);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B1E238").s().p("AgCAHIgDgHIgBgFQAJgKAEASQAAAGgEABIgBAAQgCAAgCgDg");
	this.shape_67.setTransform(14.9,30.9,3.353,3.353);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B1E238").s().p("AgCAJQgDgCgBgGQAAgFABgCQAEgMAHATQACAGgEADIgDABQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_68.setTransform(12.8,19.3,3.353,3.353);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B1E238").s().p("AgFAFQgCgDAEgFIADgFQAGgEAAALQABALgDAAQgGAAgDgFg");
	this.shape_69.setTransform(10.7,6.8,3.353,3.353);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B1E238").s().p("AAAALIgFgIQgDgDACgFIADgEQACgDAHAEQAFACgGAOQgBABAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_70.setTransform(20.1,10.4,3.353,3.353);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B1E238").s().p("AgEAFIgEgGQgCgKAJABIAGAAQADABABAGQABAEgDAGQgCAEgEAAQgBAAgEgGg");
	this.shape_71.setTransform(-10.7,7,3.353,3.353);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B1E238").s().p("AgBAIQgDgDgBgFIgBgFQABgGAFADQADADADAGQACAGgDACIgCABQgCAAgCgCg");
	this.shape_72.setTransform(-2.3,15.5,3.353,3.353);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B1E238").s().p("AgEAJQgCgDAAgGIABgIIABgCQACgCACABQAEABABAGIABAKQABAFgEABIgCAAQgCAAgDgDg");
	this.shape_73.setTransform(1.5,5.4,3.353,3.353);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B1E238").s().p("AgFAJQgCgDADgHIAEgJQAFADABAKQABAEgFADIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_74.setTransform(10.9,-5.9,3.353,3.353);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B1E238").s().p("AAAAMIgEgHQgDgEACgGIACgHQAHgCACAMQACAKgEADIgDACIgBgBg");
	this.shape_75.setTransform(6.2,2.2,3.353,3.353);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B1E238").s().p("AgFAKQgCgDACgJQADgJABAAQAEgDADAHQACAGgCAHQgCAHgEAAQgCAAgDgDg");
	this.shape_76.setTransform(17.7,-4.3,3.353,3.353);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B1E238").s().p("AAAAOQgDgCgDgHQgBgEABgHQACgIACABQAEACAEAIQADAIgDAGQgBAEgDAAIgCgBg");
	this.shape_77.setTransform(25,-20.5,3.353,3.353);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B1E238").s().p("AgCAMQgDgDgBgJQAAgHACgFQANAIgCAGQgEALgDAAIgCgBg");
	this.shape_78.setTransform(17.7,-18.1,3.353,3.353);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B1E238").s().p("AAAAMQgFAAAAgCIABgWQANAPgDAGQgDAEgDAAIAAgBg");
	this.shape_79.setTransform(32.1,-7.9,3.353,3.353);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B1E238").s().p("AgDALIgCgWQAOAQgEAFQgDACgCAAIgDgBg");
	this.shape_80.setTransform(32.8,-28.7,3.353,3.353);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B1E238").s().p("AgFAHQgEgPACgFIAHAHQAIAGAAAFQAAAJgGAAQgGgDgBgEg");
	this.shape_81.setTransform(29.6,-42.2,3.353,3.353);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B1E238").s().p("AAAAEIgEgDIgGgDQgFgEAEgCQAEgCAHADQAIACADADQAFAEgGAHQgFgBgFgEg");
	this.shape_82.setTransform(10,-69.1,3.353,3.353);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B1E238").s().p("AgBAFQgGgDgEgEIgDgFIALAAQAKABAEADQAHAEgFAFIgEABIgCABQgEAAgEgDg");
	this.shape_83.setTransform(3.4,-74.8,3.353,3.353);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B1E238").s().p("AACAHQgEgCgIgLQAIgDAHAHQAHAFgBADQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgFgBg");
	this.shape_84.setTransform(14.7,-61.1,3.353,3.353);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B1E238").s().p("AAAAMQgBgBgDgFQgDgFgBgGIAAgGIAHADQAFADABAEIADAIQABABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgBAAg");
	this.shape_85.setTransform(21.4,-38.8,3.353,3.353);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B1E238").s().p("AgFABQgIgIAIgBIAEgBQADABADAFQAJANgIAAQgGAAgFgJg");
	this.shape_86.setTransform(12.3,-50.7,3.353,3.353);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B1E238").s().p("AgDAAIgFgIIAFgBQAEAAAEAEQAEAFAAAEQAAAFgEABIgBAAQgDAAgEgKg");
	this.shape_87.setTransform(7.5,-55.7,3.353,3.353);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B1E238").s().p("AAHAIQgEgBgIgHQgJgGAHgBIAIADQAJADABADQACAGgFAAIgBAAg");
	this.shape_88.setTransform(4.9,-66.3,3.353,3.353);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B1E238").s().p("AgCADIgHgFIgCgDIAEgCQAEgCAEADQAGADADAFQAEAGgDABIgBAAQgEAAgIgGg");
	this.shape_89.setTransform(-3.5,-72.9,3.353,3.353);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B1E238").s().p("AAEAIQgLgGgBgDQgBgDAEgCQAEgDAEADQAGACAAAGQAAAGgDAAIgCAAg");
	this.shape_90.setTransform(-18,-76.6,3.353,3.353);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B1E238").s().p("AADAIIgMgOQADgFANAHQAFADgCAGQgBADgCABIgCAAIgCgBg");
	this.shape_91.setTransform(-2.3,-66.5,3.353,3.353);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B1E238").s().p("AgEAGQgDgGAAgEIABgFQABgHAIAJQADADABAIQACAIgCABIgCAAQgFAAgEgHg");
	this.shape_92.setTransform(-30.1,14.9,3.353,3.353);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B1E238").s().p("AgFADQgEgEACgFQACgEACAAQAGAAAEAKQADAIgCACIgDABQgEAAgGgIg");
	this.shape_93.setTransform(-24.6,1.8,3.353,3.353);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B1E238").s().p("AgHgCQgBgGAFgCIAEgCQAHAAAAAIQAAARgHAAQgFAAgDgPg");
	this.shape_94.setTransform(-46.9,18.8,3.353,3.353);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B1E238").s().p("AgEAEQgEgDABgEIABgFQAEgIAHAJQACAEABAGQABAHgCACIgCAAQgDAAgGgIg");
	this.shape_95.setTransform(-43.9,2.5,3.353,3.353);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B1E238").s().p("AgFAAQgBgIAEgCQADgBACAEQADAHAAAGQgBAEgDABIAAAAQgEAAgDgLg");
	this.shape_96.setTransform(-37.6,-5.8,3.353,3.353);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B1E238").s().p("AABALIgEgDQgDgDgBgGIABgHQAAgEAEACQAEACADAEQADAEAAAEQAAAFgDABIgDABIgBAAg");
	this.shape_97.setTransform(13.8,-30.6,3.353,3.353);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B1E238").s().p("AgEACQgEgCAAgEIACgDQAGgIAHAPQADAHgFAEg");
	this.shape_98.setTransform(-18.6,-9,3.353,3.353);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B1E238").s().p("AAAAMQgGgEAAgJIAAgJQAKgHADASQABAMgFAAIgDgBg");
	this.shape_99.setTransform(-5.4,-6.8,3.353,3.353);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B1E238").s().p("AgCAHQgEgDABgGIABgFQAEgFADADQAEADAAANQgBABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgDAAgDgEg");
	this.shape_100.setTransform(9,-19.3,3.353,3.353);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B1E238").s().p("AAAAJIgEgJIgCgGQgBgIAIAGQAGAEAAAKQABAFgDABIgBAAQgCAAgCgDg");
	this.shape_101.setTransform(7.2,-44.7,3.353,3.353);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B1E238").s().p("AACALIgHgGQgFgEADgFIADgFQAEgDAEACQAEACAAACIABAHQAAAHgCACIgDACIgCgBg");
	this.shape_102.setTransform(3.3,-37.7,3.353,3.353);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B1E238").s().p("AgFABQgCgDABgEIACgDQADgDACAAQADABACAFQACAEgBAHQAAAHgDAAIgBABQgFAAgDgMg");
	this.shape_103.setTransform(-6.3,-27.5,3.353,3.353);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B1E238").s().p("AABAJQgEgCgEgEQgDgDABgEIABgDQADgFAJAHQAEACACAFQABAGgCACIgDAAIgFgBg");
	this.shape_104.setTransform(-2.8,-58.9,3.353,3.353);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B1E238").s().p("AAEAMQgCgBgEgHIgEgIQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQABgBAFgBQAEAAABADIACAIQABAEgBAEQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_105.setTransform(-14.5,-20.4,3.353,3.353);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B1E238").s().p("AADAJIgFgFIgEgFQgDgFAIgDQAFgBAEAPQABAFgEAAIgCgBg");
	this.shape_106.setTransform(-15.3,-42.1,3.353,3.353);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B1E238").s().p("AgCAFIgFgFQgCgGAHgEQAGgDACAJQAEAPgFABIAAAAQgDAAgEgHg");
	this.shape_107.setTransform(-23,-34.1,3.353,3.353);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B1E238").s().p("AgGAAQgCgEABgDIACgDQAFgDADACQAEACABAGQACAPgFABIgBAAQgFAAgFgNg");
	this.shape_108.setTransform(-29.8,-20.6,3.353,3.353);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B1E238").s().p("AAFALQgFgDgGgHQgEgDABgDIACgCIADgCQADgCACABQAFABADAPQACAFgEAAIgCAAg");
	this.shape_109.setTransform(-42.3,-28.2,3.353,3.353);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B1E238").s().p("AgBAHQgEgCgCgFIAAgFQABgHAHAFQAGAFACAGQAAAGgDAAQgDAAgEgDg");
	this.shape_110.setTransform(-14.5,-54.7,3.353,3.353);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B1E238").s().p("AABAJQgEgBgDgEIgCgDIgBgEQAAgDAEgCQAFgCACAEIAGAHQADAFgCACIgEABIgEAAg");
	this.shape_111.setTransform(-16,-68.4,3.353,3.353);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B1E238").s().p("AACAKQgDgBgFgEIgDgEIAAgEQABgDAEgCQAIgDAFAMQADAJgJAAIgBAAg");
	this.shape_112.setTransform(-27.3,-69.4,3.353,3.353);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B1E238").s().p("AACAJQgKgFAAgKQAAgEAGACQAFADAEAFQADADgDAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_113.setTransform(-24.1,-53.8,3.353,3.353);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B1E238").s().p("AgHACQgDgCABgCIAEgGQACgCADABQACABACACQAJALgEAEIgCABQgFAAgJgIg");
	this.shape_114.setTransform(-38.2,-45.4,3.353,3.353);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B1E238").s().p("AgHgDQgCgEADgCQACgBAEABQAEAAACAFIADAIQABAHgHAAQgBAAgJgOg");
	this.shape_115.setTransform(-51.7,-47.7,3.353,3.353);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B1E238").s().p("AgBAIQgFgDgBgFIgBgEQABgFAEgBQADAAAEAEQAEACABAGQABAFgCACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgCAAgEgDg");
	this.shape_116.setTransform(-36.6,-61.7,3.353,3.353);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B1E238").s().p("AgGAAQgCgGAEgCQAEgBAEAEQADACABAFQAAAGgDABIgBAAQgEAAgGgJg");
	this.shape_117.setTransform(-49.8,-63.3,3.353,3.353);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B1E238").s().p("AABAJQgFAAgEgKQgCgEAHgDQAEgBAGAJQAEAEgDADQgCACgDAAIgCAAg");
	this.shape_118.setTransform(-64.5,-64.8,3.353,3.353);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B1E238").s().p("AACALIgJgNQgDgEACgCIAFgDQAFgCAFAKQAFALgDADIgDABIgEgBg");
	this.shape_119.setTransform(-52.9,34.7,3.353,3.353);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B1E238").s().p("AgGgBQgDgJAIgBQAGgCACAIQABAEgBAGQgBAGgCABIAAAAQgCAAgIgNg");
	this.shape_120.setTransform(-50.5,-17.3,3.353,3.353);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B1E238").s().p("AAGALIgJgJQgIgJAEgCQAFgDAFAEQAFAFABAFIABAIQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_121.setTransform(-73.3,-3.5,3.353,3.353);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B1E238").s().p("AgEAFIgDgHQAAgJAHgBQAEAAACACIACAHQABADgCAHQgDAGgCAAQgCAAgEgIg");
	this.shape_122.setTransform(-58.1,12.5,3.353,3.353);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B1E238").s().p("AgHgCQgDgHAHgBQAHgCACAFQACADAAAGQABAIgDACIAAAAQgEAAgJgOg");
	this.shape_123.setTransform(-67.9,17,3.353,3.353);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B1E238").s().p("AAEAMQgEAAgDgIIgEgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAEgCQAGgCADAMQADANgGAAIAAAAg");
	this.shape_124.setTransform(-57.6,-4.8,3.353,3.353);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B1E238").s().p("AACALIAAgBQgNgJAGgGQAEgFADgBQAEAAABAFIABAMQAAAGgEAAIgCgBg");
	this.shape_125.setTransform(-73.4,-54,3.353,3.353);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B1E238").s().p("AgBAFIgGgIQgCgIAHABQAFAAADACQACAEAAAHQABAIgDABIAAAAQgDAAgEgHg");
	this.shape_126.setTransform(-58.8,-40.6,3.353,3.353);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B1E238").s().p("AgFgCQgCgDAAgDQABgDADAAQAGgCADAKQAFAMgFADIgCAAQgEAAgFgOg");
	this.shape_127.setTransform(-65.6,-29.3,3.353,3.353);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B1E238").s().p("AgDADQgEgHAAgCIAAgDQACgCAFAAQAHgBABALQACANgGAAIAAAAQgDAAgEgJg");
	this.shape_128.setTransform(-89.9,-16.4,3.353,3.353);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B1E238").s().p("AAFAMQgDgBgEgGIgEgFIgCgDQgBgEAFgDQAFgDAFAHQADAEABAFQAAAJgEAAIgBAAg");
	this.shape_129.setTransform(-74.3,-19.7,3.353,3.353);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B1E238").s().p("AADALQgDgBgEgHQgEgGAAgBQACgJAHAGQAHAFABAEQABADgCADQgCADgDAAIAAAAg");
	this.shape_130.setTransform(-88.9,-31.3,3.353,3.353);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B1E238").s().p("AgFAFQgDgGACgDQAAgHAFABQAEAAADAFQACAEgBAFQgBAHgFABIgBAAQgDAAgCgHg");
	this.shape_131.setTransform(-81.5,-44.1,3.353,3.353);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B1E238").s().p("AgEAMQgEgBABgIIACgIQADgJAFAFQADADACAEQgFAOgGAAIgBAAg");
	this.shape_132.setTransform(-93.6,-49.9,3.353,3.353);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B1E238").s().p("AgCAJQgDgDAAgEQgBgOAGADIAGADQABABgBAFIgBAGQAAAEgDABQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBgBAAg");
	this.shape_133.setTransform(-119.2,-44.4,3.353,3.353);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B1E238").s().p("AAAAKQgIgEACgHQACgEADgDQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAGACgBAFIgCAIQgBAEgDAAIgBAAg");
	this.shape_134.setTransform(-134.1,-27.7,3.353,3.353);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B1E238").s().p("AAAAJIgGgOQADgIAEAFQAFAEABAHQABAHgDABIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_135.setTransform(-124.9,-18.9,3.353,3.353);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B1E238").s().p("AgBAMQgHgKAEgHQAFgLADAGQADAEgCALQgCAJgCAAIgCgCg");
	this.shape_136.setTransform(-120.7,-27.5,3.353,3.353);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B1E238").s().p("AgBAJQgEAAAAgJIABgHQAAAAAAgBQAAAAABgBQAAAAABABQABAAABAAQACACACAEQACADgBAEQgCAFgDAAIgBgBg");
	this.shape_137.setTransform(-112.5,-23.8,3.353,3.353);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B1E238").s().p("AADALQgHgCgBgJQgCgLAFAAQADABAEALQAEALgEAAIgCgBg");
	this.shape_138.setTransform(-100.4,-36.9,3.353,3.353);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B1E238").s().p("AgFgCQABgIAEAAQAFABAAAHQABADgDAFQgCAFgBAAQgFAAAAgNg");
	this.shape_139.setTransform(-101.1,-20,3.353,3.353);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B1E238").s().p("AAFALQgCAAgEgGIgGgHIgBgGQABgCAFAAQAHgCADAMQACALgEAAIgBAAg");
	this.shape_140.setTransform(-44.8,84.5,3.353,3.353);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B1E238").s().p("AgEAGQgEgGADgIQACgHAEADQAFADABAEIAAAKQAAAIgBABIgBAAQgDAAgGgIg");
	this.shape_141.setTransform(-47.3,69.3,3.353,3.353);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#B1E238").s().p("AABAKQgBAAgDgHIgEgGQgCgGAGgBQAEgBAEACQACABABAHQABAFgBAEQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgEgCg");
	this.shape_142.setTransform(-50.3,53.1,3.353,3.353);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#B1E238").s().p("AADAMQgCgBgDgHIgEgGQgCgFACgCQACgCAFAAQAJgBgCASIgCAGIgBAAIgCAAg");
	this.shape_143.setTransform(-62.8,38,3.353,3.353);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B1E238").s().p("AAFALQgKgJgBgDIgCgGQgBgDAGAAQAJgBACAIQADAOgEAAIgCAAg");
	this.shape_144.setTransform(-62.4,53.6,3.353,3.353);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B1E238").s().p("AAAAGQgCgBgDgFIgDgEQAEgHALAMQAEAEgDACIgDAAIgFgBg");
	this.shape_145.setTransform(-59.4,85.7,3.353,3.353);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#B1E238").s().p("AgDADIgGgJQgBgGAFACQAFACAFAGQAFAEAAAEQABAFgFABIgBAAQgDAAgFgJg");
	this.shape_146.setTransform(-55.9,79.4,3.353,3.353);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B1E238").s().p("AgEAGQgBgDgBgGIAAgFIABgBQADgHAHALQADAEgBAGQgBAGgCABIgCAAQgDAAgDgGg");
	this.shape_147.setTransform(-58.6,66.8,3.353,3.353);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B1E238").s().p("AgCAEIgFgKQgBgFAFABQADABAEAEQAEADAAAFQABAGgEACIgBAAQgDAAgDgHg");
	this.shape_148.setTransform(-68.3,73.6,3.353,3.353);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B1E238").s().p("AgDAEQgFgCgCgDIgBgDQACgDADAAIAIAEQALADgBAFQgBADgEAAQgFgBgFgDg");
	this.shape_149.setTransform(-65.9,88.2,3.353,3.353);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#B1E238").s().p("AAEAJQgCAAgGgFQgFgEAAgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAIgEAEAEQAEADACAEQABAEgCADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgCgBg");
	this.shape_150.setTransform(-73.7,78,3.353,3.353);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#B1E238").s().p("AgHAAQgDgEACgDQABgEADAAQAGAAAEAFQACADABAGQABAHgDABIgBABQgEAAgJgMg");
	this.shape_151.setTransform(-85.2,3.5,3.353,3.353);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#B1E238").s().p("AACALIgBgBQgKgNACgEQACgEAFAAQAEgBACAEQADAFgCAIQAAAHgDAAIgCgBg");
	this.shape_152.setTransform(-92.9,14.7,3.353,3.353);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#B1E238").s().p("AAEAKQgNgKABgDQAAgEAFgDQAFgCADAFQADAHABAGQABAGgDAAIgDgCg");
	this.shape_153.setTransform(-77.7,22.3,3.353,3.353);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#B1E238").s().p("AAGAMQgUgLAFgHQAEgFAFAAQAEAAACAEQAIATgGAAIgCAAg");
	this.shape_154.setTransform(-76.5,37.3,3.353,3.353);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B1E238").s().p("AAFANQgEgBgCgFQgCgDgCgGIgCgGQABgDAEgBQAEgBADAEQACACAAAGIAAAKQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAIgBAAg");
	this.shape_155.setTransform(-71.6,60.5,3.353,3.353);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#B1E238").s().p("AAIALIgBAAQgWgIAGgIQAEgGAEABIAGAHQAEADACAGQABAFgDAAIgBAAg");
	this.shape_156.setTransform(-77.1,46.3,3.353,3.353);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#B1E238").s().p("AgFADIgDgIQgCgGAHACQAEACAFAGQAEAFgBADQgBADgFAAQgEAAgEgHg");
	this.shape_157.setTransform(-81.5,64.8,3.353,3.353);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#B1E238").s().p("AgBAGQgHgEAEgHQAEgGAFANQACAFgDAAIgBABQgDAAgBgCg");
	this.shape_158.setTransform(-90,68.6,3.353,3.353);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B1E238").s().p("AAAAJQgDgDgDgFQgCgDgBgEIAAgEQAHgBAHALIAEAFQACAEgDABIgCABQgDAAgDgCg");
	this.shape_159.setTransform(-84.8,80,3.353,3.353);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#B1E238").s().p("AgDAEQgJgGAFgFIAJAFQADABADADQAEAFgDABIgDAAQgEAAgFgEg");
	this.shape_160.setTransform(-105.9,73.4,3.353,3.353);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#B1E238").s().p("AgIgBIgBgDQgBgEACgBQAIgEAGAJQAEAEAAAFQAAAGgEABIgBAAQgFAAgIgNg");
	this.shape_161.setTransform(-98.4,73.9,3.353,3.353);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#B1E238").s().p("AABAJIgHgHQgDgDAAgEIABgEQACgEAIAGQAEADADAFQACAHgDACIgDABQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBg");
	this.shape_162.setTransform(-103.9,62.2,3.353,3.353);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B1E238").s().p("AAFALQgDAAgIgOIgBgDQAAgDAEgBQADgBADAEIAEAIQACAFgBADQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape_163.setTransform(-86.9,52.1,3.353,3.353);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#B1E238").s().p("AgDAFQgEgGAAgDIACgEQACgDADABQAFABABADIACAGQABAMgGAAQgDAAgDgHg");
	this.shape_164.setTransform(-109.3,-5.4,3.353,3.353);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#B1E238").s().p("AgCAHQgDgCACgGQACgGABgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABABAAIAAAEIACAJIgDACQgCAAgCgCg");
	this.shape_165.setTransform(-118.4,-8.4,3.353,3.353);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#B1E238").s().p("AgEALQgFgMAEgGQAEgEAEAAQAFAAAAAIQgBAHgDAFQgDADgCAAIgDgBg");
	this.shape_166.setTransform(-106.4,11.1,3.353,3.353);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B1E238").s().p("AgGAEQgDgEACgFIACgFQAFgFAGAKQACAEABAGQAAAHgDAAIgCABQgEAAgGgJg");
	this.shape_167.setTransform(-92.9,29.6,3.353,3.353);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#B1E238").s().p("AACAKIgEgEIgGgLQgCgIAKADQAHADACAJQABAJgEABIAAAAIgEgCg");
	this.shape_168.setTransform(-97.5,35.3,3.353,3.353);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#B1E238").s().p("AADAMIgGgGQgCgCgBgHIAAgHIAAgBQAGgCADAJQADAFABAGIgBAEIgDABIAAAAg");
	this.shape_169.setTransform(-100.5,45.9,3.353,3.353);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#B1E238").s().p("AADAJQgEgCgEgEQgEgDAAgEIABgEQAHgCAGAIQAHAHgDADQAAABAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIgDgBg");
	this.shape_170.setTransform(-108.1,49.5,3.353,3.353);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B1E238").s().p("AACAIIgGgHQgEgCAAgEIABgEQAJgBAFAJQAEAHgDADIgDABIgDgCg");
	this.shape_171.setTransform(-131.7,43.9,3.353,3.353);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B1E238").s().p("AgGAEQgCgCAAgGQAAgGACAAQAHADAFAHQAFAHgDADIgDABQgFAAgGgHg");
	this.shape_172.setTransform(-115.3,59.8,3.353,3.353);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B1E238").s().p("AAAAFQgEgCgDgFIgCgEIAHADQAHADADAEQABABABAAQAAABAAAAQAAABAAAAQAAAAgBAAIgJgCg");
	this.shape_173.setTransform(-122.9,58.6,3.353,3.353);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#B1E238").s().p("AAEAHIgIgFQgFgCABgDIABgEIADAAIAEABQAEACADAEQADAFgBACIgBABIgEgBg");
	this.shape_174.setTransform(-120.3,48.4,3.353,3.353);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B1E238").s().p("AgDAEQgCgDgBgEIAAgFQgBgEAIAGQADACACAEQACAGgBADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAQgCAAgGgGg");
	this.shape_175.setTransform(-115.6,36.5,3.353,3.353);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#B1E238").s().p("AAEAJQgFgCgFgFQgFgDAEgFIAEgDIAHAJQAIAIgDABIgCABIgDgBg");
	this.shape_176.setTransform(-112.8,29,3.353,3.353);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#B1E238").s().p("AABAKIgEgHQgCgDAAgFIABgFQAIACACAIQABAIgDACIgCABIgBgBg");
	this.shape_177.setTransform(-120.6,1.2,3.353,3.353);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B1E238").s().p("AgCAGQgCgDAAgFIABgFQADgFACAHQAEAFgBAHQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCAAgDgFg");
	this.shape_178.setTransform(-129.6,-13.3,3.353,3.353);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#B1E238").s().p("AgBAKQgHgGAEgFQADgEAEgCIADgCQACATgJAAIAAAAg");
	this.shape_179.setTransform(-151.9,-19.5,3.353,3.353);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B1E238").s().p("AgEAAQACgEADgBIAEgBQAAAKgEADQgGgCABgFg");
	this.shape_180.setTransform(-141.3,-16.7,3.353,3.353);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#B1E238").s().p("AgBAGQgDgDABgDQACgKABADQADADABAFQACAHgEAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_181.setTransform(-135.2,-7.3,3.353,3.353);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#B1E238").s().p("AgCAFQgDgDgBgEIAAgFIADgEQACgBACADQAEAEACAIQABAIgCABIgBAAQgDAAgEgHg");
	this.shape_182.setTransform(-125.7,5.4,3.353,3.353);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#B1E238").s().p("AgEAAQAAgGADgCQABgBACAEQAFAJgDAFQgKgCACgHg");
	this.shape_183.setTransform(-128.1,15.2,3.353,3.353);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B1E238").s().p("AAAAIIgGgIQgDgEACgDIACgDQAIADAEAIQAEAIgFACIgBAAQgCAAgDgDg");
	this.shape_184.setTransform(-127.9,29.1,3.353,3.353);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B1E238").s().p("AABAKIgFgIQgEgDABgFIABgFQAHACAFAJQAFAKgEACIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_185.setTransform(-130.3,34.7,3.353,3.353);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#B1E238").s().p("AABAFIgHgGQgDgEADgDQACgDAEADQAEACADAHQACAHgBACIgCAAQgCAAgDgFg");
	this.shape_186.setTransform(-148,25.9,3.353,3.353);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#B1E238").s().p("AgFgEIgBgFIACgCQAEgDAEANQAEAGgBAIQgMgNAAgEg");
	this.shape_187.setTransform(-155.1,13.1,3.353,3.353);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#B1E238").s().p("AABALQgDgEgDgIQgDgIAFgCIAEgBQAFABABALQABAMgBABIgCAAQgBAAgDgCg");
	this.shape_188.setTransform(-140.7,18.2,3.353,3.353);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B1E238").s().p("AAAAGIgEgGQgCgEADgDIADgFQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABQACADAAAJQABAKgCAAIgEgHg");
	this.shape_189.setTransform(-150.6,8.3,3.353,3.353);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#B1E238").s().p("AACANQgCgBgCgCIgDgKIgBgHQAAgKALAKQAEAEgDANQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_190.setTransform(-138.1,6.5,3.353,3.353);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#B1E238").s().p("AgFgEQAAgHAFgBIAGAAIAAADIgBAIIgBAIQgBAGgDAAQgHAAACgRg");
	this.shape_191.setTransform(-147.7,-7.2,3.353,3.353);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B1E238").s().p("AgFAMQgHgBAHgQQACgGAGAAQADAAADACIgDADQgCADgBACQAAADgDAEQAAAGgEAAIgBAAg");
	this.shape_192.setTransform(-157.3,-11.2,3.353,3.353);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#9CC93C","#9AC63C","#95BB3C","#8DA93B","#879C3B"],[0,0.322,0.596,0.855,1],1.1,-5.3,-0.3,0.5).s().p("Ai+BVQAAgKAIgMQALgRABgDQAEgIAMgJIAMgIQgEACgVgKQgHgDgUgNQgQgLgQgEQgSgFAAgFQAAgCAHgDQAOgFAfAEIAiAGQAQACATgCQATgCASgJIAUgLIAUgKQASgHAUgEQAUgEAbAFQAPADASAGQAHACAIgCIANgGIASgRQAOgPARgGQASgHAXADQASADAHAFQAEADACALIACAQQADAJATADQACAIgKADQgHACgNgDQgLgDgFgDQgDgCgSAAIgTABQgQgEglAAQAWAEAZAPQgQALgZADIghADQgKABgbgCIgagDIgkAgQgIAJgBAKQAAAEACADQgigLABgUIAIgTIgPAQQgTAVgSAcQgRAcgmAZQgSAMgQAHg");
	this.shape_193.setTransform(-83.4,-67.5,3.353,3.353);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D81F27").s().p("AAAAAIgDgKQALAEgIANIgBAEQABgFAAgGg");
	this.shape_194.setTransform(-101.5,-5,3.353,3.353);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D81F27").s().p("AgNANQABgNAEgJQAIgQANAPIABAJQABAJgHAFQgHAFgHAAIgBAAQgHAAABgFg");
	this.shape_195.setTransform(-120.7,-28.3,3.353,3.353);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D81F27").s().p("AgBAMQgHgHgCgIQgDgNAPAEIAFAFQAFAGgBAEQgBAGgFADIgEACQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_196.setTransform(-124.9,-17.6,3.353,3.353);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D81F27").s().p("AgBAMQgHgJgCgGQgDgNAPAEIAFAFQAFAGgBAEQgBAHgFACIgEACQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_197.setTransform(-118.7,-8.2,3.353,3.353);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D81F27").s().p("AgBAMQgHgIgCgHQgDgNAPAEIAFAFQAFAGgBAEQgBAGgFAEIgEABQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_198.setTransform(-113,-23,3.353,3.353);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D81F27").s().p("AgCAOQgHgLgCgHQgEgOARAEIAGAGQAGAHgBAFQgCAHgFADIgFACQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_199.setTransform(-74.2,-19.2,3.353,3.353);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D81F27").s().p("AgBAOQgIgLgCgHQgEgPARAFIAGAFQAGAHgBAFQgCAIgFADIgFACQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_200.setTransform(-73.1,-2.5,3.353,3.353);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D81F27").s().p("AgCAOQgWgjAaAHIAGAFQAGAHgBAFQgCAIgFADIgFACQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_201.setTransform(-93,15.4,3.353,3.353);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D81F27").s().p("AgCAOQgHgLgCgHQgEgPARAFIAGAFQAGAHgBAFQgCAIgFADIgFACQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_202.setTransform(-85.3,3.8,3.353,3.353);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D81F27").s().p("AgCAOQgHgLgDgHQgEgPASAFIAGAFQAGAHgBAFQgCAIgFADIgFACQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_203.setTransform(-89.9,-16.6,3.353,3.353);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#D81F27").s().p("AgCAOQgHgLgDgHQgEgPASAFIAGAFQAGAHgBAFQgCAIgFADIgFACQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBgBAAg");
	this.shape_204.setTransform(-88.1,-31.5,3.353,3.353);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D81F27").s().p("AgGAQQgGgCAAgEQACgMAFgHQAHgNAKAPQADAOgJAGQgFADgEAAIgDAAg");
	this.shape_205.setTransform(-93.9,-49.9,3.353,3.353);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D81F27").s().p("AgBAOQgIgKgCgIQgFgOASAEIAHAFQAGAHgCAFQgBAHgGAEQgDACgCAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_206.setTransform(-119.4,-44.3,3.353,3.353);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D81F27").s().p("AgBAOQgZgiAcAGIAGAFQAGAHgBAFQgBAHgGAEQgCACgDAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_207.setTransform(-100.3,-36.5,3.353,3.353);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#D81F27").s().p("AgMAPQgCgPADgKQAEgRARAPIADAJQACAKgFAGQgGAHgHAAIgCAAQgGAAgBgFg");
	this.shape_208.setTransform(-101.2,-18.9,3.353,3.353);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D81F27").s().p("AAAARQgKgLgEgKQgHgQAWACIAIAGQAJAHgBAHQAAAJgHAFQgDADgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_209.setTransform(-86.2,52.1,3.353,3.353);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#D81F27").s().p("AAAARQgKgLgEgJQgHgRAWADIAIAGQAJAHgBAGQAAAJgHAFQgDADgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_210.setTransform(-97.8,35.7,3.353,3.353);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D81F27").s().p("AgMAPQgCgPADgKQAEgRARAPIADAJQACAKgFAGQgGAHgHAAIgCAAQgGAAgBgFg");
	this.shape_211.setTransform(-92.7,29.1,3.353,3.353);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#D81F27").s().p("AgLAOQgCgOACgJQAEgRAPAPIAEAJQACAJgFAFQgFAHgHAAIgBAAQgGAAgBgFg");
	this.shape_212.setTransform(-157.1,-10.5,3.353,3.353);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D81F27").s().p("AgLAOQgCgOACgJQAEgRAPAPIAEAJQACAJgFAFQgFAHgHAAQgHAAgBgFg");
	this.shape_213.setTransform(-148.2,-6.9,3.353,3.353);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#D81F27").s().p("AgLAOQgCgOACgJQAEgRAPAPIAEAJQACAJgFAFQgFAHgHAAIgBAAQgGAAgBgFg");
	this.shape_214.setTransform(-151.6,-18.5,3.353,3.353);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D81F27").s().p("AgLAOQgCgOACgJQAEgRAQAPIADAJQACAJgFAFQgFAHgGAAIgBAAQgHAAgBgFg");
	this.shape_215.setTransform(-134.3,-27.7,3.353,3.353);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D81F27").s().p("AgGAKQgDgJADgHQACgLAKAKIACAGQABAGgDADQgDAFgEAAIgBAAQgEAAAAgDg");
	this.shape_216.setTransform(-140.4,-16.9,3.353,3.353);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D81F27").s().p("AgJAMQgCgMACgIQADgOANAMIADAIQACAIgEAEQgEAGgFAAQgHAAgBgEg");
	this.shape_217.setTransform(-134.6,-7.4,3.353,3.353);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D81F27").s().p("AgMAPQgCgPADgKQAEgSARAQIADAJQACAKgFAGQgGAGgHABIgCAAQgGAAgBgFg");
	this.shape_218.setTransform(-138.1,8.9,3.353,3.353);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#D81F27").s().p("AgMAPQgCgPADgKQAFgRAQAPIADAJQADAKgGAGQgGAHgHAAIgCAAQgGAAgBgFg");
	this.shape_219.setTransform(-128,17,3.353,3.353);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#D81F27").s().p("AgMAPQgEgyAaAXIADAJQACAKgFAGQgGAGgHABIgBAAQgHAAgBgFg");
	this.shape_220.setTransform(-121.5,2.4,3.353,3.353);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#D81F27").s().p("AgMAPQgCgPADgKQAEgRARAPIADAJQACAKgFAGQgGAHgHAAIgCAAQgGAAgBgFg");
	this.shape_221.setTransform(-125.3,4.8,3.353,3.353);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#D81F27").s().p("AgMAPQgCgPADgKQAFgRAQAPIADAKQADAJgGAGQgGAHgHAAIgCAAQgGAAgBgFg");
	this.shape_222.setTransform(-106.9,11.4,3.353,3.353);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#D81F27").s().p("AAAARQgKgMgEgIQgIgRAXACIAIAGQAJAHgBAHQAAAJgHAFQgDADgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_223.setTransform(-108.4,-5,3.353,3.353);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#D81F27").s().p("AgtEHQgFgBAJgIIAJgIIAUgdIAJgSQAFgNgCgEIgJgOIAAgSQABgPAFgFQAEgGgJgUIgGgOQgEgLADgDQADgEACgGIABgFIgEgOIAHgTQABgGgCgLQgIgNADgDQADgFABgQQACgSADgEQACgDABgIIAAgJIgBgKQgFgPABgJQgBgTAFgGQACgDgBgHIAAgJQAFgUgFgFIgSgOQAJgKgEgNQgCgHgIgKIgHgJQgPgCgEgJQgDgFAAgHIgBgGIAEACIAjAaQAjAbAEAGQAFAFABAJIACAMQABAGAKAKQAQAcgKACQgGAAgEAIQgEAIAAAIQABAHADAGIAFAJQAGAOgEAFQgEAFgCAFQgCAGACABQADABADAKQADALgDAHQgCAEgGAGQgFAFgBAEQgBAHACAKIAAAQQABAQgCADIgFAOIgEAOQgCAIAEAKIAFAJQADAFgEADIgOAMQgCABABAFIACAJQAAADACAEIACAFQABAJgGADQgEADgCAIQAAACADADQACACgBAFQgBADABAGQAAADgEADIgGAEIgEAEQgEAEgMAUQADAMgHAEIgNAIQgGAEgFAAIgBgBg");
	this.shape_224.setTransform(10.5,13.4,3.353,3.353);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#D81F27").s().p("ACQCsQgKgGgwgTIg8gaQgtgWgqgiQgagUghgiQgegfgRgWQgNgRgDgYQgBgWgCgGQgIgQgEgMQgHgXAMgPIAIAZQAJAbAJAKQAGAHAjANQAlAPAPANIAsAhQAXAQACAJQAEAPgCAdQABAKAIAUIAzApQA9ArA1ALQAUASALgBIgWABQgXAAgNgGg");
	this.shape_225.setTransform(-94.2,46.7,3.353,3.353);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D81F27").s().p("AA4EQQgZgHgjgSQgtgXgXgYQgbgagSgjQgTgiACgSQACgRAHgRQAGgQAJgGQAbgQAFgIQAHgHgBgjQgCgpgPgSQgQgTgIgXQgHgVADgMQADgNANgNQAPgOARgCQASgCgCgNQgCgMgSgDQgTgCgKgKQgKgKAWgCIBMgHIA4AKIAXAKQAZAOAPAQQAOARAGAWQADAMACASQADAIgDAcIgCAfQAEAPgBAIIABAUQABAPgDADQgCADgGAOIgJARQgDADACANQADANAEAEQAIAGACAEQAFAIgEAGIgJAOQgEAIgDADQgHAIAFAQIAJAXQAGASACAOIAGAiQACATgNAEQgMAFgFANQgCAHAAAFQgGAGgJAEQgNAGgLAAIgKgBg");
	this.shape_226.setTransform(-41,13.2,3.353,3.353);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EC5A58").s().p("ABPEjIgMgHQgVgLgEABQgCAAgLgGQgLgGgDAAIgMgDIgYgLQgTgEgOgNIgbgLQgPgIgIgKIgWgRIgIgJQgigWgYgeQgIgGgUgdIgOgQQgVgZAAgHQgFgCgCgJIgCgIIgXg/IgFgTQAAgXAPgfIANgPQAXgaAGgGIAngbQBFhCAcgJQAdgKBsgQQAMgCAhAAQAsABAeAIIAXAGIAiAZQAZATAGAFQAmAmgCAJIgDAKIAPArIgHB3QAAAIgJAtIgOAyIAAAYQgCAIgDAdQgCAEgCAPIgEAZQAAAEgEAJIgEALQAAAFgJACIgWAeIghAOQgMAHgEAAIgIAAQgIgCgEADQgDADgMACQgKACgDAAQgQgEgEABQgHAFgFAAIgDgBg");
	this.shape_227.setTransform(-66.3,12.1,3.353,3.353);

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-82.8,130.6,3.353,3.353,0,0,0,4,2.8);
	this.instance_5.alpha = 0.609;

	this.instance_6 = new lib.Path_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-117.5,102.8,3.353,3.353,0,0,0,6,2.4);
	this.instance_6.alpha = 0.609;

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#9CC93C","#9AC63C","#95BB3C","#8DA93B","#879C3B"],[0,0.322,0.596,0.855,1],-0.8,1.5,2,-1.1).s().p("AgDAkQgVgGgPAAIgKABQAAgPANgQQAZggA9gEIgNAoQgPAhgTAAIgGgBg");
	this.shape_228.setTransform(-82.3,132.2,3.353,3.353);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#9CC93C","#879C3B"],[0,1],-0.9,0.4,0.2,-3.2).s().p("AhIARQAqgKAZgKQARgHAYgEQAWgEAPABIgrAMQgsAMgMAFQgOAGgRAAIgPgBg");
	this.shape_229.setTransform(-125.1,113.2,3.353,3.353);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#9CC93C","#9AC63C","#95BB3C","#8DA93B","#879C3B"],[0,0.322,0.596,0.855,1],10.1,0,-10,0).s().p("AhVAtQgZgBAPgCQAMgBAQgQQAagbAbgbQAighAnAiQATAPAMAVQgVgBgrAOIhFAXQgLACgOAAIgRgBgABaAIQAHAAAEACIgKABIgBgDg");
	this.shape_230.setTransform(-122.9,106,3.353,3.353);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgpgTQAggDAcAVQAOAKAJALQgmgngtAAg");
	this.shape_231.setTransform(-74.8,114.7,3.353,3.353);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAUATQgDg0gngtIALAKQALANAJARQAbA0gYBBQAJgugBgOg");
	this.shape_232.setTransform(32.4,83.8,3.353,3.353);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#9CC93C","#9AC63C","#95BB3C","#8DA93B","#879C3B"],[0,0.322,0.596,0.855,1],20.5,0,-20.4,0).s().p("AhBB4QgOgKgPgSIgXgdQgdgeg6AFQAhgKAZAJQAeALAhArQAQAUAhAOQAkAPAmgCQBkgEAthsQAYg0gwg6QgPgSgUgRIgSgNIADgSIAQAIQATAKAPAPQAxAvgGBFQgHBWhXAtQgpAVgoAAQgvAAgvgfg");
	this.shape_233.setTransform(-27.9,96.6,3.353,3.353);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#9CC93C","#9AC63C","#95BB3C","#8DA93B","#879C3B"],[0,0.322,0.596,0.855,1],3.5,0.2,-3.4,0).s().p("AgPgDIgRguIAGgFQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQAQAYADAIIAKAPQAJALADAIQADAMALAXQgHAEgIABIgSAEQgJgsgGgPg");
	this.shape_234.setTransform(-94.5,-101.8,3.353,3.353);

	this.instance_7 = new lib.Path_12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(45.9,-18.8,3.353,3.353,0,0,0,51.9,54.9);
	this.instance_7.alpha = 0.781;
	this.instance_7.filters = [new cjs.BlurFilter(7.91666603, 7.91666603, 1)];
	this.instance_7.cache(34,34,36,42);

	this.instance_8 = new lib.Group_5_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.2,-111.8,3.353,3.353,0,0,0,17.4,10.1);
	this.instance_8.alpha = 0.469;

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#F69E8C").s().p("AgCACQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAAAABAAQADgCACAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIgDAEIgEgBg");
	this.shape_235.setTransform(67.2,-92.7,3.353,3.353);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#F69E8C").s().p("AgKAGIgBgFQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAgBIAFgCQADgCAIgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAABABIgCACIgGADQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAABIAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAQgBACgDABIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_236.setTransform(61.6,-89.5,3.353,3.353);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#F69E8C").s().p("AABAIQgEgBAAgFQAAgHACgBIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABgBABIgBAHQADAFgEAAIAAAAg");
	this.shape_237.setTransform(30.8,-53.5,3.353,3.353);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#F69E8C").s().p("AAAAJQgHgMACgFQAEgJABACIABAFIgBAGQAAAGABAFQABADADAEQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIAAAAQgCAAgDgHg");
	this.shape_238.setTransform(41.1,-62.3,3.353,3.353);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#F69E8C").s().p("AgHABQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAFgCQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQABAAABgBIAEACQABABgCAEQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_239.setTransform(78.1,-77.4,3.353,3.353);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#F69E8C").s().p("AABADQgCgCgEAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIgDgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAFgEAGACQAHACADgCQAEgDACAEQABABgEACQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_240.setTransform(67.4,-70.5,3.353,3.353);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F69E8C").s().p("AAKAGQgFgJgFgBQgKAAgEAEIgGAFQgEABAAACIgCgEQgFgEAEAAIADABIADABQABABAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQgLAAABgDQACgGADABIAFACQAAABABAAQABAAAAAAQABABAAAAQAAAAABgBQARgDACABQAGADAFAAIADgBQACAAADADQAHAEgDABQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDgBIgGADQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAgBg");
	this.shape_241.setTransform(58.7,-74.9,3.353,3.353);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F69E8C").s().p("AADAOQgDgBgDgDQgCgCABgOQABgFAGgCQAEgBgHAIQgCACAAADIACAEIAFAJQAAABAAAAQAAAAABABQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_242.setTransform(36.3,-43.5,3.353,3.353);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#F69E8C").s().p("AgHAIQAAgEgBgCIgEgDQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIAGgCQABAAAAAAQABAAABAAQAAABAAAAQAAAAAAABIACAFQACADACAAQAFAAADgBIAFgDQAAABABABQAAAAAAAAQAAABAAAAQAAAAAAABIgCACIgFABIgIABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgDABIgCgBg");
	this.shape_243.setTransform(54,-37.8,3.353,3.353);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#F69E8C").s().p("AgFAHQAAgJgEgDQgHgFAFABIAFAAQABgBAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBADQAAADABACQACAFAEgBQAEAAAFgDQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQgGAEgFABQgEACAAABQgDgBAAgDg");
	this.shape_244.setTransform(49.7,-46.8,3.353,3.353);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F69E8C").s().p("AgMAQQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQACACgHAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAgBIgBgHQgCgGgFgCQgBAAAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAEgCQABAAAAgBQABAAABAAQAAAAABgBQAAAAABABIAAACIAFACIACAFQABACAHACQACAAADgCIACgDIAKgKQAEgFAAgEQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIADAAIACACQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABgBIADAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIgIADQgDADgEACQgGACgFAHQgEAGgEACQgFADABADQAAADgFABIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_245.setTransform(77.7,-65.6,3.353,3.353);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#F69E8C").s().p("AgKANQgGgBABgEQACgEgCgBQgDgDABgCIABAAIACAAQAAgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQgBAAgBABQAAABAAAAQAAABAAAAQABAAABABQADACAFgEIAJgIQAHgHAEACQgNAJgEAEIgGAIQgDADgCAAIgBAAg");
	this.shape_246.setTransform(57.4,-64.5,3.353,3.353);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F69E8C").s().p("AgGAHIgDgFQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIgCgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQADAJACgDQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQACAEAFgCIAHgDQABAAABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQgFAHgFABIgGAAIgEgBg");
	this.shape_247.setTransform(61.6,-54.8,3.353,3.353);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#F69E8C").s().p("AgOAPQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACABIAGAAIAGgDQADgBAIgIQAHgGgDgGQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQAEgBgEAGQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABABQACADgDAFQgDAGgLAGQgCABgDgBIgGACIgBAAIgDgBg");
	this.shape_248.setTransform(85.7,-59.6,3.353,3.353);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#F69E8C").s().p("AgHAHQgBgBgBAAQgBAAAAgBQgBAAAAAAQAAgBABAAQAHADAHgCIABgFIADgEQABgBAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAgBABIgDACIgBADIABABQAAACgGACIgCAAIgGgBg");
	this.shape_249.setTransform(84.4,-42.9,3.353,3.353);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#F69E8C").s().p("AgTALQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQADgDgBgEQgFgGAFABQADAAADAEQACADAIgBQALgCADgHIAEgGIgBAGIACAGQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgBAAAAAAQgBABgBAAQAAAAAAABQgBAAAAAAIgEADQgPgBgFADIgJAGQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_250.setTransform(69.6,-44.2,3.353,3.353);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F69E8C").s().p("AgJAJIgCgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACABQACAAAGgEQAIgFACgFQABAAAAABQABAAAAABQAAAAAAABQgBAAAAABQgHAJgDACQgEgBgCACIgDABIgBAAg");
	this.shape_251.setTransform(78,-25.2,3.353,3.353);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#F69E8C").s().p("AgLAJIAAgMIAEADQABAFAHAAQAGAAADgMIABgBIABADQACACgGAGQgGAFgCABQgBABgGgBIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_252.setTransform(69,-28.5,3.353,3.353);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F69E8C").s().p("AgDAGQgGAAAHgEQADgCAEgFQABgBABAGQAAABgEADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgDAAg");
	this.shape_253.setTransform(31.4,23,3.353,3.353);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#F69E8C").s().p("AgBAEQgBgCABgEQABgGAAABIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAAAQADAEgBABIgCADIgBgEg");
	this.shape_254.setTransform(21.1,13.9,3.353,3.353);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F69E8C").s().p("AgFAFIgBgBIAMgIQAAAAABAAQAAAAAAABQAAAAgBABQAAAAgBABQgEAEgCABIgEABIAAAAg");
	this.shape_255.setTransform(73.2,4.1,3.353,3.353);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F69E8C").s().p("AgHAFQAHgBAGgHQACgCgBADIgDAEQgDADgEAAIgEAAg");
	this.shape_256.setTransform(86,-0.9,3.353,3.353);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#F69E8C").s().p("AgGAMQgEgFAAgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIACACQABACADACIgCgEQgFgHABgDIACgEIAAAEIAGALIACACIADgBQADgCADAAQABAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQgEgBgCADIgFAFIgDACQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAg");
	this.shape_257.setTransform(47.6,-18,3.353,3.353);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F69E8C").s().p("AADADIgFADQgDAAgCgHQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIACgBIAFAEIAEAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABACIgEADQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_258.setTransform(58.8,-22.8,3.353,3.353);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F69E8C").s().p("AgDAKQgBgKgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIACgCIAFgCIAEgCQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgGAHIAAAFIAAAFIgBACIgBAAIgBgBg");
	this.shape_259.setTransform(36.8,-6.8,3.353,3.353);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#F69E8C").s().p("AgGAJIgBgGQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCAAQgBgBAHgFIABgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQACAAgEAFQAAAGADAFQABADAMgFQgGAGgGABIgBAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_260.setTransform(38.3,10.2,3.353,3.353);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F69E8C").s().p("AgFAFQgGgBAAgCQAAgBABgBQAAAAAAAAQABgBAAAAQAAAAABAAIAGACIAEABQABAAABgBQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgDABgEgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAEAAIACADIACgCIACABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgGAGgCAAIgIgBg");
	this.shape_261.setTransform(42.9,0.5,3.353,3.353);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#F69E8C").s().p("AgMAGQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgIIABgBQABADAIACQADAAAMgDQABAAAAAAQABAAAAABQgBAAAAAAQgBABgBABIgHACIgJAAQAAAAgBAAQgBABAAAAQgBAAAAAAQAAAAgBABIAAACIgCAAIgBAAg");
	this.shape_262.setTransform(49.8,7,3.353,3.353);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#F69E8C").s().p("AgLAEIgBgCIAEABQAFABADgBIAIgGQACgCABAAQABgBAAAAQABAAAAAAQAAAAAAABQgEAGgDACQgFAEgEAAg");
	this.shape_263.setTransform(61.7,5.1,3.353,3.353);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#F69E8C").s().p("AgSAKIgDgCIgEABQgEABACgCQABgBABgBQAAgBABAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIADABIAHAAQAIgCAAgDIABgEIADgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAEgCQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIABAHQACADAEgBQAIgCADgHQAAgBAAgBQABAAAAgBQABAAAAAAQAAAAABAAIABABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAABQgEAGgFACQgFACgEAAIgFAAIgFADQgDACgIABIgHgBg");
	this.shape_264.setTransform(58.6,-10,3.353,3.353);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#F69E8C").s().p("AABAMQAAgGgBgBIgEgFQgBgBAAgHQgBgHABgBQABgBAAAAQAAgBABgBQAAAAAAAAQAAAAABAAIgBAHIACgCQABgDACAAIgCAEQgBAEABADIAAAGQABAEACABQACABAAAFIgBACIAAADIADAEQgGgEAAgEg");
	this.shape_265.setTransform(1.3,-1.2,3.353,3.353);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F69E8C").s().p("AAAAQQAAABAAAAQAAAAgBgBQAAAAAAAAQgBAAgBgBQgCgBABgFQAAgFgEgCQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACABIABgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIACAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABgBAAgBQABgCgDgGIgCgFQABgCACAGQAEAGAAACQAAACgDAGQgBADAGADQgDgBgBgCQgCgBgDACQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIABAEQAAAEACAEQAEAHACgFQABAAAAABQAAAAAAAAQAAABgBAAQgBAAgBABIgBAAQgDAAgDgHg");
	this.shape_266.setTransform(15.4,34.9,3.353,3.353);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#F69E8C").s().p("AACALIgEgGQgEgFAAgDQgBgCACgFIABgFIgDgDIAEgCIABACIACgCIAAACIgCAFQgDAEADAHQACAEAAAAIADAFIAEAKIABAEQgDgHgDgDg");
	this.shape_267.setTransform(10.9,24.9,3.353,3.353);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#F69E8C").s().p("AADAKIgDgBIAAgDIgEgHQgCgIAHgCIgBACQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAAAIACAFIABAFIACADIABAEIgCgCg");
	this.shape_268.setTransform(11.6,13.8,3.353,3.353);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#F69E8C").s().p("AgBAXIgBgKQACgMgDgDQgDgEgEgLQgDgMAGAAIgBAEQgBAGACADIAHAQQABABgBAFQgBAFAEABQABAAABABQAAAAABABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBIAAAGIACgCQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAIAEAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQgDACgDgDQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAACQABADgEAAQgBgBgBgHg");
	this.shape_269.setTransform(-2.1,-24,3.353,3.353);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#F69E8C").s().p("AgDAwQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAIADgDIAAgEIACgFQAFgBAAgDQAFgRgCgBIgDgCIgCABQgBAAAAAAQAAAAAAAAQAAgBAAgBQAAAAAAgCIABgIQAEgPgCgEIgEgKQgBgCACgFQABgGACgDIgCAHQgBAIABACIADADIABABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIgCAVQgCAGACAAQAGADgBAHIgHATQgCAEAAADQgCADABAHIABAGQgCgBgBgDg");
	this.shape_270.setTransform(12.8,-13.3,3.353,3.353);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F69E8C").s().p("AAEAaIgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgCQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIACgFQACgIgBgEIgBgDIgDgFQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBIAAgFQACgDgDgCIAAgKIADgCIAAAJQABAHADACQACABAAAEIABARIABACQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAAEIAAgBQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAFAGQABABABAAQAAABABAAQAAABAAAAQAAAAAAAAg");
	this.shape_271.setTransform(17.1,-30.6,3.353,3.353);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#F69E8C").s().p("AAFANIgEgCQgDgBgBgCQgBgCABgEQAAgCgFgHQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIAHABQAAABADgFIABgDQAAAEgBACIgCAHQgCAEAGAHIAFAFIAGACQABABACADQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAADIgCgIg");
	this.shape_272.setTransform(13.5,-52.9,3.353,3.353);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F69E8C").s().p("AALA6IgDgFIgBgEQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAIgDgEQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAABABAAQAAACAAABQAAABAAAAQABABgBAAQAAAAAAAAIgCgFQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIAAgBIgCABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQACgEAAgEQABgDgCgFIgCgJQABgHgCgFIABgMIABgYIgCgEQgBgCAAgGIACgJQABgCgBAHQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBAIQAAAKADADIACADIABAFIACAHQAAAAAAABQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgCgCIgCgCQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAAACIAAADQgEAIACAEQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAIgBAEQAAADADAFIAAgBIACgEIADgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgCADIAAAEIAAADIgBAEQAAAEADABQABABACADIAEAHQADAEAAACQAAADACACIABADIgBAAIgBAAg");
	this.shape_273.setTransform(-2.6,-47.9,3.353,3.353);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F69E8C").s().p("AgDAFIAAgDIABgBIAAgEIACgDQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBABAAAAIgBAFIgCACIgBgCg");
	this.shape_274.setTransform(32,-84.2,3.353,3.353);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#F69E8C").s().p("AAAABIgCgDQAAAAAAAAQAAgBABAAQAAAAAAABQAAAAABAAIABACQABABAAAAQABABAAAAQAAABgBAAQAAAAgBABIAAAAIgBgDg");
	this.shape_275.setTransform(12,-69.8,3.353,3.353);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F69E8C").s().p("AAFAWIgCgGQgBgGgBgCIgFgGQgBgCABgHIABgIQgCgDAAgDQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABABQADAFAAACQgCAGAAAFQAAADACACIACACIABAGIACAKg");
	this.shape_276.setTransform(12.7,-73.2,3.353,3.353);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F69E8C").s().p("AgEAnIgFgFQAAgBAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABABAAIACAFQgFgEAAgDQACgDgBgCIgCgJQgDgCACgEQAGgJgBgFQAAgDAGgKQAEgFABgHQADgRAGgEQAJgGgFAFQgEAEAAACQAAAAAAAAQAAAAABAAQAAAAABgBQABAAABgBQAEgCABABIgHAHQgGAEgBADQgEAOAAACQgGAHgCAHIgEAPIAAAIIABADIACABIADgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABQACADgBADIABAFQABAEgBACQgCgHgBgCg");
	this.shape_277.setTransform(1.2,-82.1,3.353,3.353);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F69E8C").s().p("AgGAHQgCgHAFgDQAHgGAEABIgBAEQgBgCgEAEQgGAEABADIgBAEIgBABIgBgDg");
	this.shape_278.setTransform(32,-94.6,3.353,3.353);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F69E8C").s().p("AgIADQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQACgCAHgBIAHAAQABACgCADQgBADgDgFQgBgBgDABIgGAEIgBAAIgBgBg");
	this.shape_279.setTransform(52.9,-101.9,3.353,3.353);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F69E8C").s().p("AgEAPIgCgMIADgJIAEgFQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgDAFgEIgBABQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABIABADIACgBQABAAAAAAQAAgBABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgFADQgEADAAAGIABARIgCADg");
	this.shape_280.setTransform(18.5,-94.9,3.353,3.353);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F69E8C").s().p("AgZAMIAEgDIABgFIACgEIAFgCIABgCIAAgDQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBABgBAAIgDADQABgEAGgEQADgDADACIAIgBIAPgCQAFAAABgDIAFABQABABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQgDACgIAAQgQACgDABQgEACABACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIAFACQAHABgLAAQgCAAgDAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAACgFADQgDACgIAKQABgEADgEg");
	this.shape_281.setTransform(35.4,-108.8,3.353,3.353);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F69E8C").s().p("AgHAIIgIAAQgCAAAGgEQACgBAJgHQAHgFAAgBQAAgBAJgCQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAABQAAAAgBABQAAAAgBABQAAAAAAAAIgFgBIgGAFIgDADIgCAEQAAABAAABQAAAAABABQAAAAABABQAAAAAAAAQAFAAgFACIgKADQAEgGgBAAg");
	this.shape_282.setTransform(14.5,-104.2,3.353,3.353);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#B1E238").s().p("AgMAEQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAJgCQAFAAADgCIACgCIAGgBQAAAAABAAQAAAAAAAAQAAABgBABQAAAAgBABIgJAFIgHABIgIgBg");
	this.shape_283.setTransform(73.2,-7.3,3.353,3.353);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#B1E238").s().p("AgDAIIgBgIQAAgFABgBQADgDABAAQAEgBAAAFIAAAFQAAAGgCACQgDACgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_284.setTransform(19.8,-3.2,3.353,3.353);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#B1E238").s().p("AgEAJQgCgCABgEIACgIQABgEADAAQAHABgBAGQgCAHgFADIgDACIgBgBg");
	this.shape_285.setTransform(29.6,-8.4,3.353,3.353);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#B1E238").s().p("AgEAKQgCgBAAgHQAAgHADgCQACgCADAAQAEAAABACQAAAGgEAEQgEAHgCAAIgBAAg");
	this.shape_286.setTransform(32.9,4.5,3.353,3.353);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#B1E238").s().p("AgFAAQAAgIAHgBIACACQACADAAADQgDALgFgBQgDAAAAgJg");
	this.shape_287.setTransform(24.5,11.5,3.353,3.353);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#B1E238").s().p("AgFAJQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIACgGIAEgFQACgDAEABIACADQACADgCACQgDAEgEADQgDACgCAAIAAAAg");
	this.shape_288.setTransform(45.9,30.6,3.353,3.353);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#B1E238").s().p("AgDAKQgEAAABgJQABgIAFgCQAJgBgDAHIgEAIQgCAFgCAAIgBAAg");
	this.shape_289.setTransform(47.7,17.9,3.353,3.353);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#B1E238").s().p("AgFALQgCgBAAgGQAAgEACgDQAFgIADABIADABQADACgBAEQgIAOgEAAIgBAAg");
	this.shape_290.setTransform(37.8,23,3.353,3.353);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#B1E238").s().p("AgCAHQgDgBACgGQABgFAEgBIABAAIABABQACADgCADQgDAGgCAAIgBAAg");
	this.shape_291.setTransform(41,8.3,3.353,3.353);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#B1E238").s().p("AgHAIQgBgBABgEIAEgGQAEgFAFAAQAFAAgDAGQgBAGgFADQgDACgDAAIgDgBg");
	this.shape_292.setTransform(51.6,1.3,3.353,3.353);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#B1E238").s().p("AgEAJQgDgBABgFQADgOAGACQAGACgCAGIgHAKIgDABIgBgBg");
	this.shape_293.setTransform(42.5,-5.7,3.353,3.353);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#B1E238").s().p("AgGgBQAAgEACgDQADgCACAAQAGAAAAAGQgDALgCABQgCADgCAAQgDAAgBgMg");
	this.shape_294.setTransform(55,-11.7,3.353,3.353);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#B1E238").s().p("AgCAKQgCAAAAgIQgBgHAEgCQAFgEABADQABAHgCAFQgDAGgCAAIgBAAg");
	this.shape_295.setTransform(37.3,-14.7,3.353,3.353);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#B1E238").s().p("AgDAKQgCgBACgJQACgJADAAQAGADgEAIQgEAIgCAAIgBAAg");
	this.shape_296.setTransform(49.5,-21.1,3.353,3.353);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#B1E238").s().p("AgGAGQgBgGADgFQADgFAFABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAABQACADgDADQgDAGgDACIgCABQgCAAgBgEg");
	this.shape_297.setTransform(5.9,-1.8,3.353,3.353);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#B1E238").s().p("AgFAJQgDgCACgHQACgFAEgEQAFgFACAKQABAEgCADIgFAFIgDAEIgDgDg");
	this.shape_298.setTransform(24.5,-19.6,3.353,3.353);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#B1E238").s().p("AgDACQgBgCAEgEIAEgEQABAEgEANQgDgBgBgGg");
	this.shape_299.setTransform(12.1,-17.7,3.353,3.353);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#B1E238").s().p("AgFADQABgGAEgDQACgDADABIABAEQABAEgDADQgDAGgDAAIgBAAQgEAAACgGg");
	this.shape_300.setTransform(15.4,19.1,3.353,3.353);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#B1E238").s().p("AgEADQgCgEAEgFQADgEABABQAHAKgGAKQgEAAgDgIg");
	this.shape_301.setTransform(0.6,16.5,3.353,3.353);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#B1E238").s().p("AgCAIQgEgBABgFQAEgPAHAIIgBAFIgCAGQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_302.setTransform(5.5,-19.4,3.353,3.353);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#B1E238").s().p("AgDAJQgEgDADgFQAGgQADALQABACAAADQgBAFgDACIgCABIgDAAg");
	this.shape_303.setTransform(7.7,-29.6,3.353,3.353);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#B1E238").s().p("AgDAJQgCgBABgJQAAgKAFAEQAGAHgCAEQgDAFgDAAIgCAAg");
	this.shape_304.setTransform(10,-40.4,3.353,3.353);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#B1E238").s().p("AgDAHQgFgMAEgCQAGgEACADQAFAGgEAFIgFAGIgBABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_305.setTransform(1.8,-37.6,3.353,3.353);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#B1E238").s().p("AgGAGQgCgFABgEQABgFADgBIAFAAQAIAAgCAIQgGALgDAAIAAAAQgDAAgCgEg");
	this.shape_306.setTransform(28.5,-39.5,3.353,3.353);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#B1E238").s().p("AgEAIQgCgCACgFQACgFADgDQAFgCAAAFQAAAIgFADIgDACIgCgBg");
	this.shape_307.setTransform(21,-32.4,3.353,3.353);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#B1E238").s().p("AgCAKQgEgBABgEIACgJQAAgFADAAQAFgCAAAEIABAHQgBAFgCADQgCADgCAAIgBgBg");
	this.shape_308.setTransform(17.9,-41.3,3.353,3.353);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#B1E238").s().p("AgBAIQgEgCABgEQABgIAEgCQAHAMgDAEIgDABIgDgBg");
	this.shape_309.setTransform(10.2,-51.4,3.353,3.353);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#B1E238").s().p("AgDAKQgDgDACgJQACgKAGACQAEAKgEAFIgEAGIAAAAIgDgBg");
	this.shape_310.setTransform(13.9,-44.2,3.353,3.353);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#B1E238").s().p("AgEAFQgCgGACgFQADgHADADQAGAQgDADQgDACgCAAQgDAAgBgGg");
	this.shape_311.setTransform(4.2,-50.3,3.353,3.353);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#B1E238").s().p("AgFAJQgCgFAEgHQADgHAEgBQABgBABAHQABAGgBAEQgDAFgDACIgBAAQgCAAgCgDg");
	this.shape_312.setTransform(-1.8,-64.5,3.353,3.353);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#B1E238").s().p("AgFABQgBgDAGgFIAFgEQACAFgBAGQAAAIgDACIgDACQgCAAgDgLg");
	this.shape_313.setTransform(4.6,-62.2,3.353,3.353);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#B1E238").s().p("AgEAIQgCgEAGgHIAFgHIAAATQAAAAAAAAQAAABgBAAQgBAAAAAAQgBABgBAAIgBAAQgDAAgBgDg");
	this.shape_314.setTransform(-8.2,-53.8,3.353,3.353);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#B1E238").s().p("AgEAIQgCgDAGgHIAFgIIgCAUIgDABQgBAAgDgDg");
	this.shape_315.setTransform(-8.1,-71.8,3.353,3.353);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#B1E238").s().p("AgHAEQABgEAGgGIAHgFQACAFgEAMQgBAEgFACQgGgBAAgHg");
	this.shape_316.setTransform(-5,-83.4,3.353,3.353);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#B1E238").s().p("AgKAEQgCgEADgCQADgDAGgBQAHgCAEACQAFACgMAFQgFAGgIABIgBgEg");
	this.shape_317.setTransform(13,-106.3,3.353,3.353);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#B1E238").s().p("AgLAFIgBgCQgBgDAEgCQAGgFAQACQgEAGgIAEQgDACgGAAg");
	this.shape_318.setTransform(19,-111,3.353,3.353);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#B1E238").s().p("AgIAFQgCgDAHgEQAGgGAHADQgJAJgCACIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_319.setTransform(8.6,-99.4,3.353,3.353);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#B1E238").s().p("AgFAJQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIADgHQACgDAEgDIAGgCQAAAJgEAFQgDAEgBABIAAAAIgFgBg");
	this.shape_320.setTransform(2,-80.3,3.353,3.353);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#B1E238").s().p("AgDgCQAEgIAFADQAGAAgHAIQgFAHgEAAQgHAAAIgKg");
	this.shape_321.setTransform(10.3,-90.4,3.353,3.353);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#B1E238").s().p("AgDAJQgEgBAAgEQAAgEAEgEQAFgGAGAEQgHAPgEAAIAAAAg");
	this.shape_322.setTransform(14.7,-94.6,3.353,3.353);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#B1E238").s().p("AgJABQABgCAIgDIAHgCQAKABgWALIgBABQgEAAABgGg");
	this.shape_323.setTransform(17.3,-103.6,3.353,3.353);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#B1E238").s().p("AgJAHQgCgBADgFQAEgEAEgCQAGgEAFAFQgDAEgGADQgHAFgDAAIgBgBg");
	this.shape_324.setTransform(24.7,-109.1,3.353,3.353);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#B1E238").s().p("AgHACQAAgFAFgCQADgCAEACQAEACgBADQgCADgJAEIgCAAQgDAAABgFg");
	this.shape_325.setTransform(37.5,-111.9,3.353,3.353);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#B1E238").s().p("AgIAEQgBgFAEgCQALgHADAFIgLAMIgCABQgDAAgBgEg");
	this.shape_326.setTransform(23.5,-103.6,3.353,3.353);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#B1E238").s().p("AgFALQgCAAACgIQABgGADgDQAHgIAAAGQADAHgFAGQgEAHgDAAIgCgBg");
	this.shape_327.setTransform(45.1,-32.1,3.353,3.353);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#B1E238").s().p("AgGAIQgCgCADgGQAEgIAFgBQAHAGgGAGQgGAHgDAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_328.setTransform(40.7,-43.6,3.353,3.353);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#B1E238").s().p("AgBALQgDAAgBgFQgCgEABgFQAAgHAGAAIAEABQAEADgBAFQgDAMgEAAIgBAAg");
	this.shape_329.setTransform(59.7,-28.3,3.353,3.353);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#B1E238").s().p("AgGAKQgBgCABgFQABgFACgEQAFgIAEAIQADAGgFAEQgGAHgDAAIgBgBg");
	this.shape_330.setTransform(57.5,-42.4,3.353,3.353);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#B1E238").s().p("AgBAJQgDAAAAgEQgBgFADgGIACgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAEABgCAHQgCAJgEAAIAAAAg");
	this.shape_331.setTransform(52.2,-49.8,3.353,3.353);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#B1E238").s().p("AgEAJQgCgBAAgFQAAgDADgDQADgEADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAKgEADQgDACgCAAIgDAAg");
	this.shape_332.setTransform(8.4,-73,3.353,3.353);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#B1E238").s().p("AgGAHQgBgDACgEQAGgNAFAHIABADQABADgEACIgIAHIgCgCg");
	this.shape_333.setTransform(35.9,-53.2,3.353,3.353);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#B1E238").s().p("AgFAHIAAgGIACgHQADgHAGAEQACAPgIAEIgCABQgCAAgBgEg");
	this.shape_334.setTransform(24.4,-51.7,3.353,3.353);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#B1E238").s().p("AgFAFQAAgKAEgDQADgCACAEQAEAIgFAEQgEADgCAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBg");
	this.shape_335.setTransform(12.2,-62.9,3.353,3.353);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#B1E238").s().p("AgEAKQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgBAAgBQABgJAFgDQAHgEgBAGQgCAKgEADQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgBAAg");
	this.shape_336.setTransform(14.5,-84.9,3.353,3.353);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#B1E238").s().p("AgGAIQgDgDADgKQAAgCAEgCQADgBADADQAIAHgIAFIgGAFIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_337.setTransform(17.8,-78.8,3.353,3.353);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#B1E238").s().p("AgDALQgCgBAAgGQgBgFACgEQAEgJAFAHIABADQABADgBADQgEAJgEAAIgBAAg");
	this.shape_338.setTransform(25.7,-69.7,3.353,3.353);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#B1E238").s().p("AgHAIQgCgCACgFQABgEAEgCQAIgFACAFQADADgEAEQgEAEgDACIgEABIgDgBg");
	this.shape_339.setTransform(23.7,-97,3.353,3.353);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#B1E238").s().p("AgFAAIACgHQABgDADABQAEAAABACQABAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQgGANgCAAQgFAAACgKg");
	this.shape_340.setTransform(32.6,-63.2,3.353,3.353);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#B1E238").s().p("AgFAIQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAEgMAEABQAIABgEAGIgEADIgDAFIgDAAIgBAAg");
	this.shape_341.setTransform(34.1,-81.9,3.353,3.353);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#B1E238").s().p("AgEAKQgFAAAFgOQACgIAFAEQAGADgCAFQgHAKgDAAIgBAAg");
	this.shape_342.setTransform(40.4,-74.9,3.353,3.353);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#B1E238").s().p("AgDALQgFgBACgNQABgFAEgCQADgBADACQAEADgDAHQgGAKgDAAIAAAAg");
	this.shape_343.setTransform(46,-62.8,3.353,3.353);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#B1E238").s().p("AgIAFQAFgNADgBQADgBAEAEQAEACgGAFIgJAIIgBABQgEAAABgFg");
	this.shape_344.setTransform(57,-69.1,3.353,3.353);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#B1E238").s().p("AgHADQABgFAGgEQAGgEACAGQAAAHgGADIgGADQgEAAABgGg");
	this.shape_345.setTransform(33.7,-93.1,3.353,3.353);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#B1E238").s().p("AgHAHQgCgBADgFQAGgKAFADQADACABACIgBADQgDAGgFABIgEAAIgDgBg");
	this.shape_346.setTransform(35.6,-104.8,3.353,3.353);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#B1E238").s().p("AgHABQAFgLAHAEQAEABAAADIgBADQgEAHgFAAIgBAAQgIAAADgHg");
	this.shape_347.setTransform(45.3,-105.4,3.353,3.353);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#B1E238").s().p("AgGAGQgCgEADgCQADgFAFgCQAGgBgBADQgEAKgFADIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_348.setTransform(42.1,-91.9,3.353,3.353);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#B1E238").s().p("AgGAIQgEgEAIgJQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAABgBQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQAFAGgDACQgJAHgEAAIgBgBg");
	this.shape_349.setTransform(53.9,-84.2,3.353,3.353);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#B1E238").s().p("AgFAIQgCgBAAgEQADgKAEgBQAEgBADACQAAAAABABQAAAAAAABQAAABAAAAQgBABAAABQgIALgBAAIgBAAIgCgBg");
	this.shape_350.setTransform(65.9,-85.7,3.353,3.353);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#B1E238").s().p("AgGAIQgCgCACgFQABgEADgDQACgDAEABQAEAAAAAEQAAAGgGAEQgEADgCAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_351.setTransform(53.1,-98.2,3.353,3.353);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#B1E238").s().p("AgDAIQgDgCAAgFQABgEADgCQADgDAEABQAEABgDAGQgGAIgCAAIgBAAg");
	this.shape_352.setTransform(64.7,-99.2,3.353,3.353);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#B1E238").s().p("AgGAGQgDgDAEgDQAFgIAEABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgFAIgDAAQgEAAgCgCg");
	this.shape_353.setTransform(77.5,-100.2,3.353,3.353);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#B1E238").s().p("AgHAJQgCgDAEgJQAEgIAFACIAEADQABABgCAEIgIAKIgEABIgCgBg");
	this.shape_354.setTransform(64.2,-14.1,3.353,3.353);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#B1E238").s().p("AgGAEQAAgFABgDQACgHAFACIAEACQABABgBAFQgIALgCAAQgBAAgBgGg");
	this.shape_355.setTransform(63.9,-59.4,3.353,3.353);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#B1E238").s().p("AgHAIIAAgHQABgEAFgEQAEgEAEADQAGAEgRAOQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_356.setTransform(83.3,-46.6,3.353,3.353);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#B1E238").s().p("AgFAGQgCgGABgCQABgJAGABQAGABAAAIQgGAMgCAAIAAAAQgCAAgCgFg");
	this.shape_357.setTransform(69.6,-33.2,3.353,3.353);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#B1E238").s().p("AgFAKQgCgBABgHQAAgFACgDQACgEAGABQAGACgDAGQgIALgDAAIgBAAg");
	this.shape_358.setTransform(77.9,-29,3.353,3.353);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#B1E238").s().p("AgGAGIABgHQADgKAFACIAEACIAAADQAAACgEAFQgDAHgCAAIgBAAQgDAAAAgEg");
	this.shape_359.setTransform(69.7,-48.3,3.353,3.353);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#B1E238").s().p("AgGAFIACgKQABgFADABQACAAAEAFQAFAFgLAIIAAABIgCAAQgEAAAAgFg");
	this.shape_360.setTransform(84.8,-90.5,3.353,3.353);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#B1E238").s().p("AgFAKQgCgBABgHQAAgGACgCQACgDAFAAQAGAAgCAHQgIAMgDAAIgBAAg");
	this.shape_361.setTransform(71.7,-79.4,3.353,3.353);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#B1E238").s().p("AgEAKQgDgBABgFIACgGQADgJAFACQAGABgEAHQgGAMgDAAIgBgBg");
	this.shape_362.setTransform(77.3,-69.4,3.353,3.353);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#B1E238").s().p("AgDALQgFgBACgLQABgJAGABQAHABgBADQgGAQgEAAIAAAAg");
	this.shape_363.setTransform(98.1,-57.4,3.353,3.353);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#B1E238").s().p("AgIACQABgEADgEQAEgFAEADQAIAEgGAEQgGAJgEABIgBAAQgDAAAAgIg");
	this.shape_364.setTransform(84.6,-60.7,3.353,3.353);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#B1E238").s().p("AgGAHQgCgDABgDQACgDAFgEQAGgFACAIQgHAMgDAAIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_365.setTransform(97.7,-70.3,3.353,3.353);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#B1E238").s().p("AAAAKQgEgBgBgGQgBgEACgEQADgEADAAQAEgBABAHQgCANgFAAIAAAAg");
	this.shape_366.setTransform(91.6,-81.7,3.353,3.353);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#B1E238").s().p("AgDAEIgDgGIAFgGQAEgEACAIQAFAOgHAAQgDAAgDgGg");
	this.shape_367.setTransform(102.3,-86.3,3.353,3.353);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#B1E238").s().p("AgBAJQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAgGIAAgFIAEgDQAHgCgCAMQgBAEgCACIgDABIAAAAg");
	this.shape_368.setTransform(124.4,-80.7,3.353,3.353);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#B1E238").s().p("AgEAGIgBgHQgBgFAFgBQAEgCADAJQABAFgHAEIAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_369.setTransform(136.9,-65.8,3.353,3.353);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#B1E238").s().p("AgDAJQgDgBABgFQABgGAEgEQAEgEACAHIgGAMIgCABIgBAAg");
	this.shape_370.setTransform(128.4,-58.4,3.353,3.353);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#B1E238").s().p("AgEAEQgBgJACgEQADgFAEAKQADAGgGAJIgBABQgCAAgCgIg");
	this.shape_371.setTransform(125.2,-66.1,3.353,3.353);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#B1E238").s().p("AgDAFQgCgEACgCQACgDACgCQABgBABAAQAAAAABAAQAAAAAAAAQABABAAABQACANgGAAIgBAAQgCAAgBgDg");
	this.shape_372.setTransform(118,-63.1,3.353,3.353);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#B1E238").s().p("AgEAAQAEgJADAAQAEgBgCAKQgBAIgGACIgBAAQgEAAADgKg");
	this.shape_373.setTransform(107.8,-74.8,3.353,3.353);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#B1E238").s().p("AgCAFQgCgEAAgDQABgGAEAAQAEAAAAAHQAAALgFAAQgBgBgBgEg");
	this.shape_374.setTransform(107.8,-60.1,3.353,3.353);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#B1E238").s().p("AgHAGQAAgDABgDQADgKAGABQAEABABACIgBAFQgHAKgEABIgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_375.setTransform(55.7,28.9,3.353,3.353);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#B1E238").s().p("AgFAMQgBgBABgHIAAgIQABgEAEgCQAEgDACAGIAAAFQAAAEgCADQgFAHgDAAIgBAAg");
	this.shape_376.setTransform(58.3,15.8,3.353,3.353);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#B1E238").s().p("AgGAHIAAgIQACgGABgBQADgCAEABQAFACgCAFQgGAKgBABIgEABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_377.setTransform(61.4,1.8,3.353,3.353);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#B1E238").s().p("AgFALIgBgGQAAgPAGAAQAFABABACQACABgCAEQgGALgCABIgCABIgBAAg");
	this.shape_378.setTransform(72.8,-11,3.353,3.353);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#B1E238").s().p("AgGgDQACgHAIABQAFABgBACIgCAFQgBADgJAIIgBAAQgEAAADgNg");
	this.shape_379.setTransform(72,2.6,3.353,3.353);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#B1E238").s().p("AgGAGQgDgCAEgDQAKgKADAGQgEAHgEACIgDAAIgDAAg");
	this.shape_380.setTransform(68.4,30.4,3.353,3.353);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#B1E238").s().p("AgFAKQgEgBABgEQAAgEAFgDQAEgFAEgCQAFgBgBAFQgJAPgEAAIgBAAg");
	this.shape_381.setTransform(65.6,24.8,3.353,3.353);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#B1E238").s().p("AgDAKQgCAAAAgGQgBgFADgDQAHgKABAHIABAAQAAAIgCAEQgDAGgCAAIgCgBg");
	this.shape_382.setTransform(68.2,13.9,3.353,3.353);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#B1E238").s().p("AgEAJQgDgCABgFQABgEADgCQACgDAEgBQAEgBgBAEQAAADgEAFQgDAGgDAAIgBAAg");
	this.shape_383.setTransform(76.5,20.2,3.353,3.353);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#B1E238").s().p("AgJAEQgBgEAJgDIAHgDQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAAFgHADQgGADgDAAQgBAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_384.setTransform(73.9,32.9,3.353,3.353);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#B1E238").s().p("AgHAGQgCgDACgDQABgEAEgCQAEgDAGADQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAQgBACgEAEIgHAEIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_385.setTransform(81,24.2,3.353,3.353);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B1E238").s().p("AgGAKQgCgCABgGQAAgFADgCQAEgEAEAAQADAAABADQABADgDADQgHAKgEAAIgBAAg");
	this.shape_386.setTransform(93.4,-40.1,3.353,3.353);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B1E238").s().p("AgGAFQgBgHADgFQACgEADABQAEABABADQADAEgKALIgBABIgBABQgCAAgBgGg");
	this.shape_387.setTransform(99.7,-30.2,3.353,3.353);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#B1E238").s().p("AgHAFQABgGADgGQADgEAEADQAEACAAADQABADgMAJIgDABQgCAAABgFg");
	this.shape_388.setTransform(86.2,-24.1,3.353,3.353);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#B1E238").s().p("AgIAEIAEgKQACgDADAAQAEAAADAFQAEAFgRAJIgBAAQgDAAABgGg");
	this.shape_389.setTransform(84.7,-11.1,3.353,3.353);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#B1E238").s().p("AgFAIIAAgJQAAgFACgCQADgDADABQAEABAAADQgCAIgEAEQgDAGgCAAQgBAAAAgBQAAAAAAAAQAAgBAAgBQgBAAABgBg");
	this.shape_390.setTransform(79.8,9,3.353,3.353);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#B1E238").s().p("AgIAFQABgFAEgDIAFgFQAEgBADAFQAFAHgTAGIgBAAIAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBABgBg");
	this.shape_391.setTransform(84.9,-3.3,3.353,3.353);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#B1E238").s().p("AgEgBQAEgFAEgBQAGgCgCAFQgEANgFAAQgKgBAHgJg");
	this.shape_392.setTransform(88.1,13,3.353,3.353);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#B1E238").s().p("AgDAGQgCgBACgEQACgDABgCQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIABAEQAAADgDACIgEABIgBAAg");
	this.shape_393.setTransform(95.5,16.6,3.353,3.353);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#B1E238").s().p("AgHAIQgDgBAHgIQAGgJAGACQAAAFgDAEQgGAIgEAAIgDgBg");
	this.shape_394.setTransform(90.6,26.3,3.353,3.353);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#B1E238").s().p("AgGAHQgDgCADgDQADgDADgBIAIgEQADAEgHAFQgFAEgEAAIgBAAg");
	this.shape_395.setTransform(109.1,21.2,3.353,3.353);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#B1E238").s().p("AgFAKQgDgBAAgFQAAgEAEgEQAGgIAFAEQADACgCAGQgIAKgEAAIgBAAg");
	this.shape_396.setTransform(102.6,21.3,3.353,3.353);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#B1E238").s().p("AgGAJQgDgCADgGQACgEAEgCQAGgFADADQABAGgEADIgGAGIgEACIgCgBg");
	this.shape_397.setTransform(107.7,11.3,3.353,3.353);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#B1E238").s().p("AgGAIQAAgDABgEIAEgHQACgEADABQAFACgDAFQgIALgCABIAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_398.setTransform(93.3,2,3.353,3.353);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#B1E238").s().p("AgGAGQgBgDABgDQABgHAFgCQAGgBABAHQAAADgEAFQgDAFgCAAQgDAAgBgEg");
	this.shape_399.setTransform(114.5,-47.2,3.353,3.353);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#B1E238").s().p("AgCAHIgCgBIACgIIABgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABABQAGAKgFACIgCACIgCgBg");
	this.shape_400.setTransform(122.5,-49.6,3.353,3.353);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#B1E238").s().p("AgCAHQgDgEgBgGQAAgGAFAAQADAAADAEQAEAEgFALIgCAAQgCAAgCgDg");
	this.shape_401.setTransform(111.5,-33,3.353,3.353);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#B1E238").s().p("AgFALQgCgBAAgGQAAgFADgEQAFgIAFAFQAEAGgFAGQgFAHgDAAIgCAAg");
	this.shape_402.setTransform(99.3,-17.3,3.353,3.353);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#B1E238").s().p("AgFAKQgDgBABgIQACgIAGgCQAIgCgBAHQgEAIgCABIgDADIgEADIAAgBg");
	this.shape_403.setTransform(102.9,-12.2,3.353,3.353);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#B1E238").s().p("AgEAJQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgFADgDQADgIAFACIABABQAAAKgEADIgFAFIAAAAIgCgBg");
	this.shape_404.setTransform(105.3,-2.9,3.353,3.353);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#B1E238").s().p("AgIAHQgBgDAGgGQAFgHAGACQACAGgFAEQgGAGgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_405.setTransform(111.8,0.6,3.353,3.353);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#B1E238").s().p("AgGAIQgDgDAEgGQAFgIAHACQADAEgGAEIgFAGIgDABIgCAAg");
	this.shape_406.setTransform(132.5,-3.6,3.353,3.353);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#B1E238").s().p("AgGAIQgDgCAFgGQAEgGAHgCQABAAAAAFQAAAFgCACQgGAFgDAAIgDgBg");
	this.shape_407.setTransform(117.6,9.6,3.353,3.353);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#B1E238").s().p("AgGACQAEgEALgDQgCAGgHADIgHACQgBAAAAAAQAAAAAAgBQAAAAAAgBQABgBABgBg");
	this.shape_408.setTransform(124.3,8.9,3.353,3.353);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#B1E238").s().p("AgHAGQgBgCADgEQACgEADgBQAEgCADABQAEAFgGACQgJAGgCAAIgBgBg");
	this.shape_409.setTransform(122.4,-0.2,3.353,3.353);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#B1E238").s().p("AgGAIQgBgDACgFQACgEADgBQAHgFAAAEQAAAGgEADQgEAGgDAAIgCgBg");
	this.shape_410.setTransform(118.7,-10.5,3.353,3.353);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#B1E238").s().p("AgIAIQgBgCAGgGIAGgIQAKAFgHAFQgHAHgEAAIgDgBg");
	this.shape_411.setTransform(116.5,-17.1,3.353,3.353);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#B1E238").s().p("AgDAIQgCgCABgGQACgHAHgBQACAGgEAFIgDAFIgBABIgCgBg");
	this.shape_412.setTransform(124.1,-41.1,3.353,3.353);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#B1E238").s().p("AgEAGQAAgGADgFQADgFACAEQACAHgDAEQgDAEgCAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAg");
	this.shape_413.setTransform(132.4,-53.4,3.353,3.353);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#B1E238").s().p("AgEAAIAAgIIADACQADACACAEQAEAEgGAFIgBAAQgEAAgBgJg");
	this.shape_414.setTransform(152,-58.1,3.353,3.353);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#B1E238").s().p("AgDAAIAAgFIADABQADABABADQABAEgFACQgCgCgBgEg");
	this.shape_415.setTransform(142.7,-56,3.353,3.353);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#B1E238").s().p("AgCABIACgHQADgDABAJQABADgDACIgCACQgEAAACgGg");
	this.shape_416.setTransform(137.1,-48.1,3.353,3.353);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#B1E238").s().p("AgFAKQgBAAABgHQABgHAEgDQACgDACABIACAEQABAFgEAFQgFAFgCAAIgBAAg");
	this.shape_417.setTransform(128.5,-37.3,3.353,3.353);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#B1E238").s().p("AgBgEQABgBAAgBQAAAAAAAAQABgBAAAAQABAAAAABQACABABAFQABAGgIACQgDgEAEgIg");
	this.shape_418.setTransform(130.2,-28.7,3.353,3.353);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#B1E238").s().p("AgFAKQgEgCAEgHQADgHAIgDQAEAEgEAFIgGAHQgBADgCAAIgCAAg");
	this.shape_419.setTransform(129.7,-16.7,3.353,3.353);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#B1E238").s().p("AgFAKQgEgCAFgIQAEgIAGgBQADAGgFAFIgEAHIgDABIgCAAg");
	this.shape_420.setTransform(131.6,-11.7,3.353,3.353);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#B1E238").s().p("AgGAIQgBgBACgHQADgGADgBQAEgCACACQACADgCADIgHAFQgCAFgCAAIgCgBg");
	this.shape_421.setTransform(147.1,-18.8,3.353,3.353);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#B1E238").s().p("AgDgBQAEgLAEACIACADIgCADQAAAEgLALQAAgHADgFg");
	this.shape_422.setTransform(153.7,-29.7,3.353,3.353);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#B1E238").s().p("AgFALQgBgBAAgEIABgGQACgJADgCIAFACQADACgCAHQgDAGgDAEIgEACIgBgBg");
	this.shape_423.setTransform(141,-25.8,3.353,3.353);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#B1E238").s().p("AgEACQAAgHACgDQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAEAEQACACgCAEIgEAFIgDAGQgCAAABgJg");
	this.shape_424.setTransform(150,-34,3.353,3.353);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#B1E238").s().p("AgFAIQgBgDABgFQAAgEACgCQADgDADgBQADAAABAEQgDANgCACQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_425.setTransform(139.3,-35.8,3.353,3.353);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#B1E238").s().p("AgDAGIgBgIIAAgJIAEAAQAEACABAFQABAPgGABQgCgBgBgFg");
	this.shape_426.setTransform(148,-47.5,3.353,3.353);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#B1E238").s().p("AABAIIgBgCIgCgGQAAgCgCgEIgDgCIAGgBQAFgBACAGQAFAOgGAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_427.setTransform(156.3,-50.7,3.353,3.353);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.lf(["#9CC93C","#9AC63C","#95BB3C","#8DA93B","#879C3B"],[0,0.322,0.596,0.855,1],-3.2,0,3.3,0).s().p("AgSAsQgEAAgFgDIgFgCQALgTADgLIASgfQAAgDAKgKQAKgJAAgCQAAgDAMAGIgUApQgGANgJAlIgPgEg");
	this.shape_428.setTransform(105.4,-131.2,3.353,3.353);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.lf(["#9CC93C","#9AC63C","#95BB3C","#8DA93B","#879C3B"],[0,0.322,0.596,0.855,1],-0.9,0.4,0.1,-4.7).s().p("ACEBXQgfgXgPgYQgOgZgPgTIgNgPIAGARQAAASgdAJQAFgLgLgMQgHgHgMgMIgLgKQgpADgNgCQgSgBgLgCQgWgEgNgKQAVgMAUgDQgVgBgPABIgLACIgQgBQgQgBgDABQgEADgJACQgMADgFgCQgGgCgCgEIAAgEQARgDADgHIADgOQABgKAEgCQAGgFAQgBQATgCARAHQAOAGAMANIAOAPIAMAFQAGADAIgCIAcgGQAXgEASAEQAXAFAaAPIARALQAQAIARACQAPACAPgBIAdgEQAegDAJAFQAHADgBACQAAAEgPAEQgPADgOAIIgXAOQgNAFgFABIgFAAIAKAHQALAJADAHIAKARQAHALgBAJIAAAYQgNgGgRgLg");
	this.shape_429.setTransform(94.5,-102,3.353,3.353);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#D81F27").s().p("AAAAGQgGgLAJgDIgCAIQgBAFABAEIgBgDg");
	this.shape_430.setTransform(107.8,-47.1,3.353,3.353);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#D81F27").s().p("AgGALQgFgFAAgHIACgIQALgMAHANQADAIAAAMQABAEgHAAQgGAAgGgFg");
	this.shape_431.setTransform(125,-66.6,3.353,3.353);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#D81F27").s().p("AgEALQgEgDgBgFQgBgEAFgFIAFgEQANgDgDALQgCAFgGAIIgCABIgEgBg");
	this.shape_432.setTransform(128.5,-57.3,3.353,3.353);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#D81F27").s().p("AgEALQgEgDgBgGQgBgDAFgFIAFgEQANgDgEALQgCAFgGAHQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAgBAAIgDgBg");
	this.shape_433.setTransform(122.8,-49.2,3.353,3.353);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#D81F27").s().p("AgEALQgEgDgBgGQgBgDAFgFIAFgEQANgDgEALQgCAFgGAHQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAgBAAIgDgBg");
	this.shape_434.setTransform(118.4,-62.3,3.353,3.353);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#D81F27").s().p("AgEAMQgFgDgBgGQgBgFAFgFIAFgFQAPgDgDAMQgCAGgHAJQgBABAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgEgCg");
	this.shape_435.setTransform(84.5,-60.3,3.353,3.353);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#D81F27").s().p("AgEAMQgFgDgBgGQgBgFAFgFIAGgFQAPgDgEAMQgCAGgHAJQgBABAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgEgCg");
	this.shape_436.setTransform(82.9,-45.8,3.353,3.353);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#D81F27").s().p("AgEAMQgFgDgBgGQgBgFAFgFIAGgFQAPgDgEAMQgCAGgHAJQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgEgCg");
	this.shape_437.setTransform(99.8,-29.6,3.353,3.353);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#D81F27").s().p("AgFAMQgFgDgBgGQgBgFAGgFIAFgFQAQgDgEAMQgDAHgHAIQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBAAIgEgCg");
	this.shape_438.setTransform(93.5,-39.9,3.353,3.353);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#D81F27").s().p("AgFAMQgEgDgCgGQgBgFAGgFIAFgFQAQgEgEANQgDAHgHAIQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBAAIgEgCg");
	this.shape_439.setTransform(98.1,-57.5,3.353,3.353);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#D81F27").s().p("AgEAMQgFgDgBgGQgBgFAFgFIAGgFQAWgFgUAdQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAIgEgCg");
	this.shape_440.setTransform(96.8,-70.5,3.353,3.353);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#D81F27").s().p("AgFALQgFgDAAgIIABgGQANgUAGAjQABAEgGABIgBAAQgEAAgFgDg");
	this.shape_441.setTransform(102.6,-86.4,3.353,3.353);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#D81F27").s().p("AgFAMQgFgDgBgHQgBgEAGgGIAFgEQAZgFgXAdIgCACIgEgCg");
	this.shape_442.setTransform(124.7,-80.6,3.353,3.353);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#D81F27").s().p("AgFAMQgFgDgBgGQgBgFAGgFIAGgFQAPgDgEAMQgDAHgHAIQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABgBAAIgEgCg");
	this.shape_443.setTransform(107.6,-74.5,3.353,3.353);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#D81F27").s().p("AADARQgGgBgFgGQgFgFADgIIADgIQAOgNAEAQQACAJgDAMQAAAFgFAAIgCgBg");
	this.shape_444.setTransform(108,-59,3.353,3.353);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#D81F27").s().p("AgJAOQgFgFAAgIQAAgFAHgGIAHgFQAUgCgHAPQgEAIgJAJIgDABQgDAAgDgCg");
	this.shape_445.setTransform(92.7,2.1,3.353,3.353);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#D81F27").s().p("AgJAOQgFgFAAgIQAAgFAHgGIAHgFQAUgCgHAPQgEAIgJAJIgDABQgDAAgDgCg");
	this.shape_446.setTransform(103.3,-11.9,3.353,3.353);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#D81F27").s().p("AADARQgGAAgFgHQgEgFACgIIADgIQAPgNADAQQACAIgCANQgBAFgFAAIgCgBg");
	this.shape_447.setTransform(99,-17.6,3.353,3.353);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#D81F27").s().p("AACARQgFgBgFgGQgEgEADgIIADgIQANgMADAOQACAJgDAMQgBAEgFAAIgBAAg");
	this.shape_448.setTransform(156.3,-50,3.353,3.353);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#D81F27").s().p("AACARQgFgBgFgGQgDgEACgIIADgIQANgMADAOQACAIgCANQgBAEgFAAIgCAAg");
	this.shape_449.setTransform(148.4,-47.3,3.353,3.353);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#D81F27").s().p("AADAQQgGAAgEgGQgEgFACgIIADgHQAOgMADAOQABAIgCAMQgBAEgFAAIgBAAg");
	this.shape_450.setTransform(151.7,-57.2,3.353,3.353);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#D81F27").s().p("AADAQQgGAAgEgGQgEgFACgHIADgIQAOgMADAOQABAIgCAMQgBAEgFAAIgBAAg");
	this.shape_451.setTransform(136.9,-65.7,3.353,3.353);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#D81F27").s().p("AACALQgEgBgDgDQgCgDABgFIACgFQAJgJACAKQABAGgCAHQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_452.setTransform(141.9,-56.2,3.353,3.353);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#D81F27").s().p("AgGAJQgEgEACgHIADgGQAMgLACAMQABAHgCAKQgBAEgFAAQgFAAgDgFg");
	this.shape_453.setTransform(136.5,-48.1,3.353,3.353);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#D81F27").s().p("AADARQgGAAgFgGQgEgGACgIIADgIQAPgMADAPQACAIgCANQgBAEgFAAIgCAAg");
	this.shape_454.setTransform(139.1,-33.8,3.353,3.353);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#D81F27").s().p("AADARQgGAAgFgGQgFgGADgIIADgIQAOgMAEAPQACAJgDAMQAAAEgFAAIgCAAg");
	this.shape_455.setTransform(130.1,-27.1,3.353,3.353);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#D81F27").s().p("AADASQgGgBgFgGQgFgGADgIIADgIQAOgMAEAPQACAIgCAOQgBAEgFAAIgCAAg");
	this.shape_456.setTransform(124.9,-39.9,3.353,3.353);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#D81F27").s().p("AADARQgGAAgFgHQgEgFACgIIADgIQAPgNADAQQACAIgCANQgBAFgFAAIgCgBg");
	this.shape_457.setTransform(128.2,-37.7,3.353,3.353);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#D81F27").s().p("AADARQgGAAgFgGQgFgGADgIIADgIQAPgMADAPQACAIgCANQgBAEgEAAIgDAAg");
	this.shape_458.setTransform(111.8,-32.6,3.353,3.353);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#D81F27").s().p("AgJAOQgFgFAAgIQgBgFAIgGIAHgFQAUgBgHAOQgEAIgJAJIgEABQgCAAgDgCg");
	this.shape_459.setTransform(113.8,-46.9,3.353,3.353);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#D81F27").s().p("AAFDaQgEgCAAgGIAAgGQgJgRgDgEIgJgIQgDgCAAgDIAAgHQgBgEACgCQADgDAAgCQgCgHgDgDQgFgDABgHQADgFABgFIACgIQABgEgCgBIgLgLQgEgDADgEQAEgFABgDQADgIgBgHQgBgGgGgTQgBgDAAgOIABgNQACgJgBgGQAAgDgEgFQgGgFgBgEQgDgGADgKQADgIADgBQAFgCgKgNQgDgEAGgNQAHgJABgJQABgIgEgGQgDgHgFgBQgJgBAPgYQAJgJABgFIACgKQABgIAFgEQAEgFAegXIAfgWIAEgBQAAAIgEAIQgDAIgOABIgGAHQgHAIgCAHQgDAHADAHQABAEACACIgQALQgFAFAFARIgBAIQgBAGACADQAEAFgCAQQABAIgEANIgCAJIABAIQABAHABADQABADABAQQABAPADADQACACgHAMQgCAHABAHQAAAFAEAMIgDAMIABAFQABAFACADQAEAFgKATIgEALQgDAJADADQAEAFAAAMIgBAQIgIAMQgDAEAFALIAIAPIAPAbQARAOgGABIgBAAQgGAAgOgLg");
	this.shape_460.setTransform(12,-34.1,3.353,3.353);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#D81F27").s().p("Ai0CTQAJABATgOQAvgJA2gjQAbgSASgQQAIgRABgJQgBgZAEgNQACgIAUgNQAhgWAGgFQAOgLAhgLQAfgLAFgGQANgNAMgoQAKANgHAUQgEAKgIAOQgCAFgBAUQgDAUgMAOQgRAUgaAZQgeAdgXAQQglAbgoATIg0AUIg0AUQgLAFgRAAQgKAAgNgCg");
	this.shape_461.setTransform(99.7,-2.3,3.353,3.353);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#D81F27").s().p("AhRDmIgNgJQABgFgCgFQgEgMgKgFQgLgEACgQIAGgeQACgMAHgPIAIgTQAFgPgGgHIgGgJIgHgNQgDgGAEgGIAJgJQAEgDACgLQADgLgDgDQgCgDgEgMQgFgMgCgDQgDgDACgMIABgSQAAgGAEgOIgBgbQgCgYACgHIAGgaQAGgTANgOQAVgWAjgLIAwgHIBCAIQATACgJAJQgIAJgRABQgQABgCALQgCALAQACQAOADANANQALALACALQACAMgHARQgHAUgPAQQgOAPgCAjQgCAeAFAHQAFAHAXAPQAHAGAFAOQAGAPAAAPQABAPgRAdQgRAegYAWQgVAUgoATQgeAOgWAGIgHAAQgLAAgMgGg");
	this.shape_462.setTransform(53,-33.4,3.353,3.353);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#EC5A58").s().p("AhWD8IgGgDIgRACIgMgCQgKgCgDgCQgDgEgHABIgHABIgOgHIgcgOIgSgaQgIgDABgDIgEgKQgDgIAAgDIgFgnQgCgZgCgHIABgVIgLgsQgGgoAAgFIgBg9IgBgsIAOglIgCgJQgBgDAOgQQAKgLAKgIQAIgIApgcIAJgGIAUgEQAagGAmABQAdAAALADIAzAKQAzALAPAFQAZAJA5A8IAhAZQAGAFATAXIAKAOQANAbgCAUIgEARIgWA1QgCAOgGACQgBAGgTAWIgMANQgTAZgGAFQgWAZgeASQgMALgQALQgHAIgNAGIgYAJQgNAKgQAEIgOAGQgNAFgEAAQgDAAgKAEQgKAFgBAAQgCgBgKAEIgLAGIgKAEIgDABIgEgBg");
	this.shape_463.setTransform(77.5,-34.2,3.353,3.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.instance_8},{t:this.instance_7},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.instance_6},{t:this.instance_5},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.7,-147.2,331.5,294.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AFB120","#B4B41C","#C1BC10","#D0C602"],[0,0.341,0.714,1],-17.2,-4.9,20.2,3).s().p("Ah7HfQhHgDhKhJQDuiJBEjxQAYhVAAhbQgBhGgOgxQgZh6gpgVIAPAHQAfAJAigQQAlgRABghQAmAgA1ACQA8ADAKg0QAMAVgDAuQgCAagHAuQgFBNgQBGQgEASgUCDQgOBZgVA5QhACshiB9Qg9BPhLAAIgFAAg");
	this.shape.setTransform(183.9,-70.3,0.834,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E3C41B","#B3CF03"],[0,1],-37.6,39.1,49,-41.5).s().p("AhyIrQhdgEg+gsIgqgoQDPhLBdnBQAciMAOiiIAIiFQBwAxBag0QAsgaAXgjQALAZgUBAQgNAqgbA9IgnBiQgYA6gMApQgNAtgvCGQgoBwgPBEQgHAfgbBcQgWBNgIAvQgCAOABApQgBAmgKALQgLAMgoACIgFAAIgzgCg");
	this.shape_1.setTransform(203.8,-69.7,0.834,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A19B2F").s().p("AhcBLQgMgiBMgqQBhg5AZgiQgSAnhNAzQhFAsAFAPQADALAggOQAegNAAAUQAAAWgpAIQgLACgJAAQgYAAgHgSg");
	this.shape_2.setTransform(189.5,-104.5,0.834,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C8305").s().p("AgyArQgDgTA3gNQA8gNAGgNQAJgShQgJQhegGgUgCQBrgGBDALQBKAMgPAbQgOAbhLAWQglAKgUAAQgTAAgBgKg");
	this.shape_3.setTransform(218.7,-106.7,0.834,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EFE6A6","#958C15"],[0,1],-2.7,-12.3,1.5,8.2).s().p("AkVBgIgMgHQgFgeARgWQANgQAjgVQBng8AlgqQAUAHBEgBIB/gEQClAAAABBQhcBchjgPQgggEgcgPIgWgOQggA9g5gDQgkgCgngZIgNgJQgmBHgyABIgCAAQgOAAgOgHg");
	this.shape_4.setTransform(205.3,-104.5,0.834,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#90901A","#928E17","#97870E","#9F7E01"],[0,0.439,0.765,1],-2.4,-11.3,1.6,8).s().p("Aj2BnQgQgDgPgKIgMgKQgGgeASgTQAMgOAlgRQBlguApgvQAUAHBCgFIB/gLQCkgIAABGQhbBchjgHQgegDgcgMIgWgLQggA8g5gDQgkgCgogZIgMgJQgjBAgsAAIgLgBg");
	this.shape_5.setTransform(205.3,-103.9,0.834,0.667);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(-10,27.1,0.834,0.667,0,0,0,207.2,76.9);
	this.instance.alpha = 0.5;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D18C0B").s().p("AgGABQAAgGAGgBQAGAAABAGQAAAGgHABQgGAAAAgGg");
	this.shape_6.setTransform(-77.2,79.8,0.834,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D18C0B").s().p("AgBAHQgGgCABgGQACgGAGACQAGACgCAFQAAACgDACIgDABIgBAAg");
	this.shape_7.setTransform(-98.9,74.8,0.834,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D18C0B").s().p("AgGAIQgDgDAAgFQgBgIAKgBQAEgBADADQADADABAEQAAADgDAEQgDADgFAAQgDAAgDgCg");
	this.shape_8.setTransform(25,82.5,0.834,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D18C0B").s().p("AgDAJQgEgCgCgEQgCgIAJgDQADgCADACQAEACACADQABADgCAEQgCAEgEABIgDABIgDgBg");
	this.shape_9.setTransform(-15.7,52.2,0.834,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D18C0B").s().p("AgFAIQgEgCAAgEQgBgDACgEQADgDAEgBQADgBAEACQADADABAEQABADgDADQgCAEgFABIgBAAQgDAAgCgCg");
	this.shape_10.setTransform(-93.9,43.4,0.834,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D18C0B").s().p("AgCAKQgEgBgCgEQgCgEABgDQABgEAEgCQAEgCADABQAEABACAEQACADgBADQgDAIgHAAIgCAAg");
	this.shape_11.setTransform(-128.1,42.3,0.834,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D18C0B").s().p("AgGAAQgBgFAHgBQAHAAAAAGQABAGgIABQgGAAAAgHg");
	this.shape_12.setTransform(-47.8,53.1,0.834,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D18C0B").s().p("AgDAJQgEgCgBgEQgCgDACgDQACgEAEgBQACgBAEABQAEABABAEQADAJgJADIgDABIgDgBg");
	this.shape_13.setTransform(-85.1,51,0.834,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D18C0B").s().p("AgEAEQgEgEAFgEQAEgEAEAFQAEAEgFAEQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgCAAgCgDg");
	this.shape_14.setTransform(2.7,61.4,0.834,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D18C0B").s().p("AgFAJQgEgDAAgEQgBgDACgEQADgDAEgBQAEgBADACQAEADABAEQAAADgCAEQgDADgEABIgCAAQgDAAgCgBg");
	this.shape_15.setTransform(-92.7,55.3,0.834,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D18C0B").s().p("AgGAKQgEgDgBgFQgBgEADgEQADgEAFgBQAEgBAEADQAEACABAFQABAEgDAEQgDAEgFACIgCAAQgDAAgDgCg");
	this.shape_16.setTransform(32.5,65.4,0.834,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D18C0B").s().p("AgJALQgFgEAAgGQAAgFAFgFQADgEAGAAQAGgBAFAEQADAEABAGQAAAFgEAFQgFAEgFABQgGAAgEgEg");
	this.shape_17.setTransform(-168.6,35.6,0.834,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D18C0B").s().p("AgDAJQgEgCgBgDQgDgIAJgDQACgCAEACQAEABABAEQACAHgIAEIgDAAIgDAAg");
	this.shape_18.setTransform(-88.7,75.8,0.834,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D18C0B").s().p("AgCAIQgDAAgCgEQgBgDAAgCQABgEAEgBQADgCADABQADABACADQABADgBACQgBAEgDACIgEABIgCgBg");
	this.shape_19.setTransform(-62.4,63.5,0.834,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D18C0B").s().p("AgGAHQgDgCAAgFQAAgCADgDQADgDADgBQAEAAADADQADACAAAEQAAADgDAEQgCADgFAAIAAAAQgDAAgDgDg");
	this.shape_20.setTransform(-154,40,0.834,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D18C0B").s().p("AgEAAQAAgEAEAAQAEgBABAFQAAAEgFAAIAAABQgDAAgBgFg");
	this.shape_21.setTransform(-147.7,55.4,0.834,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D18C0B").s().p("AgHABQAAgHAHgBQAHAAABAHQAAADgCACQgCADgEAAQgHAAAAgHg");
	this.shape_22.setTransform(-103.5,64.7,0.834,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D18C0B").s().p("AgFAGQgCgDAAgDQAAgGAHgBQAIAAAAAHQAAAHgIABQgCAAgDgCg");
	this.shape_23.setTransform(-52.3,84.3,0.834,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D18C0B").s().p("AgJALQgEgEAAgGQgBgFAFgFQAEgEAFAAQAGgBAEAEQAEAEABAGQAAAFgEAFQgFAEgGAAIAAAAQgFAAgEgDg");
	this.shape_24.setTransform(-121.5,50,0.834,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D18C0B").s().p("AgDAJQgEgBgCgEQgBgEACgDQACgEAEgBQADgBADABQAEACACAEQABACgCAEQgCAEgEABIgDABIgDgBg");
	this.shape_25.setTransform(-112.4,68.4,0.834,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D18C0B").s().p("AgGAFQgCgCAAgDQABgEADgCQADgCACAAQAEABACADQACACAAADQgBADgCADQgEACgCAAQgDAAgDgEg");
	this.shape_26.setTransform(-134.3,34.7,0.834,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D18C0B").s().p("AgBAHQgDgBgBgDQgCgCABgCQACgHAGACQAHACgCAGQgCAFgFAAIgBAAg");
	this.shape_27.setTransform(-122.4,40.4,0.834,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D18C0B").s().p("AgHAJQgEgDgBgFQAAgEAEgEQAEgEAEAAQAGAAADADQAEAEgBAEQABAFgEADQgEAEgEAAIgBAAQgEAAgDgDg");
	this.shape_28.setTransform(-138.5,46.4,0.834,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D18C0B").s().p("AgGAFQgDgCABgDQAAgEADgCQADgDADABQAEAAACADQADADgBADQAAAEgEACQgDACgCAAQgDAAgDgEg");
	this.shape_29.setTransform(-157.5,46.2,0.834,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D18C0B").s().p("AgGAKQgEgDgBgFQgBgDADgEQADgEAFgBQAEgBAEACQAEADABAFQABADgDAEQgDAEgFABIgCABQgDAAgDgCg");
	this.shape_30.setTransform(-134.6,58.3,0.834,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D18C0B").s().p("AAAAMQgGAAgDgEQgDgEAAgEQACgFADgDQAEgEAFABQAFAAADAEQADAEgBAEQgBAFgDADQgEADgEAAIAAAAg");
	this.shape_31.setTransform(-142.3,55.4,0.834,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D18C0B").s().p("AgGAKQgEgCgCgFQgBgFADgEQAEgEAFgBQAEgBAEACQAFADABAFQABAEgDAFQgEAEgEABIgDABQgDAAgDgDg");
	this.shape_32.setTransform(-168.8,-9.8,0.834,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D18C0B").s().p("AgEAHQgDgCAAgDQgBgDACgCQAFgHAGAEQAGAFgEAGQgCACgEABIgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_33.setTransform(-130.4,4.9,0.834,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D18C0B").s().p("AgBAGQgGgBABgGQACgHAGADQAGACgBAFQgCAFgEAAIgCgBg");
	this.shape_34.setTransform(-124.6,46.8,0.834,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D18C0B").s().p("AAAAJQgEgBgCgCQgDgDABgDQAAgEADgCQAGgFAGAHQADACgBADQgBAEgDACQgCACgDAAIAAAAg");
	this.shape_35.setTransform(-119.4,66.3,0.834,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D18C0B").s().p("AgJAKQgEgEAAgFQAAgFAEgEQAEgEAFgBQAGAAAEAEQAEAEAAAFQAAAFgEAEQgEAEgGABQgEAAgFgEg");
	this.shape_36.setTransform(-153.9,10.1,0.834,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D18C0B").s().p("AgHAMQgFgDgCgGQAAgFADgFQAEgFAFgBQAFgBAGADQAEADABAGQABAFgDAFQgEAFgFABIgDAAQgDAAgEgCg");
	this.shape_37.setTransform(-10.3,78,0.834,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D18C0B").s().p("AgGAHQgCgCAAgEQAAgIAIgBQAEgBACADQADADAAADQAAAEgCACQgDADgEAAIAAAAQgDAAgDgCg");
	this.shape_38.setTransform(-152.6,-27,0.834,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D18C0B").s().p("AgEAJQgDgCgBgEQgCgDACgDQACgDAEgCQACgBAEABQAEACABAEQABADgBADQgCAEgEABIgDABIgEgBg");
	this.shape_39.setTransform(-167.7,26.6,0.834,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D18C0B").s().p("AgBAMQgFgBgDgEQgDgEABgDQABgFAEgDQAEgDAEAAQAFABADADQAHAJgKAHQgDADgEAAIgBAAg");
	this.shape_40.setTransform(-163.3,17,0.834,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D18C0B").s().p("AgCAHQgDAAgBgDQgCgDACgCQABgDACgCQADgBADAAQADABABADQABADgBACQgBAGgFAAIgDgBg");
	this.shape_41.setTransform(-129.9,13.3,0.834,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D18C0B").s().p("AgIAKQgEgEgBgGQAAgEAEgEQAEgEAFgBQAFAAAFAEQAEAEAAAFQAAAFgEAEQgEAEgGAAIAAABQgFAAgDgEg");
	this.shape_42.setTransform(-137.1,18.9,0.834,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D18C0B").s().p("AgEAKQgEgBgCgFQgBgEACgDQACgEAEgCQAEgCAEACQAEACACAEQABADgCAFQgCADgEACIgEABIgEgBg");
	this.shape_43.setTransform(-179.4,18.5,0.834,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D18C0B").s().p("AAAAKQgFAAgCgEQgDgDAAgDQABgFAEgCQADgDAEABQAEAAADADQACAEAAADQgBAEgDADQgDACgEAAIAAAAg");
	this.shape_44.setTransform(-127.9,60.5,0.834,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D18C0B").s().p("AgDAHQgHgEAFgGQACgDADgBQACgBADACQADACAAADQABADgCACQgCADgDABIgCAAIgDgBg");
	this.shape_45.setTransform(52.5,83.2,0.834,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D18C0B").s().p("AgGAAQAAgBACgDQABAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAQAHgBAAAHQAAAGgHABQgGAAAAgHg");
	this.shape_46.setTransform(-138.7,12.8,0.834,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D18C0B").s().p("AgBAHQgIgCACgGQABgDADgCQADgBACABQAIACgCAGQgCAGgFAAIgCgBg");
	this.shape_47.setTransform(-134.3,-18.9,0.834,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D18C0B").s().p("AgDAGQgDgBAAgDQgBgCACgDQAEgGAFAEQAGAEgEAFQgCADgDABIgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_48.setTransform(-150.7,-22.1,0.834,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D18C0B").s().p("AgGADQgCgGAHgCQAFgDADAHQACAFgHACIgCABQgEAAgCgEg");
	this.shape_49.setTransform(-37.5,74.1,0.834,0.667);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D18C0B").s().p("AgCAFQgFgDADgEQAEgFADAEQAFADgDADQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_50.setTransform(-180.3,26.2,0.834,0.667);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D18C0B").s().p("AgCAJQgEgBgCgDQgCgEACgCQABgEAEgDQADgCADABQAEACACADQACAEgBACQgBAFgEABIgFACIgCgBg");
	this.shape_51.setTransform(-147.1,33.6,0.834,0.667);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D18C0B").s().p("AgEAEQgEgEAFgEQAEgEAEAFQAEAEgFAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgCAAgCgDg");
	this.shape_52.setTransform(-160,-0.2,0.834,0.667);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D18C0B").s().p("AgGAHQgDgCAAgEQAAgDADgDQADgDADAAQAEgBADADQADADAAADQAAAEgDACQgDADgEAAIAAAAQgDAAgDgCg");
	this.shape_53.setTransform(-142.8,-23.3,0.834,0.667);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D18C0B").s().p("AgHALQgFgDAAgFQgBgEADgFQADgFAGgBQAEgBAFADQAEADABAFQABAEgDAFQgDAEgGACIgCAAQgDAAgEgCg");
	this.shape_54.setTransform(-157.9,-14.5,0.834,0.667);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D18C0B").s().p("AgEAKQgEgCgBgFQgCgDACgEQACgEAEgBQADgCAFACQAEACABAEQADAJgKAEIgDABIgEgBg");
	this.shape_55.setTransform(-140.3,-4.2,0.834,0.667);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D18C0B").s().p("AgDAGQgDgCAAgDQgBgCACgCQACgCADgBQACgBACACQAFADgDAGQgDADgDAAIgDgBg");
	this.shape_56.setTransform(-185.1,12,0.834,0.667);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D18C0B").s().p("AgGAIQgDgDAAgEQAAgDACgDQADgEAEAAQADAAAEACQADADAAAEQAAADgCADQgDADgEABIgBAAQgDAAgDgCg");
	this.shape_57.setTransform(195.4,-1.4,0.834,0.667);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D18C0B").s().p("AAAAJQgDAAgEgDQgCgCAAgEQABgDADgDQADgDACABQAEAAADADQADACgBADQAAAEgDADQgDACgDAAIAAAAg");
	this.shape_58.setTransform(164.9,4.6,0.834,0.667);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D18C0B").s().p("AgCAGQgGgCACgGQAEgGAFACQAGADgDAFQgCAFgEAAIgCgBg");
	this.shape_59.setTransform(176.9,16.3,0.834,0.667);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D18C0B").s().p("AAAAGQgFAAgBgGQABgFAFAAQAHABAAAEQgBAGgFAAIgBAAg");
	this.shape_60.setTransform(172,15.8,0.834,0.667);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D18C0B").s().p("AgGACQgBgCACgCQABgDADgBQAHgCABAHQACAGgHACIgCAAQgFAAgBgFg");
	this.shape_61.setTransform(142.7,0.6,0.834,0.667);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D18C0B").s().p("AgFAHQgHgFAGgHQACgDAEAAQADgBADADQADACABAEQAAADgDADQgCADgEAAIgBAAQgDAAgCgCg");
	this.shape_62.setTransform(193.6,-9.9,0.834,0.667);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D18C0B").s().p("AgDAJQgEgBgCgEQgBgEABgDQACgEAEgBQADgCAEABQAEACACAEQABADgCADQgBAEgEACIgEABIgDgBg");
	this.shape_63.setTransform(182.4,19.8,0.834,0.667);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D18C0B").s().p("AAAAKQgEAAgDgDQgDgDABgEQAAgEADgDQAEgDADABQAEAAADADQADADAAADQgBAFgDADQgDACgEAAIAAAAg");
	this.shape_64.setTransform(187,-26.8,0.834,0.667);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D18C0B").s().p("AgFAJQgEgCgBgEQgBgDADgEQACgEAEgBQAEgBAEACQAEACAAAEQABADgCAEQgCAEgFABIgCABIgFgCg");
	this.shape_65.setTransform(181.6,1.7,0.834,0.667);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D18C0B").s().p("AAAAGQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQgDgEAFgDQAFgDADAFQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQAAABgBAAIgDABIAAAAg");
	this.shape_66.setTransform(168.3,-16,0.834,0.667);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D18C0B").s().p("AgDAEQgEgDADgEQAEgFAEAEQAFAEgEAEQgDADgCAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_67.setTransform(196.5,-15.8,0.834,0.667);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D18C0B").s().p("AgDAJQgEgBgBgEQgCgDACgDQABgEAEgCQADgCAEACQAJADgDAJQgCAEgEABIgEABIgDgBg");
	this.shape_68.setTransform(162.5,13.3,0.834,0.667);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D18C0B").s().p("AgHANQgFgDgCgGQgBgFADgFQADgGAHgBQAFgCAFADQAFADACAGQABAFgDAGQgDAFgGABIgEABQgEAAgDgCg");
	this.shape_69.setTransform(168.6,23.8,0.834,0.667);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D18C0B").s().p("AgIAGQgDgEABgDQABgFAEgCQAEgCADABQAFABACADQADAEgBADQgBAEgEADQgEACgCAAQgFAAgDgFg");
	this.shape_70.setTransform(196.6,-25.6,0.834,0.667);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D18C0B").s().p("AgEAOQgHgCgCgGQgCgGACgEQACgGAHgCQAEgDAGACQAGADACAFQACAFgCAFQgCAGgGACQgDACgDAAIgEgBg");
	this.shape_71.setTransform(179.2,-15.2,0.834,0.667);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D18C0B").s().p("AgHAAQABgCACgCQADgDACABQAIAAgBAHQAAAHgIAAQgHAAAAgIg");
	this.shape_72.setTransform(181.3,-15.5,0.834,0.667);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D18C0B").s().p("AgIAOQgGgDgBgHQgCgFAEgGQAEgGAGgCQAGgCAGAEQAFADACAHQACAFgEAGQgDAGgHABIgEABQgEAAgEgCg");
	this.shape_73.setTransform(186.2,-0.5,0.834,0.667);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D18C0B").s().p("AgIALQgEgEgBgGQgBgEAEgFQAFgEAFgBQAFAAAEADQAEAEABAFQABAFgEAFQgEAEgGABIgBAAQgEAAgEgDg");
	this.shape_74.setTransform(154.3,34.3,0.834,0.667);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D18C0B").s().p("AgGAHQgDgCAAgEQAAgDACgDQADgEAEAAQADAAAEACQACADABADQAAADgCAEQgEAEgEAAQgCAAgEgDg");
	this.shape_75.setTransform(144.4,-13.8,0.834,0.667);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D18C0B").s().p("AgDAFQgFgEAEgEQAEgEAEADQAEAEgDAEQgCACgCAAIgEgBg");
	this.shape_76.setTransform(188.1,8.5,0.834,0.667);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D18C0B").s().p("AgHAAQABgHAHAAQAIABgBAGQAAAIgIAAQgIgBABgHg");
	this.shape_77.setTransform(139.6,-3.8,0.834,0.667);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D18C0B").s().p("AgGAAQABgHAGAAQADABACACQACACAAACQAAAHgIABQgHgCABgGg");
	this.shape_78.setTransform(175.4,27.3,0.834,0.667);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D18C0B").s().p("AgDAGQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgCgFAGgCQAGgCABAHQACAEgGACIgCAAIgDAAg");
	this.shape_79.setTransform(135.5,13.3,0.834,0.667);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D18C0B").s().p("AgDAFQgCgBgBgEQAAAAAAAAQAAAAABgBQAAAAAAgBQABgBAAAAQACgCACAAQAAgBABAAQABAAAAABQABAAAAAAQABAAAAABQADABAAADQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCACgCAAIgBABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_80.setTransform(163,37.3,0.834,0.667);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D18C0B").s().p("AAAAEQgFgBACgDQACgFADACQADACgBADQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_81.setTransform(173.5,16.1,0.834,0.667);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D18C0B").s().p("AgGACQgBgCACgDQABgCADgBQAGgCACAHQACAGgHACIgCABQgFAAgBgGg");
	this.shape_82.setTransform(147.3,16.9,0.834,0.667);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D18C0B").s().p("AgDADQgDgDAFgDQADgDADAEQACAEgEACIgDABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_83.setTransform(141,40.2,0.834,0.667);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D18C0B").s().p("AgDAFQgFgEAEgEQACgCACAAQAAgBABAAQAAAAABABQABAAAAAAQABABAAAAQAGAEgFAEQgCADgDAAIgDgCg");
	this.shape_84.setTransform(174.6,6,0.834,0.667);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D18C0B").s().p("AgBAFQgFgCACgEQACgFAEACQAGACgDAEQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgCABIgBgBg");
	this.shape_85.setTransform(129,28.4,0.834,0.667);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D18C0B").s().p("AgGAFQgEgHAHgEQAGgEAEAHQAEAFgHAFQgDACgBAAQgEAAgCgEg");
	this.shape_86.setTransform(137.1,15.8,0.834,0.667);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D18C0B").s().p("AgHAAQABgHAGABQAIAAgBAHQAAAGgHAAQgHgBAAgGg");
	this.shape_87.setTransform(167.9,4.8,0.834,0.667);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D18C0B").s().p("AgJACQgBgDADgDQACgEAEgBQADAAADACQAEACABADQABADgDAEQgCADgEABIgCABQgHAAgCgIg");
	this.shape_88.setTransform(163.7,8,0.834,0.667);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D18C0B").s().p("AgCAMQgGgBgCgEQgDgEABgFQACgFAEgDQAFgDAEABQAFACADAEQADAEgBAFQgCAFgEADQgDACgEAAIgCgBg");
	this.shape_89.setTransform(144.7,25.8,0.834,0.667);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D18C0B").s().p("AgEANQgGgDgCgEQgCgGACgEQADgFAFgCQAEgDAFACQAGACACAFQACAFgCAFQgCAFgGACIgFACIgEgBg");
	this.shape_90.setTransform(139,49.7,0.834,0.667);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D18C0B").s().p("AgHAAQABgHAHABQADAAACACQACACAAACQgBAIgHAAQgHgBAAgHg");
	this.shape_91.setTransform(129.2,7.1,0.834,0.667);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D18C0B").s().p("AgCANQgFgBgDgFQgDgEABgEQABgGAFgDQAFgDAEABQAFABADAFQADAEgBAFQgBAFgFADQgDACgEAAIgCAAg");
	this.shape_92.setTransform(165.1,25.6,0.834,0.667);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D18C0B").s().p("AgGAJQgEgDAAgFQgBgDADgEQAEgEAEAAQAEgBAEADQADADABAFQAAAEgDADQgDAEgFAAIgBAAQgDAAgDgCg");
	this.shape_93.setTransform(150.8,46.8,0.834,0.667);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D18C0B").s().p("AgFAHQgDgCgBgEQAAgDADgDQACgDAEgBQADAAADACQADADABADQAAADgDADQgDAFgEAAQgCAAgDgDg");
	this.shape_94.setTransform(171.1,16.1,0.834,0.667);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D18C0B").s().p("AgDAEQgEgDAEgEQADgEAEAEQAEADgEADQAAABgBAAQAAABgBAAQAAABgBAAQgBAAAAAAIgDgCg");
	this.shape_95.setTransform(145.7,39,0.834,0.667);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D18C0B").s().p("AAAAJQgDAAgDgDQgCgDAAgDQABgIAIAAQAEABACACQACADAAADQAAADgDADQgDACgCAAIgBAAg");
	this.shape_96.setTransform(120.1,16.2,0.834,0.667);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D18C0B").s().p("AgCAHQgHgCACgHQAEgHAGACQAEABABAEQABACgBADQgDAFgEAAIgDgBg");
	this.shape_97.setTransform(136.4,24.7,0.834,0.667);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D18C0B").s().p("AAAAHQgHAAABgHQABgHAFABQAIAAgBAGQAAADgCACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_98.setTransform(101.1,26.1,0.834,0.667);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D18C0B").s().p("AgGACQgCgGAHgCQAGgCACAHQACAGgHACIgCAAQgFAAgBgFg");
	this.shape_99.setTransform(128.8,35.6,0.834,0.667);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D18C0B").s().p("AgCAHQgDgBgBgDQgBgDABgBQACgIAHADQADABABADQABACgBACQgCAGgEAAIgDgBg");
	this.shape_100.setTransform(143,31.3,0.834,0.667);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D18C0B").s().p("AAAAGQgHAAABgGQABgGAGAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQACACAAACQgBAHgFAAIgBgBg");
	this.shape_101.setTransform(98.3,63.7,0.834,0.667);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D18C0B").s().p("AgEAIQgDgCgBgEQgBgCACgEQACgDAEgBQACgBAEACQADACABADQABADgCADQgCAEgEAAIgCABIgEgBg");
	this.shape_102.setTransform(132.9,37,0.834,0.667);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D18C0B").s().p("AgEAFQgCgCAAgDQAAAAAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAFgFAEADQAFAEgEAFQgCADgDAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAg");
	this.shape_103.setTransform(128.3,36.8,0.834,0.667);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D18C0B").s().p("AgBAIQgDAAgCgDQgFgGAIgFQADgCACABQAEABACACQACADgBADQgBADgDACIgFABIgBAAg");
	this.shape_104.setTransform(150.7,23.3,0.834,0.667);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D18C0B").s().p("AgJAAQAAgDADgEQAEgCADAAQAEAAADADQADADgBADQgBAKgJAAQgJgBAAgJg");
	this.shape_105.setTransform(123.5,42.2,0.834,0.667);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D18C0B").s().p("AgDAOQgGgBgDgFQgDgFACgFQABgGAFgDQAGgDAEABQAGABADAFQAEAFgCAFQgBAGgGADQgDACgEAAIgDAAg");
	this.shape_106.setTransform(118.2,41.7,0.834,0.667);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D18C0B").s().p("AgFANQgFgCgDgFQgCgGADgEQACgGAGgCQAEgCAFACQAGACACAFQADAFgDAFQgCAFgGADIgFABIgFgBg");
	this.shape_107.setTransform(84,50.4,0.834,0.667);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D18C0B").s().p("AgKAKQgFgFABgFQAAgGAFgEQAFgEAFAAQAGAAAEAFQAFAEgBAGQgBAGgEAEQgFAEgFAAQgHgBgDgEg");
	this.shape_108.setTransform(126.1,48.1,0.834,0.667);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D18C0B").s().p("AgJADQgBgJAJgCQADgBADACQAEACAAAEQABACgCAEQgCADgEABIgCABQgHAAgCgHg");
	this.shape_109.setTransform(104.9,62.1,0.834,0.667);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D18C0B").s().p("AgBAKQgFAAgCgEQgCgEABgDQABgEADgDQAEgCADABQAEAAADAEQADAEgCADQgBAFgDACQgDACgDAAIgBgBg");
	this.shape_110.setTransform(171.1,-25.1,0.834,0.667);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D18C0B").s().p("AgHAFQgCgDABgDQABgEADgCQADgCADABQAEABACADQACADgBADQgBADgDACQgDACgCAAQgEAAgDgEg");
	this.shape_111.setTransform(168.2,32,0.834,0.667);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D18C0B").s().p("AgFAGQgCgCgBgDQAAgCACgDQAFgGAGAFQAGAFgFAFQgCADgEAAIAAAAQgCAAgDgCg");
	this.shape_112.setTransform(109.5,71,0.834,0.667);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D18C0B").s().p("AgHAAQACgHAFAAQAJACgCAFQAAAIgHAAQgHgBAAgHg");
	this.shape_113.setTransform(-143.5,-16.8,0.834,0.667);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D18C0B").s().p("AgCAHQgIgCAEgHQABgDADgBQACgBADABQAEAAABAEQABACgBADQgBADgEABIgDABIgCgBg");
	this.shape_114.setTransform(63.6,37.4,0.834,0.667);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D18C0B").s().p("AAAAIQgDAAgCgDQgDgCABgDQABgHAHAAQAIABgBAGQAAAEgDACQgCACgDAAIAAAAg");
	this.shape_115.setTransform(79.7,52.8,0.834,0.667);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D18C0B").s().p("AgEAIQgDgCgBgEQgBgCACgDQACgEAEgBQADgBADACQAEACAAAEQABACgCAEQgCADgEABIgCAAIgEgBg");
	this.shape_116.setTransform(-161.1,33,0.834,0.667);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D18C0B").s().p("AgDAFQgEgEADgEQAEgEAEADQAFAEgEAEQgDACgCAAIgDgBg");
	this.shape_117.setTransform(81.1,67.8,0.834,0.667);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D18C0B").s().p("AgCAGQgGgDADgEQADgGAEACQAGADgCAEQgCAEgEAAIgCAAg");
	this.shape_118.setTransform(77.1,65.9,0.834,0.667);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D18C0B").s().p("AgHAFQgEgGAHgGQAHgEAFAHQAEAGgHAGIgFABQgEAAgDgEg");
	this.shape_119.setTransform(89.3,77.4,0.834,0.667);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D18C0B").s().p("AgBAJQgEgBgCgDQgCgDAAgDQABgEAEgCQADgCADAAQAEABACADQADAEgBADQgBAEgEACQgDACgCAAIgBgBg");
	this.shape_120.setTransform(103.9,34.7,0.834,0.667);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D18C0B").s().p("AAAAOQgGAAgEgEQgEgFAAgFQACgGAEgEQAEgEAFABQAGAAAEAEQAEAFgBAFQAAAFgEAFQgFADgFAAIAAAAg");
	this.shape_121.setTransform(42.1,82.5,0.834,0.667);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D18C0B").s().p("AgHAJQgDgDgBgFQAAgEADgEQADgEAFAAQAEgBAEAEQAEADAAAFQABAEgEADQgDAEgFABIgBAAQgEAAgDgDg");
	this.shape_122.setTransform(15.9,55.1,0.834,0.667);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D18C0B").s().p("AgHANQgFgDgCgGQgBgFADgFQADgGAGgBQAGgCAFADQAFADACAGQABAFgDAFQgDAGgGABIgEABQgDAAgEgCg");
	this.shape_123.setTransform(101.1,52.7,0.834,0.667);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D18C0B").s().p("AgFAHQgCgDgBgDQAAgDADgCQACgDADgBQADAAADACQADADAAADQAAADgDACQgBADgFABIAAAAQgDAAgCgCg");
	this.shape_124.setTransform(117.7,60.2,0.834,0.667);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D18C0B").s().p("AgHAKQgEgDgBgFQAAgFADgEQAEgEAFgBQAEAAAEADQAEAEABAEQAAAFgDAEQgEAEgFABIgBAAQgEAAgDgDg");
	this.shape_125.setTransform(70.4,74.9,0.834,0.667);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CDB120").s().p("AghANQgXgXgKgWQgIgTAGgBQACAAAOAPQASATASAOQASANAbAGQAVAFAVgDQgQAWgfAOQghgPgYgZg");
	this.shape_126.setTransform(169.4,-39.7,0.834,0.667);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F2CE24").s().p("AgVAwQgkgIgngPQgQgFgWgLIgigQQAHgFAPgUIAQgZQAIAbAqAWQAiAQA0AMQA2AMAgAAQAXABAbgDIAZgCIACACQACAEgVAJQgYAKgiAEQgPABgRAAQgmAAgrgKg");
	this.shape_127.setTransform(188.7,-34.7,0.834,0.667);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#563311").s().p("AgtCCQg6gHgggWIAFg1QAAgSAbgLQAbgNADgoQADghAbgQQAagOAfAHQAPAEAIgYQAJgYAOADIAYAHQAQAUAJAIQAOAMAMAAIgQAdQgQAfAFAIQAFAIguA6QgyBAgCAJQgDAJgaAAQgNAAgSgCg");
	this.shape_128.setTransform(-185.5,-23.9,0.834,0.667);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9F7E01").s().p("AguCPQg4gEgrgTQAJhHAAgOQABgRAagMQAbgMAEgpQADghAcgPQAZgPAfAIQAPADAIgYQAIgXAPADQASAEAKAEQAKAEAQADQgCAJAUAKIATAJQgCAGgPAfQgLAWAGAJQAFAJg3BHQg8BMgDAKQgDAKgeAAIgYgBg");
	this.shape_129.setTransform(-184.9,-23,0.834,0.667);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#E6D933","#E6D933","#EACD21","#E7CB1D","#DDC40F","#D3BC01"],[0,0.659,0.792,0.863,0.941,1],212.2,-150.5,0,212.2,-150.5,297.1).s().p("AiNghQg0iSglg3QAPgKASgCQAXAUAgAlIAdAhQAvAYBDATQAqAMBeAWIBJARIAVANQgiABhWgRQhLgPggAJQgwANgLBBQgOBMAiCjQgmhWhEjBg");
	this.shape_130.setTransform(-169.7,-13.1,0.834,0.667);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#C9B201","#D3BC01","#EACD21","#E5C91D","#D8BE10","#C9B201"],[0,0.549,0.792,0.863,0.941,1],161.9,-156,0,161.9,-156,269.4).s().p("AAnA4QhIgWgwgZQg7gdgogiQAOgBAOADQAPADAJgXQAIgYAOADQBgAVBmAPQgbAZAjAvQAYAjA5AsQhtgcghgKg");
	this.shape_131.setTransform(-171.1,-25.9,0.834,0.667);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.rf(["#EACD21","#EACD21","#D5B713","#B99A01"],[0,0.573,0.776,1],239.8,-46.9,0,239.8,-46.9,248.4).s().p("AAXBjQg7hNghgHQgdgHgSAqQgQAngLBdQghh9AEh+QALhvAAgTIABgIQADgLAWgKQAWgKAHgYIADgUIADgWQACgHAJgGQAXArAaBMIAyCWQBJDUBbCaQhjiag0hBg");
	this.shape_132.setTransform(-183.1,-4.9,0.834,0.667);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.rf(["#FCEA75","#FCEA75","#FDE663","#FFE04C","#FEDF47","#FADC3A","#F4D823","#EBD204"],[0,0.659,0.722,0.792,0.835,0.89,0.945,1],-4.6,-183.4,0,-4.6,-183.4,293.8).s().p("Ao9EBQkfhBkfiIQivhUiEhbQhshKAHgHQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAGACB7BCQCXBRCTA/QELByEEA7QE2BFEhgIQIhgYJCkpQCQhKClhhQB0hFAGABQAGAHhsBPQiDBhivBkQjyCIj8BVQlJBvlDAPIg5ABQkBAAkFg7g");
	this.shape_133.setTransform(11.1,9.1,0.834,0.667);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.rf(["#FBE442","#FBE442","#FFD82C","#FFD82B","#FCD626","#F4D019","#E6C603","#E6C602"],[0,0.659,0.788,0.792,0.855,0.925,1,1],0.6,-208.7,0,0.6,-208.7,310.2).s().p("AoBNmQmNhampj2Qofk5junRQhBh+hJjRQg/i1glg4QAPgKARgBQAYATAfAlIAeAiQAuAXBFAUQApALBeAWIANADQCJAfBTAaQCIAqB6A/IAFAFQhDAHg5ArQg5ArgjBFQhPCcBHDBQBTDmETDGQFHDrIvCdQAiAKAnAIQGrBhHtiKQHBh9FnkSQFjkOBokgQBwk5jujSQBRg5B+hfQBwhUAngaQBEAhBCAPQA4ANBGgEQAkgCAYgFIAGArQAGA1ACA5QAEC3gtCTQhLD2jzEAQk4FKndDLQnmDPmkA3QifAViaAAQj+AAj3g4g");
	this.shape_134.setTransform(7.5,25.7,0.834,0.667);

	this.instance_1 = new lib.CompoundPath();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,-26.3,0.834,0.667,0,0,0,216.2,26.1);
	this.instance_1.alpha = 0.5;

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.rf(["#FFD82B","#E7C018","#CAA201"],[0.573,0.78,1],14.6,-101.9,0,14.6,-101.9,248.4).s().p("AssNNIgEgBQmohglQjFIgMgHQpkltibnFQgziSABiVQABguAFgzIAGg2IABgIQADgLAWgKQAWgKAHgYQACgHABgNIADgWQACgHAJgGQAYAtBDDIQBCDDBJCJQDyHDImE+QGkDyGKBaQGIBYHjhDQHShBGNi6QHrjlEmk/QDrj+A3jwQAiiVAEg3QAIhUgPi9IAPgFQAQgFAIgGIAICoQADC5gYBXQhED/jNDxQkLE9nYEAQnRD8pRBDQjIAXjEAAQlzAAlohRg");
	this.shape_135.setTransform(3,29.9,0.834,0.667);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.rf(["#E7CA03","#FFDB3D","#FCD938","#F4D32B","#E7C815","#DCC003"],[0.549,0.792,0.843,0.902,0.961,1],-32.3,-182.5,0,-32.3,-182.5,281.4).s().p("AmRGwQmAhVnfkQQjMhykBhGQh+ghg3gPQhdgag4gdQg7gegogiQAOgBAOADQAPADAJgXQAIgYAOADQBnAXBxAPICqAVQCzAbC9BkQHpEEFnBVQFXBSGLgpQJtg/IwlHQAygdEyjFQCkhqBNgNQArBIBLARQmoFJkzCpQoxE3oPAvQiNAMiCAAQj9AAjWgvg");
	this.shape_136.setTransform(-6.4,-11.2,0.834,0.667);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.rf(["#FBE65E","#FEDF48","#FFDB3D","#FDDA38","#F8D62B","#EECF15","#E7CA03"],[0.659,0.753,0.792,0.843,0.902,0.961,1],0.8,-208.6,0,0.8,-208.6,308.1).s().p("AhjOcQpJgepvlnQofk6junRQhBh9hIjSQhAi1glg4QAPgKARgBQAYATAfAlIAeAiQA4AcBfAYQA4APCAAcQEIBADMBzQHlETF4BZQFKBNGWgkQJNg0JQlaQC/hwDZifIENjGQBsA0BdAGQAvADAZgHIAFCgQgCC6ggB6QhFEAjdD8QklFQnaDKQqaEboyAAQg1AAg2gCg");
	this.shape_137.setTransform(5.1,25.7,0.834,0.667);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#D4C002","#D7C209","#E2CA1E","#E8CE2B","#EAD02F","#EAD02F","#D4A501","#B9C01C"],[0,0.02,0.102,0.184,0.259,0.639,0.906,1],-19.8,3.9,470.5,-87.2).s().p("AhZCQQg8hNghgHQgagGgQAgQgQAegLBIQgfh6AFh6QAKhsABgTQAAgRAbgMQAbgNAEgpQADghAbgQQAZgOAgAHQAPAEAJgYQAIgXAOADQBfAVBnAOQgpAmBeBVQAvArA4AjQgdABhpgUQhQgQghAUQguAcADBqQAEB7BED3Qhiiag0hBg");
	this.shape_138.setTransform(-173.7,-7.9,0.834,0.667);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#E7CA03","#EFD017","#F8D62C","#FDDA39","#FFDB3D","#FFDB3D","#FFBA01","#C3CA24"],[0,0.051,0.122,0.192,0.259,0.639,0.906,1],-241.1,-65.8,208.4,21.2).s().p("AkaXmQmSgGl1hgQl+hikwi1QpjlticnGQgyiSABiVQAAgtAGgzIAGg2QAAgRAbgMQAbgNAEgpQADghAbgQQAZgOAgAHQAPAEAIgYQAJgXAOADQBnAXBxAOICpAVQC0AbC9BlQHpEDFnBWQFXBRGMgoQH2g0HBjYQCGhAClhmIEgi4ICIhVQBhg9BFg4QDLijAuipQAviGgViAQgQhfgkgoQgwgqgOgVQgagnBHgHQARgBARAIQAWALAKACQAmAFANgTQAcgoALgJQAhgZA2ANQBRAUAJAAQAVgBBJguQBAgoAYARQAVAPgLAuQgHAhgRAeQgNBAgsBYQhBCBgTAwQhyEZgdH1QAIBsgCBOQgCBogVBPQhFD/jMDyQkLE9nZEAQlCCvmKBXQlkBQl3AAIg1gBg");
	this.shape_139.setTransform(15.9,-9.2,0.834,0.667);

	this.instance_2 = new lib.shadow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-65.4,88.2,0.834,0.667,0,0,0,0.7,1);
	this.instance_2.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.instance_1},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.8,-111.4,459.7,222.8);


(lib.Strawberry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({startPosition:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.7,-147.2,331.5,294.6);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_13();
	this.instance.parent = this;
	this.instance.setTransform(14.7,28.2,1,1,0,0,0,14.7,28.2);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Group_1_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,29,1,1,0,0,0,14.5,28.2);
	this.instance_1.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,29.3,57.3), null);


(lib.Group_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(29,31.1,1,1,0,0,0,29,30.8);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Group_1_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.3,30.7,1,1,0,0,0,28.5,30.7);
	this.instance_1.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_1, new cjs.Rectangle(0.1,0,57.9,61.8), null);


(lib.Group_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(66,36.8,1,1,0,0,0,65.3,36.5);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.2,36.5,1,1,0,0,0,65.2,36.5);
	this.instance_1.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_1, new cjs.Rectangle(0,0.1,131.4,73.3), null);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(31.9,31.7,1,1,0,0,0,31.9,31.7);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.4,32.2,1,1,0,0,0,27.6,31.7);
	this.instance_1.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,63.7,63.8), null);


(lib.Group_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_9();
	this.instance.parent = this;
	this.instance.setTransform(26.5,8.2,1,1,0,0,0,25.8,7.9);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Group_1_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.7,8,1,1,0,0,0,25.7,8);
	this.instance_1.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,52.3,16), null);


(lib.Group_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_5();
	this.instance.parent = this;
	this.instance.setTransform(32,25.8,1,1,0,0,0,32,25.8);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.6,25.6,1,1,0,0,0,31.6,25.6);
	this.instance_1.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(0,0,64.1,51.6), null);


(lib.Group_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_10();
	this.instance.parent = this;
	this.instance.setTransform(24.4,27.1,1,1,0,0,0,24.4,23.7);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Group_1_8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.5,25.4,1,1,0,0,0,24.4,25.4);
	this.instance_1.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_7, new cjs.Rectangle(0,0,48.9,50.8), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_6();
	this.instance.parent = this;
	this.instance.setTransform(30.1,33.6,1,1,0,0,0,30.1,33.6);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Group_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.6,33.5,1,1,0,0,0,29.9,33.5);
	this.instance_1.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0.1,0,60.6,67.3), null);


(lib.Group_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EF4932").s().p("AgCADIgDgDQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQACgDAFADQAFACgDACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape_21.setTransform(64,138);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EF4932").s().p("AgCADQgFgDADgCQADgDAEADQAFACgDADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgBg");
	this.shape_22.setTransform(48.8,139.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EF4932").s().p("AgCACQgEgCACgCQADgCADADQAGABgDADIgDABIgEgCg");
	this.shape_23.setTransform(51.8,134.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EF4932").s().p("AgBADQgFgDACgCQACgDAEADQAFACgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_24.setTransform(115,105.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EF4932").s().p("AgBADQgFgDACgCQACgCAEADQAFACgDACIgCABIgDgBg");
	this.shape_25.setTransform(127,103.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EF4932").s().p("AgBACQgEgCABgCQACgCAEADQAFACgCACIgCABIgEgCg");
	this.shape_26.setTransform(136.3,91.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EF4932").s().p("AgBACQgFgCACgCQACgCADADQAFABgBADIgCABIgEgCg");
	this.shape_27.setTransform(127,90.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF4932").s().p("AgBACQgFgCACgCQACgCAEADQAFACgCACIgDABIgDgCg");
	this.shape_28.setTransform(124.9,82.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EF4932").s().p("AgBACQgEgCABgCQACgCAEADQAFACgCACIgCABIgEgCg");
	this.shape_29.setTransform(120.7,91.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EF4932").s().p("AgBACQgEgCABgCQACgCAEADQAEABgBADIgDABIgDgCg");
	this.shape_30.setTransform(125.5,108.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EF4932").s().p("AAAACQgFgCABgCQACgCAEADQAFACgCACIgCABIgDgCg");
	this.shape_31.setTransform(129.2,101.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF4932").s().p("AgBADQgFgDACgCQACgDAEADQAFACgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_32.setTransform(112.3,88.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EF4932").s().p("AgBADQgEgDABgCQACgDAEADQAFACgCADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_33.setTransform(139.5,96.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EF4932").s().p("AgBACQgEgCABgCQACgDAEADQAFACgDADIgCABIgDgCg");
	this.shape_34.setTransform(130.7,93.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EF4932").s().p("AgBADQgFgDACgCQACgDAEADQAFACgCADIgDABIgDgBg");
	this.shape_35.setTransform(123.7,100.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EF4932").s().p("AAAADQgFgBAAgDQABgDAFACQAGACgBACQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape_36.setTransform(101.1,92.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EF4932").s().p("AAAADQgFgBAAgDQABgCAFABQAGACgBACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgDgBg");
	this.shape_37.setTransform(112,88.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EF4932").s().p("AAAACQgFgCAAgBQABgCAEACQAGABgBACQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgEgBg");
	this.shape_38.setTransform(112.7,93.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EF4932").s().p("AAAACQgGgCABgBQABgCAFABQAFACAAABQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_39.setTransform(113.1,86.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EF4932").s().p("AAAADQgGgCABgCQABgDAFACQAFABAAADQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape_40.setTransform(107.4,86.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EF4932").s().p("AAAADQgFgBABgDQAAgDAFACQAGABgBADQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDAAg");
	this.shape_41.setTransform(66.9,89.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EF4932").s().p("AAAADQgFgCABgBQAAgEAFACQAGACgBACQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_42.setTransform(77.7,85.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EF4932").s().p("AAAADQgGgCABgCQABgCAFACQAFABAAACQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_43.setTransform(78.4,90.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EF4932").s().p("AAAACQgFgBAAgCQABgCAFACQAFABAAACQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_44.setTransform(78.9,82.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EF4932").s().p("AAAADQgGgCABgCQABgDAFACIAEACQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_45.setTransform(73.2,82.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EF4932").s().p("AgBAEQgDgCABgDQADgEACACQAEACgDACQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBAAIgBAAg");
	this.shape_46.setTransform(30.8,120.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EF4932").s().p("AgBAEQgDgBABgEQADgDACABQAEACgDADQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_47.setTransform(22.2,105);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EF4932").s().p("AAAADQgFgBABgDQABgCAEABQAGABgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgCAAg");
	this.shape_48.setTransform(88.1,89.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EF4932").s().p("AAAADQgFgCABgBQABgEAEACQAGACgBACQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_49.setTransform(98.9,85.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EF4932").s().p("AAAADQgFgCAAgCQABgCAFACQAFABAAACQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_50.setTransform(99.6,90.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EF4932").s().p("AAAACQgFgBAAgCQABgCAFABQAGACgBACQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_51.setTransform(100.1,83);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EF4932").s().p("AAAADQgFgBAAgDQABgDAFACIAEACQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgDgBg");
	this.shape_52.setTransform(94.4,83.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EF4932").s().p("AgEACQgCgDAEgCQAEgBADAEQACADgFABIgCABQgBAAgDgDg");
	this.shape_53.setTransform(102.4,118.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EF4932").s().p("AgDABQgDgDAEgBQADgCAEAEQACADgEACIgCABQgDAAgBgEg");
	this.shape_54.setTransform(108.8,108.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EF4932").s().p("AgCABQgDgDAEgBQADgBACAEQACADgDABIgCAAQgCAAgBgDg");
	this.shape_55.setTransform(130.3,102);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EF4932").s().p("AgDABQgCgDADgBQADgBADAEQACADgEABIgBAAQgBAAgDgDg");
	this.shape_56.setTransform(128.4,109.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EF4932").s().p("AgDABQgCgDADgBQAEgBABAEQADADgEABIgBAAQgCAAgCgDg");
	this.shape_57.setTransform(139.6,112.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EF4932").s().p("AgDABQgDgDAFgBQACgBADAEQACADgEABIgBAAQgBAAgDgDg");
	this.shape_58.setTransform(124.1,115);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EF4932").s().p("AgDABQgCgDADgBQAEgBABAEQADADgEABIgBAAQgCAAgCgDg");
	this.shape_59.setTransform(101,109.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EF4932").s().p("AgDABQgCgDADgBQADgBACAEQADADgEABIgCABQgBAAgCgEg");
	this.shape_60.setTransform(113,106.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EF4932").s().p("AgEABQgCgCAFgCQAEgBABAEQADADgFABIgBABQgCAAgDgEg");
	this.shape_61.setTransform(125.5,122.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EF4932").s().p("AgEACQgCgEAEgBQAEgBACAEQADADgFABIgCABQgCAAgCgDg");
	this.shape_62.setTransform(124.1,98.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EF4932").s().p("AAAAEIgEgDQgCgCAFgCQADgBACAEQADADgFABIgBABIgBgBg");
	this.shape_63.setTransform(125,106.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EF4932").s().p("AgEABQgCgDAEgBQAEgCADAFQACADgFABIgBABQgDAAgCgEg");
	this.shape_64.setTransform(112.5,111.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EF4932").s().p("AgEADQgEgDAFgDQAEgCAEADQAEADgFADIgEABQgCAAgCgCg");
	this.shape_65.setTransform(71.7,139.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EF4932").s().p("AgEADQgDgDAEgDQAEgCAEADQADADgEADIgEABQgCAAgCgCg");
	this.shape_66.setTransform(76.8,127.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQADgCAEAEQAEADgEACIgEAAQgBAAgCgCg");
	this.shape_67.setTransform(100.4,114.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQAEgCADAEQAEACgEADIgDAAQgCAAgCgCg");
	this.shape_68.setTransform(100.1,122.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EF4932").s().p("AgDADQgEgEAEgBQADgDAEADQAEAEgEACIgEABQAAAAAAgBQAAAAgBAAQgBAAAAgBQgBAAAAAAg");
	this.shape_69.setTransform(113.8,122.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQADgCAEAEQAEACgEADIgDAAQgCAAgCgCg");
	this.shape_70.setTransform(96.3,129.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQAEgCADAEQAEACgEADIgDAAQgCAAgCgCg");
	this.shape_71.setTransform(67.8,130.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQADgCAEAEQAEACgEADIgDABQgBAAgDgDg");
	this.shape_72.setTransform(81.3,124.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EF4932").s().p("AgEADQgEgDAFgCQAEgEAEAEQAEADgFADIgEABQgCAAgCgCg");
	this.shape_73.setTransform(99.8,136.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EF4932").s().p("AgEADQgEgDAFgDQAEgCAEADQAEADgFADIgEABQgCAAgCgCg");
	this.shape_74.setTransform(92.2,112.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EF4932").s().p("AgEADQgEgDAFgDQAEgCAEADQAEADgFADIgEABQgCAAgCgCg");
	this.shape_75.setTransform(95.2,120.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EF4932").s().p("AgEADQgEgDAFgDQAEgCAEADQAEADgFADIgEABQgCAAgCgCg");
	this.shape_76.setTransform(81.9,129.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EF4932").s().p("AgEADQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAFgCADADQADACgEAEIgEABQgCAAgCgCg");
	this.shape_77.setTransform(33.5,107.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EF4932").s().p("AgEADQgDgDAEgDQAEgCAEADQAEADgFADIgEABQgCAAgCgCg");
	this.shape_78.setTransform(38.6,95.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQADgCAEAEQAEACgEADIgDAAQgCAAgCgCg");
	this.shape_79.setTransform(62.2,82.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQADgCAEAEQAEACgEADIgDAAQgCAAgCgCg");
	this.shape_80.setTransform(61.9,91.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EF4932").s().p("AgDADQgEgEAEgCQADgCAEADQAEAEgEACIgDABQgCAAgCgCg");
	this.shape_81.setTransform(75.6,90.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQADgCAEAEQAEACgEADIgDAAQgCAAgCgCg");
	this.shape_82.setTransform(58,97.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQADgCAEAEQAEACgEADIgDAAQgCAAgCgCg");
	this.shape_83.setTransform(29.6,98.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EF4932").s().p("AgDACQgEgCAEgDQADgCAEAEQAEACgEADIgDAAQgCAAgCgCg");
	this.shape_84.setTransform(43,92.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EF4932").s().p("AgEADQgEgDAFgCQAEgEAEAEQAEADgFADIgEABQgCAAgCgCg");
	this.shape_85.setTransform(61.5,105);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EF4932").s().p("AgEADQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAFgCADADQADACgEAEIgEABQgCAAgCgCg");
	this.shape_86.setTransform(56.9,88.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EF4932").s().p("AgEADQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAFgCADADQAEADgFADIgEABQgCAAgCgCg");
	this.shape_87.setTransform(43.7,97.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EF4932").s().p("AgCAEQgFgEADgDQADgEAEAEQAFADgDAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_88.setTransform(50.5,78.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EF4932").s().p("AgCAEQgFgEADgDQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAFADgDAEQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgCAAgCgCg");
	this.shape_89.setTransform(35.4,80.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EF4932").s().p("AgCADIgDgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgDAFAEQAGADgDADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgCAAgCgCg");
	this.shape_90.setTransform(38.4,73.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EF4932").s().p("AgBAEQgEgEABgDQADgEADAEQAFADgCAEQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgDgCg");
	this.shape_91.setTransform(101.5,32.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EF4932").s().p("AgBAEQgFgEACgDQACgDAEADQAFADgCAEQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIgDgCg");
	this.shape_92.setTransform(113.6,30.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EF4932").s().p("AgBADQgEgDACgDQAAgDAFAEQAEACgCAEIgBABIgEgCg");
	this.shape_93.setTransform(122.9,13.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EF4932").s().p("AAAADQgFgDABgDQACgDAEAEQAFADgCADQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgDgCg");
	this.shape_94.setTransform(113.6,11.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EF4932").s().p("AAAADQgFgDABgDQACgDADAEQAFACgCAEIgBABIgDgCg");
	this.shape_95.setTransform(111.5,0.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EF4932").s().p("AgBADQgEgEABgCIADgBIACACQAFADgCACQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgEgCg");
	this.shape_96.setTransform(107.3,13.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EF4932").s().p("AAAADQgFgDACgDQABgDADAEQAFACgBAEIgCABIgDgCg");
	this.shape_97.setTransform(112.1,37.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EF4932").s().p("AgBADQgEgDABgDQACgDADAEQAFACgBAEIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_98.setTransform(115.8,27.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EF4932").s().p("AgBADQgFgDACgDQADgEADAEQAFADgCAEQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBg");
	this.shape_99.setTransform(98.9,9.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EF4932").s().p("AgBAEQgFgEACgDQADgEADAEQAFADgCAEQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgDgCg");
	this.shape_100.setTransform(126,20.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EF4932").s().p("AgBAEQgFgEACgDQACgEAEAFQAFADgCADQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQgCAAgBgCg");
	this.shape_101.setTransform(117.3,16.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EF4932").s().p("AgBAEQgFgEACgDQACgDAEADQAFADgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAIgDgCg");
	this.shape_102.setTransform(110.2,25.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EF4932").s().p("AAAAEQgGgBABgFQABgEAFADQAFACgBAEQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_103.setTransform(87.7,15.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EF4932").s().p("AAAAEQgGgBABgEQABgEAFACQAFACgBADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgBAAIgCgBg");
	this.shape_104.setTransform(98.6,9.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EF4932").s().p("AAAAEQgFgDAAgCQABgEAFADQAGACgBACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_105.setTransform(99.2,16.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EF4932").s().p("AAAADQgFgCAAgCQABgEAFACQAGADgBACQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_106.setTransform(99.7,6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EF4932").s().p("AAAAEQgFgCABgEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIADABQAGABgBAEQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgDgBg");
	this.shape_107.setTransform(94,6.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EF4932").s().p("AAAAEQgGgDABgCQABgEAFACQAFACAAADQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgCgBg");
	this.shape_108.setTransform(53.5,10.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EF4932").s().p("AAAAEQgGgCABgDQABgFAFADQAFACAAAEQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_109.setTransform(64.3,4.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EF4932").s().p("AAAAEQgGgDABgCQAAgDAGACQAFACgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDAAg");
	this.shape_110.setTransform(65,11.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EF4932").s().p("AAAADQgGgBABgDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEABQAFACgBACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgEgBg");
	this.shape_111.setTransform(65.5,1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EF4932").s().p("AAAAEQgFgCABgDQABgEAEACQAGACgBADQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCgBg");
	this.shape_112.setTransform(59.7,1.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EF4932").s().p("AgBAFQgEgCACgFQADgFACACQAEACgDAFQgBAEgCAAIgBgBg");
	this.shape_113.setTransform(17.4,53.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EF4932").s().p("AgBAFQgEgCADgEQACgGACACQAEADgCAEQgCAEgCAAIgBgBg");
	this.shape_114.setTransform(8.7,32.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EF4932").s().p("AAAAEQgGgDABgCQABgFAFADQAFACAAADQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgCgBg");
	this.shape_115.setTransform(74.7,11);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EF4932").s().p("AAAAEQgGgCABgEQABgEAFADQAFABAAAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_116.setTransform(85.5,5.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EF4932").s().p("AAAAEQgFgDABgCQAAgDAEACQAHACgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDAAg");
	this.shape_117.setTransform(86.2,12.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EF4932").s().p("AAAADQgFgCABgCQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIACABQAHACgBACQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgEgBg");
	this.shape_118.setTransform(86.7,1.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EF4932").s().p("AAAAEQgGgCABgDQABgFAFADQAFACgBADQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_119.setTransform(81,2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EF4932").s().p("AgEACQgCgFAFgCQADgCADAGQACAEgEADIgDAAQgCAAgCgEg");
	this.shape_120.setTransform(88.9,51.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EF4932").s().p("AgEACQgCgEAFgDIACAAQABABABAAQAAABAAAAQABAAAAABQAAAAAAABQADAFgFACIgCAAQgCAAgCgEg");
	this.shape_121.setTransform(95.4,37.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EF4932").s().p("AgDABQgDgEAFgCQACgBADAFQACAFgEACIgBAAQgCAAgCgFg");
	this.shape_122.setTransform(116.9,28.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EF4932").s().p("AgDACQgCgGADgBQADgCACAGQADAGgEABIgBAAQgCAAgCgEg");
	this.shape_123.setTransform(115,39.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EF4932").s().p("AgDABQgDgEAEgCQADgBADAFQACAFgEACIgBAAQgCAAgCgFg");
	this.shape_124.setTransform(126.2,42.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EF4932").s().p("AgDABQgCgFADgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQADAFgEACIgBAAQgCAAgCgFg");
	this.shape_125.setTransform(110.7,46.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EF4932").s().p("AgCABQgDgEAEgCQADgBACAFQACAFgDACIgCAAQgCAAgBgFg");
	this.shape_126.setTransform(87.5,38.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EF4932").s().p("AAAAFIgCgDQgDgGAEgBQADgBACAFQACAGgDABIgCAAIgBgBg");
	this.shape_127.setTransform(99.5,34.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EF4932").s().p("AgEACQgDgFAGgCQADgCADAGQACAFgFACIgCAAQgCAAgCgEg");
	this.shape_128.setTransform(112.1,56.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EF4932").s().p("AgDACQgDgFAEgCQAEgCADAGQACAFgEACIgDAAQgCAAgBgEg");
	this.shape_129.setTransform(110.6,23.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EF4932").s().p("AgDACQgDgFAEgCQABAAAAAAQABAAAAAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQACAFgEACIgDAAQgBAAgCgEg");
	this.shape_130.setTransform(111.5,34.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EF4932").s().p("AgEACQgCgFAEgCQADgCADAGQADAFgFACIgCAAQgCAAgCgEg");
	this.shape_131.setTransform(99.1,41.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EF4932").s().p("AgEAEQgEgFAFgDQAEgEAEAFQAEAEgFAEQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgCAAgCgDg");
	this.shape_132.setTransform(58.3,80.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EF4932").s().p("AgEAEQgEgEAFgEQAEgEAEAFQAEAEgFAEIgEACQgCAAgCgDg");
	this.shape_133.setTransform(63.4,63.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EF4932").s().p("AgDADQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAAAAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAEAEgEADIgDABQgCAAgCgDg");
	this.shape_134.setTransform(87,44.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EF4932").s().p("AgDADQgEgEAEgDQAEgDADAFQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgDABQgCAAgCgDg");
	this.shape_135.setTransform(86.7,57.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EF4932").s().p("AgDADQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAEAFgEADIgDABQgCAAgCgDg");
	this.shape_136.setTransform(100.4,56.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EF4932").s().p("AgDADQgEgEAEgDQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAEAEgEADIgDABQgCAAgCgDg");
	this.shape_137.setTransform(82.8,66.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EF4932").s().p("AgDADQgEgEAEgDQADgDAEAFQAEAEgEADIgEABQgBAAgCgDg");
	this.shape_138.setTransform(54.4,67.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EF4932").s().p("AgDADQgEgEAEgDQADgDAEAFQAEAEgEADIgDABQgCAAgCgDg");
	this.shape_139.setTransform(67.8,59.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EF4932").s().p("AgEAEQgEgFAFgDQAEgEAEAFQAEAEgFAEQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgDgDg");
	this.shape_140.setTransform(86.3,76.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EF4932").s().p("AgEAEQgDgFAEgDQAFgEADAFQADAEgEAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgCAAgCgDg");
	this.shape_141.setTransform(78.8,43);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EF4932").s().p("AgEAEQgDgEAEgEQAEgEAEAFQADAEgEAEIgEACQgCAAgCgDg");
	this.shape_142.setTransform(81.8,53.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EF4932").s().p("AgEAEQgEgEAFgEQAFgEADAFQAEAEgFAEQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgCAAgCgDg");
	this.shape_143.setTransform(68.5,66.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EF4932").s().p("AgEAEQgEgEAFgEQAEgEAEAFQAEAEgFAEIgEACQgCAAgCgDg");
	this.shape_144.setTransform(20.1,36.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EF4932").s().p("AgEAEQgEgEAFgEQAEgEAEAFQAEAFgFADIgEACQgCAAgCgDg");
	this.shape_145.setTransform(25.1,19.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EF4932").s().p("AgDADQgEgDAEgEQAEgDADAFQAEAEgEADIgDABQgCAAgCgDg");
	this.shape_146.setTransform(48.8,0.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EF4932").s().p("AAAAGQAAAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBQgEgEAEgDQADgDAEAFQAEAEgEADIgDABIgBAAg");
	this.shape_147.setTransform(48.4,13);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EF4932").s().p("AgDADQgEgEAEgDQAEgDADAFQAEAEgEADIgDABQgCAAgCgDg");
	this.shape_148.setTransform(62.2,12.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EF4932").s().p("AgDADQgEgEAEgDQADgDAEAFQAEAEgEADIgDABQgCAAgCgDg");
	this.shape_149.setTransform(44.6,22.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EF4932").s().p("AgDADQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQADgDAEAFQAEAEgEADIgDABQgCAAgCgDg");
	this.shape_150.setTransform(16.1,23.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EF4932").s().p("AgDADQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAEgEADAGQAEAEgEADIgDABQgCAAgCgDg");
	this.shape_151.setTransform(29.6,15.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EF4932").s().p("AgEADQgEgDAFgFQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQADABABACQAEADgFAFIgEACQgCAAgCgEg");
	this.shape_152.setTransform(48.1,32.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EF4932").s().p("AgEAEQgEgEAFgEQAEgEAEAFQAEAFgFADIgEACQgCAAgCgDg");
	this.shape_153.setTransform(43.5,9.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EF4932").s().p("AgEAEQgEgEAFgEQAEgEAEAFQAEAEgFAEIgEACQgCAAgCgDg");
	this.shape_154.setTransform(30.3,22.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EF4932").s().p("AgEABQgCgEAFgCQAFgBABAGQACAFgFABIgCABQgCAAgCgGg");
	this.shape_155.setTransform(139.9,38.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EF4932").s().p("AgEACQgCgGAFgBQAEgBACAFQACAGgFABIgCAAQgCAAgCgEg");
	this.shape_156.setTransform(153.5,45.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EF4932").s().p("AgDABQgCgFAEgBQADgCACAHQACAFgFABIgBAAQgCAAgBgFg");
	this.shape_157.setTransform(146.7,49.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EF4932").s().p("AgDACQgCgGAFgBQADgBABAFQACAFgFACIgBAAQgCAAgBgEg");
	this.shape_158.setTransform(71.7,43.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EF4932").s().p("AgDACQgBgGAEgBQADgCABAGQACAFgFACIgBAAQgBAAgCgEg");
	this.shape_159.setTransform(60.9,37.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EF4932").s().p("AgCABQgCgEAEgCQACgBABAFQACAFgDACIgCAAQgBAAgBgFg");
	this.shape_160.setTransform(42.9,45.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EF4932").s().p("AgCACQgCgGADgBQADgCABAHQACAEgDACIgCAAQgBAAgBgEg");
	this.shape_161.setTransform(49.5,52.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EF4932").s().p("AgCABQgBgFADgBQABgBACAFQABAFgDACIgBAAQgBAAgBgFg");
	this.shape_162.setTransform(44.3,62.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EF4932").s().p("AgCACQgBgGADgBQABgCACAHQABAFgDABIgBAAQgBAAgBgEg");
	this.shape_163.setTransform(55.7,54.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EF4932").s().p("AgCACQgCgGAEgBQACgCABAHQACAEgEACIgBAAQgBAAgBgEg");
	this.shape_164.setTransform(66.3,32.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EF4932").s().p("AgCACQgBgGADgBQABgCACAHQABAFgDABIgBAAQgBAAgBgEg");
	this.shape_165.setTransform(57.2,38.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EF4932").s().p("AgDACQgCgFAFgCQADgCABAGQABAFgEACIgBAAQgCAAgBgEg");
	this.shape_166.setTransform(59.9,62.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EF4932").s().p("AgDACQgBgFAEgCQADgBABAFQACAFgFACIgBAAQgCAAgBgEg");
	this.shape_167.setTransform(44.7,38.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EF4932").s().p("AgDACQgBgFAEgCQADgCABAHQACAFgFABIgBAAQgBAAgCgEg");
	this.shape_168.setTransform(49.3,46.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EF4932").s().p("AgDACQgBgFAEgCQACgBACAFQABAGgEABIgBAAQgCAAgBgEg");
	this.shape_169.setTransform(60.7,43.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAEgDADIgCABQgBAAgCgDg");
	this.shape_170.setTransform(72.1,65.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EF4932").s().p("AAAAGQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgEgEAEgDQACgDADAFQADAFgDACIgCABIgBAAg");
	this.shape_171.setTransform(60.1,63.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EF4932").s().p("AgCACQgDgFADgBQACgDADAGQACAEgCACIgCABQgBAAgCgEg");
	this.shape_172.setTransform(45.4,76.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EF4932").s().p("AgCACQgCgDACgDQACgCADAFQACAEgCACIgBABQgCAAgCgEg");
	this.shape_173.setTransform(53.6,80.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EF4932").s().p("AgCACQgDgEADgCQACgCACAFQAEAEgDACIgCABQgBAAgCgEg");
	this.shape_174.setTransform(51.7,92);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#EF4932").s().p("AgBACQgEgEADgCQACgDACAGQADAFgCABIgCABQgBAAgBgEg");
	this.shape_175.setTransform(60.3,80.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EF4932").s().p("AgBACQgEgEADgCQACgDADAGQADAEgDACIgCABQgBAAgBgEg");
	this.shape_176.setTransform(63.9,57.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EF4932").s().p("AgBACQgEgEADgCQACgDADAGQADAEgDACIgCABQgBAAgBgEg");
	this.shape_177.setTransform(56.9,65.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_178.setTransform(66.7,87.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#EF4932").s().p("AgCADQgDgEADgDQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_179.setTransform(44.8,68.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EF4932").s().p("AgCADQgEgFAEgCQACgDADAFQAEAEgEADIgCABQgBAAgCgDg");
	this.shape_180.setTransform(51.8,75.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAEgDADIgCABQgBAAgCgDg");
	this.shape_181.setTransform(61.6,68.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAEgDADIgCABQgBAAgCgDg");
	this.shape_182.setTransform(96.2,90.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_183.setTransform(84.2,88);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EF4932").s().p("AgBACQgDgFACgBQACgDACAGQAEAEgDACIgCABQgBAAgBgEg");
	this.shape_184.setTransform(69.5,101.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EF4932").s().p("AgCACQgDgFADgBQACgDADAGQADADgDADIgBABQgCAAgCgEg");
	this.shape_185.setTransform(77.7,105.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EF4932").s().p("AgCACQgCgEACgCQACgDACAGQADAFgCABIgCABQgBAAgCgEg");
	this.shape_186.setTransform(75.8,116.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EF4932").s().p("AgCACQgCgEACgCQACgDADAGQACADgCADIgBABQgCAAgCgEg");
	this.shape_187.setTransform(84.3,105.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EF4932").s().p("AgBADQgEgEADgDQACgCADAFQADAFgDABIgCABQgBAAgBgDg");
	this.shape_188.setTransform(88,82);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EF4932").s().p("AgCADQgCgEACgDQACgCADAFQACAEgCACIgBABQgCAAgCgDg");
	this.shape_189.setTransform(81,90.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAEgDADIgCABQgBAAgCgDg");
	this.shape_190.setTransform(90.8,112.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_191.setTransform(68.9,93.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EF4932").s().p("AgCADQgDgEADgDQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_192.setTransform(75.8,100);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#EF4932").s().p("AgCADQgDgEADgDQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_193.setTransform(85.7,93.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EF4932").s().p("AgEADQgCgDAFgDQAEgDACAEQABADgFADIgDABQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_194.setTransform(151.2,77.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#EF4932").s().p("AgEADQgBgDAFgDQAEgDABAEQACADgFADIgDABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_195.setTransform(145,100.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_196.setTransform(79.8,76.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#EF4932").s().p("AgCADQgDgEADgEQACgCADAFQADAEgDADIgCABQgBAAgCgDg");
	this.shape_197.setTransform(67.8,74.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EF4932").s().p("AgCACQgDgFADgBQACgDADAGQACADgCADIgBABQgCAAgCgEg");
	this.shape_198.setTransform(53.1,87.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EF4932").s().p("AgBACQgDgEACgCQACgCACAFQAEAFgDABIgCABQgBAAgBgEg");
	this.shape_199.setTransform(61.4,92);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgCACAFQAEAEgDACIgBABQgCAAgCgDg");
	this.shape_200.setTransform(59.4,103.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EF4932").s().p("AgCACQgDgEADgCQACgCADAFQADAFgDABIgCABQgBAAgCgEg");
	this.shape_201.setTransform(68,92.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#EF4932").s().p("AgCACQgDgFADgBQACgDACAGQAEADgDADIgBABQgCAAgCgEg");
	this.shape_202.setTransform(71.6,68.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EF4932").s().p("AgBACQgEgEADgCQACgDADAGQADAEgDACIgCABQgBAAgBgEg");
	this.shape_203.setTransform(64.6,76.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EF4932").s().p("AgCADQgDgFADgCQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_204.setTransform(74.4,99.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EF4932").s().p("AgCADQgDgEADgDQACgDADAFQADAFgDACIgCABQgBAAgCgDg");
	this.shape_205.setTransform(52.5,79.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EF4932").s().p("AgCADQgDgEADgDQACgDADAFQAEAEgEADIgCABQgBAAgCgDg");
	this.shape_206.setTransform(59.5,86.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EF4932").s().p("AgCADQgDgEADgDQACgDADAFQADAFgDADIgCAAQgBAAgCgDg");
	this.shape_207.setTransform(69.3,80);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EF4932").s().p("AgBAGQgFgCACgEQACgHAEACQAFABgCAFQgCAGgDAAIgBgBg");
	this.shape_208.setTransform(93,36.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EF4932").s().p("AAAAGQgFgBABgFQACgGAEABQAEABgBAFQgBAFgEAAIAAAAg");
	this.shape_209.setTransform(79.4,43.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EF4932").s().p("AAAAGQgEgBABgFQACgGACABQAFABgCAFQgBAFgDAAIAAAAg");
	this.shape_210.setTransform(56.8,37.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EF4932").s().p("AgBAGIgCgCIAAgEQACgGADABQAEABgCAFQgBAFgDAAIgBAAg");
	this.shape_211.setTransform(65,29.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EF4932").s().p("AgBAGQgEgBACgFQACgHACACQAFABgCAFQgBAFgDAAIgBAAg");
	this.shape_212.setTransform(58.4,20.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EF4932").s().p("AgBAGQgDgBABgFQACgGADABQADABgBAFQgBAFgDAAIgBAAg");
	this.shape_213.setTransform(72.8,26.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EF4932").s().p("AgBAGQgEgBACgFQABgGAEABQAEABgCAFQgCAFgCAAIgBAAg");
	this.shape_214.setTransform(86.2,47.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EF4932").s().p("AgBAGQgEgBACgFQACgGADABQADABgBAFQgCAFgCAAIgBAAg");
	this.shape_215.setTransform(74.7,42.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EF4932").s().p("AgBAGQgFgBACgFQACgGAEABQAFABgCAGQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABIgCAAIgBAAg");
	this.shape_216.setTransform(78,17.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EF4932").s().p("AgBAGQgFgBACgFQACgGAEABQAFABgCAFQgCAFgDAAIgBAAg");
	this.shape_217.setTransform(59,44.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#EF4932").s().p("AgBAGQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgDQACgHAEACQAFABgCAFQgBAFgEAAIgBAAg");
	this.shape_218.setTransform(64.8,35.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EF4932").s().p("AgBAGQgFgCACgEQACgHAEACQAFABgCAFQgCAGgDAAIgBgBg");
	this.shape_219.setTransform(79.1,37.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EF4932").s().p("AgFAAQAAgGAFABQAHgBgBAGQABAGgHAAQgFAAAAgGg");
	this.shape_220.setTransform(135.1,31.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EF4932").s().p("AgFAAQAAgFAFgBQAHABgBAFQABAHgHAAQgFAAAAgHg");
	this.shape_221.setTransform(120.7,42.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EF4932").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_222.setTransform(90.8,42.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EF4932").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_223.setTransform(98.5,32.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EF4932").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_224.setTransform(87.1,25.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#EF4932").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_225.setTransform(107.1,27.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EF4932").s().p("AgEAAQAAgGAEAAQAFAAAAAGQAAAGgFABQgEgBAAgGg");
	this.shape_226.setTransform(130.5,44.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EF4932").s().p("AgEAAQAAgGAEABQAFgBAAAGQAAAGgFAAQgEAAAAgGg");
	this.shape_227.setTransform(114.7,42.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EF4932").s().p("AgGAAQABgFAFAAQAHAAgBAFQABAGgHAAQgFAAgBgGg");
	this.shape_228.setTransform(110.5,17.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#EF4932").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_229.setTransform(96.1,48.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EF4932").s().p("AgFAAQAAgFAFgBQAGABAAAFQAAAHgGAAQgFAAAAgHg");
	this.shape_230.setTransform(100.2,38.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EF4932").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAHgHgBQgFABAAgHg");
	this.shape_231.setTransform(118.5,36.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#EF4932").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_232.setTransform(138.5,90);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#EF4932").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAGgGABQgFgBAAgGg");
	this.shape_233.setTransform(124.1,100.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EF4932").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_234.setTransform(94.2,100.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#EF4932").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_235.setTransform(101.9,91.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#EF4932").s().p("AgEAAQAAgFAEgBQAFABAAAFQAAAHgFgBQgEABAAgHg");
	this.shape_236.setTransform(90.5,83.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#EF4932").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_237.setTransform(110.5,86.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EF4932").s().p("AgEAAQAAgGAEABQAFgBAAAGQAAAGgFAAQgEAAAAgGg");
	this.shape_238.setTransform(133.9,102.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#EF4932").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAHgFgBQgEABAAgHg");
	this.shape_239.setTransform(118.1,100.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EF4932").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAGgGABQgFgBAAgGg");
	this.shape_240.setTransform(113.9,76.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EF4932").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAGgGABQgFgBAAgGg");
	this.shape_241.setTransform(99.5,107.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EF4932").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAGgGABQgFgBAAgGg");
	this.shape_242.setTransform(103.6,96.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EF4932").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_243.setTransform(121.9,94.9);

	this.instance = new lib.Group_3_0();
	this.instance.parent = this;
	this.instance.setTransform(75.7,76.7,1,1,0,0,0,75.7,56.6);
	this.instance.alpha = 0.719;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_1, new cjs.Rectangle(0,0,154.1,140.4), null);


(lib.Group_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0_1();
	this.instance.parent = this;
	this.instance.setTransform(72,127.1,1,1,0,0,0,54.6,20.4);
	this.instance.alpha = 0.219;

	this.instance_1 = new lib.Group_11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131.1,77.4,1,1,0,0,0,16.5,27.1);
	this.instance_1.alpha = 0.219;

	this.instance_2 = new lib.Group_1_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128.9,43.6,1,1,0,0,0,23.7,21.3);
	this.instance_2.alpha = 0.219;

	this.instance_3 = new lib.Group_2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.4,88.2,1,1,0,0,0,16.6,27.1);
	this.instance_3.alpha = 0.219;

	this.instance_4 = new lib.Group_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(53,96.2,1,1,0,0,0,24.9,19.4);
	this.instance_4.alpha = 0.219;

	this.instance_5 = new lib.Group_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(63.8,50.5,1,1,0,0,0,22.9,26);
	this.instance_5.alpha = 0.219;

	this.instance_6 = new lib.Group_5_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(94.9,87.5,1,1,0,0,0,22.9,25.9);
	this.instance_6.alpha = 0.219;

	this.instance_7 = new lib.Group_6_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(77.7,72.5,1,1,0,0,0,22.9,25.9);
	this.instance_7.alpha = 0.219;

	this.instance_8 = new lib.Group_7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(23.7,54.4,1,1,0,0,0,23.7,21.3);
	this.instance_8.alpha = 0.219;

	this.instance_9 = new lib.Group_8_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(72,20.4,1,1,0,0,0,54.6,20.4);
	this.instance_9.alpha = 0.219;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_10, new cjs.Rectangle(0,0,152.6,147.5), null);


(lib.Banana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({startPosition:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.9,-111.4,459.7,222.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_5_1();
	this.instance.parent = this;
	this.instance.setTransform(57,-124.7,1.859,1.859,0,0,0,23.8,8);
	this.instance.alpha = 0.309;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6E2C5").s().p("ACRAgQgogHgaAEQgsAGhJgOQhegSgtgpQAvAcA1APQBFAUA7gGQAngEAwAMQAZAGAPAGQgOgEgTgDg");
	this.shape.setTransform(84.1,-100.6,1.859,1.859);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98C23C").s().p("AB5AKQjCh8jJAdQA9g2B1gBQB5gCBXA5QBVA4AvBaQAZAuAGAiQg5hEhhg/g");
	this.shape_1.setTransform(65.8,-122.2,1.859,1.859);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#D1E076","#CCDE70","#B6D559","#A7CF48","#9ECB3E","#9BCA3B"],[0,0.039,0.243,0.463,0.702,1],25.5,11.7,0,25.5,11.7,49.2).s().p("AEGCZQgngQhCAGQg+AFhTgbQhpgig4hFQg5hHgpgcQgSgMgWgGIAhgUQAqgWAugNQCTgoB7BMQB8BNArBwQAUA4gDAqQgGgJgUgHg");
	this.shape_2.setTransform(65,-119.6,1.859,1.859);

	this.instance_1 = new lib.Path_0_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.4,-104.3,1.859,1.859,0,0,0,63,46.9);
	this.instance_1.alpha = 0.52;
	this.instance_1.filters = [new cjs.BlurFilter(4.58333349, 4.58333349, 1)];
	this.instance_1.cache(34,34,58,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#86563C","#571F11"],[0,1],-2.9,0,2.9,0).s().p("AgcAKIACgIQAAgIAFACQAFACAkgJQAOAKgHgDQgFgCgOAGIgaAKIgIACQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_3.setTransform(9.7,-137.2,1.859,1.859);

	this.instance_2 = new lib.Path_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-32.1,41.8,1.859,1.859,0,0,0,100.5,95.9);
	this.instance_2.alpha = 0.789;
	this.instance_2.filters = [new cjs.BlurFilter(16.66666603, 16.66666603, 1)];
	this.instance_2.cache(34,34,133,124);

	this.instance_3 = new lib.Path_1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(63.7,-31.9,1.859,1.859,0,0,0,53.1,54.9);
	this.instance_3.filters = [new cjs.BlurFilter(34.99999619, 34.99999619, 1), new cjs.BlurFilter(34.99999619, 34.99999619, 1)];
	this.instance_3.cache(34,34,38,42);

	this.instance_4 = new lib.Path_2_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57,-26.6,1.859,1.859,0,0,0,68.3,68.5);
	this.instance_4.alpha = 0.5;
	this.instance_4.filters = [new cjs.BlurFilter(34.99999619, 34.99999619, 1)];
	this.instance_4.cache(34,34,69,69);

	this.instance_5 = new lib.Path_3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(50.9,-75,1.859,1.859,0,0,0,94.7,62.6);
	this.instance_5.filters = [new cjs.BlurFilter(6.66666651, 6.66666651, 1), new cjs.BlurFilter(4.58333349, 4.58333349, 1)];
	this.instance_5.cache(34,34,121,57);

	this.instance_6 = new lib.Path_4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(8.3,-111.6,1.859,1.859,0,0,0,93.2,42.9);
	this.instance_6.alpha = 0.34;
	this.instance_6.filters = [new cjs.BlurFilter(16.25, 16.25, 1)];
	this.instance_6.cache(35,34,117,18);

	this.instance_7 = new lib.Group_9_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-2.7,13,1.859,1.859,0,0,0,77,70.1);
	this.instance_7.alpha = 0.762;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#86563C","#571F11"],[0,1],-4.8,0,4.9,0).s().p("AgMB1IgfgFQADgHABgMQADgXgJgVQgHgQAUgqQAVgtgHgbQgFgZABgDQACgKAVAAQAXAAAJACQAFABAGAGQAFAFgBAHIgEAUIgMBDQgLA4AAAJIAGAlQAGAbgEABQgEABgHAAQgLAAgTgDg");
	this.shape_4.setTransform(4.6,-140,1.859,1.859);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#451111","#6D0E0F"],[0,1],-1.4,5.7,1.2,-5.4).s().p("AgyAYQhcgGhSgSIg/gRQAfACBjgEICggHQBRgDBNAHQBdAHAiATQgbgEglAFQgeAEgbAHQgcAJgmACIgmABQguAAhDgEg");
	this.shape_5.setTransform(23.8,-121.6,1.859,1.859);

	this.instance_8 = new lib.Group_1_10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1.5,19,1.859,1.859,0,0,0,76.2,73.7);
	this.instance_8.alpha = 0.422;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#EF5446","#EB5144","#DE483D","#CA3A32","#B42B26","#A41E22","#AB2929","#BE473B","#CB5C47","#BC4338","#B63933"],[0,0.125,0.259,0.392,0.498,0.667,0.714,0.8,0.847,0.941,1],-0.4,-31.9,0,10.9,-19.7,105.5).s().p("AAxMLQgZAAhsgIQhbgHgjAEQhHAIhIgVQhvgghhhkQiOiShFhtQhnijgPivQgIhoAViFQAokJCPiFQCRiIB1gfQAogKApABIA2ADICwAEQCZACBlgGQDJgOCaA4QD6BbBnEFQB0EjiOFJQhACVhrB8QhsB8iEBNQgjAXg9AUQhcAdhjAAQghAAgjgDg");
	this.shape_6.setTransform(0,16.9,1.859,1.859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance_8},{t:this.shape_5},{t:this.shape_4},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-162.3,336.8,326.8);


(lib.Group_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_12();
	this.instance.parent = this;
	this.instance.setTransform(107.3,28.6,1,1,0,0,0,14.7,28.6);
	this.instance.alpha = 0.469;

	this.instance_1 = new lib.Group_1_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.6,52.6,1,1,0,0,0,24.4,25.4);
	this.instance_1.alpha = 0.469;

	this.instance_2 = new lib.Group_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(26.1,70.5,1,1,0,0,0,26.1,8);
	this.instance_2.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11_1, new cjs.Rectangle(0,0,121.9,78.6), null);


(lib.apple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({startPosition:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-162.3,336.7,326.8);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCB51").s().p("AgZg7IAgAnQAdAsgQAjIgBABQgJAAgjh3g");
	this.shape.setTransform(-87.7,-9.7,1.728,1.728);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCB51").s().p("AgKAVIgbgWQgagWAFACIAkAUQAmASAsAFIgFAAIhBgBg");
	this.shape_1.setTransform(-106.3,-13.7,1.728,1.728);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCB51").s().p("AAGAIIgegcIAuAfQAFAKgDAAQgEAAgOgNg");
	this.shape_2.setTransform(-93.1,-2.3,1.728,1.728);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCB51").s().p("AgjgLIA+ANQANAKgHAAQgKAAg6gXg");
	this.shape_3.setTransform(-92.1,-4.2,1.728,1.728);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCB51").s().p("AgSgFIARgDQARAAAEARg");
	this.shape_4.setTransform(-85.6,3.2,1.728,1.728);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCB51").s().p("AgCAPQgPgVgJgRQgRggAjAfQAcAYAJAXQAEALgBAGg");
	this.shape_5.setTransform(-98.1,-33.7,1.728,1.728);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCB51").s().p("AgegIIAZgDQAaABAKAWg");
	this.shape_6.setTransform(-104,-4.4,1.728,1.728);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCB51").s().p("AgOAAIgJgKIAvAVQgYgDgOgIg");
	this.shape_7.setTransform(-94.2,-12.5,1.728,1.728);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCB51").s().p("AgVAAIgRgLIBNAXQglgCgXgKg");
	this.shape_8.setTransform(-124.6,-10.8,1.728,1.728);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCB51").s().p("AADAbQgtg1gDgbQgDgeAsA1QArAzAGAkQACAIgEAAQgIAAgggmg");
	this.shape_9.setTransform(-104.4,-21.8,1.728,1.728);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCB51").s().p("AgSgFQgXgQgOgMQgagWAwAYQAmAUAiAeQARAPAJALg");
	this.shape_10.setTransform(-116.6,-21.7,1.728,1.728);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCB51").s().p("AgXAFQArhRAngIQAKgDg/BXIhBBVQAOgnAWgpg");
	this.shape_11.setTransform(-93,64.5,1.728,1.728);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCB51").s().p("AACgpQAUg6gQBOQgGAmgMAyg");
	this.shape_12.setTransform(-82.5,63.1,1.728,1.728);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCB51").s().p("AAAgxIAHAcQAEAigSAlg");
	this.shape_13.setTransform(-76.6,64.3,1.728,1.728);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCB51").s().p("AgHAIQABgJAOgNQACgCgIAQIgHAQQgDgDABgFg");
	this.shape_14.setTransform(-79.9,65.5,1.728,1.728);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCB51").s().p("AgFAGQACgOAJgJQAEgEgIAUIgIAUQgBgGACgHg");
	this.shape_15.setTransform(-82,92,1.728,1.728);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCB51").s().p("AAAgWQAJAJgGASQgDAKgEAIg");
	this.shape_16.setTransform(-80.3,82.4,1.728,1.728);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCB51").s().p("AgJAFQAFgPAQgIIgXAlQgBgHADgHg");
	this.shape_17.setTransform(-99.4,97.6,1.728,1.728);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCB51").s().p("AAKgPQgIAZgLAGg");
	this.shape_18.setTransform(-97.5,98,1.728,1.728);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCB51").s().p("AgNAhQAIgaALgdIAKgaIgHBDIgPAWQgGAIgCAAQgDAAAEgQg");
	this.shape_19.setTransform(-92.7,97.1,1.728,1.728);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCB51").s().p("AgNAMQAHgMAKgKIALgKQAFgFgJAWIgKAWQgGADgFAAIgBAAQgIAAAGgKg");
	this.shape_20.setTransform(-93.5,87.9,1.728,1.728);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCB51").s().p("AgJAPQAEgkALgTQAJgPgHAtQgHAtgGAIIgDACQgEAAADgeg");
	this.shape_21.setTransform(-86.2,90.1,1.728,1.728);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCB51").s().p("AgUAEQgUgEAWgFQAWgFAQAFQAIACADADIgcAIQgNgBgKgDg");
	this.shape_22.setTransform(-108.9,92.9,1.728,1.728);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCB51").s().p("AgKAAQAMgPAQABQALABgwAcQADgIAGgHg");
	this.shape_23.setTransform(-94.4,87.7,1.728,1.728);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCB51").s().p("AARgYQAEAWgSAPQgJAIgKAEg");
	this.shape_24.setTransform(-86.7,77.5,1.728,1.728);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCB51").s().p("AgkAYQAZgXAggXIAcgTIgzBJQgSAHgOACIgIABQgOAAAUgSg");
	this.shape_25.setTransform(-109.2,82.1,1.728,1.728);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCB51").s().p("AgaAIQgLgJAPgGQAPgGARgCIATgBQAOAAg3AhQgIgEgGgFg");
	this.shape_26.setTransform(-104,71,1.728,1.728);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCB51").s().p("AgTAHQAbgoAZgKQAUgIglAwQgkAvgOABIgBAAQgMAAAcgmg");
	this.shape_27.setTransform(-97.7,80.9,1.728,1.728);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCB51").s().p("AgiABQAYgIAfgBQAQAAALABIhBAPIgXABQgSAAAYgIg");
	this.shape_28.setTransform(-86.6,64.2,1.728,1.728);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCB51").s().p("AgNAIQAMghAWgNQAIgFgZAqIgaApQACgPAHgRg");
	this.shape_29.setTransform(-86.7,72.4,1.728,1.728);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCB51").s().p("AgGAfQg0hQANgyQADgNAtBqIAuBsQgdgfgagog");
	this.shape_30.setTransform(-58.8,56.3,1.728,1.728);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCB51").s().p("AglgQQgrgsBAAtQAfAWApAfg");
	this.shape_31.setTransform(-54.2,43.2,1.728,1.728);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCB51").s().p("AgsgUIAeAAQAjAIAYAhg");
	this.shape_32.setTransform(-50.3,37.3,1.728,1.728);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCB51").s().p("AADAOQgIgFgEgXQgBgDAKAQIALAPIgEABIgEgBg");
	this.shape_33.setTransform(-50.5,40.7,1.728,1.728);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCB51").s().p("AAAARQgHgTAAgOIACgLIAKAXQAFAggDAAQgCAAgFgLg");
	this.shape_34.setTransform(-20.6,64.7,1.728,1.728);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCB51").s().p("AACAKQgMgJgDgNQgBgGAOAQIAOARQgGgBgGgEg");
	this.shape_35.setTransform(-26.9,52.5,1.728,1.728);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCB51").s().p("AgTgIQAOgIANANQAIAGAEAJg");
	this.shape_36.setTransform(-35.1,47.4,1.728,1.728);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCB51").s().p("AAAAOQgMgLACgXIAWApQgHgBgFgGg");
	this.shape_37.setTransform(-31.1,75.2,1.728,1.728);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCB51").s().p("AgJgQQATARAAAQg");
	this.shape_38.setTransform(-29.6,73.2,1.728,1.728);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCB51").s().p("AAXAcQgUgSgVgYIgSgVIA6AgIAMAZQAFAOgEAAQgDAAgJgIg");
	this.shape_39.setTransform(-27.7,67,1.728,1.728);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCB51").s().p("AABAVQgGgMgFgQIgEgRQgCgIAQATIAPATIgDAPQgCAGgDAAQgDAAgDgGg");
	this.shape_40.setTransform(-36.4,64.8,1.728,1.728);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCB51").s().p("AAJARQgggRgLgUQgKgRAnAYQAmAXAEAMQACAGgFAAQgHAAgSgLg");
	this.shape_41.setTransform(-30.8,56.8,1.728,1.728);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCB51").s().p("AgOAVQAIgdAMgRIALgLIgHAkIgQAcQgGAJgDAAQgDAAAEgQg");
	this.shape_42.setTransform(-40.7,85.1,1.728,1.728);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCB51").s().p("AgCAMQgHgTAJgTQADgIACAfIABAgQgFgGgDgLg");
	this.shape_43.setTransform(-38.2,65.9,1.728,1.728);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCB51").s().p("AgOgcQAXACAFAbQACAOgCAOg");
	this.shape_44.setTransform(-43,53.2,1.728,1.728);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCB51").s().p("AgIAPQgEgXAVgYIgJBBQgFgGgDgMg");
	this.shape_45.setTransform(-62.6,88.4,1.728,1.728);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCB51").s().p("AACgbQAFAYgFASQgCAIgEAFg");
	this.shape_46.setTransform(-58.3,87.4,1.728,1.728);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCB51").s().p("AgEA1QgJgmgEgvIgDgoIApBXIgJApQgFARgEAAQgDAAgEgUg");
	this.shape_47.setTransform(-49.6,81.7,1.728,1.728);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCB51").s().p("AgNAcQACgaARgnQAFgLACAjIACAkIgPAPQgFADgDAAQgHAAACgNg");
	this.shape_48.setTransform(-59.5,71.3,1.728,1.728);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCB51").s().p("AgEAcQgXgwAEghQAEgbAXA9QAZA8gGARQgCAEgDAAQgHAAgPgig");
	this.shape_49.setTransform(-45.8,67.4,1.728,1.728);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFCB51").s().p("AgQApQAEggAQgmIAQggQgDAPgSBFQgOAngDAAQgCAAAEgVg");
	this.shape_50.setTransform(-55.6,48.7,1.728,1.728);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCB51").s().p("AAAAUQgYgaAAggQAAgLAYAsIAZAuQgMgHgNgOg");
	this.shape_51.setTransform(-47.8,51.5,1.728,1.728);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCB51").s().p("AhuACQgLgGB0gIIB1gGQgnARgvAKQgoAKgfAAQgpAAgYgRg");
	this.shape_52.setTransform(-5.3,4.4,1.728,1.728);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCB51").s().p("AgHgVQBPgagHAFQgUAIgYANQgtAZgpAog");
	this.shape_53.setTransform(16.5,-13.4,1.728,1.728);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFCB51").s().p("AgWAEQAkgLAygOIhkApIgWACQgTAAA3gSg");
	this.shape_54.setTransform(-10,-5.1,1.728,1.728);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCB51").s().p("AgUAKQAggUAsgaIhVBBQgUAIgFAAQgIAAAqgbg");
	this.shape_55.setTransform(-7.5,-3.1,1.728,1.728);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFCB51").s().p("AArgYQgEANgOALQgZAZgqAAg");
	this.shape_56.setTransform(-29.1,2.1,1.728,1.728);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCB51").s().p("AgNAAIgCgGQAjANgFAAQgWAAgGgHg");
	this.shape_57.setTransform(-118.8,11.3,1.728,1.728);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCB51").s().p("AgJAAIgHgJQApATgKAAQgPAAgJgKg");
	this.shape_58.setTransform(-133.9,-7.8,1.728,1.728);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCB51").s().p("AgNgPIAQAIQAQAKgHANg");
	this.shape_59.setTransform(-127.9,-1.1,1.728,1.728);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFCB51").s().p("AgNACIgIgJIArANQgIACgHAAQgLAAgJgGg");
	this.shape_60.setTransform(-155.8,-1,1.728,1.728);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCB51").s().p("AgRgFIAKAAQAMADAOAIg");
	this.shape_61.setTransform(-154.1,-2.7,1.728,1.728);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFCB51").s().p("AAUAQQgOgDgUgOQgSgOAFgBQAFgBAnANIAEAGIAIAOIgDABIgGgBg");
	this.shape_62.setTransform(-146.2,-3,1.728,1.728);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCB51").s().p("AAaALQgZAAgWgHQgNgEALgGIAOgEQAuAVgKAAIgBAAg");
	this.shape_63.setTransform(-144.6,1.9,1.728,1.728);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFCB51").s().p("AAWAWQgVgIgSgSQgTgTANABQAMACAZAXQAVAUgHAAIgGgBg");
	this.shape_64.setTransform(-137.1,-2.6,1.728,1.728);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCB51").s().p("AgQAHIgIgHQA2gJgFADQgYAOgMAAIgFgBg");
	this.shape_65.setTransform(-109.6,14.5,1.728,1.728);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFCB51").s().p("AgZAKIAZgRIAigLIgKALQgOANgbAKQgKADgEAAQgGAAAMgJg");
	this.shape_66.setTransform(-164.2,8.5,1.728,1.728);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCB51").s().p("AgLAFIgRgFQBDgIgMAHQgNAHgOAAIgLgBg");
	this.shape_67.setTransform(-145.7,3.8,1.728,1.728);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFCB51").s().p("AgegGIAcgDQAcAAAFATg");
	this.shape_68.setTransform(-132.4,6.2,1.728,1.728);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCB51").s().p("AgMALIgTgFIBAgQQgWAVgWAAIgBAAg");
	this.shape_69.setTransform(-164.4,27.8,1.728,1.728);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFCB51").s().p("AgNAAQAQgHAYABIg1ANg");
	this.shape_70.setTransform(-163.9,24.3,1.728,1.728);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCB51").s().p("Ag0ANQgmgCAggMQAQgGAYgGIBbAXQgpAEgoAAIgsgBg");
	this.shape_71.setTransform(-159.3,15.6,1.728,1.728);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCB51").s().p("AgkAEIAMgPQBMgIgPAIQgiATgbAHIgIABQgKAAAGgMg");
	this.shape_72.setTransform(-147.8,23.4,1.728,1.728);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCB51").s().p("AgaAIQgygMAQgIQAQgIBAAOQA/ANgaAGQgMADgOAAQgZAAgggIg");
	this.shape_73.setTransform(-146,10.7,1.728,1.728);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFCB51").s().p("AgxASIAagNIBQgdQgvAggwANQgNAEgEAAQgFAAALgHg");
	this.shape_74.setTransform(-125.8,16.7,1.728,1.728);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCB51").s().p("AgTACIgYgSQBmAegRACIgLABQgaAAgYgPg");
	this.shape_75.setTransform(-129.9,10.5,1.728,1.728);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFCB51").s().p("AgbACIgagKQB4ANgOABQgRADgQAAQgaAAgVgHg");
	this.shape_76.setTransform(-111.4,7.2,1.728,1.728);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCB51").s().p("AgDgRIAGAFQAFAJgIAVIgBAAQgBAAgBgjg");
	this.shape_77.setTransform(-62.2,-16.5,1.728,1.728);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFCB51").s().p("AgGABIAJgTQAJgRgDAVQgDAUgHAMIgIAJg");
	this.shape_78.setTransform(-75.9,-52.5,1.728,1.728);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCB51").s().p("AgFgTIAHALQAHAMgGAOIgBACQgCAAgFgng");
	this.shape_79.setTransform(-76.5,-39,1.728,1.728);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCB51").s().p("AgJAAIgCgSIAXAlIgBAAQgOAAgGgTg");
	this.shape_80.setTransform(-72.2,-30.6,1.728,1.728);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCB51").s().p("AgCgXIAGANQAFAPgNASg");
	this.shape_81.setTransform(-60.8,-56.2,1.728,1.728);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFCB51").s().p("AAAgJIACgKIgBAnQgEgQADgNg");
	this.shape_82.setTransform(-64,-55.3,1.728,1.728);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCB51").s().p("AgQgHQABgRACgMQAEgZAIAaQANAoAFAtg");
	this.shape_83.setTransform(-69.2,-50.8,1.728,1.728);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFCB51").s().p("AgJgOIAJgLQAKgIAAAOQgBAOgEAPIgFARIAAACQgEAAgFgrg");
	this.shape_84.setTransform(-62.3,-44.2,1.728,1.728);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCB51").s().p("AAAAPQgWgoADgMQADgNASAgQATAfgBAXQAAAGgCAAQgFAAgNgbg");
	this.shape_85.setTransform(-71.2,-40.6,1.728,1.728);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFCB51").s().p("AgDABIAOgWIAEALQgBAOgcASIAAAAQgCAAANgVg");
	this.shape_86.setTransform(-63.4,-7.1,1.728,1.728);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCB51").s().p("AgHgDIAbgPQAZgLgVAVQgWAUgTAIIgPADg");
	this.shape_87.setTransform(-48.2,-59.8,1.728,1.728);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFCB51").s().p("AgCADIAPgcIgBATQgEAUgRAMIgCAAQgDAAAMgXg");
	this.shape_88.setTransform(-60.8,-44.9,1.728,1.728);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCB51").s().p("AgEgHIANgYIgGBAQgSgOALgag");
	this.shape_89.setTransform(-63.6,-31.2,1.728,1.728);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFCB51").s().p("AAWgZIgDAUQgIAWgfAJg");
	this.shape_90.setTransform(-28.4,-51.7,1.728,1.728);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCB51").s().p("AAFgNQAHgGAGgCIgjArQAJgWANgNg");
	this.shape_91.setTransform(-31.8,-52.4,1.728,1.728);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFCB51").s().p("AgRgbIAbgfQAagYgMAkQgVA6geA4g");
	this.shape_92.setTransform(-40.9,-51.4,1.728,1.728);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCB51").s().p("AgTAFIASgfIAUgEQASgBgMAQQgMAPgSAPIgVAPIgCABQgEAAANgag");
	this.shape_93.setTransform(-38.9,-38.2,1.728,1.728);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFCB51").s().p("AgPAPQALhAANgMQAPgLgGA0QgHA0gTAaQgEAGgDAAQgHAAAHgxg");
	this.shape_94.setTransform(-52.8,-41.9,1.728,1.728);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCB51").s().p("AAOgTIAYgSQATgNgUAYQgVAZghAYIgeATQAKgMAzgxg");
	this.shape_95.setTransform(-54.4,-20.7,1.728,1.728);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFCB51").s().p("AgEgvIAKAfQAHAjgPAbIgCACQgGAAAGhfg");
	this.shape_96.setTransform(-58.7,-27.3,1.728,1.728);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCB51").s().p("AANg0IABAcQgDAkgXAoIgBABQgDAAAdhpg");
	this.shape_97.setTransform(-70.1,-11.6,1.728,1.728);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFCB51").s().p("AgQgBQAOgKAbAGQAFABg2ANQABgGAHgEg");
	this.shape_98.setTransform(-111.4,28.9,1.728,1.728);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCB51").s().p("AgdACQgXgGAggDQAggDARAGQAJAEACADIgoAGQgSgDgLgEg");
	this.shape_99.setTransform(-170.3,59.6,1.728,1.728);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFCB51").s().p("AgMAAQAXgPATADQANAChKAYQAIgIALgGg");
	this.shape_100.setTransform(-149.2,55.7,1.728,1.728);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCB51").s().p("AAhgWQgGAWgdAOIgeAJg");
	this.shape_101.setTransform(-134.8,46.4,1.728,1.728);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFCB51").s().p("AgOgEQAbgMAZAOIhLAMg");
	this.shape_102.setTransform(-170.7,39.1,1.728,1.728);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCB51").s().p("AgfAFIA/gLQgcAMgUABg");
	this.shape_103.setTransform(-170,42.9,1.728,1.728);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFCB51").s().p("Ag7ATQBIghBIgXIhoBFQgcAFgTABIgIAAQgaAAApgTg");
	this.shape_104.setTransform(-165,48.5,1.728,1.728);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCB51").s().p("AgoAEQgJgLAWgEQAWgEAXABIAXACQARAChVAZQgJgFgEgGg");
	this.shape_105.setTransform(-151.7,37.6,1.728,1.728);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCB51").s().p("AgcAEQA4glAjgHQAdgFhGAsQhGArgSAAQgTAAA5gmg");
	this.shape_106.setTransform(-149.7,48.5,1.728,1.728);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCB51").s().p("AgzAFQgVgDAggEQAzgIAxAKIhTAGIgcgBg");
	this.shape_107.setTransform(-128,33,1.728,1.728);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFCB51").s().p("AgUAGQAfgfAhgKQASgGhsBNQAKgOAQgQg");
	this.shape_108.setTransform(-132.2,41.4,1.728,1.728);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCB51").s().p("AgbAJQAigYAugOQANgEh3BAQAIgKASgMg");
	this.shape_109.setTransform(-113.3,36.6,1.728,1.728);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCB51").s().p("AgQACQAJgMAbgEQAGgBguAeQgBgGAFgHg");
	this.shape_110.setTransform(-102.1,44.2,1.728,1.728);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCB51").s().p("AgVAAQAcgNATAAQAJAAAEADIglATQgRAEgMAAIgDABQgTAAAcgOg");
	this.shape_111.setTransform(-147.3,92.7,1.728,1.728);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFCB51").s().p("AgLADQAQgVATgEQAMgCg9AvQAFgKAJgKg");
	this.shape_112.setTransform(-128.6,82,1.728,1.728);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCB51").s().p("AAXggQACAXgYAXQgLAMgMAHg");
	this.shape_113.setTransform(-118.3,68.3,1.728,1.728);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCB51").s().p("AgQgCQAVgVAdAFIhDAlQAGgLALgKg");
	this.shape_114.setTransform(-154.3,74.2,1.728,1.728);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFCB51").s().p("AAcgPQgWAUgTAIIgOADg");
	this.shape_115.setTransform(-152.7,76.8,1.728,1.728);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFCB51").s().p("AgxAnQAkgjArgkIAmgfIhKBkQgZAPgSAHQgLAFgEAAQgKAAAZgZg");
	this.shape_116.setTransform(-146.1,80.4,1.728,1.728);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCB51").s().p("AgiATQgNgIAUgLQAcgRAkgHQAQgEhHA1QgKgCgGgEg");
	this.shape_117.setTransform(-137.5,65.6,1.728,1.728);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFCB51").s().p("AgZAOQAog2AfgTQAZgOgzBBQgyBAgRAGIgEAAQgKAAAkgwg");
	this.shape_118.setTransform(-131.6,75.4,1.728,1.728);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCB51").s().p("AgnAJQAdgOAkgJQASgFAMgBQgNAHg/AaQgQAFgLACIgGABQgIAAAWgMg");
	this.shape_119.setTransform(-116.4,53.7,1.728,1.728);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFCB51").s().p("AgRANQATgoAbgVQAKgHgjA0IgjA1QAFgRAJgUg");
	this.shape_120.setTransform(-117.6,62.8,1.728,1.728);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCB51").s().p("AgXASQAYgiAngdQAHgGgrAxIgsAxQAFgLAMgSg");
	this.shape_121.setTransform(-101.4,51.8,1.728,1.728);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFCB51").s().p("AgZgGQgDgCAbAFIAbAEQgEAFgIABIgFAAQgOAAgUgNg");
	this.shape_122.setTransform(-46.5,26.1,1.728,1.728);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCB51").s().p("AAQAPQgegKgOgNIgHgLIAnAMIAZARQALAKgHAAQgFAAgMgFg");
	this.shape_123.setTransform(19.8,22.4,1.728,1.728);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFCB51").s().p("AgggCQgHgEAkADIAlADQgKADgOACIgKAAQgTAAgNgHg");
	this.shape_124.setTransform(-1,17.5,1.728,1.728);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFCB51").s().p("AAIgIQARAAAPAEIhOANQAOgRAgAAg");
	this.shape_125.setTransform(-18.1,19.3,1.728,1.728);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFCB51").s().p("AAKAMQgegBgQgWIBJATQgKAEgOAAIgDAAg");
	this.shape_126.setTransform(11.9,40.9,1.728,1.728);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFCB51").s().p("AgfgHQAfAAATAHQAJAEAEAEg");
	this.shape_127.setTransform(12.5,37.6,1.728,1.728);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFCB51").s().p("AgsAKIgwgFQAUgEBogOIAuANQAjANgyABIgKAAQguAAgzgEg");
	this.shape_128.setTransform(10.2,29.2,1.728,1.728);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCB51").s().p("AAXAPQgWgGgUgJIgUgMQgJgGApAEIApAFIAIAPQACAKgLAAIgKgBg");
	this.shape_129.setTransform(-6.8,35.9,1.728,1.728);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFCB51").s().p("AhJAKQgdgGBTgKQBRgLAQAIQASAHhEAKQglAGgcAAQgVAAgPgEg");
	this.shape_130.setTransform(-3.6,24,1.728,1.728);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFCB51").s().p("AAjAVQgggJgfgSIgagRQAOAEBAAYIAYANQALAGgGAAQgEAAgOgDg");
	this.shape_131.setTransform(-29.6,28.8,1.728,1.728);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFCB51").s().p("Ag2AOQgMgCA9gMIA+gNQgOAJgWAGQggAMgcAAIgPAAg");
	this.shape_132.setTransform(-22.4,23.3,1.728,1.728);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFCB51").s().p("Ag8AEQgIgBBAgEIBCgFQgMAFgVADQgXAFgYAAQgUAAgWgDg");
	this.shape_133.setTransform(-41.6,19.9,1.728,1.728);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFCB51").s().p("AgCABIAagTQADAGgFAIQgKAOgkAJIAAAAQgDAAAZgSg");
	this.shape_134.setTransform(-45.7,0.3,1.728,1.728);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFCB51").s().p("AgxASIAtgZIAmgJQAhgFglATQgkASgZADg");
	this.shape_135.setTransform(3.5,-55.4,1.728,1.728);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFCB51").s().p("AgEACIAhgcQgEAKgJAMQgRAYgZAHIgCAAQgFAAAdgZg");
	this.shape_136.setTransform(-19,-41.6,1.728,1.728);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFCB51").s().p("AgDgMQANgOAPgJIguBHQgJgWAbgag");
	this.shape_137.setTransform(-29.9,-26.3,1.728,1.728);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFCB51").s().p("AApgYQgFANgMALQgZAZgnAAg");
	this.shape_138.setTransform(17.4,-38.4,1.728,1.728);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFCB51").s().p("AAPgOQAMgGAHAAIhDApQAZgYAXgLg");
	this.shape_139.setTransform(14.6,-40.6,1.728,1.728);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFCB51").s().p("AABglIA0gdQAsgVgoApQg+BAhGA5g");
	this.shape_140.setTransform(4.9,-43,1.728,1.728);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFCB51").s().p("AgVACIAngfIAXADQATAGgYAPQgXAOgcAKIgeAKIgCABQgGAAAggcg");
	this.shape_141.setTransform(-2.8,-26.6,1.728,1.728);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFCB51").s().p("AgYANQA1hIAWgJQAWgJgqA8QgpA8glAYQgGAEgDAAQgKAAAqg6g");
	this.shape_142.setTransform(-13.4,-35.6,1.728,1.728);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFCB51").s().p("AAZgPIAigMQAbgIgjAUQgjAUguAPIgoALQARgJBOglg");
	this.shape_143.setTransform(-28.8,-11.5,1.728,1.728);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFCB51").s().p("AgEAFIAjg6IgKAnQgRArgfAYIgCABQgEAAAdgxg");
	this.shape_144.setTransform(-29.3,-20.7,1.728,1.728);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFCB51").s().p("AgDAEIAvg4QgEAMgMAUQgZAlgsAkIgBAAQgDAAAqgxg");
	this.shape_145.setTransform(-48.6,-7.1,1.728,1.728);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFCB51").s().p("AgwASIAsgZIAngJQAggFglATQgjASgZADg");
	this.shape_146.setTransform(29.9,-0.7,1.728,1.728);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFCB51").s().p("AApgYQgFANgMALQgZAYgnAAg");
	this.shape_147.setTransform(4,-15.8,1.728,1.728);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFCB51").s().p("AAPgOQAMgGAHAAIhDApQAYgYAYgLg");
	this.shape_148.setTransform(6.5,-3,1.728,1.728);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFCB51").s().p("AAPgOQAMgFAHgBIhDApQAZgXAXgMg");
	this.shape_149.setTransform(26.3,-29.3,1.728,1.728);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFCB51").s().p("AhOAVQgjgEBXgVQBXgWAWAGQAYAHhHATQg4AQgnAAIgTgBg");
	this.shape_150.setTransform(21.8,-9.3,1.728,1.728);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFCB51").s().p("AAZgPIAigNQAbgIgjAVQgjATguAPIgoAMQARgKBOgkg");
	this.shape_151.setTransform(29.5,-18.4,1.728,1.728);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],31.5,14.5,0,31.5,14.5,44.5).s().p("AkmDjQABgSAEgxIAEgtQAVgbAagfQA1g9AbgRQAggUANgCQANgCAjAIIAlAMQg2gdAKgSIAnhFQAhgVApgWQBRgtAigKQAtgMATAEQAYAGAKAjQAZBXAHBDIAIBRQADAugPADQgbAHhTggIghgLQA7AbADALQADALAMAUQACASgyANQghAJh/ASQhxAQgmAOQhJAigdAKQgRAGgLAAQgVAAAAgWg");
	this.shape_152.setTransform(-129.7,-4.8,1.728,1.728);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],37.2,-16.8,0,37.2,-16.8,44.5).s().p("AjPCTQgbgegLgaQgNgeAHgfIAJgsQAGgPAXgQQAdgUAegOQAkgRAbgDQAbgDBTgQQBOgOAtgKQA3gMAkAEQAsAEgvAfIgzAmQg4Apg9AkQgyAchtBQQhCAsgdAAQgKAAgFgFg");
	this.shape_153.setTransform(-139.5,49.3,1.728,1.728);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],29.9,-27.5,0,29.9,-27.5,44.5).s().p("Ah7DIQgwgMghgXQghgYgCgYQgIgaAAgLQAAgSAggaQAqghBFgtQBKgzAmgUQCFhDAegIIA4gNQAjgCgXAmIhNBXQhSBfgcAqQgxBHgfAfQgrApgkAAQgIAAgIgCg");
	this.shape_154.setTransform(-127,67.9,1.728,1.728);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],15.5,-29.8,0,15.5,-29.8,44.5).s().p("AhfDLQgzgHgFgCQgLgIARgeQAig+ARgbQAog+AugwQBGhMAog1QAJgOAJgKQAUgTAGAWIAHCJQAGBagEAwQgGBTgfAOQgjAPhEAIQglAEgdAAQgYAAgUgDg");
	this.shape_155.setTransform(-102,71.8,1.728,1.728);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],-20.6,-25.3,0,-20.6,-25.3,44.5).s().p("AitCuQAAgWgIhtQgHhnAAgTQAAgKAIgiIAHghQACgLAKgLQASgVAjAEQAqAGBHAkQBHAkAcAdQASATAvAkQAhAfgVAaQgeAlg9AqQhFAxg2AOQhKAYgZAFQgJACgHAAQgYAAgBgXg");
	this.shape_156.setTransform(-39.5,64,1.728,1.728);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],-37.3,-8.7,0,-37.3,-8.7,44.5).s().p("AATCFIg2g0Qgcgchhg1QhTgwgcgKQgLgEALgRQALgSAUgHQAcgJDsgYQAqgEBYAFQA+AEApAFQAVACAAARQAAAKgOAqQgLAjg5A6Qg5A5gyAeQgZAQgUAAQgOAAgLgHg");
	this.shape_157.setTransform(-10.8,35.3,1.728,1.728);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],-41.4,17.9,0,-41.4,17.9,44.5).s().p("AkWCRQgYgCAkgXQASgLCchZQCihcAggRQAXgMA1ghQAtgXAPAZQAaAsAOArQAUA7gRAaQgRAkgKAMQgQATgqAAQguAAitANQiqAOgcAFQgiAHgRAAIgGgBg");
	this.shape_158.setTransform(-3.6,-10.7,1.728,1.728);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],-34.2,27,0,-34.2,27,44.5).s().p("Aj5DEQgWgDAPgSQAEgFARgnQAPgjAWgWQAUgSA0g7QA0g8ASgQQBHhCAegaQAZgWAhgDQAmgEApAWQApAVAYAjQAXAggKAMQgHAJgRANIgPALIjdCBQhoA+gpAWQg3AegMgBIgSAAIgTgBg");
	this.shape_159.setTransform(-16,-26.4,1.728,1.728);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.rf(["#F68C20","#FAAC18","#FCB914"],[0,0.631,1],-16.4,30.1,0,-16.4,30.1,44.5).s().p("AiiCzQgSiygKgiQgQgigGgPQgLgcAUgUQAZgYAsgXQArgXAZgCQAUgCAzgCIBUgCIA2gCQASABAOAMQAGAEAgAAQANAAgcAeIhrB0QhKBQgkArQgSAVgqA7QgaAkgQAGQgbAMgIABIgBAAQgMAAAHggg");
	this.shape_160.setTransform(-46.9,-31.9,1.728,1.728);

	this.instance = new lib.Path_11();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,48.1,1.728,1.728,0,0,0,110.5,86.7);
	this.instance.filters = [new cjs.BlurFilter(7.49999952, 7.49999952, 1)];
	this.instance.cache(34,38,153,98);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F3EDD3").s().p("AlpJOQg+AAg1gRIhugtQhBgbg3hFQg1hDgDg3IgFiAQgChOALgYQANg1AMggQAWg8A5gzQBbhOB1iEQAXgZB8hCQB0g9AtgQQBBgYBsgeQCRgpA8gCQA9gBCIAhQB+AfALAMQAHAIAKAGIAWAPQASALAOAPQAuAlAhA6QAzBYgHBgQgEAygWBKQgWBHgQAUIgaAjQgPAUgIAIQggAggdArIgfAxQgJANgRARIhDA9QguApglAeQghAagIAEQgjAbhAAgQiBBAiwAmQhUAShRABIiKgCg");
	this.shape_161.setTransform(-68.6,20.3,1.728,1.728);

	this.instance_1 = new lib.Group_11_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.9,90.6,1.728,1.728,0,0,0,60.9,39.2);
	this.instance_1.alpha = 0.719;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.rf(["#FDBE4D","#F9A61E","#F9A41E","#F79720","#F79924","#F89F2E","#F9A941","#FBB75A","#FCBD66"],[0,0.51,0.537,0.78,0.839,0.886,0.937,0.98,1],-57.4,-6.6,0,-57.4,-6.6,128.7).s().p("AnCJgQiIhXici3QhBhNgLhjQgKhSAbiNQAUhvBhhsQAagcCPiAQA+g4Byg/QA5ggAsgVQA5gdA8gQQBUgXAOgFQCQg9CaAMQCGALCbBDQCLA8BIDOQBFDGgiDGQgoDtiFCnQiwDdlHBNQhaAVhWAAQjUAAjEh9g");
	this.shape_162.setTransform(-63.7,42.8,1.728,1.728);

	this.instance_2 = new lib.Path_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.4,31.7,1.728,1.728,0,0,0,80.2,90.7);
	this.instance_2.alpha = 0.32;
	this.instance_2.filters = [new cjs.BlurFilter(8.74999905, 8.74999905, 1)];
	this.instance_2.cache(34,34,92,113);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C5C193").s().p("AgaARIgRgTQgEgHAKgGIAQgKQAHgDAKgBIAQAAQAHAAAGAFIALAJQAEAFAAAHQAAAFAFAMQACAKgOADQgQADgLAAQgYAAgIgNg");
	this.shape_163.setTransform(19.7,-133.8,1.728,1.728);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#677A35").s().p("AgWAlQgjgNAIgQQAFgJAAgmIBKgEIATAaIACAOQABANgBAFQgDAKgTANQgJAGgMAAQgNAAgRgHg");
	this.shape_164.setTransform(19,-127.9,1.728,1.728);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.rf(["#C0D731","#7B903A","#A7CE39"],[0,0.565,1],-6.3,21,0,-6.3,21,46.9).s().p("AgrB0QgQgGgQgYQgQgXAFgNIAJgHIgSgBQgKAAgUgUQgXgWgLgJQgTgRgEgHQgHgLABgVQABgWAIgDQAHgDAGAQQAFAOAJAFIAdALQAOAGAaAQQAUAKAIgHQAOgMApgSIAcgjQAegiAFADQANApgEApQgDAaAPAJQAJAFAaALQARAKAcgNQAPgHAKgHIg7A0IgZANQgaAPgEAGQgHALgqANIg4AKIgDABQgEAAgGgDg");
	this.shape_165.setTransform(18.7,-127.8,1.728,1.728);

	this.instance_3 = new lib.Group_1_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(47.1,-132.5,1.728,1.728,0,0,0,24.2,12.2);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24.4,-122.5,1.728,1.728,0,0,0,35.6,23.9);
	this.instance_4.alpha = 0.672;

	this.instance_5 = new lib.Group_7_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(152.1,38.1,1.728,1.728,0,0,0,29,30.9);
	this.instance_5.alpha = 0.469;

	this.instance_6 = new lib.Group_1_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(139.9,-29.7,1.728,1.728,0,0,0,30.3,33.6);
	this.instance_6.alpha = 0.469;

	this.instance_7 = new lib.Group_2_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(28.1,-21.9,1.728,1.728,0,0,0,32,25.7);
	this.instance_7.alpha = 0.66;

	this.instance_8 = new lib.Group_3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(66,50.5,1.728,1.728,0,0,0,31.9,31.9);
	this.instance_8.alpha = 0.66;

	this.instance_9 = new lib.Group_4_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(42.4,-99.7,1.728,1.728,0,0,0,65.7,36.6);
	this.instance_9.alpha = 0.66;

	this.instance_10 = new lib.Path_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(100.1,-72.3,1.728,1.728,0,0,0,62.6,58.8);
	this.instance_10.alpha = 0.648;
	this.instance_10.filters = [new cjs.BlurFilter(54.16666412, 54.16666412, 1), new cjs.BlurFilter(30.83333206, 30.83333206, 1)];
	this.instance_10.cache(34,34,57,50);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#FDBE4D","#F9A61E","#F9A41E","#F79720","#F79924","#F89F2E","#F9A941","#FBB75A","#FCBD66"],[0,0.51,0.537,0.78,0.839,0.886,0.937,0.98,1],-7.9,-39.7,0,-12.4,-20.9,106.9).s().p("AgMNYQhfgJhVgOQiNgXhBgeQhcgqhdhUQh1hqhCiCQgshYgZiWQgOhZgFhaQgGg/gCgkQgDhBALgmQADgIALhCQAKg3ANgaQAGgNAKgfQAEgPAQgRIATgWIALgVQAKgPAAgEIAJgLQAJgLACAIQABADAGgWQAIgcAHgKIAYgaQAOgNATgOIAlgbQAsgkAUgKQASgJAVgJQALgFADgDQAFgGAMgHIAYgQQAJgGAMgGQALgEgOAKIAZgPQAngYBNgWQBDgSAngDQAogDBdgSQAWgFBkAMQBiAMAvALQBCARAvAIQAXAEBEApQArAbAoAcQA3AnBIBiIBDBfQBDBmAzB3QAuBqAACWQAAB5gVA8QhRDZggAwIggA0QgPAZgaAdQgeAihSA9QhMA5gfAPIg2AdQgfASgYAUQgZAVgjAJQgWAFhKAIIhjAPQgfAEgcAAIgagBg");
	this.shape_166.setTransform(56.5,-21.2,1.728,1.728);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_166},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.instance_2},{t:this.shape_162},{t:this.instance_1},{t:this.shape_161},{t:this.instance},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.6,-169.4,411.4,338.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({startPosition:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.6,-169.4,411.4,338.8);


// stage content:
(lib.All_fruits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.apple("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,200);

	this.instance_1 = new lib.Banana("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.3,226.6);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(272.4,205);

	this.instance_3 = new lib.Strawberry("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(291.7,229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).to({state:[{t:this.instance_2}]},61).to({state:[{t:this.instance_3}]},60).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384,237.7,337.7,327.8);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
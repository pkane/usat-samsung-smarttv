Scene = function(elem, handler) {
	this.elem = elem;
	this.handler = handler;

	this.init = function (arg) {
		this.elem = $(arg);
		this.handler = this.elem.find('video');
	};

	this.show = function() {
		this.elem.show();
	};

	this.hide = function() {
		this.elem.hide();
	};

	this.focus = function() {
		this.handler.focus();
	};

	this.load = function() {
		this.init(this.elem);		
		this.playVid();
	};

	this.unload = function() {
		this.hide();
		this.pauseVid();		
	};

	this.playVid = function() {
		this.handler[0].play();
		console.log('play vid');
	}

	this.pauseVid = function() {
		this.handler[0].pause();
	}	
};

var Scenes = {
	elem : new Array()
};

Scenes.sceneSwitch = function(scene, scene2) {
	if (scene) {
		scene.hide();
		scene.unload();
	};
    scene2.load();
    scene2.show();
    scene2.focus();	
    console.log(scene);
    console.log(scene2);
};
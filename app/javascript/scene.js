Scene = function(elem, handler)
{
	this.elem = null;
	this.handler = null;
};

Scene.init = function () {
	this.elem = $('.scene');
	this.handler = this.elem.find('a');

	Scene.init = function(){};
};

Scene.show = function() {
	this.elem.show();
};

Scene.hide = function() {
	this.elem.hide();
};

Scene.focus = function() {
	this.handler.focus();
};

Scene.load = function() {
	this.init();
};

Scene.unload = function() {
	this.hide();
};

sceneSwitch = function(scene, scene2) {
	console.log(scene);
	var oldScene = new Scene ( $(scene), null );
	var newScene = new Scene ( $(scene2), null );	
	oldScene.hide();
	oldScene.unload();
    newScene.load();
    newScene.show();
    newScene.focus();	
};
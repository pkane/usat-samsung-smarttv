var Scene1 =
{
	elem: null,
	handler: null
};
// var SceneArray = [Scene1, Scene2, Scene3, Scene4, Scene5];

Scene1.init = function () {
	this.elem = $('#scene1');
	this.handler = this.elem.find('a');

	Scene1.init = function(){};
};

Scene1.show = function() {
	this.elem.show();
};

Scene1.hide = function() {
	this.elem.hide();
};

Scene1.focus = function() {
	this.handler.focus();
};

Scene1.load = function() {
	this.init();
};

Scene1.unload = function() {
	this.hide();
};

var Scene2 =
{
	elem: null,
	handler: null
};

Scene2.init = function () {
	this.elem = $('#scene2');
	this.handler = this.elem.find('a');

	Scene2.init = function(){};
};

Scene2.show = function() {
	this.elem.show();
;}

Scene2.hide = function() {
	this.elem.hide();
};

Scene2.focus = function() {
	this.handler.focus();
};

Scene2.load = function() {
	this.init();
};

Scene2.unload = function() {
	this.hide();
};

sceneSwitch = function(scene, scene2) {
	console.log(scene, scene2);
	scene.hide();
    scene2.load();
    scene2.show();
    scene2.focus();	
};
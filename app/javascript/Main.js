// var widgetAPI = new Common.API.Widget();
// var tvKey = new Common.API.TVKeyValue();

var Main = {

};

Main.onLoad = function () {
    // Enable key event processing
    // Main.enableKeys();
    // widgetAPI.sendReadyEvent();
    Scene1.load();
    Scene1.show();
    Scene1.focus();
};

Main.onUnload = function () {

};

Main.enableKeys = function () {
    document.getElementById("anchor").focus();
};

Main.allHide = function () {
	for (i=0; i<SceneArray.length-1; i++) {
		SceneArray[i].hide();
		SceneArray[i].unload();
	}
}

Main.keyDown = function () {
    var keyCode = event.keyCode;
    alert("Key pressed: " + keyCode);

    switch (keyCode) {
        case tvKey.KEY_RETURN:
            alert("RETURN");
            widgetAPI.sendReturnEvent();
            break;
        case tvKey.KEY_LEFT:
            document.getElementById("heading").innerHTML = "Left";
            alert("LEFT");
            break;
        case tvKey.KEY_RIGHT:
            document.getElementById("heading").innerHTML = "Right";
            break;
        case tvKey.KEY_UP:
            break;
        case tvKey.KEY_DOWN:
            break;
        case tvKey.KEY_ENTER:
            break;
        default:
            alert("Unhandled key");
            break;
    }
};

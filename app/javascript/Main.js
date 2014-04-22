var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();

var Main = {

};


Main.onLoad = function () {
    // Enable key event processing
    Main.enableKeys();
    widgetAPI.sendReadyEvent();
    Scene1.load();
    Scene1.show();
    Scene1.focus();
};

Main.onUnload = function () {

};

Main.enableKeys = function () {
    $('.anchor').focus();
};

Main.allHide = function () {
	for (i=0; i<SceneArray.length-1; i++) {
		SceneArray[i].hide();
		SceneArray[i].unload();
	}
};

Main.selectNav = function(direction) {
    var sectionList = $('.section-list');
    var navKeys = sectionList.find('li');
    var curSel = $('.active');
    var firstChild = $(navKeys[0]);
    var lastChild = $(navKeys[navKeys.length-1]);
    // If we're keying up
    if (direction == 'up') {  
        if (navKeys.index(curSel) == 0) {
            console.log('first item');
            lastChild.addClass('active');
        } else {
            console.log(navKeys.index(curSel));
            var next = navKeys.index(curSel)-1;
            $(navKeys[next]).addClass('active');
        }
    // Otherwise we're moving down        
    } else {        
        if (navKeys.index(curSel) == navKeys.length-1) {
            console.log('last item');
            firstChild.addClass('active');  
        } else {
            console.log(navKeys.index(curSel));
            var prev = navKeys.index(curSel)+1
            $(navKeys[prev]).addClass('active');
        } 
    }
    $(curSel).removeClass('active');
};

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
            Main.selectNav('up');
            break;
        case tvKey.KEY_DOWN:
            Main.selectNav('down');        
            break;
        case tvKey.KEY_ENTER:
            break;
        default:
            alert("Unhandled key");
            break;
    }
};

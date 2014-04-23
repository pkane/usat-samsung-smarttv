var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();

var Main = {

};


Main.onLoad = function () {
    // Enable key event processing
    Main.enableKeys();
    widgetAPI.sendReadyEvent();
    var Scene1 = new Scene ( $('#scene1'), null );    
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
    var sectionList = $('.section-list'),
        navKeys = sectionList.find('li'),
        curSel = $('.selected'),
        firstChild = $(navKeys[0]),
        lastChild = $(navKeys[navKeys.length-1]);
    // If we're keying up
    if (direction == 'up') {  
        if (navKeys.index(curSel) == 0) {
            lastChild.addClass('selected');
        } else {
            var next = navKeys.index(curSel)-1;
            $(navKeys[next]).addClass('selected');
        }
    // Otherwise we're moving down        
    } else {        
        if (navKeys.index(curSel) == navKeys.length-1) {
            firstChild.addClass('selected');  
        } else {
            var prev = navKeys.index(curSel)+1;
            $(navKeys[prev]).addClass('selected');
        } 
    }
    $(curSel).removeClass('selected');
};

Main.switchScene = function() {
    var sectionList = $('.section-list'),
        navKeys = sectionList.find('li'),
        curSel = $('.selected'),
        curAct = $('.active'), 
        oldAct = navKeys.index(curAct), // Index number of old selected
        newAct = navKeys.index(curSel); // Index number of new selected
        $(navKeys[oldAct]).removeClass('active'); // Take object at index of old selected and remove the active class
        $(navKeys[newAct]).addClass('active'); // Take object at index of new selected and add active class
    sceneSwitch($(navKeys[oldAct]).dataset, $(navKeys[newAct]).dataset);
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
            console.log(event);
            Main.switchScene();
            break;
        default:
            alert("Unhandled key");
            break;
    }
};

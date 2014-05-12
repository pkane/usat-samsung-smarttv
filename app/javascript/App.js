var app = angular.module('usatSmartTv',[]);
var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
// var playerInstance = webapis.avplay;
var parseTar = 'details';

var Main = {
    returnIndex : {
        elem : $('.return-index'),
        anchor : $('.return-index-anchor')
    }
};

Main.onAVPlayObtained = function(avplay) {
    Main.AVPlayer = avplay;
    Main.AVPlayer.init();
};

Main.onGetAVPlayError = function() {
    alert('######onGetAVPlayError:' + error.message);
};

Main.onLoad = function () {
    // playerInstance.getAVPlay(Main.onAVPlayObtained, Main.onGetAVPlayError);    
    Scene1 = new Scene ($('#scene1'), null );  
    Scene2 = new Scene ($('#scene2'), null );   
    Scene3 = new Scene ($('#scene3'), null );  
    Scene4 = new Scene ($('#scene4'), null );   
    Scene5 = new Scene ($('#scene5'), null );  
    Scene6 = new Scene ($('#scene6'), null );        
    Scenes.elem[0] = Scene1;
    Scenes.elem[1] = Scene2;
    Scenes.elem[2] = Scene3;
    Scenes.elem[3] = Scene4;
    Scenes.elem[4] = Scene5;
    Scenes.elem[5] = Scene6;        
    Scene1.load();
    Scene1.show();
    Scene1.focus();
    // Scenes.sceneSwitch(null, Scene1);        

    // Enable key event processing
    Main.enableKeys();
    Main.returnIndex.onLoad();
    widgetAPI.sendReadyEvent();         

    // var timer = window.setTimeout(function (){
    //     nav = $('.nav');
    //     $(nav).attr('id', 'collapsed');
    // }, 5000);

    // // Load a media file
    // Main.AVPlayer.open("http://www.w3schools.com/tags/movie.mp4");

    // // Play the content
    // Main.AVPlayer.play();    

};

Main.onUnload = function () {

};

Main.enableKeys = function () {
    $('.main-anchor').focus();
};

Main.disableKeys = function () {
    $('.main-anchor').blur();
};

// Main.allHide = function () {
// 	for (i=0; i<SceneArray.length-1; i++) {
// 		SceneArray[i].hide();
// 		SceneArray[i].unload();
// 	}
// };

Main.selectNav = function(arg1) {
    var dir = arg1,
        nav = $('.nav'),
        nav_attr = nav.attr('id');
    switch (dir) {
        case 'up' :
            switch (nav_attr) {
                case 'expanded':
                    alert('expanded');
                    // We're in expanded nav and should traverse that menu instead              
                    Main.selectDetails(dir);
                    break;
                case 'collapsed':
                    alert('collapsed');
                    $(nav).attr('id', 'details');
                    break;                 
                case 'details':
                    alert('details');                                    
                    $(nav).attr('id', 'index_open');     
                    $('.index-wrapper').fadeIn(300);               
                    break;
                case 'index_open':
                    alert('index open');                                    
                    $(nav).attr('id', 'expanded');       
                    $('.index-wrapper').fadeOut(300);             
                    break;                       
            }
            break;

        case 'down' :
            switch (nav_attr) {
                case 'expanded':
                    alert('expanded');
                    // We're in expanded nav and should traverse that menu instead   
                    Main.selectDetails(dir);
                    break;
                case 'index_open':
                    alert('index open');                                    
                    $(nav).attr('id', 'details');       
                    $('.index-wrapper').fadeOut(300);             
                    break;                       
                case 'details':
                    alert('details');
                    $(nav).attr('id', 'collapsed');                  
                    break;                    
                case 'collapsed':  
                    alert('collapsed');              
                    break;
            }
            break;

        default:
            break;            
    }

};

Main.selectDetails = function(direction) {
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
    console.log('switchScene');
    var sectionList = $('.section-list'),
        navKeys = sectionList.find('li'),
        sectionPar = sectionList.parent(),
        curSel = $('.selected'),
        curAct = $('.active'), 
        oldScene,
        newRel,
        newScene,
        oldAct = navKeys.index(curAct), // Index number of old selected
        newAct = navKeys.index(curSel); // Index number of new selected
        if (sectionPar.is('#expanded')) {
            $(navKeys[oldAct]).removeClass('active'); // Take object at index of old selected and remove the active class
            $(navKeys[newAct]).addClass('active'); // Take object at index of new selected and add active class   
            newRel = $(navKeys[newAct]);
            newData = newRel.data();
            for (i=0; i<Scenes.elem.length; i++) {
                if (Scenes.elem[i].elem.css('display') == 'block'){
                    oldScene = Scenes.elem[i];
                } else if (Scenes.elem[i].elem.selector == newData.rel) {
                    newScene = Scenes.elem[i];
                }
            }
            Scenes.sceneSwitch(oldScene, newScene);  
        };  
};

Main.keyDown = function () {
    var keyCode = event.keyCode;

    switch (keyCode) {
        case tvKey.KEY_RETURN:
            // widgetAPI.sendReturnEvent();
            event.preventDefault();
            if ($.type(parseTar) == "string") {
                Main.returnIndex.parseString(parseTar);            
            }             
            Main.selectNav('up');                        
            break;
        case tvKey.KEY_LEFT:
            break;
        case tvKey.KEY_RIGHT:
            break;
        case tvKey.KEY_UP:
            Main.selectNav('up');            
            break;
        case tvKey.KEY_DOWN:     
            Main.selectNav('down');            
            break;
        case tvKey.KEY_ENTER:
            Main.switchScene();                                
            break;
        default:
            alert("Unhandled key");
            break;
    }
};

Main.returnIndex.onLoad = function () {
    Main.returnIndex.enableKeys();
};

Main.returnIndex.onUnload = function () {
    
};

Main.returnIndex.enableKeys = function () {
    $('.return-index-anchor').focus();
};

Main.returnIndex.disableKeys = function () {
    $('.return-index-anchor').blur();
};

Main.returnIndex.parseString = function(arg1) {
    console.log('parseString');    
    var target = arg1.toString();
    $('.nav').attr('id', target);
};
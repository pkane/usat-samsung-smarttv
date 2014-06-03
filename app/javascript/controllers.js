angular.module('usatSmartTv.controllers', [])

	.controller("AppCtrl", function($scope, $http) {

		var sceneScope = [],
			activeScene = {},
			prevScene = {},
			nextScene = {};	
				
        $scope.myData = {};
        $scope.scene = function(elem) {
			this.elem = elem;
			this.handler;
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
			};
			this.pauseVid = function() {	
				this.handler[0].pause();
			};
        };
		$scope.scenes = [
			scene1 = {
				id : 'scene1',
				name : 'news',
				data : [],
				playlist : [],
				curVid : 0,
				src : [],
				obj : new $scope.scene($('#'+this.id)),
				state : 'active'
			},
			scene2 = {
				id : 'scene2',
				name : 'sports',
				data : [],
				playlist : [],
				curVid : 0,
				src : [],
				obj : new $scope.scene($('#'+this.id)),
				state : 'inactive'
			},
			scene3 = {
				id : 'scene3',
				name : 'money',
				data : [],
				playlist : [],
				curVid : 0,
				src : [],
				obj : new $scope.scene($('#'+this.id)),
				state : 'inactive'
			},
			scene4 = {
				id : 'scene4',
				name : 'life',
				data : [],
				playlist : [],
				curVid : 0,
				src : [],
				obj : new $scope.scene($('#'+this.id)),
				state : 'inactive'
			},
			scene5 = {		
				id : 'scene5',	
				name : 'tech',
				data : [],
				playlist : [],
				curVid : 0,
				src : [],
				obj : new $scope.scene($('#'+this.id)),
				state : 'inactive'
			},
			scene6 = {
				id : 'scene6',
				name : 'travel',
				data : [],
				playlist : [],
				curVid : 0,
				src : [],
				obj : new $scope.scene($('#'+this.id)),
				state : 'inactive'
			}
		];           
        $scope.myData.init = function(item, event) {
        	var key = '1&api_key=zvmv2v9psky7xxhs6sxu825z',
				url = "http://api.gannett-cdn.com/MobileServices/MArticleService.svc/mcontent/v1/fronts/",
				fullurl;

			function parseData(array, j) {
				for (var i = array[j].data.length - 1; i >= 0; i--) {
					array[j].playlist.push(array[j].data[i].metaData.data.video.Renditions[0].Url.replace('rtmp://cp17277.edgefcs.net/ondemand/&mp4:Brightcove/Brightcove2/', 'http://videos.usatoday.net/Brightcove2/'));
				}; 
				array[j].src = array[j].playlist[0];				
			};				

			function queryFeed(i) {

					$.ajax({type: 'GET', url: fullurl, async: true, dataType: 'json', success: function(data){
						$scope.scenes[i].data = data.modules.Items.content;																							
						$scope.$apply(function() {
							parseData($scope.scenes, i);
						});  								
						// console.log($scope.scenes[i])
			            }, error: function(xhr, ajaxoptions, thrownerror){
			                alert(xhr.status);
			                alert(thrownerror);
			            }
					});	

			};

		    for (var i = $scope.scenes.length - 1; i >= 0; i--) {
				fullurl = (url + $scope.scenes[i].name + "_Tablet_Video?siteId=" + key);
				queryFeed(i);			
				sceneScope.push($scope.scenes[i].playlist);
				if ($scope.scenes[i].state == 'active') {
					activeScene = $scope.scenes[i];
					prevScene = $scope.scenes[i-1];
					nextScene = $scope.scenes[i+1];		
					(activeScene.obj).load().show().focus();
				};
			}

			console.log($scope.scenes);			
        };          
	})

	.controller('eventController', '$scope', function($scope) {		
    	function nextPrevVideo(dir, event) {
			var newVid = (activeScene.curVid+dir),
				indexWrap = $('.index-wrapper'),
				indexWrap = indexWrap.find('.section-index'),
				target = event.target(),
				newSrc = activeScene.playlist[newVid],
				// newVid = curScene.playlist[curScene.playlist.indexOf(curScene.src)+dir],
				vidObj = $('#'+activeScene.id).find('video')[0];

			function changeSrc(callback) {
				vidObj.src = newSrc;
				activeScene.curVid = newVid;
				activeScene.src = newSrc;
				$scope.$apply();
				callback();
			};	    		

	    	if (newSrc) {
				vidObj.pause();
				changeSrc(function (){
					vidObj.play();  	  										
					console.log('play');
				});
	    	};        
    	};
	})
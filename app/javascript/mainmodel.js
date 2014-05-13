app.controller("mainController", function($scope, $http) {
        $scope.myData = {};
		$scope.scenes = [
			scene1 = {
				id : 'scene1',
				name : 'news',
				src : ''
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530474700001_usatb5a79027-b22d-43df-84ee-72203c0d6492.mp4'
			},
			scene2 = {
				id : 'scene2',
				name : 'sports',
				src : ''
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/03/29906170001_3396802596001_Memphis-Regional-Preview.mp4'
			},
			scene3 = {
				id : 'scene3',
				name : 'money',
				src : ''
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530516356001_usat86ee36cf-a4c8-42ef-ad2b-eb04736edb3e.mp4'
			},
			scene4 = {
				id : 'scene4',
				name : 'life',
				src : ''
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530582491001_usat6860fe58-4d44-4310-9431-2e90976f53cf.mp4'	
			},
			scene5 = {		
				id : 'scene5',	
				name : 'tech',
				src : ''
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530293413001_usat2b542485-3ca0-4e86-9bf7-101dd6430608.mp4',
			},
			scene6 = {
				id : 'scene6',
				name : 'travel',
				src : ''
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3529185858001_ProcamsD6141-Strategies-for-Preventing-Skin-Cancer.mp4'
			}
		];        
        $scope.myData.init = function(item, event) {

			var url = ("http://api.gannett-cdn.com/MobileServices/MArticleService.svc/mcontent/v1/fronts/" + $scope.scenes.get("name") + "_Tablet_Video");
			var responsePromise = $http.jsonp( url,
			             {  params : {
			                   p1 : "v1"
			                  ,p2 : "v2"
			                }
			              }
			            );
			responsePromise.success(function(data) {
			    // do something with the returned JavaScript object
			    // ( in the "data" parameter ).
			    console.log(data);
			    // for (var i = $scope.scenes.length - 1; i >= 0; i--) {
			    // 	$scope.scenes[i]
			    // };
			});
			responsePromise.error(function(data, status, headers, config) {
			    alert("AJAX failed!");
			});			
			// Model/service JSONP call
			$http.jsonp( url, config );	 
        };          
	} );

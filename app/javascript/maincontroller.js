app.controller("mainController", function($scope, $http) {
        $scope.myData = {};
		$scope.scenes = [
			scene1 = {
				id : 'scene1',
				name : 'news',
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530474700001_usatb5a79027-b22d-43df-84ee-72203c0d6492.mp4'
			},
			scene2 = {
				id : 'scene2',
				name : 'sports',
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/03/29906170001_3396802596001_Memphis-Regional-Preview.mp4'
			},
			scene3 = {
				id : 'scene3',
				name : 'money',
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530516356001_usat86ee36cf-a4c8-42ef-ad2b-eb04736edb3e.mp4'
			},
			scene4 = {
				id : 'scene4',
				name : 'life',
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530582491001_usat6860fe58-4d44-4310-9431-2e90976f53cf.mp4'	
			},
			scene5 = {		
				id : 'scene5',	
				name : 'tech',
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530293413001_usat2b542485-3ca0-4e86-9bf7-101dd6430608.mp4',
			},
			scene6 = {
				id : 'scene6',
				name : 'travel',
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3529185858001_ProcamsD6141-Strategies-for-Preventing-Skin-Cancer.mp4'
			}
		];        
        $scope.myData.init = function(item, event) {
        	var key = '1&api_key=zvmv2v9psky7xxhs6sxu825z',
				url = "http://api.gannett-cdn.com/MobileServices/MArticleService.svc/mcontent/v1/fronts/",
				fullurl;

			function queryFeed(callback) {
			    for (var i = $scope.scenes.length - 1; i >= 0; i--) {
					fullurl = (url + $scope.scenes[i].name + "_Tablet_Video?siteId=" + key);
					var j = i;

					// $.ajax({type: 'GET', url: fullurl, async: true, dataType: 'json', success: function(data){
					// 			console.log(data);  
			  //   				$scope.scenes[j].src = data.modules.Items.content;

					//             }, error: function(xhr, ajaxoptions, thrownerror){
					//                 alert(xhr.status);
					//                 alert(thrownerror);
					//             }});	

					$http.get(fullurl).success(function (data) {
						$scope.scenes[j].src = data.modules.Items.content;
					}).error(function () {
						console.log('unexpected error');
					});							
			    };  	
			    callback();			
			}

			queryFeed(function () {
				console.log($scope.scenes);
			});



       //      var responsePromise = $http.get(url);

       //      responsePromise.success(function(data, status, headers, config) {
			    // console.log(data);            	
       //          $scope.myData.fromServer = data.title;
       //      });
       //      responsePromise.error(function(data, status, headers, config) {
       //          alert("AJAX failed!");
       //      });		    

        };          
	} );
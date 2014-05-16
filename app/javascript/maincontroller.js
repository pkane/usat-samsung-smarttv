app.controller("mainController", function($scope, $http) {
        $scope.myData = {};
		$scope.scenes = [
			scene1 = {
				id : 'scene1',
				name : 'news',
				data : [],
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530474700001_usatb5a79027-b22d-43df-84ee-72203c0d6492.mp4'
			},
			scene2 = {
				id : 'scene2',
				name : 'sports',
				data : [],
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/03/29906170001_3396802596001_Memphis-Regional-Preview.mp4'
			},
			scene3 = {
				id : 'scene3',
				name : 'money',
				data : [],
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530516356001_usat86ee36cf-a4c8-42ef-ad2b-eb04736edb3e.mp4'
			},
			scene4 = {
				id : 'scene4',
				name : 'life',
				data : [],
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530582491001_usat6860fe58-4d44-4310-9431-2e90976f53cf.mp4'	
			},
			scene5 = {		
				id : 'scene5',	
				name : 'tech',
				data : [],
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3530293413001_usat2b542485-3ca0-4e86-9bf7-101dd6430608.mp4',
			},
			scene6 = {
				id : 'scene6',
				name : 'travel',
				data : [],
				src : []
				// src : 'http://videos.usatoday.net/Brightcove2/29906170001/2014/05/29906170001_3529185858001_ProcamsD6141-Strategies-for-Preventing-Skin-Cancer.mp4'
			}
		];        
        $scope.myData.init = function(item, event) {
        	var key = '1&api_key=zvmv2v9psky7xxhs6sxu825z',
				url = "http://api.gannett-cdn.com/MobileServices/MArticleService.svc/mcontent/v1/fronts/",
				fullurl;

			// function queryFeed(callback) {
			//     for (var i = $scope.scenes.length - 1; i >= 0; i--) {
			// 		fullurl = (url + $scope.scenes[i].name + "_Tablet_Video?siteId=" + key);
			// 		var j = i;

			// 		$http.get(fullurl).success(function (data) {
			// 			$scope.scenes[j].src = data.modules.Items.content;
			// 		}).error(function () {
			// 			console.log('unexpected error');
			// 		});							
			//     };  	
			//     callback();			
			// }

			// queryFeed(function () {
			// 	console.log($scope.scenes);
			// });

			// Create the XHR object.
			function createCORSRequest(method, url) {
			  var xhr = new XMLHttpRequest();
			  if ("withCredentials" in xhr) {
			    // XHR for Chrome/Firefox/Opera/Safari.
			    xhr.open(method, url, true);
			  } else if (typeof XDomainRequest != "undefined") {
			    // XDomainRequest for IE.
			    xhr = new XDomainRequest();
			    xhr.open(method, url);
			  } else {
			    // CORS not supported.
			    xhr = null;
			  }
			  return xhr;
			}

			// Helper method to parse the title tag from the response.
			function getTitle(text) {
			  return text.match('<title>(.*)?</title>')[1];
			}

			// Make the actual CORS request.

			function queryFeed(url, iterator, callback) {			  	  
			  var requestService = createCORSRequest('GET', url);
			  if (!requestService) {
			    alert('CORS not supported');
			    return;
			  }

			  // Response handlers.
			  requestService.onload = function() {
				$scope.scenes[iterator].data = requestService.response;
				// console.log(iterator, requestService.response);
			    // alert('Response from CORS request to ' + url + ': ' + title);
			  };

			  requestService.onerror = function() {
			    alert('Woops, there was an error making the request.');
			  };

			  requestService.send();

			  callback();
			}

			for (var i = $scope.scenes.length - 1; i >= 0; i--) {		

				fullurl = (url + $scope.scenes[i].name + "_Tablet_Video?siteId=" + key);

				queryFeed(fullurl, i, function () {
					console.log($scope.scenes[i].data);					  
				});

			}

        };          


	} );
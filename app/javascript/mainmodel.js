angular.module("app", [])
    .controller("MyController", function($scope, $http, $section) {
        $scope.myData = {};
        $scope.myData.doClick = function(item, event) {

			var url = ("http://api.gannett-cdn.com/MobileServices/MArticleService.svc/mcontent/v1/fronts/" + $section.get("name") + "_Tablet_Video");
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
			});

        }


    } );
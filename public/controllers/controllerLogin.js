var labSysApp = angular.module('labService', []);
labSysApp.controller("labSysCtrlLogin", ['$scope','$http','$window',function($scope,$http,$window){



	$scope.user = ""

	$scope.login = function(who){		
		$http.get('/consultAdmin/'+who).success(function(response){
			if(response != null){
				
				if(response.name == $scope.user.username && response.password == $scope.user.password){
					$window.location.href = '/index.html';
				}
				else{
					alert("¡Usuario o contraseña incorrecta!");
				}
			}	
			else{
				alert("¡Usuario o contraseña incorrecta!");
			}
		});
	};



}]);
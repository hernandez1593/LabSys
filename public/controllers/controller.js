var labSysApp = angular.module('labService', ['ngFileUpload']);
labSysApp.controller("labSysCtrl", ['$scope', '$filter','$http', 'Upload',function($scope,$filter,$http, Upload){


	$scope.request = "";
    var arreglo = [];


	$scope.insertRequest = function(){
		var newDate = new Date();
		$scope.request.year = $filter('date')(newDate, 'yyyy');
		$scope.month = $filter('date')(newDate, 'MM');
        $scope.request.availability = arreglo;
        $scope.request.img = "";
		if ($scope.request.month>="07") {
			$scope.request.semesterNumber = 2;	
		}else{
			$scope.request.semesterNumber = 1;	
		};
		

		$http.post('/insertRequest',$scope.request).success(function(response){
						window.alert("¡Solicitud ingresada correctamente!");
						//console.log(response);
						});
		//$scope.upload(file); //Falla
	};

	$scope.updateRequest = function(request){
		$http.put('/updateRequest/'+request._id,request,function(response){
		//console.log(response);
		});
	};
    
    $scope.searchToKill = function(name){
        var i = 0;
            
        for (var i = 0; i <= arreglo.length; i++) {
            if(arreglo[i] == name){
                return i;
            }
        };
        console.log(i);
        i = -1;
        return i;
	};
    
    $scope.set_color2 = function (name) {
  		var chango = $scope.searchToKill(name);

        if (chango == -1){
        	return { background: "ccc" }
        }else{
            return { background: "green" }
        }
	};
    $scope.checkStade = function(name){

        if (arreglo == [])
        {
            arreglo.push(name);
            console.log(arreglo[0]);
        }else{
            var chango = $scope.searchToKill(name);

            if (chango == -1){
                arreglo.push(name);
                console.log(name);
            }else{
                arreglo.splice(chango,1);
            }
        }
	};
    
    
    
	$scope.consultRequests = function(){
		$http.get('/consultRequests').success(function(response){
			$scope.requestsList = response;
			$scope.request = "";
		});	

	};

	//CON RESPECTO AL HORARIO (HACER)
	$scope.consultRequest = function(id){
		$http.get('/consultRequest/:id'+id).success(function(response){
			$scope.request = response;
		});
	};

//---------- Subir archivos -------------
	
 	$scope.upload = function (file) {
        Upload.upload({
            url: '/uploads',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };




//---------- Fin Subir archivos -------------


	

}]);
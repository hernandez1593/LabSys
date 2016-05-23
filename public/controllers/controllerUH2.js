var labSysApp = angular.module('labService',[]);
labSysApp.controller("labSysCtrl",['$scope','$filter','$http',function($scope,$filter,$http){


	$scope.request = ""
	$scope.labList = ""
	$scope.requestsList = ""
	$scope.selLab = ""

	$scope.idt = {
		l1 : "", l2 : "", l3 : "", l4 : "",
		k1 : "", k2 : "", k3 : "", k4 : "",
		m1 : "", m2 : "", m3 : "", m4 : "",
		j1 : "", j2 : "", j3 : "", j4 : "",
		v1 : "", v2 : "", v3 : "", v4 : "",
		s1 : "", s2 : "" 
	}

	$scope.laboratory = {
		listL1 : "", listL2 : "", listL3 : "", listL4 : "",
		listK1 : "", listK2 : "", listK3 : "", listK4 : "",
		listM1 : "", listM2 : "", listM3 : "", listM4 : "",
		listJ1 : "", listJ2 : "", listJ3 : "", listJ4 : "",
		listV1 : "", listV2 : "", listV3 : "", listV4 : "",
		listS1 : "", listS2 : ""
	}
	$scope.sels = {
		selL1 : "", selL2 : "", selL3 : "", selL4 : "", 
		selK1 : "", selK2 : "", selK3 : "", selK4 : "",
		selM1 : "", selM2 : "", selM3 : "", selM4 : "",
		selJ1 : "", selJ2 : "", selJ3 : "", selJ4 : "",
		selV1 : "", selV2 : "", selV3 : "", selV4 : "",
		selS1 : "", selS2 : ""
	}

	$scope.empty = function(){
		$scope.sels.selL1 = ""; $scope.sels.selL2 = "";
		$scope.sels.selL3 = ""; $scope.sels.selL4 = "";

		$scope.sels.selK1 = ""; $scope.sels.selK2 = "";
		$scope.sels.selK3 = ""; $scope.sels.selK4 = "";

		$scope.sels.selM1 = ""; $scope.sels.selM2 = "";
		$scope.sels.selM3 = ""; $scope.sels.selM4 = "";

		$scope.sels.selJ1 = ""; $scope.sels.selJ2 = "";
		$scope.sels.selJ3 = ""; $scope.sels.selJ4 = "";
		$scope.sels.selV1 = ""; $scope.sels.selV2 = "";
		$scope.sels.selV3 = ""; $scope.sels.selV4 = "";
		$scope.sels.selS1 = ""; $scope.sels.selS2 = "";

		$scope.idt = {
		l1 : "", l2 : "", l3 : "", l4 : "",
		k1 : "", k2 : "", k3 : "", k4 : "",
		m1 : "", m2 : "", m3 : "", m4 : "",
		j1 : "", j2 : "", j3 : "", j4 : "",
		v1 : "", v2 : "", v3 : "", v4 : "",
		s1 : "", s2 : "" 
	}
	}

	$scope.updateRequest = function(request){
		$http.put('/updateRequest/'+request._id,request,function(response){
		});
	};

	$scope.consultRequests = function(){
		$http.get('/consultRequests').success(function(response){
			$scope.requestsList = response;
			$scope.request = "";
		});
	};

	$scope.consultLabs = function(){
		$http.get('/consultLabs').success(function(response){
			$scope.labList = response;
		});
	};
	

	$scope.consultRequest = function(id){
		$http.get('/consultRequest/:id'+id).success(function(response){
			$scope.request = response;
		});
	};

	
	$scope.fullDaysByLab = function(){	
		$http.get('/consultFullDaysByLab/'+$scope.selLab.name).success(function(response){
			$scope.idt.l1 = response.l1; $scope.idt.l2 = response.l2;
			$scope.idt.l3 = response.l3; $scope.idt.l4 = response.l4;
 
			$scope.idt.k1 = response.k1; $scope.idt.k2 = response.k2;
			$scope.idt.k3 = response.k3; $scope.idt.k4 = response.k4;

			$scope.idt.m1 = response.m1; $scope.idt.m2 = response.m2;
			$scope.idt.m3 = response.m3; $scope.idt.m4 = response.m4;

			$scope.idt.j1 = response.j1; $scope.idt.j2 = response.j2;
			$scope.idt.j3 = response.j3; $scope.idt.j4 = response.j4;

			$scope.idt.v1 = response.v1; $scope.idt.v2 = response.v2;
			$scope.idt.v3 = response.v3; $scope.idt.v4 = response.v4;

			$scope.idt.s1 = response.s1; $scope.idt.s2 = response.s2;
		});	
	}

	$scope.consultRequestsInSpecTime = function(day,list){
		$http.get('/consultRequestsInSpecTime/'+day).success(function(response){

			if (day == 'L1') {$scope.laboratory.listL1 = response}
			else if (day == 'L2') {$scope.laboratory.listL2 = response}
			else if (day == 'L3') {$scope.laboratory.listL3 = response}
			else if (day == 'L4') {$scope.laboratory.listL4 = response}

			else if (day == 'K1') {$scope.laboratory.listK1 = response}
			else if (day == 'K2') {$scope.laboratory.listK2 = response}

			else if (day == 'K3') {$scope.laboratory.listK3 = response;}

			else if (day == 'K4') {$scope.laboratory.listK4 = response}

			else if (day == 'M1') {$scope.laboratory.listM1 = response}
			else if (day == 'M2') {$scope.laboratory.listM2 = response}
			else if (day == 'M3') {$scope.laboratory.listM3 = response}
			else if (day == 'M4') {$scope.laboratory.listM4 = response}

			else if (day == 'J1') {$scope.laboratory.listJ1 = response}
			else if (day == 'J2') {$scope.laboratory.listJ2 = response}
			else if (day == 'J3') {$scope.laboratory.listJ3 = response}
			else if (day == 'J4') {$scope.laboratory.listJ4 = response}

			else if (day == 'V1') {$scope.laboratory.listV1 = response}
			else if (day == 'V2') {$scope.laboratory.listV2 = response}
			else if (day == 'V3') {$scope.laboratory.listV3 = response}
			else if (day == 'V4') {$scope.laboratory.listV4 = response}

			else if (day == 'S1') {$scope.laboratory.listS1 = response}
			else if (day == 'S2') {$scope.laboratory.listS2 = response}

		});
	};

	$scope.fullLists = function(){
		$scope.consultRequestsInSpecTime('L1','laboratory.listL1');
		$scope.consultRequestsInSpecTime('L2','laboratory.listL2');
		$scope.consultRequestsInSpecTime('L3','laboratory.listL3');
		$scope.consultRequestsInSpecTime('L4','laboratory.listL4');

		$scope.consultRequestsInSpecTime('K1','laboratory.listK1');
		$scope.consultRequestsInSpecTime('K2','laboratory.listK2');
		$scope.consultRequestsInSpecTime('K3','laboratory.listK3');
		$scope.consultRequestsInSpecTime('K4','laboratory.listK4');

		$scope.consultRequestsInSpecTime('M1','laboratory.listM1');
		$scope.consultRequestsInSpecTime('M2','laboratory.listM2');
		$scope.consultRequestsInSpecTime('M3','laboratory.listM3');
		$scope.consultRequestsInSpecTime('M4','laboratory.listM4');

		$scope.consultRequestsInSpecTime('J1','laboratory.listJ1');
		$scope.consultRequestsInSpecTime('J2','laboratory.listJ2');
		$scope.consultRequestsInSpecTime('J3','laboratory.listJ3');
		$scope.consultRequestsInSpecTime('J4','laboratory.listJ4');

		$scope.consultRequestsInSpecTime('V1','laboratory.listV1');
		$scope.consultRequestsInSpecTime('V2','laboratory.listV2');
		$scope.consultRequestsInSpecTime('V3','laboratory.listV3');
		$scope.consultRequestsInSpecTime('V4','laboratory.listV4');

		$scope.consultRequestsInSpecTime('S1','laboratory.listS1');
		$scope.consultRequestsInSpecTime('S2','laboratory.listS2');
	};

	$scope.intentToChangeLab = function(lab){
		$scope.empty();
		$scope.fullDaysByLab(lab);
	};

	$scope.set_color = function (request) {
  		if (request.status == 0) {
    		return { color: "green" }
  		}
  		else if(request.status == 1){
  			return { color: "#FFBF00" }
  		}
  		else{
  			return { color: "red" }	
  		}
	};

	$scope.findId = function(name){
		for (var i = $scope.requestsList.length - 1; i >= 0; i--) {
			if($scope.requestsList[i].fullName == name){
				return $scope.requestsList[i]._id;
			}
		};
	};
	$scope.findIdLab = function(name){
		for (var i = $scope.labList.length - 1; i >= 0; i--) {
			if($scope.labList[i].name == name){
				return $scope.labList[i]._id;
			}
		};
	};

	$scope.intentToChangeStudent = function(dayS,who){
			var lab = $scope.selLab._id;
			var id = $scope.findId(who);

		if(lab != "" && lab != undefined){
			$http.get('/consultRequest/'+id).success(function(response){	
				if(response.status == 0){
					$http.put('/updateLab/'+lab, $scope.sels)
					.success(function(response){
						$scope.status0 = {num : 1};
						$http.put('/updateRequest/'+id,$scope.status0).success(function(response){
							//$scope.consultLabs();
							$scope.consultRequests();
							$scope.cleanStatus(dayS);
							$scope.setSel(dayS);
							alert("Estudiante asignado correctamente!")
						});
					});
				}
				else if(response.status == 1){
					$http.put('/updateLab/'+lab,$scope.sels)
					.success(function(response){
						$scope.status1 = {num : 2};
						$http.put('/updateRequest/'+id,$scope.status1).success(function(response){
							//$scope.consultLabs();
							$scope.consultRequests();
							$scope.cleanStatus(dayS);
							$scope.setSel(dayS);
							alert("Estudiante asignado correctamente!")
						});
					});
				}else{
					alert("ERROR, está intentando asignar un estudiante sin disponibilidad")
				}
			})}else{
				$scope.empty();
				alert("No hay un laboratorio seleccionado!")
			}
	}
	
	$scope.setSel = function(dayS){
			 if(dayS=="L1"){$scope.idt.l1=$scope.sels.selL1;}
		else if(dayS=="L2"){$scope.idt.l2=$scope.sels.selL2;}
		else if(dayS=="L3"){$scope.idt.l3=$scope.sels.selL3;}
		else if(dayS=="L4"){$scope.idt.l4=$scope.sels.selL4;}
		else if(dayS=="K1"){$scope.idt.k1=$scope.sels.selK1;}
		else if(dayS=="K2"){$scope.idt.k2=$scope.sels.selK2;}
		else if(dayS=="K3"){$scope.idt.k3=$scope.sels.selK3;}
		else if(dayS=="K4"){$scope.idt.k4=$scope.sels.selK4;}
		else if(dayS=="M1"){$scope.idt.m1=$scope.sels.selM1;}
		else if(dayS=="M2"){$scope.idt.m2=$scope.sels.selM2;}
		else if(dayS=="M3"){$scope.idt.m3=$scope.sels.selM3;}
		else if(dayS=="M4"){$scope.idt.m4=$scope.sels.selM4;}
		else if(dayS=="J1"){$scope.idt.j1=$scope.sels.selJ1;}
		else if(dayS=="J2"){$scope.idt.j2=$scope.sels.selJ2;}
		else if(dayS=="J3"){$scope.idt.j3=$scope.sels.selJ3;}
		else if(dayS=="J4"){$scope.idt.j4=$scope.sels.selJ4;}
		else if(dayS=="V1"){$scope.idt.v1=$scope.sels.selV1;}
		else if(dayS=="V2"){$scope.idt.v2=$scope.sels.selV2;}
		else if(dayS=="V3"){$scope.idt.v3=$scope.sels.selV3;}
		else if(dayS=="V4"){$scope.idt.v4=$scope.sels.selV4;}
		else if(dayS=="S1"){$scope.idt.s1=$scope.sels.selS1;}
		else if(dayS=="S2"){$scope.idt.s2=$scope.sels.selS2;}

	}

	$scope.cleanStatus = function(dayS){
		if(dayS=="L1"){
			if($scope.idt.l1 !=""){			
				var id = $scope.findId($scope.idt.l1);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});	
			}}
		else if(dayS=="L2"){
			if($scope.idt.l2 !=""){			
				var id = $scope.findId($scope.idt.l2);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});
			}}
		else if(dayS=="L3"){
			if($scope.idt.l3!=""){			
				var id = $scope.findId($scope.idt.l3);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});	
			}}
		else if(dayS=="L4"){
			if($scope.idt.l4 !=""){			
				var id = $scope.findId($scope.idt.l4);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});
			}}
		else if(dayS=="K1"){
			if($scope.idt.k1 !=""){			
				var id = $scope.findId($scope.idt.k1);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});	
			}}
		else if(dayS=="K2"){
			if($scope.idt.k2 !=""){			
				var id = $scope.findId($scope.idt.k2);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});
			}}
		else if(dayS=="K3"){
			if($scope.idt.k3 !=""){			
				var id = $scope.findId($scope.idt.k3);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});
			}}
		else if(dayS=="K4"){
			if($scope.idt.k4 !=""){			
				var id = $scope.findId($scope.idt.k4);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});	
			}}
		else if(dayS=="M1"){
			if($scope.idt.m1 !=""){			
				var id = $scope.findId($scope.idt.m1);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});	
			}}
		else if(dayS=="M2"){
			if($scope.idt.m2 !=""){			
				var id = $scope.findId($scope.idt.m2);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});	
			}}
		else if(dayS=="M3"){
			if($scope.idt.m3 !=""){			
				var id = $scope.findId($scope.idt.m3);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
				});	
			}}
		else if(dayS=="M4"){
			if($scope.idt.m4 !=""){			
				var id = $scope.findId($scope.idt.m4);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
	
		else if(dayS=="J1"){
			if($scope.idt.j1 !=""){			
				var id = $scope.findId($scope.idt.j1);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="J2"){
			if($scope.idt.j2 !=""){			
				var id = $scope.findId($scope.idt.j2);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="J3"){
			if($scope.idt.j3 !=""){			
				var id = $scope.findId($scope.idt.j3);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="J4"){
			if($scope.idt.j4 !=""){			
				var id = $scope.findId($scope.idt.j4);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="V1"){
			if($scope.idt.v1 !=""){			
				var id = $scope.findId($scope.idt.v1);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="V2"){
			if($scope.idt.v2 !=""){			
				var id = $scope.findId($scope.idt.v2);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="V3"){
			if($scope.idt.v3 !=""){			
				var id = $scope.findId($scope.idt.v3);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="V4"){
			if($scope.idt.v4 !=""){			
				var id = $scope.findId($scope.idt.v4);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="S1"){
			if($scope.idt.s1 !=""){			
				var id = $scope.findId($scope.idt.s1);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
		}}
		else if(dayS=="S2"){
			if($scope.idt.s2 !=""){			
				var id = $scope.findId($scope.idt.s2);			
				$http.get('/consultRequest/'+id).success(function(response){
					var stat = response.status;
					$scope.status3 = {num : stat-1};
					$http.put('/updateRequest/'+id,$scope.status3).success(function(response){
						$scope.consultRequests();				
					});
			});
			}}
	}

	$scope.consultLabs();
	$scope.consultRequests();
	$scope.fullLists();

}]);
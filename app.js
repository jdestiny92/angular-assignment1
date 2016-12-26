(function(){

'use strict';	

angular.module('lunchChecker', [])

	.controller('checkLunch', function($scope){
		$scope.data = '';
		$scope.result = '';

		$scope.convert = function(){
			var data = $scope.data;

			data = data.toString();

			data = data.split(',');

			for(var i=0; i<data.length; i++){
				data[i] = data[i].trim();

				if(data[i] == ''){
					data.splice(i, 1);
				};
			}

			if(data.length <= 3){
				$scope.result = 'Enjoy!';
			}

			if(data.length > 3){
				$scope.result = 'Too much!';
			}
			

			if(data == ''){
				$scope.result = 'Please enter data first.';
			}

			console.log(data);
		}
	})







})();
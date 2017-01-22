 /* Custom modified js */

 angular.module('cvApp', [])

	.controller('portfolioCtrl', ['$scope', '$timeout', function($scope, $timeout){

		$scope.hasLoaded = false;
		var isHidden = false;
		var canPressButton = true;

		$timeout(function(){

		 	console.log("done!");
		 	$scope.hasLoaded = true;

		}, 0);

		// TODO Kan peppra bugg

		$scope.hideStarttext = function(){

			isHidden = isHidden ? false : true;

			if(isHidden){
				$('#banner-text1').hide();
				$('#banner-text2').hide();
			} else {
				$('#banner-text1').show();
				$('#banner-text2').show();
			}
			
		}


		$scope.projects = [];

		var NUM_PICTURES_CLOCKWORK = 9, NUM_KORTFILMER = 11, NUM_INVASION = 16, NUM_TUMBA_TARZAN = 13, NUM_FOTON = 15;

		for(var i = 0; i < NUM_FOTON; i++){
			var obj = {'title' : 'Övriga foton', 'img_prepath' : 'foton', 'img_format': 'jpg', 'img_index' : i+1};
			$scope.projects.push(obj);
		}

		for(var i = 0; i < NUM_PICTURES_CLOCKWORK; i++){
			var obj = {'title' : 'Clockwork Orange', 'img_prepath' : 'clockwork', 'img_format' : 'jpg', 'img_index' : i+1};
			$scope.projects.push(obj);
		}

		for(var i = 0; i < NUM_INVASION; i++){
			var obj = {'title' : 'Invasion', 'img_prepath' : 'invasion', 'img_format' : 'jpg', 'img_index' : i+1};
			$scope.projects.push(obj);
		}

		// Första är png LOL på fidde
		for(var i = 1; i < NUM_KORTFILMER; i++){
			var obj = {'title' : 'Blandade kortfilmer', 'img_prepath' : 'kortfilmer', 'img_format' : 'jpg', 'img_index' : i+1};
			$scope.projects.push(obj);
		}

		for(var i = 0; i < NUM_TUMBA_TARZAN; i++){
			var obj = {'title' : 'Tumba Tarzan', 'img_prepath' : 'tumba_tarzan', 'img_format' : 'jpg', 'img_index' : i+1};
			$scope.projects.push(obj);
		}


	}])

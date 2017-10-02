
//========================================homeController================
app.controller("homeController", [
	'$scope', "service", "$window", function ($scope, service, $window) {

	}]);

//========================================TimeCtrl================

app.controller('TimeCtrl', [
	'$scope', "service", "$window", "$interval", function ($scope, service, $window, $interval) {

	}]);

//========================================ImageController================

app.controller("ImageController", [
	'$scope', "service", "$window", function ($scope, service, $window) {
		$scope.imege;
		function imagesListComponent() {
			$scope.imege = service.getimages().then(function (data) {
			    if (data == false) {
			        debugger;
			        console.log('הפעולה נכשלה');
			    }
			    else {
			        //אם הפעולה הצליחה והנתונים חזרו מהשרת;
			        console.log('המידע הגיעה בהצלחה');
					console.log("imege", data);
					$scope.imege = data;
			    }
			});			

		};
		imagesListComponent();

	}]);

//========================================FbController================

app.controller("FbController", [
	'$scope', "serviceFacebookLogin", "$window", function ($scope, serviceFacebookLogin, $window) {
		$scope.name = "Login Please";
		$scope.FacebookLogin = (function () {
			return serviceFacebookLogin.loginFb();
		}
		)
	}]);

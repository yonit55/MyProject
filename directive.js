
app.directive('selectm', function () {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "directive/directive.html",
		controller: function ($scope, service, $interval,$element) {
			Connect();
			function Connect() {
				$scope.hours = 0;
				$scope.minutes = 0;
				$scope.seconds = 0;
				time = { hours: 0, minutes: 0, seconds: 0 };
				$scope.num = 2;
				time.hours = $interval(function () {
					$scope.hours = service.isConnected($scope.hours);
					css($scope.hours, 1);
				}, 60 * 100000);

				time.minutes = $interval(function () {
					$scope.minutes = service.isConnected($scope.minutes);
					css($scope.minutes, 2);
				}, 60 * 1000);
				time.seconds = $interval(function () {
					$scope.seconds = service.isConnected($scope.seconds);
					css($scope.seconds,3);
				}, 60 * 10);
				function css(scope,resors) {
					if (scope == 60) {
						if (resors == 1) {
							$scope.hours = 0;
						}
						else if (resors == 2) {
							$scope.minutes = 0;
							$scope.hours ++;
						}
						else {
							$scope.seconds = 0;
							$scope.minutes ++;

						}
					}
					if (scope % 2 != 0) {
						$element.addClass('customClassRed');
					}
					else {
						$element.addClass('customClass');
					}
				}
			}
		},

		link: function (scope, element, attributes) {
			
		}
	}
});
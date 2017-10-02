app.config(function ($routeProvider, $httpProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "view/home.html",
			controller: 'homeController',
		})
		.when("/secondary", {
			templateUrl: "view/secondary.html",
			controller: 'TimeCtrl',
		})
		.when("/images", {
			templateUrl: "view/images.html",
			controller: 'ImageController',
		})
		.when("/Profile", {
			templateUrl: "view/profile.html",
			controller: 'FbController',
	});
	$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

})

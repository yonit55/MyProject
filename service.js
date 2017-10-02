//========================================service================

app.service("service", ['$resource', "$q", "$http", function ($resource, $q, $http) {
	return {
		getimages: getimages,
		isConnected: isConnected,
	}

	// קידום הטיימר
	function isConnected(i) {
		i++;
		return i;
	}

	// קבלת התמונות מפליקר
	function getimages() {	    
	    var flickrObject = $http.get('https://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json').then(function (response) {
	        return response.data;
	    });
		return flickrObject;
	};
}
])

//========================================serviceFacebookLogin================
app.service("serviceFacebookLogin", ['$resource', "$q", "$http", function ($resource, $q, $http) {
	return {
		loginFb: loginFb,

		//login: login,
	}
	//	facebook: {
	//		clientId: 'xxxxxxx',
	//			url = '/api/public/authentication/facebook',
	//			authorizationEndpoint = 'https://www.facebook.com/v2.3/dialog/oauth',
	//			redirectUri = window.location.protocol + '//' + window.location.host + '/',  //  window.location.origin || window.location.protocol + '//' + window.location.host + '/'
	//			scope = 'email,public_profile',
	//			scopeDelimiter = ',',
	//			requiredUrlParams = ['display', 'scope'],
	//			display = 'popup',
	//			type = '2.0',
	//			popupOptions = { width: 481, height: 269 }
	//	};
	//	function getimages() {
	//	function login() {
	//		facebookLogin(window.cordovaOauth, window.http);
	//	}
	//	function facebookLogin($cordovaOauth, $http) {
	//		$cordovaOauth.FB("1633195863589792", ["email", "public_profile"], { redirect_uri: "http://localhost/callback" }).then(function (result) {
	//			displayData($http, result.access_token);
	//		}, function (error) {
	//			alert("Error: " + error);
	//		});
	//	}
	//	function displayData($http, access_token) {
	//		$http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: access_token, fields: "name,gender,location,picture", format: "json" } }).then(function (result) {
	//			var name = result.data.name;
	//			var gender = result.data.gender;
	//			var picture = result.data.picture;

	//			var html = '<table id="table" data-role="table" data-mode="column" class="ui-responsive"><thead><tr><th>Field</th><th>Info</th></tr></thead><tbody>';
	//			html = html + "<tr><td>" + "Name" + "</td><td>" + name + "</td></tr>";
	//			html = html + "<tr><td>" + "Gender" + "</td><td>" + gender + "</td></tr>";
	//			html = html + "<tr><td>" + "Picture" + "</td><td><img src='" + picture.data.url + "' /></td></tr>";

	//			html = html + "</tbody></table>";

	//			document.getElementById("listTable").innerHTML = html;
	//			$.mobile.changePage($("#profile"), "slide", true, true);
	//		}, function (error) {
	//			alert("Error: " + error);
	//		});
	//FB.Event.subscribe('auth.statusChange', function (response) {

	function loginFb1() {
		FB.api('/me', function (response) {
			document.getElementById('login').style.display = "block";
			document.getElementById('login').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture" />';
		});
		$http / get('https://graph.facebook.com/me?fields=id,name,picture');
	}
	function loginFb() {
		$http.post('https://graph.facebook.com/v2.6/device/login').access_token(YOUR_APP_ID|CLIENT_TOKEN).scope(COMMA_SEPARATED_PERMISSION_NAMES).VALID_OAUTH_REDIRECT_URL;
		
		//access_token = <YOUR_APP_ID|CLIENT_TOKEN >
		//	scope=<COMMA_SEPARATED_PERMISSION_NAMES> // e.g. public_profile,user_likes
		//		redirect_uri=<VALID_OAUTH_REDIRECT_URL>
		//FB.login(function (response) {
		//	if (response.authResponse) {
		//		console.log('Welcome!  Fetching your information.... ');
		//		FB.api('/me', function (response) {
		//			console.log('Good to see you, ' + response.name + '.');
		//		});
		//	} else {
		//		console.log('User cancelled login or did not fully authorize.');
		//	}
		//});
	}
}])



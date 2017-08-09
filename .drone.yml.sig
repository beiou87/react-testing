<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="author" content="bradrydzewski">
	<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

	<link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

	<title></title>
	<script>
			window.ENV = {};
			window.ENV.server = window.location.protocol+"//"+window.location.host;
			window.ENV.csrf = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXh0IjoieHVlcWluZ3hpYW8iLCJ0eXBlIjoiY3NyZiJ9.4ME4lMFJkEa7VVU9CsAhq84O_pELX4Ox1lAjK-ywLXY"
			
			window.USER = {"id":1,"login":"xueqingxiao","email":"xueqingxiao@gmail.com","avatar_url":"https://avatars1.githubusercontent.com/u/4010906?v=4","active":false,"synced":1502266724};
			
	</script>
	<script>
		
		
		if (!window.EventSource) {
			var ssePolyfill = document.createElement("script");
			ssePolyfill.src = "https://cdnjs.cloudflare.com/ajax/libs/event-source-polyfill/0.0.9/eventsource.min.js";
			document.body.appendChild(ssePolyfill);
		}
	</script>
	<script src="/bower_components/webcomponentsjs/webcomponents-loader.js"></script>

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
	<link rel="import" href="/src/drone/drone-app.html">

	<style>
		html, body {
			padding:0px;
			margin:0px;
		}
	</style>
</head>
<body>
	<drone-app></drone-app>
</body>
</html>

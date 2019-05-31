jQuery(document).ready( function($) {

	cdTracker = false;
	if( typeof ClickDGravityFormsMapper === "function" ){
		cdTracker = true;
	}

	data = {
		Cookies: navigator.cookieEnabled,
		BrowserLanguage: navigator.browserLanguage,
		Language: navigator.language,
		Platform: navigator.platform,
		ConnectionSpeed: navigator.connectionSpeed,
		UserAgent: navigator.userAgent,
		Webdriver: navigator.webdriver,
		Geolocation: navigator.geolocation,
		CDTracker: cdTracker
	};

	jQuery.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
        dataType: "json",
		data: JSON.stringify(data),
		url: "https://cd-tracker.herokuapp.com/api/visitors",
	});

});

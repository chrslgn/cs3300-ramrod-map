window.addEventListener('load', function() {	
	// https://developer.mozilla.org/en/Code_snippets/Tabbed_browser
	var browser = window.opener.getBrowser();
	var doc = window.opener.content.document;
	var c = doc.SimpleMap;
	Components.utils.reportError(c.addresses); // DEBUG
}, false);
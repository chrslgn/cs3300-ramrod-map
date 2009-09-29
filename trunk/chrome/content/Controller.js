var Controller = {
	preferences: null,
	addresses: null,
	parsePage: function(document) {
		alert('"stuff happens" by simplemap');
	},
	getPreferences: function() {
	},
	setAddresses: function(addresses) {
	},
	setPreferences: function(preferences) {
	},
	mapAddress: function(address) {
	},
	showDirections: function(string) {
	},
	newWindow: function(){
	}
};

window.addEventListener('load', function() {
	/*
	var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService);
	prefs = prefs.getBranch('extensions.simplemap.');
	prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);
	prefs.getCharPref('charPrefName');
	prefs.getBoolPref('boolPrefName');
	prefs.addObserver('', this, false);
	*/

	var appcontent = document.getElementById('appcontent');
	if (!appcontent)
		return null;
	appcontent.addEventListener('DOMContentLoaded', function(e) {
		var doc = e.originalTarget;
		if (doc.body === undefined)
			return null;
		Controller.parsePage(doc);
	}, true);
}, false);
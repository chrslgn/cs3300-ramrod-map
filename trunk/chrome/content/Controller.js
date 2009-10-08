var Controller = function(bodyDOM) {
	Controller.preferences = null;
	Controller.setPreferences = function(preferences) {
	};
	Controller.getPreferences = function() {
	};
	
	this.DOM = bodyDOM;
	
	this.addresses = null; 
	this.parsePage = function() {
		var p = new Parser(this.DOM);
		this.setAddresses(p.getAddresses());
	};
	this.setAddresses = function(addrs) {
		this.addresses = addrs;
	};
	this.mapAddress = function(address) {
	};
	this.showDirections = function(string) {
	};
	this.newWindow = function(){
	};
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
		var c = new Controller(doc.body);
		c.parsePage();
	}, true);
}, false);
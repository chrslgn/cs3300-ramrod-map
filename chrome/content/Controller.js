var Controller = function(bodyDOM) {
	this.preferences = Preferences;
	this.setPreferences = function(preferences) {
		this.preferences = preferences;
	};
	this.getPreferences = function() {
		return this.preferences;
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
	var appcontent = document.getElementById('appcontent');
	if (!appcontent)
		return null;
	
	var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService);
	prefs = prefs.getBranch('extensions.simplemap.');
	prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);
	Preferences.setMyLocation(prefs.getCharPref('location'));
	Preferences.setAddressDialogListOn(prefs.getBoolPref('enableList'));
	Preferences.setParserOn(prefs.getBoolPref('enableParser'));
	
	appcontent.addEventListener('DOMContentLoaded', function(e) {
		var doc = e.originalTarget;
		if (doc.body === undefined)
			return null;
		var c = new Controller(doc.body);
		prefs.addObserver('', c.preferences, false);
	//	Components.utils.reportError(c.getPreferences()); // DEBUG
		if (c.getPreferences().getParserOn())
			c.parsePage();
	}, true);
}, false);
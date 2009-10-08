var Preferences = {
	parserOn: true,
	myLocation: null,
	AddressListDialogOn: null,
	
	toString: function() {
		return this.getStreet() + ', ' + this.getCity() + ', ' + this.getState() + ' ' + this.getZip();
	},
	
	getParserOn: function() {
		return this.parserOn;
	},
	
	getMyLocation: function() {
		return this.myLocation;
	},
	
	getAddressDialogListOn: function() {
		return this.AddressListDialogOn;
	},
	
	setAddressDialogListOn: function(on) {
		this.AddressListDialogOn = on;
	},
	
	setParserOn: function(on) {
		this.parserOn = on;
	},
	
	setMyLocation: function(a) {
		this.myLocation = a;
	},
	
	observe: function(subject, topic, data) {
		if (topic != 'nsPref:changed')
			return null;
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService);
		prefs = prefs.getBranch('extensions.simplemap.');
		switch (data) {
			case 'location':
				Preferences.setMyLocation(prefs.getCharPref('location'));
				break;
			case 'enableList':
				Preferences.setAddressDialogListOn(prefs.getBoolPref('enableList'));
				break;
			case 'enableParser':
				Preferences.setParserOn(prefs.getBoolPref('enableParser'));
				break;
		}
	}
};


var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService);
prefs = prefs.getBranch('extensions.simplemap.');
prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);
prefs.getCharPref('charPrefName');
prefs.getBoolPref('boolPrefName');
prefs.addObserver('', Preferences, false);
delete prefs;
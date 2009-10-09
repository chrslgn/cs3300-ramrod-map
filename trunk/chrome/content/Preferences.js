var Preferences = {
	parserOn: null,
	myLocation: null,
	AddressListDialogOn: null,
	
	toString: function() {
		return 'Preferences [parser:' + Preferences.getParserOn() + '; list:' + Preferences.getAddressDialogListOn() + '; location:' + Preferences.getMyLocation() + ']';
	},
	
	getParserOn: function() {
		return Preferences.parserOn;
	},
	
	getMyLocation: function() {
		return Preferences.myLocation;
	},
	
	getAddressDialogListOn: function() {
		return Preferences.AddressListDialogOn;
	},
	
	setAddressDialogListOn: function(on) {
		Preferences.AddressListDialogOn = on;
	},
	
	setParserOn: function(on) {
	//	Components.utils.reportError('prefs parser: ' + on); // DEBUG
		Preferences.parserOn = on;
	},
	
	setMyLocation: function(a) {
		Preferences.myLocation = a;
	},
	
	observe: function(subject, topic, data) {
	//	Components.utils.reportError(subject + '|' + topic + '|' + data); // DEBUG
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
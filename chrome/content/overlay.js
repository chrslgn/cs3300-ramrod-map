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
	
	var showOnMap = document.getElementById('show-on-map');
	showOnMap.addEventListener('command', function(e) {
		var c = new Controller();
		prefs.addObserver('', c.preferences, false);
		Components.utils.reportError(gContextMenu.target.ownerDocument.getSelection()); // DEBUG
		c.mapAddress(gContextMenu.target.ownerDocument.getSelection());
	}, true);
	
	document.getElementById("contentAreaContextMenu").addEventListener('popupshowing', function(e) {
		document.getElementById('show-on-map').hidden = !gContextMenu.isTextSelected;
	}, false);
}, false);
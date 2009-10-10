window.addEventListener('load', function() {	
	// https://developer.mozilla.org/en/Code_snippets/Tabbed_browser
	var browser = window.opener.getBrowser();
	var doc = window.opener.content.document;
	var c = doc.SimpleMap;
	Components.utils.reportError(c.addresses); // DEBUG
	
	var addressArray = c.addresses;
	var addrArrayLen = addressArray.length;
	
	for(i = 0; i < addrArrayLen; i++) {
		var addrList = document.getElementById("address-list");
		addrList.appendItem(addressArray[i].toString());
	}
	
	document.getElementById("show-map").addEventListener("oncommand", function() {
		var addr = document.getElementById("address-list").getSelectedItem(0).getAttribute("label");
		var link = GoogleMap.getLinkToAddress(addr);
		
		gBrowser.selectedTab = gBrowser.addTab(link);
	},false);
	
	document.getElementById("show-directions").addEventListener("oncommand", function() {
		
		var addr = document.getElementById("address-list").getSelectedItem(0).getAttribute("label");
		var link = GoogleMap.getLinkToAddressDirection(addr, c.getPreferences().getMyLocation());
		
		gBrowser.selectedTab = gBrowser.addTab(link);
	}, false);
	
}, false);

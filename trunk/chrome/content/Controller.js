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
		var addr = Address.fromString(address);
		
		// let Google handle it if we can't parse it
		if (!addr)
			addr = address;
		
		var link = GoogleMap.getLinkToAddress(addr);
		gBrowser.selectedTab = gBrowser.addTab(link);
	};
	this.showDirections = function(string) {
		var addr = Address.fromString(string);
		
		// let Google handle it if we can't parse it
		if (!addr)
			addr = string;
		
		var link = GoogleMap.getLinkToAddressDirection(addr, this.getPreferences().getMyLocation());
		gBrowser.selectedTab = gBrowser.addTab(link);
	};
	this.newWindow = function(){
	};
};
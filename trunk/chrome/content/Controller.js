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
		var link = GoogleMap.getLinkToAddress(addr);
		gBrowser.selectedTab = gBrowser.addTab(link);
	};
	this.showDirections = function(string) {
	};
	this.newWindow = function(){
	};
};
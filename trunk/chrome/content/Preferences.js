var Preferences = function() {
	this.parserOn = true;
	this.myLocation = null;
	this.AddressListDialogOn = null;
	
	this.toString = function() {
		return this.getStreet() + ', ' + this.getCity() + ', ' + this.getState() + ' ' + this.getZip();
	};
	
	this.getParserOn = function() {
		return this.parserOn;
	};
	
	this.getMyLocation = function() {
		return this.myLocation;
	};
	
	this.getAddressDialogListOn = function() {
		return this.AddressListDialogOn;
	};
	
	this.setAddressDialogListOn = function(on) {
		this.AddressListDialogOn = on;
	};
	
	this.setParserOn = function(on) {
		this.parserOn = on;
	};
	
	this.setMyLocation = function(a) {
		this.myLocation = a;
	};
};
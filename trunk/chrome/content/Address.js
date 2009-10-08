var Address = function() {
	this.state = null;
	this.zip = null;
	this.street = null;
	this.city = null;
	
	this.toString = function() {
		return this.getStreet() + ', ' + this.getCity() + ', ' + this.getState() + ' ' + this.getZip();
	};
	this.getStreet = function() {
		return this.street;
	};
	this.getCity = function() {
		return this.city;
	};
	this.getState = function() {
		return this.state;
	};
	this.getZip = function() {
		return this.zip;
	};
	this.setStreet = function(str) {
		this.street = str;
	};
	this.setCity = function(str) {
		this.city = str;
	};
	this.setState = function(str) {
		this.state = str;
	};
	this.setZip = function(str) {
		this.zip = str;
	};
};
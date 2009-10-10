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
Address.fromString = function(str) {
	var ex2 = /^\s*(\S[^\r\n]+\S),?\s*(\S[^\r\n]*\S)?\s+(\S[^\r\n]+\S),\s+([A-Z]{2})\s+([0-9]{5}).*$/m;
	var res = str.match(ex2);
	if (!res) {
		return null;
	}
	
	// DEBUG start
/*	str = i + ' = ';
	for (var j=0,s; j<6; j++) {
		s = res[j];
		str += j + ': ' + s + '\r\n';
	}
	Components.utils.reportError(str);
*/	// DEBUG end

	
	var addr = new Address();
	addr.setStreet(res[1]);
	addr.setCity(res[3]);
	addr.setState(res[4]);
	addr.setZip(res[5]);
//	Components.utils.reportError(addr.toString()); // DEBUG	
	return addr;
};
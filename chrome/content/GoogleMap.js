var GoogleMap = {
	getLinkToAddress: function(addr) {
		if (addr instanceof Address)
			return 'http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=' + addr.toString();
		else
			return 'http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=' + addr;
	},
	getLinkToAddressDirection: function(destination, location) {
	}
};
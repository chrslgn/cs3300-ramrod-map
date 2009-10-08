var GoogleMap = {
	getLinkToAddress: function(addr) {
		if (addr instanceof Address)
			return 'http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=' + addr.toString();
		else
			return 'http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=' + addr;
	},
	getLinkToAddressDirection: function(destination, location) {
		// http://maps.google.com/maps?f=d&source=s_d&saddr=417+N+Tatnall+St,+Wilmington,+DE+19801&daddr=427+N+Tatnall+St,+Wilmington,+DE+19801
		if (destination instanceof Address)
			destination = destination.toString();
		if (location instanceof Address)
			location = location.toString();
		return 'http://maps.google.com/maps?f=d&source=s_d&saddr=' + location + '&daddr=' + destination;
	}
};
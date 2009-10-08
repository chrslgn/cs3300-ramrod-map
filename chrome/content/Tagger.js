var Tagger = function(bodyDOM) {
	this.DOM = bodyDOM;
	this.tagText = function(address) {
	//	Components.utils.reportError(address.toString()); // DEBUG
		// result like -> /(427 N Tatnall St[\s\S]+Wilmington,[\s\S]+DE[\s\S]+19801)/m
		var exstr = '(' + address.getStreet() + '[\\s\\S]+' + address.getCity() + ',[\\s\\S]+' + address.getState() + '[\\s\\S]+' + address.getZip() + '(-[0-9]{4})?' + ')';
	//	Components.utils.reportError(exstr); // DEBUG
		var ex = new RegExp(exstr, 'm');
		var link = GoogleMap.getLinkToAddress(address);
		var results = this.DOM.innerHTML.match(ex);
	//	Components.utils.reportError(results[0]); // DEBUG
		this.DOM.innerHTML = this.DOM.innerHTML.replace(results[0], results[0] + '<br/><a href="' + link + '">map this</a>');
	};
};
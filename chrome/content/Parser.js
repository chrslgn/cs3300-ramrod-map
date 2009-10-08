var Parser = function(pageDOM) {
	this.DOM = pageDOM;
	this.tagger = new Tagger(pageDOM);
	this.getAddresses = function() {
	//	Components.utils.reportError('Parser.getAddress()'); // DEBUG
		var ex = /\s*((?:(?:\d+(?:\x20+\w+\.?)+(?:(?:\x20+STREET|ST|DRIVE|DR|AVENUE|AVE|ROAD|RD|LOOP|COURT|CT|CIRCLE|LANE|LN|BOULEVARD|BLVD)\.?)?)|(?:(?:P\.\x20?O\.|P\x20?O)\x20*Box\x20+\d+)|(?:General\x20+Delivery)|(?:C[\\\/]O\x20+(?:\w+\x20*)+))\,?\x20*(?:(?:(?:APT|BLDG|DEPT|FL|HNGR|LOT|PIER|RM|S(?:LIP|PC|T(?:E|OP))|TRLR|UNIT|\x23)\.?\x20*(?:[a-zA-Z0-9\-]+))|(?:BSMT|FRNT|LBBY|LOWR|OFC|PH|REAR|SIDE|UPPR))?)\,?\s+((?:(?:\d+(?:\x20+\w+\.?)+(?:(?:\x20+STREET|ST|DRIVE|DR|AVENUE|AVE|ROAD|RD|LOOP|COURT|CT|CIRCLE|LANE|LN|BOULEVARD|BLVD)\.?)?)|(?:(?:P\.\x20?O\.|P\x20?O)\x20*Box\x20+\d+)|(?:General\x20+Delivery)|(?:C[\\\/]O\x20+(?:\w+\x20*)+))\,?\x20*(?:(?:(?:APT|BLDG|DEPT|FL|HNGR|LOT|PIER|RM|S(?:LIP|PC|T(?:E|OP))|TRLR|UNIT|\x23)\.?\x20*(?:[a-zA-Z0-9\-]+))|(?:BSMT|FRNT|LBBY|LOWR|OFC|PH|REAR|SIDE|UPPR))?)?\,?\s+((?:[A-Za-z]+\x20*)+)\,\s+(A[LKSZRAP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])\s+(\d+(?:-\d+)?)\s*/gim; // from http://regexlib.com/REDetails.aspx?regexp_id=986
		var ex2 = /^\s*(\S[^\r\n]+\S)\s?(\S[^\r\n]*\S)?\s+(\S[^\r\n]+\S),\s+([A-Z]{2})\s+([0-9]{5}).*$/m;
		var results = this.DOM.body.textContent.match(ex);
		if (results) {
			var addresses = new Array();
			Components.utils.reportError(results.length + ' addresses found');
			for (var i=0,r; r=results[i]; i++) {
				var str = r.toString();
			//	Components.utils.reportError(str); // DEBUG
				
				var res = str.match(ex2);
				
			/*	// DEBUG start
				str = i + ' = ';
				for (var j=0,s; j<6; j++) {
					s = res[j];
					str += j + ': ' + s + '\r\n';
				}
				Components.utils.reportError(str);
				// DEBUG end
			*/	
				if (res) {
					var addr = new Address();
					addr.setStreet(res[1]);
					addr.setCity(res[3]);
					addr.setState(res[4]);
					addr.setZip(res[5]);
					addresses[i] = addr;
					this.tagger.tagText(addr);
				//	Components.utils.reportError(addr.toString()); // DEBUG	
				}
			}
			return addresses;
		} else {
		//	Components.utils.reportError('no addresses'); // DEBUG
			return new Array();
		}
	};
};
import {Meteor} from 'meteor/meteor';

import {Products} from './../imports/api/products';
import {Machines} from './../imports/api/machines';
import {Cart} from './../imports/api/cart';

Meteor.startup(() => {
  	console.log(Cart.find().fetch());
	/*Cart.insert({
	    userId: "2j2BjPwL3R4E9QWuL",
	    machineId: "yMEaNx8EpaWASTB7P",
	    creationDate: new Date(),
	    lastUpdate: new Date(),
	    items: [
	        {productId: "BeWF9s4FbaBssxt7M", quantity: 1},
	        {productId: "8AyiFAHYzqfY98k4s", quantity: 1},
	        {productId: "eXhzmsHvouzoAXh3p", quantity: 2}
	    ]
	});*/
});

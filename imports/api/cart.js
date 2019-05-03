import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Cart = new Mongo.Collection('cart');

if(Meteor.isServer){
	Meteor.publish('cart', () => {
		//let userId = this.userId;
		return Cart.find();
	});
}

Meteor.methods(({
	'addOneToCart': (machineId, productId) => {
		let userId = this.userId;
		let cart = Cart.findOne({userId, machineId});
		console.log(cart);
		return Cart.update({userId, machineId, "items.productId": productId}, { $inc: { "items.$.quantity": 1 } });
	},
	'removeOneFromCart': (machineId, productId) => {
		let userId = this.userId;
		return Cart.update({userId, machineId, items: { $elemMatch: {productId: productId, quantity: {$gt: 0}}}}, { $inc: { "items.$.quantity": -1 } });
	},
}));
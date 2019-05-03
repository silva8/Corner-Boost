import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Machines = new Mongo.Collection('machines');

if(Meteor.isServer){
	Meteor.publish('machines', () => {
		return Machines.find();
	});
}
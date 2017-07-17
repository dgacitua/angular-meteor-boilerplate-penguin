import { Mongo } from 'meteor/mongo';

export const Counters = new Mongo.Collection('counters');

Counters.allow({
  insert(userId, item) {
    return userId && item.userId === userId;
  },
  update(userId, item, fields, modifier) {
    return userId && item.userId === userId;
  },
  remove(userId, item) {
    return userId && item.userId === userId;
  }
});

if (Meteor.isServer) {
  Meteor.publish('counters', () => {
    const selector = { $and: [
        { userId: this.userId },
        { userId: { $exists: true } }
      ]
    };
    
    return Counters.find(selector);
  });
}
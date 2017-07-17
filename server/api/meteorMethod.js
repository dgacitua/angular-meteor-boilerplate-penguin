import { Meteor } from 'meteor/meteor';

Meteor.methods({
  ping: (clientTimestamp) => {
    try {
      check(clientTimestamp, Number);

      let serverTimestamp = Date.now();
      let serverPing = serverTimestamp - clientTimestamp;

      return { method: 'Meteor RPC', clientTime: clientTimestamp, serverTime: serverTimestamp, ping: serverPing };
    }
    catch (err) {
      console.error(err);
      throw new Meteor.Error(501, 'Ping Error', err);
    }
  },
  getRandomNumber: (min, max) => {
    try {
      check(min, Number);
      check(max, Number);

      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      return { method: 'Meteor RPC', number: randomNumber };
    }
    catch (err) {
      console.error(err);
      throw new Meteor.Error(502, 'Random Number Error', err);
    }
  }
});
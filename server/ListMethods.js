import { Lists } from '../imports/api/ListCollection.js';
import { check } from 'meteor/check';

Meteor.methods({
  'lists.insert'(text) {
    check(text, String);
    console.log(text);
    Lists.insert({
      name: text,
    });
  },
});

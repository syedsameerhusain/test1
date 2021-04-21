import './AddList.html';
//import { Lists } from '../../api/ListCollection.js';
Template.addList.events({
  'submit form': function (event) {
    event.preventDefault();
    var listName = $('[name=listName]').val();
    alert(listName);
    Meteor.call('lists.insert', listName, function (error) {
      console.log(error);
    });
    $('[name=listName]').val('');
  },
});

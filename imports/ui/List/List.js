import './List.html';
import './AddList.js';
import { Lists } from '../../api/ListCollection.js';
Template.lists.helpers({
  list: function () {
    var a = Lists.find({}, { sort: { name: 1 } });
    console.log(a);
    return Lists.find({}, { sort: { name: 1 } });
  },
});

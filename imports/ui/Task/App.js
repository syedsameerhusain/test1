import './App.html';
import { Todos1 } from '../../api/TaskCollection.js';
import './AddTodoList.js';
import '../Register.js';
import '../Login.js';
import '../Home.js';
import '../mainTemplate.js';
Template.todos.helpers({
  todo: function () {
    return Todos1.find({}, { sort: { createdAt: -1 } });
  },
});
Template.todosItem.events({
  'click .delete-todo': function (event) {
    event.preventDefault();
    var documentId = this._id;
    var confirm = window.confirm('Delete this task?');
    if (confirm) {
      Todos1.remove({ _id: documentId });
    }
  },
  'keyup [name=todoItem]': function (event) {
    if (event.which == 13 || event.which == 27) {
      console.log('You tapped the Return or Escape key');
    } else {
      var documentId = this._id;
      var todoItem = $(event.target).val();
      Todos1.update({ _id: documentId }, { $set: { name: todoItem } });
    }
  },
  'change [type=checkbox]': function () {
    var documentId = this._id;
    var isCompleted = this.completed;
    if (isCompleted) {
      Todos1.update({ _id: documentId }, { $set: { completed: false } });
    } else {
      Todos1.update({ _id: documentId }, { $set: { completed: true } });
    }
  },
  checked: function () {
    var isCompleted = this.completed;
    if (isCompleted) {
      return 'checked';
    } else {
      return '';
    }
  },
});
Template.todosCount.helpers({
  totalTodos: function () {
    return Todos.find().count();
  },
  completedTodos: function () {
    return Todos.find({ completed: true }).count();
  },
});

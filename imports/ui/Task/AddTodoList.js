import './AddTodoList.html';
import { Todos1 } from '../../api/TaskCollection';
Template.addTodo.events({
  'submit form': function (event) {
    event.preventDefault();
    var todoName = $('[name="todoName"]').val();
    Todos1.insert({
      name: todoName,
      completed: false,
      createdAt: new Date(),
    });
    $('[name="todoName"]').val('');
  },
});

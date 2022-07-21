
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.classes'
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml( todo) );


// const newTodo = new Todo('Aprender Js');
// todoList.nuevoTodo(newTodo);
//todoList.todos[0].imprimirClase();

// newTodo .imprimirClase();

console.log('todo',todoList.todos)

//localStorage.setItem('mi-key','ABC123');
                                            //Buscar diferencias entre ambos
//sessionStorage.setItem('mi-key','ABC123');
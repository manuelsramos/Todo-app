import {Todo} from './index';


export class TodoList {

    constructor() {

     //   this.todos = [];
        this.cargarLocalStorage();
    }

nuevoTodo ( todo ) {
    this.todos.push( todo );
    this.guardarLocalStorage();  
}

eliminarTodo( id ){
this.todos = this.todos.filter( todo => todo.id != id )  // "!=" significa si es diferente a 
this.guardarLocalStorage(); 
}

marcarCompletado ( id ) {

    for( const todo of this.todos) {

        if(todo.id == id) {

            todo.completado = !todo.completado;
            this.guardarLocalStorage();
            break;

        }
    }

}

eliminarCompletados() {
    
    this.todos = this.todos.filter( todo => !todo.completado )
    this.guardarLocalStorage();
    }


guardarLocalStorage(){                  //Para guardar en local storage todo debe ser un string.

localStorage.setItem('todo', JSON.stringify(this.todos) );

}


cargarLocalStorage(){

this.todos = ( localStorage.getItem('todo') )

this.todos = ( localStorage.getItem('todo') )
                ? this.todos = JSON.parse(localStorage.getItem('todo') ) 
                : [];

/* if ( localStorage.getItem('todo') ) {
     this.todos = JSON.parse(localStorage.getItem('todo') );   
     console.log(this.todos);
    }
 else { 
    this.todos = [];
 }

 */

 this.todos = this.todos.map( obj => Todo.fromJson(obj)) // map = metodo que permite barrer todos los elementos que estan 
                                            //dentro de los arreglos y retornar un nuevo arreglo con todos sus elementos mutados. Buscar mas info.

}


}



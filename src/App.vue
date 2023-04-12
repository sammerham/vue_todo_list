<template>
  <div>
    <!-- v-show="!this.isEditing" -->
    <h1> Todo App </h1> 
    <AddTodoForm 
      v-if="!this.isEditing"
      @add-todo="addTodo"
    />
    <EditTodoForm 
      v-show="this.isEditing"
      @cancel-edit="cancelEditing"
      @update-todo="updateTodo"
      :currentTodo="this.currentTodo"
    />
    <TodoList 
      v-if="!this.isEditing"
      @toggle-todo="toggleTodo" 
      @delete-todo="deleteTodo" 
      @edit-todo="editTodo"
      :todos="this.todos"
      />
  </div>
</template>

<script>
    import AddTodoForm from './components/AddTodoForm.vue'; 
    import TodoList from './components/TodoList.vue';
    import EditTodoForm from './components/EditTodoForm.vue';

  export default {
    name: 'App',
    components: {
      AddTodoForm,
      TodoList,
      EditTodoForm,
    },
    data(){
      return {
        todos: [],
        currentTodo: {},
        isEditing: false,
      }
    },
  
    methods: {
      // fn to add a todo to main todo list
      addTodo (todo) {
          if(todo)
          this.todos = [...this.todos, {task:todo, id: new Date().getTime(), completed: false}];
      },
      // fn to delete a todo from main list
      deleteTodo (id ) {
        this.todos = this.todos.filter(todo => todo.id !== id)
      },
      // toggle todo completed or not completed;
      toggleTodo (id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo)
      },
      // fn to update a todo
      updateTodo (id, updatedTask) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, task:updatedTask} : todo);
        this.isEditing = false;
      },
      // cancel edit and return to main form and todo list
      cancelEditing(){this.isEditing = false},
      // handle edit Click and show edit form 
      editTodo (todo) {
        this.isEditing = true;
        this.currentTodo = todo;
      }
    },
    // // save todos in local storage ever time we have a new Todo
    watch:{
      todos(){
        localStorage.setItem('todosKey', JSON.stringify(this.todos));
      }
    },
    // get to todos saved in local storages and use them in set Todos every time app loads
    created(){
      const savedTodos = JSON.parse(localStorage.getItem('todosKey'));
       this.todos = savedTodos;
    }
  }
</script>

<style lang="scss" scoped>

</style>
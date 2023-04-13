<template>
  <div>
    <h1  v-if="!this.isEditing"> Todo App </h1> 
    <h1  v-if="this.isEditing"> Edit Todo </h1> 
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
          todo = todo.charAt(0).toUpperCase() + todo.slice(1);
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
        updatedTask = updatedTask.charAt(0).toUpperCase() + updatedTask.slice(1);
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, task:updatedTask} : todo);
        this.isEditing = false;
      },
      // cancel edit and return to main form and todo list
      cancelEditing(){
        this.isEditing = false
        this.currentTodo = {}
      },
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

<style scoped>
  h1 {
    color: rgb(47, 47, 59);
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 60px;
  }
</style>
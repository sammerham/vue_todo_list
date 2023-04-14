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
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script>
    import AddTodoForm from './components/AddTodoForm.vue'; 
    import TodoList from './components/TodoList.vue';
    import EditTodoForm from './components/EditTodoForm.vue';
    import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
    AddTodoForm,
    TodoList,
    EditTodoForm,
    Footer
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
      async addTodo (todo) {
          if(todo){
            todo = todo.charAt(0).toUpperCase() + todo.slice(1);
            const res = await fetch('api/todos', {
              method: "POST",
              headers : {
                'content-type' : 'application/json',
              },
              body: JSON.stringify({task:todo, completed: false})
            });
            const data = await res.json();
            // this.todos = [...this.todos, {task:todo, id: new Date().getTime(), completed: false}];
            this.todos = [...this.todos, data];
          }
      },
      // fn to delete a todo from main list
      async deleteTodo (id ) {
        const res = await fetch(`api/todos/${id}`, {
          method:'DELETE'
        });
        
        res.status === 200 ? this.todos = this.todos.filter(todo => todo.id !== id) : alert(`can't find this task!`)
      },
      // toggle todo completed or not completed;
      async toggleTodo (id) {
        const todoToUpdate = await this.fetchTodo(id);
        console.log('todoUpdate', todoToUpdate);
        const updatedTodo = {...todoToUpdate, completed:!todoToUpdate.completed};
        console.log('todoUpdate', updatedTodo);
        const res = await fetch(`api/todos/${id}`, {
              method: "PUT",
              headers : {
                'content-type' : 'application/json',
              },
              body: JSON.stringify(updatedTodo )
            });
        const data = await res.json();
        // this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo)
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed:data.completed} : todo)
      },
      // fn to update a todo
      async updateTodo (id, updatedTask) {
        if(updatedTask){
          updatedTask = updatedTask.charAt(0).toUpperCase() + updatedTask.slice(1);
          const todoToUpdate = await this.fetchTodo(id);
          const updatedTodo = {...todoToUpdate, task:updatedTask};
          const res = await fetch(`api/todos/${id}`, {
              method: "PUT",
              headers : {
                'content-type' : 'application/json',
              },
              body: JSON.stringify(updatedTodo )
            });
          const data = await res.json();
          // this.todos = this.todos.map(todo => todo.id === id ? {...todo, task:updatedTask} : todo);
          this.todos = this.todos.map(todo => todo.id === id ? {...todo, task:data.task} : todo);
          this.isEditing = false;
        }

      

        
        
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
      },
      async fetchTodos(){
        const res = await fetch('api/todos');
        const data = await res.json();
        return data;
      },
      async fetchTodo(id){
        const res = await fetch(`api/todos/${id}`);
        const data = await res.json();
        return data;
      }
    },
    // // save todos in local storage ever time we have a new Todo
    // watch:{
    //   todos(){
    //     // localStorage.setItem('todosKey', JSON.stringify(this.todos));
    //   }
    // },
    // get to todos saved in local storages and use them in set Todos every time app loads
    async created(){
      // const savedTodos = JSON.parse(localStorage.getItem('todosKey'));
      //  this.todos = savedTodos;
      this.todos = await this.fetchTodos();
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
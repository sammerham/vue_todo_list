<template>
  <div>
    <Navbar />
  
    <h1  v-else> Todo App </h1> 
    <AddTodoForm 
    v-if="!todosStore.isEditing"
    @add-todo="todosStore.addTodo"
    />
   
 
    <TodoList 
      v-if="!todosStore.isEditing"
      @toggle-todo="todosStore.toggleTodo" 
      @delete-todo="todosStore.deleteTodo" 
      @edit-todo="todosStore.editTodo"
      :todos="todosStore.todos"
      :upperCaseFn="todosStore.upperCaseTodo"
      />
      <router-view />
      <Footer />
  </div>
</template>

<script>
    import { mapStores } from 'pinia';
    import useTodosStore from '@/srores/todo';
    import AddTodoForm from './components/AddTodoForm.vue'; 
    import TodoList from './components/TodoList.vue';
    import EditTodoForm from './components/EditTodoForm.vue';
    import Footer from './components/Footer.vue';
    import Navbar from './components/Navbar.vue';



  export default {
      name: 'App',
      components: {
      AddTodoForm,
      TodoList,
      EditTodoForm,
      Footer
},
    computed:{
    ...mapStores(useTodosStore)
    },
    async created(){
      this.todosStore.todos = await this.todosStore.fetchTodos();
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
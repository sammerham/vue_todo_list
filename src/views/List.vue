<template>
    <h1>Todo List</h1>
    <TodoList 
      @toggle-todo="todosStore.toggleTodo" 
      @delete-todo="todosStore.deleteTodo" 
      @edit-todo="todosStore.editTodo"
      :todos="todosStore.todos"
      />

</template>

<script>
  import { mapStores } from 'pinia';
  import useTodosStore from '@/srores/todo';
  import TodoList from '@/components/TodoList.vue';
  
export default {
    name: 'List',
    components: {
      TodoList,
    },
     computed:{
      ...mapStores(useTodosStore)
    },
    beforeRouteEnter (to, from, next) {
    const store = useTodosStore();
    if(store.length !== 0){   
      next();
    } else {
      next({name:'Home'});
    }
  }
}

</script>
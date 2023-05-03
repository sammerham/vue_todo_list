<template>
    <h1>Todo List</h1>
    <div class="wrapper">
      <TodoList 
          @toggle-todo="todosStore.toggleTodo" 
          @delete-todo="todosStore.deleteTodo" 
          @edit-todo="todosStore.editTodo"
          :todos="todosStore.todos"
          />
    </div>
      
</template>

<script>
  import { mapStores } from 'pinia';
  import useTodosStore from '@/stores/todo';
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

<style scoped>
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
  .wrapper {
      text-align: center;
  }
  .wrapper ul {
      display: inline-block;
      margin: 0;
      padding: 0;
      margin-left:170px
  }
  .wrapper li {
      float: ;
      padding: 2px 5px;
      border: 1px solid black;
  }

</style>
<template>
    <h1> Add Todo </h1> 
    <AddTodoForm 
    @add-todo="todosStore.addTodo"
    />

</template>

<script>
  import { mapStores } from 'pinia';
  import useTodosStore from '@/srores/todo';
  import AddTodoForm from '@/components/AddTodoForm.vue';

export default {
    name: 'Add',
    components: {
      AddTodoForm,
    },
     computed:{
      ...mapStores(useTodosStore)
    },
}
</script>

<style scoped>
  form{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin-left: 30px;
  }
  #task{
    margin-right: 10px;
  }
  #add-button{
    margin-left: 10px;
  }
  h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

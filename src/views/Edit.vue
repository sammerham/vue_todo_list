<template>

    <h1> Edit Todo </h1> 
    <EditTodoForm 
      @cancel-edit="todosStore.cancelEditing"
      @update-todo="todosStore.updateTodo"
      :currentTodo="todosStore.currentTodo"
    /> 

</template>

<script>
  import { mapStores } from 'pinia';
  import useTodosStore from '@/srores/todo';
  import EditTodoForm from '@/components/EditTodoForm.vue';

  
export default {
    name: 'Edit',
    components: {
      EditTodoForm,
    },
     computed:{
      ...mapStores(useTodosStore)
    },
}
</script>

<style scoped>

</style>
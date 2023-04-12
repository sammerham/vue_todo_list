<template>
    <form @submit = "handleSubmit">
      <input v-model="task" type="text" name="task" id="task" :placeholder="currentTodo.task"/>      

      <button @click="handleSubmit">Update</button>
      <button @click="handleCancel">Cancel</button>
    </form>
  </template>
  
  <script>
    export default {
      name: 'EditTodoForm',
      data(){
      return {
        task: ""
      }
    },
      props: {
            currentTodo: Object,
        },
      methods: {
        handleSubmit(e) {
            
          e.preventDefault()
          this.$emit('update-todo', this.currentTodo.id, this.task);
        },
        handleCancel(){
            this.$emit('cancel-edit', this.currentTodo);
        }
      },
      emits:['cancel-edit', 'update-todo']
    }
  </script>
  
  
  <style scoped>
    form{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
  
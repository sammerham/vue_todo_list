<template>
    <form @submit = "handleSubmit">
      <ahi-input class="editForm-input" v-model="task" type="text" name="task" id="task"  :placeholder="currentTodo.task" autocapitalize="sentences"></ahi-input> 
      <ahi-button class="editForm-update" @click="handleSubmit" variant="primary" size="small"> Update </ahi-button>
      <ahi-button class="editForm-cancel"  @click="handleCancel" variant="destructive" size="small"> Cancel </ahi-button>
    </form>
  </template>
  
  <script>
    import "@azaleahealth/azalea-kit-ui/dist/components/input/input.js";
    import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";
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
    .editForm-update{
        margin-right: 20px;
    }
    .editForm-input{
        margin-right: 20px;
    }
  </style>
  
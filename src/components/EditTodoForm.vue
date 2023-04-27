<template>
    <Form @submit = "handleSubmit">
    <!-- <form @submit = "handleSubmit"> -->
      <ahi-input class="editForm-input" v-model="task" type="text" name="task" id="task"  :placeholder="currentTodo.task" ></ahi-input> 
      <ahi-button class="editForm-update" @click="handleSubmit" variant="primary" size="small"> Update </ahi-button>
      <ahi-button class="editForm-cancel"  @click="handleCancel" variant="destructive" size="small"> Cancel </ahi-button>
    <!-- </form> -->
  </Form>
  </template>
  
  <script>
    import "@azaleahealth/azalea-kit-ui/dist/components/input/input.js";
    import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";
    import Form from './Form.vue';
    export default {
      name: 'EditTodoForm',
      components:{
        Form
      },
      data(){
      return {
        task: this.currentTodo.task
      }
    },
      props: {
            currentTodo: Object,
        },
      methods: {
        handleSubmit(e) {
          console.log(e.target.value );
        e.preventDefault()
        if (!this.task) {
            alert('Please update this task or cancel')
            return
        }
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
  
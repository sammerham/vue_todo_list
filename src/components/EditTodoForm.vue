<template>
    <FormApp @submit="handleSubmit">
    <!-- <form @submit = "handleSubmit"> -->
      <ahi-input v-theme="'narrow'" class="editForm-input" v-model="task" type="text" name="task" id="task"  :placeholder="currentTodo.task" ></ahi-input> 
      <ahi-button  class="editForm-update" @click.prevent="handleSubmit" variant="primary" size="small"> Update </ahi-button>
      <ahi-button class="editForm-cancel"  @click="handleCancel" variant="destructive" size="small"> Cancel </ahi-button>
    <!-- </form> -->
  </FormApp>
  </template>
  
  <script>
    import { mapStores } from "pinia";
    import useTodosStore from "@/stores/todo";
    import "@azaleahealth/azalea-kit-ui/dist/components/input/input.js";
    import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";
    import FormApp from "./FormApp.vue";
    export default {
      name: "EditTodoForm",
      components:{
        FormApp
      },
      data(){
      return {
        task: this.currentTodo.task
      };
     },
      computed:{
        ...mapStores(useTodosStore),
      },
      props: {
            currentTodo: Object,
        },
      methods: {
        handleSubmit() {
        // e.preventDefault()
        if (!this.task) {
            alert("Please update this task or cancel");
            return;
        }
          // this.$emit('update-todo', this.currentTodo.id, this.task);
           this.todosStore.updateTodo(this.currentTodo.id, this.task);
           this.$router.push("/list");
        },
        handleCancel(){
            // this.$emit('cancel-edit', this.currentTodo);
            this.todosStore.cancelEditing();
            this.$router.push("/list");
        }
      },
      // emits:['cancel-edit', 'update-todo']
    };
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
  
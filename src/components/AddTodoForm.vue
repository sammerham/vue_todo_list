<template>
   
  <form @submit = "onSubmit">
    <!-- bind  input value with data using v-model-->
    <ahi-input  v-model = "task" type="text" name="task" :id="task" placeholder="add your task here ...." autocapitalize="on"></ahi-input> 
    <ahi-button id="add-button" @click.prevent="onSubmit" variant="primary" size="small" :disabled="isFormValid"> Add Todo </ahi-button>
  </form>
</template>

<script>
  import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";
  import "@azaleahealth/azalea-kit-ui/dist/components/input/input.js";
  export default {
    name: 'AddTodoForm',
    computed:{
      isFormValid(){
        return !this.task
      }
    },
    data(){
      return {
        task: ""
      }
    },
    methods: {
      resetForm () {
          this.task = ""
        },
      onSubmit(e) {
        // e.preventDefault()
        if (!this.task) {
          alert('Please add a task')
          return
        }
        this.$emit('add-todo', this.task)
        this.resetForm();
      }
    }
  }
</script>


<style scoped>
  form{
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin-bottom: 30px;
    margin-left: 30px;
  }
  #task{
    margin-right: 10px;
  }
  #add-button{
    margin-left: 10px;
  }
</style>

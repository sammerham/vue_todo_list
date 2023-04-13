<template>
   
  <form @submit = "onSubmit">
    <!-- bind  input value with data using v-model-->
    <!-- <input v-model="task" type="text" name="task" id="task" placeholder="add your task here ...." />   -->
    <ahi-input v-model="task" type="text" name="task" id="task" placeholder="add your task here ...." autocapitalize="sentences"></ahi-input> 
    <ahi-button @click="onSubmit" variant="primary" size="small"> Add Todo </ahi-button>
  </form>
</template>

<script>
  import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";
  import "@azaleahealth/azalea-kit-ui/dist/components/input/input.js";
  export default {
    name: 'AddTodoForm',
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
        e.preventDefault()
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

</style>

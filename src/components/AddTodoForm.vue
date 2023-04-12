<template>
  <form @submit = "onSubmit">
    <!-- bind  input value with data using v-model-->
    <input v-model="task" type="text" name="task" id="task" placeholder="add your task here ...." />   
    <button @click="onSubmit">Add</button>
  </form>
</template>

<script>
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
    justify-content: center;
  }
</style>

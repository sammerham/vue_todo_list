<template>
  <FormApp @submit.prevent="onSubmit">
    <!-- <form @submit = "onSubmit"> -->
    <!-- bind  input value with data using v-model-->
    <ahi-input
      .value="task"
      @ahi-input="task = $event.target.value"
      type="text"
      name="task"
      :id="task"
      placeholder="add your task here ...."
    ></ahi-input>
    <!-- <input
      v-model="task"
      type="text"
      name="task"
      :id="task"
      placeholder="add your task here ...."
      class="todo-input"
    /> -->
    <ahi-button
      id="add-button"
      @click.prevent="onSubmit"
      variant="primary"
      size="small"
      :disabled="isFormValid"
    >
      Add Todo
    </ahi-button>
    <!-- </form> -->
  </FormApp>
</template>

<script>
import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";
import "@azaleahealth/azalea-kit-ui/dist/components/input/input.js";

import { mapStores } from "pinia";

import useTodosStore from "@/stores/todo";

import FormApp from "./FormApp.vue";
export default {
  name: "AddTodoForm",
  components: {
    FormApp,
  },
  computed: {
    isFormValid() {
      return !this.task;
    },
    ...mapStores(useTodosStore),
  },
  data() {
    return {
      task: "",
    };
  },
  methods: {
    resetForm() {
      this.task = "";
    },
    onSubmit() {
      // e.preventDefault()
      if (!this.task) {
        alert("Please add a task");
        return;
      }
      // this.$emit('add-todo', this.task)
      this.todosStore.addTodo(this.task);
      this.resetForm();
      this.$router.push("/list");
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-bottom: 30px;
  margin-left: 30px;
}
#task {
  margin-right: 10px;
}
#add-button {
  margin-left: 10px;
}
</style>

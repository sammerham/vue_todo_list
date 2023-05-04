<template>
  <ul v-if="todosStore.todosData.length" class="todosList">
    <Todo v-for="todo in todosStore.todosData" :key="todo.id" :todo="todo" />
    <!-- @toggle-todo="$emit('toggle-todo', todo.id)"  
            @delete-todo="$emit('delete-todo', todo.id)"  
            @edit-todo="$emit('edit-todo', todo)"  
            :upperCaseFn="upperCaseFn" -->
  </ul>
</template>

<script>
import { mapStores } from "pinia";

import useTodosStore from "@/stores/todo";

import Todo from "./Todo.vue";
export default {
  name: "TodoList",
  // props: {
  //     todos: Array,
  //     upperCaseFn : Function
  // },
  components: {
    Todo,
  },
  computed: {
    ...mapStores(useTodosStore),
  },
  // emits:['toggle-todo', 'delete-todo', 'edit-todo']
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>

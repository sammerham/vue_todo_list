<template>
  <h1>Edit Todo</h1>
  <EditTodoForm
    @cancel-edit="todosStore.cancelEditing"
    @update-todo="todosStore.updateTodo"
    :currentTodo="todosStore.currentTodo"
  />
</template>

<script>
import { mapStores } from "pinia";
import useTodosStore from "@/stores/todo";
import EditTodoForm from "@/components/EditTodoForm.vue";

export default {
  name: "EditApp",
  components: {
    EditTodoForm,
  },
  computed: {
    ...mapStores(useTodosStore),
  },
};
</script>

<style scoped>
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

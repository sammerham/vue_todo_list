<template>
  <div>
    <Navbar />
    <br />
    <router-view />
    <FooterApp />
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useTodosStore from "@/stores/todo";
import FooterApp from "@/components/FooterApp.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    FooterApp,
    Navbar,
  },
  computed: {
    ...mapStores(useTodosStore),
  },
  async created() {
    // const savedTodos = JSON.parse(localStorage.getItem('todosKey'));
    //  this.todos = savedTodos;
    this.todosStore.todos = await this.todosStore.fetchTodos();
  },
};
</script>

<style scoped>
h1 {
  color: rgb(47, 47, 59);
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-left: 60px;
}
</style>

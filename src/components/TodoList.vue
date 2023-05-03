<template>

   <ul v-if="todosStore.todos.length">
        <Todo v-for="todo in todosStore.todos" :key="todo.id"
            :todo="todo"
            />
            <!-- @toggle-todo="$emit('toggle-todo', todo.id)"  
            @delete-todo="$emit('delete-todo', todo.id)"  
            @edit-todo="$emit('edit-todo', todo)"  
            :upperCaseFn="upperCaseFn" -->
   </ul>

</template>

<script>
import Todo from "./Todo.vue";
import { mapStores } from "pinia";
import useTodosStore from "@/stores/todo";
export default {
        name: "TodoList",
        // props: {
        //     todos: Array,
        //     upperCaseFn : Function 
        // },
        components:{
            Todo
        },
        computed:{
         ...mapStores(useTodosStore)
        },
        // emits:['toggle-todo', 'delete-todo', 'edit-todo']
    };
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>
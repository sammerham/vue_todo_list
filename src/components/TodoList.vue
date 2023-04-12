<template>
   

   <!-- <ul v-for="todo in todos" :key="todo.id"   >
        <Todo 
            @toggle-todo="$emit('toggle-todo', todo.id)"  
            @delete-todo="$emit('delete-todo', todo.id)"  
            @edit-todo="$emit('edit-todo', todo)"  
            :todo="todo"
            />
   </ul> -->


   <ul v-if="todos.length">
        <Todo v-for="todo in todos" :key="todo.id"
            @toggle-todo="$emit('toggle-todo', todo.id)"  
            @delete-todo="$emit('delete-todo', todo.id)"  
            @edit-todo="$emit('edit-todo', todo)"  
            :todo="todo"
            />
   </ul>

</template>

<script>
import { isEmpty } from 'rxjs';
import Todo from './Todo.vue';
    export default {
        name: 'TodoList',
        props: {
            todos: Array,
            todo:Object
        },
        components:{
            Todo
        },
        emits:['toggle-todo', 'delete-todo', 'edit-todo']
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>
<template>
    <div>
        <button @click="handleDelete"> Delete </button>
        <button @click="handleEdit"> Edit </button>
        <input type="checkbox" @click="handleToggle"  :checked="todo.completed" />
        <li :class="[todo.completed? 'complete' : 'incomplete', todo ]">{{todo.task}}</li>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        props: {
            todo: Object,
        },
        methods:{
            // fn to delete a todo
            handleDelete () {
                this.$emit('delete-todo', this.todo.id)
              },
              // fn to toggle todo completed/!completed
              handleToggle () {
                this.$emit('toggle-todo', this.todo.id)
              },
             // fn to edit a todo and show edit form
                handleEdit() {
                this.$emit('edit-todo', this.todo)
            }
        },
        emits:['toggle-todo', 'delete-todo', 'edit-todo']
    }
</script>

<style scoped>
    .complete {
        text-decoration: line-through;
        color: darkgrey;
    }
    .incomplete {
        color: red
    }
    div {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        margin-right: 90px;
    }
</style>
<template>
    <div >
        <ahi-button class="todo-delete" variant="destructive" size="small" @click="handleDelete"> Delete </ahi-button>
        <ahi-button  class="todo-edit" size="small" @click="handleEdit" :disabled="todo.completed" > Edit </ahi-button>
        <ahi-checkbox class="todo-toggle" type="checkbox" @click="handleToggle"  :checked="todo.completed"></ahi-checkbox>
        <li :class="[todo.completed? 'complete' : 'incomplete', todo ]">{{todo.task}}</li>
    </div>
</template>

<script type="module">
    import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";
    import "@azaleahealth/azalea-kit-ui/dist/components/checkbox/checkbox.js";``

    import "@azaleahealth/azalea-kit-ui/dist/components/icon/icon.js";
    import { AzaleaIcons } from "@azaleahealth/azalea-kit-ui";
    import { userIcon } from "@azaleahealth/azalea-kit-ui";
    AzaleaIcons.addIcons(userIcon);


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
        color: green;
    }
    .incomplete {
        color: red
    }
    div {
        display: flex;
        align-items: center;
        margin-right: 40px;
        margin-bottom: 18px;
    }

.todo-edit::part(base) {
    background: rgb(55, 55, 53);
    color: whitesmoke;
    padding: 10px;
  }

  .todo-delete {
    /* background: rgb(55, 55, 53);
    color: whitesmoke;
    border-radius: var(--ahi-border-radius-medium); */
    margin-right: 20px;
    margin-left: -1px;
  }
  .todo-toggle{

    margin-left: 15px;
    margin-right: -1px;
  }
</style>
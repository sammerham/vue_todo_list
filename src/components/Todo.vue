<template>
    <div>
        <ahi-button class="todo-delete" variant="destructive" size="small" @click="handleDelete"> Delete </ahi-button>
        <ahi-button  class="todo-edit" size="small" @click="handleEdit" :disabled="todo.completed" > Edit </ahi-button>
        <ahi-button  class="todo-edit" size="small" @click="todosStore.upperCaseTodo(todo.id)" > UpperCase </ahi-button>
        <ahi-checkbox class="todo-toggle" type="checkbox" @click="handleToggle"  :checked="isCompleted"></ahi-checkbox>
        <li :class="[todo.completed? 'complete' : 'incomplete', todo ]">{{todo.task}}</li>
    </div> 

</template>

<script >
    import { mapStores } from 'pinia';
    import useTodosStore from '@/srores/todo';
    import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";
    import "@azaleahealth/azalea-kit-ui/dist/components/checkbox/checkbox.js";``
    import { Fragment } from 'vue';

    import "@azaleahealth/azalea-kit-ui/dist/components/icon/icon.js";
    import { AzaleaIcons } from "@azaleahealth/azalea-kit-ui";
    import { userIcon } from "@azaleahealth/azalea-kit-ui";
import todosStore from '@/srores/todo';
    AzaleaIcons.addIcons(userIcon);


    export default {
        name: 'Todo',
        computed:{
            ...mapStores(useTodosStore),
            isCompleted(){
                return this.todo.completed
            }
        },
        props: {
           todo: {
                type: Object,
                // required : true,
                // default (raw prop){  // default from arr or obj must be return from func returned from a factory function. The function receives the raw props received by the component as the argument.
                    // return {};
                // },
                // default: () => ({ // <= note the parenthesis
                //     kitchen : {
                //         sink: ''
                //     }
                //  }) // <= here also
                // default: () => {
                // return  {
                //     kitchen : { // <= note the return
                //         sink: ''
                //     }
                // } 
                // }

                //validator (value of prop){ must return bool
                    //logic to validate
                // },
            },
            upperCaseFn : Function 
        },
        // props: {
        //    todo: Object
        // },
        // computed:{
        //     isCompleted(){
        //         return this.todo.completed
        //     }
        // },
        methods:{
            // fn to delete a todo
            handleDelete () {
                // this.$emit('delete-todo', this.todo.id)
                this.todosStore.deleteTodo(this.todo.id)
              },
              // fn to toggle todo completed/!completed
              handleToggle () {
                // this.$emit('toggle-todo', this.todo.id)
                this.todosStore.toggleTodo(this.todo.id)
              },
             // fn to edit a todo and show edit form
                handleEdit() {
                // this.$emit('edit-todo', this.todo)
                this.todosStore.editTodo(this.todo)
            }
        },
        // emits:['toggle-todo', 'delete-todo', 'edit-todo']
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
import axios from "axios";
import { defineStore } from "pinia";

export default defineStore("todos", {
  state: () => ({
    todos: [],
    currentTodo: {},
    isEditing: false,
  }),
  getters: {
    //
  },
  actions: {
    // fn to add a todo to main todo list
    async addTodo(todo) {
      if (todo) {
        todo = todo.charAt(0).toUpperCase() + todo.slice(1);
        // const res = await fetch('api/todos', {
        //   method: "POST",
        //   headers : {
        //     'content-type' : 'application/json',
        //   },
        //   body: JSON.stringify({task:todo, completed: false})
        // });
        const res = await axios({
          method: "post",
          url: "http://localhost:5000/todos",
          data: {
            task: todo,
            completed: false,
          },
        });

        // const data = await res.json();
        const data = await res.data;
        // this.todos = [...this.todos, {task:todo, id: new Date().getTime(), completed: false}];
        this.todos = [...this.todos, data];
      }
    },
    // fn to delete a todo from main list
    async deleteTodo(id) {
      // const res = await fetch(`api/todos/${id}`, {
      //   method:'DELETE'
      // });

      const res = await axios({
        method: "delete",
        url: `http://localhost:5000/todos/${id}`,
      });
      console.log("res in delete", res);
      res.status === 200
        ? (this.todos = this.todos.filter((todo) => todo.id !== id))
        : alert("can't find this task!");
    },
    // toggle todo completed or not completed;
    async toggleTodo(id) {
      const todoToUpdate = await this.fetchTodo(id);
      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };
      // const res = await fetch(`api/todos/${id}`, {
      //       method: "PUT",
      //       headers : {
      //         'content-type' : 'application/json',
      //       },
      //       body: JSON.stringify(updatedTodo )
      //     });
      // const data = await res.json();

      const res = await axios({
        method: "put",
        url: `http://localhost:5000/todos/${id}`,
        data: {
          ...updatedTodo,
        },
      });
      const data = await res.data;
      // this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo)
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: data.completed } : todo
      );
    },
    // Uppercase Todo;
    async upperCaseTodo(id) {
      const todoToUpdate = await this.fetchTodo(id);
      const updatedTodo = {
        ...todoToUpdate,
        task: todoToUpdate.task.toUpperCase(),
      };
      // const res = await fetch(`api/todos/${id}`, {
      //       method: "PUT",
      //       headers : {
      //         'content-type' : 'application/json',
      //       },
      //       body: JSON.stringify(updatedTodo )
      //     });
      // const data = await res.json();

      const res = await axios({
        method: "put",
        url: `http://localhost:5000/todos/${id}`,
        data: {
          ...updatedTodo,
        },
      });
      const data = await res.data;
      // this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo)
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, task: data.task } : todo
      );
    },

    // fn to update a todo
    async updateTodo(id, updatedTask) {
      console.log("updated todo", this.currentTodo);
      if (updatedTask) {
        updatedTask =
          updatedTask.charAt(0).toUpperCase() + updatedTask.slice(1);
        const todoToUpdate = await this.fetchTodo(id);
        const updatedTodo = { ...todoToUpdate, task: updatedTask };
        // const res = await fetch(`api/todos/${id}`, {
        //     method: "PUT",
        //     headers : {
        //       'content-type' : 'application/json',
        //     },
        //     body: JSON.stringify(updatedTodo )
        //   });
        // const data = await res.json();

        const res = await axios({
          method: "put",
          url: `http://localhost:5000/todos/${id}`,
          data: {
            ...updatedTodo,
          },
        });
        const data = await res.data;
        //   // this.todos = this.todos.map(todo => todo.id === id ? {...todo, task:updatedTask} : todo);
        this.todos = this.todos.map((todo) =>
          todo.id === id ? { ...todo, task: data.task } : todo
        );
        this.isEditing = false;
      }
    },
    // cancel edit and return to main form and todo list
    cancelEditing() {
      this.isEditing = false;
      this.currentTodo = {};
    },
    // handle edit Click and show edit form
    editTodo(todo) {
      this.isEditing = true;
      this.currentTodo = todo;
    },
    async fetchTodos() {
      // const res = await fetch('api/todos');
      // const data = await res.json();
      // return data;
      const res = await axios({
        method: "get",
        url: "http://localhost:5000/todos",
      });
      const data = await res.data;
      return data;
    },
    async fetchTodo(id) {
      // const res = await fetch(`api/todos/${id}`);
      // const data = await res.json();
      // return data;

      const res = await axios({
        method: "get",
        url: `http://localhost:5000/todos/${id}`,
      });
      const data = await res.data;
      return data;
    },
  },
  // // save todos in local storage ever time we have a new Todo
  // watch:{
  //   todos(){
  //     // localStorage.setItem('todosKey', JSON.stringify(this.todos));
  //   }
  // },
});

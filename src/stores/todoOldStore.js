import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
export default defineStore("todos", () => {
  const todosData = ref([]);
  const currentTodo = ref({});
  const isEditing = ref(false);
  // fn to add a todo to main todo list
  const addTodo = async (todo) => {
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
      todosData.value = [...todosData.value, data];
    }
  };
  // fn to delete a todo from main list
  const deleteTodo = async (id) => {
    // const res = await fetch(`api/todos/${id}`, {
    //   method:'DELETE'
    // });

    const res = await axios({
      method: "delete",
      url: `http://localhost:5000/todos/${id}`,
    });
    console.log("res in delete", res);
    res.status === 200
      ? (todosData.value = todosData.value.filter((todo) => todo.id !== id))
      : alert("can't find this task!");
  };
  // toggle todo completed or not completed;
  const toggleTodo = async (id) => {
    const todoToUpdate = await fetchTodo(id);
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
    todosData.value = todosData.value.map((todo) =>
      todo.id === id ? { ...todo, completed: data.completed } : todo
    );
  };
  // Uppercase Todo;
  const upperCaseTodo = async (id) => {
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
    todosData.value = todosData.value.map((todo) =>
      todo.id === id ? { ...todo, task: data.task } : todo
    );
  };

  // fn to update a todo
  const updateTodo = async (id, updatedTask) => {
    console.log("updated todo", currentTodo.value);
    if (updatedTask) {
      updatedTask = updatedTask.charAt(0).toUpperCase() + updatedTask.slice(1);
      const todoToUpdate = await fetchTodo(id);
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
      todosData.value = todosData.value.map((todo) =>
        todo.id === id ? { ...todo, task: data.task } : todo
      );
      isEditing.value = false;
    }
  };
  // cancel edit and return to main form and todo list
  const cancelEditing = () => {
    isEditing.value = false;
    currentTodo.value = {};
  };
  // handle edit Click and show edit form
  const editTodo = (todo) => {
    isEditing.value = true;
    currentTodo.value = todo;
  };
  const fetchTodos = async () => {
    // const res = await fetch('api/todos');
    // const data = await res.json();
    // return data;
    const res = await axios({
      method: "get",
      url: "http://localhost:5000/todos",
    });
    const data = await res.data;
    return data;
  };
  const fetchTodo = async (id) => {
    // const res = await fetch(`api/todos/${id}`);
    // const data = await res.json();
    // return data;

    const res = await axios({
      method: "get",
      url: `http://localhost:5000/todos/${id}`,
    });
    const data = await res.data;
    return data;
  };
  return {
    todosData,
    currentTodo,
    isEditing,
    addTodo,
    deleteTodo,
    toggleTodo,
    upperCaseTodo,
    fetchTodo,
    updateTodo,
    cancelEditing,
    editTodo,
    fetchTodos,
  };
});

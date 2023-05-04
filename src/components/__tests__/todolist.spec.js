// import { RouterLinkStub, shallowMount } from "@vue/test-utils";
// import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach } from "vitest";

// import Todo from "@/components/Todo.vue";
// import Todo from "@/components/Todo.vue";
// import TodoList from "@/components/TodoList.vue";
import { useTodoStore } from "@/stores/todo.js";

describe("TodoList.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("render todo list", () => {
    const todos = useTodoStore();
    expect(todos.todos.toBe(Array));
    // const todos = [
    //   {
    //     id: 1,
    //     task: "test1",
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     task: "test2",
    //     completed: false,
    //   },
    //   {
    //     id: 3,
    //     task: "test3",
    //     completed: false,
    //   },
    // ];
    // const component = shallowMount(TodoList, {
    //   // global: {
    //   //   components: {
    //   //     "router-link": RouterLinkStub,
    //   //   },
    //   // },
    // });
  });
});

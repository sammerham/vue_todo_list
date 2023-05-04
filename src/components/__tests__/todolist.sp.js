// // import { RouterLinkStub, shallowMount } from "@vue/test-utils";
// import { createTestingPinia } from "@pinia/testing";
// import { shallowMount } from "@vue/test-utils";
// import { createPinia, setActivePinia } from "pinia";
// import { beforeEach, vitest } from "vitest";

// import Todo from "@/components/Todo.vue";
// import TodoList from "@/components/TodoList.vue";
// import useTodosStore from "@/stores/todo";

// describe("TodoList.vue", () => {
//   beforeEach(() => {
//     setActivePinia(createPinia());
//   });
//   test("render todo list", () => {
//     const todos = useTodosStore();
//     console.log("todos from store --->>", todos.todos);
//     expect(todos.todos.length).toBe(0);
//     // const todos = [
//     //   {
//     //     id: 1,
//     //     task: "test1",
//     //     completed: false,
//     //   },
//     //   {
//     //     id: 2,
//     //     task: "test2",
//     //     completed: false,
//     //   },
//     //   {
//     //     id: 3,
//     //     task: "test3",
//     //     completed: false,
//     //   },
//     // ];
//     const component = shallowMount(TodoList, {
//       global: {
//         // components: {
//         //   "router-link": RouterLinkStub,
//         // },
//         plugins: [
//           createTestingPinia({
//             createSpy: vitest.fn,
//           }),
//         ],
//       },
//     });
//   });
// });

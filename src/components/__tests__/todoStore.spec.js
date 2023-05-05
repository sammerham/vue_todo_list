import { createPinia, setActivePinia } from "pinia";
import { beforeEach } from "vitest";

import useTodosStore from "@/stores/todo";
vi.mock("", () => {
  //
});

describe("todo store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("That todoData starts at empty default data", () => {
    const todosStore = useTodosStore();
    // all data in store
    expect(todosStore.todosData.length).toBe(0);
    expect(Array.isArray(todosStore.todosData)).toBe(true);
    expect(Object.keys(todosStore.currentTodo).length).toBe(0);
    expect(todosStore.isEditing).toBe(false);
  });
  test("Add todo to todo list", async () => {
    const todosStore = useTodosStore();
    expect(todosStore.todosData.length).toBe(0);
    //add todo
    await todosStore.addTodo("hello");
    // console.log("todatData", todosStore.todosData);
    expect(todosStore.todosData.length).toBe(1);
    expect(todosStore.todosData[0].task).toBe("Hello");
    //delete todo
    await todosStore.deleteTodo(todosStore.todosData[0].id);
    expect(todosStore.todosData.length).toBe(0);
    await todosStore.addTodo("hello");
    expect(todosStore.todosData[0].completed).toBe(false);
    // toggle todo
    await todosStore.toggleTodo(todosStore.todosData[0].id);
    expect(todosStore.todosData[0].completed).toBe(true);
    // uppercase todo
    await todosStore.upperCaseTodo(todosStore.todosData[0].id);
    expect(todosStore.todosData[0].task).toBe("HELLO");
    // updated todo
    await todosStore.updateTodo(todosStore.todosData[0].id, "updated todo");
    expect(todosStore.todosData[0].task).toBe("Updated todo");
    expect(todosStore.isEditing).toBe(false);
    //edit todo
    const testTodo = { id: 1, task: "hello", completed: false };
    todosStore.editTodo(testTodo);
    expect(todosStore.isEditing).toBe(true);
    expect(todosStore.currentTodo).toEqual(testTodo);
    //cancel todo
    todosStore.cancelEditing();
    expect(todosStore.isEditing).toBe(false);
    expect(todosStore.currentTodo).toEqual({});

    // fetch todos
    await todosStore.addTodo("hello");
    const currentTodos = await todosStore.fetchTodos();
    expect(currentTodos.length !== 0).toBe(true);
    // fetch single todo
    const fetchedTodo = await todosStore.fetchTodo(currentTodos[0].id);
    console.log("fetchedTodo", fetchedTodo);
    expect(fetchedTodo.task).toBe("Hello");
  });
});

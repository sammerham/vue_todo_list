import { createPinia, setActivePinia } from "pinia";
import { beforeEach } from "vitest";

import useTodosStore from "@/stores/todo";

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
    await todosStore.addTodo("hello");
    // console.log("todatData", todosStore.todosData);
    expect(todosStore.todosData.length).toBe(1);
    expect(todosStore.todosData[0].task).toBe("Hello");
  });
});

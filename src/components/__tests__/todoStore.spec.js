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
    console.log("currentTodo", todosStore.currentTodo);
    expect(Object.keys(todosStore.currentTodo).length).toBe(0);
    expect(todosStore.isEditing).toBe(false);
  });
});

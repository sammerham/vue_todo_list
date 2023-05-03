import { shallowMount } from "@vue/test-utils";

import Todo from "@/components/Todo.vue";

describe("Todo.vue", () => {
  test("render todo item", () => {
    const todo = {
      id: 123,
      task: "test",
      completed: false,
    };
    const wrapper = shallowMount(Todo, {
      propsData: {
        todo,
      },
    });
    expect(wrapper.text()).toContain(todo.task);
  });
});

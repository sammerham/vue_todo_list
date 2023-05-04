import { shallowMount } from "@vue/test-utils";

import Todo from "@/components/Todo.vue";

describe("Todo.vue", () => {
  test("render todo item", () => {
    const todo = {
      id: 123,
      task: "test123",
      completed: false,
    };
    const wrapper = shallowMount(Todo, {
      propsData: {
        // data coming from prop
        todo,
      },
    });
    expect(wrapper.text()).toContain(todo.task);
    const li = wrapper.find(".incomplete");

    // const radioInput = wrapper.find('input[type="radio"]')

    expect(li.classes()).toContain("incomplete");
    expect(li.text()).toBe("test123");
  });
});

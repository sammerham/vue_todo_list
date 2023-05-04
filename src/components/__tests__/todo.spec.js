/* eslint-disable no-unused-vars */
import { createTestingPinia } from "@pinia/testing";
import { shallowMount } from "@vue/test-utils";

import Todo from "@/components/Todo.vue";
import useTodosStore from "@/stores/todo";

describe("Todo.vue", () => {
  test("render todo item", () => {
    const todo = {
      id: 123,
      task: "test123",
      completed: false,
    };
    const wrapper = shallowMount(Todo, {
      global: {
        plugins: [
          createTestingPinia({
            // createSpy: vitest.fn,
            createSpy: vi.fn,
          }),
        ],
      },
      propsData: {
        // data coming from prop
        todo,
      },
    });
    // eslint-disable-next-line no-unused-vars
    const store = useTodosStore();
    expect(wrapper.text()).toContain(todo.task);
    const li = wrapper.find(".incomplete");

    // const radioInput = wrapper.find('input[type="radio"]')

    expect(li.classes()).toContain("incomplete");
    expect(li.text()).toBe("test123");
    expect(wrapper.find("div").findAll("ahi-button").length).toEqual(2);
    const buttons = wrapper.find("div").findAll("ahi-button");
    const [deleteBtn, editBtn] = buttons;
    deleteBtn.trigger("click");
    expect(store.deleteTodo).toHaveBeenCalledTimes(1);
    expect(wrapper.find("div").findAll("ahi-icon-button").length).toEqual(2);
    // check that the 'Clear Weather Data' button is displayed
    // expect(wrapper.findAll("button").length).toEqual(2);
    // expect(wrapper.findAll("button")[0].isVisible()).toBeTruthy();
    // expect(wrapper.findAll("button")[0].text()).toMatch(
    //   "Clear Weather Data (2)"
    // );
  });
});

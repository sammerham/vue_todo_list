// import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach } from "vitest";

// import Todo from "@/components/Todo.vue";
import TodoList from "@/components/TodoList.vue";

describe("Todo.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("render todo list", () => {
    const todos = [
      {
        id: 1,
        task: "test1",
        completed: false,
      },
      {
        id: 2,
        task: "test2",
        completed: false,
      },
      {
        id: 3,
        task: "test3",
        completed: false,
      },
    ];
    const wrapper = mount(TodoList, {
      propsData: {
        todos,
      },
      // global: {
      //   components: {
      //     "router-link": RouterLinkStub,
      //   },
      // },
    });

    expect(wrapper.html()).toBe("");
  });
});

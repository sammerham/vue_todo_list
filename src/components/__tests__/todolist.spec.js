// import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { mount, shallowMount } from "@vue/test-utils";

// import { createPinia, setActivePinia } from "pinia";
// import { afterEach, beforeEach, vitest } from "vitest";
// import { afterEach, beforeEach, vi } from "vitest";
import Todo from "@/components/Todo.vue";
import TodoList from "@/components/TodoList.vue";
import useTodosStore from "@/stores/todo";

describe("TodoList.vue", () => {
  let wrapper = null;
  // let store = null;

  // SETUP - run prior to each unit test
  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      global: {
        plugins: [
          createTestingPinia({
            // createSpy: vitest.fn,
            createSpy: vi.fn,
          }),
        ],
      },
    });
  });
  // TEARDOWN - run after each unit test
  afterEach(() => {
    wrapper.unmount();
  });
  it("initializes with zero elements displayed", () => {
    // check that zero city cards are displayed
    expect(wrapper.findAll("li").length).toEqual(0);

    // check that the 'Clear Weather Data' button is not displayed
    expect(wrapper.findAll("button").length).toEqual(0);
    // expect(wrapper.findAll("button")[0].isVisible()).toBeFalsy();
  });
});

describe("TodoList.vue Test with filled data store", () => {
  let wrapper = null;
  // eslint-disable-next-line no-unused-vars
  let store = null;
  // SETUP - run prior to each unit test
  beforeEach(() => {
    // render the component and initialize the data store
    // to contain todos data for (3) todos
    wrapper = mount(TodoList, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              todos: {
                todosData: [
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
                ],
              },
            },
          }),
        ],
      },
    });
    // create the data store using the testing pinia
    store = useTodosStore();
  });
  // TEARDOWN - run after each unit test
  afterEach(() => {
    wrapper.unmount();
  });
  it("displays city weather from the data store", () => {
    const tasks = wrapper.findAll("div");
    expect(tasks.length).toEqual(3);
    expect(tasks[0].find("li").text()).toBe("test1");
    // console.log("tasks---->>> 0", tasks[0].find("li").text());
    const todoComp = wrapper.findAllComponents(Todo);
    // console.log("compo --->>", todoComp.length);
    expect(todoComp[1].text()).toBe("Delete  Edit test2");
  });
});

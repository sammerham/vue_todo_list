/* eslint-disable no-unused-vars */
import "@testing-library/jest-dom";
import "@azaleahealth/azalea-kit-ui/dist/components/input/input.js";
import "@azaleahealth/azalea-kit-ui/dist/components/button/button.js";

import { createTestingPinia } from "@pinia/testing";
import { fireEvent, render, screen } from "@testing-library/vue";
import { mount } from "@vue/test-utils";

import AddToTodoForm from "@/components/AddTodoForm.vue";
import useTodosStore from "@/stores/todo";

// import updateAkuComponents from "./components/ahi.js";

describe("Add todo", () => {
  it("render span correctly ", async () => {
    //arrange
    const wrapper = mount(AddToTodoForm, {
      global: {
        plugins: [
          createTestingPinia({
            // createSpy: vitest.fn,
            createSpy: vi.fn,
          }),
        ],
      },
      attachTo: document.body,
    });
    // const input = wrapper.find(".todo-input");
    const input1 = wrapper.find("ahi-input");
    // await input1.element.updateComplete;
    input1.element.value = "test1";
    await input1.element.updateComplete;
    input1.trigger("ahi-input");
    // await wrapper.vm.$nextTick();
    // console.log("input--->>", input1);
    // const btn = wrapper.find("#add-button");
    const btn = wrapper.find("ahi-button");
    await btn.element.updateComplete;
    // await btn.trigger("click");
    // await input.trigger("change", { target: { value: "Changed" } });
    // const input = wrapper.find("input[type='text']");
    // await btn.trigger("click");
    const store = useTodosStore();
    // await input.setValue("some value");
    // input1.wrapperElement._$AL.value = "true";
    // await input1.trigger("ahi-change");
    await btn.trigger("click");
    // console.log("btn--->>", btn);
    // await btn.element.click();
    // input.wrapperElement.formControlController.host.__value = "some value";
    // console.log("input--->>", input.wrapperElement.formControlController.host);
    // console.log("input222--->>", input);
    // const btn = wrapper.find("Add Todo");
    // console.log(btn.html());
    // console.log("router-->>", wrapper.router);
    expect(wrapper.router.push).toHaveBeenCalledTimes(1);
    expect(wrapper.router.push).toHaveBeenCalledWith("/list");
  });
});

// describe("AddTodo.vue", () => {
//   test("render Add Todo Form ", () => {
//     const todo = {
//       id: 123,
//       task: "test123",
//       completed: false,
//     };
//     const wrapper = shallowMount(AddToTodoForm, {
//       global: {
//         plugins: [
//           createTestingPinia({
//             // createSpy: vitest.fn,
//             createSpy: vi.fn,
//           }),
//         ],
//       },
//       propsData: {
//         // data coming from prop
//         todo,
//       },
//     });
//     // eslint-disable-next-line no-unused-vars
//     const store = useTodosStore();
//     expect(wrapper.text()).toContain(todo.task);
//     const li = wrapper.find(".incomplete");

//     // const radioInput = wrapper.find('input[type="radio"]')

//     expect(li.classes()).toContain("incomplete");
//     expect(li.text()).toBe("test123");
//     expect(wrapper.find("div").findAll("ahi-button").length).toEqual(2);
//     const buttons = wrapper.find("div").findAll("ahi-button");
//     const [deleteBtn, editBtn] = buttons;
//     deleteBtn.trigger("click");
//     expect(store.deleteTodo).toHaveBeenCalledTimes(1);
//     expect(wrapper.find("div").findAll("ahi-icon-button").length).toEqual(2);
//     expect(wrapper.findAll("ahi-button")[0].isVisible()).toBeTruthy();
//     expect(wrapper.findAll("ahi-button")[0].text()).toMatch("Delete");
//   });
// });

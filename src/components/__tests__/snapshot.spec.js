import { shallowMount } from "@vue/test-utils";

import Todo from "@/components/Todo.vue";

describe("Snapshot Todo.vue", () => {
  test("renders correctly", () => {
    const todo = {
      id: 123,
      task: "test123",
      completed: false,
    };
    const wrapper = shallowMount(Todo, {
      propsData: { todo },
    });
    expect(wrapper.element).toMatchInlineSnapshot(`
      <div
        class="todoChild"
        data-v-d7c8997f=""
      >
        <ahi-button
          class="todo-delete"
          data-v-d7c8997f=""
        >
           Delete 
        </ahi-button>
        <!-- &lt;ahi-icon name="trash" class="todo-delete" @click="handleDelete"&gt;&lt;/ahi-icon&gt; -->
        <ahi-icon-button
          class="todo-delete"
          data-v-d7c8997f=""
        />
        <ahi-icon-button
          class="pencil"
          data-v-d7c8997f=""
        />
        <ahi-button
          class="todo-edit"
          data-v-d7c8997f=""
        >
           Edit 
        </ahi-button>
        <!-- &lt;ahi-button  class="todo-edit" size="small" @click="todosStore.upperCaseTodo(todo.id)" &gt; UpperCase &lt;/ahi-button&gt; -->
        <ahi-checkbox
          class="todo-toggle"
          data-v-d7c8997f=""
          type="checkbox"
        />
        <li
          class="incomplete id task"
          data-v-d7c8997f=""
          style="font-size: 1.2em;"
        >
          test123
        </li>
      </div>
    `);
  });
});

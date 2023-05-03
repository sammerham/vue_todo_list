// // same as below
import { mount } from "@vue/test-utils";

// import { shallowMount } from "@vue/test-utils"; // limit
// mount will load as many children as it wants.  while shallow will limit children to one level of children component;
import About from "@/views/About.vue";
describe("About.vue", () => {
  test("renders inner text", () => {
    // const wrapper = shallowMount(About);
    const wrapper = mount(About, {
      shallow: true,
    });
    console.log("wrapper--->>", wrapper.text());
    expect(wrapper.text()).toContain("about");
  });
});

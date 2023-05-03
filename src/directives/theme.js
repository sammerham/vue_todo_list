export default {
  beforeMount(el, binding) {
    if (binding.value === "wide") {
      el.style.width = "800px";
    } else if (binding.value === "narrow") {
      el.style.width = "300px";
    }
    // arguments
    if (binding.arg === "bold") {
      el.style.fontWeight = "bold";
    } else if (binding.arg === "italic") {
      el.style.fontStyle = "italic";
    }

    // modifiers
    if (binding.modifiers.uppercase) {
      el.style.fontSize = "4.2em";
    }
  },
};

//el --> the element the directive sits on
// binding --> an obj which contains args that are passed to the hook
// vnode --> allows you to refer directly to the node in the vDom if needed
// prevnode -> (applies to before Updated and Updated hooks only) vnode obj before directive was updated

// lifesycle
// beforeMount -> called when directive is first bound to the element and before parent component is mounted
// mounted -> called when the directive mounted to the doc
// beforeUpdate -> called before the directive is updated
// updated --> called after the directive is updated
// before Unmount -> called before the directive unmounted from the doc
// unmount -> called after the directive unmounted from the doc

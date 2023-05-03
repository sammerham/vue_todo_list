export default {
    beforeMount(el, binding) {
       

        // modifiers
        if(binding.modifiers.small){
            el.style.fontSize = "x-small"; 
        } else if (binding.modifiers.smaller){
            el.style.fontSize = "smaller"; 
        } else if (binding.modifiers.big){
            el.style.fontSize = "1.2em"; 
        } else if (binding.modifiers.bigger){
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
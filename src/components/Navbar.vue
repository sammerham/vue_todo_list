<template>
  <nav id="vue">
    <div class="menu-item">
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </div>
    <div class="menu-item">
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <div class="menu-item">
      <router-link :to="{ name: 'List' }">List</router-link>
    </div>
    <div class="menu-item">
      <router-link :to="{ name: 'Add' }">Add</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
  components: {},
};
</script>
<style>
nav {
  width: 100vw;
  background-color: #0d0d0e;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #fff;
  padding: 25px 40px;
  position: relative;
  text-align: center;
  border-bottom: 5px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #0d0d0e;
  border-bottom-color: #bb3030;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
.text-red {
  background-color: gray;
}
</style>

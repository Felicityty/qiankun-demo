<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/appVue">goToSubVue</router-link>
    </div>
    <router-view />
    <div id="container"></div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>

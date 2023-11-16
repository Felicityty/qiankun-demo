<template>
  <div id="app">
    <div>没错，我就是子应用2222</div>
    <div>终于找到我了</div>
    <div>等你等得好苦~</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "qiankun-sub2",
  components: {},
};
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
}
</style>

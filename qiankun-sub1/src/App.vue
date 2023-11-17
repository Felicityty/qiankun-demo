<template>
  <div id="app">
    <div>没错，我就是子应用11111</div>
    <div>终于找到我了</div>
    <div>等你等得好苦~</div>
    <div>abc: {{ abc }}</div>
    <button @click="changeValue">改变abc为789</button>
    <router-view></router-view>
  </div>
</template>

<script>
import action from "@/qiankun/action";
export default {
  name: "qiankun-sub1",
  components: {},
  data() {
    return {
      abc: 0,
    };
  },
  mounted() {
    action.onGlobalStateChange((state) => {
      this.abc = state;
    }, true);
  },
  methods: {
    changeValue() {
      action.setGlobalState({ abc: 789 });
    },
  },
};
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
}
</style>

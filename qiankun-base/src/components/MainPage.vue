<template>
  <div class="main-content">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="/app/vue1">
        <span slot="title">vue1</span>
      </el-menu-item>
      <el-menu-item index="/app/vue2">
        <span slot="title">vue2</span>
      </el-menu-item>
    </el-menu>
    <div id="subContainer"></div>
    <router-view />
  </div>
</template>

<script>
import { start } from "qiankun";

export default {
  name: "MainPage",
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>

<style scoped>
</style>
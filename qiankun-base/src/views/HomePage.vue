<template>
  <div class="content">
    <h1 class="red">我是 Home 页面</h1>
    <div>这是{{ appName }}</div>
    <div>有{{ num }}页</div>
    <router-link to="/user">User</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["appName", "num"]),
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="right">
        <!-- <aside-box/> -->
        right
      </el-aside>
      <el-container>
        <el-header class="top">
          <!-- <header-box/> -->
          top
        </el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideVue from './aside/Index.vue';
import HeaderVue from './header/Index.vue';
export default {
  components: {
    'aside-box': AsideVue,
    'header-box': HeaderVue
  }
}
</script>

<style lang="less" scoped>
.common-layout {
  background-color: goldenrod;
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  &.fluid {
    width: 100%;
  }

  .right {
    background-color: aqua;
    width: 205px;
    flex: 1;
    overflow: auto;
    &.flex {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
  }
  .top {
    background-color: black;
  }
  .main {
    flex: 1;
    background:red;
    padding: 16px;
    overflow: auto;
    &.pt0 {
      padding-top: 0;
    }
  }
}
</style>

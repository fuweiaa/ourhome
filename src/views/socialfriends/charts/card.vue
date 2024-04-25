<template>
  <div>
    <p class="head">we are family</p>
    <el-scrollbar height="100vh">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">第{{ item }}条朋友圈</p>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.head {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
  background-color: #bae6f8;
  line-height: 2.2;
  background-image: url("src/image/1.png"), url('src/image/2.png');
  background-position: left center, right center;
  background-repeat: no-repeat, no-repeat;
  padding-left: 20px;
  padding-right: 20px;
  background-size: 200px auto, 200px auto;
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  width: auto;
}
</style>
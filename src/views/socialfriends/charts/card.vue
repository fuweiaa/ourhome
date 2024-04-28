<!--
 * @Author: yy
 * @Date: 2024-04-25 16:24:45
 * @LastEditors: yy
 * @LastEditTime: 2024-04-28 16:28:14
 * @FilePath: \bigevent-vue3\src\views\socialfriends\index.vue
-->
<template>
  <div id="datetime">
    <el-scrollbar height="100vh">
      <div v-for="item in 20" :key="item" class="scrollbar-demo-item">
        <p>第{{ item }}条朋友圈</p>
        <!-- <button @click="modifyItem(item)">修改内容</button> -->
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
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
  position: relative;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.select-buttons {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.select-buttons button {
  padding: 2px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
}

.select-buttons button:hover {
  background-color: #e0e0e0;
}
</style>
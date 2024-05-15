<!--
 * @Author: fuweiaa
 * @Date: 2024-04-28 16:50:03
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-30 13:18:08
 * @FilePath: \bigevent-vue3\src\views\socialfriends\charts\exportbutton.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">Action 1</el-dropdown-item>
        <el-dropdown-item command="b">Action 2</el-dropdown-item>
        <el-dropdown-item command="c">Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>


</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
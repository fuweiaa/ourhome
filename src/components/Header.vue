<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 16:13:50
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-23 16:32:39
 * @FilePath: \bigevent-vue3\src\components\Header.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
  <el-header class="header">
      <div class="leftpanel">
        <el-button type="primary" class="points social">朋友圈</el-button>
        <el-button type="success" class="points daynote">日记</el-button>
        <el-button type="info" class="points familyfuns">家庭趣事</el-button>
        <el-button type="warning" class="points eating">吃饭大转盘</el-button>
      </div>
      <div class="rightpanel">
        <el-button class="points">登录</el-button>
        <el-button class="points">退出</el-button>
      </div>
  </el-header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    background-color: bisque;
}
</style>

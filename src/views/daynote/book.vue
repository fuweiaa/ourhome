<!--
 * @Author: yy
 * @Date: 2024-04-29 16:40:45
 * @LastEditors: yy
 * @LastEditTime: 2024-04-29 16:40:14
 * @FilePath: \bigevent-vue3\src\views\daynote\index.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->

<template>
  <div class="book">
    <div class="cover">
      <div class="front"></div>
      <div class="back"></div>
    </div>
    <div class="pages">
      <p class="word">hhhhh！上当了吧</p>
    </div>
  </div>
</template>

<script>
export default {
  // 组件逻辑
}
</script>

<style scoped>
.book {
  width: 300px;
  height: 400px;
  perspective: 1000px;
}

.cover {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.back {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ccc;
  background-image: url("src/image/mi.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 300px auto;
}

.front {
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}

.pages {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  backface-visibility: hidden;
  display: none;
  pointer-events: none;
  /* 禁止页面内容影响鼠标事件 */
  background-image: url("src/image/pig.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 300px auto;
}

.word {
  color: rgb(255, 255, 255);
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
}

.book:hover .cover {
  transform: rotateY(180deg);
}

.book:hover .pages {
  display: block;
  /* 鼠标悬停时显示内容 */
  pointer-events: auto;
  /* 恢复鼠标事件 */
}
</style>
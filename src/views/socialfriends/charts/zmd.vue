<!--
 * @Author: fuweiaa
 * @Date: 2024-04-28 16:50:03
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-29 17:00:22
 * @FilePath: \bigevent-vue3\src\views\socialfriends\charts\zmd.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in receivedMessage" :key="item" class="container">
      <div class="img">
        <img :src="item.imgs" alt="图片无法正常加载">
      </div>
      <div class="title">
        <h1 class="medium">{{ item.copywriting }}</h1>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import EventBus from "@/utils/useEventBus";
import { onMounted, ref } from 'vue';

let receivedMessage = ref([{}

]);

// 在组件挂载后监听事件
onMounted(() => {
  EventBus.on('userInfo', (info: any) => {
    // 更新 receivedMessage 的值
    receivedMessage = info;
    console.log(receivedMessage);
  });
});
</script>



<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* 在主轴方向居中对齐 */
  align-items: center;
  /* 在交叉轴方向居中对齐 */


  .img {
    width: 160px;
    height: 180px;
    flex: 0.5;

    img {
      width: 80%;
      height: 100%;
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
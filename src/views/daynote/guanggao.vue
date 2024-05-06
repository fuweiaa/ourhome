<!--
 * @Author: yy
 * @Date: 2024-05-06 10:40:45
 * @LastEditors: yy
 * @LastEditTime: 2024-05-06 10:59:10
 * @FilePath: \bigevent-vue3\src\views\daynote\book.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->

<template>
    <div class="container" v-if="visible">
        <button class="close-button" @click="closeAdvertisement">×</button>
        <h1 class="xuanchuanyu">小哥哥在线翻牌</h1>
        <p class="aa">风里雨里，这里等你</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(true);

const closeAdvertisement = () => {
    visible.value = false;
};
</script>


<style scoped lang="scss">
.container {
    width: 100%;
    height: 200px;
    position: relative;
    border: 1px solid black;
    background-color: rgb(199, 199, 199);
    background-image: url("/assets/image/fw.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.close-button {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 30px;
    color: #333;
    outline: none;
}

.xuanchuanyu {
    position: relative;
    text-align: center;
    font-size: 46px;
    background: linear-gradient(45deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #ff00ff, #ff0000);
    background-size: 600% 600%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow-animation 4s linear infinite, blink-animation 1s alternate infinite;
}

@keyframes rainbow-animation {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}
@keyframes blink-animation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.aa {
    text-align: center;
}
</style>
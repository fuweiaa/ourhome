<!--
 * @Author: yy
 * @Date: 2024-04-29 16:39:45
 * @LastEditors: yy
 * @LastEditTime: 2024-04-29 16:40:14
 * @FilePath: \bigevent-vue3\src\views\daynote\index.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template id="myhead">
    <div class="container">
        <Daynotehead />
        <div class="content">
            <Book class="book-component" />
            <Draw />
            <Poem />
        </div>
        <div class="float-container" v-if="showGuanggao">
            <Guanggao @close="hideGuanggao"/>
        </div>
    </div>
     <Game />
</template>

<script setup lang="ts">
import Daynotehead from "../daynote/daynotehead.vue"
import Book from "../daynote/book.vue"
import Draw from "../daynote/draw.vue"
import Poem from "../daynote/poem.vue"
import Guanggao from "../daynote/guanggao.vue"
import Game from "../daynote/game/index.vue"
import { ref } from 'vue';

const showGuanggao = ref(true);

function hideGuanggao() {
  showGuanggao.value = false;
}
</script>

<style lang="scss" scoped>
#myhead {
    margin-left: 0%;
    margin-top: 0%;
    width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
}

.content {
    display: flex;
    width: 100%;
}

.component-container {
    display: flex;
}

.book-component {
    margin-right: 150px;
    /* 调整 Book 组件的右边距 */
}
.float-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* 确保悬浮容器在最顶层 */
}
.Draw {
    width: 30%;
}

.Poem {
    width: 30%;
}
</style>
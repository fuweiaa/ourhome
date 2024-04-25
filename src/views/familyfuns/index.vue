<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 16:46:55
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-25 14:35:58
 * @FilePath: \bigevent-vue3\src\views\familyfuns\index.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
    <div>小奇，欢迎来到朋友圈</div>
    <div class="container">
        <Card class="" v-for="(item, index) in infos" :key="index" :detail="item.detail">
        </Card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from './charts/card.vue';
let infos = ref([
    { title: "标题1", detail: "详情" },
    { title: "标题2", detail: "详情" },
    { title: "标题3", detail: "详情" },
    { title: "标题4", detail: "详情" },
    { title: "标题5", detail: "详情详情" },
    { title: "标题6", detail: "详情" },
])
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
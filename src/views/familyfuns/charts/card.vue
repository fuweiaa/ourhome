<!--
 * @Author: fuweiaa
 * @Date: 2024-04-25 11:00:45
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-25 11:17:13
 * @FilePath: \bigevent-vue3\src\views\familyfuns\charts\card.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
    <div class="container">
        <span>{{ props.detail }}</span>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// 定义接收的 props
const props = defineProps<{
    detail: string
}>()
</script>

<style lang="scss" scoped>
.container {
    width: 700px;
    height: 300px;
    background-color: #ea87f7;
    margin: 20px;
}
</style>
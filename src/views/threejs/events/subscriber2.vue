<template>
<div class="subscriber2">
    <h1>Subscriber 2</h1>
    <div>
      <p>Name: {{ store.info.name }}</p>
      <p>Email: {{ store.info.mail }}</p>
      <p>Phone: {{ store.info.phone }}</p>
    </div>
</div>
</template>

<script setup lang="ts">
import { useInfoStore } from '@/stores/eventest'
// 可以在组件中的任意位置访问 `store` 变量 
const store = useInfoStore()
</script>

<style lang="scss" scoped>
.subscriber2 {
  background-color: #d8e3e7;
  padding: 10px;
}
</style>